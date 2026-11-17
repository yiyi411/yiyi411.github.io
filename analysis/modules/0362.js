(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(46),
    n = i(17),
    a = i(11),
    r = i(363),
    s = (function (e) {
      function t() {
        var t = e.call(this) || this;
        return (t.init(), t);
      }
      return (
        __extends(t, e),
        (t.prototype.init = function () {
          var e = this;
          ((e.socket = new r.Socket()),
            (e.socket.onOpen = a["default"].alloc(e, e.onSocketOpen)),
            (e.socket.onClose = a["default"].alloc(e, e.onSocketClose)),
            (e.socket.onError = a["default"].alloc(e, e.onSocketError)),
            (e.socket.onMessage = a["default"].alloc(e, e.onMessage)));
        }),
        (t.prototype.connect = function (e) {
          (gg.traceProto("connect to:", e), this.socket.connect(e));
        }),
        Object.defineProperty(t.prototype, "isConnected", {
          get: function () {
            return this.socket.connected;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.disconnect = function () {
          if (this.socket)
            try {
              this.socket.close();
            } catch (e) {}
        }),
        (t.prototype.send = function (e) {
          var t = this;
          if (null != e && t.isConnected) {
            var i = gg.encodeMsg(e);
            i && t.socket.send(i.buffer);
          }
        }),
        (t.prototype.onMessage = function (e) {
          var t = this,
            i = gg.decodeMsg(e);
          i && null != t.onMsgReceive && t.onMsgReceive.exec([i]);
        }),
        (t.prototype.onSocketOpen = function () {
          (gg.traceProto("on socket open"),
            this.onCreated && this.onCreated.exec(this.type));
        }),
        (t.prototype.onSocketClose = function () {
          (gg.traceProto("on socket close"),
            this.onLost && this.onLost.exec(this.type));
        }),
        (t.prototype.onSocketError = function () {
          var e = this;
          (gg.traceProto("on socket error"),
            e.onError && e.onError.exec(this.type));
        }),
        (t.prototype.dispose = function () {
          var e = this;
          e.socket &&
            ((e.type = void 0),
            n["default"].release(e.onMsgReceive),
            (e.onMsgReceive = void 0),
            n["default"].release(e.onCreated),
            (e.onCreated = void 0),
            n["default"].release(e.onLost),
            (e.onLost = void 0),
            n["default"].release(e.onError),
            (e.onError = void 0),
            e.disconnect(),
            e.socket.dispose(),
            (e.socket = void 0));
        }),
        t
      );
    })(o.ObjBase);
  t["default"] = s;
});
