(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(60),
    n = i(0),
    a = i(52),
    r = i(3),
    s = i(27),
    l = i(11),
    u = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        __extends(t, e),
        (t.prototype.exec = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var e, t;
            return __generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    gg.loadVerbose(a.LOADING_VERBOSE_TYPE.GET_SERVER_INFO),
                    (e = this.getProxy(n.ProxyType.Login)),
                    [4, e.applyServerInfo()]
                  );
                case 1:
                  return (t = i.sent())
                    ? (gg.removeVerbose(),
                      go.isReConnect && go.reconnectId
                        ? this.sendNt(
                            a.LauncherEvent.CONNECT_GAME_SERVER,
                            go.reconnectId,
                          )
                        : r["default"].showView(
                            n.ModName.Login,
                            n.LoginViewType.Start,
                          ),
                      [2])
                    : (go.isReLogin && e.removeLoginCache(),
                      s["default"].loginConfirm(
                        "获取区服信息出错\n请尝试重新登录",
                        l["default"].alloc(gg, gg.reconnect, [0]),
                      ),
                      [2]);
              }
            });
          });
        }),
        t
      );
    })(o["default"]);
  t["default"] = u;
});
