(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(361),
    n = i(133),
    a = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, "service", {
          get: function () {
            return t.Service;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.initialize = function () {}),
        (t.prototype.onConnectLost = function () {}),
        (t.prototype.onEnter = function () {}),
        (t.prototype.onProto = function (e, i, o) {
          t.Service.onNt(e, i, o);
        }),
        (t.prototype.offProto = function (e, i, o) {
          t.Service.offNt(e, i, o);
        }),
        (t.prototype.sendProto = function (e) {
          t.Service.sendProto(e);
        }),
        (t.Service = new o["default"]()),
        t
      );
    })(n["default"]);
  t["default"] = a;
});
