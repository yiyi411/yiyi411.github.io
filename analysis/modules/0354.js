(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.ConnectLostCmd = void 0));
  var o = i(60),
    n = i(0),
    a = i(87),
    r = i(9),
    s = i(111),
    l = i(53),
    u = i(27),
    _ = i(52),
    d = i(3),
    p = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        __extends(t, e),
        (t.prototype.exec = function (e) {
          var t = e.body;
          (console.info(l.ServerTypeName[t] + " connection lost"),
            this.sendNt(l.LoginEvent.STOP_PING));
          try {
            d["default"].onConnectLost();
          } catch (i) {
            console.error(i);
          }
          var o = this.getProxy(n.ProxyType.Login);
          if (t == l.ServerType.LOGIN) {
            if (o.data.isClientClose) return;
            return (
              o.removeLoginCache(),
              o.data.reConnectLoginCnt < 3
                ? (o.data.reConnectLoginCnt++,
                  void this.sendNt(_.LauncherEvent.CONNECT_LOGIN_SERVER))
                : void u["default"].loginConfirm(
                    _.LOADING_ERROR_MSG.LOGIN_SERVER_DISABLE,
                    null,
                    null,
                    null,
                    !0,
                  )
            );
          }
          (s["default"].isAllComplete &&
            (a["default"].ins.show(),
            r.Layer.hideAllMdr(),
            this.sendNt(l.LoginEvent.ON_ROLE_LOGOUT)),
            this.sendNt(l.LoginEvent.TRY_RECONNECT));
        }),
        t
      );
    })(o["default"]);
  t.ConnectLostCmd = p;
});
