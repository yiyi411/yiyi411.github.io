(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(22),
    n = i(0),
    a = i(18),
    r = i(19),
    s = i(5),
    l = i(1),
    u = i(369),
    _ = i(3),
    d = i(61),
    p = i(2),
    c = i(12),
    h = i(380),
    f = i(4),
    T = i(16),
    E = i(69),
    y = i(15),
    g = i(381),
    v = (function () {
      function e() {
        ((this.isGotResult = !1),
          (this.isReqBattleUpdate = !0),
          (this.winData = new h["default"]()));
      }
      return (
        Object.defineProperty(e.prototype, "battlePanel", {
          get: function () {
            return this.battleAni && this.battleAni.battlePanel;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "scene", {
          get: function () {
            return this.view && this.view.scene;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "ins", {
          get: function () {
            return (this._ins || (this._ins = new e()), this._ins);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.enterBattle = function (e) {
          (this.isFight && this.exitBattle(!1, !0),
            _["default"].sendNt(p.BattleEvent.ENTER_BATTLE),
            _["default"].showView(
              n.ModName.Battle,
              n.BattleViewType.Battle,
              e,
            ));
        }),
        (e.prototype.exitBattle = function (t, i) {
          var o = this;
          if (o.isFight) {
            var n = o.battle.result,
              r = o.battle.getType(),
              u = o.battleAni && o.battleAni.isWin();
            if (
              (this.battleAni.isTag(d["default"].TAG_SEE_INFO) &&
                (this.battleAni.setTag(d["default"].TAG_SEE_INFO, !1),
                _["default"].sendNt(p.BattleEvent.SEE_INFO_END_RESET)),
              o.cleanBattleData(),
              r == d["default"].LOCAL || null != s["default"].getEscort())
            ) {
              var h = T["default"].timer.serverTime + 1200;
              s["default"].nextBattleTime < h &&
                (s["default"].nextBattleTime = h);
            }
            if (
              o.isChangeMap ||
              (r != d["default"].LOCAL && r != d["default"].PET_PK)
            ) {
              var v = !i && null != s["default"].getEscort();
              (a["default"].createWorldDataMessage(
                f["default"].JUMP_MAP_DATA_FLAG,
                v,
              ),
                (o.isChangeMap = !1));
            }
            var S = s["default"].myPlayer;
            if (
              (S && S.setMode(c.ModelConst.MODE_NORMAL),
              u ||
                (E.MainPlayerAi.ins.open &&
                  ((E.MainPlayerAi.ins.open = !1),
                  y.Tips.show("战斗失败，自动挂机已关闭"))),
              _["default"].sendNt(p.BattleEvent.ON_BATTLE_END, [n, r, u]),
              t)
            ) {
              var I = e.ins.isNotAutoOpen;
              if ((I && (e.ins.isNotAutoOpen = void 0), o.viewData)) {
                var m = o.viewData;
                (m.isGuide
                  ? _["default"].sendNt(p.GuideEvent.GUIDE_CHECK)
                  : m.isWin
                    ? l["default"].showWin(m.modName, m.viewType, m.data)
                    : _["default"].showView(m.modName, m.viewType, m.data),
                  (o.viewData = null));
              }
              var A = o.virtualMapData;
              if (A) {
                for (
                  var C = void 0,
                    P = g["default"].ins.virtualData[A.type],
                    R = void 0,
                    O = 0;
                  O < P.length;
                  O++
                )
                  ((C = P[O]),
                    null != A.id && null != C.data
                      ? ((R = C.data), (R.id = A.id))
                      : (R = A.id || C.data),
                    C &&
                      (C.isNotWin
                        ? I || _["default"].showView(C.modName, C.viewType, R)
                        : l["default"].showWin(C.modName, C.viewType, R)));
                o.virtualMapData = void 0;
              }
            }
          }
        }),
        (e.prototype.doBattleStart = function (e, t) {
          return this.isFight
            ? void console.error("战斗打开出错")
            : ((this.battle = t),
              (this.view = e),
              (this.isFight = go.isFight = !0),
              (this.battleAni = new u["default"]()),
              void _["default"].sendNt(p.BattleEvent.ON_BATTLE_START));
        }),
        (e.prototype.ticker = function () {
          this.battleAni &&
            (this.battleAni.paint(this.scene), this.battleAni.logic());
        }),
        (e.prototype.cleanBattleData = function () {
          ((this.view = null),
            (this.isFight = go.isFight = !1),
            (this.isOpenResult = !1),
            (this.battle = null),
            (this.skillPlayer = null),
            this.resetBattleBuffer(),
            null != this.battleAni &&
              (this.battleAni.onRelease(), (this.battleAni = null)));
        }),
        (e.prototype.resetBattleBuffer = function () {
          var e = s["default"].myPlayer;
          if (e) {
            e.resetBattleBuffer();
            var t = new o.Message(r["default"].CG_ACTOR_ATTRIBUTE_UPDATE);
            a["default"].sendRequest(t);
            var i = e.getPet();
            null != i && i.resetBattleBuffer();
            var n = e.buddys;
            if (n && n.length > 0)
              for (var l = 0, u = n; l < u.length; l++) {
                var _ = u[l];
                _.bStatus = Long.ZERO;
              }
          }
        }),
        (e.prototype.selectUse = function (e) {
          return this.battlePanel ? this.battlePanel.selectUse(e) : !1;
        }),
        (e.prototype.showResult = function (t) {
          if (!this.isOpenResult) {
            if (t)
              _["default"].showView(
                n.ModName.Battle,
                n.BattleViewType.BattleWin,
              );
            else {
              if (e.ins.isSkipLose) return void (e.ins.isSkipLose = void 0);
              _["default"].showView(
                n.ModName.Battle,
                n.BattleViewType.BattleLose,
              );
            }
            this.closeBattleOther();
          }
        }),
        (e.prototype.showSkill = function (e) {
          l["default"].showModal(
            n.ModName.Battle,
            n.BattleViewType.BattleSkill,
            e,
          );
        }),
        (e.prototype.showCheck = function (e) {
          l["default"].showModal(
            n.ModName.Battle,
            n.BattleViewType.BattleCheck,
            e,
          );
        }),
        (e.prototype.closeBattleOther = function () {
          (l["default"].hideView(
            n.ModName.Battle,
            n.BattleViewType.BattleSkill,
          ),
            this.battleAni.isTag(d["default"].TAG_SEE_INFO) ||
              l["default"].hideView(
                n.ModName.Battle,
                n.BattleViewType.BattleCheck,
              ),
            l["default"].hideView(n.ModName.Chat, n.ChatViewType.ChatAllView));
        }),
        Object.defineProperty(e.prototype, "isSee", {
          get: function () {
            return this.battleAni &&
              this.battleAni.isTag(d["default"].TAG_IS_BATTLE_SEE)
              ? !0
              : !1;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "isPetRound", {
          get: function () {
            return this.battleAni &&
              this.battleAni.isTag(d["default"].TAG_PET_ORDER)
              ? !0
              : !1;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "isBuddyRound", {
          get: function () {
            return this.battleAni &&
              this.battleAni.isTag(d["default"].TAG_BUDDY_ORDER)
              ? !0
              : !1;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "isAuto", {
          get: function () {
            return this.battleAni &&
              this.battleAni.isTag(d["default"].TAG_IS_AUTO_FIGHT)
              ? !0
              : !1;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "groupId", {
          get: function () {
            return this.battle && this.battle.getMonsterGroup()
              ? this.battle.getMonsterGroup().groupId
              : -1;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.isSelectPos = function (e) {
          var t = this.getSelectPos();
          if (t) {
            var i = t.indexOf(e);
            if (-1 != i) return !0;
          }
        }),
        (e.prototype.getSelectPos = function () {
          var e = this;
          return e.battlePanel && e.battlePanel.targetSelectPanel
            ? e.battlePanel.targetSelectPanel.getTargetPos()
            : void 0;
        }),
        e
      );
    })();
  t["default"] = v;
});
