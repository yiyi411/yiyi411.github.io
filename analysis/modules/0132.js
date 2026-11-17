(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(17),
    n = i(11),
    a = i(58),
    r = i(59),
    s = i(225),
    l = (function () {
      function e() {
        ((this.resMap = Object.create(null)),
          (this.groups = Object.create(null)),
          (this.subkeyMap = Object.create(null)),
          (this.urlMap = Object.create(null)));
      }
      return (
        (e.prototype.parse = function (e) {
          for (var t = this, i = 0, o = e.groups; i < o.length; i++) {
            var n = o[i];
            t.groups[n.name] = n.keys.split(",");
          }
          for (var a = 0, r = e.resources; a < r.length; a++) {
            var s = r[a],
              l = s.name,
              u = s.url,
              _ = s.subkeys,
              d = { name: l, url: u };
            if (((t.resMap[l] = d), (t.urlMap[u] = l), _)) {
              d.subkeys = _.split(",");
              for (var p = 0, c = d.subkeys; p < c.length; p++) {
                var h = c[p];
                t.subkeyMap[h] = l;
              }
            }
          }
        }),
        e
      );
    })(),
    u = (function () {
      function e() {
        ((this._cfg = new l()),
          (this._keyHandler = Object.create(null)),
          (this._idxName = Object.create(null)),
          (this._groupHandler = Object.create(null)));
      }
      return (
        Object.defineProperty(e, "ins", {
          get: function () {
            return (null == this._ins && (this._ins = new e()), this._ins);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.loadConfig = function (t) {
          var i = this;
          return i.resJson
            ? (i._cfg.parse(i.resJson),
              (i.resJson = null),
              t.exec(),
              void o["default"].release(t))
            : void r["default"].ins.load(
                e.Root + "default.res.json",
                n["default"].alloc(i, function (e, n) {
                  (i._cfg.parse(e),
                    t.exec(),
                    o["default"].release(t),
                    r["default"].ins.unload(n));
                }),
                a.LoadPri.Init,
              );
        }),
        (e.prototype.getRes = function (t) {
          var i = this.getResInfo(t);
          if (i) {
            var o = r["default"].ins.getRes(e.Root + i.url);
            return o instanceof s.MergedBmp ? o.getTexture(t) : o;
          }
          return null;
        }),
        (e.prototype.getGroup = function (e) {
          return this._cfg.groups[e];
        }),
        (e.prototype.getResAsync = function (t, i) {
          var s = this,
            l = s.getRes(t);
          if (l) return (i.exec([l, t]), void o["default"].release(i));
          var u = s.getResInfo(t);
          if (!u) return void r["default"].ins.load(t, i, a.LoadPri.UI);
          var _ = s._keyHandler[t];
          (_ || (_ = s._keyHandler[t] = []),
            _.push(i),
            u.subkeys
              ? r["default"].ins.loadMerge(
                  e.Root + u.url,
                  n["default"].alloc(s, s.onKeyLoaded),
                  a.LoadPri.UI,
                )
              : r["default"].ins.load(
                  e.Root + u.url,
                  n["default"].alloc(s, s.onKeyLoaded),
                  a.LoadPri.UI,
                ));
        }),
        (e.prototype.addRef = function (t) {
          var i = this.getResInfo(t);
          i
            ? r["default"].ins.addRef(e.Root + i.url)
            : r["default"].ins.addRef(t);
        }),
        (e.prototype.decRef = function (t) {
          var i = this.getResInfo(t);
          i
            ? r["default"].ins.decRef(e.Root + i.url)
            : r["default"].ins.decRef(t);
        }),
        (e.prototype.onKeyLoaded = function (t, i) {
          var o,
            n = this,
            a = n._cfg.urlMap[i.replace(e.Root, "")],
            r = n.getResInfo(a);
          if (r.subkeys)
            for (var s = 0, l = r.subkeys; s < l.length; s++) {
              var u = l[s];
              ((o = n._keyHandler[u]),
                (n._keyHandler[u] = null),
                n.callHandler(u, o));
            }
          else
            ((o = n._keyHandler[a]),
              (n._keyHandler[a] = null),
              n.callHandler(a, o));
        }),
        (e.prototype.loadCancel = function (t) {
          var i = this,
            o = i._cfg.urlMap[t.replace(e.Root, "")];
          if (o) {
            var n,
              a = i.getResInfo(o);
            if (a.subkeys)
              for (var r = 0, s = a.subkeys; r < s.length; r++) {
                var l = s[r];
                ((n = i._keyHandler[l]),
                  (i._keyHandler[l] = null),
                  i.callHandler(l, n));
              }
            else
              ((n = i._keyHandler[o]),
                (i._keyHandler[o] = null),
                i.callHandler(o, n));
          }
        }),
        (e.prototype.callHandler = function (e, t) {
          if (t) {
            for (var i = 0, n = t; i < n.length; i++) {
              var a = n[i];
              (a.exec([this.getRes(e), e]), o["default"].release(a));
            }
            t.length = 0;
          }
        }),
        (e.prototype.loadGroup = function (t, i, o) {
          var s = this,
            l = s._cfg.groups[t];
          if (l) {
            for (var u, _ = [], d = 0, p = l; d < p.length; d++) {
              var c = p[d],
                h = s.getResInfo(c);
              if (h) {
                var f = e.Root + h.url;
                (h.subkeys && (u = !0), _.indexOf(f) < 0 && _.push(f));
              }
            }
            var T = s._groupHandler[t];
            T || (T = s._groupHandler[t] = { onCompList: [], onProgList: [] });
            var E = T.onCompList;
            (E.indexOf(i) < 0 && E.push(i),
              o && ((E = T.onProgList), E.indexOf(o) < 0 && E.push(o)));
            var y,
              g = n["default"].alloc(s, s.onGroupComp),
              v = n["default"].alloc(s, s.onGroupProg);
            ((y = u
              ? r["default"].ins.loadMergeGroup(_, g, a.LoadPri.UI, v)
              : r["default"].ins.loadGroup(_, g, a.LoadPri.UI, v)),
              (s._idxName[y] = t));
          }
        }),
        (e.prototype.onGroupProg = function (t, i) {
          var o = this._idxName[t];
          if (this._groupHandler[o])
            for (
              var n = r["default"].ins.getGroupLoaded(t),
                a = [o, i.replace(e.Root, ""), n, this.getGroup(o).length],
                s = this._groupHandler[o].onProgList,
                l = 0,
                u = s;
              l < u.length;
              l++
            ) {
              var _ = u[l];
              _.exec(a);
            }
        }),
        (e.prototype.onGroupComp = function (e) {
          var t = this,
            i = t._idxName[e],
            n = t._groupHandler[i];
          if (((t._groupHandler[i] = null), delete t._groupHandler[i], n)) {
            for (var a = n.onCompList, r = 0, s = a; r < s.length; r++) {
              var l = s[r];
              (l.exec(i), o["default"].release(l));
            }
            ((n.onCompList = null), (a = n.onProgList));
            for (var u = 0, _ = a; u < _.length; u++) {
              var l = _[u];
              o["default"].release(l);
            }
            n.onProgList = null;
          }
        }),
        (e.prototype.getResInfo = function (e) {
          var t = this._cfg;
          return (t.subkeyMap[e] && (e = t.subkeyMap[e]), t.resMap[e]);
        }),
        (e.Root = "resource/"),
        e
      );
    })();
  t["default"] = u.ins;
});
