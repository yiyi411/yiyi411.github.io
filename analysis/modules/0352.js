(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(60),
    n = i(0),
    a = i(53),
    r = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        __extends(t, e),
        (t.prototype.exec = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i;
            return __generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = e.body),
                    console.info(a.ServerTypeName[t] + " connection create"),
                    (i = this.getProxy(n.ProxyType.Login)),
                    (i.data.tryingReconnect = !1),
                    t != a.ServerType.LOGIN
                      ? [3, 2]
                      : ((i.data.reConnectLoginCnt = 0),
                        (i.data.reSessionID = 0),
                        [4, i.onLoginServerCreate()])
                  );
                case 1:
                  return (
                    o.sent(),
                    this.sendNt(a.LoginEvent.START_PING),
                    [3, 4]
                  );
                case 2:
                  return t != a.ServerType.GAME
                    ? [3, 4]
                    : ((i.data.reConnectGameCnt = 0),
                      [4, i.onGameServerCreate()]);
                case 3:
                  (o.sent(),
                    this.sendNt(a.LoginEvent.START_PING),
                    (o.label = 4));
                case 4:
                  return [2];
              }
            });
          });
        }),
        t
      );
    })(o["default"]);
  t["default"] = r;
});
