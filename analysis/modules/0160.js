(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.LineServer = t.AreaServer = t.LoginModel = t.GdLoginMode = void 0));
  var o;
  !(function (e) {
    ((e[(e.Account = -1)] = "Account"),
      (e[(e.Psd = 0)] = "Psd"),
      (e[(e.Code = 1)] = "Code"),
      (e[(e.Resist = 2)] = "Resist"));
  })((o = t.GdLoginMode || (t.GdLoginMode = {})));
  var n = (function () {
    function e() {
      ((this.loginSetting = 0),
        (this.rememberPsd = !1),
        (this.isActive = !0),
        (this.isClientClose = !1),
        (this.reConnectLoginCnt = 0),
        (this.reConnectGameCnt = 0),
        (this.allPlayerList = []),
        (this.lastRoleId = 0),
        (this.loginMode = o.Psd),
        (this.isRegist = !1));
    }
    return (
      Object.defineProperty(e.prototype, "phone", {
        get: function () {
          return this.phoneArea + this.phoneNum;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "sphone", {
        get: function () {
          return this.sphoneArea + this.sphoneNum;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.clean = function () {}),
      e
    );
  })();
  t.LoginModel = n;
  var a = (function () {
    function e() {}
    return (
      (e.fromAreaBytes = function (t) {
        var i = new e();
        return (
          (i.id = t.getShort()),
          (i.name = t.getString()),
          (i.actorCount = t.getByte()),
          (i.state = t.getByte()),
          (i.stateStr = t.getString()),
          (i.tag = t.getString()),
          (i.isNeedSpecialCode = t.getBoolean()),
          (i.line = []),
          i
        );
      }),
      e
    );
  })();
  t.AreaServer = a;
  var r = (function () {
    function e() {}
    return (
      (e.fromLineBytes = function (t) {
        var i = new e();
        return (
          (i.id = t.getShort()),
          (i.name = t.getString()),
          (i.sockUrl = t.getString()),
          (i.wapSocketUrl = t.getString()),
          (i.httpUrl = t.getString()),
          (i.state = t.getByte()),
          (i.stateStr = t.getString()),
          i
        );
      }),
      e
    );
  })();
  t.LineServer = r;
});
