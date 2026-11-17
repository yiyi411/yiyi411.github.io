/*!
 * 世界OL · 战斗浮动跳字系统（原版单机）v1.4.1（数字改用古德原版位图字库）
 * v1.4.1（2026-11-12 玩家视频反馈：出手时人物身上跳黄色数字）：
 *   吸血回血在同一单位本次动画里排第 2 个及以后时，原版 0075 updateAffectCount 会 addVSpeed(-n) 把垂直速度
 *   从 -6 改成 -7、-8…（数字错开），旧判定要求 vSpeed 恰为 -6，于是回血被当成伤害画成黄色横飘。
 *   createNumEffect2 原文：增加类（回血/回蓝）hSpeed 恒为 0，扣减类恒为 ±1，动画全程不改 hSpeed
 *   → 回血、回蓝与抽蓝统一只按 hSpeed 判定。
 * v1.4.0（2026-11-12 用户定）：
 *   【扣蓝】一律不显示：删除扣蓝专用挂钩（executeHPMPUpdate、createHPMPUpdate）与 routeMP，原版 2002 扣蓝数字清空不上屏。
 *   【字库】伤害、回血、回蓝、暴击全部改用古德原版位图字库（assets/common/2000 黄、2001 绿、2002 蓝、2003 暴击，
 *     裁切与 apk-inspection/damage-size-audit 逐像素核对一致），按原版固定字距（11／暴击 13）排布、像素不插值；
 *     统一按原版比例 舞台宽/320 = 2.25 倍放大：伤害与回复字高 29（原 30／Arial 28）；暴击用户定字高 36（原 32）。
 *     回血、回蓝不再用 Arial 文字。跳动轨迹、回合开始合并、分层防遮挡、扣蓝与状态提示不变。
 * v1.3.6（2026-11-11）：
 *   【回复数字】出现位置从 spriteY−64 上移到头顶上方（spriteY−112），起跳速度 −12→−5（上升约 15 像素后落回、小弹），
 *     原先上升 78 像素，幅度过大。
 *   【回合开始合并】回合开始阶段的状态结算与自动回血回蓝（0251 logicRound 标记、0369 makeBattleAnim 传入分组号）
 *     按单位合并：生命的回复与扣减合成一个净值数字，法力同理；每个单位每回合开始最多一个生命数字、一个法力数字。
 * v1.3.5（2026-11-10）：伤害数字遮挡——分层改为「占用仍在屏幕上（含排队未出）的数字之外的最低空层」，
 *   原先只按 900ms 内的创建时刻计数并取余：排队晚出的数字还在屏幕上时，新数字会被排回同一层压住它。
 *   层数 4→5；落地后的停留从 4 帧加到 7 帧（H5 原值 4，约多留 0.1 秒）。出现间隔仍为 180ms。
 * v1.3.4（2026-11-10）：
 *   【数字滞留】回血原先占用每个目标唯一的 c.main 槽，同一目标 1 秒内第二次回血（持续回复＋技能回复、吸血等）
 *     直接覆盖槽位，前一个数字失去引用后不再更新也不再移除，一直留在屏幕上。现在回血／回蓝与伤害一样各自独立
 *     （放进 c.jumps），主槽被替换前也先收掉旧的；逐帧处理出错时清掉全部跳字再停，不留残影。
 *   【回蓝】原先交还原版数字控件显示，现在与回血一起接管（原版控件文本清空），样式与动画一致。
 *   【动画】按 H5 EffectNum.action 与 A 0243 原文：回复数字不横向飘（hSpeed=0），从头顶（spriteY−2×SPRITE_HEIGHT）
 *     以 vSpeed=−6（H5 乘 xhdRatio=2 即 −12）上升，落回起点（落点阈值 0，伤害是 12）后小弹 4 帧消失。
 *   【字体】按 A 0180 原文的回复数字样式：Arial 粗体 28，回血 0x63D32D／描边 0x254F2F，回蓝 0x22DCF2／描边 0x2F3D60。
 *     H5 用的是 2001／2002 数字图集，两份资源里都没有找到该图集文件，未使用。
 * ---------------------------------------------------------------
 * 需求：战斗中 伤害/暴击/扣蓝/衰弱/流血 在目标头顶显示浮动文字。
 * 挂钩（全部只观察不干预，try/catch 兜底，异常不影响战斗逻辑）：
 *   1) 战斗数字特效类（webpack 模块 243 / BufferedNumEffect）—— 伤害/暴击
 *        setData(numPlayer, setIndex, p3, numString, hSpeed, vSpeed) → 登记待播数字
 *        action() 首次调用 = 该数字在 control 队列真正开始播放 → 此刻触发跳字
 *        ⇒ 跳字与攻击动作天然同步（不再早于动作）
 *      setIndex = 图集类型（只接管 2000伤害/2003暴击；numString 已取绝对值，恒为扣减）
 *   2) 战斗控制类（webpack 模块 241）prototype.executeHPMPUpdate —— 扣蓝（真气贯穿）
 *        this.actorPlayer=目标玩家、attr=92(MP_DISPLAY)、attrValue=带符号原始值；
 *        调用瞬间 = 蓝条真正变动 = 与攻击动作严格同步。
 *        （原版对 isMP&&value<0 短路不建数字特效，故扣蓝只能在此捕获）
 *   3) FightTool.getAniEffectByControl
 *        → 只过滤伤害(2000)/暴击(2003)数字图集控件，改由本系统接手；
 *          治疗(2001)/回蓝(2002)/韧性(2004)/MISS/格挡等原始显示保持不变
 *        ⚠ 仅当数字特效挂钩成功后才真正拦截（防"原版被抑制、新系统没接管"的黑洞）
 *   4) 玩家类 prototype.addBuffer（webpack 模块 56）
 *        → this = 被加 buff 的目标玩家；statusBit=10 衰弱(天煞一击) / 3 流血(血煞蚀骨)；
 *          排除移除操作 attrID=90(BUFFER_REMOVE_STATUS) 与 lastTime<=0
 *          （不用 Buffer.alloc：其第8参名为 target 实为"施法者"，据此取目标会挂错人）
 * 渲染：egret.TextField 富文本(textFlow) + 对象池 + ENTER_FRAME 手动逐帧动画；
 *      层级 = battleSprite.parent 的最顶层（游戏画面之上、UI 弹窗之下，每帧保持置顶）；
 *      touchEnabled=false 不挡任何点击；stage TAP 加速/跳过全部跳字。
 * 定位：battleSprite.spriteX / spriteY-64（扣蓝再高些），避开血条(脚底)与头顶
 *      状态图标(-120)；随机水平错位；目标靠上时原地淡出；同屏主跳字≤8。
 * 数值：完整显示不缩写；只显示扣减(>0)；统一 '-' + 绝对值，不会出现 '--'。
 * 同目标连续扣蓝 900ms 内合并为一条并脉冲放大；数值副标签 80ms、状态副标签
 * 160ms 错峰；副标签淡入200/停留700/淡出300，不上浮。
 * 加载：本文件以 <script> 随页面同步引入，此时 egret 引擎/主模块均未加载（它们由
 *       gd.js 拉取版本清单后异步加载），因此采用两阶段轮询：
 *       ① 等待 window.egret 就绪 → init(egret)；
 *       ② init 内每 350ms 轮询 window.__worldReq.c（webpack 模块缓存），
 *          战斗模块（数字特效/FightTool/Player）加载完成后自动挂钩。
 * 诊断：控制台 __worldolFloatText.status() 查看挂钩状态（fightHook/numHook/bufferHook 应为 true）。
 * 自测：战斗中控制台执行 __worldolFloatText.test('crit', 999999) 可手动触发。
 * v1.1.0：修复加载时机 bug——旧版在 egret 就绪前检查失败直接 return，导致永不挂钩。
 *         修复集群孤儿 bug——getCluster 原先"先建集群后建层"，首次 ensureLayer 建层时
 *           的 destroyAllFloats 会把刚建的集群从 clusters 删掉，首个伤害数值凭空丢失
 *           （现改为先建层后建集群）。
 *         修复合并/替换时间窗误用未启动条目的 born=0 哨兵导致窗口判断恒假
 *           （连续扣蓝丢数值、高优先级暴击无法升级主跳字），改用 createdAt 时间戳。
 *         修复已有扣蓝副标签时新扣蓝数值被静默丢弃（改为累加并脉冲）。
 *         修复普通伤害 textColor 取错字段（value→valueC）导致回落引擎默认色。
 * v1.1.1：修复游戏卡死——enforceMainCap 的 while 循环在存活主跳字超上限时，
 *           forceFade 不改变 done/createdAt，oldestLiveMain 每轮返回同一对象，
 *           主线程死循环（多目标 AOE + 敌方反击叠加 ≥7 个主跳字即触发，
 *           且发生在首帧渲染前 = "还没出伤害就卡死"）。改为 guard 硬上限 +
 *           同一对象二次命中直接回收，保证必然收敛；MAX_MAIN 6→8（需求上限）。
 *         防御加固：显示接管包裹的赋值/恢复段全程 try 保护（原是唯一未隔离路径）；
 *           新增异常熔断——事件处理连续异常 ≥30 次自动停用跳字系统，绝不拖累游戏。
 * v1.1.2：新增诊断接口（排查"真气贯穿目标错位 / 衰弱不显示"）：
 *           __worldolFloatText.dump()   打印最近 60 条原始事件参数（含位置探针/目标名/归属方）
 *           __worldolFloatText.diag(true) 控制台实时打印每次事件
 *           修复真气贯穿挂到我方：原挂 createNumEffect2，其 value 为带符号原始值，
 *           判断 "mp && v>0" 反了（>0 是回蓝）→ 改 v<0 才算被抽蓝。
 *           修复衰弱不挂：改挂玩家类 addBuffer（this=目标玩家），弃用 Buffer.alloc。
 * v1.1.3：修复暴击跳字早于攻击动作——createNumEffect2 属 effectControl "预计算"阶段
 *           （getAniEffectList 一次性算好整轮），故跳字提前于动作。
 *           改挂数字特效类 setData（登记）+ action 首次调用（触发），与播放同步。
 * v1.1.4：（错误修复，被 v1.1.5 取代）曾误判 setData 第2参是数值——实则第2参就是 setIndex。
 * v1.1.5：修复"什么都不显示"的真正根因（反编译实锤）：
 *         ① 数字特效 setData 第2参=setIndex（v1.1.3 映射本对，v1.1.4 改错）→ 恢复；
 *         ② v1.1.3 黑洞真因：createNumEffect2 里 `0>i&&(i=-i)` 把数值取绝对值，
 *           numString 恒无负号 → 旧 fireNum 靠首字符 '-' 判断扣减恒 false → 全丢；
 *           现只对 2000伤害/2003暴击 登记（这两类恒为扣减），不再判符号；
 *         ③ 扣蓝在调用点被原版短路 `(isMP && value<0) || (createNumEffect2…)`
 *           —— **扣蓝根本不创建数字特效**，setData 永远收不到！
 *           改挂模块 241 控制类 executeHPMPUpdate：this.actorPlayer=目标、
 *           attr=92(MP_DISPLAY)、attrValue=带符号值，调用瞬间=蓝条变动=与动作同步；
 *         ④ wrapAdd 抑制范围收窄为仅 2000/2003：治疗(2001)/回蓝(2002)/韧性(2004)/
 *           MISS/格挡全部放行原版，原版行为零改变。
 * v1.1.6：事件链 stats 计数器（__worldolFloatText.status().stats 一键看清断在哪一环）。
 * v1.1.7：屏上诊断角标（左上角常驻、免控制台；pointer-events:none 不挡任何操作）。
 * v1.1.8：角标实测两根因——① 本客户端普通伤害按【正值】走 2001 图集
 *           （伤2000:0 治2001:22 暴2003:24）→ 接管集扩为 {2000,2001,2003}；
 *         ② 0241 原文实锤：数字由 control.draw 链每帧 drawNumEffect→o.draw() 直绘，
 *           action() 也在跑（角标 act496/draw495）——补 draw 钩、action/draw 双钩。
 *         但实测仍 触发0（两钩全都拿不到自写 __wolNumPending）⇒ 自写实例属性不可靠。
 * v1.1.9：触发0 根治——【零实例写入】重写（本次）：
 * v1.1.10：纯诊断版——fireNumIfFirst 三类短路分布计数（角标「触{空X 型X 值X}」）：
 *         空=numPlayer 为空（非首调/实例无登记）、型=图集不在接管集、值=数值解析失败；
 *         另有首调成功实例采样（diag 'numfirst'，前 60 条含 setIndex/文本）。
 *         下一场战斗角标一眼看清 891 次调用都短路在哪一类 → 根因定位。
 *         只读原生三件套 numPlayer/setIndex/numString（原生 setData 必写，0243 原文铁证）；
 *         以 numPlayer 首调消费为天然触发信号（0243 原文：action 与 draw 首调都会
 *         setDrawPosition(this.numPlayer) 后置 null）——action/draw 双钩谁先到谁触发、
 *         另一钩因 numPlayer 已 null 自然短路（互斥去重）；对象池复用时 setData 重写
 *         numPlayer 天然防陈旧。钩内零实例写入、零队列操作（治卡顿：每帧只做一次
 *         null 判断，绝大多数调用立即返回）。
 * v1.1.11：根因修复 + FIFO 兜底（本次）——
 *   【根因实锤】显示向量是 action/draw 的唯一驱动源（0241 原文：control.draw 链每帧
 *     drawNumEffect → o.draw()，且控制对象只有被 addElement/insertElementAt 写入显示
 *     向量后才会被逐帧驱动）。v1.0.0 起 wrapAdd 把 2000/2001/2003 控制对象拦截在向量
 *     之外（为抑制原版数字）→ 这些实例从未播放 → 首调永远不来 → 触发恒 0。
 *     角标 act/draw 计数全来自 MISS 实例（首帧命中"型"短路、后续帧命中"空"短路，
 *     故"空"占绝对多数）——v1.1.8~v1.1.10 的"实例写入不可靠/numPlayer 播放时恒空"
 *     皆为被掩盖的误诊。
 *   【0075 原文铁证】createNumEffect2 → e.createNumEffect(t, ""+i, r, _, 0, s, u)
 *     → u.setData(r, _, 0, ""+i, s, u)：numPlayer=目标玩家 r（有效对象）、
 *     setIndex=图集、numString=绝对值文本；登记时有效，首调播放时仍有效
 *     （0243：首调 setDrawPosition(this.numPlayer) 之后才置 null）。
 *   【修复】① 移除显示抑制——控制对象全量放行进显示向量，引擎照常驱动（驱动链不断）；
 *     ② 原版数字隐形改为 setData 后清空 numSet.text（伤害/暴击实例 image 恒空——
 *        createNumEffect 第8参 undefined → setImage(undefined)，draw 走 numSet 路径，
 *        清文本即隐形；挂钩未装则从不清空=原版照常，天然防黑洞）；
 *     ③ 触发三级瀑布：243 首调（主路径）→ 241 drawNumEffect 直读 this.obj 原生
 *        三件套（兜底A，0241 原文 drawNumEffect 里 this.obj instanceof 243）→
 *        FIFO 弹出最旧登记（兜底B：条目 5s 过期；fire 成功即出队防错位；
 *        回蓝/韧性/MISS 图集绝不碰队列）；三者汇聚 fireNum，__wolFired 实例标记去重
 *        （setData 清、触发置——池复用天然防陈旧；触发每数字至多一次，无逐帧开销）。
 * v1.1.12：扣蓝改走 2002 图集通路 + 衰弱/流血改受击触发（用户实测反馈）——
 *   【实测铁证】v1.1.11 角标：蓝10（setData 收到 10 次 2002 图集）+ 型10（其首调被"型"短路）
 *   + HPMP 0/0（executeHPMPUpdate 零调用）⇒ 本客户端蓝条变动数字走 243 的 2002 图集，
 *   241 的 HPMPUpdate 控制通路是死代码（HP/MP 显示实际由网络包→vo 属性→updateMpBar 驱动）。
 *   【0075 原文甄别信号】createNumEffect2：回蓝(值≥0) → hSpeed=0,vSpeed=-6；
 *   抽蓝(值<0) → hSpeed=±1(isLeftSide 方向),vSpeed=-4 ⇒ hSpeed≠0 或 vSpeed=-4 = 抽蓝。
 *   抽蓝 → 清空原版数字 + 真气贯穿跳字（含数值，900ms 合并）；回蓝 → 原版照常。
 *   diag 新增 mp2002 采样（h/v/目标名/敌我），角标新增 蓝放 计数——下轮截图可彻底判读
 *   （若 蓝放=蓝 总数则说明 2002 全是回蓝，抽蓝信号需再寻）。
 *   【衰弱/流血改受击触发】用户需求：挂上 debuff 时不显示，改为"带该 debuff 的目标受到
 *   伤害时"显示天煞一击/血煞蚀骨。实现：routeDamage 时查目标 battleBufferList
 *   （0056 原文：Vector 对象 .arr/.size()/.elementAt()；0386 原文：Buffer.finish() 过期
 *   置 lastTime=0 ⇒ 活跃判定 lastTime>0）。addBuffer 挂钩保留仅作统计/诊断，不再触发。
 * v1.1.13：真气贯穿改创建时刻通路 + 挂钩放宽 + buff 创建统计（用户实测 v1.1.12 仍无真气贯穿/状态）——
 *   【角标判读】v1.1.12 实测：蓝11 全部是回蓝（蓝放11 + 型11 完全吻合），抽蓝根本不走 243
 *   数字特效 —— 0075 原文 getAniEffectByControl 内 `(1==y&&0>_) || createNumEffect2(...)`
 *   扣蓝短路实锤（v1.1.5 结论复现）。且 draw13>0 而 fifoDirect/numDup/fifoPopped 全 0
 *   ⇒ 241 控制类钩在真机从未生效（C✗），BUF 0 ⇒ addBuffer 钩同样未生效（B✗）——
 *   三特征联合判定在真机失败原因未明，故①放宽为单特征（executeHPMPUpdate / addBuffer
 *   在 bundle 全文各仅 1 处定义，唯一性强）②hookLog 记录匹配模块号上角标。
 *   【真气贯穿新主通路】0075 原文 createHPMPUpdate(engine,pos,attr,value)：
 *   n.actorPlayer=engine.getPlayerByPos(pos)、n.attr=92(MP_DISPLAY，0012 实证)、
 *   n.attrValue=带符号值 —— 创建瞬间即有目标+数值，立即触发（同技能多段由 routeMP
 *   900ms 合并）；241 播放钩保留作冗余（ctrl.__wolMpDone 去重）。
 *   时机说明：创建发生在技能效果清单构建阶段，略早于命中帧，扣蓝无原版数字竞争，可接受。
 *   【衰弱/流血】bufferText 数组实证（bundle 原文）：索引 3=流血 10=衰弱 —— statusBit 值无误；
 *   态0 最可能是该场战斗目标身上无活跃 debuff。新增 Buffer.alloc 挂钩统计衰弱/流血创建数
 *   （角标「挂」）+ routeDamage 时 battleBufferList 采样（diag 'bufscan'）——下轮截图即可
 *   区分「没挂上 debuff」还是「检测逻辑问题」。playerHasStatus 加 getStatus() 回退
 *   （0386 原文 getStatus() 直返 statusBit）。
 * v1.1.14：衰弱/流血检测改官方位图主路（用户实测 v1.1.13：真气贯穿已好，打带衰弱的僵尸
 *   仍只出致命一击）——反编译三连实锤检测方案先天脆弱：
 *   ① 0056 getbuffer(4182)＝官方按状态查询原文：遍历 battleBufferList 只比
 *      getStatus()==e，【无 lastTime 条件】——过期条目由 runBufferList(4281
 *      lastTime<=0 收集)/removeBufferByStatus/clearBufferList 物理移除，
 *      列表内即活跃，v1.1.12 起的 lastTime>0 判定属过度严格（false negative）；
 *   ② 0056 addBuffer(4171)→setBattleStatus(getBufferBitValue(bit))：玩家 bStatus
 *      位图（Long）由引擎自身维护，isBattleStatus(bitVal) 是官方状态查询
 *      （isDeadDelay 4138 同款），与任何挂钩无关 —— 最可靠信号。
 *   新 playerHasStatus 三路冗余：isBattleStatus(1<<bit)（主，bit<30 即 1<<bit，
 *   0004 getBufferBitValue 原文）→ battleBufferList 扫描（次，去掉 lastTime>0）。
 *   诊断：位/列 计数上角标 + bufscan 采样加 isB 字段（isBattleStatus 实测值）。
 * v1.1.15：衰弱/流血检测改「逻辑层桥接」（v1.1.14 真机角标实锤双层对象，用户猜想方向正确）——
 *   【角标判读】挂7（Buffer.alloc 钩已触发 7 次，buff 在创建）+ 位0/0（numPlayer 上
 *   isBattleStatus 不是函数，位图主路从未跑过）+ BUF 0（玩家 addBuffer 钩零触发）
 *   ⇒ 渲染层 numPlayer（getPlayerByPos 返回、有 battleSprite 无状态位图）与逻辑层
 *   玩家（0527 战斗信息面板读的 e：isBattleStatus(getBufferBitValue(m)) 遍历位图，
 *   能显示衰弱 ⇒ 其 bStatus 有衰弱位）不是同一对象，四路检测全落在渲染层故全空。
 *   【桥接方案】①钩 setBattleStatus/clearBattleStatus（0056:4171 addBuffer 置位唯一
 *   写入点；面板 0527 原文用同一 isBattleStatus 读 ⇒ 逻辑层位图必经此写入），扫描
 *   模块缓存全部类原型（own property 去重，子类覆盖/继承都覆盖），维护对象戳
 *   __wolStatusSet + 全局 statusByPos[position] 映射（双层对象以 position 为 join key，
 *   byte0 位置两种层通用）；②Buffer.alloc 第1参防御性捕获 battle.getPlayerByPos
 *   （逻辑层对象解析兜底）；③playerHasStatus 查询序：对象戳→位置映射→逻辑层解析
 *   isBattleStatus→numPlayer.isBattleStatus→列表扫描。
 * v1.1.30：普通伤害跳字**最终定案**（2026-09-30 用户三轮反馈）：v1.1.29 把 2001
 *           归还引擎指望原生绿字，真机实测**敌我双方普通伤害全不跳**（原生 2001
 *           绿字图集在本单机客户端不上屏），只有暴击跳。用户官方服截图实锤官方
 *           普通伤害=**黄色**数字 → 2001 重新接管，mod 按官方样式跳黄色伤害
 *           （COLOR.damage 0xFFDE2E）。暴击维持 mod 红字「致命一击」；
 *           2004 韧性全隐与真气贯穿 fail-closed 口径不变。
 * v1.1.29：（已推翻）曾把 2001 移出接管集指望原生绿字显示——真机证伪（见上）。
 * v1.1.27：真气贯穿**恢复显示** + 白色伤害跳字**停显**（用户定案）——
 *           ① v1.1.26 整体退役真气贯穿被用户否决（「真气贯穿给我保留」）→ 恢复 v1.1.25
 *           口径：官方 isMyPlayer/isMyPet 命中=我方静默；正证据敌方（isMonster===true
 *           或 type∈{2,6,8} / join 证实）才显示；判不了不显示（mpUnknown）。
 *           ② 历轮「白字」正名：普通伤害白色跳字（COLOR.damage valueC=0xFFFFFF，
 *           敌我双方每次受击都跳）。用户选择「不显示」→ routeDamage 非暴击分支
 *           跳过 routeNumeric（dmgHidden 计数），原版 2000/2001/2003 数字维持
 *           setData 隐形 → 伤害数字完全不显示（暴击红色致命一击保留）。
 *           ③ 状态话术（天煞/血煞）与 2004 全隐维持不变。
 * v1.1.26：真气贯穿跳字**整体退役**（真机 v1.9.14 诊断 蓝7{己蓝3 放4 疑0}——我方已
 *           完全干净，剩余 4 条全在敌方头上；用户实锤：敌我双方都在跳，而源作者原版
 *           环境双方都不跳）。定性：该白字是本 mod v1.1.12 起自加的演出
 *           （COLOR.mp.label，全工程仅本文件含「真气贯穿」），原版扣蓝根本不创建
 *           数字特效（0075 createNumEffect2 短路实证）。口径：与原版表现一致 =
 *           routeMP 一律静默（双方全隐，同 2004 先例），全部计入 mpOurSide
 *           （角标「己蓝」语义=已退役静默数），routedMP/mpUnknown 恒 0。
 *           2002 抽蓝数字实例仍按 v1.1.12 在 setData 隐形（原版本就无此数字）。
 *           状态话术（天煞/血煞）不受影响，维持 v1.1.25 正证据+fail-closed。
 * v1.1.25：敌方证据剔除 type 7/9（真机 v1.9.13 诊断 疑0/放8 破案）——0031 实锤
 *           TYPE_PET_MONSTER=7=「玩家的怪兽型宠物」，**我方自己的南瓜宠物就是 7**，
 *           被抽蓝/被上 debuff 被 type 推断误判敌方 → 白字仍在。isMonster getter
 *           只等于 type==2（0031 原文）。现正证据=isMonster===true 或 type∈{2,6,8}
 *           （7/9 宠物形态敌我不分 → 一律不显示）。状态话术（天煞/血煞）同步改
 *           正证据 + fail-closed（stUnknown），旧 isOurSideOf fail-open 调用点清零。
 * v1.1.24：真气贯穿**默认拒绝**（真机 v1.9.12 仍有白字破案）——
 *           ① v1.1.23 的 ctrl.vo 检查只覆盖两个 ctrl 通路，2002 数字路径 fireNum→routeMP
 *           漏放；② 真机 vo 形态={position,name}（无 isMonster/type/isMyPlayer）→ isMyOf
 *           返回 false（非 null）→ isOurSideOf 把「判不了」当「敌方」放行=三通路全漏。
 *           routeMP 收口为唯一判定点：官方 isMyPlayer/isMyPet 命中=我方静默；否则只在
 *           **正证据敌方**（isMonster===true / type∈{2,6,7,8,9} / join 证实）时显示；
 *           判不了一律不显示（mpUnknown）——真机若敌方也不弹属预期（宁可少显示）。
 * v1.1.23：真气贯穿官方 vo 判定（真机 v1.9.11 跳字诊断 韧判0/韧集0 实锤：白色带标签
 *           数字不是韧性 2004，而是真气贯穿跳字漏到我方——isOurSideOf 启发式在真机层
 *           判不了我方）。onHPMPUpdate/onHpmpCreated 两通路在 routeMP 前先查
 *           ctrl.vo.isMyPlayer||isMyPet（0241 原文官方判定），命中=我方静默。
 * v1.1.22：2004 抑制升级为**无条件**（真机 v1.9.10 仍有我方白字：阵营 join 在真机层
 *           仍判不了 → 放行）。口径反转：白字干扰 > 敌方韧性信息 → 双方 2004 全隐，
 *           物理链照常、实例正常回收。toughShown 恒 0（保留字段兼容诊断）。
 * v1.1.21：韧性白字抑制补强（真机 v1.9.9 后仍有白字）——
 *           ①【FIFO 泄漏实锤】0075 韧性路径：createNumEffect2 先以 i=0→图集 2001(ADD)
 *           调 setData（此时我们的 onNumSetData 按 'damage' 入 FIFO），**之后**调用点才把
 *           setIndex 改写为 2004 → 首调时 kind 查表 undefined 直接 return，FIFO 条目永不出队，
 *           被后续兜底 B 弹出 = 随机单位弹错误伤害跳字。修复：首调 kind 无效时按
 *           (player===numPlayer && num===numString数值) 同步出队（fifoToughDrop 计数）。
 *           ②【判定增强】isOurSideOf 在 numPlayer.vo 缺失时经 logicBattleRef.playerList
 *           join（battleSprite 同一/同 position）取带 vo 的逻辑层对象再判——0243 层对象
 *           与 0251 同为无 vo 演算对象时不再一律放行。
 *           ③【可观测】toughHideCheck 采样（前 60 条）：hasVo/isMonster/type/verdict 入 diag；
 *           角标加 韧判/韧显（toughTry/toughShown）——下轮真机反馈可直接定位是哪一环失效。
 * v1.1.20：我方韧性白字抑制——0251 calTouchDmg + 0075 EFFECT_TOUCH 反编译实锤：
 *           setIndex 2004（BATTLE_TOUGHNESS 灰白数字集）=目标韧性吸收的原生表现，
 *           双方通用、无阵营抑制。我方英雄带伤害减免%（神话 bindPower2 词条 power 35
 *           伤害减免% 等）被击即现白色跳字（原版环境无此词条所以看不到）。
 *           按用户口径（原版环境我方无白字）：243 action/draw 首调判 setIndex===2004 且
 *           isOurSideOf(numPlayer) → 跳过原生 draw（物理链 action 照常、removeShow 正常回收）。
 *           敌方 2004 照常显示；vo 缺失回落不隐藏（原版表现）。诊断计 stats.toughHidden。
 * v1.1.18：我方判定升级 isOurSideOf——官方 isMyPlayer/isMyPet 覆盖不到组队队友/佣兵，
 *           改用 vo 阵营类型反向判定（monster 系=显示话术，player/pet/mercenary=抑制）。
 * v1.1.16：我方过滤（用户实测 v1.1.15 全通：角标 桥2{弱28 血27} 戳26 映21 实25/25 态25，
 *   衰弱/流血/真气贯穿全部显示；但我方头上也弹了真气贯穿 -450/-6100）——
 *   【定性】0075 实锤 createHPMPUpdate 全游戏仅 processBattlePower(1156) 一个调用点
 *   （战斗威力结算专用），技能耗蓝不走此路（v1.1.13/14 用户实测施法从未弹我方真气贯穿）
 *   ⇒ 我方事件＝敌方抽我方蓝类效果（除魔法阵等），系统行为正确但用户要求不显示。
 *   【修复】官方阵营判定＝0241 executeHPMPUpdate 原文 (e.vo.isMyPlayer||e.vo.isMyPet)
 *   （本文件 isMyOf 早已实现）：routeMP 入口 isMyOf(player) 为真 → mpOurSide++ 静默跳过；
 *   同口径过滤 routeDamage 的衰弱/流血分支（需求文档语义「攻击带该 Debuff 的怪」，
 *   stOurSide++）。我方伤害/暴击/MISS/回蓝/韧性照旧（原版行为）。
 *   角标：第2行尾 己蓝（我方扣蓝过滤数）、第3行尾 己态（我方 debuff 受击过滤数）。
 * v1.1.17：APK 正式包去角标（用户反馈打包进游戏左上角有诊断角标）——ensureBadge 入口
 *   按 UA 判定 /Android|iPhone|iPad|Mobile/i：手机/WebView 环境置 badgeSuppressed=true
 *   不建角标且轮询重试自动停止；PC 浏览器（http 服务器模式与 file 独立版）照常显示，
 *   排障能力不丢。跳字功能零改动。
 */
(function () {
  'use strict';
  if (window.__worldolFloatText) return;

  function log() {
    try { console.log.apply(console, ['[跳字]'].concat([].slice.call(arguments))); } catch (e) {}
  }
  // 两阶段初始化（v1.1.0）：阶段1 等 egret 引擎就绪；阶段2 在 init 内等战斗模块。
  var booted = false;
  var api = {
    version: '1.4.1', ready: false,
    disable: function () {}, enable: function () {},
    skip: function () { log('尚未初始化'); },
    test: function () { log('尚未初始化，请等游戏完全加载后再试'); }
  };
  window.__worldolFloatText = api;

  function tryBoot() {
    if (booted) { clearInterval(bootTimer); return; }
    var E = window.egret;
    if (!E || !E.TextField || !E.DisplayObjectContainer) return;
    booted = true;
    try {
      init(E);
      log('egret 引擎就绪，初始化完成（等待战斗模块挂钩…）');
    } catch (e) {
      booted = false;
      log('初始化失败，将重试', e);
    }
  }
  var bootTimer = setInterval(tryBoot, 300);
  tryBoot();

  function init(egretRef) {

  // ---------------- 配置 ----------------
  var CFG = {
    MAX_MAIN: 24,           // 同屏跳字上限（每次伤害独立弹出，超出时最早的直接消失）
    MAIN_LIFE: 1100,        // 状态提示总时长 ms
    ENTER_MS: 150,          // 状态提示淡入
    FADE_MS: 300,           // 状态提示淡出
    // 伤害弹出物理，逐帧取自 H5 EffectNum.action：横向外飘、抛物线上升下落、落地弹一下即消失
    JUMP_TICK_MS: 1000 / 30, // 逻辑帧，H5 与 A 的战斗逻辑都是 30 帧/秒
    JUMP_H: 2,              // 横向速度（A 为 ±1，H5 乘 xhdRatio=2）
    JUMP_V: -8,             // 起跳速度（A 为 -4，H5 乘 xhdRatio=2）
    JUMP_LAND: 12,          // 下落到此位移时反弹
    JUMP_END_TICKS: 5,      // 反弹后再走几帧消失（H5 为 4；2026-11-10 用户定 5）
    RECOVER_END_TICKS: 4,   // 回血／回蓝保持 H5 原值
    RECOVER_V: -5,          // 回血／回蓝起跳速度（H5 为 -12；2026-11-11 用户定小幅跳动），不横向移动，落回起点后小弹
    RECOVER_PEAK: 15,       // 回复数字上升的最大位移（5+4+…+1）
    RECOVER_RISE: 112,      // 回复数字出现在脚底上方多少像素（头顶上方一点；伤害数字是 64）
    JUMP_PEAK: 36,          // 起跳到最高点的位移，用于顶部避让
    SUB_FADE_IN: 200,       // 副标签淡入
    SUB_HOLD: 700,          // 副标签停留
    SUB_FADE_OUT: 300,      // 副标签淡出
    NUM_SUB_DELAY: 80,      // 数值型副标签错峰
    STATUS_SUB_DELAY: 160,  // 状态型副标签错峰
    JITTER: 8,              // 水平随机错位幅度（避免连击数字完全重合）
    MP_MERGE_MS: 900,       // 同目标连续扣蓝合并窗口（同回合多段合并）
    MAIN_REPLACE_MS: 420,   // 主跳字可被更高优先级替换的时间窗
    STACK_MS: 900,          // 同一目标在此时间内连续出的伤害数字分层错开（2026-11-09：多人同时命中 BOSS 时数字重叠）
    STACK_ROWS: 5,          // 最多叠几层，之后从第 1 层循环
    STACK_DY: 30,           // 每层上移像素
    STACK_DX: 22,           // 层间左右交错像素
    STACK_GAP_MS: 180,      // 同一目标连续伤害的出现间隔（参照 H5 EffectNum：每个数字独立对象、出现时刻不同，横向漂移后自然分开）
    TOP_CLAMP: 46,          // 顶部安全边距
    DIAG_LOG: false         // 诊断模式：控制台实时打印每次事件原始参数（排查用）
  };
  // 低端机：只保留描边+淡出，不出粒子
  try {
    if (typeof navigator !== 'undefined' && navigator.hardwareConcurrency &&
        navigator.hardwareConcurrency <= 4 && /Android|iPhone|iPad/i.test(navigator.userAgent || '')) {
      CFG.LOW_END = true;
    }
  } catch (e) { CFG.LOW_END = false; }

  // ---------------- 样式（按需求文档） ----------------
  var COLOR = {
    damage: { size: 30, valueC: 0xFFDE2E, stroke: 0x4A3400, strokeW: 2 },
    heal:   { size: 28, valueC: 0x63D32D, stroke: 0x254F2F, strokeW: 2, font: 'Arial' },        // 回血：A 0180 原文 BATTLE_ADD 样式
    mana:   { size: 28, valueC: 0x22DCF2, stroke: 0x2F3D60, strokeW: 2, font: 'Arial' },        // 回蓝：A 0180 原文 BATTLE_MP 样式                       // 回血：绿色（2026-11-08 用户反馈回血与掉血同色）                       // 普通伤害：官方同款黄色（v1.1.30 用户官方服截图定案）深棕描边
    crit:   { label: '致命一击', labelSize: 18, labelC: 0xFFD24A, size: 32, valueC: 0xFF3517,   // 暴击：金黄标签+烈焰红数值
              stroke: 0x7A3B00, strokeW: 3 },
    mp:     { label: '真气贯穿', labelSize: 15, labelC: 0x8FF3FF, size: 26, valueC: 0x3FA9FF,   // 扣蓝：青蓝标签+亮蓝数值
              stroke: 0x4A1E86, strokeW: 2 },
    weak:   { text: '天煞一击', fill: 0x9C6BD0, stroke: 0x1F0E33 },                             // 衰弱：暗紫
    blood:  { text: '血煞蚀骨', fill: 0xB02E3E, stroke: 0x140409 },                             // 流血：暗红黑
    mix:    { size: 20, strokeW: 2, fill: 0xAE5B9E, stroke: 0x1C0A20 },                         // 多状态合并行
  };

  // ---------------- 位图数字与星爆（v1.2.0 移植文件二素材） ----------------
  // 素材以 base64 内嵌（避免 APK 虚拟域名 / file 协议下相对路径失效）；
  // 加载用 egret.BitmapData.create('base64', ...)（bundle 验证码同款 API）。
  var BMP_SRC = {
    damage: [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAABKElEQVR4nH1SsUrDUBQ9L1ZilQQHdRHFQagiiIKD3YqCm3To6Ojk4jfoNzj4D24OiksnB92KWIji1EUqVpQUtYnJrdyXd5MHggeSk3Pu4b737os6WoSNAQDX0hGAMRElq0DVA0dt1h34U0DYA27Pyb05JQLgQF4AwrU9pXb2syCDmTX7XLfDXrWRfV6fEY43Es0M43t2GDPz3AC4vxwynRjOfQkHld3CeG3r0KFhDVMPsgOmAMX5IsWJxUvTYhoUKSTvoyYS52HxKEoADPU2lp+ahJ+eq5/ZVd2tySwe1zmXr/3cdhC9uJhbKLPcYmbNvkCZGwwr62Wvtj39Z99XF110grjPo5cb9B9b3zRCH2plaRIT4yV8fiVo3b2h8xDzWHy7s+Dff+MXahBqkx3+JgkAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAYAAAB7AEQGAAAA8ElEQVR4nHWQvU4CQRRGz6xL5AU0a2toKExIsNWCzsrORhPeghZoDY9hZaUxtja2VDauDSEx7gIhQEIwMK475M4uPwnsqb6592TunVGNAiv6wBGg0rMBHAkucAW8lm6VOi0rzi5tneZ5pOptaWOlp0rNURc3SXMfDtD5+TS8P8Z8+yZTKn69GP/tPtbdj2yJetstZs5KdyLWyT4m2uTtupWicQ7Q/P86aRb0Olvpb3gIzIinB2kWZussUtCqjk7sjVOXRX8lQas6kpeEqlHAXN8d43n5nYV7vTnPD4NknJ64LHLJ724jdUFuCgA7LoNwCbJ8UpQo+YUYAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABZ0lEQVR4nG1Rv0tCURT+7vOqZSAVVlTro2gIEZrCICyh8E8oHPsLxDGVhraWNoegIsiGCEIbU2kofDQ42eBSg/3QEkvhPZ/3xr0qL7APLpwf3znnO/eQuAqBTQBXAByw0AFwACAqHNojpQNRhXgDCtweQG8BxSyzZXZZBMBtTKM3iKvQ80mF8zodePmkwkWe1ykUAOH7E4aXEsd5ooPEkolChsnZ3oBId+UoMY2mWq+oHG138HTNKwBK5QKXRLfHEiw0IqbRmX4gsWTqswtE2u/P3CIyQ7aX2Fs2Mq4pOBZXbGAGQenOFGFDcKj5ZZek/VBTbL+xvmOHS3Hgs8zwcNoWqbDg0HbV2evXTPu3nGROHUG7CuTOGmh9cD1yPJ4SPqldTuMwWmG+4BDxB8dkSVH7Qe7iu69ICA2RuIq3ed/w5OraxJ+jWHjU6ihkG4bYetRFndBr8gMGYDa7y4qO8oTC/pfZG/0LuKOOteVrWAsAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAYAAAB7AEQGAAABWklEQVR4nGWRTSgEYRjHf/POGLXJ18lHu6eN1OCilHJxQtZ1c8GJK4kj6y5HBxfloNwkyUkbKYVizU1KDnY5rC1r2Gk+9MwK5V//t+f/vE/Pp5ZJIjgEhgGNX/jAOrBkAOlYCyPDS4qOPkVtDCoO5LKBnt0IFp0CFpkklZNNFYYl4x9z+yrMJAkUMHm+HXB3FbI177Pa50W2QDJLC2rl0th1Ctg7sz6Pp6ENuIX7apCUFih5Vi6NbiAPWIlBzewditw/GY3ArTqA1uktg3hnVZfyIXvLnpi28l5rEMrITzY8XGiRjimTsTlT/JZWPmtmbap4K+J7N3p7j2JioTHKmN17Q0lAU7uyUjONtHbqunyYuk7luTai4ZvIMq3+gWba6mOMp+ohVW3QfQHXDbg+dqIgO3tQtLosj0S8jqYGk3fHo/DyQe6myGc59LXv26WBban053Yy/xEw+gXSb4q4aVGGHgAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAABHElEQVR4nGNsUGFAB38YGBiYkfj/GRgYmCCsDyxw3KDC0NVlw/D/xzOW//8/QPDyQsb/DSoM10HyEB0IUOKQxcTAzsWAFcAVN5r8eSZny8ho6sXE8OkNAcUMDAySLukQ7omN/3ArbjT588MgmpFBVoMRbOrx6dgVszSa/AnnEmdgt49gYfj3i5Fh/wJQYDAw/PsFtfTvXxCp3mjyx5MR5FNVZyaNkCJO7A5lYGA4uvknw6EZf36xgDj/fzAy/H7DjlPxv88g2/4wML5dJ8kwuew5yJGMyApyuyTB9Jblbxjun/8Nihhvll+vWBnSS+RQwntmz6P/IHGwqT/AZtxML5HbzvLzLdglGAAm/u8HxBwQH+RBrM5EchY8bQAAT9RriIs8FN4AAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABTElEQVR4nH1RPU8CQRB9e7d6QgJGDQKSmEguIvGihRQmJPoDDEYrSvQX2NADPb9AG7Wyx84YxcoEbBQSoLGgQgQvUngc5405voqD+JLNZGfezM57y9IyLHwDcGE6CMABSOVIy6DGq0ik8onzdC5QWkZXGLUtrzL8B25P3GR+Uc2R/emjCaKNUE0VeXjqxGhcQDQOqB/Eyg+0kYkYZqrIBW7qgzVHMRDEOG7uAnc+g2UihsaNrxkAOl2eGX019YKJpXWG46QET0DEzp6I54sfSeh9Sla9bBHqBbOUvFpkrRrplTzBqjlMx0B1NtF+84dEJbLvQjHfUbKJNvlDIuS1eXQbIlrN3tgeZXtrAStuJw5jbiA2VKUBuga83KvWrWMRS4+3bSWsGPB5nfB65qD3TDSaGmo1FfV3jU5Og242/Os4gGsAsza3KgD6Pv4BHTGFGY4yEMMAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABgklEQVR4nF1ROUgDQRR9s67ZrFFk0SYWKTTCoqYQI4gY60CaYGUhopaCnb0bxCZFmiCWaiOIBGw0iKiVJN6CCoKSSBCPGGIQr6zrjMwsgnHgM/8d/zEHMbz4u84AdFQwwDkAH2ElWaCI37I8AVLVNyShtYsI7uqIYTNO8XTO4uBGw4v12TBhn3cyY6XK2l+SmOGFZccBwcAYgVID5HMMi+PfguwZlrAdpQxA7NdIfP2SaFIJivcHcJFsR6kJIDx1KCfliN/a8gTsM/FVzAEDMYk4XQTZU+ZIzdG1iN8K8cQmtQ6gpp04aBAoqj3Y4gOcqkV2YnRVqLRMYD1Xi0qvMEz3mthLUIHbOhVucXCjcXvC8FVQRF1sUC5cZtI2p1JVpEsTUffyR5EhewSUHxV0dLs4rzc2OAUuXNn3lc18Nd/vDzdf3cFQLXSPBn1SE6KZB453X3hbJjczzYJcmM9Qr+4i7W0atHoH3t4tXGdecHJQYiOjzRL599d8vO4PFu8IIPkDgDmeTtGFRPkAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABLElEQVR4nIVRr0/DQBT+2r6GdoQERyBBsYQKpkAhMAQFGAwGxR+AJEF1C5YgpwgKgWeAJcFBFYJlBpKJDZYtxWzLXX8cee06CoHwxN19P/K+3HtauYgWgFn8XQqATmzavzAw72i/ui4rkda4UnUd/9TwI7la3LF9vhd9i9451VFa0/F4E6N5r5Tr0Tq5Hs1lhspKWF/c1hw2iQFwV42ZPuHjZ7SzvJVSD7UYgzdErkeHjCmWqXC8KncLM8BCyUAsgadaxHQ10yn0zVEzeba0YYCxGCp0nyWOricPQj9VKehOjIx9e8o2wbj9GiTMlwaQeB8DY9ougHHvJYlVOQ0kO1k0YEkLskPwm7wMBHmNRI9HmZYpLAgBhP30A3lNKxfHbx5atkduuQngNlM/AcNNbwI+7EDvAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAYAAAB7AEQGAAABX0lEQVR4nE2RzyuEQRjHP/POa1frR1GKgwM2LispWy4c2RXFZfMnyFmunOXk5ChyldDaE1FKCMkJSQ7a1WItdllrXj2zxFPPzDzf5/s885151HQQsTgQARR/5gEJYMAVQqCeaGTSobXLwR+AjxxcHBmVmDHRXJI400HM2ZrjeRnXe79zvdt9bXeJBZe8K1e09zq2/1ysSC4JdSHF+IJG8BWMsllpL9YYLkl6S4scyKZLuAt8HWwY3RNzGJ3SXA6WCFK4vfRljw4wtDVjyD8rTMGhpV1bvzmD02VbMCKk9d4xF/3uY2fRWC8+ldHU5EdwycuqOzqr+Ewrduff7P+YF626+yro6PSxy5MuPeu5nI+Un4Y2LZF6uMHGgv8K94638ioUqibS38BjuEBtrY/CvcP5edZ2FtLsXiIzkXtABZurqQlU8poqcnWd5eQwI8pn1c/sosAq4Ps3uwIwDGx+AwEwiRRb1DxRAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABZUlEQVR4nF2RTUsCURSG3zuOQoWWLqQgXRnOonYhlESbFhYEQVCrcNeuRf2B0W3MukV/IGiTq9KtIYG5yQSTaVcJEkyaH2A498S9jvZx4Nxz3/c8zJzDZakIRGwCyADw4Cfaukm+saKmilQEPH+uUOtZJWqq1Ci7KKMzEj4RQaSAPoUpgP95cSzhugAVAN6VXVGA20uO9PIAj3kudXxf+nPikLdgmMnGW5VEeSpdyYqQNvTHYL83FIF52dB+LYToNkN6gVVVsU/tjtjimgsbBwqiMY5QVAH/ckjbHn8xmzM4Hm4I3bqKgNeD3JmNwYdbJu8Pf886hQCMpHUNICG0MCNxF3YOpyVgJC3oJjHVSFqnAlrf87JyoSubsVU/+g03ahU5vNxMzHgST8wwLeyDFvY7rwB0XjmK2Y5Q2RF4Vim2j5S+G7PBCUxNqnip91C6f0fLsm3dpC05o/PWf2Z0oqKbtDRS302Ml0lK6ZZVAAAAAElFTkSuQmCC"
    ],
    crit: [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAASCAYAAACAa1QyAAAB4klEQVR4nJWTP2gUQRTGf3N33m4wFxPX6F1hBLngP7iIAZtAKkNELEyjgoWIWqRxy5S2ppKtDFZ2thYiYqMcqEUQTaGFMf5Jc6eneCcnyXq7jsy8TfYSUsSFj3nve+/NNzvvjdJa879frtvxlXoAnAWyXfRSoHU5iVtCrSn5Sq2Wx3FOTcGRY5Jdr8Gzx/DyPiEwFjzh1bqSr9SvygTO1evJ3k1Zij1wcQq8As7DuzyniWv4jK/UeGGAwqXTwDdBcwnq71J/ogLlERz/PHeMb5TunTwO7s9E5DfcvC325QtwYljsscPwYYEr1JnOAEPDBeC7YH7e5jSAR6/fpPzRXss7xjZF2aILekWwXLNBUzr78XPKOxEUd4M/xw1TxK4s6D8CYjlOoHW1Haa8wd4+G5q0t6ejtCmbe71VTIo6XVmJ0nriFjF7vFoL/kaCHpmRomlF746UN/j01cZmTUr8o012T152GbDtYz8wc8CDOFEKY2h34NYkVaO0vNiAqCOoeLAzxyBwZrSU8m9FJTR2LtD6oK+UHvWgL4+dk2sjsvOgC+GKKD19b5c549uB9ZWql/LsOze08RLWvhcNWGgRTpdl9jZMuZfBOeRAKfm/VgSLq/AlJgy0dqv9m55GUrit9/QPPBDELB4z3hMAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAASCAYAAACAa1QyAAABRElEQVR4nJWTu0oDQRRAT2TABVMJNjaSNOksDGJhJ8RCUqe1NJVJaeEnpEg6Wz/CwhTa2AQrsZWojYRNhOAr5jkyM7vhurv4uLDcmTNz5nKH2ZTWmv9G6jDOWsCmWQvm5tRrYGsu6SZUdjkAakB6vQg7Rchk3Yb7NtTL6EaThVBS9G2ulaqk8xvgecGK4/AamVvJt3lp1QPvBTCfjOcg+1Lq2Pxw2yJzd+NgIS+kXpA7UupBo0y2ckLb9ASsFNaE1I/IRtIDN6jvY1uvnqJDZuMzuELBlB5FejAbBNPjOFN6kiAJpqdxpsKTZEgWbpZMzRIqzRIqSaamCZWm4/hYMjUZw/GFvaPFEBo2l1yF1NG5fYNDYNs82LPcMnulXLxiNK6e4PKRrjKT4QB63d+l9+AdOmkE/h+ktw+Xw//pW08/hO3pCyNEefj04dlmAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAASCAYAAACAa1QyAAAB80lEQVR4nJWST0gUYRjGf7OObpkrHlKnQ1auEQYdYis7uWBQRARCHQoiDyHMIQwKoUOdunQJHRC8Vbc0O3hYogQLlyxCKkKIDuuaRDRuy1o7C5t/ti/enZ1mV4Xwg5dvnud533n/fK+mlGKrR+urxElgr/Bl3A/gPBD/F6Qm4NpJEkD4RC8cisC+Vlf8uQQzb2BqFJzvzFkTtHmZOkNNTF29DUbz5uXYizB0B5wUUesx8QDwJNoFhhSUcm3+PdiffCya+IivYB04HRthOr9I8NhBeDAO9jdkOpp5Gdpb3GxHd0EMGrEhYJm8s0y2Tb5kfuh+MWDOMpEKnr5+C6Rda8iXak1DQOVBbLCHVidPdLCHNsGAUVvlamJLGTdGvnW14jc8cJF4GT7csRs8nLSL17JgXa1tnNb1MbLH96PtqQdP/7BQvCYF62q1MuDGOAmjntDZA+Bpn9Mwu0DhXjdnhNP/lGXqj5GoqyZ8KQI1gGi/1+CRDARinq9eKP3t5nMSdTrh3g7YWQMeP/IRcqs4d0/R7XFatgtuvSC7Qyd05Qg01fqZnyXh1ZeK6uX9ZmSNhltCmBfaIVjlq8sFyK5A43af+5qDh7Mo2YhzRjU4GXDWTVE2K53z8a/SA0sQOQdShY2jX38yXk99EAGmgeD/w9ye/gK2lLs+gdPaMwAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAASCAYAAACAa1QyAAACGElEQVR4nJWT30tTYRjHP2ceOyM3jKhhFLW1oQhRF9bNoAUmGWx3QT8uootu5oUpxf6EKOgiBkWBEHgZFYTYBClisoqMSjZIF3MbKrm5YZmVO3Pbifcc1tkEL3rhy/v8+r7PD55X0jSN/z3StWb9BdAPtDTYxKtZ4PA/kjYJQ2d4D5w4GkDyngaXG6xWIyCThsRHeDWiq/PhSTwik8/uIHo1BK5D25eUy8OtQV08bgnfY2p9BfV7GlgxkPsCmU9QWjRtHRIELuqkCZmcLjwcfUCQCyifkxCfMXrxdCINnjezHdihX7stFCEcZFgnPkaNzxAJB5GAsdRXEP46Ngo6qSLVrpgvDY/SA7wBFPd+6DsC3R2m/1EM4vNEZK3c1O+Evwelr7Nh3mXIrsJrUXYW9e4l/LJW2TKmKjTaShVI5SH9TVeXhM+ibUIdwIeFIrycg9llw6Zo0OuEAR/YWnFff4LPUquAwI3n+O4E8CeWiEQSFEZiVO/HDJ+AwwonjbKfWqqbEBrnp00mGhqnBCzc7scB9KaLIPx1OO06aY/YiJRzF+7LxyC5CtOLkP0BbTJ4nXDqoNnf9DKMzfJLbmvBfdYJlKHLBl3dzXNRN0w5mdevKfl3lcy7DC7v3u33Tpy3BUiuoQ548EvRdni2RskuobhbYZ8COy1G4J8aFMswV4Z1DfVcO/ruN/4nId4EbFuSqGLFxMLULX8BieTIt4laNGkAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAABf0lEQVR4nJ2TPUgDQRCFvwuLEYyghZrKFGojxiISJI1F/AHFThCxsbUQNWBpKrHXztbKytLCFCKIiIjBRhBtrCREQY0J5u9yspfb5LJGER8cN+/NvJu93VnDsiz+A2O1ub4DLANeTS8ArbbRSnx3rU2RX9rGGwp/09lNYMhY8KYl50kNT+INDYCes+FogrTLtMII0DMXBbfeAEcXpBrk89lp6MgBOUg+gN3ZDade8OJ02+PS34V3MgBSy5fg/g5CnZrRqRfWZ00KL4yC4md3kMvWuYLiHqsI6/tkokGMQDtI/voOpzeAWeXqsY1OLGIHjPlaaJ/oB6tcTR7fQraAnA1DaQqxAz6ADTkA6ZkgXeN99eSjs+WtAvy+Rv0pA4dJssJuX4GK68u9ruKKplumHbbZxooJZok/wXTq5FLloZ83mUsGu2FxqM43T6r7A1yJeIRrNbhubF1wZJaZKWjHEY/gkW/x8vzzsqRJzysu0r8Zi6DnFf/pPirktX+v3ccvtuSNtpNOu0YAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAASCAYAAACAa1QyAAABz0lEQVR4nJWTS0hbQRSGvxtvuFEUtagVbAXxWcWFpVLdKLRWwcQqCII7d+qmqYi0iy67ELoocSWULroqCIKLGLCFQkQK3YnZJAsfoGAxsfVt4k0cmfswAQ3iD4f555zznxnOnFGEENwXyps0jwPaHfkJwKWIH+bO243wWTwbvs7Amp+AygF4h+goKAPJ7zwHUNkz1ndVtWDx7DizRX8txylcc3ndj7ef5fuAWyVmbc/hmqcRBbaBCd8Yy4YnBg4hkyWSILltL1rA85zStkae5msEvbMc2TFVXBiS8jwVLG6gryHN+5vgZ5iCt9+Ifx7GpYqk4S/OlSKT34B8PE8DRI/QJr6zqOgDZmBygXjzI7THxbAchhMdepvhZXVaHI7BlxVSjsskSPvkwRXaIRAIET3R6QSeBUKIzX0zLq2uyNDmOFI6TPkZnfJznK/SC1xO91idAmTctrO49U5J3Vh9r5+g1T+AX1s8fL+EMcWvaqAiD6wc1v+bdeTAbrRXUNVVeXsTMjEXgcg/OXswsrpLsFz2PTe74HcUIockxmtwK8FCmD/kD9Baq6KUOqHECU4FdAExHTYvYDdFYrAQlyyQ+Z8kNgB50ZwMXwpYAty25woLSqKgpaMXCQAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAACNklEQVR4nJ2Ty2sTURTGf5NOkxQdkxZDG0NsTKMoWB9QsXGRLooWSkFFUVy4EBSiiClu3Khru9KsLBT/AlvU+lgUijZCQdSFWo2kKWlLFtHWYGNi82pG7kzSadCVFz7mnO/c79w755wrqarK/yzp2t9cABgFHBu4NWAR8K4L1QkjGjpGRnGi9JyFQ36wN+t89DPMfoHJES3Bs/AEJ2R+VkVnSPm6US5dAau1mqka2+PSsdNNw/BtBgQv8x1CVwkozbSePw7WDCAAJJLQZIW2rbo/+177LAqNTEpzRnu6wZ4DcpAvwshjiMcQlZN8u6DdBZMvKYRv4hUamWVN6Oi0Q9Xm9Ywm+gXkhR+PMRaP0RcO4q3tMamrutFqBmELRBPQ1oIycBiHQIeLIOAJDfOmtke04/k+D/0X/EZ1pxNwZEd9j+bT8OAVZAuE755j0CRIMQNq2YDfXe8LtG+Bk11ajqDw5Vp71ZKR/esyPP0IqQz0d0Jvh84fcMCjRizXHxIQJw4lvkGlbGD8gyZ6AnS9+FQf8+jzdMN0p49ItgTpLKyVdGzXJ2bv+ryVDKiValXL+hWX3iVB2AL+bbBJRlzw7VGfwQvM6+0Ykgt6O05PJ5g62AKWBrBJcHE/rBSR3JuhuoeZH5ArU7jlJyJFfTp5P07G04TS6wSzVuv6lS7CeBJWK4Qv+xiUpmxGcGyFjCKh7DaD0wKNEvyuwEIe5spQUJk7ZUM76l/v8Z7oFWDZwC2J3wEiNeYPwe7fh+NgubIAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAASCAYAAACAa1QyAAABXklEQVR4nJWTMSxDURSGv3KrRENi6SAhpGyIiMRiYGCxVmK21EDFZDBaLJpOrAaTlcHSAYtIF6yiFZKmWiTSauu1V+67ntzXNmmd5bz3nf+/59z73vVIKflveDZ0LgK+Fj0lAZyNL+Fb/XU3i8gCPmWCEvDR+njaVAAyzcXprM4euQOR3cZ7Co7C+rJ+LpYhegzpFx4EWYiF6ayb/RAZmgJVV3F5bxs+Y2GCQn7Vj7F5RHp+EgIdoOrJHJxeob7NnHoXstxw/MDsIDi125SdktEVEooJabnVWyckZkag1wuqVrQgfgf7IYYdrZDfdV0mxgLg8Ee9p4qpE9WaTkD7gB8c/vxupzdTJyrGCtvnHAz1gVeCw59ydroxdcJyj7fY3wMmk1WdTSZK7iP3qy4mS+lOeyYT2VeXqcvKg8nyFVgLcmEykXGbutsKkKk50RrN331y4hqYVtxg6g64frMfFyWKYLUagRkAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAASCAYAAACAa1QyAAACKUlEQVR4nJWTT2gTURDGf0mT7KJJUzTRoJdCSmnVVsVTUCoWtYKCUbHak3izKMaLoAdPXrwo7UEtiHctKhRStb2IiKDSXEwIEQK2WmtsU0uzIdn8MStv38bEPxcfzO583873dubNPJthGPzvsl38Hd8FzgJKE1cCxoBLv0TGtHQiB9E7+lB2D8CWHlBV0HVIxmHqAWTiaKPTtErROEQGyYWO4Tk99O90hPjeHUi/YWJ0nLCDRZP3hPeA5fNxHtKz0NMFAR+owP6QKToiYhyRC0z27gB1pbHz/dugaSzNbMZ/VVQIdK81Xy1kwAF8KghBtimfqvnMZb7gr/N6xfqWBfvIGYbTc7DyHYyitPOHwK0Q7N/Z4F4lTIkmfLtRNsG3J++gWACBN6pw/Tgc6JD49QeIvjWPfp/AdkOmkn8/C7E5ELhuollFHT4vy8xunSQmeNHcEbeTyPBeCLghk4evGnT7QRUVWyuaghcptJthWgV97uh22KBCrQrPkpBYoOR2opzaBV0+KepvN0UeEWMXI9PZBj8q0hILcGMANV9h4uFMg3casDUAl6NMmgm01KBakzu2t8GVKTRRzhoXVOtHDRhWjBCVYvMo29ZLYrAT4su49SruXh+UipLPlSG5CNdCHBaisedpIi4d1rmsv9kAJ5RXZc/LNXg6L1uTXQLbSy88XiWt2AgGHbDJBV7r1Ao1yJYhVRZdRTvhtaa86T71AY8A/x9D/td9+gk4stYZQT0uwwAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAASCAYAAACAa1QyAAACEklEQVR4nJWTTWgTURDHf2+N3TYarGJtSkWaD6o1KJqg0pNCqeJB9CDBm2BRetH1JHjWq+CCYL16U+hVQQStqGCwKSKiGNNoi+bDVq2Lpklan7z3okmgHhyY3Z35z39mZ948IaXkf0WcA9w60RFiGuhT/qaYz8BxV8pHf0nyHjgHuQqMDp3G3pGAUNiAhTy8nIKJW+DlybpSRg3pNjhJFk9exI7vXvl3CkW4dgm8EilXyn2Wk2R66Ch2vBcoGf2WhVy6YQcFjJzS/D3q4QNCezerdCbr6xkYu6k/ZbQfcTZp/CEfDA4iHCEmLeUILgNzRp8+0zF3XCmtd2+ppCcbWH+nxmKaJMsN9a/SwNZ6O9XZQgPradc+W5Py8yCrRveHIdhJxBFC7uwjMBxtYN2GpHvKpXKEjmw3ju4OuDDcOj251GpbV44RfvCKypMsyFqrfvXg/puGXS7XK/0yWZzxNO7jDPZAD3SshvkfkHoPh2NQjyG/YAr7lmt6jW44QpwpesSKHp+AtcAsEN/VBSpGSUYtFMz5lmp6574neglENsDDLKHST9jkp+tABNZYoGKUTM3o12W1sNe3BBg9MQC2GfeK8rwEd7NUXCnb1fQOrbfA+wLePwgZNZAiFdW7ssXEOhhfYDEgsLe1wcY28OvTg3wVPlbhw7ImjLlSntekP/fJEUJfD3XiTUXUgr1wpUw0l/4NygTTwsZlhK4AAAAASUVORK5CYII="
    ],
    mp: [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAABN0lEQVR4nI1Su0oDQRQ9O1njYgrBLGgREBWsBG1SaiG4EPwCO0s7/8EfEG0sLCxt0gphGxsRIaVBQXw08ZGwMUYxiejulTPJDFEbL1wO53HZuzPjiAhMOX7wBGDcCkBNonDCMob1QHalq3b2xa1VxZW2RnLqNtMPXjtb273Qr6ZOfzAsqdsrbaqDQ5oayamTM6fsvlO53lrFY8JmH63OUo4fHKm1RQy9i245u4NE4S7RaPSZczmRagrGLmM9fT9wFEarNwUJAB32Ggmyla8/YaO9NhJ8cg2JwtW38inSj7HuzPQcP7lHNBp95uwPvjw/oCNAZnKedINITt2UXgPATfW8NOMvryOdLyCXL2ixhQT1clH7+mTMdTt+0HUXgmFvdglqZBRJu4VOpYT44uRDotD7Ef7P2/gG90HJeDv66GIAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAYAAAB7AEQGAAABBElEQVR4nHWQv0pDMRTGfwnRWBAEo+DuKE4iiHsWHbp3EPEF+gjibp9BcXG1g/gEDtK6SMGhODhURaVi0crVmkjSm3Kh9cDhfN85X3L+CIwlt2tgBdA5z4CZABSwBlyK6pYWG6tIuxkVg4WyVq91kuhCHu5puVvmP5NAw9+0ccd1fKs9WaV8H4w9x9hneXTqle9Hx9gQY11OfXpK92fb4YH49gQePFjCav72NyY6QOnBMVfgqaZMazBKznYcRZ6wmn4cqiN5dxR5wqpZq1wB6/lIfA3HidasVVzYXmCsW9w5EHppeWzz7OmOl5N9H47JR7dHJt/GRD/dXozhp1G7CWcMzRt/ZDJqIISPVi0AAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABb0lEQVR4nG2RzyvDcRjHX/v6MAeJfTc5WFIOyo0VkZKscKGI4sLNmf0LbpKDC5eVMidCwoESdpmUND/KhcLaxubH/Fh899HnOxtpT33q8zzP6/08z+fzWNDdAPXAJuDg1xKAB5hNu7q7Ht39oXkXpQjfSCHfpEg8SG1pTaq4ygv5ZoIRE1LAv6N5FxUcUaAG9KVmVpDBS4yxSb7s3aSWt81mWlcLmXE0cb+6x1UsYLR6pJzfDwAb8uA4PVaZLTuwyH+V5F+vNGQC75U9Ea2mGhVPXd/wBeZd2M6NrOq2o3faUl7qcFQ1kXdu8LR+SBKiihF6UGngxDOgvmjU2TlCyW0xnxdRQgtrKtWnGFEQylb0V7QNWctsLggZ3O0ukYrHw65x357yLbUTUU6nBj/0ph5reWO/qYid7RLamssUSALNFnT3UaGrvc7eNvxnKb/2eLRBYscXFYDT0Ip4jsRzgskXtRVQFdUj/IA1J/nT+hvVVp0Sz09PeAAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABkklEQVR4nF2RTUhUURTHf/f6dBzHnuAbtYVoFi7CWSjqJkQkGGghjoIStXIptClwk4vciRtBUEFXLgUxeCMGKUIgUS0UFAQFwQ9oQJsxEHX8yPdunDdo4YHDPf/D79z7v/cqnDjAKNAHhPgXZ0A/MJWTTryVxpdGLy0b6+zYWCYbrPrjvJE+TnzUMtkA/KWnZ3LAvdRLywJeCqiBbn/cxfzYwOsd5CaaCGoJ/ayBWzvayiRX2P+d9No/eGZhPQmkzfZ+zlYkfGdY558bwgduJ7AGdKgX9WX5bS1IX31ZF8aT2ird8oKJFDRHJ4ZV6EktZMDbSXP0Th6DBWG0s3mDJHAe+rpH+PN2oMtTNo+63ki/XbRqGkqzOvLalQZwIc4ij2PqaddAcNLP77McfnP3tEDWw+pEdc/7vMKaWDGgVOEDLgxB+qGI8MWW7FTS9gqvqo5oTd3dLU/w8a8vSa9+EtmtcOKuKrITVuw5BZUx8uwK/OwJfzK7XG8sYo5Tp3bvmC2gTLQCc0DZf399BUwCb0X9BXd9o2fEDwaOAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAABMklEQVR4nGNkEHZlQAOfGBgYeJH4PxkYGDjALJb/3+CYQdg1ncE4/D/Ll7f/Wf5/A2PGwqb/DMKuW0HyTGimTmSqimZg4OZkwAbgiv+I+J9k9DFgZwpyYWB49Q6/YgYGBlOmkhgw49+K7dgVs379DzL1BVOmFyObogoD84O3DP+aVjGAxEGY8TdEIYjN8l0+wI5RQlBczC6Qgfn6X4Y3c1eBJYWu/wXTr97/Z/jHwOD8XT7AmBHkU15TKy/F8HysVoM1HN3C8GL94tcsIA7z1/8MbM8hJmEDLB//gWlG7dbXDFf7on4wMDCwIyvQLloGph/umMzw5dpxUMRYs3xk+ccgU7YEEkNQ8KQr5j9IHAR+Mf0HUXtlypacZfn06j1Wq2Hif7//gvNBHsSmFtlZ8LQBAKf7dK/nQXs5AAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABYklEQVR4nH2QT0sCURTFf9pYY4JQI0kU5thSl1KLoEVkEBW6blPbNi2sD9AHaNcHCFrkxoXSxoJWQUFUG02hrDTov9SmRicbX8xoLSo68DiPd889991jQ4kAFIFB/oYOjCAJDZSIaLs8E5LQfh37ekKgRB7tX202tZ//IP18MOKriI29n6MnfwlbEMA7sCtV0lPWROfrG9WBmHCWU03H03OLGw8VGjv7NBJ7urOckqXugsENYLIFe6DJvQGYG+JF9nZoA7F7Scl9mEL9Ob7SYdar+SwOnx91dhHZ04fbN06BpNfefmc5Zar5rFHNZ9PhpU1b/br0pB0eY9Zcr+5mKiiRlKyGot7wDA9HW9SucshqCN/EAg5XF/rLLcX1ZSueadfwNIYviEcNfq+tNVeiks2YlwvL0dbpjkqhMaSeQRweP6Jeo14pUS8eYFyc6O75NdkUmh2jQBLwWN9pZQ9sA1aOn1wLiR2UVX9LAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABjUlEQVR4nF2Ry0tCQRTGv3vvlPbARVdrUy1qExUiBEEPxM2lJxS0aFmralEtyuhfqF1Q0C4ToiAIKnqQtAriQuWi6GFR4aYXpaVeTUnvxIwa0sDHnO+cH2fOzAiQFeSsTQDdAKSMTwHYAdALQmNckJWwMDBFJVWlhMa4JFWlQtcQhayMZ6E5liBa4A/KStzYZmAkC8ZFz2G6y+MdRUM/l+haY1AcsjJMMrMYRKWZB/rKLuAPJgAQ3bkUBNBBPra8JGnuWRTabciL0vT0t88grmmDUFwI3XtlSc2sHyfNPS2sYyVBMUpu2AUBfcQJ0ViQPsdRj5BWYNAW3Psi88aADvkyyUXdB3hq7wPcHu4r5CaGWBg4G/NdI/8lxRVUj1hhL3p+wX2RZuLNxbqJ1aNU5IsGXh/wTQHZ1sbynfllVdyHtU8OkhDR2X76dL7bWNo5CslqR7nVzosh6AheeVj4JpgmfTwZXh6LS7WtBmONA5KpDHoshIT/DD8nmwnT4LxR+PfX9wCqc/w7e0cA3l/ALrLBMay/uQAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABI0lEQVR4nIWRPUsDQRCGn72sHyEIMati4z8QEcRKECwO7C38Cdb2VtZWdnYWIljYCDYi2gkpLEQxrSghGIjR+8iHJrcyFzdcEXBghnn2fXdmYRXGLwOrgGJ0dIFJMH6Se3yw2rZGptrdtxj/0uO/+AilvsrEskzF+Nald3WdTvPOL4Q72rZAiktZIavStVHDsrItxp1Uy0fxMDF+b+zmzuaj2OaOTsUUOE2XKv30KdXNrXU1P52bm1qESp/aya0c7zldm6fewAjHZnkD4aTbpvr8wtLB2SF/uh6vDW4AswU1g3D8/iZsMxq6bYd9wSstIByGDeHvjIb+0onrVadY5EcnfEZ14SCjoYN6cwhxLKVJN2ylnNUUxnd9B5jI/O8acO+cv0nRnmdh207yAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAYAAAB7AEQGAAABWElEQVR4nE2RO0sDQRSFv0123SgEwUVIMIW2xkYi2omCW4hITGUhadVOQfwB4h+I2GitVhamE0XUWmLhqxAsLBRjgsEQzcMkO3LH58Bw5p575t5zZwwcFyAFzAM2f6sGbACL4LgpYtPKd3ikzLcXZaqyRomF13kct6oF30n/1cWvWAsdtyqiL4Eq/9z0jInZP85xlU93f69oMIajAp7KFr9c5QoaTKCkdg6CLTNxrNUlGpNjfkn482U+1nfl+GzguDEgE05v4wu0/o5WubqksLzSBIak3UkokaTzzqK5mdbbuW4QMXoJJZJS9UTaBcORUfxPTbJ7W/p9zKJnh/onED7LVlAb/7ACVBQEevokbCm95nQs/I/x2sPtsR2MjtARX6ReeDSsji6Kpkfp5lRXFuNzwJo1OGXb3QP42trxykVq9xnqZ2n5mgURiVom3Ac6//1dHhgHzj8Bq6uVmaQSAisAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABdklEQVR4nF1RS0uCQRQ946PPDLL4DLQH0cNVUVCCbZQ29qBN0CJqHdUq6A+0cNGqyHYuglYStYgWPUjatkgs6AFFWauiTKVI+vIT9cYds6CBM5czc7jnnhkB1Q8AvQAOANThb91TKtL+y0ykAao/a1jfIFPikUykkfHhlkRghficiMBgUZwPWfAfYj7A4pOyUHbgC+7K3BA5KnW+PGdeZKGB7UVLoxyDLu647FP4UHLR6ZJFjii3pAZhrQTVO1EAhpEHzJ9sBxQnvBD2gT0W6patM6XK0wf0j0Nv6hFKmwu4Lkjh6xuhCEjr0EdwDcbNY9SeZuB4d0APhqFe5SUsaZYBcC8mOVCQn4KDMGq8C+ReTEowl2Fiy5MzAGadQ9OKydEMht0zhi8CXuJR7qWXwyzZRqYUY4cPji6fdMkC0HIaEtFtpqFSdNU/J9SG1YruQZjtrTBYbcg930CP7YDSTxlKRarLQq5Btgeg/PwsR96lVGS0/NffCkeuzQiB9bAAAAAASUVORK5CYII="
    ],
    heal: [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAABMElEQVR4nIVSPUvDQBh+Lpea+jEoChVREaqz+g+6ObgoxcnBUZ38Ly6dXdzclK4OLk4dBJdWKCh+QKAqYhNzd5HnzIUTB1+4PDwfuXvvTQRWx+HVM4Cax18AzDoSekayd6ijRlNjcibHayxweSZrJy2ZAKgyEBTBXnNXR1v7ygZZRHLq9P1wvbFjkOUC7dMQ22uRRXLq9P0w3ueq6GajaJ9L0iMiOXVXDF8sboTopBN23d9a/ZjoNPrM2WesQtx8jhXvv5U7OS1WKQD1M40kFXgY2ON/ldPouzY2zdUQqp/ZJVYq1FtEp9Fnrpyz6XwgmJIIpgPoLg6I6A9hBro8SRRfsBcsyXplfeRPK9n1F8yjvgOw7MK2tWBBRuG8hIgE8jSH6iuYJ8Pb2fn54X//jW/nDn2ZUeWk4gAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAYAAAB7AEQGAAABCElEQVR4nG2Qv0oDQRDGf3u3smoEQfARbLRIUAN2YmOTQiQ24hNYW/gqPoGtTSSFlYiFiChIKlMo2qok4J/L3d7JzN3FoPlg2G++/WZmZw3VCgVugCXAFXkETAqxwApw2dzzbnE1Y3nDq2O75tzJnfhQU3v/MHGbu/nlOATAdbcT0D62dDshcWY0BCW3QOOsFZzSor51YOYHC1In8DzEU8NO7FzMNuR8Shy30YyGoORWkvvPaaDH82CCL+WCXqHnD+flPczlj4Dvgo/qakoeY02yVz/ko7qhWrkC6sLDNYet5X8ZHfW1TrYXU2rXnQnnyq1+4d9SkvMo03H0U+n5H6L/HTfGpuN+APrlYNLrHRVZAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABe0lEQVR4nG2RP0hbURTGf++9+3KjkTaDQRyELs6pEdqCuokO4iBkUDp0rbNKl65CRyfbTjopgiL+oR2cNIoQEAcR0YoICtVEFK0JSd97ueW8GO3gmc6f73zf/e6xSMYA2oGfQIKnuAdGge/VMhlrJxkrDc9oM5V3zaJRZragzMiyNtKX+aJR2MI0/MnXPUMB8UYT7kbrobM/QPoPSiEwvTCtON53mPzsMvBas76i8IxFqjtcTEhuj2edjdwl2bH3yqyt2lngx+a24pdXR+5lNFSQXO2WG0hneFtzMN91m/NbNbtlzf1ZEHoSjNor1j/aPOz9PWE32ok/716wV3S4yohx8oJR5zdOCCoMnssXfXQ+xLmwIlROAkpzBRmlBaP8U69GuOX0NWg74SI9b+kOc1251F+aNqS29Ndmyt/uSnYqot031cf7B38J1ks1gjLQYZGM7divnJTbFvnvKE/hH3kE+35eAS2WBdxUngVSrB5BGMXEFiBXeC5C6X+Uzo5XTI2tigAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABjElEQVR4nFWRv2tTURTHP/fdm/eavqDQWrIUh0JdI4JiRasuTm1jpX+AIJQMDoIOXXQRB7eAi93cuihJRRAydLAFSyF0CAjSoS22xeogISbyzLvvyrkNqAcu5/v93u/5cbmKUgxQBSpAxN/4CTwClk9oKZ4u3ord47XIrXSNqznj88O3kROdUlytOUMAvL5zN+XCTcvQ8Emt5KuzlsWllMEkb1x488rQ2tI8vx8yfz7yuO8Uk5cy8USCg2db+sO3Y1afLBq7uaFWge/Nzzl2+nm+5PJ+guBgOymwsH76NtAE5oqX9Zi9VkD0xkf/NivYtHqDxWhfPPtiVOXPhewA6YFl92lHLt6JJzj4oZEDdI8+Zew1redfVYipjIg+I1xF7ydIlo7rIgC/gFhN5lR4z5voNzpka71dIyY1GpT11JBfxh1aVOZgT2pA9aykgqIUp+ZKqHXRj/8vXOr43UggcdfFWCenyno8IDijCWKFSxxZO8PuW1zXdaIb0SkxSvG0/BAw9k/DBHgJPBD2B0vIl5/gxKR4AAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAABTklEQVR4nHVSMUvDQBT+kh5ez9QiKBRXca+gomCjg6AgLhHcdFN06E/wTzgpTuLiYKGTDkoHRwdx6FiETqXaSkhDU2PSO7lLW0KJDz7uvXff3Xvvu9OQNzBmHQBTsdgHkFZeWZARkDdOc9uGuOsSURYRds6ZQN54kPv62K0Xh8UQ6Ukkmh4IDRLWIn1dKwi6usfRbukqJ8FFRJQ+qQVscK6/snySQi0geLnn2DyOitqcAxCQPPLuZ1AynebCwYTWnGeoNzierl1kjzKK/NXvAggheaRkOhv6rJ4T+9Ooeik0bhxFqnpR4+1QihFulUxnSZOT6gW2y4ozyVNJ7R5dhLdOi6jI5Qjrwb9k8d1Xq0Yv5+BfdX4A0DiBnmUjFZ498A/VyzrBZwBqseiFhmXLPSHzynpKuwq12BuBLaVJsGH+dyC0zSEHTKLG2xr9jT+EOYrj4yThYgAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABVUlEQVR4nG2QTStEURjHf+eee11jykySkZckHwDZjUayk4XUfA1bO0vFJ7CwtJCaQll4aRays9FkpSESEjLdqaH7do7OvY0U/83v6Xn+z3P+HcF4FuAGGON/+cC02NM2SxOu3jwI6B/Rf1wnO5LNDfvNajf+M/2WHWqRFG1urdqcHv7st5+et+thBohJCQ2lAG3OB0B17UIumL4oNweolDxdPs+lxuso4der5vEs4OE48svnuU776rML8EgJDPPDzBTk+5pupeS92I8NmeSor3y4plA1HzHq4C73IAccVLEbtlsFK7oPzfxI1fxY1fwDd70g9F34FlZbmJnyTGYQjGf3xaBclJMu8aWPfooRgxJnLoPIWqhGTLjbSoyRXeyQspBE+KPwMkDdx7fJRRyxKIcsRN5C5ix0BKqpUM8x6l357qzbaYxmcQaoAL1JnFQxcAwk//gNw5GHSWm4/ogAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABlElEQVR4nE2RT0hVQRTGfzN3HtP1qpARIUgbCfoD2UZIRGprlOmulW0EXxvdFLQPF9rGneDCRbhpVYswghZREKW4sFAXCr2FC5+ioe+p73LfzI0zT+IdGOZ8Z77z5zuj6ElosvfAQyA6xw74AAyrd7kJkZE79rhvwLc9GnXc6PUhtrmiWZw1bKyrSX1Omr15K2+bmM7+k8TEH3wiRZkyWa7EKT4ec0SxYqekeDVeCMThp475mSgFnputLJZRbGu/ZSuDT289e+VcHs38THQIDE4tR6uKnmTuyt2oOPC6NVT59qJK95ClkMD+mmNjIZWkflFytZIU+H3aEojtL2MO4jAOXIdLtmoP5iofg+Raqtj529hIulSh/uYI8+wi9l6Cvy2dKpdF9bT/lVIvZeG4zyfCX/LfTwP2R40taFts/8qxz91yFUpn6GuhyQMlGktn5OshEU05k3vF/6ghvulQ2JEY06kDrv+syXtZ2cmOxmxf0pru1DbqMuhEkac5btfh/rjU3rcXZD3Nf70NdDfhfdkjsPoP6+iWXEtYHCYAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABMklEQVR4nIVRvUvDQBT/XXIhrVfoopuDo7hk8WMoiFugs/+HrlIdnQVx0EknkS6CYsHFxUlBMoiD1ELRUpsppmJMTHInd/U0Q8EH7977fbx7wyNw2A2ABQAE4yMBUCJwGN85TsnMHB/r2t+ycHlutAz8E8M3VZ6hVjuMw2FC58aVLZrcEutnJYnjJrdAt2/NJT3dWMwv5uukXqnZeAiBw71c0mvttAzqJZXCotBlbhleYuHpNEHo5++r19UDLwHofTShLI/u67IxaZiD2SoGEdBpfUh6U+u0F5j6uyOywiCxiDmydgZ2Mr3bC0YizbqpNk7JR+L8RXGioIGi+6l7RjiHwh1l+CpooPB/p4gR5YDPIfqKGxY0UAR/FyGxAGRGYkQUNThM9zEA+6eX960BuNPOb5z8gBfe9Va6AAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAYAAAB7AEQGAAABV0lEQVR4nE2RPSxEQRSFv3lvGGuzVEIihCARIoRCJaESOolaKbqlQqGh0VGKRiJ6NKtUi78t0ChoZC1LsCL7vJ+RO4lwi8m955w5984dRX8aYBOYAwx/EQBbwLwWQWMj2dmliJ7hmJpaqHzBzYlvttd1tlgERX+6srIRmcGx2JGP9x5NbYkTXxz7rC3oQJxM32hCaBXZqWqeitjuXqtW90IEF96T8/o9xW2YonVISZkUSsrVl4WUG04D5cP9qkzntKFtGdLjoS/E6ZvmaqcCxEWZaQg46zpowks5Jxef+YCHxdcYGBbRh56pz5jJDEGu7ASSux3kykS772Vpl/E6DNF9KIDj7Ets9EgawYUXEaogvUE1+9iHuNreBdDi8dvc7ckfqDK6XWMjS/Jh8eoUSiuiu4g4HwaygqwkUf4bSgm+XC8lSC248OIkjvLCI6Dh3989AxPA+Q/Q4IXrxZivawAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABkElEQVR4nFWRv2tUQRDHP/vePvfOd0YRhGCRgL+wuychCBbGQhQ7Q5AYtFcbO+H+BrEwWCRgkS6VEALqQZpUKU5BH5jOnARU9Ej8wfkSb+/uvZHdcJEszCzfnc/szDCKagwwBtSBE/w/TUmzM/tqSTRU486DRSMLW5EsiZa5zUimHpfEvYsIzvRkYjam7uTm2ky+nzw8Ktx91CdrK6OSSkPS7GIAnL5yq6AnivqiZjIxvFkNvb56u3B54845kPbJEh97Zd6taydfL7+IvO6eNU4r53zk7e8YXVbsDncAe+NHHvDeVnwbI9d3UEnllQNtYy0wQ5fKMH2YkQtdVT53iA+7e/1u9y3Q96Xnvz9r82nF8vmbYvuIYeN5xpdfobeO9ZVRpn4KW2s9Be4DvqmgaohmjnnA1lpImilta617DgonSqZY7/pgeF7D5l/yZs+zg2GehElk9HEFl/2H0C2Qrzl5wzPze6NX44cqVrPhaEhwNEAZRf6zIG/2kR35I2k2NADdfaBHwK3ppaTZzcG6/gGjx5aKEFxcfgAAAABJRU5ErkJggg=="
    ],
    mana: [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAABN0lEQVR4nI1Su0oDQRQ9O1njYgrBLGgREBWsBG1SaiG4EPwCO0s7/8EfEG0sLCxt0gphGxsRIaVBQXw08ZGwMUYxiejulTPJDFEbL1wO53HZuzPjiAhMOX7wBGDcCkBNonDCMob1QHalq3b2xa1VxZW2RnLqNtMPXjtb273Qr6ZOfzAsqdsrbaqDQ5oayamTM6fsvlO53lrFY8JmH63OUo4fHKm1RQy9i245u4NE4S7RaPSZczmRagrGLmM9fT9wFEarNwUJAB32Ggmyla8/YaO9NhJ8cg2JwtW38inSj7HuzPQcP7lHNBp95uwPvjw/oCNAZnKedINITt2UXgPATfW8NOMvryOdLyCXL2ixhQT1clH7+mTMdTt+0HUXgmFvdglqZBRJu4VOpYT44uRDotD7Ef7P2/gG90HJeDv66GIAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAYAAAB7AEQGAAABBElEQVR4nHWQv0pDMRTGfwnRWBAEo+DuKE4iiHsWHbp3EPEF+gjibp9BcXG1g/gEDtK6SMGhODhURaVi0crVmkjSm3Kh9cDhfN85X3L+CIwlt2tgBdA5z4CZABSwBlyK6pYWG6tIuxkVg4WyVq91kuhCHu5puVvmP5NAw9+0ccd1fKs9WaV8H4w9x9hneXTqle9Hx9gQY11OfXpK92fb4YH49gQePFjCav72NyY6QOnBMVfgqaZMazBKznYcRZ6wmn4cqiN5dxR5wqpZq1wB6/lIfA3HidasVVzYXmCsW9w5EHppeWzz7OmOl5N9H47JR7dHJt/GRD/dXozhp1G7CWcMzRt/ZDJqIISPVi0AAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABb0lEQVR4nG2RzyvDcRjHX/v6MAeJfTc5WFIOyo0VkZKscKGI4sLNmf0LbpKDC5eVMidCwoESdpmUND/KhcLaxubH/Fh899HnOxtpT33q8zzP6/08z+fzWNDdAPXAJuDg1xKAB5hNu7q7Ht39oXkXpQjfSCHfpEg8SG1pTaq4ygv5ZoIRE1LAv6N5FxUcUaAG9KVmVpDBS4yxSb7s3aSWt81mWlcLmXE0cb+6x1UsYLR6pJzfDwAb8uA4PVaZLTuwyH+V5F+vNGQC75U9Ea2mGhVPXd/wBeZd2M6NrOq2o3faUl7qcFQ1kXdu8LR+SBKiihF6UGngxDOgvmjU2TlCyW0xnxdRQgtrKtWnGFEQylb0V7QNWctsLggZ3O0ukYrHw65x357yLbUTUU6nBj/0ph5reWO/qYid7RLamssUSALNFnT3UaGrvc7eNvxnKb/2eLRBYscXFYDT0Ip4jsRzgskXtRVQFdUj/IA1J/nT+hvVVp0Sz09PeAAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABkklEQVR4nF2RTUhUURTHf/f6dBzHnuAbtYVoFi7CWSjqJkQkGGghjoIStXIptClwk4vciRtBUEFXLgUxeCMGKUIgUS0UFAQFwQ9oQJsxEHX8yPdunDdo4YHDPf/D79z7v/cqnDjAKNAHhPgXZ0A/MJWTTryVxpdGLy0b6+zYWCYbrPrjvJE+TnzUMtkA/KWnZ3LAvdRLywJeCqiBbn/cxfzYwOsd5CaaCGoJ/ayBWzvayiRX2P+d9No/eGZhPQmkzfZ+zlYkfGdY558bwgduJ7AGdKgX9WX5bS1IX31ZF8aT2ird8oKJFDRHJ4ZV6EktZMDbSXP0Th6DBWG0s3mDJHAe+rpH+PN2oMtTNo+63ki/XbRqGkqzOvLalQZwIc4ij2PqaddAcNLP77McfnP3tEDWw+pEdc/7vMKaWDGgVOEDLgxB+qGI8MWW7FTS9gqvqo5oTd3dLU/w8a8vSa9+EtmtcOKuKrITVuw5BZUx8uwK/OwJfzK7XG8sYo5Tp3bvmC2gTLQCc0DZf399BUwCb0X9BXd9o2fEDwaOAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAABMklEQVR4nGNkEHZlQAOfGBgYeJH4PxkYGDjALJb/3+CYQdg1ncE4/D/Ll7f/Wf5/A2PGwqb/DMKuW0HyTGimTmSqimZg4OZkwAbgiv+I+J9k9DFgZwpyYWB49Q6/YgYGBlOmkhgw49+K7dgVs379DzL1BVOmFyObogoD84O3DP+aVjGAxEGY8TdEIYjN8l0+wI5RQlBczC6Qgfn6X4Y3c1eBJYWu/wXTr97/Z/jHwOD8XT7AmBHkU15TKy/F8HysVoM1HN3C8GL94tcsIA7z1/8MbM8hJmEDLB//gWlG7dbXDFf7on4wMDCwIyvQLloGph/umMzw5dpxUMRYs3xk+ccgU7YEEkNQ8KQr5j9IHAR+Mf0HUXtlypacZfn06j1Wq2Hif7//gvNBHsSmFtlZ8LQBAKf7dK/nQXs5AAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABYklEQVR4nH2QT0sCURTFf9pYY4JQI0kU5thSl1KLoEVkEBW6blPbNi2sD9AHaNcHCFrkxoXSxoJWQUFUG02hrDTov9SmRicbX8xoLSo68DiPd889991jQ4kAFIFB/oYOjCAJDZSIaLs8E5LQfh37ekKgRB7tX202tZ//IP18MOKriI29n6MnfwlbEMA7sCtV0lPWROfrG9WBmHCWU03H03OLGw8VGjv7NBJ7urOckqXugsENYLIFe6DJvQGYG+JF9nZoA7F7Scl9mEL9Ob7SYdar+SwOnx91dhHZ04fbN06BpNfefmc5Zar5rFHNZ9PhpU1b/br0pB0eY9Zcr+5mKiiRlKyGot7wDA9HW9SucshqCN/EAg5XF/rLLcX1ZSueadfwNIYviEcNfq+tNVeiks2YlwvL0dbpjkqhMaSeQRweP6Jeo14pUS8eYFyc6O75NdkUmh2jQBLwWN9pZQ9sA1aOn1wLiR2UVX9LAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABjUlEQVR4nF2Ry0tCQRTGv3vvlPbARVdrUy1qExUiBEEPxM2lJxS0aFmralEtyuhfqF1Q0C4ToiAIKnqQtAriQuWi6GFR4aYXpaVeTUnvxIwa0sDHnO+cH2fOzAiQFeSsTQDdAKSMTwHYAdALQmNckJWwMDBFJVWlhMa4JFWlQtcQhayMZ6E5liBa4A/KStzYZmAkC8ZFz2G6y+MdRUM/l+haY1AcsjJMMrMYRKWZB/rKLuAPJgAQ3bkUBNBBPra8JGnuWRTabciL0vT0t88grmmDUFwI3XtlSc2sHyfNPS2sYyVBMUpu2AUBfcQJ0ViQPsdRj5BWYNAW3Psi88aADvkyyUXdB3hq7wPcHu4r5CaGWBg4G/NdI/8lxRVUj1hhL3p+wX2RZuLNxbqJ1aNU5IsGXh/wTQHZ1sbynfllVdyHtU8OkhDR2X76dL7bWNo5CslqR7nVzosh6AheeVj4JpgmfTwZXh6LS7WtBmONA5KpDHoshIT/DD8nmwnT4LxR+PfX9wCqc/w7e0cA3l/ALrLBMay/uQAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABI0lEQVR4nIWRPUsDQRCGn72sHyEIMati4z8QEcRKECwO7C38Cdb2VtZWdnYWIljYCDYi2gkpLEQxrSghGIjR+8iHJrcyFzdcEXBghnn2fXdmYRXGLwOrgGJ0dIFJMH6Se3yw2rZGptrdtxj/0uO/+AilvsrEskzF+Nald3WdTvPOL4Q72rZAiktZIavStVHDsrItxp1Uy0fxMDF+b+zmzuaj2OaOTsUUOE2XKv30KdXNrXU1P52bm1qESp/aya0c7zldm6fewAjHZnkD4aTbpvr8wtLB2SF/uh6vDW4AswU1g3D8/iZsMxq6bYd9wSstIByGDeHvjIb+0onrVadY5EcnfEZ14SCjoYN6cwhxLKVJN2ylnNUUxnd9B5jI/O8acO+cv0nRnmdh207yAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAYAAAB7AEQGAAABWElEQVR4nE2RO0sDQRSFv0123SgEwUVIMIW2xkYi2omCW4hITGUhadVOQfwB4h+I2GitVhamE0XUWmLhqxAsLBRjgsEQzcMkO3LH58Bw5p575t5zZwwcFyAFzAM2f6sGbACL4LgpYtPKd3ikzLcXZaqyRomF13kct6oF30n/1cWvWAsdtyqiL4Eq/9z0jInZP85xlU93f69oMIajAp7KFr9c5QoaTKCkdg6CLTNxrNUlGpNjfkn482U+1nfl+GzguDEgE05v4wu0/o5WubqksLzSBIak3UkokaTzzqK5mdbbuW4QMXoJJZJS9UTaBcORUfxPTbJ7W/p9zKJnh/onED7LVlAb/7ACVBQEevokbCm95nQs/I/x2sPtsR2MjtARX6ReeDSsji6Kpkfp5lRXFuNzwJo1OGXb3QP42trxykVq9xnqZ2n5mgURiVom3Ac6//1dHhgHzj8Bq6uVmaQSAisAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAABdklEQVR4nF1RS0uCQRQ946PPDLL4DLQH0cNVUVCCbZQ29qBN0CJqHdUq6A+0cNGqyHYuglYStYgWPUjatkgs6AFFWauiTKVI+vIT9cYds6CBM5czc7jnnhkB1Q8AvQAOANThb91TKtL+y0ykAao/a1jfIFPikUykkfHhlkRghficiMBgUZwPWfAfYj7A4pOyUHbgC+7K3BA5KnW+PGdeZKGB7UVLoxyDLu647FP4UHLR6ZJFjii3pAZhrQTVO1EAhpEHzJ9sBxQnvBD2gT0W6patM6XK0wf0j0Nv6hFKmwu4Lkjh6xuhCEjr0EdwDcbNY9SeZuB4d0APhqFe5SUsaZYBcC8mOVCQn4KDMGq8C+ReTEowl2Fiy5MzAGadQ9OKydEMht0zhi8CXuJR7qWXwyzZRqYUY4cPji6fdMkC0HIaEtFtpqFSdNU/J9SG1YruQZjtrTBYbcg930CP7YDSTxlKRarLQq5Btgeg/PwsR96lVGS0/NffCkeuzQiB9bAAAAAASUVORK5CYII="
    ]
  };
  var BMP_BOOM_SRC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA4CAYAAAC2TwutAAANYUlEQVR4XtWaCXBd1XnHf3d5i/T0JFmSJXlFlryDbEuWMDi2gsF0GoYMZumMh3FYG0po0pgxDZ20pQTaTJMM03RCKClmEjOihAQoxlCWwQFsYRYDXsHGtmzZ8i7JkiW9Te/ee6q575s5M3f0ZDuOkvZo/nMkvXn33N/9f+c73znvGYrzbLtWcEGt/mUD/V7FRTS5HhfSbP7ATYAMAOmVQCoNOPYyxwDKFNla8j8f8P8hmABYAhPi0aZJQEhk5QBtghqLZv+BL2MgUH5fVTQb6AeyIgW2qwGcEW7D+dM7Fnzi4koYiAJFlEQXAjGgQP5v4WiekV2zRX8Sx4I3AtT/WtwiLDBFjIu1AOuBBKAAh4ZfG2xbpQROu2QHXRM4nD+WY3bQLXCkB1vciQPjKI01M7FoIlAMFOpEEnTKBkcEwdfGzLH8LjnBMCQkACU0Vk8nFC7h6ppGWnd/AAyJc0b+YR0NZ4trOPngjMDvCt3U7+eYw0hP1xCwmO/WFVOawYa6inqgXFyLAHbAkfxR4IzomBHMvoAlMi88FAVADxbodeIoAsqoKZ/jw1eXzgUqBazAh294UlwbSRomMJ6hYYiIotILHAaiCwtgZ0QgaFhrCF1UwCqYXF4HNkyvqgOqgV7gtM6OtnNeE6KhNehQWGQJvcuttWFqijx+uLNHQlIJ2Kjxi2Q9/GymoUZavyKSOCqYUDaegklgnY2xeNp8thzqAU6Ia0maf+qydbXKt5zJwzJ1uBERx8UhTMDlqa8sJGIOctvm97RjYOeB0qWRhvRoaFV+D4pt9yrtIiYQloGLmVVZS/XsMAXV4A7B1+obh8H2AseALmAQyObgHlAa5qcGoIH0NQuBWE7iVn1ZhJ803cXRxHsaCsQxDDVaWaRlCpALOCJXIBGoSmAG0MQ9S1bx/QfqCZeC8qDvqMuSb71Cb2ITsB04BJwBUoAXgLG1O7IeQon0BcTDYR69/CqWVq7g3eM/Yc2H64E+eVgZqXC8fI6ZYndUVw1iPQwBaemHBDAqTzUOlFI/uxKrFKwiACiZZvGdmxfyyDPHgbPyPkucc3VGJayBiAtQqfQFfHvBAv5i5nLGmWW81P4YD299D/SDFikAc+QwlAz3s2XX8M+Ll8vknwzUANOAS4BJQBUwHqgUVflauqyMUAzMKFiFEIrD7bdNprF2ETAXmANM19eiBqgFZsnr84CFQDMVhYtZs/hW3ln1j9y9YCVFoXLW7f/lMNQmICMaEjiVL90rdLP4zjs7mDn+ajauXMu9jV+XgS8FLpMbmCXhVyc3VkP91LmUTQ75UGYIzDDYBRCrMPnFjy5j+oQlctONwAJgvvSNQBNwJba5lOsvu4V/W3E3r6++mzuXLqI0GsNTiqe/eJHHPt0EDIgSOnLw8jgmcFomt732LGml+KvLv8tbdz7CA1d9g4nFXwUuB5rlZhrkBuewvGU8oZhA2WDYOUC7EKbMjPLiU43cef3VwFKgRfRVWubcwn3L7+KXq+/gs7Wr+PkjV3Dz7dVUNlgU1AA2PLv3fZ7Y1gb0AL0CltJgYswoySMEFEmYTaW+8nLW3vAQZiREZDyYccXWAz1s3nWGfafOsP3IIINpm4rSEM8/Uc+8+cVYUTB0MYDywHVyWdJJQf+ZLO0HEkRCFrUTY4QiJlYYTAssE1CghsAZgORheG3DIe5/4xngC+AgcFLmazoQhnnA9BwrBMp8MJjFA0tXsbK5hbImCJeBEQaQqW9C2nWIl9k5oFDOJcMEwxAw5cP58hzwXFCOzGqV6zHkbw+UC24KMl3Q9t993NXaStr5DNgHHBXHUhrq3EWwAjyxNykbxbP8+5b3aaqZxxXhUj+sLCnWpZKhwLIxbMDE7wXKwfB/LEPJa14O2FR6KGHHEHglSc7NQMeeNGteep208yVwOL9T5wZDwByJ3z7gNFn3JD9+ZwvPLftzolUm2GBKuBmyQigTDFMAwMXEkyDwfDgwQQAVoIUhkAivk8mtf999vI0T/duBduD46E7lD0UtvbbEJd3PBpr5pxtu5Z6/mUK4Agk7DaMMH9ITEOVr5AsLkGArbAk/vCw4SUiegm9/bzuv7tgAbAMOiFsDEk3e77sfUwHXTgAdPPG7Ldx8401UxkOYYbnLXMh5vnNagA8bbMpQ+nUUJoAnoJ4D2QT85rfHh6E2AfuBTqAbSCCVxcXtoPVcS8iFj9I1sJenW48wNCgJQMmFNIxIQ50D1gJ05sxCz8ksP37+Y8l+nbq+1E5dFJjIFdf6gdM+3NrNbRzryOBmQOXgTJRgBQGNPL0GRszC83LLwZPPHKZ74IDMqS4ZOx1Yqy4aTAlcUrJRF4nMMf6jtQNHwFB5h8sPFcSUjJhKePzX20ekSO6TaMkEoC4eLLAdyMqTS/Dsu4c50plAeToJjPpsYFR6JbZ1dA7Sl8gg5ZFIW30xYIFtREQW6yLJkDEgiutZbPjdSUEO3LzKBxV8TQQYRk5lZXpfByXSx/R5CcaFgBkivf1GH6NJ5T4RmCKVyCQKIyGWLx2PYQTWpJEWExWAUAFsDceE6ih/ecMEoEY0FZigD4Qo0Dvo/JDWw2iHgmDiTqlcVAZjBgtrmlj3o3ounRfHiiCVBu5IicMgqAAsWFJSCSBcOb+MZHeUT/dlA8cDIV3unBvMCIDpDSbEBayKWHgqKxcs58Frr2P1N+uorg1jSxVv5sJIYeSZbcZooSm8AooBtm3wlfnlLKyazBftIboTCggHwAQOMx9Yfreuq63j9vnXcm/zrfz1km+wuPZSqqsLKZwK4TiYYTD1GD5cEEYr7xwzDDBRoJ0Dy4QpEwq5/tJaZoQu4UzC4Xh/RjuFkXdCC4ieY0+11BIJT6E0ugjDqga7mgwRIqEYA6kz2KqYErsIZxDcErDC4JlgSQWoQBkmrlJ5D2mDbpkGWHiAh+wA5EImmBGIV5lc03AJy6bezv7TLXx0pI3ndm/k+CA6c+JpoaS4CYYhYX2GQUyfO1ABVFM/YS4t0xu49urJNC0pITQO7MJcSMpcy0qdiMrnnAJxyUZglJvrvSFQGXCTkD0LmdMwsFfWaCcn18ty4uxHtPe8wauHNvL2saOBwxxXwAie4YVFBaIifbgigDCNRXX1/Ov3ZjCnMU6oSOAsXEkkMAoY+FCmQPlyM+AlIdsPJ9szHNid5FDHAJ3dxwkbCSJmguhwX2AkidpJis0kVeFiHO9LtndtpDNxgrX7+gHXDsxmN/C7gyzIUgV0S4V9Aujmo/YBbrw/ycanm5gyJ5pL/abvhMtoTUmYKEDA3DQkuz2e+80x/vPFoxzsPiDl1FnkbEM0GFBSJEcEwZNg8AIbzaxAmVriJnTLYB59ySjrnq/m7x+cDjYoC8MwznGsrNC7ahnKSSju+btdvLn1MLAHOCJgKbmPrGhIlAYyusfRcwzswGzO96CDa11C4AuBCt76oIsHE9Nzcy3ngO07B6jRsqIHhguuAzt3nh2G6pV9116gIwemD0F1JEkfPMANgp2Xtt2Ru1jDrzyB6pfd7Bn2dx3DTYJyfChMA1Obn+s9pa2TfRvI+YcagtSAktDqBk4h4R6s6kdKsSPp/MFwANsHFDhHQiKD66VID3gUOCa4OhsqV/ZsIpRUI2ZOKD2/ZlTEKY649Gck1MhIGGaGx3SHxxzLj2odRmgetqkIeaafqkW4KcgOwlAPJI4pdm4ZYEfbAMd2D5E8CunTudeGeiHbB6GkzbcWTUMqH1EYsIahjLH7qNaWj1Fx9HwTURkLQxpfLgA5Fzq+TPF4awcvfHKAjNMrc8UiYhfxZ7Pq+FrDRK6cV07Mskl3wk2z5vLWvvFsOylrKAXI/BqD/VgADofATsBidnkcp4+ceiDTCU8/2clVqzfw7IevkHHeATYDm3wN/82Gz3/Lfa3PsPzhVtat385gX4awsvnB4hsIWxG9hoprYIxRKAqUDaChAJg9Lk7qICSH1bfD4/5Ht/EPL64n47wPfAx8BmwHdgE75NRpK/ARPck2/mXTOr7+/A/54MhmJsUv4clrbhQYKXx1NT82jsn3OQLVtUdDRTluCno/d/l+60Ze2PMa8CmwU1J3O9AhOiyHNPtlvdoNfE5Paif3vfU4P2j7W2aMa+TxlmUCo8caS8ekaSjIUFdSBQ78/JOXeHn/m8BuATqkD2ToBfqk7wFOy2tHgIOiw7zS/jE3vXIbtcU1/GLplcFjrotPHud2WQFDzCs3GG9XsLFjPeu++B9ddnFKQNKA439+Le+Tj31dSQwpWfAHJBOG6EqZXPfqo/zqqiYea57Cmq17AMY2FMEQuUCau2bO4Hj/B6xue0pCrVPA+oBUDmqlQDlau1aqYTmBzwh6tbMMcMe7b9MxeIKGcr1FGSvHAidWCeYWz+ShTx6S8ErKkx8Up1x2aahAE8BbFOBQ/4Je9HUWhJ/tSWqosQTTdVqGxZUFHB58mQ9PHwSGgkVp7qaDQOQBXOFR/7LSa5bepWrBHwdsQkGSb77/poYlCzg5qBUa6nzlvwclgAR1IXAX+mVn+XqsZEVRoPL2/KcfaGPxZeeLB8t/Xm3kCRfFGLSxBst/rvZ/qP0viRh+NtcJzX0AAAAASUVORK5CYII=";
  var BMP = { ready: false, sets: { damage: null, crit: null, mp: null, heal: null, mana: null }, boom: null };
  // 原版字库每格固定步进（古德 com/hz/g/h.java：取首帧宽度作字距，不按单个数字裁切宽度排）：2000/2001/2002 为 11，2003 为 13。
  var BMP_PITCH = { damage: 11, heal: 11, mana: 11, mp: 11, crit: 13 };
  var booms = [];                 // 星爆特效列表
  function stripB64(s) {
    // Egret BitmapData.create('base64', ...) 只接受纯 base64，不接受 data: URI 前缀
    var i = s.indexOf(',');
    return (s.indexOf('data:') === 0 && i > 0) ? s.substring(i + 1) : s;
  }
  function loadBMP() {
    try {
      var keys = ['damage', 'crit', 'mp', 'heal', 'mana'];
      var pending = 0, done = 0, fail = 0;
      function fin(ok) {
        if (!ok) fail++;
        if (++done >= pending) {
          BMP.ready = true;
          log('位图数字素材加载完成（完成 ' + done + '/' + pending + '，失败 ' + fail + '）');
        }
      }
      keys.forEach(function (k) {
        var urls = BMP_SRC[k], texs = [];
        pending += 10;
        for (var i = 0; i < 10; i++) (function (idx) {
          egretRef.BitmapData.create('base64', stripB64(urls[idx]), function (bd) {
            var t = null;
            try {
              if (bd && bd.width) { t = new egretRef.Texture(); t.bitmapData = bd; }
            } catch (e) { t = null; }
            texs[idx] = t;
            fin(!!t);
          });
        })(i);
        BMP.sets[k] = texs;
      });
      pending += 1;
      egretRef.BitmapData.create('base64', stripB64(BMP_BOOM_SRC), function (bd) {
        try { if (bd && bd.width) { var t = new egretRef.Texture(); t.bitmapData = bd; BMP.boom = t; } } catch (e) {}
        fin(!!(BMP.boom));
      });
    } catch (e) { log('位图素材加载失败（自动回退文字数字）', e); }
  }
  // 数值 → 位图数字容器；返回 {view,w,h} 或 null（素材未就绪/无数值）
  function makeNumView(num, kind) {
    try {
      var set = BMP.sets[kind];
      if (!BMP.ready || !set || !set[0]) return null;
      var txt = String(num);
      var con = new egretRef.DisplayObjectContainer();
      var x = 0, h = set[0].textureHeight, pitch = BMP_PITCH[kind] || set[0].textureWidth;
      for (var i = 0; i < txt.length; i++) {
        var d = txt.charCodeAt(i) - 48;
        if (d < 0 || d > 9) continue;
        var tex = set[d];
        if (!tex) continue;
        var bmp = new egretRef.Bitmap(tex);
        bmp.smoothing = false;               // 像素字库放大保持锐利
        bmp.x = x; bmp.y = 0;
        con.addChild(bmp);
        x += pitch;
      }
      if (!con.numChildren) return null;
      return { view: con, w: x, h: h };
    } catch (e) { return null; }
  }
  // 位图数字统一按原版比例放大：原版逻辑宽 320（古德 PipActivity.initScreen），本战斗舞台宽 720，即 2.25 倍。
  // 伤害、回血、回蓝字高 13→29，暴击 18→40.5，与原版相对大小一致。
  function digitScale(kind, it) {
    if (kind === 'crit') return 36 / 18;   // 2026-11-12 用户定：暴击 40.5 偏大，定为字高 36（2003 原高 18）
    var stage = it && it.layer && it.layer.stage;
    return ((stage && stage.stageWidth) || 720) / 320;
  }
  // 星爆：伤害位置放大回弹 + 淡出（截图参考：目标头顶伤害数字处；暴击更大）
  function spawnBoom(lay, x, y, big) {
    try {
      if (!BMP.ready || !BMP.boom) return null;
      var bmp = new egretRef.Bitmap(BMP.boom);
      bmp.anchorOffsetX = BMP.boom.textureWidth / 2;
      bmp.anchorOffsetY = BMP.boom.textureHeight / 2;
      bmp.scaleX = bmp.scaleY = 0.21 * (big ? 1.19 : 0.805);
      bmp.alpha = 0;
      bmp.x = x; bmp.y = y;
      bmp.touchEnabled = false;
      lay.addChild(bmp);
      return { bmp: bmp, born: egretRef.getTimer(), big: !!big };
    } catch (e) { return null; }
  }
  function destroyBoom(boom) {
    if (!boom) return;
    try { if (boom.bmp.parent) boom.bmp.parent.removeChild(boom.bmp); } catch (e) {}
  }
  // 驱动绑定到数字上的星爆：跟随数字位置/透明度，前160ms回弹放大
  function updateBoundBoom(boom, now, cx, bottom, alpha) {
    var t = now - boom.born;
    var peak = boom.big ? 1.54 : 1.05;
    var init = 0.21 * (boom.big ? 1.19 : 0.805);
    var sc;
    if (t < 160) {
      sc = init + (peak - init) * backOut(t / 160, 2.2);
    } else {
      sc = peak;
    }
    boom.bmp.scaleX = boom.bmp.scaleY = sc;
    boom.bmp.alpha = alpha;
    boom.bmp.x = cx;
    boom.bmp.y = bottom - 14;
  }
  function removeBoom(i) {
    var p = booms[i];
    if (!p) return;
    try { if (p.bmp.parent) p.bmp.parent.removeChild(p.bmp); } catch (e) {}
    booms.splice(i, 1);
  }
  function updateBooms(now) {
    var alive = false;
    for (var i = booms.length - 1; i >= 0; i--) {
      var p = booms[i];
      var t = now - p.born;
      if (t >= p.life) { removeBoom(i); continue; }
      var peak = p.big ? 2.2 : 1.5;
      if (t < 160) {
        var kk = t / 160;
        p.bmp.scaleX = p.bmp.scaleY = (0.3 * (p.big ? 1.7 : 1.15)) + (peak - 0.3 * (p.big ? 1.7 : 1.15)) * backOut(kk, 2.2);
        p.bmp.alpha = Math.min(1, kk * 1.6);
      } else {
        var kk2 = (t - 160) / (p.life - 160);
        p.bmp.scaleX = p.bmp.scaleY = peak - 0.3 * kk2;
        p.bmp.alpha = 1 - kk2;
      }
      alive = true;
    }
    return alive;
  }

  // ---------------- 运行状态 ----------------
  var layer = null;            // 跳字层（挂 scene，battleSprite.parent）
  var layerContainer = null;   // 当前所在容器
  var tapAttached = false;
  var ticking = false;
  var stageRef = null;
  var clusters = {};           // key: player.__wolFloatId
  var uid = 0;
  var pool = [];               // TextField 对象池
  var particles = [];
  var disabled = false;
  var installedNum = false;
  var installedBuf = false;
  var installedCtrl = false;
    // 【v1.1.13】FightTool.createHPMPUpdate（真气贯穿创建时刻通路）
  var installedBufAlloc = false; // 【v1.1.13】Buffer.alloc（buff 创建统计）
  var installedBridge = false;   // 【v1.1.15】setBattleStatus/clearBattleStatus 状态位图桥接
  // 事件计数器（诊断用）：status() 一键看清事件链在哪一环断掉
  var stats = {
    setDataTotal: 0,            // 数字特效 setData 总调用
    setDataByIndex: {},         // setIndex → 次数（2000伤害/2001附加/2002回蓝/2003暴击/2004韧性）
    setDataPlayer: 0,           // 【诊断】setData 时 numPlayer 非空的次数（应≈接管类调用数）
    blankCnt: 0,                // 【v1.1.11】原版数字隐形次数（numSet.text 清空；挂钩未装则不清=原版照常）
    numRegistered: 0,           // 登记成功（2000/2001/2003 且数值合法）
    numAction: 0,               // action 总调用
    numDraw: 0,                 // draw 总调用
    numFired: 0,                // 真正触发跳字（三路瀑布汇聚后，含去重）
    numDup: 0,                  // 【v1.1.11】__wolFired 去重拦截的重复触发
    numNull: 0, numKind: 0, numBad: 0,   // fireNumIfFirst 三类短路分布：
                                //   numNull=numPlayer为空(非首调)、numKind=图集不在接管集/回蓝首调、numBad=数值解析失败
    mpTaken: 0,                 // 【v1.1.12】2002 抽蓝接管数（hSpeed≠0 或 vSpeed=-4，0075 原文甄别）
    mpGiven: 0,                 // 【v1.1.12】2002 回蓝放行数（hSpeed=0）
    hpmpCreated: 0,             // 【v1.1.13】createHPMPUpdate 调用总数（HP/MP 显示更新控制创建）
    mpCreate: 0,                // 【v1.1.13】创建时刻触发的扣蓝数（真气贯穿新主通路）
    mpOurSide: 0,               // 【v1.1.16】我方扣蓝事件过滤数（vo.isMyPlayer||isMyPet → 不显示真气贯穿）
    mpUnknown: 0,               // 【v1.1.24】阵营判不了的扣蓝事件数（fail-closed 不显示）
    stUnknown: 0,               // 【v1.1.25】阵营判不了的状态话术事件数（fail-closed 不显示）
    stOurSide: 0,               // 【v1.1.16】我方目标带衰弱/流血受击过滤数（需求文档语义=只对「怪」显示）
    toughHidden: 0,             // 【v1.1.20】我方韧性白字(2004)抑制数（跳过原生 draw）
    toughTry: 0,                // 【v1.1.21】2004 首调判定总次数（=敌我 verdict 次数和）
    toughShown: 0,              // 【v1.1.21】判定为敌方放行显示数（toughTry = 隐+显）
    fifoToughDrop: 0,           // 【v1.1.21】韧性数字误入 FIFO 的同步出队数
    buffMade3: 0, buffMade10: 0,// 【v1.1.13】Buffer.alloc 创建的 流血(3)/衰弱(10) buff 数（诊断）
    statusScans: 0,             // 【v1.1.13】routeDamage 时扫目标 battleBufferList 次数
    bitChecks: 0, bitHit: 0,    // 【v1.1.14】isBattleStatus 官方位图 查询次数/命中次数
    listHit: 0,                 // 【v1.1.14】battleBufferList 扫描命中次数
    statusSets: 0,              // 【v1.1.15】setBattleStatus 桥接钩触发次数（全部 buff 位）
    weakSet: 0, bloodSet: 0,    // 【v1.1.15】桥接钩观察到的 衰弱(1024)/流血(8) 置位次数
    stampHit: 0, posHit: 0,     // 【v1.1.15】对象戳/位置映射 命中次数
    realChecks: 0, realHit: 0,  // 【v1.1.15】逻辑层 battle.getPlayerByPos 解析后 isBattleStatus 查询/命中
    ctrlDraw: 0,                // 【v1.1.11】241.drawNumEffect 兜底钩调用数
    fifoDirect: 0,              // 【v1.1.11】兜底A：直读 this.obj 三件套触发成功
    fifoPopped: 0,              // 【v1.1.11】兜底B：FIFO 弹出最旧登记触发成功
    fifoExpired: 0,             // 【v1.1.11】FIFO 条目过期丢弃（5s）
    routedDamage: 0,            // 伤害事件进入路由数（含暴击）
    dmgHidden: 0,               // 历史停显期计数器（v1.1.27~v1.1.29）；【v1.1.30】恢复显示后恒 0（保留字段兼容 status 输出）
    routedMP: 0, routedStatus: 0,
    hpmpCalls: 0, hpmpDrain: 0, // executeHPMPUpdate 调用 / 其中扣蓝触发
    bufferCalls: 0,             // addBuffer 调用
    frames: 0,                  // 渲染帧
    lastErr: null
  };
  var hookLog = {};             // 挂钩诊断（记录匹配到的模块 ID，便于排查）
  // 【v1.1.15】双层对象桥接：渲染层 numPlayer（有 battleSprite 无状态）≠ 逻辑层玩家
  //   （0527 面板读 e.isBattleStatus 的对象）。position 是两层通用的 join key
  //   （效果控制 byte0 同时驱动两层解析）。statusByPos[pos] = {1024:n, 8:n}。
  var statusByPos = {};
  var logicBattleRef = null;    // Buffer.alloc 第1参防御捕获（含 getPlayerByPos 即逻辑层 battle）

  function log() {
    try { console.log.apply(console, ['[跳字]'].concat([].slice.call(arguments))); } catch (e) {}
  }

  // ---------------- 对象池 ----------------
  function acquireTF() {
    var tf = pool.pop();
    if (!tf) {
      tf = new egretRef.TextField();
      tf.touchEnabled = false;
      tf.touchChildren = false;
      tf.bold = true;
      tf.fontFamily = 'Microsoft YaHei, SimHei, sans-serif';
    }
    tf.alpha = 1; tf.scaleX = 1; tf.scaleY = 1; tf.rotation = 0;
    tf.textFlow = [];
    return tf;
  }
  function releaseTF(tf) {
    if (!tf) return;
    try { if (tf.parent) tf.parent.removeChild(tf); } catch (e) {}
    tf.alpha = 1; tf.scaleX = 1; tf.scaleY = 1;
    tf.textFlow = [];
    if (pool.length < 32) pool.push(tf);
  }

  // ---------------- 文案 ----------------
  function statusLine(keys) {
    return '';   // v1.2.0：状态中文（天煞一击/血煞蚀骨）已按用户要求删除
  }
  // amount 恒为正数，统一 '-' + 数值，绝不出现 '--'
  function mainFlow(styleKey, amount, statusKeys) {
    // v1.2.0：删除致命一击/真气贯穿等中文标签，纯数字（仅作素材未就绪时的文字回退）
    if (styleKey === 'status') {
      return [{ text: '', style: { size: 1, textColor: 0x000000 } }];
    }
    var st = COLOR[styleKey] || COLOR.damage;
    return [{ text: String(amount), style: { size: st.size, textColor: st.valueC } }];
  }
  // 数字合并时替换当前视图，保留本帧中心、底边和动画进度。
  // 已播放的条目不会再次进入 updateItem 的首次挂载分支，必须在这里接回显示层。
  function replaceNumView(it, nv, baseScale) {
    var old = it.view || it.tf;
    var parent = old && old.parent;
    var oldBaseScale = it.baseScale || 1;
    var oldW = it.view ? it.viewW : (old ? old.textWidth : 0);
    var oldH = it.view ? it.viewH : (old ? old.textHeight : 0);
    var view = nv.view;
    view.scaleX = baseScale; view.scaleY = baseScale;
    if (old && it.started) {
      view.alpha = old.alpha;
      view.scaleX = baseScale * old.scaleX / oldBaseScale;
      view.scaleY = baseScale * old.scaleY / oldBaseScale;
      view.x = old.x + oldW * old.scaleX / 2 - nv.w * view.scaleX / 2;
      view.y = old.y + oldH * old.scaleY - nv.h * view.scaleY;
    }
    if (it.view && it.view.parent) it.view.parent.removeChild(it.view);
    if (it.tf) { releaseTF(it.tf); it.tf = null; }
    it.view = view; it.viewW = nv.w; it.viewH = nv.h;
    it.baseScale = baseScale;
    if (it.started) (parent || it.layer).addChild(view);
  }
  function applyMainText(it) {
    if (!it) return;
    // v1.2.0：位图数字优先（素材就绪且非状态）；状态无文字，只保留星爆提示
    if (it.styleKey !== 'status' && BMP.ready && BMP.sets[it.styleKey] && BMP.sets[it.styleKey][0]) {
      var nv = makeNumView(it.mpTotal, it.styleKey);
      if (nv) {
        replaceNumView(it, nv, digitScale(it.styleKey, it));
        return;
      }
    }
    if (!it.tf) return;
    if (it.styleKey === 'status') { it.tf.textFlow = []; return; }
    var st = COLOR[it.styleKey];
    it.tf.fontFamily = st.font || 'Microsoft YaHei, SimHei, sans-serif';   // 文本框来自对象池，每次都设回
    it.tf.stroke = st.strokeW;
    it.tf.strokeColor = st.stroke;
    it.tf.textFlow = mainFlow(it.styleKey, it.mpTotal);
  }
  function applySubText(c, it) {
    if (!it) return;
    if (it.styleKey === 'status') { if (it.tf) it.tf.textFlow = []; return; }
    // v1.2.0：位图数字优先（合并累加时重建视图）
    if (BMP.ready && it.styleKey !== 'status' && BMP.sets[it.styleKey] && BMP.sets[it.styleKey][0]) {
      var nv = makeNumView(it.mpTotal, it.styleKey);
      if (nv) {
        replaceNumView(it, nv, 0.9);
        return;
      }
    }
    if (!it.tf) return;
    var st = COLOR.mp;
    it.tf.stroke = st.strokeW;
    it.tf.strokeColor = st.stroke;
    it.tf.textFlow = mainFlow(it.styleKey, it.mpTotal);
  }

  // ---------------- 跳字层 ----------------
  function destroyCluster(c) {
    if (c.main) finishItem(c.main);
    for (var i = 0; i < c.subs.length; i++) finishItem(c.subs[i]);
    for (var j = 0; j < c.jumps.length; j++) finishItem(c.jumps[j]);
    delete clusters[c.id];
  }
  function destroyAllFloats() {
    for (var k in clusters) destroyCluster(clusters[k]);
    for (var i = particles.length - 1; i >= 0; i--) removeParticle(i);
    for (var i = booms.length - 1; i >= 0; i--) removeBoom(i);
    // 此层只含本系统的显示对象，切场景时同时清除失去条目引用的残留节点。
    if (layer) { try { layer.removeChildren(); } catch (e) {} }
  }
  function ensureLayer(container) {
    try {
      if (layer && layerContainer === container && layer.parent === container) return layer;
      if (!layer) {
        layer = new egretRef.DisplayObjectContainer();
        layer.touchEnabled = false;
        layer.touchChildren = false;
      }
      destroyAllFloats();                       // 场景重建：清空旧跳字
      if (layer.parent) { try { layer.parent.removeChild(layer); } catch (e) {} }
      container.addChild(layer);
      layerContainer = container;
      if (!tapAttached && layer.stage) attachTap(layer.stage);
      return layer;
    } catch (e) { return null; }
  }
  function attachTap(stage) {
    tapAttached = true;
    stageRef = stage;
    try {
      stage.addEventListener(egretRef.TouchEvent.TOUCH_TAP, function () {
        try { skipAll(); } catch (e) {}
      }, false);
    } catch (e) { tapAttached = false; }
  }
  function keepTop() {
    try {
      var p = layer && layer.parent;
      if (p && p.numChildren > 1 && p.getChildAt(p.numChildren - 1) !== layer) p.addChild(layer);
    } catch (e) {}
  }

  // ---------------- 帧驱动 ----------------
  function ensureTicker() {
    if (ticking) return;
    // 2026-11-08：跳过动画时图层可能短暂离开舞台；回落到已记录的舞台继续走帧，避免已上屏的回血回蓝字失去驱动后停在屏幕上。
    var st = (layer && layer.stage) || stageRef;
    if (!st) return;
    stageRef = st;
    ticking = true;
    st.addEventListener(egretRef.Event.ENTER_FRAME, onFrame, false);
  }
  function detachTicker() {
    if (!ticking) return;
    ticking = false;
    try { stageRef.removeEventListener(egretRef.Event.ENTER_FRAME, onFrame, false); } catch (e) {}
  }
  function onFrame() {
    try {
      stats.frames++;
      var now = egretRef.getTimer();
      var alive = false;
      for (var k in clusters) {
        var c = clusters[k];
        if (updateCluster(c, now)) alive = true;
        else if (now - c.lastActivity > 1500) destroyCluster(c);
      }
      if (updateParticles(now)) alive = true;
      if (updateBooms(now)) alive = true;
      keepTop();
      if (!alive) detachTicker();
    } catch (e) {
      // 逐帧处理出错：清掉全部跳字再停，不把已上屏的数字留在屏幕上。
      try { destroyAllFloats(); } catch (x0) {}
      try { detachTicker(); } catch (x) {}
    }
  }
  function updateCluster(c, now) {
    var live = false;
    if (c.main && !c.main.done) live = updateItem(c.main, now) || live;
    for (var i = 0; i < c.subs.length; i++) {
      if (!c.subs[i].done) live = updateItem(c.subs[i], now) || live;
    }
    for (var j = c.jumps.length - 1; j >= 0; j--) {
      if (!c.jumps[j].done && updateItem(c.jumps[j], now)) live = true;
      else c.jumps.splice(j, 1);
    }
    return live;
  }
  function backOut(k, o) {
    var c3 = o + 1;
    return 1 + c3 * Math.pow(k - 1, 3) + o * Math.pow(k - 1, 2);
  }
  // 走一个逻辑帧，返回 true 表示数字结束。公式与 H5 EffectNum.action 相同。
  function stepJump(j, halfW) {
    j.x0 = j.x; j.y0 = j.y;
    j.x += j.h;
    if (j.h > 0 ? j.cx + j.x + halfW >= j.w : j.cx + j.x - halfW <= 0) j.h = -2 * j.h;   // 碰屏幕边折返
    j.y += j.v;
    if (j.end > 0) {
      j.v++;
      return --j.end === 0;
    }
    if (j.y >= (j.land === undefined ? CFG.JUMP_LAND : j.land)) { j.v = -j.v / 2; j.end = j.land === undefined ? CFG.JUMP_END_TICKS : CFG.RECOVER_END_TICKS; }
    else j.v++;
    return false;
  }
  function updateItem(it, now) {
    if (it.done || (!it.tf && !it.view)) return false;
    if (now < it.showAt) return true;                       // 错峰等待
    if (!it.started) {
      it.started = true;
      if (!it.born) it.born = now;
      var v0 = it.view || it.tf;
      if (v0) { try { it.layer.addChild(v0); } catch (e) {} }
    }
    var t = now - it.born;
    var s = 1, alpha = 1, cx = it.cx, bottom = it.bottom0;
    if (it.isMain) {
      if (it.jump) {
        var jp = it.jump, tick = CFG.JUMP_TICK_MS;
        var halfW = (it.view ? it.viewW * (it.baseScale || 1) : (it.tf ? it.tf.textWidth : 0)) / 2;
        while (jp.next <= t) {
          if (stepJump(jp, halfW)) { finishItem(it); return false; }
          jp.next += tick;
        }
        var jk = 1 - (jp.next - t) / tick;           // 两个逻辑帧之间插值，高刷屏也顺滑
        cx += jp.x0 + (jp.x - jp.x0) * jk;
        bottom += jp.y0 + (jp.y - jp.y0) * jk;
        if (it.pulseAt && now - it.pulseAt < 180) {  // 扣蓝合并脉冲
          var pk = (now - it.pulseAt) / 180;
          s *= 1 + 0.15 * (1 - Math.abs(pk * 2 - 1));
        }
      } else {
        // 状态提示：淡入、轻微下沉、淡出
        var fadeStart = it.life - CFG.FADE_MS;
        if (t >= it.life) { finishItem(it); return false; }
        if (t < CFG.ENTER_MS) {
          var k0 = t / CFG.ENTER_MS;
          s = 0.85 + 0.15 * k0; alpha = k0;
        } else if (t < fadeStart) {
          bottom = it.bottom0 + 10 * ((t - CFG.ENTER_MS) / (fadeStart - CFG.ENTER_MS));
          if (it.shake) cx += Math.sin(t * 0.05) * 1.5;
        } else {
          var k4 = (t - fadeStart) / CFG.FADE_MS;
          alpha = 1 - k4; s = 1 - 0.1 * k4; bottom = it.bottom0 + 10;
        }
      }
    } else {
      // 副标签：淡入200 / 停留700 / 淡出300，不上浮
      if (t >= it.life) { finishItem(it); return false; }
      alpha = t < CFG.SUB_FADE_IN ? t / CFG.SUB_FADE_IN
        : (t < it.life - CFG.SUB_FADE_OUT ? 1
          : 1 - (t - (it.life - CFG.SUB_FADE_OUT)) / CFG.SUB_FADE_OUT);
    }
    try {
      var view = it.view || it.tf;
      if (!view) return true;
      var w = it.view ? (it.viewW * (it.baseScale || 1)) : (it.tf.textWidth || 0);
      var h = it.view ? (it.viewH * (it.baseScale || 1)) : (it.tf.textHeight || 0);
      view.alpha = alpha;
      view.scaleX = (it.baseScale || 1) * s; view.scaleY = (it.baseScale || 1) * s;
      view.x = cx - (w * s) / 2;      // 围绕底部中心缩放
      view.y = bottom - h * s;
      // 星爆绑定数字：跟随数字位置/透明度，同生共死
      if (it.boom) {
        var boomX2 = cx - (w * s) / 2 + 4 * (it.baseScale || 1);
        updateBoundBoom(it.boom, now, boomX2, bottom, alpha);
      }
    } catch (e) {}
    return true;
  }
  function finishItem(it) {
    if (!it || it.done) return;
    it.done = true;
    if (it.boom) { destroyBoom(it.boom); it.boom = null; }
    if (it.view) { try { if (it.view.parent) it.view.parent.removeChild(it.view); } catch (e) {} it.view = null; }
    if (it.tf) { releaseTF(it.tf); it.tf = null; }
  }
  function forceFade(it) {
    if (!it || it.done) return;
    if (it.jump) { finishItem(it); return; }
    var now = egretRef.getTimer();
    it.showAt = Math.min(it.showAt, now);
    if (it.isMain) it.born = now - (it.life - CFG.FADE_MS);
    else it.born = now - (it.life - CFG.SUB_FADE_OUT);
  }

  // ---------------- 聚合（每个目标一个 cluster） ----------------
  function getCluster(player) {
    try {
      var bs = player && player.battleSprite;
      if (!bs || !bs.parent) return null;
      var id = player.__wolFloatId || (player.__wolFloatId = ++uid);
      var now = egretRef.getTimer();
      // 必须先确保跳字层就绪：ensureLayer 在(重)建层时会 destroyAllFloats 清空集群表，
      // 若先建集群后建层，首个集群会被立即销毁成"孤儿"（伤害数值凭空丢失的根因）
      if (!ensureLayer(bs.parent)) return null;
      var c = clusters[id];
      if (c && now - c.lastActivity > 3000) { destroyCluster(c); c = null; }
      if (!c) {
        c = clusters[id] = {
          id: id, player: player, container: bs.parent,
          main: null, mainPrio: 0, subs: [], jumps: [], mpSub: null, statusSub: null,
          statusKeys: [], cx0: 0, bottom0: 0, lastActivity: now
        };
      }
      c.lastActivity = now;
      return c;
    } catch (e) { return null; }
  }
  // 同屏上限：统计每个目标的主跳字和伤害数字，超出时最早的直接消失。
  function eachLiveFloat(fn) {
    for (var k in clusters) {
      var c = clusters[k];
      if (c.main && !c.main.done) fn(c.main);
      for (var i = 0; i < c.jumps.length; i++) if (!c.jumps[i].done) fn(c.jumps[i]);
    }
  }
  function enforceMainCap() {
    var live = [];
    eachLiveFloat(function (it) { live.push(it); });
    if (live.length <= CFG.MAX_MAIN) return;
    live.sort(function (a, b) { return a.createdAt - b.createdAt; });
    for (var i = 0; i < live.length - CFG.MAX_MAIN; i++) finishItem(live[i]);
  }
  function freeRow(c) {
    var used = [];
    for (var i = 0; i < c.subs.length; i++) {
      if (!c.subs[i].done && c.subs[i].row !== undefined) used.push(c.subs[i].row);
    }
    for (var r = 0; r < 3; r++) if (used.indexOf(r) < 0) return r;
    return 2;
  }

  // ---------------- 生成 ----------------
  // 伤害和暴击每次独立弹出（放进 c.jumps）；扣蓝和状态占用 c.main 以便合并。
  function spawnMain(c, styleKey, amount) {
    try { if (window.__wolProf && window.__wolProf.mark) window.__wolProf.mark('float'); } catch (eP) {}   // 【v1.1.23】帧剖析打点
    var lay = ensureLayer(c.container);
    if (!lay) return null;
    var bs = c.player.battleSprite;
    var w = toNum(c.container.width, 660) || 660;
    var ax = toNum(bs.spriteX, w / 2);
    var ay = toNum(bs.spriteY, 420);
    var isRecover = styleKey === 'heal' || styleKey === 'mana';
    var bottom = ay - (isRecover ? CFG.RECOVER_RISE : styleKey === 'mp' ? 86 : 64);
    var isJump = styleKey !== 'status';
    var peak = isRecover ? CFG.RECOVER_PEAK : CFG.JUMP_PEAK;
    if (isJump && bottom - peak < CFG.TOP_CLAMP) bottom = CFG.TOP_CLAMP + peak;
    var cx = ax + (Math.random() * 2 - 1) * CFG.JITTER;
    // 同一目标短时间内的连续伤害：按仍在播放的数字个数分层上移、左右交错，避免多人同时命中时数字压在一起。
    if (styleKey === 'damage' || styleKey === 'crit') {
      var nowS = egretRef.getTimer(), liveN = 0, lastShow = -1, usedRows = {};
      for (var si = 0; si < c.jumps.length; si++) {
        var sj = c.jumps[si];
        // 仍在屏幕上或排队未出的伤害数字都算占层（回复数字位置不同，不占）。
        if (sj.done || sj.stackRow === undefined) continue;
        liveN++;
        usedRows[sj.stackRow] = true;
        if (nowS - sj.createdAt < CFG.STACK_MS) lastShow = Math.max(lastShow, sj.showAt || sj.createdAt);
      }
      var layer = liveN % CFG.STACK_ROWS;
      for (var fr = 0; fr < CFG.STACK_ROWS; fr++) if (!usedRows[fr]) { layer = fr; break; }
      var stackRow = layer;
      if (layer) { bottom -= layer * CFG.STACK_DY; cx += (layer % 2 ? 1 : -1) * CFG.STACK_DX; }
      if (bottom - CFG.JUMP_PEAK < CFG.TOP_CLAMP) bottom = CFG.TOP_CLAMP + CFG.JUMP_PEAK + layer * 4;
    }
    if (w > 140) cx = Math.max(50, Math.min(w - 50, cx));
    var it = {
      tf: null, view: null, viewW: 0, viewH: 0, baseScale: 1,
      layer: lay, isMain: true, styleKey: styleKey,
      born: 0, createdAt: egretRef.getTimer(), showAt: 0, started: false, done: false, life: CFG.MAIN_LIFE,
      cx: cx, bottom0: bottom, mpTotal: amount || 0, pulseAt: 0,
      shake: styleKey === 'status' && c.statusKeys.indexOf('blood') >= 0,
      // 左边的目标向左飘，右边的向右飘（A 与 H5 都按站位 isLeftSide 决定）
      jump: !isJump ? null
        : isRecover ? { x: 0, y: 0, x0: 0, y0: 0, h: 0, v: CFG.RECOVER_V, land: 0, end: 0, next: 0, cx: cx, w: w }
        : { x: 0, y: 0, x0: 0, y0: 0, h: (ax < w / 2 ? -1 : 1) * CFG.JUMP_H, v: CFG.JUMP_V, end: 0, next: 0, cx: cx, w: w }
    };
    // 同一目标短时间内的多次伤害按出现时刻错开（多人同回合命中同一 BOSS 时逐个弹出，而不是同一帧叠在一起）
    if (styleKey === 'damage' || styleKey === 'crit') it.stackRow = stackRow;
    if ((styleKey === 'damage' || styleKey === 'crit') && lastShow >= 0) it.showAt = Math.max(it.createdAt, lastShow + CFG.STACK_GAP_MS);
    c.cx0 = cx; c.bottom0 = bottom;
    if (isJump) { it.tf = acquireTF(); }
    if (styleKey === 'damage' || styleKey === 'crit' || isRecover) {
      c.jumps.push(it);
      applyMainText(it);
    } else {
      if (c.main && c.main !== it && !c.main.done) finishItem(c.main);   // 槽位只留一个：旧的先收掉，不留失去引用的残影
      c.main = it;
      c.mainPrio = styleKey === 'mp' ? 2 : 1;
      applyMainText(it);                    // v1.2.0：位图数字优先（内部切换）
    }
    if (!CFG.LOW_END) {
      if (styleKey === 'crit') spawnParticles(lay, cx, bottom - 14, 'crit');
      else if (styleKey === 'mp') spawnParticles(lay, cx, bottom - 8, 'mp');
    }
    // v1.2.0：星爆特效（仅暴击触发；与数字绑定同生共死；位置继续左移到数字左缘外侧）
    if (styleKey === 'crit') {
      var boomX = cx;
      if (it.view && it.viewW) {
        // 数字左缘 = cx - viewW*baseScale/2；星爆中心放在左缘再往左一点（贴数字左侧）
        boomX = cx - it.viewW * it.baseScale / 2 + 4 * it.baseScale;
      }
      it.boom = spawnBoom(lay, boomX, bottom - 14, true);
    }
    enforceMainCap();
    ensureTicker();
    return it;
  }
  function spawnSub(c, styleKey, amount, row, delay) {
    var lay = ensureLayer(c.container);
    if (!lay) return null;
    var mainBorn = (c.main && c.main.createdAt) || egretRef.getTimer();
    var it = {
      tf: null, view: null, viewW: 0, viewH: 0, baseScale: 1,
      layer: lay, isMain: false, styleKey: styleKey, row: row,
      born: 0, createdAt: egretRef.getTimer(), showAt: Math.max(egretRef.getTimer(), mainBorn + delay),
      started: false, done: false, life: CFG.SUB_FADE_IN + CFG.SUB_HOLD + CFG.SUB_FADE_OUT,
      cx: c.cx0 + (Math.random() * 2 - 1) * 10, bottom0: c.bottom0 + 24 + row * 18,
      mpTotal: amount || 0, pulseAt: 0
    };
    if (styleKey !== 'status') { it.tf = acquireTF(); }
    applySubText(c, it);
    c.subs.push(it);
    if (styleKey === 'mp') c.mpSub = it;
    if (styleKey === 'status') c.statusSub = it;
    ensureTicker();
    return it;
  }
  function demoteMain(c) {
    var old = c.main;
    if (!old) return;
    c.main = null; c.mainPrio = 0;
    if (old.styleKey === 'status' && (!c.statusSub || c.statusSub.done)) {
      c.statusSub = spawnSub(c, 'status', 0, 2, CFG.STATUS_SUB_DELAY);
    }
    finishItem(old);
  }
  function routeNumeric(c, styleKey, amount) {
    if (styleKey !== 'mp') { spawnMain(c, styleKey, amount); return; }
    // 扣蓝已不显示（2026-11-12），此分支不再触发
    var now = egretRef.getTimer();
    if (c.main && !c.main.done) {
      if (now - c.main.createdAt < CFG.MAIN_REPLACE_MS) {
        demoteMain(c);
        spawnMain(c, 'mp', amount);
      } else if (c.mpSub && !c.mpSub.done) {
        c.mpSub.mpTotal += amount;
        applySubText(c, c.mpSub);
        c.mpSub.pulseAt = now;
      } else {
        c.mpSub = spawnSub(c, 'mp', amount, freeRow(c), CFG.NUM_SUB_DELAY);
      }
      return;
    }
    if (c.main) { finishItem(c.main); c.main = null; }
    spawnMain(c, 'mp', amount);
  }
  // 【v1.1.15 桥接】setBattleStatus/clearBattleStatus 钩的维护函数 ----------------
  //   0056:4171 原文 addBuffer→setBattleStatus(getBufferBitValue(bit)) 是位图唯一写入点；
  //   0527 面板原文用同一 isBattleStatus 读 ⇒ 逻辑层 bStatus 必经此写入。
  //   bit 实参为位值（1<<index，或 Long），只关心 衰弱 1024 / 流血 8。
  function toBitValue(bit) {
    if (bit == null) return null;
    if (typeof bit === 'number') return bit;
    try { if (typeof bit.toNumber === 'function') return bit.toNumber(); } catch (e) {}
    return null;
  }
  function posKeyOf(player) {
    try {
      if (!player) return null;
      if (player.position != null) return player.position;
      if (player.vo && player.vo.position != null) return player.vo.position;
    } catch (e) {}
    return null;
  }
  function markStatus(player, bitVal, on) {
    try {
      var s = player.__wolStatusSet || (player.__wolStatusSet = {});
      if (on) s[bitVal] = (s[bitVal] || 0) + 1;
      else if (s[bitVal]) { if (--s[bitVal] <= 0) delete s[bitVal]; }
      var pos = posKeyOf(player);
      if (pos != null) {
        var m = statusByPos[pos] || (statusByPos[pos] = {});
        if (s[bitVal]) m[bitVal] = s[bitVal]; else delete m[bitVal];
      }
    } catch (e) {}
  }
  function onSetBattleStatus(player, bit) {
    if (disabled) return;
    try {
      stats.statusSets++;
      var v = toBitValue(bit);
      if (v === 1024) {
        stats.weakSet++;
        markStatus(player, 1024, true);
        if (CFG.DIAG_LOG || diag.length < 60) diagPush('setstatus', { pos: posKeyOf(player), bit: 10, name: nameOf(player) });
      } else if (v === 8) {
        stats.bloodSet++;
        markStatus(player, 8, true);
        if (CFG.DIAG_LOG || diag.length < 60) diagPush('setstatus', { pos: posKeyOf(player), bit: 3, name: nameOf(player) });
      }
    } catch (e) {}
  }
  function onClearBattleStatus(player, bit) {
    if (disabled) return;
    try {
      var v = toBitValue(bit);
      if (v === 1024 || v === 8) markStatus(player, v, false);
    } catch (e) {}
  }
  // 扫描到的类原型挂钩（own property 去重：子类覆盖各自包一层，继承走原型链只包基类一次）
  function installStatusBridge(cls, moduleId) {
    try {
      if (!cls || !cls.prototype || cls.prototype.__wolStatusBridged) return false;
      var proto = cls.prototype;
      var done = false;
      if (typeof proto.setBattleStatus === 'function' && !proto.setBattleStatus.__wolWrapped) {
        var origSet = proto.setBattleStatus;
        var wSet = function (bit) { hookGuard(onSetBattleStatus, [this, bit]); return origSet.apply(this, arguments); };
        wSet.__wolWrapped = true;
        proto.setBattleStatus = wSet;
        done = true;
      }
      if (typeof proto.clearBattleStatus === 'function' && !proto.clearBattleStatus.__wolWrapped) {
        var origClr = proto.clearBattleStatus;
        var wClr = function (bit) { hookGuard(onClearBattleStatus, [this, bit]); return origClr.apply(this, arguments); };
        wClr.__wolWrapped = true;
        proto.clearBattleStatus = wClr;
        done = true;
      }
      if (done) {
        proto.__wolStatusBridged = true;
        hookLog.bridgeModules = hookLog.bridgeModules || [];
        hookLog.bridgeModules.push(moduleId);
        log('状态位图桥接完成（模块 ' + moduleId + ' setBattleStatus/clearBattleStatus）');
      }
      return done;
    } catch (e) { return false; }
  }

  // 【v1.1.15】目标是否带有指定状态位（10=衰弱 3=流血）——五路冗余检测：
  //   ① 对象戳 __wolStatusSet（setBattleStatus 桥接钩维护，逻辑层对象直达）
  //   ② 位置映射 statusByPos[position]（双层对象桥接：渲染层 numPlayer 与逻辑层玩家
  //     以 position 为 join key；效果控制 byte0 两层通用）
  //   ③ 逻辑层解析：logicBattleRef.getPlayerByPos(pos).isBattleStatus(bitVal)（面板同款对象）
  //   ④ numPlayer.isBattleStatus（官方位图：0056 addBuffer→setBattleStatus 维护 bStatus，
  //     processBattlePower 查无敌/免疫同款；bitVal 对 bit<30 即 1<<bit，0004 getBufferBitValue）
  //   ⑤ battleBufferList 扫描（0056 官方 getbuffer 语义：getStatus() 相等即可，无 lastTime 条件）
  function playerHasStatus(player, statusBit) {
    if (!player) return false;
    var bitVal = statusBit < 30 ? (1 << statusBit) : Math.pow(2, statusBit);
    // ① 对象戳
    try {
      var s = player.__wolStatusSet;
      if (s && s[bitVal]) { stats.stampHit++; return true; }
    } catch (e) {}
    // ② 位置映射
    try {
      var pos = posKeyOf(player);
      var pm = pos != null ? statusByPos[pos] : null;
      if (pm && pm[bitVal]) { stats.posHit++; return true; }
    } catch (e) {}
    // ③ 逻辑层解析（Buffer.alloc 第1参捕获的 battle）
    try {
      if (logicBattleRef && typeof logicBattleRef.getPlayerByPos === 'function') {
        var rp = logicBattleRef.getPlayerByPos(posKeyOf(player));
        if (rp && rp !== player && typeof rp.isBattleStatus === 'function') {
          stats.realChecks++;
          if (rp.isBattleStatus(bitVal)) { stats.realHit++; return true; }
        }
      }
    } catch (e) {}
    // ④ numPlayer 官方位图
    try {
      if (typeof player.isBattleStatus === 'function') {
        stats.bitChecks++;
        if (player.isBattleStatus(bitVal)) { stats.bitHit++; return true; }
      }
    } catch (e) {}
    // ⑤ battleBufferList 扫描（官方 getbuffer 同款语义）
    try {
      var list = player.battleBufferList;
      if (!list) return false;
      var n = typeof list.size === 'function' ? list.size() : (list.arr ? list.arr.length : 0);
      for (var i = 0; i < n; i++) {
        var b = typeof list.elementAt === 'function' ? list.elementAt(i) : (list.arr ? list.arr[i] : null);
        if (!b) continue;
        var bit = (typeof b.getStatus === 'function') ? (b.getStatus() | 0) : (b.statusBit | 0);  // 0386：getStatus() 直返 statusBit
        if (bit === statusBit) { stats.listHit++; return true; }
      }
    } catch (e) {}
    return false;
  }
  function routeDamage(player, amount, isCrit) {
    var c = getCluster(player);
    if (!c) return;
    stats.routedDamage++;
    // 【v1.1.30】普通伤害恢复 mod 跳字（2026-09-30 用户真机两轮实测定案）——
    //   v1.1.29 把 2001 归还引擎后真机**敌我双方普通伤害都不跳字**（原生 2001
    //   数字在本单机客户端实际不上屏：绿字图集资源缺失/不渲染），只有暴击跳。
    //   用户官方服截图实锤普通伤害是**黄色**数字 → 2000/2001 重新接管，
    //   mod 按官方样式跳黄色伤害（COLOR.damage 黄色，prio 1：低于扣蓝 2/暴击 3）。
    routeNumeric(c, isCrit ? 'crit' : 'damage', amount);
    // 【v1.1.12】带 debuff 的目标受击 → 天煞一击/血煞蚀骨（用户需求：受击时显示，
    //   替换原 addBuffer 挂上时触发——挂上时目标未必在被打，受击时显示更有反馈感）
    // 【v1.1.14 采样】扫目标：battleBufferList 长度 + 首条目状态位/剩余回合 + 官方位图
    //   isBattleStatus(1<<10) 实测值（isB）→ diag 'bufscan'，下轮角标/日志直接可判
    stats.statusScans++;
    try {
      var bl = player && player.battleBufferList;
      var isB = null;
      if (player && typeof player.isBattleStatus === 'function') isB = !!player.isBattleStatus(1 << 10);
      if ((bl || isB !== null) && diag.length < 60) {
        var bn = bl ? (typeof bl.size === 'function' ? bl.size() : (bl.arr ? bl.arr.length : 0)) : null;
        var s0 = (bl && bn > 0) ? (typeof bl.elementAt === 'function' ? bl.elementAt(0) : (bl.arr ? bl.arr[0] : null)) : null;
        diagPush('bufscan', { len: bn,
          bit: s0 ? ((typeof s0.getStatus === 'function' ? s0.getStatus() : s0.statusBit) | 0) : null,
          lt: s0 ? (s0.lastTime | 0) : null, isB: isB, name: nameOf(player) });
      }
    } catch (e) {}
    // 【v1.1.16】需求文档语义「攻击带该 Debuff 的怪受伤害时」——我方单位带 debuff
    //   受击不显示 天煞一击/血煞蚀骨（与真气贯穿同口径：效果词是我方打敌方的话术）。
    // 【v1.1.25】同 routeMP 改正证据 + fail-closed：旧 isOurSideOf 把 type7（我方宠物）
    //   判成敌方放行；官方命中→stOurSide，正证据敌方→显示，判不了→stUnknown 不显示。
    var vST = null;
    try { vST = player && player.vo; } catch (eSt) {}
    var enemyST = isEnemyVo(vST);
    if (!enemyST) {
      var jST = isOurSideJoinEnemy(player);
      if (jST) enemyST = true;
    }
    if (vST && (vST.isMyPlayer || vST.isMyPet)) { stats.stOurSide++; }
    else if (enemyST) {
      if (playerHasStatus(player, 10)) routeStatus(player, 10);
      if (playerHasStatus(player, 3)) routeStatus(player, 3);
    } else { stats.stUnknown++; }
    c.lastActivity = egretRef.getTimer();
  }
  function routeStatus(player, statusBit) {
    var c = getCluster(player);
    if (!c) return;
    stats.routedStatus++;
    var key = statusBit === 10 ? 'weak' : 'blood';
    if (c.statusKeys.indexOf(key) < 0) c.statusKeys.push(key);
    if (c.main && !c.main.done && c.main.styleKey === 'status') {
      applyMainText(c.main);
      c.main.shake = c.statusKeys.indexOf('blood') >= 0;
    } else if (!c.main || c.main.done) {
      if (c.main) { finishItem(c.main); c.main = null; }
      spawnMain(c, 'status');                     // 只有 debuff：合并成一行作为主跳字
    } else {
      if (!c.statusSub || c.statusSub.done) c.statusSub = spawnSub(c, 'status', 0, 2, CFG.STATUS_SUB_DELAY);
      else applySubText(c, c.statusSub);
    }
    c.lastActivity = egretRef.getTimer();
  }

  // ---------------- 粒子（克制：暴击2个火星 / 扣蓝1个真气） ----------------
  function spawnParticles(lay, x, y, kind) {
    try {
      var n = kind === 'crit' ? 2 : 1;
      for (var i = 0; i < n; i++) {
        var sh = new egretRef.Shape();
        var g = sh.graphics;
        g.beginFill(kind === 'crit' ? 0xFFC93C : 0x54C2FF, 0.9);
        g.drawCircle(0, 0, kind === 'crit' ? 3 : 2.5);
        g.endFill();
        sh.touchEnabled = false;
        sh.x = x + (Math.random() * 24 - 12);
        sh.y = y - 10;
        particles.push({
          sh: sh, born: egretRef.getTimer(),
          life: kind === 'crit' ? 380 : 480,
          vx: kind === 'crit' ? (Math.random() * 2 - 1) * 0.09 : (Math.random() * 2 - 1) * 0.02,
          vy: kind === 'crit' ? -(0.05 + Math.random() * 0.06) : -(0.10 + Math.random() * 0.05)
        });
        lay.addChild(sh);
      }
    } catch (e) {}
  }
  function removeParticle(i) {
    var p = particles[i];
    if (!p) return;
    try { if (p.sh.parent) p.sh.parent.removeChild(p.sh); p.sh.graphics.clear(); } catch (e) {}
    particles.splice(i, 1);
  }
  function updateParticles(now) {
    var alive = false;
    for (var i = particles.length - 1; i >= 0; i--) {
      var p = particles[i];
      var t = now - p.born;
      if (t >= p.life) { removeParticle(i); continue; }
      p.sh.x += p.vx * 16;
      p.sh.y += p.vy * 16;
      p.sh.alpha = 1 - t / p.life;
      alive = true;
    }
    return alive;
  }

  // ---------------- 跳过 ----------------
  function skipAll() {
    var now = egretRef.getTimer();
    for (var k in clusters) {
      var c = clusters[k];
      if (c.main && !c.main.done) forceFade(c.main);
      for (var i = 0; i < c.subs.length; i++) {
        if (!c.subs[i].done) forceFade(c.subs[i]);
      }
      for (var j = 0; j < c.jumps.length; j++) forceFade(c.jumps[j]);
    }
  }

  // ---------------- 工具 ----------------
  function toNum(v, fallback) {
    return (typeof v === 'number' && isFinite(v)) ? v : fallback;
  }

  // ---------------- 事件入口 ----------------
  // 【时机制】战斗数字特效（模块 243 / BufferedNumEffect）：
  //   setData(numPlayer, numVal, setIndex, numString, hSpeed, vSpeed)
  //     numPlayer = 目标玩家对象；numVal = 数值（带符号 int0，如 -14275）；
  //     setIndex = 图集类型（2000伤害/2001附加/2002MP/2003暴击/2004韧性）；
  //     numString = 要显示的数值文本（取绝对值后的字符串，如 "14275"）。
  //   【反编译实证】createNumEffect(e,t,i,o,n,a,r,s) 内为 u.setData(i, o, n, t, a, r)：
  //     形参 e=numPlayer、t=数值、i=图集类型 → 传入 setData 后依次落位为
  //     第1参=numPlayer(i)、第2参=数值(o)、第3参=图集类型(n)、第4参=numString(t)。
  //   ⚠ 第2参是数值、第3参才是图集类型（此前误把第2参当 setIndex，导致查表恒 undefined → 全部丢弃）。
  //   该对象由 control 队列逐帧驱动 action()，**首次 action（numPlayer 非空）才是真正开始播放的时刻**。
  //   故挂钩 setData 只登记待播数字，等该特效首次 action 时才触发跳字 → 跳字与攻击动作同步。
  //   （此前挂 createNumEffect2 是技能预计算阶段，跳字会早于动作，故弃用该时机。）
  // 【反编译实证 · 最终版】模块 243（BufferedNumEffect）原型原文：
  //   e.prototype.setData=function(e,t,i,o,n,a){this.numPlayer=e,this.setIndex=t,
  //     t>=0&&o&&(this.numSet=alloc(t),this.numSet.text=o),this.numString=o,...}
  //   ⇒ 第1参=numPlayer、**第2参=setIndex 图集类型**、第3参=p3、第4参=numString。
  // createNumEffect2 原文：0>i&&(i=-i)（**数值已取绝对值**），i>=0→图集改 BATTLE_ADD(2001)，
  //   isMP→BATTLE_MP(2002)，isCrit→BATTLE_CRITICAL(2003)；且调用点处有短路
  //   (1==isMP && 0>value) || (createNumEffect2…) —— **扣蓝根本不创建数字特效**！
  // 【v1.1.9 角标实测】本客户端 createNumEffect2 的伤害数值按【正值】传入
  //   （i>=0 → 图集 BATTLE_ADD 2001），并非反编译推断的负值路径：
  //   实测两场战斗 setData 直方图 = 伤2000:0 治2001:11→22 暴2003:12→24 蓝2002:0 韧2004:0
  //   ⇒ 普通伤害实际走 2001 图集（绿色数字）、暴击走 2003、2000 恒为 0。
  //   故接管 2000/2003（+2002 抽蓝分流）；【v1.1.29】2001 归还原版（官方原版绿色
  //   伤害/治疗数字，用户定案）；2002 回蓝 / 2004 韧性 / MISS(-1) 放行原版。
  // 【v1.1.9 方案重写 · "登记48 触发0"根因】v1.1.9 角标实测 draw495/act496 全都
  //   拿不到自写的 __wolNumPending（登记48 触发0）——自写实例属性在真实环境不可靠。
  //   而 0243 原文：action() 与 draw() 首调都会消费 numPlayer
  //   （setDrawPosition(this.numPlayer) 后置 this.numPlayer=null）。
  //   ⇒ numPlayer 非空 = 该数字首调上屏瞬间（天然信号）：action/draw 双钩谁先到谁
  //   触发、另一钩因 numPlayer 已置 null 自然跳过（互斥去重）；对象池复用时 setData
  //   重写 numPlayer 天然防陈旧。全程零实例写入，只读原生三件套 numPlayer/setIndex/numString。
  // 【v1.1.30】接管集：2000伤害/2001普通伤害(本客户端实况主路径)/2003暴击/2002蓝条变动。
  //   ⚠ 2001 重新接管（2026-09-30 用户真机定案）：v1.1.29 曾把 2001 归还引擎指望
  //   原生绿字上屏，真机实测**原生 2001 根本不渲染**（敌我双方普通伤害全不跳、
  //   只有暴击跳）——绿字图集在本单机客户端不上屏。用户官方服截图实锤官方普通
  //   伤害是**黄色**数字 → 2001 重新接管，由 mod 按官方样式跳黄色伤害（含治疗：
  //   治疗同走 2001，按伤害样式显示，与 v1.1.8~v1.1.28 行为一致）。
  //   2002 分流：0075 原文 createNumEffect2——回蓝(值≥0) hSpeed=0,vSpeed=-6；
  //   抽蓝(值<0) hSpeed=±1,vSpeed=-4 ⇒ hSpeed≠0 或 vSpeed=-4 = 抽蓝（真气贯穿）。
  var setIndexMap = { 2000: 'damage', 2001: 'damage', 2002: 'mp', 2003: 'crit' };
  // 【v1.3.1 2026-11-08】回血与掉血同走 2001：0075 createNumEffect2 原文——回血(值≥0) hSpeed=0,vSpeed=-6；
  //   掉血 hSpeed=±1,vSpeed=-4 ⇒ 伤害类数字里 hSpeed=0 且 vSpeed=-6 的是回血，改跳绿色。
  function numKind(si, hSpeed, vSpeed) {
    var k = setIndexMap[si | 0];
    // 只看水平速度：同一单位多个数字时 updateAffectCount 会改垂直速度（v1.4.1）。
    if (k === 'damage' && (hSpeed | 0) === 0) return 'heal';
    if (k === 'mp' && !isMpDrain(hSpeed)) return 'mana';   // 回蓝：与回血同样接管
    return k;
  }
  // 【v1.1.11 FIFO 兜底】触发三级瀑布：
  //   主路径：243 首调（action/draw 消费 numPlayer 前触发，抑制已移除 → 实例正常播放）；
  //   兜底A：241.drawNumEffect 直读 this.obj 原生三件套（0241 原文：drawNumEffect 里
  //          this.obj instanceof 243，被调瞬间=该数字首帧上屏）；
  //   兜底B：FIFO 弹出最旧登记（实例状态完全不可读时的最后手段）。
  //   FIFO 纪律：setData(接管类) 时入队 {player,num,kind,t}；fire 成功即出队（防错位）；
  //   条目 5s 过期；容量 60；回蓝/韧性/MISS 图集绝不入队也绝不弹出。
  //   去重：__wolFired 实例标记（setData 清零、任一路径触发置位）——每数字至多触发一次。
  var pendingFIFO = [];
  function fifoDrop(num, kind) {
    for (var i = 0; i < pendingFIFO.length; i++) {
      var ev = pendingFIFO[i];
      if (ev && ev.num === num && ev.kind === kind) { pendingFIFO.splice(i, 1); return; }
    }
  }
  // 2002 分流：是否抽蓝（0075 原文语义；undefined 安全回落为回蓝方向，绝不误报真气贯穿）
  function isMpDrain(hSpeed) {
    return (hSpeed | 0) !== 0;
  }
  function onNumSetData(inst, numPlayer, setIndex, numString, hSpeed, vSpeed) {
    if (disabled) return;
    try {
      try { inst.__wolFired = false; } catch (e) {}     // 池复用防陈旧
      try { inst.__wolToughHide = undefined; } catch (eT) {} // 【v1.1.20】三态标记复位（undefined=未判定）
      stats.setDataTotal++;
      if (numPlayer != null) stats.setDataPlayer++;     // 【诊断】登记时目标玩家是否有效
      var si = setIndex | 0;
      stats.setDataByIndex[si] = (stats.setDataByIndex[si] || 0) + 1;
      var kind = numKind(si, hSpeed, vSpeed);
      try { inst.__wolRoundGroup = 0; } catch (eG) {}
      if (!kind) return;                       // 韧性/MISS → 原版自有表现
      // 2026-11-12 用户定：扣蓝一律不显示（原版也不显示扣蓝）。原版为部分扣蓝建了 2002 数字，这里清空文本使其不上屏。
      if (kind === 'mp') { if (inst.numSet) inst.numSet.text = ''; return; }
      roundGroupRegister(inst, numPlayer, kind, numString);
      if (si === 2002) {
        // 【v1.1.12 采样】2002 全量采样（前 60 条）：h/v/目标名/敌我——下轮角标判读铁证
        if (diag.length < 60) diagPush('mp2002', { h: hSpeed, v: vSpeed,
          name: nameOf(numPlayer), isMy: isMyOf(numPlayer),
          hasSprite: !!(numPlayer && numPlayer.battleSprite) });
        if (kind === 'mana') stats.mpGiven++;                           // 回蓝 → 接管，按原版动画显示
        else stats.mpTaken++;                                          // 抽蓝 → 接管
      }
      // 【v1.1.11 原版数字隐形】控制对象已全量放行进显示向量（驱动链不断），
      //   这里清空 numSet 文本即可隐形：伤害/暴击实例 image 恒空（createNumEffect
      //   第8参 undefined → setImage(undefined)，draw 走 numSet 路径）。
      //   挂钩未装则从不清空 = 原版照常显示（天然防黑洞）。
      if (inst.numSet && inst.numSet.text) { inst.numSet.text = ''; stats.blankCnt++; }
      var txt = (numString == null) ? '' : String(numString);
      var num = parseInt(txt.replace(/[^0-9]/g, ''), 10);   // 已是绝对值文本
      if (!isFinite(num) || num <= 0) return;
      stats.numRegistered++;                   // 有效数字出现
      var nowT = egretRef.getTimer();
      while (pendingFIFO.length && nowT - pendingFIFO[0].t > 5000) {
        pendingFIFO.shift(); stats.fifoExpired++;
      }
      if (!inst.__wolRoundGroup) pendingFIFO.push({ player: numPlayer || null, num: num, kind: kind, t: nowT });   // 回合开始分组的数字由分组统一显示，不进兜底队列
      if (pendingFIFO.length > 60) pendingFIFO.shift();
      if (CFG.DIAG_LOG || diag.length < 60) diagPush('setData', { setIndex: si, text: txt,
        name: nameOf(numPlayer), isMy: isMyOf(numPlayer), hasSprite: !!(numPlayer && numPlayer.battleSprite) });
    } catch (e) { stats.lastErr = 'setData:' + (e && e.message); }
  }
  // 首调统一处理：钩在 orig 之前跑 → numPlayer 尚未消费（非空）= 首调。
  //   __wolFired 去重：首调可能经 241 直读兜底先行触发（drawNumEffect 先于 o.draw）。
  // 【v1.1.21】首调 kind 无效（最典型：0075 韧性路径 setData 时图集=2001、随后被改写 2004）
  //   → 把该实例在 setData 时刻误入 FIFO 的条目同步出队，防兜底 B 日后弹成错误伤害跳字。
  function dropFifoByInst(inst) {
    try {
      var p = inst ? inst.numPlayer : null;
      var txt = (inst && inst.numString == null) ? '' : String(inst.numString);
      var num = parseInt(txt.replace(/[^0-9]/g, ''), 10);
      for (var i = 0; i < pendingFIFO.length; i++) {
        var ev = pendingFIFO[i];
        if (ev && ev.player === p && ev.num === num) {
          pendingFIFO.splice(i, 1);
          stats.fifoToughDrop++;
          return;
        }
      }
    } catch (e) {}
  }
  // 回合开始合并：0369 makeBattleAnim 在生成回合开始阶段的数字时置 window.__wolRoundStartPhase（分组号）。
  //   登记时按「分组号＋单位」累计生命、法力的净变化；该组第一个数字轮到播放时显示净值，其余不再显示。
  var roundGroups = {};
  function roundGroupKey(group, player) {
    return group + ':' + (player.__wolFloatId || (player.__wolFloatId = ++uid));
  }
  function roundGroupRegister(inst, player, kind, numString) {
    var group = window.__wolRoundStartPhase | 0;
    if (!group || !player) return;
    var num = parseInt(String(numString == null ? '' : numString).replace(/[^0-9]/g, ''), 10);
    if (!isFinite(num) || num <= 0) return;
    var now = egretRef.getTimer();
    for (var k in roundGroups) if (now - roundGroups[k].t > 15000) delete roundGroups[k];
    var key = roundGroupKey(group, player);
    var g = roundGroups[key] || (roundGroups[key] = { hp: 0, mp: 0, shown: false, t: now });
    if (kind === 'heal') g.hp += num; else if (kind === 'mana') g.mp += num; else if (kind === 'mp') g.mp -= num; else g.hp -= num;
    try { inst.__wolRoundGroup = group; } catch (e) {}
  }
  // 返回 true 表示这个数字属于回合开始分组，已由分组统一显示（或已显示过），调用方不要再单独显示。
  function roundGroupFire(inst, player) {
    var group = inst && inst.__wolRoundGroup;
    if (!group || !player) return false;
    var g = roundGroups[roundGroupKey(group, player)];
    if (!g) return false;
    if (g.shown) return true;
    g.shown = true;
    if (g.hp > 0) fireNum(player, g.hp, 'heal'); else if (g.hp < 0) fireNum(player, -g.hp, 'damage');
    if (g.mp > 0) fireNum(player, g.mp, 'mana'); else if (g.mp < 0) fireNum(player, -g.mp, 'mp');
    return true;
  }
  function fireNumIfFirst(inst) {
    var player = inst ? inst.numPlayer : null;
    if (player == null) { stats.numNull++; return; }       // 非首调（已消费）
    var kind = numKind(inst.setIndex, inst.hSpeed, inst.vSpeed);
    if (!kind) { stats.numKind++; dropFifoByInst(inst); return; }   // 图集不在接管集（韧性/MISS）→【v1.1.21】同步出队
    if (inst.__wolFired) { stats.numDup++; return; }       // 兜底A 已先行触发
    var txt = (inst.numString == null) ? '' : String(inst.numString);
    var num = parseInt(txt.replace(/[^0-9]/g, ''), 10);
    if (!isFinite(num) || num <= 0) { stats.numBad++; return; }   // 数值解析失败
    try { inst.__wolFired = true; } catch (e) {}
    stats.numFired++;
    fifoDrop(num, kind);                       // 已触发 → 同步出队，FIFO 只留未触发条目
    if (roundGroupFire(inst, player)) return;
    // 【诊断采样】首调成功实例快照（前 60 条）：看真实环境的 setIndex/numString 实况
    if (diag.length < 60) {
      try { diagPush('numfirst', { si: inst.setIndex | 0, txt: txt.slice(0, 10) }); } catch (e) {}
    }
    fireNum(player, num, kind);
  }
  // 【v1.1.11 兜底钩】241 控制类 drawNumEffect：0241 原文
  //   drawNumEffect(e,t,i){ if(this.obj instanceof 243 && !(this.delayTime>0)){ o=this.obj; o.draw(e,t,i) } }
  //   被调瞬间 = 该数字首帧上屏。直读 this.obj 三件套（原生只读，零写入）；
  //   numPlayer 丢失（v1.1.10 实况异常）时弹 FIFO 最旧登记。
  function onNumCtrlDraw(ctrl, seenCtrls) {
    if (disabled) return;
    try {
      stats.ctrlDraw++;
      if (!ctrl) return;
      var inst = ctrl.obj;
      if (!inst) return;
      var si = inst.setIndex | 0;
      var kind = numKind(si, inst.hSpeed, inst.vSpeed);
      if (!kind) return;                         // 韧性/MISS：原版表现，不碰兜底队列
      if (inst.__wolFired) return;               // 已由首调/直读触发 → 绝不弹 FIFO
      if (seenCtrls) {                           // 同一 control 后续帧去重
        if (seenCtrls.has(ctrl)) return;
        seenCtrls.add(ctrl);
      }
      var player = inst.numPlayer;
      if (player != null) {
        var txt = inst.numString == null ? '' : String(inst.numString);
        var num = parseInt(txt.replace(/[^0-9]/g, ''), 10);
        if (isFinite(num) && num > 0) {
          try { inst.__wolFired = true; } catch (e) {}
          stats.fifoDirect++;
          fifoDrop(num, kind);
          if (!roundGroupFire(inst, player)) fireNum(player, num, kind);
        }
        return;                                  // 有主但数值异常：丢弃，不弹队首（防错位）
      }
      // 无主（v1.1.10 实况：numPlayer 播放前丢失）→ FIFO 弹出最旧登记
      var now = egretRef.getTimer();
      while (pendingFIFO.length) {
        var ev = pendingFIFO.shift();
        if (!ev) break;
        if (now - ev.t > 5000) { stats.fifoExpired++; continue; }
        stats.fifoPopped++;
        fireNum(ev.player, ev.num, ev.kind);
        return;
      }
    } catch (e) { stats.lastErr = 'ctrlDraw:' + (e && e.message); }
  }
  function onNumAction(inst) {
    if (disabled) return;
    try { stats.numAction++; fireNumIfFirst(inst); }
    catch (e) { stats.lastErr = 'action:' + (e && e.message); }
  }
  function onNumDraw(inst) {
    if (disabled) return;
    try { stats.numDraw++; fireNumIfFirst(inst); }
    catch (e) { stats.lastErr = 'draw:' + (e && e.message); }
  }
  function nameOf(p) {
    try { return p && p.vo && p.vo.getName ? p.vo.getName() : (p && p.getName ? p.getName() : null); } catch (e) { return 'ERR'; }
  }
  function isMyOf(p) {
    try { return !!(p && p.vo && (p.vo.isMyPlayer || p.vo.isMyPet)); } catch (e) { return null; }
  }
  // 【v1.1.18】我方判定升级：官方 isMyPlayer/isMyPet 只覆盖自己+自己的宠物，
  // 组队队友/佣兵不在其中（真机截图实证：队友被怪物抽蓝也弹了「真气贯穿」）。
  // 引擎 vo 自带阵营类型（0031 MODEL_TYPE 枚举 / 0091 怪物 vo 构造 setType(TYPE_MONSTER)
  // / 0031 isMonster getter）⇒ 用「是否 monster 系」反向判定：
  //   敌方（显示话术）：isMonster===true，或 type∈{2 MONSTER,6 PLAYER_MONSTER,7 PET_MONSTER,
  //                     8 PLAYER_COMPETE,9 COMPETE_PET}（竞技场对手也显示）
  //   我方（抑制话术）：type∈{0 NONE,3 PLAYER,4 PET,5 MERCENARY,10 LEGION,11 BUDDY}
  // vo 缺失/字段异常回落旧口径 isMyOf —— 绝不比旧版更激进地显示。
  // 【v1.1.21】isOurSideOf 兜底 join：numPlayer 无 vo 时经逻辑层 battle.playerList 找
  //   同一对象（恒等 / 同 battleSprite / 同 position），用带 vo 的逻辑层对象再判。
  //   0243/0251 演算对象无 vo 是既知坑（铁律），0241 层 actor 才有 vo。
  function isOurSideJoin(p) {
    try {
      var list = logicBattleRef && logicBattleRef.playerList;
      if (!list || !list.length) return null;
      for (var i = 0; i < list.length; i++) {
        var q = list[i];
        if (!q) continue;
        if (q === p || (q.battleSprite && p && q.battleSprite === p.battleSprite) ||
            (p != null && q.position === p.position && typeof p.position === 'number')) {
          if (!q || !q.vo) continue;            // 只信带 vo 的逻辑层对象（防 q===p 死循环）
          return isOurSideOf(q);
        }
      }
    } catch (e) {}
    return null;
  }
  function isOurSideOf(p) {
    try {
      var v = p && p.vo;
      if (!v) {
        var j = isOurSideJoin(p);              // 【v1.1.21】逻辑层 join 兜底
        return j === true ? true : (isMyOf(p) === true);
      }
      if (v.isMonster === true) return false;
      var t = v.type;
      if (t === 2 || t === 6 || t === 7 || t === 8 || t === 9) return false;
      if (v.isMonster === false) return true;          // 明确非 monster → 我方（队友/佣兵/宠物）
      if (t === 0 || t === 3 || t === 4 || t === 5 || t === 10 || t === 11) return true;
      return isMyOf(p) === true;                        // type 缺失 → 旧口径
    } catch (e) { return isMyOf(p) === true; }
  }
  // 【v1.1.24】敌方正证据判定：只有 isMonster===true 或 type∈{2,6,8} 才算敌方。
  //   vo 缺失/字段不全（真机形态={position,name}）→ false（判不了≠敌方）。
  // 【v1.1.25】剔除 type 7/9：0031 实锤 TYPE_PET_MONSTER=7（玩家的怪兽型宠物）——
  //   **我方自己的宠物就是 7**（真机 v1.9.13 疑0/放8 破案：南瓜宠物被抽蓝被当敌方
  //   显示）；9 COMPETE_PET 同构（竞技宠物同样分不清敌我）。剩 {2 MONSTER,
  //   6 PLAYER_MONSTER, 8 PLAYER_COMPETE} 纯敌方形态。
  function isEnemyVo(v) {
    try {
      if (!v) return false;
      if (v.isMonster === true) return true;
      var t = v.type;
      return t === 2 || t === 6 || t === 8;
    } catch (e) { return false; }
  }
  // 【v1.1.24】join 敌方正证据：逻辑层 playerList 找同一对象，只信带 vo 的，
  //   且仅当其 vo 有确凿敌方证据才 true（不再借道 isOurSideOf 的 fail-open 回落）。
  function isOurSideJoinEnemy(p) {
    try {
      var list = logicBattleRef && logicBattleRef.playerList;
      if (!list || !list.length) return false;
      for (var i = 0; i < list.length; i++) {
        var q = list[i];
        if (!q || !q.vo) continue;
        if (q === p || (q.battleSprite && p && q.battleSprite === p.battleSprite) ||
            (p != null && q.position === p.position && typeof p.position === 'number')) {
          if (isEnemyVo(q.vo)) return true;
        }
      }
    } catch (e) {}
    return false;
  }
  // 数字上屏瞬间 → 跳字：kind='damage'/'crit' → 伤害路由；kind='mp' → 真气贯穿（2002 抽蓝）
  function fireNum(player, num, kind) {
    if (!player || !player.battleSprite) return;
    if (!isFinite(num) || num <= 0) return;
    if (kind === 'heal' || kind === 'mana') { var hc = getCluster(player); if (hc) routeNumeric(hc, kind, num); return; }
    routeDamage(player, num, kind === 'crit');
  }
  var diag = [];                       // 诊断环形缓冲（排查目标错位/状态缺失）
  function diagPush(kind, info) {
    try {
      diag.push({ t: egretRef.getTimer(), kind: kind, info: info });
      if (diag.length > 60) diag.shift();
      if (CFG.DIAG_LOG) console.log('[跳字诊断]', kind, JSON.stringify(info));
    } catch (e) {}
  }
  // 解析位置参数到玩家，返回 {player, name, pos, isMy}
  function probePos(engine, pos) {
    var r = { pos: pos };
    try {
      var p = engine && typeof engine.getPlayerByPos === 'function' ? engine.getPlayerByPos(pos) : null;
      if (p) {
        r.found = true;
        r.pid = p.__wolFloatId || null;
        r.name = nameOf(p);
        r.isMy = isMyOf(p);
        try { r.voPos = p.vo ? p.vo.position : null; } catch (e) {}
      } else { r.found = false; }
    } catch (e) { r.err = e && e.message; }
    return r;
  }
  // addBuffer(buffer) 挂钩：player = 被加 buff 的目标玩家（this），buffer.statusBit 为状态位
  function onBufferEvent(player, buffer) {
    if (disabled || !buffer) return;
    stats.bufferCalls++;
    var statusBit = buffer.statusBit | 0;
    var attrID = buffer.attrID | 0;
    var lastTime = buffer.lastTime | 0;
    if (CFG.DIAG_LOG || diag.length < 60) diagPush('buffer', { attrID: attrID, statusBit: statusBit, lastTime: lastTime,
      hasSprite: !!(player && player.battleSprite),
      name: (function () { try { return player && player.vo && player.vo.getName ? player.vo.getName() : null; } catch (e) { return 'ERR'; } })(),
      isMy: (function () { try { return !!(player && player.vo && (player.vo.isMyPlayer || player.vo.isMyPet)); } catch (e) { return null; } })() });
    if (statusBit !== 3 && statusBit !== 10) return;   // 3=流血 10=衰弱
    if (attrID === 90) return;                          // BUFFER_REMOVE_STATUS：移除不是挂上
    if (lastTime <= 0) return;
    // 【v1.1.12】挂上时不再触发跳字——改为带 debuff 的目标受击时显示（见 routeDamage/
    //   playerHasStatus）。本挂钩保留仅作统计与诊断（BUF 计数 + buffer 采样）。
  }

  // ---------------- 安装挂钩 ----------------
  // 【v1.1.11】显示抑制已彻底移除（wrapAdd/installFight 删除）：
  //   0241 原文实锤控制对象只有被 addElement 写入显示向量才会被逐帧驱动
  //   （action/draw 全部来自向量遍历），拦截=实例永不播放=触发恒 0（v1.1.3~v1.1.10 全部失效的根因）。
  //   原版数字的隐藏改由 setData 后清空 numSet.text 实现（见 onNumSetData）；
  //   本系统挂钩未装则 numSet 从不清空 = 原版照常显示（防黑洞方向反转：坏的是"新系统不显示"，
  //   绝不再是"原版被抑制 + 新系统没接管"）。
  // 异常熔断：跳字处理连续异常 ≥30 次自动停用自身，绝不拖累游戏（正常一次即清零）
  var errCount = 0;
  function hookGuard(fn, args) {
    if (disabled) return;
    try { fn.apply(null, args); errCount = 0; }
    catch (e) {
      if (++errCount === 1 || errCount === 30) log('跳字事件处理异常(', errCount, '):', e && e.message);
      if (errCount >= 30) { disabled = true; log('连续异常过多，跳字系统已自动停用（游戏不受影响）'); }
    }
  }
  // 挂钩战斗数字特效类（模块 243 / BufferedNumEffect）：
  //   setData(numPlayer, setIndex, p3, numString, hSpeed, vSpeed) → 登记 + 原版数字隐形
  // 【v1.1.11 触发瀑布·主路径】action/draw 首调（numPlayer 消费前）触发；
  //   抑制移除后实例由显示向量正常驱动，首调必然到来。
  //   0241 原文：control.draw 链每帧 drawNumEffect → o.draw(e,t,i) 直绘数字；
  //   drawNumEffect 钩（兜底A）先于 o.draw，若直读先行触发，此处 __wolFired 去重。
  // 【v1.1.20→v1.1.22】韧性白字(2004)抑制：真机两轮证明阵营判定在真机层不可靠
  //   （vo/join 数据缺失 → 判不了 → 放行 → 白字照跳）。用户口径：白字干扰 >
  //   敌方韧性信息价值 → v1.1.22 起 2004 **无条件全部不上屏**（双方一致），
  //   物理链照常跑完正常回收。判定在首调 action/draw（numPlayer 未消费时）。
  function toughHideCheck(inst) {
    stats.toughTry++;                                            // 首调判定总次数
    if (inst.__wolToughHide !== true) {
      inst.__wolToughHide = true;
      stats.toughHidden++;                                       // 隐实例数（一次）
      if (diag.length < 60) diagPush('tough', { verdict: 'hide-all' });
    }
    return true;
  }
  function installNumEffect(NumCls) {
    var proto = NumCls && NumCls.prototype;
    if (!proto || typeof proto.setData !== 'function' ||
        (typeof proto.action !== 'function' && typeof proto.draw !== 'function')) return false;
    var origSet = proto.setData, origAct = proto.action, origDraw = proto.draw;
    // 注意：setData 钩在 orig 之后跑（numSet 在 orig 内分配，清空隐形依赖它已存在）；
    //   hSpeed/vSpeed 透传给 onNumSetData（v1.1.12：2002 回蓝/抽蓝甄别依据，0075 原文）
    proto.setData = function (numPlayer, setIndex, p3, numString, hSpeed, vSpeed) {
      var r = origSet.apply(this, arguments);
      hookGuard(onNumSetData, [this, numPlayer, setIndex, numString, hSpeed, vSpeed]);
      return r;
    };
    if (typeof origAct === 'function') {
      proto.action = function () {
        if ((this.setIndex | 0) === 2004) toughHideCheck(this);   // 【v1.1.20】首调判定（numPlayer 未消费）
        hookGuard(onNumAction, [this]);
        return origAct.apply(this, arguments);
      };
    }
    if (typeof origDraw === 'function') {
      proto.draw = function () {
        // 【v1.1.20】我方韧性白字：整段不上屏（numSet 永不加父级，物理链照常跑完正常回收）
        if ((this.setIndex | 0) === 2004 && toughHideCheck(this)) return;
        hookGuard(onNumDraw, [this]);
        return origDraw.apply(this, arguments);
      };
    }
    log('数字特效挂钩完成（setData 登记 + draw 直绘首调触发，action 兜底）');
    return true;
  }
  // 挂钩战斗控制类（模块 241）：executeHPMPUpdate 在蓝条/血条真正变动瞬间被调用一次，
  //   this.actorPlayer=目标玩家、this.attr=91HP/92MP、this.attrValue=带符号原始值。
  //   扣蓝（attr=92 && attrValue<0）→ 真气贯穿，时机与蓝条变动（=攻击动作）严格同步。
  function installControl(CtrlCls) {
    var proto = CtrlCls && CtrlCls.prototype;
    if (!proto || typeof proto.drawNumEffect !== 'function') return false;
    // 【v1.1.11 兜底A/B】drawNumEffect：0241 原文 draw 链 case NUM_EFFECT → drawNumEffect(e,0,0)
    //   → this.obj instanceof 243 → 被调瞬间 = 该数字首帧上屏。onNumCtrlDraw 先直读
    //   this.obj 原生三件套（兜底A），无主时弹 FIFO 最旧登记（兜底B）；
    //   WeakSet 记已处理 control（防后续帧重复），done() 时移除（池复用后干净）。
    var seenCtrls = (typeof WeakSet === 'function') ? new WeakSet() : null;
    if (typeof proto.drawNumEffect === 'function') {
      var origDrawNE = proto.drawNumEffect;
      proto.drawNumEffect = function () {
        hookGuard(onNumCtrlDraw, [this, seenCtrls]);
        return origDrawNE.apply(this, arguments);
      };
    }
    if (typeof proto.done === 'function') {
      var origDone = proto.done;
      proto.done = function () {
        if (seenCtrls) { try { seenCtrls.delete(this); } catch (e) {} }
        return origDone.apply(this, arguments);
      };
    }
    log('控制类 drawNumEffect(兜底) 挂钩完成');
    return true;
  }
  // 挂钩玩家类原型 addBuffer(buffer)：this = 被加 buff 的玩家（有 battleSprite），
  // buffer.statusBit/attrID/lastTime 为目标状态信息。
  // 【为何不用 Buffer.alloc】其第 8 参名为 target 但实为"施法者"（processSkillPower(o,e,t,_)
  //   → processBattlePower(this,e,t,...) 里第 8 参 = 施法者 e），据此取目标会挂错人。
  function installBuffer(PlayerCls) {
    var proto = PlayerCls && PlayerCls.prototype;
    if (!proto || typeof proto.addBuffer !== 'function') return false;
    var origAdd = proto.addBuffer;
    proto.addBuffer = function (buffer) {
      hookGuard(onBufferEvent, [this, buffer]);
      return origAdd.apply(this, arguments);
    };
    log('玩家 addBuffer 挂钩完成');
    return true;
  }
  // 【v1.1.13】Buffer.alloc 挂钩（模块 386 静态）—— 全量 buff 创建统计：
  //   诊断「态0」到底是目标没挂上 debuff 还是检测问题（bufferText 实证：3=流血 10=衰弱）。
  //   注意 alloc 第 8 参是施法者不是目标（v1.1.2 实锤），故只统计不触发。
  function onBufAlloc(statusBit, lastTime, attrID, battleRef) {
    if (disabled) return;
    try {
      // 【v1.1.15】防御捕获逻辑层 battle 引用（alloc 任一参数含 getPlayerByPos 即是）
      if (!logicBattleRef && battleRef && typeof battleRef.getPlayerByPos === 'function') {
        logicBattleRef = battleRef;
        log('逻辑层 battle 引用已捕获（Buffer.alloc 参数）');
      }
      var bit = statusBit | 0;
      if (bit === 10) stats.buffMade10++;
      else if (bit === 3) stats.buffMade3++;
      if ((bit === 10 || bit === 3) && CFG.DIAG_LOG) diagPush('buffmade', { bit: bit, lt: lastTime | 0, attrID: attrID | 0 });
    } catch (e) {}
  }
  function installBufAlloc(BufferCls) {
    if (!BufferCls || typeof BufferCls.alloc !== 'function') return false;
    var orig = BufferCls.alloc;
    BufferCls.alloc = function () {
      var eng = null;
      try {
        for (var k = 0; k < arguments.length; k++) {
          var a = arguments[k];
          if (a && typeof a.getPlayerByPos === 'function') { eng = a; break; }
        }
      } catch (e) {}
      hookGuard(onBufAlloc, [arguments[3], arguments[4], arguments[1], eng]);
      return orig.apply(this, arguments);
    };
    log('Buffer.alloc 挂钩完成（buff 创建统计 + 逻辑层 battle 引用捕获 v1.1.15）');
    return true;
  }
  function tryInstall() {
    if (installedNum && installedBuf && installedCtrl && installedBufAlloc && installedBridge) return;
    var req = window.__worldReq;
    if (!req || !req.c) return;
    for (var id in req.c) {
      var m = req.c[id];
      if (!m) continue;
      var e = m.exports;
      if (!e) continue;
      try {
        // 【v1.1.11】FightTool 显示接管已删除（抑制即断链），不再检测模块 75 的 getAniEffectByControl。
        // 战斗数字特效类：原型 setData+action+setImage+removeShow（模块 243 特征，唯一）——已验证可用
        if (!installedNum) {
          var nd = e['default'] || e;
          if (nd && nd.prototype && typeof nd.prototype.setData === 'function' &&
              typeof nd.prototype.action === 'function' &&
              typeof nd.prototype.setImage === 'function' &&
              typeof nd.prototype.removeShow === 'function' &&
              typeof nd.prototype.setDrawPosition === 'function') {
            hookLog.numModule = id;
            if (installNumEffect(nd)) installedNum = true;
          }
        }
        // 战斗控制类：【v1.1.13 放宽】executeHPMPUpdate 单特征（bundle 全文仅 1 处定义）。
        //   v1.1.12 三特征联合判定在真机未生效（HPMP 0/0 + 兜底计数全 0 ⇒ 钩没装上），原因未明，
        //   放宽后 hookLog.ctrlModule 记录匹配模块号，角标可判读。
        if (!installedCtrl) {
          var cd = e['default'] || e;
          if (cd && cd.prototype && typeof cd.prototype.executeHPMPUpdate === 'function') {
            hookLog.ctrlModule = id;
            if (installControl(cd)) installedCtrl = true;
          }
        }
        // 玩家类：【v1.1.13 放宽】addBuffer 单特征（0075 两处调用实锤主路径；bundle 全文仅 1 处类定义）。
        if (!installedBuf) {
          var pd = e['default'] || e;
          if (pd && pd.prototype && typeof pd.prototype.addBuffer === 'function') {
            hookLog.addBufferModule = id;
            if (installBuffer(pd)) installedBuf = true;
          }
        }
        // 【v1.1.13】Buffer 静态 alloc（模块 386 特征）—— buff 创建统计
        if (!installedBufAlloc) {
          if (e && e.Buffer && typeof e.Buffer.alloc === 'function' &&
              e.Buffer.prototype && typeof e.Buffer.prototype.getStatus === 'function') {
            hookLog.bufAllocModule = id;
            if (installBufAlloc(e.Buffer)) installedBufAlloc = true;
          }
        }
        // 【v1.1.15】状态位图桥接：扫描全部模块，凡原型 own 有 setBattleStatus/clearBattleStatus
        //   的类全部挂钩（真机实锤双层对象——逻辑层玩家类可能与 0056 非同一类/子类覆盖，
        //   0527 面板用同一 isBattleStatus 读位图 ⇒ 位图必经 setBattleStatus 写入）。
        //   已桥接的原型以 __wolStatusBridged 去重，轮询重复扫描只增量挂钩新类。
        {
          var sd = e['default'] || e;
          if (sd && sd.prototype && !sd.prototype.__wolStatusBridged &&
              (Object.prototype.hasOwnProperty.call(sd.prototype, 'setBattleStatus') ||
               Object.prototype.hasOwnProperty.call(sd.prototype, 'clearBattleStatus'))) {
            if (installStatusBridge(sd, id)) installedBridge = true;
          }
        }
      } catch (x) {}
    }
    if (installedNum && installedBuf && installedCtrl && installedBufAlloc && installedBridge) {
      clearInterval(pollTimer);
      log('战斗浮动跳字 v1.1.27');
    }
  }
  var pollTimer = setInterval(tryInstall, 350);
  tryInstall();

  // ---------------- 屏上诊断角标（v1.1.9，免控制台）----------------
  // 游戏画面左上角常驻半透明角标：版本 + 四挂钩状态 + 事件链计数实时刷新。
  // pointer-events:none 不挡任何游戏点击；无 document 环境（自测沙盒/Node）自动跳过。
  var badgeEl = null;
  var badgeSuppressed = true;    // 【用户要求 2026-10-07】PC 浏览器也不再显示左上角诊断角标；排障走控制台 __worldolFloatText.status()
  function ensureBadge() {
    if (badgeEl || badgeSuppressed || typeof document === 'undefined' || !document.body) return;
    try {
      // 【v1.1.19】APK 确定性抑制：虚拟域名（shouldInterceptRequest）/file 协议一律不建角标；
      // UA 判定保留（部分国产 ROM WebView UA 可能不含 Android，真机截图实锤角标漏出）
      if (/appassets\.worldol\.local|^file:/i.test(String(location.href || '')) ||
          /Android|iPhone|iPad|Mobile/i.test(String(navigator.userAgent || ''))) {
        badgeSuppressed = true;
        return;
      }
      badgeEl = document.createElement('div');
      badgeEl.style.cssText = 'position:fixed;left:4px;top:4px;z-index:2147483646;' +
        'background:rgba(0,0,0,.55);color:#7CFC00;font:10px/1.45 Consolas,monospace;' +
        'padding:3px 6px;border-radius:3px;pointer-events:none;white-space:pre;';
      document.body.appendChild(badgeEl);
      setInterval(updateBadge, 500);
      updateBadge();
      log('屏上诊断角标已开启（左上角，免控制台）');
    } catch (e) { badgeEl = null; }
  }
  function updateBadge() {
    if (!badgeEl) return;
    try {
      var by = stats.setDataByIndex || {};
      function n(k) { return by[k] || 0; }
      var hk = (installedNum ? 'N✓' : 'N✗') + (installedBuf ? ' B✓' : ' B✗') +
               (installedCtrl ? ' C✓' : ' C✗') +
               (installedBufAlloc ? ' A✓' : ' A✗');
      badgeEl.textContent =
        '跳字v' + api.version + '  ' + hk + '\n' +
        'setData ' + stats.setDataTotal + ' {伤' + n('2000') + ' 附' + n('2001') +
          ' 蓝' + n('2002') + ' 暴' + n('2003') + ' 韧' + n('2004') + '}' +
          ' 有主' + stats.setDataPlayer + ' 清' + stats.blankCnt + ' 蓝放' + stats.mpGiven +
          ' 己蓝' + stats.mpOurSide + ' 韧判' + stats.toughTry + '{隐' + stats.toughHidden +
          ' 显' + stats.toughShown + ' 弹' + stats.fifoToughDrop + '}\n' +
        '登记' + stats.numRegistered + ' 触发' + stats.numFired +
          ' 直读' + stats.fifoDirect + ' 弹' + stats.fifoPopped + ' 队' + pendingFIFO.length +
          ' 伤' + stats.routedDamage + ' 隐' + stats.dmgHidden + ' 蓝' + stats.routedMP + ' 态' + stats.routedStatus +
          ' 挂' + (stats.buffMade10 + stats.buffMade3) + '\n' +
        '扫' + stats.statusScans + ' 位' + stats.bitChecks + '/' + stats.bitHit +
          ' 桥' + stats.statusSets + '{弱' + stats.weakSet + ' 血' + stats.bloodSet + '}' +
          ' 戳' + stats.stampHit + ' 映' + stats.posHit +
          ' 实' + stats.realChecks + '/' + stats.realHit + ' 列' + stats.listHit +
          ' 己态' + stats.stOurSide + '\n' +
        'draw' + stats.numDraw + ' act' + stats.numAction +
          ' 重' + stats.numDup + '{空' + stats.numNull + ' 型' + stats.numKind + ' 值' + stats.numBad + '}' +
          ' HP ' + stats.hpmpCreated + '/' + stats.hpmpCalls + '/' + stats.hpmpDrain + ' BUF ' + stats.bufferCalls +
          ' 帧' + stats.frames + (stats.lastErr ? ' ⚠' + stats.lastErr : '');
    } catch (e) {}
  }
  try { loadBMP(); } catch (e) { log('位图素材加载启动失败', e); }
  ensureBadge();   // 页面加载即显示（含版本号，先于战斗模块挂钩——旧缓存一眼识别）
  var badgePoll = setInterval(function () {   // body 未就绪时自动重试，直到角标挂上（或已判定为手机环境）
    if (badgeEl || badgeSuppressed) clearInterval(badgePoll); else ensureBadge();
  }, 800);

  // ---------------- 调试接口 ----------------
  api.ready = true;
  api.disable = function () { disabled = true; };
  api.enable = function () { disabled = false; };
  api.skip = skipAll;
  api.config = CFG;
  // 诊断：__worldolFloatText.dump() 打印最近 60 条原始事件参数；.diag(true) 开实时日志
  api.dump = function () {
    try { console.table ? console.table(diag) : console.log(diag); } catch (e) { log(diag); }
    return diag.slice();
  };
  api.diag = function (on) { CFG.DIAG_LOG = on !== false; log('诊断实时日志：' + (CFG.DIAG_LOG ? '开' : '关')); };
  api.clearDiag = function () { diag.length = 0; };
  api.status = function () {
    var req = window.__worldReq;
    return {
      version: api.version,
      booted: booted, egretReady: !!window.egret, reqReady: !!req,
      numHook: installedNum, bufferHook: installedBuf, ctrlHook: installedCtrl,
      hooks: hookLog,
      moduleCacheCount: req && req.c ? Object.keys(req.c).length : 0,
      stats: {
        setDataTotal: stats.setDataTotal, setDataByIndex: stats.setDataByIndex,
        setDataPlayer: stats.setDataPlayer, blankCnt: stats.blankCnt,
        numRegistered: stats.numRegistered, numAction: stats.numAction,
        numDraw: stats.numDraw, numFired: stats.numFired, numDup: stats.numDup,
        numNull: stats.numNull, numKind: stats.numKind, numBad: stats.numBad,
        mpTaken: stats.mpTaken, mpGiven: stats.mpGiven,
        hpmpCreated: stats.hpmpCreated, mpCreate: stats.mpCreate,
        mpOurSide: stats.mpOurSide, stOurSide: stats.stOurSide,
        mpUnknown: stats.mpUnknown, stUnknown: stats.stUnknown,     // 【v1.1.24/25】
        toughHidden: stats.toughHidden,
        toughTry: stats.toughTry, toughShown: stats.toughShown,     // 【v1.1.21】
        fifoToughDrop: stats.fifoToughDrop,                          // 【v1.1.21】
        buffMade3: stats.buffMade3, buffMade10: stats.buffMade10, statusScans: stats.statusScans,
        bitChecks: stats.bitChecks, bitHit: stats.bitHit, listHit: stats.listHit,
        statusSets: stats.statusSets, weakSet: stats.weakSet, bloodSet: stats.bloodSet,
        stampHit: stats.stampHit, posHit: stats.posHit, realChecks: stats.realChecks, realHit: stats.realHit,
        bridgeModules: hookLog.bridgeModules || [],
        ctrlDraw: stats.ctrlDraw, fifoDirect: stats.fifoDirect,
        fifoPopped: stats.fifoPopped, fifoExpired: stats.fifoExpired,
        fifoLen: pendingFIFO.length,
        routedDamage: stats.routedDamage, dmgHidden: stats.dmgHidden,
        routedMP: stats.routedMP, routedStatus: stats.routedStatus,
        hpmpCalls: stats.hpmpCalls, hpmpDrain: stats.hpmpDrain, bufferCalls: stats.bufferCalls,
        frames: stats.frames, lastErr: stats.lastErr
      }
    };
  };
  // 战斗中控制台自测：__worldolFloatText.test('crit', 999999)
  // styleKey: 'damage' | 'crit' | 'mp' | 'weak' | 'blood'
  // pos：可选，战斗站位号；给出时直接对该站位的真实战斗单位跳字（走与实战相同的集群/分层逻辑）。
  // 当前仍挂在跳字层上的显示对象个数（排查数字滞留用）
  api.liveViews = function () { try { return layer ? layer.numChildren : 0; } catch (e) { return -1; } };
  api.test = function (styleKey, amount, pos) {
    try {
      styleKey = styleKey || 'damage';
      amount = Math.max(1, (amount | 0) || 1200);
      if (pos != null && window.__worldReq) {
        var fi = window.__worldReq(54)["default"].ins, bt = fi && fi.battleAni, real = bt && bt.getPlayerByPos(pos);
        if (!real || !real.battleSprite) { log('站位 ' + pos + ' 没有战斗单位'); return; }
        if (styleKey === 'heal' || styleKey === 'mana') fireNum(real, amount, styleKey);
        else routeDamage(real, amount, styleKey === 'crit');
        return;
      }
      if (!layerContainer) {
        // 无战斗时的自测兜底：直接挂主舞台，在屏幕中央演示样式
        var st = egretRef.MainContext && egretRef.MainContext.instance && egretRef.MainContext.instance.stage;
        if (!st) { log('未找到舞台，请先进入游戏'); return; }
        layerContainer = st;
      }
      var fake = {
        __wolFloatId: -999,
        battleSprite: {
          spriteX: toNum(layerContainer.width, 660) / 2,
          spriteY: 430,
          parent: layerContainer
        }
      };
      if (styleKey === 'weak') routeStatus(fake, 10);
      else if (styleKey === 'blood') routeStatus(fake, 3);
      else if (styleKey === 'status') routeStatus(fake, 10);
      else routeDamage(fake, amount, styleKey === 'crit');
    } catch (e) { log('自测失败', e); }
  };
  }
})();
