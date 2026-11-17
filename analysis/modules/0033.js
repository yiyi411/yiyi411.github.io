(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(5),
    n = i(4),
    a = i(32),
    r = i(31),
    s = i(24),
    l = i(3),
    u = i(2),
    _ = i(1),
    d = i(0),
    p = i(13),
    c = i(28),
    h = i(44),
    f = i(25),
    T = (function () {
      function e(t) {
        ((this.bagSize = 0),
          (this.bagEnd = 0),
          (this.store = new Array(
            600 +
              e.MAX_STORE_SIZE +
              e.MAX_VIP9STORE_SIZE +
              e.MAX_HIGHT_VIP_9_STORE_SIZE,
          )),
          (this.player = t));
      }
      return (
        (e.prototype.getVipStorageEnd = function () {
          var t = r.ModelVo.getPlayerMaxVIP();
          return 7 == t
            ? e.VIP7STORE_END - 1
            : 8 == t
              ? e.VIP8STORE_END - 1
              : 9 == t
                ? e.VIP9STORE_END - 1
                : e.VIPSTORE_END - 1;
        }),
        (e.prototype.getHightVipStorageEnd = function () {
          var t = r.ModelVo.getPlayerMaxVIP();
          return 5 == t
            ? e.HIGHT_VIP_5_STORE_END - 1
            : 6 == t
              ? e.HIGHT_VIP_6_STORE_END - 1
              : 7 == t
                ? e.HIGHT_VIP_7_STORE_END - 1
                : 8 == t
                  ? e.HIGHT_VIP_8_STORE_END - 1
                  : 9 == t
                    ? e.HIGHT_VIP_9_STORE_END - 1
                    : -1;
        }),
        (e.prototype.isValidVipStoragePos = function (t) {
          return t >= e.VIPSTORE_START && t <= this.getVipStorageEnd();
        }),
        (e.prototype.isValidHightVipStoragePos = function (t) {
          return (
            t >= e.HIGHT_VIPSTORE_START && t <= this.getHightVipStorageEnd()
          );
        }),
        (e.prototype.getStorageNum = function () {
          return this.player.numStroe;
        }),
        (e.prototype.getStorageEnd = function () {
          return e.STORE_START + this.player.numStroe - 1;
        }),
        (e.prototype.isValidStoragePos = function (t) {
          return t >= e.STORE_START && t <= this.getStorageEnd();
        }),
        (e.prototype.isStorageFull = function () {
          var t = this.getStartEndPos(e.TYPE_STORAGE_POS);
          if (null != t)
            for (var i = t[0]; i < t[1]; i++)
              if (null == this.getItem(i)) return !1;
          return !0;
        }),
        (e.prototype.changeItemPos = function (e, t, i) {
          if (null == e) return !1;
          var o = this.store[i];
          return (
            o && o.name == e.name && 1 == o.isStackable()
              ? (o.quantity += e.quantity)
              : ((this.store[i] = e), (e.slotPos = i)),
            (this.store[t] = null),
            !0
          );
        }),
        (e.prototype.putItemByStorage = function (e) {
          if (null == e) return !1;
          var t = e.slotPos;
          if (0 == this.isValidBagPos(t)) return !1;
          var i = this.addStorageItem(e);
          return 0 == this.isValidStoragePos(i)
            ? !1
            : ((this.store[t] = null), !0);
        }),
        (e.prototype.putItemByVIPStorage = function (e) {
          if (null == e) return !1;
          var t = e.slotPos;
          if (0 == this.isValidBagPos(t)) return !1;
          var i = this.addVIPStorageItem(e);
          return 0 == this.isValidVipStoragePos(i)
            ? !1
            : ((this.store[t] = null), !0);
        }),
        (e.prototype.putItemByHightVIPStorage = function (e) {
          if (null == e) return !1;
          var t = e.slotPos;
          if (0 == this.isValidBagPos(t)) return !1;
          var i = this.addHightVIPStorageItem(e);
          return 0 == this.isValidHightVipStoragePos(i)
            ? !1
            : ((this.store[t] = null), !0);
        }),
        (e.prototype.getItemByStorage = function (e) {
          if (null == e) return !1;
          var t = e.slotPos;
          if (0 == this.isValidStoragePos(t)) return !1;
          var i = this.addItem_1(e);
          return 0 == this.isValidBagPos(i) ? !1 : ((this.store[t] = null), !0);
        }),
        (e.prototype.getItemByVIPStorage = function (e) {
          if (null == e) return !1;
          var t = e.slotPos;
          if (0 == this.isValidVipStoragePos(t)) return !1;
          var i = this.addItem_1(e);
          return 0 == this.isValidBagPos(i) ? !1 : ((this.store[t] = null), !0);
        }),
        (e.prototype.getItemByHightVIPStorage = function (e) {
          if (null == e) return !1;
          var t = e.slotPos;
          if (0 == this.isValidHightVipStoragePos(t)) return !1;
          var i = this.addItem_1(e);
          return 0 == this.isValidBagPos(i) ? !1 : ((this.store[t] = null), !0);
        }),
        (e.prototype.clearStorageItem = function () {
          this.clearItem(e.STORE_START, this.getStorageEnd());
        }),
        (e.prototype.clearVipStorageItem = function () {
          this.clearItem(e.VIPSTORE_START, this.getVipStorageEnd());
        }),
        (e.prototype.clearHightVipStorageItem = function () {
          this.clearItem(e.HIGHT_VIPSTORE_START, this.getHightVipStorageEnd());
        }),
        (e.prototype.clearEquipAndBagItem = function () {
          this.clearItem(e.EQUIP_POS_START, this.bagEnd);
        }),
        (e.prototype.clearItem = function (e, t) {
          for (var i = e; t >= i; i++) this.store[i] = null;
        }),
        (e.prototype.getClone = function (t) {
          var i = new e(t);
          return (this.setPlayerBagData(i), i);
        }),
        (e.prototype.setPlayerBagData = function (t) {
          if (((t.bagEnd = this.bagEnd), null != this.store))
            for (var i = e.EQUIP_POS_START; i < e.EQUIP_POS_END; i++) {
              var o = this.getItem(i);
              if (null != o) {
                var n = o.clone();
                (o.setVarItemDataTo(n), t.setItem(n));
              }
            }
        }),
        (e.prototype.initBagItem = function (e) {
          if (null == this.store)
            return (
              console.error(
                "PlayerBag.initBagItem() 背包为空. PID ---> " + this.playerID,
              ),
              -1
            );
          if (null == e)
            return (
              console.error(
                "PlayerBag.initBagItem() 物品列表为空. PID ---> " +
                  this.playerID,
              ),
              -2
            );
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            this.setItem(i);
          }
          return (
            l["default"].sendNt(u.RoleEvent.ROLE_ARTIFACT_UP_RED, e),
            l["default"].sendNt(u.MainEvent.ON_BAG_HINT, !1),
            n["default"].SUCCESS
          );
        }),
        (e.prototype.get = function (t) {
          switch (t) {
            case a["default"].EQP_ATK_MAX:
            case a["default"].EQP_ATK_MIN:
            case a["default"].EQP_HIT_TIME:
            case a["default"].EQP_HITRATE:
              var i = [e.WEAPON_LEFT_POS, e.WEAPON_RIGHT_POS];
              return this.getForArray(t, i);
            case a["default"].EQP_DEF_STR:
            case a["default"].EQP_DEF_AGI:
            case a["default"].EQP_DEF_MAGIC:
              return this.get_3(t, e.EQUIP_POS_START, e.EQUIP_POS_END);
            case a["default"].EQP_ATK_TYPE:
              return this.getItemAtkType();
          }
          return 0;
        }),
        (e.prototype.getForPos = function (e, t) {
          return 0 == this.isValidPos(t)
            ? -1
            : null == this.store[t]
              ? -1
              : this.store[t].get(e);
        }),
        (e.prototype.getForArray = function (e, t) {
          if (null == t || t.length <= 0) return 0;
          for (var i = 0, o = 0; o < t.length; o++) {
            var n = t[o];
            0 != this.isValidPos(o) &&
              null != this.store[n] &&
              (i += this.store[n].get(e));
          }
          return i;
        }),
        (e.prototype.get_3 = function (e, t, i) {
          for (var o = 0, n = t; i > n; n++)
            0 != this.isValidPos(n) &&
              null != this.store[n] &&
              (o += this.store[n].get(e));
          return o;
        }),
        (e.prototype.getItemAtkType = function () {
          var t = this.getForPos(a["default"].EQP_ATK_TYPE, e.WEAPON_LEFT_POS);
          return -1 != t
            ? t
            : ((t = this.getForPos(
                a["default"].EQP_ATK_TYPE,
                e.WEAPON_RIGHT_POS,
              )),
              -1 != t ? t : n["default"].ATKTYPE_STR);
        }),
        (e.prototype.getEquipPowerValue = function (t) {
          if (0 >= t) return 0;
          for (var i = 0, o = e.EQUIP_POS_START; o < e.EQUIP_POS_END; o++) {
            var n = this.store[o];
            if (null != n) {
              var a = n.getPowerValue(t);
              i += a;
            }
          }
          return i;
        }),
        (e.prototype.getEquipItemSetNum = function (t) {
          if (0 >= t) return 0;
          for (var i, o = 0, n = e.EQUIP_POS_START; n < e.EQUIP_POS_END; n++)
            ((i = this.store[n]),
              null != i && i.get(a["default"].EQP_ITEM_SET_ID) == t && o++);
          return o;
        }),
        (e.prototype.addVIPStorageItem = function (t) {
          return null == t
            ? -1
            : this.addItem_3(e.TYPE_VIPSTORAGE_POS, t, t.quantity);
        }),
        (e.prototype.addHightVIPStorageItem = function (t) {
          return null == t
            ? -1
            : this.addItem_3(e.TYPE_HIGHT_VIPSTORAGE_POS, t, t.quantity);
        }),
        (e.prototype.addStorageItem = function (t) {
          return null == t
            ? -1
            : this.addItem_3(e.TYPE_STORAGE_POS, t, t.quantity);
        }),
        (e.prototype.addItem_1 = function (e) {
          return null == e ? -1 : this.addItem_2(e, e.quantity);
        }),
        (e.prototype.addItem_2 = function (t, i) {
          return this.addItem_3(e.TYPE_BAG_POS, t, i);
        }),
        (e.prototype.addItem_3 = function (e, t, i) {
          if (null == t) return -1;
          if (0 >= i) return -2;
          if (1 == t.isStackable() && i > t.stackNum) return -3;
          var o = this.nextFreePos(e, t, i, !0);
          return 0 == this.isValidPos(o)
            ? -4
            : null != this.store[o]
              ? 0 == t.isStackable()
                ? -5
                : this.store[o].quantity + i > this.store[o].stackNum
                  ? -6
                  : ((this.store[o].quantity += i), o)
              : (0 == t.isStackable() ? (t.quantity = 1) : (t.quantity = i),
                (t.slotPos = o),
                (this.store[o] = t),
                (t.ShowNewSign = !0),
                l["default"].sendNt(u.MainEvent.ON_BAG_HINT, !0),
                this.getNewEquip(t),
                o);
        }),
        (e.prototype.getNewEquip = function (t) {
          var i = o["default"].myPlayer.getLevel() >= 30;
          if (!i) {
            var n = o["default"].myPlayer;
            if (n && t.isEquipClass()) {
              var r = !1;
              a["default"].isValidEquipRequire(n, t, null) && (r = !0);
              var s = e.getCompareEquip(n.bag, t.type);
              if (
                (s && s.type != t.type && (r = !1),
                r && !_["default"].hasWindow())
              ) {
                var l = p.GUtil.compareEquip(t);
                if (l) {
                  if (h.GuideModel.ins.curGuide) return;
                  if (h.GuideModel.ins.isGuide) return;
                  if (f.GuideDefine.batterEquipIds.includes(t.id)) return;
                  if (
                    !c["default"].ins.getIsOpen(
                      c.LevelOpenId.MainBetterEquip,
                      !1,
                    )
                  )
                    return;
                  _["default"].showTip(
                    d.ModName.Main,
                    d.MainViewType.MainBetterEquip,
                    t,
                  );
                }
              }
            }
          }
        }),
        (e.prototype.getStartEndPos = function (t) {
          var i = 0,
            o = 0;
          switch (t) {
            case e.TYPE_EQUIP_POS:
              ((i = e.EQUIP_POS_START), (o = e.EQUIP_POS_END - 1));
              break;
            case e.TYPE_BAG_POS:
              ((i = e.BAG_START), (o = this.bagEnd));
              break;
            case e.TYPE_STORAGE_POS:
              ((i = e.STORE_START), (o = this.getStorageEnd()));
              break;
            case e.TYPE_VIPSTORAGE_POS:
              ((i = e.VIPSTORE_START), (o = this.getVipStorageEnd()));
              break;
            case e.TYPE_HIGHT_VIPSTORAGE_POS:
              ((i = e.HIGHT_VIPSTORE_START),
                (o = this.getHightVipStorageEnd()));
          }
          return [i, o];
        }),
        (e.prototype.nextFreePos = function (e, t, i, o) {
          if (null == t) return -1;
          var n = -1,
            a = this.getStartEndPos(e),
            r = a[0],
            s = a[1];
          if (1 == t.isStackable())
            for (var l = r; s >= l; l++)
              if (
                0 != this.isValidPos(l) &&
                null != this.store[l] &&
                !(
                  this.store[l].isShopLocked() ||
                  this.store[l].id != t.id ||
                  this.store[l].quantity + i > this.store[l].stackNum
                )
              ) {
                n = l;
                break;
              }
          return 1 == this.isValidPos(n)
            ? n
            : 0 == o
              ? n
              : this.nextFreePosForType(e);
        }),
        (e.prototype.nextFreePosForType = function (e) {
          var t = this.getStartEndPos(e);
          return this.findFreePos(t[0], t[1]);
        }),
        (e.prototype.findFreePos = function (e, t) {
          for (var i = e; t >= i; i++)
            if (0 != this.isValidPos(i) && null == this.store[i]) return i;
          return -1;
        }),
        (e.prototype.countFreePos = function () {
          for (var t = 0, i = e.BAG_START; i <= this.bagEnd; i++)
            null == this.store[i] && t++;
          return t;
        }),
        (e.prototype.countUsedSlot_1 = function (e) {
          var t = 0;
          if (null == e) return t;
          for (var i = 0; i < e.length; i++) {
            var o = e[i];
            0 != this.isValidPos(o) && null != this.store[o] && t++;
          }
          return t;
        }),
        (e.prototype.countUsedSlot_2 = function (e, t) {
          for (var i = 0, o = e; t >= o; o++)
            0 != this.isValidPos(o) && null != this.store[o] && i++;
          return i;
        }),
        (e.prototype.equipItemForPos = function (t) {
          var i = this.getItem(t);
          if (null == i) return -23;
          var o = e.getEquipPosByType(i.type);
          return this.equipItem(t, o);
        }),
        (e.prototype.equipItem = function (t, i) {
          if (null == this.store) return -1;
          var o = this.getItem(t);
          if (null == o) return -2;
          if (null == i || i.length <= 0) return -3;
          for (var a = 0; a < i.length; a++)
            if (0 == this.isValidByEquipTypeAndPos(i[a], o.type)) return -4;
          var r = !1,
            s = this.isHaveEquipOneHandHand();
          if (
            (s > 0 && e.isOneHandWeaponType(o.type) && (r = !0),
            0 == r &&
              1 == e.isValidWeaponPos(i[0]) &&
              (this.isSameWeaponType(o.type) < 0 ||
                1 == this.isTwoHandWeaponType(o.type)))
          )
            return this.equipWeapon(o.slotPos);
          for (var a = 0; a < i.length; a++) {
            var l = i[a];
            if (0 == e.isValidEquipPos(l)) return -5;
            var u = this.store[l];
            if (null == u) return this.swapItem(l, o.slotPos);
            if (o.type == n["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND) {
              if (u.type == n["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND)
                return this.swapItem(l, o.slotPos);
            } else if (1 == r && e.isOneHandWeaponType(u.type))
              return this.swapItem(l, o.slotPos);
          }
          return o.type == n["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND
            ? -6
            : 1 == r
              ? -7
              : this.swapItem(i[0], o.slotPos);
        }),
        (e.prototype.equipWeapon = function (t) {
          var i = this.countUsedSlot_1([e.WEAPON_LEFT_POS, e.WEAPON_RIGHT_POS]);
          if (2 == i) {
            if (this.countFreePos() < i - 1) return -11;
            var o = this.nextFreePosForType(e.TYPE_BAG_POS);
            0 == this.isValidBagPos(o);
            var n = this.swapItem(e.WEAPON_LEFT_POS, t);
            if (1 != n) return -12;
            if (((n = this.swapItem(e.WEAPON_RIGHT_POS, o)), 1 != n))
              return (this.swapItem(t, e.WEAPON_LEFT_POS), -13);
          } else if (1 == i) {
            if (null != this.store[e.WEAPON_RIGHT_POS]) {
              var a = this.swapItem(e.WEAPON_LEFT_POS, e.WEAPON_RIGHT_POS);
              if (1 != a) return -14;
            }
            var n = this.swapItem(e.WEAPON_LEFT_POS, t);
            if (1 != n) return -15;
          } else if (0 == i) {
            var n = this.swapItem(e.WEAPON_LEFT_POS, t);
            if (1 != n) return -16;
          }
          return 1;
        }),
        (e.isOneHandWeaponType = function (e) {
          return (
            e == n["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD ||
            e == n["default"].ITEM_TYPE_WEAPON_ONEHAND_BLADE ||
            e == n["default"].ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW ||
            e == n["default"].ITEM_TYPE_WEAPON_ONEHAND_GUN
          );
        }),
        (e.prototype.isHaveEquipOneHandHand = function () {
          return null != this.store[e.WEAPON_LEFT_POS] &&
            this.store[e.WEAPON_LEFT_POS].type ==
              n["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND
            ? e.WEAPON_LEFT_POS
            : null != this.store[e.WEAPON_RIGHT_POS] &&
                this.store[e.WEAPON_RIGHT_POS].type ==
                  n["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND
              ? e.WEAPON_RIGHT_POS
              : -1;
        }),
        (e.prototype.isSameWeaponType = function (t) {
          if (null == this.store) return -2;
          if (t == n["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND) {
            var i = -1;
            null != this.store[e.WEAPON_LEFT_POS] &&
              (i = this.store[e.WEAPON_LEFT_POS].type);
            var o = -1;
            return (
              null != this.store[e.WEAPON_RIGHT_POS] &&
                (o = this.store[e.WEAPON_RIGHT_POS].type),
              (!e.isOneHandWeaponType(i) ||
                (-1 != o && o != n["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND)) &&
              (!e.isOneHandWeaponType(o) ||
                (-1 != i && i != n["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND))
                ? -5
                : 3
            );
          }
          return null != this.store[e.WEAPON_LEFT_POS] &&
            t != this.store[e.WEAPON_LEFT_POS].type
            ? -3
            : null != this.store[e.WEAPON_RIGHT_POS] &&
                t != this.store[e.WEAPON_RIGHT_POS].type
              ? -4
              : null == this.store[e.WEAPON_LEFT_POS] &&
                  null == this.store[e.WEAPON_RIGHT_POS]
                ? 2
                : 1;
        }),
        (e.prototype.unequipItem = function (t) {
          if (null == t) return -1;
          var i = t.slotPos;
          if (!e.isValidEquipPos(i)) return -2;
          var o = this.nextFreePosForType(e.TYPE_BAG_POS);
          if (0 > o) return -3;
          var n = !1,
            a = this.isHaveEquipOneHandHand();
          return (
            e.isOneHandWeaponType(t.type) && a > 0 && (n = !0),
            1 == n && this.countFreePos() < 2
              ? -4
              : (this.swapItem(i, o),
                1 == n &&
                  ((o = this.nextFreePosForType(e.TYPE_BAG_POS)),
                  1 == this.isValidBagPos(o) && this.swapItem(a, o)),
                o)
          );
        }),
        (e.prototype.getItem = function (e) {
          return null == this.store
            ? null
            : 0 == this.isValidPos(e)
              ? null
              : this.store[e];
        }),
        (e.prototype.getBagItemBySlotPos = function (e) {
          return this.isValidBagPos(e) ? this.getItem(e) : null;
        }),
        (e.prototype.setItem = function (e, t) {
          return (
            t || (t = e.slotPos),
            null == this.store
              ? -1
              : null == e
                ? -2
                : 0 == this.isValidPos(t)
                  ? -3
                  : ((e.slotPos = t), (this.store[t] = e), n["default"].SUCCESS)
          );
        }),
        (e.prototype.removeItem = function (e) {
          if (0 == this.isValidPos(e)) return -1;
          var t = this.getItem(e);
          return null == t ? -2 : ((this.store[e] = null), 1);
        }),
        (e.prototype.removeBagItemByPos = function (e, t) {
          var i = this.getItem(e);
          return null == i
            ? -3
            : t > i.quantity
              ? -4
              : 0 > t
                ? -5
                : ((i.quantity -= t),
                  i.quantity <= 0 && (this.store[e] = null),
                  n["default"].SUCCESS);
        }),
        (e.prototype.removeBagItemByPosProto = function (e, t) {
          var i = this.getItem(e);
          return null == i
            ? -3
            : ((i.quantity = t),
              i.quantity <= 0 && (this.store[e] = null),
              n["default"].SUCCESS);
        }),
        (e.prototype.removeBagItemByNum = function (t, i) {
          var o = this.getItemNumByID(t);
          if (i > o) return -1;
          for (var n = this.bagEnd; n >= e.BAG_START; n--) {
            var a = this.getItem(n);
            if (null != a && a.id == t) {
              if (a.quantity > i) return ((a.quantity -= i), 1);
              if (a.quantity == i) return ((this.store[n] = null), 1);
              ((i -= a.quantity), (this.store[n] = null));
            }
          }
          return i > 0 ? -1 : 1;
        }),
        (e.prototype.getCanUsePetItemList = function () {
          if (null == this.store) return null;
          for (var t = [], i = e.BAG_START; i <= this.bagEnd; i++) {
            var o = this.store[i];
            null != o &&
              (o.isNotOperate() || (o.isPetCanUseItem() && t.push(o)));
          }
          return t;
        }),
        (e.prototype.getCanUsePetItemList2 = function () {
          if (null == this.store) return null;
          for (var t = [], i = e.BAG_START; i <= this.bagEnd; i++) {
            var o = this.store[i];
            null != o &&
              (o.isNotOperate() || (o.isPetCanUseItem2() && t.push(o)));
          }
          return t;
        }),
        (e.prototype.getPetItemReset1 = function () {
          if (null == this.store) return null;
          for (var t = [], i = e.BAG_START; i <= this.bagEnd; i++) {
            var o = this.store[i];
            null != o && (o.isNotOperate() || (o.isPetReset1() && t.push(o)));
          }
          return t;
        }),
        (e.getMyBagPetItemReset1Num = function () {
          var e = o["default"].myPlayer;
          if (null == e) return 0;
          var t = e.bag;
          return null == t
            ? 0
            : t.getItemNumByID(n["default"].ITEM_ID_PET_RESET);
        }),
        (e.prototype.getPetItemReset2 = function () {
          if (null == this.store) return null;
          for (var t = [], i = e.BAG_START; i <= this.bagEnd; i++) {
            var o = this.store[i];
            null != o && (o.isNotOperate() || (o.isPetReset2() && t.push(o)));
          }
          return t;
        }),
        (e.getMyBagPetItemReset2Num = function () {
          var e = o["default"].myPlayer;
          if (null == e) return 0;
          var t = e.bag;
          return null == t
            ? 0
            : t.getItemNumByID(n["default"].ITEM_ID_PET_RESET2);
        }),
        (e.prototype.getPetAgeItem = function () {
          if (null == this.store) return null;
          for (var t = [], i = e.BAG_START; i <= this.bagEnd; i++) {
            var o = this.store[i];
            null != o && (o.isNotOperate() || (o.isPetAgeItem() && t.push(o)));
          }
          return t;
        }),
        (e.prototype.getPetItemAddSkillList = function () {
          if (null == this.store) return null;
          for (var t = [], i = e.BAG_START; i <= this.bagEnd; i++) {
            var o = this.store[i];
            null != o && (o.isNotOperate() || (o.isPetAddSkill() && t.push(o)));
          }
          return t;
        }),
        (e.getMyBagPetItemAddSkillNum = function () {
          var e = o["default"].myPlayer;
          if (null == e) return 0;
          var t = e.bag;
          return null == t
            ? 0
            : t.getItemNumByID(n["default"].ITEM_ID_PET_ADD_SKILL);
        }),
        (e.prototype.getItemByType = function (e, t) {
          if ((void 0 === t && (t = 0), null == this.store)) return null;
          for (var i = [], o = t; o <= this.bagEnd; o++) {
            var n = this.store[o];
            null != n && (n.isNotOperate() || (n.type == e && i.push(n)));
          }
          return i;
        }),
        (e.prototype.getItemByTypeList = function (e, t) {
          if ((void 0 === t && (t = 0), null == this.store)) return null;
          for (var i = [], o = t; o <= this.bagEnd; o++) {
            var n = this.store[o];
            null != n &&
              (n.isNotOperate() || (e.indexOf(n.type) >= 0 && i.push(n)));
          }
          return i;
        }),
        (e.prototype.getItemByIdList = function (t) {
          if (null == this.store) return null;
          for (var i = [], o = e.BAG_START; o <= this.bagEnd; o++) {
            var n = this.store[o];
            null != n &&
              (n.isNotOperate() || (t.indexOf(n.id) >= 0 && i.push(n)));
          }
          return i;
        }),
        (e.prototype.getCanUseItemList = function (t) {
          if (null == this.store) return null;
          for (var i = [], a = e.BAG_START; a <= this.bagEnd; a++) {
            var r = this.store[a];
            null != r &&
              (r.isNotOperate() ||
                r.isPetCanUseItem() ||
                r.vipLevelReq > this.player.getVipLevel() ||
                (n["default"].POWER_NEW_GET_PET != r.power1 &&
                  n["default"].POWER_NEW_GET_ITEM != r.power1 &&
                  n["default"].POWER_ENCHANT_ITEM != r.power1 &&
                  n["default"].POWER_FORMATION_BOOK != r.power1 &&
                  n["default"].POWER_TURN_MONSTER_CARD != r.power1 &&
                  (r.isColorBox() ||
                    r.isUpgradeIntensifyScroll() ||
                    (r.isVipItem() &&
                      this.player.getVipLevel() > 0 &&
                      o["default"].isVipOverDue(this.player)) ||
                    (r.isCanUse(t) && i.push(r)))));
          }
          return i;
        }),
        (e.prototype.getAttachGemItemList = function (t) {
          if (null == this.store) return null;
          if (null == t) return null;
          for (var i = [], o = e.BAG_START; o <= this.bagEnd; o++) {
            var a = this.store[o];
            null != a &&
              (a.isNotOperate() ||
                (a.type == n["default"].ITEM_TYPE_GEM &&
                  ((0 == t.isAttackBroken() &&
                    t.attachDone > 0 &&
                    t.attachPower != a.power1) ||
                    i.push(a))));
          }
          return i;
        }),
        (e.prototype.getCanChangeAttachGemItemList = function (t) {
          if (null == this.store) return null;
          if (null == t) return null;
          for (var i = [], o = e.BAG_START; o <= this.bagEnd; o++) {
            var r = this.store[o];
            null != r &&
              (r.isNotOperate() ||
                (r.type == n["default"].ITEM_TYPE_GEM &&
                  0 != a["default"].isReplaceInlayGem(r.power1) &&
                  1 != r.powerValue1 &&
                  i.push(r)));
          }
          return i;
        }),
        (e.getCompareEquip = function (t, i) {
          if (null == t) return null;
          var o = this.getEquipPosByType(i);
          if (null == o) return null;
          for (var a = 0; a < o.length; a++) {
            var r = o[a];
            if (0 != e.isValidEquipPos(r)) {
              var s = t.getItem(r);
              if (null != s) {
                if (
                  i == n["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND &&
                  s.type != i
                )
                  continue;
                return s;
              }
            }
          }
          return null;
        }),
        (e.getEquipPosByType = function (t) {
          var i = null;
          switch (t) {
            case n["default"].ITEM_TYPE_ARMOR_HEAD:
              return ((i = []), (i[0] = e.ARMOR_HEAD_POS), i);
            case n["default"].ITEM_TYPE_ARMOR_CLOTHES:
              return ((i = []), (i[0] = e.ARMOR_CLOTHES_POS), i);
            case n["default"].ITEM_TYPE_ARMOR_TROUSERS:
              return ((i = []), (i[0] = e.ARMOR_TROUSERS_POS), i);
            case n["default"].ITEM_TYPE_ARMOR_SHOULDER:
              return ((i = []), (i[0] = e.ARMOR_SHOULDER_POS), i);
            case n["default"].ITEM_TYPE_ARMOR_WAIST:
              return ((i = []), (i[0] = e.ARMOR_WAIST_POS), i);
            case n["default"].ITEM_TYPE_ARMOR_BACK:
              return ((i = []), (i[0] = e.ARMOR_BACK_POS), i);
            case n["default"].ITEM_TYPE_ARMOR_SHOES:
              return ((i = []), (i[0] = e.ARMOR_SHOES_POS), i);
            case n["default"].ITEM_TYPE_ARMOR_HAND:
              return ((i = []), (i[0] = e.ARMOR_HAND_POS), i);
            case n["default"].ITEM_TYPE_ARMOR_NECKLACE:
              return ((i = []), (i[0] = e.ARMOR_NECKLACE_POS), i);
            case n["default"].ITEM_TYPE_ARMOR_RING:
              return (
                (i = []),
                (i[0] = e.ARMOR_RING_LEFT_POS),
                (i[1] = e.ARMOR_RING_RIGHT_POS),
                i
              );
            case n["default"].ITEM_TYPE_ARMOR_AMULET:
              return ((i = []), (i[0] = e.ARMOR_AMULET_POS), i);
            case n["default"].ITEM_TYPE_ARMOR_TRANSPORT:
              return ((i = []), (i[0] = e.ARMOR_TRANSPORT_POS), i);
            case n["default"].ITEM_TYPE_ARMOR_FASHION:
              return ((i = []), (i[0] = e.ARMOR_FASHION_POS), i);
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_SWORD:
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_BLADE:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_BLADE:
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_HEAVY:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_HEAVY:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_STAFF:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_LANCE:
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_CROSSBOW:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_BOW:
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND:
            case n["default"].ITEM_TYPE_WEAPON_BALL:
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_GUN:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_GUN:
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_HAMMER:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_HAMMER:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_FAN:
              return (
                (i = []),
                (i[0] = e.WEAPON_LEFT_POS),
                (i[1] = e.WEAPON_RIGHT_POS),
                i
              );
            case n["default"].ITEM_TYPE_PET:
              return ((i = []), (i[0] = e.PET_POS), i);
            case n["default"].ITEM_TYPE_BLOOD_BOTTLE:
              return ((i = []), (i[0] = e.BLOOD_BOTTLE_POS), i);
          }
          return null;
        }),
        (e.prototype.swapItem = function (t, i) {
          if (0 == this.isValidPos(t)) return -501;
          if (0 == this.isValidPos(i)) return -502;
          var o = this.store[t],
            n = this.store[i];
          return (
            null != o &&
              ((o.slotPos = i),
              0 == e.isValidEquipPos(i) &&
                o.durability > o.durMax &&
                (o.durability = o.durMax)),
            (this.store[i] = o),
            null != n &&
              ((n.slotPos = t),
              0 == e.isValidEquipPos(t) &&
                n.durability > n.durMax &&
                (n.durability = n.durMax)),
            (this.store[t] = n),
            1
          );
        }),
        (e.prototype.isValidPos = function (e) {
          return e >= 0 && e < this.store.length;
        }),
        (e.prototype.isValidBagPos = function (t) {
          return t >= e.BAG_START && t <= this.bagEnd;
        }),
        (e.isValidEquipPos = function (t) {
          return t >= e.EQUIP_POS_START && t < e.EQUIP_POS_END;
        }),
        (e.isValidWeaponPos = function (t) {
          return t == e.WEAPON_LEFT_POS || t == e.WEAPON_RIGHT_POS;
        }),
        (e.prototype.isTwoHandWeaponType = function (e) {
          return e == n["default"].ITEM_TYPE_WEAPON_TWOHAND_SWORD ||
            e == n["default"].ITEM_TYPE_WEAPON_TWOHAND_BLADE ||
            e == n["default"].ITEM_TYPE_WEAPON_TWOHAND_HEAVY ||
            e == n["default"].ITEM_TYPE_WEAPON_TWOHAND_STAFF ||
            e == n["default"].ITEM_TYPE_WEAPON_TWOHAND_LANCE ||
            e == n["default"].ITEM_TYPE_WEAPON_TWOHAND_CROSSBOW ||
            e == n["default"].ITEM_TYPE_WEAPON_BALL ||
            e == n["default"].ITEM_TYPE_WEAPON_TWOHAND_BOW ||
            e == n["default"].ITEM_TYPE_WEAPON_TWOHAND_GUN ||
            e == n["default"].ITEM_TYPE_WEAPON_TWOHAND_HAMMER ||
            e == n["default"].ITEM_TYPE_WEAPON_TWOHAND_FAN
            ? !0
            : !1;
        }),
        (e.prototype.isValidByEquipTypeAndPos = function (t, i) {
          var o = e.getEquipPosByType(i);
          if (null == o || o.length <= 0) return !1;
          for (var n = 0; n < o.length; n++) if (o[n] == t) return !0;
          return !1;
        }),
        (e.prototype.checkEquipTimeItem = function () {
          var t = !1;
          null != this.player &&
            this.player.getVipLevel() > 0 &&
            o["default"].isVipOverDue(this.player) &&
            (t = !0);
          for (var i = e.EQUIP_POS_START; i < e.EQUIP_POS_END; i++) {
            var n = this.getItem(i);
            null != n &&
              (n.checkTimeItem(),
              n.setStatusBit(!1, a["default"].STATUS_VIP_TIME_OUT),
              n.isVipItem() &&
                1 == t &&
                n.setStatusBit(!0, a["default"].STATUS_VIP_TIME_OUT));
          }
        }),
        (e.prototype.changeDurability = function (t, i) {
          for (var o = e.EQUIP_POS_START; o < e.EQUIP_POS_END; o++) {
            var n = this.getItem(o);
            if (null != n && o != e.SPIRIT_POS && 0 != n.durability) {
              var a = n.durability;
              if (0 > t) {
                if (i == e.DUR_CHANGE_TYPE_POINT) a += t;
                else if (i == e.DUR_CHANGE_TYPE_PERCENT) {
                  var r = 100 + t;
                  a = (a * r) / 100;
                }
                0 > a && (a = 0);
              }
              n.durability = a;
            }
          }
          l["default"].sendNt(u.BagEvent.BAG_CHANGE_DURABILITY, !0);
        }),
        (e.prototype.handlePlayerDurability = function (t) {
          t
            ? this.changeDurability(-e.DEAD_DUR_DOWN, e.DUR_CHANGE_TYPE_PERCENT)
            : this.changeDurability(-e.DUR_DOWN_POINT, e.DUR_CHANGE_TYPE_POINT);
        }),
        (e.prototype.getItemByID = function (t) {
          for (var i, o = e.BAG_START; o <= this.bagEnd; o++) {
            var n = this.getItem(o);
            if (null != n && n.id == t) {
              i = n;
              break;
            }
          }
          return i;
        }),
        (e.prototype.getItemNumByID = function (t) {
          for (var i = 0, o = e.BAG_START; o <= this.bagEnd; o++) {
            var n = this.getItem(o);
            null != n && n.id == t && (i += n.quantity);
          }
          return i;
        }),
        (e.prototype.isEquipItemByIdInEquip = function (t) {
          for (var i = e.EQUIP_POS_START; i < e.EQUIP_POS_END; i++) {
            var o = this.getItem(i);
            if (null != o && o.id == t) return !0;
          }
          return !1;
        }),
        (e.prototype.isBagFull = function (e) {
          var t = [];
          return ((t[0] = e), this.isBagFullForList(t, a["default"][0]));
        }),
        (e.prototype.isBagFullForItem = function (e, t) {
          var i = [];
          return ((i[0] = t), this.isBagFullForList(e, i));
        }),
        (e.prototype.isBagFullForList = function (t, i) {
          var o = this.countFreePos(),
            n = 0,
            a = null;
          if (null != t && t.length > 0)
            for (var r = 0; r < t.length; r++)
              if (((a = t[r]), null != a))
                if (0 != a.isStackable()) {
                  var s = this.nextFreePos(e.TYPE_BAG_POS, a, a.quantity, !1);
                  0 == this.isValidBagPos(s) && n++;
                } else n++;
          if (null != i && i.length > 0)
            for (var r = 0; r < i.length; r++)
              if (((a = i[r]), null != a)) {
                if (0 == a.isStackable()) {
                  n++;
                  break;
                }
                var s = this.nextFreePos(e.TYPE_BAG_POS, a, a.quantity, !1);
                if (0 == this.isValidBagPos(s)) {
                  n++;
                  break;
                }
              }
          return n > o ? !0 : !1;
        }),
        (e.prototype.isDestroyEquip = function (t, i) {
          void 0 === i && (i = null);
          for (var o = !1, n = e.EQUIP_POS_START; n < e.EQUIP_POS_END; n++)
            if (
              n != e.PET_POS &&
              n != e.SPIRIT_POS &&
              n != e.BLOOD_BOTTLE_POS
            ) {
              var a = this.getItem(n);
              null != a &&
                (a.isDestroy()
                  ? (null != i &&
                      i.append(
                        "\n" +
                          a.getNameInfo() +
                          "(" +
                          a.durability +
                          "/" +
                          a.getDurMax(this.player) +
                          ")",
                      ),
                    (o = !0))
                  : 0 == t &&
                    a.isWillDestroy() &&
                    (null != i &&
                      i.append(
                        "\n" +
                          a.getNameInfo() +
                          "(" +
                          a.durability +
                          "/" +
                          a.getDurMax(this.player) +
                          ")",
                      ),
                    (o = !0)));
            }
          return o;
        }),
        (e.prototype.getIdentifyScrollNum = function () {
          for (var t = 0, i = e.BAG_START; i <= this.bagEnd; i++) {
            var o = this.getItem(i);
            null != o && o.isIdentifyScrollItem() && (t += o.quantity);
          }
          return t;
        }),
        (e.prototype.getHighIdentifyScrollNum = function () {
          for (var t = 0, i = e.BAG_START; i <= this.bagEnd; i++) {
            var o = this.getItem(i);
            null != o && o.isHighIdentifyScrollItem() && (t += o.quantity);
          }
          return t;
        }),
        (e.prototype.getUpgradeIdentifyScrollNum = function () {
          for (var t = 0, i = e.BAG_START; i <= this.bagEnd; i++) {
            var o = this.getItem(i);
            null != o && o.isUpgradeIdentifyScrollItem() && (t += o.quantity);
          }
          return t;
        }),
        (e.getQuickHPItemVector = function (t) {
          if (null == t) return null;
          var i = t.bag;
          if (null == i) return null;
          for (
            var o = new s["default"](), r = e.BAG_START;
            r <= i.bagEnd;
            r++
          ) {
            var l = i.getItem(r);
            if (null != l) {
              var u = l.getPower1AndPower2(n["default"].POWER_HP_PERCENT);
              if (!(
                0 >= u ||
                (0 == l.isCanUse(a["default"].CAN_USE_WORLD) &&
                  0 == l.isCanUse(a["default"].CAN_USE_ALL))
              ))
                if (o.isEmpty()) o.insertElementAt(l, 0);
                else
                  for (var _ = 0; _ < o.length; _++) {
                    var d = o.elementAt(_);
                    if (
                      u <= d.getPower1AndPower2(n["default"].POWER_HP_PERCENT)
                    ) {
                      o.insertElementAt(l, _);
                      break;
                    }
                    _ == o.size() - 1 && o.addElement(l);
                  }
            }
          }
          return o;
        }),
        (e.getIdentifyItemVector = function (t) {
          if (null == t) return null;
          var i = t.bag;
          if (null == i) return null;
          for (var o = [], n = e.BAG_START; n <= i.bagEnd; n++) {
            var a = i.getItem(n);
            null != a &&
              1 == a.isIdentifyItem() &&
              0 == a.isNotOperate() &&
              o.push(a);
          }
          return o;
        }),
        (e.getPagItemVector = function (t) {
          if (null == t) return null;
          var i = t.bag;
          if (null == i) return null;
          for (
            var o = new s["default"](), n = e.BAG_START;
            n <= i.bagEnd;
            n++
          ) {
            var a = i.getItem(n);
            null != a && o.addElement(a);
          }
          return o;
        }),
        (e.clearBagAllItemStatus = function (t, i) {
          if (null == t) return !1;
          var o = t.bag;
          if (null == o) return !1;
          for (var n = e.BAG_START; n <= o.bagEnd; n++) {
            var a = o.getItem(n);
            if (null != a)
              switch (i) {
                case e.CLEAR_BAG_SELLING_STATUS:
                  a.setSelling(!1);
                  break;
                case e.CLEAR_BAG_MAIL_SELECT:
                  a.setMailSelect(!1);
                  break;
                case e.CLEAR_BAG_SHOP_LOCKED:
                  a.setShopLocked(!1);
                  break;
                case e.CLEAR_BAG_INTEGRAL:
                  a.setIntegral(!1);
              }
          }
          return !0;
        }),
        (e.prototype.getAllEquip = function () {
          for (var e = [], t = 0; t <= this.bagEnd; t++) {
            var i = this.getItem(t);
            null != i && i.isCanEquip() && e.push(i);
          }
          return e;
        }),
        (e.repairEquip = function (t, i, o) {
          if (null == t) return -1;
          var n = t.bag;
          if (null == n) return -1;
          var a = e.EQUIP_POS_START,
            r = e.EQUIP_POS_END - 1;
          1 == this.isValidEquipPos(i) && ((a = i), (r = i));
          for (var s = 0, l = a; r >= l; l++) {
            var u = n.getItem(l);
            if (null != u && 0 != u.isCanRepair(t))
              if (1 == o) {
                var _ = u.getRepairCost(t);
                (0 > _ && (_ = 0), (s += _));
              } else u.durability = u.getDurMax(t);
          }
          return Math.floor(s);
        }),
        (e.getBagItemByID = function (t, i) {
          i || (i = o["default"].myPlayer);
          var n = [];
          if (i) {
            var a = i.bag;
            if (a)
              for (var r = e.BAG_START; r <= a.bagEnd; r++) {
                var s = a.getItem(r);
                null != s && s.id == t && n.push(s);
              }
          }
          return n;
        }),
        (e.ARMOR_NECKLACE_POS = 0),
        (e.PET_POS = 1),
        (e.ARMOR_RING_LEFT_POS = 2),
        (e.ARMOR_FASHION_POS = 3),
        (e.ARMOR_BACK_POS = 4),
        (e.ARMOR_CLOTHES_POS = 5),
        (e.ARMOR_HAND_POS = 6),
        (e.ARMOR_HEAD_POS = 7),
        (e.WEAPON_LEFT_POS = 8),
        (e.ARMOR_SHOES_POS = 9),
        (e.WEAPON_RIGHT_POS = 10),
        (e.ARMOR_WAIST_POS = 11),
        (e.ARMOR_TROUSERS_POS = 12),
        (e.ARMOR_SHOULDER_POS = 13),
        (e.ARMOR_AMULET_POS = 14),
        (e.ARMOR_TRANSPORT_POS = 15),
        (e.ARMOR_RING_RIGHT_POS = 16),
        (e.SPIRIT_POS = 17),
        (e.BLOOD_BOTTLE_POS = 18),
        (e.EQUIPMENTTITLELIST = [
          "链",
          "宠",
          "戒",
          "时",
          "背",
          "衣",
          "手",
          "头",
          "武",
          "鞋",
          "武",
          "腰",
          "裤",
          "肩",
          "符",
          "骑",
          "戒",
          "VIP",
          "血",
        ]),
        (e.EQUIP_POS_START = 0),
        (e.EQUIP_POS_END = 30),
        (e.MAX_BAG_NUM = 2),
        (e.EACH_BAG_SIZE = 30),
        (e.BAG_START = e.EQUIP_POS_END),
        (e.MAX_BAG_SIZE = 280),
        (e.MAX_STORE_SIZE = 60),
        (e.STORE_START = 630),
        (e.STORE_END = e.STORE_START + e.MAX_STORE_SIZE),
        (e.PET_BAG_SIZE = 8),
        (e.MAX_VIPSTORE_SIZE = 90),
        (e.MAX_VIP7STORE_SIZE = 102),
        (e.MAX_VIP8STORE_SIZE = 114),
        (e.MAX_VIP9STORE_SIZE = 126),
        (e.MAX_HIGHT_VIP_5_STORE_SIZE = 20),
        (e.MAX_HIGHT_VIP_6_STORE_SIZE = 40),
        (e.MAX_HIGHT_VIP_7_STORE_SIZE = 60),
        (e.MAX_HIGHT_VIP_8_STORE_SIZE = 80),
        (e.MAX_HIGHT_VIP_9_STORE_SIZE = 100),
        (e.VIPSTORE_START = e.STORE_END),
        (e.VIPSTORE_END = e.VIPSTORE_START + e.MAX_VIPSTORE_SIZE),
        (e.VIP7STORE_END = e.VIPSTORE_START + e.MAX_VIP7STORE_SIZE),
        (e.VIP8STORE_END = e.VIPSTORE_START + e.MAX_VIP8STORE_SIZE),
        (e.VIP9STORE_END = e.VIPSTORE_START + e.MAX_VIP9STORE_SIZE),
        (e.HIGHT_VIPSTORE_START = e.VIP9STORE_END),
        (e.HIGHT_VIP_5_STORE_END =
          e.HIGHT_VIPSTORE_START + e.MAX_HIGHT_VIP_5_STORE_SIZE),
        (e.HIGHT_VIP_6_STORE_END =
          e.HIGHT_VIPSTORE_START + e.MAX_HIGHT_VIP_6_STORE_SIZE),
        (e.HIGHT_VIP_7_STORE_END =
          e.HIGHT_VIPSTORE_START + e.MAX_HIGHT_VIP_7_STORE_SIZE),
        (e.HIGHT_VIP_8_STORE_END =
          e.HIGHT_VIPSTORE_START + e.MAX_HIGHT_VIP_8_STORE_SIZE),
        (e.HIGHT_VIP_9_STORE_END =
          e.HIGHT_VIPSTORE_START + e.MAX_HIGHT_VIP_9_STORE_SIZE),
        (e.TYPE_EQUIP_POS = 1),
        (e.TYPE_BAG_POS = 2),
        (e.TYPE_STORAGE_POS = 3),
        (e.TYPE_VIPSTORAGE_POS = 4),
        (e.TYPE_HIGHT_VIPSTORAGE_POS = 5),
        (e.DUR_CHANGE_TYPE_POINT = 1),
        (e.DUR_CHANGE_TYPE_PERCENT = 2),
        (e.DEAD_DUR_DOWN = 10),
        (e.DUR_DOWN_POINT = 1),
        (e.CLEAR_BAG_SELLING_STATUS = 0),
        (e.CLEAR_BAG_MAIL_SELECT = 1),
        (e.CLEAR_BAG_SHOP_LOCKED = 2),
        (e.CLEAR_BAG_INTEGRAL = 3),
        e
      );
    })();
  t["default"] = T;
});
