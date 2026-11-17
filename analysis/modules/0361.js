(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(46),
    a = i(11),
    r = i(362),
    s = i(154),
    l = (function (e) {
      function t() {
        var t = e.call(this) || this;
        return ((t._recvTick = 0), t.init(), t);
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, "type", {
          get: function () {
            var e;
            return null === (e = this._connection) || void 0 === e
              ? void 0
              : e.type;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.init = function () {
          void 0 == gg.onMsg &&
            (gg.onMsg = function (e) {
              o["default"].sendNt(n.getProtoName(e), e);
            });
        }),
        (t.prototype.connectTo = function (e, t) {
          var i = this;
          (i._connection && (i._connection.dispose(), (i._connection = void 0)),
            (i._connection = new r["default"]()),
            (i._connection.type = t),
            (i._connection.onMsgReceive = a["default"].alloc(
              i,
              i.onMsgReceive,
            )),
            (i._connection.onCreated = a["default"].alloc(i, i.onCreate)),
            (i._connection.onLost = a["default"].alloc(i, i.onLost)),
            (i._connection.onError = a["default"].alloc(i, i.onError)),
            i._connection.connect(e));
        }),
        (t.prototype.isConnected = function () {
          return this._connection && this._connection.isConnected
            ? 36e4 > n.now() - this._recvTick
            : !1;
        }),
        (t.prototype.close = function () {
          void 0 !== this._connection && this._connection.disconnect();
        }),
        (t.prototype.onCreate = function (e) {
          o["default"].sendNt(s.ConnectEvent.ON_CONNECT_CREATE, e);
        }),
        (t.prototype.onLost = function (e) {
          o["default"].sendNt(s.ConnectEvent.ON_CONNECT_LOST, e);
        }),
        (t.prototype.onError = function (e) {
          o["default"].sendNt(s.ConnectEvent.ON_CONNECT_ERROR, e);
        }),
        (t.prototype.onMsgReceive = function (e) {
          ((this._recvTick = n.now()), this.procProto(e));
        }),
        (t.prototype.procProto = function (e) {
          gg.onMsg(e);
        }),
        (t.prototype.onProto = function (e, t) {
          o["default"].onProto(n.getProtoName(e), t);
        }),
        (t.prototype.offProto = function (e) {
          o["default"].offProto(n.getProtoName(e));
        }),
        (t.prototype.offProtoByHandler = function (e, t) {
          o["default"].offProtoByHandler(n.getProtoName(e), t);
        }),
        (t.prototype.onNt = function (e, t, i) {
          o["default"].onNt(n.getProtoName(e), t, i);
        }),
        (t.prototype.offNt = function (e, t, i) {
          o["default"].offNt(n.getProtoName(e), t, i);
        }),
        (t.prototype.sendProto = function (e) {
          this._connection.send(e);
        }),
        t
      );
    })(n.ObjBase);
  t["default"] = l;
});
