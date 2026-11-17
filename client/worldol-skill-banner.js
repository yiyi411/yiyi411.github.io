/*!
 * 世界OL · 技能演出/语音系统（原版单机）v1.7.4
 * =====================================================================
 * v1.7.4（2026-09-30）：战斗日志打点（web/battle-log.js，window.__wolLog guarded
 *   调用、未加载零影响）——calc-use（0251演算）/exec（0241回放）/voice-path
 *   （pcm|html回退）/pcm-ok/pcm-fail，全体技能停顿分析用。
 * =====================================================================
 * v1.7.0（2026-09-29 真机第五轮反馈）：飞景/流彩专属音乐库——
 *   voice2 由单曲改为曲库数组 ['fangzhu2.mp3','fangzhu1.mp3']（fangzhu1=用户新增
 *   专属音乐 2026-09-29），释放 Lv22 技能时**随机播放其中一首**；预热阶段曲库
 *   全量解码（WebAudio pcmCache 逐条），随机只在触发瞬间取一次（Math.random，
 *   纳秒级）。新增曲目只需：mp3 放 client/banner/<key>/ + gen-voice-data.mjs
 *   files 数组加文件名 + 重跑生成 → voice-data.js base64 内嵌（APK script 子资源）。
 *   性能评估：+82KB mp3（+110KB base64）；PCM 常驻内存约 0.4MB/首，两首 <1MB，
 *   预解码在进游戏空闲期完成，触发零延迟零管线——无可测性能影响。
 * v1.5.0（2026-09-28 真机第三轮反馈）：
 *   ① 设置面板（1312）内嵌语音开关按用户要求彻底移除——唯一入口=手机悬浮菜单
 *     （web/phone-menu.js）「技能语音：开/关」+ PC 单机菜单面板。
 *   ② 预热卡顿真根因修复：v1.4.6 armWarmRetry 每次手势都 preloadVoices → 每次都
 *     el.load() → load() 丢弃已解码音频数据 → 正式触发现场重新解码=技能前卡顿。
 *     现在：每元素一生只 load 一次；预热成功（__warmOk）后完全跳过。
 * 【当前模式：仅语音】2026-09-28 用户决定——
 *   官方 Spine 素材（BeiJing/XingXiang）里没有人物，纯特效横幅观感不佳，
 *   故取消动画演出，仅保留「霸气台词语音」：玩家释放 Lv22+ 气荡山河时播放语音，
 *   不加载任何 Spine 资源、不占用状态机、不延迟结算（与战斗并行，零阻塞）。
 *   ⚠ 动画演出代码与资源全部保留（封存）：注册表 mode 改 'banner' 即恢复完整演出；
 *     运行时亦可用 localStorage['worldol-banner-mode'] = 'banner' | 'voice' | 'off' 覆盖。
 *
 * 战斗链路（本客户端战斗全部本地演算+回放）：
 *   0251（战斗演算）prototype.doUseSkill(e,t,i) —— e=施法者(演算层对象,无vo) t=技能对象{id,level,name}
 *     → 仅观察（ring 记录 casterPos/skillId/level；⚠ 阵营判定不可在此做，演算层无 vo）；
 *   0241（回放控制）prototype.action() 每帧 → BATTLE_CONTROL_SKILL → executeSkill()
 *     → 在此判定：阵营用 battleBelong.getPlayerByPos(byte0).vo.isMyPlayer 官方判定
 *       （与浮动跳字同款渲染层判定），再按 pos+skillId+level 匹配 ring。
 *       · voice 模式（默认）：立即放行原函数（结算照常）→ 语音与战斗完全并行；
 *       · banner 模式（封存）：演出期间反复 this.delayTime=1 借用原生延迟机制让该控制空转，
 *         演出完成/跳过后放行原函数 → 子控制链入队 → 攻击动画+伤害跳字照常播放。
 *         ⇒ 先演出后结算；跳过只跳演出，不跳结算。
 *
 * 语音（当前唯一生效路径）：client/banner/<key>/<voiceTracks>.mp3（默认 voice2=fangzhu2.mp3
 *       霸气台词）。复用 Audio 元素 + 空闲预热（进游戏约 2s 后 load）→ 首次释放零延迟；
 *       连续触发时打断重播（不叠加多路）；自动播放被拦时挂一次性 pointerdown 补播。
 * 演出资源（封存，仅 mode='banner' 才加载）：res.js 内嵌骨骼文本（绕手机端 XHR 限制）+
 *       两遍式手动建纹理 + SceneRenderer 渲染（背景 cover、特效 contain，上层叠人物立绘）；
 *       ⚠ 这些可视化资源已不打包进 APK（tools/build-apk-assets.mjs INCLUDE_BANNER_ASSETS=false）。
 * 诊断：__worldolSkillBanner.status() / .test('qidangshanhe') / .test('qidangshanhe','banner') / .release()。
 */
(function () {
  'use strict';
  if (window.__worldolSkillBanner) return;

  // ============ 演出注册表（数据驱动，可扩展） ============
  // 触发条件：我方玩家释放该技能且技能等级 >= minLevel。
  // bgAnim/fxAnim 为 Spine 动画名；资源为 client/banner/<key>/<name>.json(+atlas+png)。
  // .skel 二进制需先用 tools/skel-to-json.mjs 转为 spine 3.6 JSON（已验证无损）。
  var BANNER_SKILLS = {
    8103: {
      key: 'qidangshanhe', name: '气荡山河', minLevel: 22,
      // 【模式】'voice'=仅播语音（当前，2026-09-28 决定，零阻塞）
      //          'banner'=完整动画演出（封存，需把演出资源打包回 APK）
      //          'off'=完全关闭
      // 运行时可用 localStorage['worldol-banner-mode'] 覆盖（手机端无需改代码即可切换）。
      mode: 'voice',
      voiceTracks: ['voice2'],   // 仅语音模式播的音轨：'voice'=剑鸣音效 / 'voice2'=霸气台词
      bg: 'BeiJing', bgAnim: 'BeiJing',      // 背景层：铺满(cover)循环
      fx: 'XingXiang', fxAnim: 'TeShu',      // 特效层：适配(contain)一次性，播完演出结束
      voice: 'XingXiang.mp3',
      // 台词人声专属音乐库（v1.7.0）：释放 Lv22 技能时随机播放其一；
      //   fangzhu2=原台词（用户确认 2026-09-28），fangzhu1=新增专属音乐（用户 2026-09-29）
      voice2: ['fangzhu2.mp3', 'fangzhu1.mp3'],
      // 离线测量的内容 AABB（tools/measure-skel-bounds.mjs，40 帧全时间轴采样联合）
      // spine 3.6 数据无 x/y 字段，运行时按此精确居中
      bgBox: { x: -2690, y: -947, w: 4990, h: 1697 },
      fxBox: { x: -1713, y: -890, w: 4890, h: 1277 },
      // 横幅宽高比：XingXiang 官方骨架尺寸 4110.55×1706.49 → 2.409（源素材横屏 7:4 附近的宽幅构图）。
      // 用测量 fxBox 的 4890×1277(3.83) 会偏扁——部分帧特效铺展开撑宽了 AABB，但人物头像在中段帧，
      // 按 3.83 做条会把头像裁掉（2026-09-28 用户反馈"没有显示人物头像"）。按官方比例才包裹得住全身。
      bannerAspect: 2.409,
      fxScale: 1,           // 特效层缩放微调（1=contain 完整显示）
      bannerRatio: 'auto',  // 'auto'=横幅高度按 bannerAspect（或内容宽高比）自适应；数字=屏高比例
      bannerTop: 0.10,      // 横幅顶部位于可视区 10% 处（血条/状态栏之下）
      // 人物立绘层（v1.1.0）：透明 PNG，绘制顺序=背景 → 立绘 → 特效（SceneRenderer.drawTexture）
      hero: 'hero.png',
      heroScale: 1.12,      // 立绘高度=横幅高×1.12，顶部溢出由 overflow:hidden 裁掉（树枝硬边贴出画面）
      heroSlide: 0.22,      // 入场从左侧滑入身位（×立绘宽），0=不滑
      heroFade: 0.45,       // 入场淡入+滑行时长（秒），easeOutCubic
    },
    // ===== 8107 集解·破竹（春秋·孤行 9300015 附带技能，v1.7.22 新增）=====
    // 用户需求「触发条件不限技能等级」→ minLevel:1（技能本身就是 1 级）。
    // 只有语音、没有演出资源（client/banner/chunqiuguxing/ 只放两个 mp3），
    // 因此固定 mode:'voice'；不使用 bg/fx/hero 字段，语音模式下这些不会被读取。
    8107: {
      key: 'chunqiuguxing', name: '集解·破竹', minLevel: 1,
      mode: 'voice',
      voiceTracks: ['voice2'],
      voice2: ['spmiewu1.mp3', 'spmiewu2.mp3'],   // 双曲库，触发时随机取一
    },
    // ===== 8108 星落秋风（玄枢卧龙·八阵天章 9300016 附带技能，第13批 2026-10-02；2026-10-03 定名）=====
    // 用户需求「触发条件不限技能等级」→ minLevel:1。仅语音，6 曲随机。
    8108: {
      key: 'bazhentianzhang', name: '星落秋风', minLevel: 1,
      mode: 'voice',
      voiceTracks: ['voice2'],
      voice2: ['bazhentianzhang1.mp3', 'bazhentianzhang2.mp3', 'bazhentianzhang3.mp3',
               'bazhentianzhang4.mp3', 'bazhentianzhang5.mp3', 'bazhentianzhang6.mp3'],
    },
    // ===== 8109 孤锋·破晓（虎威·天纵 9300017 附带技能，第13批 2026-10-02）=====
    // 仅语音，4 曲随机。
    8109: {
      key: 'huweitianzong', name: '孤锋·破晓', minLevel: 1,
      mode: 'voice',
      voiceTracks: ['voice2'],
      voice2: ['huweitianzong1.mp3', 'huweitianzong2.mp3', 'huweitianzong3.mp3', 'huweitianzong4.mp3'],
    },
  };

  var STATE = { IDLE: 'Idle', LOADING: 'Loading', PLAYING: 'Playing', SKIPPING: 'Skipping', RESOLVING: 'Resolving', DONE: 'Done' };
  var machine = { state: STATE.IDLE, current: null, queue: [] };
  var RES_ROOT = 'banner/';
  var resources = {};           // key -> {def, atlas, bgData, fxData, textures, ready, promise}
  var lastReleaseCheck = 0;
  var skillRing = [];           // doUseSkill 观察记录（最近 8 条）
  var stats = { doUseSkill: 0, executes: 0, bannerFired: 0, voiceFired: 0, bannerDone: 0, skipped: 0, queued: 0, errors: 0, lastErr: '' };
  var hooks = { calc: false, play: false, sound: false };
  var bgm = { instance: null, ducked: false, prevVolume: null };
  var voiceEl = null, voiceEl2 = null;

  function log() { try { console.log.apply(console, ['[worldol-banner]'].concat([].slice.call(arguments))); } catch (e) {} }
  // 【v1.7.4】战斗日志打点（web/battle-log.js 提供；未加载时静默跳过）
  function blog(tag, info) { try { if (window.__wolLog) window.__wolLog(tag, info); } catch (e) {} }
  // 【v1.7.1】帧剖析打点：quality v2.9.1 提供 window.__wolProf（未就绪时静默跳过）
  function profMark(name) {
    try { if (window.__wolProf && window.__wolProf.mark) window.__wolProf.mark(name); } catch (e) {}
  }

  // ================= 七、音频 =================
  function stopVoice() {
    if (voiceEl) { try { voiceEl.pause(); voiceEl.src = ''; } catch (e) {} voiceEl = null; }
    if (voiceEl2) { try { voiceEl2.pause(); voiceEl2.src = ''; } catch (e) {} voiceEl2 = null; } // 台词轨
  }
  function playVoice(url, rate) {
    stopVoice();
    try {
      var el = new Audio(url);
      el.volume = 1; el.playbackRate = rate || 1;
      voiceEl = el;
      var p = el.play(); if (p && p.catch) p.catch(function () {});
      return el;
    } catch (e) { stats.errors++; return null; }
  }
  // 台词人声（独立音轨，与音效并行；跳过/结束时随 stopVoice 一并停止）
  function playVoice2(url, rate) {
    try {
      var el = new Audio(url);
      el.volume = 1; el.playbackRate = rate || 1;
      voiceEl2 = el;
      var p = el.play(); if (p && p.catch) p.catch(function () {});
      return el;
    } catch (e) { return null; }
  }
  function bgmDuck(on) {
    try {
      if (!hooks.sound || !bgm.instance || !bgm.instance._bgMusic) return;
      var m = bgm.instance._bgMusic;
      if (on && !bgm.ducked) { bgm.prevVolume = m.volume; m.volume = (bgm.prevVolume == null ? 1 : bgm.prevVolume) * 0.7; bgm.ducked = true; }
      else if (!on && bgm.ducked) { m.volume = bgm.prevVolume == null ? 1 : bgm.prevVolume; bgm.ducked = false; }
    } catch (e) { stats.errors++; }
  }

  // ================= 仅语音模式（当前默认，2026-09-28） =================
  // 与演出模式完全解耦：不加载 res.js/骨骼/纹理（省 ~30MB 流量与解析时间、低端机更稳），
  // 不占用状态机、不设 delayTime → 语音与战斗结算完全并行（零阻塞、零掉帧）。
  // 复用 Audio 元素缓存：首次触发即响（预热在进游戏后 2s 完成，不走网络重新加载）。
  var voiceCache = {};      // url -> HTMLAudioElement
  var voiceStats = { plays: 0, fails: 0, preloaded: 0, last: '', ready: 0, pcm: 0 };
  var modeCache = null, modeReadTs = 0;
  // 运行时切换模式（voice|banner|off）：写 localStorage + 立刻失效缓存，约 2s 内生效
  function setMode(m) {
    try {
      localStorage.setItem('worldol-banner-mode', m);
      modeCache = m; modeReadTs = Date.now();
      log('模式切换为', m);
      return '模式已设为 ' + m;
    } catch (e) { return '设置失败: ' + e; }
  }
  // —— 语音开关入口（v1.5.0 定案）——
  // ⚠ 设置面板（头像→游戏设置）内嵌开关已按用户要求**彻底移除**（v1.4.x 的 DOM
  //   定位开关在真机上错位/丑，2026-09-28 用户否决）。唯一入口：
  //   手机端 = web/phone-menu.js 悬浮菜单「技能语音：开/关」；
  //   两端通用的游戏内入口 = 「单机功能」菜单（它镜像 #panel-body 里的按钮）。
  // —— 开关挂载点（v1.7.17 面板删除后）——
  // #panel-body 已随「单机菜单·v0.6.4」抽屉一起变成**不可见**的按钮清单容器
  // （template.html / web/index.html 静态 DOM），本开关注入其中，由
  // native-features.js 的 openMenu() 镜像进游戏内菜单；与手机菜单共用 setMode。
  var menuRefresh = null;
  function mountPanelMenuToggle() {
    try {
      if (document.getElementById('worldol-voice-menu-row')) return;
      var body = document.getElementById('panel-body');
      if (!body) return;
      var actions = body.querySelector('.save-actions');
      var row = document.createElement('div');
      row.id = 'worldol-voice-menu-row';
      row.style.cssText = 'display:flex;align-items:center;justify-content:space-between;gap:8px;margin:10px 0 0;';
      var lab = document.createElement('span');
      lab.textContent = '技能语音（释放技能时播台词）';
      lab.style.cssText = 'font:13px/1.4 "Microsoft YaHei",system-ui,sans-serif;color:#cdd8e6;';
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.style.cssText = 'flex:0 0 auto;min-width:64px;padding:6px 0;border:0;border-radius:8px;' +
        'font:13px/1 "Microsoft YaHei",system-ui,sans-serif;cursor:pointer;';
      function paintBtn() {
        try {
          var on = modeOf(BANNER_SKILLS[8103]) !== 'off';
          btn.textContent = on ? '开启' : '关闭';
          btn.style.background = on ? '#2b6a45' : '#3a4654';
          btn.style.color = '#e8eef6';
        } catch (eP) {}
      }
      btn.addEventListener('click', function (ev) {
        ev.preventDefault(); ev.stopPropagation();
        var on = modeOf(BANNER_SKILLS[8103]) !== 'off';
        setMode(on ? 'off' : 'voice');
        paintBtn();
      });
      paintBtn();
      menuRefresh = paintBtn;
      row.appendChild(lab); row.appendChild(btn);
      if (actions && actions.parentNode) actions.parentNode.insertBefore(row, actions.nextSibling);
      else body.insertBefore(row, body.firstChild);
      // 诊断行（默认隐藏；卡面/挂钩排障用——有数据才显示）
      var diag = document.createElement('div');
      diag.id = 'worldol-voice-menu-diag';
      diag.style.cssText = 'margin:4px 0 0;font:11px/1.5 Consolas,monospace;color:#8fa1b3;word-break:break-all;display:none;';
      if (row.nextSibling) body.insertBefore(diag, row.nextSibling); else body.appendChild(diag);
    } catch (e) {}
  }
  function refreshPanelMenu() {
    try { if (menuRefresh) menuRefresh(); } catch (e) {}
    try {
      var diag = document.getElementById('worldol-voice-menu-diag');
      if (!diag) return;
      var g = window.__worldolMythicGlow && window.__worldolMythicGlow.status();
      var c = window.__worldolMythicCombat && window.__worldolMythicCombat.status();
      var txt = '';
      if (g) txt += '卡面: 挂钩' + g.iconWrapped + ' 生成' + g.holoBuilt + ' 应用' + (g.holoApplied || 0) +
        (g.iconDiag ? ' | ' + g.iconDiag : '');
      if (c && c.installed) txt += (txt ? ' | ' : '') + '战斗: 副本' + c.hooked;
      if (txt) { diag.textContent = txt; diag.style.display = 'block'; }
    } catch (e) {}
  }
  // localStorage 覆盖（每 2s 重读一次：手机端改值后无需重启游戏，约 2s 内生效）
  function modeOverride() {
    var now = Date.now();
    if (now - modeReadTs > 2000) {
      modeReadTs = now;
      try { modeCache = localStorage.getItem('worldol-banner-mode') || ''; } catch (e) { modeCache = ''; }
    }
    return modeCache;
  }
  function modeOf(def) {
    var m = modeOverride() || (def && def.mode) || 'voice';
    return (m === 'banner' || m === 'off') ? m : 'voice';
  }
  // 语音 URL 基准：优先脚本自身所在目录（兼容任意挂载路径/子目录），退化到相对当前文档
  var SELF_BASE = (function () {
    try {
      var ss = document.getElementsByTagName('script');
      for (var i = ss.length - 1; i >= 0; i--) {
        var src = ss[i].src || '';
        if (src.indexOf('worldol-skill-banner') >= 0) return src.replace(/[?#].*$/, '').replace(/[^\/]*$/, '');
      }
    } catch (e) {}
    return '';
  })();
  function tracksOf(def) {
    var t = def && def.voiceTracks;
    if (!t) t = def && def.voice2 ? ['voice2'] : ['voice'];
    if (typeof t === 'string') t = [t];
    return t;
  }
  // 音轨→URL。v1.7.0：轨值可为数组（专属音乐库）——
  //   pickOne=false（预热）：库内全量展开，逐条预解码/预载；
  //   pickOne=true （播放）：每条轨随机取一首（Math.random 一次，纳秒级）。
  //   v1.7.2：随机优先从**已解码（PCM 就绪）**的曲目里选——真机诊断 PCM2/3 实锤
  //   解码可能晚到/单次失败，旧逻辑随机到未解码曲目 → 回退 HTMLAudio → 管线卡顿。
  function voiceSrcs(def, pickOne) {
    var out = [], list = tracksOf(def);
    for (var i = 0; i < list.length; i++) {
      var f = def[list[i]];
      if (!f) continue;
      if (typeof f !== 'string' && f.length) {
        if (pickOne) {
          var pool = [], all = [];
          for (var j = 0; j < f.length; j++) {
            if (!f[j]) continue;
            var u = SELF_BASE + RES_ROOT + def.key + '/' + f[j];
            all.push(u);
            if (pcmCache[u]) pool.push(u);          // 已解码优先
          }
          if (!pool.length) pool = all;             // 全未就绪：照旧随机（罕见，预热中）
          if (pool.length) out.push(pool[Math.floor(Math.random() * pool.length)]);
        } else {
          for (var j2 = 0; j2 < f.length; j2++) if (f[j2]) out.push(SELF_BASE + RES_ROOT + def.key + '/' + f[j2]);
        }
      } else out.push(SELF_BASE + RES_ROOT + def.key + '/' + f);
    }
    return out;
  }
  function ensureVoiceEl(url) {
    var el = voiceCache[url];
    if (el) return el;
    try {
      el = new Audio(url);
      el.preload = 'auto';
      el.volume = 1;
      voiceCache[url] = el;
      return el;
    } catch (e) { voiceStats.fails++; stats.lastErr = 'voice-el:' + e; return null; }
  }
  // 空闲预热：加载并**静音试播一遍**（v1.4.5）——真机首次 play() 需要解码整段 mp3 并
  // 建立音频管线，低端机会卡 100~500ms（用户实测「技能使用前明显卡顿」）。
  // 预载期静音播一遍后立刻暂停归零，正式触发时零解码、零管线建立，即点即响。
  // ⚠⚠ v1.5.0 关键修复：已预热成功的元素**绝不再 load()**——load() 会丢弃已解码
  // 音频数据并把 readyState 打回 0。v1.4.6 的 armWarmRetry 每次用户手势都调
  // preloadVoices → 每次都 el.load() → 预热成果反复作废 → 正式触发时现场重新解码
  // =「释放技能还是明显卡顿」的真根因（v1.4.6 真机第三轮实锤）。
  function preloadVoices() {
    if (modeOverride() === 'off') return 0;
    var n = 0;
    for (var k in BANNER_SKILLS) {
      var def = BANNER_SKILLS[k];
      if (!def || modeOf(def) !== 'voice') continue;
      var urls = voiceSrcs(def);
      for (var i = 0; i < urls.length; i++) {
        var el = ensureVoiceEl(urls[i]);
        try { warmWebAudio(urls[i]); } catch (eW) {}   // WebAudio 预解码（base64 → AudioBuffer）
        if (!el) continue;
        try {
          if (el.__warmOk && el.readyState >= 2) { n++; continue; }   // 已预热：直接跳过（不 load 不 play）
          if (!el.__loadCalled) { try { el.load(); } catch (e) {} el.__loadCalled = true; }  // 每元素一生只 load 一次
          // 静音试播预热解码（失败无碍：正式播放路径不受影响，只是可能首响略卡）
          if (!el.__warmPlayed) {
            el.__warmPlayed = true;
            el.muted = true;
            var pw = el.play();
            if (pw && pw.then) {
              pw.then(function () {
                try { this.pause(); this.currentTime = 0; this.muted = false; this.__warmOk = true; } catch (eW) {}
              }.bind(el)).catch(function () {
                // 预热被自动播放策略拒绝 → 复位标记，等用户手势后重试
                //（数据已 load，重试只重播、绝不重复 load）
                try { this.muted = false; this.__warmPlayed = false; } catch (eW2) {}
              }.bind(el));
            } else {
              try { el.pause(); el.currentTime = 0; el.muted = false; el.__warmOk = true; } catch (eW3) {}
            }
          }
        } catch (eWarm) {}
        n++; voiceStats.preloaded++;
      }
    }
    return n;
  }
  // v1.4.6：预热若被自动播放策略拒绝，靠用户手势重试（玩家点屏幕很频繁，
  // 进战斗前必然已成功预热）。20 次上限，全部成功后不再做事（__warmPlayed 挡住）。
  function armWarmRetry() {
    if (window.__worldolVoiceWarmRetry) return;
    window.__worldolVoiceWarmRetry = true;
    var tries = 0;
    var h = function () {
      if (++tries > 20) {
        document.removeEventListener('touchend', h, true);
        document.removeEventListener('pointerdown', h, true);
        return;
      }
      try { ensureAudioCtx(); } catch (eC) {}   // 手势期顺带 resume AudioContext（自动播放策略）
      try { preloadVoices(); } catch (e) {}
    };
    document.addEventListener('touchend', h, true);
    document.addEventListener('pointerdown', h, true);
  }
  // 自动播放被拦（无用户手势上下文）→ 挂一次性手势监听补播，不丢失这次技能音效
  function armResume(el) {
    if (!el || el.__resumeArmed) return;
    el.__resumeArmed = true;
    var h = function () {
      try { document.removeEventListener('pointerdown', h, true); } catch (e) {}
      el.__resumeArmed = false;
      try { var p = el.play(); if (p && p.catch) p.catch(function () {}); } catch (e) {}
    };
    try { document.addEventListener('pointerdown', h, true); } catch (e) {}
  }
  // —— WebAudio 零延迟路径（v1.6.0，技能卡顿根治）——
  // HTMLAudio.play() 即使数据已预热，在低端 WebView 上仍要重建音频管线/回调，
  // 触发瞬间掉帧（真机「放技能卡顿一下」）。改走 WebAudio：base64 内嵌 mp3
  // （banner/voice-data.js，script 子资源 → APK 虚拟域名安全）→ decodeAudioData
  // 一次解码 → 触发时 AudioBufferSourceNode.start() 纯内存调度（<1ms、零管线）。
  // HTMLAudio 保留为回退（voice-data.js 缺失 / WebAudio 不可用 / 解码失败）。
  var actx = null, pcmCache = {}, lastPcmSrc = null;
  function ensureAudioCtx() {
    if (!actx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try { actx = new AC(); } catch (e) { return null; }
    }
    if (actx.state === 'suspended') { try { actx.resume(); } catch (eR) {} }
    return actx;
  }
  function base64ToArrayBuffer(b64) {
    var bin = atob(b64), u8 = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
    return u8.buffer;
  }
  function warmWebAudio(url) {
    if (pcmCache[url] || !window.__worldolVoiceData) return;
    var name = url.split('?')[0].split('/').pop();
    var b64 = window.__worldolVoiceData[name];
    if (!b64) return;
    var ctx = ensureAudioCtx();
    if (!ctx || !ctx.decodeAudioData) return;
    try {
      ctx.decodeAudioData(base64ToArrayBuffer(b64), function (buf) {
        pcmCache[url] = buf;
        voiceStats.pcm = Object.keys(pcmCache).length;
        profMark('pcm');                            // 【v1.7.1】解码完成打点
        blog('pcm-ok', name);
        log('WebAudio 预解码完成', name);
      }, function () {
        voiceStats.fails++; stats.lastErr = 'decode:' + name;
        try { profMark('pcmfail:' + name); } catch (eM) {}   // 【v1.7.3】解码失败可见（真机 PCM2/3 定位）
        blog('pcm-fail', name);
        log('WebAudio 解码失败', name);
      });
    } catch (eD) { stats.lastErr = 'decode:' + eD; }
  }
  function playPcm(url) {
    var ctx = ensureAudioCtx();
    var buf = pcmCache[url];
    if (!ctx || !buf) return false;
    try {
      if (lastPcmSrc) { try { lastPcmSrc.stop(); } catch (eS) {} lastPcmSrc = null; }
      var src = ctx.createBufferSource();
      src.buffer = buf;
      src.connect(ctx.destination);
      src.start(0);
      lastPcmSrc = src;
      voiceStats.plays++; voiceStats.last = url;
      profMark('voice:pcm');                        // 【v1.7.1】打点（pcm=零延迟路径）
      return true;
    } catch (e) { voiceStats.fails++; stats.lastErr = 'pcm:' + e; return false; }
  }
  function playVoiceNow(url) {
    // 首选 WebAudio（零延迟）；未解码成功则回退 HTMLAudio
    if (playPcm(url)) { blog('voice-path', 'pcm ' + url.split('/').pop()); return 'pcm'; }
    profMark('voice:html');                         // 【v1.7.1】回退 HTMLAudio = 卡顿嫌疑路径
    blog('voice-path', 'html回退 ' + url.split('/').pop());   // 【v1.7.4】回退=停顿嫌疑，进日志
    var el = ensureVoiceEl(url);
    if (!el) return null;
    try {
      el.pause();
      // 仅在需要回卷时才 seek：无谓的 currentTime 赋值在部分 WebView 上会触发同步寻道卡顿
      if (el.currentTime > 0) { try { el.currentTime = 0; } catch (eS) {} }
      el.volume = 1;
      el.playbackRate = 1;
      var p = el.play();
      if (p && p.catch) p.catch(function (err) {
        voiceStats.fails++; stats.lastErr = 'voiceplay:' + err;
        log('语音自动播放被拦，挂手势补播', url);
        armResume(el);
      });
      voiceStats.plays++; voiceStats.last = url;
      return el;
    } catch (e) { voiceStats.fails++; stats.lastErr = 'voice:' + e; return null; }
  }
  function stopVoices() {
    for (var url in voiceCache) {
      try {
        var el = voiceCache[url];
        el.pause();
        if (el.currentTime > 0) el.currentTime = 0;   // 已在 0 时不 seek（无谓 seek 在部分 WebView 上有同步开销）
      } catch (e) {}
    }
  }
  // 语音触发（同步、无 Promise、无动画）：打断上一句重播，多音轨（音效+台词）并行
  function playVoiceOnly(def) {
    try { preloadVoices(); } catch (eP) {}   // 【v1.7.2】每次触发补一次预热（已就绪的全部跳过；补漏解码）
    var urls = voiceSrcs(def, true);   // 【v1.7.0】音乐库随机取一（v1.7.2 优先已解码）
    if (!urls.length) { stats.lastErr = 'voice:注册表无音轨'; return 0; }
    stopVoices();
    for (var i = 0; i < urls.length; i++) playVoiceNow(urls[i]);
    log('播放语音', def.name, urls.length, '轨');
    return urls.length;
  }
  function voiceReadyState() {
    var max = 0;
    for (var url in voiceCache) { try { if (voiceCache[url].readyState > max) max = voiceCache[url].readyState; } catch (e) {} }
    voiceStats.ready = max;
    return max;
  }

  // ================= 资源加载（预加载 + 释放 + 失败重试） =================
  // 关键：加载与渲染共用同一个 WebGL context（纹理句柄绑定 context，跨 context 无效）。
  // 手机端不走 XHR（虚拟域名拦截下 downloadText 的 status!=200 校验会失败）：
  // 文本资源由 res.js（script 标签，与游戏本体同机制）提供，纹理用 Image+GLTexture 手动构建。
  // 失败不缓存 promise：瞬时失败（如低端机内存压力）下次触发自动重试，否则演出永久失效。
  function ensureResJs(def, cb) {
    var store = window.__WORLDOL_BANNER_RES;
    if (store && store[def.key]) return cb(true);
    var sc = document.createElement('script');
    sc.src = RES_ROOT + def.key + '/res.js';
    sc.onload = function () { var s = window.__WORLDOL_BANNER_RES; cb(!!(s && s[def.key])); };
    sc.onerror = function () { cb(false); };
    document.head.appendChild(sc);
  }
  // 两遍式 atlas 构建（同官方 loadTextureAtlas 样板）：先占位拿页名，页图 Image 加载成 GLTexture 后重建
  function buildAtlas(r, atlasText, onAtlas) {
    try {
      var pages = [];
      var ph = document.createElement('img'); ph.width = 16; ph.height = 16;
      new spine.TextureAtlas(atlasText, function () { return new spine.FakeTexture(ph); }); // 校验文本
      new spine.TextureAtlas(atlasText, function (p) { pages.push(p); return new spine.FakeTexture(ph); });
      var textures = {}, left = pages.length, failed = false;
      if (!left) return onAtlas(null);
      pages.forEach(function (p) {
        var img = new Image();
        img.onload = function () {
          try { textures[p] = new spine.webgl.GLTexture(r.context, img); } catch (e) { failed = true; }
          if (--left === 0) onAtlas(failed ? null : new spine.TextureAtlas(atlasText, function (q) { return textures[q]; }));
        };
        img.onerror = function () { failed = true; if (--left === 0) onAtlas(null); };
        img.src = r.base + p;
      });
    } catch (e) { stats.lastErr = 'atlas:' + e; onAtlas(null); }
  }
  function buildSkeletonFrom(atlas, skelObj) {
    if (!atlas || !skelObj) throw new Error('骨架输入为空');
    var loader = new spine.SkeletonJson(new spine.AtlasAttachmentLoader(atlas));
    var data = loader.readSkeletonData(skelObj);
    var skel = new spine.Skeleton(data);
    skel.updateWorldTransform();
    return { data: data, skeleton: skel, contentBox: null, firstAnim: data.animations.length ? data.animations[0].name : null };
  }
  function loadResources(def) {
    var r = resources[def.key];
    if (r && r.ready) return Promise.resolve(r);
    if (r && r.promise) return r.promise;
    r = resources[def.key] = { def: def, ready: false, gl: null, canvas: null, context: null, renderer: null,
      bgSkeleton: null, fxSkeleton: null, bgState: null, fxState: null, assetManager: null, base: RES_ROOT + def.key + '/' };
    var fail = function (tag, e) {
      stats.errors++; stats.lastErr = tag + ':' + e; log(tag + '失败', e);
      r.attempt = (r.attempt || 0) + 1;
    };
    var p = new Promise(function (resolve) {
      // 完成收口：未就绪 → 延迟清掉缓存 promise（此时 r.promise 尚未/刚赋值，延迟删保证生效），
      // 下次触发自动重试；瞬时失败（低端机内存压力等）不再永久失效。
      var done = function () {
        if (!r.ready) setTimeout(function () { if (!r.ready) delete r.promise; }, 0);
        resolve(r);
      };
      try {
        if (!window.spine || !spine.webgl) { log('spine 运行时未就绪', def.key); return done(); }
        var canvas = document.createElement('canvas');
        var gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false, antialias: true, preserveDrawingBuffer: false });
        if (!gl) { log('WebGL 不可用', def.key); return done(); }
        var context = new spine.webgl.ManagedWebGLRenderingContext(gl);
        canvas.__worldolContext = context;
        r.canvas = canvas; r.context = context; r.gl = gl;
        ensureResJs(def, function (ok) {
          if (!ok) { fail('resjs', 'res.js 加载失败'); return done(); }
          var emb = window.__WORLDOL_BANNER_RES[def.key];
          var voice = new Audio(r.base + def.voice); voice.preload = 'auto';
          var waited = 0;
          (function wait() {
            waited++;
            if (voice.readyState >= 2 || waited > 25) { // 语音最多等 3s，播放失败走运行时 catch
              try {
                r.bgAtlas = null; r.fxAtlas = null;
                buildAtlas(r, emb.bgAtlas, function (a1) {
                  buildAtlas(r, emb.fxAtlas, function (a2) {
                    try {
                      r.bgAtlas = a1; r.fxAtlas = a2;
                      r.bgSkeleton = buildSkeletonFrom(a1, emb.bgSkel);
                      r.fxSkeleton = buildSkeletonFrom(a2, emb.fxSkel);
                      r.bgSkeleton.contentBox = def.bgBox || null;
                      r.fxSkeleton.contentBox = def.fxBox || null;
                      r.bgState = newState(r.bgSkeleton);
                      r.fxState = newState(r.fxSkeleton);
                      r.voiceUrl = r.base + def.voice;
                      r.ready = r.bgSkeleton && r.fxSkeleton;
                      if (!r.ready) fail('skeleton', '骨架构建为空');
                      lastReleaseCheck = Date.now();
                      // 人物立绘（不阻塞 ready：失败仅缺人物层，演出照播）
                      if (def.hero && r.ready) {
                        var hi = new Image();
                        hi.onload = function () {
                          try { r.heroImg = hi; r.heroTexture = new spine.webgl.GLTexture(r.context, hi); } catch (e) { log('hero 纹理失败', e); }
                        };
                        hi.onerror = function () { log('hero 图加载失败', def.hero); };
                        hi.src = r.base + def.hero;
                      }
                    } catch (e) { fail('skeleton', e); }
                    done();
                  });
                });
              } catch (e) { fail('skeleton', e); done(); }
            } else setTimeout(wait, 120);
          })();
        });
      } catch (e) { fail('load', e); done(); }
    });
    r.promise = p;
    return p;
  }
  function newState(box) {
    var sd = new spine.AnimationStateData(box.data);
    var st = new spine.AnimationState(sd);
    return st;
  }
  function releaseResources(key) {
    var r = resources[key];
    if (!r) return;
    try {
      if (r.renderer) { r.renderer.dispose(); r.renderer = null; }
      if (r.canvas && r.canvas.parentNode) r.canvas.parentNode.removeChild(r.canvas);
      if (r.canvas && r.canvas.__worldolContext) { r.canvas.__worldolContext.dispose(); r.canvas.__worldolContext = null; }
      // atlas 纹理与 AssetManager 持有的 GPU 资源，dispose 释放
      try {
        for (var ai = 0; ai < 2; ai++) {
          var at = ai === 0 ? r.bgAtlas : r.fxAtlas;
          if (at && at.pages) for (var pi = 0; pi < at.pages.length; pi++) {
            var tx = at.pages[pi] && at.pages[pi].texture;
            if (tx && tx.dispose) tx.dispose();
          }
        }
      } catch (e2) {}
      if (r.assetManager && r.assetManager.dispose) r.assetManager.dispose();
      if (r.heroTexture && r.heroTexture.dispose) { try { r.heroTexture.dispose(); } catch (e3) {} } // 人物立绘纹理
    } catch (e) {}
    r.ready = false; r.promise = null; r.bgSkeleton = r.fxSkeleton = null; r.bgState = r.fxState = null;
    r.canvas = r.gl = r.context = r.assetManager = r.bgAtlas = r.fxAtlas = null;
    r.heroTexture = r.heroImg = null;
    if (resources[key] === r) delete resources[key];
    log('已释放演出资源', key);
  }
  function idleReleaseTick() {
    var now = Date.now();
    if (machine.state !== STATE.IDLE) { lastReleaseCheck = now; return; }
    if (now - lastReleaseCheck > 5 * 60 * 1000) {
      for (var k in resources) releaseResources(k);
      lastReleaseCheck = now;
    }
  }

  // ================= 横幅 UI 与渲染 =================
  // overlay/bannerBox 常驻 DOM；渲染 canvas 由演出资源提供（r.canvas，与纹理同 context）
  var overlay = null, bannerBox = null, canvas = null, hint = null;
  var session = null; // {def,res,rate,skipped,raf,onDone,startTs}

  function ensureDom() {
    if (overlay) return;
    overlay = document.createElement('div');
    overlay.id = 'worldol-skill-banner-overlay';
    overlay.style.cssText = 'position:fixed;left:0;top:0;width:100%;height:100%;z-index:99999;display:none;' +
      'background:rgba(0,0,0,0.45);touch-action:none;';
    bannerBox = document.createElement('div');
    bannerBox.style.cssText = 'position:absolute;left:50%;transform:translateX(-50%);overflow:hidden;' +
      'border-radius:6px;box-shadow:0 0 24px rgba(0,0,0,0.6);background:#000;';
    hint = document.createElement('div');
    hint.textContent = '点击加速 · 连点跳过';
    hint.style.cssText = 'position:absolute;right:8px;bottom:6px;color:rgba(255,255,255,0.75);' +
      'font:12px/1 system-ui,"Microsoft YaHei",sans-serif;text-shadow:0 1px 2px #000;pointer-events:none;z-index:2;';
    bannerBox.appendChild(hint);
    overlay.appendChild(bannerBox);
    document.body.appendChild(overlay);
    bindInput(overlay);
  }
  function layoutBanner(def) {
    var vw = window.innerWidth, vh = window.innerHeight;
    var w = Math.round(vw * 0.94);
    var h;
    if (def.bannerRatio === 'auto') {
      // 横幅高度跟随内容宽高比（优先注册表 bannerAspect=官方骨架比例，其次 fxBox 测量值）：
      // 横屏宽幅动画在竖屏设备上完整显示即宽幅条，contain 下内容既完整又撑满
      var aspect = def.bannerAspect || (def.fxBox ? def.fxBox.w / def.fxBox.h : 3);
      h = Math.round(w / aspect);
    } else {
      h = Math.round(vh * (def.bannerRatio || 0.34));
    }
    if (h > vh / 3) h = Math.round(vh / 3); // 需求硬约束：横幅高度 ≤ 屏高 1/3
    var top = Math.round(vh * (def.bannerTop || 0.10));
    bannerBox.style.width = w + 'px';
    bannerBox.style.height = h + 'px';
    bannerBox.style.top = top + 'px';
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    return { w: w, h: h, dpr: dpr };
  }

  function fitSkeleton(box, areaW, areaH, mode, extra) {
    var d = box.data, s = box.skeleton;
    // 优先用注册表离线测量的内容 AABB（spine 3.6 数据无 x/y，骨骼 setup pose 不代表动画范围）
    var cb = box.contentBox;
    var cw = (cb && cb.w) || (d.width || 1024), ch = (cb && cb.h) || (d.height || 1024);
    var cx0 = cb ? (cb.x + cb.w / 2) : cw / 2;
    var cy0 = cb ? (cb.y + cb.h / 2) : ch / 2;
    // cover=铺满裁剪(背景) contain=完整显示(特效)；extra=注册表可调缩放（如 fxScale）
    var scale = (mode === 'cover' ? Math.max(areaW / cw, areaH / ch) : Math.min(areaW / cw, areaH / ch));
    scale *= (extra || 1);
    s.scaleX = scale; s.scaleY = scale;
    s.x = areaW / 2 - cx0 * scale;
    s.y = areaH / 2 - cy0 * scale;
  }

  function startSession(def, r, onDone) {
    ensureDom();
    var area = layoutBanner(def);
    // 渲染复用资源加载期的 canvas/context（纹理已绑定该 context）
    var renderCanvas = r.canvas, ctx = r.gl, context = r.context;
    var renderer = r.renderer;
    if (!renderer) {
      try {
        renderer = r.renderer = new spine.webgl.SceneRenderer(renderCanvas, context);
      } catch (e) { stats.errors++; stats.lastErr = 'renderer:' + e; log('SceneRenderer 失败', e); onDone(false); return; }
    }
    renderCanvas.width = Math.round(area.w * area.dpr);
    renderCanvas.height = Math.round(area.h * area.dpr);
    // 加载期 canvas 不在 DOM，播放时挂入（与纹理同 context；hint 置顶）
    renderCanvas.style.cssText = 'width:100%;height:100%;display:block;position:absolute;left:0;top:0;';
    bannerBox.appendChild(renderCanvas);
    fitSkeleton(r.bgSkeleton, area.w, area.h, 'cover');
    fitSkeleton(r.fxSkeleton, area.w, area.h, 'contain', def.fxScale);
    // 动画：注册表指定；背景循环，特效一次性播完即演出结束
    var bgAnim = def.bgAnim && r.bgSkeleton.data.findAnimation(def.bgAnim) ? def.bgAnim : pickAnim(r.bgState, r.bgSkeleton.data, ['animation', 'default']);
    var fxAnim = def.fxAnim && r.fxSkeleton.data.findAnimation(def.fxAnim) ? def.fxAnim : pickAnim(r.fxState, r.fxSkeleton.data, ['animation', 'default']);
    r.bgState.setAnimation(0, bgAnim, true);
    r.fxState.setAnimation(0, fxAnim, false);
    overlay.style.display = 'block';
    var s = session = {
      def: def, res: r, renderer: renderer, rate: 1, skipped: false,
      onDone: onDone, last: performance.now(), voice: null, clicks: [], pressTimer: 0, finished: false,
      startTs: performance.now(), heroColor: null,
    };
    machine.state = STATE.PLAYING;
    bgmDuck(true);
    s.voice = playVoice(r.voiceUrl, 1);
    if (def.voice2 && r.base) s.voice2 = playVoice2(r.base + def.voice2, 1); // 台词并行
    var loop = function (now) {
      if (session !== s) return;
      var dt = Math.min(0.05, (now - s.last) / 1000) * s.rate;
      s.last = now;
      try {
        r.bgState.update(dt); r.fxState.update(dt);
        r.bgState.apply(r.bgSkeleton.skeleton); r.fxState.apply(r.fxSkeleton.skeleton);
        r.bgSkeleton.skeleton.update(dt); r.fxSkeleton.skeleton.update(dt);
        r.bgSkeleton.skeleton.updateWorldTransform(); r.fxSkeleton.skeleton.updateWorldTransform();
        renderer.resize(renderCanvas.width, renderCanvas.height);
        // ⚠ SceneRenderer 构造时 canvas 还是默认 300×150 → OrthoCamera viewport 定格在 300×150；
        //   resize(数字) 匹配不上 ResizeMode 枚举等于没调。每帧显式同步 viewport 到画布像素尺寸，
        //   否则投影只显示世界中心 300×150 的放大特写（2026-09-28 "看不到全满" 真正根因）。
        renderer.camera.setViewport(renderCanvas.width, renderCanvas.height);
        ctx.clearColor(0, 0, 0, 1); ctx.clear(ctx.COLOR_BUFFER_BIT);
        renderer.begin();
        var skip = '';
        try { skip = localStorage.getItem('worldol-banner-skip') || ''; } catch (e5) {}
        if (skip === 'both') skip = 'bg,fx';
        if (skip.indexOf('bg') < 0) renderer.drawSkeleton(r.bgSkeleton.skeleton);
        if (skip.indexOf('fx') < 0) renderer.drawSkeleton(r.fxSkeleton.skeleton);
        // 人物立绘层：贴左侧、底部对齐、高度溢出横幅顶部（裁硬边）；前 heroFade 秒左侧滑入+淡入
        if (r.heroTexture) {
          try {
            var t = (now - s.startTs) / 1000;
            var fd = def.heroFade || 0.45;
            var k = t >= fd ? 1 : t / fd;
            k = 1 - Math.pow(1 - k, 3); // easeOutCubic
            var hh2 = area.h * (def.heroScale || 1.12);
            var hw2 = hh2 * (r.heroImg.width / r.heroImg.height);
            var slide = (def.heroSlide || 0) * hw2 * (1 - k);
            var heroA = skip ? 1 : k; // 排除实验时 alpha 固定 1
            if (!s.heroColor) s.heroColor = new spine.Color(1, 1, 1, 1);
            s.heroColor.a = heroA;
            renderer.drawTexture(r.heroTexture, -area.w / 2 - slide, -area.h / 2, hw2, hh2, s.heroColor);
          } catch (e2) { r.heroTexture = null; log('hero 绘制失败，本场停用', e2); }
        }
        renderer.end();
      } catch (e) { stats.errors++; stats.lastErr = 'draw:' + e; log('渲染异常', e); return finishSession(s, false); }
      var fxTrack = r.fxState.getCurrent(0);
      if (fxTrack && fxTrack.isComplete() && !s.skipped) return finishSession(s, true);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
  function pickAnim(state, data, prefer) {
    for (var i = 0; i < prefer.length; i++) if (data.findAnimation(prefer[i])) return prefer[i];
    return data.animations.length ? data.animations[0].name : null;
  }
  function finishSession(s, natural) {
    if (session !== s || s.finished) return;
    s.finished = true;
    machine.state = s.skipped ? STATE.SKIPPING : STATE.PLAYING;
    stopVoice();
    bgmDuck(false);
    overlay.style.display = 'none';
    session = null;
    machine.state = STATE.RESOLVING;
    stats.bannerDone++;
    if (s.skipped) stats.skipped++;
    var cb = s.onDone;
    setTimeout(function () { // 让浏览器先渲染一帧结算前的画面
      try { cb(true); } catch (e) { stats.errors++; }
      machine.state = STATE.IDLE;
      lastReleaseCheck = Date.now();
      drainQueue();
    }, 30);
  }

  // ================= 交互：单击加速 / 连点或长按跳过 =================
  function bindInput(el) {
    var onClick = function () {
      var s = session; if (!s) return;
      var now = Date.now();
      s.clicks = s.clicks.filter(function (t) { return now - t < 300; });
      s.clicks.push(now);
      if (s.clicks.length >= 2) { skipSession(s); return; }
      if (s.rate < 1.5) { s.rate = 1.5; if (s.voice) { try { s.voice.playbackRate = 1.5; } catch (e) {} } }
    };
    var onDown = function () {
      var s = session; if (!s) return;
      s.pressTimer = setTimeout(function () { skipSession(s); }, 450);
    };
    var onUp = function () { var s = session; if (s && s.pressTimer) { clearTimeout(s.pressTimer); s.pressTimer = 0; } };
    el.addEventListener('click', onClick);
    el.addEventListener('touchstart', onDown, { passive: true });
    el.addEventListener('touchend', onUp, { passive: true });
    el.addEventListener('mousedown', onDown);
    el.addEventListener('mouseup', onUp);
  }
  function skipSession(s) {
    if (!s || s.finished) return;
    s.skipped = true;
    machine.state = STATE.SKIPPING;
    try { if (s.res.fxState) s.res.fxState.clearTrack(0); } catch (e) {}
    finishSession(s, false);
  }

  // ================= 触发判定 =================
  function myPlayer(e) {
    try {
      var vo = e && e.vo;
      return !!(vo && (vo.isMyPlayer || (vo.getType && vo.getType() === 1 && vo.isMyPlayer !== false && vo.isMyPlayer)));
    } catch (err) { return false; }
  }
  function recordSkillUse(caster, skill) {
    stats.doUseSkill++;
    try {
      if (!caster || !skill) return;
      // ⚠ 0251 演算层 caster 无 vo（vo 是 0241 渲染层对象），阵营判定不能在此做——
      // 统一延迟到 0241 executeSkill 用 actor.vo.isMyPlayer 官方判定（2026-09-28 实测教训）。
      skillRing.push({ pos: caster.position, id: skill.id, level: (skill.level || skill.lvl || 0) | 0, ts: Date.now() });
      if (skillRing.length > 8) skillRing.shift();
      blog('calc-use', 'sk' + skill.id + ' Lv' + ((skill.level || skill.lvl || 0) | 0) + ' pos' + caster.position);
    } catch (e) {}
  }
  function matchBanner(casterPos, mine) {
    if (!mine) return null; // mine 由 0241 的 actor.vo 判定传入
    var now = Date.now();
    for (var i = skillRing.length - 1; i >= 0; i--) {
      var rec = skillRing[i];
      if (now - rec.ts > 60000) break;
      if (rec.pos === casterPos && BANNER_SKILLS[rec.id] && rec.level >= BANNER_SKILLS[rec.id].minLevel) {
        skillRing.splice(i, 1); // 消费
        return BANNER_SKILLS[rec.id];
      }
    }
    return null;
  }

  // ================= 挂钩安装 =================
  // 模块缓存 req.c 是懒加载的：0251（演算）可能早期入缓存，0241（回放控制）常到开战才加载。
  // 因此：① 轮询永不放弃（原 400 次≈140s 会在玩家进首战前死掉 → ex 永远 0，2026-09-28 实测）；
  //      ② 兜底扫描 req.m（全部模块工厂源码，含未加载的），定位后强制 require 立即装钩。
  function tryWrap(e, id) {
    try {
      // 0251 战斗演算：doUseSkill + doAttack 组合特征。
      // 不设"只装第一个"守卫：运行时 bundle 可能存在多份同构副本（分包/复制模块），
      // 只装第一份可能装到从未被使用的副本上（2026-09-28 手机 ex:0 教训），全部命中全部装。
      if (e && e.prototype && typeof e.prototype.doUseSkill === 'function' && typeof e.prototype.doAttack === 'function' && !e.prototype.__bannerCalcWrapped) {
        e.prototype.__bannerCalcWrapped = true; // 防同一类重复包
        var origUse = e.prototype.doUseSkill;
        e.prototype.doUseSkill = function (caster, skill, targetPos) {
          try { recordSkillUse(caster, skill); } catch (err) {}
          return origUse.apply(this, arguments);
        };
        hooks.calc = (hooks.calc || 0) + 1; hooks.calcModule = id; log('演算挂钩完成(模块', id, ')');
      }
      // 0241 回放控制：executeSkill + executeHPMPUpdate + executeNumEffect 组合特征
      if (e && e.prototype && typeof e.prototype.executeSkill === 'function' &&
          typeof e.prototype.executeHPMPUpdate === 'function' && typeof e.prototype.executeNumEffect === 'function' &&
          typeof e.prototype.executeSubControls === 'function' && !e.prototype.__bannerPlayWrapped) {
        e.prototype.__bannerPlayWrapped = true;
        var origExec = e.prototype.executeSkill;
        e.prototype.executeSkill = function () {
          stats.executes++;
          var ctrl = this;
          try {
            if (ctrl.__bannerState === 'playing') { ctrl.delayTime = 1; return; } // 演出中：空转等待
            if (ctrl.__bannerState === undefined) {
              var def = null, casterPos = null;
              try {
                casterPos = ctrl.aniControl && ctrl.aniControl.byte0;
                var belong = ctrl.battleBelong;
                var actor = belong && belong.getPlayerByPos ? belong.getPlayerByPos(casterPos) : null;
                def = matchBanner(casterPos, myPlayer(actor)); // 渲染层 vo 官方阵营判定
              } catch (err) {}
              blog('exec', 'pos' + casterPos + (def ? ' ' + def.name : ''));   // 【v1.7.4】回放到达时刻（calc-use→exec 的 dt=停顿段）
              if (def) {
                var mode = modeOf(def);
                if (mode === 'off') { ctrl.__bannerState = 'none'; return origExec.apply(this, arguments); }
                if (mode === 'voice') {
                  // 仅语音（默认）：不占状态机、不设 delayTime → 立即放行结算，语音与战斗并行
                  ctrl.__bannerState = 'none';
                  stats.bannerFired++; stats.voiceFired++;
                  profMark('skill');                      // 【v1.7.1】22 级技能触发点
                  try { playVoiceOnly(def); } catch (err) { stats.errors++; stats.lastErr = 'voice:' + err; }
                  return origExec.apply(this, arguments);
                }
                // banner 模式（封存）：先演出后结算
                ctrl.__bannerState = 'playing';
                stats.bannerFired++;
                enqueueOrPlay(def, ctrl, origExec);
                ctrl.delayTime = 1;
                return;
              }
              ctrl.__bannerState = 'none';
            }
          } catch (err) { stats.errors++; stats.lastErr = 'hook:' + err; ctrl.__bannerState = 'none'; }
          return origExec.apply(this, arguments);
        };
        hooks.play = (hooks.play || 0) + 1; hooks.playModule = id; log('回放挂钩完成(模块', id, ')');
      }
      // 0107 声音管理器（playMusic+stopMusic 双特征；_bgMusic.volume 为可写属性，代理 channel.volume）
      if (!hooks.sound && e && e.prototype && typeof e.prototype.playMusic === 'function' &&
          typeof e.prototype.stopMusic === 'function' && !e.prototype.play) {
        var origPlayMusic = e.prototype.playMusic;
        e.prototype.playMusic = function () {
          try { bgm.instance = this; hooks.sound = true; } catch (err) {}
          return origPlayMusic.apply(this, arguments);
        };
      }
      // （v1.5.0）1312 设置面板注入已按用户要求彻底移除——语音开关唯一入口=手机菜单
    } catch (err) {}
  }
  function installHooks() {
    var req = window.__worldReq;
    if (!req || !req.c) return false;
    for (var id in req.c) {
      var m = req.c[id];
      if (!m || !m.exports) continue;
      var ex = m.exports;
      tryWrap(ex['default'] || ex, id);
      // 命名导出的类也要试：如 1312 系统设置视图是 t.SystemGameSettingMdr（无 default）
      for (var k in ex) {
        var sub = ex[k];
        if (sub && sub.prototype && sub !== ex['default']) tryWrap(sub, id + ':' + k);
      }
    }
    // 兜底：扫全部模块工厂源码（含从未加载过的），定位 0241/0251 后强制 require。
    // 工厂源码含方法名字符串即命中；强制加载类定义模块无副作用。
    if ((!hooks.calc || !hooks.play) && req.m) {
      try {
        for (var mid in req.m) {
          if (req.c[mid]) continue; // 缓存里已扫过
          var src = '';
          try { src = String(req.m[mid]); } catch (err) { continue; }
          if (src.indexOf('executeHPMPUpdate') >= 0 && src.indexOf('executeNumEffect') >= 0 && src.indexOf('executeSubControls') >= 0) {
            try { var mm = req(mid); if (mm && mm.exports) tryWrap(mm.exports['default'] || mm.exports, mid); } catch (err) {}
          } else if (src.indexOf('doUseSkill') >= 0 && src.indexOf('doAttack') >= 0) {
            try { var mm2 = req(mid); if (mm2 && mm2.exports) tryWrap(mm2.exports['default'] || mm2.exports, mid); } catch (err) {}
          }
          if (hooks.calc && hooks.play) break;
        }
      } catch (err) { stats.lastErr = 'scan:' + err; }
    }
    return hooks.calc && hooks.play;
  }

  // ================= 队列（同一时间仅一个演出） =================
  function enqueueOrPlay(def, ctrl, origExec) {
    var run = function () {
      loadResources(def).then(function (r) {
        if (!r.ready) { // 资源不可用：直接放行结算（不阻塞战斗）
          log('资源未就绪，跳过演出', def.key);
          ctrl.__bannerState = 'done';
          return;
        }
        startSession(def, r, function () {
          ctrl.__bannerState = 'done'; // 下一帧 executeSkill 放行 → 结算
        });
      });
    };
    if (machine.state === STATE.IDLE) run();
    else { machine.queue.push({ def: def, run: run }); stats.queued++; }
  }
  function drainQueue() {
    var next = machine.queue.shift();
    if (next) next.run();
  }

  // ================= 启动（两阶段轮询） =================
  // ⚠ 不设尝试上限：模块缓存懒加载，0241 常在首次开战才入缓存（原 400 次≈140s
  //   会在玩家进首战前停止轮询 → 回放钩子永远装不上，ex 恒 0，2026-09-28 实测）。
  var poll = setInterval(function () {
    var ok = false;
    try { ok = installHooks(); } catch (e) {}
    if (ok) {
      clearInterval(poll);
      // 空闲预加载：① 语音常驻预热（~1.2s 后，首次释放零延迟）；
      // ② spine 演出资源仅在 banner 模式下加载（voice 模式完全跳过，省 ~30MB 流量与解析时间）
      setTimeout(function () { var n = preloadVoices(); armWarmRetry(); if (n) log('语音预热完成', n, '轨'); }, 1200);
      setTimeout(function () {
        for (var k in BANNER_SKILLS) {
          var d = BANNER_SKILLS[k];
          if (d && modeOf(d) === 'banner') loadResources(d);
        }
      }, 3000);
    }
  }, 350);
  setInterval(idleReleaseTick, 30000);

  // 单机菜单开关：DOM 就绪即注入；每 2s 刷新状态（与 localStorage 覆盖同频）
  (function () {
    var go = function () { try { mountPanelMenuToggle(); } catch (e) {} };
    if (typeof document !== 'undefined') {
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go);
      else go();
    }
  })();
  setInterval(refreshPanelMenu, 2000);

  // ================= 对外接口 =================
  window.__worldolSkillBanner = {
    version: '1.7.5',
    status: function () {
      var def0 = BANNER_SKILLS[8103] || null;
      return {
        version: '1.7.5',
        mode: def0 ? modeOf(def0) : '', modeOverride: modeOverride(), selfBase: SELF_BASE,
        state: machine.state, queue: machine.queue.length, hooks: hooks, stats: stats,
        voice: {
          plays: voiceStats.plays, fails: voiceStats.fails, preloaded: voiceStats.preloaded,
          last: voiceStats.last, ready: voiceReadyState(), cache: Object.keys(voiceCache),
          pcm: voiceStats.pcm, audioPath: lastPcmSrc ? 'webaudio' : (voiceStats.pcm ? 'webaudio-ready' : 'html'),
        },
        resources: Object.keys(resources),
        heroReady: Object.keys(resources).some(function (k) { return !!resources[k].heroTexture; }),
        skillRing: skillRing.slice(),
        bgm: { ducked: bgm.ducked, captured: !!bgm.instance },
      };
    },
    // 手动演示：默认按当前模式（voice=只播语音 / banner=完整演出）。
    // 第二参数可强制模式：'banner' 回看封存的演出 / 'voice' 只听语音。
    test: function (key, mode) {
      var def = key ? BANNER_SKILLS[key] || BANNER_SKILLS[8103] : BANNER_SKILLS[8103];
      if (!def) return '无此技能';
      var m = mode || modeOf(def);
      if (m === 'banner') {
        enqueueOrPlay(def, { __bannerState: 'test', delayTime: 0, aniControl: null }, function () {});
        return '已触发演出演示（封存模式，无结算联动）';
      }
      if (m === 'off') return '当前为 off 模式（不播放）';
      var n = playVoiceOnly(def);
      return n ? ('已播放语音 ' + n + ' 轨（无演出、无结算联动）') : '语音播放失败（见 stats.lastErr）';
    },
    preloadVoice: function () { return preloadVoices(); },
    stopVoice: function () { stopVoices(); return '已停止语音'; },
    setMode: setMode,   // 运行时切换模式（voice|banner|off），无需改代码/重启；约 2s 内生效
    release: function () { for (var k in resources) releaseResources(k); return '已释放全部演出资源'; },
    register: function (skillId, def) { BANNER_SKILLS[skillId] = def; return '已注册'; },
  };
})();
