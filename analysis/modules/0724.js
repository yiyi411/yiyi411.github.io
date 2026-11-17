(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(2),
    n = i(0),
    a = i(48),
    r = i(725),
    s = i(727),
    l = i(729),
    u = i(730),
    _ = i(731),
    d = i(732);
  i(733);
  var p = i(734),
    c = i(735),
    h = (function (e) {
      function t() {
        return e.call(this, n.ModName.Misc) || this;
      }
      return (
        __extends(t, e),
        (t.prototype.initCmd = function () {
          (this.regCmd(o.MiscEvent.INIT_MISC, r.InitMiscCmd),
            this.regCmd(o.MiscEvent.ENTER_GAME, l["default"]),
            this.regCmd(o.SDK_EVENT.SHARE_SUCC, u.ShareSuccCmd),
            this.regCmd(o.SDK_EVENT.ON_SDK_LOGOUT, d.OnSdkLogoutCmd),
            this.regCmd(o.MiscEvent.ON_NEW_DAY, _.OnNewDayCmd),
            this.regCmd(o.SDK_EVENT.ON_SDK_PLUG, p.OnSdkPlugCmd),
            this.regCmd(o.SDK_EVENT.REAL_NAME_SUCC, c.AuthSuccCmd));
        }),
        (t.prototype.initModel = function () {
          this.regProxy(n.ProxyType.Misc, s.MiscProxy);
        }),
        (t.prototype.initView = function () {}),
        t
      );
    })(a["default"]);
  t["default"] = h;
});
