/*!
 * 世界OL · 宠物技能遗忘（原版单机）v1.0.0
 * =====================================================================
 * 功能：宠物技能界面「放弃技能」（全部）与「逐级遗忘」。
 *   全部遗忘 → 14003；逐级遗忘 → 14006（等级 -1，降到 0 则整条删除）。
 *
 * ⚠ 与源线（副本完整版 web/skill-abandon.js）的差异，仅两处：
 *   1) 自启动：本地 APK 入口 client/standalone.html 不加载 web/offline.js，
 *      故不用 window.installSkillAbandon(req) 挂载，改为「常驻轮询 __worldReq +
 *      就绪即安装」（同 worldol-mythic-quality.js 的两阶段轮询惯例）。
 *   2) **只接管宠物**：机主 2026-10-03 要求人物技能完全不动 —— 人物目标
 *      （World.myPlayer 本人）一律转交原生 doDropSkill / doDropSkillOneLevel，
 *      连带 DropView 按钮修补也只在宠物技能界面生效。
 *
 * 服务端契约（lib/pet-skill-abandon-service.mjs）：
 *   响应 = byte(0) + int id + int sp + int gold + int silver + int coins + bool(技能是否仍存在)
 *          + [技能包 wire] + [byte addLevel] + string(JSON{role,petUid,id,learnedLevel,autoSkills,initiativeSkill,requestId})
 *   错误 = byte(-1) + string(msg)
 *   不扣费、不退款（sp/gold/silver/coins 均为真实余额回显）。
 * 诊断：控制台 __worldolPetSkillAbandon.status()
 */
(function () {
 'use strict';

 // —— 模块号（已在本仓库客户端静态核验：57=Skill、2=事件常量、22=Message、
 //    35=Network、5=World、1=UI、3=Facade、852=SkillDropAlertMdr）——
 function resolveDropView(req) {
  try { const mod = req(852); if (mod && mod.SkillDropAlertMdr) return mod.SkillDropAlertMdr; } catch (e) {}
  try { // 特征扫描兜底：模块号若因版本变动漂移，按工厂源码特征定位。
   const modules = req.m || {};
   for (const key of Object.keys(modules)) {
    const factory = modules[key];
    if (typeof factory !== 'function' || String(factory).indexOf('SkillDropAlertMdr') < 0) continue;
    let mod; try { mod = req(Number(key)); } catch (e) { continue; }
    if (mod && mod.SkillDropAlertMdr && mod.SkillDropAlertMdr.prototype) return mod.SkillDropAlertMdr;
   }
  } catch (e) {}
  return null;
 }

 // Chromium 92 起才有 crypto.randomUUID；本地 Edge 恰为 92，故留手写兜底。
 function randomUUID() {
  try { if (window.crypto && typeof window.crypto.randomUUID === 'function') return window.crypto.randomUUID(); } catch (e) {}
  const bytes = new Uint8Array(16);
  if (window.crypto && typeof window.crypto.getRandomValues === 'function') window.crypto.getRandomValues(bytes);
  else for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256);
  bytes[6] = (bytes[6] & 15) | 64; bytes[8] = (bytes[8] & 63) | 128;
  const hex = []; for (let i = 0; i < 16; i++) hex.push(('0' + bytes[i].toString(16)).slice(-2));
  return hex.slice(0, 4).join('') + '-' + hex.slice(4, 6).join('') + '-' + hex.slice(6, 8).join('') + '-' + hex.slice(8, 10).join('') + '-' + hex.slice(10, 16).join('');
 }

 const state = { version: '1.0.0', installed: false, booted: false, error: null, dropViewFound: false, drops: 0, lastError: null };
 // 安装后由 install() 填充，供 e2e 只读校验用（安装前恒 false）。
 const installCheck = { isPet: () => false };

 function install(req) {
  if (state.installed) return true;
  const World = req(5).default, Skill = req(57).default, Message = req(22).Message, Network = req(35).default, UI = req(1).default, Notifier = req(3).default, events = req(2);
  const DropView = resolveDropView(req);
  state.dropViewFound = !!DropView;

  const confirmation = '确定全部放弃该技能？此操作不可恢复';
  let pending = null;
  const views = new Set();
  const uid = pet => { const value = pet && pet.getPetId ? pet.getPetId() : null; return value == null ? null : String(value); };
  const base = skill => Number(skill && skill.level) - Number((skill && skill.addLevel) || 0);

  function petOf() { const o = World.myPlayer; return o && typeof o.getPet === 'function' ? o.getPet() : null; }
  // 人物（World.myPlayer 本人）一律不接管 —— 交回原生实现。
  function isPet(target) { const p = petOf(); return !!target && !!p && target === p; }
  installCheck.isPet = isPet;

  function updateButtons(view) {
   const args = view._showArgs, target = args && args.target;
   if (!isPet(target)) return; // 人物技能界面：保持原生按钮行为
   const skill = target.getSkillByID(args && args.skill && args.skill.id);
   const valid = !!skill && Number.isInteger(skill.level) && skill.level > 0;
   for (const name of ['btnDrop', 'btnDropAll']) {
    const button = view._view && view._view[name]; if (!button) continue;
    button.visible = !!skill; button.includeInLayout = !!skill; button.touchEnabled = !pending && valid; button.enabled = !pending && valid;
   }
  }
  function updateViews() { for (const view of views) updateButtons(view); }

  function capture(target, selected) {
   const owner = World.myPlayer;
   if (!owner || !owner.id || !target || !selected) throw Error('请先进入角色并选择已学习的技能。');
   if (target !== petOf()) throw Error('角色或出战宠物已变化，请重新打开技能界面。');
   const current = target.getSkillByID(selected.id), petUid = uid(target);
   if (!current || !Number.isInteger(current.level) || current.level <= 0) throw Error('该技能已学习等级为0，不能放弃；装备附带等级不受影响。');
   // petUid/localUid 可能为 null：出战宠物的场景 VO 不带 petItem，getPetId() 取不到；
   // 此时以服务端 inspect 回传的权威 uid 为准（见 abandon）。localUid 仅用于本地同一性复核。
   return { owner: owner, role: owner.id, target: target, type: 1, petUid: petUid, localUid: petUid, id: current.id, skill: current, level: current.level, addLevel: current.addLevel || 0 };
  }
  function validate(job) {
   const owner = World.myPlayer, currentUid = uid(job.target);
   if (owner !== job.owner || !owner || owner.id !== job.role || petOf() !== job.target) throw Error('角色或出战宠物已变化，请重新打开技能界面。');
   // 仅当客户端两次都读到了 uid 才做比对（读不到时同一性已由上面的对象身份判定保证）。
   if (job.localUid != null && currentUid != null && currentUid !== job.localUid) throw Error('出战宠物已变化，请重新打开技能界面。');
   const current = job.target.getSkillByID(job.id);
   if (current !== job.skill || current.level !== job.level || (current.addLevel || 0) !== job.addLevel) throw Error('技能等级已变化，请刷新技能界面后重试。');
  }
  function parse(reply, job) {
   if (!reply) throw Error('服务未返回结果，请刷新技能界面确认。');
   if (reply.getByte() < 0) throw Error(reply.getString());
   const id = reply.getInt();
   // 原生协议保留的余额字段；本功能不扣费也不退款，故不做任何赋值。
   for (let index = 0; index < 4; index++) reply.getInt();
   let skill = null;
   if (reply.getBoolean()) {
    skill = Skill.fromBytes(reply);
    if (!skill) throw Error('返回的技能数据不完整，请刷新技能界面确认。');
    skill.addLevel = reply.getByte();
   }
   const result = JSON.parse(reply.getString());
   if (!result || id !== job.id || result.id !== job.id || String(result.role) !== String(job.role) || (job.petUid != null && String(result.petUid) !== String(job.petUid)) || result.requestId !== job.requestId || !Number.isInteger(result.learnedLevel) || result.learnedLevel < 0 || !Array.isArray(result.autoSkills) || !result.autoSkills.every(Number.isInteger) || !Number.isInteger(result.initiativeSkill)) throw Error('返回的技能数据不匹配，请刷新技能界面确认。');
   if (skill) {
    const learned = base(skill);
    // 捕获到的定义可能把显示等级压到低于旧存档的已学等级；装备附带技能的基础等级必须为 0。
    const matchesBase = learned === result.learnedLevel || (skill.addLevel === 0 && learned > 0 && learned < result.learnedLevel);
    if (skill.id !== job.id || !Number.isInteger(skill.level) || skill.level <= 0 || !Number.isInteger(skill.addLevel) || skill.addLevel < 0 || learned < 0 || !matchesBase) throw Error('返回的技能等级不匹配，请刷新技能界面确认。');
   } else if (result.learnedLevel !== 0) throw Error('返回的技能数据不完整，请刷新技能界面确认。');
   return { skill: skill, result: result };
  }

  async function abandon(target, selected, all) {
   if (pending) return false;
   const lock = {}; pending = lock; updateViews();
   try {
    const job = capture(target, selected);
    const createMessage = extra => { job.requestId = randomUUID(); const message = new Message(all ? 14003 : 14006); message.putInt(job.id); message.putByte(job.type); message.putString(JSON.stringify({ role: job.role, petUid: job.petUid, requestId: job.requestId, ...extra })); return message; };
    // 显示等级可能被上限压缩，且旧书记录可能缺 addLevel —— 先 inspect 拿服务端权威已学等级。
    const inspection = await Network.sendProtoAsync(createMessage({ op: 'inspect' }));
    validate(job); const inspected = parse(inspection, job); validate(job);
    if (inspected.result.learnedLevel <= 0) throw Error('该技能已学习等级为0，不能放弃；装备附带等级不受影响。');
    // 采纳服务端回传的权威宠物 uid，确认包原样带回 → 破坏性请求有严格二次校验。
    if (job.petUid == null && inspected.result.petUid != null) job.petUid = String(inspected.result.petUid);
    if (all && !await UI.waitForTwiceSureUI(confirmation)) return false;
    validate(job);
    const message = createMessage({ expectedLevel: inspected.result.learnedLevel });
    const reply = await Network.sendProtoAsync(message);
    validate(job); const parsed = parse(reply, job); validate(job);
    // 先在内存里组装完整的替换结果：不调用原生删除辅助（它会改自动技能槽），
    // 也不做 HP/MP 收缩与快照流程 —— 那属于各系统自己的职责。
    const skills = job.target.skillList.slice(), index = skills.findIndex(value => value && value.id === job.id);
    if (index < 0) throw Error('技能已变化，请刷新技能界面后重试。');
    if (parsed.skill) skills.splice(index, 1, parsed.skill); else skills.splice(index, 1);
    job.target.skillList = skills;
    job.target.autoSkillID = parsed.result.autoSkills.slice();
    job.target.autoSkillID_Initiative = parsed.result.initiativeSkill;
    Notifier.sendNt(events.SkillEvent.DO_DROP_SKILL_SUCESS);
    state.drops++;
    return true;
   } catch (error) { state.lastError = error && error.message ? error.message : String(error); UI.alertMessage(state.lastError); return false; }
   finally { if (pending === lock) pending = null; updateViews(); }
  }

  // —— 只拦宠物；人物目标原样转交原生实现（人物逻辑零改动）——
  const nativeDrop = Skill.doDropSkill, nativeDropOne = Skill.doDropSkillOneLevel;
  Skill.doDropSkill = function (target, skill) { if (!isPet(target)) return typeof nativeDrop === 'function' ? nativeDrop.call(Skill, target, skill) : undefined; return abandon(target, skill, true); };
  Skill.doDropSkillOneLevel = function (target, skill) { if (!isPet(target)) return typeof nativeDropOne === 'function' ? nativeDropOne.call(Skill, target, skill) : undefined; return abandon(target, skill, false); };
  if (DropView && DropView.prototype) {
   const init = DropView.prototype.intiView, hide = DropView.prototype.onHide;
   DropView.prototype.intiView = function (...args) { const result = init.apply(this, args); views.add(this); updateButtons(this); return result; };
   DropView.prototype.onHide = function (...args) { views.delete(this); return hide ? hide.apply(this, args) : undefined; };
  }
  state.installed = true;
  return true;
 }

 function tryInstall() {
  const req = window.__worldReq;
  if (typeof req !== 'function') return false;
  try {
   if (!req(5) || !req(57) || !req(22) || !req(35) || !req(1) || !req(3) || !req(2)) return false;
   return install(req);
  } catch (e) { return false; }
 }

 // 常驻轮询：装好即停。引擎主包（worldol-standalone.js / patchedMain）晚于本脚本加载。
 const timer = setInterval(function () {
  if (state.installed) { clearInterval(timer); state.booted = true; return; }
  try { if (tryInstall()) { state.booted = true; clearInterval(timer); } } catch (e) { state.error = String(e); }
 }, 350);

 window.__worldolPetSkillAbandon = {
  version: state.version,
  status: function () { return { version: state.version, installed: state.installed, dropViewFound: state.dropViewFound, drops: state.drops, lastError: state.lastError }; },
  install: tryInstall,
  // e2e 只读钩子：验证「只接管宠物」边界，不触发任何生产流程。
  // ⚠ 必须转发调用——本对象在 install() 之前就构造完成，直接取 installCheck.isPet 会锁死占位实现。
  __test: { isPet: target => installCheck.isPet(target) },
 };
})();
