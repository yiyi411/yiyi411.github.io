(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(350),
    n = i(1607),
    a =
      (i(1608),
      (function () {
        function e() {}
        return (
          (e.init = function () {
            if (!this.isInit) {
              ((this.isInit = !0), n.initEui());
              for (var e = 0, t = o.ModClsList; e < t.length; e++) {
                var i = t[e];
                new i();
              }
            }
          }),
          e
        );
      })());
  t["default"] = a;
});
