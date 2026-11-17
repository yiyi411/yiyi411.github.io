(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(60),
    n = i(3),
    a = i(11),
    r = i(0),
    s = i(27),
    l = i(53),
    u = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        __extends(t, e),
        (t.prototype.exec = function (e) {
          gg.removeVerbose();
          var t = e.body,
            i = this.getProxy(r.ProxyType.Login),
            o = i.getServerInfoById(t);
          if (!o)
            return void s["default"].loginConfirm(
              "获取服务器信息出错\n请尝试重新登录",
              a["default"].alloc(gg, gg.reconnect, [0]),
            );
          if (o.state == l.ServerStatus.STOP)
            return (
              s["default"].loginConfirm("服务器：" + o.name + "，正在维护中"),
              (go.isReConnect = !1),
              (go.reconnectId = 0),
              void n["default"].showView(r.ModName.Login, r.LoginViewType.Start)
            );
          ((i.data.isClientClose = !0),
            i.service.isConnected() &&
              (console.info("isConnected"), i.service.close()),
            n["default"].hideView(r.ModName.Login, r.LoginViewType.Start));
          var u = go.wsurl || o.sockUrl;
          ((go.isWeixin || go.isQQgame) &&
            console.info(go.wsurl, o.sockUrl, JSON.stringify(o), "-----"),
            i.service.connectTo(u, l.ServerType.GAME));
        }),
        t
      );
    })(o["default"]);
  t["default"] = u;
});
