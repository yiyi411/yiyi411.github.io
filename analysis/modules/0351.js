(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(76),
    n = i(154),
    a = i(0),
    r = i(52),
    s = i(352),
    l = i(353),
    u = i(354),
    _ = i(355),
    d = i(356),
    p = i(357),
    c = i(358),
    h = i(359),
    f = i(53),
    T = i(360),
    E = i(397),
    y = i(398),
    g = i(400),
    v = i(403),
    S = i(411),
    I = i(413),
    m = i(416),
    A = i(417),
    C = i(418),
    P = i(419),
    R = i(420),
    O = i(422),
    N = i(423),
    M = i(425),
    L = i(427),
    w = i(430),
    b = i(432),
    x = i(434),
    D = i(2),
    B = i(435),
    G = i(436),
    U = i(438),
    k = i(439),
    V = i(441),
    H = i(443),
    F = i(445),
    Y = i(447),
    W = i(448),
    K = i(450),
    j = i(452),
    q = i(454),
    X = i(456),
    z = (function (e) {
      function t() {
        return e.call(this, a.ModName.Login) || this;
      }
      return (
        __extends(t, e),
        (t.prototype.onRegister = function () {
          (e.prototype.onRegister.call(this), I.initProto(), E.initMsg());
        }),
        (t.prototype.initCmd = function () {
          (this.regCmd(r.LauncherEvent.CONNECT_LOGIN_SERVER, c["default"]),
            this.regCmd(r.LauncherEvent.CONNECT_GAME_SERVER, P["default"]),
            this.regCmd(r.LauncherEvent.ON_ACTIVATE, E.ProtoOnActivate),
            this.regCmd(r.LauncherEvent.ON_DEACTIVATE, E.ProtoOnDeactivate),
            this.regCmd(r.LauncherEvent.ON_RELOAD, U.OnReloadCmd),
            this.regCmd(n.ConnectEvent.ON_CONNECT_CREATE, s["default"]),
            this.regCmd(n.ConnectEvent.ON_CONNECT_LOST, u.ConnectLostCmd),
            this.regCmd(n.ConnectEvent.ON_CONNECT_ERROR, l.ConnectErrCmd),
            this.regCmd(f.LoginEvent.LOAD_GAME_RES, _["default"]),
            this.regCmd(f.LoginEvent.ON_ACCOUNT_LOGIN, d["default"]),
            this.regCmd(f.LoginEvent.TRY_RECONNECT, h.TryReConnectCmd),
            this.regCmd(f.LoginEvent.ON_ROLE_CREATE, p["default"]),
            this.regCmd(f.LoginEvent.ON_ROLE_LOGIN, R["default"]),
            this.regCmd(f.LoginEvent.ON_ROLE_LOGOUT, O["default"]),
            this.regCmd(f.LoginEvent.START_PING, A.StartPingCmd),
            this.regCmd(f.LoginEvent.STOP_PING, C.StopPingCmd),
            this.regCmd(D.SDK_EVENT.ON_SDK_LOGIN, x.OnSdkLoginCmd),
            this.regCmd(f.LoginEvent.SHOW_LOGIN, B.ShowLoginViewCmd),
            this.regCmd(D.SDK_EVENT.SHOW_CHOOSE_PAY, Y.ShowChoosePayCmd));
        }),
        (t.prototype.initModel = function () {
          (this.regProxy(a.ProxyType.Login, T["default"]),
            this.regProxy(a.ProxyType.Ping, m.PingProxy));
        }),
        (t.prototype.initView = function () {
          (this.regMdr(a.LoginViewType.Start, S["default"]),
            this.regMdr(a.LoginViewType.Loading, g.LoadingMdr),
            this.regMdr(a.LoginViewType.RoleList, L.RoleListMdr2),
            this.regMdr(a.LoginViewType.CreateRole, M.CreateRoleMdr2),
            this.regMdr(a.LoginViewType.Alert, y["default"]),
            this.regMdr(a.LoginViewType.ServerList, v["default"]),
            this.regMdr(a.LoginViewType.PrivacyPolicy, N.PrivacyPolicyMdr),
            this.regMdr(a.LoginViewType.AgeTips, w.AgeTipsMdr),
            this.regMdr(a.LoginViewType.RealNameAuth, G.RealNameAuthMdr),
            this.regMdr(a.LoginViewType.Notice, W.NoticeMdr),
            go.IOSMini
              ? this.regMdr(a.LoginViewType.Login, b.IOSLoginMdr)
              : go.isGood
                ? (this.regMdr(a.LoginViewType.Login, k.GoodLoginMdr),
                  this.regMdr(a.LoginViewType.ResetPsd, V.GoodResetPsdMdr),
                  this.regMdr(a.LoginViewType.InitPsd, H.GoodInitPsdMdr),
                  this.regMdr(a.LoginViewType.GoodPay, F.GoodPayMdr),
                  this.regMdr(
                    a.LoginViewType.LoginReBind,
                    q.GoodLoginReBindMdr,
                  ),
                  this.regMdr(
                    a.LoginViewType.LoginBindSafe,
                    X.GoodLoginBindSafeMdr,
                  ))
                : go.isGuopanNative &&
                  (this.regMdr(
                    a.LoginViewType.GuoPanLoginView,
                    K.GuaPanLoginMdr,
                  ),
                  this.regMdr(a.LoginViewType.GuoPanBindView, j["default"])));
        }),
        t
      );
    })(o["default"]);
  t["default"] = z;
});
