(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }), (t.Socket = void 0));
  var o = i(17),
    n = (function () {
      function e() {
        ((this._connected = !1), (this._connecting = !1));
      }
      return (
        Object.defineProperty(e.prototype, "connected", {
          get: function () {
            return this._connected;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.connect = function (e) {
          var t = this;
          if (!t._connected && !t._connecting) {
            ((t._url = e), (t._connecting = !0));
            try {
              t._createT = Date.now();
              var i = (t.socket = new WebSocket(e));
              ((i.binaryType = "arraybuffer"), t._bindEvent(i));
            } catch (o) {
              t.onWSCtorError(o);
            }
          }
        }),
        (e.prototype.close = function () {
          this._connected &&
            (this.releaseWS(), this.onClose && this.onClose.exec());
        }),
        (e.prototype.send = function (e) {
          this._connected && this.socket.send(e);
        }),
        (e.prototype._bindEvent = function (e) {
          var t = this;
          ((e.onopen = function (e) {
            return t.onWSOpen(e);
          }),
            (e.onclose = function (e) {
              return t.onWSClose(e);
            }),
            (e.onerror = function (e) {
              return t.onWSError(e);
            }),
            (e.onmessage = function (e) {
              return t.onWSMessage(e);
            }));
        }),
        (e.prototype.onWSCtorError = function (e) {
          var t = this;
          (console.error(e),
            t.releaseWS(),
            e && e.message && e.message.indexOf("url not in domain list") > -1,
            t.onError && t.onError.exec());
        }),
        (e.prototype.onWSOpen = function (e) {
          var t = this;
          (console.info("open connection cost:", Date.now() - t._createT),
            (t._connected = !0),
            (t._connecting = !1),
            t.onOpen && t.onOpen.exec());
        }),
        (e.prototype.onWSClose = function (e) {
          var t = this;
          (1e3 !== e.code &&
            1006 !== e.code &&
            console.error(
              "WebSocket close:",
              "code:" + e.code,
              "reason:" + e.reason,
            ),
            t.releaseWS(),
            t.onClose && t.onClose.exec());
        }),
        (e.prototype.onWSError = function (e) {
          var t = this;
          (t.socket.readyState !== WebSocket.CLOSED &&
            t.socket.readyState !== WebSocket.CLOSING &&
            console.error("WebSocket", t._url, "error:", e),
            t.releaseWS(),
            t.onError && t.onError.exec());
        }),
        (e.prototype.onWSMessage = function (e) {
          var t = this,
            i = e.data,
            o = i;
          ("string" == typeof i && (o = new TextEncoder().encode(i).buffer),
            t.onMessage && t.onMessage.exec(o));
        }),
        (e.prototype.releaseWS = function () {
          var e = this;
          ((e._connected = !1), (e._connecting = !1));
          var t = e.socket;
          if (
            ((e.socket = null),
            t &&
              ((t.onopen = t.onclose = t.onerror = t.onmessage = null),
              t.readyState !== WebSocket.CLOSED &&
                t.readyState !== WebSocket.CLOSING))
          )
            try {
              t.close();
            } catch (i) {}
        }),
        (e.prototype.dispose = function () {
          var e = this;
          (e.releaseWS(),
            (e.onMessage = o["default"].release(e.onMessage)),
            (e.onOpen = o["default"].release(e.onOpen)),
            (e.onClose = o["default"].release(e.onClose)),
            (e.onError = o["default"].release(e.onError)));
        }),
        e
      );
    })();
  t.Socket = n;
});
