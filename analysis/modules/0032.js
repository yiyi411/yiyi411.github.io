(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(16),
    n = i(5),
    a = i(4),
    r = i(10),
    s = i(23),
    l = i(12),
    u = i(20),
    _ = i(30),
    d = i(8),
    p = i(33),
    c = i(21),
    h = i(18),
    f = i(35),
    T = i(1),
    E = i(13),
    y = i(57),
    g = i(42),
    v = i(40),
    S = (function () {
      function e() {
        ((this.attachDone = 0),
          (this.attachPower = 0),
          (this.attachValue = 0),
          (this.slotPos = -1),
          (this.status = 0),
          (this.illusion = []),
          (this.expireTime = -1),
          (this.power4 = 0),
          (this.powerValue4 = 0),
          (this.powerValue4add = 0),
          (this.power5 = 0),
          (this.powerValue5 = 0),
          (this.powerValue5add = 0),
          (this.power6 = 0),
          (this.powerValue6 = 0),
          (this.powerValue6add = 0),
          (this.power7 = 0),
          (this.powerValue7 = 0),
          (this.powerValue7add = 0),
          (this.name = ""),
          (this.info = ""),
          (this.type = 0),
          (this.grade = 0),
          (this.reqLv = 0),
          (this.reqStr = 0),
          (this.reqCon = 0),
          (this.reqAgi = 0),
          (this.reqIlt = 0),
          (this.reqWis = 0),
          (this.atkType = 0),
          (this.atk_time = 0),
          (this.atkMin = 0),
          (this.atkMax = 0),
          (this.def_str = 0),
          (this.def_agi = 0),
          (this.def_mag = 0),
          (this.hitrate = 0),
          (this.round = 0),
          (this.area = 0),
          (this.durMax = 0),
          (this.skillDesc = ""),
          (this.vipLevelReq = 0),
          (this.petPowerValue1 = 0),
          (this.petPowerValue2 = 0),
          (this.petPowerValue3 = 0),
          (this.petBindPowerValue1 = 0),
          (this.petBindPowerValue2 = 0),
          (this.isScrooll = 0),
          (this.fashIcon1 = Long.fromNumber(0)),
          (this.fashIcon2 = Long.fromNumber(0)),
          (this.fashIcon3 = Long.fromNumber(0)),
          (this.enchantPower1 = 0),
          (this.enchantPowerValue1 = 0),
          (this.enchantPower2 = 0),
          (this.enchantPowerValue2 = 0),
          (this.enchantLevel = 0),
          (this.cssLeftChannel = !1),
          (this.cssRightChannel = !1),
          (this.cssLeftHasItem = !1),
          (this.cssRightHasItem = !1),
          (this.cssLeftPowerPer = 0),
          (this.cssRightPowerPer = 0),
          (this._showNewSign = !1));
      }
      return (
        (e.prototype.getPetAge = function () {
          var e =
            (this.petAgeTime - o["default"].timer.serverTime) /
            d.Tool.MILLIS_IN_DAY;
          return (0 > e && (e = 0), e);
        }),
        (e.prototype.setCombinUpSkill = function (e) {
          this.combinUpSkillList = [];
          for (var t = e.getByte(), i = 0; t > i; i++) {
            var o = e.getBoolean();
            if (o) {
              var n = new y["default"]();
              (y["default"].fromBaseBytesForItem(e, n),
                this.combinUpSkillList.push(n));
            }
          }
        }),
        (e.prototype.getCombinUpSkill = function () {
          return this.combinUpSkillList && this.combinUpSkillList.length > 0
            ? this.combinUpSkillList
            : null;
        }),
        (e.prototype.getItemSetID = function () {
          return 255 & this.itemSet;
        }),
        (e.prototype.getItemHitRate = function () {
          return 255 & this.hitrate;
        }),
        (e.prototype.isNeedWaitForSkill = function () {
          if (1 == this.isHasSkill()) return !0;
          var e = p["default"].getEquipPosByType(this.type);
          if (null != e && e.length > 0) {
            var t = n["default"].myPlayer;
            if (null != t && null != t.bag)
              for (var i = 0; i < e.length; i++) {
                var o = t.bag.getItem(e[i]);
                if (null != o && o.isHasSkill()) return !0;
              }
          }
          return !1;
        }),
        (e.prototype.isHasSkill = function () {
          return 0 == d.Tool.isNullText(this.skillDesc);
        }),
        (e.prototype.isOwnSkill = function () {
          return (
            0 == d.Tool.isNullText(this.skillDesc) &&
            !("合成技能" === this.skillDesc)
          );
        }),
        (e.prototype.getItemClass = function () {
          return this.type == a["default"].ITEM_TYPE_LN_STONE
            ? e.ITEM_CLASS_LN_STONE
            : this.type == a["default"].ITEM_TYPE_ADD_PET_LIFE
              ? e.ITEM_CLASS_PET_ADD_LIFE
              : this.type == a["default"].ITEM_TYPE_PET
                ? e.ITEM_CLASS_PET
                : this.type == a["default"].ITEM_TYPE_GEM
                  ? e.ITEM_CLASS_GEM
                  : this.type == a["default"].ITEM_TYPE_TASK ||
                      this.type == a["default"].ITEM_TYPE_BUILD_MATERIAL ||
                      this.type == a["default"].ITEM_TYPE_SPECEAIL
                    ? e.ITEM_CLASS_QUEST
                    : (this.type >=
                          a["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD &&
                          this.type <=
                            a["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND) ||
                        (this.type >= a["default"].ITEM_TYPE_WEAPON_BALL &&
                          this.type <=
                            a["default"].ITEM_TYPE_WEAPON_TWOHAND_FAN)
                      ? e.ITEM_CLASS_WEAPON
                      : (this.type >= a["default"].ITEM_TYPE_BATTLE_USE &&
                            this.type <=
                              a["default"].ITEM_TYPE_NOT_BATTLE_USE) ||
                          this.type == a["default"].ITEM_TYPE_SKILL_BOOK
                        ? e.ITEM_CLASS_USE_ITEM
                        : this.type == a["default"].ITEM_TYPE_BOX_CHOOSE_ONE
                          ? e.ITEM_CLASS_BOX_CHOOSE_ONE
                          : this.type == a["default"].ITEM_TYPE_BLOOD_BOTTLE
                            ? e.ITEM_CLASS_BLOOD_BOTTLE
                            : this.getIsItemPetEquip()
                              ? e.ITEM_CLASS_PET_EQUIP
                              : this.type ==
                                  a["default"].ITEM_TYPE_PET_EQUIP_EXP_BOOK
                                ? e.ITEM_CLASS_PET_EQUIP_EXP_BOOK
                                : this.type == a["default"].ITEM_TYPE_SEAL
                                  ? e.ITEM_CLASS_SEAL
                                  : this.type ==
                                      a["default"].ITEM_TYPE_ENERGY_ESSENCE
                                    ? e.ITEM_CLASS_ENERGY_ESSENCE
                                    : e.ITEM_CLASS_ARMOR;
        }),
        (e.prototype.getItemType = function () {
          switch (this.type) {
            case a["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD:
            case a["default"].ITEM_TYPE_WEAPON_TWOHAND_SWORD:
            case a["default"].ITEM_TYPE_WEAPON_ONEHAND_BLADE:
            case a["default"].ITEM_TYPE_WEAPON_TWOHAND_BLADE:
            case a["default"].ITEM_TYPE_WEAPON_ONEHAND_HEAVY:
            case a["default"].ITEM_TYPE_WEAPON_TWOHAND_HEAVY:
            case a["default"].ITEM_TYPE_WEAPON_TWOHAND_STAFF:
            case a["default"].ITEM_TYPE_WEAPON_TWOHAND_LANCE:
            case a["default"].ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW:
            case a["default"].ITEM_TYPE_WEAPON_TWOHAND_CROSSBOW:
            case a["default"].ITEM_TYPE_WEAPON_TWOHAND_BOW:
            case a["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND:
            case a["default"].ITEM_TYPE_WEAPON_BALL:
            case a["default"].ITEM_TYPE_WEAPON_ONEHAND_GUN:
            case a["default"].ITEM_TYPE_WEAPON_TWOHAND_GUN:
            case a["default"].ITEM_TYPE_WEAPON_ONEHAND_HAMMER:
            case a["default"].ITEM_TYPE_WEAPON_TWOHAND_HAMMER:
            case a["default"].ITEM_TYPE_WEAPON_TWOHAND_FAN:
              return e.ITEM_TYPE_WEAPON;
            case a["default"].ITEM_TYPE_ARMOR_HEAD:
            case a["default"].ITEM_TYPE_ARMOR_CLOTHES:
            case a["default"].ITEM_TYPE_ARMOR_TROUSERS:
            case a["default"].ITEM_TYPE_ARMOR_SHOULDER:
            case a["default"].ITEM_TYPE_ARMOR_WAIST:
            case a["default"].ITEM_TYPE_ARMOR_BACK:
            case a["default"].ITEM_TYPE_ARMOR_SHOES:
            case a["default"].ITEM_TYPE_ARMOR_HAND:
            case a["default"].ITEM_TYPE_ARMOR_TRANSPORT:
              return e.ITEM_TYPE_ARMOR;
            case a["default"].ITEM_TYPE_ARMOR_NECKLACE:
            case a["default"].ITEM_TYPE_ARMOR_RING:
            case a["default"].ITEM_TYPE_ARMOR_AMULET:
            case a["default"].ITEM_TYPE_ARMOR_FASHION:
              return e.ITEM_TYPE_ACCESSORIES;
            case a["default"].ITEM_TYPE_BATTLE_USE:
            case a["default"].ITEM_TYPE_ANYTIME_USE:
            case a["default"].ITEM_TYPE_NOT_BATTLE_USE:
            case a["default"].ITEM_TYPE_BOX_CHOOSE_ONE:
            case a["default"].ITEM_TYPE_SKILL_BOOK:
            case a["default"].ITEM_TYPE_SPECEAIL:
            case a["default"].ITEM_TYPE_BLOOD_BOTTLE:
            case a["default"].ITEM_TYPE_SEAL:
            case a["default"].ITEM_TYPE_ADD_PET_LIFE:
              return e.ITEM_TYPE_PROPS;
            case a["default"].ITEM_TYPE_TASK:
            case a["default"].ITEM_TYPE_BUILD_MATERIAL:
              return e.ITEM_TYPE_MATERIAL;
            case a["default"].ITEM_TYPE_GEM:
              return e.ITEM_TYPE_GEM;
            case a["default"].ITEM_TYPE_PET_EQUIP:
            case a["default"].ITEM_TYPE_PET_EQUIP_EXP_BOOK:
            case a["default"].ITEM_TYPE_PET:
              return e.ITEM_TYPE_PET;
            case a["default"].ITEM_TYPE_LN_STONE:
              return e.ITEM_CLASS_LN_STONE;
          }
        }),
        (e.prototype.getIsItemPetEquip = function () {
          return this.type == a["default"].ITEM_TYPE_PET_EQUIP;
        }),
        (e.prototype.getIsItemInPetType = function () {
          return (
            this.type == a["default"].ITEM_TYPE_PET_EQUIP ||
            this.type == a["default"].ITEM_TYPE_PET_EQUIP_EXP_BOOK
          );
        }),
        (e.prototype.getIsItemPetExpBook = function () {
          return this.type == a["default"].ITEM_TYPE_PET_EQUIP_EXP_BOOK;
        }),
        (e.prototype.getPrice = function () {
          return this.price;
        }),
        (e.prototype.getDurMax = function (e) {
          void 0 === e && (e = null);
          var t = this.durMax;
          if (null == e) return t;
          if (0 == this.isEquited()) return t;
          if (
            this.slotPos == p["default"].WEAPON_LEFT_POS ||
            this.slotPos == p["default"].WEAPON_RIGHT_POS
          )
            t = e.addWeaponSkillDamageOrDur(t, this.slotPos);
          else {
            var i = e.getSkillPowerValue(
              a["default"].SKILL_TYPE_PASSIVE,
              a["default"].POWER_EQUIP_ARMOR_DUR_PERCENT,
            );
            ((i += e.getBagEquipPowerValue(
              a["default"].POWER_EQUIP_ARMOR_DUR_PERCENT,
            )),
              i > 0 && (t += (t * i) / 100));
          }
          return Math.floor(t);
        }),
        (e.prototype.isCanRepair = function (e) {
          if (0 == this.isCanEquip()) return !1;
          if (this.type == a["default"].ITEM_TYPE_PET) return !1;
          var t = this.getDurMax(e);
          return t > 0 && this.durability < t ? !0 : !1;
        }),
        (e.prototype.getRepairCost = function (e) {
          var t = this.getDurMax(e),
            i = t - this.durability;
          0 > i && (i = 0);
          var o = Math.floor(this.reqLv / 10 + 1),
            n = i * (this.grade + 1) * o;
          return n;
        }),
        (e.fromMissionBytes = function (t, i) {
          var o = new e();
          return (
            (o.id = t.readInt()),
            (o.quantity = t.readByte()),
            (o.name = t.readUTF()),
            (o.bagIcon = t.readInt()),
            (o.grade = t.readByte()),
            i && (o.type = t.readByte()),
            o
          );
        }),
        (e.fromMailBytes = function (t) {
          var i = new e();
          return (
            (i.id = t.getInt()),
            (i.quantity = t.getByte()),
            (i.name = t.getString()),
            (i.bagIcon = t.getInt()),
            (i.grade = t.getByte()),
            (i.type = t.getByte()),
            (i.slotPos = t.getShort()),
            (i.isUpgradeItem = t.getBoolean()),
            i
          );
        }),
        (e.fromBytes = function (t, i) {
          null == i && (i = new e());
          try {
            return (this.fromBytesAtts1(i, t), this.fromBytesAtts2(i, t), i);
          } catch (o) {
            console.error(o);
          }
        }),
        (e.fromBytesAtts1 = function (t, i) {
          if (
            null != t &&
            ((t.quantity = i.getShort()),
            (t.petProvideExp = i.getInt()),
            (t.durability = i.getInt()),
            (t.attachDone = i.getByte()),
            (t.attachPower = i.getShort()),
            (t.attachValue = i.getShort()),
            (t.slotPos = i.getShort()),
            (t.status = i.getByte()),
            t.isTimeItem())
          )
            if (t.slotPos == p["default"].SPIRIT_POS) {
              var o = i.getInt();
              (t.setExpireTime(o),
                t.isExpired() && t.setStatusBit(!0, e.STATUS_VIP_TIME_OUT));
            } else t.setExpireTime(65535 & i.getInt());
        }),
        (e.prototype.setExpireTime = function (e) {
          ((this.expireTime =
            o["default"].timer.serverTime + 1 * e * d.Tool.MILLIS_IN_MINUTE),
            this.checkTimeItem());
        }),
        (e.prototype.isIllusion = function () {
          var e = n["default"].myPlayer;
          if (null != e) {
            var t = 0;
            if (e.illusionInfo)
              for (var i in e.illusionInfo) {
                var o = e.illusionInfo[i];
                if ((o.type == this.type && t++, t > 1)) return !0;
              }
          }
        }),
        (e.prototype.isInIllusion = function (e) {
          if (!e) return !1;
          var t = n["default"].myPlayer,
            i = t.putIllusion[e];
          return -1 == i || v.TimeUtil.isTimeNo(i) ? !0 : void 0;
        }),
        (e.fromBytesAtts2 = function (t, i) {
          if (null != t) {
            if (
              ((t.type = i.getByte()),
              (t.handBookItem = i.getBoolean()),
              t.handBookItem)
            ) {
              t.isHandBookActivated = i.getBoolean();
              for (var r = i.getByte(), s = 0; r > s; s++) {
                var l = i.getByte(),
                  u = i.getInt(),
                  _ = i.getInt();
                t.illusion.push({ currency: l, day: u, price: _ });
              }
              if (
                ((t.illusionItemId = i.getInt()),
                (t.illusionEndTime = i.getLong().toNumber()),
                t.illusionItemId)
              ) {
                var d = new e();
                (e.fromBytesAtts2(d, i), (t.itemInfo = d));
              }
              var p = n["default"].myPlayer,
                c = v.TimeUtil.isTimeNo(t.illusionEndTime);
              t.illusionItemId &&
                (c || -1 == t.illusionEndTime) &&
                (p.putIllusion[t.illusionItemId] = t.illusionEndTime);
            }
            var h = t.getItemClass();
            if (h == e.ITEM_CLASS_PET)
              return (
                (t.id = a["default"].ITEM_ID_PET),
                (t.name = i.getString()),
                (t.bagIcon = i.getInt()),
                (t.info = i.getString()),
                (t.grade = i.getByte()),
                (t.autoBinding = i.getByte()),
                (t.icon = i.getShort()),
                (t.reqLv = i.getByte()),
                (t.vipLevelReq = i.getByte()),
                (t.petId = i.getLong()),
                (t.petHeadIcon = i.getShort()),
                void (t.petAgeTime =
                  o["default"].timer.serverTime + i.getLong().toNumber())
              );
            switch (
              ((t.id = i.getInt()),
              (t.name = i.getString()),
              (t.bagIcon = i.getInt()),
              (t.info = i.getString()),
              (t.grade = i.getByte()),
              (t.autoBinding = i.getByte()),
              (t.stackNum = i.getByte()),
              (t.decomCHest = i.getBoolean()),
              h)
            ) {
              case e.ITEM_CLASS_WEAPON:
                ((t.icon = i.getShort()),
                  (t.ownTime = 65535 & i.getShort()),
                  (t.durMax = i.getInt()),
                  (t.price = i.getInt()),
                  (t.attachCount = i.getByte()),
                  (t.itemSet = i.getByte()),
                  (t.reqLv = i.getByte()),
                  (t.reqStr = i.getShort()),
                  (t.reqCon = i.getShort()),
                  (t.reqAgi = i.getShort()),
                  (t.reqIlt = i.getShort()),
                  (t.reqWis = i.getShort()),
                  this.fromItemAscensionStarInfo(t, i),
                  (t.hitrate = i.getByte()),
                  (t.vipLevelReq = i.getByte()),
                  (t.enchantPower1 = i.getShort()),
                  (t.enchantPowerValue1 = i.getShort()),
                  (t.enchantPower2 = i.getShort()),
                  (t.enchantPowerValue2 = i.getShort()),
                  (t.enchantLevel = i.getShort()),
                  (t.cssLeftChannel = i.getBoolean()),
                  (t.cssRightChannel = i.getBoolean()),
                  (t.cssLeftHasItem = i.getBoolean()),
                  (t.cssRightHasItem = i.getBoolean()),
                  (t.cssLeftPowerPer = i.getShort()),
                  (t.cssRightPowerPer = i.getShort()),
                  (t.cssLeftItemPower = {}),
                  (t.cssRightItemPower = {}),
                  t.cssLeftHasItem && e.fromCssInfoBytes(t, i, 1),
                  t.cssRightHasItem && e.fromCssInfoBytes(t, i, 2),
                  (t.isUpgradeItem = i.getBoolean()),
                  t.isUpgradeItem &&
                    ((t.power4 = i.getShort()),
                    (t.powerValue4 = i.getShort()),
                    (t.power5 = i.getShort()),
                    (t.powerValue5 = i.getShort()),
                    (t.power6 = i.getShort()),
                    (t.powerValue6 = i.getShort()),
                    (t.power7 = i.getShort()),
                    (t.powerValue7 = i.getShort())),
                  (t.upgradeAscensionStar = i.getByte()),
                  (t.upgradeStar = i.getByte()));
                break;
              case e.ITEM_CLASS_ARMOR:
                ((t.icon = i.getShort()),
                  (t.ownTime = 65535 & i.getShort()),
                  (t.durMax = i.getInt()),
                  (t.price = i.getInt()),
                  (t.attachCount = i.getByte()),
                  (t.itemSet = i.getByte()),
                  (t.reqLv = i.getByte()),
                  (t.reqStr = i.getShort()),
                  (t.reqCon = i.getShort()),
                  (t.reqAgi = i.getShort()),
                  (t.reqIlt = i.getShort()),
                  (t.reqWis = i.getShort()),
                  this.fromItemAscensionStarInfo(t, i),
                  t.type == a["default"].ITEM_TYPE_ARMOR_FASHION &&
                    ((t.fashIcon1 = i.getLong()),
                    (t.fashIcon2 = i.getLong()),
                    (t.fashIcon3 = i.getLong())),
                  (t.vipLevelReq = i.getByte()),
                  (t.enchantPower1 = i.getShort()),
                  (t.enchantPowerValue1 = i.getShort()),
                  (t.enchantPower2 = i.getShort()),
                  (t.enchantPowerValue2 = i.getShort()),
                  (t.enchantLevel = i.getShort()),
                  (t.cssLeftChannel = i.getBoolean()),
                  (t.cssRightChannel = i.getBoolean()),
                  (t.cssLeftHasItem = i.getBoolean()),
                  (t.cssRightHasItem = i.getBoolean()),
                  (t.cssLeftPowerPer = i.getShort()),
                  (t.cssRightPowerPer = i.getShort()),
                  (t.cssLeftItemPower = {}),
                  (t.cssRightItemPower = {}),
                  t.cssLeftHasItem && e.fromCssInfoBytes(t, i, 1),
                  t.cssRightHasItem && e.fromCssInfoBytes(t, i, 2),
                  (t.isUpgradeItem = i.getBoolean()),
                  t.isUpgradeItem &&
                    ((t.power4 = i.getShort()),
                    (t.powerValue4 = i.getShort()),
                    (t.power5 = i.getShort()),
                    (t.powerValue5 = i.getShort()),
                    (t.power6 = i.getShort()),
                    (t.powerValue6 = i.getShort()),
                    (t.power7 = i.getShort()),
                    (t.powerValue7 = i.getShort())),
                  (t.upgradeAscensionStar = i.getByte()),
                  (t.upgradeStar = i.getByte()));
                break;
              case e.ITEM_CLASS_BOX_CHOOSE_ONE:
              case e.ITEM_CLASS_USE_ITEM:
                ((t.reqLv = i.getByte()),
                  (t.ownTime = 65535 & i.getShort()),
                  (t.durMax = i.getInt()),
                  (t.price = i.getInt()),
                  (t.round = i.getByte()),
                  (t.area = i.getByte()),
                  (t.power1 = i.getShort()),
                  (t.powerValue1 = i.getShort()),
                  (t.power2 = i.getShort()),
                  (t.powerValue2 = i.getShort()),
                  (t.vipLevelReq = i.getByte()),
                  a["default"].POWER_ENCHANT_ITEM == t.power1 &&
                    ((t.power3 = i.getShort()), (t.powerValue3 = i.getShort())),
                  (t.needShowRate = i.getBoolean()));
                break;
              case e.ITEM_CLASS_GEM:
                ((t.price = i.getInt()),
                  (t.power1 = i.getShort()),
                  (t.powerValue1 = i.getShort()));
                break;
              case e.ITEM_CLASS_QUEST:
              case e.ITEM_CLASS_ORTHER:
                t.price = i.getInt();
                break;
              case e.ITEM_CLASS_PET_EQUIP_EXP_BOOK:
                ((t.petProvideExp = i.getInt()), (t.price = i.getInt()));
                break;
              case e.ITEM_CLASS_SEAL:
                ((t.seal_grade = i.getInt()),
                  (t.seal_type = i.getInt()),
                  e.class_seal(i, t));
                break;
              case e.ITEM_CLASS_BLOOD_BOTTLE:
                ((t.power1 = i.getShort()),
                  (t.price = i.getInt()),
                  (t.powerValueBlood1 = i.getInt()),
                  (t.powerValueBloodMax1 = i.getInt()));
                break;
              case e.ITEM_CLASS_PET_EQUIP:
                ((t.icon = i.getShort()),
                  (t.ownTime = 65535 & i.getShort()),
                  (t.durMax = i.getInt()),
                  (t.price = i.getInt()),
                  (t.attachCount = i.getByte()),
                  (t.itemSet = i.getByte()),
                  (t.reqLv = i.getByte()),
                  (t.reqStr = i.getShort()),
                  (t.reqCon = i.getShort()),
                  (t.reqAgi = i.getShort()),
                  (t.reqIlt = i.getShort()),
                  (t.reqWis = i.getShort()),
                  this.fromItemAscensionStarInfo(t, i),
                  (t.hitrate = i.getByte()),
                  (t.vipLevelReq = i.getByte()),
                  (t.enchantPower1 = i.getShort()),
                  (t.enchantPowerValue1 = i.getShort()),
                  (t.enchantPower2 = i.getShort()),
                  (t.enchantPowerValue2 = i.getShort()),
                  (t.isUpgradeItem = i.getBoolean()),
                  t.isUpgradeItem &&
                    ((t.power4 = i.getShort()),
                    (t.powerValue4 = i.getShort()),
                    (t.power5 = i.getShort()),
                    (t.powerValue5 = i.getShort()),
                    (t.power6 = i.getShort()),
                    (t.powerValue6 = i.getShort()),
                    (t.power7 = i.getShort()),
                    (t.powerValue7 = i.getShort())),
                  (t.upgradeAscensionStar = i.getByte()),
                  (t.upgradeStar = i.getByte()),
                  (t.petLevel = i.getShort()),
                  (t.petEquipExp = i.getInt()),
                  (t.petLowLevel = 65535 & i.getShort()),
                  (t.petUid = i.getLong()),
                  (t.petEquipSkillLevel = i.getByte()));
                break;
              case e.ITEM_CLASS_ENERGY_ESSENCE:
              case e.ITEM_CLASS_PET_ADD_LIFE:
                t.powerValueBlood1 = i.getInt();
                break;
              case e.ITEM_CLASS_LN_STONE:
                t.powerValueBlood1 = i.getInt();
            }
          }
        }),
        (e.class_seal = function (e, t) {
          var i = e.getByte();
          (i >= 1 &&
            ((t.power1 = e.getShort()), (t.powerValue1 = e.getShort())),
            i >= 2 &&
              ((t.power2 = e.getShort()), (t.powerValue2 = e.getShort())),
            i >= 3 &&
              ((t.power3 = e.getShort()), (t.powerValue3 = e.getShort())),
            i >= 4 &&
              ((t.power4 = e.getShort()), (t.powerValue4 = e.getShort())));
          for (var o = 5; i >= o; o++) (e.getShort(), e.getShort());
        }),
        (e.fromItemAscensionStarInfo = function (t, i) {
          var o = t.getItemClass();
          ((t.def_str = i.getShort()),
            (t.def_agi = i.getShort()),
            (t.def_mag = i.getShort()),
            (t.power1 = i.getShort()),
            (t.powerValue1 = i.getShort()),
            (t.power2 = i.getShort()),
            (t.powerValue2 = i.getShort()),
            (t.power3 = i.getShort()),
            (t.powerValue3 = i.getShort()));
          var n = i.getBoolean();
          (n &&
            ((t.skill = new y["default"]()),
            y["default"].fromBaseBytesForItem(i, t.skill)),
            t.setCombinUpSkill(i),
            (t.skillDesc = i.getString()),
            (t.bindPower1 = i.getShort()),
            (t.bindPowerValue1 = i.getShort()),
            (t.bindPower2 = i.getShort()),
            (t.bindPowerValue2 = i.getShort()),
            o == e.ITEM_CLASS_WEAPON &&
              ((t.atkType = i.getByte()),
              (t.atk_time = i.getByte()),
              (t.atkMin = i.getShort()),
              (t.atkMax = i.getShort())),
            (t.ascensionStar = i.getByte()),
            (t.star = i.getByte()));
        }),
        (e.fromItemAscensionUpgradeStarInfo = function (e, t) {
          ((e.power4 = t.getShort()),
            (e.powerValue4 = t.getShort()),
            (e.power5 = t.getShort()),
            (e.powerValue5 = t.getShort()),
            (e.power6 = t.getShort()),
            (e.powerValue6 = t.getShort()),
            (e.power7 = t.getShort()),
            (e.powerValue7 = t.getShort()),
            (e.upgradeAscensionStar = t.getByte()),
            (e.upgradeStar = t.getByte()));
        }),
        (e.fromIdentify1PowerBytes = function (e, t) {
          ((e.powerValue1 = t.getShort()),
            (e.powerValue1add = t.getShort()),
            (e.powerValue2 = t.getShort()),
            (e.powerValue2add = t.getShort()),
            (e.powerValue3 = t.getShort()),
            (e.powerValue3add = t.getShort()),
            (e.bindPowerValue1 = t.getShort()),
            (e.bindPowerValue1add = t.getShort()),
            (e.bindPowerValue2 = t.getShort()),
            (e.bindPowerValue2add = t.getShort()));
        }),
        (e.fromIdentifyUpgradePowerBytes = function (e, t) {
          ((e.power4 = t.getShort()),
            (e.powerValue4 = t.getShort()),
            (e.power5 = t.getShort()),
            (e.powerValue5 = t.getShort()),
            (e.power6 = t.getShort()),
            (e.powerValue6 = t.getShort()),
            (e.power7 = t.getShort()),
            (e.powerValue7 = t.getShort()));
        }),
        (e.newFromIdentifyUpgradePowerBytes = function (e, t) {
          ((e.power4 = t.getShort()),
            (e.powerValue4 = t.getShort()),
            (e.powerValue4add = t.getShort()),
            (e.power5 = t.getShort()),
            (e.powerValue5 = t.getShort()),
            (e.powerValue5add = t.getShort()),
            (e.power6 = t.getShort()),
            (e.powerValue6 = t.getShort()),
            (e.powerValue6add = t.getShort()),
            (e.power7 = t.getShort()),
            (e.powerValue7 = t.getShort()),
            (e.powerValue7add = t.getShort()));
        }),
        (e.oldFromIdentifyUpgradePowerBytes = function (e, t) {
          ((e.power4 = t.getShort()),
            (e.powerValue4 = t.getShort()),
            (e.power5 = t.getShort()),
            (e.powerValue5 = t.getShort()),
            (e.power6 = t.getShort()),
            (e.powerValue6 = t.getShort()),
            (e.power7 = t.getShort()),
            (e.powerValue7 = t.getShort()),
            (e.powerValue4add = t.getShort()),
            (e.powerValue5add = t.getShort()),
            (e.powerValue6add = t.getShort()),
            (e.powerValue7add = t.getShort()));
        }),
        (e.fromIdentify2PowerBytes1 = function (e, t, i) {
          ((e.power1 = t.getShort()),
            (e.powerValue1 = t.getShort()),
            i && (e.powerValue1add = t.getShort()),
            (e.power2 = t.getShort()),
            (e.powerValue2 = t.getShort()),
            i && (e.powerValue2add = t.getShort()),
            (e.bindPower1 = t.getShort()),
            (e.bindPowerValue1 = t.getShort()),
            i && (e.bindPowerValue1add = t.getShort()),
            (e.bindPower2 = t.getShort()),
            (e.bindPowerValue2 = t.getShort()),
            i && (e.bindPowerValue2add = t.getShort()));
        }),
        (e.fromIdentify2PowerBytes2 = function (e, t) {
          ((e.powerValue1 = t.getShort()),
            (e.powerValue1add = t.getShort()),
            (e.powerValue2 = t.getShort()),
            (e.powerValue2add = t.getShort()),
            (e.powerValue3 = t.getShort()),
            (e.powerValue3add = t.getShort()),
            (e.bindPowerValue1 = t.getShort()),
            (e.bindPowerValue1add = t.getShort()),
            (e.bindPowerValue2 = t.getShort()),
            (e.bindPowerValue2add = t.getShort()));
        }),
        (e.newFromIdentify2PowerBytes2 = function (e, t) {
          ((e.powerValue4 = t.getShort()),
            (e.powerValue4add = t.getShort()),
            (e.powerValue5 = t.getShort()),
            (e.powerValue5add = t.getShort()),
            (e.powerValue6 = t.getShort()),
            (e.powerValue6add = t.getShort()),
            (e.powerValue7 = t.getShort()),
            (e.powerValue7add = t.getShort()));
        }),
        (e.fromIdentify3PowerBytes1 = function (e, t, i) {
          ((e.power1 = t.getShort()),
            (e.powerValue1 = t.getShort()),
            e.getIsItemPetEquip() && (e.petPowerValue1 = t.getShort()),
            i && (e.powerValue1add = t.getShort()),
            (e.power2 = t.getShort()),
            (e.powerValue2 = t.getShort()),
            e.getIsItemPetEquip() && (e.petPowerValue2 = t.getShort()),
            i && (e.powerValue2add = t.getShort()),
            (e.bindPower1 = t.getShort()),
            (e.bindPowerValue1 = t.getShort()),
            e.getIsItemPetEquip() && (e.petBindPowerValue1 = t.getShort()),
            i && (e.bindPowerValue1add = t.getShort()),
            (e.bindPower2 = t.getShort()),
            (e.bindPowerValue2 = t.getShort()),
            e.getIsItemPetEquip() && (e.petBindPowerValue2 = t.getShort()),
            i && (e.bindPowerValue2add = t.getShort()));
        }),
        (e.fromIdentify3PowerBytesPet = function (e, t) {
          ((e.power1 = t.getShort()),
            (e.powerValue1 = t.getShort()),
            (e.petPowerValue1 = t.getShort()),
            (e.power2 = t.getShort()),
            (e.powerValue2 = t.getShort()),
            (e.petPowerValue2 = t.getShort()),
            (e.power3 = t.getShort()),
            (e.powerValue3 = t.getShort()),
            (e.petPowerValue3 = t.getShort()),
            (e.bindPower1 = t.getShort()),
            (e.bindPowerValue1 = t.getShort()),
            (e.petBindPowerValue1 = t.getShort()),
            (e.bindPower2 = t.getShort()),
            (e.bindPowerValue2 = t.getShort()),
            (e.petBindPowerValue2 = t.getShort()));
        }),
        (e.fromIdentify3PowerBytes2 = function (e, t) {
          ((e.powerValue1 = t.getShort()),
            (e.powerValue1add = t.getShort()),
            (e.powerValue2 = t.getShort()),
            (e.powerValue2add = t.getShort()),
            (e.powerValue3 = t.getShort()),
            (e.powerValue3add = t.getShort()),
            (e.bindPowerValue1 = t.getShort()),
            (e.bindPowerValue1add = t.getShort()),
            (e.bindPowerValue2 = t.getShort()),
            (e.bindPowerValue2add = t.getShort()));
        }),
        (e.fromCssInfoBytes = function (e, t, i) {
          if (1 == i) {
            ((e.cssLeftItemId = t.getInt()),
              (e.cssLeftItemGrade = t.getByte()),
              (e.cssLeftItemIcon = t.getShort()));
            for (var o = t.getByte(), n = 0; o > n; n++) {
              var a = t.getShort();
              e.cssLeftItemPower[a] = t.getShort();
            }
          } else {
            ((e.cssRightItemId = t.getInt()),
              (e.cssRightItemGrade = t.getByte()),
              (e.cssRightItemIcon = t.getShort()));
            for (var o = t.getByte(), n = 0; o > n; n++) {
              var a = t.getShort();
              e.cssRightItemPower[a] = t.getShort();
            }
          }
        }),
        (e.prototype.setItemDataTo = function (e) {
          ((e.durability = this.durMax),
            (e.attachDone = this.attachDone),
            (e.attachPower = this.attachPower),
            (e.attachValue = this.attachValue),
            (e.id = this.id),
            (e.power1 = this.power1),
            (e.powerValue1 = this.powerValue1),
            (e.power2 = this.power2),
            (e.powerValue2 = this.powerValue2),
            (e.power3 = this.power3),
            (e.powerValue3 = this.powerValue3),
            (e.power4 = this.power4),
            (e.powerValue4 = this.powerValue4),
            (e.powerValueBlood1 = this.powerValueBlood1),
            (e.powerValueBloodMax1 = this.powerValueBloodMax1),
            (e.seal_type = this.seal_type),
            (e.seal_grade = this.seal_grade),
            (e.petLevel = this.petLevel),
            (e.petEquipExp = this.petEquipExp),
            (e.petLowLevel = this.petLowLevel),
            this.petUid && (e.petUid = Long.fromValue(this.petUid)),
            (e.petEquipSkillLevel = this.petEquipSkillLevel),
            (e.petProvideExp = this.petProvideExp),
            this.petId && (e.petId = Long.fromValue(this.petId)),
            this.illusionItemId &&
              ((e.illusionItemId = this.illusionItemId),
              (e.itemInfo = this.itemInfo)),
            this.needShowRate && (e.needShowRate = this.needShowRate),
            (e.name = this.name),
            (e.icon = this.icon),
            (e.bagIcon = this.bagIcon),
            (e.info = this.info),
            (e.type = this.type),
            (e.grade = this.grade),
            (e.reqLv = this.reqLv),
            (e.reqStr = this.reqStr),
            (e.reqCon = this.reqCon),
            (e.reqAgi = this.reqAgi),
            (e.reqIlt = this.reqIlt),
            (e.reqWis = this.reqWis),
            (e.atkType = this.atkType),
            (e.atk_time = this.atk_time),
            (e.atkMin = this.atkMin),
            (e.atkMax = this.atkMax),
            (e.def_str = this.def_str),
            (e.def_agi = this.def_agi),
            (e.def_mag = this.def_mag),
            (e.hitrate = this.hitrate),
            (e.round = this.round),
            (e.area = this.area),
            this.setItemPowerDataTo(e),
            (e.skillDesc = this.skillDesc),
            (e.ownTime = this.ownTime),
            (e.durMax = this.durMax),
            (e.price = this.price),
            (e.autoBinding = this.autoBinding),
            (e.stackNum = this.stackNum),
            (e.attachCount = this.attachCount),
            (e.itemSet = this.itemSet),
            (e.itemSetPower = this.itemSetPower),
            (e.itemSetPowerValue = this.itemSetPowerValue),
            (e.fashIcon1 = new Long(this.fashIcon1.low, this.fashIcon1.high)),
            (e.fashIcon2 = new Long(this.fashIcon2.low, this.fashIcon2.high)),
            (e.fashIcon3 = new Long(this.fashIcon3.low, this.fashIcon3.high)),
            (e.vipLevelReq = this.vipLevelReq),
            (e.ascensionStar = this.ascensionStar),
            (e.upgradeAscensionStar = this.upgradeAscensionStar),
            (e.upgradeStar = this.upgradeStar),
            (e.star = this.star),
            (e.enchantPower1 = this.enchantPower1),
            (e.enchantPowerValue1 = this.enchantPowerValue1),
            (e.enchantPower2 = this.enchantPower2),
            (e.enchantPowerValue2 = this.enchantPowerValue2),
            (e.enchantLevel = this.enchantLevel),
            (e.cssLeftChannel = this.cssLeftChannel),
            (e.cssRightChannel = this.cssRightChannel),
            (e.cssLeftHasItem = this.cssLeftHasItem),
            (e.cssRightHasItem = this.cssRightHasItem),
            (e.cssLeftPowerPer = this.cssLeftPowerPer),
            (e.cssRightPowerPer = this.cssRightPowerPer),
            (e.cssLeftItemPower = this.cssLeftItemPower),
            (e.cssRightItemPower = this.cssRightItemPower),
            (e.data = this.data));
        }),
        (e.prototype.setItemPowerDataTo = function (e) {
          ((e.power1 = this.power1),
            (e.powerValue1 = this.powerValue1),
            (e.powerValue1add = this.powerValue1add),
            (e.power2 = this.power2),
            (e.powerValue2 = this.powerValue2),
            (e.powerValue2add = this.powerValue2add),
            (e.power3 = this.power3),
            (e.powerValue3 = this.powerValue3),
            (e.powerValue3add = this.powerValue3add),
            (e.bindPower1 = this.bindPower1),
            (e.bindPowerValue1 = this.bindPowerValue1),
            (e.bindPowerValue1add = this.bindPowerValue1add),
            (e.bindPower2 = this.bindPower2),
            (e.bindPowerValue2 = this.bindPowerValue2),
            (e.bindPowerValue2add = this.bindPowerValue2add),
            (e.isUpgradeItem = this.isUpgradeItem),
            (e.power4 = this.power4),
            (e.powerValue4 = this.powerValue4),
            (e.powerValue4add = this.powerValue4add),
            (e.power5 = this.power5),
            (e.powerValue5 = this.powerValue5),
            (e.powerValue5add = this.powerValue5add),
            (e.power6 = this.power6),
            (e.powerValue6 = this.powerValue6),
            (e.powerValue6add = this.powerValue6add),
            (e.power7 = this.power7),
            (e.powerValue7 = this.powerValue7),
            (e.powerValue7add = this.powerValue7add));
        }),
        (e.prototype.setCombinAttribute = function (e, t) {
          ((this.power1 = e.getShort()),
            (this.powerValue1 = e.getShort()),
            t && (this.powerValue1add = e.getShort()),
            (this.power2 = e.getShort()),
            (this.powerValue2 = e.getShort()),
            this.ascensionStar > 0 && (this.powerValue2add = e.getShort()),
            (this.power3 = e.getShort()),
            (this.powerValue3 = e.getShort()),
            t && (this.powerValue3add = e.getShort()),
            (this.bindPower1 = e.getShort()),
            (this.bindPowerValue1 = e.getShort()),
            t && (this.bindPowerValue1add = e.getShort()),
            (this.bindPower2 = e.getShort()),
            (this.bindPowerValue2 = e.getShort()),
            t && (this.bindPowerValue2add = e.getShort()));
        }),
        (e.prototype.setCombinAttribute2 = function (e, t) {
          ((this.powerValue1 = e.getShort()),
            t && (this.powerValue1add = e.getShort()),
            (this.powerValue2 = e.getShort()),
            t && (this.powerValue2add = e.getShort()),
            (this.powerValue3 = e.getShort()),
            t && (this.powerValue3add = e.getShort()),
            (this.bindPowerValue1 = e.getShort()),
            t && (this.bindPowerValue1add = e.getShort()),
            (this.bindPowerValue2 = e.getShort()),
            t && (this.bindPowerValue2add = e.getShort()));
        }),
        (e.prototype.isHasPower = function () {
          var e = !1;
          return (
            0 != this.power1 && 0 != this.powerValue1 && (e = !0),
            0 != this.power2 && 0 != this.powerValue2 && (e = !0),
            0 != this.power3 && 0 != this.powerValue3 && (e = !0),
            0 != this.bindPower1 && 0 != this.bindPowerValue1 && (e = !0),
            0 != this.bindPower2 && 0 != this.bindPowerValue2 && (e = !0),
            e
          );
        }),
        (e.prototype.clone = function (t) {
          var i = new e();
          return (this.setItemDataTo(i), t && this.setVarItemDataTo(i), i);
        }),
        (e.prototype.setVarItemDataTo = function (e) {
          null != e &&
            ((e.quantity = this.quantity),
            (e.totalQuantity = this.totalQuantity),
            (e.durability = this.durability),
            (e.attachDone = this.attachDone),
            (e.attachPower = this.attachPower),
            (e.attachValue = this.attachValue),
            (e.slotPos = this.slotPos),
            (e.status = this.status),
            (e.expireTime = this.expireTime));
        }),
        (e.prototype.get = function (t) {
          if (t == e.EQP_ITEM_TYPE)
            return this.durability > 0
              ? this.type
              : a["default"].BACK_ERROR_DUR;
          if (!this.getIsItemPetEquip() && this.durability <= 0) return 0;
          if (
            !this.getIsItemPetEquip() &&
            this.isTimeItem() &&
            this.isTimeItemTimeOut()
          )
            return 0;
          if (
            !this.getIsItemPetEquip() &&
            this.isVipItem() &&
            this.isVipItemTimeOut()
          )
            return 0;
          switch (t) {
            case e.EQP_ATK_MIN:
              return this.atkMin;
            case e.EQP_ATK_MAX:
              return this.atkMax;
            case e.EQP_HIT_TIME:
              return this.type == a["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND
                ? -1
                : this.atk_time;
            case e.EQP_ATK_TYPE:
              return this.type == a["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND
                ? -1
                : this.atkType;
            case e.EQP_DEF_STR:
              return this.def_str;
            case e.EQP_DEF_AGI:
              return this.def_agi;
            case e.EQP_DEF_MAGIC:
              return this.def_mag;
            case e.EQP_HITRATE:
              return this.getItemHitRate();
            case e.EQP_ITEM_SET_ID:
              return this.getItemSetID();
          }
          return 0;
        }),
        (e.prototype.getPowerDes = function () {
          var e = new _["default"]();
          return (
            this.power1 > 0 &&
              e.append(
                a["default"].getPowerDesc(this.power1, this.powerValue1) + "\n",
              ),
            this.power2 > 0 &&
              e.append(
                a["default"].getPowerDesc(this.power2, this.powerValue2) + "\n",
              ),
            this.power3 > 0 &&
              e.append(
                a["default"].getPowerDesc(this.power3, this.powerValue3) + "\n",
              ),
            e.toString()
          );
        }),
        (e.prototype.getPowerValue = function (t) {
          if (!this.getIsItemPetEquip() && this.durability <= 0) return 0;
          if (
            !this.getIsItemPetEquip() &&
            this.isTimeItem() &&
            this.isTimeItemTimeOut()
          )
            return 0;
          if (
            !this.getIsItemPetEquip() &&
            this.isVipItem() &&
            this.isVipItemTimeOut()
          )
            return 0;
          var i = 0;
          return (
            (i += this.getPower1AndPower2(t)),
            1 == this.isBinded() &&
              (this.bindPower1 == t &&
                (i += e.getpowerValueAdd(
                  this.bindPowerValue1,
                  this.ascensionStar,
                  this.star,
                  this.isBinded(),
                  this.isAscension(this.bindPower1),
                )),
              this.bindPower2 == t &&
                (i += e.getpowerValueAdd(
                  this.bindPowerValue2,
                  this.ascensionStar,
                  this.star,
                  this.isBinded(),
                  this.isAscension(this.bindPower2),
                ))),
            this.attachPower == t && (i += this.attachValue),
            this.enchantPower1 == t && (i += this.enchantPowerValue1),
            this.enchantPower2 == t && (i += this.enchantPowerValue2),
            this.cssLeftHasItem && (i += this.cssLeftItemPower[t] || 0),
            this.cssRightHasItem && (i += this.cssRightItemPower[t] || 0),
            this.getIsItemPetEquip()
              ? (this.power4 == t && (i += this.powerValue4),
                this.power5 == t && (i += this.powerValue5),
                this.power6 == t && (i += this.powerValue6),
                this.power7 == t && (i += this.powerValue7))
              : this.isBinded() &&
                e.isUpgradeItemOpen &&
                (this.power4 == t &&
                  (i += e.getpowerValueAdd(
                    this.powerValue4,
                    this.upgradeAscensionStar,
                    this.upgradeStar,
                    this.isBinded(),
                    this.isAscension(this.power4),
                  )),
                this.power5 == t &&
                  (i += e.getpowerValueAdd(
                    this.powerValue5,
                    this.upgradeAscensionStar,
                    this.upgradeStar,
                    this.isBinded(),
                    this.isAscension(this.power5),
                  )),
                this.power6 == t &&
                  (i += e.getpowerValueAdd(
                    this.powerValue6,
                    this.upgradeAscensionStar,
                    this.upgradeStar,
                    this.isBinded(),
                    this.isAscension(this.power6),
                  )),
                this.power7 == t &&
                  (i += e.getpowerValueAdd(
                    this.powerValue7,
                    this.upgradeAscensionStar,
                    this.upgradeStar,
                    this.isBinded(),
                    this.isAscension(this.power7),
                  ))),
            i
          );
        }),
        (e.prototype.getPower1AndPower2 = function (t) {
          var i = 0;
          return (
            this.power1 == t &&
              (i += e.getpowerValueAdd(
                this.powerValue1,
                this.ascensionStar,
                this.star,
                this.isBinded(),
                this.isAscension(this.power1),
              )),
            this.power2 == t &&
              (i += e.getpowerValueAdd(
                this.powerValue2,
                this.ascensionStar,
                this.star,
                this.isBinded(),
                this.isAscension(this.power2),
              )),
            this.power3 == t &&
              (i += e.getpowerValueAdd(
                this.powerValue3,
                this.ascensionStar,
                this.star,
                this.isBinded(),
                this.isAscension(this.power3),
              )),
            i
          );
        }),
        (e.getpowerValueAdd = function (e, t, i, o, n) {
          if (0 == o || 0 == n) return e;
          if (!t || 0 >= t) return e;
          if (!i || 0 >= i) return e;
          var a = e;
          0 > a && (a = -a);
          var r = E.GUtil.intNum((a * t * i + 500) / 1e3);
          return (
            r + e > d.Tool.MAX_VALUE_short
              ? (r = d.Tool.MAX_VALUE_short)
              : (r += e),
            E.GUtil.intNum(r)
          );
        }),
        (e.prototype.usePower = function (e) {
          return this.power2 == a["default"].POWER_EXPIRE_TIME &&
            this.powerValue2 > 0
            ? void (
                this.power1 == a["default"].POWER_EXP_BY_TIME ||
                this.power1 == a["default"].POWER_EXP_MISSION_BY_TIME ||
                ((e.power = this.power1), (e.powerValue = this.powerValue1))
              )
            : (a["default"].processWorldPower(e, this.power1, this.powerValue1),
              void a["default"].processWorldPower(
                e,
                this.power2,
                this.powerValue2,
              ));
        }),
        (e.prototype.getWeaponFlashType = function () {
          return this.attachDone >= 19
            ? 4
            : this.attachDone >= 15
              ? 3
              : this.attachDone >= 10
                ? 2
                : this.attachDone >= 7
                  ? 1
                  : 0;
        }),
        (e.prototype.isBinded = function () {
          return this.isAutoBinding()
            ? !0
            : (this.status & e.STATUS_BINDED) > 0
              ? !0
              : !1;
        }),
        (e.prototype.isAutoBinding = function () {
          return 0 != this.autoBinding;
        }),
        (e.prototype.setBinded = function () {
          this.status |= e.STATUS_BINDED;
        }),
        (e.prototype.isShopLocked = function () {
          return (this.status & e.STATUS_SHOP_LOCKED) > 0 ? !0 : !1;
        }),
        (e.prototype.setShopLocked = function (t) {
          this.setStatusBit(t, e.STATUS_SHOP_LOCKED);
        }),
        (e.prototype.isSelling = function () {
          return (this.status & e.STATUS_SELLING) > 0 ? !0 : !1;
        }),
        (e.prototype.setSelling = function (t) {
          this.setStatusBit(t, e.STATUS_SELLING);
        }),
        (e.prototype.isMailSelect = function () {
          return (this.status & e.STATUS_MAIL_SELECT) > 0 ? !0 : !1;
        }),
        (e.prototype.setMailSelect = function (t) {
          this.setStatusBit(t, e.STATUS_MAIL_SELECT);
        }),
        (e.prototype.isIntegral = function () {
          return (this.status & e.STATUS_INTEGRAL) > 0 ? !0 : !1;
        }),
        (e.prototype.setIntegral = function (t) {
          this.setStatusBit(t, e.STATUS_INTEGRAL);
        }),
        (e.prototype.isEnchant = function () {
          return (this.status & e.STATUS_ENCHANT) > 0 ? !0 : !1;
        }),
        (e.prototype.setEnchant = function (t) {
          this.setStatusBit(t, e.STATUS_ENCHANT);
        }),
        (e.prototype.setStatusBit = function (e, t) {
          e ? (this.status |= t) : (this.status &= ~t);
        }),
        (e.prototype.isStatusBit = function (e) {
          return 0 != (this.status & e);
        }),
        (e.prototype.isNotOperate = function () {
          return this.isShopLocked() || this.isSelling();
        }),
        (e.prototype.isCanEquip = function () {
          var e = this.type;
          return (e >= a["default"].ITEM_TYPE_ARMOR_HEAD &&
            e <= a["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND) ||
            e == a["default"].ITEM_TYPE_PET ||
            (e >= a["default"].ITEM_TYPE_WEAPON_BALL &&
              e <= a["default"].ITEM_TYPE_WEAPON_TWOHAND_FAN) ||
            e == a["default"].ITEM_TYPE_BLOOD_BOTTLE ||
            e == a["default"].ITEM_TYPE_PET_EQUIP
            ? !0
            : !1;
        }),
        (e.prototype.isEquipClass = function () {
          return (
            this.getItemClass() == e.ITEM_CLASS_ARMOR ||
            this.getItemClass() == e.ITEM_CLASS_WEAPON
          );
        }),
        (e.prototype.isEquited = function () {
          return this.slotPos >= p["default"].EQUIP_POS_START &&
            this.slotPos < p["default"].EQUIP_POS_END
            ? !0
            : this.getIsItemPetEquip()
              ? g["default"].isEquited(this)
              : !1;
        }),
        (e.prototype.isCanAttach = function () {
          return this.attachCount > 0 ? !0 : !1;
        }),
        (e.prototype.isStackable = function () {
          return 1 == this.isTimeItem()
            ? !1
            : this.isShopLocked()
              ? !1
              : this.stackNum > 1
                ? !0
                : !1;
        }),
        (e.prototype.isPetType = function () {
          return this.type == a["default"].ITEM_TYPE_PET;
        }),
        (e.prototype.isPetEquip = function () {
          return this.slotPos == p["default"].PET_POS;
        }),
        (e.prototype.isVipItem = function () {
          return this.vipLevelReq > 0;
        }),
        (e.prototype.isPetEgg = function () {
          return this.power1 == a["default"].POWER_PET_EGG;
        }),
        (e.prototype.isOpenStoreItem = function () {
          return this.power1 == a["default"].POWER_OPEN_STORE;
        }),
        (e.prototype.isCountryBook = function () {
          return this.id == a["default"].ITEM_ID_COMMAND_BOOK;
        }),
        (e.prototype.isChangeNameItem = function () {
          return this.id == a["default"].ITEM_ID_CHANGE_NAME;
        }),
        (e.prototype.isRepairItem = function () {
          return this.id == a["default"].ITEM_ID_REPAIR;
        }),
        (e.prototype.isPetCanUseItem = function () {
          return (
            this.isPetAddLife() ||
            this.isPetAgeItem() ||
            this.isPetResetItem() ||
            this.isPetExpItem() ||
            this.isPetAddSkill() ||
            this.isPetSkillBook() ||
            this.isSkillPetItem() ||
            this.isPetSealSkillBook()
          );
        }),
        (e.prototype.isCanUseByOneKeyItem = function () {
          return (
            this.isPetExpItem() ||
            this.isCountryBook() ||
            this.isPlayerExpItem()
          );
        }),
        (e.prototype.isPetCanUseItem2 = function () {
          return (
            this.isPetAddLife() ||
            this.isPetAgeItem() ||
            this.isPetExpItem() ||
            this.isPetSkillBook() ||
            this.isSkillPetItem() ||
            this.isPetSealSkillBook()
          );
        }),
        (e.prototype.isSkillBook = function () {
          return this.type == a["default"].ITEM_TYPE_SKILL_BOOK;
        }),
        (e.prototype.isPetSkillBook = function () {
          return (
            this.type == a["default"].ITEM_TYPE_SKILL_BOOK &&
            this.power1 == a["default"].POWER_SKILL_SCROLL_PET
          );
        }),
        (e.prototype.isPetSealSkillBook = function () {
          return this.power1 == a["default"].POWER_SKILL_BOOK_PET;
        }),
        (e.prototype.isPetExpBook = function () {
          return (
            this.id == a["default"].ITEM_ID_PET_EXPERIENCE_BOOK ||
            this.id == a["default"].ITEM_ID_PET_EXPERIENCE_BOOK2 ||
            this.id == a["default"].ITEM_ID_PET_EXPERIENCE_BOOK3
          );
        }),
        (e.prototype.isPetAddSkill = function () {
          return this.id == a["default"].ITEM_ID_PET_ADD_SKILL;
        }),
        (e.prototype.isPetReset1 = function () {
          return this.id == a["default"].ITEM_ID_PET_RESET;
        }),
        (e.prototype.isPetReset2 = function () {
          return this.id == a["default"].ITEM_ID_PET_RESET2;
        }),
        (e.prototype.isPetAgeItem = function () {
          return this.id == a["default"].ITEM_ID_PET_AGE;
        }),
        (e.prototype.isPetAddLife = function () {
          return this.type == a["default"].ITEM_TYPE_ADD_PET_LIFE;
        }),
        (e.prototype.isPetResetItem = function () {
          return (
            this.id == a["default"].ITEM_ID_PET_RESET ||
            this.id == a["default"].ITEM_ID_PET_RESET2
          );
        }),
        (e.prototype.isIdentifyScrollItem = function () {
          return (
            this.id == a["default"].ITEM_ID_IDENTIFY_SCROLL ||
            this.id == a["default"].ITEM_ID_IDENTIFY_SCROLL_BIND
          );
        }),
        (e.prototype.isHighIdentifyScrollItem = function () {
          return (
            this.id == a["default"].ITEM_ID_HIGH_IDENTIFY_SCROLL ||
            this.id == a["default"].ITEM_ID_HIGH_IDENTIFY_SCROLL_BIND
          );
        }),
        (e.prototype.isUpgradeIdentifyScrollItem = function () {
          return (
            this.id == a["default"].ITEM_ID_UPGRADE_IDENTIFY_SCROLL ||
            this.id == a["default"].ITEM_ID_UPGRAND_IDENTIFY_SCROLL_BIND
          );
        }),
        (e.prototype.isUpgradeIntensifyScroll = function () {
          return (
            this.id == a["default"].ITEM_ID_UPGRADE_INTENSIFY_SCROLL ||
            this.id == a["default"].ITEM_ID_UPGRAND_INTENSIFY_SCROLL_BIND
          );
        }),
        (e.prototype.isAddBagSizeItem = function () {
          return this.id == a["default"].ITEM_ID_ADD_BAG_SIZE;
        }),
        (e.prototype.isPetExpItem = function () {
          return this.power1 == a["default"].POWER_PET_ADD_EXP;
        }),
        (e.prototype.isTitleItem = function () {
          return this.power1 == a["default"].POWER_POWER_TITLE;
        }),
        (e.prototype.isPlayerExpItem = function () {
          return this.power1 == a["default"].POWER_ADD_EXP;
        }),
        (e.prototype.isChestItem = function () {
          return (
            this.power1 == a["default"].POWER_CHEST_LV1 ||
            this.power1 == a["default"].POWER_CHEST_LV2 ||
            this.power1 == a["default"].POWER_CHEST_LV3 ||
            this.power1 == a["default"].POWER_CHEST_LV4 ||
            this.power1 == a["default"].POWER_COLOR_BOX
          );
        }),
        (e.prototype.isColorBox = function () {
          return this.power1 == a["default"].POWER_COLOR_BOX ? !0 : !1;
        }),
        (e.prototype.isIdentifyItem = function () {
          return (this.status & e.STATUS_CAN_IDENTIFY) > 0 ? !0 : !1;
        }),
        (e.prototype.isShowIdentifyBtnForItem = function () {
          return this.isIdentifyItem()
            ? !0
            : this.power1 == a["default"].POWER_IDENTIFY ||
                this.power2 == a["default"].POWER_IDENTIFY ||
                this.bindPower1 == a["default"].POWER_IDENTIFY ||
                this.bindPower2 == a["default"].POWER_IDENTIFY
              ? !0
              : this.power3 == a["default"].POWER_COMPOSITE
                ? !0
                : !1;
        }),
        (e.prototype.isDestroy = function () {
          return this.durability <= 0;
        }),
        (e.prototype.isWillDestroy = function () {
          return this.durability < 10;
        }),
        (e.prototype.isTimeItem = function () {
          return (this.status & e.STATUS_TIME_ITEM) > 0;
        }),
        (e.prototype.isTimeItemTimeOut = function () {
          return (this.status & e.STATUS_TIME_OUT) > 0;
        }),
        (e.prototype.isVipItemTimeOut = function () {
          return (this.status & e.STATUS_VIP_TIME_OUT) > 0;
        }),
        (e.prototype.checkTimeItem = function () {
          this.isExpired()
            ? (this.status |= e.STATUS_TIME_OUT)
            : (this.status &= ~e.STATUS_TIME_OUT);
        }),
        (e.prototype.isExpired = function () {
          return this.expireTime <= 0
            ? !1
            : this.expireTime - o["default"].timer.serverTime > 0
              ? !1
              : !0;
        }),
        (e.prototype.isChangeSexItem = function () {
          return this.id == a["default"].ITEM_ID_CHANGE_SEX;
        }),
        (e.prototype.isCpPointAddItem = function () {
          return this.id == a["default"].ITEM_ID_CP_POINT_ADD;
        }),
        (e.prototype.isSkillPlayerItem = function () {
          return (
            this.id == a["default"].ITEM_ID_SKILL_PLAYER ||
            a["default"].ITEM_ID_SKILL_PLAYER_2 == this.id ||
            a["default"].ITEM_ID_SKILL_PLAYER_3 == this.id
          );
        }),
        (e.prototype.isSkillPetItem = function () {
          return (
            this.id == a["default"].ITEM_ID_SKILL_PET ||
            a["default"].ITEM_ID_SKILL_PET_2 == this.id ||
            a["default"].ITEM_ID_SKILL_PET_3 == this.id
          );
        }),
        (e.prototype.isSpPointAddItem = function () {
          return this.id == a["default"].ITEM_ID_SP_POINT_ADD;
        }),
        (e.prototype.isProsperityDegreePointAddItem = function () {
          return this.id == a["default"].ITEM_ID_PROSPERITY_DEGREE_POINT_ADD;
        }),
        (e.prototype.isCanUse = function (t) {
          switch (t) {
            case e.CAN_USE_WORLD:
              if (
                this.type == a["default"].ITEM_TYPE_ANYTIME_USE ||
                this.type == a["default"].ITEM_TYPE_NOT_BATTLE_USE ||
                this.type == a["default"].ITEM_TYPE_SKILL_BOOK ||
                this.type == a["default"].ITEM_TYPE_ADD_PET_LIFE ||
                this.type == a["default"].ITEM_TYPE_LN_STONE
              )
                return !0;
              break;
            case e.CAN_USE_BATTLE:
              if (
                this.type == a["default"].ITEM_TYPE_ANYTIME_USE ||
                this.type == a["default"].ITEM_TYPE_BATTLE_USE
              )
                return !0;
              break;
            case e.CAN_USE_ALL:
              return !0;
          }
          return !1;
        }),
        (e.prototype.isRebornItem = function () {
          return this.power1 == a["default"].POWER_RECOVER ||
            this.power1 == a["default"].POWER_RECOVER_PERCENT
            ? !0
            : this.power2 == a["default"].POWER_RECOVER ||
                this.power2 == a["default"].POWER_RECOVER_PERCENT
              ? !0
              : !1;
        }),
        (e.prototype.getInfo = function () {
          return null == this.info || 0 == this.info.length || "" == this.info
            ? ""
            : this.info;
        }),
        (e.prototype.setInfo = function (e) {
          this.info = e;
        }),
        (e.isValidEquipRequire = function (t, i, o) {
          var n = !0;
          (null == i && (n = !1), null == t && (n = !1));
          var a = t.get(l.ModelConst.LEVEL);
          return (
            a < i.reqLv &&
              (null != o &&
                o.append(
                  d.Tool.manageString(
                    r.GameText.STR_ITEM_REQ_LEVEL,
                    i.reqLv - a + "",
                  ),
                ),
              (n = !1)),
            i.getItemClass() == e.ITEM_CLASS_USE_ITEM
              ? n
              : ((a = t.get(l.ModelConst.STR)),
                a < i.reqStr &&
                  (null != o &&
                    o.append(
                      d.Tool.manageString(
                        r.GameText.STR_ITEM_REQ_STR,
                        i.reqStr - a + "",
                      ),
                    ),
                  (n = !1)),
                (a = t.get(l.ModelConst.CON)),
                a < i.reqCon &&
                  (null != o &&
                    o.append(
                      d.Tool.manageString(
                        r.GameText.STR_ITEM_REQ_CON,
                        i.reqCon - a + "",
                      ),
                    ),
                  (n = !1)),
                (a = t.get(l.ModelConst.AGI)),
                a < i.reqAgi &&
                  (null != o &&
                    o.append(
                      d.Tool.manageString(
                        r.GameText.STR_ITEM_REQ_AGI,
                        i.reqAgi - a + "",
                      ),
                    ),
                  (n = !1)),
                (a = t.get(l.ModelConst.ILT)),
                a < i.reqIlt &&
                  (null != o &&
                    o.append(
                      d.Tool.manageString(
                        r.GameText.STR_ITEM_REQ_ILT,
                        i.reqIlt - a + "",
                      ),
                    ),
                  (n = !1)),
                (a = t.get(l.ModelConst.WIS)),
                a < i.reqWis &&
                  (null != o &&
                    o.append(
                      d.Tool.manageString(
                        r.GameText.STR_ITEM_REQ_WIS,
                        i.reqWis - a + "",
                      ),
                    ),
                  (n = !1)),
                n)
          );
        }),
        (e.getIdentifyString_4 = function (e, t, i, o) {
          if (0 >= e && 0 >= i) return "";
          var n = a["default"].getPowerDesc(e, t);
          (0 >= e || d.Tool.isNullText(n)) && (n = r.GameText.STR_NOT_EFFECT);
          var s = a["default"].getPowerDesc(i, o);
          if (
            ((0 >= i || d.Tool.isNullText(s)) &&
              (s = r.GameText.STR_NOT_EFFECT),
            n != s)
          ) {
            var l = d.Tool.COLOR_GREEN;
            e == a["default"].POWER_IDENTIFY
              ? (l = d.Tool.COLOR_GRAY)
              : e == i && (l = -1);
            var _ = d.Tool.COLOR_GREEN;
            (i == a["default"].POWER_IDENTIFY
              ? (_ = d.Tool.COLOR_GRAY)
              : i == e && t > o && (_ = d.Tool.COLOR_RED),
              l >= 0 && (n = u["default"].makeColorString(n, l)),
              _ >= 0 && (s = u["default"].makeColorString(s, _)));
          }
          return n + "->" + s;
        }),
        (e.getIdentifyString_8 = function (e, t, i, o, n, s, l, _) {
          if (0 >= e && 0 >= n) return "";
          var p = a["default"].getPowerDesc(e, t, null, i, o);
          (0 >= e || d.Tool.isNullText(p)) && (p = r.GameText.STR_NOT_EFFECT);
          var c = a["default"].getPowerDesc(n, s, null, l, _);
          if (
            ((0 >= n || d.Tool.isNullText(c)) &&
              (c = r.GameText.STR_NOT_EFFECT),
            p != c)
          ) {
            var h = d.Tool.COLOR_GREEN;
            e == a["default"].POWER_IDENTIFY
              ? (h = d.Tool.COLOR_GRAY)
              : e == n && (h = -1);
            var f = d.Tool.COLOR_GREEN;
            (n == a["default"].POWER_IDENTIFY
              ? (f = d.Tool.COLOR_GRAY)
              : n == e && t > s && (f = d.Tool.COLOR_RED),
              h >= 0 && (p = u["default"].makeColorString(p, h)),
              f >= 0 && (c = u["default"].makeColorString(c, f)));
          }
          return p + "->" + c;
        }),
        (e.prototype.getAllPowerDesc = function () {
          var t = new _["default"](),
            i = "",
            o = e.getpowerValueAdd(
              this.powerValue1,
              this.ascensionStar,
              this.star,
              this.isBinded(),
              this.isAscension(this.power1),
            );
          ((i = this.getPowerDesc(this.power1, o)),
            0 != this.power1 &&
              0 != o &&
              0 == d.Tool.isNullText(i) &&
              (t.append(
                u["default"].makeColorString(i, c["default"].COLOR_GREEN),
              ),
              t.append("\n")));
          var n = e.getpowerValueAdd(
            this.powerValue2,
            this.ascensionStar,
            this.star,
            this.isBinded(),
            this.isAscension(this.power2),
          );
          ((i = this.getPowerDesc(this.power2, n)),
            0 != this.power2 &&
              0 != n &&
              0 == d.Tool.isNullText(i) &&
              (t.append(
                u["default"].makeColorString(i, c["default"].COLOR_GREEN),
              ),
              t.append("\n")));
          var a = e.getpowerValueAdd(
            this.powerValue3,
            this.ascensionStar,
            this.star,
            this.isBinded(),
            this.isAscension(this.power3),
          );
          ((i = this.getPowerDesc(this.power3, a)),
            0 != this.power3 &&
              0 != a &&
              0 == d.Tool.isNullText(i) &&
              (t.append(
                u["default"].makeColorString(i, c["default"].COLOR_GREEN),
              ),
              t.append("\n")));
          var r = e.getpowerValueAdd(
            this.bindPowerValue1,
            this.ascensionStar,
            this.star,
            this.isBinded(),
            this.isAscension(this.bindPower1),
          );
          ((i = this.getPowerDesc(this.bindPower1, r)),
            0 != this.bindPower1 &&
              0 != r &&
              0 == d.Tool.isNullText(i) &&
              (t.append(
                u["default"].makeColorString(i, c["default"].COLOR_GREEN),
              ),
              t.append("\n")));
          var s = e.getpowerValueAdd(
            this.bindPowerValue2,
            this.ascensionStar,
            this.star,
            this.isBinded(),
            this.isAscension(this.bindPower2),
          );
          return (
            (i = this.getPowerDesc(this.bindPower2, s)),
            0 != this.bindPower2 &&
              0 != s &&
              0 == d.Tool.isNullText(i) &&
              (t.append(
                u["default"].makeColorString(i, c["default"].COLOR_GREEN),
              ),
              t.append("\n")),
            0 == d.Tool.isNullText(this.skillDesc) &&
              (t.append(
                u["default"].makeColorString(
                  this.skillDesc,
                  c["default"].COLOR_YELLOW,
                ),
              ),
              t.append("\n")),
            t.toString()
          );
        }),
        (e.getEquipCompareDesc = function (t, i, o, l) {
          if ((void 0 === l && (l = !0), null == i || null == t)) return null;
          if (
            o == e.COMPARE_ALL &&
            (0 == i.isCanEquip() || 0 == t.isCanEquip())
          )
            return null;
          var p = " -> ",
            c = "\n",
            h = i.isBinded(),
            f = t.isBinded(),
            T = new _["default"]();
          if (o == e.COMPARE_IDENTIFY_G) {
            var E = "";
            return (
              (E =
                i.upgradeAscensionStar > 0 && t.upgradeAscensionStar > 0
                  ? e.getIdentifyString_8(
                      i.power4,
                      i.powerValue4,
                      i.powerValue4add,
                      h,
                      t.power4,
                      t.powerValue4,
                      t.powerValue4add,
                      f,
                    )
                  : e.getIdentifyString_4(
                      i.power4,
                      i.powerValue4,
                      t.power4,
                      t.powerValue4,
                    )),
              0 == d.Tool.isNullText(E) &&
                (i.power4 != a["default"].POWER_COMPOSITE ||
                  t.power4 != a["default"].POWER_COMPOSITE) &&
                (T.append(
                  d.Tool.manageString(
                    s.GameText2.STR_EQ_INDENTIFY_UPGRADE_ITEM_POWER,
                    ["1", E],
                  ),
                ),
                T.append("\n")),
              (E =
                i.upgradeAscensionStar > 0 && t.upgradeAscensionStar > 0
                  ? e.getIdentifyString_8(
                      i.power5,
                      i.powerValue5,
                      i.powerValue5add,
                      h,
                      t.power5,
                      t.powerValue5,
                      t.powerValue5add,
                      f,
                    )
                  : e.getIdentifyString_4(
                      i.power5,
                      i.powerValue5,
                      t.power5,
                      t.powerValue5,
                    )),
              0 == d.Tool.isNullText(E) &&
                (i.power5 != a["default"].POWER_COMPOSITE ||
                  t.power5 != a["default"].POWER_COMPOSITE) &&
                (T.append(
                  d.Tool.manageString(
                    s.GameText2.STR_EQ_INDENTIFY_UPGRADE_ITEM_POWER,
                    ["2", E],
                  ),
                ),
                T.append("\n")),
              (E =
                i.upgradeAscensionStar > 0 && t.upgradeAscensionStar > 0
                  ? e.getIdentifyString_8(
                      i.power6,
                      i.powerValue6,
                      i.powerValue6add,
                      h,
                      t.power6,
                      t.powerValue6,
                      t.powerValue6add,
                      f,
                    )
                  : e.getIdentifyString_4(
                      i.power6,
                      i.powerValue6,
                      t.power6,
                      t.powerValue6,
                    )),
              0 == d.Tool.isNullText(E) &&
                (i.power6 != a["default"].POWER_COMPOSITE ||
                  t.power6 != a["default"].POWER_COMPOSITE) &&
                (T.append(
                  d.Tool.manageString(
                    s.GameText2.STR_EQ_INDENTIFY_UPGRADE_ITEM_POWER,
                    ["3", E],
                  ),
                ),
                T.append("\n")),
              (E =
                i.upgradeAscensionStar > 0 && t.upgradeAscensionStar > 0
                  ? e.getIdentifyString_8(
                      i.power7,
                      i.powerValue7,
                      i.powerValue7add,
                      h,
                      t.power7,
                      t.powerValue7,
                      t.powerValue7add,
                      f,
                    )
                  : e.getIdentifyString_4(
                      i.power7,
                      i.powerValue7,
                      t.power7,
                      t.powerValue7,
                    )),
              0 == d.Tool.isNullText(E) &&
                (i.power7 != a["default"].POWER_COMPOSITE ||
                  t.power7 != a["default"].POWER_COMPOSITE) &&
                (T.append(
                  d.Tool.manageString(
                    s.GameText2.STR_EQ_INDENTIFY_UPGRADE_ITEM_POWER,
                    ["4", E],
                  ),
                ),
                T.append("\n")),
              T.toString()
            );
          }
          if (o == e.COMPARE_IDENTIFY || o == e.COMPARE_COMBIN) {
            var E = "";
            return (
              o == e.COMPARE_COMBIN &&
                T.append(
                  d.Tool.manageString(r.GameText.STR_ITEM_STAR_NUM, [
                    n["default"].getStarInfo(i.star, i.ascensionStar),
                    n["default"].getStarInfo(t.star, t.ascensionStar),
                  ]),
                ),
              (E =
                i.ascensionStar > 0 && t.ascensionStar > 0
                  ? e.getIdentifyString_8(
                      i.power1,
                      i.powerValue1,
                      i.powerValue1add,
                      h,
                      t.power1,
                      t.powerValue1,
                      t.powerValue1add,
                      f,
                    )
                  : e.getIdentifyString_4(
                      i.power1,
                      i.powerValue1,
                      t.power1,
                      t.powerValue1,
                    )),
              0 == d.Tool.isNullText(E) &&
                (i.power1 != a["default"].POWER_COMPOSITE ||
                  t.power1 != a["default"].POWER_COMPOSITE) &&
                (T.append(
                  d.Tool.manageString(r.GameText.STR_ITEM_POWER, ["1", E]),
                ),
                T.append("\n")),
              (E =
                i.ascensionStar > 0 && t.ascensionStar > 0
                  ? e.getIdentifyString_8(
                      i.power2,
                      i.powerValue2,
                      i.powerValue2add,
                      h,
                      t.power2,
                      t.powerValue2,
                      t.powerValue2add,
                      f,
                    )
                  : e.getIdentifyString_4(
                      i.power2,
                      i.powerValue2,
                      t.power2,
                      t.powerValue2,
                    )),
              0 == d.Tool.isNullText(E) &&
                (i.power2 != a["default"].POWER_COMPOSITE ||
                  t.power2 != a["default"].POWER_COMPOSITE) &&
                (T.append(
                  d.Tool.manageString(r.GameText.STR_ITEM_POWER, ["2", E]),
                ),
                T.append("\n")),
              (E =
                i.ascensionStar > 0 && t.ascensionStar > 0
                  ? e.getIdentifyString_8(
                      i.power3,
                      i.powerValue3,
                      i.powerValue3add,
                      h,
                      t.power3,
                      t.powerValue3,
                      t.powerValue3add,
                      f,
                    )
                  : e.getIdentifyString_4(
                      i.power3,
                      i.powerValue3,
                      t.power3,
                      t.powerValue3,
                    )),
              0 == d.Tool.isNullText(E) &&
                (i.power3 != a["default"].POWER_COMPOSITE ||
                  t.power3 != a["default"].POWER_COMPOSITE) &&
                (T.append(
                  d.Tool.manageString(r.GameText.STR_ITEM_POWER, ["3", E]),
                ),
                T.append("\n")),
              (E =
                i.getIsItemPetEquip() &&
                t.getIsItemPetEquip() &&
                i.petBindPowerValue1 > 0 &&
                t.petBindPowerValue1 > 0
                  ? e.getIdentifyString_8(
                      i.bindPower1,
                      i.petBindPowerValue1,
                      i.bindPowerValue1 - i.petBindPowerValue1,
                      h,
                      t.bindPower1,
                      t.petBindPowerValue1,
                      t.bindPowerValue1 - t.petBindPowerValue1,
                      f,
                    )
                  : i.ascensionStar > 0 && t.ascensionStar > 0
                    ? e.getIdentifyString_8(
                        i.bindPower1,
                        i.bindPowerValue1,
                        i.bindPowerValue1add,
                        h,
                        t.bindPower1,
                        t.bindPowerValue1,
                        t.bindPowerValue1add,
                        f,
                      )
                    : e.getIdentifyString_4(
                        i.bindPower1,
                        i.bindPowerValue1,
                        t.bindPower1,
                        t.bindPowerValue1,
                      )),
              0 == d.Tool.isNullText(E) &&
                (i.bindPower1 != a["default"].POWER_COMPOSITE ||
                  t.bindPower1 != a["default"].POWER_COMPOSITE) &&
                (T.append(
                  d.Tool.manageString(r.GameText.STR_ITEM_BIND_POWER, ["1", E]),
                ),
                T.append("\n")),
              (E =
                i.getIsItemPetEquip() &&
                t.getIsItemPetEquip() &&
                i.petBindPowerValue2 > 0 &&
                t.petBindPowerValue2 > 0
                  ? e.getIdentifyString_8(
                      i.bindPower2,
                      i.petBindPowerValue2,
                      i.bindPowerValue2 - i.petBindPowerValue2,
                      h,
                      t.bindPower2,
                      t.petBindPowerValue2,
                      t.bindPowerValue2 - t.petBindPowerValue2,
                      f,
                    )
                  : i.ascensionStar > 0 && t.ascensionStar > 0
                    ? e.getIdentifyString_8(
                        i.bindPower2,
                        i.bindPowerValue2,
                        i.bindPowerValue2add,
                        h,
                        t.bindPower2,
                        t.bindPowerValue2,
                        t.bindPowerValue2add,
                        f,
                      )
                    : e.getIdentifyString_4(
                        i.bindPower2,
                        i.bindPowerValue2,
                        t.bindPower2,
                        t.bindPowerValue2,
                      )),
              0 == d.Tool.isNullText(E) &&
                (i.bindPower2 != a["default"].POWER_COMPOSITE ||
                  t.bindPower2 != a["default"].POWER_COMPOSITE) &&
                (T.append(
                  d.Tool.manageString(r.GameText.STR_ITEM_BIND_POWER, ["2", E]),
                ),
                T.append("\n")),
              o == e.COMPARE_COMBIN &&
                (0 == d.Tool.isNullText(i.skillDesc) ||
                  0 == d.Tool.isNullText(t.skillDesc)) &&
                (T.append(
                  r.GameText.STR_ITEM_COMPOSE_SKILL +
                    ":" +
                    (d.Tool.isNullText(i.skillDesc)
                      ? r.GameText.STR_NOT_EFFECT
                      : u["default"].makeColorString(
                          i.skillDesc,
                          d.Tool.COLOR_YELLOW,
                        )) +
                    "->" +
                    (d.Tool.isNullText(t.skillDesc)
                      ? r.GameText.STR_NOT_EFFECT
                      : u["default"].makeColorString(
                          t.skillDesc,
                          d.Tool.COLOR_YELLOW,
                        )),
                ),
                T.append("\n")),
              T.toString()
            );
          }
          (l && T.append(i.getNameInfo() + p + t.getNameInfo() + c),
            o == e.COMPARE_ALL &&
              i.type != a["default"].ITEM_TYPE_BLOOD_BOTTLE &&
              T.append(
                d.Tool.manageString(r.GameText.STR_ITEM_STAR_NUM, [
                  n["default"].getStarInfo(i.star, i.ascensionStar) +
                    " " +
                    n["default"].getUpgradeStarInfo(
                      i.upgradeStar,
                      i.upgradeAscensionStar,
                    ),
                  n["default"].getStarInfo(t.star, t.ascensionStar) +
                    " " +
                    n["default"].getUpgradeStarInfo(
                      t.upgradeStar,
                      t.upgradeAscensionStar,
                    ),
                ]),
              ),
            i.type != a["default"].ITEM_TYPE_BLOOD_BOTTLE &&
              o != e.COMPARE_PETGRADE &&
              (i.type == a["default"].ITEM_TYPE_PET_EQUIP
                ? T.append(
                    d.Tool.manageString(
                      r.GameText.STR_ITEM_COM_REQ_LV,
                      d.Tool.compareColorText2(i.petLevel, t.petLevel) + c,
                    ),
                  )
                : T.append(
                    d.Tool.manageString(
                      r.GameText.STR_ITEM_COM_REQ_LV,
                      d.Tool.compareColorText2(i.reqLv, t.reqLv) + c,
                    ),
                  )),
            i.durability != t.durability &&
              t.durability > 0 &&
              T.append(
                d.Tool.manageString(
                  r.GameText.STR_ITEM_COM_DURA,
                  d.Tool.compareColorText2(i.durability, t.durability) + c,
                ),
              ),
            i.atk_time != t.atk_time &&
              0 != t.atk_time &&
              T.append(
                d.Tool.manageString(
                  r.GameText.STR_ITEM_COM_ATK_TIME,
                  d.Tool.compareColorText2(i.atk_time + 1, t.atk_time + 1) + c,
                ),
              ),
            (i.atkMin > 0 || i.atkMax > 0 || t.atkMin > 0 || t.atkMax > 0) &&
              T.append(
                d.Tool.manageString(
                  r.GameText.STR_ITEM_COM_ATK_MIN,
                  d.Tool.compareColorText4(
                    i.atkMin,
                    i.atkMax,
                    t.atkMin,
                    t.atkMax,
                    "~",
                  ) + c,
                ),
              ),
            i.def_str != t.def_str &&
              t.def_str > 0 &&
              T.append(
                d.Tool.manageString(
                  r.GameText.STR_ITEM_COM_DEF_STR,
                  d.Tool.compareColorText2(i.def_str, t.def_str) + c,
                ),
              ),
            i.def_agi != t.def_agi &&
              t.def_agi > 0 &&
              T.append(
                d.Tool.manageString(
                  r.GameText.STR_ITEM_COM_DEF_AGI,
                  d.Tool.compareColorText2(i.def_agi, t.def_agi) + c,
                ),
              ),
            i.def_mag != t.def_mag &&
              t.def_mag > 0 &&
              T.append(
                d.Tool.manageString(
                  r.GameText.STR_ITEM_COM_DEF_MAG,
                  d.Tool.compareColorText2(i.def_mag, t.def_mag) + c,
                ),
              ),
            i.getItemHitRate() != t.getItemHitRate() &&
              t.getItemHitRate() > 0 &&
              T.append(
                d.Tool.manageString(
                  r.GameText.STR_ITEM_COM_HIT_RATE,
                  d.Tool.compareColorText2(
                    i.getItemHitRate(),
                    t.getItemHitRate(),
                  ) + c,
                ),
              ),
            i.round != t.round &&
              t.round > 0 &&
              T.append(
                d.Tool.manageString(
                  r.GameText.STR_ITEM_COM_LAST_ROUND,
                  d.Tool.compareColorText2(i.round, t.round) + c,
                ),
              ),
            i.area != t.area &&
              t.area > 0 &&
              T.append(
                d.Tool.manageString(
                  r.GameText.STR_ITEM_COM_AREA,
                  a["default"].getSkillAreaString(i.area) +
                    p +
                    a["default"].getSkillAreaString(t.area) +
                    c,
                ),
              ),
            (i.attachPower != t.attachPower ||
              i.attachValue != t.attachValue) &&
              T.append(
                d.Tool.manageString(
                  r.GameText.STR_ITEM_COM_ATTACK_POWER,
                  d.Tool.comparePower(
                    i.attachPower,
                    i.attachValue,
                    t.attachPower,
                    t.attachValue,
                  ) + c,
                ),
              ));
          var y = e.getpowerValueAdd(
              i.powerValueBlood1,
              i.ascensionStar,
              i.star,
              i.isBinded(),
              i.isAscension(i.power1),
            ),
            g = e.getpowerValueAdd(
              t.powerValueBlood1,
              t.ascensionStar,
              t.star,
              t.isBinded(),
              t.isAscension(t.power1),
            );
          y > 0 &&
            g > 0 &&
            T.append(
              d.Tool.manageString(r.GameText.STR_ITEM_POWER, [
                "1",
                d.Tool.comparePower(i.power1, y, t.power1, g) + c,
              ]),
            );
          var v = e.getpowerValueAdd(
              i.powerValue1,
              i.ascensionStar,
              i.star,
              i.isBinded(),
              i.isAscension(i.power1),
            ),
            S = e.getpowerValueAdd(
              t.powerValue1,
              t.ascensionStar,
              t.star,
              t.isBinded(),
              t.isAscension(t.power1),
            );
          (i.power1 != t.power1 || v != S) &&
            T.append(
              d.Tool.manageString(r.GameText.STR_ITEM_POWER, [
                "1",
                d.Tool.comparePower(i.power1, v, t.power1, S) + c,
              ]),
            );
          var I = e.getpowerValueAdd(
              i.powerValue2,
              i.ascensionStar,
              i.star,
              i.isBinded(),
              i.isAscension(i.power2),
            ),
            m = e.getpowerValueAdd(
              t.powerValue2,
              t.ascensionStar,
              t.star,
              t.isBinded(),
              t.isAscension(t.power2),
            );
          (i.power2 != t.power2 || I != m) &&
            T.append(
              d.Tool.manageString(r.GameText.STR_ITEM_POWER, [
                "2",
                d.Tool.comparePower(i.power2, I, t.power2, m) + c,
              ]),
            );
          var A = e.getpowerValueAdd(
              i.powerValue3,
              i.ascensionStar,
              i.star,
              i.isBinded(),
              i.isAscension(i.power3),
            ),
            C = e.getpowerValueAdd(
              t.powerValue3,
              t.ascensionStar,
              t.star,
              t.isBinded(),
              t.isAscension(t.power3),
            );
          (i.power3 != t.power3 || A != C) &&
            T.append(
              d.Tool.manageString(r.GameText.STR_ITEM_POWER, [
                "3",
                d.Tool.comparePower(i.power3, A, t.power3, C) + c,
              ]),
            );
          var P = e.getpowerValueAdd(
              i.bindPowerValue1,
              i.ascensionStar,
              i.star,
              i.isBinded(),
              i.isAscension(i.bindPower1),
            ),
            R = e.getpowerValueAdd(
              t.bindPowerValue1,
              t.ascensionStar,
              t.star,
              t.isBinded(),
              t.isAscension(t.bindPower1),
            );
          (i.bindPower1 != t.bindPower1 || P != R) &&
            T.append(
              d.Tool.manageString(r.GameText.STR_ITEM_BIND_POWER, [
                "1",
                d.Tool.comparePower(i.bindPower1, P, t.bindPower1, R) + c,
              ]),
            );
          var O = e.getpowerValueAdd(
              i.bindPowerValue2,
              i.ascensionStar,
              i.star,
              i.isBinded(),
              i.isAscension(i.bindPower2),
            ),
            N = e.getpowerValueAdd(
              t.bindPowerValue2,
              t.ascensionStar,
              t.star,
              t.isBinded(),
              t.isAscension(t.bindPower2),
            );
          (i.bindPower2 != t.bindPower2 || O != N) &&
            T.append(
              d.Tool.manageString(r.GameText.STR_ITEM_BIND_POWER, [
                "2",
                d.Tool.comparePower(i.bindPower2, O, t.bindPower2, N) + c,
              ]),
            );
          var M = e.getpowerValueAdd(
              i.powerValue4,
              i.upgradeAscensionStar,
              i.upgradeStar,
              i.isBinded(),
              i.isAscension(i.power4),
            ),
            L = e.getpowerValueAdd(
              t.powerValue4,
              t.upgradeAscensionStar,
              t.upgradeStar,
              t.isBinded(),
              t.isAscension(t.power4),
            );
          (i.power4 != t.power4 || M != L) &&
            T.append(
              d.Tool.manageString(
                s.GameText2.STR_EQ_INDENTIFY_UPGRADE_ITEM_POWER,
                ["1", d.Tool.comparePower(i.power4, M, t.power4, L) + c],
              ),
            );
          var w = e.getpowerValueAdd(
              i.powerValue5,
              i.upgradeAscensionStar,
              i.upgradeStar,
              i.isBinded(),
              i.isAscension(i.power5),
            ),
            b = e.getpowerValueAdd(
              t.powerValue5,
              t.upgradeAscensionStar,
              t.upgradeStar,
              t.isBinded(),
              t.isAscension(t.power5),
            );
          (i.power5 != t.power5 || w != b) &&
            T.append(
              d.Tool.manageString(
                s.GameText2.STR_EQ_INDENTIFY_UPGRADE_ITEM_POWER,
                ["2", d.Tool.comparePower(i.power5, w, t.power5, b) + c],
              ),
            );
          var x = e.getpowerValueAdd(
              i.powerValue6,
              i.upgradeAscensionStar,
              i.upgradeStar,
              i.isBinded(),
              i.isAscension(i.power6),
            ),
            D = e.getpowerValueAdd(
              t.powerValue6,
              t.upgradeAscensionStar,
              t.upgradeStar,
              t.isBinded(),
              t.isAscension(t.power6),
            );
          (i.power6 != t.power6 || x != D) &&
            T.append(
              d.Tool.manageString(
                s.GameText2.STR_EQ_INDENTIFY_UPGRADE_ITEM_POWER,
                ["3", d.Tool.comparePower(i.power6, x, t.power6, D) + c],
              ),
            );
          var B = e.getpowerValueAdd(
              i.powerValue7,
              i.upgradeAscensionStar,
              i.upgradeStar,
              i.isBinded(),
              i.isAscension(i.power7),
            ),
            G = e.getpowerValueAdd(
              t.powerValue7,
              t.upgradeAscensionStar,
              t.upgradeStar,
              t.isBinded(),
              t.isAscension(t.power7),
            );
          return (
            (i.power7 != t.power7 || B != G) &&
              T.append(
                d.Tool.manageString(
                  s.GameText2.STR_EQ_INDENTIFY_UPGRADE_ITEM_POWER,
                  ["4", d.Tool.comparePower(i.power7, B, t.power7, G) + c],
                ),
              ),
            (i.isHasSkill() || t.isHasSkill()) &&
              T.append(
                r.GameText.STR_ITEM_COMPOSE_SKILL +
                  ":" +
                  u["default"].makeColorString(
                    i.getSkillDesc(),
                    i.isHasSkill()
                      ? d.Tool.COLOR_GREEN
                      : d.Tool.COLOR_GOLD_YELLOW,
                  ) +
                  " -> " +
                  u["default"].makeColorString(
                    t.getSkillDesc(),
                    t.isHasSkill()
                      ? d.Tool.COLOR_GREEN
                      : d.Tool.COLOR_GOLD_YELLOW,
                  ) +
                  c,
              ),
            T.toString()
          );
        }),
        (e.prototype.getSkillDesc = function () {
          return d.Tool.isNullText(this.skillDesc)
            ? r.GameText.STR_NOT_EFFECT
            : this.skillDesc;
        }),
        (e.prototype.getAttackInfo = function () {
          var e = u["default"].makeColorString(
            this.getAttackPowerDesc(!0),
            d.Tool.COLOR_GREEN,
          );
          return (
            1 == this.isAttackBroken() &&
              (e +=
                "\n" +
                u["default"].makeColorString(
                  r.GameText.STR_WORLD_ITEM_ATTACH_WARN,
                  d.Tool.COLOR_RED,
                )),
            e
          );
        }),
        (e.prototype.getAttachRateDesc = function (e) {
          if (this.isAttackBroken()) return "";
          var t,
            i = e
              ? r.GameText.STR_ITEM_ATTACK_RATE
              : r.GameText.STR_ITEM_ATTACK_NEXT_RATE;
          return (
            (t = this.attachDone < 3 ? i + "100%" : i + "50%"),
            u["default"].makeColorString("(" + t + ")", d.Tool.COLOR_YELLOW)
          );
        }),
        (e.prototype.getAttackTwoSureInfo = function () {
          return d.Tool.manageString(
            r.GameText.STR_ITEM_ATTACK_ASK,
            u["default"].makeColorString(
              this.getAttackPowerDesc(!0),
              d.Tool.COLOR_GREEN,
            ) +
              "\n" +
              u["default"].makeColorString(
                r.GameText.STR_WORLD_ITEM_ATTACH_WARN,
                d.Tool.COLOR_RED,
              ),
          );
        }),
        (e.prototype.isAttackBroken = function () {
          return (this.status & e.STATUS_ATTACK_BROKEN) > 0;
        }),
        (e.prototype.setAttackBroken = function (t) {
          ((this.status &= ~e.STATUS_ATTACK_BROKEN),
            t && (this.status |= e.STATUS_ATTACK_BROKEN));
        }),
        (e.prototype.getAttackPowerDesc = function (e) {
          if (0 != this.attachPower && 0 != this.attachValue) {
            var t = a["default"].getPowerDesc(
              this.attachPower,
              this.attachValue,
            );
            return (t +=
              1 == this.isAttackBroken()
                ? "(" + r.GameText.STR_ITEM_ATTACK_FAIL + ")"
                : 1 == e
                  ? d.Tool.manageString(
                      r.GameText.STR_ITEM_ATTACK,
                      this.attachDone + "/" + this.attachCount,
                    )
                  : d.Tool.manageString(
                      r.GameText.STR_ITEM_ATTACK,
                      this.attachDone + "",
                    ));
          }
          return "";
        }),
        (e.prototype.getEnchantInfo = function () {
          var e = "";
          return (
            0 != this.enchantPower1 &&
              0 != this.enchantPowerValue1 &&
              (e +=
                s.GameText2.STR_ENCHANT_ATTACH +
                ": " +
                a["default"].getPowerDesc(
                  this.enchantPower1,
                  this.enchantPowerValue1,
                )),
            0 != this.enchantPower2 &&
              0 != this.enchantPowerValue2 &&
              (0 == (0 != this.enchantPower1 && 0 != this.enchantPowerValue1) &&
                (e += s.GameText2.STR_ENCHANT_ATTACH + ": "),
              (e +=
                " " +
                a["default"].getPowerDesc(
                  this.enchantPower2,
                  this.enchantPowerValue2,
                ))),
            e
          );
        }),
        (e.prototype.getItemSetDesc = function (e) {
          null != e &&
            e.getVipLevel() > 0 &&
            0 == e.getVipLevel2() &&
            e.setVipLevel2(1);
          var t = new _["default"](),
            i = this.getItemSetID();
          if (0 >= i) return "";
          var o = n["default"].getSuit(i);
          if (null == o || o.length <= 0) return "";
          var l = 0;
          (this.isEquited() &&
            null != e &&
            null != e.bag &&
            (l = e.bag.getEquipItemSetNum(i)),
            t.append(
              u["default"].makeColorString(
                r.GameText.STR_ITEM_SET_EFFECT,
                d.Tool.COLOR_YELLOW,
              ),
            ));
          for (var p = 0; p < o.length;) {
            var c = o[p++],
              h = o[p++],
              f = o[p++],
              T = o[p++],
              E = o[p++],
              y = !1,
              g = d.Tool.COLOR_GRAY,
              v = d.Tool.COLOR_GRAY;
            (e == n["default"].myPlayer
              ? l >= c && E > 0 && (y = !0)
              : l >= c &&
                !n["default"].isVipOverDue(e) &&
                e.getVipLevel2() >= T &&
                (y = !0),
              y && ((v = d.Tool.COLOR_WHITE), (g = d.Tool.COLOR_GREEN)));
            var S = "";
            (T > 0 &&
              (S =
                "(" +
                d.Tool.manageString(s.GameText2.STR_VIP_ITEM_INFO, T + "") +
                ")"),
              t.append("\n"),
              t.append(
                u["default"].makeColorString(
                  d.Tool.manageStringList(r.GameText.STR_ITEM_SET_NUM, [
                    c + "",
                    a["default"].getPowerDesc(h, f),
                  ]),
                  g,
                ),
              ),
              t.append(u["default"].makeColorString(S, v)));
          }
          return t.toString();
        }),
        (e.prototype.getVipDesc = function (e) {
          var t = d.Tool.manageString(
            r.GameText.getText(r.GameText.TI_LEVEL),
            this.vipLevelReq + "",
          );
          1 == this.vipLevelReq && (t = r.GameText.STR_ITEM_DEDICATED);
          var i = null != e && e.getVipLevel() < this.vipLevelReq;
          0 == i && (i = null != e && n["default"].isVipOverDue(e));
          var o = r.GameText.STR_VIP;
          return (
            n["default"].isQQVip && (o = r.GameText.STR_QQ_DIAMOND),
            (t = o + t),
            i ? u["default"].makeColorString(t, d.Tool.COLOR_RED) : t
          );
        }),
        (e.prototype.getBingMsg = function () {
          if (this.slotPos == p["default"].SPIRIT_POS) return "";
          var e = r.GameText.STR_ITEM_NO_BIND;
          return (
            this.isAutoBinding()
              ? (e = r.GameText.STR_ITEM_AUTO_BIND)
              : this.isBinded() && (e = r.GameText.STR_ITEM_HAS_BIND),
            e
          );
        }),
        (e.prototype.getDesc = function (t, i, o, s) {
          (void 0 === i && (i = -1),
            void 0 === o && (o = !1),
            void 0 === s && (s = 24));
          var c = "",
            h = new _["default"](),
            f = [],
            T = this.getItemClass(),
            E = !0;
          if (
            (o && (h.append(this.getNameInfo(!1)), h.append("\n")),
            this.ascensionStar > 0 &&
              (this.isBinded()
                ? h.append(
                    n["default"].getStarInfo(this.star, this.ascensionStar) +
                      " " +
                      n["default"].getUpgradeStarInfo(
                        this.upgradeStar,
                        this.upgradeAscensionStar,
                      ) +
                      "\n",
                  )
                : this.star <= 0
                  ? this.upgradeStar > 0
                    ? h.append(
                        u["default"].makeColorString(
                          n["default"].getStarInfo(0, this.ascensionStar) +
                            " " +
                            n["default"].getUpgradeStarInfo(
                              this.upgradeStar,
                              this.upgradeAscensionStar,
                            ) +
                            r.GameText.STR_ITEM_STAR_BIND_ACTIVATE,
                          d.Tool.COLOR_GRAY,
                        ),
                      )
                    : h.append(
                        u["default"].makeColorString(
                          n["default"].getStarInfo(0, this.ascensionStar) +
                            " " +
                            n["default"].getUpgradeStarInfo(
                              this.upgradeStar,
                              this.upgradeAscensionStar,
                            ) +
                            r.GameText.STR_ITEM_STAR_BIND_ADD,
                          d.Tool.COLOR_GRAY,
                        ),
                      )
                  : h.append(
                      u["default"].makeColorString(
                        n["default"].getStarInfo(
                          this.star,
                          this.ascensionStar,
                        ) +
                          " " +
                          n["default"].getUpgradeStarInfo(
                            this.upgradeStar,
                            this.upgradeAscensionStar,
                          ) +
                          r.GameText.STR_ITEM_STAR_BIND_ACTIVATE,
                        d.Tool.COLOR_GRAY,
                      ),
                    )),
            this.slotPos != p["default"].SPIRIT_POS && !this.isVipTimeItem())
          ) {
            if (this.type != a["default"].ITEM_TYPE_ENERGY_ESSENCE) {
              var y = this.getBingMsg();
              h.append(y);
            } else h.append("自动使用");
            (this.isIdentifyItem() &&
              h.append(
                " " +
                  u["default"].makeColorString(
                    r.GameText.STR_ITEM_CAN_IDENTIFY,
                    d.Tool.COLOR_TITLE,
                  ),
              ),
              h.append(
                "    " +
                  u["default"].makeColorString(
                    a["default"].getItemTypeString(this.type),
                    d.Tool.COLOR_TITLE,
                  ),
              ),
              this.isCanEquip() &&
                h.append(
                  "    " +
                    u["default"].makeColorString(
                      a["default"].getGradeString(this.grade, this.isPetType()),
                      a["default"].getGradeColor(this.grade),
                    ),
                ),
              h.append("\n"));
          }
          if (
            ((c += h.toString()),
            (h = new _["default"]()),
            (f = []),
            1 == this.isPetType())
          )
            return (
              h.append(
                d.Tool.manageString(r.GameText.STR_ITEM_LEVEL, this.reqLv + ""),
              ),
              0 != this.vipLevelReq && h.append(this.getVipDesc(t)),
              h.toString()
            );
          T == e.ITEM_CLASS_WEAPON &&
            (0 != this.atkMin &&
              0 != this.atkMax &&
              f.push([
                d.Tool.manageString(
                  r.GameText.STR_ITEM_COM_ATK,
                  this.atkMin + "~" + this.atkMax,
                ),
                null,
              ]),
            0 != this.getItemHitRate() &&
              f.push([
                d.Tool.manageString(
                  r.GameText.STR_ITEM_HIT_RATE,
                  this.getItemHitRate() + "",
                ),
                null,
              ]),
            0 != this.atk_time &&
              f.push([
                d.Tool.manageString(
                  r.GameText.STR_ITEM_ATK_TIME,
                  this.atk_time + 1 + "",
                ),
                null,
              ]),
            this.type != a["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND &&
              f.push([a["default"].getAtkTypeString(this.atkType), null]));
          var g = "";
          if (
            (0 != this.def_str &&
              (g +=
                "  " +
                d.Tool.manageString(
                  r.GameText.STR_ITEM_GET_DEF_STR,
                  this.def_str + "",
                )),
            0 != this.def_agi &&
              (g +=
                "  " +
                d.Tool.manageString(
                  r.GameText.STR_ITEM_GET_DEF_AGI,
                  this.def_agi + "",
                )),
            0 != this.def_mag &&
              (g +=
                "  " +
                d.Tool.manageString(
                  r.GameText.STR_ITEM_GET_DEF_MAG,
                  this.def_mag + "",
                )),
            0 == d.Tool.isNullText(g))
          ) {
            var v = d.Tool.manageString(r.GameText.STR_ITEM_GET_DEF_ARMOR, g);
            f.push([v, null]);
          }
          if (
            (h.append(d.Tool.composeString(f, i, 2, s)),
            (c += h.toString()),
            (h = new _["default"]()),
            (f = []),
            this.power1 &&
              0 != this.power1 &&
              0 != this.powerValue1 &&
              this.type != a["default"].ITEM_TYPE_BLOOD_BOTTLE)
          ) {
            var S = d.Tool.COLOR_GREEN;
            e.isNotOKPower(this.power1) && (S = d.Tool.COLOR_GRAY);
            var I = e.getpowerValueAdd(
              this.powerValue1,
              this.ascensionStar,
              this.star,
              this.isBinded(),
              this.isAscension(this.power1),
            );
            f.push([this.getPowerDesc(this.power1, I), S]);
          } else if (
            this.type == a["default"].ITEM_TYPE_BLOOD_BOTTLE &&
            this.powerValueBlood1 > 0
          ) {
            var S = d.Tool.COLOR_GREEN;
            (e.isNotOKPower(this.power1) && (S = d.Tool.COLOR_GRAY),
              f.push([
                this.getPowerDesc(this.power1, this.powerValueBlood1) +
                  "/" +
                  this.powerValueBloodMax1,
                S,
              ]));
          }
          if (
            (this.type == a["default"].ITEM_TYPE_ENERGY_ESSENCE &&
              f.push([
                "增加能量精华:" + this.powerValueBlood1,
                d.Tool.COLOR_GREEN,
              ]),
            this.type == a["default"].ITEM_TYPE_ADD_PET_LIFE &&
              f.push(["宠物寿命+" + this.powerValueBlood1, d.Tool.COLOR_GREEN]),
            this.type == a["default"].ITEM_TYPE_LN_STONE &&
              f.push([
                "获得" + this.powerValueBlood1 + "灵能",
                d.Tool.COLOR_GREEN,
              ]),
            this.power2 && 0 != this.power2 && 0 != this.powerValue2)
          ) {
            var S = d.Tool.COLOR_GREEN;
            e.isNotOKPower(this.power2) && (S = d.Tool.COLOR_GRAY);
            var m = e.getpowerValueAdd(
              this.powerValue2,
              this.ascensionStar,
              this.star,
              this.isBinded(),
              this.isAscension(this.power2),
            );
            f.push([this.getPowerDesc(this.power2, m), S]);
          }
          if (
            this.power3 &&
            0 != this.power3 &&
            (0 != this.powerValue3 ||
              this.type == a["default"].ITEM_TYPE_BLOOD_BOTTLE)
          ) {
            var S = d.Tool.COLOR_GREEN;
            e.isNotOKPower(this.power3) && (S = d.Tool.COLOR_GRAY);
            var A = e.getpowerValueAdd(
              this.powerValue3,
              this.ascensionStar,
              this.star,
              this.isBinded(),
              this.isAscension(this.power3),
            );
            f.push([this.getPowerDesc(this.power3, A), S]);
          }
          if (
            this.type == a["default"].ITEM_TYPE_SEAL &&
            this.power4 &&
            0 != this.power4 &&
            0 != this.powerValue4
          ) {
            var S = d.Tool.COLOR_GREEN;
            e.isNotOKPower(this.power4) && (S = d.Tool.COLOR_GRAY);
            var C = e.getpowerValueAdd(
              this.powerValue4,
              this.ascensionStar,
              this.star,
              this.isBinded(),
              this.isAscension(this.power4),
            );
            f.push([this.getPowerDesc(this.power4, C), S]);
          }
          var P = d.Tool.COLOR_GREEN,
            R = "";
          if (
            (this.slotPos == p["default"].SPIRIT_POS ||
              this.isVipTimeItem() ||
              this.getIsItemPetEquip() ||
              (0 == this.isBinded()
                ? ((P = d.Tool.COLOR_GRAY), (R = r.GameText.STR_ITEM_NEED_BIND))
                : (R = "(" + r.GameText.getText(r.GameText.TI_BIND) + ")")),
            this.bindPower1 &&
              0 != this.bindPower1 &&
              0 != this.bindPowerValue1)
          ) {
            var O = e.getpowerValueAdd(
                this.bindPowerValue1,
                this.ascensionStar,
                this.star,
                this.isBinded(),
                this.isAscension(this.bindPower1),
              ),
              N = this.getPowerDesc(this.bindPower1, O),
              S = P;
            (e.isNotOKPower(this.bindPower1)
              ? (S = d.Tool.COLOR_GRAY)
              : (N += R),
              0 == d.Tool.isNullText(N) && f.push([N, S]));
          }
          if (
            this.bindPower2 &&
            0 != this.bindPower2 &&
            0 != this.bindPowerValue2
          ) {
            var M = e.getpowerValueAdd(
                this.bindPowerValue2,
                this.ascensionStar,
                this.star,
                this.isBinded(),
                this.isAscension(this.bindPower2),
              ),
              N = this.getPowerDesc(this.bindPower2, M),
              S = P;
            (e.isNotOKPower(this.bindPower2)
              ? (S = d.Tool.COLOR_GRAY)
              : (N += R),
              0 == d.Tool.isNullText(N) && f.push([N, S]));
          }
          if (
            (f.push([this.getAttackPowerDesc(!1), d.Tool.COLOR_GREEN]),
            f.push([this.getEnchantInfo(), d.Tool.COLOR_GREEN]),
            this.isUpgradeItem && this.itemUpgradeDesc(f),
            this.getIsItemPetEquip() && 0 == d.Tool.isNullText(this.skillDesc))
          ) {
            var L = this.skillDesc;
            ((L +=
              this.petLevel >= this.petLowLevel
                ? "+" + this.petEquipSkillLevel + "级"
                : "(装备" + this.petLowLevel + "级解锁)"),
              f.push([
                L,
                this.petLevel >= this.petLowLevel
                  ? d.Tool.COLOR_YELLOW
                  : d.Tool.COLOR_GRAY,
              ]));
          } else
            0 == d.Tool.isNullText(this.skillDesc) &&
              f.push([this.skillDesc, d.Tool.COLOR_YELLOW]);
          if (
            (h.append(d.Tool.composeString(f, i, 2, s)),
            (c += h.toString()),
            (h = new _["default"]()),
            (f = []),
            this.cssLeftChannel)
          ) {
            if (
              (f.push(["混元印", d.Tool.COLOR_TITLE]),
              f.push([
                "基础属性增加" + this.cssLeftPowerPer + "%",
                d.Tool.COLOR_WHITE,
              ]),
              this.cssLeftHasItem)
            )
              for (var w in this.cssLeftItemPower) {
                var b = this.getPowerDesc(Number(w), this.cssLeftItemPower[w]);
                f.push([b, d.Tool.COLOR_PMESSAGE]);
              }
            (h.append(d.Tool.composeString(f, i, 2, s)), (f = []));
          }
          if (this.cssRightChannel) {
            if (
              (f.push(["太极印", d.Tool.COLOR_TITLE]),
              f.push([
                "基础属性增加" + this.cssRightPowerPer + "%",
                d.Tool.COLOR_WHITE,
              ]),
              this.cssRightHasItem)
            )
              for (var w in this.cssRightItemPower) {
                var b = this.getPowerDesc(Number(w), this.cssRightItemPower[w]);
                f.push([b, d.Tool.COLOR_PMESSAGE]);
              }
            h.append(d.Tool.composeString(f, i, 2, s));
          }
          if (
            ((c += h.toString()),
            (h = new _["default"]()),
            (f = []),
            (g = ""),
            0 != this.reqLv)
          ) {
            E = null != t && t.get(l.ModelConst.LEVEL) < this.reqLv;
            var x = d.Tool.manageString(
              r.GameText.getText(r.GameText.TI_LEVEL),
              this.reqLv + "",
            );
            g += E ? u["default"].makeColorString(x, d.Tool.COLOR_RED) : x;
          }
          if (
            (0 == this.vipLevelReq ||
              this.slotPos == p["default"].SPIRIT_POS ||
              this.isVipTimeItem() ||
              (g += this.getVipDesc(t)),
            0 != this.reqStr)
          ) {
            E = null != t && t.get(l.ModelConst.STR) < this.reqStr;
            var D = d.Tool.manageString(
              r.GameText.STR_ITEM_GET_REQ_STR,
              "  " + this.reqStr,
            );
            g += E ? u["default"].makeColorString(D, d.Tool.COLOR_RED) : D;
          }
          if (0 != this.reqCon) {
            E = null != t && t.get(l.ModelConst.CON) < this.reqCon;
            var B = d.Tool.manageString(
              r.GameText.STR_ITEM_GET_REQ_CON,
              "  " + this.reqCon,
            );
            g += E ? u["default"].makeColorString(B, d.Tool.COLOR_RED) : B;
          }
          if (0 != this.reqAgi) {
            E = null != t && t.get(l.ModelConst.AGI) < this.reqAgi;
            var G = d.Tool.manageString(
              r.GameText.STR_ITEM_GET_REQ_AGI,
              "  " + this.reqAgi,
            );
            g += E ? u["default"].makeColorString(G, d.Tool.COLOR_RED) : G;
          }
          if (0 != this.reqIlt) {
            E = null != t && t.get(l.ModelConst.ILT) < this.reqIlt;
            var U = d.Tool.manageString(
              r.GameText.STR_ITEM_GET_REQ_ILT,
              "  " + this.reqIlt,
            );
            g += E ? u["default"].makeColorString(U, d.Tool.COLOR_RED) : U;
          }
          if (0 != this.reqWis) {
            E = null != t && t.get(l.ModelConst.WIS) < this.reqWis;
            var k = d.Tool.manageString(
              r.GameText.STR_ITEM_GET_REQ_WIS,
              "  " + this.reqWis,
            );
            g += E ? u["default"].makeColorString(k, d.Tool.COLOR_RED) : k;
          }
          if (0 == d.Tool.isNullText(g)) {
            var V = d.Tool.manageString(r.GameText.STR_CONDITION_NEED, g);
            f.push([V, null]);
          }
          var H = t && t.putIllusion[this.illusionItemId];
          if (H) {
            var S = d.Tool.COLOR_GREEN,
              F = r.GameText.STR_ILLUSION_TIME;
            ((F += -1 == H ? "永久" : this.getIllusionTimeStr(H)),
              f.push([F, S]));
          }
          if (T == e.ITEM_CLASS_USE_ITEM) {
            if (this.area >= 0) {
              var Y = d.Tool.manageString(
                r.GameText.STR_ITEM_COM_AREA,
                a["default"].getSkillAreaString(this.area),
              );
              f.push([Y, null]);
            }
            if (this.round > 1) {
              var W = d.Tool.manageString(
                r.GameText.STR_ITEM_GET_LAST_ROUND,
                this.round + "",
              );
              f.push([W, null]);
            }
          }
          if (
            (h.append(d.Tool.composeString(f, i, 2, s)),
            (c += h.toString()),
            (h = new _["default"]()),
            (f = []),
            this.slotPos != p["default"].SPIRIT_POS &&
              !this.isVipTimeItem() &&
              !this.getIsItemPetEquip())
          ) {
            var K = this.getDurMax(t);
            if (0 != K) {
              var j = d.Tool.manageString(
                r.GameText.STR_ITEM_COM_DURA,
                this.durability + "/" + K,
              );
              this.durability <= 0
                ? f.push([j, d.Tool.COLOR_RED])
                : f.push([j, null]);
            }
          }
          if (this.isTimeItem()) {
            var S = d.Tool.COLOR_GREEN,
              F = r.GameText.STR_ITEM_GET_AGING;
            (this.slotPos == p["default"].SPIRIT_POS &&
              (F = r.GameText.STR_ITEM_GET_VIP_AGING),
              1 == this.isExpired()
                ? ((F +=
                    this.slotPos == p["default"].SPIRIT_POS &&
                    t.getVipLevel() < 2
                      ? r.GameText.STR_ITEM_GET_INACTIVE
                      : r.GameText.STR_ITEM_GET_PAST_DUE),
                  (S = d.Tool.COLOR_RED))
                : (F += this.getTimeStr()),
              f.push([F, S]));
          }
          (h.append(d.Tool.composeString(f, i, 2, s)), (f = []));
          var q = this.getInfo();
          return (
            0 == d.Tool.isNullText(q) && (h.append(q), h.append("\n")),
            h.append(this.getItemSetDesc(t)),
            (c += h.toString())
          );
        }),
        (e.prototype.getPowerDes_1 = function (t, i) {
          var o = e.getpowerValueAdd(
              i,
              this.ascensionStar,
              this.star,
              this.isBinded(),
              this.isAscension(t),
            ),
            n = this.getPowerDesc(t, o);
          return n;
        }),
        (e.prototype.getPowerDes_2 = function (t, i, o, n) {
          "power1" == n ||
          "power2" == n ||
          "bindPower1" == n ||
          "bindPower2" == n ||
          "power3" == n
            ? ((i = e.getpowerValueAdd(
                i,
                this.ascensionStar,
                this.star,
                this.isBinded(),
                this.isAscension(t),
              )),
              (o = e.getpowerValueAdd(
                o,
                this.ascensionStar,
                this.star,
                this.isBinded(),
                this.isAscension(t),
              )))
            : ("power4" == n ||
                "power5" == n ||
                "power6" == n ||
                "power7" == n) &&
              ((i = e.getpowerValueAdd(
                i,
                this.upgradeAscensionStar,
                this.upgradeStar,
                this.isBinded(),
                this.isAscension(t),
              )),
              (o = e.getpowerValueAdd(
                o,
                this.upgradeAscensionStar,
                this.upgradeStar,
                this.isBinded(),
                this.isAscension(t),
              )));
          var r = a["default"].getPowerDescMin2Max(t, i, o);
          return r;
        }),
        (e.prototype.itemUpgradeDesc = function (t) {
          null == t && (t = []);
          var i = 4177151,
            o = "";
          if (
            (this.slotPos != p["default"].SPIRIT_POS &&
              (o =
                0 == this.isBinded()
                  ? r.GameText.STR_ITEM_NEED_BIND
                  : "(" + r.GameText.getText(r.GameText.TI_BIND) + ")"),
            0 != this.power4 && 0 != this.powerValue4)
          ) {
            var n = i;
            (!this.isBinded() || e.isNotOKPower(this.power4)) && (n = 7039851);
            var a = e.getpowerValueAdd(
                this.powerValue4,
                this.upgradeAscensionStar,
                this.upgradeStar,
                this.isBinded(),
                this.isAscension(this.power4),
              ),
              s = this.getPowerDesc(this.power4, a);
            (e.isNotOKPower(this.power4) || (s += o), t.push([s, n]));
          }
          if (0 != this.power5 && 0 != this.powerValue5) {
            var n = i;
            (!this.isBinded() || e.isNotOKPower(this.power5)) && (n = 7039851);
            var l = e.getpowerValueAdd(
                this.powerValue5,
                this.upgradeAscensionStar,
                this.upgradeStar,
                this.isBinded(),
                this.isAscension(this.power5),
              ),
              s = this.getPowerDesc(this.power5, l);
            (e.isNotOKPower(this.power5) || (s += o), t.push([s, n]));
          }
          if (0 != this.power6 && 0 != this.powerValue6) {
            var n = i;
            (!this.isBinded() || e.isNotOKPower(this.power6)) && (n = 7039851);
            var u = e.getpowerValueAdd(
                this.powerValue6,
                this.upgradeAscensionStar,
                this.upgradeStar,
                this.isBinded(),
                this.isAscension(this.power6),
              ),
              s = this.getPowerDesc(this.power6, u);
            (e.isNotOKPower(this.power6) || (s += o), t.push([s, n]));
          }
          if (0 != this.power7 && 0 != this.powerValue7) {
            var n = i;
            (!this.isBinded() || e.isNotOKPower(this.power7)) && (n = 7039851);
            var _ = e.getpowerValueAdd(
                this.powerValue7,
                this.upgradeAscensionStar,
                this.upgradeStar,
                this.isBinded(),
                this.isAscension(this.power7),
              ),
              s = this.getPowerDesc(this.power7, _);
            (e.isNotOKPower(this.power7) || (s += o), t.push([s, n]));
          }
        }),
        (e.isNotOKPower = function (e) {
          return (
            e == a["default"].POWER_IDENTIFY ||
            e == a["default"].POWER_COMPOSITE
          );
        }),
        (e.prototype.getTimeStr = function () {
          var e = this.expireTime - o["default"].timer.serverTime;
          if (0 >= e) return "";
          var t = e / d.Tool.MILLIS_IN_MINUTE;
          return (
            e % d.Tool.MILLIS_IN_MINUTE > 0 && t++,
            d.Tool.getTimeStrByMin(t, !0)
          );
        }),
        (e.prototype.getIllusionTimeStr = function (e) {
          var t = e - o["default"].timer.serverTime;
          if (0 >= t) return "";
          var i = t / d.Tool.MILLIS_IN_MINUTE;
          return (
            t % d.Tool.MILLIS_IN_MINUTE > 0 && i++,
            d.Tool.getTimeStrByMin(i, !0)
          );
        }),
        (e.prototype.getPowerDesc = function (e, t) {
          return e == a["default"].POWER_COMPOSITE
            ? ""
            : a["default"].getPowerDesc(e, t);
        }),
        (e.getPowerDescFilter = function (e, t) {
          return e == a["default"].POWER_COMPOSITE
            ? ""
            : a["default"].getPowerDesc(e, t);
        }),
        (e.prototype.getIconString = function (e) {
          return e ? e + "" : "";
        }),
        (e.prototype.getNameInfo = function (e) {
          void 0 === e && (e = !1);
          var t = a["default"].getGradeColor(this.grade),
            i = u["default"].makeColorString(this.name, t),
            o = "";
          return (
            this.isUpgradeItem &&
              (o = u["default"].makeColorString(
                "(" + s.GameText2.STR_EQ_UPGRADE + ")",
                d.Tool.COLOR_YELLOW,
              )),
            0 == e ? i + o : this.getIconString(0) + i + o
          );
        }),
        (e.getRewardItemListDesc = function (e) {
          if (null == e) return "";
          for (var t = new _["default"](), i = 0; i < e.length; i++) {
            var o = e[i];
            null != o &&
              (t.append(o.getRewardDesc()),
              0 == (1 & i) ? t.append("    ") : t.append("\n"));
          }
          return t.toString();
        }),
        (e.prototype.getRewardDesc = function () {
          var e = this.quantity;
          return (
            1 >= e && (e = 0),
            this.getIconString(e) + this.getNameInfo(!1)
          );
        }),
        (e.prototype.doViewItem = function (t) {
          return (
            void 0 === t && (t = !1),
            __awaiter(this, void 0, Promise, function () {
              var i, o;
              return __generator(this, function (a) {
                switch (a.label) {
                  case 0:
                    return t
                      ? (T["default"].checkItem(this, n["default"].myPlayer),
                        [2])
                      : 0 != this.isStatusBit(e.STATUS_GET_INFO)
                        ? [3, 2]
                        : ((i = h["default"].createItemInfoMsg(this.id)),
                          [4, f["default"].sendProtoAsync(i)]);
                  case 1:
                    if (
                      (a.sent(), (o = h["default"].getReceiveMsg()), null == o)
                    )
                      return [2];
                    try {
                      (e.fromBytesAtts2(this, o),
                        (this.durability = this.durMax),
                        h["default"].processGetSuitInfoMsg(o),
                        this.setStatusBit(!0, e.STATUS_GET_INFO));
                    } catch (r) {
                      return (console.error(r), [2]);
                    }
                    a.label = 2;
                  case 2:
                    return (
                      T["default"].checkItem(this, n["default"].myPlayer),
                      [2]
                    );
                }
              });
            })
          );
        }),
        (e.getItemUseId = function (t) {
          return __awaiter(this, void 0, Promise, function () {
            var i, o, n;
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    (i = new e()),
                    (o = h["default"].createItemInfoMsg(t)),
                    [4, f["default"].sendProtoAsync(o)]
                  );
                case 1:
                  if ((a.sent(), (n = h["default"].getReceiveMsg()), null == n))
                    return [2];
                  try {
                    (e.fromBytesAtts2(i, n),
                      (i.durability = i.durMax),
                      h["default"].processGetSuitInfoMsg(n),
                      i.setStatusBit(!0, e.STATUS_GET_INFO));
                  } catch (r) {
                    return (console.error(r), [2]);
                  }
                  return [2, i];
              }
            });
          });
        }),
        (e.isReplaceInlayGem = function (e) {
          switch (e) {
            case a["default"].POWER_STR:
              break;
            case a["default"].POWER_CON:
              break;
            case a["default"].POWER_AGI:
              break;
            case a["default"].POWER_ILT:
              break;
            case a["default"].POWER_WIS:
              break;
            default:
              return !1;
          }
          return !0;
        }),
        (e.prototype.isAscension = function (e) {
          switch (e) {
            case a["default"].POWER_RECOVER:
              break;
            case a["default"].POWER_SKILL_DAMAGE:
              break;
            case a["default"].POWER_SKILL_HITRATE:
              break;
            case a["default"].POWER_SELF_CRITICAL:
              break;
            case a["default"].POWER_SKILL_HIT_FORCE:
              break;
            case a["default"].POWER_SKILL_MAGIC_PENETRATION:
              break;
            case a["default"].POWER_SKILL_BRK_ARMOR:
              break;
            case a["default"].POWER_SKILL_REMOVE_STATUS:
              break;
            case a["default"].POWER_PET_DAMAGE:
              break;
            case a["default"].POWER_PET_HPMAX_PERCENT:
              break;
            case a["default"].POWER_PET_MPMAX_PERCENT:
              break;
            case a["default"].POWER_PET_STR_PERCENT:
              break;
            case a["default"].POWER_PET_CON_PERCENT:
              break;
            case a["default"].POWER_PET_AGI_PERCENT:
              break;
            case a["default"].POWER_PET_ILT_PERCENT:
              break;
            case a["default"].POWER_PET_WIS_PERCENT:
              break;
            case a["default"].POWER_RECOVER_PERCENT:
              break;
            case a["default"].POWER_OPEN_STORE:
              break;
            case a["default"].POWER_CHEST_LV1:
              break;
            case a["default"].POWER_CHEST_LV2:
              break;
            case a["default"].POWER_CHEST_LV3:
              break;
            case a["default"].POWER_COLOR_BOX:
              break;
            case a["default"].POWER_REQ_SLOT:
              break;
            case a["default"].POWER_TO_WORLDMAP:
              break;
            case a["default"].POWER_TO_GXGY:
              break;
            case a["default"].POWER_EXPIRE_TIME:
              break;
            case a["default"].POWER_RESET_MISSION:
              break;
            case a["default"].POWER_CHEST_KEY_LEVEL:
              break;
            case a["default"].POWER_PET_EGG:
              break;
            case a["default"].POWER_COSTUME:
              break;
            case a["default"].POWER_TRANSPORT:
              break;
            case a["default"].POWER_POWER_TITLE:
              break;
            case a["default"].POWER_GUARD_STR_ATTACK:
              break;
            case a["default"].POWER_GUARD_AGI_ATTACK:
              break;
            case a["default"].POWER_GUARD_MAGIC_ATTACK:
              break;
            case a["default"].POWER_GUARD_CURSE_ATTACK:
              break;
            case a["default"].POWER_GUARD_ALL_ATTACK:
              break;
            case a["default"].POWER_PET_ADD_EXP:
              break;
            case a["default"].POWER_ADD_EXP:
              break;
            case a["default"].POWER_IDENTIFY:
              break;
            case a["default"].POWER_COMPOSITE:
              break;
            case a["default"].POWER_SKILL_HP:
              break;
            case a["default"].POWER_SKILL_HP_PERCENT:
              break;
            case a["default"].POWER_SKILL_MP:
              break;
            case a["default"].POWER_SKILL_MP_PERCENT:
              break;
            case a["default"].POWER_SKILL_LIFE_ABSORPTION:
              break;
            case a["default"].POWER_SKILL_MANA_ABSORPTION:
              break;
            case a["default"].POWER_SKILL_TARGET_BACK:
              break;
            case a["default"].POWER_SKILL_TARGET_MAGIC_BACK:
              break;
            case a["default"].POWER_SKILL_TARGET_BLOCK:
              break;
            case a["default"].POWER_SKILL_TARGET_INSIGHT:
              break;
            case a["default"].POWER_SKILL_TARGET_WIL:
              break;
            case a["default"].POWER_SKILL_TARGET_TOUCH:
              break;
            case a["default"].POWER_GRARD_MASTER_STR_ATTACK:
              break;
            case a["default"].POWER_GRARD_MASTER_AGI_ATTACK:
              break;
            case a["default"].POWER_GRARD_MASTER_MAGIC_ATTACK:
              break;
            case a["default"].POWER_GRARD_MASTER_CURSE_ATTACK:
              break;
            case a["default"].POWER_GRARD_MASTER_ALL_ATTACK:
              break;
            case a["default"].POWER_PET_GRARD_STR_ATTACK:
              break;
            case a["default"].POWER_PET_GRARD_AGI_ATTACK:
              break;
            case a["default"].POWER_PET_GRARD_MAGIC_ATTACK:
              break;
            case a["default"].POWER_PET_GRARD_CURSE_ATTACK:
              break;
            case a["default"].POWER_PET_GRARD_ALL_ATTACK:
              break;
            case a["default"].POWER_SKILL_SCROLL:
              break;
            case a["default"].POWER_SKILL_SCROLL_PET:
              break;
            case a["default"].POWER_NEW_GET_PET:
            case a["default"].POWER_NEW_GET_ITEM:
            case a["default"].POWER_ENCHANT_ITEM:
            case a["default"].POWER_FORMATION_BOOK:
            case a["default"].POWER_CHEST_LV4:
            case a["default"].POWER_TURN_MONSTER_CARD:
            case a["default"].POWER_SKILL_BOOK_PET:
              break;
            default:
              return !0;
          }
          return !1;
        }),
        (e.prototype.isVipTimeItem = function () {
          return (
            e.VIP_ITEM_SIGN_START <= this.id &&
            this.id <= e.VIP_TIEM_ITEM_SIGN_START
          );
        }),
        Object.defineProperty(e.prototype, "ShowNewSign", {
          get: function () {
            return this._showNewSign;
          },
          set: function (e) {
            this._showNewSign = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.isDecomCHest = function () {
          return this.decomCHest;
        }),
        (e.WEAPON_FLASH_GEM_NUM = 7),
        (e.BAG_ICON_VIP = 39),
        (e.EQP_DEF_STR = 1),
        (e.EQP_DEF_AGI = 2),
        (e.EQP_DEF_MAGIC = 3),
        (e.EQP_HITRATE = 4),
        (e.EQP_ATK_MIN = 5),
        (e.EQP_ATK_MAX = 6),
        (e.EQP_HIT_TIME = 7),
        (e.EQP_ATK_TYPE = 8),
        (e.EQP_ITEM_TYPE = 9),
        (e.EQP_ITEM_SET_ID = 10),
        (e.CAN_USE_WORLD = 1),
        (e.CAN_USE_BATTLE = 2),
        (e.CAN_USE_ALL = e.CAN_USE_WORLD | e.CAN_USE_BATTLE),
        (e.STATUS_TIME_ITEM = 1),
        (e.STATUS_BINDED = 2),
        (e.STATUS_SHOP_LOCKED = 4),
        (e.STATUS_TIME_OUT = 8),
        (e.STATUS_CAN_IDENTIFY = 16),
        (e.STATUS_ATTACK_BROKEN = 32),
        (e.STATUS_VIP_TIME_OUT = 64),
        (e.STATUS_SELLING = 256),
        (e.STATUS_DEL = 512),
        (e.STATUS_GET_INFO = 1024),
        (e.STATUS_MAIL_SELECT = 2048),
        (e.STATUS_INTEGRAL = 4096),
        (e.STATUS_ENCHANT = 8192),
        (e.ITEM_CLASS_WEAPON = 1),
        (e.ITEM_CLASS_ARMOR = 2),
        (e.ITEM_CLASS_PET = 3),
        (e.ITEM_CLASS_USE_ITEM = 4),
        (e.ITEM_CLASS_QUEST = 5),
        (e.ITEM_CLASS_GEM = 6),
        (e.ITEM_CLASS_ORTHER = 7),
        (e.ITEM_CLASS_BLOOD_BOTTLE = 8),
        (e.ITEM_CLASS_PET_EQUIP = 9),
        (e.ITEM_CLASS_PET_EQUIP_EXP_BOOK = 10),
        (e.ITEM_CLASS_HORSE = 11),
        (e.ITEM_CLASS_SEAL = 12),
        (e.ITEM_CLASS_ENERGY_ESSENCE = 13),
        (e.ITEM_CLASS_BOX_CHOOSE_ONE = 14),
        (e.ITEM_CLASS_PET_ADD_LIFE = 15),
        (e.ITEM_CLASS_LN_STONE = 16),
        (e.ITEM_TYPE_WEAPON = 0),
        (e.ITEM_TYPE_ARMOR = 1),
        (e.ITEM_TYPE_ACCESSORIES = 2),
        (e.ITEM_TYPE_PROPS = 3),
        (e.ITEM_TYPE_MATERIAL = 4),
        (e.ITEM_TYPE_GEM = 5),
        (e.ITEM_TYPE_PET = 6),
        (e.COMPARE_ALL = 0),
        (e.COMPARE_IDENTIFY = 1),
        (e.COMPARE_COMBIN = 2),
        (e.COMPARE_IDENTIFY_G = 3),
        (e.COMPARE_PETGRADE = 4),
        (e.VIP_ITEM_SIGN_START = 41e3),
        (e.VIP_TIEM_ITEM_SIGN_START = 41008),
        (e.VIP_ITEM_SIGN_END = 41019),
        e
      );
    })();
  t["default"] = S;
});
