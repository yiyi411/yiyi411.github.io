(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(54),
    n = i(9),
    a = i(6),
    r = i(532),
    s = i(2),
    l = i(44),
    u = i(3),
    _ = i(127),
    d = i(107),
    p = i(16),
    c = i(49),
    h = i(1),
    f = i(0),
    T = i(5),
    E = i(65),
    y = i(4),
    g = i(13),
    v = i(25),
    S = i(18),
    I = 10,
    m = 2,
    A = (function (e) {
      function t() {
        var t = e.call(this, n.Layer.modal) || this;
        return (
          (t._view = t.mark("_view", r["default"])),
          (t._closeTime = I),
          t
        );
      }
      return (
        __extends(t, e),
        (t.prototype.onInit = function () {
          ((this._view.horizontalCenter = 0),
            (this._view.verticalCenter = -100),
            (this._proxy = this.getProxy(f.ProxyType.Battle)));
        }),
        (t.prototype.addListeners = function () {
          var e = this;
          (e.listen(e._view.lab_tips, e.hide),
            e.listen(e._view.btnEquip, e.onTapBtn),
            e.listen(e._view.btnSkill, e.onTapBtn),
            e.listen(e._view.btnStrengthen, e.onTapBtn),
            e.listen(e._view.btnIdentify, e.onTapBtn),
            e.listen(e._view.btnMosaic, e.onTapBtn),
            e.listen(e._view.btnForHelp, e.onTapBtn),
            e.listen(e._view.btnRecord, e.onBtnRecord),
            e.onNt(s.BattleEvent.ENTER_BATTLE, e.hide));
        }),
        (t.prototype.onBtnRecord = function () {
          var e = this._proxy.monsterGroupId;
          (this.onClickBtn(), h["default"].createBattleRecord(e));
        }),
        (t.prototype.recordSetLayout = function (e) {
          g.GUtil.setLayout(this._view.btnRecord, e);
        }),
        (t.prototype.regGuide = function () {
          if (this._view.btnRecord.visible) {
            var e = this;
            (e.regGuideSpr(v.GuideSpriteId.adventureTip, e._view),
              e.regGuideSpr(v.GuideSpriteId.adventureBtn, e._view.btnRecord));
          }
        }),
        (t.prototype.onTapBtn = function (e) {
          this.onClickBtn();
          var t = 0,
            i = this._view;
          switch (e.target) {
            case i.btnEquip:
              t = 0;
              break;
            case i.btnSkill:
              t = 1;
              break;
            case i.btnIdentify:
              t = 2;
              break;
            case i.btnMosaic:
              t = 3;
              break;
            case i.btnStrengthen:
              t = 4;
              break;
            case i.btnForHelp:
              t = 5;
          }
          return 5 == t
            ? void S["default"].askForHelp(!1)
            : void h["default"].showWin(
                f.ModName.BeStronger,
                f.BeStrongerViewType.BeStrongerMain,
                { subIdx: t },
              );
        }),
        (t.prototype.onClickBtn = function () {
          ((o["default"].ins.isNotAutoOpen = !0), this.hide());
        }),
        (t.prototype.onShow = function () {
          (e.prototype.onShow.call(this),
            d["default"].ins.playMusic(_.SoundMusic.LOSE));
          var t = !0,
            i = T["default"].arena;
          if ((null != i && (t = !1), t)) {
            var o = E["default"].ins.getData(
              pb.EUserProtocol.S2C_CORSSIND_INFO,
            );
            if (o) {
              var n =
                (u["default"].getProxy(f.ModName.Arena, f.ProxyType.Arena),
                E["default"].ins.getData(y["default"].CROSS_ARENA_ONE_STATUS));
              void 0 != n && null != n && (t = !1);
            }
            var a = u["default"].getProxy(
              f.ModName.CrossServerPK,
              f.ProxyType.CrossServerPK,
            );
            a.data.isCSPKBattle && (t = !1);
            var r = u["default"].getProxy(
              f.ModName.CrossTeamArena,
              f.ProxyType.CrossTeamArena,
            );
            r.isIng && (t = !1);
          }
          (T["default"].isDigHole && (t = !1),
            (this._view.grp_digHole.visible = T["default"].isDigHole),
            (this._view.grp_btn.visible = t),
            (this._view.grp_btn.includeInLayout = t),
            (this._view.lab_time.y = t || T["default"].isDigHole ? 472 : 345));
          var s = 720;
          ((this._view.img_lose.y = s >> 1),
            c["default"].get(this._view.img_lose).to({ y: 0 }, 200),
            (this._view.grp_btn.x = -s),
            (this._view.grp_digHole.x = -s),
            c["default"].get(this._view.grp_btn).delay(200).to({ x: 0 }, 200),
            c["default"]
              .get(this._view.grp_digHole)
              .delay(200)
              .to({ x: 0 }, 200),
            (this._closeTime = T["default"].isAccelerate ? m : I),
            (this._view.lab_time.text = this._closeTime + "秒后自动关闭"),
            this.recordSetLayout(this._proxy.monsterGroupId > 0),
            p["default"].addUpdateItem(this, 1e3));
        }),
        (t.prototype.update = function () {
          l.GuideModel.ins.isGuideBattleLose ||
            (this._closeTime--,
            this._closeTime > 0
              ? (this._view.lab_time.text = this._closeTime + "秒后自动关闭")
              : this.hide());
        }),
        (t.prototype.onHide = function () {
          (c["default"].remove(this._view.img_lose),
            c["default"].remove(this._view.grp_btn),
            c["default"].remove(this._view.grp_digHole),
            p["default"].removeUpdateItem(this),
            (o["default"].ins.isOpenResult = !1),
            o["default"].ins.exitBattle(!0),
            d["default"].ins.playMusic(_.SoundMusic.WILD),
            e.prototype.onHide.call(this),
            u["default"].sendNt(s.BattleEvent.BATTLE_FAIL));
        }),
        t
      );
    })(a["default"]);
  t["default"] = A;
});
