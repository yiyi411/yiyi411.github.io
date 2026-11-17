(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(16),
    a = i(0),
    r = i(228),
    s = i(74),
    l = i(33),
    u = i(56),
    _ = i(57),
    d = i(26),
    p = i(1),
    c = i(22),
    h = i(18),
    f = i(4),
    T = i(8),
    E = i(115),
    y = i(32),
    g = i(10),
    v = i(21),
    S = i(54),
    I = i(75),
    m = i(12),
    A = i(30),
    C = i(42),
    P = i(24),
    R = i(61),
    O = i(67),
    N = i(102),
    M = i(64),
    L = i(15),
    w = i(63),
    b = i(77),
    x = i(17),
    D = i(20),
    B = i(19),
    G = i(43),
    U = i(11),
    k = i(2),
    V = i(62),
    H = i(23),
    F = i(186),
    Y = i(35),
    W = i(41),
    K = i(78),
    j = i(253),
    q = i(247),
    X = i(159),
    z = i(254),
    Q = i(88),
    J = i(255),
    $ = i(126),
    Z = i(117),
    et = i(44),
    tt = i(25),
    it = i(53),
    ot = i(103),
    nt = i(69),
    at = i(392),
    rt = i(28),
    st = i(135),
    lt = i(114),
    ut = i(52),
    _t = i(27),
    dt = (function () {
      function e() {}
      return (
        Object.defineProperty(e, "gameSpeed", {
          get: function () {
            return e.isAccelerate ? e.BATTLE_SPEED : this._gameSpeed;
          },
          set: function (e) {
            e &&
              e != this._gameSpeed &&
              ((this._gameSpeed = e),
              o["default"].sendNt(k.MainEvent.ON_GAME_SPEED_UPDATE));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "isLevelAnim", {
          get: function () {
            return this._isLevelAnim;
          },
          set: function (e) {
            this._isLevelAnim = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "TAG_IS_AUTO_FIGHT_FLAG", {
          get: function () {
            return this._autoFight;
          },
          set: function (e) {
            var t = !rt["default"].ins.getIsOpen(
              rt.LevelOpenId.MainBattleActo,
              !1,
            );
            return (
              st.DebugModel.ins.isNotLock && (t = !1),
              t
                ? (console.log("功能锁拦截自动战斗"),
                  void (this._autoFight = !1))
                : ((this.gameSpeed = e ? f["default"].GAME_SPEED_MAX : 1),
                  void (
                    this._autoFight != e &&
                    ((this._autoFight = e),
                    egret.localStorage.setItem(
                      "TAG_IS_AUTO_FIGHT_FLAG",
                      e ? "1" : "0",
                    ),
                    e && this.setAutoSkill(),
                    o["default"].sendNt(k.BattleEvent.UPDATE_AUTO_FIGHT))
                  ))
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "myPlayer", {
          get: function () {
            return this._myPlayer;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.clearMyPlayer = function () {
          if (this._myPlayer) {
            var e = this._myPlayer;
            (this._myPlayer = null), e.clearData();
          }
        }),
        (e.clearAllData = function () {
          (lt.MissionModel.mainMission = null),
            (this.gameNotice = ""),
            (this.mapName = ""),
            (this.mapId = null),
            (this.orgMapID = null),
            (this.arena = null),
            (this.countryWar = null),
            (this.countryBoss = null),
            (this.playerEventList = null),
            (this.playerEventList = new P["default"]()),
            this.clearEscort(),
            this.clearMyPlayer();
          var e = o["default"].getProxy(a.ModName.Pet, a.ProxyType.Pet);
          e.data.PlayerVo = null;
        }),
        (e.getPlayerID = function () {
          return null != this.myPlayer ? this.myPlayer.getId() : -1;
        }),
        (e.getMyPetID = function () {
          var e = this._myPlayer;
          return e && e.pet && e.id;
        }),
        (e.getModel = function (e) {
          return this.myPlayer && e == this.myPlayer.id
            ? this.myPlayer
            : o["default"]
                .getProxy(a.ModName.Scene, a.ProxyType.Scene)
                .getPlayerById(e);
        }),
        (e.initMyPlayer = function () {
          this.clearMyPlayer(),
            (this._myPlayer = new u["default"]()),
            this._myPlayer.setMyPlayer();
        }),
        (e.getCurMapID = function () {
          return this.mapId;
        }),
        (e.isVip = function (t) {
          return null == t
            ? !1
            : t.getVipLevel() < 1
              ? !1
              : t == e.myPlayer && this.isVipOverDue(t)
                ? !1
                : !0;
        }),
        (e.isVipOverDue = function (e) {
          if (null == e) return !0;
          if (null == e.bag) return !0;
          var t = e.bag.getItem(l["default"].SPIRIT_POS);
          if (null != t) {
            var i = t.expireTime;
            if (i - n["default"].timer.serverTime > 0) return !1;
          }
          return !0;
        }),
        (e.toBattle = function (t, i, r) {
          return __awaiter(this, void 0, Promise, function () {
            var s, l, u, _, d, c, y, v, I, m, A, C;
            return __generator(this, function (P) {
              switch (P.label) {
                case 0:
                  return S["default"].ins.isFight
                    ? [2, !1]
                    : 1 == i &&
                        n["default"].timer.serverTime < this.nextBattleTime
                      ? [2, !1]
                      : ((s = !1),
                        this.myPlayer.isLeader() &&
                          this.myPlayer.isHasPlayerMember() &&
                          (s = !0),
                        1 == f["default"].isNetBattleID(t) &&
                          null == e.getMonsterGroup(t) &&
                          (s = !0),
                        e.isEscortStatus() &&
                          null == e.getMonsterGroup(t) &&
                          (s = !0),
                        !s &&
                          this.myPlayer.checkIsHasLegionTem() &&
                          null == e.getMonsterGroup(t) &&
                          (s = !0),
                        (l = o["default"].getProxy(
                          a.ModName.Buddy,
                          a.ProxyType.Buddy,
                        )),
                        l.mtRequest(pb.BuddyCMD.BUDDY_CMD_FIGHT_LIST),
                        (u = null),
                        0 == s &&
                          ((u = e.getBattleByGroupID(t)),
                          null == u && (s = !0)),
                        (_ = o["default"].getProxy(
                          a.ModName.Battle,
                          a.ProxyType.Battle,
                        )),
                        s ? (_.monsterGroupId = 0) : (_.monsterGroupId = t),
                        o["default"]
                          .getProxy(a.ModName.Scene, a.ProxyType.Scene)
                          .createMoveMessage(this.myPlayer.x, this.myPlayer.y),
                        s
                          ? [3, 2]
                          : ((d = u.getMonsterGroup()),
                            (c = -1),
                            null != d && (c = d.groupId),
                            (y = h["default"].createEnterLocalBattle(c)),
                            [4, Y["default"].sendProtoAsync(y)]));
                case 1:
                  return (
                    P.sent(),
                    (v = h["default"].getReceiveMsg()),
                    (I = v.getByte()),
                    0 != I
                      ? (p["default"].alertMessage(
                          v.getString(),
                          g.GameText.getText(g.GameText.TI_ERROR),
                        ),
                        [2, -1])
                      : ((e.toBattleNpcId = r),
                        T.Tool.debug(
                          "enterBattle,groudID " + t + ",npcId " + r,
                        ),
                        S["default"].ins.enterBattle(u),
                        (this.nextBattleTime =
                          n["default"].timer.serverTime +
                          this.SYNC_BATTLE_INTERVAL),
                        [2, !0])
                  );
                case 2:
                  return (
                    p["default"].alertMessage(
                      "这组怪物的数据尚未恢复，暂时无法进入战斗。",
                    ),
                    (m = h["default"].createEnterRemoteBattle(t)),
                    [4, Y["default"].sendProtoAsync(m)]
                  );
                case 3:
                  return (
                    P.sent(),
                    (A = h["default"].getReceiveMsg()),
                    (C = A.getByte()),
                    0 > C
                      ? (p["default"].alertMessage(
                          A.getString(),
                          g.GameText.getText(g.GameText.TI_ERROR),
                        ),
                        null != e.arena &&
                          E["default"].doUpdateArenaNearActorList(),
                        [2, !1])
                      : (_.dealRemoteBattle(A),
                        (this.nextBattleTime =
                          n["default"].timer.serverTime +
                          this.SYNC_BATTLE_INTERVAL),
                        [2, !0])
                  );
              }
            });
          });
        }),
        (e.getBattleByGroupID = function (t) {
          var i = e.getMonsterGroup(t);
          if (null == i) return null;
          var o = r.MonsterGroup.getLocalBattlePlayerList(this.myPlayer, i);
          this.battleSend = T.Tool.nextSeed(this.battleSend);
          var n = I["default"].createLocalBattle(this.battleSend, o, i);
          return n;
        }),
        (e.getMonsterGroup = function (e) {
          if (0 >= e) return null;
          var t = this.monsterGroupList[e];
          return t;
        }),
        (e.doJumpMap = function (e, t, i, n) {
          return e
            ? void o["default"].sendNt(d.SceneEvent.ON_JUMP_MAP, {
                mapId: e,
                gx: t,
                gy: i,
                cost: n,
              })
            : void L.Tips.show("地图暂未开放");
        }),
        (e.checkCrossServer = function () {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, o, n;
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return (t = e.myPlayer.isPlayerLeader())
                    ? ((i = new c.Message(
                        B["default"].CG_FIGHT_ASK_CROSSSERVER_TEAM,
                      )),
                      [4, Y["default"].sendProtoAsync(i)])
                    : [2, !1];
                case 1:
                  return (
                    (i = a.sent()),
                    null == i
                      ? [2, !1]
                      : ((o = i.getByte()),
                        0 > o ? [2, !1] : ((n = i.getBoolean()), [2, n]))
                  );
              }
            });
          });
        }),
        (e.doBattleSeeInter = function (e) {
          var t = h["default"].createFightSeeInterMsg(e);
          G["default"].Service.sendProto(t);
        }),
        (e.gotoCityFixEquipment = function (e, t) {
          return (
            void 0 === e && (e = "城市守卫"),
            void 0 === t && (t = !1),
            __awaiter(this, void 0, void 0, function () {
              var i, o;
              return __generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return f["default"].isAllocateCityMap(this.mapId) && !t
                      ? [3, 2]
                      : [4, ot["default"].doEnterCity(this._myPlayer.id, !1)];
                  case 1:
                    return (i = n.sent())
                      ? (p["default"].showMain(), [3, 3])
                      : [2];
                  case 2:
                    p["default"].showMain(), (n.label = 3);
                  case 3:
                    return (
                      (o = this.getNpcByName(e)),
                      o && nt.MainPlayerAi.ins.moveToLocalNpc(o),
                      [2]
                    );
                }
              });
            })
          );
        }),
        (e.gotoCountryFixEquipment = function (e, t) {
          return (
            void 0 === e && (e = "城市守卫"),
            void 0 === t && (t = !1),
            __awaiter(this, void 0, void 0, function () {
              var i, n, r;
              return __generator(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      (i = o["default"].getProxy(
                        a.ModName.Country,
                        a.ProxyType.Country,
                      )),
                      f["default"].isAllocateCountryMap(this.mapId) && !t
                        ? [3, 2]
                        : [4, i.doEnterCountry(i.data.vo, !1)]
                    );
                  case 1:
                    return (
                      (n = s.sent()),
                      n || t ? (p["default"].showMain(), [3, 3]) : [2]
                    );
                  case 2:
                    p["default"].showMain(), (s.label = 3);
                  case 3:
                    return (
                      (r = this.getNpcByName(e)),
                      r && nt.MainPlayerAi.ins.moveToLocalNpc(r),
                      [2]
                    );
                }
              });
            })
          );
        }),
        (e.doSpecialShop = function (t, i) {
          if (t == f["default"].SHOP_ARENA_SINGLE)
            return (
              E["default"].doEnterArena(E["default"].ARENA_TYPE_SINGLE, !0), !0
            );
          if (t == f["default"].SHOP_ARENA_TEAM)
            return (
              E["default"].doEnterArena(E["default"].ARENA_TYPE_TEAM, !0), !0
            );
          if (t == f["default"].SHOP_REPAIR_ID) return e.doRepairEquip(), !0;
          if (t == f["default"].SHOP_REWARD_CODE)
            return (
              p["default"].showInput(
                "激活码",
                "请输入激活码",
                U["default"].alloc(this, function (t) {
                  e.doSpecialCode(t);
                }),
              ),
              !0
            );
          if (t == f["default"].SHOP_REBORN_MAP) {
            var n = h["default"].createSetRebornMapMsg(this.getCurMapID());
            return h["default"].sendRequest(n), !0;
          }
          if (t == f["default"].SHOP_ESCORT_LIST)
            return p["default"].createEscortRobListUI(), !0;
          if (t == f["default"].OFFLINE_MISSION_LIST)
            return M["default"].doOffLineList(i), !0;
          if (t == f["default"].SHOP_STORE_VIP)
            return (
              p["default"].createStorageUI(
                p["default"].SUB_STORAGE_PLAYER_VIP,
                e.myPlayer,
              ),
              !0
            );
          if (t == f["default"].SHOP_STORE_HIGHT_VIP)
            return (
              p["default"].createStorageUI(
                b.UIDefine.SUB_STORAGE_PLAYER_HIGHT_VIP,
                e.myPlayer,
              ),
              !0
            );
          if (t == f["default"].SHOP_STORE)
            return (
              p["default"].createStorageUI(
                p["default"].SUB_STORAGE_PLAYER,
                e.myPlayer,
              ),
              !0
            );
          if (t == f["default"].SHOP_COUNTRY_STORE)
            return (
              p["default"].showWin(
                a.ModName.Country,
                a.CountryViewType.CountryStorage,
              ),
              !0
            );
          if (t == f["default"].SHOP_COUNTRY_SYSTEM_STORE)
            return (
              p["default"].showWin(
                a.ModName.Country,
                a.CountryViewType.CountryStorage,
                !0,
              ),
              !0
            );
          if (t == f["default"].SHOP_COUNTRY_WAR)
            return o["default"].sendNt(k.CountryEvent.CountryMenu, t), !0;
          if (t == f["default"].SHOP_WAR_DECLARE)
            return o["default"].sendNt(k.CountryEvent.CountryMenu, t), !0;
          if (t == f["default"].SHOP_WAR_INFO)
            return o["default"].sendNt(k.CountryEvent.CountryMenu, t), !0;
          if (t == f["default"].SHOP_CAMP)
            return (
              p["default"].showWin(
                a.ModName.Country,
                a.CountryViewType.CountryWarMain,
              ),
              !0
            );
          if (t == f["default"].SHOP_UNIN)
            return (
              p["default"].showWin(
                a.ModName.Country,
                a.CountryViewType.CountryForcesMain,
              ),
              !0
            );
          if (t == f["default"].SHOP_WAR_RESULT)
            return o["default"].sendNt(k.CountryEvent.CountryMenu, t), !0;
          if (t == f["default"].SHOP_COUNTRY_MISSION)
            return (
              p["default"].showWin(
                a.ModName.Country,
                a.CountryViewType.CountryTaskList,
                { data: new K.Country(-1) },
              ),
              !0
            );
          if (t == f["default"].SHOP_MARRY) return e.doPartnerApply(), !0;
          if (t == f["default"].SHOP_DIVORCE)
            return J["default"].doPartnerDel(), !0;
          if (t == f["default"].SHOP_MARRYWISH)
            return J["default"].createWishListUI(), !0;
          if (t == f["default"].SHOP_TEAMBOSS)
            return $["default"].doEnterTeamBoss(), !0;
          if (t == f["default"].SHOP_PLAYER_SELL)
            return W["default"].doActorSellList(), !0;
          if (t == f["default"].SHOP_PLAYER_BUY)
            return p["default"].createActorBuyListUI(), !0;
          if (t == f["default"].SHOP_QUESTION)
            return W["default"].doOpenQuestion(!1, !1), !0;
          if (t == f["default"].SHOP_QUESTION_VIP)
            return W["default"].doOpenQuestion(!0, !1), !0;
          if (t == f["default"].SHOP_QUESTION_SUPER_QQ)
            return W["default"].doOpenQuestion(!1, !0), !0;
          if (t == f["default"].SHOP_COUNTRY_VIPGETMONEY) return !0;
          if (f["default"].isCrossServerActivity(t))
            return (
              (e.shopID = t),
              o["default"].sendNt(k.CSActivityEvent.OPEN_CROSS_DUNGEONS),
              !0
            );
          if (t == b.UIDefine.EVENT_ALL_URL_COMMUNITY)
            return (
              this.setLoginSetting(!0, e.IS_GUIDE_CITY),
              w.UIAction.doMenuButton(t),
              this.setLoginSetting(!1, e.IS_GUIDE_CITY),
              !0
            );
          if (t == p["default"].EVENT_ALL_MENU_COUNTRY_HONOR)
            return (
              p["default"].showWin(
                a.ModName.Country,
                a.CountryViewType.CountryDonateMain,
              ),
              !0
            );
          if (
            t > f["default"].SHOP_BACKUP_START &&
            t < f["default"].SHOP_BACKUP_END
          )
            return (
              p["default"].alertMessage(g.GameText.STR_SHOP_BACKUP_START), !0
            );
          if (t == p["default"].EVENT_ALL_MENU_CSS)
            return p["default"].createChiselSealUI(), !0;
          if (t == p["default"].EVENT_RECYCLE_SHOP) {
            var r = e.myPlayer;
            return r.vipLevel2 < 1
              ? (p["default"].alertMessage(g.GameText.SHOP_TEXT_RE), !0)
              : (p["default"].showWin(
                  a.ModName.Shop,
                  a.ShopViewType.ShopRecycleView,
                ),
                !0);
          }
          var s = o["default"].getProxy(
            a.ModName.ArenaNew,
            a.ProxyType.ArenaNew,
          );
          return t == p["default"].EVENT_ARENA_NEW_MAP
            ? (s.newArena(pb.NewArenaCMD.NA_CMD_ENTER_MAP), !0)
            : t == p["default"].EVENT_ARENA_NEW_LEVEL1_MAP
              ? (s.newArena(pb.NewArenaCMD.NA_CMD_INFO, { levelStage: 1 }), !0)
              : t == p["default"].EVENT_ARENA_NEW_LEVEL2_MAP
                ? (s.newArena(pb.NewArenaCMD.NA_CMD_INFO, { levelStage: 2 }),
                  !0)
                : t == p["default"].EVENT_ARENA_NEW_LEVEL3_MAP
                  ? (s.newArena(pb.NewArenaCMD.NA_CMD_INFO, { levelStage: 3 }),
                    !0)
                  : t == p["default"].EVENT_ARENA_NEW_LEVEL4_MAP
                    ? (s.newArena(pb.NewArenaCMD.NA_CMD_INFO, {
                        levelStage: 4,
                      }),
                      !0)
                    : t == p["default"].EVENT_ARENA_NEW_LEVEL5_MAP
                      ? (s.newArena(pb.NewArenaCMD.NA_CMD_INFO, {
                          levelStage: 5,
                        }),
                        !0)
                      : t == p["default"].EVENT_ARENA_NEW_LEVEL6_MAP
                        ? (s.newArena(pb.NewArenaCMD.NA_CMD_INFO, {
                            levelStage: 6,
                          }),
                          !0)
                        : t == p["default"].EVENT_ARENA_NPC_MAP
                          ? (s.newArena(pb.NewArenaCMD.NA_CMD_INFO), !0)
                          : t >= p["default"].EVENT_ALL_MENU_WORLD_ITEM &&
                              t <= p["default"].EVENT_ALL_MENU_END
                            ? (this.setLoginSetting(!0, e.IS_GUIDE_CITY),
                              w.UIAction.doMenuButton(t),
                              this.setLoginSetting(!1, e.IS_GUIDE_CITY),
                              !0)
                            : !1;
        }),
        (e.doBrowseVIPMain = function (e) {
          O.ShopItem.openItemShop(e, !0);
        }),
        (e.doBrowseMainForNew = function (e) {
          O.ShopItem.openItemShop(e, !0);
        }),
        (e.doBrowseShop = function (t, i) {
          if ([51,52,55].includes(t)) { e.shopID=t; return O.ShopItem.openItemShop(t,false); }
          // Equipment repair is a copper service, also available with pay disabled.
          if (t == f["default"].SHOP_REPAIR_ID)
            return void this.doSpecialShop(t, i);
          if (
            (void 0 === i && (i = null),
            (go.openPay || f["default"].isSoldierShop(t)) &&
              1 != this.doSpecialShop(t, i))
          )
            if (f["default"].isSoldierShop(t))
              (e.shopID = t),
                N["default"].doMercenaryListMsg(
                  B["default"].PAGE_SIZE,
                  B["default"].PAGE_NUM,
                );
            else if (f["default"].isComposeShop(t))
              (e.shopID = t),
                p["default"].createShopUI(p["default"].SUB_SHOP_COMBIN);
            else if (f["default"].isIntegralShop(t))
              (e.shopID = t),
                p["default"].createShopUI(p["default"].SUB_SHOP_INTEGRAL);
            else if (f["default"].isArenaShop(t))
              (e.shopID = t),
                p["default"].createShopUI(p["default"].SUB_SHOP_ARENA);
            else if (f["default"].isCrossOneArenaShop(t)) {
              e.shopID = t;
              var n = new c.Message(pb.EUserProtocol.C2S_CORSSIND_INFO);
              G["default"].Service.sendProto(n);
            } else if (f["default"].isCrossOneArenaSignupShop(t)) {
              e.shopID = t;
              var n = new c.Message(pb.EUserProtocol.C2S_CORSSIND_SIGNUP),
                r = n.proto;
              (r.type = 0), G["default"].Service.sendProto(n);
            } else if (f["default"].isCrossOneArenaCancelShop(t)) {
              e.shopID = t;
              var n = new c.Message(pb.EUserProtocol.C2S_CORSSIND_SIGNUP),
                r = n.proto;
              (r.type = 1), G["default"].Service.sendProto(n);
            } else if (f["default"].isCrossOneArenaRankShop(t)) {
              e.shopID = t;
              var s = o["default"].getProxy(a.ModName.Arena, a.ProxyType.Arena);
              s.doCorssindRank(!1, !0);
            } else if (f["default"].isCrossPKShop(t)) {
              e.shopID = t;
              var s = o["default"].getProxy(
                a.ModName.CrossServerPK,
                a.ProxyType.CrossServerPK,
              );
              s.enterCSPK();
            } else if (f["default"].isCrossPKSignupShop(t)) {
              e.shopID = t;
              var s = o["default"].getProxy(
                a.ModName.CrossServerPK,
                a.ProxyType.CrossServerPK,
              );
              s.doSignup(0);
            } else if (f["default"].isCrossPKCancelShop(t)) {
              e.shopID = t;
              var s = o["default"].getProxy(
                a.ModName.CrossServerPK,
                a.ProxyType.CrossServerPK,
              );
              s.doSignup(-1);
            } else
              f["default"].isSkyArenaShop(t)
                ? ((e.shopID = t),
                  p["default"].createShopUI(p["default"].SUB_SHOP_SKYARENA))
                : f["default"].isPetShop(t)
                  ? ((e.shopID = t),
                    p["default"].createShopUI(
                      p["default"].SUB_SHOP_PETCOMPOSITE,
                    ))
                  : f["default"].isFurnaceShop(t)
                    ? ((e.shopID = t), j["default"].doOpenFurnaceShop(t))
                    : f["default"].isEnchantShop(t) ||
                        f["default"].isEnchantCountryShop(t)
                      ? ((e.shopID = t),
                        p["default"].createShopUI(b.UIDefine.SUB_SHOP_ENCHANT))
                      : f["default"].isAdvancedShop(t)
                        ? ((e.shopID = t),
                          p["default"].createShopUI(
                            b.UIDefine.SUB_SHOP_EQ_UPGRADE,
                          ))
                        : t == f["default"].SHOP_TOWER_ID
                          ? p["default"].showWin(
                              a.ModName.Tower,
                              a.TowerViewType.TowerMain,
                              { subIdx: 1 },
                            )
                          : f["default"].isGuessGameShop(t)
                            ? ((e.shopID = t),
                              at.GuessGame.doGetSimpleGameInfo(t))
                            : t == f["default"].CROSS_TEAM_SIGN ||
                                t == f["default"].CROSS_TEAM_SIGN_UP ||
                                t == f["default"].CROSS_TEAM_SIGN_UP_CANCEL
                              ? o["default"].sendNt(
                                  k.CrossTeamArenaEvent.CrossTeamArenaNpc,
                                  t,
                                )
                              : t == f["default"].SHOP_CORSS_SC
                                ? p["default"].openCrossNew()
                                : t == f["default"].SHOP_CORSS_GZ
                                  ? p["default"].openCrossNew(!0)
                                  : t == f["default"].SHOP_CORSS_SM ||
                                    (t == f["default"].SHOP_TYPE_50
                                      ? p["default"].showWin(
                                          a.ModName.Shop,
                                          a.ShopViewType.ShopMainNew,
                                        )
                                      : O.ShopItem.openItemShop(t));
        }),
        (e.openShopSkill = function (t) {
          var i = f["default"].getTypeBySkillShopID(t);
          if (i == f["default"].SKILL_TYPE_PET && null == e.myPlayer.getPet())
            return void p["default"].alertMessage(
              g.GameText.STR_SKILL_TYPE_PET_NULL,
            );
          e.shopID = t;
          var n = o["default"].getProxy(a.ModName.Shop, a.ProxyType.Shop);
          n.doOpenSkillShop(t);
        }),
        (e.getShopSkillList = function (e) {}),
        (e.doGetIntegralShopList = function (t) {
          var i = h["default"].createIntegralShop(this.shopID);
          G["default"].Service.sendProto(i),
            G["default"].Service.onProto(
              B["default"].CG_ITEMSHOP_LIST_SCORE,
              U["default"].alloc(this, e.integralShopCallBack, [t], !0),
            );
        }),
        (e.integralShopCallBack = function (t, i) {
          var n = i.body;
          if (null == n) return null;
          var r = n.getByte();
          if (0 == r) {
            var s = n.getInt();
            this.shopID == f["default"].SHOP_CAMPWAR_ID &&
              (e.myPlayer.campWarPoint = s);
          }
          if (0 > r) return void p["default"].alertMessage(n.getString());
          for (
            var l = new P["default"](), u = n.getShort(), _ = 0;
            u > _;
            _++
          ) {
            var d = new O.ShopItem();
            O.ShopItem.fromBytesAtts2(d, n),
              (d.durability = d.durMax),
              f["default"].isIntegralShop(this.shopID)
                ? (d.integral = n.getInt())
                : f["default"].isArenaShop(this.shopID)
                  ? (d.arenaPoint = n.getInt())
                  : f["default"].isSkyArenaShop(this.shopID)
                    ? (d.skyarenaPoint = n.getInt())
                    : this.shopID == f["default"].SHOP_TOWER_ID
                      ? (d.towerPoint = n.getInt())
                      : this.shopID == f["default"].SHOP_RED_PACKET
                        ? (d.redPacketPoint = n.getInt())
                        : this.shopID == f["default"].SHOP_PLA_SHOP_ID
                          ? (d.plaPoint = n.getInt())
                          : this.shopID == f["default"].SHOP_CAMPWAR_ID &&
                            (d.campwarPoint = n.getInt()),
              (d.status = n.getByte()),
              (d.maxBuy = n.getShort()),
              (d.allCount = n.getShort()),
              l.addElement(d);
          }
          var c = o["default"].getProxy(a.ModName.Shop, a.ProxyType.Shop),
            h = c.data;
          h.setShopItemList(l),
            t
              ? o["default"].sendNt(k.ShopEvent.SHOP_DATA)
              : p["default"].showWin(
                  a.ModName.Shop,
                  a.ShopViewType.ShopIntegral,
                );
        }),
        (e.doEnterCombinShop = function () {
          var t = h["default"].createCombinShop(this.shopID);
          G["default"].Service.sendProto(t),
            G["default"].Service.onProto(
              B["default"].CG_COMPOSITE_SHOP,
              U["default"].alloc(this, e.enterCombinShopCallBack, null, !0),
            );
        }),
        (e.enterCombinShopCallBack = function (e) {
          var t = e.body;
          if (null == t) return null;
          var i = t.getByte();
          if (0 > i) return void p["default"].alertMessage(t.getString());
          var n = t.getShort();
          if (0 == n)
            return (
              p["default"].alertMessage(g.GameText.STR_COMBIN_SHOP_DATA_ERROR),
              null
            );
          for (var r = new P["default"](), s = 0; n > s; s++) {
            var l = new O.ShopItem();
            y["default"].fromBytesAtts2(l, t), (l.durability = l.durMax);
            var u = t.getByte(),
              _ = t.getInt();
            l.setMoney(u, _), (l.extraList = new P["default"]());
            for (var d = t.getByte(), c = 0; d > c; c++) {
              var h = new y["default"]();
              (h.name = t.getString()),
                (h.grade = t.getByte()),
                (h.quantity = t.getInt()),
                (h.id = t.getInt()),
                l.extraList.addElement(h);
            }
            l.setCombinSkill(t),
              (l.combinItemID = t.getInt()),
              (f["default"].isEnchantShop(this.shopID) ||
                f["default"].isEnchantCountryShop(this.shopID)) &&
                ((l.enchantType = t.getByte()), (l.enchantNeed = t.getInt())),
              (l.isScrooll = t.getByte()),
              (l.combintype = t.getByte()),
              f["default"].isAdvancedShop(this.shopID) &&
                ((l.isUpgradeItem = t.getBoolean()),
                (l.power4 = t.getShort()),
                (l.powerValue4 = t.getShort()),
                (l.power5 = t.getShort()),
                (l.powerValue5 = t.getShort()),
                (l.power6 = t.getShort()),
                (l.powerValue6 = t.getShort()),
                (l.power7 = t.getShort()),
                (l.powerValue7 = t.getShort())),
              r.addElement(l);
          }
          var T = o["default"].getProxy(a.ModName.Shop, a.ProxyType.Shop),
            E = T.data;
          E.setShopItemList(r),
            p["default"].showWin(a.ModName.Shop, a.ShopViewType.ShopSynthesis, {
              shopId: this.shopID,
            });
        }),
        (e.checkOneKeyMissionFinish = function (e) {
          if (!nt.MainPlayerAi.ins.open) {
            var t = this.myPlayer;
            if (
              null != t &&
              !(
                t.isMember() ||
                (1 == e && t.isAutoMove()) ||
                1 == this.isEscortStatus()
              )
            ) {
              var i = t.missionList;
              if (null != i)
                for (var o = 0; o < i.length; o++) {
                  var n = i[o];
                  if (
                    null != n &&
                    0 != n.isOneKeyMission() &&
                    1 != n.isOneKeyShow() &&
                    n.isComplete(t)
                  )
                    return (
                      n.setOneKeySHow(),
                      0 == e && nt.MainPlayerAi.ins.stopAutoMove(),
                      void s["default"].doMissionInfoView(
                        t,
                        n,
                        null,
                        p["default"].SUB_MISSION_ONE_SUBMIT,
                      )
                    );
                }
            }
          }
        }),
        (e.isEscortStatus = function () {
          return null != this.escort;
        }),
        (e.clearEscort = function () {
          (this.escort = null),
            null != e.myPlayer &&
              (e.myPlayer.clearFightPower(), e.myPlayer.clearFight());
        }),
        (e.createEscort = function (e, t) {
          switch (t) {
            case Q["default"].OLDESCORT:
              this.escort = e;
              break;
            case Q["default"].NEWESCORT:
              this.escort = e;
          }
        }),
        (e.getEscort = function () {
          return this.escort;
        }),
        (e.getMonster = function (e) {
          for (var t in this.monsterList)
            if (Number(t) == e) return this.monsterList[t];
        }),
        (e.addMonsterGroup = function (e) {
          if (null != e) {
            var t = e.groupId;
            this.monsterGroupList[t] = e;
          }
        }),
        (e.addMonster = function (e) {
          if (null != e) {
            var t = e.getId();
            this.monsterList[t] = e;
          }
        }),
        (e.checkNPCRelaMissions = function (e, t) {
          void 0 === t && (t = !1);
          for (
            var i = o["default"].getProxy(a.ModName.Scene, a.ProxyType.Scene)
                .model.npcList,
              n = i.length,
              r = 0;
            n > r;
            r++
          ) {
            var s = i[r];
            null != s &&
              (1 == e && s.resetVisibleData(),
              s.checkRelaMissionVisible(),
              s.checkSetHidePlayer());
          }
          1 == e &&
            (this.hideMonsterNearMyPlayer(),
            o["default"].sendNt(d.SceneEvent.ON_CLEAR_ARROW_GUIDE)),
            o["default"].sendNt(d.SceneEvent.ON_NPC_UPDATE),
            o["default"].sendNt(k.MissionEvent.ON_MAIN_MISSION_UPDATE);
        }),
        (e.hideMonsterNearMyPlayer = function () {
          var e = o["default"].getProxy(a.ModName.Scene, a.ProxyType.Scene)
            .model.npcList;
          if (null != e) {
            var t = this.myPlayer;
            if (null != t)
              for (var i = t.getGx(), n = t.getGy(), r = 0; r < e.length; r++) {
                var l = e[r];
                if (null != l && l.npcType == s["default"].NPC_MONSTER) {
                  var u = Math.abs(i - l.sourceGx),
                    _ = Math.abs(n - l.sourceGy);
                  2 >= u + _ && l.hide(!1);
                }
              }
          }
        }),
        (e.getNPCList = function () {
          return o["default"].getProxy(a.ModName.Scene, a.ProxyType.Scene).model
            .npcList;
        }),
        (e.getCurMapCanAcceptMission = function () {
          var e = this.getNPCList();
          if (!e || !e.length) return null;
          var t;
          if (f["default"].isCityMap(this.orgMapID))
            for (
              var i = 0, o = g.GameText.DAILY_NPC_NAME_LIST;
              i < o.length;
              i++
            ) {
              var n = o[i],
                a = this.findNpc(null, !0, n);
              if (a && (t = a.getCanAcceptMission())) return t;
            }
          for (var r = [], s = 0, l = e; s < l.length; s++) {
            var a = l[s];
            if (
              !g.GameText.DAILY_NPC_NAME_LIST.includes(a.name) &&
              (t = a.getCanAcceptMission())
            ) {
              if (t.isHandUpMission()) {
                r.push(t);
                continue;
              }
              return t;
            }
          }
          return r.length ? r[0] : null;
        }),
        (e.getMissionById = function (e) {
          var t = this.getNPCList();
          if (t && t.length)
            for (var i = 0, o = t; i < o.length; i++) {
              var n = o[i];
              if (n.missions)
                for (var a = 0, r = n.missions; a < r.length; a++) {
                  var s = r[a];
                  if (s && s.id == e) return s;
                }
            }
          var l = this.myPlayer.missionList;
          if (l)
            for (var u = 0; u < l.length; u++) {
              var s = l[u];
              if (s && s.id == e) return s;
            }
          return null;
        }),
        (e.getNpcMissionById = function (e) {
          var t = this.getNPCList();
          if (!t || !t.length) return null;
          for (var i = 0, o = t; i < o.length; i++) {
            var n = o[i];
            if (n.isVisible() && n.isEnable()) {
              var a = n.getMissonById(e);
              if (a) return a;
            }
          }
          return null;
        }),
        (e.getNpcByID = function (e, t) {
          return this.findNpc(e, t);
        }),
        (e.getNpcByName = function (e, t) {
          return this.findNpc(null, t, e);
        }),
        (e.getNpcIdByName = function (t) {
          var i,
            o = e.getNpcByName(t, !0);
          return o && (i = o.id), i;
        }),
        (e.findNpc = function (e, t, i) {
          var n = o["default"].getProxy(a.ModName.Scene, a.ProxyType.Scene)
            .model.npcList;
          if (null == n) return null;
          for (var r, s = n.length, l = 0; s > l; l++)
            if (((r = n[l]), null != r && (!t || r.isVisible())))
              if (i) {
                if (r.name == i) return r;
              } else if (r.getId() == e) return r;
          return null;
        }),
        (e.getNPC = function (e, t) {
          var i = o["default"].getProxy(a.ModName.Scene, a.ProxyType.Scene)
            .model.npcList;
          if (null == i) return null;
          for (var n, r = i.length, l = 0; r > l; l++)
            if (((n = i[l]), null != n && n.isVisible()))
              if (n.npcType != s["default"].NPC_JUMP_MAP_AREA) {
                if (e == n.getGx() && t == n.getGy()) return n;
              } else if (n.isInJumpMapArea(e, t)) return n;
          return null;
        }),
        (e.getSkillById = function (e, t, i) {
          if (null == e) return null;
          for (var o = 0, n = e; o < n.length; o++) {
            var a = n[o];
            if (null != a && a.id == t && a.level == i) return a;
          }
          return null;
        }),
        (e.dogetResetItemNewInfo = function (t) {
          for (
            var i = "", o = e.dogetResetItemNewList(t), n = 0;
            n < o.length;
            n++
          ) {
            var a = o[n];
            a && (i += a.isStar ? "★" : "☆");
          }
          return i;
        }),
        (e.dogetResetItemNewList = function (e) {
          for (var t = [], i = Math.floor(e / 20), o = 0; i > o; o++) {
            var n = { isStar: !0 };
            t.push(n);
          }
          var a = e % 20;
          if (a > 0) {
            var n = { isStar: !1 };
            t.push(n);
          }
          return t.length > 5 ? t.slice(0, 5) : t;
        }),
        (e.doPetUseResetItemMenu = function (e, t, i, o) {
          if (null != e && null != t && null != i) {
            var n = e.bag;
            null != n &&
              p["default"].showModal(
                a.ModName.Pet,
                a.PetViewType.PetUseResetResult,
                { player: e, opePet: t, item: i, oldPet: o },
              );
          }
        }),
        (e.doPetAddSkill = function (e, t, i, o, n, r) {
          null != e &&
            null != i &&
            null != t &&
            null != o &&
            null != n &&
            p["default"].showModal(
              a.ModName.Pet,
              a.PetViewType.PetUseAddSkillResult,
              {
                player: e,
                opePet: t,
                receiveMsg: i,
                bag: o,
                item: n,
                opeItem: r,
              },
            );
        }),
        (e.doPetAddSkillSure = function (t, i, n, r, s) {
          return __awaiter(this, void 0, Promise, function () {
            var l, u, _, d, f, T, E, T, y;
            return __generator(this, function (g) {
              switch (g.label) {
                case 0:
                  return (
                    (l = e.myPlayer),
                    null == i || null == l
                      ? [2]
                      : ((u = l.bag),
                        null == u
                          ? [2]
                          : ((_ = new c.Message(
                              B["default"].CG_ITEM_PET_ADD_SKILL,
                            )),
                            _.putByte(i.getId()),
                            _.putBoolean(!0),
                            (d = o["default"].getProxy(
                              a.ModName.Pet,
                              a.ProxyType.Pet,
                            )),
                            [4, d.sendProtoAsync(_)]))
                  );
                case 1:
                  if ((g.sent(), (f = h["default"].getReceiveMsg()), null == f))
                    return [2];
                  for (T = 0; T < n.length; T++)
                    (E = n[T]), null != E && i.removeSkillSure(E);
                  for (T = 0; T < r.length; T++)
                    (y = r[T]), null != y && i.skillList.push(y);
                  return (
                    p["default"].showModal(
                      a.ModName.Pet,
                      a.PetViewType.PetUseAddSkillResult,
                      {
                        player: l,
                        opePet: i,
                        receiveMsg: f,
                        bag: u,
                        item: t,
                        opeItem: s,
                        newSkill: r,
                      },
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (e.getItemNameInfo = function (e, t) {
          for (var i = new Array(e.length), o = 0; o < i.length; o++) {
            var n = e[o];
            null != n
              ? 1 == t
                ? (i[o] =
                    n.name +
                    "(" +
                    v["default"].manageString(
                      g.GameText.getText(g.GameText.TI_LEVEL),
                      n.reqLv + "",
                    ) +
                    ")")
                : (i[o] =
                    n.name +
                    g.GameText.getText(g.GameText.TI_ITEM_X) +
                    n.quantity)
              : 1 == o
                ? (i[o] = g.GameText.STR_REPLACE_INLAY_GEM)
                : (i[o] = g.GameText.getText(g.GameText.TI_BACK));
          }
          return i;
        }),
        (e.isHaveGlobelControl = function (e) {
          if (null == this.globalControlList) return !1;
          for (var t = 0; t < this.globalControlList.size(); t++) {
            var i = this.globalControlList.elementAt(t);
            if (null != i && i.type == e) return !0;
          }
          return !1;
        }),
        (e.isLoginSetting = function (e) {
          return 0 != (this.loginSetting & e);
        }),
        (e.setLoginSetting = function (e, t) {
          this.loginSetting = T.Tool.setBit(e, t, this.loginSetting);
        }),
        (e.doQuickAddHP = function (t) {
          return __awaiter(this, void 0, void 0, function () {
            var i, o, n, a, r, s, u, _, d;
            return __generator(this, function (p) {
              switch (p.label) {
                case 0:
                  if (null == t) return [2];
                  if (t.isStateFull())
                    return L.Tips.show(g.GameText.STR_QUICK_ADDHP_FULL), [2];
                  if (
                    ((i = l["default"].getQuickHPItemVector(e.myPlayer)),
                    null == i || i.length <= 0)
                  )
                    return L.Tips.show(g.GameText.STR_QUICK_ADDHP_NO_ITEM), [2];
                  (o = !1), (n = new A["default"]()), (a = 0), (p.label = 1);
                case 1:
                  if (!(a < i.size())) return [3, 7];
                  if (((r = i.elementAt(a)), null == r)) return [3, 6];
                  (s = 0), (u = r.quantity), (_ = 0), (p.label = 2);
                case 2:
                  return u > _
                    ? [4, this.doWorldUseItemAction(e.myPlayer, r)]
                    : [3, 5];
                case 3:
                  if (((d = p.sent()), 0 == d)) return (o = !0), [3, 5];
                  if ((s++, t.isStateFull())) return (o = !0), [3, 5];
                  p.label = 4;
                case 4:
                  return _++, [3, 2];
                case 5:
                  if (
                    (n.append(
                      v["default"].manageString(
                        g.GameText.STR_QUICK_ADDHP_USE,
                        r.getNameInfo() +
                          g.GameText.getText(g.GameText.TI_ITEM_X) +
                          s +
                          "\n",
                      ),
                    ),
                    1 == o)
                  )
                    return [3, 7];
                  p.label = 6;
                case 6:
                  return a++, [3, 1];
                case 7:
                  return (
                    x["default"].release(i), L.Tips.show(n.toString()), [2]
                  );
              }
            });
          });
        }),
        (e.onOneKeyUseItem = function (t, i, o, n, a) {
          void 0 === i && (i = null),
            void 0 === o && (o = null),
            void 0 === n && (n = !0),
            e.doWorldUseItemAction(e.myPlayer, t, n, i, o, a, !0);
        }),
        (e.doWorldUseItemAction = function (e, t, i, n, r, s, l) {
          return (
            void 0 === i && (i = !1),
            void 0 === n && (n = null),
            void 0 === r && (r = null),
            void 0 === s && (s = 1),
            void 0 === l && (l = !1),
            __awaiter(this, void 0, Promise, function () {
              var u, _;
              return __generator(this, function (d) {
                switch (d.label) {
                  case 0:
                    return (
                      (u = o["default"].getProxy(
                        a.ModName.Bag,
                        a.ProxyType.Bag,
                      )),
                      this.itemId == t.id
                        ? [2, !1]
                        : ((this.itemId = t.id),
                          [4, u.doWorldUseItemAction(e, t, i, n, r, s, l)])
                    );
                  case 1:
                    return (_ = d.sent()), (this.itemId = null), [2, _];
                }
              });
            })
          );
        }),
        (e.doChangeJobCheck = function () {
          return !0;
        }),
        (e.getSuit = function (t) {
          return e.suitList[t];
        }),
        (e.addSuit = function (t, i) {
          null != i && (e.suitList[t] = i);
        }),
        (e.doGetItemSuit = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, r, s, l, u;
            return __generator(this, function (_) {
              switch (_.label) {
                case 0:
                  if (null == e || e.length <= 0) return [2];
                  for (t = [], i = 0; i < e.length; i++)
                    (n = e[i]),
                      null != n &&
                        ((r = n.getItemSetID()),
                        0 >= r || (null == this.getSuit(r) && t.push(r)));
                  return t.length <= 0
                    ? [2]
                    : ((s = h["default"].createGetSuitInfoMsg(t)),
                      (l = o["default"].getProxy(
                        a.ModName.Bag,
                        a.ProxyType.Bag,
                      )),
                      [4, l.sendProtoAsync(s)]);
                case 1:
                  return (
                    _.sent(),
                    (u = h["default"].getReceiveMsg()),
                    null == u
                      ? [2]
                      : (h["default"].processGetSuitInfoMsg(u), [2])
                  );
              }
            });
          });
        }),
        (e.getMoneyArrayValue = function (e, t) {
          if (
            (void 0 === t && (t = T.Tool.MAX_VALUE_int),
            null == e || e.length < 2)
          )
            return null;
          var i = [0, 0, 0];
          switch (e[0]) {
            case m.ModelConst.MONEY1:
              i[0] = T.Tool.sumValue(i[0], e[1], 0, t);
              break;
            case m.ModelConst.MONEY2:
              i[1] = T.Tool.sumValue(i[1], e[1], 0, t);
              break;
            case m.ModelConst.MONEY3:
              i[2] = T.Tool.sumValue(i[2], e[1], 0, t);
          }
          return i;
        }),
        (e.getSpeed = function (t) {
          return e.isAccelerate
            ? R["default"].DEFAULT_MOVE_SPEED * e.PALYER_MOVE
            : t == this.myPlayer
              ? this.myMoveSpeed
              : R["default"].DEFAULT_MOVE_SPEED;
        }),
        (e.updateMyMoveSpeed = function () {
          var e = this.myPlayer;
          if (null != e && null != e.bag) {
            this.myMoveSpeed = R["default"].DEFAULT_MOVE_SPEED;
            var t = e.bag.getItem(l["default"].ARMOR_TRANSPORT_POS);
            if (null != t) {
              var i = t.getPower1AndPower2(f["default"].POWER_TRANSPORT);
              i >= f["default"].GRID_WIDTH && (i = f["default"].GRID_WIDTH),
                i > 0 && (this.myMoveSpeed = i);
            }
          }
        }),
        (e.doAutoEquipUpdatedata = function (t) {
          if (null != t) {
            var i = e.myPlayer;
            if (null != i) {
              var o = i.bag;
              null == o
                ? ((o = new l["default"](i)), i.setBag(o))
                : o.clearEquipAndBagItem();
              var n = [];
              (n = h["default"].processDataPlayerItemMsg(t)),
                o.initBagItem(n),
                (i.skillList = h["default"].processDataPlayerSkillMsg(t, !0)),
                i.fromItemSetData(t),
                i.fromAutoEquipSkillData(t),
                i.setIcon1(t.getLong()),
                i.setIcon2(t.getLong()),
                i.setIcon3(t.getLong());
            }
          }
        }),
        (e.handleMyPlayerDurability = function (t, i) {
          var o = e.myPlayer;
          if (null != o) {
            this.handeBattleEndHp(i);
            var n = o.bag;
            null != n &&
              (n.checkEquipTimeItem(),
              n.handlePlayerDurability(t),
              o.checkHPMP());
          }
        }),
        (e.handleMyPetLife = function () {}),
        (e.handeBattleEndHp = function (t) {
          var i = e.myPlayer;
          if (null != i) {
            if (0 == t) {
              var o = i.getBagEquipPowerValue(f["default"].POWER_HPMP_RECOVER);
              if (o > 0) {
                T.Tool.debug("战斗结束回复hp mp百分比：" + o);
                var n = i.getPet();
                T.Tool.debug("player.hp:" + i.hp + ",player.mp:" + i.mp),
                  n && T.Tool.debug("pet.hp:" + n.hp + ",pet.mp:" + n.mp),
                  f["default"].addValuePlayer(
                    i,
                    m.ModelConst.HP,
                    o,
                    !0,
                    m.ModelConst.HPMAX,
                  ),
                  f["default"].addValuePlayer(
                    i,
                    m.ModelConst.MP,
                    o,
                    !0,
                    m.ModelConst.MPMAX,
                  ),
                  T.Tool.debug("player.hp:" + i.hp + ",player.mp:" + i.mp),
                  n && T.Tool.debug("pet.hp:" + n.hp + ",pet.mp:" + n.mp);
              }
            }
            1 == i.isDead() && this.hpRecover(i);
            var a = i.getPet();
            null != a && a.isDead() && this.hpRecover(a);
            var r = i.getMerList();
            if (null != r)
              for (var s = void 0, l = void 0, u = 0; u < r.length; u++)
                (s = r[u]),
                  null != s &&
                    (s.isDead() && this.hpRecover(s),
                    (l = s.getPet()),
                    null != l && l.isDead() && this.hpRecover(l));
          }
        }),
        (e.hpRecover = function (e) {
          if (null != e) {
            var t = 1;
            e.get(m.ModelConst.LEVEL) < 10 && (t = e.get(m.ModelConst.HPMAX)),
              (e.hp = t);
          }
        }),
        (e.doItemStarSelectMenu = function (t) {
          if (null != t) {
            var i = e.myPlayer;
            if (null != i) {
              var o = i.bag;
              null != o &&
                p["default"].showModal(
                  a.ModName.Bag,
                  a.BagViewType.ItemUpStar,
                  { player: i, item: t },
                );
            }
          }
        }),
        (e.doItemStarMenu = function (t, i, n, a) {
          return (
            void 0 === n && (n = !1),
            void 0 === a && (a = !1),
            __awaiter(this, void 0, Promise, function () {
              var r, s, l, u, _, d, h, f, T, E, S, I, m, A, C, P, R;
              return __generator(this, function (O) {
                switch (O.label) {
                  case 0:
                    return null == t
                      ? [2, ""]
                      : ((r = e.myPlayer),
                        null == r
                          ? [2, ""]
                          : ((s = r.bag),
                            null == s
                              ? [2, ""]
                              : ((l = ""),
                                i == e.ITEM_STAR_TYPE2,
                                (u = new c.Message(
                                  B["default"].CG_ASCENSION_STAR,
                                )),
                                u.putShort(t.slotPos),
                                u.putInt(t.id),
                                u.putByte(i),
                                [4, Y["default"].sendProtoAsync(u)])));
                  case 1:
                    if (((_ = O.sent()), null == _))
                      return console.error("receiveMsg == null"), [2, ""];
                    if (((d = _.getByte()), 0 > d))
                      return (
                        -10 == d
                          ? ((h = _.getString()),
                            (f = _.getShort()),
                            p["default"].alertMessage(
                              v["default"].manageString(
                                g.GameText.STR_ERROR_JUMP_SHOP_ASK,
                                h + "\n",
                              ),
                              g.GameText.getText(g.GameText.TI_WARM_SHOW),
                              U["default"].alloc(this, this.doErrorJumpShopOk, [
                                f,
                              ]),
                              null,
                            ))
                          : -7 == d
                            ? p["default"].alertMessage(_.getString())
                            : p["default"].alertMessage(_.getString()),
                        o["default"].sendNt(k.BagEvent.BAG_ITEM_STARINFO),
                        [2, ""]
                      );
                    if (i == e.ITEM_STAR_TYPE2) {
                      for (T = _.getByte(), E = 0; T > E; E++)
                        (S = _.getShort()),
                          (I = _.getByte()),
                          s.removeBagItemByPos(S, I);
                      T > 0 && o["default"].sendNt(k.BagEvent.BAG_ITEM_UPDATE),
                        (m = g.GameText.STR_ITEM_STAR_SUCCEE),
                        (A = _.getBoolean()),
                        A
                          ? (y["default"].fromBytes(_, t),
                            null != t &&
                              (r.bag.setItem(t, t.slotPos),
                              o["default"].sendNt(
                                k.BagEvent.BAG_EQUIPMENT_UPDATE,
                              )))
                          : (m = g.GameText.STR_ITEM_STAR_FAIL),
                        V["default"].delPromptMsg(),
                        V["default"].addPromptMsg(m),
                        p["default"].updateWorldPlayerInfoUI(),
                        o["default"].sendNt(k.BagEvent.BAG_ITEM_STARINFO);
                    } else
                      (C = _.getBoolean()),
                        C &&
                          ((P = _.getInt()),
                          (R = _.getInt()),
                          (l = a
                            ? e.doGetNextStarAttrData(t, _, R, i, !1, P)
                            : n
                              ? t.getRewardDesc() + "\n" + t.getDesc(r)
                              : e.doGetNextStarInfo(t, _, R, i, !1, P)));
                    return [2, l];
                }
              });
            })
          );
        }),
        (e.doItemUpgradeStarMenu = function (t, i, n) {
          return (
            void 0 === n && (n = !1),
            __awaiter(this, void 0, Promise, function () {
              var r, s, l, u, _, d, f, T, E, S, I, m, A, C, P, R, O;
              return __generator(this, function (N) {
                switch (N.label) {
                  case 0:
                    return null == t
                      ? [2, ""]
                      : ((r = e.myPlayer),
                        null == r
                          ? [2, ""]
                          : ((s = r.bag),
                            null == s
                              ? [2, ""]
                              : ((l = ""),
                                (u = new c.Message(
                                  B["default"].CG_ADVANCE_STAR,
                                )),
                                u.putShort(t.slotPos),
                                u.putInt(t.id),
                                u.putByte(i),
                                (_ = o["default"].getProxy(
                                  a.ModName.Bag,
                                  a.ProxyType.Bag,
                                )),
                                [4, _.sendProtoAsync(u)])));
                  case 1:
                    if (
                      (N.sent(), (u = h["default"].getReceiveMsg()), null == u)
                    )
                      return [2, ""];
                    if (((d = u.getByte()), 0 > d))
                      return (
                        -10 == d
                          ? ((f = u.getString()),
                            (T = u.getShort()),
                            p["default"].alertMessage(
                              v["default"].manageString(
                                g.GameText.STR_ERROR_JUMP_SHOP_ASK,
                                f + "\n",
                              ),
                              g.GameText.getText(g.GameText.TI_WARM_SHOW),
                              U["default"].alloc(this, this.doErrorJumpShopOk, [
                                T,
                              ]),
                              null,
                            ))
                          : -7 == d
                            ? p["default"].alertMessage(u.getString())
                            : p["default"].alertMessage(u.getString()),
                        [2, ""]
                      );
                    if (i == e.ITEM_STAR_TYPE2) {
                      for (E = u.getByte(), S = 0; E > S; S++)
                        (I = u.getShort()),
                          (m = u.getByte()),
                          m > 0 && s.removeBagItemByPos(I, m);
                      if (
                        (_.sendNt(k.BagEvent.BAG_ITEM_UPDATE),
                        (A = H.GameText2.STR_ITEM_UPGRADE_STAR_SUCCEE),
                        (C = u.getBoolean()))
                      ) {
                        try {
                          y["default"].fromItemAscensionUpgradeStarInfo(t, u);
                        } catch (M) {}
                        null != t &&
                          (r.bag.setItem(t, t.slotPos),
                          _.sendNt(k.BagEvent.BAG_EQUIPMENT_UPDATE));
                      } else A = H.GameText2.STR_ITEM_UPGRADE_STAR_FAIL;
                      V["default"].delPromptMsg(),
                        V["default"].addPromptMsg(A),
                        p["default"].updateWorldPlayerInfoUI(),
                        _.sendNt(k.BagEvent.BAG_ITEM_STARINFO);
                    } else
                      (P = u.getBoolean()),
                        P &&
                          ((R = u.getInt()),
                          (O = u.getInt()),
                          (l = n
                            ? e.doGetNextUpgradeStarAttrData(t, u, O, i, R)
                            : e.doGetNextUpgradeStarInfo(t, u, O, i, R)));
                    return [2, l];
                }
              });
            })
          );
        }),
        (e.doItemStarMenuSelect = function (e, t, i, o) {}),
        (e.doItemStar = function (e, t, i, o) {}),
        (e.doItemUpgradeStarMenuSelect = function (e, t, i, o) {}),
        (e.doGetNextStarInfo = function (t, i, o, n, a, r) {
          var s = e.myPlayer;
          if (null == s) return "";
          var l = s.bag;
          if (null == l) return "";
          var u = (t.getItemClass(), new A["default"]());
          n == e.ITEM_STAR_TYPE3 && u.append(g.GameText.STR_ITEM_STAR_BIND),
            u.append(t.getRewardDesc() + "\n");
          var _ = i.getByte(),
            d = i.getByte(),
            p = i.getByte(),
            c = i.getShort(),
            h = i.getShort(),
            E = i.getShort(),
            v = i.getShort(),
            S = i.getShort(),
            I = i.getShort(),
            m = i.getShort(),
            C = i.getShort();
          if (
            (n == e.ITEM_STAR_TYPE1
              ? u.append(
                  T.Tool.manageString(g.GameText.STR_ITEM_STAR_NUM, [
                    e.getStarInfo(t.star, t.ascensionStar),
                    e.getStarInfo(_, t.ascensionStar),
                  ]),
                )
              : n == e.ITEM_STAR_TYPE3 &&
                (u.append(g.GameText.STR_ITEM_STAR_CHANGE),
                u.append(
                  g.GameText.getText(g.GameText.TI_ACTIVATE) +
                    ": " +
                    e.getStarInfo(_, t.ascensionStar) +
                    "\n",
                )),
            0 != c &&
              u.append(
                T.Tool.manageString(g.GameText.STR_ITEM_STAR_DEF_STR, [
                  t.def_str + "",
                  D["default"].makeColorString(
                    c + "",
                    e.getItemStarFontColor(t.def_str, c),
                  ),
                ]),
              ),
            0 != h &&
              u.append(
                T.Tool.manageString(g.GameText.STR_ITEM_STAR_DEF_AGI, [
                  t.def_agi + "",
                  D["default"].makeColorString(
                    h + "",
                    e.getItemStarFontColor(t.def_agi, h),
                  ),
                ]),
              ),
            0 != E &&
              u.append(
                T.Tool.manageString(g.GameText.STR_ITEM_STAR_DEF_MAG, [
                  t.def_mag + "",
                  D["default"].makeColorString(
                    E + "",
                    e.getItemStarFontColor(t.def_mag, E),
                  ),
                ]),
              ),
            0 != v && 0 != t.power1 && t.isAscension(t.power1))
          ) {
            var P = y["default"].getpowerValueAdd(
              t.powerValue1,
              t.ascensionStar,
              t.star,
              t.isBinded(),
              t.isAscension(t.power1),
            );
            u.append(
              T.Tool.manageString(g.GameText.STR_ITEM_STAR_POWERVALUE1, [
                f["default"].getPowerDesc(t.power1, P),
                D["default"].makeColorString(
                  f["default"].getPowerDesc(t.power1, v),
                  e.getItemStarFontColor(P, v),
                ),
              ]),
            );
          }
          if (0 != S && 0 != t.power2 && t.isAscension(t.power2)) {
            var R = y["default"].getpowerValueAdd(
              t.powerValue2,
              t.ascensionStar,
              t.star,
              t.isBinded(),
              t.isAscension(t.power2),
            );
            u.append(
              T.Tool.manageString(g.GameText.STR_ITEM_STAR_POWERVALUE2, [
                f["default"].getPowerDesc(t.power2, R),
                D["default"].makeColorString(
                  f["default"].getPowerDesc(t.power2, S),
                  e.getItemStarFontColor(R, S),
                ),
              ]),
            );
          }
          if (0 != I && 0 != t.power3 && t.isAscension(t.power3)) {
            var O = y["default"].getpowerValueAdd(
              t.powerValue3,
              t.ascensionStar,
              t.star,
              t.isBinded(),
              t.isAscension(t.power3),
            );
            u.append(
              T.Tool.manageString(g.GameText.STR_ITEM_STAR_POWERVALUE3, [
                f["default"].getPowerDesc(t.power3, O),
                D["default"].makeColorString(
                  f["default"].getPowerDesc(t.power3, I),
                  e.getItemStarFontColor(O, I),
                ),
              ]),
            );
          }
          if (0 != m && 0 != t.bindPower1 && t.isAscension(t.bindPower1)) {
            var N = y["default"].getpowerValueAdd(
              t.bindPowerValue1,
              t.ascensionStar,
              t.star,
              t.isBinded(),
              t.isAscension(t.bindPower1),
            );
            u.append(
              T.Tool.manageString(g.GameText.STR_ITEM_STAR_BINDPOWER1, [
                f["default"].getPowerDesc(t.bindPower1, N),
                D["default"].makeColorString(
                  f["default"].getPowerDesc(t.bindPower1, m),
                  e.getItemStarFontColor(N, m),
                ),
              ]),
            );
          }
          if (0 != C && 0 != t.bindPower2 && t.isAscension(t.bindPower2)) {
            var M = y["default"].getpowerValueAdd(
              t.bindPowerValue2,
              t.ascensionStar,
              t.star,
              t.isBinded(),
              t.isAscension(t.bindPower2),
            );
            u.append(
              T.Tool.manageString(g.GameText.STR_ITEM_STAR_BINDPOWER2, [
                f["default"].getPowerDesc(t.bindPower2, M),
                D["default"].makeColorString(
                  f["default"].getPowerDesc(t.bindPower2, C),
                  e.getItemStarFontColor(M, C),
                ),
              ]),
            );
          }
          n == e.ITEM_STAR_TYPE3 &&
            ((t.star = _), (t.def_str = c), (t.def_agi = h), (t.def_mag = E));
          var L = i.getBoolean();
          if (L) {
            var w = i.getShort(),
              b = i.getShort();
            0 != b &&
              u.append(
                T.Tool.manageString(g.GameText.STR_ITEM_STAR_ATK, [
                  t.atkMin + "~" + t.atkMax,
                  D["default"].makeColorString(
                    w + "~" + b,
                    e.getItemStarFontColor(t.atkMax, b),
                  ),
                ]),
              ),
              n == e.ITEM_STAR_TYPE3 &&
                ((t.atkMin = w),
                (t.atkMax = b),
                null != t && l.setItem(t, t.slotPos));
          }
          var x = i.getShort(),
            B = i.getShort(),
            G = i.getShort(),
            U = i.getShort();
          if (
            ((t.upgradeAscensionStar = i.getByte()),
            (t.upgradeStar = i.getByte()),
            a)
          ) {
            var k = 4177151,
              V = 0;
            if (
              ((V = t.upgradeStar + 1),
              n == e.ITEM_STAR_TYPE1
                ? u.append(
                    T.Tool.manageString(H.GameText2.STR_ITEM_UPGRADESTAR_NUM, [
                      D["default"].makeColorString(
                        e.getStarInfo(t.upgradeStar, t.upgradeAscensionStar),
                        k,
                      ),
                      D["default"].makeColorString(
                        e.getStarInfo(V, t.upgradeAscensionStar),
                        k,
                      ),
                    ]),
                  )
                : n == e.ITEM_STAR_TYPE3 &&
                  (u.append(g.GameText.STR_ITEM_STAR_CHANGE),
                  u.append(
                    g.GameText.getText(g.GameText.TI_ACTIVATE) +
                      ": " +
                      e.getStarInfo(t.upgradeStar, t.upgradeAscensionStar) +
                      "\n",
                  )),
              0 != x && 0 != t.power4 && t.isAscension(t.power4))
            ) {
              var F = y["default"].getpowerValueAdd(
                t.powerValue4,
                t.upgradeAscensionStar,
                t.upgradeStar,
                t.isBinded(),
                t.isAscension(t.power4),
              );
              u.append(
                T.Tool.manageString(H.GameText2.STR_ITEM_STAR_POWERVALUE4, [
                  D["default"].makeColorString(
                    f["default"].getPowerDesc(t.power4, F),
                    k,
                  ),
                  D["default"].makeColorString(
                    f["default"].getPowerDesc(t.power4, x),
                    e.getItemStarFontColor(F, x),
                  ),
                ]),
              );
            }
            if (0 != B && 0 != t.power5 && t.isAscension(t.power5)) {
              var Y = y["default"].getpowerValueAdd(
                t.powerValue5,
                t.upgradeAscensionStar,
                t.upgradeStar,
                t.isBinded(),
                t.isAscension(t.power5),
              );
              u.append(
                T.Tool.manageString(H.GameText2.STR_ITEM_STAR_POWERVALUE5, [
                  D["default"].makeColorString(
                    f["default"].getPowerDesc(t.power5, Y),
                    k,
                  ),
                  D["default"].makeColorString(
                    f["default"].getPowerDesc(t.power5, B),
                    e.getItemStarFontColor(Y, B),
                  ),
                ]),
              );
            }
            if (0 != G && 0 != t.power6 && t.isAscension(t.power6)) {
              var W = y["default"].getpowerValueAdd(
                t.powerValue6,
                t.upgradeAscensionStar,
                t.upgradeStar,
                t.isBinded(),
                t.isAscension(t.power6),
              );
              u.append(
                T.Tool.manageString(H.GameText2.STR_ITEM_STAR_POWERVALUE6, [
                  f["default"].getPowerDesc(t.power6, W),
                  D["default"].makeColorString(
                    f["default"].getPowerDesc(t.power6, G),
                    e.getItemStarFontColor(W, G),
                  ),
                ]),
              );
            }
            if (0 != U && 0 != t.power7 && t.isAscension(t.power7)) {
              var K = y["default"].getpowerValueAdd(
                t.powerValue7,
                t.upgradeAscensionStar,
                t.upgradeStar,
                t.isBinded(),
                t.isAscension(t.power7),
              );
              u.append(
                T.Tool.manageString(H.GameText2.STR_ITEM_STAR_POWERVALUE7, [
                  f["default"].getPowerDesc(t.power7, K),
                  D["default"].makeColorString(
                    f["default"].getPowerDesc(t.power7, U),
                    e.getItemStarFontColor(K, U),
                  ),
                ]),
              );
            }
          }
          return (
            n == e.ITEM_STAR_TYPE1 &&
              (u.append(
                T.Tool.manageString("\n" + g.GameText.STR_ITEM_STAR_COUNT, [
                  r + "",
                  o + "",
                ]),
              ),
              u.append(
                T.Tool.manageString(g.GameText.STR_ITEM_STAR_USE_INFO2, [
                  d.toString(),
                  p.toString(),
                ]),
              )),
            u.toString()
          );
        }),
        (e.doGetNextStarAttrData = function (t, i, n, a, r, s) {
          var l = e.myPlayer;
          if (null == l) return "";
          var u = l.bag;
          if (null == u) return "";
          var _ = (t.getItemClass(), new A["default"]()),
            d = [],
            p = new z["default"]();
          a == e.ITEM_STAR_TYPE3 &&
            ((p.title = g.GameText.STR_ITEM_STAR_BIND), d.push(p));
          var c = i.getByte(),
            h = i.getByte(),
            E = i.getByte(),
            v = i.getShort(),
            S = i.getShort(),
            I = i.getShort(),
            m = i.getShort(),
            C = i.getShort(),
            P = i.getShort(),
            R = i.getShort(),
            O = i.getShort();
          if (
            (a == e.ITEM_STAR_TYPE1
              ? ((p = new z["default"]()),
                (p.title = "强    化:"),
                (p.isUpStar = !1),
                (p.isUp = !0),
                (p.oldStar = t.star),
                (p.newStar = c),
                d.push(p))
              : a == e.ITEM_STAR_TYPE3 &&
                ((p = new z["default"]()),
                (p.title = g.GameText.STR_ITEM_STAR_CHANGE),
                d.push(p),
                (p = new z["default"]()),
                (p.title = g.GameText.getText(g.GameText.TI_ACTIVATE) + ":"),
                (p.isUpStar = !1),
                (p.isUp = !0),
                (p.oldStar = 0),
                (p.newStar = c),
                d.push(p)),
            0 != v &&
              ((p = new z["default"]()),
              (p.title = "劈砍护甲:"),
              (p.textOld = t.def_str.toString()),
              (p.textNew = D["default"].makeColorString(
                v + "",
                e.getItemStarFontColor(t.def_str, v),
              )),
              (p.isUp = v >= t.def_str),
              d.push(p)),
            0 != S &&
              ((p = new z["default"]()),
              (p.title = "穿刺护甲:"),
              (p.textOld = t.def_agi.toString()),
              (p.textNew = D["default"].makeColorString(
                S + "",
                e.getItemStarFontColor(t.def_agi, S),
              )),
              (p.isUp = S >= t.def_agi),
              d.push(p)),
            0 != I &&
              ((p = new z["default"]()),
              (p.title = "魔法护甲:"),
              (p.textOld = t.def_mag.toString()),
              (p.textNew = D["default"].makeColorString(
                I + "",
                e.getItemStarFontColor(t.def_mag, I),
              )),
              (p.isUp = I >= t.def_mag),
              d.push(p)),
            0 != m && 0 != t.power1 && t.isAscension(t.power1))
          ) {
            var N = y["default"].getpowerValueAdd(
              t.powerValue1,
              t.ascensionStar,
              t.star,
              t.isBinded(),
              t.isAscension(t.power1),
            );
            (p = new z["default"]()),
              (p.title = "效    果1:"),
              (p.textOld = f["default"].getPowerDesc(t.power1, N)),
              (p.textNew = D["default"].makeColorString(
                f["default"].getPowerDesc(t.power1, m),
                e.getItemStarFontColor(N, m),
              )),
              (p.isUp = m >= N),
              d.push(p);
          }
          if (0 != C && 0 != t.power2 && t.isAscension(t.power2)) {
            var M = y["default"].getpowerValueAdd(
              t.powerValue2,
              t.ascensionStar,
              t.star,
              t.isBinded(),
              t.isAscension(t.power2),
            );
            (p = new z["default"]()),
              (p.title = "效    果2:"),
              (p.textOld = f["default"].getPowerDesc(t.power2, M)),
              (p.textNew = D["default"].makeColorString(
                f["default"].getPowerDesc(t.power2, C),
                e.getItemStarFontColor(M, C),
              )),
              (p.isUp = C >= M),
              d.push(p);
          }
          if (0 != P && 0 != t.power3 && t.isAscension(t.power3)) {
            var L = y["default"].getpowerValueAdd(
              t.powerValue3,
              t.ascensionStar,
              t.star,
              t.isBinded(),
              t.isAscension(t.power3),
            );
            (p = new z["default"]()),
              (p.title = "效    果3:"),
              (p.textOld = f["default"].getPowerDesc(t.power3, L)),
              (p.textNew = D["default"].makeColorString(
                f["default"].getPowerDesc(t.power3, P),
                e.getItemStarFontColor(L, P),
              )),
              (p.isUp = P >= L),
              d.push(p);
          }
          if (0 != R && 0 != t.bindPower1 && t.isAscension(t.bindPower1)) {
            var w = y["default"].getpowerValueAdd(
              t.bindPowerValue1,
              t.ascensionStar,
              t.star,
              t.isBinded(),
              t.isAscension(t.bindPower1),
            );
            (p = new z["default"]()),
              (p.title = "绑定效果1:"),
              (p.textOld = f["default"].getPowerDesc(t.bindPower1, w)),
              (p.textNew = D["default"].makeColorString(
                f["default"].getPowerDesc(t.bindPower1, R),
                e.getItemStarFontColor(w, R),
              )),
              (p.isUp = R >= w),
              d.push(p);
          }
          if (0 != O && 0 != t.bindPower2 && t.isAscension(t.bindPower2)) {
            var b = y["default"].getpowerValueAdd(
              t.bindPowerValue2,
              t.ascensionStar,
              t.star,
              t.isBinded(),
              t.isAscension(t.bindPower2),
            );
            (p = new z["default"]()),
              (p.title = "绑定效果2:"),
              (p.textOld = f["default"].getPowerDesc(t.bindPower2, b)),
              (p.textNew = D["default"].makeColorString(
                f["default"].getPowerDesc(t.bindPower2, O),
                e.getItemStarFontColor(b, O),
              )),
              (p.isUp = O >= b),
              d.push(p);
          }
          a == e.ITEM_STAR_TYPE3 &&
            ((t.star = c), (t.def_str = v), (t.def_agi = S), (t.def_mag = I));
          var x = i.getBoolean();
          if (x) {
            var B = i.getShort(),
              G = i.getShort();
            0 != G &&
              ((p = new z["default"]()),
              (p.title = "攻    击:"),
              (p.textOld = t.atkMin + "~" + t.atkMax),
              (p.textNew = D["default"].makeColorString(
                B + "~" + G,
                e.getItemStarFontColor(t.atkMax, G),
              )),
              (p.isUp = G >= t.atkMax),
              d.push(p)),
              a == e.ITEM_STAR_TYPE3 &&
                ((t.atkMin = B),
                (t.atkMax = G),
                null != t && u.setItem(t, t.slotPos));
          }
          var U = i.getShort(),
            V = i.getShort(),
            H = i.getShort(),
            F = i.getShort();
          if (
            ((t.upgradeAscensionStar = i.getByte()),
            (t.upgradeStar = i.getByte()),
            r)
          ) {
            var Y = 4177151,
              W = 0;
            if (
              ((W = t.upgradeStar + 1),
              a == e.ITEM_STAR_TYPE1
                ? ((p = new z["default"]()),
                  (p.title = "进阶强化:"),
                  (p.isUp = !0),
                  (p.isUpStar = !0),
                  (p.oldStar = t.upgradeStar),
                  (p.newStar = W),
                  d.push(p))
                : a == e.ITEM_STAR_TYPE3 &&
                  ((p = new z["default"]()),
                  (p.title = "性质变化如下:"),
                  d.push(p),
                  (p = new z["default"]()),
                  (p.title = g.GameText.getText(g.GameText.TI_ACTIVATE) + ":"),
                  (p.isUp = !0),
                  (p.isUpStar = !0),
                  (p.oldStar = 0),
                  (p.newStar = t.upgradeStar),
                  d.push(p)),
              0 != U && 0 != t.power4 && t.isAscension(t.power4))
            ) {
              var K = y["default"].getpowerValueAdd(
                t.powerValue4,
                t.upgradeAscensionStar,
                t.upgradeStar,
                t.isBinded(),
                t.isAscension(t.power4),
              );
              (p = new z["default"]()),
                (p.title = "进阶效果1:"),
                (p.textOld = D["default"].makeColorString(
                  f["default"].getPowerDesc(t.power4, K),
                  Y,
                )),
                (p.textNew = D["default"].makeColorString(
                  f["default"].getPowerDesc(t.power4, U),
                  e.getItemStarFontColor(K, U),
                )),
                (p.isUp = U >= K),
                d.push(p);
            }
            if (0 != V && 0 != t.power5 && t.isAscension(t.power5)) {
              var j = y["default"].getpowerValueAdd(
                t.powerValue5,
                t.upgradeAscensionStar,
                t.upgradeStar,
                t.isBinded(),
                t.isAscension(t.power5),
              );
              (p = new z["default"]()),
                (p.title = "进阶效果2:"),
                (p.textOld = D["default"].makeColorString(
                  f["default"].getPowerDesc(t.power5, j),
                  Y,
                )),
                (p.textNew = D["default"].makeColorString(
                  f["default"].getPowerDesc(t.power5, V),
                  e.getItemStarFontColor(j, V),
                )),
                (p.isUp = V >= j),
                d.push(p);
            }
            if (0 != H && 0 != t.power6 && t.isAscension(t.power6)) {
              var q = y["default"].getpowerValueAdd(
                t.powerValue6,
                t.upgradeAscensionStar,
                t.upgradeStar,
                t.isBinded(),
                t.isAscension(t.power6),
              );
              (p = new z["default"]()),
                (p.title = "进阶效果3:"),
                (p.textOld = f["default"].getPowerDesc(t.power6, q)),
                (p.textNew = D["default"].makeColorString(
                  f["default"].getPowerDesc(t.power6, H),
                  e.getItemStarFontColor(q, H),
                )),
                (p.isUp = H >= q),
                d.push(p);
            }
            if (0 != F && 0 != t.power7 && t.isAscension(t.power7)) {
              var X = y["default"].getpowerValueAdd(
                t.powerValue7,
                t.upgradeAscensionStar,
                t.upgradeStar,
                t.isBinded(),
                t.isAscension(t.power7),
              );
              (p = new z["default"]()),
                (p.title = "进阶效果4:"),
                (p.textOld = f["default"].getPowerDesc(t.power7, X)),
                (p.textNew = D["default"].makeColorString(
                  f["default"].getPowerDesc(t.power7, F),
                  e.getItemStarFontColor(X, F),
                )),
                (p.isUp = F >= X),
                d.push(p);
            }
          }
          return (
            a == e.ITEM_STAR_TYPE1 &&
              (_.append(
                T.Tool.manageString("\n" + g.GameText.STR_ITEM_STAR_COUNT, [
                  s + "",
                  n + "",
                ]),
              ),
              0 == E
                ? _.append(
                    T.Tool.manageString(
                      g.GameText.STR_ITEM_STAR_USE_INFO,
                      h + "",
                    ),
                  )
                : _.append(
                    T.Tool.manageString(g.GameText.STR_ITEM_STAR_USE_INFO2, [
                      h.toString(),
                      E.toString(),
                    ]),
                  )),
            o["default"].sendNt(k.BagEvent.BAG_ITEM_STARATTR, d),
            _.toString()
          );
        }),
        (e.doGetNextUpgradeStarInfo = function (t, i, o, n, a) {
          if (null == t || null == i) return "";
          var r = e.myPlayer;
          if (null == r) return "";
          var s = r.bag;
          if (null == s) return "";
          var l = (t.getItemClass(), new A["default"]());
          n == e.ITEM_STAR_TYPE3 && l.append(g.GameText.STR_ITEM_STAR_BIND),
            l.append(t.getRewardDesc() + "\n");
          var u = (i.getByte(), i.getByte()),
            _ = i.getByte(),
            d =
              (i.getShort(),
              i.getShort(),
              i.getShort(),
              i.getShort(),
              i.getShort(),
              i.getShort(),
              i.getShort(),
              i.getShort(),
              i.getBoolean());
          if (d) {
            var p = i.getShort(),
              c = i.getShort();
            0 != c &&
              l.append(
                T.Tool.manageString(g.GameText.STR_ITEM_STAR_ATK, [
                  t.atkMin + "~" + t.atkMax,
                  D["default"].makeColorString(
                    p + "~" + c,
                    e.getItemStarFontColor(t.atkMax, c),
                  ),
                ]),
              ),
              n == e.ITEM_STAR_TYPE3 &&
                ((t.atkMin = p),
                (t.atkMax = c),
                null != t && s.setItem(t, t.slotPos));
          }
          var h = i.getShort(),
            E = i.getShort(),
            v = i.getShort(),
            S = i.getShort();
          (t.upgradeAscensionStar = i.getByte()),
            (t.upgradeStar = i.getByte()),
            n == e.ITEM_STAR_TYPE3 &&
              ((t.powerValue4 = h),
              (t.powerValue5 = E),
              (t.powerValue6 = v),
              (t.powerValue7 = S));
          var I = 0;
          if (((I = t.upgradeStar + 1), n == e.ITEM_STAR_TYPE1)) {
            var m = 4177151;
            l.append(
              T.Tool.manageString(H.GameText2.STR_ITEM_UPGRADESTAR_NUM, [
                D["default"].makeColorString(
                  e.getStarInfo(t.upgradeStar, t.upgradeAscensionStar) + "",
                  m,
                ),
                D["default"].makeColorString(
                  e.getStarInfo(I, t.upgradeAscensionStar) + "",
                  m,
                ),
              ]),
            );
          } else
            n == e.ITEM_STAR_TYPE3 &&
              (l.append(g.GameText.STR_ITEM_STAR_CHANGE),
              l.append(
                g.GameText.getText(g.GameText.TI_ACTIVATE) +
                  ": " +
                  e.getStarInfo(t.upgradeStar, t.upgradeAscensionStar) +
                  "\n",
              ));
          if (0 != h && 0 != t.power4 && t.isAscension(t.power4)) {
            var C = y["default"].getpowerValueAdd(
              t.powerValue4,
              t.upgradeAscensionStar,
              t.upgradeStar,
              t.isBinded(),
              t.isAscension(t.power4),
            );
            l.append(
              T.Tool.manageString(H.GameText2.STR_ITEM_STAR_POWERVALUE4, [
                f["default"].getPowerDesc(t.power4, C),
                D["default"].makeColorString(
                  f["default"].getPowerDesc(t.power4, h),
                  e.getItemStarFontColor(C, h),
                ),
              ]),
            );
          }
          if (0 != E && 0 != t.power5 && t.isAscension(t.power5)) {
            var P = y["default"].getpowerValueAdd(
              t.powerValue5,
              t.upgradeAscensionStar,
              t.upgradeStar,
              t.isBinded(),
              t.isAscension(t.power5),
            );
            l.append(
              T.Tool.manageString(H.GameText2.STR_ITEM_STAR_POWERVALUE5, [
                f["default"].getPowerDesc(t.power5, P),
                D["default"].makeColorString(
                  f["default"].getPowerDesc(t.power5, E),
                  e.getItemStarFontColor(P, E),
                ),
              ]),
            );
          }
          if (0 != v && 0 != t.power6 && t.isAscension(t.power6)) {
            var R = y["default"].getpowerValueAdd(
              t.powerValue6,
              t.upgradeAscensionStar,
              t.upgradeStar,
              t.isBinded(),
              t.isAscension(t.power6),
            );
            l.append(
              T.Tool.manageString(H.GameText2.STR_ITEM_STAR_POWERVALUE6, [
                f["default"].getPowerDesc(t.power6, R),
                D["default"].makeColorString(
                  f["default"].getPowerDesc(t.power6, v),
                  e.getItemStarFontColor(R, v),
                ),
              ]),
            );
          }
          if (0 != S && 0 != t.power7 && t.isAscension(t.power7)) {
            var O = y["default"].getpowerValueAdd(
              t.powerValue7,
              t.upgradeAscensionStar,
              t.upgradeStar,
              t.isBinded(),
              t.isAscension(t.power7),
            );
            l.append(
              T.Tool.manageString(H.GameText2.STR_ITEM_STAR_POWERVALUE7, [
                f["default"].getPowerDesc(t.power7, O),
                D["default"].makeColorString(
                  f["default"].getPowerDesc(t.power7, S),
                  e.getItemStarFontColor(O, S),
                ),
              ]),
            );
          }
          return (
            n == e.ITEM_STAR_TYPE1 &&
              (l.append(
                T.Tool.manageString(
                  "\n" + H.GameText2.STR_ITEM_UPGRADESTAR_COUNT,
                  [a + "", o + ""],
                ),
              ),
              l.append(
                T.Tool.manageString(g.GameText.STR_ITEM_STAR_USE_INFO2, [
                  u.toString(),
                  _.toString(),
                ]),
              )),
            l.toString()
          );
        }),
        (e.doGetNextUpgradeStarAttrData = function (t, i, n, a, r) {
          if (null == t || null == i) return "";
          var s = e.myPlayer;
          if (null == s) return "";
          var l = s.bag;
          if (null == l) return "";
          var u = (t.getItemClass(), new A["default"]()),
            _ = new z["default"](),
            d = [];
          a == e.ITEM_STAR_TYPE3 &&
            ((_.title = g.GameText.STR_ITEM_STAR_BIND), d.push(_));
          var p = (i.getByte(), i.getByte()),
            c = i.getByte(),
            h =
              (i.getShort(),
              i.getShort(),
              i.getShort(),
              i.getShort(),
              i.getShort(),
              i.getShort(),
              i.getShort(),
              i.getShort(),
              i.getBoolean());
          if (h) {
            var E = i.getShort(),
              v = i.getShort();
            0 != v &&
              ((_ = new z["default"]()),
              (_.textOld = t.atkMin + "~" + t.atkMax),
              (_.textNew = D["default"].makeColorString(
                E + "~" + v,
                e.getItemStarFontColor(t.atkMax, v),
              )),
              (_.isUp = v >= t.atkMax),
              d.push(_)),
              a == e.ITEM_STAR_TYPE3 &&
                ((t.atkMin = E),
                (t.atkMax = v),
                null != t && l.setItem(t, t.slotPos));
          }
          var S = i.getShort(),
            I = i.getShort(),
            m = i.getShort(),
            C = i.getShort();
          (t.upgradeAscensionStar = i.getByte()),
            (t.upgradeStar = i.getByte()),
            a == e.ITEM_STAR_TYPE3 &&
              ((t.powerValue4 = S),
              (t.powerValue5 = I),
              (t.powerValue6 = m),
              (t.powerValue7 = C));
          var P = 0;
          if (((P = t.upgradeStar + 1), a == e.ITEM_STAR_TYPE1)) {
            (_ = new z["default"]()),
              (_.title = "进阶强化:"),
              (_.oldStar = t.upgradeStar),
              (_.newStar = P),
              (_.isUp = !0),
              (_.isUpStar = !0),
              d.push(_);
          } else
            a == e.ITEM_STAR_TYPE3 &&
              ((_ = new z["default"]()),
              (_.title = g.GameText.STR_ITEM_STAR_CHANGE),
              d.push(_),
              (_ = new z["default"]()),
              (_.title = g.GameText.getText(g.GameText.TI_ACTIVATE) + ":"),
              (_.oldStar = 0),
              (_.newStar = t.upgradeStar),
              (_.isUp = !0),
              (_.isUpStar = !0),
              d.push(_));
          if (0 != S && 0 != t.power4 && t.isAscension(t.power4)) {
            var R = y["default"].getpowerValueAdd(
              t.powerValue4,
              t.upgradeAscensionStar,
              t.upgradeStar,
              t.isBinded(),
              t.isAscension(t.power4),
            );
            (_ = new z["default"]()),
              (_.title = "进阶效果1:"),
              (_.textOld = f["default"].getPowerDesc(t.power4, R)),
              (_.textNew = D["default"].makeColorString(
                f["default"].getPowerDesc(t.power4, S),
                e.getItemStarFontColor(R, S),
              )),
              (_.isUp = S >= R),
              d.push(_);
          }
          if (0 != I && 0 != t.power5 && t.isAscension(t.power5)) {
            var O = y["default"].getpowerValueAdd(
              t.powerValue5,
              t.upgradeAscensionStar,
              t.upgradeStar,
              t.isBinded(),
              t.isAscension(t.power5),
            );
            (_ = new z["default"]()),
              (_.title = "进阶效果2:"),
              (_.textOld = f["default"].getPowerDesc(t.power5, O)),
              (_.textNew = D["default"].makeColorString(
                f["default"].getPowerDesc(t.power5, I),
                e.getItemStarFontColor(O, I),
              )),
              (_.isUp = I >= O),
              d.push(_);
          }
          if (0 != m && 0 != t.power6 && t.isAscension(t.power6)) {
            var N = y["default"].getpowerValueAdd(
              t.powerValue6,
              t.upgradeAscensionStar,
              t.upgradeStar,
              t.isBinded(),
              t.isAscension(t.power6),
            );
            (_ = new z["default"]()),
              (_.title = "进阶效果3:"),
              (_.textOld = f["default"].getPowerDesc(t.power6, N)),
              (_.textNew = D["default"].makeColorString(
                f["default"].getPowerDesc(t.power6, m),
                e.getItemStarFontColor(N, m),
              )),
              (_.isUp = m >= N),
              d.push(_);
          }
          if (0 != C && 0 != t.power7 && t.isAscension(t.power7)) {
            var M = y["default"].getpowerValueAdd(
              t.powerValue7,
              t.upgradeAscensionStar,
              t.upgradeStar,
              t.isBinded(),
              t.isAscension(t.power7),
            );
            (_ = new z["default"]()),
              (_.title = "进阶效果4:"),
              (_.textOld = f["default"].getPowerDesc(t.power7, M)),
              (_.textNew = D["default"].makeColorString(
                f["default"].getPowerDesc(t.power7, C),
                e.getItemStarFontColor(M, C),
              )),
              (_.isUp = C >= M),
              d.push(_);
          }
          return (
            a == e.ITEM_STAR_TYPE1 &&
              (u.append(
                T.Tool.manageString(
                  "\n" + H.GameText2.STR_ITEM_UPGRADESTAR_COUNT,
                  [r + "", n + ""],
                ),
              ),
              u.append(
                T.Tool.manageString(g.GameText.STR_ITEM_STAR_USE_INFO2, [
                  p.toString(),
                  c.toString(),
                ]),
              )),
            o["default"].sendNt(k.BagEvent.BAG_ITEM_STARATTR, d),
            u.toString()
          );
        }),
        (e.getItemStarFontColor = function (e, t) {
          return e > t
            ? v["default"].COLOR_RED
            : t > e
              ? v["default"].COLOR_GREEN
              : v["default"].COLOR_GOLD_YELLOW;
        }),
        (e.getStarInfo = function (e, t) {
          if (0 >= t) return g.GameText.STR_LIST_NULL;
          var i = this.getStarNumTxt(e);
          return i;
        }),
        (e.getUpgradeStarInfo = function (e, t) {
          if (0 >= t) return "";
          var i = this.getStarNumTxt(e),
            o = 4177151;
          return D["default"].makeColorString(i, o);
        }),
        (e.getStarNumTxt = function (e) {
          var t = "";
          if (0 > e) return t;
          switch (e) {
            case 0:
              t = "☆";
              break;
            case 1:
              t = "★";
              break;
            case 2:
              t = "★★";
              break;
            case 3:
              t = "★★★";
              break;
            case 4:
              t = "★★★★";
              break;
            case 5:
              t = "★★★★★";
              break;
            default:
              t = "★×" + e;
          }
          return t;
        }),
        (e.getModelById = function (e) {
          var t,
            i = o["default"].getProxy(a.ModName.Scene, a.ProxyType.Scene).model
              .playerMap;
          for (var n in i) if (((t = i[n]), t.id == e)) return t;
          return null;
        }),
        (e.getTypeModel = function (t, i) {
          var n,
            r = new P["default"](),
            s = e.myPlayer,
            l = o["default"].getProxy(a.ModName.Scene, a.ProxyType.Scene).model
              .playerMap;
          for (var u in l)
            if (((n = l[u]), null != n))
              if (t != f["default"].NEAR_MY_TEAM) {
                switch (t) {
                  case f["default"].NEAR_TEAM:
                    if (0 == n.isPlayerTeam()) continue;
                    break;
                  case f["default"].NEAR_SHOP:
                    if (0 == n.isShopMode()) continue;
                    if (
                      n.isShopMode() &&
                      f["default"].PLAYER_SHOP_TYPE_NORMAL != n.getShoptype()
                    )
                      continue;
                    break;
                  case f["default"].NEAR_ENCHANT_SHOP:
                    if (0 == n.isShopMode()) continue;
                    if (
                      n.isShopMode() &&
                      f["default"].PLAYER_SHOP_TYPE_ENCHANT != n.getShoptype()
                    )
                      continue;
                    break;
                  case f["default"].NEAR_FIGHT:
                    if (0 == n.isBattleMode()) continue;
                    break;
                  case f["default"].NEAR_PHOTO:
                    if (0 == n.isHasPhoto()) continue;
                    break;
                  case f["default"].NEAR_NULL:
                    if (
                      1 == n.isPlayerTeam() ||
                      1 == n.isShopMode() ||
                      1 == n.isBattleMode()
                    )
                      continue;
                    break;
                  case f["default"].NEAR_NULL:
                    if (
                      1 == n.isPlayerTeam() ||
                      1 == n.isShopMode() ||
                      1 == n.isBattleMode()
                    )
                      continue;
                    break;
                  case f["default"].NEAR_PET:
                    if (
                      1 == n.isPlayerTeam() ||
                      1 == n.isShopMode() ||
                      1 == n.isBattleMode() ||
                      0 == n.getPetHave() ||
                      1 == n.getIsReject()
                    )
                      continue;
                    n.petBattleType = i;
                }
                r.addElement(n);
              } else
                s.isPlayerTeam() &&
                  s.getLeaderID() == n.getLeaderID() &&
                  r.addElement(n);
          if (t != f["default"].NEAR_MY_TEAM && t != f["default"].NEAR_PET) {
            for (var _ = new P["default"](), d = r.size() - 1; d >= 0; d--) {
              var p = r.size() - 1;
              if (0 > p) break;
              var c = T.Tool.rand(0, p);
              0 == T.Tool.isArrayIndexOutOfBounds(c, r) &&
                (_.addElement(r.elementAt(c)), r.removeElementAt(c));
            }
            (r = _),
              (r = this.sortVipModelList(r)),
              (r = this.robotModelList(r));
          }
          return r;
        }),
        (e.sortVipModelList = function (e) {
          for (var t = new P["default"](e.size()), i = 0; i < e.size(); i++) {
            for (var o = e.elementAt(i), n = 0; ; ) {
              if (n >= t.size()) break;
              var a = t.elementAt(n);
              if (a && o.getVipLevel() > a.getVipLevel()) {
                t.insertElementAt(o, n);
                break;
              }
              n++;
            }
            n == t.size() && t.addElement(o);
          }
          return t;
        }),
        (e.robotModelList = function (e) {
          if (null == e) return e;
          if (e.size() <= 0) return e;
          for (
            var t = new P["default"](),
              i = new P["default"](),
              o = new P["default"](),
              n = 0;
            n < e.size();
            n++
          ) {
            var a = e.elementAt(n);
            null != a && (a.isRobot() ? o.addElement(a) : i.addElement(a));
          }
          for (var r = 0; r < i.size(); r++) {
            var a = i.elementAt(r);
            null != a && t.addElement(a);
          }
          for (var s = 0; s < o.size(); s++) {
            var a = o.elementAt(s);
            null != a && t.addElement(a);
          }
          return t;
        }),
        (e.isTeam = function () {
          return rt["default"].ins.getIsOpen(rt.LevelOpenId.TeamView);
        }),
        (e.dismissTeam = function (t) {
          var i,
            n = e.myPlayer,
            r = o["default"].getProxy(a.ModName.Scene, a.ProxyType.Scene).model
              .playerMap;
          for (var s in r)
            (i = r[s]),
              null != i &&
                i.getLeaderID() == t &&
                (i.ignoreMember(), i.isTwoPeopleHouse());
          n &&
            t == n.getLeaderID() &&
            (n.ignoreMember(), n.isTwoPeopleHouse() && n.refreshWorldSprite());
        }),
        (e.doRelationFlyAction = function (t) {
          if (null != t) {
            var i = e.myPlayer;
            if (null != i && null != i.bag) {
              if (i.partnerId == t.getId()) return void e.doPartnerFly();
              var o = h["default"].createRelationFly(t.getId());
              h["default"].sendRequest(o);
            }
          }
        }),
        (e.doPartnerFly = function () {
          var e = h["default"].createPartnerFly();
          h["default"].sendRequest(e);
        }),
        (e.doAutoMove = function (t) {
          var i = e.myPlayer;
          if (null != i) {
            h["default"].processDataBlockFlagMsg(t);
            var o = t.getByte();
            if (0 > o) return void p["default"].alertMessage(t.getString());
            i.fromBytesByAutoMove(t), p["default"].closeAllUI();
          }
        }),
        (e.doErrorJumpShop = function (e, t) {
          if (null != e) {
            var i = e.getString();
            if (t == f["default"].BACK_ERROR_JUMP_SHOP) {
              var o = e.getShort();
              p["default"].alertMessage(
                v["default"].manageString(
                  g.GameText.STR_ERROR_JUMP_SHOP_ASK,
                  i + "\n",
                ),
                g.GameText.getText(g.GameText.TI_WARM_SHOW),
                U["default"].alloc(this, this.doErrorJumpShopOk, [o]),
                null,
              );
            } else if (t == f["default"].BACK_ERROR_HIGH_KEY3)
              p["default"].alertMessage(
                i,
                g.GameText.getText(g.GameText.TI_WARM_SHOW),
                U["default"].alloc(this, this.doChestUseHighKey),
                null,
              );
            else if (t == f["default"].BACK_ERROR_HIGH_KEY4)
              p["default"].alertMessage(
                i,
                g.GameText.getText(g.GameText.TI_WARM_SHOW),
                U["default"].alloc(this, this.doChestUseHighKey),
                null,
              );
            else if (t == f["default"].BACK_ERROR_IDENTIFY_KEY) {
              var n = e.getShort();
              p["default"].alertMessage(
                i,
                g.GameText.getText(g.GameText.TI_WARM_SHOW),
                U["default"].alloc(this, this.doIdentifyUseHighKey, [n]),
                null,
              );
            } else
              p["default"].alertMessage(
                i,
                g.GameText.getText(g.GameText.TI_ERROR),
              );
          }
        }),
        (e.doErrorJumpShopOk = function (t) {
          o["default"].sendNt(k.BagEvent.DO_ERROR_JUMP_SHOP_OK),
            e.doBrowseShop(t, null);
        }),
        (e.doChestUseHighKey = function () {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, a, r, s, l, u, _;
            return __generator(this, function (d) {
              switch (d.label) {
                case 0:
                  return (
                    (t = e.myPlayer),
                    null == t
                      ? [2]
                      : ((i = t.bag),
                        null == i
                          ? [2]
                          : ((n = new c.Message(
                              B["default"].CG_CHEST_USE_HIGH_KEY,
                            )),
                            [4, Y["default"].sendProtoAsync(n)]))
                  );
                case 1:
                  return (
                    d.sent(),
                    (n = h["default"].getReceiveMsg()),
                    null == n
                      ? [2]
                      : ((a = n.getByte()),
                        0 > a
                          ? (p["default"].alertMessage(n.getString()), [2])
                          : ((r = n.getShort()),
                            (s = n.getByte()),
                            (l = n.getInt()),
                            (u = n.getShort()),
                            i.removeBagItemByPos(r, s),
                            i.removeBagItemByPos(u, 1),
                            (_ = h["default"].processAddItemMsg(
                              n,
                              B["default"].ADD_ITEM_USE_REWARD,
                              !0,
                              !0,
                            )),
                            p["default"].alertMessage(_),
                            o["default"].sendNt(
                              k.BagEvent.BAG_EQUIPMENT_UPDATE,
                            ),
                            [2]))
                  );
              }
            });
          });
        }),
        (e.doIdentifyUseHighKey = function (t) {
          var i = e.myPlayer;
          if (null != i) {
            var o = i.bag;
            if (null != o) {
              var n = o.getItem(t);
              null != n && e.doWorldIdentifyItemAction(i, n, !1, !0);
            }
          }
        }),
        (e.doRepairEquip = async function () {
          var player = e.myPlayer;
          if (!player || e._equipmentRepairPending) return;
          e._equipmentRepairPending = !0;
          try {
            var slot = -1,
              plan = window.worldolEquipmentRepairPlan(player, slot),
              cost = plan.cost;
            if (!plan.items.length) {
              p["default"].alertMessage(
                "装备无需修理",
                g.GameText.STR_REPAIR_EQUIP,
              );
              return;
            }
            var prompt = T.Tool.manageString(
              g.GameText.STR_REPAIR_EQUIP_SURE,
              D["default"].makeColorString(
                cost + g.GameText.getMoneyText(m.ModelConst.MONEY3),
                v["default"].COLOR_RED,
              ),
            );
            var confirmed = await p["default"].waitForTwiceSureUI(
              prompt,
              g.GameText.STR_REPAIR_EQUIP,
              void 0,
              void 0,
              tt.GuideSpriteId.repairEuqipSureBtn,
            );
            if (!confirmed || e.myPlayer !== player) return;
            var currentPlan = window.worldolEquipmentRepairPlan(player, slot);
            if (
              currentPlan.cost !== cost ||
              JSON.stringify(currentPlan.items) !== JSON.stringify(plan.items)
            ) {
              p["default"].alertMessage(
                "装备状态已变化，请重新确认修理费用。",
                g.GameText.STR_REPAIR_EQUIP,
              );
              return;
            }
            var proxy = o["default"].getProxy(a.ModName.Bag, a.ProxyType.Bag),
              message = new c.Message(B["default"].CG_BAG_REPAIR);
            message.putShort(slot);
            var reply = await proxy.sendProtoAsync(
              message,
              tt.GuideSpriteId.euqipRepairTip2,
            );
            if (!reply || e.myPlayer !== player) return;
            player.setMoneyByType(m.ModelConst.MONEY3, reply.getInt());
            // The following GC_ITEM_INFO_UPDATE packets carry saved durability.
            p["default"].alertMessageGuide(
              g.GameText.STR_REPAIR_EQUIP_SURE_SUCCESS,
              tt.GuideSpriteId.euqipRepairTip2,
            );
          } catch (error) {
            p["default"].alertMessage(
              error && error.message ? error.message : "修理请求未完成，请重试。",
              g.GameText.STR_REPAIR_EQUIP,
            );
          } finally {
            e._equipmentRepairPending = !1;
          }
        }),
        (e.doWorldItemBind = function (t, i) {
          return __awaiter(this, void 0, Promise, function () {
            var o, n, a;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return null == t
                    ? [2, !1]
                    : ((o = t.bag),
                      null == o
                        ? [2, !1]
                        : null == i
                          ? [2, !1]
                          : i.isNotOperate()
                            ? (p["default"].alertMessage(
                                g.GameText.STR_IN_SHOP_NO_USE,
                              ),
                              [2, !1])
                            : ((n = v["default"].manageString(
                                g.GameText.STR_ITEM_BIND_ASK,
                                i.getNameInfo(),
                              )),
                              (a = i.clone()),
                              i.setItemDataTo(a),
                              i.setItemPowerDataTo(a),
                              i.ascensionStar > 0 && i.star > 0
                                ? i.isBinded()
                                  ? [
                                      4,
                                      e.doItemStarMenu(
                                        i,
                                        e.ITEM_STAR_TYPE3,
                                        !0,
                                      ),
                                    ]
                                  : [3, 2]
                                : [3, 4]));
                case 1:
                  return (n = r.sent()), [3, 4];
                case 2:
                  return [4, e.doItemStarMenu(i, e.ITEM_STAR_TYPE3, !1)];
                case 3:
                  (n = r.sent()), (r.label = 4);
                case 4:
                  return (
                    p["default"].alertMessage(
                      n,
                      g.GameText.getText(g.GameText.TI_WARM_SHOW),
                      U["default"].alloc(this, this.doWorldItemBindAlertOK, [
                        i,
                      ]),
                      null,
                      U["default"].alloc(this, this.doWorldItemBindAlertNO, [
                        a,
                        i,
                        o,
                      ]),
                      null,
                      tt.GuideSpriteId.equipBindSureBtn,
                    ),
                    [2, !0]
                  );
              }
            });
          });
        }),
        (e.doWorldItemBindAlertOK = function (e) {
          var t =
            (e.slotPos,
            h["default"].createPlayerBagMessage(
              B["default"].BAG_BIND,
              B["default"].BAG_BIND,
              e,
              -1,
            ));
          return (
            G["default"].Service.onProto(
              B["default"].CG_ACTOR_PLAYERBAG,
              U["default"].alloc(this, this.doWorldItemBindAlertOKCb, [e]),
            ),
            G["default"].Service.sendProto(t),
            et.GuideModel.ins.isGuideEquipBind ? !1 : !0
          );
        }),
        (e.doWorldItemBindAlertNO = function (e, t, i) {
          if (null != e) {
            e.setItemDataTo(t),
              e.setItemPowerDataTo(t),
              null != t && i.setItem(t, t.slotPos);
            var n = o["default"].getProxy(a.ModName.Bag, a.ProxyType.Bag);
            n.sendNt(k.BagEvent.BAG_EQUIPMENT_UPDATE);
          }
        }),
        (e.doWorldItemBindAlertOKCb = function (t, i) {
          var n = i.body;
          if (null != n) {
            var r = n.getByte();
            if (0 > r) return void e.doErrorJumpShop(n, r);
            if (r == B["default"].BAG_BIND) {
              t.setBinded(), this.setItemBookState(t);
              var s = new A["default"]();
              s.append(
                v["default"].manageString(
                  g.GameText.STR_ITEM_BIND_SUCCESS,
                  t.getNameInfo(),
                ),
              ),
                t.bindPower1 > 0 &&
                  s.append(
                    D["default"].makeColorString(
                      f["default"].getPowerDesc(
                        t.bindPower1,
                        t.bindPowerValue1,
                      ),
                      T.Tool.COLOR_GREEN,
                    ) + "\n",
                  ),
                t.bindPower2 > 0 &&
                  s.append(
                    D["default"].makeColorString(
                      f["default"].getPowerDesc(
                        t.bindPower2,
                        t.bindPowerValue2,
                      ),
                      T.Tool.COLOR_GREEN,
                    ) + "\n",
                  ),
                t.power4 > 0 &&
                  s.append(
                    D["default"].makeColorString(
                      f["default"].getPowerDesc(t.power4, t.powerValue4),
                      T.Tool.COLOR_GREEN,
                    ) + "\n",
                  ),
                t.power5 > 0 &&
                  s.append(
                    D["default"].makeColorString(
                      f["default"].getPowerDesc(t.power5, t.powerValue5),
                      T.Tool.COLOR_GREEN,
                    ) + "\n",
                  ),
                t.power6 > 0 &&
                  s.append(
                    D["default"].makeColorString(
                      f["default"].getPowerDesc(t.power6, t.powerValue6),
                      T.Tool.COLOR_GREEN,
                    ) + "\n",
                  ),
                t.power7 > 0 &&
                  s.append(
                    D["default"].makeColorString(
                      f["default"].getPowerDesc(t.power7, t.powerValue7),
                      T.Tool.COLOR_GREEN,
                    ) + "\n",
                  ),
                et.GuideModel.ins.isGuideEquipBind ||
                  p["default"].alertMessage(
                    s.toString(),
                    g.GameText.getText(g.GameText.TI_WARM_SHOW),
                  );
              var l = o["default"].getProxy(a.ModName.Bag, a.ProxyType.Bag);
              l.sendNt(k.BagEvent.BAG_EQUIPMENT_UPDATE);
            }
          }
        }),
        (e.setItemBookState = function (t) {
          var i = t.id,
            o = e.myPlayer.bag;
          if (o)
            for (var n = 0, a = o.store; n < a.length; n++) {
              var r = a[n];
              r &&
                r.handBookItem &&
                r.id == i &&
                !r.isHandBookActivated &&
                (r.isHandBookActivated = !0);
            }
        }),
        (e.doEquipAction = function (e, t, i, n) {
          void 0 === i && (i = -1);
          var r = o["default"].getProxy(a.ModName.Bag, a.ProxyType.Bag);
          r.doEquipAction(e, t, i, n);
        }),
        (e.doUnEquipAction = function (e, t, i) {
          var n = o["default"].getProxy(a.ModName.Bag, a.ProxyType.Bag);
          n.doUnEquipAction(e, t, i);
        }),
        (e.doVIPSellEquipAction = function (e, t, i) {
          var n = o["default"].getProxy(a.ModName.Bag, a.ProxyType.Bag);
          (!i || 0 >= i) && (i = t.quantity), n.doSellItemAction(e, t, i);
        }),
        (e.doDelEquipAction = function (e, t) {
          var i = o["default"].getProxy(a.ModName.Bag, a.ProxyType.Bag);
          i.doDelEquipAction(e, t);
        }),
        (e.doWorldIdentifyItemSelect = function (e, t) {
          if (null == e) return !1;
          var i = e.bag;
          return null == i
            ? !1
            : null == t
              ? !1
              : 0 == t.isIdentifyItem()
                ? !1
                : t.getIsItemPetEquip() || 1 != t.isEquited()
                  ? t.isNotOperate()
                    ? (p["default"].alertMessage(g.GameText.STR_IN_SHOP_NO_USE),
                      !1)
                    : (p["default"].showModal(
                        a.ModName.Bag,
                        a.BagViewType.ItemIdentify,
                        { player: e, item: t },
                      ),
                      !0)
                  : (p["default"].alertMessage(
                      g.GameText.STR_UNEQUIP_INDENTIFY,
                    ),
                    !1);
        }),
        (e.doWorldIdentifyItemAction = function (t, i, n, r) {
          return (
            void 0 === r && (r = !1),
            __awaiter(this, void 0, Promise, function () {
              var s,
                l,
                u,
                _,
                d,
                E,
                S,
                I,
                m,
                A,
                C,
                P,
                R,
                O,
                N,
                M,
                L,
                w,
                b,
                x,
                R,
                O,
                G,
                w,
                U,
                V,
                U,
                R,
                O,
                G,
                w,
                V,
                F;
              return __generator(this, function (W) {
                switch (W.label) {
                  case 0:
                    return null == t
                      ? [2, !1]
                      : ((s = t.bag),
                        null == s
                          ? [2, !1]
                          : null == i
                            ? [2, !1]
                            : 0 == i.isIdentifyItem()
                              ? [2, !1]
                              : i.getIsItemPetEquip() || 1 != i.isEquited()
                                ? i.isNotOperate()
                                  ? (p["default"].alertMessage(
                                      g.GameText.STR_IN_SHOP_NO_USE,
                                    ),
                                    [2, !1])
                                  : ((l = i.slotPos),
                                    (u = null),
                                    (u = r
                                      ? new c.Message(
                                          B["default"].CG_IDENTIFY_USE_HIGH_KEY,
                                        )
                                      : h["default"].createPlayerBagMessage(
                                          B["default"].BAG_CHECKUP,
                                          B["default"].PLAYERBAG_CHECKUP,
                                          i,
                                          -1,
                                          n,
                                        )),
                                    null == u
                                      ? [2, !1]
                                      : [4, Y["default"].sendProtoAsync(u)])
                                : (p["default"].alertMessage(
                                    g.GameText.STR_UNEQUIP_INDENTIFY,
                                  ),
                                  [2, !1]));
                  case 1:
                    if (
                      (W.sent(),
                      (_ = h["default"].getReceiveMsg()),
                      r && ((d = _.getByte()), 0 > d))
                    )
                      return p["default"].alertMessage(_.getString()), [2, !1];
                    if (((S = _.getByte()), 0 > S))
                      return e.doErrorJumpShop(_, S), [2, !1];
                    switch (((I = ""), (m = ""), (A = null), (C = 0), S)) {
                      case B["default"].BAG_CHECKUP:
                        (C = _.getByte()),
                          (P = _.getByte()),
                          0 != P &&
                            ((R = _.getShort()),
                            (O = _.getInt()),
                            (E = s.removeBagItemByPos(R, P))),
                          (N = s.getIdentifyScrollNum()),
                          (M = s.getHighIdentifyScrollNum()),
                          (L = s.getUpgradeIdentifyScrollNum()),
                          (m = n
                            ? T.Tool.manageString(
                                H.GameText2.STR_EQ_INDENTIFY_UPGRADE_RESIDUE,
                                L + "",
                              )
                            : T.Tool.manageString(
                                H.GameText2.STR_EQUIP_INDENTIFY_LOW_RESIDUE,
                                [N + "", M + ""],
                              )),
                          C == f["default"].BAG_CHECKUP_RESULT_NEW
                            ? ((A = y["default"].fromBytes(_)),
                              (I = v["default"].manageString(
                                g.GameText.STR_INDENTIFY_RESULT_NEW_ASK,
                                A.getNameInfo(!1) + "\n" + A.getDesc(t),
                              )),
                              n
                                ? ((w = _.getBoolean()),
                                  w &&
                                    y[
                                      "default"
                                    ].oldFromIdentifyUpgradePowerBytes(A, _),
                                  (b = _.getBoolean()),
                                  b &&
                                    y["default"].fromIdentifyUpgradePowerBytes(
                                      i,
                                      _,
                                    ))
                                : ((x = _.getBoolean()),
                                  x &&
                                    (y["default"].fromIdentify1PowerBytes(A, _),
                                    y["default"].fromIdentify1PowerBytes(
                                      i,
                                      _,
                                    ))))
                            : C == f["default"].BAG_CHECKUP_RESULT_UPDATE
                              ? ((R = _.getShort()),
                                (O = _.getInt()),
                                (A = i.clone()),
                                (G = y["default"].COMPARE_IDENTIFY),
                                n
                                  ? ((G = y["default"].COMPARE_IDENTIFY_G),
                                    i.setVarItemDataTo(A),
                                    (w = _.getBoolean()),
                                    w &&
                                      y[
                                        "default"
                                      ].oldFromIdentifyUpgradePowerBytes(A, _),
                                    (U = _.getBoolean()),
                                    U &&
                                      y["default"].newFromIdentify2PowerBytes2(
                                        i,
                                        _,
                                      ))
                                  : ((V = _.getBoolean()),
                                    y["default"].fromIdentify2PowerBytes1(
                                      A,
                                      _,
                                      V,
                                    ),
                                    i.setVarItemDataTo(A),
                                    (U = _.getBoolean()),
                                    U &&
                                      (y["default"].fromIdentify2PowerBytes2(
                                        i,
                                        _,
                                      ),
                                      (A.powerValue3 = i.powerValue3),
                                      (A.powerValue3add = i.powerValue3add))),
                                (I =
                                  D["default"].makeColorString(
                                    g.GameText.STR_INDENTIFY_RESULT_RESULT,
                                    T.Tool.COLOR_GREEN,
                                  ) +
                                  "\n" +
                                  y["default"].getEquipCompareDesc(A, i, G)),
                                A.setItemPowerDataTo(i))
                              : ((R = _.getShort()),
                                (O = _.getInt()),
                                (A = i.clone()),
                                (G = y["default"].COMPARE_IDENTIFY),
                                n
                                  ? ((G = y["default"].COMPARE_IDENTIFY_G),
                                    i.setVarItemDataTo(A),
                                    (w = _.getBoolean()),
                                    w &&
                                      y[
                                        "default"
                                      ].oldFromIdentifyUpgradePowerBytes(i, _),
                                    y[
                                      "default"
                                    ].newFromIdentifyUpgradePowerBytes(A, _))
                                  : ((V = _.getBoolean()),
                                    y["default"].fromIdentify3PowerBytes1(
                                      A,
                                      _,
                                      V,
                                    ),
                                    i.getIsItemPetEquip() &&
                                      y["default"].fromIdentify3PowerBytesPet(
                                        i,
                                        _,
                                      ),
                                    i.setVarItemDataTo(A),
                                    V &&
                                      (y["default"].fromIdentify3PowerBytes2(
                                        i,
                                        _,
                                      ),
                                      (A.powerValue3 = i.powerValue3),
                                      (A.powerValue3add = i.powerValue3add))),
                                (I = v["default"].manageString(
                                  g.GameText.STR_INDENTIFY_RESULT_NEW_ASK,
                                  y["default"].getEquipCompareDesc(A, i, G),
                                )));
                    }
                    return (
                      p["default"].updateWorldPlayerInfoUI(),
                      p["default"].updateIdentifyMessageUI(
                        i,
                        t,
                        A,
                        C,
                        m + I,
                        n,
                      ),
                      (F = o["default"].getProxy(
                        a.ModName.Bag,
                        a.ProxyType.Bag,
                      )),
                      F.sendNt(k.BagEvent.BAG_EQUIPMENT_UPDATE),
                      [2, !0]
                    );
                }
              });
            })
          );
        }),
        (e.doWorldAttachItemMenu = function (e, t) {
          var i = e.bag;
          null != i &&
            p["default"].showModal(a.ModName.Bag, a.BagViewType.ItemAttach, {
              player: e,
              attachItem: t,
            });
        }),
        (e.doWorldAttachItemAction = function (e, t, i, n) {
          return __awaiter(this, void 0, Promise, function () {
            var r, s, l, u, _, d, c, T, E, y, S, I, m, A, C, P;
            return __generator(this, function (R) {
              switch (R.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : ((r = e.bag),
                      null == r
                        ? [2, !1]
                        : null == t || null == i
                          ? [2, !1]
                          : 0 == t.isCanAttach()
                            ? [2, !1]
                            : t.isNotOperate()
                              ? (p["default"].alertMessage(
                                  g.GameText.STR_IN_SHOP_NO_USE,
                                ),
                                [2, !1])
                              : ((s = t.slotPos),
                                (l = i.slotPos),
                                (u = h["default"].createPlayerBagMessage(
                                  B["default"].BAG_ENCHASE,
                                  B["default"].PLAYERBAG_ENCHASE,
                                  t,
                                  l,
                                )),
                                (_ = o["default"].getProxy(
                                  a.ModName.Bag,
                                  a.ProxyType.Bag,
                                )),
                                [4, _.sendProtoAsync(u)]));
                case 1:
                  if ((R.sent(), (d = h["default"].getReceiveMsg()), null == d))
                    return [2, !1];
                  switch (((T = d.getByte()), (E = !1), T)) {
                    case B["default"].BAG_ENCHASE:
                      (E = d.getBoolean()),
                        t.setAttackBroken(!E),
                        (t.attachDone = d.getByte()),
                        (t.attachPower = d.getShort()),
                        (t.attachValue = d.getShort()),
                        (y = d.getByte()),
                        0 != y &&
                          ((S = d.getShort()),
                          (I = d.getInt()),
                          (c = r.removeBagItemByPos(S, y)));
                  }
                  return (
                    1 == E
                      ? ((m = f["default"].getGradeColor(f["default"].GRADE_2)),
                        t.attachDone > 6
                          ? (m = f["default"].getGradeColor(
                              f["default"].GRADE_3,
                            ))
                          : t.attachDone > 3 &&
                            (m = f["default"].getGradeColor(
                              f["default"].GRADE_4,
                            )),
                        null != n &&
                          n.append(
                            g.GameText.STR_ATTACH_ITEM_TITLE1 +
                              D["default"].makeColorString(
                                v["default"].manageString(
                                  g.GameText.STR_ATTACH_ITEM_TITLE2,
                                  t.attachDone + "",
                                ),
                                m,
                              ) +
                              g.GameText.STR_ATTACH_ITEM_TITLE3,
                          ))
                      : null != n &&
                        n.append(
                          D["default"].makeColorString(
                            g.GameText.STR_ATTACH_ITEM_FAIL_INFO,
                            v["default"].COLOR_RED,
                          ),
                        ),
                    (A = e.getIcon1().toString()),
                    (C = e.getIcon2().toString()),
                    (P = e.getIcon3().toString()),
                    e.updateIcon(),
                    (e.getIcon1().neq(A) ||
                      e.getIcon2().neq(C) ||
                      e.getIcon3().neq(P)) &&
                      e.refreshWorldSprite(),
                    e.checkHPMP(),
                    p["default"].updateWorldPlayerInfoUI(),
                    _.sendNt(k.BagEvent.BAG_EQUIPMENT_UPDATE),
                    _.sendNt(k.BagEvent.BAG_ITEM_ATTACH),
                    et.GuideModel.ins.isGuideGemInlay ||
                      p["default"].alertMessage(
                        n.toString(),
                        g.GameText.getText(g.GameText.TI_WARM_SHOW),
                      ),
                    [2, !0]
                  );
              }
            });
          });
        }),
        (e.doWorldAttachChangeGemSelect = function (t, i) {
          return __awaiter(this, void 0, Promise, function () {
            var n, r, s, l, u, _, d, E, y, S, I, m, C, P, R, O, N;
            return __generator(this, function (M) {
              switch (M.label) {
                case 0:
                  return null == t
                    ? [2]
                    : ((n = e.myPlayer),
                      null == n
                        ? [2]
                        : ((r = n.bag),
                          null == r
                            ? [2]
                            : ((s = new c.Message(
                                B["default"].CG_REPLACE_INLAY_GEM,
                              )),
                              s.putShort(i.slotPos),
                              s.putInt(i.id),
                              s.putShort(t.slotPos),
                              (l = o["default"].getProxy(
                                a.ModName.Bag,
                                a.ProxyType.Bag,
                              )),
                              [4, l.sendProtoAsync(s)])));
                case 1:
                  if ((M.sent(), (s = h["default"].getReceiveMsg()), null == s))
                    return [2];
                  for (
                    u = s.getByte(),
                      _ = new A["default"](),
                      _.append(i.getRewardDesc() + "\n"),
                      _.append(
                        f["default"].getPowerDesc(
                          i.attachPower,
                          i.attachValue,
                        ) +
                          " -> " +
                          D["default"].makeColorString(
                            f["default"].getPowerDesc(
                              t.power1,
                              i.attachDone * t.powerValue1,
                            ),
                            v["default"].COLOR_GREEN,
                          ) +
                          "\n",
                      ),
                      _.append(
                        g.GameText.getText(g.GameText.TI_CONSUME) + ": ",
                      ),
                      d = [],
                      E = [],
                      y = 0,
                      S = "",
                      I = 0,
                      m = "",
                      C = 0,
                      P = 0;
                    u > P;
                    P++
                  )
                    (R = s.getShort()),
                      (O = s.getByte()),
                      (N = r.getItem(R)),
                      (d[P] = R),
                      (E[P] = O),
                      null != N &&
                        (0 == P
                          ? ((y = N.id), (S = N.name), (I += O))
                          : y == N.id
                            ? (I += O)
                            : ((m = N.name), (C += O)));
                  return (
                    0 == T.Tool.isNullText(S) &&
                      I > 0 &&
                      _.append(S + "x" + I + "\n"),
                    0 == T.Tool.isNullText(m) &&
                      C > 0 &&
                      _.append(m + "x" + C + "\n"),
                    _.append(g.GameText.STR_REPLACE_INLAY_GEM_ASK),
                    p["default"].alertMessage(
                      _.toString(),
                      g.GameText.getText(g.GameText.TI_WARM_SHOW),
                      U["default"].alloc(
                        this,
                        this.doWorldAttachChangeGemSelectOK,
                        [t, i, u, d, E, n, r],
                      ),
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (e.doWorldAttachChangeGemSelectOK = function (e, t, i, n, r, s, l) {
          return __awaiter(this, void 0, Promise, function () {
            var e, u, _, d, u, f;
            return __generator(this, function (T) {
              switch (T.label) {
                case 0:
                  for (
                    e = new c.Message(B["default"].CG_REPLACE_INLAY_GEM_ASK),
                      e.putShort(t.slotPos),
                      e.putInt(t.id),
                      e.putByte(i),
                      u = 0;
                    i > u;
                    u++
                  )
                    e.putShort(n[u]), e.putByte(r[u]);
                  return (
                    e.putBoolean(!0),
                    (_ = o["default"].getProxy(a.ModName.Bag, a.ProxyType.Bag)),
                    [4, _.sendProtoAsync(e)]
                  );
                case 1:
                  if ((T.sent(), (e = h["default"].getReceiveMsg()), null == e))
                    return [2];
                  if (((d = e.getByte()), 0 > d))
                    return p["default"].alertMessage(e.getString()), [2];
                  for (u = 0; i > u; u++) f = l.removeBagItemByPos(n[u], r[u]);
                  return (
                    y["default"].fromBytes(e, t),
                    s.bag.setItem(t),
                    s.updateIcon(),
                    s.refreshWorldSprite(),
                    s.checkHPMP(),
                    p["default"].updateWorldPlayerInfoUI(),
                    _.sendNt(k.BagEvent.BAG_EQUIPMENT_UPDATE),
                    _.sendNt(k.BagEvent.BAG_ITEM_ATTACHCHANGE),
                    p["default"].alertMessage(
                      v["default"].manageString(
                        g.GameText.STR_REPLACE_INLAY_GEM_SUCCEE,
                        t.getNameInfo() +
                          "\n" +
                          D["default"].makeColorString(
                            t.getAttackPowerDesc(!0),
                            v["default"].COLOR_GREEN,
                          ),
                      ),
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (e.doItemIntegral_1 = function (e) {
          if (null == e || e.length <= 0)
            return (
              p["default"].alertMessage(g.GameText.STR_INTEGRAL_NO_ITEM), !1
            );
          for (var t = "", i = 0, decompositionCoins = 0, decompositionLegendary = 0, o = "", n = 0; n < e.length; n++) {
            var a = e[n];
            null != a &&
              ((o = n == e.length - 1 ? "" : "、"),
              (t +=
                (n + 1) % 3 == 0
                  ? a.getNameInfo() + "\n"
                  : a.getNameInfo() + o),
              (i += a.grade === 3 ? Math.floor(Math.max(0, a.reqLv | 0) / 10) : 0),
              (decompositionCoins += (a.grade || 0) < 3 ? Math.floor(Math.max(0, a.price || 0) / 2) : 0),
              (decompositionLegendary += a.grade === 4 ? 1 : 0));
          }
          return T.Tool.isNullText(t)
            ? (p["default"].alertMessage(g.GameText.STR_INTEGRAL_NO_ITEM), !1)
            : ((t = T.Tool.manageString("注意装备分解后无法复原！\n分解获得：%U\n分解装备列表如下:%U", [
                g.GameText.STR_MONEY1 + i + "\n" + g.GameText.STR_MONEY3 + decompositionCoins + "\n" +
                  (decompositionLegendary ? "传说装备每件随机获得1件绑定奖励，共" + decompositionLegendary + "件：3级属性宝石、普通/高级/进阶鉴定卷、普通/进阶强化卷。\n" : ""),
                "\n" + t,
              ])),
              _t["default"].confirm2(
                t,
                U["default"].alloc(this, this.doItemIntegral_2, [e]),
                g.GameText.getText(g.GameText.TI_WARM_SHOW),
                g.GameText.STR_RESOLVE_ALL,
              ),
              !0);
        }),
        (e.doItemIntegral_2 = function (t) {
          return __awaiter(this, void 0, Promise, function () {
            var i, n, r, s, l, u, _, d, f, l, u;
            return __generator(this, function (T) {
              switch (T.label) {
                case 0:
                  if (((i = e.myPlayer), null == i)) return [2];
                  if (((n = i.bag), null == n)) return [2];
                  if (null == t || t.length <= 0)
                    return (
                      p["default"].alertMessage(
                        g.GameText.STR_INTEGRAL_NO_ITEM,
                      ),
                      [2]
                    );
                  for (
                    r = t.length,
                      s = new c.Message(B["default"].CG_ITEM_DECOM),
                      s.putByte(r),
                      l = 0;
                    r > l;
                    l++
                  ) {
                    if (((u = t[l]), null == u))
                      return (
                        p["default"].alertMessage(
                          g.GameText.STR_RESOLVE_ITEM_ERROR,
                        ),
                        [2]
                      );
                    if (
                      ((_ = u.getItemClass()),
                      _ != y["default"].ITEM_CLASS_WEAPON &&
                        _ != y["default"].ITEM_CLASS_ARMOR)
                    )
                      return (
                        p["default"].alertMessage(
                          g.GameText.STR_RESOLVE_ITEM_NOT_EQUIP,
                        ),
                        [2]
                      );
                    s.putInt(u.id), s.putShort(u.slotPos);
                  }
                  return (
                    (d = o["default"].getProxy(a.ModName.Bag, a.ProxyType.Bag)),
                    [4, d.sendProtoAsync(s)]
                  );
                case 1:
                  if ((T.sent(), (s = h["default"].getReceiveMsg()), null == s))
                    return [2, Promise.resolve()];
                  for (f = 0, l = 0; r > l; l++)
                    (u = t[l]),
                      null != u && (n.removeItem(u.slotPos), (f += u.price));
                  return (
                    f > 0 && (f /= 2),
                    h["default"].processAddItemMsg(s, null, !0, !0),
                    d.sendNt(k.BagEvent.BAG_EQUIPMENT_UPDATE),
                    [2]
                  );
              }
            });
          });
        }),
        (e.doStallUpItem = function (t) {
          return __awaiter(this, void 0, Promise, function () {
            var i,
              n,
              r,
              s,
              l,
              u,
              _,
              d,
              c,
              h,
              f,
              E,
              y,
              v,
              S,
              I,
              A,
              P,
              R,
              N,
              M,
              w;
            return __generator(this, function (b) {
              switch (b.label) {
                case 0:
                  return null == t
                    ? [2, !1]
                    : ((i = e.myPlayer),
                      null == i
                        ? [2, !1]
                        : e.isEscortStatus()
                          ? (p["default"].alertMessage(
                              g.GameText.STR_ESCORT_NO_SHOP,
                            ),
                            [2, !1])
                          : t.isBinded()
                            ? (p["default"].alertMessage(
                                g.GameText.STR_BINDING_NO_SHOP,
                              ),
                              [2, !1])
                            : [4, C["default"].getItemPetEquip(t)]);
                case 1:
                  return (n = b.sent())
                    ? (p["default"].alertMessage(g.GameText.STR_PET_IS_EQUIP),
                      [2, !1])
                    : ((r = o["default"].getProxy(
                        a.ModName.Bag,
                        a.ProxyType.Bag,
                      )),
                      (s = r.isEnchantShop),
                      (l = []),
                      (u = t.price ? t.price : 1),
                      (_ = new q.InputAlertData(
                        g.GameText.STR_TYPE_PLAYER_SHOP_SELL_PRICE,
                        null,
                        null,
                        8,
                        u + "",
                      )),
                      l.push(_),
                      t.quantity > 1 &&
                        ((d = new q.InputAlertData(
                          T.Tool.manageString(
                            g.GameText.STR_TYPE_PLAYER_SHOP_SELL_NUM,
                            t.quantity + "",
                          ),
                          null,
                          null,
                          2,
                          "1",
                        )),
                        l.push(d)),
                      s
                        ? ((h = T.Tool.manageString(
                            H.GameText2.STR_ENCHANT_SHOP_ONE_NEED,
                            t.powerValue1 + "",
                          )),
                          [
                            4,
                            p["default"].showInputCheckAsync(
                              g.GameText.STR_TYPE_PLAYER_SHOP_SELL,
                              l,
                              ["黄金", "铜币"],
                              null,
                              h,
                            ),
                          ])
                        : [3, 3]);
                case 2:
                  return (c = b.sent()), [3, 5];
                case 3:
                  return [
                    4,
                    p["default"].showInputCheckAsync(
                      g.GameText.STR_TYPE_PLAYER_SHOP_SELL,
                      l,
                      ["黄金", "铜币"],
                    ),
                  ];
                case 4:
                  (c = b.sent()), (b.label = 5);
                case 5:
                  if (!c) return [2, !1];
                  if (
                    ((f = 0),
                    (E = 0),
                    (y = 0),
                    t.quantity > 1
                      ? ((f = T.Tool.parseInt(c[0])),
                        (E = T.Tool.parseInt(c[1])),
                        (y = T.Tool.parseInt(c[2])))
                      : ((f = T.Tool.parseInt(c[0])),
                        (y = T.Tool.parseInt(c[1]))),
                    0 >= f)
                  )
                    return L.Tips.show("请正确输入价格"), [2, !1];
                  if (
                    ((E && 0 != E) || (E = 1),
                    E > t.quantity && (E = t.quantity),
                    (v = m.ModelConst.MONEY3),
                    0 == y
                      ? (v = m.ModelConst.MONEY1)
                      : 1 == y && (v = m.ModelConst.MONEY3),
                    s)
                  ) {
                    if (
                      ((S = 1),
                      E > S && (S = E),
                      (I = 0),
                      (A = r.data.SelfShopList),
                      null != A)
                    )
                      for (P = 0; P < A.length; P++)
                        (R = A[P]),
                          null != R &&
                            ((N = 1),
                            N < R.quantity && (N = R.quantity),
                            (I = N * R.powerValue1));
                    if (i.getEnchantValue() < S * t.powerValue1 + I)
                      return (
                        p["default"].alertMessage(
                          H.GameText2.STR_ENCHANT_SELL_UP_FAIL,
                        ),
                        [2, !1]
                      );
                  }
                  return (
                    (M = new O.ShopItem()),
                    t.setItemDataTo(M),
                    t.setVarItemDataTo(M),
                    (M.quantity = E),
                    v == m.ModelConst.MONEY1
                      ? (M.money1 = f)
                      : v == m.ModelConst.MONEY3 && (M.money3 = f),
                    (w = r.data.addSelfShopItem(M)),
                    t.setSelling(w),
                    r.sendNt(k.BagEvent.BAG_SELFSHOP_UP, M),
                    [2, !0]
                  );
              }
            });
          });
        }),
        (e.doStallDownItem = function (t) {
          if (null == t) return !1;
          var i = o["default"].getProxy(a.ModName.Bag, a.ProxyType.Bag);
          i.data.removeSelfShopItem(t);
          var n = e.myPlayer;
          if (null != n && null != n.bag) {
            var r = n.bag.getItem(t.slotPos);
            null != r && r.setSelling(!1);
          }
          return i.sendNt(k.BagEvent.BAG_SELFSHOP_DOWN, t), !0;
        }),
        (e.doStallChangePrice = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, o, n, a, r, s, l, u, _, d;
            return __generator(this, function (c) {
              switch (c.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : e instanceof O.ShopItem
                      ? ((t = []),
                        (i = e.money1),
                        (o = e.money3),
                        (n = i ? i : o),
                        (a = new q.InputAlertData(
                          g.GameText.STR_TYPE_PLAYER_SHOP_SELL_PRICE,
                          null,
                          null,
                          8,
                          n.toString(),
                        )),
                        t.push(a),
                        (r = i ? 0 : 1),
                        [
                          4,
                          p["default"].showInputCheckAsync(
                            g.GameText.STR_TYPE_PLAYER_SHOP_SELL,
                            t,
                            ["黄金", "铜币"],
                            null,
                            null,
                            r,
                          ),
                        ])
                      : [2, !1];
                case 1:
                  if (((s = c.sent()), !s)) return [2, !1];
                  if (
                    ((l = 0),
                    (u = 0),
                    (_ = 0),
                    (l = T.Tool.parseInt(s[0])),
                    (_ = T.Tool.parseInt(s[1])),
                    0 >= l)
                  )
                    return L.Tips.show("请正确输入价格"), [2, !1];
                  switch (
                    ((u && 0 != u) || (u = 1),
                    u > e.quantity && (u = e.quantity),
                    (d = m.ModelConst.MONEY3),
                    0 == _
                      ? (d = m.ModelConst.MONEY1)
                      : 1 == _ && (d = m.ModelConst.MONEY3),
                    (e.money1 = 0),
                    (e.money2 = 0),
                    (e.money3 = 0),
                    d)
                  ) {
                    case m.ModelConst.MONEY1:
                      e.money1 = l;
                      break;
                    case m.ModelConst.MONEY2:
                      e.money2 = l;
                      break;
                    case m.ModelConst.MONEY3:
                      e.money3 = l;
                  }
                  return [2, !0];
              }
            });
          });
        }),
        (e.doStallStart = function (t) {
          return __awaiter(this, void 0, Promise, function () {
            var i, n, r, s, l, u, _, d;
            return __generator(this, function (c) {
              switch (c.label) {
                case 0:
                  return this.myPlayer.isShopMode()
                    ? [2, !1]
                    : e.isEscortStatus()
                      ? (p["default"].alertMessage(
                          g.GameText.STR_ESCORT_NO_SHOP,
                        ),
                        [2, !1])
                      : null == t || t.length <= 0
                        ? (p["default"].alertMessage(
                            g.GameText.STR_START_SHOP_NO_ITEM,
                            g.GameText.getText(g.GameText.TI_SHOP_START),
                          ),
                          [2, !1])
                        : ((i = e.myPlayer),
                          (n = []),
                          (r = new q.InputAlertData(
                            g.GameText.STR_TYPE_PLAYER_SHOP_NAME_ENTER,
                            null,
                            "",
                            20,
                            T.Tool.manageString(
                              g.GameText.STR_STALL_PLACE,
                              i.getName(),
                            ),
                          )),
                          n.push(r),
                          [
                            4,
                            p["default"].showInputCheckAsync(
                              g.GameText.STR_TYPE_PLAYER_SHOP_NAME,
                              n,
                            ),
                          ]);
                case 1:
                  return (s = c.sent())
                    ? ((l = s[0]),
                      (u = o["default"].getProxy(
                        a.ModName.Bag,
                        a.ProxyType.Bag,
                      )),
                      (_ = u.isEnchantShop),
                      [
                        4,
                        O.ShopItem.doPlayerShopStartMsg(l, this.myPlayer, t, _),
                      ])
                    : [2];
                case 2:
                  return (d = c.sent()), [2, d];
              }
            });
          });
        }),
        (e.doStallEnd = function () {
          var t = e.myPlayer;
          if (null == t) return !1;
          var i = null;
          return (
            f["default"].PLAYER_SHOP_TYPE_NORMAL == t.getShoptype()
              ? (i = h["default"].createPlayerShopEndMsg())
              : f["default"].PLAYER_SHOP_TYPE_ENCHANT == t.getShoptype() &&
                (i = h["default"].createPlayerEnchantShopEndMsg()),
            null == i ? !1 : (G["default"].Service.sendProto(i), !0)
          );
        }),
        (e.doStallRecord = function () {
          return __awaiter(this, void 0, Promise, function () {
            var e, t, i, n, r;
            return __generator(this, function (s) {
              switch (s.label) {
                case 0:
                  return null == this.myPlayer
                    ? [2, !1]
                    : 0 == this.myPlayer.isShopMode()
                      ? (p["default"].alertMessage(g.GameText.STR_STALL_NOT_IN),
                        [2, !1])
                      : ((e = null),
                        f["default"].PLAYER_SHOP_TYPE_NORMAL ==
                        this.myPlayer.getShoptype()
                          ? (e = h["default"].createPlayerShopRecordMsg())
                          : f["default"].PLAYER_SHOP_TYPE_ENCHANT ==
                              this.myPlayer.getShoptype() &&
                            (e =
                              h["default"].createPlayerEnchantShopRecordMsg()),
                        null == e
                          ? [2, !1]
                          : ((t = o["default"].getProxy(
                              a.ModName.Shop,
                              a.ProxyType.Shop,
                            )),
                            [4, t.sendProtoAsync(e)]));
                case 1:
                  return (
                    s.sent(),
                    (i = h["default"].getReceiveMsg()),
                    null == i
                      ? [2, !1]
                      : ((n = h["default"].showPlayerShopRecordMsg(i)),
                        f["default"].PLAYER_SHOP_TYPE_ENCHANT ==
                          this.myPlayer.getShoptype() &&
                          ((r = i.getInt()),
                          r > 0 &&
                            (n += v["default"].manageString(
                              H.GameText2.STR_ENCHANT_SHOP_USE_ENCNANT,
                              r + "",
                            ))),
                        T.Tool.isNullText(n) &&
                          (n = g.GameText.STR_STALL_SELL_NULL),
                        p["default"].alertMessage(
                          n,
                          g.GameText.getText(g.GameText.TI_PLAYER_SHOP_RECORD),
                        ),
                        [2, !0])
                  );
              }
            });
          });
        }),
        (e.doStallBuy = function (e, t, i) {
          return (
            void 0 === i && (i = 1),
            __awaiter(this, void 0, Promise, function () {
              var n, a, r, s, l, u;
              return __generator(this, function (_) {
                switch (_.label) {
                  case 0:
                    return null == t
                      ? [2, !1]
                      : t instanceof O.ShopItem
                        ? ((n = i * t.money1),
                          (a = i * t.money2),
                          (r = i * t.money3),
                          [4, T.Tool.checkEnoughMoney(n, a, r)])
                        : [3, 3];
                  case 1:
                    return 0 == _.sent()
                      ? [2, !1]
                      : n >= 40
                        ? ((s = new A["default"]()),
                          n > 0 && s.append(g.GameText.STR_MONEY1 + n),
                          a > 0 && s.append(" " + g.GameText.STR_MONEY2 + a),
                          r > 0 && s.append(" " + g.GameText.STR_MONEY3 + r),
                          [
                            4,
                            p["default"].waitForTwiceSureUI(
                              T.Tool.manageString(
                                g.GameText.STR_SHOP_ITEM_USE_MONEY_BUY_ASK,
                                [t.name + " " + i, s.toString()],
                              ),
                              g.GameText.getText(g.GameText.TI_WARM_SHOW),
                            ),
                          ])
                        : [3, 3];
                  case 2:
                    if (((l = _.sent()), !l)) return [2, !1];
                    _.label = 3;
                  case 3:
                    return [4, O.ShopItem.doPlayerShopBuyMsg(e, t, i)];
                  case 4:
                    return (
                      (u = _.sent()),
                      0 == u
                        ? [2, !1]
                        : ((t.quantity -= i),
                          p["default"].alertMessage(
                            v["default"].manageString(
                              g.GameText.STR_STALL_BUY,
                              t.getNameInfo() +
                                g.GameText.getText(g.GameText.TI_ITEM_X) +
                                i,
                            ),
                          ),
                          o["default"].sendNt(k.ShopEvent.SHOP_PLAYERSHOP_BUY),
                          [2, !0])
                    );
                }
              });
            })
          );
        }),
        (e.doStallPetDetail = function (e, t) {
          if (e.isPetType()) {
            var i = new C["default"](null);
            (i.petItem = e),
              C["default"].doPetInfoMsg(i, h["default"].PET_INFO_CHAT, [
                t,
                e.slotPos,
              ]) && p["default"].checkPet(null, null, 3, i);
          }
          return !1;
        }),
        (e.doStorageListAction = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, r, s, l;
            return __generator(this, function (u) {
              switch (u.label) {
                case 0:
                  return null == e || null == e.bag
                    ? [2, !1]
                    : (e.bag.clearStorageItem(),
                      (t = h["default"].createStorageListMsg()),
                      (i = o["default"].getProxy(
                        a.ModName.Bag,
                        a.ProxyType.Bag,
                      )),
                      [4, i.sendProtoAsync(t)]);
                case 1:
                  if ((u.sent(), (n = h["default"].getReceiveMsg()), null == n))
                    return [2, !1];
                  for (r = n.getByte(), s = [], l = 0; r > l; l++)
                    s.push(y["default"].fromBytes(n));
                  return e.bag.initBagItem(s), [2, !0];
              }
            });
          });
        }),
        (e.doVIPStorageListAction = function (t) {
          return __awaiter(this, void 0, Promise, function () {
            var i, n, r, s, u, _, d, c, f, E;
            return __generator(this, function (v) {
              switch (v.label) {
                case 0:
                  return null == t || null == t.bag
                    ? [2, !1]
                    : ((i = g.GameText.STR_VIP),
                      e.isQQVip && (i = g.GameText.STR_QQ_DIAMOND),
                      t.bag.clearVipStorageItem(),
                      (n = h["default"].createVIPStorageListMsg()),
                      (r = o["default"].getProxy(
                        a.ModName.Bag,
                        a.ProxyType.Bag,
                      )),
                      [4, r.sendProtoAsync(n)]);
                case 1:
                  return (
                    v.sent(),
                    (s = h["default"].getReceiveMsg()),
                    null == s
                      ? [2, !1]
                      : ((u = s.getByte()),
                        0 != u
                          ? [3, 3]
                          : 0 != e.isVip(t)
                            ? [3, 3]
                            : ((_ = T.Tool.manageString(
                                g.GameText.STR_VIP_STOREAGE_CNNONT_OPEN,
                                [i, i, i],
                              )),
                              t.getVipLevel() > 0 &&
                                e.isVipOverDue(t) &&
                                (_ = T.Tool.manageString(
                                  g.GameText.STR_VIP_SHOP_RENEWAL,
                                  [i, i, i],
                                )),
                              [4, p["default"].waitForTwiceSureUI(_)]))
                  );
                case 2:
                  return (d = v.sent())
                    ? ((c = t.bag.getItem(l["default"].SPIRIT_POS)),
                      null == c ? [2, !1] : (W["default"].doOpenVIP(), [2, !1]))
                    : [2, !1];
                case 3:
                  for (f = [], E = 0; u > E; E++)
                    f.push(y["default"].fromBytes(s));
                  return t.bag.initBagItem(f), [2, !0];
              }
            });
          });
        }),
        (e.doHightVIPStorageListAction = function (t) {
          return __awaiter(this, void 0, Promise, function () {
            var i, n, r, s, u, _, d, c, f, E;
            return __generator(this, function (v) {
              switch (v.label) {
                case 0:
                  return null == t || null == t.bag
                    ? [2, !1]
                    : [4, h["default"].getPlayerMaxVIpBegin()];
                case 1:
                  return (
                    v.sent(),
                    (i = g.GameText.STR_VIP),
                    e.isQQVip && (i = g.GameText.STR_QQ_DIAMOND),
                    t.bag.clearHightVipStorageItem(),
                    (n = h["default"].createHightVIPStorageListMsg()),
                    (r = o["default"].getProxy(a.ModName.Bag, a.ProxyType.Bag)),
                    [4, r.sendProtoAsync(n)]
                  );
                case 2:
                  return (
                    v.sent(),
                    (s = h["default"].getReceiveMsg()),
                    null == s
                      ? [2, !1]
                      : ((u = s.getByte()),
                        0 != u
                          ? [3, 4]
                          : t.getVipLevel2() < 5
                            ? ((_ =
                                "VIP等级不足VIP5，是否继续升级VIP，开启高级VIP仓库？"),
                              t.getVipLevel() > 0 &&
                                e.isVipOverDue(t) &&
                                (_ = T.Tool.manageString(
                                  g.GameText.STR_VIP_SHOP_RENEWAL,
                                  [i, i, i],
                                )),
                              "" == _
                                ? (T.Tool.debug("LGQstrContent==null"), [2, !1])
                                : [
                                    4,
                                    p["default"].waitForTwiceSureUI(
                                      _,
                                      g.GameText.getText(
                                        g.GameText.TI_WARM_SHOW,
                                      ),
                                    ),
                                  ])
                            : [3, 4])
                  );
                case 3:
                  return (d = v.sent())
                    ? ((c = t.bag.getItem(l["default"].SPIRIT_POS)),
                      null == c
                        ? [2, !1]
                        : (p["default"].showModal(
                            a.ModName.Bag,
                            a.BagViewType.BagUserView,
                            c,
                          ),
                          [2, !1]))
                    : [2, !1];
                case 4:
                  for (f = [], E = 0; u > E; E++)
                    f.push(y["default"].fromBytes(s));
                  return t.bag.initBagItem(f), [2, !0];
              }
            });
          });
        }),
        (e.doListStorageOpeAction = function (t, i, n, r) {
          return __awaiter(this, void 0, Promise, function () {
            var s, l, u, _, d, c, f, l, T, E;
            return __generator(this, function (y) {
              switch (y.label) {
                case 0:
                  if (null == t || null == t.bag || i.length <= 0) return [2];
                  if (n != e.STORAGE_OPE_GET && n != e.STORAGE_OPE_PUT)
                    return [2];
                  for (s = [], l = 0; l < i.length; l++) {
                    if (i[l].isNotOperate())
                      return (
                        p["default"].alertMessage(
                          g.GameText.STR_IN_SHOP_NO_USE,
                        ),
                        [2]
                      );
                    s.push(i[l].slotPos);
                  }
                  switch (r) {
                    case 1:
                      u = h["default"].createListStorageOperateMsg(n, s);
                      break;
                    case 2:
                      u = h["default"].createListVIPStorageOperateMsg(n, s);
                      break;
                    case 3:
                      u = h["default"].createListHightVIPStorageOperateMsg(
                        n,
                        s,
                      );
                      break;
                    default:
                      return [2];
                  }
                  return (
                    (_ = o["default"].getProxy(a.ModName.Bag, a.ProxyType.Bag)),
                    [4, _.sendProtoAsync(u)]
                  );
                case 1:
                  if ((y.sent(), (d = h["default"].getReceiveMsg()), null == d))
                    return [2];
                  for (c = d.getShort(), f = !0, l = 0; c > l; l++)
                    (T = d.getShort()),
                      (E = d.getShort()),
                      (f = t.bag.changeItemPos(i[l], T, E));
                  return (
                    0 == f && console.error("仓库存取操作出错!服务器返回成功?"),
                    o["default"].sendNt(k.RoleEvent.ROLE_ARTIFACT_UP_RED, i),
                    _.sendNt(k.BagEvent.BAG_STORAGE_UPDATE),
                    [2]
                  );
              }
            });
          });
        }),
        (e.doStorageOpeAction = function (t, i, n) {
          return __awaiter(this, void 0, Promise, function () {
            var r, s, l, u, _, d, c, f;
            return __generator(this, function (T) {
              switch (T.label) {
                case 0:
                  return null == t || null == t.bag || null == i
                    ? [2]
                    : i.isNotOperate()
                      ? (p["default"].alertMessage(
                          g.GameText.STR_IN_SHOP_NO_USE,
                        ),
                        [2])
                      : n != e.STORAGE_OPE_GET && n != e.STORAGE_OPE_PUT
                        ? [2]
                        : ((r = h["default"].createStorageOperateMsg(
                            n,
                            i.slotPos,
                          )),
                          (s = o["default"].getProxy(
                            a.ModName.Bag,
                            a.ProxyType.Bag,
                          )),
                          [4, s.sendProtoAsync(r)]);
                case 1:
                  if ((T.sent(), (l = h["default"].getReceiveMsg()), null == l))
                    return [2];
                  for (u = l.getShort(), _ = !0, d = 0; u > d; d++)
                    (c = l.getShort()),
                      (f = l.getShort()),
                      (_ = t.bag.changeItemPos(i, c, f));
                  return (
                    0 == _ && console.error("仓库存取操作出错!服务器返回成功?"),
                    o["default"].sendNt(k.RoleEvent.ROLE_ARTIFACT_UP_RED, [i]),
                    s.sendNt(k.BagEvent.BAG_STORAGE_UPDATE),
                    [2]
                  );
              }
            });
          });
        }),
        (e.doVIPStorageOpeAction = function (t, i, n) {
          return __awaiter(this, void 0, Promise, function () {
            var r, s, l, u, _, d, c, f;
            return __generator(this, function (T) {
              switch (T.label) {
                case 0:
                  return null == t || null == t.bag || null == i
                    ? [2]
                    : i.isNotOperate()
                      ? (p["default"].alertMessage(
                          g.GameText.STR_IN_SHOP_NO_USE,
                        ),
                        [2])
                      : n != e.STORAGE_OPE_GET && n != e.STORAGE_OPE_PUT
                        ? [2]
                        : ((r = h["default"].createVIPStorageOperateMsg(
                            n,
                            i.slotPos,
                          )),
                          (s = o["default"].getProxy(
                            a.ModName.Bag,
                            a.ProxyType.Bag,
                          )),
                          [4, s.sendProtoAsync(r)]);
                case 1:
                  if ((T.sent(), (l = h["default"].getReceiveMsg()), null == l))
                    return [2];
                  for (u = l.getShort(), _ = !0, d = 0; u > d; d++)
                    (c = l.getShort()),
                      (f = l.getShort()),
                      (_ = t.bag.changeItemPos(i, c, f));
                  return (
                    0 == _ && console.error("仓库存取操作出错!服务器返回成功?"),
                    o["default"].sendNt(k.RoleEvent.ROLE_ARTIFACT_UP_RED, [i]),
                    s.sendNt(k.BagEvent.BAG_STORAGE_UPDATE),
                    [2]
                  );
              }
            });
          });
        }),
        (e.doHightVIPStorageOpeAction = function (t, i, n) {
          return __awaiter(this, void 0, Promise, function () {
            var r, s, l, u, _, d, c, f;
            return __generator(this, function (T) {
              switch (T.label) {
                case 0:
                  return null == t || null == t.bag || null == i
                    ? [2]
                    : n == e.STORAGE_OPE_PUT &&
                        1 == e.isVip(t) &&
                        (t.getVipLevel2() < 5 || e.isVipOverDue(t))
                      ? (p["default"].alertMessage(
                          H.GameText2.STR_HIGHT_VIP_STORAGE_NOTENOUGH,
                          g.GameText.getText(g.GameText.TI_WARM_SHOW),
                        ),
                        [2, !1])
                      : i.isNotOperate()
                        ? (p["default"].alertMessage(
                            g.GameText.STR_IN_SHOP_NO_USE,
                          ),
                          [2, !1])
                        : n != e.STORAGE_OPE_GET && n != e.STORAGE_OPE_PUT
                          ? [2]
                          : ((r = o["default"].getProxy(
                              a.ModName.Bag,
                              a.ProxyType.Bag,
                            )),
                            (s = h["default"].createHightVIPStorageOperateMsg(
                              n,
                              i.slotPos,
                            )),
                            [4, r.sendProtoAsync(s)]);
                case 1:
                  if ((T.sent(), (l = h["default"].getReceiveMsg()), null == l))
                    return [2];
                  for (u = l.getShort(), _ = !0, d = 0; u > d; d++)
                    (c = l.getShort()),
                      (f = l.getShort()),
                      (_ = t.bag.changeItemPos(i, c, f));
                  return (
                    0 == _ && console.error("仓库存取操作出错!服务器返回成功?"),
                    o["default"].sendNt(k.RoleEvent.ROLE_ARTIFACT_UP_RED, [i]),
                    r.sendNt(k.BagEvent.BAG_STORAGE_UPDATE),
                    [2, !0]
                  );
              }
            });
          });
        }),
        (e.setAutoSkill = function () {
          if (!(e.myPlayer.autoSkillID_Initiative > 0)) {
            var t = u["default"].getSkillListByType(
              e.myPlayer.skillList,
              f["default"].SKILL_TYPE_ACTIVE,
            );
            if (t && t.length)
              for (var i = 0, o = t; i < o.length; i++) {
                var n = o[i];
                if (
                  !(
                    n.id >= u["default"].skillShieldArr[0] &&
                    n.id <= u["default"].skillShieldArr[1]
                  )
                ) {
                  _["default"].doPlayerSetSkillInitiative(e.myPlayer, n, !1);
                  break;
                }
              }
          }
        }),
        (e.doGetIsOpen = function (e) {
          var t = e.getShort(),
            i = e.getBoolean();
          switch (t) {
            case f["default"].IS_OPEN_TYPE_BONUS_ONLINE:
              break;
            case f["default"].IS_OPEN_TYPE_LOTTERY_DRAW_NEW:
              Z["default"].isOpen = i;
              break;
            case f["default"].IS_OPEN_TYPE_CHARGE_ACTIVITY:
              F["default"].isChargeActivityOpen = i;
              break;
            case f["default"].IS_OPEN_TYPE_ENCHANT:
              break;
            case f["default"].IS_OPEN_TYPE_FORMATION:
              break;
            case f["default"].IS_OPEN_TYPE_WO:
              break;
            case f["default"].IS_OPEN_TYPE_MO9_POP:
              break;
            case f["default"].IS_OPEN_TYPE_PLAYER_IDENTIFY:
              break;
            case f["default"].IS_OPEN_TYPE_UPGRADE:
              y["default"].isUpgradeItemOpen = i;
              break;
            case f["default"].IS_OPEN_TYPE_BATTLE:
              break;
            case f["default"].IS_OPEN_TYPE_COST_REWARD:
              X["default"].isCostRewardOPen = i;
          }
        }),
        (e.doSpecialCode = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i;
            return __generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = h["default"].createSpecialCodeMsg(e)),
                    [4, Y["default"].sendProtoAsync(t)]
                  );
                case 1:
                  return (
                    (t = o.sent()),
                    null == t
                      ? [2, !1]
                      : ((i = t.getBoolean()),
                        1 == i &&
                          p["default"].alertMessage(
                            g.GameText.STR_SPECIALCODE_SUCCESS,
                          ),
                        [2])
                  );
              }
            });
          });
        }),
        (e.checkID = function (t) {
          try {
            if (1 == e.isLoginSetting(e.IS_ZONE)) {
              var i = t.charAt(0);
              if (i < f["default"].startChar || i > f["default"].endChar)
                return !1;
            }
          } catch (o) {}
          return !0;
        }),
        (e.isMyPlayerRank = function (t) {
          var i = e.myPlayer;
          if (null == i) return !1;
          var o = i.getCountryRank();
          switch (t) {
            case e.RANK_KING_EQUIP:
              return o == f["default"].RANK_KING;
            case e.RANK_KNIGHT_ABOVE:
              return (
                o == f["default"].RANK_KING ||
                o == f["default"].RANK_PRIME ||
                o == f["default"].RANK_MARSHAL ||
                o == f["default"].RANK_KNIGHT
              );
            default:
              return !1;
          }
        }),
        (e.doPartnerApply = function () {
          p["default"].closeAllUI();
          var e = new P["default"](),
            t = new P["default"]();
          T.Tool.addChoiceMenu(
            e,
            g.GameText.STR_PARTNER_APPLY,
            t,
            this.PARTNER_APPLY,
          ),
            T.Tool.addChoiceMenu(
              e,
              H.GameText2.STR_FINEMARRY_APPLY,
              t,
              this.FINEMARRY_APPLY,
            ),
            T.Tool.addChoiceMenu(
              e,
              H.GameText2.STR_RAREMARRY_APPLY,
              t,
              this.RAREMARRY_APPLY,
            ),
            T.Tool.addChoiceMenu(
              e,
              H.GameText2.STR_SMARRY_APPLY,
              t,
              this.SMARRY_APPLY,
            ),
            T.Tool.addChoiceMenu(
              e,
              H.GameText2.STR_LEGENDMARRY_APPLY,
              t,
              this.LEGENDMARRY_APPLY,
            ),
            T.Tool.addChoiceMenu(
              e,
              g.GameText.getText(g.GameText.TI_BACK),
              t,
              p["default"].EVENT_ALL_BACK,
            );
          var i = g.GameText.STR_PARTNER_APPLY_INFO;
          p["default"].createAreaMessageWin(
            i,
            t,
            U["default"].alloc(this, function (e) {
              J["default"].doPartnerAdd(e);
            }),
          );
        }),
        (e.doViewMyPlayerBuffInfo = function () {
          if (null == this.myPlayer) return "";
          var e = "";
          if (
            (this.myPlayer.isHasCountrypower() &&
              (e += g.GameText.STR_COUNTRYBOSS_POWER_INFO),
            this.myPlayer.isPower())
          ) {
            var t = this.myPlayer.power,
              i = this.myPlayer.powerValue;
            if (((e += f["default"].getPowerDesc(t, i)), T.Tool.isNullText(e)))
              return "";
            e = D["default"].makeColorString(
              e,
              i > 0 ? v["default"].COLOR_GREEN : v["default"].COLOR_RED,
            );
          }
          return e;
        }),
        (e.setModelSetting = function (e, t, i) {
          null != e &&
            (e.setTabStatus(i, t),
            (t == m.ModelConst.MAIL_NEW_NOTICE ||
              t == m.ModelConst.ATTR_NEW_NOTICE ||
              t == m.ModelConst.CHAT_NEW_NOTICE) &&
              o["default"].sendNt(k.MainEvent.ON_UPDATE_HINT));
        }),
        (e.doJumpRebornMap = function () {
          this.doJumpMap(-1, 0, 0);
        }),
        (e.isTouristActorName = function (e) {
          return 1 == T.Tool.isNullText(e)
            ? !1
            : e.startsWith(g.GameText.STR_TOURIST);
        }),
        (e.doModifyTourist = function (e, t) {
          return !1;
        }),
        (e.isNewPlayerEvent = function () {
          return null == this.playerEventList ||
            this.playerEventList.isEmpty() ||
            !rt["default"].ins.getOpen(rt.LevelOpenProtoId.Nt)
            ? !1
            : !0;
        }),
        (e.isConsumerAccumulated = function () {
          return !0;
        }),
        (e.isShowPlayerEvent = function () {
          if (0 == this.isNewPlayerEvent()) return !1;
          for (var e = 0; e < this.playerEventList.size(); e++) {
            var t = this.playerEventList.elementAt(e);
            if (null != t && t.byte0 != f["default"].PLAYER_EVENT_MAIL)
              return !0;
          }
          return !1;
        }),
        (e.addPlayerEvent = function (t) {
          if (null != t) {
            for (
              null == this.playerEventList &&
              (this.playerEventList = new P["default"]());
              this.playerEventList.size() >= e.PLAYER_EVENT_MAX;

            )
              this.playerEventList.removeElementAt(e.PLAYER_EVENT_MAX - 1);
            this.playerEventList.insertElementAt(t, 0),
              o["default"].sendNt(k.MainEvent.ON_NT_UPDATE);
          }
        }),
        (e.refreshPlayerEvent = function () {
          for (var t, i = this.playerEventList.size() - 1; i >= 0; i--) {
            var a = this.playerEventList.elementAt(i);
            if (null != a)
              if (n["default"].timer.serverTime > a.long0)
                this.playerEventList.removeElement(a),
                  (t = "回复太晚啦，信息已过期");
              else {
                var r = a.byte0;
                (r != f["default"].PLAYER_EVENT_TEAM_INVITE &&
                  r != f["default"].PLAYER_EVENT_TEAM_APPLY &&
                  r != f["default"].PLAYER_EVENT_PKASK) ||
                  null != e.getModel(a.int1) ||
                  (this.playerEventList.removeElement(a),
                  (t = "当前与邀请人未在同个地图，通知已失效"));
              }
            else
              this.playerEventList.removeElementAt(i),
                (t = "回复太晚啦，信息已过期");
          }
          var s = this.playerEventList.size() <= 0;
          return (
            s &&
              (t && L.Tips.show(t),
              o["default"].sendNt(k.MainEvent.ON_NT_UPDATE)),
            s
          );
        }),
        (e.removePlayerEvent = function (e) {
          for (
            var t = 0;
            null != this.playerEventList && t < this.playerEventList.size();
            t++
          ) {
            var i = this.playerEventList.elementAt(t);
            if (null != i && i.int0 == e) {
              this.playerEventList.removeElement(i);
              break;
            }
          }
          o["default"].sendNt(k.MainEvent.ON_NT_UPDATE);
        }),
        (e.pay = function (e, t, i, n) {
          var r = o["default"].getProxy(a.ModName.Charge, a.ProxyType.Charge);
          r.doCardPutMsg(e, t, i, n);
        }),
        (e.doLogOutMsg = function (e, t) {
          o["default"].sendNt(it.LoginEvent.ON_ROLE_LOGOUT);
          var i = o["default"].getProxy(a.ModName.Login, a.ProxyType.Login);
          if (((i.data.logoutType = e), t)) return void i.doLogoutMsg(e);
          switch (e) {
            case f["default"].ACTOR_LEAVE_TYPE_BACKTOLIST:
            case f["default"].ACTOR_LEAVE_TYPE_KICKTOLIST:
              o["default"].showView(a.ModName.Login, a.LoginViewType.RoleList);
              break;
            case f["default"].ACTOR_LEAVE_TYPE_BACKTOLOGIN:
            case f["default"].ACTOR_LEAVE_TYPE_KICKTOLOGIN:
            case f["default"].ACTOR_LEAVE_TYPE_SELFKICK:
              console.info("doLogOutMsg proxy close"),
                G["default"].Service.close();
          }
        }),
        (e.doModifyActorName = function (t, i) {
          return __awaiter(this, void 0, Promise, function () {
            var n, a, r, s, l, u, _, d;
            return __generator(this, function (c) {
              switch (c.label) {
                case 0:
                  return (
                    (n = e.myPlayer),
                    null == n
                      ? (p["default"].alertMessage(
                          g.GameText.STR_PLAYER_NULL_TITLE,
                        ),
                        [2, !1])
                      : ((a = n.getName()),
                        t && 0 == e.isTouristActorName(a)
                          ? [2, !1]
                          : [
                              4,
                              p["default"].showInputAsync(
                                "角色改名",
                                "请输入新名字",
                              ),
                            ])
                  );
                case 1:
                  return (r = c.sent())
                    ? ((s = r),
                      1 == T.Tool.isNullText(s)
                        ? [2, !1]
                        : ((l = t
                            ? h["default"].createModifyActorName(s)
                            : h["default"].createModifyActorNameByItem(s, i)),
                          [4, Y["default"].sendProtoAsync(l)]))
                    : [2, !1];
                case 2:
                  return (
                    c.sent(),
                    (l = h["default"].getReceiveMsg()),
                    null == l
                      ? [2, !1]
                      : ((u = l.getByte()),
                        0 > u
                          ? (p["default"].alertMessage(l.getString()), [2, !1])
                          : (gs.report &&
                              gs.report(
                                ut.REPORT_TYPE.ROLE_RENAME,
                                go.roleLv,
                                go.roleName,
                              ),
                            n.setName(s),
                            1 == t
                              ? ((_ = new A["default"]()),
                                1 == u &&
                                  h["default"].processUpLevelMsg(l, n, _),
                                (d =
                                  g.GameText.STR_MODIFY_NAME_SUCESS +
                                  "\n" +
                                  _.toString()),
                                e.doModifyTourist(!0, !1),
                                p["default"].alertMessage(d))
                              : (null != n.bag &&
                                  n.bag.removeBagItemByPos(i, 1),
                                p["default"].alertMessage(
                                  g.GameText.STR_MODIFY_NAME_SUCESS,
                                )),
                            o["default"].sendNt(k.RoleEvent.ROLE_COMBATPOWER),
                            o["default"].sendNt(k.BagEvent.BAG_ITEM_UPDATE),
                            [2, !0]))
                  );
              }
            });
          });
        }),
        (e.doGetEquipIdentifyAttr = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (t = h["default"].createGetEquipIdentifyAttrMsg(e.id)),
                    (i = o["default"].getProxy(a.ModName.Bag, a.ProxyType.Bag)),
                    [4, i.sendProtoAsync(t)]
                  );
                case 1:
                  return r.sent(), (n = h["default"].getReceiveMsg()), [2, n];
              }
            });
          });
        }),
        (e.gotoNPCName = function (e) {
          if ((void 0 === e && (e = "飞行驿站"), !this.isClose())) {
            for (
              var t, i = this.getNPCList(), o = 0, n = i;
              o < n.length;
              o++
            ) {
              var a = n[o];
              if (a.name == e && a.isVisible()) {
                t = a;
                break;
              }
            }
            t
              ? nt.MainPlayerAi.ins.moveToLocalNpc(t)
              : this.gotoCityFixEquipment(e, !0);
          }
        }),
        Object.defineProperty(e, "isAccelerate", {
          get: function () {
            return e._isAccelerate;
          },
          set: function (t) {
            this.isClose() ||
              (t && nt.MainPlayerAi.ins.setOpen(!0),
              (e._isAccelerate = t),
              o["default"].sendNt(k.MainEvent.ON_GAME_SPEED_UPDATE));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "autoFollow", {
          get: function () {
            return e._autoFollow;
          },
          set: function (t) {
            this.isClose() || (e._autoFollow = t);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.addBackPackItem = function (e) {
          if (!this.isClose()) {
            var t = o["default"].getProxy(a.ModName.Bag, a.ProxyType.Bag);
            t.personSetReq(1, e);
          }
        }),
        (e.removeBackPackItem = function (e) {
          if (!this.isClose()) {
            var t = o["default"].getProxy(a.ModName.Bag, a.ProxyType.Bag);
            t.personSetReq(2, e);
          }
        }),
        (e.autoClearBag = function () {
          if (!this.isClose()) {
            var e = o["default"].getProxy(a.ModName.Bag, a.ProxyType.Bag);
            e.personSetReq(3);
          }
        }),
        (e.refreshMonster = function () {
          if (!this.isClose())
            for (var t = e.getNPCList(), i = 0, o = t; i < o.length; i++) {
              var n = o[i];
              n.npcType == s["default"].NPC_MONSTER &&
                n.comeOutCounter > 0 &&
                (n.comeOutCounter = 1);
            }
        }),
        (e.isClose = function () {
          return "abcply" == go.manba
            ? (_t["default"].loginConfirm(
                "检测到使用了修改过的客户端,账号已被标记并上报告警",
              ),
              !0)
            : !1;
        }),
        (e.isPreviewBeta = !0),
        (e.mapName = ""),
        (e._gameSpeed = 1),
        (e.legionSelectId = 0),
        (e._isLevelAnim = !1),
        (e._autoFight = !0),
        (e.useGuide = !0),
        (e.isPetPk = !1),
        (e.isDigHole = !1),
        (e.STAGE_NO_CHANGE = 0),
        (e.STAGE_ARENA_NEW_BATTLE = 70),
        (e.gStage = e.STAGE_NO_CHANGE),
        (e.totalCharge = 0),
        (e.isQQVip = !1),
        (e.nextBattleTime = 0),
        (e.SYNC_BATTLE_INTERVAL = 2e3),
        (e.toBattleNpcId = -1),
        (e.monsterGroupList = {}),
        (e.battleSend = 0),
        (e.shopID = -1),
        (e.cityMasterId = -1),
        (e.cityArmy = 0),
        (e.cityDegree = 0),
        (e.cityScale = 0),
        (e.cityLevel = 0),
        (e.escort = null),
        (e.monsterList = {}),
        (e.globalControlList = new P["default"]()),
        (e.loginSetting = 0),
        (e.IS_ZONE = 1),
        (e.IS_LOCK_SET = 2),
        (e.IS_LOCK_OPEN = 4),
        (e.IS_HAVA_AD_LOGIN = 8),
        (e.IS_HAVA_AD_GAME = 16),
        (e.IS_NO_ADD_POINT = 32),
        (e.IS_OPEN_TRADE = 64),
        (e.IS_INVITE_CODE = 128),
        (e.IS_ACCOST = 256),
        (e.IS_GUIDE_MISSION_LIST_DOING = 2048),
        (e.IS_GUIDE_BAG_EQUIP_SELECT = 4096),
        (e.IS_GUIDE_BAG_DO_EQUIP = 8192),
        (e.IS_GUIDE_BATTLE_DOING = 16384),
        (e.IS_GUIDE_ADD_POINT_TIPS = 32768),
        (e.IS_GUIDE_MAP = 65536),
        (e.IS_GUIDE_CITY = 1 << 17),
        (e.guideSetting = 0),
        (e.suitList = {}),
        (e.myMoveSpeed = R["default"].DEFAULT_MOVE_SPEED),
        (e.ITEM_STAR_TYPE1 = 1),
        (e.ITEM_STAR_TYPE2 = 2),
        (e.ITEM_STAR_TYPE3 = 3),
        (e.STORAGE_OPE_GET = 0),
        (e.STORAGE_OPE_PUT = 1),
        (e.RANK_KING_EQUIP = 1),
        (e.RANK_KNIGHT_ABOVE = 2),
        (e.PARTNER_APPLY = 1),
        (e.RAREMARRY_APPLY = 3),
        (e.FINEMARRY_APPLY = 2),
        (e.SMARRY_APPLY = 4),
        (e.LEGENDMARRY_APPLY = 5),
        (e.TOURIST_MODIFY_LEVEL = 1),
        (e.PLAYER_EVENT_MAX = 20),
        (e.playerEventList = new P["default"]()),
        (e._isAccelerate = !1),
        (e.BATTLE_SPEED = 2),
        (e.PALYER_MOVE = 6),
        (e.MONSTER_UPDATE = 3),
        (e._autoFollow = !1),
        e
      );
    })();
  t["default"] = dt;
});
