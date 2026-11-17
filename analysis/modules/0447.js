(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.ShowChoosePayCmd = void 0));
  var o = i(60),
    n = i(3),
    a = i(0),
    r = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        __extends(t, e),
        (t.prototype.exec = function (e) {
          n["default"].showView(
            a.ModName.Login,
            a.LoginViewType.GoodPay,
            e.body,
          );
        }),
        t
      );
    })(o["default"]);
  t.ShowChoosePayCmd = r;
});
