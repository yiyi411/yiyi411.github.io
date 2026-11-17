(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.TryReConnectCmd = void 0));
  var o,
    n = i(60),
    a = i(11),
    r = i(0),
    s = i(27),
    l = i(53);
  !(function (e) {
    ((e[(e.BACKTOLIST = 1)] = "BACKTOLIST"),
      (e[(e.BACKTOLOGINLIST = 2)] = "BACKTOLOGINLIST"),
      (e[(e.BACKTOLOGIN = 3)] = "BACKTOLOGIN"),
      (e[(e.KICKTOLIST = 4)] = "KICKTOLIST"),
      (e[(e.KICKTOLOGIN = 5)] = "KICKTOLOGIN"),
      (e[(e.SELFKICK = 6)] = "SELFKICK"),
      (e[(e.SESSIONCLOSE = 7)] = "SESSIONCLOSE"));
  })(o || (o = {}));
  var u = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      __extends(t, e),
      (t.prototype.exec = function (e) {
        var t = this,
          i = this.getProxy(r.ProxyType.Login);
        if (
          !i.data.tryingReconnect &&
          i.data.isActive &&
          !i.service.isConnected()
        ) {
          var n = i.data.logoutType;
          if (
            (console.info(n, "logoutType----"),
            n == o.BACKTOLOGIN || n == o.KICKTOLOGIN)
          )
            return void this.backToLogin();
          if (n == o.SELFKICK)
            return (
              gs.onRepeatLogin && gs.onRepeatLogin(),
              void s["default"].loginConfirm(
                "\n账号已在其他设备登录",
                a["default"].alloc(null, function () {
                  (i.removeLoginCache(), t.backToLogin());
                }),
                null,
                !1,
              )
            );
          if (i.data.reConnectGameCnt >= l.ReconnectCntMax)
            return void s["default"].loginConfirm(
              "服务器：" + go.serverName + "\n无法连接",
              a["default"].alloc(this, this.backToLogin, null, !0),
            );
          (i.service.close(),
            i.data.reConnectGameCnt++,
            (i.data.tryingReconnect = !0),
            gg.reconnect(go.serverId || 0));
        }
      }),
      (t.prototype.backToLogin = function () {
        gg.reconnect(0);
      }),
      t
    );
  })(n["default"]);
  t.TryReConnectCmd = u;
});
