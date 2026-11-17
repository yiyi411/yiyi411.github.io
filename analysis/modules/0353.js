(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.ConnectErrCmd = void 0));
  var o = i(154),
    n = i(71),
    a = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        __extends(t, e),
        (t.prototype.exec = function (e) {
          var t = e.body;
          (console.info("connect error", t),
            this.sendNt(o.ConnectEvent.ON_CONNECT_LOST, t));
        }),
        t
      );
    })(n["default"]);
  t.ConnectErrCmd = a;
});
