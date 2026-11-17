(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(60),
    n = i(3),
    a = i(0),
    r = i(111),
    s = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        __extends(t, e),
        (t.prototype.exec = function (e) {
          var t = this,
            i = e.body;
          return (
            console.info("load game res", i),
            i
              ? r["default"].isAllComplete
                ? void this.loadComplete(i)
                : (n["default"].showView(
                    a.ModName.Login,
                    a.LoginViewType.Loading,
                  ),
                  go.isReload
                    ? void console.log("isReload拦截了")
                    : void r["default"].startLoad(function () {
                        return t.loadComplete(i);
                      }))
              : void 0
          );
        }),
        (t.prototype.loadComplete = function (e) {
          n["default"].hideView(a.ModName.Login, a.LoginViewType.Loading);
          var t = this.getProxy(a.ProxyType.Login);
          t.loginRole(e);
        }),
        t
      );
    })(o["default"]);
  t["default"] = s;
});
