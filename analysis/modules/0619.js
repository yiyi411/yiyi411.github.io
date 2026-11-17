(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.SWITCH_BTN = void 0));
  var o = i(37),
    n = i(19),
    a = i(22),
    r = i(2),
    s = i(1),
    l = i(10),
    u = i(4),
    _ = i(3),
    d = i(0),
    p = i(620),
    c = i(5),
    h = i(85),
    f = i(252),
    T = i(117),
    E = i(118),
    y = (i(46), i(27)),
    g = i(45),
    v = i(38),
    S = i(196),
    I = i(35),
    m = i(44),
    A = i(12),
    C = i(15),
    P = i(28),
    R = i(33),
    O = i(54),
    N = i(156),
    M = i(193),
    L = i(621),
    w = i(91),
    b = i(97),
    x = i(16),
    D = i(40),
    B = i(21),
    G = i(53);
  t.SWITCH_BTN = { MENU_1: 0, MENU_2: 1, CHAT: 2, MISSION: 3 };
  var U = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      __extends(t, e),
      Object.defineProperty(t.prototype, "model", {
        get: function () {
          return this._model;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.onConnectLost = function () {
        e.prototype.onConnectLost.call(this);
      }),
      (t.prototype.onEnter = function () {
        (e.prototype.onEnter.call(this),
          this.doPutRoleServerShare(),
          this.sendLevelOpen());
        var t = _["default"].getProxy(d.ModName.Charge, d.ProxyType.Charge);
        t.doChargeisMultiple();
        var i = _["default"].getProxy(d.ModName.Role, d.ProxyType.Role);
        i.doArtifactAll();
        var o = _["default"].getProxy(d.ModName.Buddy, d.ProxyType.Buddy);
        ((o.buddys = {}),
          o.mtRequest(pb.BuddyCMD.BUDDY_CMD_DATA_INFO),
          this.sendCommonRewardInit());
      }),
      (t.prototype.initDayRed = function () {
        (localStorage.setItem(
          "MissionDailyGame_" + c["default"].myPlayer.id,
          D.TimeUtil.formatTime(x["default"].timer.serverTime, "dd"),
        ),
          g["default"].getInstance.upListData(
            v.ActType.DAILY_GAME,
            !0,
            u["default"].IS_OPEN_TYPE_DAILY_ICON,
          ),
          g["default"].getInstance.upListData(
            v.ActType.GAME_CLUB,
            !0,
            g["default"].GAME_CLUB,
          ));
        var e = _["default"].getProxy(d.ModName.Role, d.ProxyType.Role);
        e.isEnergyInfo = !0;
      }),
      (t.prototype.initialize = function () {
        var t = this;
        (e.prototype.initialize.call(this),
          (t._model = new p["default"]()),
          t.onProto(n["default"].CG_SEND_IS_OPEN, t.handleMessage, t),
          t.onProto(
            n["default"].CG_ERROR_NOTIFY,
            t.processGameServerErrorNotify,
          ),
          t.onProto(
            n["default"].CG_ACTOR_LOGIN_LOTTERY_DRAW_NEW,
            t.doPushIsOpen,
            t,
          ),
          t.onProto(n["default"].CG_HKT_GM_MSG, t.onHktGmMsg, t),
          t.onProto(
            [n["default"].CG_TEAM_INVITE, n["default"].CG_COUNTRY_INVITE],
            t.processReqAskMsg,
          ),
          t.onProto(
            [
              n["default"].CG_SEND_ACCOST,
              n["default"].CG_SEND_INITIATIVE_ACCOST,
            ],
            t.onChatUp,
          ),
          t.onProto(n["default"].CG_SHARE_CALL_BACK, t.putServerShareCallBack),
          t.onProto(
            n["default"].CG_ENTER_BY_SHARE,
            t.putRoleServerShareCallBack,
            t,
          ),
          t.onProto(pb.EUserProtocol.S2C_FUNCTION_INFO, t.functionInfo, t),
          t.onProto(
            pb.EUserProtocol.S2C_FUNCTION_REWARD,
            t.pushFunctionInfo,
            t,
          ),
          t.onProto(n["default"].CG_ACTOR_ATTRIBUTE_UPDATE, t.pushUpUser, t),
          t.onProto(n["default"].CG_HP_MP_PUSH, t.pushUpDataRole, t),
          t.onProto(
            n["default"].CG_ACTOR_ATTRIBUTE_UPDATE_STRING,
            t.pushUpUserStr,
            t,
          ),
          t.onProto(pb.EUserProtocol.S2C_ERROR_NOTICE, t.onErrorNotice, t),
          t.onProto(
            pb.EUserProtocol.S2C_SCENE_PLAYER_ASK_EVENT,
            t.onPlayerAskEvent,
            t,
          ),
          t.onProto(pb.EUserProtocol.S2C_LEVELOPEN_INFO, t.onLevelOpen, t),
          t.onProto(pb.EUserProtocol.S2C_LEVELOPEN_TIR, t.onLevelOpenId, t),
          t.onProto(pb.EUserProtocol.S2C_BAG_FULL, t.onBagFull, t),
          t.onProto(
            pb.EUserProtocol.S2C_BLOOD_BOTTLE_INFO,
            t.onBloodBottleInfo,
            t,
          ),
          t.onNt(r.MainEvent.PLAYER_ASK_EVENT, t.listenPlayerAskEvent),
          t.onNt(r.MainEvent.ROLE_LOGOUT, t.onRoleLogOut),
          t.onProto(
            pb.EUserProtocol.S2C_VIRTUAL_MAP_BATTLE,
            t.onVirtualMapBattle,
          ),
          t.onProto(
            pb.EUserProtocol.S2C_COMMON_REWARD_INIT,
            t.onCommonRewardInit,
          ),
          t.onProto(
            pb.EUserProtocol.S2C_COMMON_REWARD_ASK,
            t.onCommonRewardAsk,
          ),
          t.onProto(
            pb.EUserProtocol.S2C_COMMON_REWARD_SHOW,
            t.onCommonRewardShow,
          ),
          t.onNt(r.IntroduceEvent.introduceView, t.onIntroduceView),
          t.onNt(r.IntroduceEvent.clickIntroduce, t.onClickIntroduce),
          t.onNt(r.IntroduceEvent.skipIntroduce, t.onSkipIntroduce),
          t.onNt(r.IntroduceEvent.registeIntroduce, t.onRegisteIntroduce),
          t.onNt(r.IntroduceEvent.removeIntroduce, t.onRemoveIntroduce),
          t.onNt(r.IntroduceEvent.saveIntroduce, t.onSaveIntroduce),
          t.onProto(pb.EUserProtocol.S2C_COMMON_DIALOGUE, t.onCommonDialogue),
          t.onProto(
            pb.EUserProtocol.S2C_COMMON_DIALOGUE_SAVE,
            t.onCommonDialogueSave,
          ),
          t.onProto(n["default"].CG_MONSTER_GROUP, t.onMonsterGroup),
          t.onNt(r.MainEvent.MONSTER_GROUP_GET, t.onMonsterGroupGet),
          t.onProto(pb.EUserProtocol.S2C_TASK_GETINFO, t.onStakGetInfo),
          t.onProto(pb.EUserProtocol.S2C_TASK_SUBMIT, t.onStakSubmit),
          this.onProto(
            pb.EUserProtocol.S2C_BLOCK_SETTING,
            this.blockSettingRes,
          ));
      }),
      (t.prototype.onHktGmMsg = function (e) {
        var t = e.body,
          i = t.getByte();
        ((this._model.kfHint = i >= 0),
          this.sendNt(r.MainEvent.HKT_KeFu_HINT, this._model.kfHint));
      }),
      (t.prototype.onRoleLogOut = function () {
        this.commonRewardInitVo = void 0;
      }),
      (t.prototype.onChatUp = function (e) {
        console.log("onChatUp");
        var t = e.body;
        f.ChatUp.doChatUpRefresh(t);
      }),
      (t.prototype.processReqAskMsg = function (e) {
        var t = e.body,
          i = t.getByte();
        if (0 != i) {
          var o = t.getString();
          return void h["default"].addChatSystemMsg(o, !0);
        }
      }),
      (t.prototype.processGameServerErrorNotify = function (e) {
        var t = e.body,
          i = (t.getByte(), t.getString());
        y["default"].loginConfirm(
          i,
          void 0,
          l.GameText.getText(l.GameText.TI_ERROR),
        );
      }),
      (t.prototype.handleMessage = function (e) {
        var t = e.body;
        null != t && c["default"].doGetIsOpen(t);
      }),
      (t.prototype.doPushIsOpen = function (e) {
        var t = e.body;
        T["default"].doPushIsOpen(t);
      }),
      (t.prototype.putServerShare = function () {
        (this.sendNt(r.ActivityEvent.SHARE_CALLBACK),
          E["default"].shareSuccess());
        var e = new a.Message(n["default"].CG_SHARE_CALL_BACK);
        this.sendProto(e);
      }),
      (t.prototype.putServerShareCallBack = function (e) {}),
      (t.prototype.doPutRoleServerShare = function () {
        if (gs.shareQuery) {
          var e = new a.Message(n["default"].CG_ENTER_BY_SHARE);
          (e.putString(gs.shareQuery.fuid),
            e.putInt(gs.shareQuery.fserverid),
            e.putInt(gs.shareQuery.froleid),
            this.sendProto(e));
        }
      }),
      (t.prototype.putRoleServerShareCallBack = function (e) {}),
      (t.prototype.doFunctionInfo = function () {
        var e = _["default"].getProxy(d.ModName.Mission, d.ProxyType.Mission);
        if ((e.doMissionTaskInfo(), gs.shareDisabled))
          g["default"].getInstance.setClearKey(
            v.ActType.ACTIVITY_SHARE,
            u["default"].IS_OPEN_TYPE_SHARE_ICON,
            !1,
            !1,
            [],
          );
        else {
          var t = _["default"].getProxy(
            d.ModName.Activity,
            d.ProxyType.Activity,
          );
          t.forSharInfo();
        }
        var i = new a.Message(pb.EUserProtocol.C2S_FUNCTION_INFO);
        this.sendProto(i);
      }),
      (t.prototype.functionInfo = function (e) {
        var t = this,
          i = e.body,
          o = i.proto;
        ((g["default"].getInstance.setlist = o.info),
          t.sendNt(r.MainEvent.ON_MAIN_ICON));
        var n = localStorage.getItem(
          "MissionDailyGame_" + c["default"].myPlayer.id,
        );
        n && D.TimeUtil.formatTime(x["default"].timer.serverTime, "dd") != n
          ? this.initDayRed()
          : n || this.initDayRed();
      }),
      (t.prototype.pushFunctionInfo = function (e) {
        var t,
          i = e.body,
          o = i.proto;
        switch (o.type) {
          case v.ActType.GRADE_DAY:
            t = u["default"].IS_OPEN_TYPE_OPEN_ICON;
            break;
          case v.ActType.GUILD_TASK:
            t = u["default"].IS_OPEN_TYPE_MISSION_ICON;
            break;
          case v.ActType.ACTIVITY_OLD_CP:
            t = u["default"].IS_OPEN_TYPE_BONUS_ONLINE;
            break;
          case v.ActType.ACTIVITY_SHARE:
            t = u["default"].IS_OPEN_TYPE_SHARE_ICON;
            break;
          case v.ActType.DAILY_GAME:
            t = u["default"].IS_OPEN_TYPE_DAILY_ICON;
            break;
          case v.ActType.CELEBRATION:
          case v.ActType.BOSS_ATTACK:
            t = g["default"].ACTIVITY_NEW;
            break;
          case v.ActType.TOWER:
            t = g["default"].TOWER;
            break;
          case v.ActType.RICH_MAN:
            t = g["default"].RICH_MAN;
            break;
          case v.ActType.OPTIONAL:
            t = g["default"].ACTIVITY_OPTIONAL;
            break;
          case v.ActType.REDPACKET:
            t = g["default"].RED_PACKET;
            break;
          case v.ActType.BOSS_ATTACK:
            t = g["default"].ACTIVITY_NEW;
            break;
          case v.ActType.PET_PK:
            t = g["default"].PET_PK;
            break;
          case v.ActType.FINAL_BOSS:
            t = g["default"].FINAL_BOSS;
            break;
          default:
            t = u["default"].IS_OPEN_TYPE_ACTIVITY_ICON;
        }
        (g["default"].getInstance.upListData(o.type, !0, t, o.id),
          _["default"].sendNt(r.MainEvent.FUNCTION_REWARD, o));
      }),
      (t.prototype.pushUpUser = function (e) {
        console.log("更新角色信息");
        var t = e.body,
          i = t.getByte(),
          o = c["default"].myPlayer;
        if (o) {
          for (var n = 0; i > n; n++) {
            var a = t.getShort(),
              r = t.getInt();
            null != o && o.addValue(a, r);
          }
          (o.addValue(t.getShort(), t.getInt()),
            s["default"].updateWorldPlayerInfoUI());
          var u = _["default"].getProxy(d.ModName.Country, d.ProxyType.Country),
            p = o.getLevel() == u.getPreLevel(),
            h = egret.localStorage.getItem(G.LocalStorageKey.levelUpTip);
          !h &&
            p &&
            o.get(A.ModelConst.EXP) >= o.get(A.ModelConst.EXPMAX) &&
            (s["default"].alertMessage(l.GameText.ROLE_UP_FULL_TIPS),
            egret.localStorage.setItem(G.LocalStorageKey.levelUpTip, "true"));
        }
      }),
      (t.prototype.pushUpUserStr = function (e) {
        var t = e.body,
          i = t.getByte(),
          o = c["default"].myPlayer;
        if (o)
          for (var n = 0; i > n; n++) {
            var a = t.getShort(),
              r = t.getString();
            null != o && o.addValueStr(a, r);
          }
      }),
      (t.prototype.pushUpDataRole = function (e) {
        try {
          var t = e.body,
            i = c["default"].myPlayer;
          if (!i) return;
          var o = t.getInt(),
            n = t.getInt();
          if (((i.mp = n), (i.hp = o), i.pet)) {
            var a = i.pet,
              r = t.getInt();
            r && r >= 0 && (a.hp = r);
            var s = t.getInt();
            s && s >= 0 && (a.mp = s);
          }
        } catch (l) {
          console.error(l);
        }
      }),
      (t.prototype.onErrorNotice = function (e) {
        var t = e.body,
          i = t.proto;
        (s["default"].alertMessage(i.errMsg),
          this.sendNt(r.MainEvent.ERROR_INFO));
      }),
      (t.prototype.openMainHint = function () {
        var e = c["default"].myPlayer,
          t = e.id,
          i = localStorage.getItem("mainHintType_" + t);
        if (null == i || void 0 == i || "" == i)
          (localStorage.setItem("mainHintType_" + t, "0"),
            this.doGetNoticeInfo(!0));
        else {
          var o = B["default"].getTimeDay(),
            n = i;
          this.doGetNoticeInfo(n == o ? !1 : !0);
        }
      }),
      (t.prototype.doGetNoticeInfo = function (e) {
        return __awaiter(this, void 0, void 0, function () {
          var t, i;
          return __generator(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (S["default"].list.length = 0),
                  (t = new a.Message(n["default"].CG_GET_NOTICE_INFO)),
                  this.sendProto(t),
                  [4, I["default"].sendProtoAsync(t)]
                );
              case 1:
                return (
                  (t = o.sent()),
                  S["default"].setMsg(t),
                  this.sendNt(r.MainEvent.ON_HITE_SHOW),
                  (i = c["default"].myPlayer),
                  go.isFight
                    ? [2]
                    : P["default"].ins.getOpen(P.LevelOpenProtoId.Hint)
                      ? (go.openPay &&
                          e &&
                          S["default"].list.length > 0 &&
                          !m.GuideModel.ins.curGuide &&
                          i.get(A.ModelConst.LEVEL) > 1 &&
                          s["default"].showModal(
                            d.ModName.Main,
                            d.MainViewType.MainHint,
                            !0,
                          ),
                        [2])
                      : [2]
                );
            }
          });
        });
      }),
      (t.prototype.listenPlayerAskEvent = function (e) {
        var t = e.body;
        this.sendPlayerAskEvent(t[0], t[1]);
      }),
      (t.prototype.sendPlayerAskEvent = function (e, t) {
        var i = new a.Message(pb.EUserProtocol.SCENE_PLAYER_ASK_EVENT),
          o = i.proto;
        ((o.type = e), (o.id = t), this.sendProto(i));
      }),
      (t.prototype.onPlayerAskEvent = function () {
        C.Tips.show("已发送邀请");
      }),
      (t.prototype.sendLevelOpen = function () {
        var e = new a.Message(pb.EUserProtocol.C2S_LEVELOPEN_INFO);
        this.sendProto(e);
      }),
      (t.prototype.onLevelOpen = function (e) {
        var t = e.body,
          i = t.proto,
          o = _["default"].getProxy(d.ModName.Role, d.ProxyType.Role);
        (o.data.PlayerVo.isMyPlayer
          ? (P["default"].ins.setData(i.info),
            this.doFunctionInfo(),
            this.openMainHint())
          : ((o.data.levelOpen = i),
            this.sendNt(r.RoleEvent.ON_USER_MESSAGE_NUM)),
          this.sendNt(r.ChargeEvent.TOTAL_CHARGE_UPDATE),
          this.sendNt(r.MainEvent.ON_OPEN_LEVEL_UP));
      }),
      (t.prototype.onLevelOpenId = function (e) {
        var t = e.body,
          i = t.proto;
        P["default"].ins.setId(i.id);
      }),
      (t.prototype.onBagFull = function () {
        _["default"].sendNt(r.BagEvent.BAG_FULL);
      }),
      (t.prototype.onBloodBottleInfo = function (e) {
        var t = e.body,
          i = t.proto;
        c["default"].bloodData = i;
        var o = c["default"].myPlayer.bag.getItem(
          R["default"].BLOOD_BOTTLE_POS,
        );
        (o &&
          ((o.powerValueBlood1 = i.leftEnergy),
          (o.powerValueBloodMax1 = i.maxEnergy)),
          go.isFight ||
            void 0 == go.isFight ||
            this.sendNt(r.MainEvent.MAIN_BLOOD_BOTTLE_CMD),
          this.sendNt(r.MainEvent.MAIN_BLOOD_BOTTLE));
      }),
      (t.prototype.onVirtualMapBattle = function (e) {
        var t = e.body,
          i = t.proto;
        O["default"].ins.virtualMapData = i;
      }),
      (t.prototype.sendDesk = function (e) {
        var t = new a.Message(pb.EUserProtocol.C2S_LEVELOPEN_INFO);
        this.sendProto(t);
      }),
      (t.prototype.onCommonRewardInit = function (e) {
        var t = e.body,
          i = t.proto;
        this.commonRewardInitVo = i;
      }),
      (t.prototype.onCommonRewardAsk = function (e) {
        var t = e.body,
          i = t.proto;
        s["default"].alertMessage(i.pointText);
      }),
      (t.prototype.onCommonRewardShow = function (e) {
        var t = e.body,
          i = t.proto,
          o = N.DataDefine.CommonReward + "_" + i.type + "_" + i.id;
        (this.model.setData(o, i.info),
          this.sendNt(r.MainEvent.COMMON_REWARD_SHOW));
      }),
      (t.prototype.sendCommonRewardInit = function () {
        var e = new a.Message(pb.EUserProtocol.C2S_COMMON_REWARD_INIT);
        this.sendProto(e);
      }),
      (t.prototype.sendCommonRewardAsk = function (e, t) {
        var i = new a.Message(pb.EUserProtocol.C2S_COMMON_REWARD_ASK),
          o = i.proto;
        ((o.type = e), (o.id = t), this.sendProto(i));
      }),
      (t.prototype.sendCommonRewardShow = function (e, t) {
        var i = new a.Message(pb.EUserProtocol.C2S_COMMON_REWARD_SHOW),
          o = i.proto;
        ((o.type = e), (o.id = t), this.sendProto(i));
      }),
      (t.prototype.isHasCommonReward = function (e, t) {
        var i,
          o = this.commonRewardInitVo ? this.commonRewardInitVo.info : void 0;
        if (o)
          for (var n = void 0, a = 0; a < o.length; a++)
            ((n = o[a]), n.type == e && -1 != n.ids.indexOf(t) && (i = !0));
        else i = !0;
        return i;
      }),
      (t.prototype.onIntroduceView = function (e) {
        var t = e.body;
        t
          ? (this._introduceView ||
              (this._introduceView = new L.IntroduceView()),
            this._introduceView.showHide(!0))
          : this._introduceView && this._introduceView.showHide();
      }),
      (t.prototype.onClickIntroduce = function () {
        M.IntroduceModel.ins.onClickIntroduce();
      }),
      (t.prototype.onSkipIntroduce = function () {
        M.IntroduceModel.ins.onSkipIntroduce();
      }),
      (t.prototype.onRegisteIntroduce = function (e) {
        var t = e.body,
          i = t[0],
          o = t[1];
        (M.IntroduceModel.ins.registeUI(i, o), this.sendCommonDialogue(i, o));
      }),
      (t.prototype.onRemoveIntroduce = function (e) {
        var t = e.body,
          i = t[0],
          o = t[1];
        M.IntroduceModel.ins.removeUI(i, o);
      }),
      (t.prototype.onSaveIntroduce = function (e) {
        var t = e.body,
          i = t[0],
          o = t[1];
        this.sendCommonDialogueSave(i, o);
      }),
      (t.prototype.onCommonDialogue = function (e) {
        for (
          var t, i, o = e.body, n = o.proto, a = n.list.length, r = 0;
          a > r;
          r++
        )
          ((t = n.list[r]),
            (i = b.VoUtil.createIntroduceVo(
              t.id,
              n.viewId,
              t.talkContent,
              t.px,
              t.py,
              t.direction,
              n.groupId,
              t.viewOrder,
            )),
            (i.isEnd = r == a - 1),
            M.IntroduceModel.ins.addIntroduce(i));
        M.IntroduceModel.ins.onTrigger();
      }),
      (t.prototype.onCommonDialogueSave = function (e) {}),
      (t.prototype.sendCommonDialogue = function (e, t) {
        void 0 === t && (t = 1);
        var i = new a.Message(pb.EUserProtocol.C2S_COMMON_DIALOGUE),
          o = i.proto;
        ((o.viewId = e), (o.groupId = t), this.sendProto(i));
      }),
      (t.prototype.sendCommonDialogueSave = function (e, t) {
        void 0 === t && (t = 1);
        var i = new a.Message(pb.EUserProtocol.C2S_COMMON_DIALOGUE_SAVE),
          o = i.proto;
        ((o.viewId = e), (o.groupId = t), this.sendProto(i));
      }),
      (t.prototype.onMonsterGroup = function (e) {
        for (
          var t,
            i = e.body,
            o = i.getShort(),
            n = i.getInt(),
            a = i.readByte(),
            s = [],
            l = 0;
          a > l;
          l++
        )
          ((t = w["default"].fromBytes(i)),
            (t.hp = t.hpMax),
            (t.mp = t.mpMax),
            s.push(t));
        var u = { type: o, id: n, list: s };
        _["default"].sendNt(r.MainEvent.MONSTER_GROUP, u);
      }),
      (t.prototype.onMonsterGroupGet = function (e) {
        var t = e.body,
          i = t[0],
          o = t[1];
        this.sendMonsterGroup(i, o);
      }),
      (t.prototype.sendMonsterGroup = function (e, t) {
        var i = new a.Message(n["default"].CG_MONSTER_GROUP);
        (i.putShort(e), i.putInt(t), this.sendProto(i));
      }),
      (t.prototype.doStakGetInfo = function () {
        var e = new a.Message(pb.EUserProtocol.C2S_TASK_GETINFO);
        this.sendProto(e);
      }),
      (t.prototype.onStakGetInfo = function (e) {
        var t = e.body,
          i = t.proto;
        _["default"].sendNt(r.MainEvent.STAKGETINFO, i.list);
      }),
      (t.prototype.doStakSubmit = function (e) {
        var t = new a.Message(pb.EUserProtocol.C2S_TASK_SUBMIT),
          i = t.proto;
        ((i.type = e), this.sendProto(t));
      }),
      (t.prototype.onStakSubmit = function (e) {
        var t = e.body,
          i = t.proto;
        _["default"].sendNt(r.MainEvent.STAKSUBMIT, i.type);
      }),
      (t.prototype.doTaskOkNotify = function (e) {
        var t = new a.Message(pb.EUserProtocol.C2S_SUB_TASK_OK_NOTIFY),
          i = t.proto;
        ((i.type = e), this.sendProto(t));
      }),
      (t.prototype.blockSettingReq = function (e, t) {
        var i = new a.Message(pb.EUserProtocol.C2S_BLOCK_SETTING),
          o = i.proto;
        ((o.type = e), (o.blockInfo = t), this.sendProto(i));
      }),
      (t.prototype.blockSettingRes = function (e) {
        var t = e.body,
          i = t.proto;
        this.sendNt("BLOCK_SETTING", i.blockInfo);
      }),
      t
    );
  })(o["default"]);
  t["default"] = U;
});
