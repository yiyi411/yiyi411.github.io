(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(22),
    a = i(16),
    r = i(11),
    s = i(54),
    l = i(2),
    u = i(0),
    _ = i(27),
    d = i(10),
    p = i(8),
    c = i(1),
    h = i(21),
    f = i(24),
    T = i(18),
    E = i(19),
    y = i(35),
    g = i(56),
    v = i(5),
    S = i(62),
    I = (function () {
      function e() {
        ((this.playerList = new f["default"]()),
          (this.isfirstLogin = !1),
          (this.nextSysnTime = 0),
          (this.nextupdateListTime = 0),
          (this.status = 0),
          (this.endTime = 0),
          (this.scoreSum = 0),
          (this.fightCount = 0),
          (this.info = ""),
          (this.battleStatusCount = 0));
      }
      return (
        (e.prototype.isStatus = function (e) {
          return p.Tool.isBit(e, this.status);
        }),
        (e.prototype.setStatus = function (e, t) {
          this.status = p.Tool.setBit(e, t, this.status);
        }),
        (e.doEnterArena = function (t, i) {
          return __awaiter(this, void 0, Promise, function () {
            var o, n;
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    v["default"].arena || (v["default"].arena = new e()),
                    i ? [4, e.doArenaEntryRequest(t)] : [3, 2]
                  );
                case 1:
                  if (((o = a.sent()), !o)) return [2];
                  a.label = 2;
                case 2:
                  return (
                    (n = v["default"].arena),
                    (n.type = t),
                    (n.intValue1 = e.STATUS_NONE),
                    c["default"].showWin(
                      u.ModName.Arena,
                      u.ArenaViewType.ArenaMain,
                      n,
                    ),
                    i && (n.isfirstLogin = !0),
                    [2]
                  );
              }
            });
          });
        }),
        (e.doprocessEnteryArena = function (t) {
          if (null != t) {
            var i = t.getByte();
            (v["default"].arena || (v["default"].arena = new e()),
              this.doArenaRefurbish(t));
            t.getInt();
            (v["default"].myPlayer.isInTeam() && (i = e.ARENA_TYPE_TEAM),
              e.doEnterArena(i, !1));
          }
        }),
        (e.doArenaEntryRequest = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i;
            return __generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = new n.Message(E["default"].CG_TASK_ARENA_JOIN_NEW)),
                    t.putByte(e),
                    [4, y["default"].sendProtoAsync(t)]
                  );
                case 1:
                  return (
                    o.sent(),
                    (t = T["default"].getReceiveMsg()),
                    null == t
                      ? [2, !1]
                      : ((i = t.getByte()),
                        0 > i
                          ? (c["default"].alertMessage(t.getString()), [2, !1])
                          : (this.doArenaRefurbish(t), [2, !0]))
                  );
              }
            });
          });
        }),
        (e.doArenaNearActorList = function () {
          return __awaiter(this, void 0, void 0, function () {
            var e, t, i, a, r, s, u, _, d, p;
            return __generator(this, function (h) {
              switch (h.label) {
                case 0:
                  return (
                    (e = v["default"].arena),
                    null == e
                      ? [2, null]
                      : ((t = new n.Message(
                          E["default"].CG_TASK_ARENA_ACTOR_LIST,
                        )),
                        (i = e.intValue1),
                        (a = E["default"].PAGE_SIZE),
                        (r = E["default"].PAGE_NUM),
                        t.putByte(i),
                        t.putByte(a),
                        t.putShort(r),
                        [4, y["default"].sendProtoAsync(t)])
                  );
                case 1:
                  if ((h.sent(), (t = T["default"].getReceiveMsg()), null == t))
                    return [2, null];
                  if (((s = t.getByte()), 0 > s))
                    return (c["default"].alertMessage(t.getString()), [2]);
                  for (
                    u = t.getInt(),
                      _ = t.getShort(),
                      e.playerList
                        ? e.playerList.removeAllElements()
                        : (e.playerList = new f["default"]()),
                      d = 0;
                    _ > d;
                    d++
                  )
                    ((p = this.getPlayerFromMsg(t)),
                      null != p && e.playerList.addElement(p));
                  return (
                    o["default"].sendNt(l.ArenaEvent.ON_GOT_PLAYERLIST),
                    [2]
                  );
              }
            });
          });
        }),
        (e.getPlayerFromMsg = function (e) {
          if (null == e) return null;
          var t = new g["default"]();
          return (
            t.setId(e.getInt()),
            t.setName(e.getString()),
            t.setIcon1(e.getLong()),
            t.setJob(e.getByte()),
            t.setLevel(e.getByte()),
            (t.arenaPoint = e.getInt()),
            (t.Pkwincount = e.getInt()),
            (t.arenaStutas = e.getByte()),
            t
          );
        }),
        (e.prototype.getPlayerfromIndex = function (e) {
          var t = this.playerList;
          return null == t || t.isEmpty()
            ? null
            : p.Tool.isArrayIndexOutOfBounds(e, t)
              ? null
              : t.elementAt(e);
        }),
        (e.doUpdateArenaNearActorList = function () {
          var e = v["default"].arena;
          null != e &&
            (1 == e.isfirstLogin &&
              ((e.isfirstLogin = !1),
              c["default"].alertMessage(d.GameText.STR_ARENA_ALERT_MESSAGE)),
            this.doArenaNearActorList());
        }),
        (e.doArenaRefresh = function (e) {
          if (null != e) {
            var t = v["default"].arena;
            if (null != t) {
              var i = e.getByte();
              if (1 == i) return void this.clearArena(!1);
              if (2 == i) return void this.clearArena(!1);
              if (3 != i)
                ((t.battleStatusCount = 0), 0 == i && this.doArenaRefurbish(e));
              else if ((t.battleStatusCount++, t.battleStatusCount > 3)) {
                t.battleStatusCount = 0;
                T["default"].createWorldDataReflashMsg();
              }
            }
          }
        }),
        (e.doArenaRefurbish = function (e) {
          if (null != e) {
            var t = v["default"].arena;
            null != t &&
              ((t.endTime = e.getInt() + a["default"].timer.serverTime),
              (t.scoreSum = e.getShort()),
              (t.fightCount = e.getByte()),
              o["default"].sendNt(l.ArenaEvent.ON_ARENA_REFRESH));
          }
        }),
        (e.prototype.logic = function () {
          (1 == this.isStatus(e.STAGE_BATTLE_FAIL) &&
            (c["default"].alertMessage(this.getBattleFailStr()),
            this.setStatus(!1, e.STAGE_BATTLE_FAIL)),
            1 == this.isStatus(e.STAGE_BATTLE_WIN) &&
              (c["default"].alertMessage(this.getBattleWinStr()),
              this.setStatus(!1, e.STAGE_BATTLE_WIN)),
            a["default"].timer.serverTime < this.nextSysnTime ||
              (T["default"].sendRequest(T["default"].createArenaRefresh()),
              (this.nextSysnTime = a["default"].timer.serverTime + e.SYSN_TIME),
              a["default"].timer.serverTime < this.nextupdateListTime ||
                ((this.nextupdateListTime =
                  a["default"].timer.serverTime + e.SYSN_UPDATE_TIME),
                e.doUpdateArenaNearActorList())));
        }),
        (e.prototype.clearRefreshCD = function () {
          this.nextSysnTime = 0;
        }),
        (e.prototype.isTimeOut = function () {
          return !this.endTime || a["default"].timer.serverTime > this.endTime;
        }),
        (e.doOverNotice = function (e) {
          if (null != e) {
            var t = e.getInt(),
              i = e.getInt(),
              o = e.getBoolean(),
              n = v["default"].myPlayer;
            if ((null != n && (n.arenaPoint = i), o)) {
              var a = h["default"].manageString(
                d.GameText.STR_ARENA_OVER_NOTICE,
                t + "",
              );
              _["default"].confirm(
                a,
                null,
                d.GameText.getText(d.GameText.TI_WARM_SHOW),
              );
            }
          }
        }),
        (e.doArenaExit = function () {
          _["default"].confirm(
            d.GameText.STR_ARENA_EXIT_ASK,
            r["default"].alloc(e, e.exitConfirm),
            d.GameText.STR_ARENA_EXIT_TITLE,
          );
        }),
        (e.exitConfirm = function () {
          return __awaiter(this, void 0, Promise, function () {
            var e, t, i;
            return __generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (e = T["default"].createArenaExit()),
                    [4, y["default"].sendProtoAsync(e)]
                  );
                case 1:
                  return (
                    o.sent(),
                    (e = T["default"].getReceiveMsg()),
                    null == e
                      ? [2]
                      : ((t = e.getInt()),
                        (i = v["default"].myPlayer),
                        null != i && t && (i.arenaPoint = t),
                        this.clearArena(!1),
                        [2])
                  );
              }
            });
          });
        }),
        (e.clearArena = function (e) {
          return (
            v["default"].arena &&
              v["default"].arena.playerList.removeAllElements(),
            (v["default"].arena = null),
            1 == e && s["default"].ins.isFight
              ? void S["default"].addPromptMsg(d.GameText.STR_STAGE_BATTLE)
              : (c["default"].showMain(),
                void T["default"].createWorldDataReflashMsg())
          );
        }),
        (e.doArenaPK = function (t, i) {
          return __awaiter(this, void 0, Promise, function () {
            var o, a, r;
            return __generator(this, function (s) {
              switch (s.label) {
                case 0:
                  return (
                    (o = new n.Message(E["default"].CG_TASK_ARENA_PK)),
                    o.putInt(i),
                    [4, y["default"].sendProtoAsync(o)]
                  );
                case 1:
                  return (
                    s.sent(),
                    (o = T["default"].getReceiveMsg()),
                    null == o
                      ? [2]
                      : ((a = o.getByte()),
                        0 > a
                          ? (c["default"].alertMessage(o.getString()),
                            i > 0 &&
                              ((r = o.getByte()),
                              null != t &&
                                ((t.arenaStutas = r),
                                e.doUpdateArenaNearActorList())),
                            [2])
                          : [2])
                  );
              }
            });
          });
        }),
        (e.doArenaWatch = function () {
          return __awaiter(this, void 0, Promise, function () {
            var e, t;
            return __generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (e = new n.Message(E["default"].CG_TASK_ARENA_SEE_RANDOM)),
                    [4, y["default"].sendProtoAsync(e)]
                  );
                case 1:
                  return (
                    i.sent(),
                    (e = T["default"].getReceiveMsg()),
                    null == e
                      ? [2]
                      : ((t = e.getByte()),
                        0 > t
                          ? (c["default"].alertMessage(e.getString()), [2])
                          : [2])
                  );
              }
            });
          });
        }),
        (e.doPointMenu = function (e) {
          if (null != e) {
            var t = v["default"].myPlayer;
            if (null != t) {
              var i = e.scoreSum,
                o = (t.arenaPoint + e.scoreSum, "");
              ((o += p.Tool.manageString(d.GameText.STR_ARENA_GET_POINT_INFO, [
                i + "",
                e.fightCount + "",
              ])),
                c["default"].alertMessage(o));
            }
          }
        }),
        (e.prototype.getBattleFailStr = function () {
          return p.Tool.manageString(d.GameText.STR_ARENA_BATTLE_FAIL_INFO, [
            this.scoreSum + "",
            this.fightCount - 1 + "",
          ]);
        }),
        (e.prototype.getBattleWinStr = function () {
          return d.GameText.STR_ARENA_BATTLE_WIN_INFO;
        }),
        (e.SYSN_TIME = 1e4),
        (e.SYSN_UPDATE_TIME = 6e4),
        (e.ARENA_TYPE_SINGLE = 1),
        (e.ARENA_TYPE_TEAM = 2),
        (e.STAGE_BATTLE_FAIL = 1),
        (e.STAGE_BATTLE_VIEW_EXIT = 2),
        (e.STAGE_BATTLE_WIN = 4),
        (e.STATUS_ALL = -1),
        (e.STATUS_NONE = 0),
        (e.STATUS_PK = 1),
        (e.STATUS_OB = 2),
        (e.STATUS_EXIT = 3),
        e
      );
    })();
  t["default"] = I;
});
