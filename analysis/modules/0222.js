(function (e, t, i) {
  "use strict";
  function o() {
    ((s = Long.prototype.toString),
      (Long.prototype.toString = function () {
        var e = this,
          t = s,
          i = u;
        if (i[e.high]) {
          if (!i[e.high][e.low]) {
            var o = Object.create(null);
            ((o.time = 0), (o.str = t.call(e)), (i[e.high][e.low] = o));
          }
        } else {
          var o = Object.create(null);
          ((o.time = 0), (o.str = t.call(e)));
          var n = Object.create(null);
          ((n[e.low] = o), (i[e.high] = n));
        }
        return (
          (i[e.high][e.low].time = egret.getTimer()),
          i[e.high][e.low].str
        );
      }),
      (l = { update: n }),
      a["default"].addUpdateItem(l));
  }
  function n() {
    var e,
      t,
      i,
      o = u,
      n = [],
      a = egret.getTimer();
    for (t in o)
      for (i in o[t])
        ((e = o[t][i]),
          a - e.time > 5e4 && ((n[n.length] = t), (n[n.length] = i)));
    for (var r = 0, s = n.length; s > r; r += 2) {
      ((t = n[r]), (i = n[r + 1]));
      var l = o[t];
      ((l[i] = null),
        delete l[i],
        0 === Object.keys(l).length && ((o[t] = null), delete o[t]));
    }
  }
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.initLong = void 0));
  var a = i(16),
    r = window;
  r.Long = r.Long ? r.Long : r.dcodeIO ? r.dcodeIO.Long : void 0;
  var s,
    l,
    u = Object.create(null);
  t.initLong = o;
});
