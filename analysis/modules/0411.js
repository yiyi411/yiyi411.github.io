(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(79),
    a = i(34),
    r = i(11),
    s = i(0),
    l = i(127),
    u = i(87),
    _ = i(52),
    d = i(9),
    p = i(111),
    c = i(107),
    h = i(53),
    f = i(412),
    T = i(27),
    E = i(10),
    y = i(120),
    g = i(154),
    v = i(2),
    S = i(21),
    I = (function (e) {
      function t() {
        var t = e.call(this, d.Layer.main) || this;
        return (
          (t._view = t.mark("_view", f["default"])),
          (t._tapTick = 0),
          (t._delayId = 0),
          (t._count = 0),
          t
        );
      }
      return (
        __extends(t, e),
        (t.prototype.onInit = function () {
          this._proxy = this.getProxy(s.ProxyType.Login);
        }),
        (t.prototype.onShow = function () {
          (this.onResize(),
            gg.removeVerbose(),
            c["default"].ins.playMusic(l.SoundMusic.MAIN),
            u["default"].ins.show());
          var e = this._proxy,
            t = y.loginStorage.getNumber(h.LocalStorageKey.LAST_SERVER_ID),
            i = e.getServerInfoById(0 | +t);
          (e.data.delAccountFlag && this.onTapDelAccount(),
            (e.data.delAccountFlag = !1),
            this.updateView(i),
            go.IOSMini && this._proxy.setPolicy(!0),
            this.updatePrivacyPolicy(),
            this._view.grpProto.visible &&
              !this._view.imgProtoAgree.visible &&
              this.onTapProto(),
            e.needIdAuth
              ? go.isFlash && 0 === go.is_adult
                ? gs.aldultIdAuth()
                : o["default"].showView(
                    s.ModName.Login,
                    s.LoginViewType.RealNameAuth,
                  )
              : e.needSetPsd &&
                o["default"].showView(
                  s.ModName.Login,
                  s.LoginViewType.InitPsd,
                ));
          var n = localStorage.getItem(h.LocalStorageKey.loginNotice),
            _ = S["default"].getTimeDay();
          (n != _ &&
            go.isGood &&
            o["default"].showView(s.ModName.Login, s.LoginViewType.Notice),
            go.isGood &&
              e.needBindPhone &&
              o["default"].showView(
                s.ModName.Login,
                s.LoginViewType.LoginBindSafe,
              ),
            (this._delayId = a.delayCall(
              r["default"].alloc(this, function () {
                (console.log("start preload"), p["default"].startLoad());
              }),
              200,
            )));
        }),
        (t.prototype.updatePrivacyPolicy = function () {
          var e = this._view;
          if (((e.grpProto.visible = !!go.isShowPolicy), e.grpProto.visible)) {
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
        (t.prototype.onHide = function () {
          (a.clearDelay(this._delayId),
            (this._delayId = 0),
            (this._tapTick = 0),
            e.prototype.onHide.call(this));
          var t = document.getElementById("loading");
          t && t.parentNode.removeChild(t);
        }),
        (t.prototype.addListeners = function () {
          var e = this.onEgret.bind(this),
            t = this;
          (e(t._view.btnStart, egret.TouchEvent.TOUCH_TAP, t.tapStart),
            e(t._view.imgStart, egret.TouchEvent.TOUCH_TAP, t.tapStart),
            e(t._view.labServer, egret.TouchEvent.TOUCH_TAP, t.tapSelect),
            e(t._view.btnSelectServer, egret.TouchEvent.TOUCH_TAP, t.onServer),
            e(t._view.labProto, egret.TextEvent.LINK, t.onTapProto),
            e(t._view.labVerText, egret.TextEvent.LINK, t.onTapVerText),
            e(t._view.imgAgreeBg, egret.TouchEvent.TOUCH_TAP, t.onTapAgree),
            e(t._view.btnAgeTips, egret.TouchEvent.TOUCH_TAP, t.onTapAgeTips),
            e(
              t._view.btnDelAccount,
              egret.TouchEvent.TOUCH_TAP,
              t.onTapDelAccount,
            ),
            e(t._view.btnLogout, egret.TouchEvent.TOUCH_TAP, t.onTapLogout),
            e(t._view.btnNotice, egret.TouchEvent.TOUCH_TAP, t.onTapNotice),
            t.onNt(
              h.LoginEvent.UPDATE_CURRENT_SERVER,
              t.updateCurrentServer,
              t,
            ),
            t.onNt(_.LauncherEvent.ON_RESIZE, t.onResize, t),
            t.onNt(
              h.LoginEvent.UPDATE_PRIVACY_POLICY,
              t.updatePrivacyPolicy,
              t,
            ),
            t.onNt(g.ConnectEvent.ON_CONNECT_LOST, t.hide, t),
            t.onNt(v.SDK_EVENT.REAL_NAME_AUTH, t.realNameReq, t));
        }),
        (t.prototype.realNameReq = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, n;
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    (t = this.getProxy(s.ProxyType.Login)),
                    (i = e.body),
                    [4, t.realNameAuth(i.card, i.name)]
                  );
                case 1:
                  return (
                    (n = a.sent()),
                    n &&
                      (this.hide(),
                      t.needSetPsd &&
                        o["default"].showView(
                          s.ModName.Login,
                          s.LoginViewType.InitPsd,
                        )),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.onTapNotice = function () {
          o["default"].showView(s.ModName.Login, s.LoginViewType.Notice);
        }),
        (t.prototype.onTapLogout = function () {
          (this._proxy.removeLoginCache(), this.hide(), gg.reconnect(0));
        }),
        (t.prototype.onTapDelAccount = function () {
          var e = E.GameText.CONFIRM_DEL_ACCOUNT;
          T["default"].loginConfirm(
            e,
            r["default"].alloc(this._proxy, this._proxy.deleteAccount),
            "账号注销",
            !0,
          );
        }),
        (t.prototype.onTapAgeTips = function () {
          o["default"].showView(s.ModName.Login, s.LoginViewType.AgeTips);
        }),
        (t.prototype.onTapAgree = function () {
          var e = this._proxy.getAgreePolicy();
          this._proxy.setPolicy(!e);
        }),
        (t.prototype.onTapProto = function (e) {
          var t = e && e.text;
          this.showView(s.LoginViewType.PrivacyPolicy, "policy" == t ? 1 : 0);
        }),
        (t.prototype.onTapVerText = function () {
          window.open("https://beian.miit.gov.cn/#/Integrated/index");
        }),
        (t.prototype.onResize = function () {
          var e = this._view;
          e.x = (d.Layer.main.width - e.width) >> 1;
          var t = 0 | go.mainTop,
            i = 0 | go.mainBottom;
          ((e.height = d.Layer.main.height + t + i), (e.y = -t));
          var o = e.grpStart;
          o.y = e.height - o.height - (go.isShowPolicy ? 90 : 50) - 60;
        }),
        (t.prototype.onTap = function () {
          (this._count++,
            this._count >= 20 &&
              gs.enterDgb &&
              T["default"].loginConfirm(
                "是否进入灰度服？",
                r["default"].alloc(null, function () {
                  gs.enterDgb();
                }),
                void 0,
                !0,
              ));
        }),
        (t.prototype.onServer = function () {
          o["default"].showView(s.ModName.Login, s.LoginViewType.ServerList);
        }),
        (t.prototype.updateCurrentServer = function (e) {
          this.updateView(e.body);
        }),
        (t.prototype.updateView = function (e) {
          e &&
            ((this._server = e),
            (this._proxy.server = this._server),
            (this._view.labServer.text = "" + e.name),
            (this._view.labServerState.text = "[" + e.stateStr + "]"),
            (this._view.imgServerState.source = h.BACK_ICONS[e.state]),
            (this._view.labServerState.textColor = h.BACK_COLOR[e.state]),
            (this._view.labServerState.strokeColor =
              h.BACK_STROCK_COLOR[e.state]));
        }),
        (t.prototype.tapStart = function (e) {
          var t = this._view;
          if (t.grpProto.visible && !t.imgProtoAgree.visible)
            return void T["default"].loginConfirm(
              E.GameText.POLICY_0,
              r["default"].alloc(this, this.onTapProto),
            );
          var i = this._server;
          if (i) {
            if (i.state == h.ServerStatus.STOP)
              return void T["default"].loginConfirm(
                "服务器：" + i.name + "，正在维护中",
              );
            if (this._proxy.needIdAuth)
              return void o["default"].showView(
                s.ModName.Login,
                s.LoginViewType.RealNameAuth,
              );
            var n = egret.getTimer();
            (0 == this._tapTick || n - this._tapTick >= 2e3) &&
              ((this._tapTick = n),
              (go.serverId = i.id),
              (go.serverName = i.name),
              gs.report && gs.report(_.REPORT_TYPE.SELECT_SERVER),
              this.sendNt(_.LauncherEvent.CONNECT_GAME_SERVER, go.serverId),
              y.loginStorage.set(
                h.LocalStorageKey.LAST_SERVER_ID,
                go.serverId,
              ));
          }
        }),
        (t.prototype.tapSelect = function (e) {
          e.stopImmediatePropagation();
        }),
        t
      );
    })(n["default"]);
  t["default"] = I;
});
