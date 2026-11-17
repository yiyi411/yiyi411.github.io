(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(46),
    n = i(17),
    a = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        __extends(t, e),
        (t.alloc = function (e, i) {
          var o = n["default"].alloc(t);
          return ((o._type = e), (o._body = i), o);
        }),
        Object.defineProperty(t.prototype, "type", {
          get: function () {
            return this._type;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "body", {
          get: function () {
            return this._body;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.onAlloc = function () {}),
        (t.prototype.onRelease = function () {
          ((this._type = null), (this._body = null));
        }),
        (t.prototype.dispose = function () {
          this.onRelease();
        }),
        t
      );
    })(o.ObjBase);
  t["default"] = a;
});
