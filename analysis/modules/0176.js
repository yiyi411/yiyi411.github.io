(function (e, t, i) {
  "use strict";
  function o() {
    var e;
    ((e = egret.Texture.prototype),
      (e.onRelease = function () {
        (this.dispose(), (this.disposeBitmapData = !0));
      }),
      (e = egret.Rectangle.prototype),
      (e.onRelease = function () {
        this.setTo(0, 0, 0, 0);
      }),
      (e = egret.Point.prototype),
      (e.onRelease = function () {
        this.setTo(0, 0);
      }),
      (egret.Event.create = function (e, t, i, o) {
        var n = egret.getQualifiedClassName(e),
          a = _eventMap[n];
        a && (a.time = egret.getTimer());
        var r;
        return (
          a && a.list && 0 < a.list.length
            ? ((r = a.list.pop()),
              (r.$type = t),
              (r.$bubbles = !!i),
              (r.$cancelable = !!o),
              (r.$isDefaultPrevented = !1),
              (r.$isPropagationStopped = !1),
              (r.$isPropagationImmediateStopped = !1),
              (r.$eventPhase = 2))
            : (r = new e(t, i, o)),
          r
        );
      }),
      (egret.Event.release = function (e) {
        e.clean();
        var t = egret.getQualifiedClassName(e),
          i = _eventMap[t];
        return i
          ? void (i.list.indexOf(e) < 0 && (i.list[i.list.length] = e))
          : void (_eventMap[t] = { time: egret.getTimer(), list: [e] });
      }));
  }
  function n() {
    var e;
    ((e = egret.ByteArray.prototype),
      (e.decodeUTF8 = function (e) {
        return new TextDecoder().decode(e);
      }),
      (e.encodeUTF8 = function (e) {
        return new TextEncoder().encode(e);
      }));
  }
  function a() {
    var e = egret.TextField.prototype,
      t = e.$setText;
    e.$setText = function (e) {
      var i = this;
      return (
        go.$language == _.LANGUAGE.zh_HK && (e = u.traditionalized(e)),
        t.call(i, e)
      );
    };
    var i = "textFlow",
      o = Object.getOwnPropertyDescriptor(e, i),
      n = o.set;
    ((o.set = function (e) {
      var t = this;
      if (go.$language == _.LANGUAGE.zh_HK && e && e.length)
        for (var i = 0; i < e.length; i++) {
          var o = e[i];
          o.text = u.traditionalized(o.text);
        }
      n.call(t, e);
    }),
      Object.defineProperty(e, i, o));
  }
  function r() {
    ((egret.Bitmap.defaultSmoothing = !1),
      (egret.TextField.default_fontFamily = "SimHei"),
      (egret.TextField.default_size = 24),
      o(),
      n(),
      a());
  }
  function s(e) {
    if (e.$displayList) {
      var t = e.$displayList;
      ((e.cacheAsBitmap = !1),
        (t.root = null),
        t.renderBuffer.clear(),
        (t.renderBuffer = null),
        t.$renderNode.cleanBeforeRender(),
        (t.$renderNode = null));
      var i = t.bitmapData;
      ((t.bitmapData = null), i && i.$dispose());
    }
  }
  function l(e) {
    go.isIOS || (e.cacheAsBitmap = !!go.cacheAsBitmap);
    var t = e.$displayList;
    if (t) {
      var i = t.$getRenderNode();
      i && (i.smoothing = egret.Bitmap.defaultSmoothing);
    }
  }
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.setCacheAsBitmap = t.clearDisplayList = void 0));
  var u = i(226),
    _ = i(52);
  ("undefined" == typeof _eventMap && (window._eventMap = Object.create(null)),
    (t["default"] = r),
    (t.clearDisplayList = s),
    (t.setCacheAsBitmap = l));
});
