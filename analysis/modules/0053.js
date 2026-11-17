(function (e, t, i) {
  "use strict";
  var o, n, a, r, s;
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.BACK_STROCK_COLOR =
      t.BACK_COLOR =
      t.BACK_SERVER_ICONS =
      t.BACK_ICONS =
      t.LoginTips =
      t.LocalStorageKey =
      t.ServerTypeName =
      t.ServerType =
      t.ServerStatusName =
      t.ServerStatus =
      t.LOGIN_CACHE_TIME_OUT =
      t.ReconnectCntMax =
      t.LoginEvent =
        void 0));
  var l;
  (!(function (e) {
    ((e.UPDATE_CURRENT_SERVER = "update_current_server"),
      (e.TAP_SELECT_SERVER = "tap_select_server"),
      (e.TAP_SERVER_TYPE = "tap_server_type"),
      (e.SHOW_NOTICE = "show_notice"),
      (e.PRELOAD_PROGRESS = "preload_progress"),
      (e.LOAD_GAME_RES = "load_game_res"),
      (e.ON_ACCOUNT_LOGIN = "on_account_login"),
      (e.ON_ROLE_LIST = "on_role_list"),
      (e.ON_ROLE_CREATE = "on_role_create"),
      (e.ON_ROLE_LOGIN = "on_role_login"),
      (e.ON_ROLE_LOGOUT = "on_role_logout"),
      (e.USER_RANDOM_NAME = "user_random_name"),
      (e.TRY_RECONNECT = "try_reconnect"),
      (e.LISTPLAYER_UPDATE = "listplayer_update"),
      (e.START_PING = "START_PING"),
      (e.STOP_PING = "STOP_PING"),
      (e.UPDATE_PRIVACY_POLICY = "update_privacy_policy"),
      (e.SHOW_LOGIN = "show_login"),
      (e.LOGIN_REGIST_STATE = "login_regist_state"),
      (e.GAMEIP_SUCESS = "GAMEIP_SUCESS"),
      (e.CODE_FAIL = "CODE_FAIL"));
  })((l = t.LoginEvent || (t.LoginEvent = {}))),
    (t.ReconnectCntMax = 5),
    (t.LOGIN_CACHE_TIME_OUT = 24e4));
  var u;
  (!(function (e) {
    ((e[(e.FREE = 0)] = "FREE"),
      (e[(e.BUSYNESS = 1)] = "BUSYNESS"),
      (e[(e.HOT = 2)] = "HOT"),
      (e[(e.FULL = 3)] = "FULL"),
      (e[(e.STOP = 4)] = "STOP"),
      (e[(e.TEST = 5)] = "TEST"),
      (e[(e.CLOSE = 6)] = "CLOSE"),
      (e[(e.MIX = 7)] = "MIX"));
  })((u = t.ServerStatus || (t.ServerStatus = {}))),
    (t.ServerStatusName =
      ((o = {}),
      (o[u.FREE] = "流畅"),
      (o[u.BUSYNESS] = "繁忙"),
      (o[u.HOT] = "火爆"),
      (o[u.FULL] = "爆满"),
      (o[u.STOP] = "维护"),
      (o[u.TEST] = "测试"),
      (o[u.CLOSE] = "关闭"),
      (o[u.MIX] = "跨服"),
      o)));
  var _;
  (!(function (e) {
    ((e[(e.LOGIN = 1)] = "LOGIN"), (e[(e.GAME = 2)] = "GAME"));
  })((_ = t.ServerType || (t.ServerType = {}))),
    (t.ServerTypeName = { 1: "登录服", 2: "游戏服" }));
  var d;
  !(function (e) {
    ((e.ACCOUNT = "ACCOUNT"),
      (e.LAST_SERVER_ID = "LAST_SERVER_ID"),
      (e.LOGIN_SERVER = "LOGIN_SERVER"),
      (e.LOCAL_TO_OUTER_SERVER = "LOCAL_TO_OUTER_SERVER"),
      (e.GD_PRIVACY_POLICY = "gd_privacy_policy"),
      (e.LoginData = "LoginData"),
      (e.PHONE_NUM = "phone_num"),
      (e.PHONE_AREA = "phone_area"),
      (e.RememberPsd = "RememberPsd"),
      (e.SESSION_ID = "session_id"),
      (e.ONLINE_TIME = "online_time"),
      (e.RECONNECT_RECORD = "reconnect_record"),
      (e.BagSellList = "BagSellList"),
      (e.NoticeRed = "NoticeRed"),
      (e.NoticeContent = "NoticeContent"),
      (e.Loing_Account = "login_account"),
      (e.loginNotice = "loginNotice"),
      (e.loginBug = "loginBug"),
      (e.noticeDay = "noticeDay"),
      (e.REGIST_UID = "REGIST_UID"),
      (e.levelUpTip = "levelUpTip"));
  })((d = t.LocalStorageKey || (t.LocalStorageKey = {})));
  var p;
  (!(function (e) {
    ((e.UpdateTips = "游戏有更新，请重新进入游戏"),
      (e.ServerUrlError = "服务端地址或端口错误"));
  })((p = t.LoginTips || (t.LoginTips = {}))),
    (t.BACK_ICONS =
      ((n = {}),
      (n[u.FREE] = "common_icon_linglu"),
      (n[u.BUSYNESS] = "common_icon_ling2"),
      (n[u.HOT] = "common_icon_linghong"),
      (n[u.FULL] = "common_icon_lingzi"),
      (n[u.STOP] = "common_icon_linghui"),
      (n[u.TEST] = "common_icon_linghui"),
      (n[u.CLOSE] = "common_icon_linghui"),
      (n[u.MIX] = "common_icon_linglu"),
      n)),
    (t.BACK_SERVER_ICONS =
      ((a = {}),
      (a[u.FREE] = "start_sign_green"),
      (a[u.BUSYNESS] = "start_sign_yellow"),
      (a[u.HOT] = "start_sign_red"),
      (a[u.FULL] = "start_sign_purple"),
      (a[u.STOP] = "start_sign_ash"),
      (a[u.TEST] = "start_sign_ash"),
      (a[u.CLOSE] = "start_sign_ash"),
      (a[u.MIX] = "start_sign_green"),
      a)),
    (t.BACK_COLOR =
      ((r = {}),
      (r[u.FREE] = 8967498),
      (r[u.BUSYNESS] = 16760832),
      (r[u.HOT] = 16737123),
      (r[u.FULL] = 16742385),
      (r[u.STOP] = 12895428),
      (r[u.TEST] = 12895428),
      (r[u.CLOSE] = 12895428),
      (r[u.MIX] = 8967498),
      r)),
    (t.BACK_STROCK_COLOR =
      ((s = {}),
      (s[u.FREE] = 1657631),
      (s[u.BUSYNESS] = 6375712),
      (s[u.HOT] = 5185825),
      (s[u.FULL] = 5121876),
      (s[u.STOP] = 3487029),
      (s[u.TEST] = 3487029),
      (s[u.CLOSE] = 3487029),
      (s[u.MIX] = 1657631),
      s)));
});
