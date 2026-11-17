(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(17),
    a = i(16),
    r = i(11),
    s = i(2),
    l = i(0),
    u = i(52),
    _ = i(6),
    d = i(5),
    p = i(27),
    c = i(4),
    h = i(10),
    f = i(12),
    T = i(8),
    E = i(1),
    y = i(138),
    g = i(171),
    v = i(305),
    S = i(307),
    I = i(941),
    m = i(149),
    A = i(942),
    C = i(31),
    P = i(74),
    R = i(944),
    O = i(105),
    N = i(72),
    M = i(946),
    L = i(26),
    w = i(310),
    b = i(18),
    x = i(54),
    D = i(69),
    B = i(44),
    G = i(81),
    U = i(309),
    k = (function (e) {
      function t() {
        var t = e.call(this, null) || this;
        return (
          (t._sendCnt = 10),
          (t._checkCnt = 2),
          (t._npcLogicTickCnt = 0),
          (t._TickMax = 20),
          (t.isReqFail = !1),
          t.onInit(),
          t.addListeners(),
          t
        );
      }
      return (
        __extends(t, e),
        (t.prototype.onInit = function () {
          ((this._scene = n["default"].alloc(M["default"])),
            (this._proxy = o["default"].getProxy(
              l.ModName.Scene,
              l.ProxyType.Scene,
            )));
        }),
        (t.prototype.addListeners = function () {
          e.prototype.addListeners.call(this);
          var t = this.onEgret.bind(this);
          (this.onNt(u.LauncherEvent.ON_RESIZE, this.onStageResize, this),
            this.onNt(L.SceneEvent.CLEAN_SCENE, this.onCleanScene, this),
            this.onNt(L.SceneEvent.SCENE_CFG_LOADED, this.onCfgLoaded, this),
            this.onNt(L.SceneEvent.SCENE_BLUR_LOADED, this.onBlurLoaded, this),
            this.onNt(
              L.SceneEvent.PLAY_CHANGE_SCENE_EFFECT,
              this.playCSE,
              this,
            ),
            this.onNt(
              L.SceneEvent.STOP_CHANGE_SCENE_EFFECT,
              this.stopCSE,
              this,
            ),
            this.onNt(
              L.SceneEvent.ON_PLAYER_NAME_UPDATE,
              this.onPlayerNameUpdate,
              this,
            ),
            this.onNt(L.SceneEvent.ON_OBJ_ADD, this.onPlayerAdd, this),
            this.onNt(L.SceneEvent.ON_OBJ_DEL, this.onPlayerDel, this),
            this.onNt(L.SceneEvent.ON_OBJ_MOVE, this.onObjMove, this),
            this.onNt(
              s.CampWarEvent.CAMPWAR_TOGGLE_HONOR,
              this.updateHonorNpc,
              this,
            ),
            this.onNt(L.SceneEvent.ON_JUMP_MAP, this.onJumpMap, this),
            this.onNt(L.SceneEvent.ON_NPC_UPDATE, this.onNpcUpdate, this),
            this.onNt(
              L.SceneEvent.ON_NPC_SIGN_UPDATE,
              this.onNpcSignUpdate,
              this,
            ),
            this.onNt(
              L.SceneEvent.ON_SHOW_ARROW_GUIDE,
              this.showArrowGuide,
              this,
            ),
            this.onNt(
              L.SceneEvent.ON_CLEAR_ARROW_GUIDE,
              this.clearArrowGuide,
              this,
            ),
            this.onNt(
              s.MainEvent.ON_PLAYER_ATTR_UPDATE,
              this.onMyPlayerAttrUpdate,
              this,
            ),
            this.onNt(
              L.SceneEvent.ON_PLAYER_ICON_UPDATE,
              this.onPlayerIcon,
              this,
            ),
            this.onNt(L.SceneEvent.ON_PET_ADD, this.onPetAdd, this),
            this.onNt(L.SceneEvent.ON_PET_DEL, this.onPetDel, this),
            this.onNt(L.SceneEvent.ON_MER_ADD, this.onMerAdd, this),
            this.onNt(L.SceneEvent.ON_MER_DEL, this.onMerDel, this),
            this.onNt(L.SceneEvent.ON_LEGION_ADD, this.onLegionAdd, this),
            this.onNt(L.SceneEvent.ON_LEGION_DEL, this.onLegionDel, this),
            this.onNt(L.SceneEvent.UPDATE_MODLE, this.onUpdateModel, this),
            this.onNt(s.BattleEvent.ON_BATTLE_START, this.onStartBattle, this),
            this.onNt(s.BattleEvent.ON_BATTLE_END, this.onEndBattle, this),
            this.onNt(
              L.SceneEvent.ON_PLAYER_LAYER_ADD_SLICE,
              this.onAddSlice,
              this,
            ),
            this.onNt(L.SceneEvent.ON_MOVE_TO_NPC, this.onMoveToNpc, this),
            this.onNt(L.SceneEvent.ON_NPC_INIT, this.addNpcList, this),
            this.onNt(L.SceneEvent.ON_MODE_UPDATE, this.onShopModeUpdate, this),
            this.onNt(s.MainEvent.ON_LEVEL_UP, this.onLevelUp, this),
            this.onNt(
              s.SystemEvent.SYSTEM_OTHERSHOW_UPDATE,
              this.checkOtherShow,
              this,
            ),
            this.onNt(
              L.SceneEvent.ON_MAIN_PLAYER_POS_CHANGED,
              this.onMainPlayerMove,
              this,
            ),
            t(this._scene.map, egret.TouchEvent.TOUCH_TAP, this.onTapMap));
        }),
        (t.prototype.onShopModeUpdate = function (e) {
          if (this._proxy.isMapReady) {
            var t = e.body,
              i = this._scene.ctrl.getPlayerById(t);
            i && i.onModelUpdate();
          }
        }),
        (t.prototype.onLevelUp = function () {
          this._mainPlayer && this._mainPlayer.onLevelUpdate();
          var e = d["default"].myPlayer;
          e &&
            ((go.roleLv = e.level),
            gs.report && gs.report(u.REPORT_TYPE.RoleLevelUp));
        }),
        (t.prototype.onAddSlice = function () {
          this._needToUpdateDepth = !0;
        }),
        (t.prototype.npcUpdateDepth = function () {
          var e = this._proxy.model.npcList;
          if (e && e.length)
            for (var t = 0, i = e; t < i.length; t++) {
              var o = i[t],
                n = this._scene.ctrl.getNpcById(o.id);
              n && n.updateDepth();
            }
        }),
        (t.prototype.onStartBattle = function () {
          this._proxy.isMapReady &&
            (this._mainPlayer.vo.isAutoMoving
              ? o["default"].hideView(
                  l.ModName.Scene,
                  l.SceneViewType.AutoMoveTips,
                )
              : this._mainPlayer.stopMove(),
            this._scene.ctrl.hideAllObj(),
            this._scene.map.hideTapSpr(),
            this.clearArrowGuide());
        }),
        (t.prototype.onEndBattle = function () {
          this._proxy.isMapReady &&
            (this._scene.ctrl.revertAllObj(),
            this._mainPlayer.vo.isAutoMoving &&
              o["default"].showView(
                l.ModName.Scene,
                l.SceneViewType.AutoMoveTips,
              ));
        }),
        (t.prototype.onPetAdd = function (e) {
          var t = e.body;
          if (!t || !t.owner)
            return void console.error("onPetAdd owner not exist!");
          var i = this._scene.ctrl.getPlayerById(t.owner.id);
          if (!i) return void console.error("onPetAdd owner dsp not exist!");
          var o = this._scene.ctrl.getPetByOwnerId(t.owner.id);
          if (o) return ((o.vo = t), void o.onAdded());
          var a = n["default"].alloc(S["default"]);
          ((a.vo = t), this._scene.ctrl.addObj(a));
        }),
        (t.prototype.onMerDel = function (e) {
          if (this._proxy.isMapReady) {
            var t = e.body,
              i = this._scene.ctrl.getMerById(t.sceneId);
            i && this._scene.ctrl.removeObj(i);
          }
        }),
        (t.prototype.onMerAdd = function (e) {
          if (this._proxy.isMapReady) {
            var t = e.body;
            if (!t || !t.ownerid)
              return void console.error("onMerAdd owner not exist!");
            var i = this._scene.ctrl.getPlayerById(t.ownerid);
            if (i) {
              var o = this._scene.ctrl.getMerById(t.sceneId);
              if (!o) {
                var a = n["default"].alloc(w["default"]);
                ((a.vo = t), this._scene.ctrl.addObj(a));
              }
            }
          }
        }),
        (t.prototype.onPetDel = function (e) {
          if (this._proxy.isMapReady) {
            var t = e.body,
              i = this._scene.ctrl.getPetByOwnerId(t);
            i && this._scene.ctrl.removeObj(i);
          }
        }),
        (t.prototype.onLegionAdd = function (e) {
          if (this._proxy.isMapReady) {
            var t = e.body;
            if (!t || !t.ownerid)
              return void console.error("onLegionAdd owner not exist!");
            var i = this._scene.ctrl.getPlayerById(t.ownerid);
            if (i) {
              var o = this._scene.ctrl.getLegionById(t.id);
              if ((this._proxy.addLegion(t), o))
                return ((o.vo = t), void o.onAdded());
              var a = n["default"].alloc(U["default"]);
              ((a.vo = t), this._scene.ctrl.addObj(a));
            }
          }
        }),
        (t.prototype.onLegionDel = function (e) {
          if (this._proxy.isMapReady) {
            var t = e.body,
              i = this._scene.ctrl.getLegionById(t.id);
            i &&
              (this._scene.ctrl.removeObj(i), this._proxy.removeLegion(t.id));
          }
        }),
        (t.prototype.onUpdateModel = function (e) {
          if (this._proxy.isMapReady) {
            var t = e.body;
            this._scene.ctrl.updateScenceMap(t);
          }
        }),
        (t.prototype.showArrowGuide = function (e) {
          this._scene.map.showArrow(e.body);
        }),
        (t.prototype.clearArrowGuide = function () {
          this._scene.map.clearArrow();
        }),
        (t.prototype.onMoveToNpc = function (e) {
          var t = e.body,
            i = d["default"].getNpcByID(t, !0);
          i &&
            this._mainPlayer.moveTo(
              i.x,
              i.y,
              r["default"].alloc(this, this.npcHandler, [i]),
              1,
            );
        }),
        (t.prototype.onNpcUpdate = function () {
          for (
            var e = this._proxy.model.npcList, t = 0, i = e;
            t < i.length;
            t++
          ) {
            var o = i[t],
              n = this._scene.ctrl.getNpcById(o.id);
            n && n.updateVo();
          }
        }),
        (t.prototype.onNpcSignUpdate = function (e) {
          if (this._proxy.isMapReady)
            for (var t = e.body, i = 0, o = t; i < o.length; i++) {
              var n = o[i],
                a = this._scene.ctrl.getNpcById(n);
              a && (a.updateMissionIcon(), a.getNpcMissionData());
            }
        }),
        (t.prototype.onPlayerIcon = function (e) {
          if (this._proxy.isMapReady) {
            var t = this._scene.ctrl.getPlayerById(e.body);
            t && t.updateSprite();
          }
        }),
        (t.prototype.onMyPlayerAttrUpdate = function (e) {
          var t = e.body;
          this._mainPlayer &&
            (t == f.ModelConst.ICON && this._mainPlayer.updateSprite(),
            t == f.ModelConst.VIP_LEVEL_2 && this._mainPlayer.updateVipSpr());
        }),
        (t.prototype.onPlayerNameUpdate = function (e) {
          if (this._proxy.isMapReady) {
            var t = e.body,
              i = this._scene.ctrl.getPlayerById(t);
            i && i.updateName();
          }
        }),
        (t.prototype.addPlayerList = function () {
          var e = this._proxy.model.playerMap;
          for (var t in e) e.hasOwnProperty(t) && e[t] && this.addPlayer(e[t]);
        }),
        (t.prototype.isAddPlayerMax = function () {
          var e = this._scene.ctrl.getPlayerCnt(),
            t = c["default"].getMaxPlayerShow();
          return e > t;
        }),
        (t.prototype.addPlayer = function (e, t) {
          void 0 === t && (t = !0);
          var i = d["default"].myPlayer;
          if (
            i &&
            !this.isAddPlayerMax() &&
            (!t || c["default"].isShowOthers(i, e))
          ) {
            var o = this._scene.ctrl.getPlayerById(e.id);
            if (o) {
              if (e.hashCode == o.vo.hashCode) return;
              this.removePlayer(o.vo);
            }
            ((o = n["default"].alloc(m["default"])),
              (o.vo = e),
              this._scene.ctrl.addObj(o));
          }
        }),
        (t.prototype.removePlayer = function (e) {
          var t = e.id,
            i = d["default"].myPlayer;
          i.follower == t && (i.follower = null);
          var o = this._scene.ctrl.getPlayerById(t);
          return o ? (this._scene.ctrl.removeObj(o), !0) : !1;
        }),
        (t.prototype.onPlayerAdd = function (e) {
          if (this._proxy.isMapReady) {
            var t = e.body;
            this.addPlayer(t);
          }
        }),
        (t.prototype.onPlayerDel = function (e) {
          if (this._proxy.isMapReady) {
            var t = e.body;
            (this.removePlayer(t), t.clearData());
          }
        }),
        (t.prototype.onObjMove = function (e) {
          if (this._proxy.isMapReady)
            for (
              var t = e.body,
                i = t.getShort(),
                o = !1,
                n = d["default"].getPlayerID(),
                a = 0,
                r = 0;
              i > r;
              r++
            ) {
              var s = t.getInt(),
                l = t.getByte(),
                u = t.getByte(),
                _ = t.getByte();
              if (s != n) {
                var p = this._scene.ctrl.getPlayerById(s);
                if (p) {
                  var c = p.vo;
                  (c.setMode(_),
                    1 != c.isMember() &&
                      (a >= 10
                        ? p.setTilePos(l, u)
                        : o
                          ? p.setTilePos(l, u)
                          : 0 !=
                                C.ModelVo.isSameTeam(
                                  d["default"].myPlayer,
                                  c,
                                ) || this._scene.containsTile(c.x, c.y)
                            ? (a++, p.moveTo(l, u))
                            : p.setTilePos(l, u)));
                }
              }
            }
        }),
        (t.prototype.checkOtherShow = function () {
          var e = this._proxy.model.playerMap;
          if (e) {
            var t = d["default"].myPlayer;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = Number(i);
                if (o != t.follower) {
                  var n = e[o],
                    a = c["default"].isShowOthers(t, n);
                  a ? this.addPlayer(n, !1) : this.removePlayer(n);
                }
              }
          }
        }),
        (t.prototype.onMainPlayerMove = function () {
          if (this._mainPlayer) {
            if (
              (this._checkCnt < 0 &&
                ((this._checkCnt = 2), this.checkOtherShow()),
              this._checkCnt--,
              this._sendCnt < 0)
            ) {
              this._sendCnt = 10;
              var e = this._mainPlayer.vo;
              this._proxy.createMoveMessage(e.x, e.y);
            }
            this._sendCnt--;
          }
        }),
        (t.prototype.update = function (e) {
          var t = this;
          (t._npcLogicTickCnt++,
            t._npcLogicTickCnt > t._TickMax &&
              ((t._npcLogicTickCnt = 0),
              t.npcsLogic(),
              t._needToUpdateDepth &&
                (t.npcUpdateDepth(), (t._needToUpdateDepth = !1))),
            D.MainPlayerAi.ins.ticker(),
            b["default"].worldReflashType != b["default"].WORLD_REFLASH_NONE &&
              (b["default"].createWorldDataReflashMsg(
                b["default"].worldReflashType == b["default"].WORLD_REFLASH_ALL,
              ),
              (b["default"].worldReflashType =
                b["default"].WORLD_REFLASH_NONE)));
        }),
        (t.prototype.npcsLogic = function () {
          return __awaiter(this, void 0, Promise, function () {
            var e, t, i, o, n, a, r, s, l, u, _, p, c, h, f, c;
            return __generator(this, function (g) {
              switch (g.label) {
                case 0:
                  if (((e = this._scene.ctrl.npcMap), null == e))
                    return [2, !1];
                  if (!this._mainPlayer) return [2];
                  if (
                    ((t = this._mainPlayer),
                    (i = this._mainPlayer.vo),
                    x["default"].ins.isFight)
                  )
                    return [2, !1];
                  if (i.isAutoMoving) return [2, !1];
                  if (this.isReqFail) return [2, !1];
                  if (E["default"].hasUI()) return [2, !1];
                  if (d["default"].isEscortStatus()) return [2, !1];
                  if (B.GuideModel.ins.isGuide) return [2, !1];
                  if (d["default"].isLevelAnim) return [2, !1];
                  if ((o = i.isShopMode())) return [2, !1];
                  ((n = i.isMember()), (a = 0), (r = []));
                  for (s in e) r.push(s);
                  ((l = 0), (g.label = 1));
                case 1:
                  return l < r.length
                    ? ((u = r[l]),
                      (_ = e[u]),
                      (p = _.vo),
                      null == p
                        ? [3, 5]
                        : _.dsp.visible
                          ? 0 == p.isVisible()
                            ? [3, 5]
                            : 0 == p.isEnable()
                              ? [3, 5]
                              : p.npcType != P["default"].NPC_MONSTER
                                ? [3, 4]
                                : n
                                  ? [3, 5]
                                  : ((a = p.battleID[0]),
                                    a > 0
                                      ? ((c = y["default"].distance(
                                          i.x,
                                          i.y,
                                          p.x,
                                          p.y,
                                        )),
                                        1.5 >= c
                                          ? ((h =
                                              i.isLeader() &&
                                              i.isHasPlayerMember()),
                                            [
                                              4,
                                              d["default"].toBattle(a, h, p.id),
                                            ])
                                          : [3, 3])
                                      : [3, 3])
                          : [3, 5])
                    : [3, 6];
                case 2:
                  if (
                    ((f = g.sent()),
                    -1 == f && (this.isReqFail = !0),
                    (this._TickMax = 20),
                    f)
                  )
                    return (_.hide(!0), [2, !0]);
                  ((this._TickMax = 200),
                    (this._npcLogicTickCnt = 0),
                    (g.label = 3));
                case 3:
                  return [3, 5];
                case 4:
                  (T.Tool.isNullText(p.welcome) ||
                    ((c = Math.abs(t.x - _.x) + Math.abs(t.y - _.y)),
                    c <= P["default"].SHOW_WELCOME_RANGE
                      ? _.showWelcome()
                      : _.hideWelcome()),
                    (g.label = 5));
                case 5:
                  return (l++, [3, 1]);
                case 6:
                  return [2, !1];
              }
            });
          });
        }),
        (t.prototype.onTapMap = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, o, a, s, l, u, _, d, p, c, h, f, E;
            return __generator(this, function (v) {
              if (!this._scene.isInitMap || !this._mainPlayer) return [2];
              if (this._mainPlayer.vo.isAutoMoving)
                return (D.MainPlayerAi.ins.autoMoveAsk(), [2]);
              if (!this._mainPlayer.vo.isCanMove()) return [2];
              if (B.GuideModel.ins.isGuideForbidMove) return [2];
              if (
                ((t = N["default"].ins),
                (i = t.getTilePt(e.localX, e.localY)),
                (o = i.x),
                (a = i.y),
                this._scene.map.playTapSpr(e.localX, e.localY),
                n["default"].release(i),
                (s = this.getTapNpc(e.localX, e.localY)),
                !s && !t.isPointLegal(o, a))
              )
                return [2];
              if (s) {
                if (this._tapNpcId == s.vo.id) return [2];
              } else this._tapNpcId = null;
              if (
                ((l = this._mainPlayer.actMgr.curAct),
                l instanceof g["default"] &&
                  l.endTile.x == o &&
                  l.endTile.y == a)
              )
                return [2];
              if (((u = 0), s)) {
                if (
                  (14 == this._proxy.mapId || 824 == this._proxy.mapId) &&
                  ((_ = 14 == this._proxy.mapId ? 18 : 20), _ == s.vo.id)
                )
                  return [2];
                if (
                  ((this._tapNpcId = s.vo.id),
                  (o = s.vo.x),
                  (a = s.vo.y),
                  (d = this._mainPlayer.vo),
                  (p = y["default"].distance(d.x, d.y, o, a) <= 1.5))
                )
                  return (
                    (this._mainPlayer.dir = O["default"].directionByTan(
                      d.x,
                      d.y,
                      o,
                      a,
                    )),
                    this.npcHandler(s.vo),
                    [2]
                  );
                for (
                  u = 1, c = 2, h = n["default"].alloc(egret.Point).setTo(o, a);
                  c > 0 && t.isBlock(o, a);
                )
                  ((f = O["default"].directionByTan(o, a, d.x, d.y)),
                    (h = T.Tool.getFaceXY(o, a, f, h)),
                    (o = h.x),
                    (a = h.y),
                    c--,
                    (u = 0));
                if ((n["default"].release(h), t.isBlock(o, a))) return [2];
              }
              return (
                (E = s
                  ? r["default"].alloc(this, this.npcHandler, [s.vo])
                  : null),
                this._mainPlayer.moveTo(o, a, E, u),
                (this.isReqFail = !1),
                [2]
              );
            });
          });
        }),
        (t.prototype.npcHandler = function (e) {
          (P["default"].doNpc(e), (this._tapNpcId = null));
        }),
        (t.prototype.onJumpMap = function (e) {
          var t = e.body,
            i = t.mapId,
            o = t.gx,
            n = t.gy,
            a = t.cost;
          this.doJumpMap(i, o, n, a);
        }),
        (t.prototype.doJumpMap = function (e, t, i, o) {
          var n = this,
            a = n._mainPlayer;
          if (a) {
            var r = a.vo;
            if (1 == r.isShopMode())
              return void p["default"].confirm(h.GameText.STR_SHOP_CANNOT_MOVE);
            if (n._proxy.mapId == e) {
              a.setTilePos(t, i);
              var s = n._scene.ctrl.getPetByOwnerId(a.vo.id);
              s && s.setTilePos(t, i);
              var l = a.vo.getMembers();
              if (l)
                for (var u = l.arr, _ = 0, d = u; _ < d.length; _++) {
                  var f = d[_];
                  if (f) {
                    var T = void 0;
                    (f.type == C.MODEL_TYPE.TYPE_PLAYER
                      ? (T = n._scene.ctrl.getPlayerById(f.id))
                      : f.type == C.MODEL_TYPE.TYPE_MERCENARY &&
                        (T = n._scene.ctrl.getMerById(f.sceneId)),
                      T && T.setTilePos(t, i));
                  }
                }
              return void G["default"].autoMapNpc(G["default"].AUTO_NPC);
            }
            n._proxy.createJumpMapMessage(
              e,
              t,
              i,
              c["default"].JUMP_MAP_DATA_FLAG,
              o,
            );
          }
        }),
        (t.prototype.getTapNpc = function (e, t) {
          var i = this._proxy.model.npcList;
          if (i && i.length) {
            for (var o = 0, n = i; o < n.length; o++) {
              var a = n[o];
              if (
                a.isEnable() &&
                a.isVisible() &&
                a.npcType != P["default"].NPC_MONSTER &&
                a.npcType != P["default"].NPC_SIGN
              ) {
                var r = this._scene.ctrl.getNpcById(a.id);
                if (r && r.rect.contains(e, t)) return r;
              }
            }
            return null;
          }
        }),
        (t.prototype.addMainPlayer = function () {
          if (this._mainPlayer) return void this._mainPlayer.onAdded();
          var e = n["default"].alloc(v["default"]);
          ((e.vo = d["default"].myPlayer),
            this._scene.ctrl.addObj(e),
            (this._mainPlayer = e),
            D.MainPlayerAi.ins.initPlayer(e));
        }),
        (t.prototype.addNpcList = function () {
          if (this._proxy.isMapReady) {
            G["default"].ATUO_MISSION_PROXY = !1;
            var e = this._proxy.model.npcList;
            if (!e || !e.length)
              return void G["default"].autoMapNpc(G["default"].AUTO_MISSIONID);
            for (var t = 0, i = e; t < i.length; t++) {
              var o = i[t],
                a = this._scene.ctrl.getNpcById(o.id);
              a
                ? ((a.vo = o), a.onAdded())
                : ((a = n["default"].alloc(I["default"])),
                  (a.vo = o),
                  this._scene.ctrl.addObj(a));
            }
            G["default"].ATUO_MISSION_PROXY ||
              G["default"].autoMapNpc(G["default"].AUTO_MISSIONID);
          }
        }),
        (t.prototype.updateHonorNpc = function (e) {
          if (14 == this._proxy.mapId || 824 == this._proxy.mapId) {
            var t = 14 == this._proxy.mapId ? 18 : 20,
              i = o["default"].getProxy(l.ModName.CampWar, l.ProxyType.CampWar),
              n = e && e.body ? e.body : i.honor;
            if (!n) return;
            if (!this._scene.ctrl) return;
            var a = this._scene.ctrl.getNpcById(t);
            if (a) {
              var r = a.vo;
              ((r.name = n.name),
                r.setIcon1(n.icon1),
                r.setIcon2(n.icon2),
                r.setIcon3(n.icon3),
                a.updateVo(!0));
            }
          }
        }),
        (t.prototype.playCSE = function () {
          go.isGoodNative ||
            (this.stopCSE(),
            (this._CSE = new R["default"](
              r["default"].alloc(this, this.onCSEComp),
            )),
            this._CSE.start());
        }),
        (t.prototype.stopCSE = function () {
          (this._CSE && this._CSE.stop(), (this._CSE = null));
        }),
        (t.prototype.onCSEComp = function () {}),
        (t.prototype.onCfgLoaded = function (e) {
          var t = e.body,
            i = t.cfg,
            n = t.merged,
            r = t.mapId,
            s = this._proxy.mapId;
          if (r && s == r) {
            (this._CSE && this._CSE.step(L.EnterEffectStep.CONFIG),
              N["default"].ins.setSource(r, i, n));
            var u = new A["default"]();
            (this._scene.initScene(r, u),
              (this._proxy.isMapReady = !0),
              this.addMainPlayer(),
              this.addNpcList(),
              this.updateHonorNpc(),
              this.addPlayerList(),
              go.isFight ||
                o["default"].showView(l.ModName.Main, l.MainViewType.MainMap),
              a["default"].addUpdateItem(this),
              x["default"].ins.isFight && this.onStartBattle());
          }
        }),
        (t.prototype.onCleanScene = function (e) {
          var t = (e.body, this);
          (t._proxy.resetModel(),
            (t._mainPlayer = null),
            D.MainPlayerAi.ins.reset(),
            t._scene.clean(),
            N["default"].ins.clear(),
            o["default"].hideView(l.ModName.Main, l.MainViewType.MainMap),
            a["default"].removeUpdateItem(t));
        }),
        (t.prototype.onBlurLoaded = function (e) {
          var t = e.body;
          this._scene.setBlur(t);
        }),
        (t.prototype.onStageResize = function () {
          this._scene.onStageResize();
        }),
        t
      );
    })(_["default"]);
  t["default"] = k;
});
