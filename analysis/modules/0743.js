(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(22),
    n = i(2),
    a = i(37),
    r = i(18),
    s = i(19),
    l = i(10),
    u = i(1),
    _ = i(5),
    d = i(64),
    p = i(62),
    c = i(43),
    h = i(23),
    f = i(32),
    T = i(20),
    E = i(4),
    y = i(31),
    g = i(12),
    v = i(81),
    S = i(24),
    I = i(11),
    m = i(164),
    A = i(15),
    C = i(13),
    P = i(45),
    R = i(38),
    O = i(92),
    N = i(65),
    M = i(114),
    L = i(69),
    w = i(74),
    b = i(3),
    x = i(26),
    D = i(98),
    B = i(0),
    G = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return ((t._isRefresh = !0), (t.isNewTaskShow = !1), t);
      }
      return (
        __extends(t, e),
        (t.prototype.initialize = function () {
          var e = this;
          (e.onProto(s["default"].CG_TASK_RANDOM_INFO, e.onGotRandomMission, e),
            e.onProto(
              s["default"].CG_TASK_RANDOM_CANCEL,
              e.onGotGiveUpRandomMission,
              e,
            ),
            e.onProto(
              s["default"].CG_TASK_RANDOM_FINISH,
              e.onGotSumbitRanomMission,
              e,
            ),
            e.onProto(
              s["default"].CG_TASK_VITALITY_FIRST_OPEN,
              e.enterCallback,
              e,
            ),
            e.onProto(
              s["default"].CG_TASK_VITALITY_SHOW_REWARD,
              e.seeRewardCallback,
              e,
            ),
            e.onProto(
              s["default"].CG_TASK_VITALITY_REMIND,
              e.getPushCallback,
              e,
            ),
            e.onProto(
              s["default"].CG_TASK_VITALITY_FIRST_PUSH,
              e.getPushRedCallback,
              e,
            ),
            e.onProto(s["default"].CG_TASK_ACCEPT_TEAM, e.onTeamAccept, e),
            e.onProto(s["default"].CG_TASK_DELIVER_TEAM, e.onTeamDeliver, e),
            e.onProto(
              pb.EUserProtocol.S2C_GUILD_TASK_INFO,
              e.missionTaskInfoCallBack,
              e,
            ),
            e.onProto(
              pb.EUserProtocol.S2C_TASK_INFO,
              e.missionDailyInfoCallBack,
              e,
            ),
            e.onProto(s["default"].GC_MAIN_LINE_TASK, e.onGotMainMission, e),
            e.onProto(
              s["default"].GC_SCENE_TASK_INFO,
              e.onUpdateRoleMission,
              e,
            ));
        }),
        (t.prototype.onUpdateRoleMission = function (e) {
          var t = e.body,
            i = _["default"].myPlayer;
          ((L.MainPlayerAi.ins.curMissionId = null),
            r["default"].processDataPlayerMission(t, i));
          for (var o = t.getInt(), n = 0; o > n; n++) {
            var a = t.getInt();
            d["default"].setMissionStatus(i, a, !1);
          }
          var s = t.getBoolean();
          if (s) {
            var l = w["default"].parseNPCData(t),
              u = b["default"].getProxy(B.ModName.Scene, B.ProxyType.Scene);
            u.onGotNpcList(l);
            for (var p = 0, c = l; p < c.length; p++) {
              var h = c[p];
              this.getNpcMissionData(h);
            }
          }
        }),
        (t.prototype.getNpcMissionData = function (e) {
          if (
            e.isVisible &&
            e.isEnable &&
            !e.isTabStatus(g.ModelConst.NPC_MISSION_LOAD)
          ) {
            var t = e.getSign();
            if (
              t == g.ModelConst.NPC_MSS_ACCEPT ||
              t == g.ModelConst.NPC_MSS_SUBMIT
            ) {
              var i =
                e.npcType == w["default"].NPC_MISSION ||
                e.npcType == w["default"].NPC_POWER;
              if (i) {
                var o = r["default"].createGetMissionDataMsg(e.id);
                c["default"].Service.sendProto(o);
              }
            }
          }
        }),
        (t.prototype.onGotMainMission = function (e) {
          var t = e.body,
            i = d["default"].fromBytes(t.getByteArray()),
            o = M.MissionModel.mainMission,
            n = o && !o.submitNextMissionID;
          if (((M.MissionModel.mainMission = i), i)) {
            var a = L.MainPlayerAi.ins;
            a.curMissionId = i.id;
            var r = _["default"].myPlayer.getMissionById(i.id);
            if (!r && _["default"].orgMapID == i.acceptMapId) {
              var s = _["default"].getNpcByID(i.acceptNpcId),
                l = s && s.getMissonById(i.id);
              l &&
                ((l.canAccept = i.canAccept),
                b["default"].sendNt(x.SceneEvent.ON_NPC_SIGN_UPDATE, [
                  i.acceptNpcId,
                ]));
            }
            if (n && i.id != M.MissionModel.missionDialogId) {
              var p =
                  i.status == d.MissionConst.CAN_ACCEPT
                    ? i.acceptNpcId
                    : i.npcId,
                c = _["default"].getNpcByID(p);
              w["default"].doMissionInfoView(
                _["default"].myPlayer,
                i,
                c,
                u["default"].SUB_MISSION_VIEW,
              );
            }
          }
        }),
        (t.prototype.onTeamAccept = function (e) {
          var t = e.body;
          r["default"].processMissionTeamMemberAccept(t);
        }),
        (t.prototype.onTeamDeliver = function (e) {
          var t = e.body;
          r["default"].processMissionTeamDeliver(t);
        }),
        (t.prototype.onGotSumbitRanomMission = function (e) {
          var t = e.body,
            i = t.getByte();
          if (0 > i) return void console.error(t.getString());
          var o = _["default"].myPlayer;
          (r["default"].processMissionReward(o, 0, t),
            u["default"].alertMessage(l.GameText.STR_ALLODS_GOLD_SUCCESS),
            m["default"].doRandomMissionInfo());
        }),
        (t.prototype.onGotGiveUpRandomMission = function (e) {
          var t = e.body,
            i = t.getByte();
          return 0 > i
            ? void console.error(t.getString())
            : void m["default"].doRandomMissionInfo();
        }),
        (t.prototype.onGotRandomMission = function (e) {
          var t = e.body,
            i = new m["default"](0);
          ((i.setting |= m["default"].MISSION_IS_RANDOM),
            i.fromRandomMission(t),
            (i.moneyType = t.getInt()),
            (i.money = t.getInt()),
            (i.myCount = t.getByte()),
            (i.maxCount = t.getByte()),
            this.sendNt(n.MissionEvent.ON_GOT_RANDOM_MISSION, i));
        }),
        (t.prototype.getPushCallback = function (e) {
          var t = e.body;
          null != t &&
            ((this._isRefresh = !0), p["default"].addPromptMsg(t.getString()));
        }),
        (t.prototype.getPushRedCallback = function (e) {
          var t = e.body;
          if (null != t) {
            var i = 1 == t.getByte();
            ((v["default"].red = i),
              this.sendNt(
                n.MainEvent.ON_MAIN_ICON,
                E["default"].IS_OPEN_TYPE_DAILY_ICON,
              ));
          }
        }),
        Object.defineProperty(t.prototype, "isRefresh", {
          get: function () {
            return this._isRefresh;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.doGetReward = function (e) {
          if (null != this.vitality) {
            var t = _["default"].myPlayer;
            if (null != t) {
              c["default"].Service.onProto(
                s["default"].CG_TASK_VITALITY_GET_REWARD,
                I["default"].alloc(this, this.getRewardCallback, [e], !0),
              );
              var i = new o.Message(s["default"].CG_TASK_VITALITY_GET_REWARD);
              (i.putInt(e), this.sendProto(i));
            }
          }
        }),
        (t.prototype.getRewardCallback = function (e, t) {
          var i = t.body;
          if (null != i) {
            var o = i.getByte();
            if (0 > o) return void u["default"].alertMessage(i.getString());
            var a = i.getByte();
            if (a > 0) {
              var l = i.getByte();
              l > 0 &&
                r["default"].processAddItemMsg(
                  i,
                  s["default"].ADD_ITEM_USE_REWARD,
                  !0,
                  !0,
                ) + "\n";
              var d = _["default"].myPlayer;
              ((d.money1 = i.getInt()),
                (d.money2 = i.getInt()),
                (d.money3 = i.getInt()));
            }
            if (this.vitality) {
              v["default"].red = !1;
              for (var p = 0; p < this.vitality.vItemVitality.arr.length; p++) {
                var c = this.vitality.vItemVitality.arr[p];
                (c.rewardid == e &&
                  (c.status = v["default"].VITALITY_REWARD_ITEM_TYPE2),
                  c.status == v["default"].VITALITY_REWARD_ITEM_TYPE1 &&
                    (v["default"].red = !0));
              }
            }
            (this.sendNt(n.ActivityEvent.ACTIVITE_RED_UP),
              this.sendNt(
                n.MainEvent.ON_MAIN_ICON,
                E["default"].IS_OPEN_TYPE_DAILY_ICON,
              ),
              this.sendNt(n.ActiveEvent.ACTIVE_EVENT_GETREWARD));
          }
        }),
        (t.prototype.doSeeReward = function (e) {
          if (this.vitality) {
            var t = _["default"].myPlayer;
            if (null != t) {
              var i = new o.Message(s["default"].CG_TASK_VITALITY_SHOW_REWARD);
              (i.putInt(e), c["default"].Service.sendProto(i));
            }
          }
        }),
        (t.prototype.seeRewardCallback = function (e) {
          var t = e.body;
          if (null != t) {
            var i = t.getByte();
            if (0 > i) return void u["default"].alertMessage(t.getString());
            var o = "",
              n = t.getByte();
            if (n > 0) {
              for (var a = t.getByte(), r = 0; a > r; r++) {
                var s = new f["default"]();
                (f["default"].fromBytesAtts2(s, t),
                  (s.quantity = t.getByte()),
                  (s.durability = s.durMax),
                  (o +=
                    T["default"].makeColorString(
                      s.name,
                      E["default"].getGradeColor(s.grade),
                    ) +
                    "\n" +
                    s.getDesc(null) +
                    "\n"));
              }
              var l = t.getShort(),
                _ = t.getShort(),
                d = t.getShort();
              (l > 0 &&
                (o += y.ModelVo.getMoneyText(g.ModelConst.MONEY1) + l + "\n"),
                _ > 0 &&
                  (o += y.ModelVo.getMoneyText(g.ModelConst.MONEY2) + _ + "\n"),
                d > 0 &&
                  (o += y.ModelVo.getMoneyText(g.ModelConst.MONEY3) + d + "\n"),
                u["default"].alertMessage(o));
            }
          }
        }),
        Object.defineProperty(t.prototype, "vitalityData", {
          get: function () {
            return this.vitality;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.doEnter = function () {
          var e = new o.Message(s["default"].CG_TASK_VITALITY_FIRST_OPEN);
          c["default"].Service.sendProto(e);
        }),
        (t.prototype.enterCallback = function (e) {
          this._isRefresh = !1;
          var t = e.body;
          if (null != t) {
            var i = t.getBoolean();
            if (0 == i)
              return (
                u["default"].alertMessage(h.GameText2.STR_VITALITY_NOT_OPEN),
                void this.sendNt(n.ActiveEvent.ACTIVE_EVENT_INFO, !1)
              );
            ((this.vitality = null),
              (this.vitality = new v["default"]()),
              (this.vitality.allvalue = t.getShort()),
              (this.vitality.vipAddValue = t.getShort()));
            var o = t.getShort();
            (this.vitality.vItemVitality
              ? (this.vitality.vItemVitality.length = 0)
              : (this.vitality.vItemVitality = new S["default"]()),
              (v["default"].red = !1));
            for (var a = 0; o > a; a++) {
              var r = new v["default"]();
              ((r.rewardid = t.getShort()),
                (r.status = t.getByte()),
                r.status == v["default"].VITALITY_REWARD_ITEM_TYPE1 &&
                  (v["default"].red = !0),
                this.vitality.vItemVitality.addElement(r));
            }
            var s = t.getShort();
            this.vitality.vConVitality
              ? (this.vitality.vConVitality.length = 0)
              : (this.vitality.vConVitality = new S["default"]());
            for (var l = 0; s > l; l++) {
              var _ = new v["default"]();
              ((_.conid = t.getByte()),
                (_.content = t.getString()),
                (_.progress = t.getInt()),
                (_.activeCount = t.getInt()),
                (_.activeValue = t.getShort()),
                (_.isPathFinding = t.getBoolean()),
                _.isPathFinding &&
                  ((_.directs = t.getByte()),
                  (_.mapId = t.getShort()),
                  (_.npcId = t.getShort()),
                  (_.npcName = t.getString())),
                (go.openPay ||
                  (_.conid != O["default"].RECHARGE_MONEY &&
                    _.conid != O["default"].JION_CITY_LUCKY &&
                    _.conid != O["default"].DAILY_LOGIN &&
                    _.conid != O["default"].GET_ONLINE_REWARD)) &&
                  this.vitality.vConVitality.addElement(_));
            }
            (this.sendNt(n.ActivityEvent.ACTIVITE_RED_UP),
              this.sendNt(
                n.MainEvent.ON_MAIN_ICON,
                E["default"].IS_OPEN_TYPE_DAILY_ICON,
              ),
              this.sendNt(n.ActiveEvent.ACTIVE_EVENT_INFO, !0));
          }
        }),
        (t.prototype.navigateMsg = function (e, t, i, o, n, a) {
          var s = _["default"].myPlayer;
          if (s) {
            if (s.isShopMode())
              return (
                u["default"].alertMessage(l.GameText.STR_SHOP_CANNOT_MOVE),
                !0
              );
            if (s.isInTeam() && 0 == s.isLeader())
              return (A.Tips.show("队员不可自主移动"), !0);
            if (
              (u["default"].showMain(),
              D["default"].clear(),
              i == v["default"].VITALITY_AUTO_RUN_NPC)
            ) {
              var p = r["default"].createAutoMoveMsg(e, t, a);
              c["default"].Service.sendProto(p);
            } else
              i == v["default"].VITALITY_AUTO_RUN_MISSION
                ? d["default"].doMissionAutoPathMsg(t)
                : i == v["default"].VITALITY_AUTO_RUN_MAP
                  ? _["default"].doJumpMap(e, o, n, a)
                  : i == v["default"].VITALITY_AUTO_RUN_MAP_NPC
                    ? v["default"].autoMapNpc(v["default"].AUTO_MAP, {
                        mapId: e,
                        px: o,
                        py: n,
                        npcId: t,
                        cost: a,
                      })
                    : i == v["default"].VITALITY_AUTO_RUN_MAP_MISSION &&
                      v["default"].autoMapNpc(
                        v["default"].AUTO_MAP,
                        { mapId: e, px: o, py: n, misId: t, cost: a },
                        !0,
                      );
            return !1;
          }
        }),
        (t.prototype.doMissionTaskInfo = function () {
          var e = new o.Message(pb.EUserProtocol.C2S_GUILD_TASK_INFO);
          this.sendProto(e);
        }),
        (t.prototype.missionTaskInfoCallBack = function (e) {
          var t = this,
            i = e.body,
            o = i.proto;
          this.isNewTaskShow = !1;
          var a = !1;
          if (
            (o.info.sort(function (e, i) {
              return (
                (t.isNewTaskShow &&
                  1 != e.status &&
                  0 != e.status &&
                  1 != i.status &&
                  0 != i.status) ||
                  (t.isNewTaskShow = !0),
                a || (1 != e.status && 1 != i.status) || (a = !0),
                e.sort - i.sort
              );
            }),
            !go.openPay)
          )
            for (var r = o.info.length - 1; r >= 0; r--) {
              var s = o.info[r];
              19 == s.id && o.info.splice(r, 1);
            }
          (C.GUtil.listStatsuSort(o.info, "status", 1, 2),
            this.isNewMissionShow(a),
            this.sendNt(n.MissionEvent.ON_MISSION_NOVICE_INFO, o),
            this.sendNt(n.MissionEvent.ON_MISSION_ICON_SHOW, o));
        }),
        (t.prototype.isNewMissionShow = function (e) {
          (void 0 === e && (e = !1),
            P["default"].getInstance.setClearKey(
              R.ActType.GUILD_TASK,
              E["default"].IS_OPEN_TYPE_MISSION_ICON,
              this.isNewTaskShow,
              e,
            ));
        }),
        (t.prototype.doMissionTaskReward = function (e, t) {
          c["default"].Service.onProto(
            pb.EUserProtocol.S2C_GUILD_TASK_REWARD,
            I["default"].alloc(
              this,
              this.missionTaskRewardCallBack,
              [e, t],
              !0,
            ),
          );
          var i = new o.Message(pb.EUserProtocol.C2S_GUILD_TASK_REWARD),
            n = i.proto;
          ((n.id = t), this.sendProto(i));
        }),
        (t.prototype.missionTaskRewardCallBack = function (e, t, i) {
          var o = i.body,
            a = o.proto;
          if (a.rs < 0)
            return void (-21 == a.rs
              ? u["default"].alertMessage(l.GameText.BAGNOT)
              : A.Tips.show("请求异常:" + a.rs));
          C.GUtil.listChangeState(e.info, "id", t, "status", 2, !0);
          var r = !1;
          this.isNewTaskShow = !1;
          for (var s = 0; s < e.info.length; s++) {
            var _ = e.info[s];
            (1 == _.status && (r = !0),
              this.isNewTaskShow ||
                (1 != _.status && 0 != _.status) ||
                (this.isNewTaskShow = !0));
          }
          (this.isNewMissionShow(r),
            this.sendNt(n.MissionEvent.ON_MISSION_NOVICE_REWARD),
            this.sendNt(n.MissionEvent.ON_MISSION_ICON_SHOW, e));
        }),
        (t.prototype.doMissionDailyInfo = function () {
          var e = new o.Message(pb.EUserProtocol.C2S_TASK_INFO);
          this.sendProto(e);
        }),
        (t.prototype.missionDailyInfoCallBack = function (e) {
          var t = e.body,
            i = t.proto;
          (N["default"].ins.setData(pb.EUserProtocol.S2C_TASK_INFO, i),
            this.setDailyGameRed(i),
            this.sendNt(n.MissionEvent.ON_MISSION_DAILY_INFO));
        }),
        (t.prototype.doMissionDailyRew = function (e) {
          var t = new o.Message(pb.EUserProtocol.C2S_TASK_ACTIVE_REWARD),
            i = t.proto;
          ((i.id = e),
            c["default"].Service.onProto(
              pb.EUserProtocol.S2C_TASK_ACTIVE_REWARD,
              I["default"].alloc(this, this.missionDailyRewCallBack, [e], !0),
            ),
            this.sendProto(t));
        }),
        (t.prototype.missionDailyRewCallBack = function (e, t) {
          var i = t.body,
            o = i.proto;
          if (!N["default"].getIsErr(o, "rs", "rsDesc")) {
            var a = N["default"].ins.getData(pb.EUserProtocol.S2C_TASK_INFO);
            a.activeInfo &&
              (C.GUtil.listChangeState(
                a.activeInfo.info,
                "id",
                e,
                "hasReward",
                !0,
              ),
              this.setDailyGameRed(a),
              this.sendNt(n.MissionEvent.ON_MISSION_DAILY_REW));
          }
        }),
        (t.prototype.setDailyGameRed = function (e) {
          for (
            var t = !1, i = e.activeInfo.activeValue, o = 0;
            o < e.activeInfo.info.length;
            o++
          ) {
            var n = e.activeInfo.info[o];
            if (i >= n.needValue && 0 == n.hasReward) {
              t = !0;
              break;
            }
          }
          P["default"].getInstance.upListData(
            R.ActType.DAILY_GAME,
            t,
            E["default"].IS_OPEN_TYPE_DAILY_ICON,
          );
        }),
        t
      );
    })(a["default"]);
  t["default"] = G;
});
