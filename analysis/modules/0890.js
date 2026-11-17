(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(43),
    a = i(22),
    r = i(11),
    s = i(2),
    l = i(0),
    u = i(4),
    _ = i(10),
    d = i(23),
    p = i(12),
    c = i(20),
    h = i(30),
    f = i(8),
    T = i(1),
    E = i(21),
    y = i(24),
    g = i(37),
    v = i(18),
    S = i(19),
    I = i(33),
    m = i(57),
    A = i(5),
    C = i(62),
    P = i(891),
    R = i(28),
    O = i(44),
    N = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return ((t.autoSellTitle = ""), t);
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
        (t.prototype.onConnectLost = function () {
          e.prototype.onConnectLost.call(this);
        }),
        (t.prototype.initialize = function () {
          ((this._data = new P.ShopModel()),
            e.prototype.initialize.call(this),
            this.onProto(
              S["default"].CG_GET_AUTO_SELL_LIST,
              this.onGetAutoSellList,
              this,
            ),
            this.onProto(S["default"].CG_AUTO_SELL, this.onGetAutoSell, this),
            this.onProto(
              S["default"].CG_PLAYERSHOP_SHOP_NOTIFY,
              this.onPlayerShopNotify,
              this,
            ),
            this.onProto(
              S["default"].CG_PLAYERSHOP_STOP,
              this.onPlayerShopStop,
              this,
            ),
            this.onProto(
              S["default"].CG_ENCHANTSHOP_STOP,
              this.onEnchantShopStop,
              this,
            ),
            this.onProto(
              S["default"].CG_PLAYERSHOP_SELL_NOTIFY,
              this.onPlayerShopSellNotify,
              this,
            ));
        }),
        (t.prototype.doGetItemLists = function (e) {
          (void 0 === e && (e = "出售"), (this.autoSellTitle = e));
          var t = A["default"].myPlayer;
          if (null != t) {
            var i = t.bag;
            if (null != i) {
              var o = new a.Message(S["default"].CG_GET_AUTO_SELL_LIST);
              n["default"].Service.sendProto(o);
            }
          }
        }),
        (t.prototype.onGetAutoSellList = function (e) {
          var t = A["default"].myPlayer;
          if (null != t) {
            var i = t.bag;
            if (null != i) {
              var o = e.body;
              if (null != o) {
                var n = o.getShort();
                if (!(1 > n)) {
                  for (var a = 0, r = new y["default"](), s = 0; n > s; s++) {
                    var l = (o.getString(), o.getShort()),
                      u = (o.getByte(), o.getShort()),
                      _ = (o.getInt(), o.getInt()),
                      d = i.getItem(u);
                    null != d && ((d.quantity = l), (a += _), r.addElement(d));
                  }
                  r.size() > 0 &&
                    (O.GuideModel.ins.isGuide ||
                      (T["default"].showSellItems(r, this.autoSellTitle),
                      (this.autoSellTitle = "")));
                }
              }
            }
          }
        }),
        (t.prototype.doSellItem = function (e) {
          var t = A["default"].myPlayer;
          if (null != t) {
            var i = t.bag;
            if (null != i) {
              var o = new a.Message(S["default"].CG_AUTO_SELL);
              o.putShort(e.size());
              for (var r = 0; r < e.size(); r++) {
                var s = e.elementAt(r);
                null != s &&
                  (o.putInt(s.id),
                  o.putShort(s.slotPos),
                  o.putShort(s.quantity));
              }
              n["default"].Service.sendProto(o);
            }
          }
        }),
        (t.prototype.onGetAutoSell = function (e) {
          var t = A["default"].myPlayer;
          if (null != t) {
            var i = t.bag;
            if (null != i) {
              var o = e.body;
              if (null != o) {
                var n = o.getShort();
                if (0 > n) return void T["default"].alertMessage(o.getString());
                for (var a = {}, r = "", u = 0; n > u; u++) {
                  var _ = o.getInt(),
                    p = o.getShort(),
                    c = o.getShort(),
                    h = i.getBagItemBySlotPos(c);
                  (a[_]
                    ? (a[_].num += p)
                    : ((a[_] = {}),
                      (a[_].itemName = h.getNameInfo()),
                      (a[_].num = p)),
                    i.removeBagItemByPos(c, p));
                }
                r += "\n";
                var E = 0;
                for (var y in a)
                  if (Object.prototype.hasOwnProperty.call(a, y)) {
                    ++E;
                    var g = a[y];
                    r +=
                      E % 3 == 0
                        ? g.itemName + " x" + g.num + "\n"
                        : g.itemName + " x" + g.num + "、";
                  }
                var v = o.getInt(),
                  S = o.getInt(),
                  I = o.getInt(),
                  m = o.getInt();
                ((t.money1 = v), (t.money2 = S), (t.money3 = I));
                var C = f.Tool.manageStringList(
                  d.GameText2.STR_AUTO_SELL_ALERT_INFO,
                  [r, m + " "],
                );
                (T["default"].showModal(
                  l.ModName.Shop,
                  l.ShopViewType.ShopAutoSellResult,
                  { str: C },
                ),
                  this.sendNt(s.ShopEvent.SHOP_SELL_SUCCESS));
              }
            }
          }
        }),
        (t.prototype.doOpenSkillShop = function (e) {
          if (R["default"].ins.getIsOpen(R.LevelOpenId.PlayerSkill, !0, e)) {
            var t = v["default"].createBrowseSkillShop(e);
            (n["default"].Service.onProto(
              S["default"].CG_SKILL_SHOP_LIST,
              r["default"].alloc(this, this.onGetSkillShopList, [e]),
            ),
              n["default"].Service.sendProto(t));
          }
        }),
        (t.prototype.onGetSkillShopList = function (e, t) {
          var i = t.body;
          if (null == i) return null;
          var o = i.getShort();
          if (o != e)
            return (
              T["default"].alertMessage(_.GameText.STR_SKILL_SHOP_ID_ERROR),
              null
            );
          var n = i.getByte();
          if (0 > n) return (T["default"].errorMessage(i.getString()), null);
          if (0 == n)
            return (
              T["default"].alertMessage(_.GameText.STR_SKILL_SHOP_SKILL_NULL),
              null
            );
          for (var a = i.getByte(), r = [], s = 0; n > s; s++) {
            var u = { skill: null, maxLevel: 0, isGuide: !1 },
              d = m["default"].fromShopBytes(i);
            u.skill = d;
            var p = i.getByte();
            ((u.maxLevel = p), r.push(u));
          }
          ((this.data.ShopSkillAndMaxList = r),
            (this.data.SkillMax = a),
            T["default"].showWin(l.ModName.Shop, l.ShopViewType.ShopSkill));
        }),
        (t.prototype.doCreateIntegral = function (e, t) {
          var i = this;
          if ((void 0 === t && (t = 1), null != e)) {
            var o = A["default"].myPlayer;
            if (null != o) {
              if (0 >= t)
                return (
                  T["default"].alertMessage(
                    _.GameText.STR_INTEGRAL_BUY_NUM_NULL,
                  ),
                  !1
                );
              var a = u["default"].isIntegralShop(A["default"].shopID),
                s = u["default"].isArenaShop(A["default"].shopID),
                l = u["default"].isSkyArenaShop(A["default"].shopID),
                d = u["default"].SHOP_TOWER_ID == A["default"].shopID,
                p = u["default"].SHOP_RED_PACKET == A["default"].shopID,
                h = u["default"].SHOP_PLA_SHOP_ID == A["default"].shopID,
                f = u["default"].SHOP_CAMPWAR_ID == A["default"].shopID,
                y = "";
              (a
                ? (y = c["default"].makeColorString(
                    E["default"].manageString(
                      _.GameText.STR_INTEGRAL_INFO,
                      e.integral * t + "",
                    ),
                    E["default"].COLOR_GREEN,
                  ))
                : s
                  ? (y = c["default"].makeColorString(
                      E["default"].manageString(
                        _.GameText.STR_INTEGRAL_ARENA_INFO,
                        e.arenaPoint * t + "",
                      ),
                      E["default"].COLOR_GREEN,
                    ))
                  : l
                    ? (y = c["default"].makeColorString(
                        E["default"].manageString(
                          _.GameText.STR_INTEGRAL_SKYARENA_INFO,
                          e.skyarenaPoint * t + "",
                        ),
                        E["default"].COLOR_GREEN,
                      ))
                    : d
                      ? (y = c["default"].makeColorString(
                          E["default"].manageString(
                            _.GameText.STR_INTEGRAL_TOWER_INFO,
                            e.towerPoint * t + "",
                          ),
                          E["default"].COLOR_GREEN,
                        ))
                      : p
                        ? (y = c["default"].makeColorString(
                            E["default"].manageString(
                              _.GameText.STR_INTEGRAL_REDPACKET_INFO,
                              e.redPacketPoint * t + "",
                            ),
                            E["default"].COLOR_GREEN,
                          ))
                        : h
                          ? (y = c["default"].makeColorString(
                              E["default"].manageString(
                                _.GameText.STR_PLA_INFO,
                                e.plaPoint * t + "",
                              ),
                              E["default"].COLOR_GREEN,
                            ))
                          : f &&
                            (y = c["default"].makeColorString(
                              E["default"].manageString(
                                _.GameText.STR_CAMPWAR_INFO,
                                e.campwarPoint * t + "",
                              ),
                              E["default"].COLOR_GREEN,
                            )),
                T["default"].alertImgMessage(
                  e,
                  E["default"].manageString2(_.GameText.STR_INTEGRAL_BUY_ASK, [
                    y,
                    "卍",
                    t + "",
                  ]),
                  _.GameText.STR_CMD_TYPE_INTEGRAL_BUY,
                  r["default"].alloc(
                    this,
                    function (e, t, o) {
                      (void 0 === t && (t = 1),
                        n["default"].Service.onProto(
                          S["default"].CG_ITEMSHOP_BUY_SCORE,
                          r["default"].alloc(i, i.createIntegralBuy, [e], !0),
                        ));
                      var a = v["default"].createIntegralBuy(
                        A["default"].shopID,
                        e.id,
                        t,
                      );
                      n["default"].Service.sendProto(a);
                    },
                    [e, t],
                  ),
                  [{ name: "确定", type: 1 }],
                ));
            }
          }
        }),
        (t.prototype.createIntegralBuy = function (e, t) {
          var i = t.body;
          if (null != i) {
            var o = i.getByte();
            if (0 > o) return (T["default"].errorMessage(i.getString()), !1);
            var n = A["default"].myPlayer,
              a = n.bag;
            if (null != a) {
              var r = u["default"].isIntegralShop(A["default"].shopID),
                l = u["default"].isArenaShop(A["default"].shopID),
                d = u["default"].isSkyArenaShop(A["default"].shopID),
                c = A["default"].shopID == u["default"].SHOP_RED_PACKET,
                h = u["default"].SHOP_PLA_SHOP_ID == A["default"].shopID,
                f = u["default"].SHOP_CAMPWAR_ID == A["default"].shopID,
                E = 0;
              if (2 == o) {
                var y = i.getInt();
                return (
                  r
                    ? ((E = p.ModelConst.INTEGRAL), (n.integral = y))
                    : l
                      ? ((E = u["default"].ARENA), (n.arenaPoint = y))
                      : d
                        ? ((E = u["default"].SKYARENA), (n.skyarenaPoint = y))
                        : c
                          ? ((E = u["default"].RED_PACKET),
                            (n.redPacketPoint = y))
                          : h
                            ? ((E = u["default"].TYPE_DEFEND_SCORE),
                              (n.plaPoint = y))
                            : f &&
                              ((E = u["default"].TYPE_CAMPWAR_SCORE),
                              (n.campWarPoint = y)),
                  (e.maxBuy = i.getShort()),
                  (e.allCount = i.getShort()),
                  !0
                );
              }
              if (0 != o) return !1;
              var g = i.getInt(),
                v = i.getShort(),
                S = i.getByte(),
                I = i.getInt();
              r
                ? ((n.integral = I), (E = p.ModelConst.INTEGRAL))
                : l
                  ? ((n.arenaPoint = I), (E = u["default"].ARENA))
                  : d
                    ? ((n.skyarenaPoint = I), (E = u["default"].SKYARENA))
                    : c
                      ? ((E = u["default"].RED_PACKET), (n.redPacketPoint = I))
                      : h
                        ? ((E = u["default"].TYPE_DEFEND_SCORE),
                          (n.plaPoint = I))
                        : f &&
                          ((E = u["default"].TYPE_CAMPWAR_SCORE),
                          (n.campWarPoint = I));
              var m = e.clone();
              ((m.status = e.status),
                m.setExpireTime(m.ownTime),
                (e.maxBuy = i.getShort()),
                (e.allCount = i.getShort()));
              var C = a.addItem_2(m, S);
              ((m.quantity = S),
                C != v &&
                  console.error(
                    "位置错误====addSlotPos:" + C + "======slotPos:" + v,
                  ),
                g != e.id &&
                  console.error(
                    "id错误====itemid:" + g + "======item.id:" + e.id,
                  ),
                T["default"].showReward(
                  [m],
                  _.GameText.STR_INTEGRAL_BUY_SUCCESS,
                ),
                this.sendNt(s.MainEvent.ON_PLAYER_ATTR_UPDATE, E),
                this.sendNt(s.ShopEvent.SHOP_BUY_INITEGRAL));
            }
          }
        }),
        (t.prototype.onPlayerShopStop = function (e) {
          var t = e.body,
            i = t.getByte();
          if (0 > i) return void T["default"].errorMessage(t.getString());
          var n = A["default"].myPlayer;
          if (null != n) {
            (n.setMoneyByType(p.ModelConst.MONEY1, t.getInt()),
              n.setMoneyByType(p.ModelConst.MONEY3, t.getInt()));
            var a = new h["default"](),
              r = v["default"].showPlayerShopRecordMsg(t);
            (1 == f.Tool.isNullText(r)
              ? a.append(_.GameText.STR_PLAYER_SHOP_SELL_NULL)
              : a.append(r),
              n.setShopMode(!1),
              I["default"].clearBagAllItemStatus(
                n,
                I["default"].CLEAR_BAG_SHOP_LOCKED,
              ),
              I["default"].clearBagAllItemStatus(
                n,
                I["default"].CLEAR_BAG_SELLING_STATUS,
              ),
              T["default"].alertMessage(
                a.toString(),
                _.GameText.STR_PLAYER_SHOP_OVER,
              ),
              v["default"].setMsgTag(S["default"].CG_PLAYERSHOP_STOP, t));
            var u = o["default"].getProxy(l.ModName.Bag, l.ProxyType.Bag);
            (u.data.resetShopList(),
              this.sendNt(s.ShopEvent.SHOP_SELFSHOP_STOP));
          }
        }),
        (t.prototype.onEnchantShopStop = function (e) {
          var t = e.body,
            i = t.getByte();
          if (0 > i) return void T["default"].errorMessage(t.getString());
          var o = A["default"].myPlayer;
          if (null != o) {
            (o.setMoneyByType(p.ModelConst.MONEY1, t.getInt()),
              o.setMoneyByType(p.ModelConst.MONEY3, t.getInt()));
            var n = new h["default"](),
              a = v["default"].showPlayerShopRecordMsg(t),
              r = t.getInt();
            (1 == f.Tool.isNullText(a)
              ? n.append(_.GameText.STR_PLAYER_SHOP_SELL_NULL)
              : n.append(a),
              r > 0 &&
                n.append(
                  E["default"].manageString(
                    d.GameText2.STR_ENCHANT_SHOP_USE_ENCNANT,
                    r + "",
                  ),
                ),
              o.setShopMode(!1),
              I["default"].clearBagAllItemStatus(
                o,
                I["default"].CLEAR_BAG_SHOP_LOCKED,
              ),
              I["default"].clearBagAllItemStatus(
                o,
                I["default"].CLEAR_BAG_SELLING_STATUS,
              ),
              T["default"].alertMessage(
                n.toString(),
                _.GameText.STR_PLAYER_SHOP_OVER,
              ),
              v["default"].setMsgTag(S["default"].CG_ENCHANTSHOP_STOP, t),
              this.sendNt(s.ShopEvent.SHOP_SELFSHOP_STOP));
          }
        }),
        (t.prototype.onPlayerShopNotify = function (e) {
          var t = e.body,
            i = t.getInt(),
            o = t.getString(),
            n = t.getByte(),
            a = A["default"].getModel(i);
          null != a && ((a.shopName = o), a.setShoptype(n), a.setShopMode(!0));
        }),
        (t.prototype.onPlayerShopSellNotify = function (e) {
          var t = e.body,
            i = t.getShort(),
            n = (t.getInt(), t.getByte()),
            a = (t.getInt(), t.getInt(), t.getBoolean()),
            r = 0;
          a && (r = t.getInt());
          var u = A["default"].myPlayer;
          if (null != u) {
            var d = u.bag;
            if (null != d) {
              var p =
                (d.removeBagItemByPos(i, n),
                o["default"].getProxy(l.ModName.Bag, l.ProxyType.Bag));
              (p.data.removeSelfShopItemForNum(i, n),
                a && u.setEnchantValue(u.getEnchantValue() - r),
                this.sendNt(s.ShopEvent.SHOP_SELFSHOP_SELL),
                C["default"].addSystemChat(_.GameText.STR_PLAYER_SHOP_REPLACE));
            }
          }
        }),
        t
      );
    })(g["default"]);
  t["default"] = N;
});
