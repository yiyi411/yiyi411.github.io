(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(22),
    n = i(16),
    a = i(18),
    r = i(19),
    s = i(5),
    l = i(4),
    u = i(10),
    _ = i(12),
    d = i(20),
    p = i(30),
    c = i(8),
    h = i(1),
    f = i(32),
    T = i(31),
    E = i(33),
    y = i(56),
    g = i(24),
    v = i(3),
    S = i(2),
    I = i(0),
    m = i(15),
    A = i(23),
    C = i(13),
    P = i(35),
    R = i(57),
    O = (function (e) {
      function t(t) {
        var i = e.call(this) || this;
        ((i.bornStatus = Long.ZERO),
          (i.modelForPet = -1),
          (i.isLegionPet = !1),
          i.setType(T.MODEL_TYPE.TYPE_PET),
          (i.ownerid = t));
        var o = new E["default"](i);
        return (
          i.setBag(o),
          (o.store = new Array(E["default"].PET_BAG_SIZE).fill(null)),
          i
        );
      }
      return (
        __extends(t, e),
        (t.getPetChangeNameMoneyText = function () {
          var e = this.PET_CHANGE_NAME_MONEY[1];
          return 0 >= e
            ? ""
            : c.Tool.manageString(
                u.GameText.STR_MYPET_CHANGE_NAME_COST,
                d["default"].makeColorString(
                  T.ModelVo.getMoneyText(this.PET_CHANGE_NAME_MONEY[0]) + e,
                  c.Tool.COLOR_RED,
                ),
              ) + "\n";
        }),
        Object.defineProperty(t.prototype, "owner", {
          get: function () {
            return s["default"].getModel(this.ownerid);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getPetId = function () {
          var e;
          return null === (e = this.petItem) || void 0 === e ? void 0 : e.petId;
        }),
        (t.prototype.onAttrUpdate = function (e) {
          this.isMyPet &&
            v["default"].sendNt(S.MainEvent.ON_PET_ATTR_UPDATE, e);
        }),
        Object.defineProperty(t.prototype, "isMyPet", {
          get: function () {
            return s["default"].myPlayer
              ? this == s["default"].myPlayer.getPet()
              : !1;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.clearData = function () {
          if (this.isMyPet) return !1;
          var t = s["default"].getModel(this.ownerid),
            i = t && t.pet,
            o = i && i.hashCode == this.hashCode;
          o ||
            (e.prototype.clearData.call(this),
            (this.ownerid = null),
            (this.petItem = null));
        }),
        (t.prototype.getAttakAnimePos = function () {
          return this.atkType == l["default"].ATKTYPE_STR ||
            this.atkType == l["default"].ATKTYPE_AGI
            ? l["default"].SKILL_POS_FRONT
            : l["default"].SKILL_POS_STAND;
        }),
        (t.fromBytesDetail = function (e, t, i) {
          if ((void 0 === i && (i = !0), null == t)) return -1;
          var o = e.getByte();
          if (0 > o) return o;
          ((t.id = o),
            (t.name = e.getString()),
            (t.level = e.getByte()),
            (t.icon1 = e.getLong()));
          var r = e.getInt(),
            s = e.getInt();
          (i && ((t.hp = r), (t.mp = s)),
            (t.exp = e.getInt()),
            (t.expMax = e.getInt()),
            (t.sp = e.getInt()),
            (t.str = e.getShort()),
            (t.con = e.getShort()),
            (t.agi = e.getShort()),
            (t.ilt = e.getShort()),
            (t.wis = e.getShort()),
            (t.grow = e.getByte()),
            (t.compre = e.getByte()),
            (t.cp = e.getByte()),
            (t.growLevel = e.getByte()),
            (t.ageTime =
              n["default"].timer.serverTime + e.getLong().toNumber()),
            (t.petHitrate = e.getShort()),
            (t.atkType = e.getByte()),
            (t.atkMin = e.getShort()),
            (t.atkMax = e.getShort()),
            (t.petAtkTime = e.getByte()),
            (t.job = e.getByte()),
            (t.grade = e.getByte()));
          var l = e.getByte();
          t.autoSkillID = [];
          for (var u = 0; l > u; u++) t.autoSkillID[u] = e.getShort();
          ((t.autoSkillID_Initiative = e.getShort()),
            (t.skillList = a["default"].processDataPlayerSkillMsg(e, !1)),
            (t.vipLevel = e.getByte()),
            (t.bornStatus = e.getLong()),
            (t.PetHeadIcon = e.getShort()),
            (t.modelForPet = e.getInt()),
            null != t.owner && t.setPosition(t.owner.getGx(), t.owner.getGy()));
          for (var _ = t.bag, d = e.getByte(), p = [], c = 0; d > c; c++) {
            var h = e.getByte(),
              T = f["default"].fromBytes(e);
            _ && ((_.store[h] = T), p.push(h));
          }
          for (var c = 0; c < E["default"].PET_BAG_SIZE; c++)
            p.indexOf(c) >= 0 || (_ && (_.store[c] = null));
          for (var y = e.getShort(), u = 0; y > u; u++) {
            var g = e.getInt(),
              v = e.getByte();
            if (0 != v)
              for (var c = 0; c < t.skillList.length; c++) {
                var S = t.skillList[c];
                S.id == g && (S.addLevel = v);
              }
          }
          return 0;
        }),
        (t.fromBytesDetails = function (e, t) {
          return null == t
            ? -1
            : ((t.id = e.getInt()),
              t.setType(e.getShort()),
              (t.name = e.getString()),
              (t.job = e.getByte()),
              (t.grade = e.getByte()),
              (t.atkType = e.getByte()),
              (t.str = e.getShort()),
              (t.con = e.getShort()),
              (t.agi = e.getShort()),
              (t.ilt = e.getShort()),
              (t.wis = e.getShort()),
              (t.grow = e.getByte()),
              (t.compre = e.getByte()),
              (t.skillList = []),
              t.skillList.push(R["default"].fromBytes(e)),
              t.skillList.push(R["default"].fromBytes(e)),
              t.setIcon1(e.getLong()),
              (t.bornStatus = e.getLong()),
              0);
        }),
        (t.fromBytesInfo = function (e, i) {
          var o;
          o = new t(i ? i.id : -1);
          var n = this.fromBytesDetails(e, o);
          return 0 > n ? null : o;
        }),
        (t.fromBytesMyPlayer = function (e, i) {
          var o = new t(i.id),
            n = this.fromBytesDetail(e, o);
          return 0 > n ? null : o;
        }),
        (t.fromBytesOtherPlayer = function (e, i) {
          var o = e.getByte();
          if (0 > o) return null;
          var a = new t(i.id);
          return (
            (a.id = o),
            (a.name = e.getString()),
            (a.icon1 = e.getLong()),
            (a.PetHeadIcon = e.getShort()),
            (a.ageTime =
              n["default"].timer.serverTime + e.getLong().toNumber()),
            a.setPosition(i.getGx(), i.getGy()),
            a
          );
        }),
        (t.clone = function (e) {
          var i = new t(e.id);
          return i;
        }),
        (t.prototype.isBornStatus = function (e) {
          if (!this.bornStatus) return !1;
          var t = "number" == typeof e ? Long.fromNumber(e) : e;
          return !this.bornStatus.and(t).isZero();
        }),
        (t.prototype.setBattleStatus = function (t) {
          return t != y["default"].BSTATUS_ESCAPE &&
            this.isBornStatus(t) &&
            l["default"].getBufferType(t, !0) == l["default"].BUFFER_TYPE_DEBUFF
            ? !1
            : e.prototype.setBattleStatus.call(this, t);
        }),
        (t.prototype.isBattleStatus = function (t) {
          return t == y["default"].BSTATUS_ESCAPE ||
            !this.isBornStatus(t) ||
            (l["default"].getBufferType(t, !0) !=
              l["default"].BUFFER_TYPE_BUFF &&
              t !=
                l["default"].getBufferBitValue(
                  l["default"].BUFFER_DIE_CANNOT_RELIVE,
                ))
            ? e.prototype.isBattleStatus.call(this, t)
            : !0;
        }),
        (t.prototype.addValue = function (t, i) {
          switch (t) {
            case _.ModelConst.PET_GROW_LEVEL:
              this.growLevel = c.Tool.sumValue(this.growLevel, i, 0, 120);
              break;
            case _.ModelConst.EXP:
              this.exp = c.Tool.sumValue(this.exp, i, 0, this.expMax);
              break;
            default:
              e.prototype.addValue.call(this, t, i);
          }
        }),
        (t.prototype.get = function (t) {
          var i = 0;
          switch (t) {
            case _.ModelConst.PET_COLOR:
              return this.color;
            case _.ModelConst.PET_GRADE:
              return this.grade;
            case _.ModelConst.PET_GROW_LEVEL:
              return this.growLevel;
            case _.ModelConst.ATK_TYPE:
              return this.atkType;
            case _.ModelConst.HIT_RATE:
              return (
                (i = this.petHitrate),
                (i = this.getPetPowerValue(
                  i,
                  this.hitrate,
                  l["default"].POWER_HITRATE,
                  l["default"].POWER_HITRATE_PERCENT,
                  l["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                  l["default"].POWER_NONE,
                )),
                C.GUtil.intNum(i)
              );
            case _.ModelConst.HIT_MAGIC:
              return (
                (i = this.petHitrate),
                (i = this.getPetPowerValue(
                  i,
                  this.hitMagic,
                  l["default"].POWER_MAGIC_HITRATE,
                  l["default"].POWER_MAGIC_HITRATE_PERCENT,
                  l["default"].SKILL_TYPE_PASSIVE,
                  _.ModelConst.MIN_HIT_MAGIC,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                  l["default"].POWER_NONE,
                )),
                C.GUtil.intNum(i)
              );
            case _.ModelConst.LEFT_ATK_TIME:
            case _.ModelConst.ATK_TIME:
              return (
                (i = this.petAtkTime),
                (i = c.Tool.sumValue(
                  i + 1,
                  this.atk_time,
                  _.ModelConst.MIN_HIT_TIME,
                  _.ModelConst.MAX_HIT_TIME,
                )),
                (i += this.getSkillPowerValue(
                  l["default"].SKILL_TYPE_PASSIVE,
                  l["default"].POWER_ALL_ATK_TIME,
                )),
                C.GUtil.intNum(i)
              );
            case _.ModelConst.RIGHT_ATK_TIME:
              return 0;
            case _.ModelConst.LEFT_ATK_MIN:
              return (
                (i = this.atkMin),
                (i = this.getPetPowerValue(
                  i,
                  0,
                  l["default"].POWER_NONE,
                  l["default"].POWER_NONE,
                  l["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                  l["default"].POWER_PET_DAMAGE,
                )),
                (i = C.GUtil.intNum(i)),
                c.Tool.sumValue(i, 0, 0, _.ModelConst.MAX_ATK)
              );
            case _.ModelConst.LEFT_ATK_MAX:
              return (
                (i = this.atkMax),
                (i = this.getPetPowerValue(
                  i,
                  0,
                  l["default"].POWER_NONE,
                  l["default"].POWER_NONE,
                  l["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                  l["default"].POWER_PET_DAMAGE,
                )),
                (i = C.GUtil.intNum(i)),
                c.Tool.sumValue(i, 0, 0, _.ModelConst.MAX_ATK)
              );
            case _.ModelConst.RIGHT_ATK_MIN:
              return 0;
            case _.ModelConst.RIGHT_ATK_MAX:
              return 0;
            case _.ModelConst.HPMAX:
              return this.isLegionPet
                ? this._hpMax
                : ((i =
                    C.GUtil.intNum((65 * this.get(_.ModelConst.CON)) / 10) +
                    3 * this.get(_.ModelConst.STR) +
                    100 +
                    20 * (this.get(_.ModelConst.LEVEL) - 1)),
                  (i = this.getPetPowerValue(
                    i,
                    0,
                    l["default"].POWER_HPMAX,
                    l["default"].POWER_HPMAX_PERCENT,
                    l["default"].SKILL_TYPE_PASSIVE,
                    1,
                    _.ModelConst.MAX_PLAYER_HP,
                    l["default"].POWER_PET_HPMAX_PERCENT,
                  )),
                  (i = C.GUtil.intNum(i)));
            case _.ModelConst.MPMAX:
              return this.isLegionPet
                ? this._mpMax
                : ((i =
                    5 * this.get(_.ModelConst.ILT) +
                    2 * this.get(_.ModelConst.WIS) +
                    40 +
                    5 * (this.get(_.ModelConst.LEVEL) - 1)),
                  (i = this.getPetPowerValue(
                    i,
                    0,
                    l["default"].POWER_MPMAX,
                    l["default"].POWER_MPMAX_PERCENT,
                    l["default"].SKILL_TYPE_PASSIVE,
                    1,
                    _.ModelConst.MAX_PLAYER_MP,
                    l["default"].POWER_PET_MPMAX_PERCENT,
                  )),
                  (i = C.GUtil.intNum(i)));
            case _.ModelConst.HP:
              return this.hp;
            case _.ModelConst.HP_DISPLAY:
              return this.hpDisplay;
            case _.ModelConst.MP:
              return this.mp;
            case _.ModelConst.MP_DISPLAY:
              return this.mpDisplay;
            case _.ModelConst.STR:
              return (
                (i = this.str),
                (i = this.getPetBaseValue(
                  i,
                  l["default"].POWER_STR,
                  l["default"].POWER_STR_PERCENT,
                  l["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                  l["default"].POWER_PET_STR_PERCENT,
                )),
                (i = C.GUtil.intNum(i))
              );
            case _.ModelConst.CON:
              return (
                (i = this.con),
                (i = this.getPetBaseValue(
                  i,
                  l["default"].POWER_CON,
                  l["default"].POWER_CON_PERCENT,
                  l["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                  l["default"].POWER_PET_CON_PERCENT,
                )),
                (i = C.GUtil.intNum(i))
              );
            case _.ModelConst.AGI:
              return (
                (i = this.agi),
                (i = this.getPetBaseValue(
                  i,
                  l["default"].POWER_AGI,
                  l["default"].POWER_AGI_PERCENT,
                  l["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                  l["default"].POWER_PET_AGI_PERCENT,
                )),
                (i = C.GUtil.intNum(i))
              );
            case _.ModelConst.ILT:
              return (
                (i = this.ilt),
                (i = this.getPetBaseValue(
                  i,
                  l["default"].POWER_ILT,
                  l["default"].POWER_ILT_PERCENT,
                  l["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                  l["default"].POWER_PET_ILT_PERCENT,
                )),
                (i = C.GUtil.intNum(i))
              );
            case _.ModelConst.WIS:
              return (
                (i = this.wis),
                (i = this.getPetBaseValue(
                  i,
                  l["default"].POWER_WIS,
                  l["default"].POWER_WIS_PERCENT,
                  l["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                  l["default"].POWER_PET_WIS_PERCENT,
                )),
                (i = C.GUtil.intNum(i))
              );
            default:
              return (
                this.ownerVo
                  ? (this.formationSkill = this.ownerVo.formationSkill)
                  : null != this.owner &&
                    (this.formationSkill = this.owner.formationSkill),
                e.prototype.get.call(this, t)
              );
          }
        }),
        (t.getItemPosPetEquip = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var i;
            return __generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (i = s["default"].myPlayer.bag.store[e]),
                    [4, t.getItemPetEquip(i)]
                  );
                case 1:
                  return [2, o.sent()];
              }
            });
          });
        }),
        (t.getItemPetEquip = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, o;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  if (e.type != l["default"].ITEM_TYPE_PET) return [2, !1];
                  ((t = v["default"].getProxy(I.ModName.Pet, I.ProxyType.Pet)),
                    t.data.SelfPetsLsit || t.data.setMyPetsList(),
                    (i = 0),
                    (n.label = 1));
                case 1:
                  return i < t.data.SelfPetsLsit.length
                    ? ((o = t.data.SelfPetsLsit.elementAt(i)),
                      o && o.petItem && o.petItem.slotPos == e.slotPos
                        ? [4, t.doPetSeeMsg(o)]
                        : [3, 3])
                    : [3, 4];
                case 2:
                  return (n.sent(), [2, o.getIsEquip()]);
                case 3:
                  return (i++, [3, 1]);
                case 4:
                  return [2, !1];
              }
            });
          });
        }),
        (t.prototype.getEquipItemSetNum = function (e) {
          if (0 >= e) return 0;
          for (var t = 0, i = 0; i < E["default"].PET_BAG_SIZE; i++) {
            var o = this.bag.store[i];
            null != o && o.get(f["default"].EQP_ITEM_SET_ID) == e && t++;
          }
          return t;
        }),
        (t.prototype.getPetItemPos = function () {
          if (!this.bag) return -1;
          for (var e = 0; e < E["default"].PET_BAG_SIZE; e++) {
            var t = this.bag.store[e];
            if (!t) return e;
          }
          return -1;
        }),
        (t.prototype.getIsEquip = function () {
          if (!this.bag) return !1;
          for (var e = 0; e < E["default"].PET_BAG_SIZE; e++) {
            var t = this.bag.store[e];
            if (t) return !0;
          }
          return !1;
        }),
        (t.isEquited = function (e) {
          return e.slotPos >= 0 ? !1 : !0;
        }),
        (t.prototype.getPetBaseValue = function (e, t, i, o, n, a, r) {
          var s = e;
          s += this.getSkillPowerValue(o, t);
          var u = this.getSkillPowerValue(o, i),
            _ = this.owner;
          return (
            this.ownerVo
              ? ((u += this.ownerVo.getBagEquipPowerValue(r)),
                (u += this.ownerVo.getSkillPowerValue(
                  l["default"].SKILL_TYPE_PASSIVE,
                  r,
                )))
              : _ instanceof y["default"] &&
                null != _ &&
                ((u += _.getBagEquipPowerValue(r)),
                (u += _.getSkillPowerValue(
                  l["default"].SKILL_TYPE_PASSIVE,
                  r,
                ))),
            this.bag &&
              ((s += this.getBagEquipPowerValue(t)),
              (u += this.getBagEquipPowerValue(i))),
            this.ownerVo && null != this.ownerVo.formationSkill
              ? ((s += this.ownerVo.formationSkill.getPowerValue(t)),
                (u += this.ownerVo.formationSkill.getPowerValue(i)))
              : null != _ &&
                null != _.formationSkill &&
                ((s += _.formationSkill.getPowerValue(t)),
                (u += _.formationSkill.getPowerValue(i))),
            u > 0 && (s += C.GUtil.intNum((s * u) / 100)),
            (s = c.Tool.sumValue(s, 0, n, a))
          );
        }),
        (t.prototype.getPetPowerValue = function (e, t, i, o, n, a, r, s) {
          var u = e;
          u += this.getSkillPowerValue(n, i);
          var _ = this.getSkillPowerValue(n, o),
            d = this.owner;
          return (
            this.ownerVo && s > 0
              ? ((_ += this.ownerVo.getBagEquipPowerValue(s)),
                (_ += this.ownerVo.getSkillPowerValue(
                  l["default"].SKILL_TYPE_PASSIVE,
                  s,
                )))
              : d instanceof y["default"] &&
                null != d &&
                s > 0 &&
                ((_ += d.getBagEquipPowerValue(s)),
                (_ += d.getSkillPowerValue(
                  l["default"].SKILL_TYPE_PASSIVE,
                  s,
                ))),
            this.bag &&
              ((u += this.getBagEquipPowerValue(i)),
              (_ += this.getBagEquipPowerValue(o))),
            this.ownerVo && null != this.ownerVo.formationSkill
              ? ((u += this.ownerVo.formationSkill.getPowerValue(i)),
                (_ += this.ownerVo.formationSkill.getPowerValue(o)))
              : null != d &&
                null != d.formationSkill &&
                ((u += d.formationSkill.getPowerValue(i)),
                (_ += d.formationSkill.getPowerValue(o))),
            _ > 0 && (u += C.GUtil.intNum((u * _) / 100)),
            (u = c.Tool.sumValue(u, t, a, r))
          );
        }),
        (t.prototype.getBaseAttributeDesc = function (e, t, i) {
          0 >= t || i.append(e + t + "\n");
        }),
        (t.prototype.getPetAge = function () {
          var e =
            (this.ageTime - n["default"].timer.serverTime) /
            c.Tool.MILLIS_IN_DAY;
          return (0 > e && (e = 0), e);
        }),
        (t.prototype.isAlive = function () {
          return this.vipLevel > 0 &&
            null != this.owner &&
            1 == s["default"].isVipOverDue(this.owner)
            ? !1
            : this.ageTime > n["default"].timer.serverTime;
        }),
        (t.doPetSeeMsg = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var i, o, n;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return null == e || null == e.petItem
                    ? [2, !1]
                    : e == s["default"].myPlayer.getPet()
                      ? [2, !0]
                      : 1 == e.isTabStatus(_.ModelConst.PET_INFO)
                        ? [2, !0]
                        : ((i = a["default"].createPetSeeMsg(
                            e.petItem.slotPos,
                          )),
                          [4, P["default"].sendProtoAsync(i)]);
                case 1:
                  return (
                    r.sent(),
                    (o = a["default"].getReceiveMsg()),
                    null == o
                      ? [2, !1]
                      : ((n = o.getByte()),
                        0 > n
                          ? (console.error("onPetSee >>> err"), [2, !1])
                          : (t.fromBytesDetail(o, e),
                            e.setTabStatus(!0, _.ModelConst.PET_INFO),
                            [2, !0]))
                  );
              }
            });
          });
        }),
        (t.doPetInfoMsg = function (e, i, o) {
          return __awaiter(this, void 0, Promise, function () {
            var n, r, s;
            return __generator(this, function (l) {
              switch (l.label) {
                case 0:
                  return null == e || null == o
                    ? [2, !1]
                    : 1 == e.isTabStatus(_.ModelConst.PET_INFO)
                      ? (h["default"].checkPet(null, null, 3, e), [2, !0])
                      : ((n = a["default"].createPetInfoMsg(i, o)),
                        null == n
                          ? [2, !1]
                          : [4, P["default"].sendProtoAsync(n)]);
                case 1:
                  return (
                    (r = l.sent()),
                    null == r
                      ? [2]
                      : ((s = r.getByte()),
                        0 > s
                          ? (h["default"].errorMessage(r.getString()), [2])
                          : (t.fromBytesDetail(r, e),
                            null != e && e.refreshWorldSprite(),
                            e.setTabStatus(!0, _.ModelConst.PET_INFO),
                            h["default"].checkPet(null, null, 3, e),
                            [2, !0]))
                  );
              }
            });
          });
        }),
        (t.doPetChangeNameMsg = function (e, i) {
          return __awaiter(this, void 0, void 0, function () {
            var o, n, r, l, _, d;
            return __generator(this, function (p) {
              switch (p.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : null == e || null == e.petItem
                      ? [2, !1]
                      : e.petItem.isShopLocked()
                        ? (h["default"].alertMessage(
                            u.GameText.STR_CHANGE_NAME_NO_SHOP,
                          ),
                          [2, !1])
                        : ((o = this.getPetChangeNameMoneyText()),
                          0 != c.Tool.isNullText(o)
                            ? [3, 3]
                            : [
                                4,
                                h["default"].waitForTwiceSureUI(
                                  o + u.GameText.STR_MYPET_CHANGE_NAME_ASK,
                                  u.GameText.STR_MYPET_CHANGE_NAME,
                                ),
                              ]);
                case 1:
                  return (n = p.sent())
                    ? ((r = s["default"].getMoneyArrayValue(
                        t.PET_CHANGE_NAME_MONEY,
                      )),
                      [4, c.Tool.checkEnoughMoney(r[0], r[1], r[2])])
                    : [2, !1];
                case 2:
                  if (0 == p.sent()) return [2, !1];
                  p.label = 3;
                case 3:
                  return 1 == c.Tool.isNullText(i)
                    ? [2, !1]
                    : ((l = a["default"].createPetChangeName(
                        e.petItem.slotPos,
                        i,
                      )),
                      (_ = v["default"].getProxy(
                        I.ModName.Pet,
                        I.ProxyType.Pet,
                      )),
                      [4, _.sendProtoAsync(l)]);
                case 4:
                  return (
                    p.sent(),
                    (l = a["default"].getReceiveMsg()),
                    null == l
                      ? [2, !1]
                      : ((d = l.getByte()),
                        0 > d
                          ? (h["default"].alertMessage(l.getString()), [2])
                          : (T.ModelVo.setPlayerMoney(
                              l.getInt(),
                              l.getInt(),
                              l.getInt(),
                              null,
                            ),
                            e.setName(i),
                            (e.petItem.name = i),
                            _.sendNt(S.PetEvent.PET_NAME_CHANGE),
                            m.Tips.show("宠物名字修改成功"),
                            [2, !0]))
                  );
              }
            });
          });
        }),
        (t.getPlayerPetNum = function () {
          var e = s["default"].myPlayer,
            t = 0;
          if (null == e) return t;
          var i = e.bag;
          if (null == i) return t;
          for (var o = 0; o <= i.bagEnd; o++) {
            var n = i.getItem(o);
            null != n && n.type == l["default"].ITEM_TYPE_PET && t++;
          }
          return t;
        }),
        (t.isBagPetExist = function (e) {
          var t = s["default"].myPlayer;
          if (null == t) return !1;
          var i = t.bag;
          if (null == i) return !1;
          for (var o = 0; o <= i.bagEnd; o++) {
            var n = i.getItem(o);
            if (
              null != n &&
              n.type == l["default"].ITEM_TYPE_PET &&
              n.petId.eq(e)
            )
              return !0;
          }
          return !1;
        }),
        (t.doGetBagPetItem = function (e) {
          if (null == e) return null;
          var i = e.bag;
          if (null == i) return null;
          for (var o = new g["default"](), n = 0; n <= i.bagEnd; n++) {
            var a = i.getItem(n);
            null != a &&
              a.type == l["default"].ITEM_TYPE_PET &&
              o.addElement(t.itemChangePet(a, e));
          }
          return o;
        }),
        (t.itemChangePet = function (e, t) {
          if (null == e) return null;
          var i = null;
          return (
            (i =
              e.slotPos == E["default"].PET_POS && t == s["default"].myPlayer
                ? t.getPet()
                : this.createItemPet(e, t)),
            (i.petItem = e),
            i
          );
        }),
        (t.createItemPet = function (e, i) {
          var o = new t(i.id);
          return (
            o.setName(e.name),
            o.setLevel(e.reqLv),
            o.setIcon1(Long.fromNumber(e.icon)),
            (o.grade = e.grade),
            o
          );
        }),
        (t.updateItemPet = function (e, t) {
          (t.setName(e.name),
            t.setLevel(e.reqLv),
            t.setIcon1(Long.fromNumber(e.icon)),
            (t.grade = e.grade));
        }),
        (t.getPetArrById = function (e, t, i) {
          for (var o = 0; o < e.length; o++) {
            var n = e[o];
            if (n) {
              if (t && n[t].petItem.petId.eq(i)) return n;
              if (!t && n.petItem.petId.eq(i)) return n;
            }
          }
          return null;
        }),
        (t.prototype.getPetBornStatusInfo = function (e, t, i) {
          var o = "\n";
          e && (o = ", ");
          var n = new p["default"]();
          if (this.bornStatus.toNumber() > 0)
            for (
              var a = 0, r = l["default"].BUFFER_POISON;
              r <= l["default"].BUFFER_VALUE_MAX;
              r++
            ) {
              var s = this.isBornStatus(l["default"].getBufferBitValue(r));
              if (0 != s) {
                if (e && t > 0 && a >= t) {
                  n.append("...");
                  break;
                }
                var u = "";
                (i && (u = ": " + l["default"].getBufferInfoString(r)),
                  l["default"].getBufferType(r) ==
                  l["default"].BUFFER_DIE_CANNOT_RELIVE
                    ? (a > 0 && n.append(o),
                      n.append(
                        d["default"].makeColorString(
                          l["default"].getBufferString(r),
                          c.Tool.COLOR_RED,
                        ) + u,
                      ))
                    : i
                      ? (a > 0 && n.append(o),
                        n.append(
                          d["default"].makeColorString(
                            l["default"].getBufferString(r),
                            c.Tool.COLOR_GREEN,
                          ) + u,
                        ))
                      : (a > 0 && n.append(o),
                        n.append(l["default"].getBufferString(r) + u)),
                  ++a);
              }
            }
          return n.toString();
        }),
        (t.prototype.getPetSkillNames = function () {
          for (var e = [], t = 0; t < this.skillList.length; t++) {
            var i = this.skillList[t];
            e.push(i.name);
          }
          return e.join(",");
        }),
        (t.prototype.getPetCompositeDesc = function () {
          var e = new p["default"]();
          (e.append(u.GameText.STR_PET_NAME + this.name + "\n"),
            e.append(
              u.GameText.STR_PET_JOB +
                l["default"].getJobString(this.job) +
                "\n",
            ),
            e.append(
              u.GameText.STR_PET_SKILL_NAME + this.getPetSkillNames() + "\n",
            ));
          var t = "";
          return (
            (t = this.getPetBornStatusInfo(!0, 0, !1)),
            0 == c.Tool.isNullText(t) &&
              (t = u.GameText.STR_BORN_STATUS + ": " + t),
            e.append(t),
            e.toString()
          );
        }),
        (t.prototype.isHaveCanNotReliveBuffer = function () {
          return this.isBornStatus(
            l["default"].getBufferBitValue(
              l["default"].BUFFER_DIE_CANNOT_RELIVE,
            ),
          )
            ? !0
            : e.prototype.isHaveCanNotReliveBuffer.call(this);
        }),
        (t.doSeeRaidersPet = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var i, n, s, l, u;
            return __generator(this, function (_) {
              switch (_.label) {
                case 0:
                  return (
                    (i = new o.Message(r["default"].CG_PET_INFO_BYID)),
                    i.putInt(e),
                    (n = v["default"].getProxy(I.ModName.Pet, I.ProxyType.Pet)),
                    [4, n.sendProtoAsync(i)]
                  );
                case 1:
                  return (
                    _.sent(),
                    (s = a["default"].getReceiveMsg()),
                    null == s
                      ? [2, null]
                      : ((l = s.getByte()),
                        0 > l
                          ? (h["default"].alertMessage(s.getString()),
                            [2, null])
                          : ((u = new t(null)),
                            this.fromBytesDetail(s, u),
                            (u.id = e),
                            (u.petraidersinfo = s.getString()),
                            [2, u]))
                  );
              }
            });
          });
        }),
        (t.doGetPetSealDetails = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var i, n, s, l, _;
            return __generator(this, function (d) {
              switch (d.label) {
                case 0:
                  return null == e
                    ? [2, !1]
                    : null == e || null == e.petItem
                      ? [2, !1]
                      : [4, t.getItemPetEquip(e.petItem)];
                case 1:
                  return (i = d.sent())
                    ? (h["default"].alertMessage(u.GameText.STR_PET_IS_EQUIP),
                      [2])
                    : e.petItem.isShopLocked()
                      ? (h["default"].alertMessage(
                          u.GameText.STR_CHANGE_NAME_NO_SHOP,
                        ),
                        [2, !1])
                      : ((n = v["default"].getProxy(
                          I.ModName.Pet,
                          I.ProxyType.Pet,
                        )),
                        (s = new o.Message(r["default"].CG_GET_SEAL_PET_SKILL)),
                        s.putShort(e.petItem.slotPos),
                        [4, n.sendProtoAsync(s)]);
                case 2:
                  return (
                    d.sent(),
                    (l = a["default"].getReceiveMsg()),
                    null == l
                      ? [2, !1]
                      : ((_ = l.getByte()),
                        0 > _
                          ? (h["default"].alertMessage(l.getString()), [2, !1])
                          : (h["default"].showModal(
                              I.ModName.Pet,
                              I.PetViewType.PetSealDetails,
                              { pet: e, receiveMsg: l },
                            ),
                            [2, !0]))
                  );
              }
            });
          });
        }),
        (t.doGetPetSealSelect = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, n, l, d, p, f, T, E, y;
            return __generator(this, function (g) {
              switch (g.label) {
                case 0:
                  if (null == e || null == e.pet || null == e.pet.petItem)
                    return [2];
                  if (((t = s["default"].myPlayer), null == t)) return [2];
                  if (null == t.bag) return [2];
                  switch (((i = ""), e.moneytype)) {
                    case _.ModelConst.MONEY1:
                      i = u.GameText.STR_MONEY1;
                      break;
                    case _.ModelConst.MONEY2:
                      i = u.GameText.STR_MONEY2;
                      break;
                    case _.ModelConst.MONEY3:
                      i = u.GameText.STR_MONEY3;
                  }
                  return [
                    4,
                    h["default"].waitForTwiceSureUI(
                      c.Tool.manageString(A.GameText2.STR_PET_SEAL_ASK, [
                        e.pet.petItem.getNameInfo(),
                        i + e.moneyvalue,
                        e.rate + "",
                      ]),
                      u.GameText.getText(u.GameText.TI_WARM_SHOW),
                    ),
                  ];
                case 1:
                  if (((n = g.sent()), !n)) return [2];
                  switch ((l = e.moneytype)) {
                    case _.ModelConst.MONEY1:
                      return [3, 2];
                    case _.ModelConst.MONEY2:
                      return [3, 4];
                    case _.ModelConst.MONEY3:
                      return [3, 6];
                  }
                  return [3, 8];
                case 2:
                  return (
                    (i = u.GameText.STR_MONEY1),
                    [4, c.Tool.checkEnoughMoney(e.moneyvalue, 0, 0)]
                  );
                case 3:
                  return 0 == g.sent() ? [2] : [3, 8];
                case 4:
                  return (
                    (i = u.GameText.STR_MONEY2),
                    [4, c.Tool.checkEnoughMoney(0, e.moneyvalue, 0)]
                  );
                case 5:
                  return 0 == g.sent() ? [2] : [3, 8];
                case 6:
                  return (
                    (i = u.GameText.STR_MONEY3),
                    [4, c.Tool.checkEnoughMoney(0, 0, e.moneyvalue)]
                  );
                case 7:
                  return 0 == g.sent() ? [2] : [3, 8];
                case 8:
                  return (
                    (d = new o.Message(r["default"].GC_SEAL_PET_TYPE)),
                    d.putShort(e.pet.petItem.slotPos),
                    d.putInt(e.type),
                    (p = v["default"].getProxy(I.ModName.Pet, I.ProxyType.Pet)),
                    [4, p.sendProtoAsync(d)]
                  );
                case 9:
                  return (
                    g.sent(),
                    (f = a["default"].getReceiveMsg()),
                    null == f
                      ? [2]
                      : ((T = f.getByte()),
                        0 > T
                          ? (h["default"].alertMessage(f.getString()), [2])
                          : ((T = f.getByte()),
                            (E = f.getBoolean()),
                            (y = A.GameText2.STR_PET_SEAL_SUCCESS),
                            2 == T && (y = A.GameText2.STR_PET_SEAL_FAIL),
                            t.bag.removeItem(e.pet.petItem.slotPos),
                            E &&
                              (y +=
                                "\n" +
                                c.Tool.manageString(
                                  A.GameText2.STR_PET_SEAL_RS_INFO,
                                  a["default"].processAddItemMsg(
                                    f,
                                    r["default"].ADD_ITEM_USE_REWARD,
                                  ) + "\n",
                                )),
                            (t.money1 = f.getInt()),
                            (t.money2 = f.getInt()),
                            (t.money3 = f.getInt()),
                            h["default"].alertMessage(y),
                            p.sendNt(S.PetEvent.PET_SEAL_DETAILS),
                            [2]))
                  );
              }
            });
          });
        }),
        (t.PET_CHANGE_NAME_MONEY = [_.ModelConst.MONEY2, 50]),
        (t.MAX_GROW_POINT = 10),
        t
      );
    })(y["default"]);
  t["default"] = O;
});
