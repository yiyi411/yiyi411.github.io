(function (e, t, i) {
  "use strict";
  function o() {
    n ||
      ((n = new T()),
      (gg.onMsg = function (e) {
        return n.onMsg(e);
      }),
      (gg.encodeMsg = function (e) {
        return n.encodeMsg(e);
      }),
      (gg.decodeMsg = function (e) {
        return n.decodeMsg(e);
      }),
      (gg.traceProto = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return n.traceProto(e);
      }));
  }
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.ProtoOnDeactivate = t.ProtoOnActivate = t.initMsg = void 0));
  var n,
    a = i(60),
    r = i(3),
    s = i(133),
    l = i(22),
    u = i(46),
    _ = i(16),
    d = i(0),
    p = i(53);
  t.initMsg = o;
  var c = 0,
    h = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        __extends(t, e),
        (t.prototype.exec = function (e) {
          var t = this.getProxy(d.ProxyType.Login);
          ((t.data.isActive = !0),
            (t.data.reConnectGameCnt = 0),
            (t.data.reConnectLoginCnt = 0),
            c &&
              u.now() - c >= p.LOGIN_CACHE_TIME_OUT &&
              ((t.data.reSessionID = 0),
              (go.serverId = go.reconnectId = 0),
              (go.isReConnect = !1)),
            this.sendNt(p.LoginEvent.TRY_RECONNECT));
        }),
        t
      );
    })(a["default"]);
  t.ProtoOnActivate = h;
  var f = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      __extends(t, e),
      (t.prototype.exec = function (e) {
        var t = this.getProxy(d.ProxyType.Login);
        ((t.data.isActive = !1), (c = u.now()), n.onDeactivate());
      }),
      t
    );
  })(a["default"]);
  t.ProtoOnDeactivate = f;
  var T = (function (e) {
    function t() {
      var t = e.call(this) || this;
      return ((t._msgs = []), _["default"].addUpdateItem(t, 15), t);
    }
    return (
      __extends(t, e),
      (t.prototype.onDeactivate = function () {
        for (; this._msgs.length > 0;) {
          var e = this._msgs.shift();
          this.sendProto(e);
        }
      }),
      (t.prototype.encodeMsg = function (e) {
        if ("object" != typeof e) return null;
        var t = e.type;
        if (isNaN(t)) return null;
        if (t > 0) {
          var i = e.bytes,
            o = new Uint8Array(i.length + 4),
            n = new DataView(o.buffer);
          return (n.setUint16(0, o.length), n.setUint16(2, t), o.set(i, 4), o);
        }
        return null;
      }),
      (t.prototype.decodeMsg = function (e) {
        var t = new DataView(e),
          i = (t.getUint16(0), t.getUint16(2)),
          o = new Uint8Array(e, 4),
          n = new l.Message(i, o);
        return n;
      }),
      (t.prototype.onMsg = function (e) {
        if (e) {
          var t = r["default"].getProxy(d.ModName.Login, d.ProxyType.Login);
          return t.data.isActive
            ? void (this._msgs[this._msgs.length] = e)
            : void this.sendProto(e);
        }
      }),
      (t.prototype.traceProto = function (e) {
        console.log.apply(console, e);
      }),
      (t.prototype.update = function (e) {
        for (var t = this, i = t._msgs, o = egret.getTimer(); i.length > 0;) {
          var n = i.shift();
          this.sendProto(n);
          var a = egret.getTimer();
          if (a - o > 16) break;
        }
      }),
      (t.prototype.sendProto = function (e) {
        this.sendNt(u.getProtoName(e.type), e);
      }),
      t
    );
  })(s["default"]);
});
