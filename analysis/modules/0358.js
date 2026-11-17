(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(60),
    n = i(0),
    a = i(27),
    r = i(52),
    s = i(53),
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        __extends(t, e),
        (t.prototype.exec = function (e) {
          if (
            (gg.loadVerbose(r.LOADING_VERBOSE_TYPE.START_CONNECT_ENTRY),
            !go.host && !go.port)
          )
            return void a["default"].loginConfirm(s.LoginTips.ServerUrlError);
          var t = this.getProxy(n.ProxyType.Login);
          ((t.data.isClientClose = !1),
            t.service.connectTo(go.host + ":" + go.port, s.ServerType.LOGIN));
        }),
        t
      );
    })(o["default"]);
  t["default"] = l;
});
