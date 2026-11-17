(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.GRID_HEIGHT = t.GRID_WIDTH = void 0));
  var o = i(17),
    n = i(11),
    a = i(59),
    r = i(136),
    s = i(375);
  ((t.GRID_WIDTH = 24), (t.GRID_HEIGHT = 24));
  var l = 1,
    u = (function () {
      function e() {
        ((this.scale = 2), (this._blocks = []), (this._tileList = []));
      }
      return (
        (e.findPath = function (t, i, n, a, r, l) {
          if (
            (void 0 === r && (r = 0),
            void 0 === l && (l = !0),
            !e.ins.isPointLegal(t, i) || !e.ins.isPointLegal(n, a))
          )
            return null;
          var u = s["default"].findPath(t, i, n, a);
          if (!u) return null;
          for (; r > 0 && u.length > 0;) (o["default"].release(u.pop()), r--);
          return (l && (u = s["default"].floyd(u)), u);
        }),
        Object.defineProperty(e, "ins", {
          get: function () {
            return (null == this._ins && (this._ins = new e()), this._ins);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "mapWidth", {
          get: function () {
            return this._mapWidth;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "mapHeight", {
          get: function () {
            return this._mapHeight;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "tileWidth", {
          get: function () {
            return this._tileWidth;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "tileHeight", {
          get: function () {
            return this._tileHeight;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "columns", {
          get: function () {
            return this._columns;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "rows", {
          get: function () {
            return this._rows;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "mapId", {
          get: function () {
            return this._mapId;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.getTile = function (e) {
          return this._tileList[e];
        }),
        Object.defineProperty(e.prototype, "cfg", {
          get: function () {
            return this._cfg;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.getMask = function (e, t) {
          return this._blocks[t * this._columns + e];
        }),
        Object.defineProperty(e.prototype, "ckBlock", {
          get: function () {
            return (
              null == this._ckBlock &&
                (this._ckBlock = n["default"].alloc(this, this.isBlock)),
              this._ckBlock
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.isMask = function (e, t) {
          return 0 != (e & t);
        }),
        (e.prototype.isBlock = function (e, t) {
          return this.isMask(this.getMask(e, t), l);
        }),
        (e.prototype.isInRange = function (e, t) {
          return e >= 0 && t >= 0 && e < this._columns && t < this._rows;
        }),
        (e.prototype.isPointLegal = function (e, t) {
          return this.isInRange(e, t) && !this.isBlock(e, t);
        }),
        (e.prototype.setSource = function (e, t, i) {
          var o = this;
          ((o._mapId = e),
            (o._merged = i),
            (o._mapWidth = t.mW),
            (o._mapHeight = t.mH),
            (o._tileWidth = t.tW),
            (o._tileHeight = t.tH),
            (o._columns = o._mapWidth / o._tileWidth),
            (o._rows = o._mapHeight / o._tileHeight));
          var n = Math.min(t.blocks.length, o._columns * o._rows);
          o._blocks.length = n;
          for (var a = 0; n > a; a++) o._blocks[a] = 0 | +t.blocks[a];
          this._cfg = t;
          for (var r = 0, l = this._cfg.tiles; r < l.length; r++)
            for (
              var u = l[r], _ = u[0], d = u[1], p = u[2], c = u[3], h = 0;
              c > h;
              ++h
            )
              for (var f = 0; p > f; ++f) {
                var T = _,
                  E = d,
                  y = f,
                  g = h,
                  v = { src: T, transform: E, col: y, row: g };
                this._tileList.push(v);
              }
          (s["default"].initialize(this.columns, this.rows),
            (s["default"].ckIsBlock = this.ckBlock));
        }),
        (e.prototype.getTexture = function (e, t) {
          return this._merged.getTexture(e, t);
        }),
        (e.prototype.getTilePt = function (e, t, i) {
          void 0 === i && (i = null);
          var n = Math.floor(e / this._tileWidth),
            a = Math.floor(t / this._tileHeight);
          return (
            null == i
              ? (i = o["default"].alloc(egret.Point).setTo(n, a))
              : ((i.x = n), (i.y = a)),
            i
          );
        }),
        (e.prototype.getWorldPt = function (e, i, n) {
          void 0 === n && (n = null);
          var a = Math.floor((e + 0.5) * t.GRID_WIDTH),
            r = Math.floor((i + 0.5) * t.GRID_HEIGHT);
          return (
            null == n
              ? (n = o["default"].alloc(egret.Point).setTo(a, r))
              : ((n.x = a), (n.y = r)),
            n
          );
        }),
        (e.prototype.clear = function () {
          if (
            ((this._mapId = void 0),
            (this._tileList.length = 0),
            (this._blocks.length = 0),
            (this._cfg = null),
            this._merged)
          ) {
            var e = this._merged;
            ((this._merged = null), a["default"].ins.decRef(e.url));
          }
        }),
        (e.randomPointByRange = function (t, i, n, a, s) {
          for (
            var l = t - n,
              u = t + n,
              _ = i - a,
              d = i + a,
              p = r["default"].randomBetween(l, u),
              c = r["default"].randomBetween(_, d),
              h = 50;
            h >= 0 && !e.ins.isPointLegal(p, c);
          ) {
            if ((h--, 0 > h)) {
              ((p = t), (c = i));
              break;
            }
            ((p = r["default"].randomBetween(l, u)),
              (c = r["default"].randomBetween(_, d)));
          }
          return ((s = s || o["default"].alloc(egret.Point)), s.setTo(p, c), s);
        }),
        (e.getPointByCenter = function (e, t, i, n) {
          for (var a = 1; i >= a; ++a)
            for (var r = 1; n >= r; ++r) {
              var s = e - a,
                l = e + a,
                u = t - r,
                _ = t + r,
                d = this.getPtByRange(s, u, l, _);
              if (d) return d;
            }
          return o["default"].alloc(egret.Point).setTo(e, t);
        }),
        (e.getPtByRange = function (t, i, n, a) {
          for (var r = t; n >= r; ++r)
            for (var s = i; a >= s; ++s)
              if (e.ins.isPointLegal(r, s))
                return o["default"].alloc(egret.Point).setTo(r, s);
          return null;
        }),
        e
      );
    })();
  t["default"] = u;
});
