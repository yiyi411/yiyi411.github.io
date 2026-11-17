(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(22),
    a = i(0),
    r = i(5),
    s = i(91),
    l = i(74),
    u = i(4),
    _ = i(64),
    d = i(19),
    p = i(57),
    c = i(20),
    h = i(10),
    f = i(8),
    T = i(30),
    E = i(1),
    y = i(32),
    g = i(43),
    v = i(33),
    S = i(42),
    I = i(228),
    m = i(178),
    A = i(31),
    C = i(12),
    P = i(26),
    R = i(102),
    O = i(62),
    N = i(24),
    M = i(94),
    L = i(2),
    w = i(85),
    b = i(21),
    x = i(23),
    D = i(158),
    B = i(44),
    G = i(116),
    U = i(54),
    k = i(41),
    V = i(81),
    H = i(15),
    F = i(256),
    Y = i(16),
    W = i(35),
    K = (function () {
      function e() {}
      return (
        (e.processGetSuitInfoMsg = function (e) {
          for (var t = e.getByte(), i = 0; t > i; i++) {
            for (
              var o = f.Tool.byte2short(e.getByte()),
                n = e.getByte(),
                a = new Array(5 * n),
                s = 0,
                l = 0;
              n > l;
              l++
            )
              ((a[s++] = e.getByte()),
                (a[s++] = e.getShort()),
                (a[s++] = e.getShort()),
                (a[s++] = e.getByte()),
                (a[s++] = e.getByte()));
            r["default"].addSuit(o, a);
          }
        }),
        (e.createDelPlayerMsg = function (e) {
          var t = new n.Message(d["default"].CG_LOGIN_DELETEACTOR);
          return (t.putInt(e), t);
        }),
        (e.createCancelDelPlayerMsg = function (e) {
          var t = new n.Message(d["default"].CG_LOGIN_RECOVERACTOR);
          return (t.putInt(e), t);
        }),
        (e.createBrowseCityInfoMsg = function (e) {
          var t = new n.Message(d["default"].CG_CITY_INFO);
          return (t.putInt(e), t);
        }),
        (e.createMoveMessage = function (e, t) {
          var i = new n.Message(d["default"].CG_SCENE_PLAYER_MOVING);
          return (i.putByte(e), i.putByte(t), i);
        }),
        (e.createOtherMoveMessage = function () {
          var e = new n.Message(d["default"].CG_SCENE_GET_OTHER_PLAYER_STATE);
          return e;
        }),
        (e.createEnterLocalBattle = function (e) {
          var t = new n.Message(d["default"].CG_FIGHT_ENTER_LOCALBATTEL);
          return (t.putShort(e), t);
        }),
        (e.createEnterRemoteBattle = function (e) {
          var t = new n.Message(d["default"].CG_FIGHT_ENTER_REMOTEBATTLE);
          return (t.putShort(e), t);
        }),
        (e.createFightSeeInterMsg = function (e) {
          var t = new n.Message(d["default"].CG_FIGHT_SEE_IN);
          return (t.putInt(e), t);
        }),
        (e.createFightSeeQuitMsg = function () {
          var e = new n.Message(d["default"].CG_FIGHT_SEE_OUT);
          return e;
        }),
        (e.createBattlePlan = function (e, t, i, o) {
          var a = new n.Message(d["default"].CG_FIGHT_BATTLE_DOPLAN);
          if (
            (a.putByte(e),
            a.putBytes(t),
            null == i ? a.putBoolean(!1) : (a.putBoolean(!0), a.putBytes(i)),
            o.length > 0)
          ) {
            var r = o.length;
            a.putByte(r);
            for (var s = 0; r > s; s++) a.putBytes(o[s]);
          }
          return a;
        }),
        (e.createPetBattlePlan = function (e, t) {
          var i = new n.Message(d["default"].CG_PET_PK_BATTLE_DO_PLAN);
          i.putByte(e);
          for (var o = 0, a = 0; a < t.length; ++a) t[a] && o++;
          i.putByte(o);
          for (var a = 0; a < t.length; ++a)
            t[a] && (i.putByte(a), i.putBytes(t[a]));
          return i;
        }),
        (e.createBattleUpdate = function (e) {
          var t = new n.Message(d["default"].CG_FIGHT_BATTLE_UPDATE);
          return (t.putByte(e), t);
        }),
        (e.creteUpDataRole = function () {
          var e = new n.Message(d["default"].CG_HP_MP_PUSH);
          this.sendRequest(e);
        }),
        (e.createIdentifyAsk = function (e, t, i, o, a) {
          var r = new n.Message(d["default"].CG_BAG_CHECKUP_ASK);
          return (
            r.putByte(e),
            r.putShort(t),
            r.putInt(i),
            r.putBoolean(o),
            r.putBoolean(a),
            r
          );
        }),
        (e.createItemShopSell = function (e, t, i, o) {
          var a = new n.Message(d["default"].CG_ITEMSHOP_SELL);
          return (a.putShort(e), a.putInt(t), a.putShort(i), a.putByte(o), a);
        }),
        (e.processItemShopSell = function (e) {
          var t = e.getByte();
          if (0 > t)
            return (
              E["default"].alertMessage(
                e.getString(),
                h.GameText.getText(h.GameText.TI_WARM_SHOW),
              ),
              !1
            );
          var i = e.getInt(),
            o = r["default"].myPlayer;
          return null == o
            ? (console.log(
                "MsgHandler.processItemShopSell() myPlayer is null?????????",
              ),
              !1)
            : (o.setMoneyByType(C.ModelConst.MONEY3, i), !0);
        }),
        (e.createGetMissionDataMsg = function (e, t) {
          (void 0 === t && (t = !0),
            t && (V["default"].ATUO_MISSION_PROXY = !0));
          var i = new n.Message(d["default"].CG_TASK_GETMISSIONDATA);
          i.putShort(e);
          var o = new Array(),
            a = 0,
            s = r["default"].monsterGroupList;
          for (var l in s) ((o[a] = parseInt(l)), a++);
          i.putByte(o.length);
          for (var u = 0; u < o.length; u++) i.putShort(o[u]);
          var _ = new Array();
          a = 0;
          var p = r["default"].monsterList;
          for (var l in p) ((_[a] = parseInt(l)), a++);
          i.putByte(_.length);
          for (var u = 0; u < _.length; u++) i.putShort(_[u]);
          return i;
        }),
        (e.createGetNPCData = function (e) {
          var t = new n.Message(d["default"].CG_SCENE_GETNPC);
          if (null == e) t.putByte(0);
          else {
            t.putByte(e.length);
            for (var i = 0; i < e.length; i++) t.putByte(e[i]);
          }
          return t;
        }),
        (e.createTaskDeliverMsg = function (e, t, i) {
          var o = new n.Message(d["default"].CG_TASK_DELIVER);
          return (o.putShort(e), o.putShort(t), o.putInt(i), o);
        }),
        (e.createTaskAbandonMsg = function (e) {
          var t = new n.Message(d["default"].CG_TASK_ABANDON);
          return (t.putShort(e), t);
        }),
        (e.createAutoMoveMsg = function (e, t, i) {
          var o = new n.Message(d["default"].CG_SCENE_FINDPATH_MISSION);
          return (
            o.putByte(1),
            o.putShort(e),
            o.putByte(t),
            o.putBoolean(i),
            o
          );
        }),
        (e.createAutoMoveMsgByMisssion = function (e) {
          var t = new n.Message(d["default"].CG_SCENE_FINDPATH_MISSION);
          return (t.putByte(2), t.putShort(e), t);
        }),
        (e.createWorldMapMsg = function () {
          var e = new n.Message(d["default"].CG_SCENE_WORLDMAP);
          return e;
        }),
        (e.createWorldMapListMsg = function (e) {
          var t = new n.Message(d["default"].CG_SCENE_WORLDMAP_DATA);
          return (t.putInt(e), t);
        }),
        (e.createWorldMapEnterMsg = function (e) {
          var t = new n.Message(d["default"].CG_SCENE_WORLDMAP_ENTER);
          return (t.putInt(e), t.putInt(u["default"].JUMP_MAP_DATA_FLAG), t);
        }),
        (e.createWroldMapVIPEnterMsg = function (e) {
          var t = new n.Message(d["default"].CG_SCENE_GO_MAP_VIP);
          return (t.putInt(e), t.putInt(u["default"].JUMP_MAP_DATA_FLAG), t);
        }),
        (e.createAttrAddMessage = function (e) {
          if (null == e) return null;
          var t = new n.Message(d["default"].CG_ACTOR_ADDATTRIBUTE),
            i = e.length;
          t.putByte(i);
          for (var o = 0; i > o; o++) {
            var a = e[o];
            null != a && (t.putShort(a[0]), t.putInt(a[1]));
          }
          return t;
        }),
        (e.createBrowseSkillShop = function (e) {
          var t = new n.Message(d["default"].CG_SKILL_SHOP_LIST);
          return (t.putShort(e), t);
        }),
        (e.createDropSkill = function (e, t) {
          var i = new n.Message(d["default"].CG_SKILL_DELETE);
          return (i.putInt(e), i.putByte(t), i);
        }),
        (e.createDropSkillOneLevel = function (e, t) {
          var i = new n.Message(d["default"].CG_SKILL_DELETE_BY_LEVEL);
          return (i.putInt(e), i.putByte(t), i);
        }),
        (e.createLearnSkill = function (e, t) {
          if (null == t) return null;
          var i = u["default"].isCountrySkillShop(e),
            o = new n.Message(d["default"].CG_SKILL_SHOP_LEARN);
          return (
            o.putShort(e),
            o.putInt(t.id),
            o.putByte(t.level),
            o.putBoolean(i),
            1 == i &&
              (o.putInt(t.money1), o.putInt(t.money2), o.putInt(t.money3)),
            o
          );
        }),
        (e.createChatMsg = function (e, t, i, r) {
          if ((void 0 === r && (r = 0), /(\/c|\/i|\/p)/gim.test(t)))
            return void H.Tips.show("发送消息中含非法字符");
          var s = new n.Message(d["default"].CG_CHAT_SUBMIT);
          s.putByte(e);
          var l = o["default"].getProxy(a.ModName.CampWar, a.ProxyType.CampWar);
          if (l.isOpenCampWar) {
            var _ = l.getChatText();
            t = _ + t;
          }
          return (
            s.putString(t),
            s.putByte(r),
            e == u["default"].CHAT_TYPE_PRIVATE && s.putInt(i),
            s
          );
        }),
        (e.createSendLuckMoney = function (e, t, i, o, a) {
          var r = new n.Message(d["default"].CG_BIG_RED_PACKET);
          return (
            r.putByte(1),
            r.putShort(e),
            r.putByte(t),
            r.putByte(i),
            r.putByte(o),
            r.putString(a),
            r
          );
        }),
        (e.createMailListMsg = function (e, t, i) {
          var o = new n.Message(d["default"].CG_MAIL_LIST);
          return (o.putShort(e), o.putByte(t), o.putShort(i), o);
        }),
        (e.createMailDetailMsg = function (e) {
          var t = new n.Message(d["default"].CG_MAIL_DETAIL);
          return (t.putLong(e), t);
        }),
        (e.createMailStaticsMsg = function () {
          var e = new n.Message(d["default"].CG_MAIL_STATISTICS);
          return e;
        }),
        (e.screateMailStaticsMsg = function () {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, r, s, l, u;
            return __generator(this, function (_) {
              switch (_.label) {
                case 0:
                  return (
                    (t = o["default"].getProxy(
                      a.ModName.Mail,
                      a.ProxyType.Mail,
                    )),
                    (i = e.createMailStaticsMsg()),
                    [4, W["default"].sendProtoAsync(i)]
                  );
                case 1:
                  for (i = _.sent(), t.mailNum = 0, n = 0; 8 > n; n++)
                    ((r = i.getShort()),
                      (s = i.getShort()),
                      (l = i.getShort()),
                      (u = { read: s, unRead: l }),
                      (t.mailNums[r] = u),
                      (t.mailNum += s),
                      (t.mailNum += l));
                  return [2];
              }
            });
          });
        }),
        (e.createMailSendByID = function (e, t) {
          return this.createMailSendMsg(
            e,
            d["default"].MAIL_SEND_ID,
            t,
            null,
            null,
          );
        }),
        (e.createMailSendByName = function (e, t) {
          return this.createMailSendMsg(
            e,
            d["default"].MAIL_SEND_NAME,
            -1,
            t,
            null,
          );
        }),
        (e.createMailSendByUID = function (e, t) {
          return this.createMailSendMsg(
            e,
            d["default"].MAIL_SEND_UID,
            -1,
            null,
            t,
          );
        }),
        (e.createMailSendMsg = function (e, t, i, o, a) {
          if (null == e) return null;
          var s = new n.Message(d["default"].CG_MAIL_SEND);
          (s.putString(e.getContent()),
            s.putInt(e.money1),
            s.putInt(e.money2),
            s.putInt(e.money3),
            s.putInt(e.reqMoney1),
            s.putInt(e.reqMoney2),
            s.putInt(e.reqMoney3));
          var l = 0,
            _ = e.attachItem;
          if (null != _ && _.length > 0)
            for (var p = 0; p < _.length; p++) null != _[p] && l++;
          if ((s.putByte(l), l > 0))
            for (var p = 0; p < _.length; p++) {
              var c = _[p];
              null != c &&
                (s.putShort(c.slotPos), s.putInt(c.id), s.putByte(c.quantity));
            }
          switch (
            (t == d["default"].MAIL_SEND_UID &&
              ((i = u["default"].getIdByAreaID(
                a,
                r["default"].myPlayer.getId(),
              )),
              (t = d["default"].MAIL_SEND_ID)),
            s.putByte(t),
            t)
          ) {
            case d["default"].MAIL_SEND_ID:
              s.putInt(i);
              break;
            case d["default"].MAIL_SEND_NAME:
              s.putString(o);
          }
          return s;
        }),
        (e.createMailSendGMMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_MAIL_SEND_SERVICE);
          return (i.putByte(e), i.putString(t), i);
        }),
        (e.createMailBackMsg = function (e) {
          var t = new n.Message(d["default"].CG_MAIL_TURNBACK);
          return (t.putLong(e), t);
        }),
        (e.createMailDeleteMsg = function (e) {
          var t = new n.Message(d["default"].CG_MAIL_DELETE);
          return (t.putString(e), t);
        }),
        (e.createMailNewNotice = function () {
          var e = new n.Message(d["default"].CG_MAIL_OPEN);
          return e;
        }),
        (e.createMailSeeItem = function (e, t) {
          var i = new n.Message(d["default"].CG_MAIL_GETITEMDETAIL);
          return (i.putLong(e), i.putByte(t), i);
        }),
        (e.createMailAttachMsg = function (e, t) {
          if (null == e) return null;
          var i = new n.Message(d["default"].CG_MAIL_EXTRACT_ATTACHMENT);
          return (
            i.putLong(e.id),
            i.putBoolean(e.isTypeBit(M["default"].MAIL_TYPE_BACK)),
            i.putBoolean(!0),
            i.putInt(t),
            i
          );
        }),
        (e.createPetSeeMsg = function (e) {
          var t = new n.Message(d["default"].CG_PET_SEE);
          return (t.putShort(e), t);
        }),
        (e.createPetInfoMsg = function (e, t) {
          if (null == t) return null;
          var i = new n.Message(d["default"].CG_PET_INFO);
          i.putByte(e);
          var o = 0,
            a = 0,
            r = null;
          switch (e) {
            case this.PET_INFO_PET_ID:
              var s = t[0],
                l = t[1];
              (i.putInt(s), i.putLong(l));
              break;
            case this.PET_INFO_PLAYER_SHOP:
            case this.PET_INFO_CHAT:
              ((o = t[0]), i.putInt(o), (a = t[1]), i.putShort(a));
              break;
            case this.PET_INFO_GOODS:
              ((r = t[0]), i.putLong(r));
              break;
            case this.PET_INFO_MAIL:
              ((r = t[0]), i.putLong(r), (a = t[1]), i.putShort(a));
              break;
            case this.PET_INFO_SEE_PLAYER:
              ((o = t[0]), i.putInt(o));
          }
          return i;
        }),
        (e.createRelationList = function (e, t, i) {
          var o = new n.Message(d["default"].CG_RELATION_LIST);
          return (o.putByte(e), o.putByte(t), o.putShort(i), o);
        }),
        (e.createRelationAddById = function (e, t) {
          return this.createRelationAdd(
            e,
            d["default"].MAIL_SEND_ID,
            t,
            null,
            null,
          );
        }),
        (e.createRelationAddByName = function (e, t) {
          return this.createRelationAdd(
            e,
            d["default"].MAIL_SEND_NAME,
            -1,
            t,
            null,
          );
        }),
        (e.createRelationAddByUid = function (e, t) {
          return this.createRelationAdd(
            e,
            d["default"].MAIL_SEND_UID,
            -1,
            null,
            t,
          );
        }),
        (e.createRelationAdd = function (e, t, i, o, a) {
          var r = new n.Message(d["default"].CG_RELATION_ADD);
          switch ((r.putByte(e), r.putByte(t), t)) {
            case d["default"].MAIL_SEND_ID:
              r.putInt(i);
              break;
            case d["default"].MAIL_SEND_NAME:
              r.putString(o);
              break;
            case d["default"].MAIL_SEND_UID:
              r.putString(a);
          }
          return r;
        }),
        (e.createRelationAddMaster = function (e) {
          var t = new n.Message(d["default"].CG_RELATION_MASTER_ADD);
          return (t.putInt(e), t);
        }),
        (e.createRelationDelMaster = function (e) {
          var t = new n.Message(d["default"].CG_RELATION_MASTER_DELETE);
          return (t.putInt(e), t);
        }),
        (e.createRelationDel = function (e, t) {
          var i = new n.Message(d["default"].CG_RELATION_DELETE);
          return (i.putByte(e), i.putInt(t), i);
        }),
        (e.createPlayerSee = function (e) {
          var t = new n.Message(d["default"].CG_ACTOR_SEE);
          return (t.putInt(e), t);
        }),
        (e.createPlayerCross = function (e) {
          var t = new n.Message(d["default"].CG_ACTOR_SEE_SA_CROSS);
          return (t.putInt(e), t);
        }),
        (e.checkRole = function (e, t) {
          var i = new k["default"]();
          ((i.id = e.id),
            (i.name = e.name),
            (i.serverId = e.serverId),
            (i.serverName = e.serverName),
            k["default"].doSeePlayerMsg(e, i, t));
        }),
        (e.checkRecordRole = function (e, t, i, o) {
          var a = new k["default"]();
          ((a.id = e.id),
            (a.name = e.name),
            (a.serverId = e.serverId),
            (a.serverName = e.serverName));
          var r = new n.Message(d["default"].CG_PIONEER_ROLE_INFO);
          (r.putInt(t),
            r.putInt(i),
            r.putInt(e.id),
            r.putLong(o),
            k["default"].doSeePlayerMsg(e, a, void 0, r));
        }),
        (e.createGetSuitInfoMsg = function (e) {
          var t = new n.Message(d["default"].CG_SUIT_GETINFO);
          if (null == e) t.putByte(0);
          else {
            t.putByte(e.length);
            for (var i = 0; i < e.length; i++) t.putByte(e[i]);
          }
          return t;
        }),
        (e.createItemShopListMsg = function (e) {
          var t = new n.Message(d["default"].CG_ITEMSHOP_LIST);
          return (t.putShort(e), t);
        }),
        (e.createItemShopBuy = function (e, t, i) {
          var o = u["default"].isCountryShop(e),
            a = new n.Message(d["default"].CG_ITEMSHOP_BUY);
          return (
            a.putShort(e),
            a.putInt(t.id),
            a.putByte(i),
            a.putBoolean(o),
            o && (a.putInt(t.money1), a.putInt(t.money2), a.putInt(t.money3)),
            a
          );
        }),
        (e.createPlayerEnchantShopStartMsg = function (e, t) {
          if (null == t || t.length < 0) return null;
          var i = r["default"].myPlayer;
          if (null == i) return null;
          for (var o = 0, a = 0; a < t.length; a++) {
            var s = t[a];
            o += s.powerValue1 * s.quantity;
          }
          if (o > i.getEnchantValue())
            return (
              E["default"].alertMessage(x.GameText2.STR_ENCHANT_START_FAIL),
              null
            );
          var l = new n.Message(d["default"].CG_ENCHANTSHOP_START);
          (l.putString(e), l.putInt(i.getEnchantValue() - o));
          var u = t.length;
          l.putByte(u);
          for (var _ = 0; u > _; _++) {
            var s = t[_];
            if (null == s) return null;
            (l.putInt(s.id),
              l.putByte(s.quantity),
              l.putShort(s.slotPos),
              l.putInt(s.money1),
              l.putInt(s.money3));
          }
          return l;
        }),
        (e.createPlayerShopStartMsg = function (e, t) {
          if (null == t || t.length < 0) return null;
          var i = new n.Message(d["default"].CG_PLAYERSHOP_START);
          i.putString(e);
          var o = t.length;
          i.putByte(o);
          for (var a = 0; o > a; a++) {
            var r = t[a];
            if (null == r) return null;
            (i.putInt(r.id),
              i.putByte(r.quantity),
              i.putShort(r.slotPos),
              i.putInt(r.money1),
              i.putInt(r.money3));
          }
          return i;
        }),
        (e.createPlayerShopEndMsg = function () {
          var e = new n.Message(d["default"].CG_PLAYERSHOP_STOP);
          return e;
        }),
        (e.createPlayerEnchantShopEndMsg = function () {
          var e = new n.Message(d["default"].CG_ENCHANTSHOP_STOP);
          return e;
        }),
        (e.createPlayerShopItemListMsg = function (e) {
          var t = new n.Message(d["default"].CG_PLAYERSHOP_LIST_GOODS);
          return (t.putInt(e), t);
        }),
        (e.createPlayerEnchantShopItemListMsg = function (e) {
          var t = new n.Message(d["default"].CG_ENCHANTSHOP_LIST);
          return (t.putInt(e), t);
        }),
        (e.createPlayerShopBuyMsg = function (e, t) {
          if (null == t) return null;
          var i = new n.Message(d["default"].CG_PLAYERSHOP_BUY);
          return (
            i.putInt(e),
            i.putShort(t.slotPos),
            i.putByte(t.quantity),
            i.putInt(t.id),
            i
          );
        }),
        (e.createPlayerShopRecordMsg = function () {
          var e = new n.Message(d["default"].CG_PLAYERSHOP_SELLRECORD);
          return e;
        }),
        (e.createPlayerEnchantShopRecordMsg = function () {
          var e = new n.Message(d["default"].CG_ENCHANTSHOP_SELLRECORD);
          return e;
        }),
        (e.createGoodsSellFind = function (e, t, i, o, a, r, s, l) {
          var u = new n.Message(d["default"].CG_EXCHANGE_FIND_SELLGOODS);
          return (
            u.putByte(e),
            u.putByte(t),
            u.putByte(i),
            u.putByte(o),
            u.putByte(a),
            u.putString(r),
            u.putShort(s),
            u.putInt(l),
            u
          );
        }),
        (e.createGoodsSellList = function () {
          var e = new n.Message(d["default"].CG_EXCHANGE_MY_SELLGOODS);
          return e;
        }),
        (e.createGoodsSellSubmit = function (e, t, i, o) {
          if (null == e) return null;
          var a = new n.Message(d["default"].CG_EXCHANGE_SUBMIT_SELLGOODS);
          return (
            a.putShort(e.slotPos),
            a.putByte(t),
            a.putInt(e.id),
            a.putInt(i),
            a.putInt(o),
            a
          );
        }),
        (e.createGoodsSellRetrieve = function (e) {
          var t = new n.Message(d["default"].CG_EXCHANGE_RETRIEVE_SELLGOODS);
          return (t.putLong(e), t);
        }),
        (e.createGoodsSellBuy = function (e) {
          var t = new n.Message(d["default"].CG_EXCHANGE_BUY_SELLGOODS);
          return (t.putLong(e), t);
        }),
        (e.createGoodsPurchaseList = function (e, t, i, o, a, r) {
          var s = new n.Message(d["default"].CG_EXCHANGE_FIND_PURCHASEGOODS);
          return (
            s.putByte(e),
            s.putInt(t),
            s.putByte(i),
            s.putByte(o),
            s.putShort(a),
            s.putInt(r),
            s
          );
        }),
        (e.createGoodsProvideMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_EXCHANGE_PROVIDE_PURCHASEGOODS);
          return (i.putLong(e), i.putShort(t), i);
        }),
        (e.createGoodsAutoProvide = function (e, t, i) {
          if (null == e || null == i) return null;
          var o = new n.Message(
            d["default"].CG_EXCHANGE_AUTOPROVIDE_PURCHASEGOODS,
          );
          return (
            o.putShort(e.slotPos),
            o.putByte(t),
            o.putInt(e.id),
            o.putInt(i[0]),
            o.putInt(i[1]),
            o
          );
        }),
        (e.createGoodsPurchaseMyList = function () {
          var e = new n.Message(d["default"].CG_EXCHANGE_MY_PURCHASEGOODS);
          return e;
        }),
        (e.createGoodsPurchaseTypeList = function (e) {
          var t = new n.Message(
            d["default"].CG_EXCHANGE_PURCHASEGOODS_TYPELIST,
          );
          return (t.putByte(e), t);
        }),
        (e.createGoodsPurchaseSubmit = function (e, t, i, o) {
          var a = new n.Message(d["default"].CG_EXCHANGE_SUBMIT_PURCHASEGOODS);
          return (a.putInt(e), a.putShort(t), a.putInt(i), a.putInt(o), a);
        }),
        (e.createGoodsPurchaseCancel = function (e) {
          var t = new n.Message(d["default"].CG_EXCHANGE_CANCEL_PURCHASEGOODS);
          return (t.putLong(e), t);
        }),
        (e.createGoodsPurchaseGet = function (e) {
          var t = new n.Message(d["default"].CG_EXCHANGE_EXTRACT_PURCHASEGOODS);
          return (t.putLong(e), t);
        }),
        (e.createPlayerEvent = function (e, t) {
          var i = new n.Message(d["default"].CG_SCENE_PLAYER_EVENT);
          return (i.putInt(e), i.putByte(t), i);
        }),
        (e.createGetCityMoneyMsg = function (e) {
          var t = new n.Message(d["default"].CG_CITY_EXTRACT_MONEY);
          return (t.putInt(e), t);
        }),
        (e.createModifyCityNameMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_CITY_CHANGE_NAME);
          return (i.putInt(e), i.putString(t), i);
        }),
        (e.createModifyCitySignMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_CITY_CHANGE_SIGN);
          return (i.putInt(e), i.putString(t), i);
        }),
        (e.createSetRebornMapMsg = function (e) {
          var t = new n.Message(d["default"].CG_SCENE_SETREBORNMAP);
          return (t.putShort(e), t);
        }),
        (e.createSpecialCodeMsg = function (e) {
          var t = new n.Message(d["default"].CG_SYSTEM_SPECIALCODE);
          return (t.putString(e), t);
        }),
        (e.createStorageListMsg = function () {
          var e = new n.Message(d["default"].CG_STORAGE_LIST);
          return e;
        }),
        (e.createVIPStorageListMsg = function () {
          var e = new n.Message(d["default"].CG_STORAGE_LIST_VIP);
          return e;
        }),
        (e.createPlayerMaxVIPMsg = function () {
          var e = new n.Message(d["default"].CG_PLAYER_MAX_VIP);
          return e;
        }),
        (e.createHightVIPStorageListMsg = function () {
          var e = new n.Message(d["default"].CG_STORAGE_LIST_HIGH_VIP);
          return e;
        }),
        (e.createStorageOperateMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_STORAGE_OPER);
          return (i.putByte(e), i.putShort(1), i.putShort(t), i);
        }),
        (e.createListStorageOperateMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_STORAGE_OPER);
          (i.putByte(e), i.putShort(t.length));
          for (var o = 0; o < t.length; o++) i.putShort(t[o]);
          return i;
        }),
        (e.createVIPStorageOperateMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_STORAGE_OPER_VIP);
          return (i.putByte(e), i.putShort(1), i.putShort(t), i);
        }),
        (e.createListVIPStorageOperateMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_STORAGE_OPER_VIP);
          (i.putByte(e), i.putShort(t.length));
          for (var o = 0; o < t.length; o++) i.putShort(t[o]);
          return i;
        }),
        (e.createHightVIPStorageOperateMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_STORAGE_OPER_HIGH_VIP);
          return (i.putByte(e), i.putShort(1), i.putShort(t), i);
        }),
        (e.createListHightVIPStorageOperateMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_STORAGE_OPER_HIGH_VIP);
          (i.putByte(e), i.putShort(t.length));
          for (var o = 0; o < t.length; o++) i.putShort(t[o]);
          return i;
        }),
        (e.createTaskOffLineListMsg = function () {
          var e = new n.Message(d["default"].CG_TASK_OFFLINE_LIST);
          return e;
        }),
        (e.createTaskOffLineActivateMsg = function (e) {
          var t = new n.Message(d["default"].CG_TASK_OFFLINE_ACTIVATE);
          return (t.putShort(e), t);
        }),
        (e.createItemInfoMsg = function (e) {
          var t = new n.Message(d["default"].CG_ITEMTYPE_GETINFO);
          return (t.putInt(e), t);
        }),
        (e.createInviteTeamMsg = function (e, t, i) {
          void 0 === i && (i = !1);
          var o = new n.Message(d["default"].CG_TEAM_INVITE);
          return (o.putInt(t), o.putByte(e), o.putBoolean(i), o);
        }),
        (e.createSelfLeaveTeamMsg = function () {
          var e = new n.Message(d["default"].CG_TEAM_LEAVE_SELF);
          return e;
        }),
        (e.createCombinShop = function (e) {
          var t = new n.Message(d["default"].CG_COMPOSITE_SHOP);
          return (t.putShort(e), t);
        }),
        (e.createCombinItem = function (e, t, i, o) {
          if (null == t) return null;
          var a = t.getPrice(),
            r = t.getMoneyType(),
            s = new n.Message(d["default"].CG_COMPOSITE_DO);
          return (
            s.putShort(e),
            s.putInt(t.id),
            s.putShort(i),
            s.putInt(o),
            s.putByte(r),
            s.putInt(a),
            s
          );
        }),
        (e.createCombinConfirm = function (e) {
          var t = new n.Message(d["default"].CG_COMPOSITE_CONFIRM);
          return (t.putByte(e), t);
        }),
        (e.createIntegralShop = function (e) {
          var t = new n.Message(d["default"].CG_ITEMSHOP_LIST_SCORE);
          return (t.putShort(e), t);
        }),
        (e.createIntegralBuy = function (e, t, i) {
          var o = new n.Message(d["default"].CG_ITEMSHOP_BUY_SCORE);
          return (o.putShort(e), o.putInt(t), o.putByte(i), o);
        }),
        (e.createMercenaryListMsg = function (e, t, i) {
          var o = new n.Message(d["default"].CG_SOLDIER_GROUP_LIST);
          return (o.putShort(e), o.putByte(t), o.putShort(i), o);
        }),
        (e.processMercenaryListMsg = function (e) {}),
        (e.createMercenaryBuyMsg = function (e, t, i) {
          var o = u["default"].isCountrySoldierShop(e),
            a = new n.Message(d["default"].CG_SOLDIER_GROUP_BUY);
          return (
            a.putShort(e),
            a.putShort(t.groupId),
            a.putBoolean(i),
            a.putBoolean(o),
            1 == o &&
              (a.putInt(t.money1), a.putInt(t.money2), a.putInt(t.money3)),
            a
          );
        }),
        (e.createMercenaryInfoMsg = function (e) {
          var t = new n.Message(d["default"].CG_SOLDIER_GROUP_INFO);
          return (t.putShort(e), t);
        }),
        (e.createMercenaryMyInfoMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_SOLDIER_GROUP_MY_INFO);
          return (i.putInt(e), i.putShort(t), i);
        }),
        (e.createMercenaryMyListMsg = function () {
          var e = new n.Message(d["default"].CG_SOLDIER_GROUP_MY_LIST_SLEEP);
          return e;
        }),
        (e.createMercenarySetStatusMsg = function (e, t, i) {
          var o = new n.Message(d["default"].CG_SOLDIER_STATE_SET);
          return (o.putShort(e), o.putBoolean(t), o.putByte(i), o);
        }),
        (e.createMercenaryDelMsg = function (e) {
          var t = new n.Message(d["default"].CG_SOLDIER_DELETE);
          return (t.putShort(e), t);
        }),
        (e.processMyMercenaryCheck = function (e) {
          for (
            var t = r["default"].myPlayer, i = e.getByte(), o = 0;
            i > o;
            o++
          ) {
            var n = (e.getBoolean(), e.getShort()),
              a = e.getString();
            if (null != t) {
              var s = t.getMercenaryById(n);
              if (null == s) continue;
              t.removeMercenary(s);
              var l = f.Tool.manageString(h.GameText.STR_MERCENARY_TIME_OUT, a);
              E["default"].alertMessage(l);
            }
          }
        }),
        (e.createChatSeeItem = function (e, t) {
          var i = new n.Message(d["default"].CG_CHAT_SEE_ITEM);
          if ((i.putInt(e), null == t)) i.putByte(0);
          else {
            i.putByte(t.length);
            for (var o = 0; o < t.length; o++) i.putShort(t[o]);
          }
          return i;
        }),
        (e.createChatSeeMission = function (e, t) {
          var i = new n.Message(d["default"].CG_CHAT_SEN_MISSION);
          if ((i.putInt(e), null == t)) i.putByte(0);
          else {
            i.putByte(t.length);
            for (var o = 0; o < t.length; o++) i.putShort(t[o]);
          }
          return i;
        }),
        (e.createPetChangeName = function (e, t) {
          var i = new n.Message(d["default"].CG_PET_CHANGE_NAME);
          return (i.putShort(e), i.putString(t), i);
        }),
        (e.createEscortMoveMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_TASK_ESCORT_MOVE);
          return (i.putByte(e), i.putByte(t), i);
        }),
        (e.createEscortRefreshMsg = function (e) {
          var t = new n.Message(d["default"].CG_TASK_ESCORT_REFURBISH);
          return (t.putShort(e), t);
        }),
        (e.createEscortEventMsg = function (e) {
          var t = new n.Message(d["default"].CG_TASK_ESCORT_CHOICE_EVENT);
          return (t.putShort(e), t);
        }),
        (e.createEscortPostQuit = function () {
          var e = new n.Message(d["default"].CG_TASK_ESCORT_CANCEL);
          return e;
        }),
        (e.createEscortRobList = function (e, t) {
          var i = new n.Message(d["default"].CG_TASK_ESCORT_LIST);
          return (i.putByte(e), i.putShort(t), i);
        }),
        (e.createNewEscortRobList = function (e, t) {
          var i = new n.Message(d["default"].CG_TASK_ESCORT_NEW_LIST);
          return (i.putByte(e), i.putShort(t), i);
        }),
        (e.createEscortRob = function (e) {
          var t = new n.Message(d["default"].CG_TASK_ESCORT_ROB);
          return (t.putInt(e), t);
        }),
        (e.createEscortListPlayer = function () {
          var e = new n.Message(d["default"].CG_TASK_ESCORT_SEE);
          return e;
        }),
        (e.createPayDescribe = function () {
          var e = new n.Message(d["default"].CG_BILL_DESCRIBE);
          return e;
        }),
        (e.createPayInfoList = function () {
          var e = new n.Message(d["default"].CG_BILL_GETLIST);
          return e;
        }),
        (e.createAchieveGetInfo = function () {
          var e = new n.Message(d["default"].CG_ACHIEVEMENT_GETINFO);
          return e;
        }),
        (e.createAchieveList = function (e, t, i, o) {
          var a = new n.Message(d["default"].CG_ACHIEVEMENT_GETLIST);
          return (a.putByte(e), a.putByte(t), a.putInt(i), a.putShort(o), a);
        }),
        (e.createAchieveTitleList = function () {
          var e = new n.Message(d["default"].CG_TITLE_GETLIST);
          return e;
        }),
        (e.createPKAskMsg = function (e) {
          var t = new n.Message(d["default"].CG_FIGHT_PK_ASK);
          return (t.putInt(e), t);
        }),
        (e.createChangeSettingMessgae = function (e) {
          var t = new n.Message(d["default"].CG_ACTOR_SETTING);
          return (t.putInt(e), t);
        }),
        (e.createRelationFly = function (e) {
          var t = new n.Message(d["default"].CG_RELATION_FLY);
          return (t.putInt(e), t.putInt(u["default"].JUMP_MAP_DATA_FLAG), t);
        }),
        (e.createModifyActorName = function (e) {
          var t = new n.Message(d["default"].CG_CHANGE_ACTOR);
          return (t.putString(e), t);
        }),
        (e.createModifyActorNameByItem = function (e, t) {
          var i = new n.Message(d["default"].CG_ACTOR_CHANGE_NAME);
          return (i.putShort(t), i.putString(e), i);
        }),
        (e.createModifyPlayerName = function (e, t, i, o) {
          var a = new n.Message(d["default"].CG_CHANGE_ACCOUNT);
          return (
            a.putString(e),
            a.putString(t),
            a.putString(i),
            a.putString(o),
            a
          );
        }),
        (e.createCountryApply = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_APPLY);
          return (t.putInt(e), t);
        }),
        (e.createCountryActiveMsg = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_ACTIVATE);
          return (t.putInt(e), t);
        }),
        (e.createCountryCreateMsg = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_CREATE);
          return (t.putString(e), t);
        }),
        (e.createJumpCountryMessage = function (e, t, i, o) {
          var a = new n.Message(d["default"].CG_COUNTRY_ENTER);
          return (a.putInt(e), a.putInt(t), a.putInt(i), a.putInt(o), a);
        }),
        (e.createCountryListMsg = function (e, t, i, o) {
          var a = new n.Message(d["default"].CG_COUNTRY_LIST);
          return (a.putByte(e), a.putShort(t), a.putInt(i), a.putString(o), a);
        }),
        (e.createBrowseCountryInfoMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_COUNTRY_CHECK);
          return (i.putInt(e), i.putByte(t), i);
        }),
        (e.createCountryAfficheModifyMsg = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_MODIFY_NOTICE);
          return (t.putString(e), t);
        }),
        (e.createCountryStorageList = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_GET_STORAGE_ITEM);
          return (t.putBoolean(e), t);
        }),
        (e.createCountryStoragePut = function (e, t, i, o) {
          var a = new n.Message(d["default"].CG_COUNTRY_DONATE_ITEM);
          return (a.putShort(e), a.putByte(t), a.putInt(i), a.putInt(o), a);
        }),
        (e.createCountryStorageDel = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_DELETE_STORAGE_ITEM);
          return (t.putLong(e), t);
        }),
        (e.createCountryStorageGet = function (e, t) {
          var i = new n.Message(d["default"].CG_COUNTRY_EXCHAGE_STORAGE_ITEM);
          return (i.putBoolean(e), i.putLong(t), i);
        }),
        (e.createCountryValidMission = function () {
          var e = new n.Message(d["default"].CG_COUNTRY_GET_VALID_MISSION);
          return e;
        }),
        (e.createCountryGetAllMission = function () {
          var e = new n.Message(d["default"].CG_COUNTRY_GET_ISSUE_MISSION);
          return e;
        }),
        (e.createCountryAssingMission = function () {
          var e = new n.Message(d["default"].CG_COUNTRY_GET_ASSIGN_MISSION);
          return e;
        }),
        (e.createCountryAssignMem = function (e, t, i, o) {
          var a = new n.Message(d["default"].CG_COUNTRY_GET_ASSIGN_PEOPLE);
          return (
            a.putShort(i),
            a.putShort(e),
            a.putInt(t),
            a.putBoolean(o),
            a
          );
        }),
        (e.createPartnerFly = function () {
          var e = new n.Message(d["default"].CG_PARTNER_FLY);
          return (e.putInt(u["default"].JUMP_MAP_DATA_FLAG), e);
        }),
        (e.createPartnerAdd = function () {
          var e = new n.Message(d["default"].CG_RELATION_PARTNER_ADD);
          return e;
        }),
        (e.createPartnerDel = function () {
          var e = new n.Message(d["default"].CG_RELATION_PARTNER_DELETE);
          return e;
        }),
        (e.processAttributeUpdateMsg = function (e) {
          for (
            var t = e.getByte(), i = r["default"].myPlayer, o = 0;
            t > o;
            o++
          ) {
            var n = e.getShort(),
              a = e.getInt();
            null != i && i.addValue(n, a);
          }
        }),
        (e.createCampInfo = function () {
          var e = new n.Message(d["default"].CG_COUNTRY_BUILD_CAMP);
          return e;
        }),
        (e.createSoldierApply = function () {
          var e = new n.Message(d["default"].CG_COUNTRY_WAR_TO_ARMY);
          return e;
        }),
        (e.createDeleteSoldier = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_WAR_DELETE_ARMY);
          return (t.putInt(e), t);
        }),
        (e.createSoldierList = function (e, t, i, o) {
          var a = new n.Message(d["default"].CG_COUNTRY_WAR_TO_ARMY_LIST);
          return (a.putByte(i), a.putShort(o), a.putByte(e), a.putByte(t), a);
        }),
        (e.createSoldierDealApply = function (e, t, i) {
          var o = new n.Message(d["default"].CG_COUNTRY_WAR_TO_ARMY_ANSWER);
          return (o.putInt(e), o.putBoolean(t), o.putByte(i), o);
        }),
        (e.createWarBuildList = function () {
          var e = new n.Message(d["default"].CG_COUNTRY_WAR_BUILD_LIST);
          return e;
        }),
        (e.createWarBuildLevel = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_WAR_BUILD_UPDATE);
          return (t.putByte(e), t);
        }),
        (e.createWarUnionCreate = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_WAR_UNION_CREATE);
          return (t.putString(e), t);
        }),
        (e.createWarUnionList = function (e, t) {
          var i = new n.Message(d["default"].CG_COUNTRY_WAR_UNION_LIST);
          return (i.putByte(e), i.putShort(t), i);
        }),
        (e.createWarUnionMy = function () {
          var e = new n.Message(d["default"].CG_COUNTRY_WAR_UNION_MY);
          return e;
        }),
        (e.createWarUnionDealApply = function (e, t) {
          var i = new n.Message(
            d["default"].CG_COUNTRY_WAR_UNION_MEMBER_APPLY_DEAL,
          );
          return (i.putInt(e), i.putBoolean(t), i);
        }),
        (e.createWarUnionDelMember = function (e) {
          var t = new n.Message(
            d["default"].CG_COUNTRY_WAR_UNION_MEMBER_DELETE,
          );
          return (t.putInt(e), t);
        }),
        (e.createWarUnionChange = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_WAR_UNION_HEAD_CHANGE);
          return (t.putInt(e), t);
        }),
        (e.createWarUnionApply = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_WAR_UNION_MEMBER_APPLY);
          return (t.putInt(e), t);
        }),
        (e.createWarUnionApplyHelp = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_WAR_TO_FOREIGN);
          return (t.putInt(e), t);
        }),
        (e.createWarUnionWarList = function (e, t, i) {
          var o = new n.Message(
            d["default"].CG_COUNTRY_WAR_UNION_MEMBER_APPLY_LIST,
          );
          return (o.putByte(e), o.putByte(t), o.putShort(i), o);
        }),
        (e.createWarDeclare = function (e, t, i, o) {
          var a = new n.Message(d["default"].CG_COUNTRY_WAR_CREATE);
          return (a.putInt(e), a.putByte(t), a.putByte(i), a.putBoolean(o), a);
        }),
        (e.createWarAnswerInfo = function () {
          var e = new n.Message(d["default"].CG_COUNTRY_WAR_ANSWER_GET_INFO);
          return e;
        }),
        (e.createWarDeclareAsk = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_WAR_ANSWER);
          return (t.putByte(e), t);
        }),
        (e.createWarDeclareList = function (e, t, i) {
          var o = new n.Message(d["default"].CG_COUNTRY_WAR_COUNTYR_LIST);
          return (o.putByte(e), o.putByte(t), o.putShort(i), o);
        }),
        (e.createCountryWarEnter = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_WAR_START);
          return (t.putBoolean(e), t);
        }),
        (e.createWinActionInfo = function () {
          var e = new n.Message(d["default"].CG_COUNTRY_WAR_WIN_ACTION_INFO);
          return e;
        }),
        (e.createWinActionDo = function (e, t, i) {
          var o = new n.Message(d["default"].CG_COUNTRY_WAR_WIN_ACTION_DO);
          return (o.putInt(e), o.putByte(t), o.putByte(i), o);
        }),
        (e.createCountryWarUpdate = function () {
          var e = new n.Message(d["default"].CG_COUNTRY_WAR_UPDATE);
          return e;
        }),
        (e.countryWarSoldierRelive = function () {
          var e = new n.Message(d["default"].CG_COUNTRY_WAR_SOLDIER_RELIVE);
          return e;
        }),
        (e.countryWarReduceJoinCd = function () {
          var e = new n.Message(d["default"].CG_COUNTRY_WAR_REDUCE_JOIN_CD);
          return e;
        }),
        (e.createCountryWarOperArmy = function (e, t) {
          var i = new n.Message(d["default"].CG_COUNTRY_WAR_GOTO_CELL);
          return (i.putByte(e), i.putInt(t), i);
        }),
        (e.createCountryWarArmyList = function (e, t, i) {
          var o = new n.Message(d["default"].CG_COUNTRY_WAR_ARMY_LIST);
          return (o.putByte(e), o.putByte(t), o.putShort(i), o);
        }),
        (e.createCountryWarCommandList = function () {
          var e = new n.Message(d["default"].CG_COUNTRY_WAR_COMMAND_LIST);
          return e;
        }),
        (e.createCountryWarUseCommand = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_WAR_COMMAND_USE);
          return (t.putShort(e), t);
        }),
        (e.createWarTextInfo = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_WAR_TEXT_LIST);
          return (t.putByte(e), t);
        }),
        (e.createWarBattleList = function () {
          var e = new n.Message(d["default"].CG_COUNTRY_WAR_SEE_LIST);
          return e;
        }),
        (e.createArenaRefresh = function () {
          var e = new n.Message(d["default"].CG_TASK_ARENA_UPDATE);
          return e;
        }),
        (e.createArenaExit = function () {
          var e = new n.Message(d["default"].CG_TASK_ARENA_EXIT);
          return e;
        }),
        (e.createCountryPeopleDonate = function (e, t) {
          var i = new n.Message(d["default"].CG_COUNTRY_PEOPLE_DONATE);
          return (i.putByte(e), i.putInt(t), i);
        }),
        (e.createCountryLeaveMsg = function () {
          var e = new n.Message(d["default"].CG_COUNTRY_PEOPLE_LEAVE);
          return e;
        }),
        (e.createWarUnionQuit = function () {
          var e = new n.Message(d["default"].CG_COUNTRY_WAR_UNION_MEMBER_EXIT);
          return e;
        }),
        (e.createCountryMemberListMsg = function (e, t, i, o, a) {
          var r = new n.Message(d["default"].CG_COUNTRY_PEOPLE_LIST);
          return (
            r.putInt(e),
            r.putByte(t),
            r.putShort(i),
            r.putInt(o),
            r.putByte(a),
            r
          );
        }),
        (e.createCountryMemberAppleListMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_COUNTRY_APPLY_LIST);
          return (i.putShort(e), i.putInt(t), i);
        }),
        (e.createCountryBuildingUpgradeMsg = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_BUILDING_UPGRADE);
          return (t.putByte(e), t);
        }),
        (e.createCountryBuildingRemoveMsg = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_BUILDING_REMOVE);
          return (t.putByte(e), t);
        }),
        (e.createCountryMainMenu = function () {
          var e = new n.Message(d["default"].CG_COUNTRY_GET_MISSION_MAIN);
          return e;
        }),
        (e.createCountryGetMission = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_GET_MISSION);
          return (t.putByte(e), t);
        }),
        (e.createCountryPublishMission = function (e, t) {
          if (null == t) return null;
          var i = new n.Message(d["default"].CG_COUNTRY_ISSUE_MISSION);
          (i.putByte(e), i.putByte(t.length));
          for (var o = 0; o < t.length; o++) i.putShort(t[o]);
          return i;
        }),
        (e.createCountrySetOnlineNotify = function (e, t) {
          var i = new n.Message(d["default"].CG_COUNTRY_SET_ONLINE_NOTIFY);
          return (i.putBoolean(t), i);
        }),
        (e.createCountryTaxRate = function (e, t) {
          var i = new n.Message(d["default"].CG_COUNTRY_SET_TAX);
          return (i.putInt(e), i.putShort(t), i);
        }),
        (e.createCountryBossRefresh = function () {
          var e = new n.Message(d["default"].CG_TASK_COUNTRY_BOSS_UPDATE);
          return e;
        }),
        (e.createTeamBossStart = function () {
          var e = new n.Message(d["default"].CG_TASK_TEAM_BOSS_JOIN);
          return e;
        }),
        (e.createCountryBossQuit = function () {
          var e = new n.Message(d["default"].CG_TASK_COUNTRY_BOSS_EXIT);
          return e;
        }),
        (e.createCountryEnterRate = function (e, t, i) {
          var o = new n.Message(d["default"].CG_COUNTRY_SET_ENTRYTAX);
          return (o.putInt(e), o.putInt(t), o.putInt(i), o);
        }),
        (e.createCountryInvite = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_INVITE);
          return (t.putInt(e), t);
        }),
        (e.createCountryBossFight = function (e) {
          var t = new n.Message(d["default"].CG_TASK_COUNTRY_BOSS_FIGHT);
          return (t.putByte(e), t);
        }),
        (e.createCountryBossNotFight = function () {
          var e = new n.Message(d["default"].CG_TASK_COUNTRY_BOSS_LEAVE_GRID);
          return e;
        }),
        (e.createTeamBossQuit = function () {
          var e = new n.Message(d["default"].CG_TASK_TEAM_BOSS_EXIT);
          return e;
        }),
        (e.createTeamBossFight = function (e) {
          var t = new n.Message(d["default"].CG_TASK_TEAM_BOSS_FIGHT);
          return (t.putByte(e), t);
        }),
        (e.createTeamBossNotFight = function () {
          var e = new n.Message(d["default"].CG_TASK_TEAM_BOSS_LEAVE_GRID);
          return e;
        }),
        (e.createCountryBookMsg = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_COMMAND_EXCUTE);
          return (t.putByte(e), t);
        }),
        (e.createCountryBookMsgId = function (e, t) {
          var i = new n.Message(d["default"].CG_COUNTRY_COMMAND_EXCUTE);
          return (i.putByte(e), i.putByte(t), i);
        }),
        (e.createCountryApplyDealMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_COUNTRY_APPLY_HANDLE);
          return (i.putInt(e), i.putBoolean(t), i);
        }),
        (e.createCountryExchargeData = function () {
          var e = new n.Message(d["default"].CG_COUNTRY_GET_EXCHARGE_LIST);
          return e;
        }),
        (e.createCountryAdjustJobMessage = function (e, t) {
          var i = new n.Message(d["default"].CG_COUNTRY_APOINT_PEOPLE);
          return (i.putInt(e), i.putByte(t), i);
        }),
        (e.createCountryBecomeKingMessage = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_KING_TRANSFER);
          return (t.putInt(e), t);
        }),
        (e.createCountryDelMemMsg = function (e) {
          var t = new n.Message(d["default"].CG_COUNTRY_PEOPLE_REMOVE);
          return (t.putInt(e), t);
        }),
        (e.createCommandCreateWarDeclareList = function (e, t, i) {
          var o = new n.Message(
            d["default"].CG_COUNTRY_GET_COMMAND_INFO_CREATE_WAR,
          );
          return (o.putByte(e), o.putByte(t), o.putShort(i), o);
        }),
        (e.createWarTopPlayer = function (e, t) {
          var i = new n.Message(d["default"].CG_COUNTRY_WAR_TOP_PLAYER_LIST);
          return (i.putByte(e), i.putShort(t), i);
        }),
        (e.createWarTopCountryPlayer = function (e, t) {
          var i = new n.Message(
            d["default"].CG_COUNTRY_WAR_TOP_PEOPLE_COUNTRY_LIST,
          );
          return (i.putByte(e), i.putShort(t), i);
        }),
        (e.createWarTopCountry = function (e, t) {
          var i = new n.Message(d["default"].CG_COUNTRY_WAR_TOP_COUNTRY_LIST);
          return (i.putByte(e), i.putShort(t), i);
        }),
        (e.createPlayerLoginOutMsg = function (e) {
          console.info("logoutType", e);
          var t = new n.Message(d["default"].CG_LOGIN_ACTORLEAVE);
          return (t.putByte(e), t);
        }),
        (e.createPlayerBagMessage = function (e, t, i, o, a, r) {
          if (
            (void 0 === o && (o = -1),
            void 0 === a && (a = !1),
            void 0 === r && (r = 1),
            null == i)
          )
            return null;
          var s = new n.Message(d["default"].CG_ACTOR_PLAYERBAG);
          return (
            s.putByte(e),
            s.putByte(t),
            s.putShort(i.slotPos),
            s.putInt(r),
            t == d["default"].PLAYERBAG_EQUIP
              ? s.putByte(o)
              : t == d["default"].PLAYERBAG_LOSE
                ? s.putInt(i.id)
                : t == d["default"].PLAYERBAG_ENCHASE
                  ? s.putShort(o)
                  : i.isPetCanUseItem() && s.putShort(o),
            s.putBoolean(a),
            s.putByte(i.type),
            i.getIsItemPetEquip() && s.putLong(i.petUid),
            s
          );
        }),
        (e.createBagRefreshMsg = function () {
          var e = new n.Message(d["default"].CG_BAG_CLEAN);
          return (e.putInt(u["default"].DATA_PLAYER_ITEM), e);
        }),
        (e.processBagRefreshMsg = function (e) {
          var t = e.getByte();
          if (0 != t)
            return void console.error(
              h.GameText.getText(h.GameText.TI_ERROR) + ">>>>>" + e.getString(),
            );
          this.processDataBlockFlagMsg(e);
          var i = r["default"].myPlayer;
          (i.checkHPMP(),
            i.updateAndRefreshIcon(),
            r["default"].updateMyMoveSpeed());
        }),
        (e.createAutoSkillMsg = function (e, t, i) {
          var o = new n.Message(d["default"].CG_SKILL_AUTO_ACTIVE);
          0 == i && o.setType(d["default"].CG_SKILL_AUTO_INVALID);
          var a = u["default"].SKILL_TYPE_PLAYER;
          return (
            null != e &&
              e.getType() == A.MODEL_TYPE.TYPE_PET &&
              (a = u["default"].SKILL_TYPE_PET),
            o.putByte(a),
            o.putInt(t),
            o
          );
        }),
        (e.processDataBlockFlagMsg = function (t) {
          var i = r["default"].myPlayer,
            n = o["default"].getProxy(a.ModName.Scene, a.ProxyType.Scene),
            s = t.getInt(),
            _ = s;
          (u["default"].isAllocateMirrorMap(s) && (_ = t.getShort()),
            u["default"].isAllocateCityMap(s) &&
              ((_ = t.getShort()), r["default"].automaticRepairEquip()),
            u["default"].isAllocateCountryMap(s) && (_ = t.getShort()),
            (r["default"].orgMapID = _));
          var d = n.mapId != _ || r["default"].mapId != s,
            c = !n.mapId;
          (d && u["default"].isMapUpdata(s) && r["default"].mapId && (d = !1),
            d && !c && o["default"].sendNt(P.SceneEvent.CLEAN_SCENE),
            (r["default"].mapId = s),
            (n.mapId = _),
            console.log("mapId=" + s + " orgMapID=" + _));
          var h = t.getByte(),
            f = t.getByte();
          i.setPosition(h, f);
          for (
            var T = t.getInt(),
              E = 0 != (T & u["default"].DATA_PLAYER_DETAIL),
              y = 0;
            y < u["default"].DATA_END;
            y++
          ) {
            var g = T & (1 << y);
            if (0 != g)
              switch (
                (console.log(t.type, "processDataBlockFlagMsg blockID=" + g), g)
              ) {
                case u["default"].DATA_PLAYER_DETAIL:
                  (this.processDataPlayerDetail(t, i),
                    (go.roleId = i.id),
                    (go.roleName = i.name),
                    go.isWeixin || (document.title = "世界OL -  " + i.name));
                  break;
                case u["default"].DATA_PLAYER_MISSION_BYTE:
                  i.missionStatus = t.getNumbers();
                  break;
                case u["default"].DATA_PLAYER_MISSION:
                  this.processDataPlayerMission(t, i);
                  break;
                case u["default"].DATA_PLAYER_ITEM:
                  var S = i.bag,
                    I = this.processDataPlayerItemMsg(t);
                  (null == S
                    ? ((S = new v["default"](i)), i.setBag(S))
                    : S.clearEquipAndBagItem(),
                    S.initBagItem(I),
                    o["default"].sendNt(L.MainEvent.ON_BAG_INIT),
                    r["default"].updateMyMoveSpeed());
                  break;
                case u["default"].DATA_PLAYER_SKILL:
                  var m = this.processDataPlayerSkillMsg(t, !0);
                  i.skillList = m;
                  break;
                case u["default"].DATA_PLAYER_LIST_BASE:
                  for (var C = t.getShort(), R = [], O = 0; C > O; O++)
                    R[O] = this.processDataPlayerListBase(
                      t,
                      new A.ModelVo(A.MODEL_TYPE.TYPE_PLAYER),
                    );
                  (n.onGotOthers(R),
                    i.clearMember(),
                    this.processDataTeamMsg(t));
                  break;
                case u["default"].DATA_MAP_NORMAL:
                case u["default"].DATA_MAP_MINI:
                  var N = t.getString();
                  r["default"].mapName = N;
                  (t.getString(), t.getByte());
                  break;
                case u["default"].DATA_NPC_BASE:
                  var M = l["default"].parseNPCData(t);
                  n.onGotNpcList(M);
                  break;
                case u["default"].DATA_MONSTER_GROUP:
                  this.processDataMonsterGroupMsg(t);
                  break;
                case u["default"].DATA_MONSTER_MODEL:
                  var w = this.processDataMonsterMsg(t);
                  w && this.processDataMonsterAIMsg(t);
                  break;
                case u["default"].DATA_GUILD_MAP:
                  var b = t.getString();
                  ((r["default"].mapName = b),
                    (r["default"].cityDegree = t.getInt()),
                    (r["default"].cityArmy = t.getInt()));
                  break;
                case u["default"].DATA_CITY:
                  r["default"].cityMasterId = t.getInt();
                  var x = t.getString();
                  ((r["default"].cityDegree = t.getInt()),
                    (r["default"].cityArmy = t.getInt()),
                    (r["default"].cityScale = t.getByte()),
                    (r["default"].cityLevel = t.getByte()),
                    (r["default"].mapName = x));
                  break;
                case u["default"].DATA_NOTICE:
                  t.getString();
                  break;
                case u["default"].DATA_FORMATION:
                  var B = p["default"].doGetFormation(t),
                    G = t.getBoolean(),
                    U = i.getPet();
                  (G
                    ? ((i.formationSkill =
                        p["default"].fromByteFormationSkill(t)),
                      null != U && (U.formationSkill = i.formationSkill))
                    : ((i.formationSkill = null),
                      null != U && (U.formationSkill = null)),
                    (i.formationList = B));
                  break;
                case u["default"].DATA_TURN_MONSTER:
                  var k = t.getBoolean();
                  k && D["default"].doChangeTurnMonsterPush(t);
              }
          }
          d &&
            (c || o["default"].sendNt(P.SceneEvent.ON_SCENE_READY),
            (!c || E) && e.createWorldDataMessage(0, !0));
        }),
        (e.processEscortEventReword = function (e) {
          var t = r["default"].myPlayer;
          if (null != t) {
            var i = t.bag;
            if (null != i) {
              var n = e.getByte();
              if (n >= 0) {
                var s = new T["default"](),
                  l = e.getString();
                0 == f.Tool.isNullText(l) && s.append(l + "\n");
                var _ = e.getShort();
                if (_ >= 0) {
                  var p = (e.getInt(), e.getByte());
                  i.removeBagItemByPos(_, p);
                }
                var c = e.getShort();
                if (c > 0) {
                  var E = e.getShort(),
                    y = u["default"].processWorldPower(t, c, E);
                  1 == y
                    ? s.append(u["default"].getPowerDesc(c, E) + "\n")
                    : (t.addFightPower(c, E),
                      s.append(
                        b["default"].manageString(
                          h.GameText.STR_GET_BUFFER_INFO,
                          u["default"].getPowerDesc(c, E),
                        ),
                      ));
                }
                t.checkHPMP();
                var g = e.getInt(),
                  v = e.getInt();
                ((t.hp = g),
                  (t.mp = v),
                  t.setMoneyByType(C.ModelConst.MONEY1, e.getInt()),
                  t.setMoneyByType(C.ModelConst.MONEY2, e.getInt()),
                  t.setMoneyByType(C.ModelConst.MONEY3, e.getInt()));
                var S = e.getBoolean();
                if (
                  (1 == S &&
                    (this.processAddItemMsg(
                      e,
                      d["default"].ADD_ITEM_BATTLE_REWARD,
                    ),
                    s.append(e.getMsgInfo())),
                  0 == f.Tool.isNullText(s.toString()))
                ) {
                  var I = o["default"].getProxy(
                    a.ModName.Escort,
                    a.ProxyType.Escort,
                  );
                  I && I.escortData && I.escortData.setBattleMsg(s.toString());
                }
              }
            }
          }
        }),
        (e.processDataPlayerDetail = function (e, t) {
          if (null != t) {
            (t.clearData(), t.fromBytes(e, t));
            var i = S["default"].fromBytesMyPlayer(e, t);
            t.setPet(i);
            var n = e.getByte();
            t.clearMercenary();
            for (var a = 0; n > a; a++)
              t.addMercenary(R["default"].fromBytesFull(e));
            (t.clearLegionList(), (n = e.getByte()));
            for (var a = 0; n > a; a++)
              t.addLegionVo(F["default"].fromBytesVo(e));
            var s = e.getBoolean();
            1 == s && t.setTabStatus(!0, C.ModelConst.MAIL_NEW_NOTICE);
            var l = e.getInt();
            ((t.BagSize = l),
              (t.gerenState = e.getByte()),
              (t.winRateV3 = Number(e.getString())),
              (t.winRateV5 = Number(e.getString())),
              t.isMyPlayer &&
                (o["default"].sendNt(L.PetEvent.PET_SKILL_POINT),
                o["default"].sendNt(L.MainEvent.ON_BUFF_ICON),
                r["default"].updateMyMoveSpeed()));
          }
        }),
        (e.processDataMonsterMsg = function (e) {
          var t = e.getByte();
          if (0 >= t) return !1;
          for (var i = 0; t > i; i++)
            r["default"].addMonster(s["default"].fromBytes(e));
          return !0;
        }),
        (e.processDataMonsterAIMsg = function (e) {
          for (var t = e.getByte(), i = [], o = 0; t > o; o++)
            i.push(p["default"].fromBytes(e));
          for (var n = e.getByte(), o = 0; n > o; o++) {
            var a = m.MonsterAI.fromBytes(e, i);
            if (null != a) {
              var s = r["default"].getMonster(a.id);
              null != s && s.setAI(a);
            }
          }
        }),
        (e.processDataMonsterGroupMsg = function (e) {
          for (var t = e.getByte(), i = 0; t > i; i++) {
            var o = I.MonsterGroup.fromBytes(e);
            null != o && r["default"].addMonsterGroup(o);
          }
        }),
        (e.processDataPlayerSkillMsg = function (e, t) {
          for (var i = e.getShort(), o = new Array(), n = 0; i > n; n++) {
            var a = p["default"].fromBytes(e);
            (1 == t && (a.addLevel = e.getByte()), o.push(a));
          }
          return o;
        }),
        (e.processDataPlayerListBase = function (e, t) {
          if (null == t) return null;
          (A.ModelVo.fromBytes(e, t),
            t.setPet(S["default"].fromBytesOtherPlayer(e, t)));
          var i = e.getByte();
          t.clearMercenary();
          for (var o = 0; i > o; o++)
            t.addMercenary(R["default"].fromBytesSimple(e));
          (t.clearLegionList(), (i = e.getByte()));
          for (var o = 0; i > o; o++)
            t.addLegionVo(F["default"].fromBytesVo(e));
          return (
            (t.remark = e.getString()),
            t.setEnchantValue(e.getInt()),
            (t.iconpet1 = e.getShort()),
            (t.isServerTeam = e.getBoolean()),
            (t.winRateV3 = Number(e.getString())),
            (t.winRateV5 = Number(e.getString())),
            (t.petHave = e.getBoolean()),
            t
          );
        }),
        (e.processDataTeamMsg = function (e) {
          for (
            var t = e.getShort(), i = !1, o = r["default"].getPlayerID(), n = 0;
            t > n;
            n++
          )
            for (
              var a = e.getInt(),
                s = r["default"].getModel(a),
                l = e.getByte(),
                u = 0;
              l > u;
              u++
            ) {
              var _ = e.getInt(),
                d = r["default"].getModel(_);
              null != s && (s.addMember(d), (a == o || _ == o) && (i = !0));
            }
        }),
        (e.processDataPlayerMission = function (e, t) {
          if (null != t) {
            t.missionList = new Array(u["default"].MAX_MISSION_SIZE);
            for (var i = e.getByte(), o = 0; i > o; o++) {
              var n = _["default"].fromBytes(e.getByteArray());
              t.addMission(n, !0);
            }
          }
        }),
        (e.processDataPlayerItemMsg = function (e) {
          for (var t = e.getShort(), i = [], o = 0; t > o; o++) {
            var n = y["default"].fromBytes(e);
            i.push(n);
          }
          return i;
        }),
        (e.processMissionReward = function (t, i, o, n) {
          if ((void 0 === n && (n = !0), null == t)) return "";
          var a = o.getBoolean();
          1 == a && _["default"].finishMission(t, i);
          var s = t.bag;
          if (null == s) return "";
          var l = new T["default"](),
            u = o.getShort(),
            p = o.getInt(),
            E = o.getInt();
          (u > 0 && t.addValue(C.ModelConst.MONEY1, -u),
            p > 0 && t.addValue(C.ModelConst.MONEY2, -p),
            E > 0 && t.addValue(C.ModelConst.MONEY3, -E));
          var y = o.getInt();
          y > 0 &&
            l.append(
              c["default"].makeColorString(
                h.GameText.getMoneyText(C.ModelConst.MONEY2) + " +" + y + "  ",
                f.Tool.COLOR_YELLOW,
              ),
            );
          var g = o.getInt();
          (g > 0 &&
            l.append(
              c["default"].makeColorString(
                h.GameText.getMoneyText(C.ModelConst.MONEY3) + " +" + g + "  ",
                f.Tool.COLOR_YELLOW,
              ),
            ),
            this.processUpLevelMsg(o, t, l));
          var v = o.getBoolean();
          1 == v && this.parsePetReward(o, r["default"].myPlayer.getPet(), l);
          for (var S = o.getByte(), I = 0; S > I; I++) {
            var m = (o.getInt(), o.getInt()),
              A = o.getByte();
            s.removeBagItemByPos(m, A);
          }
          (this.processAddItemMsg(o, d["default"].ADD_ITEM_MISSION_REWARD),
            l.append(o.getMsgInfo()));
          var P = o.getBoolean();
          if (
            (1 == P &&
              t.getId() == r["default"].cityMasterId &&
              (e.worldReflashType = e.WORLD_REFLASH_ALL),
            o.getBoolean())
          ) {
            var R = o.getInt();
            R > 0 &&
              l.append(
                f.Tool.manageString(
                  h.GameText.STR_MISSION_REWARD_HONOR2,
                  R + "",
                ),
              );
            var N = o.getShort();
            N > 0 &&
              (l.append(
                f.Tool.manageString(
                  h.GameText.STR_MISSION_REWARD_CITY_PRO,
                  N + "",
                ),
              ),
              r["default"].cityMasterId == t.getId() &&
                (r["default"].cityDegree += N));
            var M = o.getShort();
            M > 0 &&
              (l.append(
                f.Tool.manageString(
                  h.GameText.STR_MISSION_REWARD_CITY_ARMY2,
                  M + "",
                ),
              ),
              r["default"].cityMasterId == t.getId() &&
                (r["default"].cityArmy += M));
            var L = o.getShort();
            L > 0 &&
              l.append(
                f.Tool.manageString(
                  h.GameText.STR_MISSION_REWARD_COUNTRY_LAND2,
                  L + "",
                ),
              );
            var w = o.getShort(),
              b = o.getShort();
            if (w > 0) {
              var x = "";
              (b > 0 &&
                (x = c["default"].makeColorString("+" + b, f.Tool.COLOR_GREEN)),
                l.append(
                  f.Tool.manageString(
                    h.GameText.STR_MISSION_COUNTRY_PROSPERITY,
                    w + x,
                  ),
                ));
            }
            var D = o.getShort();
            D > 0 &&
              l.append(
                f.Tool.manageString(
                  h.GameText.STR_MISSION_COUNTRY_PEOPLE,
                  D + "",
                ),
              );
            var B = o.getShort();
            B > 0 &&
              l.append(
                f.Tool.manageString(
                  h.GameText.STR_MISSION_COUNTRY_WOOD,
                  B + "",
                ),
              );
            var G = o.getShort();
            G > 0 &&
              l.append(
                f.Tool.manageString(
                  h.GameText.STR_MISSION_COUNTRY_STONE,
                  G + "",
                ),
              );
            var U = o.getShort();
            U > 0 &&
              l.append(
                f.Tool.manageString(
                  h.GameText.STR_MISSION_COUNTRY_IRON,
                  U + "",
                ),
              );
            var k = o.getShort();
            k > 0 &&
              l.append(
                f.Tool.manageString(
                  h.GameText.STR_MISSION_COUNTRY_ARMY,
                  k + "",
                ),
              );
          }
          var V = l.toString();
          return (
            n && O["default"].addPointMsg(V),
            console.log("//TODO 更新人物面板信息"),
            V
          );
        }),
        (e.parsePetReward = function (e, t, i) {
          var o = e.getInt();
          (null != i &&
            o > 0 &&
            i.append(
              c["default"].makeColorString(
                h.GameText.STR_PET_EXP_ADD + o,
                f.Tool.COLOR_YELLOW,
              ) + "\n",
            ),
            null != t && t.addValue(C.ModelConst.EXP, o));
          var n = e.getByte();
          if (n > 0) {
            var a = e.getShort(),
              r = e.getByte();
            null != i &&
              r > 0 &&
              i.append(
                c["default"].makeColorString(
                  h.GameText.STR_PET_GROW_LV + r,
                  f.Tool.COLOR_YELLOW,
                ) + "\n",
              );
            var s = 0,
              l = 0,
              u = 0,
              _ = 0,
              d = 0;
            r > 0 &&
              ((s = e.getShort()),
              (l = e.getShort()),
              (u = e.getShort()),
              (_ = e.getShort()),
              (d = e.getShort()));
            for (
              var T = e.getInt(),
                E = e.getInt(),
                y = e.getByte(),
                g = e.getByte(),
                v = new N["default"](),
                S = 0;
              g > S;
              S++
            )
              v.addElement(p["default"].fromBytes(e));
            if (null != t) {
              (t.addValue(C.ModelConst.LEVEL, n),
                t.addValue(C.ModelConst.SP, a),
                t.addValue(C.ModelConst.PET_GROW_LEVEL, r),
                t.addValue(C.ModelConst.STR, s),
                t.addValue(C.ModelConst.CON, l),
                t.addValue(C.ModelConst.AGI, u),
                t.addValue(C.ModelConst.ILT, _),
                t.addValue(C.ModelConst.WIS, d),
                t.addValue(C.ModelConst.SET_EXP, T),
                t.addValue(C.ModelConst.SET_EXPMAX, E),
                (t.cp = y));
              for (var S = 0; S < v.size(); S++) {
                var I = v.elementAt(S);
                if (null != I) {
                  t.learnSkill(I);
                }
              }
              t.resumeHPMP();
            }
            null != i &&
              i.append(
                f.Tool.manageString(h.GameText.STR_PET_UPDATE_LV, n + ""),
              );
          }
        }),
        (e.processUpLevelMsg = function (e, t, i, n) {
          if (null != e && null != t) {
            var r = e.getInt();
            (r > 0 &&
              (t.addValue(C.ModelConst.EXP, r),
              i.append(
                f.Tool.manageString(h.GameText.STR_UPDATE_LV_EXP, r + ""),
              )),
              n && (n.gainExp = r));
            var s = e.getByte();
            if (s > 0) {
              (i.append(
                f.Tool.manageString(h.GameText.STR_CONG_UPDATE_LV, s + ""),
              ),
                t.addValue(C.ModelConst.LEVEL, s));
              var l = e.getInt(),
                u = e.getInt();
              (t.addValue(C.ModelConst.SET_EXP, l),
                t.addValue(C.ModelConst.SET_EXPMAX, u));
              var _ = e.getShort();
              _ > 0 &&
                (t.addValue(C.ModelConst.SP, _),
                null != i &&
                  i.append(
                    c["default"].makeColorString(
                      h.GameText.STR_SP_POINT + " +" + _,
                      f.Tool.COLOR_YELLOW,
                    ) + "\n",
                  ));
              var d = e.getByte();
              d > 0 &&
                (t.addValue(C.ModelConst.CP, d),
                null != i &&
                  i.append(
                    c["default"].makeColorString(
                      h.GameText.STR_CP_POINT + " +" + d,
                      f.Tool.COLOR_YELLOW,
                    ) + "\n",
                  ),
                t.setTabStatus(!0, C.ModelConst.ATTR_NEW_NOTICE));
            }
            var p = e.getInt();
            p > 0 &&
              (t.addValue(C.ModelConst.EXP2, p),
              i.append(
                f.Tool.manageString(h.GameText.STR_UPDATE_LV_EXP2, p + ""),
              ));
            var T = e.getByte();
            if (T > 0) {
              (i.append(
                f.Tool.manageString(h.GameText.STR_CONG_UPDATE_LV2, T + ""),
              ),
                t.addValue(C.ModelConst.LEVEL2, T));
              var E = e.getInt(),
                y = e.getInt();
              (t.addValue(C.ModelConst.SET_EXP2, E),
                t.addValue(C.ModelConst.SET_EXPMAX2, y));
            }
            (s > 0 || T > 0) &&
              (o["default"].showView(
                a.ModName.Main,
                a.MainViewType.LevelUpEffect,
                { gainLevel: s, gainlevel2: T },
              ),
              o["default"].sendNt(L.MainEvent.ON_LEVEL_UP),
              t.resumeHPMP());
          }
        }),
        (e.processAddItemMsg = function (e, t, i, n, a) {
          (void 0 === t && (t = -1),
            void 0 === n && (n = !1),
            void 0 === a && (a = null));
          var s = r["default"].myPlayer;
          if (null == s) return "";
          var l = s.bag;
          if (null == l) return "";
          for (
            var u,
              _ = e.getByte(),
              p = null,
              c = 0,
              f = new T["default"](),
              g = [],
              v = 0;
            _ > v;
            v++
          ) {
            var S = e.getByte();
            if (((c = e.getByte()), 1 == S)) {
              var I = e.getInt();
              ((p = y["default"].fromBytes(e)),
                s.bag.addItem_2(p, c),
                I != p.slotPos &&
                  console.error(
                    "获得物品错误(soltPos)：" +
                      I +
                      " !=" +
                      p.slotPos +
                      ",type = " +
                      t,
                  ),
                g.push(p),
                t == d["default"].ADD_ITEM_BATTLE_REWARD &&
                  U["default"].ins.winData.itemList.push(p));
            } else if (2 == S) {
              var I = (e.getInt(), e.getInt());
              ((p = l.getItem(I)),
                null != p &&
                  ((p.quantity += c),
                  (u = null),
                  (u = p.clone()),
                  (u.quantity = c),
                  g.push(u),
                  t == d["default"].ADD_ITEM_BATTLE_REWARD &&
                    U["default"].ins.winData.itemList.push(u)));
            }
            if (c > 0 && null != p && null != f) {
              var m = !1;
              (f.append(
                p.getNameInfo(m) + h.GameText.getText(h.GameText.TI_ITEM_X) + c,
              ),
                t == d["default"].ADD_ITEM_BATTLE_REWARD &&
                  s.getMissionHaveItemDesc(p.id, f),
                t == d["default"].ADD_ITEM_USE_REWARD &&
                  p.isPetType() &&
                  f.append("\n" + h.GameText.STR_CONG_GET_NEW_PET),
                f.append("\n"));
            }
          }
          return (
            e.addMsgInfo(f.toString()),
            o["default"].sendNt(L.BagEvent.BAG_ITEM_FORGUID),
            o["default"].sendNt(L.MissionEvent.ON_MAIN_MISSION_UPDATE),
            g.length > 0 &&
              o["default"].sendNt(L.RoleEvent.ROLE_ARTIFACT_UP_RED, g),
            i
              ? (n &&
                  g &&
                  g.length &&
                  (B.GuideModel.ins.isGuide
                    ? console.log("===指引存在，不弹奖励")
                    : E["default"].showReward(g, h.GameText.REWARD_TITLE, a)),
                g)
              : f.toString()
          );
        }),
        (e.createTastAcceptMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_TASK_ACCEPT);
          return (i.putShort(e), i.putShort(t), i);
        }),
        (e.processMissionTeamDeliver = function (e) {
          var t = r["default"].myPlayer;
          if (null != t) {
            var i = e.getShort();
            if (!(0 > i)) {
              (this.processMissionNPCStatus(e),
                this.processMissionReward(t, i, e));
              var n = t.getMissionById(i);
              if (null != n) {
                var a = f.Tool.manageString(
                  h.GameText.STR_TEAM_MISSION_TO_MEM,
                  [n.name, n.dialogStartFinish],
                );
                (O["default"].addSystemChat(a),
                  w["default"].addChatMsg(
                    new w["default"](
                      a,
                      u["default"].CHAT_TYPE_SYSTEM,
                      -1,
                      "",
                      0,
                    ),
                    !1,
                  ),
                  t.deleteMission(n),
                  o["default"].sendNt(L.ChatEvent.ADD_MAIN_CHAT));
              }
              (r["default"].checkNPCRelaMissions(!1),
                t.isMember() &&
                  E["default"].alertMessage(h.GameText.STR_MEMBER_MAIL_TASK));
            }
          }
        }),
        (e.processMissionTeamMemberAccept = function (e) {
          var t = r["default"].myPlayer;
          if (null != t) {
            this.processMissionNPCStatus(e);
            var i = e.getBoolean();
            if (1 == i) {
              var n = e.getShort();
              if (0 > n) return;
              this.processMissionReward(t, n, e);
            } else {
              var a = e.getBytes(),
                s = _["default"].fromBytes(a);
              t.addMission(s);
              var l = f.Tool.manageString(
                h.GameText.STR_TEAM_ACCEPT_MISSION_TO_MEM,
                [s.name, s.desc],
              );
              (O["default"].addSystemChat(l),
                w["default"].addChatMsg(
                  new w["default"](l, u["default"].CHAT_TYPE_SYSTEM, -1, "", 0),
                  !1,
                ),
                o["default"].sendNt(L.ChatEvent.ADD_MAIN_CHAT));
            }
            r["default"].checkNPCRelaMissions(!1);
          }
        }),
        (e.processMissionNPCStatus = function (e) {
          for (var t = e.getByte(), i = [], n = 0; t > n; n++) {
            var a = e.getByte();
            i.push(a);
            var s = e.getByte(),
              l = r["default"].getNpcByID(a, !1);
            null != l && l.setSign(s);
          }
          o["default"].sendNt(P.SceneEvent.ON_NPC_SIGN_UPDATE, i);
        }),
        (e.cleanMsgTag = function () {
          ((this.sendMsgType = -1), (this.receiveMsg = null));
        }),
        (e.setMsgTag = function (e, t) {
          ((this.sendMsgType = e), (this.receiveMsg = t));
        }),
        (e.getSendMsgType = function () {
          return this.sendMsgType;
        }),
        (e.getReceiveMsg = function () {
          return this.receiveMsg;
        }),
        (e.processMessage = function (t, i) {
          var o = t.getByte();
          return 0 > o
            ? (E["default"].alertMessageGuide(t.getString(), i), !1)
            : (e.setMsgTag(t.getType(), t), !0);
        }),
        (e.sendRequest = function (e) {
          g["default"].Service.sendProto(e);
        }),
        (e.processReqAskMsg = function (e) {
          var t = e.getByte();
          if (0 != t) {
            var i = e.getString();
            return void w["default"].addChatSystemMsg(i, !0);
          }
          E["default"].alertMessage(h.GameText.STR_PK_OTHER_WAIT_INFO);
        }),
        (e.createWorldDataMessage = function (e, t) {
          void 0 === t && (t = !0);
          var i = new n.Message(d["default"].CG_SCENE_WORLDDATA),
            o = r["default"].getCurMapID();
          (i.putShort(o),
            i.putBoolean(t),
            i.putInt(e),
            i.putByte(0),
            i.putByte(0),
            g["default"].Service.sendProto(i));
        }),
        (e.processJumpCityMsg = function (t, i) {
          void 0 === i && (i = !0);
          var o = t.getByte();
          return 0 != o
            ? (i &&
                E["default"].alertMessage(
                  t.getString(),
                  h.GameText.getText(h.GameText.TI_ERROR),
                ),
              !1)
            : (this.processDataBlockFlagMsg(t),
              e.setMsgTag(t.getType(), t),
              E["default"].showMain(),
              !0);
        }),
        (e.createJumpCityMessage = function (e, t) {
          var i = new n.Message(d["default"].CG_SCENE_GO_CITY);
          return (i.putInt(e), i.putInt(t), i);
        }),
        (e.processBrowseCityInfoMsg = function (e, t) {
          var i = e.getByte();
          if (0 > i) {
            var o = e.getString();
            return (
              t != u["default"].viewType_auto_tab &&
                O["default"].addPromptMsg(
                  c["default"].makeColorString(o, f.Tool.COLOR_RED),
                ),
              !1
            );
          }
          return (this.setMsgTag(e.getType(), e), !0);
        }),
        (e.processMapUpdateMsg = function (t) {
          var i = t.getInt(),
            o = t.getByte(),
            n = t.getByte();
          if (r["default"].getCurMapID() == i) {
            var a = r["default"].myPlayer;
            null != a && a.setPosition(o, n);
          } else e.worldReflashType = e.WORLD_REFLASH_BASE;
        }),
        (e.createSetTeamMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_TEAM_SET);
          switch ((i.putByte(e), e)) {
            case d["default"].TEAM_SET_AUTO_JOIN:
              i.putByte(t);
              break;
            case d["default"].TEAM_SET_CHANGE_CAPTAIN:
              i.putInt(t);
              break;
            case d["default"].TEAM_SET_DISBAND:
              break;
            case d["default"].TEAM_SET_REMOVE_MEMBER:
              i.putInt(t);
          }
          return i;
        }),
        (e.createWorldDataReflashMsg = function (t) {
          var i = u["default"].REFRESH_DATA_FLAG,
            o = r["default"].getNPCList();
          ((!t && o && o.length) || (i |= u["default"].NEW_SCENE_DATA_FLAG),
            e.createWorldDataMessage(i, !0));
        }),
        (e.createCountryChangeName = function (e) {
          var t = this.createCountryBookMsg(
            u["default"].COUNTRY_COMMAND_CHANGE_NAME,
          );
          return (t.putString(e), t);
        }),
        (e.createCountryChangeResource = function (t, i, o) {
          var n = e.createCountryBookMsg(
            u["default"].COUNTRY_COMMAND_TRANSFER_RESOURCE,
          );
          return (n.putInt(t), n.putInt(i), n.putShort(o), n);
        }),
        (e.createCountryCreateWarCommand = function (t, i, o, n) {
          var a = e.createCountryBookMsg(
            u["default"].COUNTRY_COMMAND_CREATE_WAR,
          );
          return (a.putInt(t), a.putByte(i), a.putByte(o), a.putBoolean(n), a);
        }),
        (e.createCountryKingCommand = function (t) {
          var i = e.createCountryBookMsg(
            u["default"].COUNTRY_COMMAND_KING_COMMAND,
          );
          return (i.putByte(t), i);
        }),
        (e.createCountryAssignMission = function (e, t) {
          if (null == t) return null;
          var i = new n.Message(d["default"].CG_COUNTRY_ASSIGN_MISSION);
          (i.putShort(e), i.putByte(t.size()));
          for (var o = 0; o < t.size(); o++) i.putInt(t.elementAt(o));
          return i;
        }),
        (e.createCountryRecruitMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_COUNTRY_RECRUIT_CLOSE);
          return (
            1 == t && i.setType(d["default"].CG_COUNTRY_RECRUIT_OPEN),
            i.putInt(e),
            i
          );
        }),
        (e.createMonsterBookList = function (e, t, i) {
          (void 0 === t && (t = d["default"].PAGE_SIZE),
            void 0 === i && (i = d["default"].PAGE_NUM));
          var o = new n.Message(d["default"].CG_MONSTER_BOOK_LIST);
          return (o.putByte(e), o.putShort(t), o.putInt(i), o);
        }),
        (e.showPlayerShopRecordMsg = function (e) {
          for (
            var t = e.getShort(), i = new T["default"](), o = 0, n = 0, a = 0;
            t > a;
            a++
          ) {
            var r = e.getString(),
              s = e.getByte(),
              l = e.getInt();
            o += l;
            var u = e.getInt();
            n += u;
            var _ = e.getString(),
              d = e.getString();
            i.append(
              f.Tool.manageString(h.GameText.STR_PLAYER_SHOP_COST, [
                _ + "",
                d,
                (l > 0
                  ? c["default"].makeColorString(
                      h.GameText.STR_MONEY1 + l,
                      b["default"].COLOR_YELLOW,
                    )
                  : "") +
                  (u > 0
                    ? c["default"].makeColorString(
                        h.GameText.STR_MONEY3 + u,
                        b["default"].COLOR_MONEY3,
                      )
                    : ""),
                r + " x " + s,
              ]),
            );
          }
          return (
            (o > 0 || n > 0) &&
              i.append(
                b["default"].manageString(
                  h.GameText.STR_PLAYER_SHOP_ALL,
                  (o > 0
                    ? c["default"].makeColorString(
                        h.GameText.STR_MONEY1 + o,
                        b["default"].COLOR_YELLOW,
                      ) + " "
                    : "") +
                    (n > 0
                      ? c["default"].makeColorString(
                          h.GameText.STR_MONEY3 + n,
                          b["default"].COLOR_MONEY3,
                        ) + " "
                      : ""),
                ),
              ),
            i.toString()
          );
        }),
        (e.processModeChangeMessage = function (e) {
          var t = e.getInt(),
            i = e.getByte(),
            o = r["default"].getModel(t);
          null != o && o.setMode(i);
        }),
        (e.createMarryWishList = function (e, t) {
          (void 0 === e && (e = d["default"].PAGE_SIZE),
            void 0 === t && (t = d["default"].PAGE_NUM));
          var i = new n.Message(d["default"].CG_WEDDING_BLESSING);
          return (i.putByte(e), i.putShort(t), i);
        }),
        (e.processMercenaryNotifyMsg = function (e) {
          var t = e.getInt();
          if (t != r["default"].getPlayerID()) {
            var i = r["default"].getModel(t);
            if (null != i) {
              var o = e.getInt(),
                n = e.getByte();
              if (n == R["default"].SOLDIER_STATE_FIGHT) {
                var a = new R["default"]();
                ((a.groupId = o),
                  R["default"].fromBytesSimpleData(e, a),
                  i.addMercenary(a, !0));
              } else {
                var a = i.getMercenaryById(o);
                i.removeMercenary(a);
              }
            }
          }
        }),
        (e.getPlayerMaxVIpBegin = function () {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return -1 != A.ModelVo.maxVIP
                    ? [3, 2]
                    : ((t = o["default"].getProxy(
                        a.ModName.Role,
                        a.ProxyType.Role,
                      )),
                      (i = e.createPlayerMaxVIPMsg()),
                      [4, t.sendProtoAsync(i)]);
                case 1:
                  if ((r.sent(), (n = e.getReceiveMsg()), null == n))
                    return [2];
                  ((A.ModelVo.maxVIP = n.getByte()), (r.label = 2));
                case 2:
                  return [2];
              }
            });
          });
        }),
        (e.getMsgItem = function (e) {
          for (var t = e.getShort(), i = [], o = 0; t > o; o++) {
            var n = new G["default"]();
            ((n.quantity = e.getInt()),
              G["default"].fromBytesAtts2(n, e),
              (n.durability = n.durMax),
              i.push(n));
          }
          t = e.getShort();
          for (var o = 0; t > o; o++) {
            var n = new G["default"]();
            ((n.id = e.getInt()),
              (n.quantity = e.getInt()),
              (n.typeMoneyQuantity = n.quantity),
              (n.typeMoney = n.id),
              i.unshift(n));
          }
          return i;
        }),
        (e.sendGM = function (e) {
          var t = new n.Message(d["default"].CG_SYSTEM_TEST_OPER);
          (t.putString(e), g["default"].Service.sendProto(t));
        }),
        (e.createGetGM = function (e) {
          var t = new n.Message(d["default"].CG_SYSTEM_TEST_OPER);
          return (t.putString(e), t);
        }),
        (e.createWorldDataReflashPlayerMsg = function () {
          var t = u["default"].REFRESH_DATA_FLAG;
          e.createWorldDataMessage(t, !0);
        }),
        (e.createGetEquipIdentifyAttrMsg = function (e) {
          var t = new n.Message(d["default"].CG_EQUIP_IDENTIFY_ATTR);
          return (t.putInt(e), t);
        }),
        (e.createGetEquipPetLvMsg = function (e, t) {
          var i = new n.Message(d["default"].CG_PET_EQUIP_LV_INFO);
          return (i.putLong(e), i.putShort(t), i);
        }),
        (e.askForHelp = function (e, t, i) {
          return (
            void 0 === i && (i = !1),
            __awaiter(this, void 0, void 0, function () {
              var o, a, r;
              return __generator(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (e) {
                      if (
                        !i &&
                        Y["default"].timer.serverTime < this.forHelpTime
                      )
                        return (H.Tips.show("您求助太急！请稍后再求助"), [2]);
                      if (Y["default"].timer.serverTime < this.teamTime)
                        return (H.Tips.show("您求助太急！请稍后再求助"), [2]);
                    } else if (
                      Y["default"].timer.serverTime < this.battleforHelpTime
                    )
                      return (H.Tips.show("您求助太急！请稍后再求助"), [2]);
                    return (
                      (o = new n.Message(d["default"].CG_TEAM_HELP)),
                      o.putBoolean(e),
                      (a = Y["default"].timer.serverTime + 18e4),
                      e && o.putShort(t),
                      [4, W["default"].sendProtoAsync(o)]
                    );
                  case 1:
                    return (
                      (o = s.sent()),
                      (r = o.getInt()),
                      0 != r
                        ? (H.Tips.show(o.getString()), [2])
                        : (e
                            ? ((this.forHelpTime = a), i && (this.teamTime = a))
                            : (this.battleforHelpTime = a),
                          H.Tips.show(i ? "喊话成功" : "求助成功"),
                          [2])
                    );
                }
              });
            })
          );
        }),
        (e.forHelpTeamMsg = function (t) {
          if (r["default"].myPlayer.isPlayerTeam())
            return (
              E["default"].alertMessage(h.GameText.STR_JOINTEAM_IS_PLAYER_TEAM),
              !1
            );
          var i = e.createInviteTeamMsg(
            d["default"].TEAM_CREATE_TYPE_JOIN_ANYWHERE,
            t,
          );
          return (e.sendRequest(i), !0);
        }),
        (e.WORLD_REFLASH_NONE = 0),
        (e.WORLD_REFLASH_ALL = 1),
        (e.WORLD_REFLASH_BASE = 2),
        (e.worldReflashType = e.WORLD_REFLASH_NONE),
        (e.lastHeartBeat = 0),
        (e.nextHeartBeat = 0),
        (e.MAX_OTHER_MOVE_TO = 5),
        (e.CHECK_VERSION_NONE = 0),
        (e.CHECK_VERSION_LOW = 1),
        (e.PET_INFO_PLAYER_SHOP = 1),
        (e.PET_INFO_GOODS = 2),
        (e.PET_INFO_MAIL = 3),
        (e.PET_INFO_SEE_PLAYER = 4),
        (e.PET_INFO_CHAT = 5),
        (e.PET_INFO_PET_ID = 6),
        (e.sendMsgType = -1),
        (e.receiveMsg = null),
        (e.WAR_UNION_TYPE_UNION = 1),
        (e.WAR_UNION_TYPE_OTHER = 2),
        (e.WAR_UNION_TYPE_ALL = 3),
        (e.forHelpTime = 0),
        (e.teamTime = 0),
        (e.battleforHelpTime = 0),
        e
      );
    })();
  t["default"] = K;
});
