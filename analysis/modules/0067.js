(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.ShopItem = void 0));
  var o = i(3),
    n = i(43),
    a = i(16),
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
    E = i(24),
    y = i(18),
    g = i(19),
    v = i(5),
    S = i(32),
    I = i(41),
    m = i(31),
    A = i(33),
    C = i(57),
    P = i(35),
    R = i(42),
    O = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.maxBuy = -1),
          (t.allCount = -1),
          (t.isSystemShopItem = !1),
          t
        );
      }
      return (
        __extends(t, e),
        (t.prototype.setCombinSkill = function (e) {
          this.combinSkillList = [];
          for (var t = e.getByte(), i = 0; t > i; i++) {
            var o = e.getBoolean();
            if (o) {
              var n = new C["default"]();
              (C["default"].fromBaseBytesForItem(e, n),
                this.combinSkillList.push(n));
            }
          }
        }),
        (t.prototype.getCombinSkill = function () {
          return this.combinSkillList && this.combinSkillList.length > 0
            ? this.combinSkillList
            : null;
        }),
        (t.prototype.setMoney = function (e, t) {
          switch (e) {
            case p.ModelConst.MONEY1:
              this.money1 = t;
              break;
            case p.ModelConst.MONEY2:
              this.money2 = t;
              break;
            case p.ModelConst.MONEY3:
              this.money3 = t;
          }
        }),
        (t.prototype.isCombin_AtoA = function () {
          return this.combinItemID == this.id;
        }),
        (t.prototype.ShopItem = function () {}),
        (t.prototype.getPriceO = function () {
          return this.oMoney1 > 0
            ? this.oMoney1
            : this.oMoney2 > 0
              ? this.oMoney2
              : this.oMoney3 > 0
                ? this.oMoney3
                : 0;
        }),
        (t.prototype.getPrice = function () {
          return this.money1 > 0
            ? this.money1
            : this.money2 > 0
              ? this.money2
              : this.money3 > 0
                ? this.money3
                : this.integral > 0
                  ? this.integral
                  : this.arenaPoint > 0
                    ? this.arenaPoint
                    : this.skyarenaPoint > 0
                      ? this.skyarenaPoint
                      : this.towerPoint > 0
                        ? this.towerPoint
                        : this.integral > 0
                          ? this.integral
                          : this.redPacketPoint > 0
                            ? this.redPacketPoint
                            : this.plaPoint > 0
                              ? this.plaPoint
                              : this.campwarPoint > 0
                                ? this.campwarPoint
                                : 0;
        }),
        (t.prototype.getMoneyType = function () {
          return this.money1 > 0
            ? p.ModelConst.MONEY1
            : this.money2 > 0
              ? p.ModelConst.MONEY2
              : this.money3 > 0
                ? p.ModelConst.MONEY3
                : this.skyarenaPoint > 0
                  ? u["default"].SKYARENA
                  : this.towerPoint > 0
                    ? u["default"].SCORE_TOWER
                    : this.richManPoint > 0
                      ? u["default"].RICHMAN_SCORE
                      : this.arenaPoint > 0
                        ? u["default"].ARENA
                        : this.integral > 0
                          ? p.ModelConst.INTEGRAL
                          : this.redPacketPoint > 0
                            ? u["default"].RED_PACKET
                            : this.plaPoint > 0
                              ? u["default"].TYPE_DEFEND_SCORE
                              : this.campwarPoint > 0
                                ? u["default"].TYPE_CAMPWAR_SCORE
                                : this.specialData
                                  ? this.specialData.type
                                  : 0;
        }),
        Object.defineProperty(t.prototype, "specialData", {
          get: function () {
            return this._specialData;
          },
          set: function (e) {
            if (e) {
              var t = this._specialData;
              if (t && t.type != e.type)
                return void console.warn(
                  "积分类型被替换了,由原来的" + t.type + "变成了" + e.type,
                );
            }
            this._specialData = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getMoneyStringByQuantity = function (e) {
          var t = new h["default"]();
          return (
            this.money1 > 0 &&
              t.append(
                c["default"].makeColorString(
                  _.GameText.STR_MONEY1 + this.money1 * e,
                  f.Tool.COLOR_YELLOW,
                ),
              ),
            this.money2 > 0 &&
              t.append(
                c["default"].makeColorString(
                  _.GameText.STR_MONEY2 + this.money2 * e,
                  f.Tool.COLOR_MONEY2,
                ),
              ),
            this.money3 > 0 &&
              t.append(
                c["default"].makeColorString(
                  _.GameText.STR_MONEY3 + this.money3 * e,
                  f.Tool.COLOR_MONEY3,
                ),
              ),
            t.toString()
          );
        }),
        (t.prototype.getMoneyString = function () {
          var e = new h["default"]();
          return (
            this.money1 > 0 &&
              e.append(
                c["default"].makeColorString(
                  _.GameText.STR_MONEY1 + this.money1,
                  f.Tool.COLOR_YELLOW,
                ),
              ),
            this.money2 > 0 &&
              e.append(
                c["default"].makeColorString(
                  _.GameText.STR_MONEY2 + this.money2,
                  f.Tool.COLOR_MONEY2,
                ),
              ),
            this.money3 > 0 &&
              e.append(
                c["default"].makeColorString(
                  _.GameText.STR_MONEY3 + this.money3,
                  f.Tool.COLOR_MONEY3,
                ),
              ),
            e.toString()
          );
        }),
        (t.fromBytesCountryStoreItem = function (e) {
          try {
            var i = new t();
            return (
              (i.uid = e.getLong()),
              (i.honor = e.getInt()),
              S["default"].fromBytesAtts1(i, e),
              S["default"].fromBytesAtts2(i, e),
              (i.slotPos = -1),
              i
            );
          } catch (o) {
            return (console.error(o), null);
          }
        }),
        (t.prototype.getTimeStr = function () {
          if (1 == this.isSystemShopItem) {
            var t = f.Tool.getTimeStrByMin(this.ownTime, !0);
            return t;
          }
          return e.prototype.getTimeStr.call(this);
        }),
        (t.prototype.getPowerDesc = function (e, t) {
          return u["default"].getPowerDesc(e, t);
        }),
        (t.fromBytesShopItem = function (e, i) {
          var o = new t();
          o.isSystemShopItem = !0;
          try {
            (S["default"].fromBytesAtts2(o, e),
              (o.viewOrder = e.getByte()),
              (o.oMoney1 = e.getInt()),
              (o.oMoney2 = e.getInt()),
              (o.oMoney3 = e.getInt()),
              (o.discount = e.getByte()),
              (o.money1 = e.getInt()),
              (o.money2 = e.getInt()),
              (o.money3 = e.getInt()),
              (o.status = e.getByte()),
              (o.maxBuy = e.getShort()),
              (o.allCount = e.getShort()),
              (o.hotTypeOrNewItem = e.getByte()),
              (o.typeForShop = e.getByte()),
              (o.durability = o.durMax));
            var n = e.getBoolean();
            if (n) {
              var a = e.getString(),
                r = e.getString();
              ((o.startTime = Number(a)), (o.endTime = Number(r)));
            } else ((o.startTime = 0), (o.endTime = 0));
          } catch (s) {
            console.error(s);
          }
          return o;
        }),
        (t.fromBytesPlayerShopItem = function (e) {
          var i = new t();
          try {
            (S["default"].fromBytesAtts1(i, e),
              S["default"].fromBytesAtts2(i, e),
              (i.quantity = e.getByte()),
              (i.money1 = e.getInt()),
              (i.money3 = e.getInt()));
          } catch (o) {
            console.error(o);
          }
          return i;
        }),
        (t.fromBytesGoodsItem = function (e) {
          var i = new t();
          try {
            (S["default"].fromBytesAtts1(i, e),
              S["default"].fromBytesAtts2(i, e),
              (i.goodId = e.getLong()),
              (i.quantity = e.getByte()),
              (i.money1 = e.getInt()),
              (i.money3 = e.getInt()));
            var o = e.getLong();
            i.expireTime = o.toNumber();
          } catch (n) {
            console.error(n);
          }
          return i;
        }),
        (t.fromBytesGoodsPurchaseItem = function (e, i) {
          var o = new t();
          try {
            (S["default"].fromBytesAtts2(o, e),
              (o.goodId = e.getLong()),
              (o.quantity = e.getShort()),
              i &&
                ((o.goodPurchaseCount = e.getShort()),
                (o.quantity += o.goodPurchaseCount)),
              (o.money1 = e.getInt()),
              (o.money3 = e.getInt()),
              (o.expireTime = e.getShort()));
          } catch (n) {
            console.error(n);
          }
          return o;
        }),
        (t.prototype.getDesc = function (t, i, o, n) {
          (void 0 === t && (t = null),
            void 0 === i && (i = -1),
            void 0 === o && (o = !1),
            void 0 === n && (n = 24));
          var a = "";
          return (
            this.money1 > 0 &&
              (a += c["default"].makeColorString(
                " " + m.ModelVo.getMoneyText(p.ModelConst.MONEY1) + this.money1,
                f.Tool.COLOR_YELLOW,
              )),
            this.money2 > 0 &&
              (a += c["default"].makeColorString(
                " " + m.ModelVo.getMoneyText(p.ModelConst.MONEY2) + this.money2,
                f.Tool.COLOR_MONEY2,
              )),
            this.money3 > 0 &&
              (a += c["default"].makeColorString(
                " " + m.ModelVo.getMoneyText(p.ModelConst.MONEY3) + this.money3,
                f.Tool.COLOR_MONEY3,
              )),
            0 == f.Tool.isNullText(a) &&
              (a = this.videoShop
                ? "免费\n"
                : f.Tool.manageString(
                    _.GameText.STR_SHOP_ITEM_PRICE,
                    a + "\n",
                  )),
            this.maxBuy >= 0 &&
              (a +=
                f.Tool.manageString(
                  _.GameText.STR_ITEM_MAXBUY_INFO,
                  c["default"].makeColorString(
                    this.maxBuy + "",
                    0 == this.maxBuy ? f.Tool.COLOR_RED : f.Tool.COLOR_GREEN,
                  ),
                ) + "  "),
            this.allCount >= 0 &&
              (a +=
                f.Tool.manageString(
                  _.GameText.STR_ITEM_ALLCOUNT_INFO,
                  c["default"].makeColorString(
                    this.allCount + "",
                    0 == this.allCount ? f.Tool.COLOR_RED : f.Tool.COLOR_GREEN,
                  ),
                ) + "\n"),
            a + e.prototype.getDesc.call(this, t, i, o, n)
          );
        }),
        (t.prototype.getItemDesc = function (t, i, o, n) {
          return (
            void 0 === i && (i = -1),
            void 0 === o && (o = !1),
            void 0 === n && (n = 24),
            e.prototype.getDesc.call(this, t, i, o, n)
          );
        }),
        (t.prototype.getCombinDesc = function (e, t, i, o) {
          if (
            (void 0 === i && (i = !1),
            void 0 === o && (o = 1),
            null == e || null == e.bag)
          )
            return "";
          var n = _.GameText.STR_SHOP_ITEM_COMBIN_MATERIAL + "\n",
            a = this.getMoneyStringByQuantity(o);
          if (
            (0 == f.Tool.isNullText(a) && (n += a + "\n"),
            null != this.extraList && !this.extraList.isEmpty())
          )
            for (var r = 0; r < this.extraList.size(); r++) {
              var s = this.extraList.elementAt(r);
              if (null != s) {
                var l = e.bag.getItemNumByID(s.id);
                ((n += c["default"].makeColorString(
                  s.name + " x " + s.quantity * o,
                  u["default"].getGradeColor(s.grade),
                )),
                  (n +=
                    s.quantity > l
                      ? c["default"].makeColorString(
                          " " +
                            f.Tool.manageString(
                              _.GameText.STR_SHOP_ITEM_COMBIN_NOW_HAVA,
                              l + "",
                            ),
                          f.Tool.COLOR_RED,
                        )
                      : " " +
                        f.Tool.manageString(
                          _.GameText.STR_SHOP_ITEM_COMBIN_NOW_HAVA,
                          l + "",
                        )),
                  (n += "\n"));
              }
            }
          if (1 == t) {
            var p = _.GameText.STR_SHOP_ITEM_COMBIN_ALL;
            (i && (p = d.GameText2.STR_EQ_UPGRADE_ITEM_COMBIN_ALL),
              (n += "\n" + p),
              (n += "\n卍"),
              i &&
                (n += "\n" + d.GameText2.STR_EQ_UPGRADE_ITEM_COMBIN_ALL_INFO));
          }
          return n;
        }),
        (t.reduceMoney = function (e, t, i, o) {
          null != e &&
            (e.addValue(p.ModelConst.MONEY1, t),
            e.addValue(p.ModelConst.MONEY2, i),
            e.addValue(p.ModelConst.MONEY3, o));
        }),
        (t.doItemShopBuyMsg = function (e, i, o) {
          if (null != e && null != i && i instanceof t) {
            var n = v["default"].shopID,
              a = o * i.money1,
              s = o * i.money2,
              l = o * i.money3;
            if ((o > 1 && a > 0) || a >= 40 || s >= 100) {
              var u = new h["default"]();
              (a > 0 && u.append(_.GameText.STR_MONEY1 + a),
                s > 0 && u.append(" " + _.GameText.STR_MONEY2 + s),
                l > 0 && u.append(" " + _.GameText.STR_MONEY3 + l));
              var d = f.Tool.manageStringList(
                _.GameText.STR_SHOP_ITEM_USE_MONEY_BUY_ASK,
                [i.name + " " + o, u.toString()],
              );
              return void T["default"].alertMessage(
                d,
                _.GameText.getText(_.GameText.TI_WARM_SHOW),
                r["default"].alloc(this, t.doItemShopBuyMsgAlert, [
                  a,
                  s,
                  l,
                  e,
                  n,
                  i,
                  o,
                ]),
              );
            }
            t.doItemShopBuyMsgAlert(a, s, l, e, n, i, o);
          }
        }),
        (t.doItemShopBuyMsgAlert = function (e, i, o, a, s, l, u) {
          return __awaiter(this, void 0, Promise, function () {
            var _, d;
            return __generator(this, function (p) {
              switch (p.label) {
                case 0:
                  return [4, f.Tool.checkEnoughMoney(e, i, o)];
                case 1:
                  return 0 == p.sent()
                    ? [2, !0]
                    : ((_ = a.bag),
                      null == _
                        ? [2]
                        : (n["default"].Service.onProto(
                            g["default"].CG_ITEMSHOP_BUY,
                            r["default"].alloc(this, t.onItemShopBuy, [
                              a,
                              l,
                              u,
                            ]),
                          ),
                          (d = y["default"].createItemShopBuy(s, l, u)),
                          n["default"].Service.sendProto(d),
                          [2, !0]));
              }
            });
          });
        }),
        (t.onItemShopBuy = function (e, t, i, n) {
          var d = n.body;
          if (null == d)
            return void console.error("onItemShopBuy >>> msg == null");
          var p = d.getByte();
          if (0 > p) {
            var c = d.getString();
            if (-14 == p) {
              var E = _.GameText.STR_VIP;
              v["default"].isQQVip && (E = _.GameText.STR_QQ_DIAMOND);
              var y = f.Tool.manageStringList(_.GameText.STR_VIP_SHOP_NOT_VIP, [
                E,
                E,
                E,
              ]);
              if (null == e.bag) return;
              var g = e.bag.getItem(A["default"].SPIRIT_POS);
              if (null == g) return;
              var C = g.expireTime - a["default"].timer.serverTime;
              (e.getVipLevel() > 0 &&
                0 >= C &&
                (y = f.Tool.manageStringList(_.GameText.STR_VIP_SHOP_RENEWAL, [
                  E,
                  E,
                  E,
                ])),
                0 >= C &&
                  T["default"].alertMessage(
                    y,
                    _.GameText.getText(_.GameText.TI_WARM_SHOW),
                    r["default"].alloc(
                      this,
                      function () {
                        var e = v["default"].myPlayer,
                          t = e.bag,
                          i = t.getItem(A["default"].SPIRIT_POS);
                        i &&
                          o["default"].showView(
                            l.ModName.Bag,
                            l.BagViewType.BagUserView,
                            i,
                          );
                      },
                      null,
                      !0,
                    ),
                    "确定",
                    null,
                    "取消",
                  ));
            } else
              -19 == p
                ? I["default"].doSuperQQNotice()
                : T["default"].errorMessage(c);
          } else {
            if (1 == p)
              return void T["default"].alertMessage(
                _.GameText.STR_COUNTRY_PRICE_ADUST,
              );
            if (2 == p) {
              u["default"].isHairItem(t.id)
                ? (e.updateHair(t), e.refreshWorldSprite())
                : u["default"].isFaceItem(t.id) &&
                  (e.updateFace(t), e.refreshWorldSprite());
              var P = new h["default"]();
              (m.ModelVo.setPlayerMoney(d.getInt(), d.getInt(), d.getInt(), P),
                (t.maxBuy = d.getShort()),
                (t.allCount = d.getShort()));
              var R =
                _.GameText.STR_SHOPITEM_BUY_SUCCESS +
                t.getNameInfo() +
                "\n" +
                P.toString();
              return void T["default"].alertMessage(R);
            }
            if (0 != p)
              return void console.error(" 购买商品为成功，请查看代码");
            var O = d.getInt(),
              N = (d.getShort(), d.getByte()),
              M = d.getInt(),
              L = d.getInt(),
              w = d.getInt();
            if (
              ((t.maxBuy = d.getShort()),
              (t.allCount = d.getShort()),
              O != t.id || N != i)
            )
              return void console.error("购买返回的服务器数据物品ID和数量错误");
            var b = t.clone();
            ((b.status = t.status),
              b.setExpireTime(b.ownTime),
              b.type == u["default"].ITEM_TYPE_SEAL &&
                S["default"].class_seal(d, b));
            var x = e.bag;
            if (null != x) {
              var D = (x.addItem_2(b, i), new h["default"]());
              m.ModelVo.setPlayerMoney(M, L, w, D);
              var B = "";
              ((B = t.videoShop
                ? "成功获得" +
                  t.getNameInfo() +
                  _.GameText.getText(_.GameText.TI_ITEM_X) +
                  i
                : _.GameText.STR_SHOPITEM_BUY_SUCCESS +
                  t.getNameInfo() +
                  _.GameText.getText(_.GameText.TI_ITEM_X) +
                  i +
                  "\n" +
                  D.toString()),
                T["default"].alertMessage(B),
                o["default"].sendNt(s.RoleEvent.ROLE_ARTIFACT_UP_RED, [b]));
              var G = o["default"].getProxy(l.ModName.Shop, l.ProxyType.Shop);
              G.sendNt(s.ShopEvent.SHOP_BUY_SUCCESS);
            }
          }
        }),
        (t.doItemShopSellMsg = function (e, i, o) {
          return __awaiter(this, void 0, Promise, function () {
            var a, s, l, d, p;
            return __generator(this, function (c) {
              switch (c.label) {
                case 0:
                  return null == i ? [2] : [4, R["default"].getItemPetEquip(i)];
                case 1:
                  return (a = c.sent())
                    ? (T["default"].alertMessage(_.GameText.STR_PET_IS_EQUIP),
                      [2])
                    : ((s = e.bag),
                      null == s
                        ? [2]
                        : i.grade >= u["default"].GRADE_3
                          ? [
                              4,
                              T["default"].waitForTwiceSureUI(
                                f.Tool.manageString(
                                  _.GameText.STR_SHOP_ITEM_SELL_ASK,
                                  i.getNameInfo(),
                                ),
                                _.GameText.getText(_.GameText.TI_WARM_SHOW),
                              ),
                            ]
                          : [3, 3]);
                case 2:
                  if (((l = c.sent()), !l)) return [2];
                  c.label = 3;
                case 3:
                  return (
                    (d = v["default"].shopID),
                    n["default"].Service.onProto(
                      g["default"].CG_ITEMSHOP_SELL,
                      r["default"].alloc(this, t.onItemShopSell, [e, i, o]),
                    ),
                    (p = y["default"].createItemShopSell(
                      d,
                      i.id,
                      i.slotPos,
                      o,
                    )),
                    n["default"].Service.sendProto(p),
                    [2]
                  );
              }
            });
          });
        }),
        (t.onItemShopSell = function (e, t, i, n) {
          var a = n.body,
            r = a.getByte();
          if (0 > r)
            return void T["default"].alertMessage(
              a.getString(),
              _.GameText.getText(_.GameText.TI_WARM_SHOW),
            );
          var u = a.getInt();
          if (null != e) {
            e.setMoneyByType(p.ModelConst.MONEY3, u);
            var d = e.bag;
            if (null == d)
              return void console.error("bag == null  >>>  onItemShopSell");
            (d.removeBagItemByPos(t.slotPos, i),
              T["default"].alertMessage(
                _.GameText.STR_SHOPITEM_SELL_SUCCESS +
                  t.getNameInfo() +
                  _.GameText.getText(_.GameText.TI_ITEM_X) +
                  i,
              ));
            var c = o["default"].getProxy(l.ModName.Shop, l.ProxyType.Shop);
            (o["default"].sendNt(s.RoleEvent.ROLE_ARTIFACT_UP_RED, [t]),
              c.sendNt(s.ShopEvent.SHOP_SELL_SUCCESS),
              c.sendNt(s.BagEvent.BAG_ITEM_UPDATE));
          }
        }),
        (t.getShopItemList = function (e, i, n) {
          return (
            void 0 === i && (i = !1),
            __awaiter(this, void 0, void 0, function () {
              var a, r, d, p, c, h, f, g, S, I, m, A;
              return __generator(this, function (C) {
                switch (C.label) {
                  case 0:
                    return (
                      (a = y["default"].createItemShopListMsg(e)),
                      [4, P["default"].sendProtoAsync(a)]
                    );
                  case 1:
                    if (((r = C.sent()), null == r)) return [2, null];
                    if (((d = r.getByte()), 0 != d))
                      return (
                        T["default"].alertMessage(
                          r.getString(),
                          _.GameText.getText(_.GameText.TI_ERROR),
                        ),
                        [2]
                      );
                    if (((p = 255 & r.getShort()), 0 >= p))
                      return (
                        console.error(
                          "ShopItem.getShopItemList() item size = 0???",
                        ),
                        [2, null]
                      );
                    for (c = new E["default"](), h = 0; p > h; h++)
                      ((f = t.fromBytesShopItem(r, e)), c.addElement(f));
                    return (
                      (g = o["default"].getProxy(
                        l.ModName.Shop,
                        l.ProxyType.Shop,
                      )),
                      (S = g.data),
                      c.arr.sort(function (e, t) {
                        return e.viewOrder - t.viewOrder;
                      }),
                      [4, v["default"].doGetItemSuit(c.arr)]
                    );
                  case 2:
                    if ((C.sent(), S.setShopItemList(c, e), n)) {
                      for (I = 0, m = c.arr; I < m.length; I++)
                        if (((A = m[I]), A && A.id == n))
                          return (
                            T["default"].showModal(
                              l.ModName.Shop,
                              l.ShopViewType.ShopNewBuyAlert,
                              { shopItem: A },
                            ),
                            [2]
                          );
                      if (e == u["default"].SHOP_TYPE_50)
                        return (
                          T["default"].showWin(
                            l.ModName.Shop,
                            l.ShopViewType.ShopMainNew,
                          ),
                          [2]
                        );
                    }
                    return (
                      i
                        ? o["default"].sendNt(s.ShopEvent.SHOP_VIP_CHANGED)
                        : T["default"].showWin(
                            l.ModName.Shop,
                            l.ShopViewType.ShopMain,
                          ),
                      [2]
                    );
                }
              });
            })
          );
        }),
        (t.openItemShop = function (e, i, o) {
          (void 0 === i && (i = !1),
            (v["default"].shopID = e),
            t.getShopItemList(e, i, o));
        }),
        (t.getItemShop = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, t.getShopItemList(e, !0)];
                case 1:
                  return (i.sent(), [2]);
              }
            });
          });
        }),
        (t.doPlayerShopStartMsg = function (e, t, i, n) {
          return __awaiter(this, void 0, Promise, function () {
            var a, r, l, p, c, h, f;
            return __generator(this, function (E) {
              switch (E.label) {
                case 0:
                  return null == i || i.length <= 0
                    ? [2, !1]
                    : null == t
                      ? [2, !1]
                      : ((a = t.bag),
                        null == a
                          ? [2, !1]
                          : ((r = null),
                            (r = n
                              ? y["default"].createPlayerEnchantShopStartMsg(
                                  e,
                                  i,
                                )
                              : y["default"].createPlayerShopStartMsg(e, i)),
                            null == r
                              ? [2, !1]
                              : [4, P["default"].sendProtoAsync(r)]));
                case 1:
                  if (((l = E.sent()), null == l)) return [2, !1];
                  if (((p = l.getByte()), 0 > p))
                    return (T["default"].errorMessage(l.getString()), [2]);
                  for (
                    t.setShopMode(!0), t.shopName = e, c = 0;
                    c < i.length;
                    c++
                  )
                    ((h = i[c]),
                      null != h &&
                        ((f = a.getItem(h.slotPos)),
                        null != f && f.setShopLocked(!0)));
                  return (
                    n
                      ? (t.setShoptype(u["default"].PLAYER_SHOP_TYPE_ENCHANT),
                        T["default"].alertMessage(
                          d.GameText2.STR_ENCHANT_START_SUCCESS,
                        ))
                      : (t.setShoptype(u["default"].PLAYER_SHOP_TYPE_NORMAL),
                        T["default"].alertMessage(
                          _.GameText.STR_SHOP_ITEM_SHOP_INFO,
                          _.GameText.getText(_.GameText.TI_SHOP_START),
                        )),
                    o["default"].sendNt(s.ShopEvent.SHOP_SELFSHOP_OPEN),
                    [2, !0]
                  );
              }
            });
          });
        }),
        (t.doPlayerShopListMsg = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var i, n, a, r, s, d, p, c;
            return __generator(this, function (h) {
              switch (h.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : ((i = null),
                      u["default"].PLAYER_SHOP_TYPE_NORMAL == e.getShoptype()
                        ? (i = y["default"].createPlayerShopItemListMsg(
                            e.getId(),
                          ))
                        : u["default"].PLAYER_SHOP_TYPE_ENCHANT ==
                            e.getShoptype() &&
                          (i = y["default"].createPlayerEnchantShopItemListMsg(
                            e.getId(),
                          )),
                      (n = o["default"].getProxy(
                        l.ModName.Shop,
                        l.ProxyType.Shop,
                      )),
                      [4, n.sendProtoAsync(i)]);
                case 1:
                  if ((h.sent(), (a = y["default"].getReceiveMsg()), null == a))
                    return [2, !1];
                  if (((r = a.getString()), (s = a.getShort()), 0 >= s))
                    return [2, !1];
                  for (d = new E["default"](), p = 0; s > p; p++)
                    ((c = t.fromBytesPlayerShopItem(a)),
                      c.setShopLocked(!1),
                      d.addElement(c));
                  return null == d || d.size() <= 0
                    ? (T["default"].alertMessage(
                        _.GameText.STR_SHOP_ITEM_SHOP_NULL,
                      ),
                      [2, !1])
                    : [4, v["default"].doGetItemSuit(d.arr)];
                case 2:
                  if (
                    (h.sent(),
                    u["default"].PLAYER_SHOP_TYPE_NORMAL == e.getShoptype())
                  )
                    (n.data.setShopItemList(d),
                      T["default"].showWin(
                        l.ModName.Shop,
                        l.ShopViewType.ShopOfPlayer,
                        { model: e },
                      ));
                  else {
                    if (
                      u["default"].PLAYER_SHOP_TYPE_ENCHANT != e.getShoptype()
                    )
                      return [2, !1];
                    (n.data.setShopItemList(d),
                      T["default"].showWin(
                        l.ModName.Shop,
                        l.ShopViewType.ShopOfPlayerEnchant,
                        { model: e },
                      ));
                  }
                  return [2, !0];
              }
            });
          });
        }),
        (t.doPlayerShopBuyMsg = function (e, t, i) {
          return __awaiter(this, void 0, Promise, function () {
            var n, a, r, s, u, _, d;
            return __generator(this, function (c) {
              switch (c.label) {
                case 0:
                  return null == e || null == t
                    ? [2, !1]
                    : ((n = v["default"].myPlayer),
                      null == n
                        ? [2, !1]
                        : ((a = n.bag),
                          null == a
                            ? [2, !1]
                            : ((r = t.clone()),
                              t.setVarItemDataTo(r),
                              r.setShopLocked(!1),
                              (r.quantity = i),
                              (s = y["default"].createPlayerShopBuyMsg(
                                e.getId(),
                                r,
                              )),
                              (u = o["default"].getProxy(
                                l.ModName.Shop,
                                l.ProxyType.Shop,
                              )),
                              [4, u.sendProtoAsync(s)])));
                case 1:
                  return (
                    c.sent(),
                    (_ = y["default"].getReceiveMsg()),
                    null == _
                      ? [2, !1]
                      : ((d = _.getByte()),
                        0 > d
                          ? (T["default"].errorMessage(_.getString()), [2, !1])
                          : (n.setMoneyByType(p.ModelConst.MONEY1, _.getInt()),
                            n.setMoneyByType(p.ModelConst.MONEY3, _.getInt()),
                            a.addItem_1(r),
                            [2, !0]))
                  );
              }
            });
          });
        }),
        (t.doGoodsSellFindMsg = function (e, i, n) {
          return (
            void 0 === i && (i = g["default"].PAGE_SIZE),
            void 0 === n && (n = g["default"].PAGE_NUM),
            __awaiter(this, void 0, Promise, function () {
              var a, r, l, u, _, d, p, c, h, f, E, g, S, I;
              return __generator(this, function (m) {
                switch (m.label) {
                  case 0:
                    return null == e
                      ? [2, null]
                      : 6 != e.length
                        ? [2, null]
                        : ((a = e[0]),
                          (r = e[1]),
                          (l = e[2]),
                          (u = e[3]),
                          (_ = e[4]),
                          (d = e[5]),
                          (p = y["default"].createGoodsSellFind(
                            a,
                            r,
                            l,
                            u,
                            _,
                            d,
                            i,
                            n,
                          )),
                          [4, P["default"].sendProtoAsync(p)]);
                  case 1:
                    if (((c = m.sent()), null == c)) return [2, null];
                    if (((h = c.getInt()), 0 > h))
                      return (T["default"].alertMessage(c.getString()), [2]);
                    for (
                      c.reset(),
                        f = c.getInt(),
                        E = [],
                        g = c.getShort(),
                        S = 0;
                      g > S;
                      S++
                    )
                      ((I = t.fromBytesGoodsItem(c)), E.push(I));
                    return (
                      v["default"].doGetItemSuit(E),
                      o["default"].sendNt(s.ShopEvent.GOOD_SELL_FIND, E),
                      [2, E]
                    );
                }
              });
            })
          );
        }),
        (t.doGoodsSellListMsg = function () {
          return __awaiter(this, void 0, Promise, function () {
            var e, i, n, a, r, u, _, d;
            return __generator(this, function (p) {
              switch (p.label) {
                case 0:
                  return (
                    (e = o["default"].getProxy(
                      l.ModName.Shop,
                      l.ProxyType.Shop,
                    )),
                    (i = y["default"].createGoodsSellList()),
                    [4, e.sendProtoAsync(i)]
                  );
                case 1:
                  if ((p.sent(), (n = y["default"].getReceiveMsg()), null == n))
                    return [2, null];
                  if (((a = []), (r = n.getByte())))
                    return (
                      T["default"].alertMessage(n.getString()),
                      [2, null]
                    );
                  for (u = n.getByte(), _ = 0; u > _; _++)
                    ((d = t.fromBytesGoodsItem(n)), a.push(d));
                  return [4, v["default"].doGetItemSuit(a)];
                case 2:
                  return (
                    p.sent(),
                    e.sendNt(s.ShopEvent.GOOD_SELF_SELL_LIST, a),
                    [2, a]
                  );
              }
            });
          });
        }),
        (t.doGoodsSellSubmitMsg = function (e, i, n, a, r) {
          return __awaiter(this, void 0, Promise, function () {
            var d, p, c, h, f;
            return __generator(this, function (E) {
              switch (E.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : ((d = e.bag),
                      null == d
                        ? [2, !1]
                        : null == i
                          ? [2, !1]
                          : ((p = o["default"].getProxy(
                              l.ModName.Shop,
                              l.ProxyType.Shop,
                            )),
                            (c = y["default"].createGoodsSellSubmit(
                              i,
                              n,
                              a,
                              r,
                            )),
                            [4, p.sendProtoAsync(c)]));
                case 1:
                  return (
                    E.sent(),
                    (h = y["default"].getReceiveMsg()),
                    null == h
                      ? [2, !1]
                      : ((f = h.getByte()),
                        0 > f
                          ? (T["default"].alertMessage(h.getString()), [2, !1])
                          : ((f = d.removeBagItemByPos(i.slotPos, n)),
                            f != u["default"].SUCCESS,
                            T["default"].alertMessage(
                              _.GameText.STR_GOODS_SELL_SUCCESS,
                            ),
                            p.sendNt(s.ShopEvent.GOOD_UP_SELL),
                            t.doGoodsSellListMsg(),
                            [2, !0]))
                  );
              }
            });
          });
        }),
        (t.doGoodsSellRetrieveMsg = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, a, r;
            return __generator(this, function (u) {
              switch (u.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : ((t = e.goodId),
                      t.toNumber() <= 0
                        ? [2, !1]
                        : ((i = o["default"].getProxy(
                            l.ModName.Shop,
                            l.ProxyType.Shop,
                          )),
                          (n = y["default"].createGoodsSellRetrieve(t)),
                          [4, i.sendProtoAsync(n)]));
                case 1:
                  return (
                    u.sent(),
                    (a = y["default"].getReceiveMsg()),
                    null == a
                      ? [2, !1]
                      : ((r = a.getByte()),
                        0 > r
                          ? (T["default"].alertMessage(a.getString()), [2])
                          : (y["default"].processAddItemMsg(a),
                            T["default"].alertMessage(
                              _.GameText.STR_GOODS_CANCEL_SELL_SUCCESS,
                            ),
                            i.sendNt(s.ShopEvent.GOOD_DOWN_SELL, e),
                            [2, !0]))
                  );
              }
            });
          });
        }),
        (t.doGoodsSellBuyMsg = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var i, n, a, r, s, u, d, c, E, g, S;
            return __generator(this, function (I) {
              switch (I.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : ((i = e.goodId),
                      i.toNumber() <= 0
                        ? [2, !1]
                        : ((n = e.money1),
                          (a = e.money2),
                          (r = e.money3),
                          [4, f.Tool.checkEnoughMoney(n, a, r)]));
                case 1:
                  return 0 == I.sent()
                    ? [2, !1]
                    : ((s = new h["default"]()),
                      1 != t.checkTwiceMoney(n, a, r, s)
                        ? [3, 3]
                        : [
                            4,
                            T["default"].waitForTwiceSureUI(
                              s.toString(),
                              _.GameText.STR_SHOP_ITEM_GOODS_SELL_BUY,
                            ),
                          ]);
                case 2:
                  if (((u = I.sent()), !u)) return [2, !1];
                  I.label = 3;
                case 3:
                  return (
                    (d = o["default"].getProxy(
                      l.ModName.Shop,
                      l.ProxyType.Shop,
                    )),
                    (c = y["default"].createGoodsSellBuy(i)),
                    [4, d.sendProtoAsync(c)]
                  );
                case 4:
                  return (
                    I.sent(),
                    (E = y["default"].getReceiveMsg()),
                    null == E
                      ? [2, !1]
                      : ((g = E.getByte()),
                        0 > g
                          ? (T["default"].alertMessage(E.getString()), [2])
                          : ((S = v["default"].myPlayer),
                            null == S
                              ? [2]
                              : (y["default"].processAddItemMsg(
                                  E,
                                  null,
                                  !0,
                                  !0,
                                ),
                                S.setMoneyByType(
                                  p.ModelConst.MONEY1,
                                  E.getInt(),
                                ),
                                S.setMoneyByType(
                                  p.ModelConst.MONEY3,
                                  E.getInt(),
                                ),
                                [2, !0])))
                  );
              }
            });
          });
        }),
        (t.checkTwiceMoney = function (e, t, i, o) {
          var n = "";
          return (
            e > 0 &&
              (n +=
                c["default"].makeColorString(
                  _.GameText.STR_MONEY1 + e,
                  f.Tool.COLOR_YELLOW,
                ) + "\n"),
            t > 0 &&
              (n +=
                c["default"].makeColorString(
                  _.GameText.STR_MONEY2 + t,
                  f.Tool.COLOR_MONEY2,
                ) + "\n"),
            i > 0 &&
              (n +=
                c["default"].makeColorString(
                  _.GameText.STR_MONEY3 + i,
                  f.Tool.COLOR_MONEY3,
                ) + "\n"),
            0 == f.Tool.isNullText(n)
              ? (o.append(
                  f.Tool.manageString(
                    _.GameText.STR_SHOP_ITEM_GOODS_SELL_BUY_ASK,
                    n,
                  ),
                ),
                !0)
              : !1
          );
        }),
        (t.doGoodsPurchaseListMsg = function (e, i, n, a) {
          return (
            void 0 === n && (n = g["default"].PAGE_SIZE),
            void 0 === a && (a = g["default"].PAGE_NUM),
            __awaiter(this, void 0, void 0, function () {
              var r, _, d, p, c, h, f, E;
              return __generator(this, function (g) {
                switch (g.label) {
                  case 0:
                    return (
                      (r = null != i ? i.id : 0),
                      (_ = o["default"].getProxy(
                        l.ModName.Shop,
                        l.ProxyType.Shop,
                      )),
                      (d = y["default"].createGoodsPurchaseList(
                        e,
                        r,
                        u["default"].SEARCH_SORT_OBJ_PRICE,
                        u["default"].SEARCH_SORT_TYPE_ASC,
                        n,
                        a,
                      )),
                      [4, _.sendProtoAsync(d)]
                    );
                  case 1:
                    if (((d = g.sent()), null == d)) return [2, !1];
                    if (((p = d.getInt()), 0 > p))
                      return (T["default"].errorMessage(d.getString()), [2]);
                    for (c = [], h = d.getShort(), f = 0; h > f; f++)
                      ((E = t.fromBytesGoodsPurchaseItem(d, !1)), c.push(E));
                    return [4, v["default"].doGetItemSuit(c)];
                  case 2:
                    return (
                      g.sent(),
                      _.sendNt(s.ShopEvent.GOOD_PURCHASE_LIST, c),
                      [2]
                    );
                }
              });
            })
          );
        }),
        (t.getGoodsProvideInfo = function (e, i, n) {
          return __awaiter(this, void 0, Promise, function () {
            var a, r, u, d;
            return __generator(this, function (c) {
              switch (c.label) {
                case 0:
                  return null == e || null == n
                    ? [2]
                    : [4, t.doGoodsAutoProvideMsg(e, i, n)];
                case 1:
                  return (
                    (a = c.sent()),
                    0 >= a
                      ? [2]
                      : ((r = f.Tool.manageString(
                          _.GameText.STR_SHOP_ITEM_GOODS_PROVIDE_INFO,
                          [
                            e.name +
                              _.GameText.getText(_.GameText.TI_ITEM_X) +
                              n[2] +
                              "\n",
                            n[0] +
                              m.ModelVo.getMoneyText(p.ModelConst.MONEY1) +
                              "," +
                              n[1] +
                              m.ModelVo.getMoneyText(p.ModelConst.MONEY3) +
                              "\n",
                          ],
                        )),
                        1 == a
                          ? (r += _.GameText.STR_SHOP_ITEM_GOOD_PROVIDE_INFO2)
                          : 2 == a &&
                            (r += _.GameText.STR_SHOP_ITEM_GOOD_PROVIDE_INFO3),
                        [
                          4,
                          T["default"].waitForTwiceSureUI(
                            r,
                            _.GameText.getText(_.GameText.TI_WARM_SHOW),
                            _.GameText.getText(_.GameText.TI_OK),
                            _.GameText.getText(_.GameText.TI_SEE_ORDER),
                          ),
                        ])
                  );
                case 2:
                  return (u = c.sent())
                    ? (t.doGoodsAutoProvideMsg(e, i, n), [2])
                    : ((d = o["default"].getProxy(
                        l.ModName.Shop,
                        l.ProxyType.Shop,
                      )),
                      d.sendNt(s.ShopEvent.GOOD_SEARCH_ITEM, e),
                      [2]);
              }
            });
          });
        }),
        (t.doGoodsProvideMsg = function (e, t) {
          return (
            void 0 === t && (t = 0),
            __awaiter(this, void 0, Promise, function () {
              var i, n, a, r, u, d, c, h, E, g, I, A, C, P, R, O, N;
              return __generator(this, function (M) {
                switch (M.label) {
                  case 0:
                    return null == e
                      ? [2, !1]
                      : 0 >= t && e.quantity > 1
                        ? [
                            4,
                            T["default"].showInputAsync(
                              _.GameText.STR_TYPE_GOODS_PROVIDE,
                              _.GameText.STR_TYPE_GOODS_PROVIDE_SEAR_NAME,
                            ),
                          ]
                        : [3, 2];
                  case 1:
                    if (((i = M.sent()), !i)) return [2, !1];
                    ((t = f.Tool.parseInt(i)), (M.label = 2));
                  case 2:
                    return (
                      0 >= t && (t = 1),
                      (n = o["default"].getProxy(
                        l.ModName.Shop,
                        l.ProxyType.Shop,
                      )),
                      (a = y["default"].createGoodsProvideMsg(e.goodId, t)),
                      [4, n.sendProtoAsync(a)]
                    );
                  case 3:
                    if (
                      (M.sent(), (r = y["default"].getReceiveMsg()), null == r)
                    )
                      return [2, null];
                    if (((u = r.getByte()), 0 > u))
                      return (T["default"].errorMessage(r.getString()), [2]);
                    if (((d = v["default"].myPlayer), null == d)) return [2];
                    if (((c = d.bag), null == c)) return [2];
                    for (h = 0, E = r.getByte(), g = 0; E > g; g++)
                      ((I = r.getShort()),
                        (A = r.getByte()),
                        (C = r.getInt()),
                        (P = c.getItem(I)),
                        null == P || P.id != C,
                        (h += A),
                        c.removeBagItemByPos(I, A));
                    return (
                      (R = r.getInt()),
                      (O = r.getInt()),
                      (N = f.Tool.manageString(
                        _.GameText.STR_GOOD_PROVIDE_SUCCESS_INFO,
                        [
                          h + "",
                          (R > 0
                            ? m.ModelVo.getMoneyText(p.ModelConst.MONEY1) +
                              R +
                              " "
                            : "") +
                            (O > 0
                              ? m.ModelVo.getMoneyText(p.ModelConst.MONEY3) +
                                O +
                                " "
                              : ""),
                        ],
                      )),
                      T["default"].alertMessage(N),
                      e.quantity <= t
                        ? e.setStatusBit(!0, S["default"].STATUS_DEL)
                        : (e.quantity -= t),
                      n.sendNt(s.ShopEvent.GOOD_PURCHASE_SUCCESSED, e),
                      [2, !0]
                    );
                }
              });
            })
          );
        }),
        (t.doGoodsAutoProvideMsg = function (e, t, i) {
          return __awaiter(this, void 0, Promise, function () {
            var n, a, r, d, c, h, E, g, S, I, A;
            return __generator(this, function (C) {
              switch (C.label) {
                case 0:
                  return null == e
                    ? [2, -1]
                    : ((n = o["default"].getProxy(
                        l.ModName.Shop,
                        l.ProxyType.Shop,
                      )),
                      (a = y["default"].createGoodsAutoProvide(e, t, i)),
                      [4, n.sendProtoAsync(a)]);
                case 1:
                  if ((C.sent(), (r = y["default"].getReceiveMsg()), null == r))
                    return [2, null];
                  if (null == r) return [2, -1];
                  if (((d = r.getByte()), 0 > d))
                    return (T["default"].errorMessage(r.getString()), [2, -1]);
                  if (
                    ((c = r.getShort()),
                    (h = r.getInt()),
                    (E = r.getInt()),
                    0 == d)
                  ) {
                    if (((g = v["default"].myPlayer), null == g))
                      return [2, -1];
                    if (((S = g.bag), null == S)) return [2, -1];
                    ((I = S.removeBagItemByPos(e.slotPos, c)),
                      I != u["default"].SUCCESS,
                      (A =
                        (h > 0
                          ? m.ModelVo.getMoneyText(p.ModelConst.MONEY1) +
                            h +
                            " "
                          : "") +
                        (E > 0
                          ? m.ModelVo.getMoneyText(p.ModelConst.MONEY3) +
                            E +
                            " "
                          : "")),
                      T["default"].alertMessage(
                        f.Tool.manageString(
                          _.GameText.STR_SHOP_ITEM_AUTO_PROVIDE_INFO,
                          [c + "", A],
                        ),
                      ),
                      n.sendNt(s.ShopEvent.GOOD_AUTO_PROVIDE));
                  } else
                    (1 == d || 2 == d) && ((i[0] = h), (i[1] = E), (i[2] = c));
                  return [2, d];
              }
            });
          });
        }),
        (t.doGoodsPurchaseMyListMsg = function () {
          return __awaiter(this, void 0, Promise, function () {
            var e, i, n, a, r, u, _, d;
            return __generator(this, function (p) {
              switch (p.label) {
                case 0:
                  return (
                    (e = o["default"].getProxy(
                      l.ModName.Shop,
                      l.ProxyType.Shop,
                    )),
                    (i = y["default"].createGoodsPurchaseMyList()),
                    [4, e.sendProtoAsync(i)]
                  );
                case 1:
                  if ((p.sent(), (n = y["default"].getReceiveMsg()), null == n))
                    return [2, null];
                  if (((a = n.getByte()), 0 > a))
                    return (T["default"].alertMessage(n.getString()), [2]);
                  for (r = [], u = n.getByte(), _ = 0; u > _; _++)
                    ((d = t.fromBytesGoodsPurchaseItem(n, !0)), r.push(d));
                  return (
                    v["default"].doGetItemSuit(r),
                    e.sendNt(s.ShopEvent.GOOD_PURCHASE_MY_LIST, r),
                    [2, r]
                  );
              }
            });
          });
        }),
        (t.doGoodsPurchaseTypeListMsg = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var i, n, a, r, u, _, d;
            return __generator(this, function (p) {
              switch (p.label) {
                case 0:
                  return (
                    (i = o["default"].getProxy(
                      l.ModName.Shop,
                      l.ProxyType.Shop,
                    )),
                    (n = y["default"].createGoodsPurchaseTypeList(e)),
                    [4, i.sendProtoAsync(n)]
                  );
                case 1:
                  if ((p.sent(), (a = y["default"].getReceiveMsg()), null == a))
                    return [2, null];
                  ((r = []), (u = 0));
                  try {
                    for (u = a.getShort(), _ = 0; u > _; _++)
                      ((d = new t()),
                        S["default"].fromBytesAtts2(d, a),
                        r.push(d));
                  } catch (c) {
                    console.error(c);
                  }
                  return (
                    i.sendNt(s.ShopEvent.GOOD_PURCHASE_TYPE_LIST, r),
                    [2, r]
                  );
              }
            });
          });
        }),
        (t.doGoodsPurchaseSubmitMsg = function (e, t, i, n) {
          return __awaiter(this, void 0, Promise, function () {
            var a, r, s, u, _;
            return __generator(this, function (d) {
              switch (d.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : (0 >= t && 0 >= i) || 0 >= n
                      ? [2, !1]
                      : ((a = v["default"].myPlayer),
                        null == a
                          ? [2, !1]
                          : ((r = o["default"].getProxy(
                              l.ModName.Shop,
                              l.ProxyType.Shop,
                            )),
                            (s = y["default"].createGoodsPurchaseSubmit(
                              e.id,
                              n,
                              t,
                              i,
                            )),
                            [4, r.sendProtoAsync(s)]));
                case 1:
                  return (
                    d.sent(),
                    (u = y["default"].getReceiveMsg()),
                    null == u
                      ? [2, !1]
                      : ((_ = u.getByte()),
                        0 > _
                          ? (T["default"].errorMessage(u.getString()), [2, !1])
                          : [2, !0])
                  );
              }
            });
          });
        }),
        (t.doGoodsPurchaseCancelMsg = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, a;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : ((t = o["default"].getProxy(
                        l.ModName.Shop,
                        l.ProxyType.Shop,
                      )),
                      (i = y["default"].createGoodsPurchaseCancel(e.goodId)),
                      [4, t.sendProtoAsync(i)]);
                case 1:
                  return (
                    r.sent(),
                    (n = y["default"].getReceiveMsg()),
                    null == n
                      ? [2, !1]
                      : ((a = n.getByte()),
                        0 > a
                          ? (T["default"].errorMessage(n.getString()), [2])
                          : (t.sendNt(s.ShopEvent.GOOD_DEL_PURCHASE, e),
                            [2, !0]))
                  );
              }
            });
          });
        }),
        (t.doGoodsPurchaseGetMsg = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, a;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : ((t = o["default"].getProxy(
                        l.ModName.Shop,
                        l.ProxyType.Shop,
                      )),
                      (i = y["default"].createGoodsPurchaseGet(e.goodId)),
                      [4, t.sendProtoAsync(i)]);
                case 1:
                  return (
                    r.sent(),
                    (n = y["default"].getReceiveMsg()),
                    null == n
                      ? [2, !1]
                      : ((a = n.getShort()),
                        0 > a
                          ? (T["default"].errorMessage(n.getString()), [2])
                          : (y["default"].processAddItemMsg(n),
                            T["default"].alertMessage(
                              f.Tool.manageString(
                                _.GameText.STR_GOOD_PURCHASE_GET_INFO,
                                a + "",
                              ),
                            ),
                            t.sendNt(s.ShopEvent.GOOD_GET_PURCHASE, e),
                            [2, !0]))
                  );
              }
            });
          });
        }),
        (t.prototype.isShowIdentifyBtnForShopItem = function () {
          return this.power1 == u["default"].POWER_IDENTIFY ||
            this.power2 == u["default"].POWER_IDENTIFY ||
            this.bindPower1 == u["default"].POWER_IDENTIFY ||
            this.bindPower2 == u["default"].POWER_IDENTIFY
            ? !0
            : this.power3 == u["default"].POWER_COMPOSITE
              ? !0
              : !1;
        }),
        (t.prototype.getShopItemIsInTime = function () {
          if (this.startTime == this.endTime) return !0;
          var e = a["default"].timer.serverTime;
          return this.endTime > e && this.startTime <= e ? !0 : !1;
        }),
        Object.defineProperty(t.prototype, "videoShop", {
          get: function () {
            return (
              v["default"].shopID == u["default"].VIDIO_SHOPID && go.isMomoyu
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.isEnterAutoSell = !1),
        t
      );
    })(S["default"]);
  t.ShopItem = O;
});
