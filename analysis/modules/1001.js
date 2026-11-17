(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(22),
    a = i(16),
    r = i(11),
    s = i(2),
    l = i(0),
    u = i(4),
    _ = i(10),
    d = i(123),
    p = i(12),
    c = i(20),
    h = i(15),
    f = i(8),
    T = i(1),
    E = i(24),
    y = i(37),
    g = i(18),
    v = i(19),
    S = i(125),
    I = i(32),
    m = i(41),
    A = i(64),
    C = i(31),
    P = i(42),
    R = i(74),
    O = i(67),
    N = i(85),
    M = i(5),
    L = i(84),
    w = i(78),
    b = i(318),
    x = i(83),
    D = i(1002),
    B = i(317),
    G = i(1003),
    U = i(1004),
    k = i(35),
    V = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
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
        (t.prototype.getLits = function (e) {
          for (
            var t = u["default"].buildingText.concat(), i = t.length - 1;
            i >= 0;
            i--
          ) {
            var o = t[i];
            e.includes(o.id) && t.splice(i, 1);
          }
          return t;
        }),
        (t.prototype.initialize = function () {
          ((this._data = new U.CountryModel()),
            this.onProto(
              v["default"].CG_COUNTRY_WAR_START,
              this.processCountryWarEnter,
            ),
            this.onProto(
              v["default"].CG_COUNTRY_WAR_UPDATE,
              this.onCountryWarupdate,
            ),
            this.onProto(
              v["default"].CG_COUNTRY_WAR_NOTICE,
              this.onCountryWarNotice,
            ),
            this.onProto(
              v["default"].CG_TASK_COUNTRY_BOSS_JOIN_PUSH,
              this.onCountryBossJoin,
            ),
            this.onProto(
              v["default"].CG_COUNTRY_JOIN_NOTIFY,
              this.processCountryNotify,
            ),
            this.onProto(pb.EUserProtocol.S2C_CONFIG_RESPONSE, this.onMtReturn),
            this.onProto(
              v["default"].CG_COUNTRY_WAR_SOLDIER_RELIVE,
              this.enterCountryWarNew,
            ),
            this.onProto(
              v["default"].CG_COUNTRY_WAR_REDUCE_JOIN_CD,
              this.enterCountryWarNew,
            ),
            this.onProto(v["default"].CG_COUNTRY_ENTER, this.countryEnter),
            this.onNt(s.CountryEvent.CountryClear, this.onClear));
        }),
        (t.prototype.onClear = function () {
          this._data.initData();
        }),
        (t.prototype.onCountryBossJoin = function (e) {
          var t = e.body;
          b.CountryBoss.processCountryBoss(!1, t);
        }),
        (t.prototype.processCountryNotify = function (e) {
          var t = e.body,
            i = t.getInt(),
            n = t.getString(),
            a = t.getByte(),
            r = M["default"].myPlayer;
          (r.setCountryId(i),
            r.setCountryName(n),
            r.setCountryRank(a),
            this.data.vo && ((this.data.vo.id = i), (this.data.vo.name = n)));
          var l = "";
          ((l =
            i > 0
              ? c["default"].makeColorString(
                  f.Tool.manageString(_.GameText.STR_COUNTRY_NOTIFY_ADD, n),
                  f.Tool.COLOR_GREEN,
                )
              : c["default"].makeColorString(
                  _.GameText.STR_COUNTRY_NOTIFY_QUIT,
                  f.Tool.COLOR_RED,
                )),
            N["default"].addChatSystemMsg(l, !0),
            o["default"].sendNt(s.CountryEvent.CountryJoin));
        }),
        (t.prototype.onCountryWarNotice = function (e) {
          var t = e.body;
          x.CountryWar.doRoundNotice(t);
        }),
        (t.prototype.onCountryWarupdate = function (e) {
          var t = e.body;
          x.CountryWar.doRefresh(t);
        }),
        (t.prototype.processCountryWarEnter = function (e) {
          var t = e.body,
            i = t.getByte(),
            n = "",
            s = -98 == i || -99 == i;
          if (0 > i && ((n = t.getString()), !s))
            return void T["default"].errorMessage(n);
          var u = new x.CountryWar();
          if (s)
            ((u.deadTimesInWar = t.getInt()),
              (u.reliveTimes = t.getInt()),
              (u.lastLeaveCountryTime = t.getLong()),
              (u.noJoiningWarDeadline = t.getLong()));
          else if (0 == u.fromMsg(t))
            return void T["default"].errorMessage(
              _.GameText.STR_COUNTRY_WAR_ENTER_FAIL,
            );
          M["default"].countryWar = u;
          var d = u.deadTimesInWar,
            p = u.reliveTimes,
            c = u.noJoiningWarDeadline;
          if (2 == p && d > 4)
            return void T["default"].alertMessage(
              "本次国战挑战次数已经耗尽，无法再次进入战场",
            );
          if (d - p >= 3) {
            var h = 0 == p ? 500 : 1500,
              E = _.GameText.STR_MONEY1 + h;
            return void T["default"].alertMessage(
              f.Tool.manageString(
                "当前国战挑战次数已经达到上限，是否花费/cFFFF00%U/p购买国战挑战次数？",
                E,
              ),
              null,
              r["default"].alloc(null, function () {
                g["default"].sendRequest(
                  g["default"].countryWarSoldierRelive(),
                );
              }),
            );
          }
          var y = Math.floor(
            (c.toNumber() - a["default"].timer.serverTime) / 1e3,
          );
          if (d > 0 && y > 0) {
            var h = 25 * Math.ceil(y / 10),
              E = _.GameText.STR_MONEY1 + h;
            return void T["default"].alertMessage(
              f.Tool.manageString(
                "/cFF1000%U/p秒后才能再次进入国战战场，是否花费/cFFFF00%U/p立刻进入国战战场？",
                [y + "", E],
              ),
              null,
              r["default"].alloc(null, function () {
                g["default"].sendRequest(g["default"].countryWarReduceJoinCd());
              }),
            );
          }
          o["default"].showView(
            l.ModName.Country,
            l.CountryViewType.CountryWar,
          );
        }),
        (t.prototype.enterCountryWarNew = function (e) {
          var t = e.body,
            i = t.getByte();
          return 0 > i
            ? void T["default"].errorMessage(t.getString())
            : void x.CountryWar.doEnterWar(!0);
        }),
        (t.prototype.update = function () {}),
        (t.prototype.doCreateCountry = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, a, r, l;
            return __generator(this, function (_) {
              switch (_.label) {
                case 0:
                  return (
                    (t = g["default"].createCountryCreateMsg(e)),
                    [4, this.sendProtoAsync(t)]
                  );
                case 1:
                  return (
                    _.sent(),
                    (i = g["default"].getReceiveMsg()),
                    null == i
                      ? [2, -1]
                      : ((n = M["default"].myPlayer),
                        null == n
                          ? [2, -1]
                          : ((a = i.getInt()),
                            (r = i.getShort()),
                            (l = i.getInt()),
                            n.setCountryId(a),
                            n.setCountryName(e),
                            n.setCountryRank(u["default"].RANK_KING),
                            n.setMoneyByType(r, l),
                            (this.data.vo.id = a),
                            o["default"].sendNt(s.CountryEvent.CountryCreate),
                            [2, a]))
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryActive = function (e, t) {
          return __awaiter(this, void 0, Promise, function () {
            var i, n, a, r, l, u, d, p;
            return __generator(this, function (c) {
              switch (c.label) {
                case 0:
                  return (
                    (i = f.Tool.manageString(
                      _.GameText.STR_COUNTRY_ACTIVE_INFO,
                      w.Country.ACTIVATE_MONEY[1] +
                        C.ModelVo.getMoneyText(w.Country.ACTIVATE_MONEY[0]),
                    )),
                    [
                      4,
                      T["default"].waitForTwiceSureUI(
                        i,
                        _.GameText.STR_COUNTRY_ACTIVE,
                      ),
                    ]
                  );
                case 1:
                  return (n = c.sent())
                    ? ((a = M["default"].getMoneyArrayValue(
                        w.Country.ACTIVATE_MONEY,
                      )),
                      [4, f.Tool.checkEnoughMoney(a[0], a[1], a[2])])
                    : [2];
                case 2:
                  return 0 == c.sent()
                    ? [2, !1]
                    : ((r = g["default"].createCountryActiveMsg(e)),
                      [4, this.sendProtoAsync(r)]);
                case 3:
                  return (
                    c.sent(),
                    (l = g["default"].getReceiveMsg()),
                    null == l
                      ? [2, !1]
                      : (null != t && (t.status = w.Country.STATUS_NORMAL),
                        (u = l.getByte()),
                        (d = l.getInt()),
                        (p = M["default"].myPlayer),
                        null != p && p.setMoneyByType(u, d),
                        o["default"].sendNt(s.CountryEvent.CountryAct),
                        h.Tips.show("激活成功"),
                        [2, !0])
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryList = function (e, t, i, n) {
          return __awaiter(this, void 0, Promise, function () {
            var a, r, l, u, _, d, p;
            return __generator(this, function (c) {
              switch (c.label) {
                case 0:
                  return null == e
                    ? [2, null]
                    : ((a = g["default"].createCountryListMsg(
                        e.searchBuildingID,
                        t,
                        i,
                        n,
                      )),
                      [4, this.sendProtoAsync(a)]);
                case 1:
                  if ((c.sent(), (r = g["default"].getReceiveMsg()), null == r))
                    return [2, null];
                  for (
                    r.reset(),
                      l = r.getInt(),
                      u = r.getShort(),
                      _ = new E["default"](),
                      d = 0;
                    u > d;
                    d++
                  )
                    ((p = new w.Country(-1)),
                      (p.id = r.getInt()),
                      (p.name = r.getString()),
                      (p.entryTaxMoney1 = r.getInt()),
                      (p.entryTaxMoney3 = r.getInt()),
                      e.searchBuildingID <= 0
                        ? (p.scale = r.getByte())
                        : (p.searchBuildingLevel = r.getByte()),
                      (p.idefinecation = r.getBoolean()),
                      _.addElement(p));
                  return (
                    (e.idefinecationInfo = r.getString()),
                    (e.countryList = _),
                    o["default"].sendNt(s.CountryEvent.CountryList),
                    [2, [_, l]]
                  );
              }
            });
          });
        }),
        (t.prototype.onModifyName = function () {
          T["default"].showInput(
            "修改国家名称",
            "请输入国家名:",
            r["default"].alloc(this, this.sendModifyName),
          );
        }),
        (t.prototype.sendModifyName = function (e) {
          this.doCountryChangeName(e);
        }),
        (t.prototype.doCountryChangeName = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, a;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return 0 == this.data.vo.isKing(M["default"].myPlayer)
                    ? (T["default"].alertMessage(
                        _.GameText.STR_COUNTRY_RIGHTLESSDO,
                      ),
                      [2, !1])
                    : ((t = g["default"].createCountryChangeName(e)),
                      [4, this.sendProtoAsync(t)]);
                case 1:
                  return (
                    (i = r.sent()),
                    (n = i.getByte()),
                    0 > n
                      ? ((a = i.getString()), T["default"].alertMessage(a), [2])
                      : ((M["default"].myPlayer.countryName =
                          this.data.vo.name =
                            e),
                        h.Tips.show("国家名字修改成功"),
                        o["default"].sendNt(s.CountryEvent.CountryModify),
                        [2, !0])
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryAfficheModify = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t;
            return __generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return 0 == this.data.vo.isChangeNotice(M["default"].myPlayer)
                    ? (T["default"].alertMessage(
                        _.GameText.STR_COUNTRY_AFFICHE_RIGHTLESSDO,
                      ),
                      [2, !1])
                    : ((t = g["default"].createCountryAfficheModifyMsg(e)),
                      [4, this.sendProtoAsync(t)]);
                case 1:
                  return (
                    i.sent(),
                    (this.data.vo.affiche = e),
                    h.Tips.show("公告修改成功"),
                    o["default"].sendNt(s.CountryEvent.CountryNotice),
                    [2, !0]
                  );
              }
            });
          });
        }),
        (t.prototype.doEnterCountry = function (e, t) {
          return (
            void 0 === t && (t = !0),
            __awaiter(this, void 0, Promise, function () {
              var i, o, n, a, r, s, l, d, E, y, v;
              return __generator(this, function (S) {
                switch (S.label) {
                  case 0:
                    return null == e
                      ? [2, !1]
                      : ((i = M["default"].myPlayer),
                        i.isInTeam() && !i.isLeader()
                          ? (h.Tips.show("队员无法操作进入国家"), [2])
                          : [4, M["default"].checkCrossServer()]);
                  case 1:
                    return (o = S.sent())
                      ? ((n = "离开跨服副本，会自动退出队伍\n是否确定离开？"),
                        [
                          4,
                          T["default"].waitForTwiceSureUI(
                            n,
                            _.GameText.getText(_.GameText.TI_WARM_SHOW),
                          ),
                        ])
                      : [3, 3];
                  case 2:
                    if (((a = S.sent()), !a)) return [2];
                    S.label = 3;
                  case 3:
                    return (
                      (r = this.doGetNeedPayMemberNum(e)),
                      r > 0 && (e.entryTaxMoney1 > 0 || e.entryTaxMoney3 > 0)
                        ? ((s = ""),
                          (s =
                            1 == r && 0 == M["default"].myPlayer.isInTeam()
                              ? _.GameText.STR_COUNTRY_ENTER_ONE_NEED_PAY
                              : _.GameText.STR_COUNTRY_ENTER_TEAM_NEED_PAY),
                          (l = f.Tool.manageString(
                            _.GameText.STR_COUNTRY_ENTER_ASK,
                            s +
                              c["default"].makeColorString(
                                e.entryTaxMoney1 > 0
                                  ? _.GameText.STR_MONEY1 +
                                      e.entryTaxMoney1 * r +
                                      "\n"
                                  : "",
                                f.Tool.COLOR_YELLOW,
                              ) +
                              c["default"].makeColorString(
                                e.entryTaxMoney3 > 0
                                  ? _.GameText.STR_MONEY3 +
                                      e.entryTaxMoney3 * r +
                                      "\n"
                                  : "",
                                f.Tool.COLOR_MONEY3,
                              ),
                          )),
                          [
                            4,
                            T["default"].waitForTwiceSureUI(
                              l,
                              _.GameText.STR_COUNTRY_ENTER_PAY,
                            ),
                          ])
                        : [3, 5]
                    );
                  case 4:
                    if (((d = S.sent()), !d)) return [2];
                    S.label = 5;
                  case 5:
                    return (
                      (E = g["default"].createJumpCountryMessage(
                        e.id,
                        u["default"].JUMP_MAP_DATA_FLAG,
                        e.entryTaxMoney1,
                        e.entryTaxMoney3,
                      )),
                      [4, this.sendProtoAsync(E)]
                    );
                  case 6:
                    return (
                      S.sent(),
                      (E = g["default"].getReceiveMsg()),
                      null == E
                        ? [2, !1]
                        : ((y = E.getByte()),
                          0 > y
                            ? (t && T["default"].errorMessage(E.getString()),
                              [2, !1])
                            : 1 == y
                              ? ((e.entryTaxMoney1 = E.getInt()),
                                (e.entryTaxMoney3 = E.getInt()),
                                T["default"].alertMessage(
                                  f.Tool.manageString(
                                    _.GameText.STR_COUNTRY_ENTER_TWICE_SURE,
                                    C.ModelVo.getMoneyText(
                                      p.ModelConst.MONEY1,
                                    ) +
                                      e.entryTaxMoney1 +
                                      "," +
                                      C.ModelVo.getMoneyText(
                                        p.ModelConst.MONEY3,
                                      ) +
                                      e.entryTaxMoney3,
                                  ),
                                ),
                                [2, !1])
                              : ((v = M["default"].myPlayer),
                                (v.money1 = E.getInt()),
                                (v.money3 = E.getInt()),
                                g["default"].processDataBlockFlagMsg(E),
                                T["default"].showMain(),
                                [2, !0]))
                    );
                }
              });
            })
          );
        }),
        (t.prototype.countryEnter = function (e) {
          var t = e.body;
          if (null == t) return !1;
          var i = t.getByte();
          if (0 > i) return void T["default"].errorMessage(t.getString());
          if (1 == i) {
            (t.getInt(), t.getInt());
          }
          var o = M["default"].myPlayer;
          ((o.money1 = t.getInt()),
            (o.money3 = t.getInt()),
            g["default"].processDataBlockFlagMsg(t),
            T["default"].showMain());
        }),
        (t.prototype.doLeaveCountry = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, o;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (t = M["default"].myPlayer),
                    null == t
                      ? [2, !1]
                      : [
                          4,
                          T["default"].waitForTwiceSureUI(
                            f.Tool.manageString(
                              _.GameText.STR_COUNTRY_LEAVE_ASK,
                              e.name,
                            ),
                            _.GameText.STR_COUNTRY_LEAVE,
                          ),
                        ]
                  );
                case 1:
                  return (i = n.sent())
                    ? ((o = g["default"].createCountryLeaveMsg()),
                      [4, this.sendProtoAsync(o)])
                    : [2];
                case 2:
                  return (
                    n.sent(),
                    t.clearCountry(),
                    T["default"].closeAllUI(),
                    T["default"].alertMessage(
                      f.Tool.manageString(
                        _.GameText.STR_COUNTRY_LEAVE_SUCCESS,
                        c["default"].makeColorString(e.name, 16776960),
                      ),
                    ),
                    [2, !0]
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryApply = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, o;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return e.id == M["default"].myPlayer.getCountryId()
                    ? (T["default"].alertMessage(
                        _.GameText.STR_COUNTRY_IS_MEMBER,
                      ),
                      [2, !1])
                    : ((t = g["default"].createCountryApply(e.id)),
                      [4, this.sendProtoAsync(t)]);
                case 1:
                  return (
                    n.sent(),
                    (i = g["default"].getReceiveMsg()),
                    null == i
                      ? [2, !1]
                      : ((o = i.getByte()),
                        0 > o
                          ? (T["default"].errorMessage(i.getString()), [2, !1])
                          : (T["default"].alertMessage(
                              _.GameText.STR_INFO_COUNTRY_APPLY,
                            ),
                            [2, !0]))
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryMemberList = function (e, t, i) {
          return __awaiter(this, void 0, void 0, function () {
            var o, n, a, r, l, d;
            return __generator(this, function (p) {
              switch (p.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((n =
                        e.searchMemberStatus == u["default"].SEARCH_MEM_APPLY),
                      (o =
                        0 == n
                          ? g["default"].createCountryMemberListMsg(
                              e.id,
                              e.searchRankID,
                              t,
                              i,
                              e.searchMemberStatus,
                            )
                          : g["default"].createCountryMemberAppleListMsg(t, i)),
                      [4, this.sendProtoAsync(o)]);
                case 1:
                  return (
                    p.sent(),
                    (a = g["default"].getReceiveMsg()),
                    null == a || a.type != o.type
                      ? [2]
                      : ((r = a.getInt()),
                        (l = r),
                        (d = new E["default"]()),
                        0 > r
                          ? (T["default"].errorMessage(a.getString()),
                            (d = new E["default"]()))
                          : ((d = this.fromBytesMemberList(a, n)),
                            (null == d || d.size() <= 0) &&
                              0 == n &&
                              T["default"].alertMessage(
                                _.GameText.STR_COUNTRY_MEMBER_MISMATCH,
                              )),
                        (e.memberList = d),
                        this.data.setData(L["default"].memberList, d.arr),
                        this.sendNt(s.CountryEvent.CountryMember),
                        [2])
                  );
              }
            });
          });
        }),
        (t.prototype.fromBytesMemberList = function (e, t) {
          for (
            var i = new E["default"](), o = e.getShort(), n = 0;
            o > n;
            n++
          ) {
            var a = new m["default"]();
            if (0 == t) {
              (a.setVipLevel2(e.getByte()),
                a.setId(e.getInt()),
                a.setName(e.getString()),
                a.setLevel(e.getByte()),
                a.setJob(e.getByte()),
                a.setSex(e.getByte()),
                a.setRace(e.getByte()),
                a.setCountryRank(e.getByte()),
                (a.countryHonor = e.getInt()),
                (a.countryBookNum = e.getShort()));
              var r = e.getBoolean();
              r
                ? a.setStatusBit(p.ModelConst.STATUS_ONLINE)
                : (a.times = e.getInt());
              var s = e.getByte();
              if (
                f.Tool.isBit(p.ModelConst.COUNTRY_FFLAG_IS_VIP, s) ||
                f.Tool.isBit(p.ModelConst.COUNTRY_FFLAG_IS_VIP_CQ, s)
              ) {
                var l = e.getByte();
                l > 50 ? a.setVipLevel(l + 1) : a.setVipLevel(l + 10);
              }
              var u = e.getByte();
              1 == u
                ? a.setStatusBit(p.ModelConst.STATUS_IS_TEACHER)
                : 2 == u && a.setStatusBit(p.ModelConst.STATUS_IS_GM);
            } else {
              (a.setVipLevel2(e.getByte()),
                a.setId(e.getInt()),
                a.setName(e.getString()),
                a.setLevel(e.getByte()),
                a.setJob(e.getByte()),
                a.setSex(e.getByte()),
                a.setRace(e.getByte()),
                (a.times = e.getInt()));
              var s = e.getByte();
              if (
                f.Tool.isBit(p.ModelConst.COUNTRY_FFLAG_IS_VIP, s) ||
                f.Tool.isBit(p.ModelConst.COUNTRY_FFLAG_IS_VIP_CQ, s)
              ) {
                var l = e.getByte();
                a.setVipLevel(l);
              }
              var u = e.getByte();
              1 == u
                ? a.setStatusBit(p.ModelConst.STATUS_IS_TEACHER)
                : 2 == u && a.setStatusBit(p.ModelConst.STATUS_IS_GM);
            }
            i.addElement(a);
          }
          return i;
        }),
        (t.prototype.doCountryBuildingRemove = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, a, r, l, u, d;
            return __generator(this, function (h) {
              switch (h.label) {
                case 0:
                  return (
                    (t = this.data.vo),
                    0 == t.isRemoveBuild(M["default"].myPlayer)
                      ? (T["default"].alertMessage(
                          _.GameText.STR_COUNTRY_DEL_BUILD_RLESSDO,
                        ),
                        [2, !1])
                      : ((i = t.getBuildingAttrByIndex(
                          e,
                          w.Country.BUILDING_ID,
                        )),
                        (n = t.getBuildingAttrByIndex(
                          e,
                          w.Country.BUILDING_LEVEL,
                        )),
                        0 == w.Country.isBuildingCanDelete(i, n)
                          ? (T["default"].alertMessage(
                              _.GameText.STR_COUNTRY_CANNOT_DEL_BUILD,
                            ),
                            [2, !1])
                          : ((a = f.Tool.manageString(
                              _.GameText.STR_COUNTRY_DEL_BUILD_ASK,
                              c["default"].makeColorString(
                                t.getBuildingName(i, n),
                                16711680,
                              ),
                            )),
                            [
                              4,
                              T["default"].waitForTwiceSureUI(
                                a,
                                _.GameText.STR_COUNTRY_DEL_BUILD,
                              ),
                            ]))
                  );
                case 1:
                  return (r = h.sent())
                    ? ((l = g["default"].createCountryBuildingRemoveMsg(i)),
                      [4, this.sendProtoAsync(l)])
                    : [2];
                case 2:
                  return (
                    h.sent(),
                    (u = g["default"].getReceiveMsg()),
                    null == u
                      ? [2, !1]
                      : ((t.freeLand = u.getInt()),
                        (t.freeBuild = u.getShort()),
                        w.Country.fromBytesBuildingAttr(t, i, 0, u),
                        (d = M["default"].getNpcByID(i)),
                        null != d &&
                          d.setTabStatus(!1, p.ModelConst.NPC_COUNTRY_BLOAD),
                        o["default"].sendNt(s.CountryEvent.CountryBuild),
                        [2, !0])
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryBuildingUpgrade = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, a, r, l, u, d;
            return __generator(this, function (c) {
              switch (c.label) {
                case 0:
                  return (
                    (t = this.data.vo),
                    0 == t.isCreateBuild(M["default"].myPlayer)
                      ? (T["default"].alertMessage(
                          _.GameText.STR_COUNTRY_BUILD_RIGHTLESSDO,
                        ),
                        [2, !1])
                      : ((i = t.getBuildingAttrByIndex(
                          e,
                          w.Country.BUILDING_ID,
                        )),
                        (n = t.getBuildingAttrByIndex(
                          e,
                          w.Country.BUILDING_LEVEL,
                        )),
                        (a = t.getBuildingInfo(e, !0)),
                        [
                          4,
                          T["default"].waitForTwiceSureUI(
                            a,
                            w.Country.getBuildingTitle(i, n),
                          ),
                        ])
                  );
                case 1:
                  return (r = c.sent())
                    ? ((l = g["default"].createCountryBuildingUpgradeMsg(i)),
                      [4, this.sendProtoAsync(l)])
                    : [2];
                case 2:
                  return (
                    c.sent(),
                    (u = g["default"].getReceiveMsg()),
                    null == u
                      ? [2, !1]
                      : (t.updateBuildingUpgadeCost(e),
                        (t.freeBuild = u.getShort()),
                        w.Country.fromBytesBuildingAttr(t, i, n + 1, u),
                        (t.issuePoint = u.getByte()),
                        (d = M["default"].getNpcByID(i)),
                        null != d &&
                          d.setTabStatus(!1, p.ModelConst.NPC_COUNTRY_BLOAD),
                        o["default"].sendNt(s.CountryEvent.CountryBuild),
                        [2, !0])
                  );
              }
            });
          });
        }),
        (t.prototype.getCountryBuildingInfo = function (e) {
          this.getCountryInfo(e, w.Country.INFO_BUILDING);
        }),
        (t.prototype.getCountryInfo = function (e, t, i) {
          return (
            void 0 === t && (t = w.Country.INFO_NORMAL),
            __awaiter(this, void 0, Promise, function () {
              var n, a;
              return __generator(this, function (r) {
                switch (r.label) {
                  case 0:
                    return null == e
                      ? [2, !1]
                      : ((n = g["default"].createBrowseCountryInfoMsg(e.id, t)),
                        [4, this.sendProtoAsync(n)]);
                  case 1:
                    return (
                      r.sent(),
                      (a = g["default"].getReceiveMsg()),
                      null == a
                        ? [2, !1]
                        : (w.Country.fromBytes(e, a),
                          i
                            ? i.exec(e)
                            : o["default"].sendNt(
                                s.CountryEvent.CountryInfo,
                                t,
                              ),
                          [2, !0])
                    );
                }
              });
            })
          );
        }),
        (t.prototype.getCountryMainMenu = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, o, n, a, r, l;
            return __generator(this, function (u) {
              switch (u.label) {
                case 0:
                  return (
                    (t = g["default"].createCountryMainMenu()),
                    [4, this.sendProtoAsync(t)]
                  );
                case 1:
                  if ((u.sent(), (t = g["default"].getReceiveMsg()), null == t))
                    return [2];
                  for (
                    i = t.getByte(),
                      o = t.getByte(),
                      e.usePoint = i,
                      e.issuePoint = o,
                      n = t.getShort(),
                      e.taskMainType = new E["default"](),
                      a = 0;
                    n > a;
                    a++
                  )
                    ((r = t.getByte()),
                      (l = t.getByte()),
                      e.taskMainType.addElement([r, l]));
                  return (this.sendNt(s.CountryEvent.CountryTask), [2]);
              }
            });
          });
        }),
        (t.prototype.doCountryAssignMission = function (e, t) {
          return __awaiter(this, void 0, Promise, function () {
            var i, o, n, a;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  if (null == t) return [2, !1];
                  if (0 == t.isAssignMission(M["default"].myPlayer))
                    return (
                      T["default"].alertMessage(
                        _.GameText.STR_COUNTRY_ASSIGN_RIGHTLESSDO,
                      ),
                      [2, !1]
                    );
                  if (null == t.assignModelList) return [2, !1];
                  i = new E["default"]();
                  for (o in t.assignModelList)
                    if (
                      Object.prototype.hasOwnProperty.call(t.assignModelList, o)
                    ) {
                      if (((n = t.assignModelList[o]), null == n)) continue;
                      i.addElement(n.getId());
                    }
                  return (
                    (a = g["default"].createCountryAssignMission(e, i)),
                    [4, this.sendProtoAsync(a)]
                  );
                case 1:
                  return (
                    r.sent(),
                    T["default"].alertMessage(
                      _.GameText.STR_COUNTRY_ASSIGN_SUCCESS,
                    ),
                    [2, !0]
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryPublishMission = function (e, t) {
          return __awaiter(this, void 0, Promise, function () {
            var i, n;
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return 0 == t.isPublishMission(M["default"].myPlayer)
                    ? (T["default"].alertMessage(
                        _.GameText.STR_COUNTRY_MISSION_RIGHTLESSDO,
                      ),
                      [2, !1])
                    : ((i = t.getIdPublicList()),
                      t.setLoadStatus(!0, w.Country.IS_OPERATE_MISSION),
                      (n = g["default"].createCountryPublishMission(e, i.arr)),
                      [4, this.sendProtoAsync(n)]);
                case 1:
                  return (
                    a.sent(),
                    t.saveIdPublicList(),
                    T["default"].alertMessage(
                      _.GameText.STR_COUNTRY_DO_MISSION_SUCCESS,
                    ),
                    o["default"].sendNt(s.CountryEvent.CountryTaskRefresh),
                    [2, !0]
                  );
              }
            });
          });
        }),
        (t.prototype.getCountryMissionInfo = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, a, n;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (t = g["default"].createCountryGetAllMission()),
                    [4, this.sendProtoAsync(t)]
                  );
                case 1:
                  if ((r.sent(), (t = g["default"].getReceiveMsg()), null == t))
                    return [2];
                  for (
                    i = t.getShort(),
                      e.missionCommonList = new E["default"](),
                      n = 0;
                    i > n;
                    n++
                  )
                    e.missionCommonList.addElement(
                      S.ObjectData.fromCountryAllMissionBytes(t),
                    );
                  for (
                    a = t.getShort(),
                      e.missionAppointList = new E["default"](),
                      n = 0;
                    a > n;
                    n++
                  )
                    e.missionAppointList.addElement(
                      S.ObjectData.fromCountryAllMissionBytes(t),
                    );
                  return (o["default"].sendNt(s.CountryEvent.CountryTask), [2]);
              }
            });
          });
        }),
        (t.prototype.getCountryValidMission = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, a, n, r;
            return __generator(this, function (l) {
              switch (l.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : ((t = g["default"].createCountryValidMission()),
                      [4, this.sendProtoAsync(t)]);
                case 1:
                  if ((l.sent(), (t = g["default"].getReceiveMsg()), null == t))
                    return [2, !1];
                  for (
                    i = t.getShort(),
                      e.missionCommonList = new E["default"](),
                      n = 0;
                    i > n;
                    n++
                  )
                    e.missionCommonList.addElement(
                      S.ObjectData.fromCountryValidListBytes(t),
                    );
                  for (
                    a = t.getShort(),
                      e.missionAppointList = new E["default"](),
                      n = 0;
                    a > n;
                    n++
                  )
                    e.missionAppointList.addElement(
                      S.ObjectData.fromCountryValidListBytes(t),
                    );
                  return (
                    (r = t.getBoolean()),
                    (e.isMyMission = r),
                    o["default"].sendNt(s.CountryEvent.CountryTask),
                    [2, !0]
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryAssignMemList = function (e, t, i, n) {
          return __awaiter(this, void 0, Promise, function () {
            var a, r, l, u, _, d, p, _, c;
            return __generator(this, function (h) {
              switch (h.label) {
                case 0:
                  return null == n
                    ? [2, null]
                    : ((a = g["default"].createCountryAssignMem(e, t, i, !0)),
                      [4, this.sendProtoAsync(a)]);
                case 1:
                  if ((h.sent(), (a = g["default"].getReceiveMsg()), null == a))
                    return [2, null];
                  if (((r = a.getInt()), 0 > r))
                    return (
                      T["default"].errorMessage(a.getString()),
                      [2, null]
                    );
                  for (
                    l = a.getShort(), u = new E["default"](), _ = 0;
                    l > _;
                    _++
                  )
                    u.addElement(m["default"].fromBytesToCountryAssingMem(a));
                  if ((d = a.getBoolean()))
                    for (
                      p = a.getShort(), n.assignModelList = {}, _ = 0;
                      p > _;
                      _++
                    )
                      ((c = m["default"].fromBytesToCountryAssingMem(a)),
                        null != c && (n.assignModelList[c.getId()] = c));
                  return (
                    this.data.setData(L["default"].memberList, u.arr),
                    o["default"].sendNt(s.CountryEvent.CountryTask),
                    [2, [u, r]]
                  );
              }
            });
          });
        }),
        (t.prototype.doCreateUnion = function (e, t) {
          return __awaiter(this, void 0, void 0, function () {
            var i, n, a;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((i = g["default"].createWarUnionCreate(t)),
                      [4, this.sendProtoAsync(i)]);
                case 1:
                  return (
                    r.sent(),
                    (i = g["default"].getReceiveMsg()),
                    null == i
                      ? [2]
                      : ((e.leagueid = Long.fromInt(i.getInt())),
                        (e.unionName = t),
                        (e.myUnionList = new E["default"]()),
                        (n = M["default"].myPlayer),
                        null != n &&
                          ((a = new w.Country(n.getCountryId())),
                          (a.name = n.getCountryName()),
                          (a.scale = e.scale),
                          a.setLoadStatus(!0, w.Country.WAR_IS_UNION_OWNER),
                          a.status == w.Country.STATUS_INACTIVE &&
                            (a.status = -1),
                          e.myUnionList.addElement(a)),
                        o["default"].sendNt(s.CountryEvent.CountryForcesCreat),
                        T["default"].alertMessage(
                          _.GameText.STR_COUNTRY_CREATE_UNION_SUCCESS,
                        ),
                        [2])
                  );
              }
            });
          });
        }),
        (t.prototype.doGetMyUnion = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, n, a, r, l, a, r;
            return __generator(this, function (u) {
              switch (u.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((t = g["default"].createWarUnionMy()),
                      [4, this.sendProtoAsync(t)]);
                case 1:
                  if ((u.sent(), (t = g["default"].getReceiveMsg()), null == t))
                    return [2];
                  if (((e.scale = t.getByte()), -1 == e.scale))
                    return (T["default"].errorMessage(t.getString()), [2]);
                  if (((i = t.getBoolean()), 0 == i)) return [2];
                  for (
                    e.leagueid = Long.fromInt(t.getInt()),
                      e.unionName = t.getString(),
                      e.myUnionList = new E["default"](),
                      n = t.getShort(),
                      a = 0;
                    n > a;
                    a++
                  )
                    ((r = new w.Country(t.getInt())),
                      (r.name = t.getString()),
                      (r.scale = t.getByte()),
                      0 == a &&
                        r.setLoadStatus(!0, w.Country.WAR_IS_UNION_OWNER),
                      (r.status = t.getByte()),
                      (r.status == w.Country.UNION_STATUS_WAR ||
                        r.status == w.Country.UNION_STATUS_TEST) &&
                        ((r.fightCountry = t.getString()),
                        (r.fightID = t.getInt()),
                        (r.countryFightTime = t.getString()),
                        (r.isAttack = t.getBoolean()),
                        (r.fightMoney1 = t.getInt()),
                        (r.fightMoney3 = t.getInt()),
                        (r.fightType = t.getByte())),
                      e.myUnionList.addElement(r));
                  for (l = t.getShort(), a = 0; l > a; a++)
                    ((r = new w.Country(t.getInt())),
                      (r.name = t.getString()),
                      (r.scale = t.getByte()),
                      (r.status = w.Country.UNION_STATUS_APPLY),
                      r.setLoadStatus(!0, w.Country.WAR_IS_APPLY_UNION),
                      e.myUnionList.addElement(r));
                  return (
                    o["default"].sendNt(s.CountryEvent.CountryForcesInfo),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doQuitUnion = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return null == e
                    ? [2]
                    : [
                        4,
                        T["default"].waitForTwiceSureUI(
                          _.GameText.STR_COUNTRY_QUIT_UNION_ASK,
                          _.GameText.getText(_.GameText.TI_WARN),
                        ),
                      ];
                case 1:
                  return (t = n.sent())
                    ? ((i = g["default"].createWarUnionQuit()),
                      [4, this.sendProtoAsync(i)])
                    : [2];
                case 2:
                  return (
                    n.sent(),
                    (e.leagueid = Long.fromInt(-1)),
                    (e.unionName = ""),
                    o["default"].sendNt(s.CountryEvent.CountryForcesLeave),
                    T["default"].alertMessage(
                      _.GameText.STR_COUNTRY_QUIT_UNION_SUCCESS,
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doGetUnionList = function (e, t, i) {
          return __awaiter(this, void 0, void 0, function () {
            var n, a, r, l, u, _, d, p;
            return __generator(this, function (c) {
              switch (c.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((n = g["default"].createWarUnionList(t, i)),
                      [4, this.sendProtoAsync(n)]);
                case 1:
                  if ((c.sent(), (n = g["default"].getReceiveMsg()), null == n))
                    return [2];
                  if (((a = n.getInt()), 0 > a))
                    return (T["default"].errorMessage(n.getString()), [2]);
                  for (
                    e.scale = n.getByte(),
                      r = n.getShort(),
                      e.unionList = new E["default"](),
                      l = 0;
                    r > l;
                    l++
                  ) {
                    for (
                      u = new w.Country(-1),
                        u.leagueid = Long.fromInt(n.getInt()),
                        u.name = n.getString(),
                        u.myUnionList = new E["default"](),
                        _ = n.getShort(),
                        d = 0;
                      _ > d;
                      d++
                    )
                      ((p = new w.Country(n.getInt())),
                        (p.name = n.getString()),
                        (p.scale = n.getByte()),
                        u.myUnionList.addElement(p));
                    e.unionList.addElement(u);
                  }
                  return (
                    o["default"].sendNt(s.CountryEvent.CountryOtherForces),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doGetWarList = function (e, t, i, n) {
          return __awaiter(this, void 0, void 0, function () {
            var a, r, l, u, _, d, p;
            return __generator(this, function (c) {
              switch (c.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((a = g["default"].createWarUnionWarList(t, i, n)),
                      [4, this.sendProtoAsync(a)]);
                case 1:
                  if ((c.sent(), (a = g["default"].getReceiveMsg()), null == a))
                    return [2];
                  if (((r = a.getInt()), 0 > r))
                    return (T["default"].errorMessage(a.getString()), [2]);
                  for (
                    l = a.getShort(), u = new E["default"](), _ = 0;
                    l > _;
                    _++
                  )
                    ((d = new w.Country(-1)),
                      (d.countryFightTime = a.getString()),
                      (d.countryID1 = a.getInt()),
                      (d.countryName1 = a.getString()),
                      (d.countryID2 = a.getInt()),
                      (d.countryName2 = a.getString()),
                      (d.fightID = a.getInt()),
                      (d.fightMoney1 = a.getInt()),
                      (d.fightMoney3 = a.getInt()),
                      (d.fightType = a.getByte()),
                      (p = a.getBoolean()),
                      p
                        ? (d.status = w.Country.UNION_STATUS_TEST)
                        : (d.status = w.Country.UNION_STATUS_WAR),
                      u.addElement(d));
                  return (
                    t == g["default"].WAR_UNION_TYPE_UNION
                      ? (e.myWarList = u)
                      : t == g["default"].WAR_UNION_TYPE_OTHER &&
                        (e.warList = u),
                    o["default"].sendNt(s.CountryEvent.CountryOtherWar),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doAddUnion = function (e, t) {
          return __awaiter(this, void 0, void 0, function () {
            var i, o, n, a, r, s, l, u, d, p;
            return __generator(this, function (c) {
              switch (c.label) {
                case 0:
                  return null == e || null == t
                    ? [2]
                    : ((i = t.getScale()),
                      (o = 5),
                      (n = 100),
                      (a = 5e5),
                      (r = f.Tool.manageString(
                        _.GameText.STR_COUNTRY_ADD_UNION_ASK,
                        [
                          "" + o,
                          _.GameText.STR_MONEY1 + n,
                          _.GameText.STR_MONEY3 + a,
                        ],
                      )),
                      [
                        4,
                        T["default"].waitForTwiceSureUI(
                          r,
                          _.GameText.getText(_.GameText.TI_WARN),
                        ),
                      ]);
                case 1:
                  return (s = c.sent())
                    ? ((l = e.leagueid),
                      (u = g["default"].createWarUnionApply(l)),
                      [4, this.sendProtoAsync(u)])
                    : [2];
                case 2:
                  return (
                    c.sent(),
                    (d = g["default"].getReceiveMsg()),
                    null == d
                      ? [2, !1]
                      : ((p = d.getByte()),
                        0 > p
                          ? (T["default"].errorMessage(d.getString()), [2, !1])
                          : (T["default"].alertMessage(
                              _.GameText.STR_COUNTRY_ADD_UNION_WAIT,
                            ),
                            [2]))
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryCreateWarCommand = function () {
          var e = this.data.vo;
          if (0 == e.isKing(M["default"].myPlayer))
            return (
              T["default"].alertMessage(_.GameText.STR_COUNTRY_RIGHTLESSDO),
              !1
            );
          var t = new w.Country(e.id);
          return (
            0 == t.isTemp() &&
              this.getCountryInfo(
                t,
                w.Country.INFO_NORMAL,
                r["default"].alloc(this, this.onWarCommand),
              ),
            !0
          );
        }),
        (t.prototype.onWarCommand = function (e) {
          this.sendList(L["default"].list_storm, e, "", !0);
        }),
        (t.prototype.doCommandCreateWarDeclareList = function (e, t, i, n) {
          return __awaiter(this, void 0, void 0, function () {
            var a, r, u, _, d, p, c, h, f;
            return __generator(this, function (y) {
              switch (y.label) {
                case 0:
                  return null == e
                    ? [2, null]
                    : ((a = g["default"].createCommandCreateWarDeclareList(
                        e.searchBuildingID,
                        t,
                        i,
                      )),
                      [4, this.sendProtoAsync(a)]);
                case 1:
                  if ((y.sent(), (a = g["default"].getReceiveMsg()), null == a))
                    return [2, null];
                  if (((r = a.getInt()), 0 > r))
                    return (
                      T["default"].errorMessage(a.getString()),
                      [2, null]
                    );
                  for (
                    u = a.getInt(),
                      _ = a.getByte(),
                      d = a.getInt(),
                      p = a.getShort(),
                      c = new E["default"](),
                      h = 0;
                    p > h;
                    h++
                  )
                    ((f = new w.Country(-1)),
                      (f.id = a.getInt()),
                      (f.name = a.getString()),
                      e.searchBuildingID <= 0
                        ? (f.scale = a.getByte())
                        : (f.searchBuildingLevel = a.getByte()),
                      (f.armyStrength = u),
                      (f.bookNum = _),
                      (f.costmoney = d),
                      c.addElement(f));
                  return (
                    (e.countryList = c),
                    (e.createwarinfo = a.getString()),
                    n
                      ? (T["default"].showWin(
                          l.ModName.Country,
                          l.CountryViewType.CountryMain,
                          {
                            params: !0,
                            subParams: {
                              data: e,
                              openType: L["default"].list_storm,
                            },
                          },
                        ),
                        T["default"].alertMessage(e.createwarinfo))
                      : o["default"].sendNt(s.CountryEvent.CountryList),
                    o["default"].sendNt(s.CountryEvent.CountryList),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryKingCommand = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, a, r, l, u;
            return __generator(this, function (d) {
              switch (d.label) {
                case 0:
                  return (
                    (t = this.data.vo),
                    0 == t.isKing(M["default"].myPlayer)
                      ? (T["default"].alertMessage(
                          _.GameText.STR_COUNTRY_RIGHTLESSDO,
                        ),
                        [2, !1])
                      : [
                          4,
                          T["default"].showInputAsync(
                            _.GameText.STR_COUNTRY_BOOK_USE,
                            _.GameText.STR_KING_COMMAND_COUNT_INFO + "\n",
                            void 0,
                            void 0,
                            void 0,
                            void 0,
                            void 0,
                            "0-9",
                          ),
                        ]
                  );
                case 1:
                  return (i = d.sent())
                    ? ((n = f.Tool.parseInt(i)),
                      10 > n || n > 100
                        ? (T["default"].alertMessage(
                            _.GameText.STR_KING_COMMAND_COUNT_INFO_ER,
                          ),
                          [2, !1])
                        : ((a = g["default"].createCountryKingCommand(n)),
                          [4, this.sendProtoAsync(a)]))
                    : [2];
                case 2:
                  return (
                    d.sent(),
                    (a = g["default"].getReceiveMsg()),
                    null == a
                      ? [2, !1]
                      : ((r = a.getBoolean()),
                        (l = 0),
                        r &&
                          (w.Country.fromBytesReflash(t, a),
                          (l = a.getShort())),
                        (u = e - 1),
                        null != t.commandCoolList[u] &&
                          ((t.commandCoolList[u][0] = !0),
                          (t.commandCoolList[u][1] =
                            t.commandCoolList[u][1] - 1)),
                        o["default"].sendNt(s.CountryEvent.CountryPower),
                        T["default"].alertMessage(
                          f.Tool.manageString(
                            _.GameText.STR_KING_COMMAND_USE_SUCCESS,
                            l + "",
                          ),
                        ),
                        [2, !0])
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryEnterRateModify = function () {
          return __awaiter(this, void 0, Promise, function () {
            var e, t, i, n, a, r, u;
            return __generator(this, function (d) {
              switch (d.label) {
                case 0:
                  return (
                    (e = this.data.vo),
                    0 == e.isKing(M["default"].myPlayer)
                      ? (T["default"].alertMessage(
                          _.GameText.STR_COUNTRY_RIGHTLESSDO,
                        ),
                        [2, !1])
                      : ((t = f.Tool.manageString(
                          _.GameText.STR_TYPE_COUNTRY_ENTER_RATE_CON,
                          ["", "100"],
                        )),
                        (i = f.Tool.manageString(
                          _.GameText.STR_TYPE_COUNTRY_ENTER_RATE_CON,
                          ["", 1e5 + ""],
                        )),
                        [
                          4,
                          T["default"].showInput2Async(
                            _.GameText.STR_TYPE_COUNTRY_ENTER_RATE,
                            [t, i],
                            null,
                            [
                              l.ModName.Country,
                              l.CountryViewType.CountryModify,
                            ],
                            null,
                            [3, 6],
                          ),
                        ])
                  );
                case 1:
                  return (n = d.sent())
                    ? ((a = f.Tool.parseInt(n[0])),
                      (r = f.Tool.parseInt(n[1])),
                      (u = g["default"].createCountryEnterRate(e.id, a, r)),
                      [4, this.sendProtoAsync(u)])
                    : [2];
                case 2:
                  return (
                    d.sent(),
                    (e.entryTaxMoney1 = a),
                    (e.entryTaxMoney3 = r),
                    o["default"].sendNt(s.CountryEvent.CountryPower),
                    [2, !0]
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryTaxRateModify = function () {
          return __awaiter(this, void 0, Promise, function () {
            var e, t, i, n, a, r;
            return __generator(this, function (l) {
              switch (l.label) {
                case 0:
                  return (
                    (e = this.data.vo),
                    0 == e.isKing(M["default"].myPlayer)
                      ? (T["default"].alertMessage(
                          _.GameText.STR_COUNTRY_RIGHTLESSDO,
                        ),
                        [2, !1])
                      : ((t = _.GameText.STR_TYPE_COUNTRY_TAXRATE_NUM),
                        (i = _.GameText.STR_COUNTRY_PRICE_ADUST_INFO),
                        [
                          4,
                          T["default"].showInputAsync(
                            _.GameText.STR_TYPE_COUNTRY_TAXRATE,
                            t,
                            null,
                            null,
                            null,
                            null,
                            i,
                            "0-9",
                          ),
                        ])
                  );
                case 1:
                  return (n = l.sent())
                    ? ((a = f.Tool.parseInt(n)),
                      (r = g["default"].createCountryTaxRate(e.id, a)),
                      [4, this.sendProtoAsync(r)])
                    : [2];
                case 2:
                  return (
                    l.sent(),
                    (e.taxRate = a),
                    o["default"].sendNt(s.CountryEvent.CountryPower),
                    [2, !0]
                  );
              }
            });
          });
        }),
        (t.prototype.doSoldierApply = function () {
          return __awaiter(this, void 0, void 0, function () {
            var e;
            return __generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    (e = g["default"].createSoldierApply()),
                    [4, this.sendProtoAsync(e)]
                  );
                case 1:
                  return (
                    t.sent(),
                    T["default"].alertMessage(
                      _.GameText.STR_COUNTRY_SOLDIER_APPLY_WAIT,
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doWarDeclareList = function (e, t, i, n) {
          return __awaiter(this, void 0, void 0, function () {
            var a, r, u, _, d, p, c, h;
            return __generator(this, function (f) {
              switch (f.label) {
                case 0:
                  return null == e
                    ? [2, null]
                    : ((a = g["default"].createWarDeclareList(
                        e.searchBuildingID,
                        t,
                        i,
                      )),
                      [4, this.sendProtoAsync(a)]);
                case 1:
                  if ((f.sent(), (a = g["default"].getReceiveMsg()), null == a))
                    return [2, null];
                  if (((r = a.getInt()), 0 > r))
                    return (
                      T["default"].errorMessage(a.getString()),
                      [2, null]
                    );
                  for (
                    u = a.getShort(),
                      _ = a.getInt(),
                      d = a.getByte(),
                      p = new E["default"](),
                      c = 0;
                    u > c;
                    c++
                  )
                    ((h = new w.Country(-1)),
                      (h.id = a.getInt()),
                      (h.name = a.getString()),
                      e.searchBuildingID <= 0
                        ? (h.scale = a.getByte())
                        : (h.searchBuildingLevel = a.getByte()),
                      (h.money1 = a.getInt()),
                      (h.money3 = a.getInt()),
                      (h.armyStrength = _),
                      (h.bookNum = d),
                      p.addElement(h));
                  return (
                    (e.countryList = p),
                    n
                      ? T["default"].showWin(
                          l.ModName.Country,
                          l.CountryViewType.CountryMain,
                          {
                            params: !0,
                            subParams: { openType: L["default"].list_declare },
                          },
                        )
                      : o["default"].sendNt(s.CountryEvent.CountryList),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryPeopleDonateAction = function (e, t) {
          return __awaiter(this, void 0, Promise, function () {
            var i, n, a, r, l, d, h, E, y, v, S, I, m, A;
            return __generator(this, function (C) {
              switch (C.label) {
                case 0:
                  if (((i = M["default"].myPlayer), null == i)) return [2];
                  if (((n = i.bag), null == n)) return [2];
                  if (null == t || 2 != t.length) return [2];
                  switch (((a = t[0]), (r = t[1]), (l = 0), a)) {
                    case u["default"].DONATE_TYPE_MONEY3:
                      if (this.data.vo.money3 + r >= 2147483647)
                        return (
                          T["default"].alertMessage("捐赠铜已达上限"),
                          [2, !1]
                        );
                      if (((l = i.get(p.ModelConst.MONEY3) - r), 0 > l))
                        return (
                          T["default"].alertMessage(
                            f.Tool.manageString(
                              _.GameText.STR_COUNTRY_DONATE_LACK,
                              c["default"].makeColorString(
                                -l + _.GameText.STR_MONEY3,
                                f.Tool.COLOR_RED,
                              ),
                            ),
                          ),
                          [2, !1]
                        );
                      break;
                    case u["default"].DONATE_TYPE_MONEY1:
                      if (this.data.vo.money1 + r >= 2147483647)
                        return (
                          T["default"].alertMessage("捐赠金已达上限"),
                          [2, !1]
                        );
                      if (((l = i.get(p.ModelConst.MONEY1) - r), 0 > l))
                        return (
                          T["default"].alertMessage(
                            f.Tool.manageString(
                              _.GameText.STR_COUNTRY_DONATE_LACK,
                              c["default"].makeColorString(
                                -l + _.GameText.STR_MONEY1,
                                f.Tool.COLOR_RED,
                              ),
                            ),
                          ),
                          [2, !1]
                        );
                      break;
                    case u["default"].DONATE_TYPE_WOOD:
                      if (this.data.vo.wood + r >= 2147483647)
                        return (
                          T["default"].alertMessage("捐赠木材已达上限"),
                          [2, !1]
                        );
                      if (
                        ((l = n.getItemNumByID(u["default"].ITEM_ID_WOOD) - r),
                        0 > l)
                      )
                        return (
                          T["default"].alertMessage(
                            f.Tool.manageString(
                              _.GameText.STR_COUNTRY_DONATE_LACK,
                              c["default"].makeColorString(
                                -l + _.GameText.STR_COUNTRY_WOOD,
                                f.Tool.COLOR_RED,
                              ),
                            ),
                          ),
                          [2, !1]
                        );
                      break;
                    case u["default"].DONATE_TYPE_STONE:
                      if (this.data.vo.stone + r >= 2147483647)
                        return (
                          T["default"].alertMessage("捐赠石材已达上限"),
                          [2, !1]
                        );
                      if (
                        ((l = n.getItemNumByID(u["default"].ITEM_ID_STONE) - r),
                        0 > l)
                      )
                        return (
                          T["default"].alertMessage(
                            f.Tool.manageString(
                              _.GameText.STR_COUNTRY_DONATE_LACK,
                              c["default"].makeColorString(
                                -l + _.GameText.STR_COUNTRY_STONE,
                                f.Tool.COLOR_RED,
                              ),
                            ),
                          ),
                          [2, !1]
                        );
                      break;
                    case u["default"].DONATE_TYPE_IRON:
                      if (this.data.vo.iron + r >= 2147483647)
                        return (
                          T["default"].alertMessage("捐赠铁矿已达上限"),
                          [2, !1]
                        );
                      if (
                        ((l = n.getItemNumByID(u["default"].ITEM_ID_IRON) - r),
                        0 > l)
                      )
                        return (
                          T["default"].alertMessage(
                            f.Tool.manageString(
                              _.GameText.STR_COUNTRY_DONATE_LACK,
                              c["default"].makeColorString(
                                -l + _.GameText.STR_COUNTRY_IRON,
                                f.Tool.COLOR_RED,
                              ),
                            ),
                          ),
                          [2, !1]
                        );
                      break;
                    default:
                      T["default"].alertMessage(
                        _.GameText.STR_COUNTRY_DONATE_ERROR,
                      );
                  }
                  return (
                    (d = g["default"].createCountryPeopleDonate(a, r)),
                    [4, this.sendProtoAsync(d)]
                  );
                case 1:
                  if ((C.sent(), (d = g["default"].getReceiveMsg()), null == d))
                    return [2, !1];
                  for (h = d.getByte(), E = 0; h > E; E++)
                    ((y = d.getShort()),
                      (v = d.getByte()),
                      (S = d.getInt()),
                      (I = i.bag.getItem(y)),
                      null != I && I.id != S,
                      (m = i.bag.removeBagItemByPos(y, v)),
                      m != u["default"].SUCCESS);
                  if (
                    ((A = d.getInt()),
                    (i.countryHonor = A),
                    i.setMoneyByType(p.ModelConst.MONEY1, d.getInt()),
                    i.setMoneyByType(p.ModelConst.MONEY3, d.getInt()),
                    null != e)
                  )
                    switch (a) {
                      case u["default"].DONATE_TYPE_MONEY1:
                        e.money1 += r;
                        break;
                      case u["default"].DONATE_TYPE_MONEY3:
                        e.money3 > 0 && r > 0 && e.money3 + r < 0
                          ? (e.money3 = f.Tool.MAX_VALUE_int)
                          : ((e.money3 += r), e.money3 < 0 && (e.money3 = 0));
                        break;
                      case u["default"].DONATE_TYPE_WOOD:
                        e.wood += r;
                        break;
                      case u["default"].DONATE_TYPE_STONE:
                        e.stone += r;
                        break;
                      case u["default"].DONATE_TYPE_IRON:
                        e.iron += r;
                    }
                  return (
                    T["default"].alertMessage(
                      f.Tool.manageString(
                        _.GameText.STR_COUNTRY_DONATE_SUCCESS,
                        A + "",
                      ),
                    ),
                    o["default"].sendNt(s.CountryEvent.CountryDonate),
                    [2, !0]
                  );
              }
            });
          });
        }),
        (t.prototype.doGetSoldierList = function (e, t, i) {
          return __awaiter(this, void 0, void 0, function () {
            var n, a, r, l, u, _;
            return __generator(this, function (d) {
              switch (d.label) {
                case 0:
                  return null == e || null == e
                    ? [2, null]
                    : ((n = g["default"].createSoldierList(
                        e.soldierType,
                        e.soldierRank,
                        t,
                        i,
                      )),
                      [4, this.sendProtoAsync(n)]);
                case 1:
                  if ((d.sent(), (n = g["default"].getReceiveMsg()), null == n))
                    return [2, null];
                  for (
                    a = n.getShort(),
                      r = n.getShort(),
                      e.soldierList = new E["default"](),
                      l = 0;
                    r > l;
                    l++
                  )
                    ((u = new m["default"]()),
                      u.setVipLevel2(n.getByte()),
                      u.setId(n.getInt()),
                      u.setName(n.getString()),
                      u.setLevel(n.getByte()),
                      u.setJob(n.getByte()),
                      u.setSex(n.getByte()),
                      u.setRace(n.getByte()),
                      u.setCountryRank(n.getByte()),
                      u.setCountryName(n.getString()),
                      (_ = n.getBoolean()),
                      _
                        ? u.setStatusBit(p.ModelConst.STATUS_ONLINE)
                        : (u.times = n.getInt()),
                      e.soldierList.addElement(u));
                  return (
                    o["default"].sendNt(s.CountryEvent.CountrySoldier),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryApplyAllDeal = function (e, t) {
          return __awaiter(this, void 0, Promise, function () {
            var i, n;
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return 0 == e.isDealApply(M["default"].myPlayer)
                    ? (T["default"].alertMessage(
                        _.GameText.STR_COUNTRY_APPLY_DEAL_LESSDO,
                      ),
                      [2, !1])
                    : ((i = g["default"].createCountryApplyDealMsg(-1, t)),
                      [4, this.sendProtoAsync(i)]);
                case 1:
                  return (
                    a.sent(),
                    (n = _.GameText.getText(_.GameText.TI_MISSION_REFUSE)),
                    t && (n = _.GameText.STR_COUNTRY_APPLY_AGREE),
                    o["default"].sendNt(s.CountryEvent.CountrySoldierRefresh),
                    T["default"].alertMessage(
                      f.Tool.manageString(
                        _.GameText.STR_COUNTRY_APPLY_DEAL_ALL_INFO,
                        n,
                      ),
                      _.GameText.STR_COUNTRY_APPLY_DEAL_ALL,
                    ),
                    o["default"].sendNt(s.CountryEvent.CountryMemberChange),
                    [2, !0]
                  );
              }
            });
          });
        }),
        (t.prototype.doSoldierDelete = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, n;
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((t = f.Tool.manageString(
                        _.GameText.STR_COUNTRY_SOLDIER_DEL_ASK,
                        c["default"].makeColorString(
                          "【" + e.getName() + "】",
                          f.Tool.COLOR_GREEN,
                        ),
                      )),
                      [
                        4,
                        T["default"].waitForTwiceSureUI(
                          t,
                          _.GameText.STR_COUNTRY_SOLDIER_DEL,
                        ),
                      ]);
                case 1:
                  return (i = a.sent())
                    ? ((n = g["default"].createDeleteSoldier(e.getId())),
                      [4, this.sendProtoAsync(n)])
                    : [2];
                case 2:
                  return (
                    a.sent(),
                    e.setTabStatus(!0, p.ModelConst.DEL_STATUS),
                    o["default"].sendNt(s.CountryEvent.CountrySoldierRefresh),
                    T["default"].alertMessage(
                      _.GameText.STR_COUNTRY_SOLDIER_DEL_SUCCESS,
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doBuildUpdateLevel = function (e, t) {
          return __awaiter(this, void 0, void 0, function () {
            var i, n;
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return null == e || null == t
                    ? [2]
                    : ((i = g["default"].createWarBuildLevel(t.buildPos)),
                      [4, this.sendProtoAsync(i)]);
                case 1:
                  return (
                    a.sent(),
                    (i = g["default"].getReceiveMsg()),
                    null == i
                      ? [2]
                      : (t.doUpdateLevel(),
                        (n = i.getBoolean()),
                        1 == n &&
                          (t.nextWarBuild = B.WarBuild.formBytesToList(i, !0)),
                        o["default"].sendNt(s.CountryEvent.CountryWarGround),
                        T["default"].alertMessage(
                          f.Tool.manageString(
                            _.GameText.STR_COUNTRY_BUILD_UPDATE,
                            t.buildName,
                          ),
                        ),
                        [2])
                  );
              }
            });
          });
        }),
        (t.prototype.doGetBuildList = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, n, a;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((t = g["default"].createWarBuildList()),
                      [4, this.sendProtoAsync(t)]);
                case 1:
                  if ((r.sent(), (t = g["default"].getReceiveMsg()), null == t))
                    return [2];
                  for (
                    i = t.getShort(), e.buildList = new Array(i), n = 0;
                    i > n;
                    n++
                  )
                    ((e.buildList[n] = B.WarBuild.formBytesToList(t, !1)),
                      (a = t.getBoolean()),
                      0 != a &&
                        (e.buildList[n].nextWarBuild =
                          B.WarBuild.formBytesToList(t, !0)));
                  return (
                    o["default"].sendNt(s.CountryEvent.CountryWarGround),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryStoragePut = function (e, t, i) {
          return __awaiter(this, void 0, Promise, function () {
            var n, a, r, l, u, d, p;
            return __generator(this, function (c) {
              switch (c.label) {
                case 0:
                  return null == e || null == t || null == t.bag || null == i
                    ? [2, !1]
                    : [
                        4,
                        T["default"].showInput2Async(
                          _.GameText.STR_TYPE_COUNTRY_STORE_PUT,
                          [
                            _.GameText.STR_TYPE_MAIL_ATTACH_ITEM_NUM,
                            _.GameText.STR_TYPE_COUNTRY_STORE_CONVERT,
                          ],
                          null,
                          null,
                          null,
                          [2, 5],
                        ),
                      ];
                case 1:
                  return (n = c.sent())
                    ? ((a = f.Tool.parseInt(n[0])),
                      (r = f.Tool.parseInt(n[1])),
                      a > i.quantity
                        ? (T["default"].alertMessage(
                            _.GameText.STR_COUNTRY_STORAGE_SUPER_LIMIT,
                          ),
                          [2, !1])
                        : ((l = g["default"].createCountryStoragePut(
                            i.slotPos,
                            a,
                            i.id,
                            r,
                          )),
                          [4, this.sendProtoAsync(l)]))
                    : [2];
                case 2:
                  return (
                    c.sent(),
                    (l = g["default"].getReceiveMsg()),
                    null == l
                      ? [2, !1]
                      : ((u = l.getLong()),
                        (d = l.getString()),
                        t.bag.removeBagItemByPos(i.slotPos, a),
                        (p = new O.ShopItem()),
                        i.setItemDataTo(p),
                        (p.status = i.status),
                        (p.quantity = a),
                        (p.uid = u),
                        (p.honor = r),
                        0 == f.Tool.isNullText(d) && (p.name = d),
                        (p.name += f.Tool.manageString(
                          _.GameText.STR_COUNTRY_CONTRIBUTION,
                          r + "",
                        )),
                        e.storeItemList.addElement(p),
                        o["default"].sendNt(s.CountryEvent.CountryStorage),
                        [2, !0])
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryStoreGet = function (e, t) {
          return __awaiter(this, void 0, Promise, function () {
            var i, n, a, r, l, u, d;
            return __generator(this, function (p) {
              switch (p.label) {
                case 0:
                  return null == e || null == t
                    ? [2, !1]
                    : t instanceof O.ShopItem
                      ? ((i = M["default"].myPlayer),
                        null == i
                          ? [2, !1]
                          : ((n = t.honor),
                            (a = i.countryHonor),
                            [
                              4,
                              T["default"].waitForTwiceSureUI(
                                f.Tool.manageString(
                                  _.GameText.STR_COUNTRY_STORAGE_GET_ASK,
                                  [n + "", a + ""],
                                ),
                                _.GameText.STR_COUNTRY_STORAGE_GET,
                              ),
                            ]))
                      : [2, !1];
                case 1:
                  return (r = p.sent())
                    ? n > a
                      ? (T["default"].alertMessage(
                          f.Tool.manageString(
                            _.GameText.STR_COUNTRY_STORAGE_GET_FAIL,
                            n + "",
                          ),
                        ),
                        [2, !1])
                      : ((l = e.isSystemStore()),
                        (u = g["default"].createCountryStorageGet(l, t.uid)),
                        [4, this.sendProtoAsync(u)])
                    : [2];
                case 2:
                  return (
                    p.sent(),
                    (u = g["default"].getReceiveMsg()),
                    null == u
                      ? [2, !1]
                      : (g["default"].processAddItemMsg(u),
                        (d = u.getInt()),
                        null != i && (i.countryHonor = d),
                        0 == l && e.removeStoreItem(t),
                        o["default"].sendNt(s.CountryEvent.CountryStorage, !0),
                        h.Tips.show("兑换成功"),
                        [2, !0])
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryStoreDel = function (e, t) {
          return __awaiter(this, void 0, Promise, function () {
            var i;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return null == e || null == t
                    ? [2, !1]
                    : t instanceof O.ShopItem
                      ? ((i = g["default"].createCountryStorageDel(t.uid)),
                        [4, this.sendProtoAsync(i)])
                      : [2, !1];
                case 1:
                  return (
                    n.sent(),
                    e.removeStoreItem(t),
                    o["default"].sendNt(s.CountryEvent.CountryStorage),
                    [2, !0]
                  );
              }
            });
          });
        }),
        (t.prototype.handleCountryMissionAction = function (e, t) {
          var i = M["default"].myPlayer;
          if (null == i || null == e) return -1;
          if (null != i.getMissionById(e.getId()))
            return e.isComplete(i)
              ? (R["default"].doMissionInfoView(
                  i,
                  e,
                  new R["default"](),
                  T["default"].SUB_MISSION_SUBMIT_NORMAL,
                ),
                A.MissionConst.CAN_SUBMIT)
              : (R["default"].doMissionInfoView(
                  i,
                  e,
                  new R["default"](),
                  T["default"].SUB_MISSION_DOING,
                ),
                A.MissionConst.NOT_CAN_SUBMIT);
          var o = !0;
          if (e.isCanAccept(i) && o) {
            var n = T["default"].SUB_MISSION_ACCEPT;
            return (
              1 == e.isDirectSubmit() &&
                (n = T["default"].SUB_MISSION_DIRECT_STEP1),
              R["default"].doMissionInfoView(i, e, new R["default"](), n),
              A.MissionConst.CAN_ACCEPT
            );
          }
          if (o) {
            var a = f.Tool.isNullText(e.dialogNotStartNotReady)
              ? _.GameText.STR_COUNTRY_INSUFFICIENT_COND
              : e.dialogNotStartNotReady;
            T["default"].alertMessage(a);
          } else
            T["default"].alertMessage(
              _.GameText.STR_COUNTRY_MISSION_NOT_TO_YOU,
            );
          return A.MissionConst.NOT_CAN_ACCEPT;
        }),
        (t.prototype.doGetWarDeclareInfo = function () {
          return __awaiter(this, void 0, void 0, function () {
            var e, t, i, o, n, a, s, l, u, d, p, c, h, y, v, S;
            return __generator(this, function (I) {
              switch (I.label) {
                case 0:
                  return (
                    (e = g["default"].createWarAnswerInfo()),
                    [4, this.sendProtoAsync(e)]
                  );
                case 1:
                  return (
                    I.sent(),
                    (e = g["default"].getReceiveMsg()),
                    null == e
                      ? [2]
                      : ((t = e.getInt()),
                        (i = e.getString()),
                        (o = e.getByte() + 1),
                        (n = e.getInt()),
                        (a = e.getInt()),
                        (s = e.getBoolean()),
                        (l = ""),
                        s
                          ? ((l +=
                              "国战练习仅为国家演练使用，不会损耗任何国家资源和建筑。"),
                            (l += f.Tool.manageString(
                              _.GameText.STR_COUNTRY_WAR_TEST_DEC_INFO,
                              [i, o + ""],
                            )))
                          : ((u = this.data.vo.money1),
                            (d = this.data.vo.money3),
                            (p = this.nationalWarConfig),
                            (c = p[n].def_money1),
                            (h = p[a].def_money3),
                            (y = p[n].atk_money1),
                            (v = p[a].atk_money3),
                            (l += f.Tool.manageString(
                              _.GameText.STR_COUNTRY_WAR_DEC_INFO_NEW,
                              [
                                i,
                                o + "",
                                _.GameText.STR_MONEY1 + y,
                                _.GameText.STR_MONEY3 + v,
                                _.GameText.STR_MONEY1 + u,
                                _.GameText.STR_MONEY3 + d,
                                y + "",
                                v + "",
                                c + "",
                                h + "",
                              ],
                            ))),
                        (S = new E["default"]()),
                        T["default"].createAreaMessageWin(
                          l,
                          S,
                          r["default"].alloc(
                            this,
                            this.dealWarDeclareInfoMenu,
                            [t],
                          ),
                        ),
                        [2])
                  );
              }
            });
          });
        }),
        (t.prototype.dealWarDeclareInfoMenu = function (e, t) {
          o["default"].sendNt(s.CountryEvent.CountryMenu, [t, e]);
        }),
        (t.prototype.doViewCountryInfo = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, o;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return e instanceof w.Country ? ((t = e), [3, 3]) : [3, 1];
                case 1:
                  return (
                    (i = e),
                    (t = new w.Country(i)),
                    [4, this.getCountryInfo(t)]
                  );
                case 2:
                  if (((o = n.sent()), 0 == o)) return [2];
                  n.label = 3;
                case 3:
                  return (this.openCountryView(t), [2]);
              }
            });
          });
        }),
        (t.prototype.openCountryView = function (e) {
          T["default"].showWin(
            l.ModName.Country,
            l.CountryViewType.CountryInfoMain,
            e ? { subParams: { data: e } } : null,
          );
        }),
        (t.prototype.doWinActionInfo = function () {
          return __awaiter(this, void 0, void 0, function () {
            var e, t, i, o, n, a, s, l, n, u, d, p, c, h;
            return __generator(this, function (y) {
              switch (y.label) {
                case 0:
                  return (
                    (e = g["default"].createWinActionInfo()),
                    [4, this.sendProtoAsync(e)]
                  );
                case 1:
                  if ((y.sent(), (e = g["default"].getReceiveMsg()), null == e))
                    return [2];
                  for (
                    t = e.getInt(),
                      i = new w.Country(t),
                      i.name = e.getString(),
                      i.createTime = e.getInt(),
                      o = e.getShort(),
                      n = 0;
                    o > n;
                    n++
                  )
                    ((a = e.getByte()),
                      (s = e.getByte()),
                      i.buildingList.addElement([a, s]));
                  for (
                    i.warnInfoList = new E["default"](),
                      l = e.getShort(),
                      n = 0;
                    l > n;
                    n++
                  )
                    ((u = e.getByte()),
                      (d = e.getString()),
                      i.warnInfoList.addElement([u, d]));
                  return (
                    (p = new E["default"]()),
                    (c = new E["default"]()),
                    f.Tool.addChoiceMenu(
                      p,
                      _.GameText.STR_COUNTRY_WAR_PUNISH,
                      c,
                      T["default"].EVENT_ALL_WAR_WIN_DO_DESTORY,
                    ),
                    (h = f.Tool.manageString(
                      _.GameText.STR_COUNTRY_WAR_PUNISH_INFO,
                      [i.name, f.Tool.getTimeStrByMin(i.createTime, !0)],
                    )),
                    T["default"].createAreaMessageWin(
                      h,
                      c,
                      r["default"].alloc(this, this.dealWinActionInfoMenu, [i]),
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.dealWinActionInfoMenu = function (e, t) {
          o["default"].sendNt(s.CountryEvent.CountryMenu, [t, e]);
        }),
        (t.prototype.doWarDeclare = function (e, t, i, o) {
          return __awaiter(this, void 0, Promise, function () {
            var n, a, r, s, l, u, d, p, c, h, E, y, v, S, I;
            return __generator(this, function (m) {
              switch (m.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : ((n = _.GameText.STR_COUNTRY_WAR_REAL),
                      t && (n = _.GameText.STR_COUNTRY_WAR_TEST),
                      (a = e.getGold()),
                      (r = e.getCoin()),
                      (s = this.nationalWarConfig),
                      (l = s[i].def_money1),
                      (u = s[o].def_money3),
                      (d = s[i].atk_money1),
                      (p = s[o].atk_money3),
                      l > a || u > r
                        ? [
                            4,
                            T["default"].waitForTwiceSureUI(
                              "被宣战发资金不足，是否继续宣战，确认则被宣战方所有国库资金全部被暂扣。",
                              "温馨提示",
                            ),
                          ]
                        : [3, 2]);
                case 1:
                  if (((c = m.sent()), !c)) return [2];
                  m.label = 2;
                case 2:
                  return (
                    (h = e.scale + 1),
                    (E = f.Tool.manageString(
                      _.GameText.STR_COUNTRY_WAR_DECLARE_INFO_NEW,
                      [
                        e.name,
                        h + "",
                        _.GameText.STR_MONEY1 + a,
                        _.GameText.STR_MONEY3 + r,
                        _.GameText.STR_MONEY1 + l,
                        _.GameText.STR_MONEY3 + u,
                        _.GameText.STR_MONEY1 + d,
                        _.GameText.STR_MONEY3 + p,
                      ],
                    )),
                    [4, T["default"].waitForTwiceSureUI(E, "温馨提示")]
                  );
                case 3:
                  return (y = m.sent())
                    ? ((v = g["default"].createWarDeclare(
                        e.id,
                        i + 1,
                        o + 1,
                        t,
                      )),
                      [4, k["default"].sendProtoAsync(v)])
                    : [2];
                case 4:
                  return (
                    (S = m.sent()),
                    null == S
                      ? [2, !1]
                      : ((I = S.getByte()),
                        0 > I
                          ? (T["default"].alertMessage(
                              S.getString(),
                              _.GameText.getText(_.GameText.TI_ERROR),
                            ),
                            [2, !1])
                          : (T["default"].alertMessage(
                              t
                                ? _.GameText.STR_COUNTRY_WAR_TEST_SUCCESS
                                : _.GameText.STR_COUNTRY_WAR_REAL_SUCCESS,
                            ),
                            [2, !0]))
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryBossActivity = function () {
          return __awaiter(this, void 0, void 0, function () {
            var e, t, i, o, a, r;
            return __generator(this, function (s) {
              switch (s.label) {
                case 0:
                  return (
                    (e = new n.Message(
                      v["default"].CG_TASK_COUNTRY_BOSS_ACTIVATE_DATA,
                    )),
                    [4, this.sendProtoAsync(e)]
                  );
                case 1:
                  return (
                    s.sent(),
                    (e = g["default"].getReceiveMsg()),
                    null == e
                      ? [2]
                      : ((t = e.getByte()),
                        0 > t
                          ? (T["default"].alertMessage(e.getString()), [2])
                          : ((i = e.getString()),
                            [
                              4,
                              T["default"].waitForTwiceSureUI(
                                i,
                                _.GameText.getText(_.GameText.TI_WARM_SHOW),
                              ),
                            ]))
                  );
                case 2:
                  return (o = s.sent())
                    ? ((a = new n.Message(
                        v["default"].CG_TASK_COUNTRY_BOSS_ACTIVATE,
                      )),
                      [4, this.sendProtoAsync(a)])
                    : [2];
                case 3:
                  return (
                    s.sent(),
                    (a = g["default"].getReceiveMsg()),
                    null == a
                      ? [2]
                      : ((r = a.getByte()),
                        0 > r
                          ? (T["default"].alertMessage(a.getString()), [2])
                          : (T["default"].alertMessage(
                              _.GameText.STR_COUNTRY_BOSS_ACTIVITY_INFO,
                            ),
                            [2]))
                  );
              }
            });
          });
        }),
        (t.prototype.processCountryBoss = function (e, t) {
          return __awaiter(this, void 0, void 0, function () {
            var i, a;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (i = new b.CountryBoss()),
                    e
                      ? ((a = new n.Message(
                          v["default"].CG_TASK_COUNTRY_BOSS_JOIN,
                        )),
                        [4, this.sendProtoAsync(a)])
                      : [3, 2]
                  );
                case 1:
                  return (
                    r.sent(),
                    (a = g["default"].getReceiveMsg()),
                    null == a
                      ? [2]
                      : 0 == i.doEntryCountryBoss(a)
                        ? [2]
                        : [3, 3]
                  );
                case 2:
                  if (null == t) return [2];
                  if (0 == i.doEntryCountryBoss(t)) return [2];
                  r.label = 3;
                case 3:
                  return (
                    i.init(),
                    (M["default"].countryBoss = i),
                    o["default"].showView(
                      l.ModName.Country,
                      l.CountryViewType.CountryBoss,
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doUIGetWarTopList = function (e, t, i, o) {
          switch (e) {
            case T["default"].EVENT_WARTOP_TAB_PLAYER:
              this.doGetWarTopPlayer(t, i, o);
              break;
            case T["default"].EVENT_WARTOP_TAB_COUNTRYPLAYER:
              this.doGetWarTopCountryPlayer(t, i, o);
              break;
            case T["default"].EVENT_WARTOP_TAB_COUNTRY:
              this.doGetWarTopCountry(t, i, o);
          }
        }),
        (t.prototype.doGetWarTopPlayer = function (e, t, i) {
          return __awaiter(this, void 0, void 0, function () {
            var n, a, r, l, u, _, d;
            return __generator(this, function (p) {
              switch (p.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((n = g["default"].createWarTopPlayer(t, i)),
                      [4, this.sendProtoAsync(n)]);
                case 1:
                  if ((p.sent(), (n = g["default"].getReceiveMsg()), null == n))
                    return [2];
                  if (
                    ((e.topWarPlayerList = new E["default"]()),
                    (a = n.getInt()),
                    0 > a)
                  )
                    return (T["default"].errorMessage(n.getString()), [2]);
                  for (r = n.getShort(), l = 0; r > l; l++)
                    ((u = new m["default"]()),
                      u.setId(n.getInt()),
                      u.setName(n.getString()),
                      u.setLevel(n.getByte()),
                      u.setJob(n.getByte()),
                      (_ = n.getShort()),
                      (d = n.getShort()),
                      (u.killInfo = d + " / " + _),
                      e.topWarPlayerList.addElement(u));
                  return (
                    o["default"].sendNt(s.CountryEvent.CountryWarRank),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doGetWarTopCountryPlayer = function (e, t, i) {
          return __awaiter(this, void 0, void 0, function () {
            var n, a, r, l, u, _, d;
            return __generator(this, function (p) {
              switch (p.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((n = g["default"].createWarTopCountryPlayer(t, i)),
                      [4, this.sendProtoAsync(n)]);
                case 1:
                  if ((p.sent(), (n = g["default"].getReceiveMsg()), null == n))
                    return [2];
                  if (
                    ((e.topCountryPlayerList = new E["default"]()),
                    (a = n.getInt()),
                    0 > a)
                  )
                    return (T["default"].errorMessage(n.getString()), [2]);
                  for (r = n.getShort(), l = 0; r > l; l++)
                    ((u = new m["default"]()),
                      u.setId(n.getInt()),
                      u.setName(n.getString()),
                      u.setLevel(n.getByte()),
                      u.setJob(n.getByte()),
                      (_ = n.getInt()),
                      (d = n.getInt()),
                      (u.killInfo = d + " / " + _),
                      e.topCountryPlayerList.addElement(u));
                  return (
                    o["default"].sendNt(s.CountryEvent.CountryWarRank),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doGetWarTopCountry = function (e, t, i) {
          return __awaiter(this, void 0, void 0, function () {
            var n, a, r, l, u, _, d, p;
            return __generator(this, function (c) {
              switch (c.label) {
                case 0:
                  return null == e
                    ? [2, null]
                    : ((n = g["default"].createWarTopCountry(t, i)),
                      [4, this.sendProtoAsync(n)]);
                case 1:
                  if ((c.sent(), (n = g["default"].getReceiveMsg()), null == n))
                    return [2, null];
                  if (
                    ((e.topCountryList = new E["default"]()),
                    (a = n.getInt()),
                    0 > a)
                  )
                    return (
                      T["default"].errorMessage(n.getString()),
                      [2, null]
                    );
                  for (r = n.getShort(), l = 0; r > l; l++)
                    ((u = n.getInt()),
                      (_ = new w.Country(u)),
                      (_.name = n.getString()),
                      (_.scale = n.getByte()),
                      (d = n.getShort()),
                      (p = n.getShort()),
                      (_.warInfo = d + " / " + p),
                      e.topCountryList.addElement(_));
                  return (
                    o["default"].sendNt(s.CountryEvent.CountryWarRank),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryBecomeKing = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, n, a, r, l, d;
            return __generator(this, function (p) {
              switch (p.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((t = f.Tool.manageString(
                        _.GameText.STR_COUNTRY_BECOME_KILL_ASK,
                        e.getName(),
                      )),
                      [
                        4,
                        T["default"].waitForTwiceSureUI(
                          t,
                          _.GameText.STR_COUNTRY_BECOME_KILL,
                        ),
                      ]);
                case 1:
                  return (i = p.sent())
                    ? ((n = g["default"].createCountryBecomeKingMessage(
                        e.getId(),
                      )),
                      [4, this.sendProtoAsync(n)])
                    : [2];
                case 2:
                  return (
                    p.sent(),
                    (n = g["default"].getReceiveMsg()),
                    null == n
                      ? [2]
                      : (e.setCountryRank(u["default"].RANK_KING),
                        (a = M["default"].myPlayer),
                        (r = n.getByte()),
                        null != a && a.setCountryRank(r),
                        (l = n.getByte()),
                        (d = this.data.vo),
                        (d.coolKingChange = l),
                        (d.kingName = e.getName()),
                        o["default"].sendNt(s.CountryEvent.CountryMemberChange),
                        [2])
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryAdjustJob = function (e) {
          d.MenuMgr.createCountryAdjustJobMenu(e);
        }),
        (t.prototype.doCountryAdjustJob2 = function (e, t) {
          return __awaiter(this, void 0, void 0, function () {
            var i, n, a, r;
            return __generator(this, function (l) {
              switch (l.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((i = f.Tool.manageString(
                        _.GameText.STR_COUNTRY_ADJUST_JOB_ASK,
                        [e.getName(), u["default"].getRankString(t)],
                      )),
                      t == u["default"].RANK_NO_RANK &&
                        ((t = -1),
                        (i = f.Tool.manageString(
                          _.GameText.STR_COUNTRY_RECALL_ASK,
                          e.getName(),
                        ))),
                      [
                        4,
                        T["default"].waitForTwiceSureUI(
                          i,
                          _.GameText.getText(_.GameText.TI_ADJUST_JOB),
                        ),
                      ]);
                case 1:
                  return (n = l.sent())
                    ? ((a = g["default"].createCountryAdjustJobMessage(
                        e.getId(),
                        t,
                      )),
                      [4, this.sendProtoAsync(a)])
                    : [2];
                case 2:
                  return (
                    l.sent(),
                    (a = g["default"].getReceiveMsg()),
                    null == a
                      ? [2]
                      : ((r = a.getByte()),
                        e.setCountryRank(r),
                        o["default"].sendNt(s.CountryEvent.CountryMemberChange),
                        [2])
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryDelMem = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, a;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return null == e ||
                    1 == e.isTabStatus(p.ModelConst.DEL_STATUS)
                    ? [2, !1]
                    : ((t = f.Tool.manageString(
                        _.GameText.STR_COUNTRY_DEL_MENBER_ASK,
                        e.getName(),
                      )),
                      [
                        4,
                        T["default"].waitForTwiceSureUI(
                          t,
                          _.GameText.STR_COUNTRY_DEL_MENBER,
                        ),
                      ]);
                case 1:
                  return (i = r.sent())
                    ? ((n = g["default"].createCountryDelMemMsg(e.getId())),
                      [4, this.sendProtoAsync(n)])
                    : [2];
                case 2:
                  return (
                    r.sent(),
                    (a = g["default"].getReceiveMsg()),
                    null == a
                      ? [2, !1]
                      : (T["default"].alertMessage(
                          f.Tool.manageString(
                            _.GameText.STR_COUNTRY_DEL_MENBER_SUCCESS,
                            e.getName(),
                          ),
                          _.GameText.STR_COUNTRY_DEL_MENBER,
                        ),
                        e.setTabStatus(!0, p.ModelConst.DEL_STATUS),
                        o["default"].sendNt(s.CountryEvent.CountryMemberChange),
                        [2, !0])
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryApplyDeal = function (e, t, i) {
          return __awaiter(this, void 0, Promise, function () {
            var n, a, r;
            return __generator(this, function (l) {
              switch (l.label) {
                case 0:
                  return null == t ||
                    1 == t.isTabStatus(p.ModelConst.DEL_STATUS)
                    ? [2, !1]
                    : 0 == e.isDealApply(M["default"].myPlayer)
                      ? (T["default"].alertMessage(
                          _.GameText.STR_COUNTRY_APPLY_DEAL_LESSDO,
                        ),
                        [2, !1])
                      : ((n = g["default"].createCountryApplyDealMsg(
                          t.getId(),
                          i,
                        )),
                        [4, this.sendProtoAsync(n)]);
                case 1:
                  return (
                    l.sent(),
                    (a = g["default"].getReceiveMsg()),
                    null == a
                      ? [2, !1]
                      : ((r = _.GameText.getText(_.GameText.TI_MISSION_REFUSE)),
                        i && (r = _.GameText.STR_COUNTRY_APPLY_AGREE),
                        T["default"].alertMessage(
                          f.Tool.manageString(
                            _.GameText.STR_COUNTRY_APPLY_DEAL_INFO,
                            [r, t.getName()],
                          ),
                          _.GameText.STR_COUNTRY_APPLY_DEAL,
                        ),
                        t.setTabStatus(!0, p.ModelConst.DEL_STATUS),
                        o["default"].sendNt(s.CountryEvent.CountryMemberChange),
                        [2, !0])
                  );
              }
            });
          });
        }),
        (t.prototype.doGetNeedPayMemberNum = function (e) {
          if (null == e) return 0;
          var t = 0,
            i = M["default"].myPlayer;
          if (null == i) return 0;
          0 == e.isMyCountry(i) && t++;
          var o = i.getMembers();
          if (null == o || o.size() <= 0) return t;
          for (var n = o.size() - 1; n >= 0; n--) {
            var a = o.elementAt(n);
            null != a &&
              a.getType() != C.MODEL_TYPE.TYPE_MERCENARY &&
              a.getType() != C.MODEL_TYPE.TYPE_LEGION &&
              1 != e.isMyCountry(a) &&
              t++;
          }
          return t;
        }),
        (t.prototype.doCountryResourseAction = function (e, t) {
          return __awaiter(this, void 0, Promise, function () {
            var i, n;
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return null == t || 5 != t.length
                    ? [2, !1]
                    : ((i = g["default"].createCountryBookMsgId(
                        u["default"].COUNTRY_COMMAND_TRANSFER_RESOURCE,
                        t[0],
                      )),
                      [4, this.sendProtoAsync(i)]);
                case 1:
                  return (
                    a.sent(),
                    (i = g["default"].getReceiveMsg()),
                    null == i
                      ? [2, !1]
                      : ((n = i.getBoolean()),
                        n && w.Country.fromBytesReflash(e, i),
                        o["default"].sendNt(s.CountryEvent.CountryExchangeSucc),
                        T["default"].alertMessage(
                          _.GameText.STR_COUNTRY_RESOUTSE_SUCCESS,
                        ),
                        [2, !0])
                  );
              }
            });
          });
        }),
        (t.prototype.doSeeCountryStoragePet = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, o;
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((t = new n.Message(
                        v["default"].CG_COUNTRY_GET_STORAGE_PET,
                      )),
                      t.putLong(e.uid),
                      [4, this.sendProtoAsync(t)]);
                case 1:
                  return (
                    a.sent(),
                    (t = g["default"].getReceiveMsg()),
                    null == t
                      ? [2]
                      : ((i = t.getByte()),
                        0 > i
                          ? (T["default"].alertMessage(t.getString()), [2])
                          : ((o = new P["default"](null)),
                            P["default"].fromBytesDetail(t, o),
                            o.refreshWorldSprite(),
                            T["default"].checkPet(null, null, 3, o),
                            [2]))
                  );
              }
            });
          });
        }),
        (t.prototype.doWinActionDo = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, o, n, a, r, s, l, d, p, c, h, E, y, v, S;
            return __generator(this, function (I) {
              switch (I.label) {
                case 0:
                  if (null == e) return [2];
                  for (
                    t = 0, i = 0, o = [], n = [], r = 0;
                    r < e.buildingList.arr.length;
                    r++
                  )
                    ((a = e.buildingList.arr[r]),
                      (s = a[0]),
                      (l = a[1]),
                      n.push(u["default"].getBuildingText2(s) + "(" + l + ")"));
                  return (
                    (d = {
                      title: _.GameText.STR_TYPE_WIN_ACTION_DO_LEVEL,
                      list: n,
                    }),
                    o.push(d),
                    (p = {
                      title: _.GameText.STR_TYPE_WIN_ACTION_DO_ERROR,
                      list: e.warnInfoList.arr,
                    }),
                    o.push(p),
                    [
                      4,
                      T["default"].showCheckAlert(
                        o,
                        _.GameText.STR_TYPE_WIN_ACTION_DO,
                      ),
                    ]
                  );
                case 1:
                  return (
                    (c = I.sent()),
                    (h = c[0]),
                    (E = c[1]),
                    0 == f.Tool.isArrayIndexOutOfBounds(h, e.buildingList) &&
                      ((y = e.buildingList.elementAt(h)), (t = y[0])),
                    0 == f.Tool.isArrayIndexOutOfBounds(E, e.warnInfoList) &&
                      ((v = e.warnInfoList.elementAt(E)), (i = v[0])),
                    (S = g["default"].createWinActionDo(e.id, t, i)),
                    [4, this.sendProtoAsync(S)]
                  );
                case 2:
                  return (
                    I.sent(),
                    T["default"].alertMessage(
                      _.GameText.STR_COUNTRY_WAR_PUNISH_SUCCESS,
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doWarDeclareAsk = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t;
            return __generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (t = g["default"].createWarDeclareAsk(e)),
                    [4, this.sendProtoAsync(t)]
                  );
                case 1:
                  return (
                    i.sent(),
                    e == w.Country.WAR_DECLARE_ASK_AGREE
                      ? T["default"].alertMessage(
                          _.GameText.STR_COUNTRY_AGREE_PAY_SUCCESS,
                        )
                      : e == w.Country.WAR_DECLARE_ASK_REFUSE &&
                        T["default"].alertMessage(
                          _.GameText.STR_COUNTRY_REFUSE_PAY_SUCCESS,
                        ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doCommandCreateWarDeclare = function (e, t, i) {
          return __awaiter(this, void 0, Promise, function () {
            var o, n, a, r, s, l, d, p, c, h, E, y, v, S, I, m, A;
            return __generator(this, function (C) {
              switch (C.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : ((o = e.getGold()),
                      (n = e.getCoin()),
                      (a = this.nationalWarConfig),
                      (r = a[t].def_money1),
                      (s = a[i].def_money3),
                      (l = a[t].atk_money1),
                      (d = a[i].atk_money3),
                      r > o || s > n
                        ? [
                            4,
                            T["default"].waitForTwiceSureUI(
                              "被宣战发资金不足，是否继续宣战，确认则被宣战方所有国库资金全部被暂扣。",
                              "温馨提示",
                            ),
                          ]
                        : [3, 2]);
                case 1:
                  if (((p = C.sent()), !p)) return [2];
                  C.label = 2;
                case 2:
                  return (
                    (c = e.scale + 1),
                    (h = f.Tool.manageString(
                      _.GameText.STR_COUNTRY_WAR_DECLARE_INFO_NEW,
                      [
                        e.name,
                        c + "",
                        _.GameText.STR_MONEY1 + o,
                        _.GameText.STR_MONEY3 + n,
                        _.GameText.STR_MONEY1 + r,
                        _.GameText.STR_MONEY3 + s,
                        _.GameText.STR_MONEY1 + l,
                        _.GameText.STR_MONEY3 + d,
                      ],
                    )),
                    [4, T["default"].waitForTwiceSureUI(h, "温馨提示")]
                  );
                case 3:
                  return (E = C.sent())
                    ? ((y = g["default"].createCountryCreateWarCommand(
                        e.id,
                        t,
                        i,
                        !1,
                      )),
                      [4, this.sendProtoAsync(y)])
                    : [2];
                case 4:
                  return (
                    C.sent(),
                    (y = g["default"].getReceiveMsg()),
                    null == y
                      ? [2, !1]
                      : ((v = y.getBoolean()),
                        (S = 0),
                        (I = e),
                        v && w.Country.fromBytesReflash(I, y),
                        (m = u["default"].COUNTRY_COMMAND_CREATE_WAR - 1),
                        (A = I.commandCoolList),
                        A &&
                          null != A[m] &&
                          ((A[m][0] = !0), (A[m][1] = A[m][1] - 1)),
                        T["default"].alertMessage(
                          _.GameText.STR_COUNTRY_WAR_REAL_SUCCESS,
                        ),
                        [2, !0])
                  );
              }
            });
          });
        }),
        (t.prototype.doSoldierDealApply = function (e, t, i) {
          return __awaiter(this, void 0, void 0, function () {
            var n, a;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return null == t
                    ? [2]
                    : ((n = g["default"].createSoldierDealApply(
                        t.getId(),
                        i,
                        e.soldierType,
                      )),
                      [4, this.sendProtoAsync(n)]);
                case 1:
                  return (
                    r.sent(),
                    t.setTabStatus(!0, p.ModelConst.DEL_STATUS),
                    (a = _.GameText.getText(_.GameText.TI_MISSION_REFUSE)),
                    i && (a = _.GameText.STR_COUNTRY_APPLY_AGREE),
                    o["default"].sendNt(s.CountryEvent.CountrySoldierRefresh),
                    T["default"].alertMessage(
                      f.Tool.manageString(
                        _.GameText.STR_COUNTRY_DEAL_UNION_APPLY,
                        a + t.getName(),
                      ),
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doSoldierDealAllApply = function (e, t) {
          return __awaiter(this, void 0, void 0, function () {
            var i, n;
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    (i = g["default"].createSoldierDealApply(
                      -1,
                      t,
                      e.soldierType,
                    )),
                    [4, this.sendProtoAsync(i)]
                  );
                case 1:
                  return (
                    a.sent(),
                    (n = _.GameText.getText(_.GameText.TI_MISSION_REFUSE)),
                    t && (n = _.GameText.STR_COUNTRY_APPLY_AGREE),
                    o["default"].sendNt(s.CountryEvent.CountrySoldierRefresh),
                    T["default"].alertMessage(
                      f.Tool.manageString(
                        _.GameText.STR_COUNTRY_DEAL_ALL_APPLY,
                        n,
                      ),
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doGetCampInfo = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, n, r, l, u, _;
            return __generator(this, function (d) {
              switch (d.label) {
                case 0:
                  return (
                    (t = g["default"].createCampInfo()),
                    [4, this.sendProtoAsync(t)]
                  );
                case 1:
                  return (
                    d.sent(),
                    (t = g["default"].getReceiveMsg()),
                    null == t
                      ? [2]
                      : ((i = t.getInt()),
                        (n = e ? e : new w.Country(i)),
                        (n.name = t.getString()),
                        (n.kingId = t.getInt()),
                        (n.kingName = t.getString()),
                        (n.campLevel = t.getByte()),
                        (n.leagueid = t.getLong()),
                        n.leagueid.gt(0) &&
                          ((n.unionName = t.getString()),
                          (n.unionNum = t.getByte())),
                        (n.armyStrength = t.getInt()),
                        (n.militaryStrength = t.getInt()),
                        (n.soldierNum = t.getShort()),
                        (n.soldierMax = t.getShort()),
                        (n.helpNum = t.getShort()),
                        (n.helpMax = t.getShort()),
                        (n.warCount = t.getShort()),
                        (n.warWinRate = t.getByte()),
                        (n.fightID = t.getInt()),
                        (r = 0),
                        (l = 0),
                        (u = 0),
                        -1 != n.fightID &&
                          ((_ = t.getString()),
                          (u =
                            t.getLong().toNumber() +
                            a["default"].timer.serverTime),
                          (r = t.getInt()),
                          (l = t.getInt())),
                        (n.fightCountry = _),
                        (n.fightTime = u),
                        (n.fightMoney1 = r),
                        (n.fightMoney3 = l),
                        (n.money1 = t.getInt()),
                        (n.money2 = t.getInt()),
                        (n.money3 = t.getInt()),
                        (n.wood = t.getInt()),
                        (n.stone = t.getInt()),
                        (n.iron = t.getInt()),
                        (n.bookNum = t.getShort()),
                        (n.defNum = t.getInt()),
                        o["default"].sendNt(s.CountryEvent.CountryCamp),
                        [2])
                  );
              }
            });
          });
        }),
        (t.prototype.doDealApplyUnion = function (e, t, i) {
          return __awaiter(this, void 0, void 0, function () {
            var n, a, r, l;
            return __generator(this, function (u) {
              switch (u.label) {
                case 0:
                  return null == t
                    ? [2]
                    : ((n = g["default"].createWarUnionDealApply(t.id, i)),
                      [4, this.sendProtoAsync(n)]);
                case 1:
                  return (
                    u.sent(),
                    i
                      ? t.setLoadStatus(!1, w.Country.WAR_IS_APPLY_UNION)
                      : null != e &&
                        null != e.myUnionList &&
                        e.myUnionList.removeElement(t),
                    (a = g["default"].getReceiveMsg()),
                    null == a
                      ? [2]
                      : ((r = a.getByte()),
                        0 > r
                          ? (T["default"].errorMessage(a.getString()), [2, !1])
                          : ((l = _.GameText.getText(
                              _.GameText.TI_MISSION_REFUSE,
                            )),
                            i && (l = _.GameText.STR_COUNTRY_APPLY_AGREE),
                            o["default"].sendNt(
                              s.CountryEvent.CountryForcesInfo,
                            ),
                            T["default"].alertMessage(
                              f.Tool.manageString(
                                _.GameText.STR_COUNTRY_DEAL_UNION_APPLY,
                                l,
                              ),
                            ),
                            [2]))
                  );
              }
            });
          });
        }),
        (t.prototype.doUnionApplyHelp = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i;
            return __generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((t = e.id),
                      0 >= t
                        ? [2]
                        : ((i = g["default"].createWarUnionApplyHelp(t)),
                          [4, this.sendProtoAsync(i)]));
                case 1:
                  return (
                    o.sent(),
                    T["default"].alertMessage(
                      _.GameText.STR_COUNTRY_UNION_APPLY_SUCCESS,
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doUnionChange = function (e, t) {
          return __awaiter(this, void 0, void 0, function () {
            var i, o;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return null == t
                    ? [2]
                    : ((i = g["default"].createWarUnionChange(t.id)),
                      [4, this.sendProtoAsync(i)]);
                case 1:
                  return (
                    n.sent(),
                    null != e &&
                      ((o = e.getUnionOwer()),
                      null != o &&
                        o.setLoadStatus(!1, w.Country.WAR_IS_UNION_OWNER)),
                    t.setLoadStatus(!0, w.Country.WAR_IS_UNION_OWNER),
                    T["default"].alertMessage(
                      _.GameText.STR_COUNTRY_UNION_CHANGE_SUCCESS,
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doUnionDelMember = function (e, t) {
          return __awaiter(this, void 0, void 0, function () {
            var i, o, n;
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return null == t
                    ? [2]
                    : ((i = f.Tool.manageString(
                        _.GameText.STR_COUNTRY_UNION_DEL_MEN_ASK,
                        t.name,
                      )),
                      [
                        4,
                        T["default"].waitForTwiceSureUI(
                          i,
                          _.GameText.getText(_.GameText.TI_WARN),
                        ),
                      ]);
                case 1:
                  return (o = a.sent())
                    ? ((n = g["default"].createWarUnionDelMember(t.id)),
                      [4, this.sendProtoAsync(n)])
                    : [2];
                case 2:
                  return (
                    a.sent(),
                    null != e &&
                      null != e.myUnionList &&
                      e.myUnionList.removeElement(t),
                    T["default"].alertMessage(
                      _.GameText.STR_COUNTRY_DEL_MEN_SUCCESS,
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doQuitCountryWar = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, n;
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((t = e.isNotViewWar()
                        ? _.GameText.STR_COUNTRY_WAR_QUIT_ASK
                        : _.GameText.STR_COUNTRY_WAR_TEST_QUIT_ASK),
                      [
                        4,
                        T["default"].waitForTwiceSureUI(
                          t,
                          null,
                          _.GameText.STR_COUNTRY_WAR_QUIT,
                        ),
                      ]);
                case 1:
                  return (i = a.sent())
                    ? ((n = g["default"].createCountryWarOperArmy(
                        -2,
                        M["default"].getPlayerID(),
                      )),
                      [4, this.sendProtoAsync(n)])
                    : [2];
                case 2:
                  return (
                    a.sent(),
                    x.CountryWar.clearCountryWar(!1),
                    o["default"].sendNt(s.CountryEvent.CountryWarLeave),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doWarArmyList = function (e, t, i, n) {
          return __awaiter(this, void 0, void 0, function () {
            var a, r, l, u;
            return __generator(this, function (_) {
              switch (_.label) {
                case 0:
                  return (
                    (a = g["default"].createCountryWarArmyList(t, i, n)),
                    [4, this.sendProtoAsync(a)]
                  );
                case 1:
                  if ((_.sent(), (a = g["default"].getReceiveMsg()), null == a))
                    return [2, null];
                  for (
                    r = a.getShort(),
                      l = a.getByte(),
                      e.armyList = new E["default"](),
                      u = 0;
                    l > u;
                    u++
                  )
                    e.armyList.addElement(D.WarArmy.fromBytes(a));
                  return (
                    o["default"].sendNt(s.CountryEvent.CountryWarArmy),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doRemoveArmy = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, n;
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return null == e
                    ? [2]
                    : 0 == x.CountryWar.isOpeArmy(M["default"].myPlayer)
                      ? (T["default"].alertMessage(_.GameText.STR_WAR_OPE_ARMY),
                        [2])
                      : ((t = f.Tool.manageString(
                          _.GameText.STR_COUNTRY_WAR_REMOVE_ARMY_ASK,
                          e.getLeaderName(),
                        )),
                        [
                          4,
                          T["default"].waitForTwiceSureUI(
                            t,
                            null,
                            _.GameText.STR_COUNTRY_WAR_REMOVE_ARMY,
                          ),
                        ]);
                case 1:
                  return (i = a.sent())
                    ? ((n = g["default"].createCountryWarOperArmy(
                        -1,
                        e.getArmyID(),
                      )),
                      [4, this.sendProtoAsync(n)])
                    : [2];
                case 2:
                  return (
                    a.sent(),
                    e.setStatus(D.WarArmy.STATUS_IS_DEL, !0),
                    (e.buildPos = -1),
                    o["default"].sendNt(
                      s.CountryEvent.CountryWarArmyRefresh,
                      -1,
                    ),
                    T["default"].alertMessage(
                      _.GameText.STR_COUNTRY_REMOVE_ARMY_SUCCESS,
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doInsertArmy = function (e, t) {
          return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return null == t
                    ? [2]
                    : 0 == x.CountryWar.isOpeArmy(M["default"].myPlayer)
                      ? (T["default"].alertMessage(_.GameText.STR_WAR_OPE_ARMY),
                        [2])
                      : ((i = g["default"].createCountryWarOperArmy(
                          e,
                          t.getArmyID(),
                        )),
                        [4, this.sendProtoAsync(i)]);
                case 1:
                  return (
                    n.sent(),
                    t.setStatus(D.WarArmy.STATUS_IS_DEL, !0),
                    (t.buildPos = e),
                    o["default"].sendNt(
                      s.CountryEvent.CountryWarArmyRefresh,
                      e,
                    ),
                    T["default"].alertMessage(
                      _.GameText.STR_COUNTRY_INSERT_ARMY_SUCCESS,
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doDeleteArmy = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, o;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return null == e
                    ? [2]
                    : 0 == x.CountryWar.isOpeArmy(M["default"].myPlayer)
                      ? (T["default"].alertMessage(_.GameText.STR_WAR_OPE_ARMY),
                        [2])
                      : ((t = f.Tool.manageString(
                          _.GameText.STR_COUNTRY_WAR_DEL_ARMY_ASK,
                          e.getLeaderName(),
                        )),
                        [
                          4,
                          T["default"].waitForTwiceSureUI(
                            t,
                            null,
                            _.GameText.STR_COUNTRY_WAR_DEL_ARMY,
                          ),
                        ]);
                case 1:
                  return (i = n.sent())
                    ? ((o = g["default"].createCountryWarOperArmy(
                        -3,
                        e.getArmyID(),
                      )),
                      [4, this.sendProtoAsync(o)])
                    : [2];
                case 2:
                  return (
                    n.sent(),
                    e.setStatus(D.WarArmy.STATUS_IS_DEL, !0),
                    T["default"].alertMessage(
                      _.GameText.STR_COUNTRY_WAR_DEL_ARMY_SUCCESS,
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doGetReportList = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, n, a, r, l, u;
            return __generator(this, function (d) {
              switch (d.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((t = g["default"].createWarTextInfo(-1)),
                      [4, this.sendProtoAsync(t)]);
                case 1:
                  if ((d.sent(), (t = g["default"].getReceiveMsg()), null == t))
                    return [2];
                  for (
                    e.reportList = new E["default"](), i = t.getShort(), a = 0;
                    i > a;
                    a++
                  ) {
                    for (
                      r = t.getByte(),
                        l = t.getShort(),
                        n = f.Tool.manageString(
                          _.GameText.STR_COUNTRY_REPORT_LIST_ROUND,
                          r + "",
                        ),
                        u = 0;
                      l > u;
                      u++
                    )
                      n += t.getString();
                    e.reportList.addElement(n);
                  }
                  return (
                    o["default"].sendNt(s.CountryEvent.CountryWarReport),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doGetViewArmyList = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, n, a, r, l, u, _;
            return __generator(this, function (d) {
              switch (d.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((e.viewArmyList = new E["default"]()),
                      (t = g["default"].createWarBattleList()),
                      [4, this.sendProtoAsync(t)]);
                case 1:
                  if ((d.sent(), (t = g["default"].getReceiveMsg()), null == t))
                    return [2];
                  for (i = t.getShort(), n = 0; i > n; n++)
                    ((a = t.getByte()),
                      0 >= a ||
                        ((r = t.getByte()),
                        (l = t.getInt()),
                        (u = t.getString()),
                        (_ = new D.WarArmy()),
                        (_.armyPlayerNum = a),
                        (_.buildPos = r),
                        (_.leader = new C.ModelVo(l, u)),
                        e.viewArmyList.addElement(_)));
                  return (
                    o["default"].sendNt(s.CountryEvent.CountryViewArmy),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doAddArmy = function (e, t) {
          return __awaiter(this, void 0, void 0, function () {
            var i, n;
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    (i = g["default"].createCountryWarOperArmy(
                      t,
                      M["default"].getPlayerID(),
                    )),
                    [4, this.sendProtoAsync(i)]
                  );
                case 1:
                  return (
                    a.sent(),
                    null != e && (e.mySlotPos = t),
                    (n = _.GameText.STR_COUNTRY_WAR_GARRISON),
                    null != e && (n = e.getOpeBuildInfo(t)),
                    o["default"].sendNt(
                      s.CountryEvent.CountryWarArmyRefresh,
                      t,
                    ),
                    T["default"].alertMessage(
                      f.Tool.manageString(
                        _.GameText.STR_COUNTRY_WAR_ADD_ARMY_INFO,
                        n + x.CountryWar.getBuildName(t, !1),
                      ),
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doCommandList = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, n, a, n;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : ((t = g["default"].createCountryWarCommandList()),
                      [4, this.sendProtoAsync(t)]);
                case 1:
                  if ((r.sent(), (t = g["default"].getReceiveMsg()), null == t))
                    return [2, !1];
                  for (
                    e.armyLevel = t.getByte(),
                      e.bookNum = t.getInt(),
                      e.strength = t.getInt(),
                      e.strengthMax = t.getInt(),
                      i = 65535 & t.getByte(),
                      e.command1List = new E["default"](),
                      n = 0;
                    i > n;
                    n++
                  )
                    e.command1List.addElement(G.WarCommand.formBytes(t));
                  for (
                    a = 65535 & t.getByte(),
                      e.command2List = new E["default"](),
                      n = 0;
                    a > n;
                    n++
                  )
                    e.command2List.addElement(G.WarCommand.formBytes(t));
                  return (
                    o["default"].sendNt(s.CountryEvent.CountryWarCommand),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doUseCommand = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((t = g["default"].createCountryWarUseCommand(e.did)),
                      [4, this.sendProtoAsync(t)]);
                case 1:
                  return (
                    n.sent(),
                    (t = g["default"].getReceiveMsg()),
                    null == t
                      ? [2]
                      : ((i = t.getByte()),
                        0 > i
                          ? (T["default"].errorMessage(t.getString()), [2])
                          : (o["default"].sendNt(
                              s.CountryEvent.CountryWarCommand,
                            ),
                            T["default"].alertMessage(
                              f.Tool.manageString(
                                _.GameText.STR_COUNTRY_USE_COMMAND_SUCCESS,
                                e.getNameInfo(),
                              ),
                            ),
                            [2]))
                  );
              }
            });
          });
        }),
        (t.prototype.doFight = function (e, t) {
          return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return 1 == e.isStatus(b.CountryBoss.STATUS_FIGHT_FAIL)
                    ? (T["default"].alertMessage(
                        _.GameText.STR_COUNTRYBOSS_FAIL,
                      ),
                      [2])
                    : null == e || null == t
                      ? [2]
                      : ((i = g["default"].createCountryBossFight(t.id)),
                        [4, this.sendProtoAsync(i)]);
                case 1:
                  return (
                    n.sent(),
                    (i = g["default"].getReceiveMsg()),
                    null == i
                      ? [2]
                      : (e.setStatus(!0, b.CountryBoss.STATUS_FIGHT_START),
                        o["default"].sendNt(s.BattleEvent.REMOTE_BATTLE, i),
                        [2])
                  );
              }
            });
          });
        }),
        (t.prototype.doCountryBossQuit = function () {
          return __awaiter(this, void 0, void 0, function () {
            var e, t;
            return __generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return [
                    4,
                    T["default"].waitForTwiceSureUI(
                      _.GameText.STR_COUNTRYBOSS_QUIT_ASK,
                      null,
                      _.GameText.STR_COUNTRYBOSS_QUIT,
                    ),
                  ];
                case 1:
                  return (e = i.sent())
                    ? ((t = g["default"].createCountryBossQuit()),
                      [4, this.sendProtoAsync(t)])
                    : [2];
                case 2:
                  return (
                    i.sent(),
                    b.CountryBoss.clearCountryBoss(!1),
                    o["default"].sendNt(s.CountryEvent.CountryBoss),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.sendList = function (e, t, i, o) {
          switch ((void 0 === i && (i = ""), t || (t = this.data.vo), e)) {
            case L["default"].list_declare:
              this.doWarDeclareList(
                t,
                v["default"].PAGE_SIZE,
                v["default"].PAGE_NUM,
                o,
              );
              break;
            case L["default"].list_storm:
              this.doCommandCreateWarDeclareList(
                t,
                v["default"].PAGE_SIZE,
                v["default"].PAGE_NUM,
                o,
              );
              break;
            default:
              this.doCountryList(
                t,
                v["default"].PAGE_SIZE,
                v["default"].PAGE_NUM,
                i,
              );
          }
        }),
        (t.prototype.mtRequest = function (e) {
          var t = new n.Message(pb.EUserProtocol.C2S_CONFIG_REQUEST),
            i = t.proto;
          ((i.type = e), this.sendProto(t));
        }),
        (t.prototype.onMtReturn = function (e) {
          var t = e.body,
            i = t.proto;
          ((this.nationalWarConfig = i.nationalWarConfig),
            (this.sellItemCache = []));
          for (var n = 0; n < i.sellItemCache.length; n++) {
            var a = i.sellItemCache[n],
              r = new Uint8Array(a.item),
              l = gg.decodeMsg(r.buffer),
              u = I["default"].fromBytes(l);
            this.sellItemCache.push({
              item: u,
              uuid: a.uuid,
              expireTime: a.expireTime,
              price: a.price1 || a.price2 || a.price3,
              type: this.getMoneyType(a),
            });
          }
          (o["default"].sendNt(s.CountryEvent.CountryWarMoney),
            (this.gameConfig = i.gameConfig));
        }),
        (t.prototype.getPreLevel = function () {
          var e = this.gameConfig;
          return e[0] ? +e[0].val : 0;
        }),
        (t.prototype.getMoneyType = function (e) {
          return e.price1 > 0
            ? p.ModelConst.MONEY1
            : e.price2 > 0
              ? p.ModelConst.MONEY2
              : e.price3 > 0
                ? p.ModelConst.MONEY3
                : void 0;
        }),
        t
      );
    })(y["default"]);
  t["default"] = V;
});
