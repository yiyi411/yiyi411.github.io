(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(60),
    n = i(3),
    a = i(0),
    r = i(53),
    s = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        __extends(t, e),
        (t.prototype.exec = function (e) {
          n["default"].hideView(a.ModName.Login, a.LoginViewType.CreateRole);
          var t = e.body;
          this.sendNt(r.LoginEvent.LOAD_GAME_RES, t);
        }),
        t
      );
    })(o["default"]);
  t["default"] = s;
});
