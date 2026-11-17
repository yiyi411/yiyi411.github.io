(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.MainPlayerAi = t.DAILY_MISSION_ID = void 0));
  var o = i(3),
    n = i(43),
    a = i(46),
    r = i(54),
    s = i(8),
    l = i(1),
    u = i(138),
    _ = i(18),
    d = i(44),
    p = i(5),
    c = i(64),
    h = i(92),
    f = i(231),
    T = i(74),
    E = i(26),
    y = i(2),
    g = i(114),
    v = i(27),
    S = i(10),
    I = i(11),
    m = i(13),
    A = i(4),
    C = i(28),
    P = i(25),
    R = 10;
  t.DAILY_MISSION_ID = [3060, 3061, 3062, 3063];
  var O = (function (e) {
    function i() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return ((t._tickerCnt = 0), t);
    }
    return (
      __extends(i, e),
      Object.defineProperty(i.prototype, "curMissionId", {
        set: function (e) {
          ((this._curMissionId = e),
            o["default"].sendNt(y.MissionEvent.ON_MAIN_MISSION_UPDATE));
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(i.prototype, "curMission", {
        get: function () {
          var e = this._curMissionId;
          if (e) {
            var t = p["default"].myPlayer.getMissionById(e);
            if (t) return t;
            var i = g.MissionModel.mainMission;
            if (i && i.id == e) return i;
            var o = p["default"].getNpcMissionById(e);
            return (o || (this.curMissionId = null), o);
          }
        },
        enumerable: !1,
        configurable: !0,
      }),
      (i.prototype.updateCurMission = function () {
        if (!this.curMission) {
          var e = p["default"].myPlayer.getCurMapMission();
          return e
            ? void (this.curMissionId = e.id)
            : void (
                !this.open &&
                g.MissionModel.mainMission &&
                (this.curMissionId = g.MissionModel.mainMission.id)
              );
        }
      }),
      Object.defineProperty(i.prototype, "open", {
        get: function () {
          return this._open;
        },
        set: function (e) {
          e != this._open && (e || (this._lastMisID = void 0), this.setOpen(e));
        },
        enumerable: !1,
        configurable: !0,
      }),
      (i.prototype.setOpen = function (e) {
        if (e) {
          var t = p["default"].myPlayer;
          if (!t.isCanMove()) return;
        }
        if (
          ((this._open = e),
          o["default"].sendNt(E.SceneEvent.UPDATE_BTN_AUTO_ROLE),
          e && (p["default"].gameSpeed = A["default"].GAME_SPEED_MAX),
          e &&
            !p["default"].TAG_IS_AUTO_FIGHT_FLAG &&
            C["default"].ins.getIsOpen(C.LevelOpenId.MainBattleActo, !1))
        ) {
          var i = r["default"].ins;
          i.isFight && i.battlePanel
            ? i.battlePanel.doMenuAction(l["default"].EVENT_BATTLE_ORDER_AUTO)
            : (p["default"].TAG_IS_AUTO_FIGHT_FLAG = !0);
        }
        !e &&
          this._player &&
          this._player.vo.isAutoMoving &&
          this.stopAutoMove();
      }),
      Object.defineProperty(i, "ins", {
        get: function () {
          return (this._ins || (this._ins = new i()), this._ins);
        },
        enumerable: !1,
        configurable: !0,
      }),
      (i.prototype.initPlayer = function (e) {
        this._player = e;
        var t = this.autoNpcData;
        if (t) {
          this._player.stopAutoMove();
          var o = m.GUtil.findNpc(t);
          if (o) return void (i.ins.autoNpcData = null);
        }
        var n = this._player.vo.autoMovePath;
        n && this.startAutoMove(n);
      }),
      (i.prototype.reset = function () {
        var e = this;
        ((e._player = null),
          (e._lastMisID = void 0),
          (e.stop = !1),
          (e._tickerCnt = 0));
      }),
      (i.prototype.clean = function () {
        (this.reset(),
          (this._curMissionId = null),
          (this._open = !1),
          (this.autoNpcData = null));
      }),
      (i.prototype.ticker = function () {
        var e = this;
        if (!e.stop && e._open && e._player) {
          var o = this.curMission;
          if (
            o &&
            !e._player.vo.isAutoMoving &&
            !(
              l["default"].hasUI() ||
              r["default"].ins.isFight ||
              d.GuideModel.ins.isGuide ||
              (e._tickerCnt++, e._tickerCnt < R)
            )
          ) {
            e._tickerCnt = 0;
            var n = o.id,
              a = o.getMissionStatus();
            if (!(
              (t.DAILY_MISSION_ID.includes(n) &&
                a == c.MissionConst.NOT_CAN_SUBMIT) ||
              (e.isUpgrageCityMission(n) && a == c.MissionConst.NOT_CAN_SUBMIT)
            )) {
              if (
                720 == n &&
                !d.GuideModel.ins.getHasGuide(P.GuideSpriteId.mainCity)
              )
                return void (i.ins.open = !1);
              switch (a) {
                case c.MissionConst.CAN_SUBMIT:
                  e.moveToSubmitMission(n, !1);
                  break;
                case c.MissionConst.NOT_CAN_SUBMIT:
                  var s = e.findTarget();
                  if (!s) return void e.moveToSubmitMission(n);
                  if (s instanceof T["default"])
                    return void e.moveToLocalNpc(s);
                  if ("number" == typeof s) {
                    var u = s,
                      _ = e._player.vo.getMissionById(u);
                    if (_) return void (e.curMissionId = _.id);
                    ((_ = p["default"].getNpcMissionById(u)),
                      _ && _.isCanAccept(e._player.vo)
                        ? e.moveToAcceptMission(_)
                        : e.moveToSubmitMission(u));
                  }
                  break;
                case c.MissionConst.CAN_ACCEPT:
                  e.moveToAcceptMission(o);
              }
            }
          }
        }
      }),
      (i.prototype.moveToLocalNpc = function (e) {
        if (e) {
          var t = [[e.x, e.y]];
          this.startAutoMove(t);
        }
      }),
      (i.prototype.moveToAcceptMission = function (e) {
        var t = this,
          i = e.acceptMapId,
          o = e.acceptNpcId;
        if (i) {
          if (i == p["default"].orgMapID) {
            var a = p["default"].getNpcByID(o);
            if (a) return void t.moveToLocalNpc(a);
          }
          var r = _["default"].createAutoMoveMsg(i, o);
          n["default"].Service.sendProto(r);
        }
      }),
      (i.prototype.moveToSubmitMission = function (e, t) {
        if ((void 0 === t && (t = !0), !t || this._lastMisID != e)) {
          this._lastMisID = e;
          var i = _["default"].createAutoMoveMsgByMisssion(e);
          n["default"].Service.sendProto(i);
        }
      }),
      (i.prototype.clearMissionById = function (e) {
        this.curMission &&
          ((e && this.curMission.id != e) || (this.curMissionId = null));
      }),
      (i.prototype.findTarget = function () {
        var e = this,
          t = e._player.vo,
          i = this.curMission;
        if (i && p["default"].orgMapID == i.mapId) {
          var o = i.getMissionStatus(t);
          if (o == c.MissionConst.NOT_CAN_SUBMIT) {
            var n = i.getCurCondition(t);
            if (n) {
              var a = n.getType();
              if (a == f["default"].CONDITION_MISSION_DONE)
                return n.getMissionDoneId();
              var r = t.x,
                s = t.y,
                l = i.getMissionKillMonsterIds(t);
              if (l && l.length) {
                var u = this.getMinDisMonster(r, s, i, l);
                if (u) return u;
              }
              if (a == f["default"].CONDITION_HAVE_ITEM)
                return (
                  void 0 != i.radarGx && ((r = i.radarGx), (s = i.radarGy)),
                  this.getMinDisMonster(r, s, i)
                );
            }
          }
        }
      }),
      (i.prototype.getMinDisMonster = function (e, t, i, o) {
        var n = this._player.parent;
        if (n && n.ctrl) {
          var a,
            r = n.ctrl.npcMap,
            l = s.Tool.MAX_VALUE_int;
          for (var _ in r)
            if (r.hasOwnProperty(_)) {
              var d = r[_];
              if (d.visible) {
                var p = d.vo;
                if (
                  p.npcType == T["default"].NPC_MONSTER &&
                  p.isVisible() &&
                  p.isEnable() &&
                  p.battleID &&
                  p.battleID.length &&
                  (!o || !o.length || p.isMonsterInBattle(o, i))
                ) {
                  var c = u["default"].distance(e, t, p.x, p.y);
                  l > c && ((a = p), (l = c));
                }
              }
            }
          return a;
        }
      }),
      (i.prototype.getMissData = function (e) {
        var t = i.ins.curMission;
        if (t)
          switch (e) {
            case h.MissionData.taskId:
              return t.id;
            case h.MissionData.taskStatu:
              return t.getMissionStatus();
          }
        return null;
      }),
      Object.defineProperty(i.prototype, "taskId", {
        get: function () {
          return this.getMissData(h.MissionData.taskId);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(i.prototype, "taskStatu", {
        get: function () {
          return this.getMissData(h.MissionData.taskStatu);
        },
        enumerable: !1,
        configurable: !0,
      }),
      (i.prototype.isUpgrageCityMission = function (e) {
        return e >= 3002 && 3010 >= e;
      }),
      (i.prototype.startAutoMove = function (e, t) {
        if (
          (void 0 === t && (t = !0), !r["default"].ins.isFight && e && e.length)
        ) {
          if (t && !this.open && 1 == e.length && 2 == e[0].length) {
            var i = e[0],
              o = p["default"].getNPC(i[0], i[1]);
            if (!o) {
              var n = this.findTarget();
              n &&
                n instanceof T["default"] &&
                n.npcType == T["default"].NPC_MONSTER &&
                ((i[0] = n.x), (i[1] = n.y), (n.isCurTarget = !0));
            }
          }
          var a = p["default"].myPlayer;
          a.autoMovePath = e;
          var s = this._player;
          s && s.autoMove(e, I["default"].alloc(this, this.onAutoMoveEnd));
        }
      }),
      (i.prototype.onAutoMoveEnd = function () {
        var e = p["default"].myPlayer,
          t = e.autoMoveEndPt,
          i = p["default"].getNPC(t.x, t.y);
        if (((e.isAutoMoving = !1), i))
          return void (
            i.npcType != T["default"].NPC_MONSTER && T["default"].doNpc(i)
          );
        if (!this.open) {
          var o = this.findTarget();
          o &&
            o instanceof T["default"] &&
            o.npcType == T["default"].NPC_MONSTER &&
            (console.log("任务寻路---结束---，自动找怪物NPC", o.id, o.name),
            (o.isCurTarget = !0),
            this.startAutoMove([[o.x, o.y]], !1));
        }
      }),
      (i.prototype.autoMoveAsk = function () {
        ((this._player.actMgr.updateEnabled = !1), (this.stop = !0));
        var e = I["default"].alloc(this, this.stopAutoMove),
          t = I["default"].alloc(this, this.continueAutoMove),
          i = "放弃寻路",
          o = S.GameText.AUTO_PATH_TITLE;
        (d.GuideModel.ins.nextGuide &&
          d.GuideModel.ins.nextGuide.restoreList &&
          ((i = "温馨提示"),
          (o = "是否放弃教程（该教程会在满足下次触发条件后重新开始)")),
          v["default"].confirm(o, e, i, null, null, null, t));
      }),
      (i.prototype.stopAutoMove = function () {
        (this.open && (this.open = !1),
          (this.stop = !1),
          this._player &&
            ((this._player.actMgr.updateEnabled = !0),
            this._player.stopAutoMove()));
      }),
      (i.prototype.continueAutoMove = function () {
        ((this._player.actMgr.updateEnabled = !0),
          (this.stop = !1),
          o["default"].sendNt(y.MainEvent.STOP_AUTO_MOVE));
      }),
      i
    );
  })(a.ObjBase);
  t.MainPlayerAi = O;
});
