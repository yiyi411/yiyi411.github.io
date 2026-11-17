(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(17),
    a = i(34),
    r = i(11),
    s = i(233),
    l = i(5),
    u = i(26),
    _ = (function (e) {
      function t() {
        var t = e.call(this) || this;
        return ((t.__egretHandler = []), (t.__ntHandler = {}), t);
      }
      return (
        __extends(t, e),
        (t.prototype.$onAddToStage = function (t, i) {
          (e.prototype.$onAddToStage.call(this, t, i),
            this._mdrHub ||
              ((this._mdrHub = n["default"].alloc(s["default"])),
              this._mdrHub.setView(this)),
            this.addListeners(),
            this.onAddToStage(),
            this.regGuide());
        }),
        (t.prototype.$onRemoveFromStage = function () {
          this.data = null;
          var t = this._mdrHub;
          (n["default"].release(t),
            (this._mdrHub = null),
            this.doHide(),
            this.onRemoveFromStage(),
            e.prototype.$onRemoveFromStage.call(this));
        }),
        (t.prototype.onAddToStage = function () {}),
        (t.prototype.onRemoveFromStage = function () {}),
        (t.prototype.addListeners = function () {}),
        (t.prototype.regGuide = function () {}),
        (t.prototype.onEgret = function (e, t, i, o) {
          if (e && t && i) {
            o = o || this;
            var n = { target: e, type: t, listener: i, thisObject: o };
            (this.__egretHandler.push(n), e.addEventListener(t, i, o));
          }
        }),
        (t.prototype.offEgret = function (e, t, i, o) {
          if (e && t && i) {
            ((o = o || this), e.removeEventListener(t, i, o));
            for (var n = this.__egretHandler, a = 0, r = n.length; r > a; a++) {
              var s = n[a];
              s &&
                s.target === e &&
                s.type === t &&
                s.listener === i &&
                (n.splice(a, 1), a--, r--);
            }
          }
        }),
        (t.prototype.onNt = function (e, t, i) {
          var n = this;
          null == i && (i = this);
          var a = n.__ntHandler[e];
          r["default"].equalMethod(a, t, i) ||
            ((n.__ntHandler[e] = r["default"].alloc(i, t)),
            o["default"].onNt(e, n.notifyObservers, n));
        }),
        (t.prototype.offNt = function (e) {
          var t = this,
            i = t.__ntHandler[e];
          (delete t.__ntHandler[e],
            n["default"].release(i),
            o["default"].offNt(e, t.notifyObservers, t));
        }),
        (t.prototype.notifyObservers = function (e) {
          var t = this.__ntHandler[e.type];
          t && t.exec(e);
        }),
        (t.prototype.doHide = function (e) {
          var t = this;
          for (var i in t.__ntHandler) t.offNt(i);
          this._sp = null;
          for (var o = this.__egretHandler; o.length;) {
            var n = o.pop();
            n && n.target.removeEventListener(n.type, n.listener, n.thisObject);
          }
        }),
        (t.prototype.listen = function (e, t, i) {
          (void 0 === i && (i = egret.TouchEvent.TOUCH_TAP),
            null == t && (t = this.onClick),
            this.onEgret(e, i, t, this));
        }),
        (t.prototype.onClick = function (e) {}),
        (t.prototype.addHeadSpr = function (e, t, i, o, n, a) {
          return (
            void 0 === n && (n = u.Direction.LEFT),
            void 0 === a && (a = 2),
            this._mdrHub.addHeadSpr(e, t, i, o, n, a)
          );
        }),
        (t.prototype.updateHeadSpr = function (e, t) {
          this._mdrHub.updateHeadSpr(e, t);
        }),
        (t.prototype.getSprById = function (e) {
          return this._mdrHub.getSprById(e);
        }),
        (t.prototype.removeSpr = function (e) {
          this._mdrHub.removeSpr(e);
        }),
        (t.prototype.addSprBySrc = function (e, t, i, o, n, a, r) {
          return (
            void 0 === n && (n = u.Direction.LEFT),
            void 0 === a && (a = 2),
            void 0 === r && (r = !1),
            this._mdrHub.addSprBySrc(e, t, i, o, n, a, r)
          );
        }),
        (t.prototype.updateSprSrc = function (e, t) {
          this._mdrHub.updateSprSrc(e, t);
        }),
        (t.prototype.addSprByIcon = function (e, t, i, o, n, a, r) {
          return (
            void 0 === n && (n = u.Direction.LEFT),
            void 0 === a && (a = 2),
            void 0 === r && (r = !1),
            this._mdrHub.addSprByIcon(e, t, i, o, n, a, r)
          );
        }),
        (t.prototype.updateSprIcon = function (e, t, i) {
          return (
            void 0 === i && (i = !1),
            this._mdrHub.updateSprIcon(e, t, i)
          );
        }),
        (t.prototype.addPetSprByIcon = function (e, t, i, o, n, a, r) {
          return (
            void 0 === n && (n = u.Direction.LEFT),
            void 0 === a && (a = 2),
            void 0 === r && (r = !1),
            this._mdrHub.addPetSprByIcon(e, t, i, o, n, a)
          );
        }),
        (t.prototype.updatePetSprIcon = function (e, t, i) {
          return (
            void 0 === i && (i = !1),
            this._mdrHub.updatePetSprIcon(e, t, i)
          );
        }),
        (t.prototype.updateRole = function (e, t, i, o, n, a) {
          (void 0 === e && (e = 360),
            void 0 === t && (t = 350),
            i || (i = l["default"].myPlayer),
            null == this._sp
              ? (this._sp = a
                  ? this.addSprBySrc(i.icon1.toNumber(), e, t, o, n)
                  : this.addSprByIcon(i, e, t, o, n))
              : a
                ? this.updateSprSrc(this._sp, i.icon1.toNumber())
                : this.updateSprIcon(this._sp, i));
        }),
        (t.prototype.delDelay = function () {
          this.delayKey &&
            (a.clearDelay(this.delayKey), (this.delayKey = null));
        }),
        t
      );
    })(eui.ItemRenderer);
  t["default"] = _;
});
