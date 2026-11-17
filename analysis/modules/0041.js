(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(43),
    a = i(22),
    r = i(11),
    s = i(2),
    l = i(4),
    u = i(10),
    _ = i(23),
    d = i(12),
    p = i(8),
    c = i(77),
    h = i(1),
    f = i(24),
    T = i(18),
    E = i(19),
    y = i(5),
    g = i(62),
    v = i(31),
    S = i(56),
    I = i(21),
    m = i(20),
    A = i(30),
    C = i(33),
    P = i(32),
    R = i(16),
    O = i(0),
    N = i(42),
    M = i(57),
    L = i(103),
    w = i(102),
    b = i(35),
    x = i(78),
    D = i(179),
    B = (function (e) {
      function t() {
        var i = e.call(this) || this;
        return (
          (i.times = 0),
          (i.times1 = 0),
          (i.countryBookNum = 0),
          (i.masterList = new f["default"]()),
          (i.actorSearchType = t.ACTOR_SELL_FIND_TYPE_DF),
          (i.actorBuyList = []),
          (i.jobSortIDTable = [
            -1,
            l["default"].JOB_RANGER,
            l["default"].JOB_XIUZHEN,
            l["default"].JOB_WARRIOR,
            l["default"].JOB_WIZARD,
            l["default"].JOB_NEW,
            l["default"].JOB_BACKUP2,
            l["default"].JOB_BACKUP3,
            l["default"].JOB_CHUISHI,
            l["default"].JOB_LANWU,
          ]),
          (i.sexSortIDTable = [
            -1,
            l["default"].SEX_MALE,
            l["default"].SEX_FEMALE,
          ]),
          (i.SortEvent = [
            t.ACTOR_SELL_FIND_ORDER_BY_DF,
            t.ACTOR_SELL_FIND_ORDER_BY_LEVEL_ASC,
            t.ACTOR_SELL_FIND_ORDER_BY_LEVEL_DESC,
            t.ACTOR_SELL_FIND_ORDER_BY_MONEY_ASC,
            t.ACTOR_SELL_FIND_ORDER_BY_MONEY_DESC,
          ]),
          i
        );
      }
      return (
        __extends(t, e),
        (t.prototype.getOwnerId = function () {
          return this.ownerId;
        }),
        (t.prototype.setOwnerId = function (e) {
          this.ownerId = e;
        }),
        (t.prototype.getLeaveTime = function (e) {
          void 0 === e && (e = !0);
          var t =
            (e ? this.getTimes() : this.getTimes1()) -
            R["default"].timer.serverTime;
          if (0 >= t) return "";
          var i = Math.floor(t / I["default"].MILLIS_IN_MINUTE);
          return (
            t % I["default"].MILLIS_IN_MINUTE > 0 && i++,
            p.Tool.getTimeStrByMin(i, !0)
          );
        }),
        (t.prototype.getOnlineDesc = function () {
          if (this.isStatusBit(d.ModelConst.STATUS_ONLINE))
            return u.GameText.getText(u.GameText.TI_ON_LINE);
          var e = p.Tool.getTimeStrByMin(this.times, !1);
          return 1 == p.Tool.isNullText(e)
            ? u.GameText.getText(u.GameText.TI_UNKNOWN_STATUS)
            : e + u.GameText.getText(u.GameText.TI_BEFORE);
        }),
        (t.prototype.setMapId = function (e) {
          this.mapId = e;
        }),
        (t.prototype.getMapId = function () {
          return this.mapId;
        }),
        (t.prototype.setMapName = function (e) {
          this.mapName = e;
        }),
        (t.prototype.getMapName = function () {
          return this.mapName;
        }),
        (t.prototype.setTimes = function (e) {
          this.times = e;
        }),
        (t.prototype.setTimes1 = function (e) {
          this.times1 = e;
        }),
        (t.prototype.getTimes1 = function () {
          return this.times1;
        }),
        (t.prototype.getTimes = function () {
          return this.times;
        }),
        (t.prototype.getModel = function () {
          return this.model;
        }),
        (t.prototype.setModel = function (e) {
          this.model = e;
        }),
        (t.prototype.setSex = function (t) {
          (e.prototype.setSex.call(this, t),
            (this.icon1.low &= ~(
              d.ModelConst.LEN_SEX << d.ModelConst.OFFSET_SEX
            )),
            (this.icon1.low |=
              (t & d.ModelConst.LEN_SEX) << d.ModelConst.OFFSET_SEX));
        }),
        (t.prototype.setRace = function (t) {
          (e.prototype.setRace.call(this, t),
            (this.icon1.low &= ~(
              d.ModelConst.LEN_RACE << d.ModelConst.OFFSET_RACE
            )),
            (this.icon1.low |=
              (t & d.ModelConst.LEN_RACE) << d.ModelConst.OFFSET_RACE));
        }),
        (t.prototype.setJob = function (t) {
          (e.prototype.setJob.call(this, t),
            (this.icon1.low &= ~(
              d.ModelConst.LEN_JOB << d.ModelConst.OFFSET_JOB
            )),
            (this.icon1.low |=
              (t & d.ModelConst.LEN_JOB) << d.ModelConst.OFFSET_JOB));
        }),
        (t.getRandomCreatePlayer = function () {
          var e = new t();
          return (
            e.setSex(
              p.Tool.randParam_2(
                l["default"].SEX_MALE,
                l["default"].SEX_FEMALE,
              ),
            ),
            e.setRace(
              p.Tool.randParam_2(
                l["default"].RACE_EAST,
                l["default"].RACE_WEAT,
              ),
            ),
            e.initJobByRace(0),
            (e.model = 0),
            e
          );
        }),
        (t.prototype.initJobByRace = function (e) {
          this.setJob(l["default"].getJobByRace(this.race, e));
        }),
        (t.prototype.setStyleDataToIcon = function () {
          var e = Long.fromNumber(0),
            t = this.getSex();
          e.low |= (t & d.ModelConst.LEN_SEX) << d.ModelConst.OFFSET_SEX;
          var i = this.getRace();
          e.low |= (i & d.ModelConst.LEN_RACE) << d.ModelConst.OFFSET_RACE;
          var o = this.getJob();
          ((e.low |= (o & d.ModelConst.LEN_JOB) << d.ModelConst.OFFSET_JOB),
            (e = v.ModelVo.setHandAndFeet(e)));
          var n = 1,
            a = 0,
            r = 1;
          switch (this.model) {
            case 0:
              ((n = l["default"].getCreateHair(o, t)),
                (a = l["default"].getCreateHairColor(o, t)),
                (r = 1));
              break;
            case 1:
              ((n = 2), (a = 0), (r = 1));
              break;
            case 2:
              ((n = 3), (a = 0), (r = 2));
          }
          ((e.low |=
            (n & d.ModelConst.LEN_HAIR_STYLE) <<
            d.ModelConst.OFFSET_HAIR_STYLE),
            (e.low |=
              (a & d.ModelConst.LEN_HAIR_COLOR) <<
              d.ModelConst.OFFSET_HAIR_COLOR),
            (e.low |=
              (r & d.ModelConst.LEN_FACE_STYLE) <<
              d.ModelConst.OFFSET_FACE_STYLE),
            this.setIcon1(e));
        }),
        (t.doSuperQQNotice = function () {}),
        (t.prototype.getCloseness = function () {
          return this.closeness || 0;
        }),
        (t.prototype.setCloseness = function (e) {
          this.closeness = e;
        }),
        (t.prototype.getStatus = function () {
          return this.status;
        }),
        (t.prototype.setStatus = function (e) {
          this.status = e;
        }),
        (t.prototype.isStatusBit = function (e) {
          return 0 != (this.status & e);
        }),
        (t.prototype.setStatusBit = function (e) {
          this.status |= e;
        }),
        (t.prototype.clearStatusBit = function (e) {
          this.status &= ~e;
        }),
        (t.prototype.isFlag = function (e) {
          return 0 != (this.flag & e);
        }),
        (t.addChoiceMenu = function (e, t, i, o, n, a) {
          (void 0 === n && (n = !1),
            void 0 === a && (a = ""),
            i.addElement({ type: o, name: t, isLock: n, lockDesc: a }));
        }),
        (t.addPlayerMenu = function (e, i, o, n) {
          if (null != n) {
            var a = y["default"].myPlayer;
            switch (o) {
              case t.MENU_VIEW_PHOTO:
                break;
              case t.MENU_VIEW_CARD:
                break;
              case t.MENU_VIEW_CITY:
                n.isHasCity() &&
                  t.addChoiceMenu(
                    e,
                    u.GameText.getText(u.GameText.TI_SEE_CITY),
                    i,
                    h["default"].EVENT_ALL_MENU_SEE_CITY,
                  );
                break;
              case t.MENU_INVITE_COUNTRY:
                null != a &&
                  a.getCountryId() > 0 &&
                  a.getCountryRank() >= l["default"].RANK_KING &&
                  a.getCountryRank() <= l["default"].RANK_KNIGHT &&
                  t.addChoiceMenu(
                    e,
                    u.GameText.getText(u.GameText.TI_INVITE_COUNTRY),
                    i,
                    h["default"].EVENT_ALL_MENU_INVITE_COUNTRY,
                  );
                break;
              case t.MENU_ADD_MASTER:
                null != a &&
                  0 == a.isMaster() &&
                  a.getLevel() <= 40 &&
                  t.addChoiceMenu(
                    e,
                    u.GameText.getText(u.GameText.TI_APPRENTICE),
                    i,
                    h["default"].EVENT_ALL_MENU_ADD_MASTER,
                  );
            }
          }
        }),
        (t.doShowPlayerMenu = function (e, i, n, a, r) {
          if ((void 0 === r && (r = !1), null == e)) return null;
          if (e.isTabStatus(d.ModelConst.DEL_STATUS)) return null;
          var s = y["default"].myPlayer;
          if (null == s) return null;
          var T = e.isShopMode(),
            E = e.isBattleRemote(),
            g = new f["default"](),
            S = new f["default"]();
          if (
            i == t.UI_INTO_TYPE_CHAT &&
            null != a &&
            (a.channel == l["default"].CHAT_TYPE_SERVER ||
              a.channel == l["default"].CHAT_TYPE_CROSS_SEVER_TEAM)
          )
            return S;
          var m = !1;
          switch (
            (e.getId() != y["default"].getPlayerID() &&
              e.getId() >= l["default"].ADMIN_MAX &&
              (m = !0),
            m &&
              i != t.UI_INTO_ACTOR_SELL_LIST &&
              i != t.UI_INTO_PET_BATTLE &&
              i != t.UI_INTO_CROSS_DUNGEON &&
              (t.addChoiceMenu(
                g,
                u.GameText.getText(u.GameText.TI_CHATMSG_PLAYER),
                S,
                h["default"].EVENT_ALL_MENU_CHAT,
              ),
              t.addChoiceMenu(
                g,
                u.GameText.getText(u.GameText.TI_SEE_DETAILS),
                S,
                h["default"].EVENT_ALL_MENU_SEE_INFO,
              )),
            i)
          ) {
            case t.UI_INTO_NEAR_LIST:
              (1 == E &&
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_VIEW_BATTLE),
                  S,
                  h["default"].EVENT_ALL_MENU_VIEW_BATTLE,
                ),
                1 == T &&
                  t.addChoiceMenu(
                    g,
                    u.GameText.getText(u.GameText.TI_SEE_PLAYER_SHOP),
                    S,
                    h["default"].EVENT_ALL_MENU_SEE_SHOP,
                  ),
                0 == T &&
                  (0 == s.isMember() &&
                    0 == e.isPlayerTeam() &&
                    0 == s.getMemberById(e.id) &&
                    t.addChoiceMenu(
                      g,
                      u.GameText.getText(u.GameText.TI_TEAM_INVITE),
                      S,
                      h["default"].EVENT_ALL_MENU_INVITE_TEAM,
                    ),
                  0 == s.isPlayerTeam() &&
                    t.addChoiceMenu(
                      g,
                      u.GameText.getText(u.GameText.TI_JOIN_TEAM),
                      S,
                      h["default"].EVENT_ALL_MENU_JOIN_TEAM,
                    ),
                  0 == v.ModelVo.isSameTeam(s, e) &&
                    0 == e.isMember() &&
                    t.addChoiceMenu(
                      g,
                      u.GameText.getText(u.GameText.TI_PK),
                      S,
                      h["default"].EVENT_ALL_MENU_PK,
                    )),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEND_MAIL),
                  S,
                  h["default"].EVENT_ALL_MENU_SEND_MAIL_BY_ID,
                ),
                t.addPlayerMenu(g, S, t.MENU_ADD_MASTER, e),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_MAKE_FRIEND),
                  S,
                  h["default"].EVENT_ALL_MENU_FRIEND,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_NO_TALK),
                  S,
                  h["default"].EVENT_ALL_MENU_BLACK,
                ),
                t.addPlayerMenu(g, S, t.MENU_INVITE_COUNTRY, e),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEE_CITY),
                  S,
                  h["default"].EVENT_ALL_MENU_SEE_CITY,
                ),
                p.Tool.isBit(
                  y["default"].IS_ACCOST,
                  y["default"].loginSetting,
                ) &&
                  (t.addChoiceMenu(
                    g,
                    u.GameText.getText(u.GameText.TI_SEE_ACHIEVE),
                    S,
                    h["default"].EVENT_ALL_MENU_SEE_ACHIEVE,
                  ),
                  t.addChoiceMenu(
                    g,
                    _.GameText2.STR_CHAT_UP2,
                    S,
                    c.UIDefine.EVENT_ALL_CHAT_UP,
                  )));
              break;
            case t.UI_INTO_TYPE_CHAT:
              (null != a &&
                (a.isHaveItem() &&
                  t.addChoiceMenu(
                    g,
                    u.GameText.getText(u.GameText.TI_SEE_ITEM),
                    S,
                    h["default"].EVENT_ALL_MENU_CHAT_ITEM_SEE,
                  ),
                a.isLuckMoney() &&
                  t.addChoiceMenu(
                    g,
                    _.GameText2.STR_GET_LUCKMONEY,
                    S,
                    c.UIDefine.EVENT_ALL_GET_LUACKMONEY,
                  ),
                a.isHaveMission() &&
                  t.addChoiceMenu(
                    g,
                    u.GameText.getText(u.GameText.TI_SEE_MISSION),
                    S,
                    h["default"].EVENT_ALL_MENU_CHAT_MISSION_SEE,
                  ),
                a.isCountry() &&
                  t.addChoiceMenu(
                    g,
                    u.GameText.getText(u.GameText.TI_SEE_COUNTRY),
                    S,
                    h["default"].EVENT_ALL_MENU_CHAT_COUNTRY_SEE,
                  )),
                m &&
                  (t.addChoiceMenu(
                    g,
                    u.GameText.getText(u.GameText.TI_MAKE_FRIEND),
                    S,
                    h["default"].EVENT_ALL_MENU_FRIEND,
                  ),
                  t.addChoiceMenu(
                    g,
                    u.GameText.getText(u.GameText.TI_NO_TALK),
                    S,
                    h["default"].EVENT_ALL_MENU_BLACK,
                  ),
                  t.addChoiceMenu(
                    g,
                    u.GameText.getText(u.GameText.TI_SEND_MAIL),
                    S,
                    h["default"].EVENT_ALL_MENU_SEND_MAIL_BY_ID,
                  ),
                  null == a ||
                    (a.channel != l["default"].CHAT_TYPE_MAP &&
                      a.channel != l["default"].CHAT_TYPE_PRIVATE) ||
                    (t.addChoiceMenu(
                      g,
                      u.GameText.getText(u.GameText.TI_TEAM_INVITE),
                      S,
                      h["default"].EVENT_ALL_MENU_INVITE_TEAM,
                    ),
                    t.addChoiceMenu(
                      g,
                      u.GameText.getText(u.GameText.TI_JOIN_TEAM),
                      S,
                      h["default"].EVENT_ALL_MENU_JOIN_TEAM,
                    )),
                  t.addChoiceMenu(
                    g,
                    u.GameText.getText(u.GameText.TI_SEE_CITY),
                    S,
                    h["default"].EVENT_ALL_MENU_SEE_CITY,
                  )),
                null == a ||
                  a.channel == l["default"].CHAT_TYPE_SYSTEM ||
                  a.isLuckMoney() ||
                  t.addChoiceMenu(
                    g,
                    u.GameText.getText(u.GameText.TI_CHAT_SAME_CHANNEL),
                    S,
                    h["default"].EVENT_ALL_MENU_CHAT_SAME_CHANNEL,
                  ));
              break;
            case t.UI_INTO_FRIEND_LIST:
              (t.addChoiceMenu(
                g,
                _.GameText2.STR_CHANGE_FRIEND_REMARDS,
                S,
                c.UIDefine.EVENT_ALL_CHANGE_FRIEND_REMARD,
              ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEND_MAIL),
                  S,
                  h["default"].EVENT_ALL_MENU_SEND_MAIL_BY_ID,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_DELETE_FRIEND),
                  S,
                  h["default"].EVENT_ALL_MENU_DEL_RELATION,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_NO_TALK),
                  S,
                  h["default"].EVENT_ALL_MENU_BLACK,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_RELATION_FLY),
                  S,
                  h["default"].EVENT_ALL_MENU_RELATION_FLY,
                ),
                t.addPlayerMenu(g, S, t.MENU_ADD_MASTER, e),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_TEAM_INVITE),
                  S,
                  h["default"].EVENT_ALL_MENU_INVITE_TEAM,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_JOIN_TEAM),
                  S,
                  h["default"].EVENT_ALL_MENU_JOIN_TEAM,
                ),
                t.addPlayerMenu(g, S, t.MENU_INVITE_COUNTRY, e),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEE_CITY),
                  S,
                  h["default"].EVENT_ALL_MENU_SEE_CITY,
                ));
              break;
            case t.UI_INTO_CLOSEFRIEND_LIST:
              (t.addChoiceMenu(
                g,
                _.GameText2.STR_CHANGE_FRIEND_REMARDS,
                S,
                c.UIDefine.EVENT_ALL_CHANGE_FRIEND_REMARD,
              ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEND_MAIL),
                  S,
                  h["default"].EVENT_ALL_MENU_SEND_MAIL_BY_ID,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_DELETE_FRIEND),
                  S,
                  h["default"].EVENT_ALL_MENU_DEL_RELATION,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_NO_TALK),
                  S,
                  h["default"].EVENT_ALL_MENU_BLACK,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_RELATION_FLY),
                  S,
                  h["default"].EVENT_ALL_MENU_RELATION_FLY,
                ),
                t.addPlayerMenu(g, S, t.MENU_ADD_MASTER, e),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_TEAM_INVITE),
                  S,
                  h["default"].EVENT_ALL_MENU_INVITE_TEAM,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_JOIN_TEAM),
                  S,
                  h["default"].EVENT_ALL_MENU_JOIN_TEAM,
                ),
                t.addPlayerMenu(g, S, t.MENU_INVITE_COUNTRY, e),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEE_CITY),
                  S,
                  h["default"].EVENT_ALL_MENU_SEE_CITY,
                ));
              break;
            case t.UI_INTO_BLACK_LIST:
              (t.addChoiceMenu(
                g,
                _.GameText2.STR_CHANGE_FRIEND_REMARDS,
                S,
                c.UIDefine.EVENT_ALL_CHANGE_FRIEND_REMARD,
              ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_DEL_RELATION),
                  S,
                  h["default"].EVENT_ALL_MENU_DEL_RELATION,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_MAKE_FRIEND),
                  S,
                  h["default"].EVENT_ALL_MENU_FRIEND,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEE_CITY),
                  S,
                  h["default"].EVENT_ALL_MENU_SEE_CITY,
                ));
              break;
            case t.UI_INTO_TEMP_TALK:
            case t.UI_INTO_RANK_LIST:
            case t.UI_INTO_MASTER_SHOP_LIST:
            case t.UI_INTO_LOTTERY_DRAW_PLAYER:
            case t.UI_INTO_ARENA_SEE_OTHER:
              (t.addPlayerMenu(g, S, t.MENU_ADD_MASTER, e),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_MAKE_FRIEND),
                  S,
                  h["default"].EVENT_ALL_MENU_FRIEND,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_NO_TALK),
                  S,
                  h["default"].EVENT_ALL_MENU_BLACK,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEND_MAIL),
                  S,
                  h["default"].EVENT_ALL_MENU_SEND_MAIL_BY_ID,
                ),
                t.addPlayerMenu(g, S, t.MENU_INVITE_COUNTRY, e),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEE_CITY),
                  S,
                  h["default"].EVENT_ALL_MENU_SEE_CITY,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEE_ACHIEVE),
                  S,
                  h["default"].EVENT_ALL_MENU_SEE_ACHIEVE,
                ));
              break;
            case t.UI_INTO_MASTER_LIST:
              (t.addChoiceMenu(
                g,
                _.GameText2.STR_CHANGE_FRIEND_REMARDS,
                S,
                c.UIDefine.EVENT_ALL_CHANGE_FRIEND_REMARD,
              ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEND_MAIL),
                  S,
                  h["default"].EVENT_ALL_MENU_SEND_MAIL_BY_ID,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_RELATION_FLY),
                  S,
                  h["default"].EVENT_ALL_MENU_RELATION_FLY,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_DEL_MASTER),
                  S,
                  h["default"].EVENT_ALL_MENU_DEL_MASTER,
                ),
                t.addPlayerMenu(g, S, t.MENU_INVITE_COUNTRY, e),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEE_CITY),
                  S,
                  h["default"].EVENT_ALL_MENU_SEE_CITY,
                ));
              break;
            case t.UI_INTO_COUNTRY_APPLY:
              break;
            case t.UI_INTO_COUNTRY_MEM:
              var A = s.getCountryRank();
              (A > 0 &&
                A < e.getCountryRank() &&
                (A >= l["default"].RANK_KING &&
                  A <= l["default"].RANK_KNIGHT &&
                  t.addChoiceMenu(
                    g,
                    u.GameText.getText(u.GameText.TI_LEAVE_COUNTRY),
                    S,
                    h["default"].EVENT_ALL_LEAVE_COUNTRY,
                  ),
                A >= l["default"].RANK_KING &&
                  A < l["default"].RANK_KNIGHT &&
                  t.addChoiceMenu(
                    g,
                    u.GameText.getText(u.GameText.TI_ADJUST_JOB),
                    S,
                    h["default"].EVENT_ALL_MENU_COUNTRY_ADJUST_JOB,
                  ),
                A == l["default"].RANK_KING &&
                  t.addChoiceMenu(
                    g,
                    u.GameText.getText(u.GameText.TI_BECOME_KING),
                    S,
                    h["default"].EVENT_ALL_MENU_COUNTRY_BECOME_KING,
                  )),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEND_MAIL),
                  S,
                  h["default"].EVENT_ALL_MENU_SEND_MAIL_BY_ID,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_MAKE_FRIEND),
                  S,
                  h["default"].EVENT_ALL_MENU_FRIEND,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_NO_TALK),
                  S,
                  h["default"].EVENT_ALL_MENU_BLACK,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEE_CITY),
                  S,
                  h["default"].EVENT_ALL_MENU_SEE_CITY,
                ));
              break;
            case t.UI_INTO_COUNTRY_OTHER_MEM:
              (t.addChoiceMenu(
                g,
                u.GameText.getText(u.GameText.TI_SEND_MAIL),
                S,
                h["default"].EVENT_ALL_MENU_SEND_MAIL_BY_ID,
              ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_MAKE_FRIEND),
                  S,
                  h["default"].EVENT_ALL_MENU_FRIEND,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_NO_TALK),
                  S,
                  h["default"].EVENT_ALL_MENU_BLACK,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEE_CITY),
                  S,
                  h["default"].EVENT_ALL_MENU_SEE_CITY,
                ));
              break;
            case t.UI_INTO_SOLDIER_APPLY:
              break;
            case t.UI_INTO_SOLDIER_LIST:
              (t.addChoiceMenu(
                g,
                u.GameText.getText(u.GameText.TI_ARMY_DELETE),
                S,
                h["default"].EVENT_ALL_SOLDIER_REMOVE,
              ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEND_MAIL),
                  S,
                  h["default"].EVENT_ALL_MENU_SEND_MAIL_BY_ID,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_MAKE_FRIEND),
                  S,
                  h["default"].EVENT_ALL_MENU_FRIEND,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_NO_TALK),
                  S,
                  h["default"].EVENT_ALL_MENU_BLACK,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEE_CITY),
                  S,
                  h["default"].EVENT_ALL_MENU_SEE_CITY,
                ));
              break;
            case t.UI_INTO_WARTOP_LIST:
              t.addChoiceMenu(
                g,
                u.GameText.getText(u.GameText.TI_SEND_MAIL),
                S,
                h["default"].EVENT_ALL_MENU_SEND_MAIL_BY_ID,
              );
              break;
            case t.UI_INTO_ACTOR_SELL_LIST:
              (t.addChoiceMenu(
                g,
                u.GameText.getText(u.GameText.TI_BUY_PLAYER),
                S,
                h["default"].EVENT_ACTOR_BUY_PLAYER,
              ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SHOPPLAYER_INFO),
                  S,
                  h["default"].EVENT_ALL_MENU_SHOPPLAYER_INFO,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SHOPPLAYER_BAG),
                  S,
                  h["default"].EVENT_ALL_MENU_SHOPPLAYER_BAG,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEE_COUNTRY),
                  S,
                  h["default"].EVENT_ALL_MENU_SHOPPLAYER_COUNTRY,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEE_CITY),
                  S,
                  h["default"].EVENT_ALL_MENU_SHOPPLAYER_CITY,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEE_PET),
                  S,
                  h["default"].EVENT_ALL_MENU_SHOPPLAYER_PETLIST,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEE_STORE),
                  S,
                  h["default"].EVENT_ALL_MENU_SHOPPLAYER_STORE,
                ));
              var C = u.GameText.STR_VIP;
              (y["default"].isQQVip && (C = u.GameText.STR_QQ_DIAMOND),
                t.addChoiceMenu(
                  g,
                  I["default"].manageString(u.GameText.STR_VIP_STORAGE_SEE, C),
                  S,
                  h["default"].EVENT_ALL_MENU_SHOPPLAYER_STORE_VIP,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_SEE_ACHIEVE),
                  S,
                  h["default"].EVENT_ALL_MENU_SEE_ACHIEVE_SHOP,
                ),
                t.addChoiceMenu(
                  g,
                  u.GameText.getText(u.GameText.TI_CANTACT_SELLER),
                  S,
                  h["default"].EVENT_ALL_MENU_CANTACT_SELLER,
                ));
              break;
            case t.UI_INTO_PET_BATTLE:
              if (e.getId() == y["default"].getPlayerID()) break;
              (t.addChoiceMenu(
                g,
                u.GameText.PET_BATTLE_3V3,
                S,
                h["default"].EVENT_BATTLE_3V3_WORLD,
              ),
                t.addChoiceMenu(
                  g,
                  u.GameText.PET_BATTLE_5V5,
                  S,
                  h["default"].EVENT_BATTLE_5V5_WORLD,
                ));
              break;
            case t.UI_INTO_CROSS_DUNGEON:
              if (e.getId() == y["default"].getPlayerID()) break;
              if (null != a && a.dungeonTeamId) {
                var P = o["default"].getProxy(
                  O.ModName.CrossServerActivity,
                  O.ProxyType.CrossServerActivity,
                );
                if (a.dungeonTeamId == P.data.teamID) break;
              }
              t.addChoiceMenu(
                g,
                u.GameText.JOIN_TEAM,
                S,
                h["default"].EVENT_CROSS_DUNGEON_JOIN_TEAM,
              );
          }
          return S;
        }),
        (t.doInviteTeamMsg = function (e, t, i) {
          if ((void 0 === i && (i = !1), null == e || null == t)) return !1;
          if (t.isPlayerTeam())
            return (
              h["default"].alertMessage(
                u.GameText.STR_INIVITE_TEAM_OTHER_PLAYER,
              ),
              !1
            );
          if (e.isMember())
            return (
              h["default"].alertMessage(u.GameText.STR_INIVITE_TEAM_IS_MEMBER),
              !1
            );
          if (!y["default"].isTeam()) return !1;
          var o = T["default"].createInviteTeamMsg(
            E["default"].TEAM_CREATE_TYPE_INVITE,
            t.getId(),
            i,
          );
          return (
            T["default"].sendRequest(o),
            g["default"].addSystemChat(
              p.Tool.manageString(u.GameText.STR_INIVITE_TEAM, t.getName()),
            ),
            !0
          );
        }),
        (t.doDelTeamMsg = function (e, t) {
          if ((void 0 === t && (t = !0), null == e)) return !1;
          if (t && 0 == e.isLeader())
            return (
              h["default"].alertMessage(u.GameText.STR_DEL_Team_IS_MEMBER),
              !1
            );
          var i = T["default"].createSetTeamMsg(
            E["default"].TEAM_SET_DISBAND,
            0,
          );
          return (
            (this.teamSetType = E["default"].TEAM_SET_DISBAND),
            n["default"].Service.onProto(
              E["default"].CG_TEAM_SET,
              r["default"].alloc(this, this.processTeamSetMsg, [
                e,
                null,
                E["default"].TEAM_SET_DISBAND,
              ]),
            ),
            T["default"].sendRequest(i),
            !0
          );
        }),
        (t.doChangeLeaderMsg = function (e, t) {
          if (null == e || null == t) return !1;
          if (0 == e.isPlayerLeader())
            return (
              h["default"].alertMessage(u.GameText.STR_CHANGE_LEADER_IS_MEMBER),
              !1
            );
          var i = T["default"].createSetTeamMsg(
            E["default"].TEAM_SET_CHANGE_CAPTAIN,
            t.getId(),
          );
          return (
            (this.teamSetType = E["default"].TEAM_SET_CHANGE_CAPTAIN),
            n["default"].Service.onProto(
              E["default"].CG_TEAM_SET,
              r["default"].alloc(this, this.processTeamSetMsg, [
                e,
                t,
                E["default"].TEAM_SET_CHANGE_CAPTAIN,
              ]),
            ),
            T["default"].sendRequest(i),
            !0
          );
        }),
        (t.doKickTeamerMsg = function (e, t) {
          if (null == e || null == t) return !1;
          if (0 == e.isPlayerLeader())
            return (
              h["default"].alertMessage(u.GameText.STR_KICK_TEAM_IS_MEMBER),
              !1
            );
          var i = T["default"].createSetTeamMsg(
            E["default"].TEAM_SET_REMOVE_MEMBER,
            t.getId(),
          );
          return (
            (this.teamSetType = E["default"].TEAM_SET_REMOVE_MEMBER),
            n["default"].Service.onProto(
              E["default"].CG_TEAM_SET,
              r["default"].alloc(this, this.processTeamSetMsg, [
                e,
                t,
                E["default"].TEAM_SET_REMOVE_MEMBER,
              ]),
            ),
            T["default"].sendRequest(i),
            !0
          );
        }),
        (t.processTeamSetMsg = function (e, t, i, n) {
          var a = n.body,
            r = a.getByte();
          return 0 != r
            ? void h["default"].alertMessage(
                a.getString(),
                u.GameText.getText(u.GameText.TI_ERROR),
              )
            : (this.teamSetType == E["default"].TEAM_SET_REMOVE_MEMBER
                ? (e.removeMember(t.getId()),
                  h["default"].alertMessage(
                    u.GameText.STR_KICK_TEAM_MEMBER_SUCCEE,
                  ))
                : this.teamSetType == E["default"].TEAM_SET_DISBAND &&
                  (y["default"].dismissTeam(e.getLeaderID()),
                  h["default"].alertMessage(u.GameText.STR_DEL_TEAM_SUCCEE)),
              o["default"].sendNt(s.TeamEvent.Team),
              void o["default"].sendNt(
                s.MainEvent.ON_MAIN_ICON,
                l["default"].ICON_TYPE_TEAM,
              ));
        }),
        (t.doJoinTeamMsg = function (e, t) {
          if (null == e || null == t) return !1;
          if (e.isPlayerTeam())
            return (
              h["default"].alertMessage(u.GameText.STR_JOINTEAM_IS_PLAYER_TEAM),
              !1
            );
          if (!y["default"].isTeam()) return !1;
          var i = T["default"].createInviteTeamMsg(
            E["default"].TEAM_CREATE_TYPE_JOIN,
            t.getId(),
          );
          return (
            (this.teamSetType = E["default"].TEAM_SET_REMOVE_MEMBER),
            n["default"].Service.onProto(
              E["default"].CG_TEAM_SET,
              r["default"].alloc(this, this.processTeamSetMsg, [
                e,
                t,
                E["default"].TEAM_SET_REMOVE_MEMBER,
              ]),
            ),
            T["default"].sendRequest(i),
            g["default"].addSystemChat(
              p.Tool.manageString(u.GameText.STR_JOINTEAM, t.getName()),
            ),
            !0
          );
        }),
        (t.fromBytesToCountryAssingMem = function (e) {
          if (null == e) return null;
          var i = new t();
          (i.setId(e.getInt()),
            i.setName(e.getString()),
            i.setLevel(e.getByte()),
            i.setJob(e.getByte()),
            i.setSex(e.getByte()),
            i.setRace(e.getByte()),
            i.setCountryRank(e.getByte()),
            (i.countryHonor = e.getInt()),
            (i.countryBookNum = e.getShort()));
          var o = e.getBoolean();
          0 == o
            ? (i.times = e.getInt())
            : i.setStatusBit(d.ModelConst.STATUS_ONLINE);
          var n = e.getByte();
          if (
            p.Tool.isBit(d.ModelConst.COUNTRY_MEMBER_IS_VIP, n) ||
            p.Tool.isBit(d.ModelConst.COUNTRY_MEMBER_IS_VIP_CQ, n)
          ) {
            var a = e.getByte();
            i.setVipLevel(a);
          }
          var r = e.getByte();
          return (
            1 == r
              ? i.setStatusBit(d.ModelConst.STATUS_IS_TEACHER)
              : 2 == r && i.setStatusBit(d.ModelConst.STATUS_IS_GM),
            i
          );
        }),
        (t.prototype.getListDesc = function (e) {
          var t = new A["default"](),
            i = this.name;
          return (
            1 != p.Tool.isNullText(this.remark) && e && (i = this.remark),
            t.append(i),
            t.append(
              "(" +
                I["default"].manageString(
                  u.GameText.getText(u.GameText.TI_LEVEL),
                  this.level + "",
                ),
            ),
            1 == this.isStatusBit(d.ModelConst.STATUS_ONLINE)
              ? t.append(" " + u.GameText.getText(u.GameText.TI_ON_LINE))
              : t.append(" " + u.GameText.STR_LIST_DESC_NOT_ONLINE),
            null != y["default"].myPlayer &&
              y["default"].myPlayer.partnerId == this.id &&
              t.append(" " + u.GameText.STR_LIST_DESC_PARTNER),
            this.model == l["default"].RELATION_MASTER
              ? t.append(" " + u.GameText.STR_LIST_DESC_RELATION_MASTER)
              : this.model == l["default"].RELATION_PRENTICE &&
                t.append(" " + u.GameText.STR_LIST_DESC_RELATION_PRENTICE),
            t.append(")"),
            t.toString()
          );
        }),
        (t.fromBytesToMasterList = function (e) {
          if (null == e) return null;
          var i = new t();
          ((i.id = e.getInt()),
            (i.name = e.getString()),
            (i.flag = e.getByte()),
            (i.job = e.getByte()),
            (i.sex = e.getByte()),
            (i.race = e.getByte()),
            (i.manifesto = e.getString()),
            (i.level = e.getByte()),
            (i.vipLevel = e.getByte()));
          var o = e.getBoolean();
          return (o && i.setStatusBit(d.ModelConst.STATUS_ONLINE), i);
        }),
        (t.doRelationAddMaster = function (e) {
          n["default"].Service.onProto(
            E["default"].CG_RELATION_MASTER_ADD,
            r["default"].alloc(this, this.relationAddMasterCallBack, null, !0),
          );
          var t = T["default"].createRelationAddMaster(e.getId());
          T["default"].sendRequest(t);
        }),
        (t.relationAddMasterCallBack = function (e) {
          var t = e.body;
          if (t) {
            var i = t.getByte();
            return 0 > i
              ? void h["default"].errorMessage(t.getString())
              : void h["default"].alertMessage(
                  u.GameText.STR_REQUEST_ADD_MASTER,
                );
          }
        }),
        (t.doRelationDelMaster = function (e) {
          h["default"].alertMessage(
            I["default"].manageString(
              u.GameText.STR_DEL_MASTER_ASK_CON,
              m["default"].makeColorString(
                e.getListDesc(!1),
                I["default"].COLOR_GREEN,
              ),
            ),
            u.GameText.getText(u.GameText.TI_DEL_MASTER),
            r["default"].alloc(
              this,
              this.doRelationDelMasterMsg,
              [e.getId()],
              !0,
            ),
          );
        }),
        (t.doRelationDelMasterMsg = function (e) {
          n["default"].Service.onProto(
            E["default"].CG_RELATION_MASTER_DELETE,
            r["default"].alloc(this, this.relationDelMasterCallBack, null, !0),
          );
          var t = T["default"].createRelationDelMaster(e);
          T["default"].sendRequest(t);
        }),
        (t.relationDelMasterCallBack = function (e) {
          var t = e.body;
          if (t) {
            var i = t.getByte();
            if (0 > i) return (h["default"].errorMessage(t.getString()), !1);
            var n = y["default"].myPlayer;
            (null != n && n.addValue(d.ModelConst.MASTER_FLAG, i),
              h["default"].alertMessage(u.GameText.STR_DEL_MASTER_SUCCEE),
              o["default"].sendNt(s.RelationEvent.RELATION_MASTER_UPDATA_LIST));
          }
        }),
        (t.getTime = function (e) {
          var t = "";
          if (e > 0) {
            var i = e / I["default"].MILLIS_IN_MINUTE;
            (e % I["default"].MILLIS_IN_MINUTE != 0 && i++,
              (t = p.Tool.getTimeStrByMin(i, !0)));
          }
          return t;
        }),
        (t.doOpenQuestion = function (e, t) {
          ((this.isVipType = e), (this.isSuperType = t));
          var i = y["default"].myPlayer;
          if (null != i) {
            if (e) {
              if (null == i.bag) return;
              var o = i.bag.getItem(C["default"].SPIRIT_POS);
              if (null == o) return;
              var s = u.GameText.STR_VIP;
              y["default"].isQQVip && (s = u.GameText.STR_QQ_DIAMOND);
              var l = I["default"].manageString2(
                  u.GameText.STR_OPEN_QUESTION_NOT_VIP,
                  [s, s, s],
                ),
                _ = o.expireTime - R["default"].timer.serverTime;
              if (
                (i.getVipLevel() > 0 &&
                  0 >= _ &&
                  (l = I["default"].manageString2(
                    u.GameText.STR_VIP_RENEWAL_ASK,
                    [s, s, s],
                  )),
                0 >= _ && 0 == t)
              )
                return void h["default"].alertMessage(
                  l,
                  u.GameText.GAME_TEXT[u.GameText.TI_WARM_SHOW],
                  r["default"].alloc(this, this.doOpenVIP, null, !0),
                );
            }
            n["default"].Service.onProto(
              E["default"].CG_VIP_QUESTION_GET,
              r["default"].alloc(this, this.doOpenQuestionCallBack, [e], !0),
            );
            var d = new a.Message(E["default"].CG_VIP_QUESTION_GET);
            (d.putBoolean(e),
              d.putBoolean(t),
              n["default"].Service.sendProto(d));
          }
        }),
        (t.doOpenQuestionCallBack = function (e, t) {
          var i = t.body;
          if (null == i) return null;
          var n = i.getByte();
          if (0 > n) return void h["default"].errorMessage(i.getString());
          var a = i.getByte();
          if (0 >= a)
            return void h["default"].alertMessage(
              u.GameText.STR_VIP_QUESTION_FINISH,
              u.GameText.getText(u.GameText.TI_WARM_SHOW),
            );
          var s = new A["default"]();
          (s.append(u.GameText.STR_VIP_QUESTION_TITLE),
            (this.questionId = i.getShort()));
          var l = i.getString();
          s.append(l + "\n");
          var _ = i.getByte(),
            d = new f["default"](),
            c = new f["default"]();
          if (_ > 0)
            for (var T = 0; _ > T; T++) {
              var E = i.getByte(),
                y = i.getString();
              (s.append(E.toString()),
                s.append("、"),
                s.append(y),
                s.append("\n"),
                p.Tool.addChoiceMenu(d, y, c, E));
            }
          (p.Tool.addChoiceMenu(
            d,
            u.GameText.getText(u.GameText.TI_BACK),
            c,
            h["default"].EVENT_ALL_BACK,
          ),
            s.append(
              I["default"].manageString(
                u.GameText.STR_VIP_QUESTION_MY_COUNT,
                a + "",
              ),
            ),
            o["default"].showView(
              O.ModName.Relation,
              O.RelationViewType.RelationMenu,
              {
                title: e
                  ? u.GameText.FUN_ANSWER_VIP_SUCCESS
                  : u.GameText.FUN_ANSWER_SUCCESS,
                list: c.arr,
                desc: s.toString(),
                fun: r["default"].alloc(this, this.answerSelect, null, !0),
              },
            ));
        }),
        (t.answerSelect = function (e) {
          n["default"].Service.onProto(
            E["default"].CG_VIP_QUESTION_SUB,
            r["default"].alloc(this, this.answerSelectCallBack, null, !0),
          );
          var t = new a.Message(E["default"].CG_VIP_QUESTION_SUB);
          (t.putShort(this.questionId),
            t.putByte(e),
            t.putBoolean(this.isVipType),
            t.putBoolean(this.isSuperType),
            n["default"].Service.sendProto(t));
        }),
        (t.answerSelectCallBack = function (e) {
          var t = e.body;
          if (null == t) return null;
          var i = t.getByte();
          if (0 > i) return void h["default"].errorMessage(t.getString());
          var o = y["default"].myPlayer;
          if (null != o) {
            var n = t.getByte(),
              a = t.getBoolean(),
              s = t.getShort(),
              l = !1,
              _ = new A["default"]();
            if (1 == a) {
              l = t.getBoolean();
              var d = T["default"].processMissionReward(o, 0, t, !1);
              _.append(
                I["default"].manageString(u.GameText.STR_VIP_QUESTION_RIGHT, d),
              );
            } else _.append(u.GameText.STR_VIP_QUESTION_ERROR);
            (s > 0 &&
              _.append(
                I["default"].manageString(
                  u.GameText.STR_VIP_QUESTION_ANSWER_RIGHT,
                  s + "",
                ) + "\n",
              ),
              n > 0
                ? _.append(
                    I["default"].manageString(
                      u.GameText.STR_VIP_QUESTION_MY_COUNT,
                      n + "",
                    ),
                  )
                : _.append(u.GameText.STR_VIP_QUESTION_FINISH),
              l && _.append(u.GameText.STR_VIP_QUESTION_PASS_ALL),
              h["default"].alertMessage(
                _.toString(),
                u.GameText.getText(u.GameText.TI_WARM_SHOW),
                r["default"].alloc(
                  this,
                  this.doOpenQuestion,
                  [this.isVipType, this.isSuperType],
                  !0,
                ),
                u.GameText.GAME_TEXT[u.GameText.TI_OK],
                r["default"].alloc(
                  this,
                  this.doOpenQuestion,
                  [this.isVipType, this.isSuperType],
                  !0,
                ),
              ));
          }
        }),
        (t.doOpenVIP = function () {
          o["default"].getProxy(O.ModName.Bag, O.ProxyType.Bag).doOpenVIP();
        }),
        (t.doMonsterBookListMsg = function (e, i, n) {
          return (
            void 0 === i && (i = E["default"].PAGE_SIZE),
            void 0 === n && (n = E["default"].PAGE_NUM),
            __awaiter(this, void 0, void 0, function () {
              var a, r, l, u, _, d, p, c, h, f, E;
              return __generator(this, function (y) {
                switch (y.label) {
                  case 0:
                    return (
                      (a = T["default"].createMonsterBookList(e, i, n)),
                      (r = o["default"].getProxy(
                        O.ModName.Raiders,
                        O.ProxyType.Raiders,
                      )),
                      [4, r.sendProtoAsync(a)]
                    );
                  case 1:
                    if (
                      (y.sent(), (l = T["default"].getReceiveMsg()), null == l)
                    )
                      return [2];
                    for (
                      u = 0,
                        _ = 0,
                        d = 0,
                        e == t.MONSTER_BOOK_ALL_OPEN
                          ? ((u = l.getShort()), (_ = u), (d = l.getShort()))
                          : e == t.MONSTER_BOOK_OPEN &&
                            ((_ = l.getShort()), (d = l.getShort()), (u = d)),
                        p = l.getShort(),
                        c = [],
                        h = 0;
                      p > h;
                      h++
                    )
                      ((f = new t()),
                        (E = !0),
                        e == t.MONSTER_BOOK_ALL_OPEN && (E = l.getBoolean()),
                        (f.icon1 = l.getLong()),
                        1 == E
                          ? ((f.partnerId = l.getShort()),
                            (f.id = l.getShort()),
                            (f.name = l.getString()),
                            (f.mapName = l.getString()))
                          : (f.partnerId = l.getShort()),
                        c.push(f));
                    return (
                      r.sendNt(s.RaidersEvent.MonsterRaiders, {
                        list: c,
                        allNum: u,
                        okNum: d,
                      }),
                      [2]
                    );
                }
              });
            })
          );
        }),
        (t.doSeeSellActorInfo = function (e, i, n) {
          return __awaiter(this, void 0, Promise, function () {
            var r, l, u, _, p, c, f, y, g, v, S;
            return __generator(this, function (I) {
              switch (I.label) {
                case 0:
                  return null == e
                    ? [2]
                    : e instanceof t == 0
                      ? [2]
                      : ((r = e),
                        (l = !0),
                        i == t.ACTOR_SELL_INFO_TYPE_DETAIL ||
                        i == t.ACTOR_SELL_INFO_TYPE_ITEM ||
                        i == t.ACTOR_SELL_INFO_TYPE_SKILL ||
                        i == t.ACTOR_SELL_INFO_TYPE_PET_LIST
                          ? r.isTabStatus(d.ModelConst.SELL_PLAYER_INFO_LOAD) &&
                            (l = !1)
                          : i == t.ACTOR_SELL_INFO_TYPE_STORAGE
                            ? r.isTabStatus(
                                d.ModelConst.SELL_PLAYER_STORE_LOAD,
                              ) && (l = !1)
                            : i == t.ACTOR_SELL_INFO_TYPE_STORAGE_VIP &&
                              r.isTabStatus(
                                d.ModelConst.SELL_PLAYER_STORE_VIP_LOAD,
                              ) &&
                              (l = !1),
                        1 != l
                          ? [3, 2]
                          : ((u = new a.Message(
                              E["default"].CG_ACTOR_SELL_SEE,
                            )),
                            u.putInt(r.id),
                            u.putByte(i),
                            i == t.ACTOR_SELL_INFO_TYPE_PET_DATA &&
                              ((_ = -1),
                              null != n &&
                                null != n.petItem &&
                                (_ = n.petItem.slotPos),
                              u.putShort(_)),
                            (p = o["default"].getProxy(
                              O.ModName.Shop,
                              O.ProxyType.Shop,
                            )),
                            [4, p.sendProtoAsync(u)]));
                case 1:
                  if ((I.sent(), (c = T["default"].getReceiveMsg()), null == c))
                    return [2];
                  switch (
                    ((f = c.getInt()),
                    (r.bag = new C["default"](r)),
                    (r.BagSize = f),
                    i)
                  ) {
                    case t.ACTOR_SELL_INFO_TYPE_DETAIL:
                    case t.ACTOR_SELL_INFO_TYPE_ITEM:
                    case t.ACTOR_SELL_INFO_TYPE_SKILL:
                    case t.ACTOR_SELL_INFO_TYPE_PET_LIST:
                      (T["default"].processDataPlayerDetail(c, r),
                        (y = T["default"].processDataPlayerItemMsg(c)),
                        r.bag.initBagItem(y),
                        (r.skillList = T["default"].processDataPlayerSkillMsg(
                          c,
                          !0,
                        )),
                        (r.formationList = M["default"].doGetFormation(c)),
                        r.setTabStatus(!0, d.ModelConst.SELL_PLAYER_INFO_LOAD),
                        i == t.ACTOR_SELL_INFO_TYPE_DETAIL
                          ? h["default"].openRole(r)
                          : i == t.ACTOR_SELL_INFO_TYPE_ITEM
                            ? h["default"].openBag(r)
                            : i == t.ACTOR_SELL_INFO_TYPE_PET_LIST &&
                              h["default"].openPet(r));
                      break;
                    case t.ACTOR_SELL_INFO_TYPE_PET_DATA:
                      0 == n.isTabStatus(d.ModelConst.PET_INFO) &&
                        (n.setTabStatus(!0, d.ModelConst.PET_INFO),
                        N["default"].fromBytesDetail(c, n),
                        null != n && n.refreshWorldSprite());
                      break;
                    case t.ACTOR_SELL_INFO_TYPE_STORAGE:
                      ((r.numStroe = c.getByte()),
                        (y = T["default"].processDataPlayerItemMsg(c)),
                        null == r.bag && (r.bag = new C["default"](r)),
                        r.bag.initBagItem(y),
                        r.setTabStatus(!0, d.ModelConst.SELL_PLAYER_STORE_LOAD),
                        h["default"].createStorageUI(
                          h["default"].SUB_STORAGE_OTHER_PLAYER,
                          r,
                        ));
                      break;
                    case t.ACTOR_SELL_INFO_TYPE_STORAGE_VIP:
                      ((g = c.getByte()),
                        (y = T["default"].processDataPlayerItemMsg(c)),
                        null == r.bag && (r.bag = new C["default"](r)),
                        r.bag.initBagItem(y),
                        r.setTabStatus(
                          !0,
                          d.ModelConst.SELL_PLAYER_STORE_VIP_LOAD,
                        ),
                        h["default"].createStorageUI(
                          h["default"].SUB_STORAGE_OTHER_PLAYER_VIP,
                          r,
                        ));
                      break;
                    case t.ACTOR_SELL_INFO_TYPE_CITY:
                      ((v = L["default"].fromBytes(c)),
                        (v.isOtherPlayer = !0),
                        h["default"].createCityInfoUI(r.getId()));
                      break;
                    case t.ACTOR_SELL_INFO_TYPE_COUNTRY:
                      ((r.countryHonor = c.getInt()),
                        (r.countryRank = c.getByte()),
                        (r.status = c.getInt()),
                        (S = new x.Country(-1)),
                        x.Country.fromBytes(S, c),
                        (S.sellPlayer = r),
                        o["default"].sendNt(s.CountryEvent.CountryMenu, [
                          h["default"].SUB_TYPE_COUNTRY_STATUS_OTHER_PLAYER,
                          S,
                        ]));
                  }
                  I.label = 2;
                case 2:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.getSortJobMenuList = function () {
          for (
            var e = new f["default"](), t = 0;
            t < this.jobSortIDTable.length;
            t++
          ) {
            var i = this.getJobEvent(t);
            0 > i
              ? e.addElement(u.GameText.STR_LIST_ALL)
              : e.addElement(l["default"].getJobString(i));
          }
          return e;
        }),
        (t.prototype.getJobStr = function () {
          var e = this.getSortJobMenuList();
          return p.Tool.isArrayIndexOutOfBounds(this.actorBuyJobIndex, e)
            ? ""
            : e.elementAt(this.actorBuyJobIndex);
        }),
        (t.prototype.getJobEvent = function (e) {
          return p.Tool.isArrayIndexOutOfBounds(e, this.jobSortIDTable)
            ? -1
            : this.jobSortIDTable[e];
        }),
        (t.prototype.getSortSexMenuList = function () {
          for (
            var e = new f["default"](), t = 0;
            t < this.sexSortIDTable.length;
            t++
          ) {
            var i = this.getSexEvent(t);
            0 > i
              ? e.addElement(u.GameText.STR_ACTOR_SELL_FIND_DF)
              : e.addElement(l["default"].getSexString(i));
          }
          return e;
        }),
        (t.prototype.getSexStr = function () {
          var e = this.getSortSexMenuList();
          return p.Tool.isArrayIndexOutOfBounds(this.actorBuySexIndex, e)
            ? ""
            : e.elementAt(this.actorBuySexIndex);
        }),
        (t.prototype.getSexEvent = function (e) {
          return p.Tool.isArrayIndexOutOfBounds(e, this.sexSortIDTable)
            ? -1
            : this.sexSortIDTable[e];
        }),
        (t.getSortString = function (e) {
          return 0 > e || e >= t.SortText.length ? "sort_" + e : t.SortText[e];
        }),
        (t.prototype.getSortEvent = function (e) {
          var i = -1;
          switch (e) {
            case 0:
              i = t.ACTOR_SELL_FIND_ORDER_BY_DF;
              break;
            case 1:
              i = t.ACTOR_SELL_FIND_ORDER_BY_LEVEL_ASC;
              break;
            case 2:
              i = t.ACTOR_SELL_FIND_ORDER_BY_LEVEL_DESC;
              break;
            case 3:
              i = t.ACTOR_SELL_FIND_ORDER_BY_MONEY_ASC;
              break;
            case 4:
              i = t.ACTOR_SELL_FIND_ORDER_BY_MONEY_DESC;
              break;
            default:
              i = -1;
          }
          return i;
        }),
        (t.doActorSellList = function () {
          return __awaiter(this, void 0, Promise, function () {
            var e, i, n, r, s, l, u, _, d, p, c;
            return __generator(this, function (f) {
              switch (f.label) {
                case 0:
                  return (
                    (e = o["default"].getProxy(
                      O.ModName.Shop,
                      O.ProxyType.Shop,
                    )),
                    (i = new a.Message(E["default"].CG_ACTOR_SELL_MY_LIST)),
                    [4, e.sendProtoAsync(i)]
                  );
                case 1:
                  if ((f.sent(), (n = T["default"].getReceiveMsg()), null == n))
                    return [2];
                  if (((r = n.getByte()), 0 > r))
                    return (h["default"].alertMessage(n.getString()), [2]);
                  for (s = n.getShort(), l = [], u = 0; s > u; u++)
                    ((_ = t.fromBytesToActorSellList(n)),
                      null != _ && l.push(_));
                  return (
                    (d = n.getInt()),
                    (p = n.getInt()),
                    (c = { playerList: l, minPrice: d, maxPrice: p }),
                    h["default"].showWin(
                      O.ModName.Shop,
                      O.ShopViewType.ShopRole,
                      c,
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.fromBytesToActorSellList = function (e) {
          if (null == e) return null;
          var i = new t();
          ((i.id = e.getInt()),
            (i.name = e.getString()),
            (i.sex = e.getByte()),
            (i.race = e.getByte()),
            (i.job = e.getByte()),
            (i.level = e.getByte()),
            (i.icon1 = e.getLong()),
            (i.icon2 = e.getLong()),
            (i.icon3 = e.getLong()));
          var o = e.getBoolean();
          return (
            o &&
              (i.setStatusBit(d.ModelConst.STATUS_SELL),
              (i.sellPrice = e.getInt())),
            i
          );
        }),
        (t.doActorSell = function (e, t, i) {
          return __awaiter(this, void 0, Promise, function () {
            var n, r, l, _, c, f, y, g;
            return __generator(this, function (v) {
              switch (v.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : ((n = e),
                      (r = 0),
                      [
                        4,
                        h["default"].showInputAsync(
                          u.GameText.STR_ACTOR_SELL,
                          I["default"].manageString(
                            u.GameText.STR_ACTOR_SELL_PRICE_LIMITS,
                            t + "~" + i,
                          ),
                        ),
                      ]);
                case 1:
                  return (l = v.sent())
                    ? ((r = p.Tool.parseInt(l)),
                      0 >= r
                        ? [2, !1]
                        : ((_ = r),
                          [
                            4,
                            h["default"].waitForTwiceSureUI(
                              p.Tool.manageString(
                                u.GameText.STR_ACTOR_SELL_ASK_UP,
                                _ + u.GameText.STR_MONEY1,
                              ),
                              u.GameText.STR_ACTOR_SELL,
                            ),
                          ]))
                    : [2, !1];
                case 2:
                  return (c = v.sent())
                    ? ((f = new a.Message(E["default"].CG_ACTOR_SELL_START)),
                      f.putInt(n.id),
                      f.putInt(_),
                      (y = o["default"].getProxy(
                        O.ModName.Shop,
                        O.ProxyType.Shop,
                      )),
                      [4, y.sendProtoAsync(f)])
                    : [2, !1];
                case 3:
                  return (
                    v.sent(),
                    (g = T["default"].getReceiveMsg()),
                    null == g
                      ? [2]
                      : ((n.sellPrice = _),
                        n.setStatusBit(d.ModelConst.STATUS_SELL),
                        y.sendNt(s.ShopEvent.SHOP_ROLE_UP),
                        [2, !0])
                  );
              }
            });
          });
        }),
        (t.doCancelActorSell = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, r;
            return __generator(this, function (l) {
              switch (l.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : [
                        4,
                        h["default"].waitForTwiceSureUI(
                          u.GameText.STR_ACTOR_SELL_ASK_DOWN,
                          u.GameText.STR_ACTOR_SELL_CANCEL,
                        ),
                      ];
                case 1:
                  return (t = l.sent())
                    ? ((i = new a.Message(E["default"].CG_ACTOR_SELL_CANCEL)),
                      i.putInt(e.id),
                      (n = o["default"].getProxy(
                        O.ModName.Shop,
                        O.ProxyType.Shop,
                      )),
                      [4, n.sendProtoAsync(i)])
                    : [2, !1];
                case 2:
                  return (
                    l.sent(),
                    (r = T["default"].getReceiveMsg()),
                    null == r
                      ? [2]
                      : (e.clearStatusBit(d.ModelConst.STATUS_SELL),
                        n.sendNt(s.ShopEvent.SHOP_ROLE_DOWN),
                        [2, !0])
                  );
              }
            });
          });
        }),
        (t.doActorBuy = function (e, i, n) {
          return (
            void 0 === i && (i = E["default"].PAGE_SIZE),
            void 0 === n && (n = E["default"].PAGE_NUM),
            __awaiter(this, void 0, Promise, function () {
              var r, s, l, u, _, d, p, c, h, f;
              return __generator(this, function (y) {
                switch (y.label) {
                  case 0:
                    switch (
                      ((r = new a.Message(E["default"].CG_ACTOR_SELL_LIST)),
                      (s = e.getJobEvent(e.actorBuyJobIndex)),
                      (l = e.getSexEvent(e.actorBuySexIndex)),
                      (u = e.getSortEvent(e.actorBuySortIndex)),
                      r.putByte(e.actorSearchType),
                      e.actorSearchType)
                    ) {
                      case t.ACTOR_SELL_FIND_TYPE_NAME:
                        r.putString(e.actorSearchValueName);
                        break;
                      case t.ACTOR_SELL_FIND_TYPE_ID:
                        r.putInt(e.actorSearchValueID);
                        break;
                      default:
                        (r.putByte(s), r.putByte(l), r.putByte(u));
                    }
                    return (
                      r.putByte(i),
                      r.putShort(n),
                      (_ = o["default"].getProxy(
                        O.ModName.Shop,
                        O.ProxyType.Shop,
                      )),
                      [4, _.sendProtoAsync(r)]
                    );
                  case 1:
                    if (
                      (y.sent(), (d = T["default"].getReceiveMsg()), null == d)
                    )
                      return [2];
                    if (((p = d.getShort()), 0 > p)) return [2, null];
                    for (
                      c = d.getShort(), e.actorBuyList = [], h = 0;
                      c > h;
                      h++
                    )
                      ((f = t.fromBytesToActorBuyList(d)),
                        null != f && e.actorBuyList.push(f));
                    return [2];
                }
              });
            })
          );
        }),
        (t.fromBytesToActorBuyList = function (e) {
          if (null == e) return null;
          var i = new t();
          return (
            (i.id = e.getInt()),
            (i.name = e.getString()),
            (i.sex = e.getByte()),
            (i.race = e.getByte()),
            (i.job = e.getByte()),
            (i.level = e.getByte()),
            (i.icon1 = e.getLong()),
            (i.icon2 = e.getLong()),
            (i.icon3 = e.getLong()),
            (i.sellPrice = e.getInt()),
            (i.ownerId = e.getInt()),
            i
          );
        }),
        (t.prototype.doActorSellBuy = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, r, l, _;
            return __generator(this, function (c) {
              switch (c.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : [
                        4,
                        h["default"].waitForTwiceSureUI(
                          p.Tool.manageString(
                            u.GameText.STR_ACTOR_SELL_BUY_ASK,
                            e.sellPrice +
                              S["default"].getMoneyText(d.ModelConst.MONEY1),
                          ),
                          u.GameText.STR_ACTOR_SELL_BUY,
                        ),
                      ];
                case 1:
                  return (
                    (t = c.sent()),
                    t
                      ? [4, p.Tool.checkEnoughMoney(e.sellPrice, 0, 0)]
                      : [2, !1]
                  );
                case 2:
                  return 0 == c.sent()
                    ? [2, !1]
                    : ((i = new a.Message(E["default"].CG_ACTOR_SELL_BUY)),
                      i.putInt(e.id),
                      (n = o["default"].getProxy(
                        O.ModName.Shop,
                        O.ProxyType.Shop,
                      )),
                      [4, n.sendProtoAsync(i)]);
                case 3:
                  return (
                    c.sent(),
                    (r = T["default"].getReceiveMsg()),
                    null == r
                      ? [2]
                      : ((l = r.getInt()),
                        (_ = y["default"].myPlayer),
                        null == _
                          ? [2, !1]
                          : (_.setMoneyByType(d.ModelConst.MONEY1, l),
                            o["default"].sendNt(
                              s.ShopEvent.SHOP_ROLE_BUYSUCCEED,
                            ),
                            [2, !0]))
                  );
              }
            });
          });
        }),
        (t.fromBytesToEscortTeam = function (e) {
          if (null == e) return null;
          var t = e.getInt(),
            i = e.getByte(),
            o = null;
          return (
            i == v.MODEL_TYPE.TYPE_PLAYER
              ? (o = new S["default"]())
              : i == v.MODEL_TYPE.TYPE_MERCENARY &&
                ((o = new w["default"]()), (o.groupId = e.getShort())),
            (o.id = t),
            (o.icon1 = e.getInt()),
            (o.icon2 = e.getInt()),
            (o.icon3 = e.getInt()),
            (o.name = e.getString()),
            (o.level = e.getByte()),
            (o.job = e.getByte()),
            (o.hp = e.getInt()),
            (o.hpMax = e.getInt()),
            o
          );
        }),
        (t.doSeePlayerMsg = function (e, t, i, n) {
          return __awaiter(this, void 0, void 0, function () {
            var r, l, _, c, f, g, v, S, I, m, A, R, N, m, M, L, m, M, L;
            return __generator(this, function (w) {
              switch (w.label) {
                case 0:
                  return null == e || null == t
                    ? [2]
                    : ((r = o["default"].getProxy(
                        O.ModName.Role,
                        O.ProxyType.Role,
                      )),
                      (r.data.messageCue = 0),
                      (r.data.messageBool = !0),
                      (r.data.PlayerVo = t),
                      (l = n ? n : new a.Message(i)),
                      l.putInt(e.getId()),
                      [4, b["default"].sendProtoAsync(l)]);
                case 1:
                  if (((_ = w.sent()), null == _)) return [2];
                  if (
                    _.type == E["default"].CG_PIONEER_ROLE_INFO &&
                    ((c = _.getByte()), 0 > c)
                  )
                    return (h["default"].alertMessage(_.getString()), [2]);
                  if (((f = _.getBoolean()), !f))
                    return (
                      t.clearStatusBit(d.ModelConst.STATUS_ONLINE),
                      h["default"].alertMessage(
                        u.GameText.STR_DO_SEE_PLAYER_NOT_ONLINE,
                      ),
                      [2]
                    );
                  for (
                    t.setStatusBit(d.ModelConst.STATUS_ONLINE),
                      t.setId(_.getInt()),
                      t.setName(_.getString()),
                      t.photoNum = _.getBoolean(),
                      t.setLevel(_.getByte()),
                      t.setLevel2(_.getByte()),
                      t.setJob(_.getByte()),
                      t.setIcon1(_.getLong()),
                      t.setIcon2(_.getLong()),
                      t.setIcon3(_.getLong()),
                      t.partnerName = _.getString(),
                      t.combatPoint = _.getInt(),
                      t.killCount = _.getInt(),
                      t.Pkwincount = _.getInt(),
                      t.Pklosecount = _.getInt(),
                      t.countryName = _.getString(),
                      g = _.getString(),
                      v = _.getByte(),
                      v > 10 ? t.setVipLevel(v - 10) : t.setVipLevel2(v),
                      t.fromItemSetData(_),
                      S = _.getByte(),
                      S > 0 &&
                        ((I = new C["default"](t)),
                        t.setBag(I),
                        (t.bag.bagEnd = C["default"].EQUIP_POS_END)),
                      m = 0;
                    S > m;
                    m++
                  )
                    ((A = P["default"].fromBytes(_)),
                      null != A && t.bag.setItem(A));
                  for (
                    t.setEnchantValue(_.getInt()),
                      t.setIconpet1(_.getShort()),
                      p.Tool.isNullText(g)
                        ? t.setTitle(e.getTitle())
                        : t.setTitle(g),
                      t.setMode(e.getMode()),
                      t.setLeaderID(e.getLeaderID()),
                      t.members = e.members,
                      R = e.isShopMode(),
                      R &&
                        ((t.shoptype = e.shoptype), (t.shopName = e.shopName)),
                      y["default"].doGetItemSuit(t.getBagAllEquip()),
                      T["default"].processDataPlayerDetail(_, t),
                      t.pet && ((t.pet.ownerVo = t), (t.pet.modelForPet = -1)),
                      N = T["default"].processDataPlayerSkillMsg(_, !0),
                      t.skillList = N,
                      S = _.getByte(),
                      m = 0;
                    S > m;
                    m++
                  )
                    ((M = _.getShort()), (L = _.getInt()), t.addValue(M, L));
                  for (
                    D.BookGroupModel.otherGroupPower = {},
                      S = _.getByte(),
                      m = 0;
                    S > m;
                    m++
                  )
                    ((M = _.getShort()),
                      (L = _.getInt()),
                      D.BookGroupModel.otherGroupPower[M] ||
                        (D.BookGroupModel.otherGroupPower[M] = 0),
                      (D.BookGroupModel.otherGroupPower[M] += L));
                  return (
                    (r.data.PlayerVo = t),
                    o["default"].sendNt(s.RoleEvent.ON_USER_MESSAGE_NUM),
                    [2]
                  );
              }
            });
          });
        }),
        (t.doRelationAddMsg = function (e, t, i) {
          return __awaiter(this, void 0, void 0, function () {
            var n, a;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  if (null == i) return [2, !1];
                  switch (t) {
                    case E["default"].MAIL_SEND_ID:
                      n = T["default"].createRelationAddById(e, i);
                      break;
                    case E["default"].MAIL_SEND_NAME:
                      n = T["default"].createRelationAddByName(e, i);
                      break;
                    case E["default"].MAIL_SEND_UID:
                      n = T["default"].createRelationAddByUid(e, i);
                  }
                  return [4, b["default"].sendProtoAsync(n)];
                case 1:
                  return (
                    r.sent(),
                    (a = u.GameText.STR_SUCCEE),
                    e == l["default"].RELATION_FRIEND
                      ? (a = u.GameText.STR_MAKE_FRIEND_SUCCEE)
                      : e == l["default"].RELATION_BLACK &&
                        (a = u.GameText.STR_NO_TALK_SUCCEE),
                    h["default"].alertMessage(a),
                    o["default"].sendNt(s.RelationEvent.RELATION_LIST),
                    [2]
                  );
              }
            });
          });
        }),
        (t.doAddFriend = function (e, t) {
          return __awaiter(this, void 0, void 0, function () {
            var i, n;
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  switch (e) {
                    case E["default"].MAIL_SEND_ID:
                      ((n = l["default"].getIdByAreaID(
                        t,
                        y["default"].getPlayerID(),
                      )),
                        (i = T["default"].createRelationAddById(
                          l["default"].RELATION_FRIEND,
                          n,
                        )));
                      break;
                    case E["default"].MAIL_SEND_NAME:
                      i = T["default"].createRelationAddByName(
                        l["default"].RELATION_FRIEND,
                        t,
                      );
                  }
                  return [4, b["default"].sendProtoAsync(i)];
                case 1:
                  return (
                    a.sent(),
                    h["default"].alertMessage(
                      u.GameText.STR_ADD_FRIEND_SUCCESS,
                    ),
                    o["default"].sendNt(s.RelationEvent.RELATION_LIST),
                    [2]
                  );
              }
            });
          });
        }),
        (t.doRelationDelMsg = function (e, t) {
          return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (i = T["default"].createRelationDel(e, t)),
                    [4, b["default"].sendProtoAsync(i)]
                  );
                case 1:
                  return (
                    (i = n.sent()),
                    e == l["default"].RELATION_FRIEND ||
                    e == l["default"].RELATION_CLOSEFRIEND
                      ? h["default"].alertMessage(
                          u.GameText.STR_DEL_FRIEND_SUCCEE,
                        )
                      : e == l["default"].RELATION_BLACK &&
                        h["default"].alertMessage(
                          u.GameText.STR_TI_DEL_RELATION_SUCCEE,
                        ),
                    o["default"].sendNt(s.RelationEvent.RELATION_LIST),
                    [2]
                  );
              }
            });
          });
        }),
        (t.MONSTER_BOOK_ALL_OPEN = 1),
        (t.MONSTER_BOOK_OPEN = 2),
        (t.UI_INTO_NEAR_LIST = 0),
        (t.UI_INTO_TYPE_CHAT = 1),
        (t.UI_INTO_FRIEND_LIST = 2),
        (t.UI_INTO_BLACK_LIST = 3),
        (t.UI_INTO_TEMP_TALK = 4),
        (t.UI_INTO_COUNTRY_MEM = 5),
        (t.UI_INTO_COUNTRY_APPLY = 6),
        (t.UI_INTO_ESCORT_TEAM = 7),
        (t.UI_INTO_COUNTRY_OTHER_MEM = 8),
        (t.UI_INTO_MASTER_LIST = 9),
        (t.UI_INTO_SOLDIER_LIST = 10),
        (t.UI_INTO_SOLDIER_APPLY = 11),
        (t.UI_INTO_WARTOP_LIST = 12),
        (t.UI_INTO_PHOTO_LIST = 13),
        (t.UI_INTO_RANK_LIST = 14),
        (t.UI_INTO_ACTOR_SELL_LIST = 15),
        (t.UI_INTO_MASTER_SHOP_LIST = 16),
        (t.UI_INTO_LOTTERY_DRAW_PLAYER = 17),
        (t.UI_INTO_ARENA_SEE_OTHER = 18),
        (t.UI_INTO_CLOSEFRIEND_LIST = 19),
        (t.UI_INTO_PET_BATTLE = 998),
        (t.UI_INTO_CROSS_USER = 999),
        (t.UI_INTO_CROSS_DUNGEON = 1e3),
        (t.MAX_MODEL = 3),
        (t.FRIEND_FLAG_IS_VIP = 1),
        (t.FRIEND_FLAG_IS_GM = 2),
        (t.FRIEND_FLAG_IS_TEACHER = 4),
        (t.FRIEND_FLAG_IS_VIP_CQ = 8),
        (t.MENU_VIEW_PHOTO = 0),
        (t.MENU_VIEW_CARD = 1),
        (t.MENU_VIEW_CITY = 2),
        (t.MENU_INVITE_COUNTRY = 3),
        (t.MENU_ADD_MASTER = 4),
        (t.ACTOR_ACCEPTDISCIPLE_FIND_TYPE_ONLINE = 1),
        (t.ACTOR_ACCEPTDISCIPLE_FIND_TYPE_OFFLINE = 2),
        (t.ACTOR_ACCEPTDISCIPLE_FIND_TYPE_ALL = 3),
        (t.questionId = 0),
        (t.isVipType = !1),
        (t.isSuperType = !1),
        (t.ACTOR_SELL_INFO_TYPE_DETAIL = 1),
        (t.ACTOR_SELL_INFO_TYPE_ITEM = 2),
        (t.ACTOR_SELL_INFO_TYPE_SKILL = 3),
        (t.ACTOR_SELL_INFO_TYPE_PET_LIST = 4),
        (t.ACTOR_SELL_INFO_TYPE_PET_DATA = 5),
        (t.ACTOR_SELL_INFO_TYPE_STORAGE = 6),
        (t.ACTOR_SELL_INFO_TYPE_CITY = 7),
        (t.ACTOR_SELL_INFO_TYPE_COUNTRY = 8),
        (t.ACTOR_SELL_INFO_TYPE_STORAGE_VIP = 9),
        (t.ACTOR_SELL_FIND_TYPE_DF = 1),
        (t.ACTOR_SELL_FIND_TYPE_NAME = 2),
        (t.ACTOR_SELL_FIND_TYPE_ID = 3),
        (t.ACTOR_SELL_FIND_ORDER_BY_DF = -1),
        (t.ACTOR_SELL_FIND_ORDER_BY_LEVEL_ASC = 1),
        (t.ACTOR_SELL_FIND_ORDER_BY_LEVEL_DESC = 2),
        (t.ACTOR_SELL_FIND_ORDER_BY_MONEY_ASC = 3),
        (t.ACTOR_SELL_FIND_ORDER_BY_MONEY_DESC = 4),
        (t.SortText = [
          u.GameText.STR_ACTOR_SELL_FIND_DF,
          u.GameText.STR_ACTOR_SELL_FIND_LEVEL_ASC,
          u.GameText.STR_ACTOR_SELL_FIND_LEVEL_DESC,
          u.GameText.STR_ACTOR_SELL_FIND_MONEY_ASC,
          u.GameText.STR_ACTOR_SELL_FIND_MONEY_DESC,
        ]),
        t
      );
    })(S["default"]);
  t["default"] = B;
});
