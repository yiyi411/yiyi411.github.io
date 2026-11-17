(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(17),
    a = i(54),
    r = i(0),
    s = i(309),
    l = i(307),
    u = i(310),
    _ = i(31),
    d = (function () {
      function e() {}
      return (
        (e.prototype.getPlayerCnt = function () {
          return this._modelMap ? Object.keys(this._modelMap).length : 0;
        }),
        Object.defineProperty(e.prototype, "npcMap", {
          get: function () {
            return this._npcMap;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "modelMap", {
          get: function () {
            return this._modelMap;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "petMap", {
          get: function () {
            return this._petMap;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "merMap", {
          get: function () {
            return this._merMap;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "legionMap", {
          get: function () {
            return this._legionMap;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.getNpcById = function (e) {
          return this._npcMap[e];
        }),
        (e.prototype.getPlayerById = function (e) {
          return this._modelMap[e];
        }),
        (e.prototype.getPetByOwnerId = function (e) {
          return this._petMap[e];
        }),
        (e.prototype.getMerById = function (e) {
          return this._merMap[e];
        }),
        (e.prototype.getLegionById = function (e) {
          return this._legionMap[e];
        }),
        (e.prototype.init = function (e) {
          ((this._scene = e),
            (this._npcMap = {}),
            (this._modelMap = {}),
            (this._petMap = {}),
            (this._merMap = {}),
            (this._legionMap = {}));
        }),
        (e.prototype.getMap = function (e) {
          switch (e) {
            case _.MODEL_TYPE.TYPE_NPC:
              return this._npcMap;
            case _.MODEL_TYPE.TYPE_PET:
              return this._petMap;
            case _.MODEL_TYPE.TYPE_MERCENARY:
              return this._merMap;
            case _.MODEL_TYPE.TYPE_LEGION:
              return this._legionMap;
            default:
              return this._modelMap;
          }
        }),
        (e.prototype.addObj = function (e) {
          if (e && e.vo) {
            var t = e.vo,
              i = this.getVoId(t),
              d = this.getMap(t.type);
            if (void 0 == i) return void console.error("获取id失败");
            if (
              (t.type == _.MODEL_TYPE.TYPE_LEGION &&
                o["default"]
                  .getProxy(r.ModName.Scene, r.ProxyType.Scene)
                  .addLegion(t),
              (d[i] = e),
              this._scene.add(e),
              this.updateScenceMap(e.vo),
              a["default"].ins.isFight &&
                ((e.dsp.visible = !1), (e.updateEnabled = !1)),
              t.pet &&
                (t.type == _.MODEL_TYPE.TYPE_PLAYER ||
                  t.type == _.MODEL_TYPE.TYPE_LEGION))
            ) {
              var p = this._petMap[t.id];
              p ||
                ((p = n["default"].alloc(l["default"])),
                (p.vo = t.pet),
                this.addObj(p));
            }
            if (t.merList)
              for (var c = 0, h = t.merList; c < h.length; c++) {
                var f = h[c];
                if (f) {
                  var T = this.getMerById(f.sceneId);
                  T ||
                    ((T = n["default"].alloc(u["default"])),
                    (T.vo = f),
                    this.addObj(T));
                }
              }
            if (t.legionList)
              for (var E = 0, y = t.legionList; E < y.length; E++) {
                var g = y[E];
                if (g) {
                  var v = this.getLegionById(g.id);
                  v ||
                    ((v = n["default"].alloc(s["default"])),
                    (v.vo = g),
                    this.addObj(v));
                }
              }
          }
        }),
        (e.prototype.removeObj = function (e) {
          if (e) {
            if (e instanceof l["default"] && e.isInnerPet()) {
              var t = e.getOwner();
              t && t.removeInnerSpr();
            }
            if (e.vo) {
              var i = e.vo,
                n = this.getVoId(i),
                a = this.getMap(i.type);
              if (((a[n] = null), delete a[n], i.pet)) {
                var s = this._petMap[i.id];
                s &&
                  ((this._petMap[i.id] = null),
                  delete this._petMap[i.id],
                  this._scene.remove(s));
              }
              if (i.merList)
                for (var u = 0, d = i.merList; u < d.length; u++) {
                  var p = d[u];
                  if (p) {
                    var c = this.getMerById(p.sceneId);
                    this.removeObj(c);
                  }
                }
              if (i.legionList)
                for (var h = 0, f = i.legionList; h < f.length; h++) {
                  var T = f[h];
                  if (T) {
                    var E = this.getLegionById(T.id);
                    E && this.removeObj(E);
                  }
                }
              (i.type == _.MODEL_TYPE.TYPE_LEGION ||
                i.type == _.MODEL_TYPE.TYPE_PLAYER) &&
                o["default"]
                  .getProxy(r.ModName.Scene, r.ProxyType.Scene)
                  .removeLegion(i.id);
            }
            (this._scene.remove(e), this.updateScenceMap(e.vo));
          }
        }),
        (e.prototype.updateScenceMap = function (e) {
          if (e && e.type != _.MODEL_TYPE.TYPE_NPC) {
            var t = this.getTeamById(e);
            t > 0 && this.updateSecnceModel(t);
          }
        }),
        (e.prototype.updateSecnceModel = function (e) {
          var t = this.getPlayerById(e);
          if (t) {
            var i = 5,
              o = t.vo,
              a = [],
              r = function (e, t) {
                if ((t.push(e), null != e.members && e.members.size() > 0))
                  for (var i = 0; i < e.members.size(); i++)
                    r(e.members.elementAt(i), t);
                return t;
              };
            ((a = r(o, a)),
              a.sort(function (e, t) {
                if (e.type != t.type) {
                  if (e.type == _.MODEL_TYPE.TYPE_PLAYER) return -1;
                  if (e.type == _.MODEL_TYPE.TYPE_MERCENARY) return 1;
                  if (t.type == _.MODEL_TYPE.TYPE_PLAYER) return 1;
                  if (t.type == _.MODEL_TYPE.TYPE_MERCENARY) return -1;
                }
                return 0;
              }));
            for (var l = 0; l < a.length; l++) {
              var d = a[l];
              if (d.type != _.MODEL_TYPE.TYPE_PLAYER) {
                var p = this.getVoId(d),
                  c = this.getMap(d.type),
                  h = c[p];
                if (i > 0) {
                  if (!h)
                    switch (d.type) {
                      case _.MODEL_TYPE.TYPE_MERCENARY:
                        var f = n["default"].alloc(u["default"]);
                        ((f.vo = d), this.addObj(f));
                        break;
                      case _.MODEL_TYPE.TYPE_LEGION:
                        var T = n["default"].alloc(s["default"]);
                        ((T.vo = d), this.addObj(T));
                    }
                } else t && this.removeObj(h);
              }
              i--;
            }
            a.length = 0;
          }
        }),
        (e.prototype.getTeamById = function (e) {
          if (e) {
            var t = -1;
            if (
              (e.type == _.MODEL_TYPE.TYPE_PLAYER && (t = e.leaderID),
              e.type == _.MODEL_TYPE.TYPE_PET && (t = e.ownerid),
              e.type == _.MODEL_TYPE.TYPE_MERCENARY && (t = e.ownerid),
              -1 == t || e.id == t)
            )
              return e.id;
            var i = this.getPlayerById(t);
            return i ? this.getTeamById(i.vo) : e.id;
          }
        }),
        (e.prototype.getVoId = function (e) {
          return e.type == _.MODEL_TYPE.TYPE_PET
            ? e.ownerid
            : e.type == _.MODEL_TYPE.TYPE_MERCENARY
              ? e.sceneId
              : e.id;
        }),
        (e.prototype.hideAllObj = function () {
          (this.hideMap(this._npcMap),
            this.hideMap(this._modelMap),
            this.hideMap(this._petMap),
            this.hideMap(this._merMap),
            this.hideMap(this._legionMap));
        }),
        (e.prototype.revertAllObj = function () {
          (this.revertMap(this._npcMap),
            this.revertMap(this._modelMap),
            this.revertMap(this._petMap),
            this.revertMap(this._merMap),
            this.revertMap(this._legionMap));
        }),
        (e.prototype.hideMap = function (e) {
          if (e)
            for (var t in e) {
              var i = e[t];
              i &&
                ((i.updateEnabled = !1), i.dsp.visible && (i.dsp.visible = !1));
            }
        }),
        (e.prototype.revertMap = function (e) {
          if (e)
            for (var t in e) {
              var i = e[t];
              if (i) {
                i.updateEnabled = !0;
                var o = i.vo;
                o.isVisible() && (i.dsp.visible = !0);
              }
            }
        }),
        (e.prototype.clean = function () {
          ((this._scene = null),
            this.cleanMap(this._npcMap),
            this.cleanMap(this._modelMap),
            this.cleanMap(this._petMap),
            this.cleanMap(this._merMap),
            this.cleanMap(this._legionMap));
        }),
        (e.prototype.cleanMap = function (e) {
          for (var t in e)
            (e.hasOwnProperty(t) &&
              e[t] &&
              console.error("没有移除的SceneObj", e[t]),
              (e[t] = null),
              delete e[t]);
        }),
        e
      );
    })();
  t["default"] = d;
});
