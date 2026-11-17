(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(43),
    n = i(22),
    a = i(11),
    r = i(2),
    s = i(37),
    l = i(18),
    u = i(19),
    _ = i(32),
    d = i(42),
    p = i(33),
    c = i(4),
    h = i(10),
    f = i(23),
    T = i(30),
    E = i(1),
    y = i(5),
    g = i(507),
    v = i(15),
    S = i(31),
    I = i(12),
    m = i(24),
    A = i(16),
    C = i(20),
    P = i(508),
    R = i(8),
    O = i(21),
    N = i(509),
    M = i(3),
    L = i(158),
    w = i(35),
    b = i(44),
    x = i(25),
    D = i(0),
    B = i(34),
    G = i(54),
    U = i(97),
    k = i(511),
    V = i(13),
    H = i(27),
    F = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (t.isEnchantShop = !1), t;
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
        Object.defineProperty(t.prototype, "petEquipData", {
          get: function () {
            return this._petEquipData;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.onConnectLost = function () {
          e.prototype.onConnectLost.call(this);
        }),
        (t.prototype.initialize = function () {
          e.prototype.initialize.call(this),
            (this._data = new N.BagModel()),
            (this._petEquipData = new k.PetEquipUpModel()),
            this.onProto(u["default"].CG_BAG_SIZE, this.onBagSizeChanged, this),
            this.onProto(
              u["default"].CG_EQUIP_TASK_GET_ITEM,
              this.onEquipTaskGetItem,
              this,
            ),
            this.onProto(
              u["default"].CG_CHANGE_TURN_MONSTER,
              this.onChangeTurnMonster,
              this,
            ),
            this.onProto(
              pb.EUserProtocol.S2C_BAG_UPDATE,
              this.onPushBagNum,
              this,
            ),
            this.onProto(
              u["default"].CG_PUSH_GAIN_ITEM_INFO,
              this.onPushGainItem,
              this,
            ),
            this.onProto(u["default"].CG_BAG_CLEAN, this.onBagRefreshMsg, this),
            this.onProto(
              pb.EUserProtocol.S2C_HAND_BOOK_ILLUSION,
              this.onChangeRes,
            ),
            this.onProto(
              pb.EUserProtocol.S2C_GET_ITEM_RATE,
              this.getItemRateRes,
            ),
            this.onProto(pb.EUserProtocol.S2C_PERSON_SET, this.personSetRes),
            this.onProto(
              pb.EUserProtocol.S2C_SET_SELL_ITEM,
              this.setSellItemRes,
            ),
            this.onProto(
              pb.EUserProtocol.S2C_DOSOMETHING,
              this.s2c_doSomething,
            ),
            this.onProto(u["default"].CG_VIP_LIST, this.openVIPCallback, this),
            this.onProto(u["default"].CG_VIP_BUY, this.vipSelectCallback, this),
            this.onProto(
              u["default"].CG_VIP_INFO,
              this.getOpenVipByCallback,
              this,
            ),
            this.onProto(
              u["default"].CG_VIP_UPGRADE,
              this.doOpenVIPLevelUpCallback,
              this,
            ),
            this.onProto(
              u["default"].CG_VIP_UPGRADE2,
              this.vipLevelUpSelectCallback,
              this,
            ),
            this.onProto(pb.EUserProtocol.S2C_RES_UPDATE, this.updateRes, this),
            this.onProto(
              pb.EUserProtocol.S2C_PET_EQUIP_UP,
              this.onPetEquipUp,
              this,
            ),
            this.onProto(
              pb.EUserProtocol.S2C_PET_EQUIP_UP_EXP,
              this.onPetEquipUpEx,
              this,
            ),
            this.onNt(r.BagEvent.BAG_ITEM_UPDATE, this.updateBag),
            this.onNt(r.MainEvent.ON_BAG_INIT, this.onInit),
            this.onNt(r.BagEvent.BAG_ITEM_FORGUID, this.updateBag),
            this.onNt(r.GuideEvent.GUIDE_COMPLETE, this.completeGuide),
            this.onNt(r.BagEvent.BAG_EQUIPMENT_UPDATE, this.updateEquip);
        }),
        (t.prototype.onInit = function () {
          this.updateBag(), this.updateEquip();
        }),
        (t.prototype.personSetReq = function (e, t) {
          var i = new n.Message(pb.EUserProtocol.C2S_PERSON_SET);
          i.proto;
          this.sendProto(i), (this.gItemType = e), (this.gItemName = t);
        }),
        (t.prototype.personSetRes = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.setItemNames || [];
          if (1 == this.gItemType) {
            if (!this.gItemName) return;
            for (var n = this.gItemName.split("，"), a = 0; a < n.length; a++) {
              var r = n[a];
              -1 == o.indexOf(r) && o.push(r);
            }
            this.setSellItemReq(o);
          } else if (2 == this.gItemType) {
            if (!this.gItemName) return;
            for (
              var n = this.gItemName.split("，"), a = o.length - 1;
              a >= 0;
              a--
            )
              for (var s = o[a], l = 0; l < n.length; l++) {
                var u = n[l];
                s == u && o.splice(a);
              }
            this.setSellItemReq(o);
          } else if (3 == this.gItemType) {
            for (
              var _ = void 0,
                d = p["default"].getPagItemVector(y["default"].myPlayer),
                c = d.size(),
                h = new m["default"](),
                a = 0;
              c > a;
              a++
            )
              (_ = d.elementAt(a)), -1 != o.indexOf(_.name) && h.addElement(_);
            h.size() > 0 &&
              M["default"]
                .getProxy(D.ModName.Shop, D.ProxyType.Shop)
                .doSellItem(h);
          }
        }),
        (t.prototype.setSellItemReq = function (e) {
          var t = new n.Message(pb.EUserProtocol.C2S_SET_SELL_ITEM),
            i = t.proto;
          (i.setItemNames = e), this.sendProto(t);
        }),
        (t.prototype.setSellItemRes = function (e) {
          var t = e.body;
          t.proto;
        }),
        (t.prototype.updateEquip = function () {
          if (!b.GuideModel.ins.getHasGuideId(x.GuideSpriteId.equipShopTip)) {
            var e = this.data.checkPlayerEquip();
            b.GuideModel.ins.setTriggerGuide2(
              x.GuideTriggerDataType.equipLow,
              e,
            );
          }
        }),
        (t.prototype.doAllEquip = function (e) {
          var t = new n.Message(u["default"].CG_ALL_EQUIP);
          if (e) {
            t.putByte(e.length);
            for (var i = 0; i < e.length; i++) {
              var a = e[i];
              t.putShort(a);
            }
          } else t.putByte(0);
          o["default"].Service.sendProto(t);
        }),
        (t.prototype.updateBag = function () {
          this._data.dealBagGuide();
        }),
        (t.prototype.completeGuide = function (e) {
          var t = e.body,
            i = b.GuideModel.ins.getGuideIdBySpriteId(
              x.GuideSpriteId.identifyCloseBtnByResult,
            );
          if (-1 != t.indexOf(i)) {
            var o = p["default"].getBagItemByID(x.GuideDefine.identifyEquipId);
            if (o.length > 0) {
              var n = o[0];
              y["default"].doEquipAction(y["default"].myPlayer, n);
            }
          }
        }),
        (t.prototype.updateRes = function (e) {
          var t = e.body,
            i = t.proto;
          if (i && i.info)
            for (var o = y["default"].myPlayer, n = 0; n < i.info.length; n++) {
              var a = i.info[n].type;
              switch (a) {
                case I.ModelConst.MONEY1:
                case c["default"].MONEY1:
                  o.money1 = i.info[n].num;
                  break;
                case I.ModelConst.MONEY2:
                case c["default"].MONEY2:
                  o.money2 = i.info[n].num;
                  break;
                case I.ModelConst.MONEY3:
                case c["default"].MONEY3:
                  o.money3 = i.info[n].num;
              }
            }
        }),
        (t.prototype.onPushBagNum = function (e) {
          var t = y["default"].myPlayer;
          if (null == t) return !1;
          for (
            var i = t.bag, o = e.body, n = o.proto, a = 0;
            a < n.posNums.length;
            a++
          ) {
            var s = n.posNums[a].pos,
              l = n.posNums[a].num;
            i.removeBagItemByPosProto(s, l);
          }
          this.sendNt(r.BagEvent.BAG_ITEM_UPDATE);
        }),
        (t.prototype.onPushGainItem = function (e) {
          var t = e.body,
            i = y["default"].myPlayer;
          t.getByte();
          var o = l["default"].processAddItemMsg(
              t,
              u["default"].ADD_ITEM_DEF,
              !0,
            ),
            n = 0,
            a = 0,
            s = 0,
            _ = 0;
          (n = t.getInt()),
            (a = t.getInt()),
            (s = t.getInt()),
            (_ = t.getInt()),
            (i.money1 = t.getInt()),
            (i.money2 = t.getInt()),
            (i.money3 = t.getInt());
          var d = t.getInt(),
            p = t.getInt(),
            c = t.getInt(),
            f = t.getBoolean();
          i.addValue(I.ModelConst.SET_EXP, d),
            i.addValue(I.ModelConst.SET_EXPMAX, p),
            c - i.level > 0 &&
              (i.addValue(I.ModelConst.LEVEL, c - i.level),
              i.resumeHPMP(),
              M["default"].sendNt(r.MainEvent.ON_LEVEL_UP)),
            (o.length > 0 || n > 0 || a > 0 || s > 0 || _ > 0) &&
              (G["default"].ins.isFight
                ? (G["default"].ins.viewData = U.VoUtil.getViewData(
                    D.ModName.Main,
                    D.MainViewType.MainReward,
                    {
                      list: o,
                      title: h.GameText.REWARD_TITLE,
                      labDesc: "",
                      money1: n,
                      money2: a,
                      money3: s,
                      exp: _,
                    },
                  ))
                : f &&
                  E["default"].showReward(
                    o,
                    h.GameText.REWARD_TITLE,
                    null,
                    "",
                    n,
                    a,
                    s,
                    _,
                  )),
            this.doQuickEquipPet(i);
        }),
        (t.prototype.onBagSizeChanged = function (e) {
          var t = e.body,
            i = y["default"].myPlayer;
          (i.BagSize = t.getInt()), this.sendNt(r.BagEvent.BAG_ITEM_UPDATE);
        }),
        (t.prototype.onChangeInfoReq = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, o, a, s, d;
            return __generator(this, function (p) {
              switch (p.label) {
                case 0:
                  return (
                    (t = new n.Message(u["default"].CG_ILLUSION_LIST)),
                    t.putShort(e),
                    [4, this.sendProtoAsync(t)]
                  );
                case 1:
                  if ((p.sent(), (i = l["default"].getReceiveMsg()), null == i))
                    return [2, !1];
                  for (
                    o = y["default"].myPlayer,
                      a = 65535 & i.getShort(),
                      o.illusionInfo = {},
                      s = 0;
                    a > s;
                    s++
                  )
                    (d = new _["default"]()),
                      _["default"].fromBytesAtts2(d, i),
                      null == d ||
                        o.illusionInfo[d.id] ||
                        (o.illusionInfo[d.id] = d);
                  return this.sendNt(r.BagEvent.BAG_INFO), [2, !0];
              }
            });
          });
        }),
        (t.prototype.getItemRateReq = function (e) {
          var t = new n.Message(pb.EUserProtocol.C2S_GET_ITEM_RATE),
            i = t.proto;
          (i.chestId = e), this.sendProto(t);
        }),
        (t.prototype.getItemRateRes = function (e) {
          var t = e.body,
            i = t.proto;
          this.sendNt(r.BagEvent.BAG_SEE_FLOOR, i.infos);
        }),
        (t.prototype.onChangeReq = function (e, t, i, o, a) {
          var r = new n.Message(pb.EUserProtocol.C2S_HAND_BOOK_ILLUSION),
            s = r.proto;
          (s.type = e),
            (s.slotPos = t),
            (s.illusionItemId = i),
            (s.time = o),
            (this.cItem = a),
            this.sendProto(r);
        }),
        (t.prototype.onChangeRes = function (e) {
          var t = e.body,
            i = y["default"].myPlayer,
            o = t.proto,
            n = i.bag.getItem(o.slotPos);
          1 == o.type
            ? (v.Tips.show("幻化成功！"),
              (n.illusionItemId = o.illusionItemId),
              (i.putIllusion[o.illusionItemId] =
                o.time > 0 ? o.endTime.toNumber() : -1))
            : 2 == o.type &&
              (v.Tips.show("还原成功！"),
              (n.illusionItemId = 0),
              i.putIllusion[o.illusionItemId] &&
                delete i.putIllusion[o.illusionItemId]),
            (n.itemInfo = 1 == o.type ? this.cItem || (i.illusionInfo && i.illusionInfo[o.illusionItemId]) || null : this.cItem),
            E["default"].hideView(D.ModName.Bag, D.BagViewType.BagChange),
            i.updateAndRefreshIcon(),
            this.sendNt(r.BagEvent.BAG_CHANGE);
        }),
        (t.prototype.doUnEquipAction = function (e, t, i) {
          return (
            void 0 === i && (i = null),
            __awaiter(this, void 0, Promise, function () {
              var o, n, a, s, _, d, p, f, T;
              return __generator(this, function (g) {
                switch (g.label) {
                  case 0:
                    return null == e
                      ? [2]
                      : ((o = e.bag),
                        null == o
                          ? [2]
                          : null == t
                            ? [2]
                            : t.isNotOperate()
                              ? [2]
                              : ((n = 0),
                                (a = !1),
                                (s = u["default"].BAG_UN_EQUIP),
                                t.isPetType()
                                  ? (s = u["default"].BAG_UN_EQUIP_PET)
                                  : t.isNeedWaitForSkill() &&
                                    (s = u["default"].BAG_UN_EQUIP),
                                (_ = l["default"].createPlayerBagMessage(
                                  s,
                                  u["default"].PLAYERBAG_UN_EQUIP,
                                  t,
                                  -1,
                                )),
                                [4, w["default"].sendProtoAsync(_)]));
                  case 1:
                    if (((d = g.sent()), null == d)) return [2];
                    if (((p = d.getByte()), 0 > p))
                      return (
                        E["default"].alertMessage(
                          "装备卸下失败，请检查背包容量重新操作",
                        ),
                        [2]
                      );
                    switch ((d.reset(), (s = d.getByte()), (f = ""), s)) {
                      case u["default"].BAG_UN_EQUIP_PET:
                        (a = !0),
                          (n = d.getShort()),
                          e.setPet(null),
                          this.sendNt(r.MainEvent.ON_PET_ATTR_UPDATE),
                          null != i && (t.reqLv = i.getLevel()),
                          (f = "宠物休息成功");
                        break;
                      case u["default"].BAG_UN_EQUIP:
                        e.fromSkillData(d), (f = "装备卸下成功");
                    }
                    return (
                      (T = e.bag.unequipItem(t)),
                      0 > T
                        ? (E["default"].alertMessage(
                            h.GameText.STR_UNEQUIP_BAG_NULL_ENG,
                            h.GameText.getText(h.GameText.TI_ERROR),
                          ),
                          [2])
                        : (e.checkHPMP(),
                          e.updateAndRefreshIcon(),
                          this.sendNt(r.BagEvent.BAG_EQUIPMENT_UPDATE),
                          y["default"].updateMyMoveSpeed(),
                          v.Tips.show(f),
                          t.type == c["default"].ITEM_TYPE_BLOOD_BOTTLE &&
                            M["default"].sendNt(r.MainEvent.MAIN_BLOOD_BOTTLE),
                          [2])
                    );
                }
              });
            })
          );
        }),
        (t.prototype.doEquipAction = function (e, t, i, o) {
          return (
            void 0 === i && (i = -1),
            void 0 === o && (o = null),
            __awaiter(this, void 0, Promise, function () {
              var n, a, s, f, g, S, I, m, C, P, R, O, N, R, L;
              return __generator(this, function (b) {
                switch (b.label) {
                  case 0:
                    if (null == e) return [2];
                    if (((n = e.bag), null == n)) return [2];
                    if (null == t) return [2];
                    if (
                      ((a = !1),
                      (s = new T["default"]()),
                      0 == _["default"].isValidEquipRequire(e, t, s))
                    )
                      return E["default"].alertMessage(s.toString()), [2];
                    if (((f = u["default"].BAG_EQUIP), t.isPetType())) {
                      if (
                        ((g = d["default"].itemChangePet(t, e)),
                        g.ageTime <= A["default"].timer.serverTime)
                      )
                        return v.Tips.show("当前宠物不可出战"), [2];
                      f = u["default"].BAG_EQUIP_PET;
                    } else
                      (0 != t.getItemSetID() || t.isNeedWaitForSkill()) &&
                        (f = u["default"].BAG_EQUIP);
                    return t.isTimeItem() &&
                      (t.isTimeItemTimeOut() || t.isVipItemTimeOut())
                      ? (v.Tips.show("装备已过期"), [2])
                      : ((S = l["default"].createPlayerBagMessage(
                          f,
                          u["default"].PLAYERBAG_EQUIP,
                          t,
                          i,
                        )),
                        [4, w["default"].sendProtoAsync(S)]);
                  case 1:
                    if (((I = b.sent()), null == I)) return [2];
                    if (((m = I.getByte()), 0 > m))
                      return y["default"].doErrorJumpShop(I, f), [2];
                    switch ((I.reset(), (f = I.getByte()), (C = []), f)) {
                      case u["default"].BAG_EQUIP:
                        if (
                          (C.push(i),
                          (P =
                            -1 != i
                              ? e.bag.equipItem(t.slotPos, C)
                              : e.bag.equipItemForPos(t.slotPos)),
                          0 > P)
                        )
                          return (
                            (R = h.GameText.STR_CANNOT_EQUIP_THIS),
                            t.type ==
                              c["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND &&
                              (R += h.GameText.STR_EQUIP_THIS_BEFORE),
                            E["default"].alertMessage(
                              R,
                              h.GameText.getText(h.GameText.TI_WARM_SHOW),
                            ),
                            [2]
                          );
                        e.updateAndRefreshIcon(),
                          e.checkHPMP(),
                          y["default"].updateMyMoveSpeed(),
                          this.sendNt(r.BagEvent.BAG_EQUIPMENT_UPDATE),
                          e.fromItemSetData(I),
                          e.fromSkillData(I),
                          (t.ShowNewSign = !1),
                          M["default"].sendNt(r.MainEvent.ON_BAG_HINT, !1),
                          v.Tips.show("装备成功");
                        break;
                      case u["default"].BAG_EQUIP_PET:
                        if (
                          ((O = e.getPet()),
                          (N = e.bag.getItem(p["default"].PET_POS)),
                          null != O && null != N && (N.reqLv = O.getLevel()),
                          C.push(i),
                          (P =
                            -1 != i
                              ? e.bag.equipItem(t.slotPos, C)
                              : e.bag.equipItemForPos(t.slotPos)),
                          0 > P)
                        )
                          return (
                            (R = h.GameText.STR_CANNOT_EQUIP_THIS),
                            t.type ==
                              c["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND &&
                              (R += h.GameText.STR_EQUIP_THIS_BEFORE),
                            E["default"].alertMessage(
                              R,
                              h.GameText.getText(h.GameText.TI_WARM_SHOW),
                            ),
                            [2]
                          );
                        (L = null),
                          null != o
                            ? (d["default"].fromBytesDetail(I, o), (L = o))
                            : (L = d["default"].fromBytesMyPlayer(I, e)),
                          e.setPet(L, !0),
                          e.checkHPMP(),
                          o &&
                            null != o.petItem &&
                            (o.petItem.slotPos = p["default"].PET_POS),
                          this.sendNt(r.BagEvent.BAG_EQUIPMENT_UPDATE),
                          this.sendNt(r.MainEvent.ON_PET_ATTR_UPDATE),
                          v.Tips.show("宠物出战成功");
                    }
                    return (
                      this.sendNt(r.BagEvent.BAG_ITEM_UPDATE),
                      t.type == c["default"].ITEM_TYPE_BLOOD_BOTTLE &&
                        M["default"].sendNt(r.MainEvent.MAIN_BLOOD_BOTTLE),
                      [2]
                    );
                }
              });
            })
          );
        }),
        (t.isAbleToAddHPMP = function (e) {
          if (null == e) return !1;
          var t = e.getPower1AndPower2(c["default"].POWER_HP_PERCENT),
            i = e.getPower1AndPower2(c["default"].POWER_HP),
            o = e.getPower1AndPower2(c["default"].POWER_MP_PERCENT),
            n = e.getPower1AndPower2(c["default"].POWER_MP);
          return 0 >= t && 0 >= i && 0 >= o && 0 >= n ? !1 : !0;
        }),
        (t.prototype.doWorldUseItemAction = function (e, i, o, n, a, s, m) {
          var repairItem = i && i.isRepairItem();
          if (repairItem && y["default"]._equipmentRepairPending)
            return Promise.resolve(!1);
          if (repairItem) y["default"]._equipmentRepairPending = !0;
          return __awaiter(this, void 0, void 0, function () {
            var P,
              O,
              N,
              L,
              w,
              b,
              x,
              w,
              w,
              w,
              B,
              G,
              U,
              k,
              V,
              H,
              k,
              F,
              Y,
              W,
              K,
              j,
              q,
              X,
              z,
              Q,
              J,
              $,
              Z,
              et,
              tt,
              it,
              ot,
              nt,
              at,
              rt,
              st;
            return __generator(this, function (lt) {
              switch (lt.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : (t.isAbleToAddHPMP(i) &&
                        e.isStateFull() &&
                        v.Tips.show(h.GameText.STR_QUICK_ADDHP_FULL),
                      (P = e.bag),
                      null == P
                        ? [2, !1]
                        : null == i
                          ? [2, !1]
                          : i.isNotOperate()
                            ? (E["default"].alertMessage(
                                h.GameText.STR_IN_SHOP_NO_USE,
                                h.GameText.getText(h.GameText.TI_WARM_SHOW),
                              ),
                              [2, !1])
                            : 32006 == i.id
                              ? (g["default"].doPetGuideList(i), [2, !1])
                              : ((O = i.slotPos),
                                (N = P.getBagItemBySlotPos(O)),
                                null == N
                                  ? [2, !1]
                                  : ((L = new T["default"]()),
                                    0 ==
                                    _["default"].isValidEquipRequire(e, N, L)
                                      ? (E["default"].alertMessage(
                                          L.toString(),
                                          h.GameText.getText(
                                            h.GameText.TI_ERROR,
                                          ),
                                        ),
                                        [2, !1])
                                      : ((L = new T["default"]()),
                                        0 ==
                                        N.isCanUse(_["default"].CAN_USE_WORLD)
                                          ? (E["default"].alertMessage(
                                              h.GameText.STR_CANNOT_USE_IN_WORD,
                                              h.GameText.getText(
                                                h.GameText.TI_ERROR,
                                              ),
                                            ),
                                            [2, !1])
                                          : i.isChangeNameItem()
                                            ? [
                                                2,
                                                y["default"].doModifyActorName(
                                                  !1,
                                                  O,
                                                ),
                                              ]
                                            : c["default"].isChangeJobItem(i.id)
                                              ? [
                                                  4,
                                                  E[
                                                    "default"
                                                  ].waitForTwiceSureUI(
                                                    R.Tool.manageString(
                                                      h.GameText
                                                        .STR_PLAYER_CHANGE_JOB_ASK,
                                                      C[
                                                        "default"
                                                      ].makeColorString(
                                                        i.name,
                                                        R.Tool.COLOR_RED,
                                                      ),
                                                    ),
                                                    h.GameText.getText(
                                                      h.GameText.TI_WARM_SHOW,
                                                    ),
                                                  ),
                                                ]
                                              : [3, 2]))));
                case 1:
                  if (((w = lt.sent()), !w)) return [2, !1];
                  if (0 == y["default"].doChangeJobCheck())
                    return (
                      E["default"].alertMessage(
                        h.GameText.STR_PLAYER_CHANGE_JOB_ERROR,
                      ),
                      [2, !1]
                    );
                  lt.label = 2;
                case 2:
                  if (
                    ((b = u["default"].BAG_NO_WAIT),
                    c["default"].isChangeJobItem(i.id)
                      ? (b = u["default"].BAG_CHANGE_JOB)
                      : i.isPetEgg()
                        ? (b = u["default"].BAG_USE_PET_EGG)
                        : i.isChestItem()
                          ? (b = u["default"].BAG_USE_CHEST)
                          : i.isCountryBook()
                            ? (b = u["default"].BAG_COMMAND_BOOK)
                            : i.isOpenStoreItem()
                              ? (b = u["default"].BAG_ADD_STORE_NUM)
                              : i.isPetAddSkill()
                                ? (b = u["default"].BAG_PET_ITEM_ADD_SKILLS)
                                : i.isPetAgeItem()
                                  ? (b = u["default"].BAG_PET_AGE)
                                  : i.isPetResetItem()
                                    ? (b = u["default"].BAG_PET_RESET)
                                    : i.isPetExpItem()
                                      ? (b = u["default"].BAG_ADD_PET_EXP)
                                      : i.isPlayerExpItem()
                                        ? (b = u["default"].BAG_ADD_EXP)
                                        : i.isRepairItem()
                                          ? (b = u["default"].BAG_REPAIR)
                                          : i.isTitleItem()
                                            ? (b = u["default"].BAG_GET_TITLE)
                                            : i.isChangeSexItem()
                                              ? (b = u["default"].BAG_ALERT_SEX)
                                              : i.isCpPointAddItem()
                                                ? (b = u["default"].BAG_ADD_CP)
                                                : i.isSpPointAddItem()
                                                  ? (b =
                                                      u["default"].BAG_ADD_SP)
                                                  : i.isProsperityDegreePointAddItem()
                                                    ? (b =
                                                        u["default"]
                                                          .BAG_ADD_PROSPERITY_DEGREE)
                                                    : i.isSkillPlayerItem()
                                                      ? (b =
                                                          u["default"]
                                                            .BAG_SKILL_SLOT_PALYER)
                                                      : i.isSkillPetItem()
                                                        ? (b =
                                                            u["default"]
                                                              .BAG_SKILL_SLOT_PET)
                                                        : i.isAddBagSizeItem()
                                                          ? (b =
                                                              u["default"]
                                                                .BAG_WAIT)
                                                          : i.isTimeItem() ||
                                                              i.isVipItem()
                                                            ? (b =
                                                                u["default"]
                                                                  .BAG_WAIT)
                                                            : i.isPetAddLife() &&
                                                              (b =
                                                                u["default"]
                                                                  .BAG_PET_ADD_LIFE),
                    (x = -1),
                    null != n && (x = n.slotPos),
                    i.isPetCanUseItem() && -1 == x)
                  ) {
                    if (
                      ((n = e.bag.getItem(p["default"].PET_POS)),
                      (a = e.getPet()),
                      null == n || null == a)
                    )
                      return (
                        E["default"].alertMessage(
                          h.GameText.STR_PET_NOT_SET_FIGHT,
                        ),
                        [2, !1]
                      );
                    x = n.slotPos;
                  }
                  return null == a
                    ? [3, 4]
                    : a.getLevel() > 1 && i.isPetResetItem()
                      ? [
                          4,
                          E["default"].waitForTwiceSureUI(
                            R.Tool.manageString(
                              h.GameText.STR_PET_ITEM_RESET_ASK,
                              a.getLevel() + "",
                            ),
                            h.GameText.STR_ITEM_SHOW,
                          ),
                        ]
                      : [3, 4];
                case 3:
                  if (((w = lt.sent()), !w)) return [2, !1];
                  lt.label = 4;
                case 4:
                  return i.isChangeSexItem()
                    ? [
                        4,
                        E["default"].waitForTwiceSureUI(
                          f.GameText2.STR_CHANGE_SEX_INFO,
                          h.GameText.STR_ITEM_SHOW,
                        ),
                      ]
                    : [3, 6];
                case 5:
                  if (((w = lt.sent()), !w)) return [2, !1];
                  lt.label = 6;
                case 6:
                  return i.isChangeSexItem() ||
                    i.isCpPointAddItem() ||
                    i.isSpPointAddItem() ||
                    i.isProsperityDegreePointAddItem() ||
                    i.isSkillPlayerItem() ||
                    i.isSkillPetItem()
                    ? [
                        4,
                        E["default"].waitForTwiceSureUI(
                          R.Tool.manageString(
                            f.GameText2.STR_USE_ITEM_ASK,
                            C["default"].makeColorString(
                              i.name,
                              R.Tool.COLOR_WHITE,
                            ),
                          ),
                          h.GameText.STR_ITEM_SHOW,
                        ),
                      ]
                    : [3, 8];
                case 7:
                  if (((w = lt.sent()), !w)) return [2, !1];
                  lt.label = 8;
                case 8:
                  return (
                    (B = 0),
                    (G = ""),
                    (U = m
                      ? l["default"].createPlayerBagMessage(
                          b,
                          u["default"].PLAYERBAG_USE_BY_ONE_KEY,
                          i,
                          x,
                          !1,
                          s,
                        )
                      : l["default"].createPlayerBagMessage(
                          b,
                          u["default"].PLAYERBAG_USE,
                          i,
                          x,
                          !1,
                          s,
                        )),
                    b != u["default"].BAG_NO_WAIT
                      ? [3, 9]
                      : (this.sendProto(U),
                        (k = P.removeBagItemByPos(O, s)),
                        k != c["default"].SUCCESS
                          ? [2, !1]
                          : (i &&
                              i.type == c["default"].ITEM_TYPE_LN_STONE &&
                              ((V = M["default"].getProxy(
                                D.ModName.ChiselSeal,
                                D.ProxyType.ChiselSeal,
                              )),
                              (V.absorbValue += i.powerValueBlood1),
                              v.Tips.show(
                                "获得" + i.powerValueBlood1 + "灵能",
                              )),
                            [3, 11]))
                  );
                case 9:
                  return [4, this.sendProtoAsync(U)];
                case 10:
                  if (
                    (lt.sent(), (H = l["default"].getReceiveMsg()), null == H)
                  )
                    return [2, !1];
                  if (((b = H.getByte()), 0 > b))
                    return y["default"].doErrorJumpShop(H, b), [2, !1];
                  if (
                    ((k = P.removeBagItemByPos(O, s)),
                    k != c["default"].SUCCESS)
                  )
                    return [2, !1];
                  switch (b) {
                    case u["default"].BAG_GET_TITLE:
                      G = H.getString();
                      break;
                    case u["default"].BAG_CHANGE_JOB:
                      l["default"].processDataPlayerDetail(H, e),
                        (e.skillList = l["default"].processDataPlayerSkillMsg(
                          H,
                          !0,
                        )),
                        E["default"].alertMessage(
                          R.Tool.manageString(
                            h.GameText.STR_PLAYER_CHANGE_SUCCEE,
                            c["default"].getJobString(e.getJob()),
                          ),
                        ),
                        M["default"].sendNt(
                          r.MainEvent.ON_PLAYER_ATTR_UPDATE,
                          I.ModelConst.JOB,
                        );
                      break;
                    case u["default"].BAG_ADD_EXP:
                      l["default"].processUpLevelMsg(H, e, L);
                      break;
                    case u["default"].BAG_ADD_PET_EXP:
                      l["default"].parsePetReward(H, a, L),
                        _["default"].fromBytes(H, n);
                      break;
                    case u["default"].BAG_PET_ITEM_ADD_SKILLS:
                      y["default"].doPetAddSkill(e, a, H, P, i, n);
                      break;
                    case u["default"].BAG_PET_RESET:
                      (F = d["default"].clone(a)),
                        (F.grow = a.grow),
                        (F.compre = a.compre),
                        _["default"].fromBytes(H, n),
                        d["default"].fromBytesDetail(H, a),
                        (a.petItem.petAgeTime = a.ageTime),
                        i.id == c["default"].ITEM_ID_PET_RESET
                          ? y["default"].doPetUseResetItemMenu(e, a, i, F)
                          : v.Tips.show("使用成功");
                      break;
                    case u["default"].BAG_PET_AGE:
                      null != a &&
                        ((a.ageTime =
                          H.getLong().toNumber() +
                          A["default"].timer.serverTime),
                        E["default"].alertMessage(
                          h.GameText.STR_PET_RESET_AGE_INFO,
                        ),
                        (a.petItem.petAgeTime = a.ageTime));
                      break;
                    case u["default"].BAG_PET_ADD_LIFE:
                      null != a &&
                        ((a.ageTime =
                          H.getLong().toNumber() +
                          A["default"].timer.serverTime),
                        (a.petItem.petAgeTime = a.ageTime),
                        E["default"].alertMessage("使用成功！"),
                        a.getPetAge() >= 99 &&
                          E["default"].alertMessage(
                            "当前宠物寿命值已达最大值",
                          ));
                      break;
                    case u["default"].BAG_REPAIR:
                      // Saved equipment durability arrives through GC_ITEM_INFO_UPDATE.
                      break;
                    case u["default"].BAG_COMMAND_BOOK:
                      break;
                    case u["default"].BAG_ADD_STORE_NUM:
                      e.numStroe = H.getByte();
                      break;
                    case u["default"].BAG_ALERT_SEX:
                      (Y = H.getLong()),
                        (W = H.getLong()),
                        (K = H.getLong()),
                        (j = H.getByte()),
                        (q = H.getString()),
                        e.setIcon1(Y),
                        e.setIcon2(W),
                        e.setIcon3(K),
                        e.setSex(j),
                        e.refreshPlayerAllSprite(),
                        E["default"].alertMessage(q),
                        M["default"].sendNt(
                          r.MainEvent.ON_PLAYER_ATTR_UPDATE,
                          I.ModelConst.SEX,
                        );
                      break;
                    case u["default"].BAG_ADD_CP:
                      (X = H.getShort()),
                        (z = H.getString()),
                        (e.cp = X),
                        E["default"].alertMessage(z);
                      break;
                    case u["default"].BAG_ADD_SP:
                      (Q = H.getInt()),
                        (J = H.getString()),
                        (e.sp = Q),
                        E["default"].alertMessage(J);
                      break;
                    case u["default"].BAG_ADD_PROSPERITY_DEGREE:
                      ($ = H.getInt()),
                        (Z = H.getString()),
                        E["default"].alertMessage(Z);
                      break;
                    case u["default"].BAG_SKILL_SLOT_PALYER:
                      (et = H.getString()), E["default"].alertMessage(et);
                      break;
                    case u["default"].BAG_SKILL_SLOT_PET:
                      (tt = H.getString()), E["default"].alertMessage(tt);
                      break;
                    case u["default"].BAG_USE_PET_EGG:
                    case u["default"].BAG_USE_CHEST:
                      (it = H.getByte()),
                        0 != it &&
                          ((ot = H.getShort()),
                          (nt = H.getInt()),
                          (k = P.removeBagItemByPos(ot, it))),
                        l["default"].processAddItemMsg(
                          H,
                          u["default"].ADD_ITEM_USE_REWARD,
                          !0,
                          !0,
                        ),
                        L.append(H.getMsgInfo()),
                        b == u["default"].BAG_USE_PET_EGG &&
                          this.doQuickEquipPet(e);
                      break;
                    case u["default"].BAG_WAIT:
                      i.isAddBagSizeItem() && v.Tips.show("背包容量已增加");
                  }
                  lt.label = 11;
                case 11:
                  return (
                    N.usePower(e),
                    1 == o &&
                      (i.isPetEgg() ||
                        (i.isChestItem()
                          ? ((at = L.toString()),
                            R.Tool.isNullText(at) &&
                              (at = h.GameText.STR_BOX_NULL))
                          : i.isRepairItem()
                            ? ((rt =
                                B > 0
                                  ? R.Tool.manageString(
                                      h.GameText.STR_ITEM_USE_SAVE,
                                      B +
                                        S.ModelVo.getMoneyText(
                                          I.ModelConst.MONEY3,
                                        ),
                                    )
                                  : "。"),
                              E["default"].alertMessage(
                                R.Tool.manageString(
                                  h.GameText.STR_REPAIR_EQUIP_SUCCESS,
                                  rt,
                                ),
                                h.GameText.STR_REPAIR_EQUIP,
                              ))
                            : i.isCountryBook()
                              ? ((st = void 0),
                                (st =
                                  s > 0
                                    ? R.Tool.manageString(
                                        f.GameText2
                                          .STR_USE_ITEM_COUNTRY_BOOK_BY_ONE_KEY,
                                        [s + "", 100 * s + ""],
                                      )
                                    : h.GameText.STR_USE_ITEM_COUNTRY_BOOK),
                                E["default"].alertMessage(
                                  st,
                                  h.GameText.STR_USE_SUCCESS,
                                ))
                              : i.isTitleItem()
                                ? E["default"].alertMessage(
                                    R.Tool.manageString(
                                      h.GameText.STR_USE_ITEM_TITLE_INFO,
                                      G,
                                    ),
                                    h.GameText.STR_USE_SUCCESS,
                                  )
                                : m && i.isCanUseByOneKeyItem()
                                  ? E["default"].alertMessage(
                                      N.getPowerDes() + "X" + s,
                                      h.GameText.STR_USE_SUCCESS,
                                    )
                                  : R.Tool.isNullText(L.toString())
                                    ? E["default"].alertMessage(
                                        N.getPowerDes(),
                                        h.GameText.STR_USE_SUCCESS,
                                      )
                                    : E["default"].alertMessage(
                                        L.toString(),
                                        h.GameText.STR_USE_SUCCESS,
                                      ))),
                    this.sendNt(r.BagEvent.BAG_ITEM_UPDATE),
                    this.sendNt(r.BagEvent.BAG_EQUIPMENT_UPDATE),
                    M["default"].sendNt(r.BagEvent.BAG_CHANGE_DURABILITY),
                    M["default"].sendNt(r.MainEvent.ON_BUFF_ICON),
                    [2, !0]
                  );
              }
            });
          }).finally(function () {
            if (repairItem) y["default"]._equipmentRepairPending = !1;
          });
        }),
        (t.prototype.doDelEquipAction = function (e, t) {
          return __awaiter(this, void 0, void 0, function () {
            var i, o, n, a;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return null == t
                    ? [2]
                    : t.isNotOperate()
                      ? (E["default"].alertMessage(
                          h.GameText.STR_IN_SHOP_NO_DEL,
                        ),
                        [2])
                      : ((i = t.slotPos),
                        1 == p["default"].isValidEquipPos(i)
                          ? (t.isPetType()
                              ? E["default"].alertMessage(
                                  h.GameText.STR_PET_DEL_EQUIP,
                                  h.GameText.STR_DEL_PET,
                                )
                              : E["default"].alertMessage(
                                  h.GameText.STR_EQUIP_DEL_EQUIP,
                                  h.GameText.STR_DEL_EQUIP,
                                ),
                            [2])
                          : [4, d["default"].getItemPetEquip(t)]);
                case 1:
                  return (o = r.sent())
                    ? (E["default"].alertMessage(h.GameText.STR_PET_IS_EQUIP),
                      [2])
                    : ((n = ""),
                      (n = t.isPetType()
                        ? R.Tool.manageString(
                            h.GameText.STR_DEL_PET_ASK,
                            t.getNameInfo(),
                          )
                        : R.Tool.manageString(
                            h.GameText.STR_DEL_EQUIP_ASK,
                            t.getNameInfo(),
                          )),
                      [
                        4,
                        E["default"].waitForTwiceSureUI(
                          n,
                          h.GameText.getText(h.GameText.TI_WARM_SHOW),
                        ),
                      ]);
                case 2:
                  return (
                    (a = r.sent()), a && this.doDelEquipAction_2(e, t), [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doDelEquipAction_2 = function (e, t) {
          return __awaiter(this, void 0, Promise, function () {
            var i, o, n, a, s, _;
            return __generator(this, function (d) {
              switch (d.label) {
                case 0:
                  return (
                    (i = t.slotPos),
                    (o = u["default"].BAG_WAIT),
                    (n = l["default"].createPlayerBagMessage(
                      o,
                      u["default"].PLAYERBAG_LOSE,
                      t,
                    )),
                    [4, this.sendProtoAsync(n)]
                  );
                case 1:
                  return (
                    (a = d.sent()),
                    null == a
                      ? [2]
                      : ((s = a.getByte()),
                        0 > s
                          ? (y["default"].doErrorJumpShop(a, s), [2])
                          : ((_ = e.bag.removeItem(i)),
                            1 != _ && console.error("丢弃二次确认    丢弃失败"),
                            e.checkHPMP(),
                            M["default"].sendNt(
                              r.RoleEvent.ROLE_ARTIFACT_UP_RED,
                              [t],
                            ),
                            this.sendNt(r.BagEvent.BAG_ITEM_DELETE),
                            this.sendNt(r.BagEvent.BAG_ITEM_UPDATE),
                            M["default"].sendNt(
                              r.BagEvent.BAG_CHANGE_DURABILITY,
                            ),
                            [2]))
                  );
              }
            });
          });
        }),
        (t.prototype.doSellItemAction = function (e, t, i) {
          var o = e.bag;
          if (null == o)
            return void console.error("doSellItemAction  >>>>> bag == null");
          if (null == t)
            return void console.error("doSellItemAction  >>>>> item == null");
          if (t.isNotOperate())
            return void E["default"].alertMessage(
              h.GameText.STR_IN_SHOP_NO_DEL,
            );
          var n = t.slotPos;
          if (1 == p["default"].isValidEquipPos(n))
            return void E["default"].alertMessage(
              h.GameText.STR_VIP_SELL_EQUIP_INFO,
              h.GameText.STR_VIP_SELL_EQUIP,
            );
          var r = a["default"].alloc(this, this.doSellItemAction_2, [t, i]);
          E["default"].alertMessage(
            R.Tool.manageString(
              h.GameText.STR_VIP_SELL_EQUIP_ASK,
              t.getNameInfo() + ("x" + i),
            ),
            h.GameText.getText(h.GameText.TI_WARM_SHOW),
            r,
          );
        }),
        (t.prototype.doSellItemAction_2 = function (e, t) {
          return __awaiter(this, void 0, Promise, function () {
            var i, o, n, s, u, _, d;
            return __generator(this, function (p) {
              switch (p.label) {
                case 0:
                  return (
                    (i = y["default"].myPlayer),
                    (o = e.slotPos),
                    (n = i.bag),
                    (s = l["default"].createItemShopSell(
                      c["default"].SHOP_PET_USEITEM_ID,
                      e.id,
                      e.slotPos,
                      t,
                    )),
                    [4, this.sendProtoAsync(s)]
                  );
                case 1:
                  return (
                    (u = p.sent()),
                    null == u
                      ? [2]
                      : (_ = l["default"].processItemShopSell(u))
                        ? ((d = n.removeBagItemByPos(e.slotPos, t)),
                          d == c["default"].SUCCESS
                            ? (this._delayId = B.delayCall(
                                a["default"].alloc(
                                  this,
                                  this.showSellSuccessMsg,
                                  [e, t],
                                ),
                                10,
                              ))
                            : console.error(
                                "doSellItemAction_2   >>> 客户端处理丢弃物品 未成功 ",
                              ),
                          i.checkHPMP(),
                          M["default"].sendNt(
                            r.RoleEvent.ROLE_ARTIFACT_UP_RED,
                            [e],
                          ),
                          this.sendNt(r.BagEvent.BAG_ITEM_UPDATE),
                          M["default"].sendNt(r.BagEvent.BAG_CHANGE_DURABILITY),
                          [2])
                        : [2]
                  );
              }
            });
          });
        }),
        (t.prototype.showSellSuccessMsg = function (e, t) {
          B.clearDelay(this._delayId), (this._delayId = 0);
          var i =
            h.GameText.STR_SHOPITEM_SELL_SUCCESS +
            e.getNameInfo() +
            h.GameText.getText(h.GameText.TI_ITEM_X) +
            t +
            R.Tool.manageString(
              h.GameText.STR_GET_MONEY3,
              V.GUtil.intNum(e.price * t).toString(),
            );
          E["default"].alertMessage(i);
        }),
        (t.prototype.doBagRefreshMsg = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, o;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (t = y["default"].myPlayer)
                    ? t.isShopMode()
                      ? (E["default"].alertMessage(
                          h.GameText.STR_SHOP_REFRESH_BAG,
                        ),
                        [2, !1])
                      : ((i = l["default"].createBagRefreshMsg()),
                        [4, this.sendProtoAsync(i)])
                    : [2, !1];
                case 1:
                  return (
                    n.sent(),
                    (i = l["default"].getReceiveMsg()),
                    null == i
                      ? [2, !1]
                      : (l["default"].processBagRefreshMsg(i),
                        (o = M["default"].getProxy(
                          D.ModName.Bag,
                          D.ProxyType.Bag,
                        )),
                        o.data.resetShopList(),
                        this.sendNt(r.BagEvent.BAG_ITEM_UPDATE),
                        this.sendNt(r.BagEvent.BAG_EQUIPMENT_UPDATE),
                        e || v.Tips.show("背包已整理"),
                        [2, !0])
                  );
              }
            });
          });
        }),
        (t.prototype.onBagRefreshMsg = function (e) {
          var t = e.body;
          l["default"].processBagRefreshMsg(t);
        }),
        (t.prototype.doQuickEquipPet = function (e) {
          if (null == e) return !1;
          var t = e.bag;
          if (null == t) return !1;
          if (null != t.getItem(p["default"].PET_POS)) return !1;
          for (
            var i = null, o = 0, n = p["default"].BAG_START;
            n <= t.bagEnd;
            n++
          ) {
            var a = t.getItem(n);
            null != a && a.type == c["default"].ITEM_TYPE_PET && ((i = a), o++);
          }
          return 1 == o
            ? (this.doEquipAction(y["default"].myPlayer, i), !0)
            : !1;
        }),
        (t.prototype.onEquipTaskGetItem = function (e) {
          y["default"].doAutoEquipUpdatedata(e.body);
          var t = y["default"].myPlayer;
          t.updateAndRefreshIcon(),
            t.checkHPMP(),
            y["default"].updateMyMoveSpeed(),
            this.sendNt(r.BagEvent.BAG_EQUIPMENT_UPDATE);
        }),
        (t.prototype.onChangeTurnMonster = function (e) {
          var t = e.body;
          L["default"].doChangeTurnMonsterPush(t);
        }),
        (t.prototype.createIdentifyAsk = function (e, t, i, o, n) {
          return __awaiter(this, void 0, void 0, function () {
            var a, s, u, d;
            return __generator(this, function (p) {
              switch (p.label) {
                case 0:
                  return (
                    (a = l["default"].createIdentifyAsk(
                      e,
                      t.slotPos,
                      t.id,
                      !0,
                      n,
                    )),
                    [4, this.sendIdentifyAskMsg(a)]
                  );
                case 1:
                  return (
                    p.sent(),
                    (s = l["default"].getReceiveMsg()),
                    (u = n
                      ? _["default"].COMPARE_IDENTIFY_G
                      : _["default"].COMPARE_IDENTIFY),
                    (d =
                      C["default"].makeColorString(
                        h.GameText.STR_IDENTIFY_RESULT,
                        R.Tool.COLOR_GREEN,
                      ) +
                      "\n" +
                      _["default"].getEquipCompareDesc(o, t, u)),
                    e == c["default"].BAG_CHECKUP_RESULT_NEW
                      ? i.bag.setItem(o, t.slotPos)
                      : o.setItemPowerDataTo(t),
                    E["default"].updateIdentifyMessageUI(
                      t,
                      i,
                      o,
                      c["default"].BAG_CHECKUP_RESULT_UPDATE,
                      d,
                      n,
                    ),
                    this.sendNt(r.BagEvent.BAG_EQUIPMENT_UPDATE),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.sendIdentifyAskMsg = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (t) {
              return (
                o["default"].Service.sendProto(e),
                [
                  2,
                  new Promise(function (e, t) {
                    o["default"].Service.onProto(
                      u["default"].CG_BAG_CHECKUP_ASK,
                      a["default"].alloc(null, function (t) {
                        var i = t.body;
                        l["default"].setMsgTag(i.getType(), i), e();
                      }),
                    );
                  }),
                ]
              );
            });
          });
        }),
        (t.prototype.doOpenVIP = function () {
          var e = y["default"].isQQVip,
            t = new n.Message(u["default"].CG_VIP_LIST);
          t.putByte(e ? 1 : 0), this.sendProto(t);
        }),
        (t.prototype.openVIPCallback = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t,
              i,
              o,
              a,
              r,
              s,
              l,
              _,
              d,
              c,
              T,
              g,
              v,
              P,
              N,
              M,
              L,
              w,
              b,
              x,
              D,
              B;
            return __generator(this, function (G) {
              switch (G.label) {
                case 0:
                  if (((t = e.body), (i = y["default"].myPlayer), null == i))
                    return [2];
                  if (null == t) return [2];
                  if (
                    ((o = t.getByte()),
                    (a = new m["default"]()),
                    (r = new m["default"]()),
                    (s = h.GameText.STR_VIP),
                    (l = ""),
                    (l =
                      y["default"].myPlayer.getVipLevel2() < 1
                        ? R.Tool.manageString(
                            h.GameText.STR_VIP_PAST_DUE_INFO,
                            [s, s, s, s],
                          )
                        : R.Tool.manageString(
                            f.GameText2.STR_VIP_PAST_DUE_INFO,
                            [s, s, s, s],
                          )),
                    (_ = ""),
                    0 > o)
                  )
                    return E["default"].alertMessage(t.getString()), [2];
                  if (1 == o)
                    return (
                      (d = t.getString()),
                      E["default"].alertMessage(
                        h.GameText.STR_FUNCTION_NOT_OPEN,
                      ),
                      [2]
                    );
                  if (((c = t.getShort()), c > 0))
                    for (T = 0; c > T; T++)
                      (g = t.getShort()),
                        (v = t.getString()),
                        (P = t.getByte()),
                        (N = t.getInt()),
                        (M = [g, N, P]),
                        a.addElement(v),
                        r.addElement(M);
                  return (
                    R.Tool.addChoiceMenu(
                      a,
                      h.GameText.getText(h.GameText.TI_BACK),
                      r,
                      E["default"].EVENT_ALL_BACK,
                    ),
                    i.getVipLevel() > 0
                      ? ((L = i.bag.getItem(p["default"].SPIRIT_POS)),
                        null != L &&
                          ((w = L.expireTime),
                          (b = 0),
                          (b = w - A["default"].timer.serverTime),
                          b > 0 &&
                            (l = R.Tool.manageString(
                              h.GameText.STR_VIP_TIME_INFO,
                              [s, this.getTime(w), s],
                            )),
                          y["default"].isQQVip &&
                            864e5 > b &&
                            (l = f.GameText2.STR_VIP_TIME_INFO2)))
                      : (l = O["default"].manageString2(
                          h.GameText.STR_VIP_ACTIVATE_INFO,
                          [s, s, s],
                        )),
                    (l += _),
                    [
                      4,
                      E["default"].waitForTwiceSureUI(
                        l,
                        h.GameText.GAME_TEXT[h.GameText.TI_WARM_SHOW],
                      ),
                    ]
                  );
                case 1:
                  return (x = G.sent())
                    ? ((D = go.openPay
                        ? h.GameText.STR_VIP_PAY_ASK
                        : h.GameText.STR_VIP_PAY_ASK1),
                      [
                        4,
                        E["default"].waitForTwiceSureUI(
                          R.Tool.manageString(
                            D,
                            C["default"].makeColorString(
                              S.ModelVo.getMoneyText(r.arr[0][2]) + r.arr[0][1],
                              R.Tool.COLOR_RED,
                            ),
                          ),
                          h.GameText.GAME_TEXT[h.GameText.TI_WARM_SHOW],
                        ),
                      ])
                    : [2];
                case 2:
                  if (((x = G.sent()), !x)) return [2];
                  switch ((B = r.arr[0][2])) {
                    case I.ModelConst.MONEY1:
                      return [3, 3];
                    case I.ModelConst.MONEY2:
                      return [3, 5];
                    case I.ModelConst.MONEY3:
                      return [3, 7];
                  }
                  return [3, 9];
                case 3:
                  return [4, R.Tool.checkEnoughMoney(r.arr[0][1], 0, 0, !1)];
                case 4:
                  return 0 == G.sent() ? [2, !0] : [3, 9];
                case 5:
                  return [4, R.Tool.checkEnoughMoney(0, r.arr[0][1], 0, !1)];
                case 6:
                  return 0 == G.sent() ? [2, !0] : [3, 9];
                case 7:
                  return [4, R.Tool.checkEnoughMoney(0, 0, r.arr[0][1], !1)];
                case 8:
                  return 0 == G.sent() ? [2, !0] : [3, 9];
                case 9:
                  return (
                    (t = new n.Message(u["default"].CG_VIP_BUY)),
                    t.putShort(r.arr[0][0]),
                    this.sendProto(t),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.getTime = function (e) {
          var t = "";
          return e > 0 && (t = O["default"].getTimeStr(e)), t;
        }),
        (t.prototype.vipSelectCallback = function (e) {
          var t = e.body,
            i = y["default"].myPlayer;
          if (null != i && null != t) {
            var o = t.getByte();
            if (0 > o) return void E["default"].errorMessage(t.getString());
            t.getType();
            var n = i.getVipLevel(),
              a = t.getByte(),
              s = t.getInt(),
              l = t.getByte(),
              u = t.getLong(),
              d = Number(u);
            y["default"].isQQVip && t.getByte();
            var c = _["default"].fromBytes(t);
            i.fromItemSetData(t),
              i.fromSkillData(t),
              null != c && i.bag.setItem(c, p["default"].SPIRIT_POS),
              i.setMoneyByType(a, s),
              (i.vipLevel = l),
              d > 0 && i.setStatusBit(I.ModelConst.STATUS_VIP),
              i.refreshWorldSprite(),
              n > 0
                ? i.getVipLevel2() < 2
                  ? E["default"].alertMessage(h.GameText.STR_VIP_RENEWAL_SUCCEE)
                  : E["default"].alertMessage(
                      f.GameText2.STR_VIP_RENEWAL_SUCCEE,
                    )
                : E["default"].alertMessage(h.GameText.STR_VIP_ACTIVATE_SUCCEE),
              this.sendNt(r.UserVip.USERVIP_GET_BUY, c);
          }
        }),
        Object.defineProperty(t.prototype, "openvipdata", {
          get: function () {
            return this.openvip;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.doOpenVipBy = function () {
          var e = new n.Message(u["default"].CG_VIP_INFO);
          this.sendProto(e);
        }),
        (t.prototype.getOpenVipByCallback = function (e) {
          var t = e.body;
          if (null != t) {
            var i = t.getString(),
              o = t.getInt(),
              n = t.getInt(),
              a = t.getByte();
            this.openvip || (this.openvip = new P["default"]()),
              (this.openvip.strInfo = i),
              (this.openvip.curExp = o),
              (this.openvip.maxExp = n),
              this.openvip.itemVector
                ? (this.openvip.itemVector.length = 0)
                : (this.openvip.itemVector = new m["default"]());
            for (var s = 0; a > s; s++) {
              var l = new _["default"]();
              _["default"].fromBytesAtts2(l, t),
                l.isVipTimeItem() && l.setExpireTime(t.getInt()),
                this.openvip.itemVector.addElement(l),
                (l.durability = l.durMax);
            }
            this.sendNt(r.UserVip.USERVIP_GET_INFO);
          }
        }),
        (t.prototype.doOpenVIPLevelUp = function () {
          var e = new n.Message(u["default"].CG_VIP_UPGRADE);
          this.sendProto(e);
        }),
        (t.prototype.doOpenVIPLevelUpCallback = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, o, a, r, s, l, _, d, p, c, T, g, v, A;
            return __generator(this, function (P) {
              switch (P.label) {
                case 0:
                  if (((t = e.body), null == t)) return [2];
                  if (
                    ((i = new m["default"]()),
                    (o = new m["default"]()),
                    (a = f.GameText2.STR_VIP_LEVELUP_INFO),
                    (r = t.getByte()),
                    0 > r)
                  )
                    return E["default"].alertMessage(t.getString()), [2];
                  if (((s = t.getShort()), s > 0))
                    for (l = 0; s > l; l++)
                      (_ = t.getShort()),
                        (d = t.getString()),
                        (p = t.getByte()),
                        (c = t.getInt()),
                        (T = [_, c, p]),
                        i.addElement(d),
                        o.addElement(T);
                  return (
                    R.Tool.addChoiceMenu(
                      i,
                      h.GameText.getText(h.GameText.TI_BACK),
                      o,
                      E["default"].EVENT_ALL_BACK,
                    ),
                    [
                      4,
                      E["default"].waitForTwiceSureUI(
                        a,
                        h.GameText.GAME_TEXT[h.GameText.TI_WARM_SHOW],
                      ),
                    ]
                  );
                case 1:
                  return (g = P.sent())
                    ? ((v = go.openPay
                        ? h.GameText.STR_VIP_PAY_ASK
                        : h.GameText.STR_VIP_PAY_ASK1),
                      [
                        4,
                        E["default"].waitForTwiceSureUI(
                          R.Tool.manageString(
                            v,
                            C["default"].makeColorString(
                              S.ModelVo.getMoneyText(o.arr[0][2]) + o.arr[0][1],
                              R.Tool.COLOR_RED,
                            ),
                          ),
                          h.GameText.GAME_TEXT[h.GameText.TI_WARM_SHOW],
                        ),
                      ])
                    : [2];
                case 2:
                  if (((g = P.sent()), !g)) return [2];
                  switch ((A = o.arr[0][2])) {
                    case I.ModelConst.MONEY1:
                      return [3, 3];
                    case I.ModelConst.MONEY2:
                      return [3, 5];
                    case I.ModelConst.MONEY3:
                      return [3, 7];
                  }
                  return [3, 9];
                case 3:
                  return [4, R.Tool.checkEnoughMoney(o.arr[0][1], 0, 0, !1)];
                case 4:
                  return 0 == P.sent() ? [2, !0] : [3, 9];
                case 5:
                  return [4, R.Tool.checkEnoughMoney(0, o.arr[0][1], 0, !1)];
                case 6:
                  return 0 == P.sent() ? [2, !0] : [3, 9];
                case 7:
                  return [4, R.Tool.checkEnoughMoney(0, 0, o.arr[0][1], !1)];
                case 8:
                  return 0 == P.sent() ? [2, !0] : [3, 9];
                case 9:
                  return (
                    (t = new n.Message(u["default"].CG_VIP_UPGRADE2)),
                    t.putShort(o.arr[0][0]),
                    this.sendProto(t),
                    y["default"].doGetItemSuit(
                      y["default"].myPlayer.bag.getAllEquip(),
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doOpenVIPLevelUpCallback2 = function (e, t, i) {
          return __awaiter(this, void 0, void 0, function () {
            var o, a, r, s;
            return __generator(this, function (l) {
              switch (l.label) {
                case 0:
                  return (
                    (o = go.openPay
                      ? h.GameText.STR_VIP_PAY_ASK
                      : h.GameText.STR_VIP_PAY_ASK1),
                    [
                      4,
                      E["default"].waitForTwiceSureUI(
                        R.Tool.manageString(
                          o,
                          C["default"].makeColorString(
                            S.ModelVo.getMoneyText(i) + t,
                            R.Tool.COLOR_RED,
                          ),
                        ),
                        h.GameText.GAME_TEXT[h.GameText.TI_WARM_SHOW],
                      ),
                    ]
                  );
                case 1:
                  if (((a = l.sent()), !a)) return [2];
                  switch ((r = i)) {
                    case I.ModelConst.MONEY1:
                      return [3, 2];
                    case I.ModelConst.MONEY2:
                      return [3, 4];
                    case I.ModelConst.MONEY3:
                      return [3, 6];
                  }
                  return [3, 8];
                case 2:
                  return [4, R.Tool.checkEnoughMoney(t, 0, 0, !1)];
                case 3:
                  return 0 == l.sent() ? [2, !1] : [3, 8];
                case 4:
                  return [4, R.Tool.checkEnoughMoney(0, t, 0, !1)];
                case 5:
                  return 0 == l.sent() ? [2, !1] : [3, 8];
                case 6:
                  return [4, R.Tool.checkEnoughMoney(0, 0, t, !1)];
                case 7:
                  return 0 == l.sent() ? [2, !1] : [3, 8];
                case 8:
                  return 0 > e
                    ? [2]
                    : ((s = new n.Message(u["default"].CG_VIP_UPGRADE2)),
                      s.putInt(e),
                      this.sendProto(s),
                      y["default"].doGetItemSuit(
                        y["default"].myPlayer.bag.getAllEquip(),
                      ),
                      [2, !0]);
              }
            });
          });
        }),
        (t.prototype.vipLevelUpSelectCallback = function (e) {
          var t = e.body;
          if (null != t) {
            var i = y["default"].myPlayer;
            if (null != i) {
              var o = t.getByte();
              if (0 > o) return void E["default"].alertMessage(t.getString());
              var n = t.getByte(),
                a = t.getInt(),
                s = t.getByte(),
                l = t.getByte();
              if (1 == l) {
                var u = t.getString();
                E["default"].alertMessage(u), (S.ModelVo.maxVIP = -1);
              }
              var d = _["default"].fromBytes(t);
              i.fromItemSetData(t),
                i.fromSkillData(t),
                null != d && i.bag.setItem(d, p["default"].SPIRIT_POS),
                i.setMoneyByType(n, a),
                y["default"].myPlayer.setVipLevel2(s),
                i.refreshWorldSprite(),
                this.sendNt(r.UserVip.USERVIP_GET_LEVEL, d);
            }
          }
        }),
        (t.prototype.openPetEquipUp = function (e) {
          this._petEquipData.setEquipUpInfo(e),
            E["default"].showModal(
              D.ModName.Bag,
              D.BagViewType.BagPetItemGrade,
            );
        }),
        (t.prototype.onPetEquipUp = function () {
          this._petEquipData.equipUpEnd(),
            this.sendNt(r.BagEvent.BAG_ITEM_UPDATE);
        }),
        (t.prototype.sendPetEquipUp = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_PET_EQUIP_UP),
            t = e.proto,
            i = this._petEquipData.item;
          (t.equipId = i.petUid),
            (t.cost = this._petEquipData.getUpSendData()),
            this.sendProto(e);
        }),
        (t.prototype.onPetEquipUpEx = function (e) {
          var t = e.body,
            i = t.proto;
          this._petEquipData.updateInfoMap(i);
        }),
        (t.prototype.doGetCompareEquip = function (e, t) {
          return __awaiter(this, void 0, Promise, function () {
            var i,
              o,
              n,
              a,
              r,
              s,
              u,
              _,
              d,
              p,
              c,
              h,
              f,
              T,
              E,
              y,
              g,
              v,
              S,
              I,
              m,
              A,
              C,
              P,
              R,
              O;
            return __generator(this, function (N) {
              switch (N.label) {
                case 0:
                  return (
                    (i = l["default"].createGetEquipPetLvMsg(e.petUid, t)),
                    [4, this.sendProtoAsync(i)]
                  );
                case 1:
                  return (
                    N.sent(),
                    (o = l["default"].getReceiveMsg()),
                    null == o
                      ? [2]
                      : ((n = o.getByte()),
                        (a = o.getString()),
                        0 > n
                          ? [2]
                          : ((r = o.getShort()),
                            (s = o.getShort()),
                            (u = o.getShort()),
                            (_ = o.getShort()),
                            (d = o.getShort()),
                            (p = o.getShort()),
                            (c = o.getShort()),
                            (h = o.getShort()),
                            (f = o.getShort()),
                            (T = o.getShort()),
                            (E = o.getShort()),
                            (y = o.getShort()),
                            (g = o.getShort()),
                            (v = o.getShort()),
                            (S = o.getShort()),
                            (I = o.getShort()),
                            (m = o.getShort()),
                            (A = o.getShort()),
                            (C = o.getByte()),
                            (P = o.getShort()),
                            (R = o.getShort()),
                            (O = o.getShort()),
                            (this._petEquipData.compareItem.power1 = r),
                            (this._petEquipData.compareItem.power2 = u),
                            (this._petEquipData.compareItem.power3 = d),
                            (this._petEquipData.compareItem.power4 = E),
                            (this._petEquipData.compareItem.power5 = g),
                            (this._petEquipData.compareItem.power6 = S),
                            (this._petEquipData.compareItem.power7 = m),
                            (this._petEquipData.compareItem.petLevel = t),
                            (this._petEquipData.compareItem.powerValue1 = s),
                            (this._petEquipData.compareItem.powerValue2 = _),
                            (this._petEquipData.compareItem.powerValue3 = p),
                            (this._petEquipData.compareItem.powerValue4 = y),
                            (this._petEquipData.compareItem.powerValue5 = v),
                            (this._petEquipData.compareItem.powerValue6 = I),
                            (this._petEquipData.compareItem.powerValue7 = A),
                            (this._petEquipData.compareItem.bindPower1 = c),
                            (this._petEquipData.compareItem.bindPower2 = f),
                            (this._petEquipData.compareItem.bindPowerValue1 =
                              h),
                            (this._petEquipData.compareItem.bindPowerValue2 =
                              T),
                            (this._petEquipData.compareItem.def_str = P),
                            (this._petEquipData.compareItem.def_agi = R),
                            (this._petEquipData.compareItem.def_mag = O),
                            (this._petEquipData.compareItem.petEquipSkillLevel =
                              C),
                            [2]))
                  );
              }
            });
          });
        }),
        (t.prototype.c2s_doSomething = function (e, t, i) {
          var o = new n.Message(pb.EUserProtocol.C2S_DOSOMETHING),
            a = o.proto;
          (a.type = e), (a.uuid = t), (a.count = i), this.sendProto(o);
        }),
        (t.prototype.s2c_doSomething = function (e) {
          var t = e.body,
            i = t.proto;
          if ((i.msg && H["default"].loginConfirm(i.msg), i.rs === !0))
            if (1 == i.type) {
              var o = M["default"].getProxy(
                D.ModName.Country,
                D.ProxyType.Country,
              );
              o.mtRequest(pb.ConfigType.sell_item_cache);
            } else
              2 == i.type
                ? this.sendNt(r.MainEvent.ON_RECEIVE_CALENDAR, i.calendar)
                : i.type == pb.Type.active_LV_UP &&
                  this.sendNt(r.MainEvent.ON_PLAYER_LEVEL_UP_REFRESH);
        }),
        t
      );
    })(s["default"]);
  t["default"] = F;
});
