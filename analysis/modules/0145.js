(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(2),
    a = i(12),
    r = i(1),
    s = i(5),
    l = i(7),
    u = i(8),
    _ = i(16),
    d = i(4),
    p = i(0),
    c = (function (e) {
      function t() {
        var t = e.call(this) || this;
        return ((t.skinName = "PlayerInfoSkin"), t);
      }
      return (
        __extends(t, e),
        (t.prototype.$onAddToStage = function (t, i) {
          (e.prototype.$onAddToStage.call(this, t, i),
            o["default"].onNt(
              n.MainEvent.ON_UPDATE_PLAYER_INFO_UI,
              this.updatePlayerInfo,
              this,
            ),
            o["default"].onNt(
              n.MainEvent.ON_PLAYER_ATTR_UPDATE,
              this.onPlayerAttrUpdate,
              this,
            ),
            o["default"].onNt(
              n.BagEvent.BAG_EQUIPMENT_UPDATE,
              this.updatePlayerInfo,
              this,
            ),
            o["default"].onNt(
              n.MainEvent.ON_PET_ATTR_UPDATE,
              this.updatePetInfo,
              this,
            ),
            (this.petHead.mask = this.hMask),
            this.updateInfo(),
            this.updateHead(),
            this.updateVip(),
            (this.btnAuto.visible = !1),
            _["default"].addUpdateItem(this, 1e3));
        }),
        (t.prototype.$onRemoveFromStage = function () {
          ((this.type = void 0),
            (this.petHead.mask = null),
            o["default"].offNt(
              n.MainEvent.ON_UPDATE_PLAYER_INFO_UI,
              this.updatePlayerInfo,
              this,
            ),
            o["default"].offNt(
              n.MainEvent.ON_PLAYER_ATTR_UPDATE,
              this.onPlayerAttrUpdate,
              this,
            ),
            o["default"].offNt(
              n.BagEvent.BAG_EQUIPMENT_UPDATE,
              this.updatePlayerInfo,
              this,
            ),
            o["default"].offNt(
              n.MainEvent.ON_PET_ATTR_UPDATE,
              this.updatePetInfo,
              this,
            ),
            _["default"].removeUpdateItem(this),
            e.prototype.$onRemoveFromStage.call(this));
        }),
        (t.prototype.onPlayerAttrUpdate = function (e) {
          if (this.type != r["default"].PLAYER_INFO_BATTLE) {
            var t = e.body,
              i = [
                a.ModelConst.HP,
                a.ModelConst.HPMAX,
                a.ModelConst.MP,
                a.ModelConst.MPMAX,
                a.ModelConst.EXP,
                a.ModelConst.EXPMAX,
                a.ModelConst.HP_DISPLAY,
                a.ModelConst.MP_DISPLAY,
                a.ModelConst.EXP2,
                a.ModelConst.EXPMAX2,
                a.ModelConst.LEVEL,
                a.ModelConst.LEVEL2,
              ];
            (i.indexOf(t) >= 0 && this.updatePlayerInfo(),
              t == a.ModelConst.VIP_LEVEL_2 && this.updateVip(),
              (t == a.ModelConst.JOB || t == a.ModelConst.SEX) &&
                this.updateHead());
          }
        }),
        (t.prototype.updateHead = function () {
          var e = s["default"].myPlayer;
          null != e && (this.img_head.source = u.Tool.getHeadIcon(e, !0));
        }),
        (t.prototype.updateVip = function () {
          var e = s["default"].myPlayer;
          if (null != e) {
            var t = e.getVipLevel2();
            this.img_vip.source = t > 0 ? "shejiao_icon_huiyuan" + t : null;
          }
        }),
        (t.prototype.update = function (e) {
          var t = s["default"].myPlayer;
          if (null != t) {
            if (!t.punishTime || e.serverTime > t.punishTime)
              return void (this.punish.visible = !1);
            ((this.punish.visible = !0),
              (this.punish.source = d["default"].punishIcon[t.punishType]));
          }
        }),
        (t.prototype.updateInfo = function () {
          (this.updatePlayerInfo(), this.updatePetInfo());
        }),
        (t.prototype.updatePlayerInfo = function () {
          var e = this,
            t = this.type,
            i = s["default"].myPlayer;
          if (null != i) {
            e.lab_name.text = i.name;
            var n,
              l,
              u = o["default"].getProxy(p.ModName.Sailing, p.ProxyType.Sailing);
            u.isSailingWarPVP
              ? ((n = i.crossHp), (l = i.crossMp))
              : t == r["default"].PLAYER_INFO_BATTLE
                ? ((n = i.get(a.ModelConst.HP_DISPLAY)),
                  (l = i.get(a.ModelConst.MP_DISPLAY)))
                : ((n = i.get(a.ModelConst.HP)), (l = i.get(a.ModelConst.MP)));
            var _ = u.isSailingWarPVP
                ? i.crossHpMax
                : i.get(a.ModelConst.HPMAX),
              d = u.isSailingWarPVP ? i.crossMpMax : i.get(a.ModelConst.MPMAX),
              c = i.get(a.ModelConst.LEVEL);
            e.txtLevel.text = "Lv." + c;
            var h = 160;
            ((e.proHp.width = Math.min((n / _) * h, h)),
              (h = 150),
              (e.proMp.width = Math.min((l / d) * h, h)));
            var f = i.get(a.ModelConst.LEVEL2);
            ((e.grp_cqLv.visible = f > 0), (e.txtLevelCq.text = "" + f));
          }
        }),
        (t.prototype.updatePetInfo = function () {
          var e = this,
            t = this.type,
            i = s["default"].myPlayer,
            l = i.getPet();
          if (null == l) return void (e.petGroup.visible = !1);
          ((e.petGroup.visible = !0),
            (e.petHead.source = l.getPetIcon() + ""),
            (e.txtLevel2.text = "Lv." + l.get(a.ModelConst.LEVEL)));
          var u, _;
          t == r["default"].PLAYER_INFO_BATTLE
            ? ((u = l.get(a.ModelConst.HP_DISPLAY)),
              (_ = l.get(a.ModelConst.MP_DISPLAY)),
              0 == u && o["default"].sendNt(n.BattleEvent.BATTLE_PET_DIE))
            : ((u = l.get(a.ModelConst.HP)), (_ = l.get(a.ModelConst.MP)));
          var d = l.get(a.ModelConst.HPMAX),
            p = l.get(a.ModelConst.MPMAX),
            c = l.get(a.ModelConst.EXP),
            h = l.get(a.ModelConst.EXPMAX),
            f = 132;
          ((e.proHp2.width = (u / d) * f),
            (f = 122),
            (e.proMp2.width = (_ / p) * f),
            (f = 112),
            c > h && (c = h),
            (e.proExp2.width = (c / h) * f));
        }),
        t
      );
    })(l["default"]);
  ((t["default"] = c), (window.PlayerInfoView = c));
});
