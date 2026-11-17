(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(22),
    n = i(16),
    a = i(37),
    r = i(18),
    s = i(19),
    l = i(5),
    u = i(27),
    _ = i(4),
    d = i(10),
    p = i(1),
    c = i(64),
    h = i(31),
    f = i(42),
    T = i(74),
    E = i(26),
    y = i(957),
    g = i(11),
    v = i(85),
    S = i(15),
    I = i(69),
    m = i(125),
    A = i(81),
    C = i(101),
    P = i(28),
    R = i(33),
    O = i(3),
    N = i(2),
    M = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return ((t._lastMoveTo = new egret.Point()), t);
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
          (e.prototype.onConnectLost.call(this),
            this.resetModel(),
            l["default"].clearAllData());
        }),
        (t.prototype.initialize = function () {
          var e = this;
          ((e._model = new y["default"]()),
            e.onProto(s["default"].CG_SCENE_GO_MAP, e.processJumpMapMsg, e),
            e.onProto(
              s["default"].CG_SCENE_WORLDDATA,
              e.processWorldDataMsg,
              e,
            ),
            e.onProto(s["default"].CG_SCENE_ENTERMAP, e.processSendEnterMap, e),
            e.onProto(
              s["default"].CG_PET_CHANGE_NOTIFY,
              e.processPushPlayerPetHave,
              e,
            ),
            e.onProto(s["default"].CG_SCENE_LEAVEMAP, e.processSendLeaveMap, e),
            e.onProto(
              s["default"].CG_SCENE_GET_OTHER_PLAYER_STATE,
              e.processOtherMoveTo,
              e,
            ),
            e.onProto(s["default"].CG_TASK_NPC_STATUS, e.onGotNpcSignUpdate, e),
            e.onProto(
              s["default"].CG_SCENE_FINDPATH_MISSION,
              e.onGotAutoPath,
              e,
            ),
            e.onProto(
              s["default"].CG_SCENE_PLAYER_ICON,
              e.onOthersUpdateIcon,
              e,
            ),
            e.onProto(
              s["default"].CG_SCENE_PLAYER_EVENT,
              e.processPlayerEventMsg,
            ),
            e.onProto(
              s["default"].CG_SCENE_FINDPATH_AGAIN,
              e.onEnterCityAndFindPath,
              e,
            ),
            e.onProto(
              s["default"].CG_SCENE_SETREBORNMAP,
              e.processSetRebornMapMsg,
              e,
            ),
            e.onProto(s["default"].CG_SCENE_UPDATE, e.onMapUpdate, e),
            e.onProto(s["default"].CG_ACTOR_STATUS_CHANGE, e.onActorMode, e),
            e.onProto(
              s["default"].CG_SOLDIER_STATE_NOTIFY,
              e.onOthersMercUpdate,
              e,
            ),
            e.onProto(s["default"].CG_TITLE_USE_CHANGE, e.onUpdateTitle, e),
            e.onProto(
              s["default"].CG_TASK_GETMISSIONDATA,
              e.onGotNpcMission,
              e,
            ));
        }),
        (t.prototype.onGotNpcMission = function (e) {
          var t = e.body;
          (T["default"].formatMissionData(t),
            A["default"].IS_ATUO_MISSION_PROXY_NUM() &&
              (A["default"].autoMapNpc(A["default"].AUTO_MISSIONID),
              I.MainPlayerAi.ins.updateCurMission()));
        }),
        (t.prototype.onOthersMercUpdate = function (e) {
          var t = e.body;
          r["default"].processMercenaryNotifyMsg(t);
        }),
        (t.prototype.onActorMode = function (e) {
          var t = e.body;
          r["default"].processModeChangeMessage(t);
        }),
        (t.prototype.onMapUpdate = function (e) {
          var t = e.body;
          r["default"].processMapUpdateMsg(t);
        }),
        (t.prototype.processSetRebornMapMsg = function (e) {
          var t = e.body,
            i = t.getByte();
          return 0 > i
            ? void p["default"].errorMessage(t.getString())
            : void S.Tips.show("设置重生点成功");
        }),
        (t.prototype.onEnterCityAndFindPath = function (e) {
          var t = e.body;
          l["default"].doAutoMove(t);
        }),
        (t.prototype.processPlayerEventMsg = function (e) {
          var t,
            i = e.body,
            o = i.getInt(),
            a = i.getByte(),
            r = i.getInt(),
            s = i.getString(),
            u = i.getString(),
            c = i.getString(),
            h = n["default"].timer.serverTime + i.getInt(),
            f = d.GameText.getText(d.GameText.TI_WARM_SHOW),
            T = (i.getBoolean(), i.getInt());
          T > 0 && (t = { time: T });
          var E = l["default"].getModel(r);
          switch (a) {
            case _["default"].PLAYER_EVENT_TEAM_INVITE:
              if (
                ((f = d.GameText.getText(d.GameText.TI_INVITE_TEAM)), null == E)
              )
                return;
              break;
            case _["default"].PLAYER_EVENT_TEAM_APPLY:
              f = d.GameText.getText(d.GameText.TI_JOIN_TEAM);
              break;
            case _["default"].PLAYER_EVENT_PKASK:
              if (((f = d.GameText.getText(d.GameText.TI_PK)), null == E))
                return;
              if (!_["default"].getShowPK()) return;
              break;
            case _["default"].PLAYER_EVENT_JOINCOUNTRYASK:
              f = d.GameText.getText(d.GameText.TI_INVITE_COUNTRY);
              break;
            case _["default"].PLAYER_EVENT_ESCORT:
              if (l["default"].autoFollow) return void this.onSure(o, a);
              f = d.GameText.STR_ESCORT_MISSION;
              break;
            case _["default"].PLAYER_EVENT_MASTER:
              f = d.GameText.getText(d.GameText.TI_APPRENTICE);
              break;
            case _["default"].PLAYER_EVENT_JOINCOUNTRYHANDLE:
              f = d.GameText.STR_JOINCOUNTRYHANDLE;
              break;
            case _["default"].PLAYER_EVENT_MERRY:
              f = d.GameText.STR_PARTNER;
              break;
            case _["default"].PLAYER_EVENT_CROSS_TEAM_INVITE:
              f = d.GameText.getText(d.GameText.TI_INVITE_TEAM);
              var y = 10;
              ((t = { time: y }), (s += "未选择" + y + "秒后自动加入"));
              break;
            case _["default"].PLAYER_EVENT_CROSS_TEAM_JOIN:
              f = d.GameText.getText(d.GameText.TI_JOIN_TEAM);
          }
          if (a != _["default"].PLAYER_EVENT_ESCORT) {
            var v = m.ObjectData.fromPlayerEventBytes(o, r, a, h, f, s, u, c);
            l["default"].addPlayerEvent(v);
          }
          (a != _["default"].PLAYER_EVENT_JOINCOUNTRYHANDLE,
            p["default"].alertMessage(
              s,
              f,
              g["default"].alloc(this, this.onSure, [o, a], !0),
              d.GameText.GAME_TEXT[d.GameText.TI_OK],
              g["default"].alloc(this, this.onCancel, [o, a], !0),
              d.GameText.GAME_TEXT[d.GameText.TI_MISSION_REFUSE],
              null,
              t,
            ));
        }),
        (t.prototype.onCancel = function (e, t) {
          l["default"].removePlayerEvent(e);
          var i = r["default"].createPlayerEvent(
            e,
            s["default"].PLAYER_EVENT_CHOOSE_NO,
          );
          r["default"].sendRequest(i);
        }),
        (t.prototype.onSure = function (e, t) {
          if (
            (t != _["default"].PLAYER_EVENT_TEAM_APPLY &&
              !_["default"].PLAYER_EVENT_TEAM_INVITE) ||
            l["default"].isTeam()
          ) {
            (t == _["default"].PLAYER_EVENT_CD_CONFIRM &&
              (console.log("跨服副本自动退出战斗"),
              O["default"].sendNt(N.BattleEvent.BATTLE_EXIT)),
              l["default"].removePlayerEvent(e));
            var i = r["default"].createPlayerEvent(
              e,
              s["default"].PLAYER_EVENT_CHOOSE_YES,
            );
            r["default"].sendRequest(i);
          }
        }),
        (t.prototype.onOthersPetUpdate = function (e) {
          var t = e.body,
            i = t.getInt(),
            o = t.getShort(),
            n = this.getPlayerById(i);
          if (null != n) {
            var a = f["default"].fromBytesOtherPlayer(t, n);
            (null != a && a.refreshWorldSprite(),
              o == R["default"].PET_POS ? n.setPet(a, !0) : n.setPet(null, !0));
          }
        }),
        (t.prototype.onOthersUpdateIcon = function (e) {
          var t = e.body,
            i = t.getInt(),
            o = this.getPlayerById(i);
          if (null != o) {
            var n = o.isTwoPeopleHouse();
            (o.setIcon1(t.getLong()),
              o.setIcon2(t.getLong()),
              o.setIcon3(t.getLong()),
              n != o.isTwoPeopleHouse() && o.clearMemberHideStatus(),
              this.sendNt(E.SceneEvent.ON_PLAYER_ICON_UPDATE, i));
          }
        }),
        (t.prototype.onUpdateTitle = function (e) {
          var t = e.body,
            i = t.getInt(),
            o = this.getPlayerById(i);
          if (null != o) {
            var n = (t.getInt(), t.getString());
            o.setTitle(n);
          }
        }),
        (t.prototype.onGotAutoPath = function (e) {
          var t = e.body,
            i = t.getByte();
          if (0 > i) {
            var o = t.getString();
            return (
              i != c["default"].AUTO_MOVE_ERROR26 &&
                i != c["default"].AUTO_MOVE_ERROR27 &&
                p["default"].alertMessage(o),
              I.MainPlayerAi.ins.open &&
                (S.Tips.show("寻路失败，自动挂机已关闭"),
                (I.MainPlayerAi.ins.open = !1)),
              void A["default"].autoMapNpc(A["default"].AUTO_NOT)
            );
          }
          (l["default"].myPlayer.fromBytesByAutoMove(t),
            A["default"].autoMapNpc(A["default"].AUTO_NOT),
            p["default"].showMain());
        }),
        (t.prototype.onGotNpcSignUpdate = function (e) {
          var t = e.body;
          r["default"].processMissionNPCStatus(t);
        }),
        (t.prototype.update = function () {
          this.createOtherMoveMessage();
        }),
        (t.prototype.createMoveMessage = function (e, t) {
          if (this._lastMoveTo.x != e || this._lastMoveTo.y != t) {
            var i = new o.Message(s["default"].CG_SCENE_PLAYER_MOVING);
            (i.putByte(e),
              i.putByte(t),
              this.sendProto(i),
              this._lastMoveTo.setTo(e, t));
          }
        }),
        (t.prototype.createJumpMapMessage = function (e, t, i, n, a) {
          if ((void 0 === a && (a = !1), !this._lastJumpMapId)) {
            this._lastJumpMapId = e;
            var r = new o.Message(s["default"].CG_SCENE_GO_MAP);
            (r.putShort(e),
              r.putByte(t),
              r.putByte(i),
              r.putInt(n),
              r.putBoolean(a),
              this.sendProto(r));
          }
        }),
        (t.prototype.processJumpMapMsg = function (e) {
          this._lastJumpMapId = null;
          var t = e.body,
            i = t.getByte();
          if (l["default"].jumpMapData) {
            var o = l["default"].jumpMapData;
            switch (o.type) {
              case C.JumpMapType.openMainInfo:
                P["default"].ins.openMainInfoById(o.data);
            }
            l["default"].jumpMapData = null;
          }
          if (0 != i) {
            var n = t.getString();
            return (
              -36 == i
                ? p["default"].alertMessage(
                    d.GameText.TELEPORT_STONE_GOTO_SHOW,
                    d.GameText.getText(d.GameText.TI_WARM_SHOW),
                    g["default"].alloc(
                      this,
                      function () {
                        (p["default"].closeAllUI(),
                          l["default"].doBrowseShop(_["default"].SHOP_TYPE_50));
                      },
                      [],
                      !0,
                    ),
                  )
                : u["default"].confirm(n),
              v["default"].addChatSystemMsg(n),
              I.MainPlayerAi.ins.open &&
                (S.Tips.show("跳图失败，自动挂机已关闭"),
                (I.MainPlayerAi.ins.open = !1)),
              I.MainPlayerAi.ins.stopAutoMove(),
              void A["default"].autoMapNpc(A["default"].AUTO_NOT)
            );
          }
          (r["default"].processDataBlockFlagMsg(t),
            A["default"].autoMapNpc(A["default"].AUTO_NPC));
        }),
        (t.prototype.processWorldDataMsg = function (e) {
          var t = e.body,
            i = t.getByte();
          0 > i || (0 == i && r["default"].processDataBlockFlagMsg(t));
        }),
        (t.prototype.onGotNpcList = function (e) {
          (this._model.clearNpcList(),
            (this._model.npcList = e.sort(t.sortNpc)),
            l["default"].hideMonsterNearMyPlayer(),
            this.sendNt(E.SceneEvent.ON_NPC_INIT));
        }),
        (t.sortNpc = function (e, t) {
          return e.y == t.y ? t.id - e.id : t.y - e.y;
        }),
        (t.prototype.onGotOthers = function (e) {
          if ((this._model.clearPlayerMap(), e && e.length))
            for (var t = 0, i = e; t < i.length; t++) {
              var o = i[t];
              this.addPlayer(o);
            }
        }),
        Object.defineProperty(t.prototype, "others", {
          get: function () {
            var e,
              t = [];
            for (var i in this._model.playerMap)
              ((e = this._model.playerMap[i]), t.push(e));
            return t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.addPlayer = function (e) {
          ((this._model.playerMap[e.id] = e),
            this.sendNt(E.SceneEvent.ON_OBJ_ADD, e));
          var t = l["default"].myPlayer.isMember() ? 1e3 : 3e3;
          n["default"].addUpdateItem(this, t);
        }),
        (t.prototype.removePlayer = function (e) {
          var t = this._model.playerMap[e];
          t &&
            ((this._model.playerMap[e] = null),
            delete this._model.playerMap[e],
            this.sendNt(E.SceneEvent.ON_OBJ_DEL, t),
            this._model.numPlayer || n["default"].removeUpdateItem(this));
        }),
        (t.prototype.getPlayerById = function (e) {
          return this._model.playerMap[e] || this.getLegionById(e);
        }),
        (t.prototype.getLegionById = function (e) {
          return this._model.legionMap[e];
        }),
        (t.prototype.addLegion = function (e) {
          this._model.legionMap[e.id] = e;
        }),
        (t.prototype.removeLegion = function (e) {
          var t = this._model.legionMap[e];
          t && delete this._model.legionMap[e];
        }),
        (t.prototype.processSendEnterMap = function (e) {
          var t = e.body,
            i = r["default"].processDataPlayerListBase(
              t,
              new h.ModelVo(h.MODEL_TYPE.TYPE_PLAYER),
            );
          this.addPlayer(i);
        }),
        (t.prototype.processPushPlayerPetHave = function (e) {
          var t = e.body,
            i = t.getInt(),
            o = t.getBoolean(),
            n = this.getPlayerById(i);
          null != n && (n.petHave = o);
        }),
        (t.prototype.processSendLeaveMap = function (e) {
          var t = e.body,
            i = t.getInt();
          this.removePlayer(i);
        }),
        (t.prototype.createOtherMoveMessage = function () {
          var e = new o.Message(s["default"].CG_SCENE_GET_OTHER_PLAYER_STATE);
          this.sendProto(e);
        }),
        (t.prototype.processOtherMoveTo = function (e) {
          var t = e.body;
          this.sendNt(E.SceneEvent.ON_OBJ_MOVE, t);
        }),
        (t.prototype.resetModel = function () {
          ((this.mapId = null),
            (this.isMapReady = !1),
            this._model.clearNpcList(),
            this._model.clearPlayerMap(),
            this._model.clearLegionMap(),
            n["default"].removeUpdateItem(this));
        }),
        t
      );
    })(a["default"]);
  t["default"] = M;
});
