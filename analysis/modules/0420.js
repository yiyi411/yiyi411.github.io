(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(71),
    n = i(18),
    a = i(27),
    r = i(5),
    s = i(57),
    l = i(261),
    u = i(78),
    _ = i(42),
    d = i(2),
    p = i(3),
    c = i(0),
    h = i(9),
    f = i(52),
    T = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        __extends(t, e),
        (t.prototype.exec = function (e) {
          var t = e.body,
            i = t.getByte();
          if (0 != i)
            return (
              console.info("role login result: " + i),
              a["default"].loginConfirm(t.getString()),
              void p["default"].showView(
                c.ModName.Login,
                c.LoginViewType.RoleList,
              )
            );
          (h.Layer.hideAllMdr(), (r["default"].loginSetting = t.getInt()));
          var o = 0,
            T = 0,
            E = 0;
          ((o = t.getByte()),
            (T = t.getInt()),
            (s["default"].DELETE_SKILL_MONEY = [o, T]),
            (o = t.getByte()),
            (T = t.getInt()),
            (E = t.getInt()),
            (l["default"].DEL_ARRTIBUTE = [o, T, E]),
            (o = t.getByte()),
            (T = t.getInt()),
            (u.Country.ACTIVATE_MONEY = [o, T]),
            (o = t.getByte()),
            (T = t.getShort()),
            (_["default"].PET_CHANGE_NAME_MONEY = [o, T]),
            (o = t.getByte()),
            (T = t.getInt()),
            (r["default"].PARTNER_ADD_MONEY = { moneyType: o, moneyValue: T }),
            r["default"].initMyPlayer(),
            n["default"].processDataBlockFlagMsg(t),
            (r["default"].TAG_IS_AUTO_FIGHT_FLAG =
              "1" === egret.localStorage.getItem("TAG_IS_AUTO_FIGHT_FLAG")));
          var y = r["default"].myPlayer;
          (gs.report &&
            gs.report(
              f.REPORT_TYPE.Login,
              y.level,
              y.name,
              y.id,
              void 0,
              "",
              y.vipLevel2,
            ),
            this.sendNt(d.MiscEvent.ENTER_GAME));
        }),
        t
      );
    })(o["default"]);
  t["default"] = T;
});
