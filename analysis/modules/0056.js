(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(64),
    n = i(4),
    a = i(8),
    r = i(32),
    s = i(33),
    l = i(57),
    u = i(30),
    _ = i(12),
    d = i(31),
    p = i(55),
    c = i(20),
    h = i(10),
    f = i(3),
    T = i(2),
    E = i(24),
    y = i(5),
    g = i(13),
    v = i(92),
    S = i(61),
    I = i(69),
    m = i(72),
    A = i(0),
    C = i(113),
    P = i(90),
    R = i(179),
    O = i(114),
    N = (function (e) {
      function t() {
        var t = e.call(this, d.MODEL_TYPE.TYPE_PLAYER) || this;
        return (
          (t.gerenState = 0),
          (t._skillList_1 = []),
          (t.formationList = []),
          (t.formationSkill = null),
          (t.autoSkillID_Initiative = -1),
          (t.argo = 0),
          (t._exp2 = 0),
          (t._expMax2 = 0),
          (t._exp = 0),
          (t._expMax = 0),
          (t._hp = 0),
          (t._mp = 0),
          (t.cp = 0),
          (t._sp = 0),
          (t.str = 0),
          (t.con = 0),
          (t.agi = 0),
          (t.ilt = 0),
          (t.wis = 0),
          (t._money1 = 0),
          (t._money2 = 0),
          (t._money3 = 0),
          (t.numBag = 0),
          (t.numStroe = 0),
          (t.countryHonor = 0),
          (t.cityId = 0),
          (t.killCount = 0),
          (t.Pkwincount = 0),
          (t.Pklosecount = 0),
          (t.masterFlag = 0),
          (t.totalOnline = 0),
          (t.partnerId = 0),
          (t.partnerName = ""),
          (t.integral = 0),
          (t.arenaPoint = 0),
          (t.towerPoint = 0),
          (t.arenaStutas = 0),
          (t.plaPoint = 0),
          (t.campWarPoint = 0),
          (t._richManPoint = 0),
          (t._redPacketPoint = 0),
          (t.skyarenaPoint = 0),
          (t._combatPoint = 0),
          (t._hpMax = 0),
          (t._mpMax = 0),
          (t.crossHpMax = 0),
          (t.crossMpMax = 0),
          (t.crossHp = 0),
          (t.crossMp = 0),
          (t.speed = 0),
          (t.atkMin = 0),
          (t.atkMax = 0),
          (t.atk_time = 0),
          (t.atk_str = 0),
          (t.atk_agi = 0),
          (t.atk_magic = 0),
          (t.def_str = 0),
          (t.def_agi = 0),
          (t.def_magic = 0),
          (t.dodge = 0),
          (t.hitrate = 0),
          (t.hitMagic = 0),
          (t.critical = 0),
          (t.forceHit = 0),
          (t.wil = 0),
          (t.tough = 0),
          (t.block = 0),
          (t.brkArmor = 0),
          (t.magic_penetration = 0),
          (t.insight = 0),
          (t.def_field = 0),
          (t.back = 0),
          (t.magic_back = 0),
          (t.life_absorption = 0),
          (t.mana_absorption = 0),
          (t.heal_recovery = 0),
          (t.mana_recovery = 0),
          (t.recovery = 0),
          (t.keepout_atk_time = 0),
          (t.exp_up = 0),
          (t.expExpireTime = 0),
          (t.ignore_back = 0),
          (t.ignore_magic_back = 0),
          (t.ignore_block = 0),
          (t.ignore_insight = 0),
          (t.ignore_wil = 0),
          (t.ignore_touch = 0),
          (t.ignoreCritical = 0),
          (t.criticalDmg = 0),
          (t.atk_str_range = 0),
          (t.atk_str_nearby = 0),
          (t.atk_agi_range = 0),
          (t.atk_agi_nearby = 0),
          (t.def_str_range = 0),
          (t.def_str_nearby = 0),
          (t.def_agi_range = 0),
          (t.def_agi_nearby = 0),
          (t.titlePower1 = 0),
          (t.titlePowerValue1 = 0),
          (t.titlePower2 = 0),
          (t.titlePowerValue2 = 0),
          (t.power = 0),
          (t.powerValue = 0),
          (t.powerExpireTime = 0),
          (t.countrypowerValue = 0),
          (t._missionCntMap = {}),
          (t.readAddValue = 0),
          (t._illusionInfo = {}),
          (t.putIllusion = {}),
          (t.bStatus = Long.ZERO),
          (t.autoMoveEndPt = new egret.Point()),
          t
        );
      }
      return (
        __extends(t, e),
        (t.prototype.GenreIsOn = function () {
          return 1 == this.gerenState;
        }),
        Object.defineProperty(t.prototype, "BagSize", {
          get: function () {
            return this.bagSize ? this.bagSize : 0;
          },
          set: function (e) {
            ((this.bagSize = e),
              null == this.bag && (this.bag = new s["default"](this)),
              (this.bag.bagSize = e),
              (this.bag.bagEnd =
                s["default"].EQUIP_POS_END + this.bagSize - 1));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.isStateFull = function () {
          var e = 0 == this.hpMax ? this.get(_.ModelConst.HPMAX) : this.hpMax,
            t = 0 == this.mpMax ? this.get(_.ModelConst.MPMAX) : this.mpMax,
            i = this.pet,
            o = !0;
          if (y["default"].myPlayer.id == this.id) {
            var n = f["default"].getProxy(A.ModName.Legion, A.ProxyType.Legion);
            o = n.checkNowActorIsStateFull();
          }
          return this.hp >= e && this.mp >= t && (!i || i.isStateFull()) && o;
        }),
        Object.defineProperty(t.prototype, "skillList", {
          get: function () {
            return this._skillList_1;
          },
          set: function (e) {
            this._skillList_1 = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "hpDisplay", {
          get: function () {
            return this._hpDisplay;
          },
          set: function (e) {
            ((this._hpDisplay = e), this.onAttrUpdate(_.ModelConst.HP_DISPLAY));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "mpDisplay", {
          get: function () {
            return this._mpDisplay;
          },
          set: function (e) {
            ((this._mpDisplay = e), this.onAttrUpdate(_.ModelConst.MP_DISPLAY));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.setItemSetDataKey = function (e, t) {
          return ((4095 & e) << 4) | (15 & t);
        }),
        (t.getItemSetID = function (e) {
          return (e >> 4) & 4095;
        }),
        (t.getItemSetNum = function (e) {
          return 15 & e;
        }),
        Object.defineProperty(t.prototype, "exp2", {
          get: function () {
            return this._exp2;
          },
          set: function (e) {
            ((this._exp2 = 0 | +e), this.onAttrUpdate(_.ModelConst.EXP2));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "expMax2", {
          get: function () {
            return this._expMax2;
          },
          set: function (e) {
            ((this._expMax2 = 0 | +e), this.onAttrUpdate(_.ModelConst.EXPMAX2));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.setPosition = function (t, i) {
          m["default"].ins.isBlock(t, i) ||
            e.prototype.setPosition.call(this, t, i);
        }),
        Object.defineProperty(t.prototype, "exp", {
          get: function () {
            return this._exp;
          },
          set: function (e) {
            ((this._exp = 0 | +e), this.onAttrUpdate(_.ModelConst.EXP));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "expMax", {
          get: function () {
            return this._expMax;
          },
          set: function (e) {
            ((this._expMax = 0 | +e), this.onAttrUpdate(_.ModelConst.EXPMAX));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "hp", {
          get: function () {
            return this._hp;
          },
          set: function (e) {
            ((this._hp = 0 | +e),
              this.onAttrUpdate(_.ModelConst.HP),
              this.isMyPlayer && f["default"].sendNt(T.MainEvent.ROLE_HP));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "mp", {
          get: function () {
            return this._mp;
          },
          set: function (e) {
            ((this._mp = 0 | +e), this.onAttrUpdate(_.ModelConst.MP));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "sp", {
          get: function () {
            return this._sp;
          },
          set: function (e) {
            ((this._sp = e),
              this.type == d.MODEL_TYPE.TYPE_PET &&
                f["default"].sendNt(T.PetEvent.PET_SKILL_POINT));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "money1", {
          get: function () {
            return this._money1;
          },
          set: function (e) {
            ((this._money1 = e), this.onAttrUpdate(_.ModelConst.MONEY1));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "money2", {
          get: function () {
            return this._money2;
          },
          set: function (e) {
            ((this._money2 = e), this.onAttrUpdate(_.ModelConst.MONEY2));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "money3", {
          get: function () {
            return this._money3;
          },
          set: function (e) {
            ((this._money3 = e), this.onAttrUpdate(_.ModelConst.MONEY3));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "richManPoint", {
          set: function (e) {
            ((this._richManPoint = e),
              f["default"].sendNt(
                T.MainEvent.ON_PLAYER_ATTR_UPDATE,
                n["default"].RICHMAN_SCORE,
              ));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "redPacketPoint", {
          get: function () {
            return this._redPacketPoint;
          },
          set: function (e) {
            ((this._redPacketPoint = e),
              f["default"].sendNt(
                T.MainEvent.ON_PLAYER_ATTR_UPDATE,
                n["default"].RED_PACKET,
              ));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "combatPoint", {
          get: function () {
            return this._combatPoint;
          },
          set: function (e) {
            if (0 == this._combatPoint) return void (this._combatPoint = e);
            this.isMyPlayer && (go.rolePower = e);
            var t = this._combatPoint,
              i = e != t;
            ((this._combatPoint = e),
              i &&
                this.isMyPlayer &&
                (f["default"].sendNt(
                  T.MainEvent.ON_PLAYER_ATTR_UPDATE,
                  _.ModelConst.COMBATPOINT,
                ),
                f["default"].showView(
                  A.ModName.Main,
                  A.MainViewType.PowerTips,
                  { oldValue: t, newValue: e },
                )));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "hpMax", {
          get: function () {
            return this._hpMax;
          },
          set: function (e) {
            ((this._hpMax = e), this.onAttrUpdate(_.ModelConst.HPMAX));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "mpMax", {
          get: function () {
            return this._mpMax;
          },
          set: function (e) {
            ((this._mpMax = e), this.onAttrUpdate(_.ModelConst.MPMAX));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getMissionCntInfo = function (e) {
          return this._missionCntMap[e];
        }),
        (t.prototype.clearMissionCnt = function () {
          if (this._missionCntMap)
            for (var e in this._missionCntMap)
              this._missionCntMap[e].compCnt = 0;
        }),
        (t.prototype.isPower = function () {
          return 255 == this.power || this.power <= 0 ? !1 : !0;
        }),
        (t.prototype.showBuffIcon = function () {
          var e = this;
          return (
            e.isPower() ||
            e.isHasCountrypower() ||
            null != e.playerTurnMonster ||
            null != e.formationSkill
          );
        }),
        (t.prototype.isHasCountrypower = function () {
          return this.countrypowerValue > 0;
        }),
        (t.prototype.clearFightPower = function () {}),
        (t.prototype.addFightPower = function (e, t) {
          var i = [e, t];
          (this.fightPowerList || this.clearFight(),
            this.fightPowerList.push(i));
        }),
        (t.prototype.clearFight = function () {
          this.fightPowerList = g.GUtil.createTwoArray(0, 0);
        }),
        (t.prototype.getCountryBuffer = function (e) {
          return e == n["default"].POWER_STR_PERCENT ||
            e == n["default"].POWER_CON_PERCENT ||
            e == n["default"].POWER_AGI_PERCENT ||
            e == n["default"].POWER_ILT_PERCENT ||
            e == n["default"].POWER_WIS_PERCENT
            ? this.countrypowerValue
            : 0;
        }),
        (t.prototype.getPKWin = function () {
          if (this.Pkwincount + this.Pklosecount <= 0) return "0%";
          var e =
            (100 * this.Pkwincount) / (this.Pkwincount + this.Pklosecount);
          return g.GUtil.intNum(e) + "%";
        }),
        (t.prototype.getMasterFlag = function () {
          return this.masterFlag == n["default"].MASTER_FLAG_MASTER
            ? h.GameText.STR_LIST_DESC_RELATION_MASTER
            : this.masterFlag == n["default"].MASTER_FLAG_PRENTICE
              ? h.GameText.STR_LIST_DESC_RELATION_PRENTICE
              : h.GameText.STR_LIST_NULL;
        }),
        (t.prototype.fromBytes = function (e, t) {
          (t.setId(e.getInt()),
            t.setName(e.getString()),
            t.setInfo(e.getString()),
            t.setTitle(e.getString()),
            t.setSex(e.getByte()),
            t.setRace(e.getByte()),
            t.setJob(e.getByte()),
            t.setLevel(e.getByte()),
            t.setLevel2(e.getByte()),
            (t.exp2 = e.getInt()),
            (t.expMax2 = e.getInt()),
            t.setIcon1(e.getLong()),
            t.setIcon2(e.getLong()),
            t.setIcon3(e.getLong()),
            t.setSetting(e.getInt()),
            t.setStatus(e.getInt()),
            t.setMode(e.getByte()));
          var i = e.getInt();
          (t.setCountryId(i),
            i >= 0 &&
              (t.setCountryName(e.getString()), t.setCountryRank(e.getByte())),
            (t.exp = e.getInt()),
            (t.expMax = e.getInt()),
            (t.hp = e.getInt()),
            (t.mp = e.getInt()),
            (t.cp = e.getShort()),
            (t.sp = e.getInt()),
            (t.str = e.getShort()),
            (t.con = e.getShort()),
            (t.agi = e.getShort()),
            (t.ilt = e.getShort()),
            (t.wis = e.getShort()),
            (t.money1 = e.getInt()),
            (t.money2 = e.getInt()),
            (t.money3 = e.getInt()),
            (t.numBag = e.getByte()),
            (t.numStroe = e.getByte()),
            (t.countryHonor = e.getInt()),
            (t.cityId = e.getInt()),
            (t.killCount = e.getInt()),
            (t.Pkwincount = e.getInt()),
            (t.Pklosecount = e.getInt()),
            (t.masterFlag = e.getByte()),
            (t.partnerId = e.getInt()),
            t.partnerId >= 0 && (t.partnerName = e.getString()),
            (t.helpCountry = e.getString()),
            (t.lovePlayer = e.getString()),
            (t.integral = e.getInt()),
            (t.arenaPoint = e.getInt()),
            (t.skyarenaPoint = e.getInt()),
            (t.combatPoint = e.getInt()),
            (t.ignore_back = e.getInt()),
            (t.ignore_back = 0),
            (t.ignore_magic_back = e.getInt()),
            (t.ignore_magic_back = 0),
            (t.ignore_block = e.getInt()),
            (t.ignore_block = 0),
            (t.ignore_insight = e.getInt()),
            (t.ignore_insight = 0),
            (t.ignore_wil = e.getInt()),
            (t.ignore_wil = 0),
            (t.ignore_touch = e.getInt()),
            (t.ignore_touch = 0),
            (t.ignoreCritical = e.getInt()),
            (t.criticalDmg = e.getInt()),
            (t.atk_str_range = e.getInt()),
            (t.atk_str_nearby = e.getInt()),
            (t.atk_agi_range = e.getInt()),
            (t.atk_agi_nearby = e.getInt()),
            (t.def_str_range = e.getInt()),
            (t.def_str_nearby = e.getInt()),
            (t.def_agi_range = e.getInt()),
            (t.def_agi_nearby = e.getInt()),
            t.setVipLevel(e.getByte()),
            t.setVipLevel2(e.getByte()),
            t.setSuperQqLevel(e.getByte()));
          var o = e.getByte();
          t.autoSkillID = new Array(o);
          for (var n = 0; o > n; n++) t.autoSkillID[n] = e.getShort();
          ((t.autoSkillID_Initiative = e.getShort()),
            t.fromItemSetData(e),
            (t.power = e.getShort()),
            (t.powerValue = e.getShort()),
            (t.titlePower1 = e.getShort()),
            (t.titlePowerValue1 = e.getShort()),
            (t.titlePower2 = e.getShort()),
            (t.titlePowerValue2 = e.getShort()),
            (t.countrypowerValue = e.getByte()),
            t.setEnchantValue(e.getInt()),
            t._missionCntMap || (t._missionCntMap = {}));
          for (var a = e.getByte(), n = 0; a > n; ++n) {
            var r = e.getInt(),
              s = e.getInt(),
              l = e.getInt();
            t._missionCntMap[r] = { compCnt: s, total: l };
          }
        }),
        (t.prototype.fromItemSetData = function (e) {
          var t = e.getByte();
          this.itemSetData = new Array(t);
          for (var i = 0; t > i; i++) this.itemSetData[i] = e.getShort();
        }),
        (t.prototype.setMoneyByType = function (e, t, i) {
          switch ((void 0 === i && (i = null), e)) {
            case _.ModelConst.MONEY1:
              (this.money1 != t &&
                null != i &&
                i.append(
                  c["default"].makeColorString(
                    h.GameText.STR_MONEY1 + (t - this.money1),
                    a.Tool.COLOR_YELLOW,
                  ) + "\n",
                ),
                (this.money1 = t));
              break;
            case _.ModelConst.MONEY2:
              (this.money2 != t &&
                null != i &&
                i.append(
                  c["default"].makeColorString(
                    h.GameText.STR_MONEY2 + (t - this.money2),
                    a.Tool.COLOR_MONEY2,
                  ) + "\n",
                ),
                (this.money2 = t));
              break;
            case _.ModelConst.MONEY3:
              (this.money3 != t &&
                null != i &&
                i.append(
                  c["default"].makeColorString(
                    h.GameText.STR_MONEY3 + (t - this.money3),
                    a.Tool.COLOR_MONEY3,
                  ) + "\n",
                ),
                (this.money3 = t));
          }
        }),
        (t.prototype.addValueStr = function (e, t) {
          var i = this;
          switch (e) {
            case _.ModelConst.HELP_COUNTRY:
              i.helpCountry = t;
              break;
            case _.ModelConst.LOVE_PLAYER:
              i.lovePlayer = t;
              break;
            case _.ModelConst.PARTNER_NAME:
              i.partnerName = t;
          }
        }),
        (t.prototype.addValue = function (t, i) {
          var o = 0,
            n = 0;
          switch (((i = g.GUtil.intNum(i)), (this.readAddValue = i), t)) {
            case _.ModelConst.COMBATPOINT:
              this.combatPoint = i;
              break;
            case _.ModelConst.PARTNER_ID:
              this.partnerId = i;
              break;
            case _.ModelConst.MASTER_FLAG:
              this.masterFlag = i;
              break;
            case _.ModelConst.EXP:
              this.exp = a.Tool.sumValue(this.exp, i, 0, this.expMax, !1);
              break;
            case _.ModelConst.EXP2:
              this.exp2 = a.Tool.sumValue(this.exp2, i, 0, this.expMax2);
              break;
            case _.ModelConst.SET_EXP:
              this.exp = i;
              break;
            case _.ModelConst.SET_EXP2:
              this.exp2 = i;
              break;
            case _.ModelConst.EXPMAX:
              this.expMax = a.Tool.sumValue(
                this.expMax,
                i,
                0,
                a.Tool.MAX_VALUE_int,
              );
              break;
            case _.ModelConst.SET_EXPMAX:
              this.expMax = i;
              break;
            case _.ModelConst.SET_EXPMAX2:
              this.expMax2 = i;
              break;
            case _.ModelConst.HP:
              this.hp = a.Tool.sumValue(
                this.hp,
                i,
                0,
                this.get(_.ModelConst.HPMAX),
              );
              break;
            case _.ModelConst.HP_DISPLAY:
              this.hpDisplay = a.Tool.sumValue(
                this.hpDisplay,
                i,
                0,
                this.get(_.ModelConst.HPMAX),
              );
              break;
            case _.ModelConst.MP:
              this.mp = a.Tool.sumValue(
                this.mp,
                i,
                0,
                this.get(_.ModelConst.MPMAX),
              );
              break;
            case _.ModelConst.MP_DISPLAY:
              this.mpDisplay = a.Tool.sumValue(
                this.mpDisplay,
                i,
                0,
                this.get(_.ModelConst.MPMAX),
              );
              break;
            case _.ModelConst.SP:
              this.sp = a.Tool.sumValue(this.sp, i, 0, a.Tool.MAX_VALUE_int);
              break;
            case _.ModelConst.CP:
              ((this.cp = a.Tool.sumValue(
                this.cp,
                i,
                0,
                a.Tool.MAX_VALUE_short,
              )),
                f["default"].sendNt(T.RoleEvent.ROLE_ATTR_UPDATE));
              break;
            case _.ModelConst.STR:
              ((this.str = a.Tool.sumValue(
                this.str,
                i,
                0,
                _.ModelConst.MAX_BASE_ATTRIBUTE,
              )),
                (o = this.get(_.ModelConst.HPMAX)),
                this.hp > o && (this.hp = o),
                (this.hpMax = o));
              break;
            case _.ModelConst.CON:
              ((this.con = a.Tool.sumValue(
                this.con,
                i,
                0,
                _.ModelConst.MAX_BASE_ATTRIBUTE,
              )),
                (o = this.get(_.ModelConst.HPMAX)),
                this.hp > o && (this.hp = o),
                (this.hpMax = o));
              break;
            case _.ModelConst.AGI:
              this.agi = a.Tool.sumValue(
                this.agi,
                i,
                0,
                _.ModelConst.MAX_BASE_ATTRIBUTE,
              );
              break;
            case _.ModelConst.ILT:
              ((this.ilt = a.Tool.sumValue(
                this.ilt,
                i,
                0,
                _.ModelConst.MAX_BASE_ATTRIBUTE,
              )),
                (o = this.get(_.ModelConst.MPMAX)),
                this.mp > o && (this.mp = o),
                (this.mpMax = o));
              break;
            case _.ModelConst.WIS:
              ((this.wis = a.Tool.sumValue(
                this.wis,
                i,
                0,
                _.ModelConst.MAX_BASE_ATTRIBUTE,
              )),
                (o = this.get(_.ModelConst.MPMAX)),
                this.mp > o && (this.mp = o),
                (this.mpMax = o));
              break;
            case _.ModelConst.MONEY1:
              this.money1 = a.Tool.sumValue(
                this.money1,
                i,
                0,
                a.Tool.MAX_VALUE_int,
              );
              break;
            case _.ModelConst.MONEY2:
              this.money2 = a.Tool.sumValue(
                this.money2,
                i,
                0,
                a.Tool.MAX_VALUE_int,
              );
              break;
            case _.ModelConst.MONEY3:
              this.money3 > 0 && i > 0 && this.money3 + i < 0
                ? (this.money3 = a.Tool.MAX_VALUE_int)
                : ((this.money3 += i), this.money3 < 0 && (this.money3 = 0));
              break;
            case _.ModelConst.NUM_STROE:
              this.numStroe = a.Tool.sumValue(
                this.numStroe,
                i,
                0,
                _.ModelConst.MAX_STORE_NUM,
              );
              break;
            case _.ModelConst.COUNTRY_HONOR:
              this.countryHonor = a.Tool.sumValue(
                this.countryHonor,
                i,
                0,
                a.Tool.MAX_VALUE_int,
              );
              break;
            case _.ModelConst.KILL_COUNT:
              this.killCount = a.Tool.sumValue(
                this.killCount,
                i,
                0,
                a.Tool.MAX_VALUE_int,
              );
              break;
            case _.ModelConst.PK_WIN_COUNT:
              this.Pkwincount = a.Tool.sumValue(
                this.Pkwincount,
                i,
                0,
                a.Tool.MAX_VALUE_int,
              );
              break;
            case _.ModelConst.PK_LOSE_COUNT:
              this.Pklosecount = a.Tool.sumValue(
                this.Pklosecount,
                i,
                0,
                a.Tool.MAX_VALUE_int,
              );
              break;
            case _.ModelConst.SPEED:
              ((n = this.speed),
                (this.speed = a.Tool.sumValue(
                  this.speed,
                  i,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.speed - n));
              break;
            case _.ModelConst.ATK_STR:
              ((n = this.atk_str),
                (this.atk_str = a.Tool.sumValue(
                  this.atk_str,
                  i,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.atk_str - n));
              break;
            case _.ModelConst.ATK_TIME:
              ((n = this.atk_time),
                (this.atk_time = a.Tool.sumValue(
                  this.atk_time,
                  i,
                  0,
                  _.ModelConst.MAX_HIT_TIME,
                )),
                (this.readAddValue = this.atk_time - n));
              break;
            case _.ModelConst.ATK_AGI:
              ((n = this.atk_agi),
                (this.atk_agi = a.Tool.sumValue(
                  this.atk_agi,
                  i,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.atk_agi - n));
              break;
            case _.ModelConst.DEF_STR_RANGE:
              if (!y["default"].isPreviewBeta) {
                this.readAddValue = 0;
                break;
              }
              ((n = this.def_str_range),
                (this.def_str_range = a.Tool.sumValue(
                  this.def_str_range,
                  i,
                  -_.ModelConst.MAX_OTHER_ATTRIBUTE,
                  a.Tool.MAX_VALUE_int,
                )),
                (this.readAddValue = this.def_str_range - n));
              break;
            case _.ModelConst.DEF_STR_NEARBY:
              if (!y["default"].isPreviewBeta) {
                this.readAddValue = 0;
                break;
              }
              ((n = this.def_str_nearby),
                (this.def_str_nearby = a.Tool.sumValue(
                  this.def_str_nearby,
                  i,
                  -_.ModelConst.MAX_OTHER_ATTRIBUTE,
                  a.Tool.MAX_VALUE_int,
                )),
                (this.readAddValue = this.def_str_nearby - n));
              break;
            case _.ModelConst.DEF_AGI_NEARBY:
              if (!y["default"].isPreviewBeta) {
                this.readAddValue = 0;
                break;
              }
              ((n = this.def_agi_nearby),
                (this.def_agi_nearby = a.Tool.sumValue(
                  this.def_agi_nearby,
                  i,
                  -_.ModelConst.MAX_OTHER_ATTRIBUTE,
                  a.Tool.MAX_VALUE_int,
                )),
                (this.readAddValue = this.def_agi_nearby - n));
              break;
            case _.ModelConst.DEF_AGI_RANGE:
              if (!y["default"].isPreviewBeta) {
                this.readAddValue = 0;
                break;
              }
              ((n = this.def_agi_range),
                (this.def_agi_range = a.Tool.sumValue(
                  this.def_agi_range,
                  i,
                  -_.ModelConst.MAX_OTHER_ATTRIBUTE,
                  a.Tool.MAX_VALUE_int,
                )),
                (this.readAddValue = this.def_agi_range - n));
              break;
            case _.ModelConst.ATK_STR_NEARBY:
              ((n = this.atk_str_nearby),
                (this.atk_str_nearby = a.Tool.sumValue(
                  this.atk_str_nearby,
                  i,
                  -_.ModelConst.MAX_OTHER_ATTRIBUTE,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.atk_str_nearby - n));
              break;
            case _.ModelConst.ATK_STR_RANGE:
              ((n = this.atk_str_range),
                (this.atk_str_range = a.Tool.sumValue(
                  this.atk_str_range,
                  i,
                  -_.ModelConst.MAX_OTHER_ATTRIBUTE,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.atk_str_range - n));
              break;
            case _.ModelConst.ATK_AGI_RANGE:
              ((n = this.atk_agi_range),
                (this.atk_agi_range = a.Tool.sumValue(
                  this.atk_agi_range,
                  i,
                  -_.ModelConst.MAX_OTHER_ATTRIBUTE,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.atk_agi_range - n));
              break;
            case _.ModelConst.ATK_AGI_NEARBY:
              ((n = this.atk_agi_nearby),
                (this.atk_agi_nearby = a.Tool.sumValue(
                  this.atk_agi_nearby,
                  i,
                  -_.ModelConst.MAX_OTHER_ATTRIBUTE,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.atk_agi_nearby - n));
              break;
            case _.ModelConst.ATK_MAGIC:
              n = this.atk_magic;
              var r = y["default"].isPreviewBeta
                ? 2e6
                : _.ModelConst.MAX_OTHER_ATTRIBUTE;
              ((this.atk_magic = a.Tool.sumValue(this.atk_magic, i, 0, r)),
                (this.readAddValue = this.atk_magic - n));
              break;
            case _.ModelConst.DEF_STR:
              n = this.def_str;
              var s = y["default"].isPreviewBeta
                ? a.Tool.MAX_VALUE_int
                : _.ModelConst.MAX_OTHER_ATTRIBUTE;
              ((this.def_str = a.Tool.sumValue(this.def_str, i, 0, s)),
                (this.readAddValue = this.def_str - n));
              break;
            case _.ModelConst.DEF_AGI:
              n = this.def_agi;
              var l = y["default"].isPreviewBeta
                ? a.Tool.MAX_VALUE_int
                : _.ModelConst.MAX_OTHER_ATTRIBUTE;
              ((this.def_agi = a.Tool.sumValue(this.def_agi, i, 0, l)),
                (this.readAddValue = this.def_agi - n));
              break;
            case _.ModelConst.DEF_MAGIC:
              n = this.def_magic;
              var u = y["default"].isPreviewBeta
                ? a.Tool.MAX_VALUE_int
                : _.ModelConst.MAX_OTHER_ATTRIBUTE;
              ((this.def_magic = a.Tool.sumValue(this.def_magic, i, 0, u)),
                (this.readAddValue = this.def_magic - n));
              break;
            case _.ModelConst.ARGO:
              this.argo = a.Tool.sumValue(this.argo, i, -1e5, 1e5);
              break;
            case _.ModelConst.CRITICAL:
              ((n = this.critical),
                (this.critical = a.Tool.sumValue(
                  this.critical,
                  i,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.critical - n));
              break;
            case _.ModelConst.HIT_MAGIC:
              ((n = this.hitMagic),
                (this.hitMagic = a.Tool.sumValue(
                  this.hitMagic,
                  i,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.hitMagic - n));
              break;
            case _.ModelConst.HIT_RATE:
              ((n = this.hitrate),
                (this.hitrate = a.Tool.sumValue(
                  this.hitrate,
                  i,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.hitrate - n));
              break;
            case _.ModelConst.FORCE_HIT:
              ((n = this.forceHit),
                (this.forceHit = a.Tool.sumValue(
                  this.forceHit,
                  i,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.forceHit - n));
              break;
            case _.ModelConst.DODGE:
              ((n = this.dodge),
                (this.dodge = a.Tool.sumValue(
                  this.dodge,
                  i,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.dodge - n));
              break;
            case _.ModelConst.WIL:
              ((n = this.wil),
                (this.wil = a.Tool.sumValue(
                  this.wil,
                  i,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.wil - n));
              break;
            case _.ModelConst.TOUGH:
              ((n = this.tough),
                (this.tough = a.Tool.sumValue(
                  this.tough,
                  i,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.tough - n));
              break;
            case _.ModelConst.BRK_ARMOR:
              n = this.brkArmor;
              var d = y["default"].isPreviewBeta
                ? a.Tool.MAX_VALUE_int
                : _.ModelConst.MAX_OTHER_ATTRIBUTE;
              ((this.brkArmor = a.Tool.sumValue(this.brkArmor, i, 0, d)),
                (this.readAddValue = this.brkArmor - n));
              break;
            case _.ModelConst.MAGIC_PENETRATION:
              n = this.magic_penetration;
              var p = y["default"].isPreviewBeta
                ? a.Tool.MAX_VALUE_int
                : _.ModelConst.MAX_OTHER_ATTRIBUTE;
              ((this.magic_penetration = a.Tool.sumValue(
                this.magic_penetration,
                i,
                0,
                p,
              )),
                (this.readAddValue = this.magic_penetration - n));
              break;
            case _.ModelConst.BLOCK:
              ((n = this.block),
                (this.block = a.Tool.sumValue(
                  this.block,
                  i,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.block - n));
              break;
            case _.ModelConst.DEF_FIELD:
              ((n = this.def_field),
                (this.def_field = a.Tool.sumValue(
                  this.def_field,
                  i,
                  _.ModelConst.MIN_DEF_FIELD,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.def_field - n));
              break;
            case _.ModelConst.INSIGHT:
              ((n = this.insight),
                (this.insight = a.Tool.sumValue(
                  this.insight,
                  i,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.insight - n));
              break;
            case _.ModelConst.BACK:
              ((n = this.back),
                (this.back = a.Tool.sumValue(
                  this.back,
                  i,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.back - n));
              break;
            case _.ModelConst.MAGIC_BACK:
              ((n = this.magic_back),
                (this.magic_back = a.Tool.sumValue(
                  this.magic_back,
                  i,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.magic_back - n));
              break;
            case _.ModelConst.LIFE_ABSORPTION:
              ((n = this.life_absorption),
                (this.life_absorption = a.Tool.sumValue(
                  this.life_absorption,
                  i,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.life_absorption - n));
              break;
            case _.ModelConst.MANA_ABSORPTION:
              ((n = this.mana_absorption),
                (this.mana_absorption = a.Tool.sumValue(
                  this.mana_absorption,
                  i,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.mana_absorption - n));
              break;
            case _.ModelConst.HEAL_RECOVERY:
              ((n = this.heal_recovery),
                (this.heal_recovery = a.Tool.sumValue(
                  this.heal_recovery,
                  i,
                  _.ModelConst.MIN_HEAL_RECOVERY,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.heal_recovery - n));
              break;
            case _.ModelConst.MANA_RECOVERY:
              ((n = this.mana_recovery),
                (this.mana_recovery = a.Tool.sumValue(
                  this.mana_recovery,
                  i,
                  _.ModelConst.MIN_MANA_RECOVERY,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.mana_recovery - n));
              break;
            case _.ModelConst.KEEPOUT_ATK_TIME:
              ((n = this.keepout_atk_time),
                (this.keepout_atk_time = a.Tool.sumValue(
                  this.keepout_atk_time,
                  i,
                  0,
                  _.ModelConst.MAX_KEEPOUT_ATK_TIME,
                )),
                (this.readAddValue = this.keepout_atk_time - n));
              break;
            case _.ModelConst.IGNORE_CRITICAL:
              ((n = this.ignoreCritical),
                (this.ignoreCritical = a.Tool.sumValue(
                  this.ignoreCritical,
                  i,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.ignoreCritical - n));
              break;
            case _.ModelConst.CRITICAL_DAMAGE:
              ((n = this.criticalDmg),
                (this.criticalDmg = a.Tool.sumValue(
                  this.criticalDmg,
                  i,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )),
                (this.readAddValue = this.criticalDmg - n));
          }
          e.prototype.addValue.call(this, t, i);
        }),
        (t.prototype.getOld = function (t) {
          var i = 0;
          switch (t) {
            case _.ModelConst.HPMAX:
              var o = this.get(_.ModelConst.LEVEL);
              return (
                (i =
                  g.GUtil.intNum((65 * this.get(_.ModelConst.CON)) / 10) +
                  3 * this.get(_.ModelConst.STR) +
                  100 +
                  40 * (o - 1)),
                (i = this.getPowerValue(
                  i,
                  this._hpMax,
                  n["default"].POWER_HPMAX,
                  n["default"].POWER_HPMAX_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  1,
                  _.ModelConst.MAX_PLAYER_HP,
                ))
              );
            case _.ModelConst.MPMAX:
              var a = this.get(_.ModelConst.LEVEL),
                r = this.get(_.ModelConst.ILT),
                s = this.get(_.ModelConst.WIS);
              return (
                (i =
                  g.GUtil.intNum((75 * r) / 10) +
                  g.GUtil.intNum((35 * s) / 10) +
                  50 +
                  10 * (a - 1)),
                (i = this.getPowerValue(
                  i,
                  this._mpMax,
                  n["default"].POWER_MPMAX,
                  n["default"].POWER_MPMAX_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  1,
                  _.ModelConst.MAX_PLAYER_MP,
                ))
              );
            default:
              return e.prototype.get.call(this, t);
          }
        }),
        (t.getAttDesc = function (e, t) {
          var i = new u["default"]();
          i.append(e.toString());
          var o = t - e;
          return (
            o > 0
              ? i.append(
                  c["default"].makeColorString(
                    "(+" + o + ")",
                    a.Tool.COLOR_GREEN,
                  ),
                )
              : 0 > o &&
                i.append(
                  c["default"].makeColorString(
                    "(+" + o + ")",
                    a.Tool.COLOR_RED,
                  ),
                ),
            i.toString()
          );
        }),
        (t.prototype.getPoint = function (e) {
          var t = 0;
          switch (e) {
            case n["default"].SKYARENA:
              t = this.skyarenaPoint;
              break;
            case n["default"].ARENA:
              t = this.arenaPoint;
          }
          return g.GUtil.intNum(t);
        }),
        (t.prototype.get = function (t) {
          var i = 0,
            o = 0,
            l = [];
          switch (t) {
            case _.ModelConst.INTEGRAL:
              i = this.integral;
              break;
            case _.ModelConst.EXP:
              i = this.exp;
              break;
            case _.ModelConst.EXP2:
              i = this.exp2;
              break;
            case _.ModelConst.EXPMAX:
              i = this.expMax;
              break;
            case _.ModelConst.EXPMAX2:
              i = this.expMax2;
              break;
            case _.ModelConst.HP:
              i = this.hp;
              break;
            case _.ModelConst.HP_DISPLAY:
              i = this.hpDisplay;
              break;
            case _.ModelConst.MP:
              i = this.mp;
              break;
            case _.ModelConst.MP_DISPLAY:
              i = this.mpDisplay;
              break;
            case _.ModelConst.CP:
              i = this.cp;
              break;
            case _.ModelConst.SP:
              i = this.sp;
              break;
            case _.ModelConst.COMBATPOINT:
              i = this.combatPoint;
              break;
            case _.ModelConst.STR:
              ((i = this.str),
                (i = this.getBaseValue(
                  i,
                  n["default"].POWER_STR,
                  n["default"].POWER_STR_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.CON:
              ((i = this.con),
                (i = this.getBaseValue(
                  i,
                  n["default"].POWER_CON,
                  n["default"].POWER_CON_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.AGI:
              ((i = this.agi),
                (i = this.getBaseValue(
                  i,
                  n["default"].POWER_AGI,
                  n["default"].POWER_AGI_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.ILT:
              ((i = this.ilt),
                (i = this.getBaseValue(
                  i,
                  n["default"].POWER_ILT,
                  n["default"].POWER_ILT_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.WIS:
              ((i = this.wis),
                (i = this.getBaseValue(
                  i,
                  n["default"].POWER_WIS,
                  n["default"].POWER_WIS_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.MONEY1:
              i = this.money1;
              break;
            case _.ModelConst.MONEY2:
              i = this.money2;
              break;
            case _.ModelConst.MONEY3:
              i = this.money3;
              break;
            case _.ModelConst.NUM_STROE:
              i = this.numStroe;
              break;
            case _.ModelConst.COUNTRY_HONOR:
              i = this.countryHonor;
              break;
            case _.ModelConst.CITY_ID:
              i = this.cityId;
              break;
            case _.ModelConst.KILL_COUNT:
              i = this.killCount;
              break;
            case _.ModelConst.PK_WIN_COUNT:
              i = this.Pkwincount;
              break;
            case _.ModelConst.PK_LOSE_COUNT:
              i = this.Pklosecount;
              break;
            case _.ModelConst.TOTAL_ONLINE:
              i = this.totalOnline;
              break;
            case _.ModelConst.PARTNER_ID:
              i = this.partnerId;
              break;
            case _.ModelConst.HPMAX:
              var u =
                  this.get(_.ModelConst.LEVEL) + this.get(_.ModelConst.LEVEL2),
                d = this.get(_.ModelConst.CON),
                p = this.get(_.ModelConst.STR);
              ((i = g.GUtil.intNum((65 * d) / 10) + 3 * p + 100 + 40 * (u - 1)),
                (i = this.getPowerValue(
                  i,
                  this._hpMax,
                  n["default"].POWER_HPMAX,
                  n["default"].POWER_HPMAX_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  1,
                  _.ModelConst.MAX_PLAYER_HP,
                )));
              break;
            case _.ModelConst.MPMAX:
              var c =
                  this.get(_.ModelConst.LEVEL) + this.get(_.ModelConst.LEVEL2),
                h = this.get(_.ModelConst.ILT),
                f = this.get(_.ModelConst.WIS);
              ((i =
                g.GUtil.intNum((75 * h) / 10) +
                g.GUtil.intNum((35 * f) / 10) +
                50 +
                10 * (c - 1)),
                (i = this.getPowerValue(
                  i,
                  this._mpMax,
                  n["default"].POWER_MPMAX,
                  n["default"].POWER_MPMAX_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  1,
                  _.ModelConst.MAX_PLAYER_MP,
                )));
              break;
            case _.ModelConst.SPEED:
              ((i =
                3 * this.get(_.ModelConst.AGI) +
                g.GUtil.intNum((15 * this.get(_.ModelConst.WIS)) / 10)),
                (i = this.getPowerValue(
                  i,
                  this.speed,
                  n["default"].POWER_SPEED,
                  n["default"].POWER_SPEED_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.ATK_TYPE:
              i =
                null == this.bag
                  ? n["default"].ATKTYPE_STR
                  : this.bag.get(r["default"].EQP_ATK_TYPE);
              break;
            case _.ModelConst.LEFT_WEAPON_TYPE:
              i =
                null == this.bag
                  ? -1
                  : this.bag.getForPos(
                      r["default"].EQP_ITEM_TYPE,
                      s["default"].WEAPON_LEFT_POS,
                    );
              break;
            case _.ModelConst.RIGHT_WEAPON_TYPE:
              i =
                null == this.bag
                  ? -1
                  : this.bag.getForPos(
                      r["default"].EQP_ITEM_TYPE,
                      s["default"].WEAPON_RIGHT_POS,
                    );
              break;
            case _.ModelConst.LEFT_ATK_MIN:
              (null != this.bag &&
                ((i = this.bag.getForPos(
                  r["default"].EQP_ATK_MIN,
                  s["default"].WEAPON_LEFT_POS,
                )),
                0 > i && (i = 0),
                (i = this.addWeaponSkillDamageOrDur(
                  i,
                  s["default"].WEAPON_LEFT_POS,
                ))),
                (i = a.Tool.sumValue(i, 0, 0, _.ModelConst.MAX_ATK)));
              break;
            case _.ModelConst.RIGHT_ATK_MIN:
              (null != this.bag &&
                ((i = this.bag.getForPos(
                  r["default"].EQP_ATK_MIN,
                  s["default"].WEAPON_RIGHT_POS,
                )),
                0 > i && (i = 0),
                (i = this.addWeaponSkillDamageOrDur(
                  i,
                  s["default"].WEAPON_RIGHT_POS,
                ))),
                (i = a.Tool.sumValue(i, 0, 0, _.ModelConst.MAX_ATK)));
              break;
            case _.ModelConst.ATK_MIN:
              var T = this.get(_.ModelConst.LEFT_ATK_MIN),
                E = this.get(_.ModelConst.RIGHT_ATK_MIN);
              ((i = T), E > i && (i = E));
              break;
            case _.ModelConst.LEFT_ATK_MAX:
              (null != this.bag &&
                ((i = this.bag.getForPos(
                  r["default"].EQP_ATK_MAX,
                  s["default"].WEAPON_LEFT_POS,
                )),
                0 > i && (i = 0),
                (i = this.addWeaponSkillDamageOrDur(
                  i,
                  s["default"].WEAPON_LEFT_POS,
                ))),
                (i = a.Tool.sumValue(i, 0, 0, _.ModelConst.MAX_ATK)));
              break;
            case _.ModelConst.RIGHT_ATK_MAX:
              (null != this.bag &&
                ((i = this.bag.getForPos(
                  r["default"].EQP_ATK_MAX,
                  s["default"].WEAPON_RIGHT_POS,
                )),
                0 > i && (i = 0),
                (i = this.addWeaponSkillDamageOrDur(
                  i,
                  s["default"].WEAPON_RIGHT_POS,
                ))),
                (i = a.Tool.sumValue(i, 0, 0, _.ModelConst.MAX_ATK)));
              break;
            case _.ModelConst.ATK_MAX:
              var v = this.get(_.ModelConst.LEFT_ATK_MAX),
                S = this.get(_.ModelConst.RIGHT_ATK_MAX);
              ((i = v), S > i && (i = S));
              break;
            case _.ModelConst.LEFT_ATK_TIME:
              if (
                null != this.bag &&
                ((i = this.bag.getForPos(
                  r["default"].EQP_HIT_TIME,
                  s["default"].WEAPON_LEFT_POS,
                )),
                0 > i)
              )
                return 0;
              i = a.Tool.sumValue(
                i + 1,
                0,
                _.ModelConst.MIN_HIT_TIME,
                _.ModelConst.MAX_HIT_TIME,
              );
              break;
            case _.ModelConst.RIGHT_ATK_TIME:
              if (
                null != this.bag &&
                ((i = this.bag.getForPos(
                  r["default"].EQP_HIT_TIME,
                  s["default"].WEAPON_RIGHT_POS,
                )),
                0 > i)
              )
                return 0;
              i = a.Tool.sumValue(
                i + 1,
                0,
                _.ModelConst.MIN_HIT_TIME,
                _.ModelConst.MAX_HIT_TIME,
              );
              break;
            case _.ModelConst.ATK_TIME:
              var I = this.getEquipWeaponType();
              (I == n["default"].BACK_ERROR_NULL_HAND
                ? ((i = 1),
                  (i += this.getSkillPowerValue(
                    n["default"].SKILL_TYPE_PASSIVE,
                    n["default"].POWER_HAND_ATK_TIME,
                  )),
                  (i += this.getBagEquipPowerValue(
                    n["default"].POWER_HAND_ATK_TIME,
                    !0,
                  )))
                : (i =
                    this.get(_.ModelConst.LEFT_ATK_TIME) +
                    this.get(_.ModelConst.RIGHT_ATK_TIME)),
                (i = this.addWeaponSkillAtkTime(i, I)),
                (i = a.Tool.sumValue(
                  i,
                  this.atk_time,
                  _.ModelConst.MIN_HIT_TIME,
                  _.ModelConst.MAX_HIT_TIME,
                )));
              break;
            case _.ModelConst.ATK_STR:
              ((i = g.GUtil.intNum(
                3 * this.get(_.ModelConst.AGI) +
                  g.GUtil.intNum(5 * this.get(_.ModelConst.STR)),
              )),
                (i = this.getPowerValue(
                  i,
                  this.atk_str,
                  n["default"].POWER_ATK_STR,
                  n["default"].POWER_ATK_STR_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                  !0,
                )));
              break;
            case _.ModelConst.ATK_AGI:
              ((i =
                g.GUtil.intNum(5 * this.get(_.ModelConst.STR)) +
                g.GUtil.intNum(5 * this.get(_.ModelConst.AGI))),
                (i = this.getPowerValue(
                  i,
                  this.atk_agi,
                  n["default"].POWER_ATK_AGI,
                  n["default"].POWER_ATK_AGI_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                  !0,
                )));
              break;
            case _.ModelConst.ATK_MAGIC:
              ((i =
                ((3 * this.get(_.ModelConst.ILT) +
                  2 * this.get(_.ModelConst.WIS)) *
                  (this.get(_.ModelConst.HIT_MAGIC) + 900)) /
                1e3),
                (i = g.GUtil.intNum(i)),
                (i = this.getPowerValue(
                  i,
                  this.atk_magic,
                  n["default"].POWER_ATK_MAGIC,
                  n["default"].POWER_ATK_MAGIC_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  y["default"].isPreviewBeta
                    ? 2e6
                    : _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.ATK_STR_NEARBY:
              if (!y["default"].isPreviewBeta) return 0;
              ((i = g.GUtil.intNum(
                3 * this.get(_.ModelConst.AGI) +
                  g.GUtil.intNum(5 * this.get(_.ModelConst.STR)),
              )),
                (o = _.ModelConst.MAX_OTHER_ATTRIBUTE),
                (l = [
                  {
                    powerID: n["default"].POWER_ATK_STR,
                    powerPercentID: n["default"].POWER_ATK_STR_PERCENT,
                    skillType: n["default"].SKILL_TYPE_PASSIVE,
                    isAddHand: !0,
                  },
                  {
                    powerID: n["default"].POWER_ATK_STR_NEARBY,
                    powerPercentID: n["default"].POWER_ATK_STR_NEARBY_PERCENT,
                    skillType: n["default"].SKILL_TYPE_PASSIVE,
                    isAddHand: !1,
                  },
                ]),
                (i = this.getPowerValueCal(i, this.atk_str, l, 0, o)),
                (i = Math.max(0, i)));
              break;
            case _.ModelConst.ATK_STR_RANGE:
              if (!y["default"].isPreviewBeta) return 0;
              ((i = g.GUtil.intNum(
                3 * this.get(_.ModelConst.AGI) +
                  g.GUtil.intNum(5 * this.get(_.ModelConst.STR)),
              )),
                (o = _.ModelConst.MAX_OTHER_ATTRIBUTE),
                (l = [
                  {
                    powerID: n["default"].POWER_ATK_STR,
                    powerPercentID: n["default"].POWER_ATK_STR_PERCENT,
                    skillType: n["default"].SKILL_TYPE_PASSIVE,
                    isAddHand: !0,
                  },
                  {
                    powerID: n["default"].POWER_ATK_STR_RANGE,
                    powerPercentID: n["default"].POWER_ATK_STR_RANGE_PERCENT,
                    skillType: n["default"].SKILL_TYPE_PASSIVE,
                    isAddHand: !1,
                  },
                ]),
                (i = this.getPowerValueCal(i, this.atk_str, l, 0, o)),
                (i = Math.max(0, i)));
              break;
            case _.ModelConst.ATK_AGI_NEARBY:
              if (!y["default"].isPreviewBeta) return 0;
              ((i =
                g.GUtil.intNum(5 * this.get(_.ModelConst.STR)) +
                g.GUtil.intNum(5 * this.get(_.ModelConst.AGI))),
                (o = _.ModelConst.MAX_OTHER_ATTRIBUTE),
                (l = [
                  {
                    powerID: n["default"].POWER_ATK_AGI,
                    powerPercentID: n["default"].POWER_ATK_AGI_PERCENT,
                    skillType: n["default"].SKILL_TYPE_PASSIVE,
                    isAddHand: !0,
                  },
                  {
                    powerID: n["default"].POWER_ATK_AGI_NEARBY,
                    powerPercentID: n["default"].POWER_ATK_AGI_NEARBY_PERCENT,
                    skillType: n["default"].SKILL_TYPE_PASSIVE,
                    isAddHand: !1,
                  },
                ]),
                (i = this.getPowerValueCal(i, this.atk_agi, l, 0, o)),
                (i = Math.max(0, i)));
              break;
            case _.ModelConst.ATK_AGI_RANGE:
              if (!y["default"].isPreviewBeta) return 0;
              ((i =
                g.GUtil.intNum(5 * this.get(_.ModelConst.STR)) +
                g.GUtil.intNum(5 * this.get(_.ModelConst.AGI))),
                (o = _.ModelConst.MAX_OTHER_ATTRIBUTE),
                (l = [
                  {
                    powerID: n["default"].POWER_ATK_AGI,
                    powerPercentID: n["default"].POWER_ATK_AGI_PERCENT,
                    skillType: n["default"].SKILL_TYPE_PASSIVE,
                    isAddHand: !0,
                  },
                  {
                    powerID: n["default"].POWER_ATK_AGI_RANGE,
                    powerPercentID: n["default"].POWER_ATK_AGI_RANGE_PERCENT,
                    skillType: n["default"].SKILL_TYPE_PASSIVE,
                    isAddHand: !1,
                  },
                ]),
                (i = this.getPowerValueCal(i, this.atk_agi, l, 0, o)),
                (i = Math.max(0, i)));
              break;
            case _.ModelConst.DEF_STR:
              ((i = 8 * this.get(_.ModelConst.CON)),
                (i = g.GUtil.intNum(i)),
                null != this.bag &&
                  (i += this.bag.get(r["default"].EQP_DEF_STR)),
                (i = this.getPowerValue(
                  i,
                  this.def_str,
                  n["default"].POWER_DEF_STR,
                  n["default"].POWER_DEF_STR_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  y["default"].isPreviewBeta
                    ? a.Tool.MAX_VALUE_int
                    : _.ModelConst.MAX_DEF,
                )));
              break;
            case _.ModelConst.DEF_STR_RANGE:
              if (!y["default"].isPreviewBeta) return 0;
              ((i = 8 * this.get(_.ModelConst.CON)),
                (i = g.GUtil.intNum(i)),
                null != this.bag &&
                  (i += this.bag.get(r["default"].EQP_DEF_STR)),
                (o = y["default"].isPreviewBeta
                  ? a.Tool.MAX_VALUE_int
                  : _.ModelConst.MAX_DEF),
                (l = [
                  {
                    powerID: n["default"].POWER_DEF_STR,
                    powerPercentID: n["default"].POWER_DEF_STR_PERCENT,
                    skillType: n["default"].SKILL_TYPE_PASSIVE,
                    isAddHand: !0,
                  },
                  {
                    powerID: n["default"].POWER_DEF_STR_RANGE,
                    powerPercentID: n["default"].POWER_DEF_STR_RANGE_PERCENT,
                    skillType: n["default"].SKILL_TYPE_PASSIVE,
                    isAddHand: !1,
                  },
                ]),
                (i = this.getPowerValueCal(i, this.def_str, l, 0, o)),
                (i = Math.max(0, i)));
              break;
            case _.ModelConst.DEF_STR_NEARBY:
              if (!y["default"].isPreviewBeta) return 0;
              ((i = 8 * this.get(_.ModelConst.CON)),
                (i = g.GUtil.intNum(i)),
                null != this.bag &&
                  (i += this.bag.get(r["default"].EQP_DEF_STR)),
                (o = y["default"].isPreviewBeta
                  ? a.Tool.MAX_VALUE_int
                  : _.ModelConst.MAX_DEF),
                (l = [
                  {
                    powerID: n["default"].POWER_DEF_STR,
                    powerPercentID: n["default"].POWER_DEF_STR_PERCENT,
                    skillType: n["default"].SKILL_TYPE_PASSIVE,
                    isAddHand: !0,
                  },
                  {
                    powerID: n["default"].POWER_DEF_STR_NEARBY,
                    powerPercentID: n["default"].POWER_DEF_STR_NEARBY_PERCENT,
                    skillType: n["default"].SKILL_TYPE_PASSIVE,
                    isAddHand: !1,
                  },
                ]),
                (i = this.getPowerValueCal(i, this.def_str, l, 0, o)),
                (i = Math.max(0, i)));
              break;
            case _.ModelConst.DEF_AGI_RANGE:
              if (!y["default"].isPreviewBeta) return 0;
              ((i = 8 * this.get(_.ModelConst.CON)),
                (i = g.GUtil.intNum(i)),
                null != this.bag &&
                  (i += this.bag.get(r["default"].EQP_DEF_AGI)),
                (o = y["default"].isPreviewBeta
                  ? a.Tool.MAX_VALUE_int
                  : _.ModelConst.MAX_DEF),
                (l = [
                  {
                    powerID: n["default"].POWER_DEF_AGI,
                    powerPercentID: n["default"].POWER_DEF_AGI_PERCENT,
                    skillType: n["default"].SKILL_TYPE_PASSIVE,
                    isAddHand: !0,
                  },
                  {
                    powerID: n["default"].POWER_DEF_AGI_RANGE,
                    powerPercentID: n["default"].POWER_DEF_AGI_RANGE_PERCENT,
                    skillType: n["default"].SKILL_TYPE_PASSIVE,
                    isAddHand: !1,
                  },
                ]),
                (i = this.getPowerValueCal(i, this.def_agi, l, 0, o)),
                (i = Math.max(0, i)));
              break;
            case _.ModelConst.DEF_AGI_NEARBY:
              if (!y["default"].isPreviewBeta) return 0;
              ((i = 8 * this.get(_.ModelConst.CON)),
                (i = g.GUtil.intNum(i)),
                null != this.bag &&
                  (i += this.bag.get(r["default"].EQP_DEF_AGI)),
                (o = y["default"].isPreviewBeta
                  ? a.Tool.MAX_VALUE_int
                  : _.ModelConst.MAX_DEF),
                (l = [
                  {
                    powerID: n["default"].POWER_DEF_AGI,
                    powerPercentID: n["default"].POWER_DEF_AGI_PERCENT,
                    skillType: n["default"].SKILL_TYPE_PASSIVE,
                    isAddHand: !0,
                  },
                  {
                    powerID: n["default"].POWER_DEF_AGI_NEARBY,
                    powerPercentID: n["default"].POWER_DEF_AGI_NEARBY_PERCENT,
                    skillType: n["default"].SKILL_TYPE_PASSIVE,
                    isAddHand: !1,
                  },
                ]),
                (i = this.getPowerValueCal(i, this.def_agi, l, 0, o)),
                (i = Math.max(0, i)));
              break;
            case _.ModelConst.DEF_AGI:
              ((i = 8 * this.get(_.ModelConst.CON)),
                (i = g.GUtil.intNum(i)),
                null != this.bag &&
                  (i += this.bag.get(r["default"].EQP_DEF_AGI)),
                (i = this.getPowerValue(
                  i,
                  this.def_agi,
                  n["default"].POWER_DEF_AGI,
                  n["default"].POWER_DEF_AGI_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  y["default"].isPreviewBeta
                    ? a.Tool.MAX_VALUE_int
                    : _.ModelConst.MAX_DEF,
                )));
              break;
            case _.ModelConst.DEF_MAGIC:
              ((i =
                2 *
                (2 * this.get(_.ModelConst.WIS) + this.get(_.ModelConst.ILT))),
                (i = g.GUtil.intNum(i)),
                null != this.bag &&
                  (i += this.bag.get(r["default"].EQP_DEF_MAGIC)),
                (i = this.getPowerValue(
                  i,
                  this.def_magic,
                  n["default"].POWER_DEF_MAGIC,
                  n["default"].POWER_DEF_MAGIC_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  y["default"].isPreviewBeta
                    ? a.Tool.MAX_VALUE_int
                    : _.ModelConst.MAX_DEF,
                )));
              break;
            case _.ModelConst.DODGE:
              ((i =
                (10 *
                  (this.get(_.ModelConst.AGI) + this.get(_.ModelConst.WIS))) /
                25),
                (i = g.GUtil.intNum(i)),
                (i = this.getPowerValue(
                  i,
                  this.dodge,
                  n["default"].POWER_DODGE,
                  n["default"].POWER_DODGE_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.HIT_RATE:
              if (null != this.bag) {
                ((i = this.bag.getForPos(
                  r["default"].EQP_HITRATE,
                  s["default"].WEAPON_LEFT_POS,
                )),
                  0 > i && (i = 0));
                var m = this.bag.getForPos(
                  r["default"].EQP_HITRATE,
                  s["default"].WEAPON_RIGHT_POS,
                );
                (m > 0 && (i > 0 ? i > m && (i = m) : (i = m)),
                  (i += g.GUtil.intNum(this.get(_.ModelConst.AGI) / 5)));
              }
              i = this.getPowerValue(
                i,
                this.hitrate,
                n["default"].POWER_HITRATE,
                n["default"].POWER_HITRATE_PERCENT,
                n["default"].SKILL_TYPE_PASSIVE,
                0,
                _.ModelConst.MAX_BASE_ATTRIBUTE,
              );
              break;
            case _.ModelConst.HIT_MAGIC:
              ((i = 100),
                (i = this.getPowerValue(
                  i,
                  this.hitMagic,
                  n["default"].POWER_MAGIC_HITRATE,
                  n["default"].POWER_MAGIC_HITRATE_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  _.ModelConst.MIN_HIT_MAGIC,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.CRITICAL:
              ((i = 0),
                (i = this.getPowerValue(
                  i,
                  this.critical,
                  n["default"].POWER_CRITICAL,
                  n["default"].POWER_CRITICAL_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.FORCE_HIT:
              ((i = _.ModelConst.MIN_FORCE_HITRATE),
                (i = this.getPowerValue(
                  i,
                  this.forceHit,
                  n["default"].POWER_HIT_FORCE,
                  n["default"].POWER_HIT_FORCE_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_FORCE_RATE,
                )));
              break;
            case _.ModelConst.EXP_UP:
              i = this.exp_up;
              break;
            case _.ModelConst.WIL:
              ((i =
                (3 * this.get(_.ModelConst.WIS) + this.get(_.ModelConst.ILT)) /
                10),
                (i = g.GUtil.intNum(i)),
                (i = this.getPowerValue(
                  i,
                  this.wil,
                  n["default"].POWER_WIL,
                  n["default"].POWER_WIL_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.TOUGH:
              ((i =
                (2 * this.get(_.ModelConst.CON) + this.get(_.ModelConst.STR)) /
                10),
                (i = g.GUtil.intNum(i)),
                (i = this.getPowerValue(
                  i,
                  this.tough,
                  n["default"].POWER_TOUGH,
                  n["default"].POWER_TOUGH_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.BLOCK:
              ((i = this.get(_.ModelConst.AGI) / 5),
                (i = g.GUtil.intNum(i)),
                (i = this.getPowerValue(
                  i,
                  this.block,
                  n["default"].POWER_BLOCK,
                  n["default"].POWER_BLOCK_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.BRK_ARMOR:
              ((i =
                this.get(_.ModelConst.AGI) + 3 * this.get(_.ModelConst.STR)),
                (i = g.GUtil.intNum(i)),
                (i = this.getPowerValue(
                  i,
                  this.brkArmor,
                  n["default"].POWER_PENETRATION,
                  n["default"].POWER_PENETRATION_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  y["default"].isPreviewBeta
                    ? a.Tool.MAX_VALUE_int
                    : _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.MAGIC_PENETRATION:
              ((i =
                this.get(_.ModelConst.WIS) + 2 * this.get(_.ModelConst.ILT)),
                (i = g.GUtil.intNum(i)),
                (i = this.getPowerValue(
                  i,
                  this.magic_penetration,
                  n["default"].POWER_MAGIC_PENETRATION,
                  n["default"].POWER_MAGIC_PENETRATION_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  y["default"].isPreviewBeta
                    ? a.Tool.MAX_VALUE_int
                    : _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.INSIGHT:
              ((i =
                (2 * this.get(_.ModelConst.WIS) + this.get(_.ModelConst.ILT)) /
                10),
                (i = g.GUtil.intNum(i)),
                (i = this.getPowerValue(
                  i,
                  this.insight,
                  n["default"].POWER_INSIGHT,
                  n["default"].POWER_INSIGHT_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.DEF_FIELD:
              ((i =
                2 * this.get(_.ModelConst.ILT) +
                3 * this.get(_.ModelConst.WIS)),
                (i = g.GUtil.intNum(i)),
                (i = this.getPowerValue(
                  i,
                  this.def_field,
                  n["default"].POWER_DEF_FIELD,
                  n["default"].POWER_DEF_FIELD_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.BACK:
              ((i = 0),
                (i = this.getPowerValue(
                  i,
                  this.back,
                  n["default"].POWER_BACK,
                  n["default"].POWER_BACK_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.MAGIC_BACK:
              ((i = 0),
                (i = this.getPowerValue(
                  i,
                  this.magic_back,
                  n["default"].POWER_MAGIC_BACK,
                  n["default"].POWER_MAGIC_BACK_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.LIFE_ABSORPTION:
              ((i = 0),
                (i = this.getPowerValue(
                  i,
                  this.life_absorption,
                  n["default"].POWER_LIFE_ABSORPTION,
                  n["default"].POWER_LIFE_ABSORPTION_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_OTHER_PROBABILITY,
                )));
              break;
            case _.ModelConst.MANA_ABSORPTION:
              ((i = 0),
                (i = this.getPowerValue(
                  i,
                  this.mana_absorption,
                  n["default"].POWER_MANA_ABSORPTION,
                  n["default"].POWER_MANA_ABSORPTION_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_OTHER_PROBABILITY,
                )));
              break;
            case _.ModelConst.HEAL_RECOVERY:
              ((i = 0),
                (i = this.getPowerValue(
                  i,
                  this.heal_recovery,
                  n["default"].POWER_HEAL_RECOVERY,
                  n["default"].POWER_HEAL_RECOVERY_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.MANA_RECOVERY:
              ((i = 0),
                (i = this.getPowerValue(
                  i,
                  this.mana_recovery,
                  n["default"].POWER_MANA_RECOVERY,
                  n["default"].POWER_MANA_RECOVERY_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.IGNORE_BACK:
              ((i = this.ignore_back),
                (i = this.getPowerValue(
                  i,
                  0,
                  n["default"].POWER_IGNORE_BACK,
                  0,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.IGNORE_MAGIC_BACK:
              ((i = this.ignore_magic_back),
                (i = this.getPowerValue(
                  i,
                  0,
                  n["default"].POWER_IGNORE_MAGIC_BACK,
                  0,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.IGNORE_BLOCK:
              ((i = this.ignore_block),
                (i = this.getPowerValue(
                  i,
                  0,
                  n["default"].POWER_IGNORE_BLOCK,
                  0,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.IGNORE_INSIGHT:
              ((i = this.ignore_insight),
                (i = this.getPowerValue(
                  i,
                  0,
                  n["default"].POWER_IGNORE_INSIGHT,
                  0,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.IGNORE_WIL:
              ((i = this.ignore_wil),
                (i = this.getPowerValue(
                  i,
                  0,
                  n["default"].POWER_IGNORE_WIL,
                  0,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.IGNORE_TOUCH:
              ((i = this.ignore_touch),
                (i = this.getPowerValue(
                  i,
                  0,
                  n["default"].POWER_IGNORE_TOUCH,
                  0,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_BASE_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.IGNORE_CRITICAL:
              ((i = this.ignoreCritical),
                (i = this.getPowerValue(
                  i,
                  0,
                  n["default"].POWER_IGNORE_CRITICAL,
                  n["default"].POWER_IGNORE_CRITICAL_PERCENT,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_OTHER_ATTRIBUTE,
                )));
              break;
            case _.ModelConst.KEEPOUT_ATK_TIME:
              ((i = 0),
                (i = this.getPowerValue(
                  i,
                  this.keepout_atk_time,
                  n["default"].POWER_KEEPOUT_ATK_TIME,
                  0,
                  n["default"].SKILL_TYPE_PASSIVE,
                  0,
                  _.ModelConst.MAX_KEEPOUT_ATK_TIME,
                )));
              break;
            case _.ModelConst.CRITICAL_DAMAGE:
              i = this.getPowerValue(
                0,
                this.criticalDmg,
                n["default"].POWER_CRITICAL_DAMAGE,
                n["default"].POWER_CRITICAL_DAMAGE_PERCENT,
                n["default"].SKILL_TYPE_PASSIVE,
                0,
                _.ModelConst.MAX_OTHER_ATTRIBUTE,
              );
              break;
            case _.ModelConst.RECOVERY:
              i = this.recovery;
              break;
            case _.ModelConst.ARGO:
              i = this.argo;
              break;
            case _.ModelConst.BACK_MAX:
              i = 70;
              break;
            case n["default"].SKYARENA:
              i = this.skyarenaPoint;
              break;
            case n["default"].ARENA:
              i = this.arenaPoint;
              break;
            case n["default"].SCORE_TOWER:
              i = this.towerPoint;
              break;
            case n["default"].RICHMAN_SCORE:
              i = this._richManPoint;
              break;
            case n["default"].TYPE_DEFEND_SCORE:
              i = this.plaPoint;
              break;
            case n["default"].TYPE_CAMPWAR_SCORE:
              i = this.campWarPoint;
              break;
            default:
              var A = void 0,
                C = P["default"].getSpecialIconData(t);
              (C && ((i = C.grade), (A = this.getAttribute(t))),
                (i = null != A ? A : e.prototype.get.call(this, t)));
          }
          return g.GUtil.intNum(i);
        }),
        (t.prototype.getAttribute = function (e) {
          return this._obj ? this._obj[e] : null;
        }),
        (t.prototype.setAttribute = function (e, t) {
          (this._obj || (this._obj = {}), (this._obj[e] = t));
        }),
        (t.prototype.getBaseValue = function (e, t, i, o, n, r) {
          var s = 0 | e;
          s += this.getSkillPowerValue(o, t);
          var l = this.getSkillPowerValue(o, i);
          ((l += this.getBagEquipPowerValue(i)),
            (s += this.getPowerValueByBuffer(t)),
            (l += this.getPowerValueByBuffer(i)));
          var u = this.formationSkill;
          null != u && ((s += u.getPowerValue(t)), (l += u.getPowerValue(i)));
          var _ = this.playerTurnMonster;
          return (
            null != _ && ((s += _.getPowerValue(t)), (l += _.getPowerValue(i))),
            (s += g.GUtil.intNum((s * l) / 100)),
            (s += this.getBagEquipPowerValue(t)),
            (s = a.Tool.sumValue(s, 0, n, r)),
            0 | s
          );
        }),
        (t.prototype.getSkillPowerValue = function (e, t) {
          if (0 >= t) return 0;
          var i = 0;
          if (
            ((i = this.getPower(t)),
            null == this.skillList || 0 == this.skillList.length)
          )
            return i;
          for (var o = null, n = 0; n < this.skillList.length; n++)
            ((o = this.skillList[n]),
              null != o && o.type == e && (i += o.getPowerValue(t)));
          return 0 | i;
        }),
        (t.prototype.addWeaponSkillDamageOrDur = function (e, t) {
          if (0 == e) return 0;
          var i = null;
          if ((null != this.bag && (i = this.bag.getItem(t)), null == i))
            return e;
          var o = 0;
          switch (i.type) {
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_HEAVY:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_HEAVY:
              ((o = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_HEAVY_PERCENT,
              )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_HEAVY_PERCENT,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_STAFF:
              ((o = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_STAFF_PERCENT,
              )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_STAFF_PERCENT,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_BALL:
              ((o = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_BALL_PERCENT,
              )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_BALL_PERCENT,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_LANCE:
              ((o = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_LANCE_PERCENT,
              )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_LANCE_PERCENT,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_BOW:
              ((o = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_ARROW_DAMAGE_PERCENT,
              )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_ARROW_DAMAGE_PERCENT,
                )),
                (o += this.getSkillPowerValue(
                  n["default"].SKILL_TYPE_PASSIVE,
                  n["default"].POWER_BOW_PERCENT,
                )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_BOW_PERCENT,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_GUN:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_GUN:
              ((o = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_GUN_PERCENT,
              )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_GUN_PERCENT,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_HAMMER:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_HAMMER:
              ((o = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_HAMMER_PERCENT,
              )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_HAMMER_PERCENT,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_FAN:
              ((o = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_FAN_PERCENT,
              )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_FAN_PERCENT,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD:
              ((o = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_SWORD_L_DAMAGE_PERCENT,
              )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_SWORD_L_DAMAGE_PERCENT,
                  !0,
                )),
                (o += this.getSkillPowerValue(
                  n["default"].SKILL_TYPE_PASSIVE,
                  n["default"].POWER_SWORD_PERCENT,
                )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_SWORD_PERCENT,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_SWORD:
              ((o = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_SWORD_H_DAMAGE_PERCENT,
              )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_SWORD_H_DAMAGE_PERCENT,
                )),
                (o += this.getSkillPowerValue(
                  n["default"].SKILL_TYPE_PASSIVE,
                  n["default"].POWER_SWORD_PERCENT,
                )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_SWORD_PERCENT,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_BLADE:
              ((o = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_BLADE_L_DAMAGE_PERCENT,
              )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_BLADE_L_DAMAGE_PERCENT,
                )),
                (o += this.getSkillPowerValue(
                  n["default"].SKILL_TYPE_PASSIVE,
                  n["default"].POWER_BLADE_PERCENT,
                )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_BLADE_PERCENT,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_BLADE:
              ((o = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_BLADE_H_DAMAGE_PERCENT,
              )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_BLADE_H_DAMAGE_PERCENT,
                )),
                (o += this.getSkillPowerValue(
                  n["default"].SKILL_TYPE_PASSIVE,
                  n["default"].POWER_BLADE_PERCENT,
                )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_BLADE_PERCENT,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW:
              ((o = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_CROSSBOW_H_DAMAGE_PERCENT,
              )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_CROSSBOW_H_DAMAGE_PERCENT,
                )),
                (o += this.getSkillPowerValue(
                  n["default"].SKILL_TYPE_PASSIVE,
                  n["default"].POWER_BOW_PERCENT,
                )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_BOW_PERCENT,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_CROSSBOW:
              ((o = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_CROSSBOW_L_DAMAGE_PERCENT,
              )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_CROSSBOW_L_DAMAGE_PERCENT,
                )),
                (o += this.getSkillPowerValue(
                  n["default"].SKILL_TYPE_PASSIVE,
                  n["default"].POWER_BOW_PERCENT,
                )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_BOW_PERCENT,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND:
              ((o = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_HAND_ITEM_PERCENT,
              )),
                (o += this.getBagEquipPowerValue(
                  n["default"].POWER_HAND_ITEM_PERCENT,
                )));
              break;
            default:
              o = 0;
          }
          return (
            (o += this.getSkillPowerValue(
              n["default"].SKILL_TYPE_PASSIVE,
              n["default"].POWER_ALL_PERCENT,
            )),
            (o += this.getBagEquipPowerValue(n["default"].POWER_ALL_PERCENT)),
            0 == o ? e : e + g.GUtil.intNum((e * o) / 100)
          );
        }),
        (t.prototype.addWeaponSkillAtkTime = function (e, t) {
          var i = 0;
          switch (t) {
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD:
              ((i = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_SWORD_L_ATK_TIME,
              )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_SWORD_L_ATK_TIME,
                  !0,
                )),
                (i += this.getSkillPowerValue(
                  n["default"].SKILL_TYPE_PASSIVE,
                  n["default"].POWER_SWORD_ATK_TIME,
                )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_SWORD_ATK_TIME,
                  !0,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_SWORD:
              ((i = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_SWORD_H_ATK_TIME,
              )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_SWORD_H_ATK_TIME,
                  !0,
                )),
                (i += this.getSkillPowerValue(
                  n["default"].SKILL_TYPE_PASSIVE,
                  n["default"].POWER_SWORD_ATK_TIME,
                )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_SWORD_ATK_TIME,
                  !0,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_BLADE:
              ((i = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_BLADE_L_ATK_TIME,
              )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_BLADE_L_ATK_TIME,
                  !0,
                )),
                (i += this.getSkillPowerValue(
                  n["default"].SKILL_TYPE_PASSIVE,
                  n["default"].POWER_BLADE_ATK_TIME,
                )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_BLADE_ATK_TIME,
                  !0,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_BLADE:
              ((i = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_BLADE_H_ATK_TIME,
              )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_BLADE_H_ATK_TIME,
                  !0,
                )),
                (i += this.getSkillPowerValue(
                  n["default"].SKILL_TYPE_PASSIVE,
                  n["default"].POWER_BLADE_ATK_TIME,
                )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_BLADE_ATK_TIME,
                  !0,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_HEAVY:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_HEAVY:
              ((i = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_HEAVY_ATK_TIME,
              )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_HEAVY_ATK_TIME,
                  !0,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_STAFF:
              ((i = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_STAFF_ATK_TIME,
              )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_STAFF_ATK_TIME,
                  !0,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_BALL:
              ((i = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_BALL_ATK_TIME,
              )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_BALL_ATK_TIME,
                  !0,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_LANCE:
              ((i = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_LANCE_ATK_TIME,
              )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_LANCE_ATK_TIME,
                  !0,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW:
              ((i = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_CROSSBOW_L_ATK_TIME,
              )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_CROSSBOW_L_ATK_TIME,
                  !0,
                )),
                (i += this.getSkillPowerValue(
                  n["default"].SKILL_TYPE_PASSIVE,
                  n["default"].POWER_BOW_ATK_TIME,
                )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_BOW_ATK_TIME,
                  !0,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_CROSSBOW:
              ((i = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_CROSSBOW_H_ATK_TIME,
              )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_CROSSBOW_H_ATK_TIME,
                  !0,
                )),
                (i += this.getSkillPowerValue(
                  n["default"].SKILL_TYPE_PASSIVE,
                  n["default"].POWER_BOW_ATK_TIME,
                )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_BOW_ATK_TIME,
                  !0,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_BOW:
              ((i = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_ARROW_ATK_TIME,
              )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_ARROW_ATK_TIME,
                  !0,
                )),
                (i += this.getSkillPowerValue(
                  n["default"].SKILL_TYPE_PASSIVE,
                  n["default"].POWER_BOW_ATK_TIME,
                )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_BOW_ATK_TIME,
                  !0,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND:
              ((i = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_HAND_ITEM_ATK_TIME,
              )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_HAND_ITEM_ATK_TIME,
                  !0,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_GUN:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_GUN:
              ((i = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_GUN_ATK_TIME,
              )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_GUN_ATK_TIME,
                  !0,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_HAMMER:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_HAMMER:
              ((i = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_HAMMER_ATK_TIME,
              )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_HAMMER_ATK_TIME,
                  !0,
                )));
              break;
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_FAN:
              ((i = this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_FAN_ATK_TIME,
              )),
                (i += this.getBagEquipPowerValue(
                  n["default"].POWER_FAN_ATK_TIME,
                  !0,
                )));
              break;
            default:
              i = 0;
          }
          return (
            (i += this.getSkillPowerValue(
              n["default"].SKILL_TYPE_PASSIVE,
              n["default"].POWER_ALL_ATK_TIME,
            )),
            (i += this.getBagEquipPowerValue(
              n["default"].POWER_ALL_ATK_TIME,
              !0,
            )),
            e + i
          );
        }),
        (t.prototype.getEquipWeaponType = function () {
          if (null == this.bag) return n["default"].BACK_ERROR_NULL_HAND;
          for (
            var e = [
                s["default"].WEAPON_LEFT_POS,
                s["default"].WEAPON_RIGHT_POS,
              ],
              t = 0;
            t < e.length;
            t++
          ) {
            var i = this.bag.getItem(e[t]);
            if (
              null != i &&
              !(i.durability <= 0) &&
              i.type != n["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND
            )
              return i.type;
          }
          return n["default"].BACK_ERROR_NULL_HAND;
        }),
        (t.prototype.getAttackType = function (e) {
          return null != e && e != l["default"].DUMMY_SKILL
            ? e.get(l["default"].SKILL_ATK_TYPE)
            : this.get(_.ModelConst.ATK_TYPE);
        }),
        (t.prototype.getBagEquipPowerValue = function (e, i) {
          if ((void 0 === i && (i = !1), null == this.bag)) return 0;
          var o = this.bag.getEquipPowerValue(e);
          if (null != this.itemSetData)
            for (
              var n = void 0,
                a = void 0,
                r = void 0,
                s = void 0,
                l = void 0,
                u = 0;
              u < this.itemSetData.length;
            )
              ((n = this.itemSetData[u++]),
                (a = this.itemSetData[u++]),
                (r = this.itemSetData[u++]),
                a == e &&
                  ((s = t.getItemSetID(n)),
                  (l = t.getItemSetNum(n)),
                  this.bag.getEquipItemSetNum(s) < l || (o += r)));
          return (1 == i && (o += this.getPowerValueByBuffer(e)), 0 | o);
        }),
        (t.prototype.getPower = function (e) {
          var t = 0;
          return (
            this.type == d.MODEL_TYPE.TYPE_PLAYER &&
              ((t += 0 | C.RoleGodData.getPower(this.isMyPlayer, e)),
              (t +=
                0 | R.BookGroupModel.getBookGroupPower(this.isMyPlayer, e))),
            t
          );
        }),
        (t.prototype.getPowerValue = function (e, t, i, o, r, s, l, u) {
          void 0 === u && (u = !1);
          var _ = g.GUtil.intNum(e);
          _ += this.getSkillPowerValue(r, i);
          var d = this.getSkillPowerValue(r, o);
          ((_ += this.getPowerValueByBuffer(i)),
            (d += this.getPowerValueByBuffer(o)),
            null != this.bag &&
              ((_ += this.getBagEquipPowerValue(i)),
              (d += this.getBagEquipPowerValue(o))),
            null != this.formationSkill &&
              ((_ += this.formationSkill.getPowerValue(i)),
              (d += this.formationSkill.getPowerValue(o))));
          var p = this.playerTurnMonster;
          return (
            null != p && ((_ += p.getPowerValue(i)), (d += p.getPowerValue(o))),
            u &&
              this.getEquipWeaponType() == n["default"].BACK_ERROR_NULL_HAND &&
              (null != this.bag &&
                (d += this.getBagEquipPowerValue(
                  n["default"].POWER_HAND_PERCENT,
                )),
              (d += this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_HAND_PERCENT,
              ))),
            (_ += g.GUtil.intNum((_ * d) / 100)),
            (_ = a.Tool.sumValue(_, t, s, l)),
            g.GUtil.intNum(_)
          );
        }),
        (t.prototype.getPowerValueCal = function (e, t, i, o, r) {
          for (var s = g.GUtil.intNum(e), l = 0, u = 0; u < i.length; u++) {
            var _ = i[u],
              d = _.skillType,
              p = _.powerID,
              c = _.powerPercentID;
            ((s += this.getSkillPowerValue(d, p)),
              (l += this.getSkillPowerValue(d, c)),
              (s += this.getPowerValueByBuffer(p)),
              (l += this.getPowerValueByBuffer(c)),
              null != this.bag &&
                ((s += this.getBagEquipPowerValue(p)),
                (l += this.getBagEquipPowerValue(c))),
              null != this.formationSkill &&
                ((s += this.formationSkill.getPowerValue(p)),
                (l += this.formationSkill.getPowerValue(c))));
            var h = this.playerTurnMonster;
            null != h && ((s += h.getPowerValue(p)), (l += h.getPowerValue(c)));
            var f = _.isAddHand;
            f &&
              this.getEquipWeaponType() == n["default"].BACK_ERROR_NULL_HAND &&
              (null != this.bag &&
                (l += this.getBagEquipPowerValue(
                  n["default"].POWER_HAND_PERCENT,
                )),
              (l += this.getSkillPowerValue(
                n["default"].SKILL_TYPE_PASSIVE,
                n["default"].POWER_HAND_PERCENT,
              )));
          }
          return (
            (s += g.GUtil.intNum((s * l) / 100)),
            (s = a.Tool.sumValue(s, t, o, r)),
            g.GUtil.intNum(s)
          );
        }),
        (t.prototype.getPowerValueByBuffer = function (e) {
          var t = 0;
          if (
            (this.power == e && (t += this.powerValue),
            this.titlePower1 == e && (t += this.titlePowerValue1),
            this.titlePower2 == e && (t += this.titlePowerValue2),
            this.fightPowerList)
          )
            for (var i = 0; i < this.fightPowerList.length; i++) {
              var o = this.fightPowerList[i];
              o[0] == e && (t += o[1]);
            }
          return (t += this.getCountryBuffer(e));
        }),
        (t.prototype.updateAndRefreshIcon = function () {
          (this.clearMemberHideStatus(),
            this.updateIcon(),
            this.refreshWorldSprite());
        }),
        (t.setIconValue = function (e, t, i, o, n, a, r) {
          var s = r ? t.high : t.low,
            l = (s >> i) & o;
          return (
            l > 0 &&
              (r
                ? ((e.high &= ~(o << i)), (e.high |= (l & o) << i))
                : ((e.low &= ~(o << i)), (e.low |= (l & o) << i)),
              n >= 0 &&
                ((l = (t.low >> n) & a),
                (e.low &= ~(a << n)),
                (e.low |= (l & a) << n))),
            e
          );
        }),
        Object.defineProperty(t.prototype, "illusionInfo", {
          get: function () {
            return this._illusionInfo;
          },
          set: function (e) {
            this._illusionInfo = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getIllusionItem = function (e, t) {
          if (t.id != e) {
            var i = this.putIllusion[e];
            return 0 == i
              ? void (t.itemInfo = null)
              : t.itemInfo
                ? t.itemInfo
                : void 0;
          }
        }),
        (t.prototype.updateIconByFashion = function () {
          if (
            ((this.icon3.low &= ~(
              _.ModelConst.LEN_FASH_ADD << _.ModelConst.OFFSET_FASH_ADD
            )),
            null != this.bag)
          ) {
            var e = this.bag.getItem(s["default"].ARMOR_FASHION_POS);
            if (null != e) {
              if (e.illusionItemId) {
                var i = this.getIllusionItem(e.illusionItemId, e);
                i && (e = i);
              }
              if (1 != e.isTimeItem() || 1 != e.isExpired()) {
                var o = e.fashIcon1,
                  n = e.fashIcon2,
                  a = e.fashIcon3,
                  r = _.ModelConst;
                if (o && !o.isZero()) {
                  var l = (o.low >> r.OFFSET_HAIR_STYLE) & r.LEN_HAIR_STYLE,
                    u = (o.high >> r.OFFSET_HAIR_ADD) & r.LEN_HAIR_ADD;
                  (l > 0 || u > 0) &&
                    ((this.icon1.low &= ~(
                      r.LEN_HAIR_STYLE << r.OFFSET_HAIR_STYLE
                    )),
                    (this.icon1.low &= ~(
                      r.LEN_HAIR_COLOR << r.OFFSET_HAIR_COLOR
                    )),
                    (this.icon1.high &= ~(
                      r.LEN_HAIR_ADD << r.OFFSET_HAIR_ADD
                    )));
                  var d = (o.low >> r.OFFSET_FACE_STYLE) & r.LEN_FACE_STYLE,
                    p = (o.high >> r.OFFSET_FACE_ADD) & r.LEN_FACE_ADD;
                  (d > 0 || p > 0) &&
                    ((this.icon1.low &= ~(
                      r.LEN_FACE_STYLE << r.OFFSET_FACE_STYLE
                    )),
                    (this.icon1.high &= ~(
                      r.LEN_FACE_ADD << r.OFFSET_FACE_ADD
                    )));
                  var c = (o.low >> r.OFFSET_HAND_STYLE) & r.LEN_HAND_STYLE,
                    h = (o.high >> r.OFFSET_HAND_ADD) & r.LEN_HAND_ADD;
                  (c > 0 || h > 0) &&
                    ((this.icon1.low &= ~(
                      r.LEN_HAND_STYLE << r.OFFSET_HAND_STYLE
                    )),
                    (this.icon1.low &= ~(
                      r.LEN_HAND_COLOR << r.OFFSET_HAND_COLOR
                    )),
                    (this.icon1.high &= ~(
                      r.LEN_HAND_ADD << r.OFFSET_HAND_ADD
                    )));
                  var f = (o.low >> r.OFFSET_FEET_STYLE) & r.LEN_FEET_STYLE,
                    T = (o.high >> r.OFFSET_FEET_ADD) & r.LEN_FEET_ADD;
                  (f > 0 || T > 0) &&
                    ((this.icon1.low &= ~(
                      r.LEN_FEET_STYLE << r.OFFSET_FEET_STYLE
                    )),
                    (this.icon1.low &= ~(
                      r.LEN_FEET_COLOR << r.OFFSET_FEET_COLOR
                    )),
                    (this.icon1.high &= ~(
                      r.LEN_FEET_ADD << r.OFFSET_FEET_ADD
                    )));
                  var E = (o.low >> r.OFFSET_HELMET_STYLE) & r.LEN_HELMET_STYLE,
                    y = (o.high >> r.OFFSET_HELMET_ADD) & r.LEN_HELMET_ADD;
                  ((E > 0 || y > 0) &&
                    ((this.icon1.low &= ~(
                      r.LEN_HELMET_STYLE << r.OFFSET_HELMET_STYLE
                    )),
                    (this.icon1.low &= ~(
                      r.LEN_HELMET_COLOR << r.OFFSET_HELMET_COLOR
                    )),
                    (this.icon1.high &= ~(
                      r.LEN_HELMET_ADD << r.OFFSET_HELMET_ADD
                    ))),
                    (this.icon1 = t.setIconValue(
                      this.icon1,
                      o,
                      _.ModelConst.OFFSET_HAIR_STYLE,
                      _.ModelConst.LEN_HAIR_STYLE,
                      _.ModelConst.OFFSET_HAIR_COLOR,
                      _.ModelConst.LEN_HAIR_COLOR,
                    )),
                    (this.icon1 = t.setIconValue(
                      this.icon1,
                      o,
                      _.ModelConst.OFFSET_HAIR_ADD,
                      _.ModelConst.LEN_HAIR_ADD,
                      _.ModelConst.OFFSET_HAIR_COLOR,
                      _.ModelConst.LEN_HAIR_COLOR,
                      !0,
                    )),
                    (this.icon1 = t.setIconValue(
                      this.icon1,
                      o,
                      _.ModelConst.OFFSET_FACE_STYLE,
                      _.ModelConst.LEN_FACE_STYLE,
                      -1,
                      -1,
                    )),
                    (this.icon1 = t.setIconValue(
                      this.icon1,
                      o,
                      _.ModelConst.OFFSET_FACE_ADD,
                      _.ModelConst.LEN_FACE_ADD,
                      -1,
                      -1,
                      !0,
                    )),
                    (this.icon1 = t.setIconValue(
                      this.icon1,
                      o,
                      _.ModelConst.OFFSET_HAND_STYLE,
                      _.ModelConst.LEN_HAND_STYLE,
                      _.ModelConst.OFFSET_HAND_COLOR,
                      _.ModelConst.LEN_HAND_COLOR,
                    )),
                    (this.icon1 = t.setIconValue(
                      this.icon1,
                      o,
                      _.ModelConst.OFFSET_HAND_ADD,
                      _.ModelConst.LEN_HAND_ADD,
                      _.ModelConst.OFFSET_HAND_COLOR,
                      _.ModelConst.LEN_HAND_COLOR,
                      !0,
                    )),
                    (this.icon1 = t.setIconValue(
                      this.icon1,
                      o,
                      _.ModelConst.OFFSET_FEET_STYLE,
                      _.ModelConst.LEN_FEET_STYLE,
                      _.ModelConst.OFFSET_FEET_COLOR,
                      _.ModelConst.LEN_FEET_COLOR,
                    )),
                    (this.icon1 = t.setIconValue(
                      this.icon1,
                      o,
                      _.ModelConst.OFFSET_FEET_ADD,
                      _.ModelConst.LEN_FEET_ADD,
                      _.ModelConst.OFFSET_FEET_COLOR,
                      _.ModelConst.LEN_FEET_COLOR,
                      !0,
                    )),
                    (this.icon1 = t.setIconValue(
                      this.icon1,
                      o,
                      _.ModelConst.OFFSET_HELMET_STYLE,
                      _.ModelConst.LEN_HELMET_STYLE,
                      _.ModelConst.OFFSET_HELMET_COLOR,
                      _.ModelConst.LEN_HELMET_COLOR,
                    )),
                    (this.icon1 = t.setIconValue(
                      this.icon1,
                      o,
                      _.ModelConst.OFFSET_HELMET_ADD,
                      _.ModelConst.LEN_HELMET_ADD,
                      _.ModelConst.OFFSET_HELMET_COLOR,
                      _.ModelConst.LEN_HELMET_COLOR,
                      !0,
                    )));
                }
                if (n && !n.isZero()) {
                  var g =
                      (n.low >> _.ModelConst.OFFSET_SHOULDER_STYLE) &
                      _.ModelConst.LEN_SHOULDER_STYLE,
                    v =
                      (n.low >> _.ModelConst.OFFSET_SHOULDER_ADD) &
                      _.ModelConst.LEN_SHOULDER_ADD,
                    S =
                      (n.high >> _.ModelConst.OFFSET_SHOULDER_ADD_2) &
                      _.ModelConst.LEN_SHOULDER_ADD_2;
                  ((g > 0 || v > 0 || S > 0) &&
                    ((this.icon2.low &= ~(
                      _.ModelConst.LEN_SHOULDER_STYLE <<
                      _.ModelConst.OFFSET_SHOULDER_STYLE
                    )),
                    (this.icon2.low &= ~(
                      _.ModelConst.LEN_SHOULDER_COLOR <<
                      _.ModelConst.OFFSET_SHOULDER_COLOR
                    )),
                    (this.icon2.low &= ~(
                      _.ModelConst.LEN_SHOULDER_ADD <<
                      _.ModelConst.OFFSET_SHOULDER_ADD
                    )),
                    (this.icon2.high &= ~(
                      _.ModelConst.LEN_SHOULDER_ADD_2 <<
                      _.ModelConst.OFFSET_SHOULDER_ADD_2
                    ))),
                    (this.icon2 = t.setIconValue(
                      this.icon2,
                      n,
                      _.ModelConst.OFFSET_SHOULDER_STYLE,
                      _.ModelConst.LEN_SHOULDER_STYLE,
                      _.ModelConst.OFFSET_SHOULDER_COLOR,
                      _.ModelConst.LEN_SHOULDER_COLOR,
                    )),
                    (this.icon2 = t.setIconValue(
                      this.icon2,
                      n,
                      _.ModelConst.OFFSET_SHOULDER_ADD,
                      _.ModelConst.LEN_SHOULDER_ADD,
                      -1,
                      -1,
                    )),
                    (this.icon2 = t.setIconValue(
                      this.icon2,
                      n,
                      _.ModelConst.OFFSET_SHOULDER_ADD_2,
                      _.ModelConst.LEN_SHOULDER_ADD_2,
                      -1,
                      -1,
                      !0,
                    )));
                  var I =
                      (n.low >> _.ModelConst.OFFSET_LWEAPON_STYLE) &
                      _.ModelConst.LEN_LWEAPON_STYLE,
                    m =
                      (n.high >> _.ModelConst.OFFSET_LWEAPON_ADD) &
                      _.ModelConst.LEN_LWEAPON_ADD,
                    A =
                      (n.low >> _.ModelConst.OFFSET_RWEAPON_STYLE) &
                      _.ModelConst.LEN_RWEAPON_STYLE,
                    C =
                      (n.high >> _.ModelConst.OFFSET_RWEAPON_ADD) &
                      _.ModelConst.LEN_RWEAPON_ADD;
                  ((I > 0 || A > 0 || m > 0 || C > 0) &&
                    ((this.icon2.low &= ~(
                      _.ModelConst.LEN_LWEAPON_STYLE <<
                      _.ModelConst.OFFSET_LWEAPON_STYLE
                    )),
                    (this.icon2.high &= ~(
                      _.ModelConst.LEN_LWEAPON_ADD <<
                      _.ModelConst.OFFSET_LWEAPON_ADD
                    )),
                    (this.icon2.low &= ~(
                      _.ModelConst.LEN_LWEAPON_COLOR <<
                      _.ModelConst.OFFSET_LWEAPON_COLOR
                    )),
                    (this.icon2.low &= ~(
                      _.ModelConst.LEN_RWEAPON_STYLE <<
                      _.ModelConst.OFFSET_RWEAPON_STYLE
                    )),
                    (this.icon2.high &= ~(
                      _.ModelConst.LEN_RWEAPON_ADD <<
                      _.ModelConst.OFFSET_RWEAPON_ADD
                    )),
                    (this.icon2.low &= ~(
                      _.ModelConst.LEN_RWEAPON_COLOR <<
                      _.ModelConst.OFFSET_RWEAPON_COLOR
                    ))),
                    (this.icon2 = t.setIconValue(
                      this.icon2,
                      n,
                      _.ModelConst.OFFSET_LWEAPON_STYLE,
                      _.ModelConst.LEN_LWEAPON_STYLE,
                      _.ModelConst.OFFSET_LWEAPON_COLOR,
                      _.ModelConst.LEN_LWEAPON_COLOR,
                    )),
                    (this.icon2 = t.setIconValue(
                      this.icon2,
                      n,
                      _.ModelConst.OFFSET_LWEAPON_ADD,
                      _.ModelConst.LEN_LWEAPON_ADD,
                      _.ModelConst.OFFSET_LWEAPON_COLOR,
                      _.ModelConst.LEN_LWEAPON_COLOR,
                      !0,
                    )),
                    (this.icon2 = t.setIconValue(
                      this.icon2,
                      n,
                      _.ModelConst.OFFSET_RWEAPON_STYLE,
                      _.ModelConst.LEN_RWEAPON_STYLE,
                      _.ModelConst.OFFSET_RWEAPON_COLOR,
                      _.ModelConst.LEN_RWEAPON_COLOR,
                    )),
                    (this.icon2 = t.setIconValue(
                      this.icon2,
                      n,
                      _.ModelConst.OFFSET_RWEAPON_ADD,
                      _.ModelConst.LEN_RWEAPON_ADD,
                      _.ModelConst.OFFSET_RWEAPON_COLOR,
                      _.ModelConst.LEN_RWEAPON_COLOR,
                      !0,
                    )),
                    (this.icon2 = t.setIconValue(
                      this.icon2,
                      n,
                      _.ModelConst.OFFSET_WEAPON_FLASH,
                      _.ModelConst.LEN_WEAPON_FLASH,
                      -1,
                      -1,
                    )));
                }
                if (a && !a.isZero()) {
                  var P =
                      (a.low >> _.ModelConst.OFFSET_BACK_STYLE) &
                      _.ModelConst.LEN_BACK_STYLE,
                    R =
                      (a.low >> _.ModelConst.OFFSET_BACK_ADD) &
                      _.ModelConst.LEN_BACK_ADD,
                    O =
                      (a.high >> _.ModelConst.OFFSET_BACK_ADD_2) &
                      _.ModelConst.LEN_BACK_ADD_2;
                  (P > 0 || R > 0 || O > 0) &&
                    ((this.icon3.low &= ~(
                      _.ModelConst.LEN_BACK_STYLE <<
                      _.ModelConst.OFFSET_BACK_STYLE
                    )),
                    (this.icon3.low &= ~(
                      _.ModelConst.LEN_BACK_COLOR <<
                      _.ModelConst.OFFSET_BACK_COLOR
                    )),
                    (this.icon3.low &= ~(
                      _.ModelConst.LEN_BACK_ADD << _.ModelConst.OFFSET_BACK_ADD
                    )),
                    (this.icon3.high &= ~(
                      _.ModelConst.LEN_BACK_ADD_2 <<
                      _.ModelConst.OFFSET_BACK_ADD_2
                    )));
                  var N =
                      (a.low >> r.OFFSET_CLOTHES_STYLE) & r.LEN_CLOTHES_STYLE,
                    M = (a.high >> r.OFFSET_CLOTHES_ADD) & r.LEN_CLOTHES_ADD;
                  (N > 0 || M > 0) &&
                    ((this.icon3.low &= ~(
                      r.LEN_CLOTHES_STYLE << r.OFFSET_CLOTHES_STYLE
                    )),
                    (this.icon3.low &= ~(
                      r.LEN_CLOTHES_COLOR << r.OFFSET_CLOTHES_COLOR
                    )),
                    (this.icon3.high &= ~(
                      r.LEN_CLOTHES_ADD << r.OFFSET_CLOTHES_ADD
                    )));
                  var L =
                      (a.low >> r.OFFSET_TROUSERS_STYLE) & r.LEN_TROUSERS_STYLE,
                    w = (a.high >> r.OFFSET_TROUSERS_ADD) & r.LEN_TROUSERS_ADD;
                  (L > 0 || w > 0) &&
                    ((this.icon3.low &= ~(
                      r.LEN_TROUSERS_STYLE << r.OFFSET_TROUSERS_STYLE
                    )),
                    (this.icon3.low &= ~(
                      r.LEN_TROUSERS_COLOR << r.OFFSET_TROUSERS_COLOR
                    )),
                    (this.icon3.high &= ~(
                      r.LEN_TROUSERS_ADD << r.OFFSET_TROUSERS_ADD
                    )));
                  var b =
                      (a.low >> r.OFFSET_TRANSPORT_STYLE) &
                      r.LEN_TRANSPORT_STYLE,
                    x = (a.low >> r.OFFSET_TRANSPORT_ADD) & r.LEN_TRANSPORT_ADD,
                    D =
                      (a.low >> r.OFFSET_TRANSPORT_ADD_2) &
                      r.LEN_TRANSPORT_ADD_2,
                    B =
                      (a.high >> r.OFFSET_TRANSPORT_ADD_3) &
                      r.LEN_TRANSPORT_ADD_3;
                  ((b > 0 || x > 0 || D > 0 || B > 0) &&
                    ((this.icon3.low &= ~(
                      r.LEN_TRANSPORT_STYLE << r.OFFSET_TRANSPORT_STYLE
                    )),
                    (this.icon3.low &= ~(
                      r.LEN_TRANSPORT_COLOR << r.OFFSET_TRANSPORT_COLOR
                    )),
                    (this.icon3.low &= ~(
                      r.LEN_TRANSPORT_ADD << r.OFFSET_TRANSPORT_ADD
                    )),
                    (this.icon3.low &= ~(
                      r.LEN_TRANSPORT_ADD_2 << r.OFFSET_TRANSPORT_ADD_2
                    )),
                    (this.icon3.high &= ~(
                      r.LEN_TRANSPORT_ADD_3 << r.OFFSET_TRANSPORT_ADD_3
                    ))),
                    (this.icon3 = t.setIconValue(
                      this.icon3,
                      a,
                      _.ModelConst.OFFSET_BACK_STYLE,
                      _.ModelConst.LEN_BACK_STYLE,
                      _.ModelConst.OFFSET_BACK_COLOR,
                      _.ModelConst.LEN_BACK_COLOR,
                    )),
                    (this.icon3 = t.setIconValue(
                      this.icon3,
                      a,
                      _.ModelConst.OFFSET_BACK_ADD,
                      _.ModelConst.LEN_BACK_ADD,
                      -1,
                      -1,
                    )),
                    (this.icon3 = t.setIconValue(
                      this.icon3,
                      a,
                      _.ModelConst.OFFSET_BACK_ADD_2,
                      _.ModelConst.LEN_BACK_ADD_2,
                      -1,
                      -1,
                      !0,
                    )),
                    (this.icon3 = t.setIconValue(
                      this.icon3,
                      a,
                      _.ModelConst.OFFSET_CLOTHES_STYLE,
                      _.ModelConst.LEN_CLOTHES_STYLE,
                      _.ModelConst.OFFSET_CLOTHES_COLOR,
                      _.ModelConst.LEN_CLOTHES_COLOR,
                    )),
                    (this.icon3 = t.setIconValue(
                      this.icon3,
                      a,
                      _.ModelConst.OFFSET_CLOTHES_ADD,
                      _.ModelConst.LEN_CLOTHES_ADD,
                      _.ModelConst.OFFSET_CLOTHES_COLOR,
                      _.ModelConst.LEN_CLOTHES_COLOR,
                      !0,
                    )),
                    (this.icon3 = t.setIconValue(
                      this.icon3,
                      a,
                      _.ModelConst.OFFSET_TROUSERS_STYLE,
                      _.ModelConst.LEN_TROUSERS_STYLE,
                      _.ModelConst.OFFSET_TROUSERS_COLOR,
                      _.ModelConst.LEN_TROUSERS_COLOR,
                    )),
                    (this.icon3 = t.setIconValue(
                      this.icon3,
                      a,
                      _.ModelConst.OFFSET_TROUSERS_ADD,
                      _.ModelConst.LEN_TROUSERS_ADD,
                      _.ModelConst.OFFSET_TROUSERS_COLOR,
                      _.ModelConst.LEN_TROUSERS_COLOR,
                      !0,
                    )),
                    (this.icon3 = t.setIconValue(
                      this.icon3,
                      a,
                      _.ModelConst.OFFSET_TRANSPORT_STYLE,
                      _.ModelConst.LEN_TRANSPORT_STYLE,
                      _.ModelConst.OFFSET_TRANSPORT_COLOR,
                      _.ModelConst.LEN_TRANSPORT_COLOR,
                    )),
                    (this.icon3 = t.setIconValue(
                      this.icon3,
                      a,
                      _.ModelConst.OFFSET_TRANSPORT_ADD,
                      _.ModelConst.LEN_TRANSPORT_ADD,
                      -1,
                      -1,
                    )),
                    (this.icon3 = t.setIconValue(
                      this.icon3,
                      a,
                      _.ModelConst.OFFSET_TRANSPORT_ADD_2,
                      _.ModelConst.LEN_TRANSPORT_ADD_2,
                      -1,
                      -1,
                    )),
                    (this.icon3 = t.setIconValue(
                      this.icon3,
                      a,
                      _.ModelConst.OFFSET_TRANSPORT_ADD_3,
                      _.ModelConst.LEN_TRANSPORT_ADD_3,
                      -1,
                      -1,
                      !0,
                    )));
                }
                ((o && !o.isZero()) ||
                  (n && !n.isZero()) ||
                  (a && !a.isZero())) &&
                  (this.icon3.low |=
                    (1 & _.ModelConst.LEN_FASH_ADD) <<
                    _.ModelConst.OFFSET_FASH_ADD);
              }
            }
          }
        }),
        (t.prototype.updateHair = function (e) {
          if (null != e) {
            var t = e.icon;
            if (!(0 >= t)) {
              ((this.icon1.low &= ~(
                _.ModelConst.LEN_HAIR_STYLE << _.ModelConst.OFFSET_HAIR_STYLE
              )),
                (this.icon1.low &= ~(
                  _.ModelConst.LEN_HAIR_COLOR << _.ModelConst.OFFSET_HAIR_COLOR
                )),
                (this.icon1.high &= ~(
                  _.ModelConst.LEN_HAIR_ADD << _.ModelConst.OFFSET_HAIR_ADD
                )));
              var i = t - _.ModelConst.START_HAIR;
              if (i > 0) {
                var o = 1 + (((i - 1) / 8) | 0),
                  n = (i - 1) % 8;
                ((this.icon1.low |=
                  (o & _.ModelConst.LEN_HAIR_STYLE) <<
                  _.ModelConst.OFFSET_HAIR_STYLE),
                  (this.icon1.low |=
                    (n & _.ModelConst.LEN_HAIR_COLOR) <<
                    _.ModelConst.OFFSET_HAIR_COLOR));
                var r = o >> a.Tool.getBitNum(_.ModelConst.LEN_HAIR_STYLE);
                this.icon1.high |=
                  (r & _.ModelConst.LEN_HAIR_ADD) <<
                  _.ModelConst.OFFSET_HAIR_ADD;
              }
            }
          }
        }),
        (t.prototype.updateFace = function (e) {
          if (null != e) {
            var t = e.icon;
            if (!(0 >= t)) {
              ((this.icon1.low &= ~(
                _.ModelConst.LEN_FACE_STYLE << _.ModelConst.OFFSET_FACE_STYLE
              )),
                (this.icon1.high &= ~(
                  _.ModelConst.LEN_FACE_ADD << _.ModelConst.OFFSET_FACE_ADD
                )));
              var i = t - _.ModelConst.START_FACE;
              if (i > 0) {
                var o = 1 + (((i - 1) / 8) | 0);
                this.icon1.low |=
                  (o & _.ModelConst.LEN_FACE_STYLE) <<
                  _.ModelConst.OFFSET_FACE_STYLE;
                var n = o >> a.Tool.getBitNum(_.ModelConst.LEN_FACE_STYLE);
                this.icon1.high |=
                  (n & _.ModelConst.LEN_FACE_ADD) <<
                  _.ModelConst.OFFSET_FACE_ADD;
              }
            }
          }
        }),
        (t.prototype.updateIcon = function () {
          if (null != this.bag) {
            var e, t, i, o;
            if (
              ((this.icon1.low &= ~(
                _.ModelConst.LEN_HAND_STYLE << _.ModelConst.OFFSET_HAND_STYLE
              )),
              (this.icon1.high &= ~(
                _.ModelConst.LEN_HAND_ADD << _.ModelConst.OFFSET_HAND_ADD
              )),
              (this.icon1.low &= ~(
                _.ModelConst.LEN_HAND_COLOR << _.ModelConst.OFFSET_HAND_COLOR
              )),
              (this.icon1.low &= ~(
                _.ModelConst.LEN_FEET_STYLE << _.ModelConst.OFFSET_FEET_STYLE
              )),
              (this.icon1.high &= ~(
                _.ModelConst.LEN_FEET_ADD << _.ModelConst.OFFSET_FEET_ADD
              )),
              (this.icon1.low &= ~(
                _.ModelConst.LEN_FEET_COLOR << _.ModelConst.OFFSET_FEET_COLOR
              )),
              (this.icon1 = d.ModelVo.setHandAndFeet(this.icon1)),
              (this.icon1.low &= ~(
                _.ModelConst.LEN_HELMET_STYLE <<
                _.ModelConst.OFFSET_HELMET_STYLE
              )),
              (this.icon1.high &= ~(
                _.ModelConst.LEN_HELMET_ADD << _.ModelConst.OFFSET_HELMET_ADD
              )),
              (this.icon1.low &= ~(
                _.ModelConst.LEN_HELMET_COLOR <<
                _.ModelConst.OFFSET_HELMET_COLOR
              )),
              (e = this.bag.getItem(s["default"].ARMOR_HEAD_POS)),
              null != e &&
                e.icon > 0 &&
                ((t = e.icon - _.ModelConst.START_HELMET), t > 0))
            ) {
              ((i = 1 + (((t - 1) / 4) | 0)),
                (o = (t - 1) % 4),
                (this.icon1.low |=
                  (i & _.ModelConst.LEN_HELMET_STYLE) <<
                  _.ModelConst.OFFSET_HELMET_STYLE),
                (this.icon1.low |=
                  (o & _.ModelConst.LEN_HELMET_COLOR) <<
                  _.ModelConst.OFFSET_HELMET_COLOR));
              var n = i >> a.Tool.getBitNum(_.ModelConst.LEN_HELMET_STYLE);
              this.icon1.high |=
                (n & _.ModelConst.LEN_HELMET_ADD) <<
                _.ModelConst.OFFSET_HELMET_ADD;
            }
            if (
              ((this.icon2.low &= ~(
                _.ModelConst.LEN_SHOULDER_STYLE <<
                _.ModelConst.OFFSET_SHOULDER_STYLE
              )),
              (this.icon2.low &= ~(
                _.ModelConst.LEN_SHOULDER_COLOR <<
                _.ModelConst.OFFSET_SHOULDER_COLOR
              )),
              (this.icon2.low &= ~(
                _.ModelConst.LEN_SHOULDER_ADD <<
                _.ModelConst.OFFSET_SHOULDER_ADD
              )),
              (this.icon2.high &= ~(
                _.ModelConst.LEN_SHOULDER_ADD_2 <<
                _.ModelConst.OFFSET_SHOULDER_ADD_2
              )),
              (e = this.bag.getItem(s["default"].ARMOR_SHOULDER_POS)),
              null != e &&
                e.icon > 0 &&
                ((t = e.icon - _.ModelConst.START_SHOULDER), t > 0))
            ) {
              ((i = 1 + (((t - 1) / 8) | 0)),
                (o = (t - 1) % 8),
                (this.icon2.low |=
                  (i & _.ModelConst.LEN_SHOULDER_STYLE) <<
                  _.ModelConst.OFFSET_SHOULDER_STYLE),
                (this.icon2.low |=
                  (o & _.ModelConst.LEN_SHOULDER_COLOR) <<
                  _.ModelConst.OFFSET_SHOULDER_COLOR));
              var n = i >> a.Tool.getBitNum(_.ModelConst.LEN_SHOULDER_STYLE);
              this.icon2.low |=
                (n & _.ModelConst.LEN_SHOULDER_ADD) <<
                _.ModelConst.OFFSET_SHOULDER_ADD;
              var r =
                i >>
                (a.Tool.getBitNum(_.ModelConst.LEN_SHOULDER_STYLE) +
                  a.Tool.getBitNum(_.ModelConst.LEN_SHOULDER_ADD));
              this.icon2.high |=
                (r & _.ModelConst.LEN_SHOULDER_ADD) <<
                _.ModelConst.OFFSET_SHOULDER_ADD;
            }
            this.icon2.low &= ~(
              _.ModelConst.LEN_WEAPON_FLASH << _.ModelConst.OFFSET_WEAPON_FLASH
            );
            var l = 0;
            if (
              ((this.icon2.low &= ~(
                _.ModelConst.LEN_LWEAPON_STYLE <<
                _.ModelConst.OFFSET_LWEAPON_STYLE
              )),
              (this.icon2.low &= ~(
                _.ModelConst.LEN_LWEAPON_COLOR <<
                _.ModelConst.OFFSET_LWEAPON_COLOR
              )),
              (this.icon2.high &= ~(
                _.ModelConst.LEN_LWEAPON_ADD << _.ModelConst.OFFSET_LWEAPON_ADD
              )),
              (e = this.bag.getItem(s["default"].WEAPON_LEFT_POS)),
              null != e &&
                e.icon > 0 &&
                ((t =
                  e.icon > 3e4
                    ? e.icon - _.ModelConst.START_WEAPON_ADD1
                    : e.icon - _.ModelConst.START_WEAPON),
                t > 0))
            ) {
              (e.icon > 3e4 && (i += 500),
                (i = 1 + (((t - 1) / 4) | 0)),
                (o = (t - 1) % 4),
                (this.icon2.low |=
                  (i & _.ModelConst.LEN_LWEAPON_STYLE) <<
                  _.ModelConst.OFFSET_LWEAPON_STYLE),
                (this.icon2.low |=
                  (o & _.ModelConst.LEN_LWEAPON_COLOR) <<
                  _.ModelConst.OFFSET_LWEAPON_COLOR));
              var n = i >> a.Tool.getBitNum(_.ModelConst.LEN_LWEAPON_STYLE);
              ((this.icon2.high |=
                (n & _.ModelConst.LEN_LWEAPON_ADD) <<
                _.ModelConst.OFFSET_LWEAPON_ADD),
                (l = e.getWeaponFlashType()));
            }
            if (
              ((this.icon2.low &= ~(
                _.ModelConst.LEN_RWEAPON_STYLE <<
                _.ModelConst.OFFSET_RWEAPON_STYLE
              )),
              (this.icon2.low &= ~(
                _.ModelConst.LEN_RWEAPON_COLOR <<
                _.ModelConst.OFFSET_RWEAPON_COLOR
              )),
              (this.icon2.high &= ~(
                _.ModelConst.LEN_RWEAPON_ADD << _.ModelConst.OFFSET_RWEAPON_ADD
              )),
              (e = this.bag.getItem(s["default"].WEAPON_RIGHT_POS)),
              null != e &&
                e.icon > 0 &&
                ((t =
                  e.icon > 3e4
                    ? e.icon - _.ModelConst.START_WEAPON_ADD1
                    : e.icon - _.ModelConst.START_WEAPON),
                t > 0))
            ) {
              (e.icon > 3e4 && (i += 500),
                (i = 1 + (((t - 1) / 4) | 0)),
                (o = (t - 1) % 4),
                (this.icon2.low |=
                  (i & _.ModelConst.LEN_RWEAPON_STYLE) <<
                  _.ModelConst.OFFSET_RWEAPON_STYLE),
                (this.icon2.low |=
                  (o & _.ModelConst.LEN_RWEAPON_COLOR) <<
                  _.ModelConst.OFFSET_RWEAPON_COLOR));
              var n = i >> a.Tool.getBitNum(_.ModelConst.LEN_RWEAPON_STYLE);
              this.icon2.high |=
                (n & _.ModelConst.LEN_RWEAPON_ADD) <<
                _.ModelConst.OFFSET_RWEAPON_ADD;
              var u = e.getWeaponFlashType();
              u > 0 && u > l && (l = u);
            }
            if (
              (l > 0 &&
                (this.icon2.low |=
                  (l & _.ModelConst.LEN_WEAPON_FLASH) <<
                  _.ModelConst.OFFSET_WEAPON_FLASH),
              (this.icon3.low &= ~(
                _.ModelConst.LEN_BACK_STYLE << _.ModelConst.OFFSET_BACK_STYLE
              )),
              (this.icon3.low &= ~(
                _.ModelConst.LEN_BACK_COLOR << _.ModelConst.OFFSET_BACK_COLOR
              )),
              (this.icon3.low &= ~(
                _.ModelConst.LEN_BACK_ADD << _.ModelConst.OFFSET_BACK_ADD
              )),
              (this.icon3.high &= ~(
                _.ModelConst.LEN_BACK_ADD_2 << _.ModelConst.OFFSET_BACK_ADD_2
              )),
              (e = this.bag.getItem(s["default"].ARMOR_BACK_POS)),
              null != e &&
                e.icon > 0 &&
                ((t = e.icon - _.ModelConst.START_BACK), t > 0))
            ) {
              ((i = 1 + (((t - 1) / 4) | 0)),
                (o = (t - 1) % 4),
                (this.icon3.low |=
                  (i & _.ModelConst.LEN_BACK_STYLE) <<
                  _.ModelConst.OFFSET_BACK_STYLE),
                (this.icon3.low |=
                  (o & _.ModelConst.LEN_BACK_COLOR) <<
                  _.ModelConst.OFFSET_BACK_COLOR));
              var p = i >> a.Tool.getBitNum(_.ModelConst.LEN_BACK_STYLE);
              this.icon3.low |=
                (p & _.ModelConst.LEN_BACK_ADD) << _.ModelConst.OFFSET_BACK_ADD;
              var c =
                i >>
                (a.Tool.getBitNum(_.ModelConst.LEN_BACK_STYLE) +
                  _.ModelConst.LEN_BACK_ADD);
              this.icon3.high |=
                (c & _.ModelConst.LEN_BACK_ADD_2) <<
                _.ModelConst.OFFSET_BACK_ADD_2;
            }
            if (
              ((this.icon3.low &= ~(
                _.ModelConst.LEN_CLOTHES_STYLE <<
                _.ModelConst.OFFSET_CLOTHES_STYLE
              )),
              (this.icon3.low &= ~(
                _.ModelConst.LEN_CLOTHES_COLOR <<
                _.ModelConst.OFFSET_CLOTHES_COLOR
              )),
              (this.icon3.high &= ~(
                _.ModelConst.LEN_CLOTHES_ADD << _.ModelConst.OFFSET_CLOTHES_ADD
              )),
              (e = this.bag.getItem(s["default"].ARMOR_CLOTHES_POS)),
              null != e &&
                e.icon > 0 &&
                ((t = e.icon - _.ModelConst.START_CLOTHES), t > 0))
            ) {
              ((i = 1 + (((t - 1) / 8) | 0)),
                (o = (t - 1) % 8),
                (this.icon3.low |=
                  (i & _.ModelConst.LEN_CLOTHES_STYLE) <<
                  _.ModelConst.OFFSET_CLOTHES_STYLE),
                (this.icon3.low |=
                  (o & _.ModelConst.LEN_CLOTHES_COLOR) <<
                  _.ModelConst.OFFSET_CLOTHES_COLOR));
              var n = i >> a.Tool.getBitNum(_.ModelConst.LEN_CLOTHES_STYLE);
              this.icon3.high |=
                (n & _.ModelConst.LEN_CLOTHES_ADD) <<
                _.ModelConst.OFFSET_CLOTHES_ADD;
            }
            if (
              ((this.icon3.low &= ~(
                _.ModelConst.LEN_TROUSERS_STYLE <<
                _.ModelConst.OFFSET_TROUSERS_STYLE
              )),
              (this.icon3.low &= ~(
                _.ModelConst.LEN_TROUSERS_COLOR <<
                _.ModelConst.OFFSET_TROUSERS_COLOR
              )),
              (this.icon3.high &= ~(
                _.ModelConst.LEN_TROUSERS_ADD <<
                _.ModelConst.OFFSET_TROUSERS_ADD
              )),
              (e = this.bag.getItem(s["default"].ARMOR_TROUSERS_POS)),
              null != e &&
                e.icon > 0 &&
                ((t = e.icon - _.ModelConst.START_TROUSERS), t > 0))
            ) {
              ((i = 1 + (((t - 1) / 8) | 0)),
                (o = (t - 1) % 8),
                (this.icon3.low |=
                  (i & _.ModelConst.LEN_TROUSERS_STYLE) <<
                  _.ModelConst.OFFSET_TROUSERS_STYLE),
                (this.icon3.low |=
                  (o & _.ModelConst.LEN_TROUSERS_COLOR) <<
                  _.ModelConst.OFFSET_TROUSERS_COLOR));
              var n = i >> a.Tool.getBitNum(_.ModelConst.LEN_TROUSERS_STYLE);
              this.icon3.high |=
                (n & _.ModelConst.LEN_TROUSERS_ADD) <<
                _.ModelConst.OFFSET_TROUSERS_ADD;
            }
            if (
              ((this.icon3.low &= ~(
                _.ModelConst.LEN_TRANSPORT_STYLE <<
                _.ModelConst.OFFSET_TRANSPORT_STYLE
              )),
              (this.icon3.low &= ~(
                _.ModelConst.LEN_TRANSPORT_COLOR <<
                _.ModelConst.OFFSET_TRANSPORT_COLOR
              )),
              (this.icon3.low &= ~(
                _.ModelConst.LEN_TRANSPORT_ADD <<
                _.ModelConst.OFFSET_TRANSPORT_ADD
              )),
              (this.icon3.low &= ~(
                _.ModelConst.LEN_TRANSPORT_ADD_2 <<
                _.ModelConst.OFFSET_TRANSPORT_ADD_2
              )),
              (this.icon3.high &= ~(
                _.ModelConst.LEN_TRANSPORT_ADD_3 <<
                _.ModelConst.OFFSET_TRANSPORT_ADD_3
              )),
              (e = this.bag.getItem(s["default"].ARMOR_TRANSPORT_POS)),
              e && e.illusionItemId)
            ) {
              var h = this.getIllusionItem(e.illusionItemId, e);
              h && (e = h);
            }
            if (null != e && e.icon > 0) {
              var f = !1;
              if (
                (1 == e.isTimeItem() && 1 == e.isExpired() && (f = !0),
                0 == f && ((t = e.icon - _.ModelConst.START_TRANSPORT), t > 0))
              ) {
                ((i = 1 + (((t - 1) / 4) | 0)),
                  (o = (t - 1) % 4),
                  (this.icon3.low |=
                    (i & _.ModelConst.LEN_TRANSPORT_STYLE) <<
                    _.ModelConst.OFFSET_TRANSPORT_STYLE),
                  (this.icon3.low |=
                    (o & _.ModelConst.LEN_TRANSPORT_COLOR) <<
                    _.ModelConst.OFFSET_TRANSPORT_COLOR));
                var T = i >> a.Tool.getBitNum(_.ModelConst.LEN_TRANSPORT_STYLE);
                this.icon3.low |=
                  (T & _.ModelConst.LEN_TRANSPORT_ADD) <<
                  _.ModelConst.OFFSET_TRANSPORT_ADD;
                var E =
                  i >>
                  (a.Tool.getBitNum(_.ModelConst.LEN_TRANSPORT_STYLE) +
                    _.ModelConst.LEN_TRANSPORT_ADD);
                this.icon3.low |=
                  (E & _.ModelConst.LEN_TRANSPORT_ADD_2) <<
                  _.ModelConst.OFFSET_TRANSPORT_ADD_2;
                var y =
                  i >>
                  (a.Tool.getBitNum(_.ModelConst.LEN_TRANSPORT_STYLE) +
                    _.ModelConst.LEN_TRANSPORT_ADD +
                    _.ModelConst.LEN_TRANSPORT_ADD_2);
                this.icon3.high |=
                  (y & _.ModelConst.LEN_TRANSPORT_ADD_3) <<
                  _.ModelConst.OFFSET_TRANSPORT_ADD_3;
              }
            }
            this.updateIconByFashion();
          }
        }),
        (t.prototype.getBagAllEquip = function () {
          return null == this.bag ? null : this.bag.getAllEquip();
        }),
        (t.prototype.clonePlayer = function () {
          var e = new t();
          return (
            e.setMyPlayer(),
            (e.id = this.id),
            (e.level = this.level),
            (e.hp = this.hp),
            (e.mp = this.mp),
            (e.hpMax = this.hpMax),
            (e.mpMax = this.mpMax),
            (e.cp = this.cp),
            (e.str = this.str),
            (e.con = this.con),
            (e.agi = this.agi),
            (e.ilt = this.ilt),
            (e.wis = this.wis),
            (e.itemSetData = this.itemSetData),
            (e.titlePower1 = this.titlePower1),
            (e.titlePowerValue1 = this.titlePowerValue1),
            (e.titlePower2 = this.titlePower2),
            (e.titlePowerValue2 = this.titlePowerValue2),
            (e.power = this.power),
            (e.powerValue = this.powerValue),
            (e.powerExpireTime = this.powerExpireTime),
            (e.fightPowerList = this.fightPowerList),
            (e.skillList = this.skillList),
            (e.bag = this.bag),
            (e.level2 = this.level2),
            (e.countrypowerValue = this.countrypowerValue),
            (e.keepout_atk_time = this.keepout_atk_time),
            (e.formationList = this.formationList),
            (e.formationSkill = this.formationSkill),
            (e.iconpet1 = this.iconpet1),
            this.playerTurnMonster &&
              (e.playerTurnMonster = this.playerTurnMonster.clone()),
            e
          );
        }),
        (t.prototype.getFreeSkillIndex = function (e) {
          if (null == this.skillList) return -1;
          if (0 >= e) return -1;
          var t = this.getSkillByID(e);
          return null != t ? n["default"].SUCCESS : n["default"].SUCCESS;
        }),
        (t.prototype.learnSkill = function (e) {
          if (null == e) return -1;
          if (null == this.skillList) return -1;
          if (this.getFreeSkillIndex(e.id) < 0) return -3;
          if (0 == this.skillList.length)
            return (this.skillList.push(e), n["default"].SUCCESS);
          for (var t = 0; t < this.skillList.length; t++) {
            var i = this.skillList[t];
            if (null != i && i.id == e.id)
              return (this.skillList.splice(t, 1, e), n["default"].SUCCESS);
          }
          return (this.skillList.push(e), n["default"].SUCCESS);
        }),
        (t.prototype.fromSkillData = function (e) {
          if (null != e) {
            for (var t = e.getByte(), i = 0; t > i; i++) {
              var o = e.getByte();
              if (1 == o) {
                var n = l["default"].fromBytes(e);
                ((n.addLevel = e.getByte()), this.learnSkill(n));
              } else if (2 == o) {
                var a = l["default"].fromBytes(e);
                ((a.addLevel = e.getByte()), this.learnSkill(a));
              } else if (3 == o) {
                var r = e.getInt();
                this.removeSkill(this.getSkillByID(r));
              }
            }
            var s = e.getByte();
            this.autoSkillID = [];
            for (var i = 0; s > i; i++) this.autoSkillID[i] = e.getShort();
            this.autoSkillID_Initiative = e.getShort();
          }
        }),
        (t.prototype.fromAutoEquipSkillData = function (e) {
          if (null != e) {
            var t = e.getByte();
            this.autoSkillID = [];
            for (var i = 0; t > i; i++) this.autoSkillID[i] = e.getShort();
            this.autoSkillID_Initiative = e.getShort();
          }
        }),
        (t.prototype.removeSkill = function (e) {
          if (
            null != e &&
            !(null == this.skillList || this.skillList.length <= 0)
          )
            for (var t = 0; t < this.skillList.length; t++) {
              var i = this.skillList[t];
              if (null != i && i.id == e.id && i.level == e.level)
                return (
                  this.isAutoSkill(i.id) >= 0 && this.setAutoSkillInvalid(i.id),
                  void this.skillList.splice(t, 1)
                );
            }
        }),
        (t.prototype.removeSkillSure = function (e) {
          if (
            null != e &&
            !(null == this.skillList || this.skillList.length <= 0)
          )
            for (var t = 0; t < this.skillList.length; t++) {
              var i = this.skillList[t];
              if (null != i && i.id == e.id)
                return (
                  this.isAutoSkill(i.id) >= 0 && this.setAutoSkillInvalid(i.id),
                  void this.skillList.splice(t, 1)
                );
            }
        }),
        (t.prototype.getSkillByID = function (e) {
          if (null == this.skillList) return null;
          for (var t = 0; t < this.skillList.length; t++) {
            var i = this.skillList[t];
            if (null != i && i.id == e) return i;
          }
          return null;
        }),
        (t.prototype.getSkillIndexByID = function (e) {
          if (null == this.skillList) return -1;
          for (var t = 0; t < this.skillList.length; t++) {
            var i = this.skillList[t];
            if (null != i && i.id == e) return t;
          }
          return -1;
        }),
        (t.prototype.getSkillLevelByID = function (e) {
          var t = this.getSkillByID(e);
          if (null == t) return 0;
          var i = t.addLevel ? t.addLevel : 0;
          return t.level - i;
        }),
        (t.getSkillListByType = function (e, t) {
          if (null == e || e.length <= 0) return null;
          for (var i = [], o = 0; o < e.length; o++) {
            var n = e[o];
            null != n && n.type == t && i.push(n);
          }
          return i;
        }),
        (t.prototype.setAutoSkillActive = function (e) {
          if (null == this.autoSkillID) return -2;
          for (var t = 0; t < this.autoSkillID.length; t++) {
            var i = this.autoSkillID[t];
            if (0 == i) return ((this.autoSkillID[t] = e), t);
          }
          return -1;
        }),
        (t.prototype.setAutoSkillInvalid = function (e) {
          if (null == this.autoSkillID) return -2;
          for (var t = -1, i = !1, o = 0; o < this.autoSkillID.length; o++) {
            var n = this.autoSkillID[o];
            (n == e && ((i = !0), (t = o), (this.autoSkillID[o] = 0)),
              1 == i &&
                (o < this.autoSkillID.length - 1
                  ? (this.autoSkillID[o] = this.autoSkillID[o + 1])
                  : (this.autoSkillID[o] = 0)));
          }
          return t;
        }),
        (t.prototype.isAutoSkill = function (e) {
          for (var t = 0; t < this.autoSkillID.length; t++) {
            var i = this.autoSkillID[t];
            if (i == e) return t;
          }
          return -1;
        }),
        (t.prototype.getAutoSkillCount = function () {
          for (var e = 0, t = 0; t < this.autoSkillID.length; t++)
            this.autoSkillID[t] > 0 && e++;
          return e;
        }),
        (t.prototype.getMissionById = function (e) {
          var t = this.missionList;
          if (t) {
            for (var i = 0; i < t.length; i++) {
              var o = t[i];
              if (null != o && o.getId() == e) return o;
            }
            return null;
          }
        }),
        (t.prototype.hasMission = function () {
          var e = this.missionList;
          if (!e) return !1;
          for (var t = 0, i = e; t < i.length; t++) {
            var o = i[t];
            if (o) return !0;
          }
          return !1;
        }),
        (t.prototype.getCurMapMission = function (e) {
          void 0 === e && (e = !0);
          var t = this;
          return O.MissionModel.mainMission
            ? O.MissionModel.mainMission
            : t.getLocalMapMission(e) ||
                y["default"].getCurMapCanAcceptMission();
        }),
        (t.prototype.getLocalMapMission = function (e, t) {
          (void 0 === e && (e = !0), void 0 === t && (t = !0));
          var i = this.missionList;
          if (i) {
            for (var n = [], a = [], r = 0; r < i.length; r++) {
              var s = i[r];
              if (s) {
                var l = s.isCityOrCountry() || s.isEscort() || s.isEscortTeam();
                if (!e) {
                  if (
                    I.DAILY_MISSION_ID.includes(s.id) &&
                    s.status == o.MissionConst.NOT_CAN_SUBMIT
                  )
                    continue;
                  l ? a.push(s) : n.push(s);
                }
                (s.mapId == y["default"].orgMapID ||
                  s.acceptMapId == y["default"].orgMapID) &&
                  (l ? a.push(s) : n.push(s));
              }
            }
            return (t || (n = n.concat(a)), n.length > 0 ? n[0] : null);
          }
        }),
        (t.prototype.getCanSubmitMission = function () {
          var e = this.missionList;
          if (e) {
            for (var t = 0; t < e.length; t++) {
              var i = e[t];
              if (null != i && i.isComplete(this)) return i;
            }
            return null;
          }
        }),
        (t.prototype.addMission = function (e, t) {
          if ((void 0 === t && (t = !1), null == e)) return !1;
          if (1 == e.isEscort()) return !0;
          var i = this.missionList;
          if (
            (null == i &&
              (this.missionList = new Array(n["default"].MAX_MISSION_SIZE)),
            null != this.getMissionById(e.getId()))
          )
            return !1;
          for (var o = 0; o < i.length; o++)
            if (null == i[o]) {
              ((i[o] = e), v["default"].setNewRadar(e));
              var a = I.MainPlayerAi.ins;
              return (t || (a.curMissionId = e.id), !0);
            }
          return !1;
        }),
        (t.prototype.deleteMission = function (e) {
          return null == e ? !1 : this.deleteMissionById(e.getId());
        }),
        (t.prototype.deleteMissionById = function (e) {
          var t = this.missionList;
          if (null == t) return !1;
          for (var i = 0; i < t.length; i++) {
            var o = t[i];
            if (null != o && o.getId() == e)
              return (
                o.cleanKillMission(),
                v["default"].clearNewRadar(o),
                (t[i] = null),
                this.onDelMission(o),
                !0
              );
          }
          return !1;
        }),
        (t.prototype.onDelMission = function (e) {
          var t = o["default"].isMissionFinish(this, e.id);
          t
            ? I.MainPlayerAi.ins.clearMissionById(e.id)
            : f["default"].sendNt(T.MissionEvent.ON_MAIN_MISSION_UPDATE);
        }),
        (t.prototype.submitMission = function (e) {
          return null == e ? !1 : this.deleteMission(e);
        }),
        (t.prototype.setBag = function (e) {
          this.bag = e;
        }),
        (t.prototype.getItemNumByIdInBag = function (e) {
          return null == this.bag ? 0 : this.bag.getItemNumByID(e);
        }),
        (t.prototype.isEquipItemByIdInEquip = function (e) {
          return null == this.bag ? !1 : this.bag.isEquipItemByIdInEquip(e);
        }),
        (t.getCompareSprite = function (e, t) {
          return (console.log("引用错误放到ModelTool"), null);
        }),
        (t.prototype.resumeHPMP = function () {
          ((this.hp = this.get(_.ModelConst.HPMAX)),
            (this.mp = this.get(_.ModelConst.MPMAX)));
        }),
        (t.prototype.checkHPMP = function () {
          var e = this.get(_.ModelConst.HPMAX);
          this.hp > e && (this.hp = e);
          var t = this.get(_.ModelConst.MPMAX);
          this.mp > t && (this.mp = t);
        }),
        (t.prototype.getMissionHaveItemDesc = function (e, t) {
          if (null != t)
            for (var i = null, o = 0; o < this.missionList.length; o++)
              ((i = this.missionList[o]),
                null != i && i.updateHaveItemDesc(e, t));
        }),
        (t.prototype.isHaveCanNotReliveBuffer = function () {
          var e = this.battleBufferList;
          if (null == e) return !1;
          for (var t = e.arr, i = 0, o = t; i < o.length; i++) {
            var n = o[i];
            if (n.isCannotReliveStatus()) return !0;
          }
          return !1;
        }),
        (t.prototype.setBattleStatus = function (e) {
          var t = "number" == typeof e ? Long.fromNumber(e) : e;
          return ((this.bStatus = this.bStatus.or(t)), !0);
        }),
        (t.prototype.clearBattleStatus = function (e) {
          var t = "number" == typeof e ? Long.fromNumber(e) : e;
          this.bStatus = this.bStatus.and(t.not());
        }),
        (t.prototype.isBattleStatus = function (e) {
          var t = "number" == typeof e ? Long.fromNumber(e) : e;
          return !this.bStatus.and(t).isZero();
        }),
        (t.prototype.isDead = function () {
          return this.hp <= 0;
        }),
        (t.prototype.isDeadDelay = function () {
          return (
            this.isBattleStatus(
              n["default"].getBufferBitValue(
                n["default"].BUFFER_RESIST_DIE_DELAY,
              ),
            ) && 0 == this.isTabStatus(_.ModelConst.BUFFER_DIE_DELAY_CHECK)
          );
        }),
        (t.prototype.isDeadNoWithDelay = function () {
          return this.isDead() && 0 == this.isDeadDelay();
        }),
        (t.prototype.addBuffer = function (e) {
          if (null != e)
            if (
              (null == this.battleBufferList &&
                (this.battleBufferList = new E["default"]()),
              a.Tool.debug(
                "回合:" +
                  e.battle.round +
                  ",pos:" +
                  this.position +
                  ",addBuffer lastTime:" +
                  e.lastTime +
                  ",power:" +
                  e.statusBit +
                  ",attrID:" +
                  e.attrID +
                  ",addValue:" +
                  e.addValue,
              ),
              1 == e.isClearStatusBitBuffer())
            )
              this.battleBufferList.insertElementAt(e, 0);
            else {
              var t = this.setBattleStatus(
                n["default"].getBufferBitValue(e.getStatus()),
              );
              (0 == t ? e.clearStatus() : this.checkBufferSize(e),
                this.battleBufferList.addElement(e),
                t &&
                  this.setBattleStatus(
                    n["default"].getBufferBitValue(e.getStatus()),
                  ));
            }
        }),
        (t.prototype.getbuffer = function (e) {
          var t = this.battleBufferList;
          if (t.size() <= 0) return null;
          for (var i = t.size() - 1; i >= 0; i--) {
            var o = t.elementAt(i);
            if (
              null != o &&
              o.getStatus() != n["default"].BUFFER_NONE &&
              o.getStatus() == e
            )
              return o;
          }
          return null;
        }),
        (t.prototype.checkBufferSize = function (e) {
          if (e.getStatus() != n["default"].BUFFER_NONE) {
            for (
              var t = 0,
                i = n["default"].BUFFER_NONE,
                o = this.battleBufferList.size() - 1;
              o >= 0;
              o--
            ) {
              var a = this.battleBufferList.elementAt(o);
              if (null != a && a.getStatus() != n["default"].BUFFER_NONE)
                if (e.isDieStatus() && a.isDieStatus())
                  (this.clearBattleStatus(
                    n["default"].getBufferBitValue(a.getStatus()),
                  ),
                    a.destroy(this),
                    this.battleBufferList.removeElement(a));
                else if (
                  n["default"].getBufferType(a.getStatus()) ==
                    n["default"].getBufferType(e.getStatus()) &&
                  (t++, t >= S["default"].BUFF_MAX_SIZE)
                ) {
                  ((i = a.getStatus()),
                    a.destroy(this),
                    this.battleBufferList.removeElement(a));
                  break;
                }
            }
            if (i != n["default"].BUFFER_NONE) {
              for (var o = 0; o < this.battleBufferList.size(); o++) {
                var a = this.battleBufferList.elementAt(o);
                if (null != a && a.getStatus() == i) return;
              }
              this.clearBattleStatus(n["default"].getBufferBitValue(i));
            }
          }
        }),
        (t.prototype.clearBufferList = function (e) {
          if (null != this.battleBufferList) {
            for (var t = this.battleBufferList.size() - 1; t >= 0; t--) {
              var i = this.battleBufferList.elementAt(t);
              null != i &&
                ((0 == e && i.isCannotReliveStatus()) ||
                  (i.destroy(this),
                  this.battleBufferList.removeElement(i),
                  this.clearBattleStatus(
                    n["default"].getBufferBitValue(i.getStatus()),
                  )));
            }
            this.battleBufferList.size() <= 0 && (this.battleBufferList = null);
          }
        }),
        (t.prototype.removeBufferByStatus = function (e) {
          if (((e = 255 & e), null != this.battleBufferList))
            for (var t = this.battleBufferList.size() - 1; t >= 0; t--) {
              var i = this.battleBufferList.elementAt(t);
              if (null != i) {
                var o = i.isSameStatusType(e);
                1 == o &&
                  (i.destroy(this),
                  this.battleBufferList.removeElement(i),
                  this.clearBattleStatus(
                    n["default"].getBufferBitValue(i.getStatus()),
                  ));
              }
            }
        }),
        (t.prototype.runBufferList = function (e) {
          if (null == this.battleBufferList) return null;
          for (
            var t = new E["default"](), i = new E["default"](), o = 0;
            o < this.battleBufferList.size();
            o++
          ) {
            var a = this.battleBufferList.elementAt(o);
            if (null != a)
              if (1 == e) {
                if ((a.run(this, t), null == this.battleBufferList)) return t;
                if (1 == a.isClearStatusBitBuffer())
                  for (var r = o + 1; r < this.battleBufferList.size(); r++) {
                    var s = this.battleBufferList.elementAt(r);
                    null != s &&
                      s.isSameStatusType(255 & a.getAddValue()) &&
                      (s.finish(), i.addElement(s));
                  }
              } else a.getLastTime() <= 0 && i.addElement(a);
          }
          var l = i.size();
          if (0 >= l) return t;
          for (var o = 0; l > o; o++) {
            var a = i.elementAt(o);
            (a.destroy(this),
              this.battleBufferList.removeElement(a),
              this.clearBattleStatus(
                n["default"].getBufferBitValue(a.getStatus()),
              ));
          }
          for (var o = 0; o < this.battleBufferList.size(); o++) {
            var a = this.battleBufferList.elementAt(o);
            null != a &&
              this.setBattleStatus(
                n["default"].getBufferBitValue(a.getStatus()),
              );
          }
          return t;
        }),
        (t.prototype.getAttakAnimePos = function () {
          var e = this.getEquipWeaponType();
          return e == n["default"].ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW ||
            e == n["default"].ITEM_TYPE_WEAPON_TWOHAND_CROSSBOW ||
            e == n["default"].ITEM_TYPE_WEAPON_TWOHAND_BOW ||
            e == n["default"].ITEM_TYPE_WEAPON_TWOHAND_STAFF ||
            e == n["default"].ITEM_TYPE_WEAPON_BALL ||
            e == n["default"].ITEM_TYPE_WEAPON_ONEHAND_GUN ||
            e == n["default"].ITEM_TYPE_WEAPON_TWOHAND_GUN ||
            e == n["default"].ITEM_TYPE_WEAPON_TWOHAND_FAN
            ? n["default"].SKILL_POS_STAND
            : n["default"].SKILL_POS_FRONT;
        }),
        (t.prototype.doKeepAtkTime = function () {
          if (
            (this.addValue(_.ModelConst.KEEPOUT_ATK_TIME, -1),
            null != this.battleBufferList)
          )
            for (var e = this.battleBufferList.size() - 1; e >= 0; e--) {
              var t = this.battleBufferList.elementAt(e);
              if (null != t && t.useKeeAtkTime()) return;
            }
        }),
        (t.prototype.getAttackRangeAnime = function () {
          var e = this.getEquipWeaponType();
          return e == n["default"].ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW ||
            e == n["default"].ITEM_TYPE_WEAPON_TWOHAND_CROSSBOW
            ? p.SprConst.SPR_INDEX_EFF_START + p.SprConst.EFF_RANGE
            : 0;
        }),
        (t.prototype.refreshWorldMercenaryData = function () {
          null != this.worldMer &&
            ((this.worldMer.hp = this.hp), (this.worldMer.mp = this.mp));
        }),
        (t.prototype.resetBattleBuffer = function () {
          ((this.bStatus = Long.ZERO),
            this.battleBufferList &&
              ((this.battleBufferList.length = 0),
              (this.battleBufferList.arr = null),
              (this.battleBufferList = null)),
            (this.argo = 0),
            (this.hpMax = 0),
            (this.mpMax = 0),
            (this.speed = 0),
            (this.atk_str = 0),
            (this.atk_agi = 0),
            (this.atk_magic = 0),
            (this.atk_time = 0),
            (this.def_str = 0),
            (this.def_agi = 0),
            (this.def_magic = 0),
            (this.dodge = 0),
            (this.hitrate = 0),
            (this.hitMagic = 0),
            (this.critical = 0),
            (this.forceHit = 0),
            (this.wil = 0),
            (this.tough = 0),
            (this.block = 0),
            (this.brkArmor = 0),
            (this.insight = 0),
            (this.def_field = 0),
            (this.back = 0),
            (this.magic_back = 0),
            (this.life_absorption = 0),
            (this.mana_absorption = 0),
            (this.magic_penetration = 0),
            (this.heal_recovery = 0),
            (this.mana_recovery = 0),
            (this.recovery = 0),
            (this.keepout_atk_time = 0),
            this.setTabStatus(!1, _.ModelConst.BUFFER_DIE_1HP_CHECK),
            this.setTabStatus(!1, _.ModelConst.BUFFER_DIE_FULLHP_CHECK),
            this.setTabStatus(!1, _.ModelConst.BUFFER_DIE_DELAY_CHECK));
        }),
        (t.prototype.updateAllKillMission = function (e, t, i) {
          if (null != e && null != t && e.length == t.length)
            for (var o = null, n = -1, a = 0; a < e.length; a++) {
              n = e[a];
              for (var r = 0; r < this.missionList.length; r++)
                ((o = this.missionList[r]),
                  null != o && o.updateKillMission(n, t[a], i));
            }
        }),
        (t.prototype.fromBytesByAutoMove = function (e) {
          for (var t = [], i = e.getByte(), o = 0; i > o; o++) {
            var n = e.getByte(),
              a = e.getByte(),
              r = e.getShort(),
              s = e.getByte(),
              l = e.getByte();
            t.push([n, a]);
            var u = [r, s, l];
            t.push(u);
          }
          var _ = e.getByte(),
            d = e.getByte();
          (t.push([_, d]), I.MainPlayerAi.ins.startAutoMove(t));
        }),
        (t.prototype.setGridXY = function (e, t) {
          ((this.gridX = e), (this.gridY = t));
        }),
        (t.prototype.getGridX = function () {
          return this.gridX;
        }),
        (t.prototype.getGridY = function () {
          return this.gridY;
        }),
        Object.defineProperty(t.prototype, "isAutoMoving", {
          get: function () {
            return this._isAutoMoving;
          },
          set: function (e) {
            ((this._isAutoMoving = e),
              e
                ? f["default"].showView(
                    A.ModName.Scene,
                    A.SceneViewType.AutoMoveTips,
                  )
                : (this.autoMoveEndPt.setTo(0, 0),
                  (this.autoMovePath = null),
                  f["default"].hideView(
                    A.ModName.Scene,
                    A.SceneViewType.AutoMoveTips,
                  )));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.isAutoMove = function () {
          return this._isAutoMoving;
        }),
        (t.prototype.getGenreIDForWeaponType = function () {
          var e = null;
          (null != this.bag &&
            (e = this.bag.getItem(s["default"].WEAPON_LEFT_POS)),
            null != this.bag &&
              null == e &&
              (e = this.bag.getItem(s["default"].WEAPON_RIGHT_POS)));
          var t = 0;
          if (null == e) return (t = 1);
          switch (e.type) {
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_BLADE:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_BLADE:
              t = 1;
              break;
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_SWORD:
              t = 2;
              break;
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_LANCE:
              t = 3;
              break;
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_CROSSBOW:
              t = 4;
              break;
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_HEAVY:
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_HEAVY:
              t = 5;
              break;
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_BOW:
              t = 6;
              break;
            case n["default"].ITEM_TYPE_WEAPON_TWOHAND_STAFF:
            case n["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND:
              t = 7;
          }
          return t;
        }),
        (t.MAX_LEARN_SKILL_SIZE = 20),
        (t.skillShieldArr = [5900, 5980]),
        (t.MAX_AUTO_SKILL_COUNT = 4),
        (t.BSTATUS_ESCAPE = 1),
        t
      );
    })(d.ModelVo);
  t["default"] = N;
});
