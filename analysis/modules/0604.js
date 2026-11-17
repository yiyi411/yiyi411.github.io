(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }), (t.MainMdr = void 0));
  var o = i(3),
    n = i(49),
    a = i(11),
    r = i(2),
    s = i(0),
    l = i(4),
    u = i(12),
    _ = i(15),
    d = i(8),
    p = i(1),
    c = i(14),
    h = i(9),
    f = i(6),
    T = i(74),
    E = i(192),
    y = i(26),
    g = i(5),
    v = i(605),
    S = i(16),
    I = i(10),
    m = i(194),
    A = i(24),
    C = i(13),
    P = i(85),
    R = i(191),
    O = i(63),
    N = i(117),
    M = i(159),
    L = i(158),
    w = i(33),
    b = i(69),
    x = i(25),
    D = i(118),
    B = i(23),
    G = i(45),
    U = i(106),
    k = i(38),
    V = i(30),
    H = i(62),
    F = i(40),
    Y = i(196),
    W = i(52),
    K = i(103),
    j = i(28),
    q = i(274),
    X = i(113),
    z = i(44),
    Q = i(59),
    J = i(146),
    $ = i(18),
    Z = i(34),
    et = i(167),
    tt = i(53),
    it = i(197),
    ot = i(21),
    nt = 15,
    at = 30,
    rt = (function (e) {
      function t() {
        var t = e.call(this, h.Layer.main) || this;
        return (
          (t._view = t.mark("_view", v["default"])),
          (t.btnStrongerEft = 0),
          (t.nextPlayTime = 0),
          (t.nextHintTwPlayTime = 0),
          (t.autoClearEquipTime = 0),
          (t.bulkTime = 0),
          t
        );
      }
      return (
        __extends(t, e),
        (t.prototype.onInit = function () {
          (l["default"].getShowPK() || l["default"].setShowPK(!0),
            e.prototype.onInit.call(this),
            (this._view.grp_bottom.cacheAsBitmap = !0),
            (this._view.grp_left.cacheAsBitmap = !0));
          var t = this;
          ((t.isNotOpenUI = !0), (t._proxy = t.getProxy(s.ProxyType.Main)));
          var i = t._view;
          if (
            ((i.percentWidth = 100),
            (i.percentHeight = 100),
            i.comMoney_1.setType(u.ModelConst.MONEY1),
            i.comMoney_2.setType(u.ModelConst.MONEY2),
            i.comMoney_3.setType(u.ModelConst.MONEY3),
            (t.listChar = new eui.ArrayCollection()),
            (i.list_chat.itemRenderer = R.ListChatItem),
            (i.list_chat.useVirtualLayout = !1),
            (i.list_chat.dataProvider = t.listChar),
            (i.scroller_chat.viewport = i.list_chat),
            t.updateMenu(),
            (t.activityTypeList = [
              G["default"].ACTIVITY_FULI,
              G["default"].ACTIVITY_OPEN,
              G["default"].ACTIVITY_REWARD,
              G["default"].ACTIVITY_SEVENDAY,
              G["default"].ACTIVITY_LOTTERY,
              G["default"].ACTIVITY_MISSION,
              G["default"].ACTIVITY_SEND_SHOP,
              G["default"].ACTIVITY_SHARE,
              G["default"].ACTIVITY_CHARGE,
              G["default"].ACTIVITY_DAILY,
              G["default"].ACTIVITY_OPTIONAL,
              G["default"].ACTIVITY_NEW,
              G["default"].TOWER,
              G["default"].RICH_MAN,
              G["default"].RED_PACKET,
              G["default"].PET_PK,
              G["default"].FINAL_BOSS,
              G["default"].GAME_CLUB,
              G["default"].CHARGE_GIFT,
            ]),
            (t.activityBtnList = [
              t._view.btnFuLi,
              t._view.btnOpen,
              t._view.btnReward,
              t._view.btnCeremony,
              t._view.btnLottery,
              t._view.btnNewTask,
              t._view.btnSendShop,
              t._view.btnShare,
              t._view.btnCharge,
              t._view.btnDaily,
              t._view.btnOptional,
              t._view.btnAct,
              t._view.btnTower,
              t._view.btnRichman,
              t._view.btnRedPacket,
              t._view.btnPetBattle,
              t._view.btnFinalBoss,
              t._view.btn_gameClub,
              t._view.btnChargeGift,
            ]),
            (t.payBtnList = [
              t._view.btnCharge,
              t._view.btnFuLi,
              t._view.btnSendShop,
              t._view.btnOptional,
              t._view.btnChargeGift,
              t._view.btnBulk,
            ]),
            (this._view.btnShop.visible = this._view.btnShop.includeInLayout =
              go.openPay),
            t._view.btn_recorder &&
              ((t._view.btn_recorder.visible = go.isByteGame && gs.isRecorder),
              (t._view.btn_recorder.includeInLayout =
                go.isByteGame && gs.isRecorder)),
            t._view.btnGotoCity &&
              ((t._view.btnGotoCity.visible = !0),
              (t._view.btnGotoCity.includeInLayout = !0)),
            t._view.btn_help)
          ) {
            var n =
              gs.isShowCustomerService && void 0 != gs.showCustomerService;
            ((t._view.btn_help.visible = n),
              (t._view.btn_help.includeInLayout = n));
          }
          (this.updateChargeBtn(),
            this.updateSendToDeskBtn(),
            (go.isHKTNative || go.targetPf == W.TARGET_PLATFORM.HKT) &&
              ((t._view.btnSendShop.label = "限時"),
              (t._view.btnVip.label = "資訊")),
            go.isByteGame && gs.onShowGuide(),
            o["default"]
              .getProxy(s.ModName.Activity, s.ProxyType.Activity)
              .mtRequest(pb.PassCMD.PASS_CMD_DATA_INFO),
            o["default"]
              .getProxy(s.ModName.Country, s.ProxyType.Country)
              .mtRequest(pb.ConfigType.game_config));
        }),
        (t.prototype.updateChargeBtn = function () {
          this._view.grp_act.visible = go.openPay;
        }),
        (t.prototype.updateSendToDeskBtn = function () {
          var e = this._view.btn_sendToDesk;
          return ((e.visible = !1), void (e.includeInLayout = !1));
        }),
        (t.prototype.onTapSendToDesk = function () {
          o["default"].showView(s.ModName.Main, s.MainViewType.DESK);
        }),
        (t.prototype.dealSendToDesk = function () {
          return __awaiter(this, void 0, void 0, function () {
            var e, t, i, n, a, r;
            return __generator(this, function (l) {
              switch (l.label) {
                case 0:
                  return [4, gs.sendToDesk()];
                case 1:
                  return (
                    (e = l.sent()),
                    e &&
                      (console.info("添加桌面图标成功"),
                      (t = o["default"]
                        .getProxy(s.ModName.Login, s.ProxyType.Login)
                        .getChannelID()),
                      (i = z.GuideModel.ins.getGuidePlatform(
                        x.GuideSpriteId.desk,
                      )),
                      (n = void 0),
                      (i && -1 == i.indexOf(t)) || (n = !0),
                      n &&
                        ((a = pb.CommonRewardType.GUIDE),
                        (r = x.GuideIndex.desk),
                        this._proxy.isHasCommonReward(a, r) ||
                          this._proxy.sendCommonRewardAsk(a, r))),
                    this.updateSendToDeskBtn(),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.onTapAct = function () {
          p["default"].showWin(
            s.ModName.Activity,
            s.ActivityViewType.ActivityMain2,
          );
        }),
        (t.prototype.onTapTower = function () {
          p["default"].showWin(s.ModName.Tower, s.TowerViewType.TowerMain);
        }),
        (t.prototype.onTapFinalBoss = function () {
          p["default"].showWin(s.ModName.FinalBoss, s.FinalBossViewType.Main);
        }),
        (t.prototype.onTapRichman = function () {
          p["default"].showWin(
            s.ModName.RichMan,
            s.RichManViewType.RichManMain,
          );
        }),
        (t.prototype.onTapLegion = function () {
          p["default"].showWin(s.ModName.Legion, s.LegionViewType.LegionMain);
        }),
        (t.prototype.onTapRedPacket = function () {
          p["default"].showWin(
            s.ModName.RedPacket,
            s.RedPacketViewType.RedPacketTask,
          );
        }),
        (t.prototype.updateMenu = function () {
          var e = this._proxy.model.menuOpen;
          this._view.switchImg.source = e
            ? "common_btn_caidan2"
            : "common_btn_caidan";
          var t = this._view.grp_bottom,
            i = this._view.grp_top,
            o = this._view.grp_left,
            n = this._view.grp_right;
          ((t.visible = e),
            (i.visible = e),
            (o.visible = e),
            (n.visible = e),
            (t.bottom = e ? nt : -t.height),
            (i.top = e ? at : -i.height),
            (o.left = e ? 10 : -o.width),
            (n.right = e ? 10 : -n.width),
            this.updateSwitchBtnHint());
        }),
        (t.prototype.updateSwitchBtnHint = function () {
          if (this._proxy.model.menuOpen)
            return void (this._view.hint.visible = !1);
          for (var e in this._view) {
            var t = this._view[e];
            if (
              t instanceof m.RedButton &&
              t.visible &&
              t.hint &&
              t.hint.visible
            )
              return void (this._view.hint.visible = !0);
          }
          this._view.hint.visible = !1;
        }),
        (t.prototype.onTapView = function () {
          this._view.groupSelfShop.visible &&
            (this._view.groupSelfShop.visible = !1);
        }),
        (t.prototype.levelOpenButton = function () {
          var e = this;
          (e.addLevelOpenButton(j.LevelOpenId.PetView, e._view.btnPet, !0),
            e.addLevelOpenButton(
              j.LevelOpenId.MainBattleActo,
              e._view.btnAutoFight,
              !0,
            ),
            e.addLevelOpenButton(j.LevelOpenId.MailView, e._view.btnMail, !0),
            e.addLevelOpenButton(j.LevelOpenId.CityView, e._view.btnCity, !0),
            e.addLevelOpenButton(j.LevelOpenId.WorldMap, e._view.btnMap, !0),
            e.addLevelOpenButton(
              j.LevelOpenId.DrugModel,
              e._view.btnUseItem,
              !0,
            ),
            e.addLevelOpenButton(
              j.LevelOpenId.ChatView,
              e._view.btnChatIcon,
              !0,
            ),
            e.addLevelOpenButton(j.LevelOpenId.TeamView, e._view.btnAround, !0),
            e.addLevelOpenButton(
              j.LevelOpenId.PetBattle,
              e._view.btnPetBattle,
              !0,
            ),
            e.addLevelOpenButton(j.LevelOpenId.DigHole, e._view.btnDigHole, !0),
            e.addLevelOpenButton(
              j.LevelOpenId.CountryView,
              e._view.btnManor,
              !0,
            ),
            e.addLevelOpenButton(j.LevelOpenId.DailyView, e._view.btnDaily, !0),
            e.addLevelOpenButton(
              j.LevelOpenId.MainbtnAuto,
              e._view.btnAutoRole,
              !0,
            ),
            e.addLevelOpenButton(
              j.LevelOpenId.MainCity,
              e._view.btnGotoCity,
              !0,
            ),
            e.addLevelOpenButton(j.LevelOpenId.Legion, e._view.btnLegion, !0),
            e.addLevelOpenButton(
              j.LevelOpenId.FinalBoss,
              e._view.btnFinalBoss,
              !0,
            ),
            e.addLevelOpenButton(j.LevelOpenId.Hint, e._view.btnHint, !0),
            e.addLevelOpenButton(
              j.LevelOpenId.NewMission,
              e._view.btnNewTask,
              !0,
            ),
            e.addLevelOpenButton(
              j.LevelOpenId.Stronger,
              e._view.btn_beStronger,
              !0,
            ),
            e.addLevelOpenButton(j.LevelOpenId.Energy, e._view.btnBlood, !0),
            e.addLevelOpenButton(
              j.LevelOpenId.CrossPla,
              e._view.btnCrossPla,
              !0,
            ),
            j["default"].ins.mandatoryAnim([
              j.LevelOpenProtoId.PetView,
              j.LevelOpenProtoId.BattleActo,
              j.LevelOpenProtoId.MailView,
              j.LevelOpenProtoId.CityView,
              j.LevelOpenProtoId.DrugModel,
              j.LevelOpenProtoId.TeamView,
              j.LevelOpenProtoId.PetBattle,
              j.LevelOpenProtoId.DigHole,
              j.LevelOpenProtoId.CountryView,
              j.LevelOpenProtoId.DailyView,
              j.LevelOpenProtoId.MainCity,
              j.LevelOpenProtoId.MainbtnAuto,
              j.LevelOpenProtoId.ChatView,
              j.LevelOpenProtoId.Legion,
              j.LevelOpenProtoId.FinalBoss,
              j.LevelOpenProtoId.Hint,
              j.LevelOpenProtoId.NewMission,
              j.LevelOpenProtoId.Stronger,
              j.LevelOpenProtoId.Energy,
              j.LevelOpenProtoId.CrossPla,
            ]));
        }),
        (t.prototype.addListeners = function () {
          var e = this;
          (e.levelOpenButton(),
            e.onEgret(e._view, egret.TouchEvent.TOUCH_TAP, e.onTapView, e),
            e.onEgret(
              e._view.btnFixed,
              egret.TouchEvent.TOUCH_TAP,
              e.topFixed,
              e,
            ),
            e.onEgret(
              e._view.btnLottery,
              egret.TouchEvent.TOUCH_TAP,
              e.topLottery,
              e,
            ),
            e.onEgret(
              e._view.btnWorldBuff,
              egret.TouchEvent.TOUCH_TAP,
              e.tapWorldBuff,
              e,
            ),
            e.onEgret(
              e._view.btnFormation,
              egret.TouchEvent.TOUCH_TAP,
              e.tapFormtion,
              e,
            ),
            e.onEgret(
              e._view.btnHint,
              egret.TouchEvent.TOUCH_TAP,
              e.tapHint,
              e,
            ),
            e.onEgret(
              e._view.btnOpen,
              egret.TouchEvent.TOUCH_TAP,
              e.tabOpen,
              e,
            ),
            e.listen(e._view.btnFuLi, e.tapFuLi),
            e.listen(e._view.btn_help, e.onTapHelp),
            e.listen(e._view.btnDigHole, e.onBtnDigHole),
            e.listen(e._view.btnBulk, e.onBtnBulk),
            e.onEgret(
              e._view.btnReward,
              egret.TouchEvent.TOUCH_TAP,
              e.tabReward,
              e,
            ),
            e.onEgret(
              e._view.btnBlood,
              egret.TouchEvent.TOUCH_TAP,
              e.onBtnblood,
              e,
            ),
            e.onEgret(
              e._view.btnOptional,
              egret.TouchEvent.TOUCH_TAP,
              e.onBtnOptional,
              e,
            ),
            e.onEgret(
              e._view.btnChargeGift,
              egret.TouchEvent.TOUCH_TAP,
              e.onBtnChargeGift,
              e,
            ),
            e.onEgret(
              e._view.btnSevenDay,
              egret.TouchEvent.TOUCH_TAP,
              e.onClickSevenDay,
              e,
            ),
            e.onEgret(
              e._view.btnBoss,
              egret.TouchEvent.TOUCH_TAP,
              e.onClickBoss,
              e,
            ),
            e.onEgret(
              e._view.scroller_chat,
              egret.TouchEvent.TOUCH_TAP,
              e.tapChat,
              e,
            ),
            e.onEgret(
              e._view.btnRole,
              egret.TouchEvent.TOUCH_TAP,
              e.tapRole,
              e,
            ),
            e.onEgret(
              e._view.btnHead,
              egret.TouchEvent.TOUCH_TAP,
              e.tapSystem,
              e,
            ),
            e.onEgret(
              e._view.btnPetHead,
              egret.TouchEvent.TOUCH_TAP,
              e.tapPetForBattle,
              e,
            ),
            e.onEgret(e._view.btnBag, egret.TouchEvent.TOUCH_TAP, e.tapBag, e),
            e.onEgret(e._view.btnPet, egret.TouchEvent.TOUCH_TAP, e.tapPet, e),
            e.onEgret(
              e._view.btnMission,
              egret.TouchEvent.TOUCH_TAP,
              e.tapMission,
              e,
            ),
            e.onEgret(
              e._view.btnUseItem,
              egret.TouchEvent.TOUCH_TAP,
              e.tapUseItem,
              e,
            ),
            e.onEgret(e._view.btnMap, egret.TouchEvent.TOUCH_TAP, e.tapMap, e),
            e.onEgret(
              e._view.btnMail,
              egret.TouchEvent.TOUCH_TAP,
              e.tapMail,
              e,
            ),
            e.onEgret(
              e._view.btnAround,
              egret.TouchEvent.TOUCH_TAP,
              e.onNear,
              e,
            ),
            e.onEgret(
              e._view.btnManor,
              egret.TouchEvent.TOUCH_TAP,
              e.tapManor,
              e,
            ),
            e.onEgret(
              e._view.btnCharge,
              egret.TouchEvent.TOUCH_TAP,
              e.onBtnCharge,
              e,
            ),
            e.onEgret(
              e._view.btnShop,
              egret.TouchEvent.TOUCH_TAP,
              e.tapShop,
              e,
            ),
            e.onEgret(e._view.btnNt, egret.TouchEvent.TOUCH_TAP, e.onTapNt, e),
            e.onEgret(
              e._view.btnCeremony,
              egret.TouchEvent.TOUCH_TAP,
              e.tabCeremony,
              e,
            ),
            e.onEgret(
              e._view.btn_beStronger,
              egret.TouchEvent.TOUCH_TAP,
              e.onTapBeStronger,
              e,
            ),
            e.onEgret(
              e._view.btnPower,
              egret.TouchEvent.TOUCH_TAP,
              e.onTapBeStronger,
              e,
            ),
            e.onEgret(
              e._view.btnNewTask,
              egret.TouchEvent.TOUCH_TAP,
              e.tapNewTask,
              e,
            ),
            e.onEgret(
              e._view.btnDaily,
              egret.TouchEvent.TOUCH_TAP,
              e.tapDaily,
              e,
            ),
            e.onEgret(
              e._view.btnPetBattle,
              egret.TouchEvent.TOUCH_TAP,
              e.tapPetBattle,
              e,
            ),
            e.onEgret(
              e._view.btnShopGoods,
              egret.TouchEvent.TOUCH_TAP,
              e.tapShopGoods,
              e,
            ),
            e.onEgret(
              e._view.btnShopRecord,
              egret.TouchEvent.TOUCH_TAP,
              e.tapShopRecord,
              e,
            ),
            e.onEgret(
              e._view.btnStopShop,
              egret.TouchEvent.TOUCH_TAP,
              e.tapStopShop,
              e,
            ),
            e.onEgret(
              e._view.btnStarShop,
              egret.TouchEvent.TOUCH_TAP,
              e.tapStarShop,
              e,
            ),
            e.onEgret(
              e._view.btnCrossPla,
              egret.TouchEvent.TOUCH_TAP,
              e.tapCrossPla,
              e,
            ),
            e.onEgret(
              e._view.lab_misContent,
              egret.TouchEvent.TOUCH_TAP,
              e.onTapMission,
              e,
            ),
            e.onEgret(
              e._view.btnSwitch,
              egret.TouchEvent.TOUCH_TAP,
              e.onSwitchMenu,
              e,
            ),
            e.listen(e._view.btnTeam, e.onTeam),
            e.listen(e._view.btnRevert, e.onTapRevert),
            e.listen(e._view.btnShare, e.tapShare),
            e.listen(e._view.btnAutoFight, e.onTapBtnAutoFight),
            e.listen(e._view.btnAutoRole, e.onTapBtnAutoRole),
            e.listen(e._view.btnVip, e.onTapVipBtn),
            e.listen(e._view.btn_gameClub, e.onTapGameClubBtn),
            e.listen(e._view.btn_revisitGuide, e.onTapRevisitGuideBtn),
            e.listen(e._view.btnSendShop, e.onTapSend),
            e.listen(e._view.btnCity, e.onTapCity),
            e.listen(e._view.btnFinalBoss, e.onTapFinalBoss),
            e.listen(e._view.btn_sendToDesk, e.onTapSendToDesk),
            e.listen(e._view.btnAct, e.onTapAct),
            e.listen(e._view.btnTower, e.onTapTower),
            e.listen(e._view.btnCampWar, e.onTapCampWar),
            e.listen(e._view.btnSailing, e.enterSailing),
            e.listen(e._view.btnBuddy, e.enterBuddy),
            e.listen(e._view.btnRichman, e.onTapRichman),
            e.listen(e._view.btnRedPacket, e.onTapRedPacket),
            e.listen(e._view.btnLegion, e.onTapLegion),
            e.listen(e._view.btnForHelp, e.onBtnForHelp),
            e.onNt(r.MissionEvent.ON_MAIN_MISSION_UPDATE, e.onMissionUpdate, e),
            e.onNt(y.SceneEvent.ON_NPC_SIGN_UPDATE, e.onMissionUpdate, e),
            e.onNt(r.MailEvent.MAIL_RP, e.updateMailRp),
            e.onNt(r.BagEvent.BAG_ITEM_UPDATE, e.onMissionUpdate, e),
            e.onNt(r.MainEvent.ON_MAIN_ICON, e.updateIcon),
            e.onNt(r.ChatEvent.ADD_MAIN_CHAT, e.upCharView),
            e.onNt(r.RoleEvent.ROLE_COMBATPOWER, e.upRoleInfo),
            e.onNt(r.BagEvent.BAG_CHANGE_DURABILITY, e.updateFixed),
            e.onNt(r.BattleEvent.ON_BATTLE_START, e.onBattleStart, e),
            e.onNt(r.BattleEvent.ON_BATTLE_END, e.onBattleEnd, e),
            e.onNt(r.MainEvent.ON_BUFF_ICON, e.updateWorldBuff, e),
            e.onNt(r.ShopEvent.SHOP_SELFSHOP_OPEN, e.updateSelfShop),
            e.onNt(r.ShopEvent.SHOP_SELFSHOP_STOP, e.updateSelfShop),
            e.onNt(y.SceneEvent.ON_MODE_UPDATE, e.updateSelfShop),
            e.onNt(r.MainEvent.ON_BAG_HINT, e.onBagHintEvent, e),
            e.onNt(r.MainEvent.ON_HITE_SHOW, e.onHintShowEvent, e),
            e.onNt(r.RoleEvent.ROLE_ATTR_UPDATE, e.onRoleHintEvent, e),
            e.onNt(r.RoleEvent.ROLE_GENRE_POINT, e.onRoleHintEvent, e),
            e.onNt(r.MainEvent.ON_PLAYER_ATTR_UPDATE, e.onRoleHintEvent, e),
            e.onNt(r.MainEvent.ON_UPDATE_HINT, e.onUpdateHint, e),
            e.onNt(r.MainEvent.PLAYER_FORMATION, e.updateWorldBuff, e),
            e.onNt(y.SceneEvent.UPDATE_BTN_AUTO_ROLE, e.updateBtnAutoRole, e),
            e.onNt(r.OnLineReWardEvent.ONLINEREWARD_RED, e.btnRewardRed, e),
            e.onNt(
              r.SystemEvent.SYSTEM_SETTING_UPDATE,
              e.onSystemSettingUpdate,
              e,
            ),
            e.onNt(r.MainEvent.BTN_SWITCH, e.updateMenu),
            e.onNt(r.ChargeEvent.TOTAL_CHARGE_UPDATE, e.updateVipBtn, e),
            e.onNt(r.MainEvent.ON_OPEN_LEVEL_UP, e.updateOpenLevel, e),
            e.onNt(r.MainEvent.ON_GAME_SPEED_UPDATE, this.updateBtnSpeed, e),
            e.onNt(r.MainEvent.ON_LEVEL_UP, e.upRoleLevel, e),
            e.onNt(r.MainEvent.ON_MAIN_UP_ICON, e.upRoleLevel, e),
            e.onNt(r.AchievementEvent.ACHIEVEMENT_RED, e.upCityRed),
            e.onNt(r.BookGroupEvent.bookGroupRed, e.upCityRed),
            e.onNt(r.CampWarEvent.CAMPWAR_ENTER_TOGGLE, e.enterCampWar),
            e.onNt(r.MainEvent.ON_PLAYER_ATTR_UPDATE, e.onPlayerAttrUpdate, e),
            e.onNt("guideTest", e.regGuide),
            e.onNt(W.LauncherEvent.ON_RESIZE, e.updateExp, e),
            e.onNt(r.MainEvent.ON_LEVEL_MAIN_BUTTON, e.levelOpenButton, e),
            e.onNt(r.MainEvent.MAIN_BLOOD_BOTTLE, e.onBloodBottle, e),
            e.onNt(r.MainEvent.MAIN_BTN_AUTO_FIGHT, e.updateBtnAutoFight, e),
            e.onNt(r.BattleEvent.UPDATE_AUTO_FIGHT, e.updateBtnAutoFight, e),
            e.onNt(r.SDK_EVENT.PAY_STATUS_CHANGE, e.updateChargeBtn, e),
            e._view.btnGotoCity && e.listen(e._view.btnGotoCity, e.onGotoCity),
            e.listen(e._view.btn_recorder, e.onTapRecorder),
            e.onNt(r.SDK_EVENT.ON_RECORDER_START, e.onRecorderStart, e),
            e.onNt(r.SDK_EVENT.ON_RECORDER_END, e.onRecorderEnd, e),
            e.onNt(y.SceneEvent.ON_PET_DEL, e.onPetUpdate, e),
            e.onNt(y.SceneEvent.ON_PET_ADD, e.onPetUpdate, e),
            e.onNt(r.MainEvent.SEND_DESK, e.dealSendToDesk, e),
            e.onNt(r.MainEvent.HKT_KeFu_HINT, e.updateHelpHint, e),
            e.onNt(y.SceneEvent.SCENE_CHANGE, e.onSceneChanged, e),
            e.onNt(r.ActivityEvent.ACTIVIITY_BULKINFO, e.onBulkInfo, e),
            e.onNt(
              r.ActivityEvent.ACTIVIITY_SEVENDAY_REWARD_INFO,
              e.onSevenDay,
              e,
            ),
            e.onNt(
              r.ActivityEvent.ACTIVIITY_SEVENDAY_REWARD_GET,
              e.onSevenDayGetRw,
              e,
            ),
            e.onNt(
              r.ActivityEvent.ACTIVIITY_CONQUER_BOSS_INFO,
              e.onConquerBoss,
              e,
            ),
            e.onNt(
              r.ActivityEvent.ACTIVIITY_CONQUER_BOSS_REWARD,
              e.onConquerBossGetRw,
              e,
            ),
            e.onNt(r.MissionEvent.ON_MISSION_ICON_SHOW, e.showGuidTask, e),
            e.onNt(r.MissionEvent.ON_MISSION_ICON_SHOW, e.showGuidTask, e),
            e.onNt(r.ActivityEvent.PASS_CMD_UPDATE, e.updatePassWard, e),
            e.onNt(
              r.ActivityEvent.ACTIVIITY_PASS_DATA_INFO,
              e.updatePassWard,
              e,
            ));
        }),
        (t.prototype.updateHelpHint = function (e) {
          var t = e.body,
            i = this._view.btn_help;
          go.isHKTNative && i.visible && (i.hint.visible = !!t);
        }),
        (t.prototype.onPetUpdate = function () {
          this._view.btnPetHead.visible = null != g["default"].myPlayer.pet;
        }),
        (t.prototype.onRecorderStart = function () {
          ((this._view.btn_recorder.icon = "zhu_icon_luz_d"),
            (this._view.btn_recorder.label = "停止"));
        }),
        (t.prototype.onRecorderEnd = function () {
          ((this._view.btn_recorder.icon = "zhu_icon_luz"),
            (this._view.btn_recorder.label = "录屏"));
        }),
        (t.prototype.onTapRecorder = function () {
          gs.startRecorder();
        }),
        (t.prototype.onTapHelp = function () {
          if (go.isByteGame) return void gs.showCustomerService();
          if (go.isHKTNative) {
            var e = d.Tool.getStyle(g["default"].myPlayer),
              t = Q["default"].ins.getRealUrl(e, ".png");
            return (
              gs.showCustomerService(
                null,
                null,
                null,
                t,
                g["default"].totalCharge,
              ),
              void (this._view.btn_help.hint.visible = !1)
            );
          }
          this.showView(s.MainViewType.GameClubAlert);
        }),
        (t.prototype.onGotoCity = function () {
          return l["default"].isCityMap(g["default"].orgMapID) &&
            g["default"].cityMasterId == g["default"].myPlayer.id
            ? void _.Tips.show("你已经在自己的城市里了")
            : void K["default"].doViewCityInfo(void 0, void 0, !0);
        }),
        (t.prototype.onTapCity = function () {
          p["default"].showWin(s.ModName.Main, s.MainViewType.MainCity);
        }),
        (t.prototype.onPlayerAttrUpdate = function (e) {
          var t = e.body;
          (t == u.ModelConst.EXP || t == u.ModelConst.EXPMAX) &&
            this.updateExp();
        }),
        (t.prototype.updateExp = function () {
          var e = g["default"].myPlayer;
          if (!e) return void (this._view.grp_exp.visible = !1);
          this._view.grp_exp.visible = !0;
          var t = e.get(u.ModelConst.EXPMAX),
            i = e.get(u.ModelConst.EXP);
          i > t && (i = t);
          var o = this._view.width;
          this._view.img_exp.width = t ? (i / t) * o : o;
        }),
        (t.prototype.onTapNt = function () {
          p["default"].createPlayerEventUI();
        }),
        (t.prototype.updateBtnNt = function () {
          var e = g["default"].isShowPlayerEvent();
          ((this._view.btnNt.visible = e),
            (this._view.btnNt.includeInLayout = e),
            (this._view.btnNt.hint.visible = !0));
        }),
        (t.prototype.onTapSpeed = function () {
          O.UIAction.onTapSpeedBtn();
        }),
        (t.prototype.updateBtnSpeed = function () {}),
        (t.prototype.onTapSend = function () {
          p["default"].showModal(
            s.ModName.Activity,
            s.ActivityViewType.ActivitySend,
          );
        }),
        (t.prototype.onTapVipBtn = function () {
          p["default"].showModal(s.ModName.Charge, s.ChargeType.ChargeVip);
        }),
        (t.prototype.updateVipBtn = function () {
          if (go.isHKTNative || go.targetPf == W.TARGET_PLATFORM.HKT)
            return void (this._view.btnVip.visible =
              this._view.btnVip.includeInLayout =
                !0);
          var e = go.isWxP8 ? 648 : 5e3;
          ((this._view.btnVip.visible = go.openPay
            ? j["default"].ins.getOpen(j.LevelOpenProtoId.Noble) &&
              g["default"].totalCharge >= e
            : !1),
            (this._view.btnVip.includeInLayout = this._view.btnVip.visible));
        }),
        (t.prototype.upRoleLevel = function () {
          (this.dealIcon(G["default"].ACTIVITY_LOTTERY),
            this.dealIcon(G["default"].ACTIVITY_OPTIONAL),
            this.dealIcon(G["default"].ACTIVITY_CHARGE),
            this.dealIcon(G["default"].ACTIVITY_REWARD),
            this.dealIcon(G["default"].ACTIVITY_FULI),
            this.dealIcon(G["default"].ACTIVITY_OPEN),
            this.dealIcon(G["default"].CHARGE_GIFT),
            this.dealIcon(G["default"].ACTIVITY_LOTTERY),
            this.dealIcon(G["default"].RICH_MAN),
            this.dealIcon(G["default"].TOWER),
            this.updateVipBtn(),
            this.updateOpenLevel());
        }),
        (t.prototype.updatePassWard = function () {
          this.dealIcon(G["default"].ACTIVITY_FULI);
        }),
        (t.prototype.upCityRed = function () {
          var e = !1;
          if (!e) {
            var t = o["default"].getProxy(
              s.ModName.Achievement,
              s.ProxyType.Achievement,
            );
            e = t.achievementRedPush(!1);
          }
          if (!e) {
            var t = o["default"].getProxy(
              s.ModName.Raiders,
              s.ProxyType.Raiders,
            );
            for (var i in t.bookGroupModel.bookGroupRed)
              if (
                t.bookGroupModel.bookGroupRed[i] &&
                t.bookGroupModel.bookGroupRed[i].length > 0
              ) {
                e = !0;
                break;
              }
          }
          this._view.btnCity.setRed = this._view.btnCity.lock.visible ? !1 : e;
        }),
        (t.prototype.onTapBtnAutoRole = function () {
          var e = b.MainPlayerAi.ins;
          (e.setOpen(!e.open),
            this.updateBtnAutoRole(),
            e.open &&
              (e.updateCurMission(),
              e.curMission || _.Tips.show("当前没有可执行的挂机任务")));
        }),
        (t.prototype.updateBtnAutoRole = function () {
          var e = this._view.btnAutoRole;
          e.label = b.MainPlayerAi.ins.open ? "关闭" : "挂机";
        }),
        (t.prototype.onTapBtnAutoFight = function () {
          ((g["default"].TAG_IS_AUTO_FIGHT_FLAG =
            !g["default"].TAG_IS_AUTO_FIGHT_FLAG),
            this.updateBtnAutoFight());
        }),
        (t.prototype.updateBtnAutoFight = function () {
          this._view.btnAutoFight.label = g["default"].TAG_IS_AUTO_FIGHT_FLAG
            ? "关闭"
            : "自动";
        }),
        (t.prototype.regGuide = function () {
          var e = this,
            t = e._view;
          (e.regGuideSprs(x.GuideDefine.roleGuidelist, t.btnRole),
            e.regGuideSpr(x.GuideSpriteId.bloodRevert, t.btnRevert),
            e.regGuideSpr(x.GuideSpriteId.drug, t.btnUseItem),
            e.regGuideSprs(x.GuideDefine.mainCityList, t.btnCity),
            e.regGuideSpr(x.GuideSpriteId.task2, t.btnMission),
            e.regGuideSpr(x.GuideSpriteId.newTaskEnter, t.btnNewTask),
            e.regGuideSprs(x.GuideDefine.autoHangGuideList, t.btnAutoRole),
            e.regGuideSprs(
              [x.GuideSpriteId.submitTask, x.GuideSpriteId.cityTask],
              t.lab_misContent,
            ),
            e.regGuideSpr(x.GuideSpriteId.euqipRepairBtn, t.btnFixed),
            e.regGuideSprs(x.GuideDefine.mainAllGuidelist, t),
            e.regGuideSprs(x.GuideDefine.bagGuidelist, t.btnBag),
            e.regGuideSprs(x.GuideDefine.backCityGuidelist, t.btnGotoCity),
            e.regGuideSpr(x.GuideSpriteId.countryEnter, t.btnManor),
            e.regGuideSpr(x.GuideSpriteId.dailyEnter, t.btnDaily),
            e.regGuideSpr(x.GuideSpriteId.petEnter, t.btnPet),
            e.regGuideSpr(x.GuideSpriteId.charge, t.btnCharge),
            e.regGuideSpr(x.GuideSpriteId.legionEnter, t.btnLegion));
        }),
        (t.prototype.onUpdateFormation = function () {
          ((this._view.btnFormation.visible = !1),
            (this._view.btnFormation.includeInLayout = !1));
        }),
        (t.prototype.onHintShowEvent = function () {
          var e = egret.localStorage.getItem(tt.LocalStorageKey.NoticeRed),
            t = ot["default"].getTimeDay(),
            i = localStorage.getItem(
              tt.LocalStorageKey.noticeDay + g["default"].myPlayer.id,
            ),
            o = i == t ? !1 : !0;
          this.setIconIncludeLayout(
            this._view.btnHint,
            Y["default"].list.length > 0,
            "true" == e || o,
          );
        }),
        (t.prototype.onUpdateHint = function () {}),
        (t.prototype.onBagHintEvent = function (e) {
          var t = g["default"].myPlayer;
          if (t) {
            var i = t.bag;
            if (i) {
              var o = e.body;
              if (this._view.btnBag.hint.visible != o) {
                if (0 == o)
                  for (
                    var n = w["default"].BAG_START;
                    n < t.BagSize + w["default"].BAG_START;
                    n++
                  ) {
                    var a = i.getItem(n);
                    if (null != a && a.ShowNewSign) {
                      o = !0;
                      break;
                    }
                  }
                this._view.btnBag.setRed = o;
              }
            }
          }
        }),
        (t.prototype.onRoleHintEvent = function () {
          var e,
            t,
            i = g["default"].myPlayer,
            n = i && i.get(u.ModelConst.CP) > 0;
          (n ||
            ((t = o["default"].getProxy(s.ModName.Role, s.ProxyType.Role)),
            !g["default"].myPlayer.GenreIsOn() ||
            !t.data.skillGenreData ||
            (null === (e = t.data.skillGenreData) || void 0 === e
              ? void 0
              : e.isUp) >= 4
              ? (n = !1)
              : j["default"].ins.getOpen(j.LevelOpenProtoId.RoleGenre, !1) &&
                (n = t.data.redPoint)),
            n || (n = X.RoleGodData.getRoleGodRed()),
            (this._view.btnRole.setRed = n));
        }),
        (t.prototype.onBattleStart = function () {
          this._view.visible = !1;
        }),
        (t.prototype.onBattleEnd = function () {
          ((this._view.visible = !0), this.updatePlayerInfo());
        }),
        (t.prototype.onTapRevert = function () {
          j["default"].ins.getIsOpen(j.LevelOpenId.DrugModel) &&
            g["default"].doQuickAddHP(g["default"].myPlayer);
        }),
        (t.prototype.tapFuLi = function () {
          p["default"].createActivitInfoUI(0);
        }),
        (t.prototype.onBtnDigHole = function () {
          p["default"].createDigHoleUI();
        }),
        (t.prototype.tapShare = function () {
          p["default"].createActivityShareUI();
        }),
        (t.prototype.updateIcon = function (e) {
          var t,
            i = e ? e.body : null,
            o = this;
          if (i) {
            var n = void 0;
            switch (i) {
              case l["default"].ICON_TYPE_TEAM:
                t = !0;
                break;
              case l["default"].IS_OPEN_TYPE_BONUS_ONLINE:
                n = G["default"].ACTIVITY_REWARD;
                break;
              case l["default"].ISO_OPEN_TYPE_LOTTERY:
                n = G["default"].ACTIVITY_LOTTERY;
                break;
              case l["default"].IS_OPEN_TYPE_ACTIVITY_ICON:
                n = G["default"].ACTIVITY_FULI;
                break;
              case l["default"].IS_OPEN_TYPE_MISSION_ICON:
                n = G["default"].ACTIVITY_MISSION;
                break;
              case l["default"].IS_OPEN_TYPE_DAILY_ICON:
                n = G["default"].ACTIVITY_DAILY;
                break;
              case l["default"].IS_OPEN_TYPE_CEREMONY_ICON:
                n = G["default"].ACTIVITY_SEVENDAY;
                break;
              case l["default"].IS_OPEN_TYPE_OPEN_ICON:
                n = G["default"].ACTIVITY_OPEN;
                break;
              case l["default"].IS_OPEN_TYPE_CHARGE_NAME:
                n = l["default"].IS_OPEN_TYPE_CHARGE_NAME;
                break;
              case l["default"].IS_OPEN_TYPE_SHARE_ICON:
                n = G["default"].ACTIVITY_SHARE;
                break;
              case G["default"].ACTIVITY_SEND_SHOP:
                n = G["default"].ACTIVITY_SEND_SHOP;
                break;
              case l["default"].IS_OPEN_TYPE_CHARGE:
                n = G["default"].ACTIVITY_CHARGE;
                break;
              default:
                n = i;
            }
            null != n && o.dealIcon(n);
          } else ((t = !0), this.updateAllIcon());
          (t && this.updateTeamIcon(), this.onShowSailing());
        }),
        (t.prototype.updateAllIcon = function () {
          for (var e = this, t = 0; t < e.activityTypeList.length; t++)
            e.dealIcon(e.activityTypeList[t]);
        }),
        (t.prototype.dealIcon = function (e) {
          var t,
            i,
            n,
            a,
            r,
            u,
            _,
            d = this,
            p = d.activityTypeList.indexOf(e);
          switch (e) {
            case G["default"].ACTIVITY_SEND_SHOP:
              if (!go.openPay) break;
              ((r = U["default"].ins.getData(k.ActivityDataType.SEND_SHOP, [])),
                r.length > 0 &&
                  ((_ = U["default"].ins.getData(
                    k.ActivityDataType.SEND_SHOP_TIME,
                    0,
                  )),
                  F.TimeUtil.isTimeOut(_) || (n = !0)));
              break;
            case l["default"].IS_OPEN_TYPE_CHARGE_NAME:
              var c = o["default"].getProxy(
                s.ModName.Charge,
                s.ProxyType.Charge,
              );
              ((d._view.btnCharge.labelDisplay.text =
                c.isMultiple.length > c.chargeItemLen ? "首充" : "充值"),
                (u = !0));
              break;
            case G["default"].PET_PK:
              ((u = !0),
                (i = G["default"].getInstance.getType(e)),
                (this._view.btnPetBattle.hint.visible = i.red));
              break;
            case G["default"].GAME_CLUB:
              ((u = !0),
                (i = G["default"].getInstance.getType(e)),
                (this._view.btn_gameClub.hint.visible = i.red));
              break;
            case G["default"].FINAL_BOSS:
              u = !0;
              var h =
                void 0 != J.FinalBossData.btnHint
                  ? J.FinalBossData.btnHint
                  : null === (t = G["default"].getInstance.getType(e)) ||
                      void 0 === t
                    ? void 0
                    : t.red;
              this._view.btnFinalBoss.hint.visible = h;
              break;
            case G["default"].ACTIVITY_MISSION:
              ((u = !0),
                (i = G["default"].getInstance.getType(e)),
                (this._view.btnNewTask.hint.visible = i.red));
              break;
            default:
              ((i = G["default"].getInstance.getType(e)),
                i && ((n = i.isShow), (a = i.red)));
          }
          if (!u) {
            var f = d.activityBtnList[p];
            f &&
              (go.newClosePay && -1 != d.payBtnList.indexOf(f)
                ? d.setIconIncludeLayout(f, !1, !1)
                : (d.setIconIncludeLayout(f, n, a), null != _ && (f.time = _)));
          }
          (C.GUtil.setLayout(d._view.btn_gameClub, go.isWeixin),
            C.GUtil.setLayout(d._view.btnShare, go.isWeixin),
            C.GUtil.setLayout(d._view.btn_revisitGuide, go.isByteGame));
        }),
        (t.prototype.setIconIncludeLayout = function (e, t, i) {
          (void 0 === i && (i = !1),
            e.mandatory && (t = !1),
            C.GUtil.setLayout(e, t),
            t && (e.setRed = e.lock.visible ? !1 : i));
        }),
        (t.prototype.btnRewardRed = function () {
          var e = G["default"].getInstance.getType(
            G["default"].ACTIVITY_REWARD,
          );
          this.setIconIncludeLayout(this._view.btnReward, e.isShow, e.red);
        }),
        (t.prototype.upRoleInfo = function () {
          this._view.playerInfo.updatePlayerInfo();
        }),
        (t.prototype.upCharView = function () {
          for (
            var e = P["default"].getChatMsgVector(l["default"].CHAT_TYPE_ALL),
              t = [],
              i = e.size(),
              o = i - 1;
            o >= 0;
            o--
          ) {
            var n = e.elementAt(o),
              a = d.Tool.channel2Off(n.channel),
              r = g["default"].myPlayer.isSettingBit(a);
            if (
              !r &&
              ((n.chatItemWidth = 600), t.unshift(e.elementAt(o)), t.length > 4)
            )
              break;
          }
          ((this.listChar.source = t),
            C.GUtil.scrollHV(
              this._view.scroller_chat,
              this._view.list_chat,
              99,
              350,
            ));
        }),
        (t.prototype.updateTeamIcon = function () {
          var e,
            t = g["default"].myPlayer;
          (t.isPlayerTeam() && (e = !0),
            (this._view.btnTeam.visible = e),
            (this._view.btnTeam.includeInLayout = e));
        }),
        (t.prototype.updatePlayerInfo = function () {
          ((this._view.playerInfo.type = p["default"].PLAYER_INFO_WORLD),
            this._view.playerInfo.updatePlayerInfo());
        }),
        (t.prototype.onTapMission = function () {
          var e = b.MainPlayerAi.ins.curMission;
          if (e) {
            var t = g["default"].myPlayer;
            if (t.isCanMove())
              return t.isAutoMoving
                ? void b.MainPlayerAi.ins.autoMoveAsk()
                : void T["default"].doMissionInfoView(
                    t,
                    e,
                    null,
                    p["default"].SUB_MISSION_VIEW,
                  );
          }
        }),
        (t.prototype.onSceneChanged = function () {
          b.MainPlayerAi.ins.curMissionId = null;
        }),
        (t.prototype.onMissionUpdate = function (e) {
          this.updateMission();
        }),
        (t.prototype.updateMission = function () {
          var e = b.MainPlayerAi.ins.curMission;
          if (!e) {
            ((this._view.lab_misContent.text = ""),
              (this._view.img_misStatus.source = null),
              C.GUtil.setLayout(this._view.btnForHelp, !1));
            var t = g["default"].myPlayer.getCurMapMission(!1);
            return (
              t || (t = g["default"].myPlayer.getLocalMapMission(!1, !1)),
              void (t && (b.MainPlayerAi.ins.curMissionId = t.id))
            );
          }
          var i = e.status;
          ((this._view.lab_misContent.width = void 0),
            (this._view.lab_misContent.height = void 0),
            (this._view.lab_misContent.textFlow = c["default"].parseHtml(
              e.getMainDesc(),
            )),
            (this._view.img_misStatus.source = E.SignSrc[i + 1]),
            C.GUtil.setLayout(
              this._view.btnForHelp,
              j["default"].ins.getIsOpen(j.LevelOpenId.ForHelp) &&
                e.isForHelp(),
            ),
            this._view.grp_mission.validateNow());
        }),
        (t.prototype.onBtnForHelp = function () {
          var e = b.MainPlayerAi.ins.curMission;
          e && $["default"].askForHelp(!0, e.id);
        }),
        (t.prototype.updateFixed = function (e) {
          var t =
              (null === e || void 0 === e ? void 0 : e.body,
              g["default"].myPlayer),
            i = !1;
          if (t && (i = t.bag.isDestroyEquip(!1))) {
            var n = new V["default"]();
            (n.append(I.GameText.STR_ALL_INFO_DUR_BROCKEN),
              g["default"].myPlayer.bag.isDestroyEquip(!1, n),
              H["default"].addPromptMsg(n.toString()));
          }
          ((this._view.btnFixed.visible = i),
            (this._view.btnFixed.hint.visible = i),
            (this._view.btnFixed.includeInLayout = i),
            o["default"].sendNt(r.BagEvent.BAG_FIX, i));
        }),
        (t.prototype.onShow = function () {
          e.prototype.onShow.call(this);
          var t = this;
          if (
            ((p["default"].isMainShowing = !0),
            (t._view.visible = !0),
            (t._view.btnBag.hint.visible = !1),
            (t._view.groupSelfShop.visible = !1),
            t.updatePlayerInfo(),
            t.updateMission(),
            t.updateMenu(),
            t.updateIcon(),
            t.upCharView(),
            t.updateFixed(),
            t.updateWorldBuff(),
            t.updateSelfShop(),
            t.onRoleHintEvent(),
            t.onUpdateHint(),
            t.onUpdateFormation(),
            t.updateBtnAutoRole(),
            t.updateBtnAutoFight(),
            t.onSystemSettingUpdate(),
            t.updateVipBtn(),
            t.onHintShowEvent(),
            t.updateExp(),
            t.upCityRed(),
            t.onBloodBottle(),
            t.onPetUpdate(),
            t.onBulkInfo(),
            t.onSevenDay(),
            t.onConquerBoss(),
            t.onShowCampWar(),
            t.onShowBuddy(),
            !t.btnStrongerEft)
          ) {
            var i = t._view.btn_beStronger;
            ((i.iconDisplay.visible = !1),
              (i.labelDisplay.size = 20),
              (t.btnStrongerEft = t.addUIAnimate(
                "bianqiang",
                27,
                20,
                i,
                void 0,
                3,
                null,
                9,
                1,
                !1,
              )),
              (this.nextPlayTime = S["default"].timer.serverTime + 1e4));
          }
          (Z.delayCall(a["default"].alloc(this, this.checkLoginRecord), 500),
            S["default"].addUpdateItem(t, 1e3),
            (this.autoClearEquipTime = S["default"].timer.serverTime));
          var n = o["default"].getProxy(s.ModName.Mission, s.ProxyType.Mission);
          n.doMissionTaskInfo();
        }),
        (t.prototype.showGuidTask = function (e) {
          if (e.body && e.body.info) {
            for (var t = e.body.info, i = 0, o = t; i < o.length; i++) {
              var n = o[i];
              if (2 != n.status) return;
            }
            this.setIconIncludeLayout(this._view.btnNewTask, !1, !1);
          }
        }),
        (t.prototype.checkLoginRecord = function () {
          var e;
          if (!go.isFight) {
            var t = o["default"].getProxy(s.ModName.Login, s.ProxyType.Login),
              i =
                null === (e = t.data.recordData) || void 0 === e
                  ? void 0
                  : e.viewInfo;
            i && p["default"].showWin(i.mName, i.vType, i.data);
          }
        }),
        (t.prototype.playBtnStrongerEft = function () {
          if (this.btnStrongerEft) {
            var e = this.getUIAnimateById(this.btnStrongerEft);
            e &&
              (e.clearTimes(),
              e.play(),
              (this.nextPlayTime = S["default"].timer.serverTime + 1e4));
          }
        }),
        (t.prototype.playRedBtnHintTw = function () {
          this.nextHintTwPlayTime = S["default"].timer.serverTime + 5e3;
          for (var e in this._view)
            if (this._view.hasOwnProperty(e)) {
              var t = this._view[e];
              t instanceof m.RedButton &&
                t.hint instanceof q.HintComp &&
                t.hint.visible &&
                t.hint.addTween();
            }
        }),
        (t.prototype.onClearData = function () {
          var e = o["default"].getProxy(
            s.ModName.Activity,
            s.ProxyType.Activity,
          );
          e.bulkInfo && (e.bulkInfo = void 0);
        }),
        (t.prototype.onTapGameClubBtn = function () {
          gs.showGameClubBtn && this.showView(s.MainViewType.GameClubRew);
        }),
        (t.prototype.onTapRevisitGuideBtn = function () {
          this.showView(s.MainViewType.GameRevisitGuide);
        }),
        (t.prototype.autoCliearEquip = function () {
          ((this.autoClearEquipTime = S["default"].timer.serverTime + 18e4),
            g["default"].automaticRepairEquip());
        }),
        (t.prototype.onHide = function () {
          ((p["default"].isMainShowing = !1),
            this.btnStrongerEft &&
              (this.removeUIAnimate(this.btnStrongerEft),
              (this.btnStrongerEft = 0)),
            (this.nextPlayTime = 0),
            S["default"].removeUpdateItem(this));
          var t = this._view.grp_bottom,
            i = this._view.grp_top,
            o = this._view.grp_left,
            a = this._view.grp_right;
          (n["default"].remove(t),
            n["default"].remove(i),
            n["default"].remove(o),
            n["default"].remove(a),
            this.removeLevelOpenButton(),
            this.onClearData(),
            e.prototype.onHide.call(this));
        }),
        (t.prototype.checkOnlineRewardTimeCount = function () {
          return __awaiter(this, void 0, void 0, function () {
            var e;
            return __generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return D["default"].totalTime > 0
                    ? (D["default"].addTime++,
                      D["default"].addTime >= D["default"].totalTime
                        ? ((D["default"].onLineReWardInit.time =
                            D["default"].addTime),
                          D["default"].onLineReWardInit.upDate(),
                          g["default"].isAccelerate
                            ? [4, D["default"].onLineReWardInit.doGetReward(!1)]
                            : [3, 2])
                        : [3, 3])
                    : [3, 3];
                case 1:
                  (t.sent(), (t.label = 2));
                case 2:
                  ((e = G["default"].getInstance.getType(
                    G["default"].ACTIVITY_REWARD,
                  )),
                    this.setIconIncludeLayout(
                      this._view.btnReward,
                      e.isShow,
                      e.red,
                    ),
                    (D["default"].totalTime = 0),
                    (t.label = 3));
                case 3:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.update = function (e) {
          (this.checkOnlineRewardTimeCount(),
            this.nextPlayTime &&
              e.serverTime > this.nextPlayTime &&
              this.playBtnStrongerEft(),
            (!this.nextHintTwPlayTime ||
              e.serverTime > this.nextHintTwPlayTime) &&
              this.playRedBtnHintTw(),
            this.bulkTime > 0 &&
              e.serverTime > this.bulkTime &&
              this.onBulkInfo(),
            this.autoClearEquipTime &&
              e.serverTime > this.autoClearEquipTime &&
              this.autoCliearEquip());
          var t = g["default"].myPlayer;
          for (var i in t.putIllusion) {
            var o = t.putIllusion[i];
            if (-1 != o) {
              var n = F.TimeUtil.isTimeOut(t.putIllusion[i]);
              n &&
                ((t.putIllusion[i] = 0),
                t.updateAndRefreshIcon(),
                this.sendNt(r.BagEvent.BAG_CHANGE),
                delete t.putIllusion[i]);
            }
          }
        }),
        (t.prototype.onSwitchMenu = function () {
          var e = this._view.grp_bottom,
            t = this._view.grp_top,
            i = this._view.grp_left,
            o = this._view.grp_right,
            r = this._proxy.model.menuOpen;
          r ||
            ((e.visible = !0),
            (t.visible = !0),
            (i.visible = !0),
            (o.visible = !0));
          var s = r ? -e.height : nt,
            l = 200;
          n["default"]
            .get(e)
            .to({ bottom: s }, l)
            .exec(a["default"].alloc(this, this.switchTwEnd));
          var u = r ? -t.height : at;
          n["default"].get(t).to({ top: u }, 200);
          var _ = r ? -i.width : 10;
          n["default"].get(i).to({ left: _ }, 200);
          var d = r ? -o.width : 10;
          n["default"].get(o).to({ right: d }, 200);
        }),
        (t.prototype.switchTwEnd = function () {
          ((this._proxy.model.menuOpen = !this._proxy.model.menuOpen),
            this.updateMenu());
        }),
        (t.prototype.tips = function () {
          _.Tips.show("敬请期待");
        }),
        (t.prototype.tabReward = function () {
          p["default"].createOnLineRewardUI(0);
        }),
        (t.prototype.tabCeremony = function () {}),
        (t.prototype.tabOpen = function () {
          p["default"].createActivityOpenUI(0);
        }),
        (t.prototype.onTapBeStronger = function () {
          p["default"].showWin(
            s.ModName.BeStronger,
            s.BeStrongerViewType.BeStrongerMain,
            { subIdx: 0 },
          );
        }),
        (t.prototype.tapManor = function () {
          p["default"].showWin(
            s.ModName.Country,
            s.CountryViewType.CountryMain,
          );
        }),
        (t.prototype.topFixed = function () {
          var e = g["default"].myPlayer,
            t = !1;
          e &&
            ((t = e.bag.isDestroyEquip(!1)),
            t &&
              O.UIAction.doMenuButton(p["default"].EVENT_ALL_INFO_DUR_BROCKEN));
        }),
        (t.prototype.topLottery = function () {
          N["default"].doEnter();
        }),
        (t.prototype.topSignin = function () {
          p["default"].createSigninUI();
        }),
        (t.prototype.tapWorldBuff = function () {
          var e = g["default"].myPlayer;
          if (e) {
            var t = g["default"].doViewMyPlayerBuffInfo();
            return (
              e.formationSkill &&
                (t += "\n" + e.formationSkill.getFormationInfo()),
              null != g["default"].myPlayer.playerTurnMonster
                ? void L["default"].doSeeTurnMonsterInfo(t)
                : void (t && p["default"].alertMessage(t, "状态"))
            );
          }
        }),
        (t.prototype.tapHint = function () {
          return Y["default"].list.length <= 0
            ? void _.Tips.show("暂无无公告")
            : void p["default"].showModal(
                s.ModName.Main,
                s.MainViewType.MainHint,
                b.MainPlayerAi.ins.open,
              );
        }),
        (t.prototype.tapFormtion = function () {
          var e = g["default"].myPlayer;
          if (e) {
            var t = e.formationSkill;
            if (t) {
              var i = g["default"].myPlayer.isLeader(),
                o = t.getFormationInfo();
              if (i) {
                var n = new A["default"](),
                  r = {
                    type: p["default"].EVENT_ALL_BACK,
                    name: B.GameText2.STR_FORMATION_OPTION,
                  };
                (n.addElement(r),
                  p["default"].createAreaMessageWin(
                    o,
                    n,
                    a["default"].alloc(this, function () {
                      p["default"].openRole(e, 2);
                    }),
                  ));
              } else p["default"].alertMessage(o);
            }
          }
        }),
        (t.prototype.tapChat = function () {
          p["default"].showWin(s.ModName.Chat, s.ChatViewType.ChatAllView);
        }),
        (t.prototype.tapRole = function () {
          p["default"].openRole();
        }),
        (t.prototype.tapBag = function () {
          p["default"].openBag();
        }),
        (t.prototype.tapSystem = function () {
          p["default"].showWin(
            s.ModName.System,
            s.SystemViewType.SystemMainVeiw,
          );
        }),
        (t.prototype.tapPetForBattle = function () {
          var e = o["default"].getProxy(s.ModName.Pet, s.ProxyType.Pet);
          e.openBattlePet();
        }),
        (t.prototype.tapAddAttr = function () {
          p["default"].openRole(g["default"].myPlayer, 1);
        }),
        (t.prototype.tapPet = function () {
          p["default"].openPet();
        }),
        (t.prototype.tapMission = function () {
          var e = g["default"].myPlayer;
          if (e)
            return e.isAutoMoving
              ? void b.MainPlayerAi.ins.autoMoveAsk()
              : void p["default"].createMissionMainUI(0);
        }),
        (t.prototype.tapUseItem = function () {
          p["default"].showModal(s.ModName.Bag, s.BagViewType.UseItem);
        }),
        (t.prototype.tapShop = function () {
          g["default"].doBrowseShop(l["default"].SHOP_TYPE_50);
        }),
        (t.prototype.tapMap = function () {
          it["default"].Instance.doEnterWorldMap();
        }),
        (t.prototype.tapMail = function () {
          p["default"].showWin(s.ModName.Mail, s.MailViewType.Mail);
        }),
        (t.prototype.tapDeal = function () {
          var e = g["default"].myPlayer;
          null == e || e.isShopMode() || p["default"].createGoodsUI(!1);
        }),
        (t.prototype.updateMailRp = function (e) {
          var t = e.body;
          this._view.btnMail.setRed = t;
        }),
        (t.prototype.onBtnCharge = function () {
          p["default"].createChargeUI(0);
        }),
        (t.prototype.onBtnChargeActivity = function () {
          p["default"].showWin(s.ModName.Charge, s.ChargeType.ChargeActivity);
        }),
        (t.prototype.onBtnAchievement = function () {
          p["default"].createAchieveManageUI();
        }),
        (t.prototype.onBtnRank = function () {
          p["default"].createRankListUI();
        }),
        (t.prototype.tapRelation = function () {
          p["default"].showWin(
            s.ModName.Relation,
            s.RelationViewType.RelationMain,
          );
        }),
        (t.prototype.tapShopGoods = function () {
          p["default"].openPlayerShop();
        }),
        (t.prototype.tapStarShop = function (e) {
          var t = this._view.groupSelfShop;
          if (((t.visible = !t.visible), t.visible)) {
            var i = this._view.btnStarShop,
              o = this._view.grp_right.localToGlobal(i.x, i.y),
              n = this._view.globalToLocal(o.x, o.y);
            ((t.x = n.x - t.width),
              (t.y = n.y - 15),
              (t.visible = !0),
              e.stopPropagation());
          } else t.visible = !1;
        }),
        (t.prototype.tapCrossPla = function () {
          p["default"].createCrossPla();
        }),
        (t.prototype.tapNewTask = function () {
          p["default"].createNewMission();
        }),
        (t.prototype.tapDaily = function () {
          p["default"].createDailyMission();
        }),
        (t.prototype.tapPetBattle = function () {
          p["default"].createPetBattle();
        }),
        (t.prototype.tapShopRecord = function () {
          g["default"].doStallRecord();
        }),
        (t.prototype.tapStopShop = function () {
          var e = g["default"].myPlayer;
          e &&
            (e.isShopMode()
              ? g["default"].doStallEnd()
              : _.Tips.show("请先开始摆摊"));
        }),
        (t.prototype.tapCostReward = function () {
          M["default"].isCostRewardOPen && p["default"].createCostRewardUI();
        }),
        (t.prototype.onNear = function () {
          p["default"].createTeamUI();
        }),
        (t.prototype.onTeam = function () {
          p["default"].showWin(s.ModName.Team, s.TeamViewType.TeamMain, {
            subIdx: 1,
          });
        }),
        (t.prototype.updateWorldBuff = function () {
          var e = g["default"].myPlayer;
          if (e) {
            var t = e.showBuffIcon();
            ((this._view.btnWorldBuff.visible = t),
              (this._view.btnWorldBuff.includeInLayout = t));
          }
        }),
        (t.prototype.updateSelfShop = function () {
          var e = g["default"].myPlayer;
          ((this._view.btnStarShop.visible = e.isShopMode()),
            (this._view.btnStarShop.includeInLayout = e.isShopMode()),
            (this._view.btnShopRecord.visible = e.isShopMode()),
            (this._view.btnShopRecord.includeInLayout = e.isShopMode()),
            (this._view.btnShopGoods.visible = e.isShopMode()),
            (this._view.btnShopGoods.includeInLayout = e.isShopMode()),
            (this._view.btnStopShop.visible = e.isShopMode()),
            (this._view.btnStopShop.includeInLayout = e.isShopMode()));
        }),
        (t.prototype.onSystemSettingUpdate = function () {}),
        (t.prototype.onBloodBottle = function () {
          var e = o["default"].getProxy(s.ModName.Role, s.ProxyType.Role),
            t = e.energyInfo;
          return t
            ? void (this._view.btnBlood.icon =
                t.leftEnergy < t.belowTips
                  ? "zhu_icon_nengliangw"
                  : "zhu_icon_nengliang")
            : void (this._view.btnBlood.icon = "zhu_icon_nengliang");
        }),
        (t.prototype.onBtnblood = function () {
          p["default"].showModal(s.ModName.Role, s.RoleViewType.RoleBlood);
        }),
        (t.prototype.onBtnOptional = function () {
          p["default"].openOptonalOne();
        }),
        (t.prototype.onBtnChargeGift = function () {
          p["default"].showModal(
            s.ModName.Activity,
            s.ActivityViewType.ActivityGiftBag,
          );
        }),
        (t.prototype.onSevenDay = function () {
          var e = o["default"].getProxy(
              s.ModName.Activity,
              s.ProxyType.Activity,
            ),
            t = e.sdInfo;
          if (t) {
            for (var i = !1, n = 0, a = e.sdInfo.infos; n < a.length; n++) {
              var r = a[n];
              if (r.state == k.ActivityRwState.GET) {
                i = !0;
                break;
              }
            }
            (this.setIconIncludeLayout(this._view.btnSevenDay, !0, i),
              i && this.onClickSevenDay());
          } else this.onSevenDayRemove();
        }),
        (t.prototype.onSevenDayGetRw = function () {
          var e = o["default"].getProxy(
              s.ModName.Activity,
              s.ProxyType.Activity,
            ),
            t = e.sdInfo,
            i = !0;
          if (t) {
            for (var n = !1, a = 0, r = e.sdInfo.infos; a < r.length; a++) {
              var l = r[a];
              (l.state == k.ActivityRwState.GET && (n = !0),
                l.state != k.ActivityRwState.HASGET && (i = !1));
            }
            this.setIconIncludeLayout(this._view.btnSevenDay, !0, n);
          }
          i && this.onSevenDayRemove();
        }),
        (t.prototype.onSevenDayRemove = function () {
          (p["default"].hideView(
            s.ModName.Activity,
            s.ActivityViewType.ActivitySevenDay,
          ),
            this.setIconIncludeLayout(this._view.btnSevenDay, !1, !1));
        }),
        (t.prototype.onClickSevenDay = function () {
          p["default"].showModal(
            s.ModName.Activity,
            s.ActivityViewType.ActivitySevenDay,
          );
        }),
        (t.prototype.onConquerBoss = function () {
          var e = o["default"].getProxy(
              s.ModName.Activity,
              s.ProxyType.Activity,
            ),
            t = e.bsInfo;
          if (t) {
            for (var i = !1, n = 0, a = t.infos; n < a.length; n++) {
              var r = a[n];
              if (r.state == et.ConquerBossSt.GET) {
                i = !0;
                break;
              }
            }
            this.setIconIncludeLayout(this._view.btnBoss, !0, i);
          } else this.onConquerBossRemove();
        }),
        (t.prototype.onConquerBossGetRw = function () {
          var e = o["default"].getProxy(
              s.ModName.Activity,
              s.ProxyType.Activity,
            ),
            t = e.bsInfo,
            i = !0;
          if (t) {
            for (var n = !1, a = 0, r = t.infos; a < r.length; a++) {
              var l = r[a];
              (l.state == et.ConquerBossSt.GET && (n = !0),
                l.state != et.ConquerBossSt.HASGET && (i = !1));
            }
            this.setIconIncludeLayout(this._view.btnBoss, !0, n);
          }
          i && this.onConquerBossRemove();
        }),
        (t.prototype.onConquerBossRemove = function () {
          (p["default"].hideView(
            s.ModName.Activity,
            s.ActivityViewType.ActivityConquerBoss,
          ),
            this.setIconIncludeLayout(this._view.btnBoss, !1, !1));
        }),
        (t.prototype.onClickBoss = function () {
          p["default"].showWin(
            s.ModName.Activity,
            s.ActivityViewType.ActivityConquerBoss,
          );
        }),
        (t.prototype.onBulkInfo = function () {
          for (
            var e = o["default"].getProxy(
                s.ModName.Activity,
                s.ProxyType.Activity,
              ),
              t = !1,
              i = S["default"].timer.serverTime,
              n = 0;
            e.bulkInfo && n < e.bulkInfo.infos.length;
            n++
          ) {
            var a = e.bulkInfo.infos[n],
              r = a.endTime.toNumber();
            r > i && ((t = !0), (this.bulkTime = r));
          }
          t
            ? (C.GUtil.setLayout(this._view.btnBulk, !0),
              (this._view.btnBulk.hint.visible = e.getBulkRed()))
            : ((this.bulkTime = 0), C.GUtil.setLayout(this._view.btnBulk, !1));
        }),
        (t.prototype.onBtnBulk = function () {
          p["default"].showWin(
            s.ModName.Activity,
            s.ActivityViewType.ActivitySuperGroup,
          );
        }),
        (t.prototype.updateOpenLevel = function () {
          (this.onShowCampWar(), this.onShowSailing(), this.onShowBuddy());
        }),
        (t.prototype.onTapCampWar = function () {
          var e = o["default"].getProxy(s.ModName.CampWar, s.ProxyType.CampWar);
          (e.sendFactionBattleToggle(0),
            e.status != l.CampWarState.War &&
              p["default"].showWin(
                s.ModName.CampWar,
                s.CampWarViewType.CampWarMain,
              ));
        }),
        (t.prototype.enterCampWar = function () {
          p["default"].showWin(
            s.ModName.CampWar,
            s.CampWarViewType.CampWarMain,
          );
        }),
        (t.prototype.onShowCampWar = function () {
          var e = j["default"].ins.getIsOpen(j.LevelOpenId.CAMPWAR, !1);
          C.GUtil.setLayout(this._view.btnCampWar, e);
        }),
        (t.prototype.onShowSailing = function () {
          var e = j["default"].ins.getIsOpen(j.LevelOpenId.SAILING, !1),
            t = G["default"].getInstance.getTypeData(k.ActType.MARITIME_TRADE),
            i = t && t.isShow;
          C.GUtil.setLayout(this._view.btnSailing, e && i);
        }),
        (t.prototype.enterSailing = function () {
          p["default"].showWin(
            s.ModName.Sailing,
            s.SailingViewType.SailingMain,
          );
        }),
        (t.prototype.onShowBuddy = function () {
          var e = j["default"].ins.getIsOpen(j.LevelOpenId.BUDDY, !1);
          C.GUtil.setLayout(this._view.btnBuddy, e);
        }),
        (t.prototype.enterBuddy = function () {
          p["default"].showWin(s.ModName.Buddy, s.BuddyViewType.BuddyDraw);
        }),
        t
      );
    })(f["default"]);
  t.MainMdr = rt;
});
