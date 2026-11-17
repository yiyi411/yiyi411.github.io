(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.IOSLoginMdr = void 0));
  var o = i(79),
    n = i(9),
    a = i(0),
    r = i(87),
    s = i(53),
    l = i(34),
    u = i(11),
    _ = i(111),
    d = i(433),
    p = i(27),
    c = i(10),
    h = (function (e) {
      function t() {
        var t = e.call(this, n.Layer.main) || this;
        return ((t._view = t.mark("_view", d.IOSLoginView)), t);
      }
      return (
        __extends(t, e),
        (t.prototype.onInit = function () {
          this._proxy = this.getProxy(a.ProxyType.Login);
        }),
        (t.prototype.onShow = function () {
          (gg.removeVerbose(),
            this.onResize(),
            r["default"].ins.show(),
            this.updatePrivacyPolicy(),
            this._view.grpProto.visible &&
              !this._view.imgProtoAgree.visible &&
              this.onTapProto(),
            l.delayCall(
              u["default"].alloc(null, function () {
                _["default"].startLoad();
              }),
            ));
        }),
        (t.prototype.onResize = function () {
          var e = this._view;
          e.x = (n.Layer.main.width - e.width) >> 1;
          var t = 0 | go.mainTop,
            i = 0 | go.mainBottom;
          ((e.height = n.Layer.main.height + t + i), (e.y = -t));
        }),
        (t.prototype.updatePrivacyPolicy = function () {
          var e = this._view;
          if (
            ((e.grpProto.visible = !!go.isShowPolicy || go.IOSMini),
            e.grpProto.visible)
          ) {
            var t = this._proxy.getAgreePolicy();
            e.imgProtoAgree.visible = t;
            var i = t ? "我已阅读并同意" : "请先阅读并同意";
            e.labProto.textFlow = new egret.HtmlTextParser().parse(
              "<font>" +
                i +
                "</font><a href='event:user_agreement'><font color='0xf4bc75' size='24' ><u><i>《用户服务协议》</i></u></font></a><font>和</font><a href='event:policy'><font color='0xf4bc75' size='24' ><u><i>《隐私协议》</i></u></font></a>",
            );
          }
        }),
        (t.prototype.addListeners = function () {
          var e = this.onEgret.bind(this),
            t = this;
          (e(t._view.labProto, egret.TextEvent.LINK, t.onTapProto),
            e(t._view.imgAgreeBg, egret.TouchEvent.TOUCH_TAP, t.onTapAgree),
            e(
              t._view.btnAppleLogin,
              egret.TouchEvent.TOUCH_TAP,
              t.onTapAppleLogin,
            ),
            t.onNt(
              s.LoginEvent.UPDATE_PRIVACY_POLICY,
              t.updatePrivacyPolicy,
              t,
            ),
            go.isIOSNative &&
              e(
                t._view.btnAccountLogin,
                egret.TouchEvent.TOUCH_TAP,
                t.onTapAccountLogin,
              ));
        }),
        (t.prototype.onTapAppleLogin = function () {
          this.startLogin("apple");
        }),
        (t.prototype.onTapAccountLogin = function () {
          this.startLogin("login");
        }),
        (t.prototype.startLogin = function (e) {
          var t = this._view;
          return t.grpProto.visible && !t.imgProtoAgree.visible
            ? void p["default"].loginConfirm(
                c.GameText.POLICY_0,
                u["default"].alloc(this, this.onTapProto),
              )
            : void gs.sdkLogin(e);
        }),
        (t.prototype.onTapAgree = function () {
          var e = this._proxy.getAgreePolicy();
          this._proxy.setPolicy(!e);
        }),
        (t.prototype.onTapProto = function (e) {
          var t = e && e.text;
          this.showView(a.LoginViewType.PrivacyPolicy, "policy" == t ? 1 : 0);
        }),
        t
      );
    })(o["default"]);
  t.IOSLoginMdr = h;
});
