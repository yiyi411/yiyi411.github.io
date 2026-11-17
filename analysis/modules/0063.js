(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.UIAction = void 0));
  var o = i(3),
    n = i(43),
    a = i(22),
    r = i(11),
    s = i(18),
    l = i(19),
    u = i(185),
    _ = i(5),
    d = i(41),
    p = i(102),
    c = i(31),
    h = i(2),
    f = i(0),
    T = i(32),
    E = i(57),
    y = i(4),
    g = i(10),
    v = i(23),
    S = i(30),
    I = i(15),
    m = i(77),
    A = i(1),
    C = i(24),
    P = i(8),
    R = i(33),
    O = i(387),
    N = i(67),
    M = i(252),
    L = i(117),
    w = i(158),
    b = i(42),
    x = i(388),
    D = i(389),
    B = i(38),
    G = i(25),
    U = i(59),
    k = i(27),
    V = i(35),
    H = i(390),
    F = (function () {
      function e() {}
      return (
        (e.doMenuButton = function (t, i, n, a) {
          var u = null;
          switch ((null != a && (u = a.chatMsg), t)) {
            case A["default"].EVENT_CHANGE_PASSWORD:
              o["default"].showView(f.ModName.Login, f.LoginViewType.ResetPsd);
              break;
            case A["default"].EVENT_CHANGE_BIND:
              k["default"].loginConfirm(
                g.GameText.REBIND_ACCOUNT,
                r["default"].alloc(null, function () {
                  o["default"].showView(
                    f.ModName.Login,
                    f.LoginViewType.LoginReBind,
                  );
                }),
                null,
                !0,
                null,
                null,
                "我要解绑",
                "再考虑一下",
                !0,
              );
              break;
            case A["default"].EVENT_DEL_ACCOUNT:
              k["default"].confirm(
                g.GameText.DEL_ACCOUNT_TIPS,
                r["default"].alloc(null, function () {
                  var e = o["default"].getProxy(
                    f.ModName.Login,
                    f.ProxyType.Login,
                  );
                  ((e.data.delAccountFlag = !0),
                    _["default"].doLogOutMsg(
                      y["default"].ACTOR_LEAVE_TYPE_BACKTOLOGIN,
                      !0,
                    ));
                }),
              );
              break;
            case A["default"].EVENT_ACCOUNT_BIND:
              gs.bindAccount && gs.bindAccount();
              break;
            case A["default"].EVENT_OPEN_CUSTOMER_SERVICE:
              if (gs.showCustomerService) {
                var T = P.Tool.getStyle(_["default"].myPlayer),
                  E = U["default"].ins.getRealUrl(T, ".png");
                gs.showCustomerService(
                  null,
                  null,
                  null,
                  E,
                  _["default"].totalCharge,
                );
              }
              break;
            case A["default"].EVENT_OPEN_USER_POLICY:
              o["default"].showView(
                f.ModName.Login,
                f.LoginViewType.PrivacyPolicy,
                1,
              );
              break;
            case A["default"].EVENT_OPEN_USER_AGREEMENT:
              o["default"].showView(
                f.ModName.Login,
                f.LoginViewType.PrivacyPolicy,
              );
              break;
            case A["default"].EVENT_ALL_ALL_VIEW_WORLD_SHOP:
              _["default"].doBrowseShop(y["default"].SHOP_MARKETPLACE, null);
              break;
            case A["default"].EVENT_ALL_MENU_VIEW_BATTLE:
              null != i && _["default"].doBattleSeeInter(i.getId());
              break;
            case A["default"].EVENT_ALL_INFO_PLAYER_INFO_HPMP:
              _["default"].doQuickAddHP(_["default"].myPlayer);
              break;
            case A["default"].EVENT_ALL_INFO_PET_INFO_HEAD:
              break;
            case A["default"].EVENT_ALL_MENU_MASTER_LIST:
              A["default"].createMasterListUI();
              break;
            case A["default"].EVENT_ALL_MENU_ADD_MASTER:
              d["default"].doRelationAddMaster(i);
              break;
            case A["default"].EVENT_ALL_MENU_DEL_MASTER:
              d["default"].doRelationDelMaster(i);
              break;
            case A["default"].EVENT_ALL_INFO_NEW_EVENT:
            case A["default"].EVENT_ALL_MENU_PLAYER_EVENT:
              A["default"].createPlayerEventUI();
              break;
            case A["default"].EVENT_ALL_MENU_RELATION_FLY:
              _["default"].doRelationFlyAction(i);
              break;
            case A["default"].EVENT_ALL_INFO_DUR_BROCKEN:
              var C = new S["default"]();
              (C.append(g.GameText.STR_ALL_INFO_DUR_BROCKEN),
                _["default"].myPlayer.bag.isDestroyEquip(!1, C));
              var R = _["default"].myPlayer.bag,
                O = R.getItemNumByID(y["default"].ITEM_ID_REPAIR);
              O > 0
                ? A["default"].alertMessage(
                    C.toString(),
                    null,
                    r["default"].alloc(this, function () {
                      var t = R.getItemByID(y["default"].ITEM_ID_REPAIR);
                      t
                        ? e.processEquipPopLayer(
                            A["default"].EVENT_ALL_ITEM_USE,
                            t,
                            _["default"].myPlayer,
                          )
                        : I.Tips.show("目前没有野外修理卷轴");
                    }),
                    "使用卷轴",
                    r["default"].alloc(this, function () {
                      _["default"].gotoCityFixEquipment();
                    }),
                    "前往修理",
                    G.GuideSpriteId.goRepairBtn,
                    { isGuideLeftBtn: !0 },
                  )
                : A["default"].alertMessage(
                    C.toString(),
                    null,
                    r["default"].alloc(this, function () {
                      _["default"].gotoCityFixEquipment();
                    }),
                    "前往修理",
                    void 0,
                    void 0,
                    G.GuideSpriteId.goRepairBtn,
                  );
              break;
            case A["default"].EVENT_ALL_MENU_COUNTRY_ADJUST_JOB:
              o["default"].sendNt(h.CountryEvent.CountryMenu, [t, i]);
              break;
            case A["default"].EVENT_ALL_MENU_COUNTRY_BECOME_KING:
              o["default"].sendNt(h.CountryEvent.CountryMenu, [t, i]);
              break;
            case A["default"].EVENT_ALL_MENU_CHAT_SAME_CHANNEL:
              var w = u.channel;
              A["default"].showWin(f.ModName.Chat, f.ChatViewType.ChatAllView, {
                channel: w,
              });
              break;
            case A["default"].EVENT_ALL_MENU_CHAT_ITEM_SEE:
              null != u && u.doViewChatItem(i);
              break;
            case A["default"].EVENT_ALL_MENU_CHAT_MISSION_SEE:
              null != u && u.doViewChatMission(i);
              break;
            case A["default"].EVENT_ALL_MENU_CHAT_COUNTRY_SEE:
              null != u &&
                o["default"].sendNt(h.CountryEvent.CountryMenu, [
                  t,
                  u.countryID,
                ]);
              break;
            case A["default"].EVENT_ALL_MENU_RANK:
              A["default"].createRankListUI();
              break;
            case A["default"].EVENT_ALL_MENU_SHOPING:
              break;
            case A["default"].EVENT_ALL_MENU_TEAM:
              break;
            case A["default"].EVENT_ALL_INFO_TEAM_ICON:
              break;
            case A["default"].EVENT_ALL_MENU_NOTICE:
              A["default"].alertMessage(
                _["default"].gameNotice,
                g.GameText.STR_GAME_NOTICE,
              );
              break;
            case A["default"].EVENT_ALL_MENU_SYSTEM_PLAYER_LIST:
              ((c.ModelVo.maxVIP = -1),
                _["default"].doLogOutMsg(
                  y["default"].ACTOR_LEAVE_TYPE_BACKTOLIST,
                  !0,
                ));
              break;
            case A["default"].EVENT_ALL_MENU_SYSTEM_CHAT_SET:
              break;
            case A["default"].EVENT_ALL_MENU_SYSTEM_MOVE:
              _["default"].doJumpRebornMap();
              break;
            case A["default"].EVENT_ALL_MENU_SYSTEM_REFLASH:
              (s["default"].createWorldDataReflashMsg(), I.Tips.show("已刷新"));
              break;
            case A["default"].EVENT_ALL_MENU_SYSTEM_QUIT:
              gs.logout && !go.isdownjoy
                ? gs.logout()
                : _["default"].doLogOutMsg(
                    y["default"].ACTOR_LEAVE_TYPE_BACKTOLOGIN,
                    !0,
                  );
              break;
            case A["default"].EVENT_OPEN_USER_CENTER:
              gs.openUserCenter && gs.openUserCenter();
              break;
            case A["default"].EVENT_ALL_MENU_RELATION:
              A["default"].showWin(
                f.ModName.Relation,
                f.RelationViewType.RelationMain,
              );
              break;
            case A["default"].EVENT_ALL_LEAVE_COUNTRY:
              o["default"].sendNt(h.CountryEvent.CountryMenu, [t, i]);
              break;
            case A["default"].EVENT_ALL_MENU_CHAT:
              A["default"].showPrivateChat(i);
              break;
            case A["default"].EVENT_ALL_MENU_FRIEND:
              d["default"].doRelationAddMsg(
                y["default"].RELATION_FRIEND,
                l["default"].MAIL_SEND_ID,
                i.getId(),
              );
              break;
            case A["default"].EVENT_ALL_MENU_BLACK:
              d["default"].doRelationAddMsg(
                y["default"].RELATION_BLACK,
                l["default"].MAIL_SEND_ID,
                i.getId(),
              );
              break;
            case A["default"].EVENT_ALL_MENU_PK:
              if (null != i) {
                var b = s["default"].createPKAskMsg(i.getId());
                s["default"].sendRequest(b);
              }
              break;
            case A["default"].EVENT_ALL_MENU_INVITE_COUNTRY:
              if (null != i) {
                var b = s["default"].createCountryInvite(i.getId());
                s["default"].sendRequest(b);
              }
              break;
            case A["default"].EVENT_ALL_MENU_SEE_CITY:
              A["default"].createCityInfoUI(i.getId());
              break;
            case A["default"].EVENT_ALL_MENU_SEND_MAIL:
              null != i && this.createMailSendUI(i);
              break;
            case A["default"].EVENT_ALL_MENU_SEND_MAIL_BY_ID:
              null != i && this.createMailSendUI(i);
              break;
            case A["default"].EVENT_ALL_MENU_CANTACT_SELLER:
              if (null != i) {
                var V = new c.ModelVo(c.MODEL_TYPE.TYPE_PLAYER);
                (V.setId(i.getOwnerId()), this.createMailSendUI(V));
              }
              break;
            case A["default"].EVENT_ALL_MENU_SEE_SHOP:
              N.ShopItem.doPlayerShopListMsg(i);
              break;
            case A["default"].EVENT_ALL_MENU_INVITE_TEAM:
              d["default"].doInviteTeamMsg(_["default"].myPlayer, i);
              break;
            case A["default"].EVENT_ALL_MENU_JOIN_TEAM:
              d["default"].doJoinTeamMsg(_["default"].myPlayer, i);
              break;
            case A["default"].EVENT_ALL_MENU_SEE_INFO:
              (i || console.error("otherPlayer_isNull"),
                null != i && i.getType() == c.MODEL_TYPE.TYPE_PLAYER
                  ? s["default"].checkRole(i, l["default"].CG_ACTOR_SEE)
                  : null != i &&
                    i.getType() == c.MODEL_TYPE.TYPE_MERCENARY &&
                    i instanceof p["default"] &&
                    p["default"].doMercenaryInfoMsg(i, i.getId(), !1) &&
                    A["default"].createMercenaryInfoUI(i));
              break;
            case A["default"].EVENT_ALL_MENU_DEL_RELATION:
              if (null == i) return;
              var H = y["default"].RELATION_FRIEND;
              (A["default"].roleUserType == d["default"].UI_INTO_FRIEND_LIST
                ? (H = y["default"].RELATION_FRIEND)
                : A["default"].roleUserType == d["default"].UI_INTO_BLACK_LIST
                  ? (H = y["default"].RELATION_BLACK)
                  : A["default"].roleUserType ==
                      d["default"].UI_INTO_CLOSEFRIEND_LIST &&
                    (H = y["default"].RELATION_CLOSEFRIEND),
                d["default"].doRelationDelMsg(H, i.id));
              break;
            case A["default"].EVENT_ALL_KICK_TEAMER:
              d["default"].doKickTeamerMsg(_["default"].myPlayer, i);
              break;
            case A["default"].EVENT_ALL_CHANGE_LEADER:
              d["default"].doChangeLeaderMsg(_["default"].myPlayer, i);
              break;
            case A["default"].EVENT_ALL_MENU_WORLD_PET:
              A["default"].openPet();
              break;
            case A["default"].EVENT_ALL_INFO_NEW_MAIL:
            case A["default"].EVENT_ALL_MENU_WORLD_MAIL:
              A["default"].showWin(f.ModName.Mail, f.MailViewType.Mail);
              break;
            case A["default"].EVENT_ALL_MENU_WORLD_EQUIP:
              A["default"].openBag();
              break;
            case A["default"].EVENT_ALL_MENU_WORLD_PLAYER:
              A["default"].openRole();
              break;
            case A["default"].EVENT_ALL_MENU_WORLD_COUNTRY:
              A["default"].showWin(
                f.ModName.Country,
                f.CountryViewType.CountryMain,
              );
              break;
            case A["default"].EVENT_ALL_MY_COUNTRY:
              A["default"].showWin(
                f.ModName.Country,
                f.CountryViewType.CountryMain,
              );
              break;
            case A["default"].EVENT_ALL_MENU_WORLD_CITY:
              A["default"].createCityInfoUI();
              break;
            case A["default"].EVENT_ALL_MENU_ACTIVITY_LIST:
              A["default"].createDailyMission();
              break;
            case A["default"].EVENT_ALL_MENU_INFODATA_LIST:
              A["default"].createActivityListUI(
                A["default"].SUB_INFO_DATA_LIST,
              );
              break;
            case A["default"].EVENT_ALL_MENU_ACHIEVE:
              A["default"].createAchieveManageUI();
              break;
            case m.UIDefine.EVENT_ALL_GET_LUACKMONEY:
              null != u && u.doGetLuckMoney();
              break;
            case A["default"].EVENT_ALL_MENU_MONSTER_LIST:
              A["default"].createMonsterListUI();
              break;
            case A["default"].EVENT_ACTOR_BUY_PLAYER:
              var F = i;
              F.doActorSellBuy(F);
              break;
            case A["default"].EVENT_ALL_MENU_SEE_ACHIEVE:
            case A["default"].EVENT_ALL_MENU_SEE_ACHIEVE_SHOP:
              A["default"].createSeeAchieveUI(
                i,
                t == A["default"].EVENT_ALL_MENU_SEE_ACHIEVE_SHOP,
              );
              break;
            case A["default"].EVENT_ALL_MENU_SHOPPLAYER_INFO:
              d["default"].doSeeSellActorInfo(
                i,
                d["default"].ACTOR_SELL_INFO_TYPE_DETAIL,
                null,
              );
              break;
            case A["default"].EVENT_ALL_MENU_SHOPPLAYER_BAG:
              d["default"].doSeeSellActorInfo(
                i,
                d["default"].ACTOR_SELL_INFO_TYPE_ITEM,
                null,
              );
              break;
            case A["default"].EVENT_ALL_MENU_SHOPPLAYER_PETLIST:
              d["default"].doSeeSellActorInfo(
                i,
                d["default"].ACTOR_SELL_INFO_TYPE_PET_LIST,
                null,
              );
              break;
            case A["default"].EVENT_ALL_MENU_SHOPPLAYER_STORE:
              d["default"].doSeeSellActorInfo(
                i,
                d["default"].ACTOR_SELL_INFO_TYPE_STORAGE,
                null,
              );
              break;
            case A["default"].EVENT_ALL_MENU_SHOPPLAYER_STORE_VIP:
              d["default"].doSeeSellActorInfo(
                i,
                d["default"].ACTOR_SELL_INFO_TYPE_STORAGE_VIP,
                null,
              );
              break;
            case A["default"].EVENT_ALL_MENU_SHOPPLAYER_CITY:
              d["default"].doSeeSellActorInfo(
                i,
                d["default"].ACTOR_SELL_INFO_TYPE_CITY,
                null,
              );
              break;
            case A["default"].EVENT_ALL_MENU_SHOPPLAYER_COUNTRY:
              d["default"].doSeeSellActorInfo(
                i,
                d["default"].ACTOR_SELL_INFO_TYPE_COUNTRY,
                null,
              );
              break;
            case A["default"].EVENT_ALL_MENU_LOTTERY_DRAW:
              A["default"].createLotteryDrawUI(
                A["default"].EVENT_LOTTERY_DRAW_LIST_TAB_NOW,
              );
              break;
            case A["default"].EVENT_ALL_MENU_MIX_SERVER_ACTOR_JOIN:
              D["default"].doMixServerActivityActorJoin();
              break;
            case A["default"].EVENT_ALL_MENU_MIX_SERVER_ACTOR_CAN:
              D["default"].doMixServerActivityActorCancel();
              break;
            case A["default"].EVENT_ALL_MENU_MIX_SERVER_COUNTRY_JOIN:
              D["default"].doMixServerActivityCountryJoin();
              break;
            case A["default"].EVENT_ALL_MENU_MIX_SERVER_COUNTRY_CAN:
              D["default"].doMixServerActivityCountryCancel();
              break;
            case A["default"].EVENT_ALL_MENU_NEW_ESCORT_LIST:
              A["default"].createNewEscortRobListUI();
              break;
            case A["default"].EVENT_ALL_SKY_ARENA_MENU:
              A["default"].openSkyArenaproxy();
              break;
            case A["default"].EVENT_ALL_COUNTRY_BOSS_ACTIVATE:
              o["default"].sendNt(h.CountryEvent.CountryMenu, t);
              break;
            case A["default"].EVENT_ALL_COUNTRY_BOSS:
              o["default"].sendNt(h.CountryEvent.CountryMenu, t);
              break;
            case m.UIDefine.EVENT_ALL_PET_RAIDERS:
              A["default"].createPetRaidersUI();
              break;
            case m.UIDefine.EVENT_ALL_MOUNT_RAIDERS:
              A["default"].createMountRaidersUI();
              break;
            case m.UIDefine.EVNET_ALL_ITEM_MAP:
              A["default"].createItemRaidersUI();
              break;
            case m.UIDefine.EVENT_ALL_CHANGE_FRIEND_REMARD:
              A["default"].showInput(
                "好友备注",
                v.GameText2.STR_CHANGE_REMARDS_INFO,
                r["default"].alloc(this, this.changeFb, [i]),
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                !0,
              );
              break;
            case m.UIDefine.EVENT_ALL_DUIHUAN_SHOP:
              _["default"].doBrowseShop(y["default"].SHOP_REWARD_CODE, null);
              break;
            case m.UIDefine.EVENT_ALL_CHAT_UP:
              M.ChatUp.doChatUp(i.getId());
              break;
            case m.UIDefine.EVENT_ALL_LOGIN_LOTTERYDRAW_SHOP:
              L["default"].doEnter();
              break;
            case m.UIDefine.EVENT_ALL_ONLINE_REWARD:
              A["default"].createOnLineRewardUI(0, B.ActType.ACTIVITY_OLD_ONE);
              break;
            case m.UIDefine.EVENT_ALL_MARRY_CARD_SHOP:
              x["default"].doMarryInvitationCard(
                x["default"].WEDDING_CARD_TYPE_ORDINARY,
              );
              break;
            case m.UIDefine.EVENT_ALL_MARRY_ITEM_SHOP:
              x["default"].doMarryInvitationCard(
                x["default"].WEDDING_CARD_TYPE_LUXURY,
              );
              break;
            case A["default"].EVENT_BATTLE_3V3:
              o["default"]
                .getProxy(f.ModName.Pet, f.ProxyType.Pet)
                .doPetPkBattle(i.id, pb.FightType.type_3v3);
              break;
            case A["default"].EVENT_BATTLE_5V5:
              o["default"]
                .getProxy(f.ModName.Pet, f.ProxyType.Pet)
                .doPetPkBattle(i.id, pb.FightType.type_5v5);
              break;
            case A["default"].EVENT_BATTLE_3V3_WORLD:
              o["default"]
                .getProxy(f.ModName.Pet, f.ProxyType.Pet)
                .doPetPkBattleWorld(i.id, pb.FightType.type_3v3);
              break;
            case A["default"].EVENT_BATTLE_5V5_WORLD:
              o["default"]
                .getProxy(f.ModName.Pet, f.ProxyType.Pet)
                .doPetPkBattleWorld(i.id, pb.FightType.type_5v5);
              break;
            case A["default"].EVENT_CROSS_DUNGEON_JOIN_TEAM:
              o["default"].sendNt(
                h.CSActivityEvent.CROSS_DUNGEONS_JOIN_TEAM,
                u,
              );
          }
        }),
        (e.changeFb = function (e, t) {
          var i = new a.Message(l["default"].CG_RELATION_ADD_REMARKS);
          (i.putString(t),
            i.putInt(e.id),
            n["default"].Service.onProto(
              l["default"].CG_RELATION_ADD_REMARKS,
              r["default"].alloc(this, this.onChangeFb),
            ),
            s["default"].sendRequest(i));
        }),
        (e.onChangeFb = function (e) {
          var t = e.body,
            i = t.getByte();
          return 0 > i
            ? void A["default"].alertMessage(t.getString())
            : (A["default"].alertMessage(
                v.GameText2.STR_CHANGE_REMARDS_SUCCESS,
              ),
              void o["default"].sendNt(h.RelationEvent.RELATION_LIST));
        }),
        (e.updatePlayerEquipPopMenu = function (e, t, i, n) {
          var a = new C["default"](),
            r = new C["default"](),
            s = e.getItemClass(),
            l = e.isEquited(),
            u = !1;
          if (
            t == g.GameText.getText(g.GameText.TI_EQUIP) &&
            0 == e.isNotOperate()
          )
            if (i != _["default"].myPlayer)
              P.Tool.addChoiceMenu(
                r,
                g.GameText.getText(g.GameText.TI_BACK),
                a,
                A["default"].EVENT_ALL_BACK,
              );
            else {
              if (e.slotPos == R["default"].SPIRIT_POS);
              else
                switch (s) {
                  case T["default"].ITEM_CLASS_WEAPON:
                  case T["default"].ITEM_CLASS_ARMOR:
                  case T["default"].ITEM_CLASS_BLOOD_BOTTLE:
                    ((u = l),
                      P.Tool.addChoiceMenu(
                        r,
                        u ? g.GameText.STR_REMOVE_EQUIP : g.GameText.STR_EQUIP,
                        a,
                        u
                          ? A["default"].EVENT_ALL_ITEM_UN_EQUIP
                          : A["default"].EVENT_ALL_ITEM_EQUIP,
                      ),
                      (u = e.isCanAttach()),
                      P.Tool.addChoiceMenu(
                        r,
                        u ? g.GameText.STR_GEM : null,
                        a,
                        u ? A["default"].EVENT_ALL_ITEM_INLAY : -1,
                      ),
                      (u = 0 == e.isBinded()),
                      u
                        ? P.Tool.addChoiceMenu(
                            r,
                            u ? g.GameText.STR_EQUIP_BIND : null,
                            a,
                            u ? A["default"].EVENT_ALL_ITEM_BIND : -1,
                          )
                        : ((u = e.ascensionStar > 0),
                          P.Tool.addChoiceMenu(
                            r,
                            u ? v.GameText2.STR_ITEM_STAR : null,
                            a,
                            u ? A["default"].EVENT_ALL_ITEM_STAR : -1,
                          )));
                    var d = R["default"].getCompareEquip(i.bag, e.type);
                    ((u = null != d && 0 == l),
                      P.Tool.addChoiceMenu(
                        r,
                        u ? g.GameText.STR_EQUIP_COMPARE : null,
                        a,
                        u ? A["default"].EVENT_ALL_ITEM_COMPARE : -1,
                      ),
                      (u = e.isIdentifyItem()),
                      P.Tool.addChoiceMenu(
                        r,
                        u ? g.GameText.STR_EQUIP_IDENTIFY : null,
                        a,
                        u ? A["default"].EVENT_ALL_ITEM_IDENTIFY : -1,
                      ),
                      (u = 0 == l),
                      this.addCommonUIBtn(r, a, e, u));
                    break;
                  case T["default"].ITEM_CLASS_PET:
                    ((u = l),
                      P.Tool.addChoiceMenu(
                        r,
                        u ? g.GameText.STR_REST : g.GameText.STR_PET_SET_FIGHT,
                        a,
                        u
                          ? A["default"].EVENT_PET_REST
                          : A["default"].EVENT_PET_BATTLE,
                      ),
                      P.Tool.addChoiceMenu(
                        r,
                        g.GameText.STR_PROP,
                        a,
                        A["default"].EVENT_ALL_ITEM_SCENE,
                      ),
                      (u = 0 == l),
                      P.Tool.addChoiceMenu(
                        r,
                        u ? g.GameText.STR_FREE_PET : null,
                        a,
                        u ? A["default"].EVENT_ALL_ITEM_ALL_DEL : -1,
                      ));
                    break;
                  case T["default"].ITEM_CLASS_USE_ITEM:
                    if (
                      1 == e.isCanUse(T["default"].CAN_USE_WORLD) &&
                      0 == e.isPetCanUseItem() &&
                      (P.Tool.addChoiceMenu(
                        r,
                        g.GameText.STR_USE,
                        a,
                        A["default"].EVENT_ALL_ITEM_USE,
                      ),
                      e.isCanUseByOneKeyItem())
                    ) {
                      var p = _["default"].myPlayer.getVipLevel2();
                      p > 7 &&
                        e.quantity > 1 &&
                        _["default"].isVip(_["default"].myPlayer) &&
                        P.Tool.addChoiceMenu(
                          r,
                          v.GameText2.STR_USE_BY_ONE_KEY,
                          a,
                          m.UIDefine.EVENT_ALL_ITEM_USE_BY_ONE_KEY,
                        );
                    }
                    this.addCommonUIBtn(r, a, e);
                    break;
                  case T["default"].ITEM_CLASS_PET_EQUIP:
                    u = l;
                    var c = o["default"].getProxy(
                      f.ModName.Pet,
                      f.ProxyType.Pet,
                    );
                    (P.Tool.addChoiceMenu(
                      r,
                      u ? g.GameText.STR_REMOVE_EQUIP : g.GameText.STR_EQUIP,
                      a,
                      u
                        ? A["default"].EVENT_ALL_ITEM_UN_PET_EQUIP
                        : c.data.isPetBag
                          ? A["default"].EVENT_ALL_ITEM_PET_EQUIP
                          : A["default"].EVENT_PET_VIEW,
                    ),
                      P.Tool.addChoiceMenu(
                        r,
                        g.GameText.STR_SHOW_PET_LEVEL,
                        a,
                        A["default"].EVENT_PET_LEVEL,
                      ),
                      (u = e.isIdentifyItem()),
                      P.Tool.addChoiceMenu(
                        r,
                        u ? g.GameText.STR_EQUIP_IDENTIFY : null,
                        a,
                        u ? A["default"].EVENT_ALL_ITEM_IDENTIFY : -1,
                      ));
                    break;
                  case T["default"].ITEM_CLASS_BOX_CHOOSE_ONE:
                    P.Tool.addChoiceMenu(
                      r,
                      g.GameText.STR_USE,
                      a,
                      A["default"].EVENT_ALL_ITEM_USE_ONE,
                    );
                    break;
                  case T["default"].ITEM_CLASS_LN_STONE:
                    (P.Tool.addChoiceMenu(
                      r,
                      g.GameText.STR_USE,
                      a,
                      A["default"].EVENT_ALL_ITEM_USE,
                    ),
                      this.addCommonUIBtn(r, a, e));
                    break;
                  default:
                    this.addCommonUIBtn(r, a, e);
                }
              1 == A["default"].isKey &&
                P.Tool.addChoiceMenu(
                  r,
                  g.GameText.STR_REFRESH_BAG,
                  a,
                  A["default"].EVENT_ALL_ITEM_REFURSE,
                );
              var h = e.isIllusion();
              h &&
                P.Tool.addChoiceMenu(
                  r,
                  g.GameText.CHANGE,
                  a,
                  A["default"].EVENT_BAG_CHANGE,
                );
            }
          else if (t == g.GameText.getText(g.GameText.TI_STORAGE))
            switch (n) {
              case A["default"].SUB_STORAGE_OTHER_PLAYER:
                P.Tool.addChoiceMenu(
                  r,
                  g.GameText.getText(g.GameText.TI_BACK),
                  a,
                  A["default"].EVENT_ALL_BACK,
                );
                break;
              case A["default"].SUB_STORAGE_PLAYER:
                i.bag.isValidStoragePos(e.slotPos)
                  ? (P.Tool.addChoiceMenu(
                      r,
                      g.GameText.STR_GET_STORAGE,
                      a,
                      A["default"].EVENT_ALL_ITEM_GET_STORAGE,
                    ),
                    A["default"].isKey &&
                      P.Tool.addChoiceMenu(
                        r,
                        g.GameText.STR_REFRESH_STORAGE,
                        a,
                        A["default"].EVENT_ALL_ITEM_REFRESH_VIP_STORAGE,
                      ))
                  : i.bag.isValidBagPos(e.slotPos) &&
                    (P.Tool.addChoiceMenu(
                      r,
                      g.GameText.STR_PUT_STORAGE,
                      a,
                      A["default"].EVENT_ALL_ITEM_PUT_STORAGE,
                    ),
                    A["default"].isKey &&
                      P.Tool.addChoiceMenu(
                        r,
                        g.GameText.STR_REFRESH_BAG,
                        a,
                        A["default"].EVENT_ALL_ITEM_REFURSE,
                      ));
                break;
              case A["default"].SUB_STORAGE_OTHER_PLAYER_VIP:
                P.Tool.addChoiceMenu(
                  r,
                  g.GameText.getText(g.GameText.TI_BACK),
                  a,
                  A["default"].EVENT_ALL_BACK,
                );
                break;
              case A["default"].SUB_STORAGE_PLAYER_VIP:
                i.bag.isValidVipStoragePos(e.slotPos)
                  ? (P.Tool.addChoiceMenu(
                      r,
                      g.GameText.STR_GET_STORAGE,
                      a,
                      A["default"].EVENT_ALL_ITEM_GET_VIP_STORAGE,
                    ),
                    A["default"].isKey &&
                      P.Tool.addChoiceMenu(
                        r,
                        g.GameText.STR_REFRESH_STORAGE,
                        a,
                        A["default"].EVENT_ALL_ITEM_REFRESH_VIP_STORAGE,
                      ))
                  : i.bag.isValidBagPos(e.slotPos) &&
                    (P.Tool.addChoiceMenu(
                      r,
                      g.GameText.STR_PUT_STORAGE,
                      a,
                      A["default"].EVENT_ALL_ITEM_PUT_VIP_STORAGE,
                    ),
                    A["default"].isKey &&
                      P.Tool.addChoiceMenu(
                        r,
                        g.GameText.STR_REFRESH_BAG,
                        a,
                        A["default"].EVENT_ALL_ITEM_REFURSE,
                      ));
                break;
              case m.UIDefine.SUB_STORAGE_PLAYER_HIGHT_VIP:
                i.bag.isValidHightVipStoragePos(e.slotPos)
                  ? P.Tool.addChoiceMenu(
                      r,
                      g.GameText.STR_GET_STORAGE,
                      a,
                      m.UIDefine.EVENT_ALL_ITEM_GET_HIGHT_VIP_STORAGE,
                    )
                  : i.bag.isValidBagPos(e.slotPos) &&
                    P.Tool.addChoiceMenu(
                      r,
                      g.GameText.STR_PUT_STORAGE,
                      a,
                      m.UIDefine.EVENT_ALL_ITEM_PUT_HIGHT_VIP_STORAGE,
                    );
                break;
              case A["default"].SUB_STORAGE_COUNTRY:
                i.bag.isValidBagPos(e.slotPos)
                  ? (P.Tool.addChoiceMenu(
                      r,
                      g.GameText.STR_PUT_COUNTRY_STORE,
                      a,
                      A["default"].EVENT_ALL_ITEM_PUT_COUNTRY_STORE,
                    ),
                    P.Tool.addChoiceMenu(
                      r,
                      g.GameText.STR_DROP,
                      a,
                      A["default"].EVENT_ALL_ITEM_ALL_DEL,
                    ))
                  : (s == T["default"].ITEM_CLASS_PET &&
                      P.Tool.addChoiceMenu(
                        r,
                        g.GameText.STR_DETAIL,
                        a,
                        m.UIDefine.EVENT_ALL_SEE_COUNTRY_STORAGE_PET,
                      ),
                    P.Tool.addChoiceMenu(
                      r,
                      g.GameText.STR_EXCHANGE,
                      a,
                      A["default"].EVENT_ALL_ITEM_GET_COUNTRY_STORE,
                    ),
                    P.Tool.addChoiceMenu(
                      r,
                      g.GameText.STR_DEL,
                      a,
                      A["default"].EVENT_ALL_ITEM_DEL_COUNTRY_STORE,
                    ));
                break;
              case A["default"].SUB_STORAGE_COUNTRY_SYSTEM:
                i.bag.isValidBagPos(e.slotPos)
                  ? P.Tool.addChoiceMenu(
                      r,
                      g.GameText.STR_DROP,
                      a,
                      A["default"].EVENT_ALL_ITEM_ALL_DEL,
                    )
                  : P.Tool.addChoiceMenu(
                      r,
                      g.GameText.STR_EXCHANGE,
                      a,
                      A["default"].EVENT_ALL_ITEM_GET_COUNTRY_STORE,
                    );
            }
          else if (
            t == g.GameText.getText(g.GameText.TI_PUT_SHOP) &&
            0 == i.isShopMode()
          )
            if (n == A["default"].EVENT_EQUIP_SHOP_BAG_WINDOW)
              (P.Tool.addChoiceMenu(
                r,
                g.GameText.STR_DOWN_SHOP,
                a,
                A["default"].EVENT_ALL_ITEM_DOWN_SHOP,
              ),
                P.Tool.addChoiceMenu(
                  r,
                  g.GameText.STR_ITME_CHANGE_PRICE,
                  a,
                  A["default"].EVENT_ALL_ITEM_CHANGE_PRICE,
                ));
            else if (
              n == A["default"].EVENT_BAG_GRID_PANEL &&
              0 == e.isNotOperate() &&
              0 == e.isIntegral() &&
              0 == e.isEnchant()
            ) {
              var c = o["default"].getProxy(f.ModName.Bag, f.ProxyType.Bag);
              c.isEnchantShop
                ? y["default"].POWER_ENCHANT_ITEM == e.power1 &&
                  P.Tool.addChoiceMenu(
                    r,
                    g.GameText.STR_UP_SHOP,
                    a,
                    A["default"].EVENT_ALL_ITEM_UP_SHOP,
                  )
                : P.Tool.addChoiceMenu(
                    r,
                    g.GameText.STR_UP_SHOP,
                    a,
                    A["default"].EVENT_ALL_ITEM_UP_SHOP,
                  );
            }
          return a;
        }),
        (e.addCommonUIBtn = function (e, t, i, o) {
          void 0 === o && (o = !0);
          var n = _["default"].myPlayer.getVipLevel2();
          (_["default"].isVip(_["default"].myPlayer) &&
            (this._byOneUseListPower.indexOf(i.power1) >= 0 &&
              i.quantity > 1 &&
              P.Tool.addChoiceMenu(
                e,
                v.GameText2.STR_SELL_BY_ONE_USE,
                t,
                m.UIDefine.EVENT_ALL_ITEM_SELL_BY_ONE_USE,
              ),
            n > 7 &&
              i.quantity > 1 &&
              P.Tool.addChoiceMenu(
                e,
                v.GameText2.STR_SELL_BY_ONE_KEY,
                t,
                m.UIDefine.EVENT_ALL_ITEM_SELL_BY_ONE_KEY,
              )),
            P.Tool.addChoiceMenu(
              e,
              o ? g.GameText.getText(g.GameText.TI_SHOP_TAB_SELL) : null,
              t,
              o ? A["default"].EVENT_ALL_ITEM_VIP_SELL : -1,
            ));
        }),
        (e.processEquipPopLayer = function (t, i, n) {
          return __awaiter(this, void 0, void 0, function () {
            var r, s, u, d, p, c, h, g, v, S, I, C, P;
            return __generator(this, function (R) {
              switch (R.label) {
                case 0:
                  switch ((null == n && (n = _["default"].myPlayer), (u = t))) {
                    case A["default"].EVENT_ALL_ITEM_GET_STORAGE:
                      return [3, 1];
                    case A["default"].EVENT_ALL_ITEM_PUT_STORAGE:
                      return [3, 2];
                    case A["default"].EVENT_ALL_ITEM_GET_VIP_STORAGE:
                      return [3, 3];
                    case A["default"].EVENT_ALL_ITEM_PUT_VIP_STORAGE:
                      return [3, 4];
                    case m.UIDefine.EVENT_ALL_ITEM_GET_HIGHT_VIP_STORAGE:
                      return [3, 5];
                    case m.UIDefine.EVENT_ALL_ITEM_PUT_HIGHT_VIP_STORAGE:
                      return [3, 6];
                    case A["default"].EVENT_ALL_ITEM_INLAY:
                      return [3, 7];
                    case A["default"].EVENT_ALL_ITEM_BIND:
                      return [3, 8];
                    case A["default"].EVENT_ALL_ITEM_IDENTIFY:
                      return [3, 9];
                    case m.UIDefine.EVENT_ALL_ITEM_USE_BY_ONE_KEY:
                      return [3, 10];
                    case A["default"].EVENT_ALL_ITEM_USE:
                      return [3, 12];
                    case A["default"].EVENT_ALL_ITEM_EQUIP:
                      return [3, 13];
                    case A["default"].EVENT_ALL_ITEM_EQUIP_BY_BEST:
                      return [3, 13];
                    case A["default"].EVENT_PET_BATTLE:
                      return [3, 13];
                    case A["default"].EVENT_ALL_ITEM_STAR:
                      return [3, 14];
                    case A["default"].EVENT_ALL_ITEM_ALL_DEL:
                      return [3, 15];
                    case A["default"].EVENT_ALL_ITEM_VIP_SELL:
                      return [3, 16];
                    case m.UIDefine.EVENT_ALL_ITEM_SELL_BY_ONE_KEY:
                      return [3, 17];
                    case m.UIDefine.EVENT_ALL_ITEM_SELL_BY_ONE_USE:
                      return [3, 19];
                    case A["default"].EVENT_ALL_ITEM_UN_EQUIP:
                      return [3, 21];
                    case A["default"].EVENT_PET_REST:
                      return [3, 21];
                    case A["default"].EVENT_ALL_ITEM_COMPARE:
                      return [3, 22];
                    case A["default"].EVENT_ALL_ITEM_UP_SHOP:
                      return [3, 23];
                    case A["default"].EVENT_ALL_ITEM_DOWN_SHOP:
                      return [3, 24];
                    case A["default"].EVENT_ALL_ITEM_CHANGE_PRICE:
                      return [3, 25];
                    case A["default"].EVENT_ALL_ITEM_SCENE:
                      return [3, 26];
                    case A["default"].EVENT_PET_VIEW:
                      return [3, 27];
                    case A["default"].EVENT_PET_LEVEL:
                      return [3, 28];
                    case A["default"].EVENT_ALL_ITEM_UN_PET_EQUIP:
                      return [3, 29];
                    case A["default"].EVENT_ALL_ITEM_PET_EQUIP:
                      return [3, 30];
                    case A["default"].EVENT_ALL_ITEM_USE_ONE:
                      return [3, 31];
                    case A["default"].EVENT_BAG_CHANGE:
                      return [3, 33];
                  }
                  return [3, 34];
                case 1:
                  return (
                    _["default"].doStorageOpeAction(
                      n,
                      i,
                      _["default"].STORAGE_OPE_GET,
                    ),
                    [3, 35]
                  );
                case 2:
                  return (
                    _["default"].doStorageOpeAction(
                      n,
                      i,
                      _["default"].STORAGE_OPE_PUT,
                    ),
                    [3, 35]
                  );
                case 3:
                  return (
                    _["default"].doVIPStorageOpeAction(
                      n,
                      i,
                      _["default"].STORAGE_OPE_GET,
                    ),
                    [3, 35]
                  );
                case 4:
                  return (
                    _["default"].doVIPStorageOpeAction(
                      n,
                      i,
                      _["default"].STORAGE_OPE_PUT,
                    ),
                    [3, 35]
                  );
                case 5:
                  return (
                    _["default"].doHightVIPStorageOpeAction(
                      n,
                      i,
                      _["default"].STORAGE_OPE_GET,
                    ),
                    [3, 35]
                  );
                case 6:
                  return (
                    _["default"].doHightVIPStorageOpeAction(
                      n,
                      i,
                      _["default"].STORAGE_OPE_PUT,
                    ),
                    [3, 35]
                  );
                case 7:
                  return (_["default"].doWorldAttachItemMenu(n, i), [3, 35]);
                case 8:
                  return (_["default"].doWorldItemBind(n, i), [3, 35]);
                case 9:
                  return (
                    _["default"].doWorldIdentifyItemSelect(n, i),
                    [3, 35]
                  );
                case 10:
                  return [4, A["default"].showOperateItemAsync(i, "一键使用")];
                case 11:
                  return (
                    (d = R.sent()),
                    _["default"].doWorldUseItemAction(
                      _["default"].myPlayer,
                      i,
                      !0,
                      null,
                      null,
                      d,
                      !0,
                    ),
                    [3, 35]
                  );
                case 12:
                  return i.isIdentifyScrollItem() ||
                    i.isHighIdentifyScrollItem()
                    ? (e.createCanIdentifyItemList(i), [2])
                    : i.isUpgradeIdentifyScrollItem()
                      ? (e.createCanIdentifyUpgradeItemList(i), [2])
                      : i.isUpgradeIntensifyScroll()
                        ? (e.createCanIntensifyUpgradeItemList(i), [2])
                        : i.type == y["default"].ITEM_TYPE_SKILL_BOOK
                          ? (E["default"].doUseLearnSkillItem(
                              i,
                              !1,
                              null,
                              null,
                            ),
                            [2])
                          : y["default"].POWER_ENCHANT_ITEM == i.power1
                            ? (O["default"].doEnchantGetLists(i, !1), [2])
                            : y["default"].POWER_FORMATION_BOOK == i.power1
                              ? (E["default"].doUseFormationBookItem(i), [2])
                              : y["default"].POWER_TURN_MONSTER_CARD == i.power1
                                ? (w["default"].doUseTurnMonsterCard(i), [2])
                                : (_["default"].doWorldUseItemAction(n, i, !0),
                                  [3, 35]);
                case 13:
                  return (_["default"].doEquipAction(n, i), [3, 35]);
                case 14:
                  return (_["default"].doItemStarSelectMenu(i), [3, 35]);
                case 15:
                  return (_["default"].doDelEquipAction(n, i), [3, 35]);
                case 16:
                  return (_["default"].doVIPSellEquipAction(n, i), [3, 35]);
                case 17:
                  return [4, A["default"].showOperateItemAsync(i, "任意出售")];
                case 18:
                  return (
                    (p = R.sent()),
                    _["default"].doVIPSellEquipAction(
                      _["default"].myPlayer,
                      i,
                      p,
                    ),
                    [3, 35]
                  );
                case 19:
                  return [4, A["default"].showOperateItemAsync(i, "任意使用")];
                case 20:
                  return (
                    (c = R.sent()),
                    _["default"].doWorldUseItemAction(n, i, !0, null, null, c),
                    [3, 35]
                  );
                case 21:
                  return (_["default"].doUnEquipAction(n, i), [3, 35]);
                case 22:
                  return (
                    A["default"].updateDataToEquipPopUI(n, i, !0),
                    [3, 35]
                  );
                case 23:
                  return (_["default"].doStallUpItem(i), [3, 35]);
                case 24:
                  return (_["default"].doStallDownItem(i), [3, 35]);
                case 25:
                  return (_["default"].doStallChangePrice(i), [3, 35]);
                case 26:
                  return (
                    (h = b["default"].itemChangePet(i, n)),
                    A["default"].showModal(
                      f.ModName.Pet,
                      f.PetViewType.PetUseItem,
                      { pet: h },
                    ),
                    [3, 35]
                  );
                case 27:
                  return (
                    console.log("打开宠物界面"),
                    (r = o["default"].getProxy(f.ModName.Pet, f.ProxyType.Pet)),
                    r.doPetEquip(i) && r.openBattlePet(3),
                    [3, 35]
                  );
                case 28:
                  return (
                    console.log("宠物升级"),
                    A["default"].openPetUpGrade(i),
                    [3, 35]
                  );
                case 29:
                  return (
                    console.log("宠物解除装备"),
                    (r = o["default"].getProxy(f.ModName.Pet, f.ProxyType.Pet)),
                    r.doOffPetEquip(i),
                    [3, 35]
                  );
                case 30:
                  return (
                    console.log("宠物装备"),
                    (r = o["default"].getProxy(f.ModName.Pet, f.ProxyType.Pet)),
                    r.doPetEquip(i),
                    [3, 35]
                  );
                case 31:
                  return (
                    (s = new a.Message(l["default"].CG_BOX_CHOOSE_ONE_INFO)),
                    s.putInt(i.id),
                    [4, V["default"].sendProtoAsync(s)]
                  );
                case 32:
                  if (((s = R.sent()), null == s)) return [2];
                  if (((g = s.getByte()), 0 > g))
                    return (A["default"].alertMessage(s.getString()), [2]);
                  for (
                    v = s.getByte(), S = s.getByte(), I = [], C = 0;
                    S > C;
                    C++
                  )
                    ((P = new H["default"]()),
                      (P.type = v),
                      (P.index = C),
                      (P.select = 0 == C),
                      1 == P.type || 6 == P.type
                        ? (6 == P.type && (P.petItemId = s.getInt()),
                          (P.pet = b["default"].fromBytesInfo(
                            s,
                            _["default"].myPlayer,
                          )))
                        : ((P.item = new T["default"]()),
                          T["default"].fromBytesAtts2(P.item, s),
                          (P.item.durMax = 0)),
                      I.push(P));
                  return (
                    A["default"].showModal(
                      f.ModName.Main,
                      f.MainViewType.MainItemSelect,
                      { list: I, item: i },
                    ),
                    [3, 35]
                  );
                case 33:
                  return (
                    A["default"].showModal(
                      f.ModName.Bag,
                      f.BagViewType.BagChange,
                      { type: i.type, item: i },
                    ),
                    [3, 35]
                  );
                case 34:
                  return [3, 35];
                case 35:
                  return [2];
              }
            });
          });
        }),
        (e.doStorageRefresh = function (t) {
          return (
            void 0 === t && (t = 1),
            __awaiter(this, void 0, Promise, function () {
              var i, n, r, u, d, p, c, E, y;
              return __generator(this, function (g) {
                switch (g.label) {
                  case 0:
                    return (
                      (i = _["default"].myPlayer),
                      null == i
                        ? [2, !1]
                        : ((n = i.bag),
                          null == n
                            ? [2, !1]
                            : (i.bag.clearStorageItem(),
                              (r = new a.Message(
                                l["default"].CG_STORAGE_CLEAN,
                              )),
                              r.putByte(t),
                              (u = o["default"].getProxy(
                                f.ModName.Bag,
                                f.ProxyType.Bag,
                              )),
                              [4, u.sendProtoAsync(r)]))
                    );
                  case 1:
                    if (
                      (g.sent(), (d = s["default"].getReceiveMsg()), null == d)
                    )
                      return [2];
                    if (((p = d.getByte()), 0 != p))
                      return (
                        A["default"].alertMessage(d.getString()),
                        [2, !1]
                      );
                    for (
                      t == e.STORAGETYPE2 && i.bag.clearVipStorageItem(),
                        t == e.STORAGETYPE3 && i.bag.clearHightVipStorageItem(),
                        c = d.getByte(),
                        E = [],
                        y = 0;
                      c > y;
                      y++
                    )
                      E.push(T["default"].fromBytes(d));
                    return (
                      i.bag.initBagItem(E),
                      [4, _["default"].doGetItemSuit(i.getBagAllEquip())]
                    );
                  case 2:
                    return (
                      g.sent(),
                      u.sendNt(h.BagEvent.BAG_STORAGE_REFRESH),
                      I.Tips.show("仓库已整理"),
                      [2, !0]
                    );
                }
              });
            })
          );
        }),
        (e.createCanIdentifyItemList = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, n, r, u, d, p, c, h, T, E, y;
            return __generator(this, function (v) {
              switch (v.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((t = _["default"].myPlayer),
                      null == t
                        ? [2]
                        : ((i = t.bag),
                          null == i
                            ? [2]
                            : ((n = o["default"].getProxy(
                                f.ModName.Bag,
                                f.ProxyType.Bag,
                              )),
                              (r = new a.Message(
                                l["default"].CG_IDENTIFY_GET_LIST,
                              )),
                              r.putInt(e.id),
                              r.putBoolean(!1),
                              [4, n.sendProtoAsync(r)])));
                case 1:
                  if ((v.sent(), (u = s["default"].getReceiveMsg()), null == u))
                    return [2, !1];
                  if (((d = u.getByte()), 0 > d))
                    return (A["default"].alertMessage(u.getString()), [2]);
                  if (((p = u.getShort()), 1 > p))
                    return (
                      A["default"].alertMessage(
                        g.GameText.STR_BAG_HAVE_NULL_CAN_IDENTIFY,
                      ),
                      [2]
                    );
                  for (c = [], h = 0; p > h; h++)
                    ((T = u.getShort()),
                      (E = i.getBagItemBySlotPos(T)),
                      null != E && c.push(E));
                  return null == c || c.length <= 0
                    ? (A["default"].alertMessage(
                        g.GameText.STR_BAG_HAVE_NULL_CAN_IDENTIFY,
                      ),
                      [2])
                    : ((y = 0),
                      A["default"].showModal(
                        f.ModName.Bag,
                        f.BagViewType.ItemProcess,
                        { type: y, itemList: c },
                      ),
                      [2]);
              }
            });
          });
        }),
        (e.createCanIdentifyUpgradeItemList = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, r, u, d, p, c, h, T, E, y;
            return __generator(this, function (g) {
              switch (g.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((t = _["default"].myPlayer),
                      null == t
                        ? [2]
                        : ((i = t.bag),
                          null == i
                            ? [2]
                            : ((n = o["default"].getProxy(
                                f.ModName.Bag,
                                f.ProxyType.Bag,
                              )),
                              (r = new a.Message(
                                l["default"].CG_IDENTIFY_GET_LIST,
                              )),
                              r.putInt(e.id),
                              r.putBoolean(!0),
                              [4, n.sendProtoAsync(r)])));
                case 1:
                  if ((g.sent(), (u = s["default"].getReceiveMsg()), null == u))
                    return [2];
                  if (((d = u.getByte()), 0 > d))
                    return (A["default"].alertMessage(u.getString()), [2]);
                  if (((p = u.getShort()), 1 > p))
                    return (
                      A["default"].alertMessage(
                        v.GameText2.STR_BAG_HAVE_NULL_CAN_UPGRADE,
                      ),
                      [2]
                    );
                  for (c = [], h = 0; p > h; h++)
                    ((T = u.getShort()),
                      (E = i.getBagItemBySlotPos(T)),
                      null != E && c.push(E));
                  return null == c || c.length <= 0
                    ? (A["default"].alertMessage(
                        v.GameText2.STR_BAG_HAVE_NULL_CAN_UPGRADE,
                      ),
                      [2])
                    : ((y = 1),
                      A["default"].showModal(
                        f.ModName.Bag,
                        f.BagViewType.ItemProcess,
                        { type: y, itemList: c },
                      ),
                      [2]);
              }
            });
          });
        }),
        (e.createCanIntensifyUpgradeItemList = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, n, r, u, d, p, c, h, T, E, y;
            return __generator(this, function (g) {
              switch (g.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((t = _["default"].myPlayer),
                      null == t
                        ? [2]
                        : ((i = t.bag),
                          null == i
                            ? [2]
                            : ((n = o["default"].getProxy(
                                f.ModName.Bag,
                                f.ProxyType.Bag,
                              )),
                              (r = new a.Message(
                                l["default"].CG_IDENTIFY_GET_LIST,
                              )),
                              r.putInt(e.id),
                              r.putBoolean(!0),
                              [4, n.sendProtoAsync(r)])));
                case 1:
                  if ((g.sent(), (u = s["default"].getReceiveMsg()), null == u))
                    return [2];
                  if (((d = u.getByte()), 0 > d))
                    return (A["default"].alertMessage(u.getString()), [2]);
                  if (((p = u.getShort()), 1 > p))
                    return (
                      A["default"].alertMessage(
                        v.GameText2.STR_BAG_HAVE_NULL_CAN_UPGRADESTAR,
                      ),
                      [2]
                    );
                  for (c = [], h = 0; p > h; h++)
                    ((T = u.getShort()),
                      (E = i.getBagItemBySlotPos(T)),
                      null != E && c.push(E));
                  return null == c || c.length <= 0
                    ? (A["default"].alertMessage(
                        v.GameText2.STR_BAG_HAVE_NULL_CAN_UPGRADESTAR,
                      ),
                      [2])
                    : ((y = 3),
                      A["default"].showModal(
                        f.ModName.Bag,
                        f.BagViewType.ItemProcess,
                        { type: y, itemList: c },
                      ),
                      [2]);
              }
            });
          });
        }),
        (e.createMailSendUI = function (e, t) {
          var i = new u.MailVo(),
            n = e.name;
          ((i.toName = n),
            (i.sendId = e.getClientUid()),
            (i.isId = !1),
            o["default"].showView(
              f.ModName.Mail,
              f.MailViewType.MailContactPlayer,
              i,
            ));
        }),
        (e.processPlayerEventLayer = function (t) {
          return __awaiter(this, void 0, Promise, function () {
            var i, o, n, a, r, u, d, d;
            return __generator(this, function (p) {
              switch (p.label) {
                case 0:
                  return t.byte0 != y["default"].PLAYER_EVENT_MAIL
                    ? [3, 1]
                    : (e.doMenuButton(A["default"].EVENT_ALL_MENU_WORLD_MAIL),
                      _["default"].removePlayerEvent(t.int0),
                      [3, 4]);
                case 1:
                  return t.byte0 != y["default"].PLAYER_EVENT_ACTIVITY_LIST
                    ? [3, 2]
                    : (e.doMenuButton(
                        A["default"].EVENT_ALL_MENU_ACTIVITY_LIST,
                      ),
                      _["default"].removePlayerEvent(t.int0),
                      [3, 4]);
                case 2:
                  return (
                    (i = t.str1),
                    (o = t.str0),
                    (n = t.str2),
                    (a = t.str3),
                    (r = t.int0),
                    [4, A["default"].waitForTwiceSureUI(i, o, n, a)]
                  );
                case 3:
                  ((u = p.sent()),
                    u
                      ? ((d = s["default"].createPlayerEvent(
                          r,
                          l["default"].PLAYER_EVENT_CHOOSE_YES,
                        )),
                        s["default"].sendRequest(d),
                        _["default"].removePlayerEvent(t.int0))
                      : ((d = s["default"].createPlayerEvent(
                          r,
                          l["default"].PLAYER_EVENT_CHOOSE_NO,
                        )),
                        s["default"].sendRequest(d),
                        _["default"].removePlayerEvent(t.int0)),
                    (p.label = 4));
                case 4:
                  return [2];
              }
            });
          });
        }),
        (e.onTapSpeedBtn = function () {
          var e = _["default"].gameSpeed;
          (e >= y["default"].GAME_SPEED_MAX ? (e = 1) : e++,
            (_["default"].gameSpeed = e));
        }),
        (e._byOneUseListPower = [100, 101, 102, 109, 183, 184]),
        (e.STORAGETYPE1 = 1),
        (e.STORAGETYPE2 = 2),
        (e.STORAGETYPE3 = 3),
        e
      );
    })();
  t.UIAction = F;
});
