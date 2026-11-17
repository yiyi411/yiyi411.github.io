(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(43),
    a = i(35),
    r = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        __extends(t, e),
        (t.prototype.onNt = function (e, t, i, n) {
          o["default"].onNt(e, t, i ? i : this, n);
        }),
        (t.prototype.offNt = function (e, t, i) {
          o["default"].offNt(e, t, i ? i : this);
        }),
        (t.prototype.onProto = function (t, i, o) {
          if ((o || (o = this), Array.isArray(t)))
            for (var n = 0, a = t; n < a.length; n++) {
              var r = a[n];
              e.prototype.onProto.call(this, r, i, o);
            }
          else e.prototype.onProto.call(this, t, i, o);
        }),
        (t.prototype.sendProtoAsync = function (e, t, i) {
          return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (o) {
              return [2, a["default"].sendProtoAsync(e, t, i)];
            });
          });
        }),
        (t.prototype.onEnter = function () {}),
        t
      );
    })(n["default"]);
  t["default"] = r;
});
