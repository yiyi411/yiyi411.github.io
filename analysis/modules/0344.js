(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.Launcher = void 0),
    i(222));
  var o = i(174),
    n = i(3),
    a = i(16),
    r = i(34),
    s = i(11),
    l = i(87),
    u = i(176),
    _ = i(222),
    d = i(52),
    p = i(9),
    c = i(132),
    h = i(58),
    f = i(59),
    T = i(107),
    E = i(177),
    y = i(1611),
    g = i(1612),
    v = i(120);
  egret.sys.screenAdapter = {
    calculateStageSize: function (e, t, i, o, n) {
      var a = t,
        r = i,
        s = o,
        l = n,
        u = a / s || 0,
        _ = r / l || 0;
      return (
        u > _ ? (s = Math.round(a / _)) : (l = Math.round(r / u)),
        s % 2 != 0 && (s += 1),
        l % 2 != 0 && (l += 1),
        a % 2 != 0 && (a += 1),
        r % 2 != 0 && (r += 1),
        { stageWidth: s, stageHeight: l, displayWidth: a, displayHeight: r }
      );
    },
  };
  var S = (function (e) {
    function t() {
      var t = e.call(this) || this;
      return (t.addEventListener(egret.Event.ADDED_TO_STAGE, t.init, t), t);
    }
    return (
      __extends(t, e),
      (t.prototype.init = function () {
        (go.isMicroMessenger &&
          ((go.uiShowDelay = 500), (o["default"].Pool_Unused_T = 21e3)),
          go.Pool_Unused_T && (o["default"].Pool_Unused_T = go.Pool_Unused_T),
          Object.defineProperty(go, "openPay", {
            get: function () {
              return !gs.payDisabled;
            },
          }));
        var e = this;
        (a["default"].init(),
          (a["default"].needPause = !go.isPc),
          a["default"].setWorker(go.worker),
          a["default"].addUpdateItem(e, 15),
          (go.worker = null),
          u["default"](),
          _.initLong(),
          p.Layer.init(),
          v.loginStorage.init("login", "qwerzxcv"));
        var t = (go.gameStage = e.stage);
        (t.addEventListener(egret.Event.RESIZE, e.onResize, e),
          t.addEventListener(egret.Event.DEACTIVATE, e.onDeactivate, e),
          t.addEventListener(egret.Event.ACTIVATE, e.onActivate, e),
          e.onResize(),
          l["default"].ins.show(),
          (gg.initVerbose = function () {
            return e.initVerbose();
          }),
          (gg.initPayLoading = function () {
            return e.initPayLoading();
          }),
          (gg.onApiReady = function () {
            return e.onApiReady();
          }),
          go.apiReady && e.onApiReady(),
          gg.onGameReady && gg.onGameReady());
      }),
      (t.prototype.initVerbose = function () {
        gg.startProgress ||
          ((gg.startProgress = new y.StartLoadingView()),
          this.stage.addChild(gg.startProgress));
      }),
      (t.prototype.initPayLoading = function () {
        gg.payLoadingView || (gg.payLoadingView = new g.PayLoadingView());
      }),
      (t.prototype.onApiReady = function () {
        return go.isReload
          ? void n["default"].sendNt(d.LauncherEvent.ON_RELOAD)
          : void this.loadV();
      }),
      (t.prototype.loadV = function () {
        if (
          (gg.loadVerbose(d.LOADING_VERBOSE_TYPE.LOAD_VERSION), go.versionObj)
        )
          return (
            this.onVLoaded(go.versionObj, null),
            void (go.versionObj = null)
          );
        var e = this;
        if (
          ((go.res_version = gg.checkVersion(go.res_version)),
          "string" == typeof go.res_version)
        )
          return void c["default"].loadConfig(
            s["default"].alloc(this, this.run),
          );
        var t = f["default"].ins,
          i = go.targetPf || d.TARGET_PLATFORM.WEB,
          o = "v/" + i + "/" + go.res_version + ".json";
        t.load(
          o,
          s["default"].alloc(e, e.onVLoaded),
          h.LoadPri.Init,
          s["default"].alloc(null, function () {
            gAlert(d.LOADING_ERROR_MSG.LOAD_VERSION_CFG + go.res_version);
          }),
        );
      }),
      (t.prototype.onVLoaded = function (e, t) {
        var i = this;
        (e &&
          ((go.configList = e.cfg),
          (f["default"].ins.urlHash = e.url),
          (c["default"].resJson = e.res)),
          gg.loadVerbose(d.LOADING_VERBOSE_TYPE.PARSE_VERSION),
          (i._baseTotal = 2),
          (i._baseLoaded = 0),
          c["default"].loadConfig(s["default"].alloc(i, i.checkRes)),
          f["default"].ins.loadSheet(s["default"].alloc(i, i.checkRes)),
          r.delayCall(
            s["default"].alloc(null, function () {
              return f["default"].ins.unload(t);
            }),
          ));
      }),
      (t.prototype.checkRes = function () {
        (this._baseLoaded++, this._baseLoaded == this._baseTotal && this.run());
      }),
      (t.prototype.run = function () {
        (this.stage.addChild(p.Layer.ins),
          T["default"].ins.init(),
          E["default"].init(),
          n["default"].sendNt(d.LauncherEvent.CONNECT_LOGIN_SERVER));
      }),
      (t.prototype.onResize = function (e) {
        (l["default"].ins.updateBg(),
          p.Layer.ins.onResize(),
          n["default"].sendNt(d.LauncherEvent.ON_RESIZE));
      }),
      (t.prototype.onActivate = function (e) {
        (console.info("activate"),
          n["default"].sendNt(d.LauncherEvent.ON_ACTIVATE),
          T["default"].ins.onActivate());
      }),
      (t.prototype.onDeactivate = function (e) {
        (console.info("deactivate"),
          n["default"].sendNt(d.LauncherEvent.ON_DEACTIVATE),
          T["default"].ins.onDeActivate());
      }),
      (t.prototype.update = function (e) {
        var t = egret.getTimer();
        for (var i in _eventMap) {
          var o = _eventMap[i];
          o && t - o.time > 5e4 && ((o.list.length = 0), (_eventMap[i] = null));
        }
      }),
      t
    );
  })(egret.DisplayObject);
  ((t.Launcher = S), (window.Launcher = S));
});
