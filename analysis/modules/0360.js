(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(224),
    n = i(22),
    a = i(52),
    r = i(37),
    s = i(41),
    l = i(27),
    u = i(4),
    _ = i(12),
    d = i(53),
    p = i(19),
    c = i(160),
    h = i(394),
    f = i(21),
    T = i(16),
    E = i(18),
    y = i(35),
    g = i(1),
    v = i(10),
    S = i(11),
    I = i(101),
    m = i(5),
    A = i(40),
    C = i(8),
    P = i(3),
    R = i(0),
    O = i(257),
    N = i(15),
    M = i(120),
    L = pb.p8PfType,
    w = pb.osType,
    b = 350655,
    x = 1001,
    D = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.isSendCreate = !1),
          (t.needIdAuth = !1),
          (t.needSetPsd = !1),
          (t.needBindPhone = !1),
          t
        );
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, "data", {
          get: function () {
            return this._data;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "server", {
          get: function () {
            return this._server;
          },
          set: function (e) {
            this._server = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.onConnectLost = function () {
          ((this.isSendCreate = !1), e.prototype.onConnectLost.call(this));
        }),
        (t.prototype.initialize = function () {
          e.prototype.initialize.call(this);
          var t = this;
          ((t._data = new c.LoginModel()),
            t.onProto(p["default"].LC_PLAYER_LOGIN, t.onWebLogin, t),
            t.onProto(p["default"].CG_LOGIN_ACTORLIST, t.onRoleList, t),
            t.onProto(p["default"].CG_LOGIN_ACTORENTER, t.onRoleLogin, t),
            t.onProto(p["default"].CG_LOGIN_ACTORLEAVE, t.onRoleLogout, t),
            t.onProto(p["default"].CG_LOGIN_CREATEACTOR, t.onCreateRole, t),
            t.onProto(
              p["default"].CG_GUIDE_STATUE_RANDOM_NAME,
              t.randomNameCallBack,
              t,
            ),
            t.onProto(pb.EUserProtocol.S2C_WXMP_AUTOLOGIN, t.onAutoLogin, t),
            t.onProto(pb.EUserProtocol.S2C_QQ_AUTOLOGIN, t.onAutoLogin, t),
            t.onProto(
              pb.EUserProtocol.S2C_KUAISHOU_AUTOLOGIN,
              t.onAutoLogin,
              t,
            ),
            t.onProto(
              pb.EUserProtocol.S2C_BYTEDANCE_AUTOLOGIN,
              t.onAutoLogin,
              t,
            ),
            t.onProto(pb.EUserProtocol.S2C_LEDOU_LOGIN, t.onNativeLogin, t),
            t.onProto(
              pb.EUserProtocol.S2C_PLAY800_AUTOLOGIN,
              t.onP8GameLogin,
              t,
            ),
            t.onProto(pb.EUserProtocol.S2C_IOSAPP_LOGIN, t.onIOSNativeLogin),
            t.onProto(
              pb.EUserProtocol.S2C_IOSAPP_LOGIN_OFFICIAL,
              t.onIOSNativeLogin,
            ),
            t.onProto(pb.EUserProtocol.S2C_HKT_AUTOLOGIN, t.onHKTLogin),
            t.onProto(
              pb.EUserProtocol.S2C_QQGAMECENTER_AUTOLOGIN,
              t.onQQHallLogin,
            ),
            t.onProto(pb.EUserProtocol.S2C_4399_LOGIN, t.onH54399Login),
            t.onProto(
              pb.EUserProtocol.S2C_4399_GAME_BOX_LOGIN,
              t.onGame4399Login,
            ),
            t.onProto(pb.EUserProtocol.S2C_HJYGAME_LOGIN, t.onHJYLogin),
            t.onProto(pb.EUserProtocol.S2C_YOUXIYOU_LOGIN, t.onYXYLogin),
            t.onProto(pb.EUserProtocol.S2C_QUNHEI_LOGIN, t.onQunheiLogin),
            t.onProto(pb.EUserProtocol.S2C_GUOPAN_LOGIN, t.onGuopanLogin),
            t.onProto(pb.EUserProtocol.S2C_GAMERSKY_LOGIN, t.onYmxkLogin),
            t.onProto(pb.EUserProtocol.S2C_D_CN_LOGIN, t.ondownjoyLogin),
            t.onProto(pb.EUserProtocol.S2C_SIMO_LOGIN, t.onsimoLogin),
            t.onProto(pb.EUserProtocol.S2C_CHANNEL_LOGIN, t.onChannelLogin),
            t.onProto(
              pb.EUserProtocol.S2C_GUOPAN_ALTER_CHANNEL,
              t.guopanAlterChannelRes,
            ),
            t.onProto(pb.EUserProtocol.S2C_7K7K_LOGIN, t.on7k7kLogin),
            t.onProto(pb.EUserProtocol.S2C_SWJOY_LOGIN, t.onSwjoyLogin),
            t.onProto(pb.EUserProtocol.S2C_FLASH_CN_LOGIN, t.onflashLogin),
            t.onProto(pb.EUserProtocol.S2C_IOSAPP_DELACCOUNT, t.onDelAccount),
            t.onProto(pb.EUserProtocol.S2C_H5_LOGIN, t.onH5Login),
            t.onProto(pb.EUserProtocol.S2C_H5_REGISTER, t.registRes),
            t.onProto(pb.EUserProtocol.S2C_HEART_PUSH, t.heartPush));
        }),
        (t.prototype.heartPush = function () {}),
        (t.prototype.deleteAccount = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_IOSAPP_DELACCOUNT),
            t = e.proto;
          ((t.accountid = Long.fromValue(this._data.ukey)),
            (t.sessionid = this._data.sessionID),
            this.sendProto(e));
        }),
        (t.prototype.qunheiLogin = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_QUNHEI_LOGIN),
            t = e.proto;
          ((t.queryString = go.queryString), this.sendProto(e));
        }),
        (t.prototype.onQunheiLogin = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error("account login fail result:" + o + " str:" + n),
              void l["default"].loginConfirm(
                n,
                S["default"].alloc(gg, gg.reconnect, [0]),
              )
            );
          }
          var a = i.accountid,
            r = i.sessionid,
            s = i.loginSetting,
            u = i.accountname;
          this.onLogin(Long.fromString(a), r, s, u);
        }),
        (t.prototype.onDelAccount = function (e) {
          var t = e.body,
            i = t.proto;
          return 0 != i.errCode
            ? void l["default"].loginConfirm(
                "账号注销错误 errCode:" + i.errCode,
              )
            : (l["default"].loginConfirm("账号注销成功，数据已全部清除s"),
              void gg.reconnect(0));
        }),
        (t.prototype.iOSNativeLogin = function () {
          console.info("ios native login", go.uid, go.token, go.device || "");
          var e = new n.Message(pb.EUserProtocol.C2S_IOSAPP_LOGIN),
            t = e.proto;
          ((t.uid = go.uid),
            (t.accesstoken = go.token),
            (t.device = go.device || ""),
            this.sendProto(e));
        }),
        (t.prototype.iOSOfficialLogin = function () {
          console.info("ios official login", go.token, go.device || "");
          var e = new n.Message(pb.EUserProtocol.C2S_IOSAPP_LOGIN_OFFICIAL),
            t = e.proto;
          ((t.verifyInfo = go.token),
            (t.device = go.device || ""),
            this.sendProto(e));
        }),
        (t.prototype.onIOSNativeLogin = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error("account login fail result:" + o + " str:" + n),
              void l["default"].loginConfirm(
                "errCode:" + o + "," + n,
                S["default"].alloc(gg, gg.reconnect, [0]),
              )
            );
          }
          var a = i.accountid,
            r = i.sessionid,
            s = i.loginSetting,
            u = i.accountname;
          ((this.needIdAuth = i.need_id_auth),
            this.onLogin(Long.fromString(a), r, s, u));
        }),
        (t.prototype.nativeLogin = function () {
          if (!gs.nativeLoginData) return void gg.removeVerbose();
          var e = new n.Message(pb.EUserProtocol.C2S_LEDOU_LOGIN),
            t = e.proto;
          ((t.sessionId = gs.nativeLoginData.sessionId),
            (t.openId = gs.nativeLoginData.openId),
            (t.click_id = ""),
            (t.scene = 0),
            (t.channel = ""),
            (t.pf = w.NATIVE),
            this.sendProto(e));
        }),
        (t.prototype.onNativeLogin = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error("account login fail result:" + o + " str:" + n),
              void l["default"].loginConfirm(
                n,
                S["default"].alloc(gg, gg.reconnect, [0]),
              )
            );
          }
          var a = i.accountid,
            r = i.sessionId,
            s = (i.photoServerIp, i.loginSetting),
            u = i.accountName;
          this.onLogin(Long.fromString(a), r, s, u);
        }),
        (t.prototype.qqHallLogin = function () {
          console.info("...", go.gameopenid);
          var e = new n.Message(pb.EUserProtocol.C2S_QQGAMECENTER_AUTOLOGIN),
            t = e.proto;
          ((t.openid = go.gameopenid),
            (t.session_key = go.gameopenkey),
            this.sendProto(e));
        }),
        (t.prototype.onQQHallLogin = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error("account login fail result:" + o + " str:" + n),
              void l["default"].loginConfirm(
                n,
                S["default"].alloc(gg, gg.reconnect, [0]),
              )
            );
          }
          var a = i.accountid,
            r = i.sessionid,
            s = i.loginSetting,
            u = i.accountname;
          this.onLogin(Long.fromString(a), r, s, u);
        }),
        (t.prototype.hjyLogin = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_HJYGAME_LOGIN),
            t = e.proto;
          ((t.queryString = go.queryString), this.sendProto(e));
        }),
        (t.prototype.onHJYLogin = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error("hjy account login fail result:" + o + " str:" + n),
              void l["default"].loginConfirm(
                n,
                S["default"].alloc(gg, gg.reconnect, [0]),
              )
            );
          }
          var a = i.accountid,
            r = i.sessionid,
            s = i.loginSetting,
            u = i.accountname;
          this.onLogin(Long.fromString(a), r, s, u);
        }),
        (t.prototype.yxyLogin = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_YOUXIYOU_LOGIN),
            t = e.proto;
          ((t.token = go.token), (t.user_id = go.uid + ""), this.sendProto(e));
        }),
        (t.prototype.onYXYLogin = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error("hjy account login fail result:" + o + " str:" + n),
              void l["default"].loginConfirm(
                n,
                S["default"].alloc(gg, gg.reconnect, [0]),
              )
            );
          }
          var a = i.accountid,
            r = i.sessionid,
            s = i.loginSetting,
            u = i.accountname;
          this.onLogin(Long.fromString(a), r, s, u);
        }),
        (t.prototype.guopanLogin = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_GUOPAN_LOGIN),
            t = e.proto;
          ((t.token = go.token), (t.game_uin = go.uid + ""), this.sendProto(e));
        }),
        (t.prototype.onGuopanLogin = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (-4 == o) {
            var n = i.errMsg;
            return (
              console.error(
                "guopan account login fail result:" + o + " str:" + n,
              ),
              void g["default"].showWin(
                R.ModName.Login,
                R.LoginViewType.GuoPanBindView,
              )
            );
          }
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error(
                "guopan account login fail result:" + o + " str:" + n,
              ),
              void l["default"].loginConfirm(
                n,
                S["default"].alloc(gg, gg.reconnect, [0]),
              )
            );
          }
          var a = i.accountid,
            r = i.sessionid,
            s = i.loginSetting,
            u = i.accountname;
          this.onLogin(Long.fromString(a), r, s, u);
        }),
        (t.prototype.ymxkLogin = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_GAMERSKY_LOGIN),
            t = e.proto;
          ((t.userId = go.userId), this.sendProto(e));
        }),
        (t.prototype.onYmxkLogin = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error(
                "ymxk account login fail result:" + o + " str:" + n,
              ),
              void l["default"].loginConfirm(
                n,
                S["default"].alloc(gg, gg.reconnect, [0]),
              )
            );
          }
          var a = i.accountid,
            r = i.sessionid,
            s = i.loginSetting,
            u = i.accountname;
          this.onLogin(Long.fromString(a), r, s, u);
        }),
        (t.prototype.simoLogin = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_SIMO_LOGIN),
            t = e.proto;
          ((t.cchid = go.cchid),
            (t.appid = go.appid),
            (t.access_token = go.token),
            this.sendProto(e));
        }),
        (t.prototype.onsimoLogin = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error(
                "simo account login fail result:" + o + " str:" + n,
              ),
              void l["default"].loginConfirm(
                n,
                S["default"].alloc(gg, gg.reconnect, [0]),
              )
            );
          }
          var a = i.accountid,
            r = i.sessionid,
            s = i.loginSetting,
            u = i.accountname;
          ((this.needIdAuth = i.need_id_auth),
            this.onLogin(Long.fromString(a), r, s, u));
        }),
        (t.prototype.channelLogin = function (e) {
          var t = new n.Message(pb.EUserProtocol.C2S_CHANNEL_LOGIN),
            i = t.proto;
          i.channel = e;
          var o;
          go.isManbaApk && (o = "Y66qrZITq-oigfPr3S@Y7(tQHrzCm8Va");
          var a = { token: go.token, userid: go.userId, subchannel: o };
          ((i.params = a), this.sendProto(t));
        }),
        (t.prototype.onChannelLogin = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error("account login fail result:" + o + " str:" + n),
              void l["default"].loginConfirm(
                n,
                S["default"].alloc(gg, gg.reconnect, [0]),
              )
            );
          }
          var a = i.accountid,
            r = i.sessionid,
            s = i.loginSetting,
            u = i.accountname,
            _ = i.need_id_auth;
          go.encLenovoId = i.openid;
          i.is_adult;
          return _
            ? void gs.dealAuth()
            : void this.onLogin(Long.fromString(a), r, s, u);
        }),
        (t.prototype.k7k7Login = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_7K7K_LOGIN),
            t = e.proto;
          ((t.userid = go.userid),
            (t.username = go.username),
            (t.isAdult = go.isAdult),
            (t.vaildCode = go.vaildCode),
            (t.time = go.time));
          var i = "5314c1614ca423cdbf370e4b60236042",
            o = [t.userid, t.username, t.vaildCode, t.time, t.isAdult, i];
          ((t.sign = md5(o.join(""))), this.sendProto(e));
        }),
        (t.prototype.on7k7kLogin = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error(
                "7k7k account login fail result:" + o + " str:" + n,
              ),
              void l["default"].loginConfirm(
                n,
                S["default"].alloc(gg, gg.reconnect, [0]),
              )
            );
          }
          var a = i.accountid;
          go.k7account = a;
          var r = i.sessionid,
            s = i.loginSetting,
            u = i.accountname;
          (this.onLogin(Long.fromString(a), r, s, u),
            console.info(go.k7account, i.accountid, go.account, "lg"));
        }),
        (t.prototype.swjoyLogin = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_SWJOY_LOGIN),
            t = e.proto;
          ((t.guid = go.guid),
            (t.fcm = go.fcm),
            (t.card_state = go.card_state),
            (t.play_type = go.play_type),
            (t.server_idx = go.server_idx),
            (t.server_code = go.server_code),
            (t.platform = go.platform),
            (t.time = go.time),
            (t.sign = go.sign),
            (t.sw_tag = go.sw_tag),
            console.info(t, "req"),
            this.sendProto(e));
        }),
        (t.prototype.onSwjoyLogin = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error(
                "swjoy account login fail result:" + o + " str:" + n,
              ),
              void l["default"].loginConfirm(
                n,
                S["default"].alloc(gg, gg.reconnect, [0]),
              )
            );
          }
          var a = i.accountid,
            r = i.sessionid,
            s = i.loginSetting,
            u = i.accountname;
          this.onLogin(Long.fromString(a), r, s, u);
        }),
        (t.prototype.flashLogin = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_FLASH_CN_LOGIN),
            t = e.proto,
            i = {
              user_id: go.user_id,
              username: go.username,
              is_adult: go.is_adult,
              avatar: go.avatar,
              sex: go.sex,
              extra: go.extra,
              time: go.time,
              sign: go.sign,
            };
          console.info(i, "reqData");
          var o = this.getMd5Str(i),
            a = decodeURIComponent(o);
          (console.info(a, "flashReq"), (t.queryString = a), this.sendProto(e));
        }),
        (t.prototype.onflashLogin = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error(
                "flash account login fail result:" + o + " str:" + n,
              ),
              void l["default"].loginConfirm(
                n,
                S["default"].alloc(gg, gg.reconnect, [0]),
              )
            );
          }
          var a = (go.lgAccount = i.accountid),
            r = i.sessionid,
            s = i.loginSetting,
            u = i.accountname;
          ((this.needIdAuth = i.need_id_auth),
            this.onLogin(Long.fromString(a), r, s, u));
        }),
        (t.prototype.getMd5Str = function (e, t) {
          var i = Object.keys(e);
          t && i.sort();
          for (var o = "", n = [], a = 0, r = i; a < r.length; a++) {
            var s = r[a];
            ((o += s + e[s]), n.push(s + "=" + e[s]));
          }
          return t ? md5(n.join("&")) : n.join("&");
        }),
        (t.prototype.downjoyLogin = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_D_CN_LOGIN),
            t = e.proto;
          ((t.token = go.token), (t.mid = go.userId), this.sendProto(e));
        }),
        (t.prototype.ondownjoyLogin = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error(
                "downjoy account login fail result:" + o + " str:" + n,
              ),
              void l["default"].loginConfirm(
                n,
                S["default"].alloc(gg, gg.reconnect, [0]),
              )
            );
          }
          var a = i.accountid,
            r = i.sessionid,
            s = i.loginSetting,
            u = i.accountname;
          this.onLogin(Long.fromString(a), r, s, u);
        }),
        (t.prototype.h54399Login = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_4399_LOGIN),
            t = e.proto;
          ((t.gameId = go.gameId),
            (t.userId = go.userId),
            (t.userName = go.userName),
            (t.sign = go.sign),
            (t.time = Long.fromString(go.time)),
            this.sendProto(e));
        }),
        (t.prototype.onH54399Login = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error("account login fail result:" + o + " str:" + n),
              void l["default"].loginConfirm(
                n,
                S["default"].alloc(gg, gg.reconnect, [0]),
              )
            );
          }
          var a = i.accountid,
            r = i.sessionId,
            s = i.loginSetting,
            u = i.accountName;
          this.onLogin(Long.fromString(a), r, s, u);
        }),
        (t.prototype.game4399Login = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_4399_GAME_BOX_LOGIN),
            t = e.proto;
          ((t.code = go.code),
            (t.userId = go.uid),
            (t.preview = go.preview),
            this.sendProto(e));
        }),
        (t.prototype.onGame4399Login = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error("account login fail result:" + o + " str:" + n),
              void l["default"].loginConfirm(
                n,
                S["default"].alloc(gg, gg.reconnect, [0]),
              )
            );
          }
          var a = i.accountid,
            r = i.sessionId,
            s = i.loginSetting,
            u = i.accountName;
          this.onLogin(Long.fromString(a), r, s, u);
        }),
        (t.prototype.hktLogin = function () {
          console.info("hkt login", go.uid, go.token, go.timestamp);
          var e = new n.Message(pb.EUserProtocol.C2S_HKT_AUTOLOGIN),
            t = e.proto;
          ((t.user_id = go.uid),
            (t.token = go.token),
            (t.sign = go.sign),
            (t.time = Long.fromValue(go.timestamp)),
            (t.nickname = go.nickname || ""),
            (t.headurl = go.headUrl || ""),
            (t.scene = 0),
            (t.pf = w.Android),
            this.sendProto(e));
        }),
        (t.prototype.onHKTLogin = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error("account login fail result:" + o + " str:" + n),
              void l["default"].loginConfirm(
                n,
                S["default"].alloc(gg, gg.reconnect, [0]),
              )
            );
          }
          var r = i.accountid,
            s = i.sessionid,
            u = i.loginSetting,
            _ = i.accountname;
          this.onLogin(Long.fromString(r), s, u, _);
          var d = i.createtime.toNumber(),
            p = new Date(d),
            c = p.getDate(),
            h = new Date(),
            f = h.getTime(),
            T = h.getDate();
          T != c &&
            1728e5 > f - d &&
            gs.report(a.REPORT_TYPE.EVENT_2_RETENTION);
        }),
        (t.prototype.onP8GameLogin = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error("account login fail result:" + o + " str:" + n),
              void l["default"].loginConfirm(
                n,
                S["default"].alloc(gg, gg.reconnect, [0]),
              )
            );
          }
          var a = i.accountid,
            r = i.sessionid,
            s = (i.photoServerIp, i.loginSetting),
            u = i.accountname;
          this.onLogin(Long.fromString(a), r, s, u);
        }),
        (t.prototype.miniGameLogin = function () {
          if (go.wxCode) {
            var e = pb.EUserProtocol.C2S_WXMP_AUTOLOGIN;
            go.isByteGame
              ? (e = pb.EUserProtocol.C2S_BYTEDANCE_AUTOLOGIN)
              : go.isQQgame && (e = pb.EUserProtocol.C2S_QQ_AUTOLOGIN);
            var t = new n.Message(e),
              i = t.proto;
            ((i.code = go.wxCode),
              gs.aid && "0" != gs.aid && (i.click_id = gs.aid + ""),
              (i.scene = gs.scene),
              (i.channel = gs.channel),
              (i.pf = this.getPfValue(gs.platform)),
              go.isWeixin &&
                i instanceof pb.c2s_autologin &&
                ((gs.huya_traceid = "__traceid__"),
                (i.advertiser_id = gs.advertiser_id || ""),
                (i.bili_trackid = gs.trackid || ""),
                (i.callback = gs.callback || ""),
                (i.bd_logidUrl = gs.loginUrl || ""),
                (i.huya_traceid = gs.huya_traceid || ""),
                (i.uc_callback = gs.uc_callback || "")),
              this.sendProto(t));
          }
        }),
        (t.prototype.ksGameLogin = function () {
          if (!go.ksUserId || !go.ksGameToken)
            return void console.error(
              "登录参数为空",
              go.ksGameToken,
              go.ksUserId,
            );
          var e = pb.EUserProtocol.C2S_KUAISHOU_AUTOLOGIN,
            t = new n.Message(e),
            i = t.proto;
          ((i.game_user_id = go.ksUserId),
            (i.game_token = go.ksGameToken),
            gs.aid && "0" != gs.aid && (i.click_id = gs.aid + ""),
            (i.scene = gs.scene),
            (i.channel = gs.channel),
            (i.pf = this.getPfValue(gs.platform)),
            this.sendProto(t));
        }),
        (t.prototype.p8GameLogin = function () {
          var e = pb.EUserProtocol.C2S_PLAY800_AUTOLOGIN,
            t = new n.Message(e),
            i = t.proto;
          (go.isWxP8
            ? ((i.uid = gs.p8LoginRes.data.uid + ""),
              (i.sessionid = gs.p8LoginRes.data.sessionid),
              (i.site = gs.p8LoginRes.data.site),
              (i.scene = gs.scene),
              (i.p8PfType = L.wechat),
              (i.pf = this.getPfValue(gs.platform) || w.Android))
            : ((i.uid = go.uid),
              (i.sessionid = go.token),
              (i.site = go.site),
              (i.scene = 0),
              (i.p8PfType = L.h5),
              (i.aid = go.aid),
              (i.device = go.device || ""),
              (i.age = 0 | go.age || 0),
              (i.pf = "sjol_ios" == go.site ? w.iOS : w.Android)),
            console.info("p8GameLogin", i.uid),
            this.sendProto(t));
        }),
        (t.prototype.getPfValue = function (e) {
          return (
            (e = e && e.toLowerCase()),
            "android" == e
              ? w.Android
              : "ios" == e
                ? w.iOS
                : go.isPc
                  ? w.PC
                  : "1" == go.isNative
                    ? w.NATIVE
                    : 0
          );
        }),
        (t.prototype.getChannelID = function () {
          var e = I.PlatformType.html,
            t = this._data.loginType;
          return (
            go.isWeixin
              ? (e = I.PlatformType.wxgame)
              : go.isQQgame
                ? (e = I.PlatformType.qqgame)
                : go.isNative
                  ? (e = I.PlatformType["native"])
                  : go.isByteGame
                    ? (e = I.PlatformType.byteGame)
                    : go.isKSGame
                      ? (e = I.PlatformType.kSGame)
                      : go.isWxP8
                        ? (e = I.PlatformType.wxP8)
                        : go.p8gameH5
                          ? (e = I.PlatformType.p8gameH5)
                          : go.isIOSNative
                            ? "apple" === t
                              ? (e = I.PlatformType.iosNativeOfficial)
                              : "login" === t
                                ? (e = I.PlatformType.iosNative)
                                : "web" === t && (e = I.PlatformType.html)
                            : go.isIOSOfficial
                              ? (e =
                                  "web" === t
                                    ? I.PlatformType.html
                                    : I.PlatformType.iosNativeOfficial)
                              : go.isHKTNative
                                ? (e = I.PlatformType.HKT)
                                : go.qqhall
                                  ? (e = I.PlatformType.qqHall)
                                  : go.isGood
                                    ? (e = I.PlatformType.Good)
                                    : go.is4399H5
                                      ? (e = I.PlatformType.h54399)
                                      : go.is4399game
                                        ? (e = I.PlatformType.game4399)
                                        : go.isHJY
                                          ? (e = I.PlatformType.HuanJuYou)
                                          : go.isYXY
                                            ? (e = I.PlatformType.YouXiYou)
                                            : go.isQunhei
                                              ? (e = I.PlatformType.Qunheo)
                                              : go.isGuopanNative
                                                ? (e =
                                                    I.PlatformType.guopanNative)
                                                : go.isymxk
                                                  ? (e = I.PlatformType.ymxk)
                                                  : go.isdownjoy
                                                    ? (e =
                                                        I.PlatformType.downjoy)
                                                    : go.issimo
                                                      ? (e =
                                                          I.PlatformType.simo)
                                                      : go.is7k7k
                                                        ? (e =
                                                            I.PlatformType.k7k7)
                                                        : go.isSwjoy
                                                          ? (e =
                                                              I.PlatformType
                                                                .swjoy)
                                                          : go.isFlash
                                                            ? (e =
                                                                I.PlatformType
                                                                  .flash)
                                                            : go.isYiming
                                                              ? (e =
                                                                  I.PlatformType
                                                                    .yiming)
                                                              : go.isLenovo
                                                                ? (e =
                                                                    I
                                                                      .PlatformType
                                                                      .lenovo)
                                                                : go.isManba
                                                                  ? (e =
                                                                      I
                                                                        .PlatformType
                                                                        .manba)
                                                                  : go.isRyGame &&
                                                                    (e =
                                                                      I
                                                                        .PlatformType
                                                                        .rygame),
            e
          );
        }),
        (t.prototype.onAutoLogin = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.errCode;
          if (0 != o) {
            var n = i.errMsg;
            return (
              console.error("account login fail result:" + o + " str:" + n),
              void l["default"].loginConfirm(n)
            );
          }
          var a = i.accountid,
            r = i.sessionid,
            s = i.loginSetting;
          if (go.isWeixin && i instanceof pb.s2c_autologin) {
            var u = i.openId,
              _ = i.isNew;
            gs.setOpenId(u, _);
          }
          this.onLogin(Long.fromString(a), r, s, i.accountname);
        }),
        (t.prototype.onLoginServerCreate = function () {
          return __awaiter(this, void 0, void 0, function () {
            var e, t, i, o, r, s, l, u, _, d, s, r, c, h, f, _, d, s, y, g;
            return __generator(this, function (v) {
              switch (v.label) {
                case 0:
                  return (
                    gg.loadVerbose(a.LOADING_VERBOSE_TYPE.CHECK_VERSION),
                    (e = new n.Message(p["default"].LC_CHECKEDITION)),
                    e.putShort(x),
                    e.putInt(b),
                    (t = this.getChannelID()),
                    console.log("channelId:", t),
                    e.putShort(t),
                    (i = this.getLang()),
                    e.putByte(i),
                    e.putString("11"),
                    e.putByte(p["default"].LC_CHECKEDITION),
                    e.putByte(2),
                    [4, this.sendProtoAsync(e)]
                  );
                case 1:
                  if (((e = v.sent()), !e)) return [2];
                  if (((o = e.getByte()), 1 == o))
                    return ((r = e.getString()), (s = e.getString()), [2]);
                  if (2 == o) return [2];
                  for (
                    l = e.getByte(),
                      l == E["default"].CHECK_VERSION_LOW &&
                        ((u = e.getBoolean()),
                        1 == u
                          ? ((_ = e.getString()),
                            (d = e.getString()),
                            (s = e.getString()))
                          : (r = e.getString())),
                      c = e.getByte(),
                      h = [],
                      f = 0;
                    c > f;
                    f++
                  )
                    ((_ = e.getString()),
                      (d = e.getString()),
                      (s = e.getString()),
                      h.push([{ title: _, content: d, url: s }]));
                  return (
                    (this.data.newGameIp = e.getString()),
                    (y = e.getBoolean()),
                    (g = e.getLong().toNumber()),
                    T["default"].setServerTime(g),
                    this.startLoginAccount(),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.getLang = function () {
          var e = 0;
          return (go.isHKTNative && (e = 1), e);
        }),
        (t.prototype.clean = function () {
          this._data.clean();
        }),
        (t.prototype.getNotice = function () {}),
        (t.prototype.applyServerInfo = function () {
          return __awaiter(this, void 0, Promise, function () {
            var e, t, i, o, a, r, s;
            return __generator(this, function (l) {
              switch (l.label) {
                case 0:
                  return (
                    go.isReLogin
                      ? ((e = new n.Message(
                          p["default"].LC_RE_LOGIN_GET_LINE_LIST,
                        )),
                        e.putLong(this._data.ukey))
                      : (e = new n.Message(
                          p["default"].LC_GAME_GET_AREA_AND_LINE,
                        )),
                    [
                      4,
                      this.sendProtoAsync(
                        e,
                        null,
                        p["default"].LC_GAME_GET_AREA_AND_LINE,
                      ),
                    ]
                  );
                case 1:
                  if (((e = l.sent()), !e)) return [2, !1];
                  for (t = e.getByte(), i = [], o = 0; t > o; o++) {
                    for (
                      a = c.AreaServer.fromAreaBytes(e), r = e.getByte(), s = 0;
                      r > s;
                      s++
                    )
                      a.line.push(c.LineServer.fromLineBytes(e));
                    i.push(a);
                  }
                  return (
                    (this._data.gameAreaList = i),
                    console.debug("server list", i),
                    [2, i.length > 0]
                  );
              }
            });
          });
        }),
        (t.prototype.getServerInfoById = function (e) {
          var t = this._data.gameAreaList;
          if (!t || !t.length) return null;
          if (e)
            for (var i = 0, o = t; i < o.length; i++)
              for (var n = o[i], a = 0, r = n.line; a < r.length; a++) {
                var s = r[a];
                if (s.id == e) return s;
              }
          var l = this.getHotServerList();
          if (l && l.length) return l[0].line[0];
          var u = t[t.length - 1];
          return u.line[0];
        }),
        (t.prototype.getAreaServerById = function (e) {
          var t = this._data.gameAreaList;
          if (!t || !t.length) return null;
          for (var i = 0, o = t; i < o.length; i++) {
            var n = o[i];
            if (n.id == e) return n;
          }
          return null;
        }),
        (t.prototype.getHotServerList = function () {
          var e = this._data.gameAreaList;
          if (!e || !e.length) return null;
          for (var t = [], i = 0, o = e; i < o.length; i++) {
            var n = o[i];
            if (n.state == d.ServerStatus.HOT && (t.push(n), t.length >= 2))
              break;
          }
          return t;
        }),
        (t.prototype.loginAccount = function () {
          if (!go.account) return (gg.removeVerbose(), void this.openAccount());
          var e = new n.Message(p["default"].LC_PLAYER_LOGIN),
            t = go.account,
            i = "1";
          (e.putString(t),
            e.putString(i),
            e.putString("0"),
            e.putString("0"),
            e.putByte(0),
            e.putByte(0),
            this.sendProto(e));
        }),
        (t.prototype.onGameServerCreate = function () {
          return __awaiter(this, void 0, void 0, function () {
            var e, t, i, o, a, r;
            return __generator(this, function (s) {
              switch (s.label) {
                case 0:
                  return (
                    (e = p["default"].CG_LOGIN_PLAYERCHECK),
                    (t = this._data.sessionID),
                    this._data.reSessionID > 0 &&
                      ((e = p["default"].CG_LOGIN_ACTORENTER_AGAIN),
                      (t = this._data.reSessionID)),
                    (i = new n.Message(e)),
                    i.putLong(this._data.ukey),
                    i.putInt(t),
                    i.putByte(0),
                    i.putInt(b),
                    i.putByte(1),
                    [4, this.sendProtoAsync(i)]
                  );
                case 1:
                  return (i = s.sent())
                    ? ((o = i.getByte()),
                      0 != o
                        ? (console.info("game server check fail: " + o),
                          (a = i.getString() + "\n请尝试重新登录"),
                          go.isReLogin && this.removeLoginCache(),
                          l["default"].loginConfirm(
                            a,
                            S["default"].alloc(gg, gg.reconnect, [0]),
                          ),
                          [2])
                        : ((this._data.reSessionID = i.getInt()),
                          this._data.reSessionID > 0
                            ? M.loginStorage.set(
                                d.LocalStorageKey.SESSION_ID,
                                this._data.reSessionID,
                              )
                            : M.loginStorage.remove(
                                d.LocalStorageKey.SESSION_ID,
                              ),
                          (r = this._data.loginPlayerId),
                          go.isReConnect && r
                            ? (go.isReLogin
                                ? this.sendNt(d.LoginEvent.LOAD_GAME_RES, r)
                                : this.loginRole(r),
                              [2])
                            : (P["default"].showView(
                                R.ModName.Login,
                                R.LoginViewType.RoleList,
                              ),
                              [2])))
                    : [2];
              }
            });
          });
        }),
        (t.prototype.removeLoginCache = function () {
          (console.log("remove login cache data"),
            M.loginStorage.remove(d.LocalStorageKey.SESSION_ID),
            M.loginStorage.remove(d.LocalStorageKey.LoginData),
            (this._data.reSessionID = null),
            (go.isReLogin = !1));
        }),
        (t.prototype.applyRoleList = function () {
          var e = new n.Message(p["default"].CG_LOGIN_ACTORLIST);
          this.sendProto(e);
        }),
        (t.prototype.createRoleAuto = function (e, t, i) {
          var o = new n.Message(p["default"].CG_LOGIN_CREATEACTOR_AUTO);
          (o.putByte(e),
            o.putByte(t),
            o.putInt(1),
            o.putByte(i),
            o.putString("1"),
            this.sendProto(o));
        }),
        (t.prototype.createRole = function (e) {
          this.isSendCreate = !0;
          var t = new n.Message(p["default"].CG_LOGIN_CREATEACTOR),
            i =
              ("\n" +
                e.getName() +
                u["default"].getJobString(e.getJob()) +
                "\n" +
                u["default"].getSexString(e.getSex()) +
                "\n" +
                u["default"].getRaceString(e.getRace()),
              e.getSex()),
            o = e.getRace(),
            a = e.getJob(),
            r = e.getIcon1(),
            s = e.getIcon2(),
            l = e.getIcon3(),
            _ = e.getName();
          (t.putByte(i),
            t.putByte(o),
            t.putByte(a),
            t.putLong(r),
            t.putLong(s),
            t.putLong(l),
            t.putString(_));
          var d = u["default"].CLIENT_TYPE_ANDROID;
          (gs.isIos && gs.isIos() && (d = u["default"].CLIENT_TYPE_IOS),
            go.isPc && (d = u["default"].CLIENT_TYPE_JAR),
            t.putString(d + ""),
            this.sendProto(t));
        }),
        (t.prototype.onCreateRole = function (e) {
          this.isSendCreate = !1;
          var t = e.body,
            i = t.getByte();
          if (0 != i) {
            var o = t.getString();
            return void l["default"].loginConfirm(o);
          }
          var n = this.getMessagePlayer(t);
          (this._data.allPlayerList.push(n),
            this.sendNt(d.LoginEvent.ON_ROLE_CREATE, n.id),
            gs.report && gs.report("create", n.level, n.name, n.id));
        }),
        (t.prototype.randomName = function (e) {
          var t = new n.Message(p["default"].CG_GUIDE_STATUE_RANDOM_NAME),
            i = e.getSex(),
            o = e.getRace();
          (t.putByte(i), t.putByte(o), this.sendProto(t));
        }),
        (t.prototype.randomNameCallBack = function (e) {
          var t = e.body,
            i = t.getByte();
          if (0 > i) {
            var o = t.getString();
            return void l["default"].loginConfirm(o);
          }
          var n = t.getString();
          this.sendNt(d.LoginEvent.USER_RANDOM_NAME, n);
        }),
        (t.prototype.loginRole = function (e) {
          if (!e) return void l["default"].loginConfirm("登录角色ID不存在！");
          this._data.loginPlayerId = e;
          var t = this._data.loginSetting,
            i = new n.Message(p["default"].CG_LOGIN_ACTORENTER);
          (i.putInt(e),
            i.putInt(u["default"].LOGIN_DATA_FLAG),
            i.putInt(t),
            i.putString(""));
          var o = u["default"].CLIENT_TYPE_ANDROID;
          (gs.isIos && gs.isIos() && (o = u["default"].CLIENT_TYPE_IOS),
            go.isPc && (o = u["default"].CLIENT_TYPE_JAR),
            i.putByte(o),
            i.putString(""));
          var a = "",
            r = "";
          (i.putString(a),
            i.putString(r),
            i.putString(""),
            i.putString("newreinforce"));
          var s = "sign";
          (i.putString(s), this.sendProto(i));
        }),
        (t.prototype.getMessagePlayer = function (e) {
          var t = new s["default"]();
          if (
            (t.setId(e.getInt()),
            t.setName(e.getString()),
            t.setSex(e.getByte()),
            t.setRace(e.getByte()),
            t.setJob(e.getByte()),
            t.setLevel(e.getByte()),
            t.setVipLevel2(e.getByte()),
            t.setMapName(e.getString()),
            t.setIcon1(e.getLong()),
            t.setIcon2(e.getLong()),
            t.setIcon3(e.getLong()),
            t.setStatus(e.getInt()),
            1 == t.isStatusBit(_.ModelConst.STATUS_TEMP_DEL))
          ) {
            var i =
              T["default"].timer.serverTime +
              e.getShort() * f["default"].MILLIS_IN_MINUTE;
            t.setTimes(i);
          }
          if (1 == t.isStatusBit(_.ModelConst.STATUS_OFFLINEMISSION)) {
            var o = e.getBoolean();
            0 == o &&
              (t.setTabStatus(!0, _.ModelConst.OFFLINE_DOING),
              t.setTimes1(
                T["default"].timer.serverTime +
                  e.getShort() * f["default"].MILLIS_IN_MINUTE,
              ),
              t.setInfo(e.getString()));
          }
          return t;
        }),
        (t.prototype.doDelPlayerMsg = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i;
            return __generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = E["default"].createDelPlayerMsg(e.getId())),
                    [4, y["default"].sendProtoAsync(t)]
                  );
                case 1:
                  return (
                    o.sent(),
                    (t = E["default"].getReceiveMsg()),
                    null == t
                      ? [2]
                      : (e.setStatusBit(_.ModelConst.STATUS_TEMP_DEL),
                        (i =
                          T["default"].timer.serverTime +
                          t.getShort() * f["default"].MILLIS_IN_MINUTE),
                        e.setTimes(i),
                        this.sendNt(d.LoginEvent.LISTPLAYER_UPDATE),
                        [2])
                  );
              }
            });
          });
        }),
        (t.prototype.doCancelDelPlayerMsg = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t;
            return __generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (t = E["default"].createCancelDelPlayerMsg(e.getId())),
                    [4, y["default"].sendProtoAsync(t)]
                  );
                case 1:
                  return (
                    i.sent(),
                    (t = E["default"].getReceiveMsg()),
                    null == t
                      ? [2]
                      : (e.clearStatusBit(_.ModelConst.STATUS_TEMP_DEL),
                        this.sendNt(d.LoginEvent.LISTPLAYER_UPDATE),
                        [2])
                  );
              }
            });
          });
        }),
        (t.prototype.startLoginAccount = function () {
          if (("1" === go.dbg && !go.isGuopanNative) || "goodsjol" === go.gm)
            return void this.loginAccount();
          if (go.isGood) return void this.sendNt(d.LoginEvent.SHOW_LOGIN);
          if (
            (gg.loadVerbose(a.LOADING_VERBOSE_TYPE.LOGIN_ACCOUNT),
            go.isWeixin || go.isQQgame || go.isByteGame)
          )
            return void this.miniGameLogin();
          if (go.isRyGame) return void this.channelLogin(pb.channel.rongyao);
          if (go.isWxP8 || go.p8gameH5) return void this.p8GameLogin();
          if (go.isKSGame) return void this.ksGameLogin();
          if ("1" == go.isNative) return void this.nativeLogin();
          var e = this._data.loginType;
          return "1" == go.isIOSNative
            ? void ("apple" === e
                ? this.iOSOfficialLogin()
                : "login" === e
                  ? this.iOSNativeLogin()
                  : this.loginAccount())
            : "1" == go.isIOSOfficial
              ? void ("web" === e
                  ? this.loginAccount()
                  : this.iOSOfficialLogin())
              : "1" == go.isHKTNative
                ? void this.hktLogin()
                : go.qqhall
                  ? void this.qqHallLogin()
                  : go.is4399H5
                    ? void this.h54399Login()
                    : go.is4399game
                      ? void this.game4399Login()
                      : go.isHJY
                        ? void this.hjyLogin()
                        : go.isYXY
                          ? void this.yxyLogin()
                          : go.isQunhei
                            ? void this.qunheiLogin()
                            : go.isGuopanNative
                              ? void this.guopanLogin()
                              : go.isymxk
                                ? void this.ymxkLogin()
                                : go.isdownjoy
                                  ? void this.downjoyLogin()
                                  : go.issimo
                                    ? void this.simoLogin()
                                    : go.isYiming
                                      ? void this.channelLogin(pb.channel.youyi)
                                      : go.isLenovo
                                        ? void this.channelLogin(
                                            pb.channel.lenovo,
                                          )
                                        : go.isManba
                                          ? void this.channelLogin(
                                              pb.channel.manba,
                                            )
                                          : go.is7k7k
                                            ? void this.k7k7Login()
                                            : go.isSwjoy
                                              ? void this.swjoyLogin()
                                              : go.isFlash
                                                ? void this.flashLogin()
                                                : void this.loginAccount();
        }),
        (t.prototype.openAccount = function () {
          go.accountInputView ||
            ((go.accountInputView = new h["default"]()),
            go.gameStage.addChild(go.accountInputView));
        }),
        (t.prototype.onWebLogin = function (e) {
          var t = e.body,
            i = t.getByte();
          if (0 != i) {
            var o = t.getString();
            return void l["default"].loginConfirm(o);
          }
          var n = t.getLong(),
            a = t.getInt(),
            r = (t.getString(), t.getInt());
          this.onLogin(n, a, r, go.account);
        }),
        (t.prototype.onLogin = function (e, t, i, o) {
          return (
            o && (go.account = o),
            (go.isWeixin ||
              go.isQQgame ||
              go.isByteGame ||
              go.isKSGame ||
              go.is4399game) &&
              console.info("..." + e + "&" + t + "&" + i + "&" + o),
            (this._data.ukey = e),
            (this._data.sessionID = t),
            (this._data.loginSetting = i),
            go.isGuopanNative && "1" !== go.dmdbg
              ? void P["default"].showView(
                  R.ModName.Login,
                  R.LoginViewType.GuoPanLoginView,
                )
              : void this.sendNt(d.LoginEvent.ON_ACCOUNT_LOGIN)
          );
        }),
        (t.prototype.onRoleList = function (e) {
          for (
            var t = e.body, i = (t.getString(), t.getShort()), o = [], n = 0;
            i > n;
            n++
          ) {
            var a = this.getMessagePlayer(t);
            o.push(a);
          }
          this.data.allPlayerList = o;
          var r = t.getInt();
          ((this.data.lastRoleId = r), this.sendNt(d.LoginEvent.ON_ROLE_LIST));
        }),
        (t.prototype.onRoleLogin = function (e) {
          var t = e.body;
          this.sendNt(d.LoginEvent.ON_ROLE_LOGIN, t);
        }),
        (t.prototype.onRoleLogout = function (e) {
          var t = e.body,
            i = t.getByte();
          console.info("onRoleLogout", i);
          var o = t.getByte();
          return 0 > o
            ? void g["default"].alertMessage(
                v.GameText.getText(v.GameText.TI_ERROR),
                t.getString(),
              )
            : (E["default"].setMsgTag(p["default"].CG_LOGIN_ACTORLEAVE, t),
              void m["default"].doLogOutMsg(i, !1));
        }),
        (t.prototype.getAgreePolicy = function () {
          if (this._data.isAgreePolicy) return !0;
          var e = gs.isAudit && gs.isAudit();
          if (e) return !1;
          var t = egret.localStorage.getItem(
            d.LocalStorageKey.GD_PRIVACY_POLICY,
          );
          return "1" == t;
        }),
        (t.prototype.setPolicy = function (e) {
          ((this.data.isAgreePolicy = e),
            egret.localStorage.setItem(
              d.LocalStorageKey.GD_PRIVACY_POLICY,
              e ? "1" : "0",
            ),
            this.sendNt(d.LoginEvent.UPDATE_PRIVACY_POLICY));
        }),
        (t.prototype.backToLogin = function () {
          m["default"].doLogOutMsg(
            u["default"].ACTOR_LEAVE_TYPE_BACKTOLOGIN,
            !0,
          );
        }),
        (t.prototype.doLogoutMsg = function (e) {
          var t = E["default"].createPlayerLoginOutMsg(e);
          switch (e) {
            case u["default"].ACTOR_LEAVE_TYPE_BACKTOLIST:
              this.sendProto(t);
              break;
            case u["default"].ACTOR_LEAVE_TYPE_BACKTOLOGIN:
              this.sendProto(t);
          }
        }),
        (t.prototype.realNameAuth = function (e, t) {
          return __awaiter(this, void 0, Promise, function () {
            var i, o, a, r, s, u;
            return __generator(this, function (_) {
              switch (_.label) {
                case 0:
                  return (
                    (i = pb.EUserProtocol.C2S_H5_IDCARD_AUTH),
                    go.IOSMini
                      ? (i = pb.EUserProtocol.C2S_IOSAPP_IDCARD_AUTH)
                      : go.issimo
                        ? (i = pb.EUserProtocol.C2S_SIMO_IDCARD_AUTH)
                        : go.isFlash &&
                          (i = pb.EUserProtocol.C2S_FLASHCN_IDCARD_AUTH),
                    (o = new n.Message(i)),
                    (a = o.proto),
                    (a.accountid = Long.fromValue(this._data.ukey)),
                    (a.idcard_no = e),
                    (a.username = t),
                    go.issimo && ((a.cchid = go.cchid), (a.appid = go.appid)),
                    gg.showLoading("认证中...", !0),
                    (r = pb.EUserProtocol.S2C_H5_IDCARD_AUTH),
                    go.IOSMini
                      ? (r = pb.EUserProtocol.S2C_IOSAPP_IDCARD_AUTH)
                      : go.issimo
                        ? (r = pb.EUserProtocol.S2C_SIMO_IDCARD_AUTH)
                        : go.isFlash &&
                          (r = pb.EUserProtocol.S2C_FLASHCN_IDCARD_AUTH),
                    [4, this.sendProtoAsync(o, null, r)]
                  );
                case 1:
                  return (
                    (o = _.sent()),
                    gg.hideLoading(),
                    o
                      ? ((s = o.proto),
                        0 != s.code
                          ? (l["default"].loginConfirm(s.msg), [2, !1])
                          : ((this.needIdAuth = !1),
                            N.Tips.show("实名认证成功！"),
                            (u = M.loginStorage.getJson(
                              d.LocalStorageKey.LoginData,
                            )),
                            u &&
                              ((u.need_id_auth = !1),
                              M.loginStorage.set(
                                d.LocalStorageKey.LoginData,
                                u,
                              )),
                            [2, !0]))
                      : [2, !1]
                  );
              }
            });
          });
        }),
        (t.prototype.onH5Login = function (e) {
          var t = e instanceof o["default"] ? e.body.proto : e;
          if (0 != t.errCode) return void l["default"].loginConfirm(t.errMsg);
          var i = t.accountid,
            n = t.sessionid,
            a = t.loginSetting,
            r = t.accountname;
          ((this.needIdAuth = t.need_id_auth),
            (this.needSetPsd = t.need_password),
            (this.needBindPhone = t.need_bind_phone),
            (this._data.accountName = t.accountname),
            (t.photoServerIp = ""),
            go.isReLogin ||
              (M.loginStorage.set(d.LocalStorageKey.LoginData, t),
              M.loginStorage.set(d.LocalStorageKey.SESSION_ID, n)),
            this.onLogin(Long.fromString(i), n, a, r),
            (this._data.phoneNum = ""),
            (this._data.code = ""),
            (this._data.psd = ""));
        }),
        (t.prototype.checkPhoneInput = function (e) {
          var t = e ? this._data.sphoneNum : this._data.phoneNum,
            i = e ? this._data.sphoneArea : this._data.phoneArea;
          return C.Tool.checkPhone(i, t)
            ? !0
            : (N.Tips.show("手机号码格式错误"), !1);
        }),
        (t.prototype.checkCodeInput = function () {
          var e = this._data.code;
          return C.Tool.checkSignCode(e)
            ? !0
            : (N.Tips.show("验证码格式错误"), !1);
        }),
        (t.prototype.checkPsdInput = function () {
          var e = this._data.psd;
          return C.Tool.checkPsd(e) ? !0 : (N.Tips.show("密码格式错误"), !1);
        }),
        (t.prototype.applyH5Code = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, o, a, r;
            return __generator(this, function (s) {
              switch (s.label) {
                case 0:
                  if (((t = this._data.sphone), this.data.gobackPsd)) {
                    if (t && !this.checkPhoneInput(!0)) return [2, 1];
                    if (
                      this.data.loginMode == c.GdLoginMode.Psd &&
                      !this.checkPhoneInput()
                    )
                      return [2, 1];
                  }
                  if (t) {
                    if (!this.checkPhoneInput(!0)) return [2, 1];
                  } else if (!this.checkPhoneInput()) return [2, 1];
                  return e && !this.checkPsdInput()
                    ? [2, 1]
                    : ((i = t ? this._data.sphone : this._data.phone),
                      (o = new n.Message(pb.EUserProtocol.C2S_H5_AUTH_CODE)),
                      (a = o.proto),
                      (a.phone = i),
                      (a.token = this.getH5LoginToken(i)),
                      (a.accountId = this.data.ukey),
                      [
                        4,
                        this.sendProtoAsync(
                          o,
                          null,
                          pb.EUserProtocol.S2C_H5_AUTH_CODE,
                        ),
                      ]);
                case 1:
                  return (
                    (o = s.sent()),
                    (r = o.proto),
                    0 != r.code && l["default"].loginConfirm(r.errMsg),
                    [2, r.code]
                  );
              }
            });
          });
        }),
        (t.prototype.getH5LoginToken = function (e) {
          var t = T["default"].timer.serverTime || Date.now(),
            i = A.TimeUtil.formatTime(t, "yyyyMMddHHmm"),
            o = C.Tool.fillBefore(e, "0", 16);
          return O.EncryptUtil.aesEncrypt(i, o, "1234567890123456");
        }),
        (t.prototype.applyH5LoginByCode = function () {
          if (!this.checkPhoneInput() || !this.checkCodeInput()) return !1;
          var e = this._data.phone,
            t = this._data.code,
            i = new n.Message(pb.EUserProtocol.C2S_H5_PHONELOGIN),
            o = i.proto;
          ((o.phone = e),
            (o.code = t),
            (o.token = this.getH5LoginToken(e)),
            (o.subchannel = go.subchannel || ""),
            this.sendProto(i));
        }),
        (t.prototype.guopanAlterChannelReq = function () {
          if (!this.checkPhoneInput() || !this.checkPsdInput()) return !1;
          var e = this._data.phone,
            t = this._data.psd,
            i = this._data.code,
            o = this._data.ukey.toString(),
            a = new n.Message(pb.EUserProtocol.C2S_GUOPAN_ALTER_CHANNEL),
            r = a.proto;
          ((r.accountid = o),
            (r.phone = e),
            (r.token = this.getH5LoginToken(e)),
            (r.code = i),
            (r.passwd = t),
            console.info(r + "果盘请求数据"),
            this.sendProto(a));
        }),
        (t.prototype.guopanAlterChannelRes = function (e) {
          var t = e.body,
            i = t.proto;
          (console.info(i.code + "状态码"),
            0 == i.code
              ? g["default"].showWin(
                  R.ModName.Login,
                  R.LoginViewType.GuoPanBindView,
                )
              : l["default"].loginConfirm(i.msg));
        }),
        (t.prototype.registReq = function () {
          var e = this._data.account,
            t = this._data.psd,
            i = new n.Message(pb.EUserProtocol.C2S_H5_REGISTER),
            o = i.proto;
          ((o.accountname = e),
            (o.passwd = t),
            (o.subchannel = go.subchannel || ""));
          var a = egret.localStorage.getItem(d.LocalStorageKey.REGIST_UID);
          (a ||
            ((a = e),
            egret.localStorage.setItem(d.LocalStorageKey.REGIST_UID, e)),
            (o.machineCode = a));
          var r = this._data.sphone,
            s = this._data.code;
          ((o.phone = r),
            (o.code = s),
            (o.token = this.getH5LoginToken(r)),
            this.sendProto(i));
        }),
        (t.prototype.registRes = function (e) {
          var t = e instanceof o["default"] ? e.body.proto : e;
          if (0 != t.errCode) return void l["default"].loginConfirm(t.errMsg);
          P["default"].sendNt(d.LoginEvent.LOGIN_REGIST_STATE);
          var i = t.accountid,
            n = t.sessionid,
            a = t.loginSetting,
            r = t.accountname;
          ((this.needIdAuth = t.need_id_auth),
            (this.needBindPhone = t.need_bind_phone),
            (this._data.accountName = t.accountname),
            (t.photoServerIp = ""),
            go.isReLogin ||
              (M.loginStorage.set(d.LocalStorageKey.LoginData, t),
              M.loginStorage.set(d.LocalStorageKey.SESSION_ID, n)),
            this.onLogin(Long.fromString(i), n, a, r),
            (this._data.phoneNum = ""),
            (this._data.code = ""),
            (this._data.psd = ""),
            (this._data.account = ""));
        }),
        (t.prototype.applyH5LoginByPSW = function () {
          if (!this.checkPsdInput()) return !1;
          var e = this._data.account,
            t = this._data.phone,
            i = this._data.psd,
            o = new n.Message(pb.EUserProtocol.C2S_H5_PASSWORD_LOGIN),
            a = o.proto;
          ((a.accountname =
            this.data.loginMode == c.GdLoginMode.Account ? e : t),
            (a.password = i),
            (a.subchannel = go.subchannel || ""),
            this.sendProto(o));
        }),
        (t.prototype.appleResetPsd = function () {
          return __awaiter(this, void 0, Promise, function () {
            var e, t, i, o, a, r, s;
            return __generator(this, function (u) {
              switch (u.label) {
                case 0:
                  return this.checkCodeInput() &&
                    this.checkPsdInput() &&
                    this.checkPhoneInput(!0)
                    ? ((e =
                        this._data.loginMode == c.GdLoginMode.Account
                          ? this._data.account
                          : this._data.phone),
                      (t = this._data.sphone),
                      (i = this._data.code),
                      (o = this._data.psd),
                      (a = new n.Message(
                        pb.EUserProtocol.C2S_H5_ALTER_PASSWORD,
                      )),
                      (r = a.proto),
                      (r.accountname = e),
                      (r.phone = t),
                      (r.code = i),
                      (r.new_password = o),
                      (r.token = this.getH5LoginToken(t)),
                      [
                        4,
                        this.sendProtoAsync(
                          a,
                          null,
                          pb.EUserProtocol.S2C_H5_ALTER_PASSWORD,
                        ),
                      ])
                    : [2, !1];
                case 1:
                  return (
                    (a = u.sent()),
                    (s = a.proto),
                    0 != s.code
                      ? (l["default"].loginConfirm(s.msg), [2, !1])
                      : (N.Tips.show("修改密码成功"), [2, !0])
                  );
              }
            });
          });
        }),
        (t.prototype.bindSafePhone = function () {
          return __awaiter(this, void 0, Promise, function () {
            var e, t, i, o, a, r, s;
            return __generator(this, function (u) {
              switch (u.label) {
                case 0:
                  return this.checkPhoneInput(!0) && this.checkCodeInput()
                    ? ((e = this._data.sphone),
                      (t = this._data.code),
                      (i = this._data.account),
                      (o = new n.Message(pb.EUserProtocol.C2S_H5_BIND_PHONE)),
                      (a = o.proto),
                      (a.accountname = this._data.accountName),
                      (a.phone = e),
                      (a.code = t),
                      (a.token = this.getH5LoginToken(e)),
                      [
                        4,
                        this.sendProtoAsync(
                          o,
                          null,
                          pb.EUserProtocol.S2C_H5_BIND_PHONE,
                        ),
                      ])
                    : [2, !1];
                case 1:
                  return (
                    (o = u.sent()),
                    (r = o.proto),
                    0 != r.code
                      ? (l["default"].loginConfirm(r.msg), [2, !1])
                      : (N.Tips.show("绑定成功"),
                        (this.needBindPhone = !1),
                        (s = M.loginStorage.getJson(
                          d.LocalStorageKey.LoginData,
                        )),
                        s &&
                          ((s.need_bind_phone = !1),
                          M.loginStorage.set(d.LocalStorageKey.LoginData, s)),
                        [2, !0])
                  );
              }
            });
          });
        }),
        (t.prototype.pictureVerify = function () {
          var e = this,
            t = this._data.newGameIp;
          gg.webReqGet(t, null, function () {
            (console.log("请求成功"), e.pictureVerifyCp());
          });
        }),
        (t.prototype.pictureVerifyCp = function () {
          return __awaiter(this, void 0, Promise, function () {
            var e, t, i, o, a, r, s;
            return __generator(this, function (l) {
              switch (l.label) {
                case 0:
                  return (
                    (e = new n.Message(pb.EUserProtocol.C2S_H5_PICTURE_VERIFY)),
                    (t = e.proto),
                    (t.type = 1),
                    [
                      4,
                      this.sendProtoAsync(
                        e,
                        null,
                        pb.EUserProtocol.S2C_H5_PICTURE_VERIFY,
                      ),
                    ]
                  );
                case 1:
                  if (((e = l.sent()), (i = e.proto), (o = i.data), !o))
                    return [2, !1];
                  for (
                    this._data.codeData = o, a = "", r = "", s = 0;
                    s < i.color.length;
                    s++
                  )
                    ((r = s == i.color.length - 1 ? "" : ","),
                      (a += i.color[s] + r));
                  return (
                    (this._data.colorStr = a),
                    P["default"].sendNt(d.LoginEvent.GAMEIP_SUCESS),
                    [2, !0]
                  );
              }
            });
          });
        }),
        (t.prototype.pictureVerifyBack = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, o, a;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (t = new n.Message(
                      pb.EUserProtocol.C2S_H5_PICTURE_VERIFY_BACK,
                    )),
                    (i = t.proto),
                    (i.type = 1),
                    (i.code = e),
                    [
                      4,
                      this.sendProtoAsync(
                        t,
                        null,
                        pb.EUserProtocol.S2C_H5_PICTURE_VERIFY_BACK,
                      ),
                    ]
                  );
                case 1:
                  return (
                    (t = r.sent()),
                    (o = t.proto),
                    (a = o.rs),
                    0 == a
                      ? ((this._data.codeCheck = !0),
                        N.Tips.show("验证成功"),
                        [2, !0])
                      : ((this._data.codeCheck = !1),
                        N.Tips.show("图形码错误"),
                        [2, !1])
                  );
              }
            });
          });
        }),
        (t.prototype.reBindPhone = function () {
          return __awaiter(this, void 0, Promise, function () {
            var e, t, i, o, a;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return this.checkPhoneInput(!0) && this.checkCodeInput()
                    ? ((e = this._data.sphone),
                      (t = this._data.code),
                      (i = new n.Message(
                        pb.EUserProtocol.C2S_H5_CLEAR_PRIVACY,
                      )),
                      (o = i.proto),
                      (o.phone = e),
                      (o.code = t),
                      (o.token = this.getH5LoginToken(e)),
                      [
                        4,
                        this.sendProtoAsync(
                          i,
                          null,
                          pb.EUserProtocol.S2C_H5_CLEAR_PRIVACY,
                        ),
                      ])
                    : [2, !1];
                case 1:
                  return (
                    (i = r.sent()),
                    (a = i.proto),
                    0 == a.code
                      ? (this.removeLoginCache(),
                        l["default"].loginConfirm("解绑成功，即将返回登录界面"),
                        [2, !0])
                      : [2]
                  );
              }
            });
          });
        }),
        (t.prototype.appleInitPsd = function () {
          return __awaiter(this, void 0, Promise, function () {
            var e, t, i, o, a, r;
            return __generator(this, function (s) {
              switch (s.label) {
                case 0:
                  return this.checkPsdInput()
                    ? ((e = this._data),
                      e.ukey && e.sessionID
                        ? ((t = e.psd),
                          (i = new n.Message(
                            pb.EUserProtocol.C2S_H5_ALTER_PASSWORD_BY_SESSION,
                          )),
                          (o = i.proto),
                          (o.accountid = e.ukey.toString()),
                          (o.sessionid = e.sessionID + ""),
                          (o.new_password = t),
                          [
                            4,
                            this.sendProtoAsync(
                              i,
                              null,
                              pb.EUserProtocol.S2C_H5_ALTER_PASSWORD,
                            ),
                          ])
                        : [2])
                    : [2, !1];
                case 1:
                  return (
                    (i = s.sent()),
                    (a = i.proto),
                    0 != a.code
                      ? (l["default"].loginConfirm(a.msg), [2, !1])
                      : ((this.needSetPsd = !1),
                        N.Tips.show("设置密码成功"),
                        (r = M.loginStorage.getJson(
                          d.LocalStorageKey.LoginData,
                        )),
                        r &&
                          ((r.need_password = !1),
                          M.loginStorage.set(d.LocalStorageKey.LoginData, r)),
                        [2, !0])
                  );
              }
            });
          });
        }),
        (t.prototype.applyNotice = function () {
          return __awaiter(this, void 0, Promise, function () {
            var e;
            return __generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    (e = new n.Message(pb.EUserProtocol.C2S_LOGIN_NOTICE)),
                    [
                      4,
                      this.sendProtoAsync(
                        e,
                        null,
                        pb.EUserProtocol.S2C_LOGIN_NOTICE,
                      ),
                    ]
                  );
                case 1:
                  return (
                    (e = t.sent()),
                    [2, null === e || void 0 === e ? void 0 : e.proto.notice]
                  );
              }
            });
          });
        }),
        t
      );
    })(r["default"]);
  t["default"] = D;
});
