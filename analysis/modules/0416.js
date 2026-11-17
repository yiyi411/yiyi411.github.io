(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.PingProxy = void 0));
  var o = i(16),
    n = i(37),
    a = i(22),
    r = i(19),
    s = i(2),
    l = i(120),
    u = i(53),
    _ = i(3),
    d = i(0),
    p = 3e4,
    c = 1e4,
    h = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return ((t.lastSyncTick = 0), (t.lastPingTick = 0), t);
      }
      return (
        __extends(t, e),
        (t.prototype.initialize = function () {
          (this.onProto(r["default"].CG_SYSTEM_TIME, this.onSyncTime, this),
            this.onProto(r["default"].CG_SYSTEM_HEART, this.onPing, this));
        }),
        (t.prototype.onSyncTime = function (e) {
          var t = e.body,
            i = t.getLong().toNumber();
          (o["default"].setServerTime(i), logger.clock.setSt(i));
          var n = _["default"].getProxy(d.ModName.Login, d.ProxyType.Login);
          n.data.ukey && l.loginStorage.set(u.LocalStorageKey.ONLINE_TIME, i);
          var a = this._lastDate;
          if (!a) return void (this._lastDate = new Date(i));
          var r = a.getDate();
          a.setTime(i);
          var p = a.getDate();
          p > r && this.sendNt(s.MiscEvent.ON_NEW_DAY);
        }),
        (t.prototype.onPing = function (e) {
          this.lastPingTick = o["default"].timer.time;
        }),
        (t.prototype.ping = function () {
          this.sendProto(new a.Message(r["default"].CG_SYSTEM_HEART));
        }),
        (t.prototype.syncTime = function () {
          this.lastSyncTick = o["default"].timer.time;
          var e = new a.Message(r["default"].CG_SYSTEM_TIME);
          this.sendProto(e);
        }),
        (t.prototype.startPing = function () {
          (this.syncTime(), this.ping(), o["default"].addUpdateItem(this, 1e3));
        }),
        (t.prototype.stopPing = function () {
          o["default"].removeUpdateItem(this);
        }),
        (t.prototype.update = function (e) {
          (e.time - this.lastSyncTick > p && this.syncTime(),
            e.time - this.lastPingTick > c && this.ping());
        }),
        t
      );
    })(n["default"]);
  t.PingProxy = h;
});
