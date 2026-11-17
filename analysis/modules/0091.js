(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(4),
    n = i(10),
    a = i(12),
    r = i(20),
    s = i(30),
    l = i(8),
    u = i(31),
    _ = i(56),
    d = (function (e) {
      function t() {
        var t = e.call(this) || this;
        return (
          (t.bornStatus = Long.ZERO),
          (t.newReflection = 0),
          t.setType(u.MODEL_TYPE.TYPE_MONSTER),
          t
        );
      }
      return (
        __extends(t, e),
        (t.fromBytes = function (e, i) {
          null == i && (i = new t());
          try {
            var o = e.getInt();
            if (0 > o) return null;
            ((i.id = o),
              (i.name = e.getString()),
              (i.icon1 = e.getLong()),
              (i.level = e.getByte()),
              (i.monstertype = e.getByte()),
              (i.hpMax = e.getInt()),
              (i.mpMax = e.getInt()),
              (i.speed = e.getInt()),
              (i.atkType = e.getByte()),
              (i.atkMin = e.getInt()),
              (i.atkMax = e.getInt()),
              (i.atk_time = e.getByte()),
              (i.dodge = e.getInt()),
              (i.atk_str = e.getInt()),
              (i.atk_str_nearby = e.getInt()),
              (i.atk_str_range = e.getInt()),
              (i.atk_agi = e.getInt()),
              (i.atk_agi_nearby = e.getInt()),
              (i.atk_agi_range = e.getInt()),
              (i.atk_magic = e.getInt()),
              (i.def_str = e.getInt()),
              (i.def_str_nearby = e.getInt()),
              (i.def_str_range = e.getInt()),
              (i.def_agi = e.getInt()),
              (i.def_agi_nearby = e.getInt()),
              (i.def_agi_range = e.getInt()),
              (i.def_magic = e.getInt()),
              (i.hitrate = e.getInt()),
              (i.hitMagic = e.getInt()),
              (i.critical = e.getShort()),
              (i.ignoreCritical = e.getInt()),
              (i.criticalDmg = e.getInt()),
              (i.ignore_back = e.getInt()),
              (i.ignore_magic_back = e.getInt()),
              (i.ignore_block = e.getInt()),
              (i.ignore_insight = e.getInt()),
              (i.ignore_touch = e.getInt()),
              (i.ignore_wil = e.getInt()),
              (i.wil = e.getInt()),
              (i.tough = e.getInt()),
              (i.block = e.getInt()),
              (i.brkArmor = e.getInt()),
              (i.insight = e.getInt()),
              (i.def_field = e.getInt()),
              (i.back = e.getInt()),
              (i.magic_back = e.getInt()),
              (i.life_absorption = e.getInt()),
              (i.mana_absorption = e.getInt()),
              (i.magic_penetration = e.getInt()),
              (i.bornStatus = e.getLong()),
              (i.newReflection = e.getInt()));
          } catch (n) {
            console.error(n);
          }
          return i;
        }),
        (t.prototype.checkBattleMsg = function () {
          null != this.monsterAI &&
            (l.Tool.isNullText(this.message) ||
              "0" == this.message ||
              (this.message = null));
        }),
        (t.prototype.setAI = function (e) {
          this.monsterAI = e;
        }),
        (t.prototype.getAITargetPos = function () {
          return null == this.monsterAI ? -1 : this.monsterAI.targetPos;
        }),
        (t.prototype.setBattleStatus = function (t) {
          return t != _["default"].BSTATUS_ESCAPE &&
            this.isBornStatus(t) &&
            o["default"].getBufferType(t, !0) == o["default"].BUFFER_TYPE_DEBUFF
            ? !1
            : e.prototype.setBattleStatus.call(this, t);
        }),
        (t.prototype.isBattleStatus = function (t) {
          return t == _["default"].BSTATUS_ESCAPE ||
            !this.isBornStatus(t) ||
            (o["default"].getBufferType(t, !0) !=
              o["default"].BUFFER_TYPE_BUFF &&
              t !=
                o["default"].getBufferBitValue(
                  o["default"].BUFFER_DIE_CANNOT_RELIVE,
                ))
            ? e.prototype.isBattleStatus.call(this, t)
            : !0;
        }),
        (t.prototype.isBornStatus = function (e) {
          if (!this.bornStatus) return !1;
          var t = "number" == typeof e ? Long.fromNumber(e) : e;
          return !this.bornStatus.and(t).isZero();
        }),
        (t.prototype.get = function (t) {
          switch (t) {
            case a.ModelConst.NEW_REFLECTION:
              return this.newReflection;
            case a.ModelConst.ATK_TYPE:
              return this.atkType;
            case a.ModelConst.HPMAX:
              return this.hpMax;
            case a.ModelConst.MPMAX:
              return this.mpMax;
            case a.ModelConst.SPEED:
              return this.speed;
            case a.ModelConst.DODGE:
              return this.dodge;
            case a.ModelConst.LEFT_ATK_MIN:
              return l.Tool.sumValue(this.atkMin, 0, 0, a.ModelConst.MAX_ATK);
            case a.ModelConst.LEFT_ATK_MAX:
              return l.Tool.sumValue(this.atkMax, 0, 0, a.ModelConst.MAX_ATK);
            case a.ModelConst.RIGHT_ATK_MIN:
              return 0;
            case a.ModelConst.RIGHT_ATK_MAX:
              return 0;
            case a.ModelConst.LEFT_ATK_TIME:
            case a.ModelConst.ATK_TIME:
              return l.Tool.sumValue(
                this.atk_time + 1,
                0,
                a.ModelConst.MIN_HIT_TIME,
                a.ModelConst.MAX_HIT_TIME,
              );
            case a.ModelConst.RIGHT_ATK_TIME:
              return 0;
            case a.ModelConst.ATK_STR:
              return this.atk_str;
            case a.ModelConst.ATK_AGI:
              return this.atk_agi;
            case a.ModelConst.ATK_MAGIC:
              return this.atk_magic;
            case a.ModelConst.DEF_STR:
              return this.def_str;
            case a.ModelConst.DEF_AGI:
              return this.def_agi;
            case a.ModelConst.DEF_MAGIC:
              return this.def_magic;
            case a.ModelConst.WIL:
              return this.wil;
            case a.ModelConst.TOUGH:
              return this.tough;
            case a.ModelConst.BLOCK:
              return this.block;
            case a.ModelConst.IGNORE_BACK:
              return this.ignore_back;
            case a.ModelConst.IGNORE_MAGIC_BACK:
              return this.ignore_magic_back;
            case a.ModelConst.IGNORE_BLOCK:
              return this.ignore_block;
            case a.ModelConst.IGNORE_INSIGHT:
              return this.ignore_insight;
            case a.ModelConst.IGNORE_WIL:
              return this.ignore_wil;
            case a.ModelConst.IGNORE_TOUCH:
              return this.ignore_touch;
            case a.ModelConst.IGNORE_CRITICAL:
              return this.ignoreCritical;
            case a.ModelConst.BRK_ARMOR:
              return this.brkArmor;
            case a.ModelConst.MAGIC_PENETRATION:
              return this.magic_penetration;
            case a.ModelConst.INSIGHT:
              return this.insight;
            case a.ModelConst.DEF_FIELD:
              return this.def_field;
            case a.ModelConst.BACK:
              return this.back;
            case a.ModelConst.MAGIC_BACK:
              return this.magic_back;
            case a.ModelConst.LIFE_ABSORPTION:
              return this.life_absorption;
            case a.ModelConst.MANA_ABSORPTION:
              return this.mana_absorption;
            case a.ModelConst.FORCE_HIT:
              return a.ModelConst.MIN_FORCE_HITRATE;
            case a.ModelConst.ATK_STR_NEARBY:
              return this.atk_str + this.atk_str_nearby;
            case a.ModelConst.ATK_STR_RANGE:
              return this.atk_str + this.atk_str_range;
            case a.ModelConst.ATK_AGI_NEARBY:
              return this.atk_agi + this.atk_agi_nearby;
            case a.ModelConst.ATK_AGI_RANGE:
              return this.atk_agi + this.atk_agi_range;
            case a.ModelConst.DEF_STR_RANGE:
              return this.def_str + this.def_str_range;
            case a.ModelConst.DEF_STR_NEARBY:
              return this.def_str + this.def_str_nearby;
            case a.ModelConst.DEF_AGI_RANGE:
              return this.def_agi + this.def_agi_range;
            case a.ModelConst.DEF_AGI_NEARBY:
              return this.def_agi + this.def_agi_nearby;
            case a.ModelConst.BACK_MAX:
              return 100;
            default:
              return e.prototype.get.call(this, t);
          }
        }),
        (t.prototype.getAttakAnimePos = function () {
          return this.atkType == o["default"].ATKTYPE_STR ||
            this.atkType == o["default"].ATKTYPE_AGI
            ? o["default"].SKILL_POS_FRONT
            : o["default"].SKILL_POS_STAND;
        }),
        (t.prototype.getClone = function (e) {
          var i = new t();
          return (this.setMonsterData(i, e), i);
        }),
        (t.prototype.setMonsterData = function (e, t) {
          if (
            ((e.id = this.id),
            (e.name = this.name),
            (e.icon1 = l.Tool.copyLong(this.icon1, e.icon1)),
            (e.icon2 = l.Tool.copyLong(this.icon2, e.icon2)),
            (e.icon3 = l.Tool.copyLong(this.icon3, e.icon3)),
            (e.level = this.level),
            (e.monstertype = this.monstertype),
            (e._hpMax = this._hpMax),
            (e._mpMax = this._mpMax),
            (e.speed = this.speed),
            (e.atkType = this.atkType),
            (e.atkMin = this.atkMin),
            (e.atkMax = this.atkMax),
            (e.dodge = this.dodge),
            (e.atk_time = this.atk_time),
            (e.atk_str = this.atk_str),
            (e.atk_agi = this.atk_agi),
            (e.atk_str_nearby = this.atk_str_nearby),
            (e.atk_str_range = this.atk_str_range),
            (e.atk_agi_nearby = this.atk_agi_nearby),
            (e.atk_agi_range = this.atk_agi_range),
            (e.def_str_nearby = this.def_str_nearby),
            (e.def_str_range = this.def_str_range),
            (e.def_agi_nearby = this.def_agi_nearby),
            (e.def_agi_range = this.def_agi_range),
            (e.ignoreCritical = this.ignoreCritical),
            (e.criticalDmg = this.criticalDmg),
            (e.ignore_back = this.ignore_back),
            (e.ignore_magic_back = this.ignore_magic_back),
            (e.ignore_block = this.ignore_block),
            (e.ignore_insight = this.ignore_insight),
            (e.ignore_touch = this.ignore_touch),
            (e.ignore_wil = this.ignore_wil),
            (e.atk_magic = this.atk_magic),
            (e.def_str = this.def_str),
            (e.def_agi = this.def_agi),
            (e.def_magic = this.def_magic),
            (e.hitrate = this.hitrate),
            (e.hitMagic = this.hitMagic),
            (e.critical = this.critical),
            (e.wil = this.wil),
            (e.tough = this.tough),
            (e.block = this.block),
            (e.brkArmor = this.brkArmor),
            (e.insight = this.insight),
            (e.def_field = this.def_field),
            (e.back = this.back),
            (e.magic_back = this.magic_back),
            (e.life_absorption = this.life_absorption),
            (e.mana_absorption = this.mana_absorption),
            (e.magic_penetration = this.magic_penetration),
            (e.bornStatus = this.bornStatus),
            (e.escapeCond = this.escapeCond),
            (e.escapeRate = this.escapeRate),
            (e.rewardMoney = this.rewardMoney),
            (e.rewardExp = this.rewardExp),
            t)
          ) {
            var i = t / 100;
            ((e.speed = (e.speed * i) | 0),
              (e.atkMin = (e.atkMin * i) | 0),
              (e.atkMax = (e.atkMax * i) | 0),
              (e.atk_time = (e.atk_time * i) | 0),
              (e.dodge = (e.dodge * i) | 0),
              (e.atk_str = (e.atk_str * i) | 0),
              (e.atk_agi = (e.atk_agi * i) | 0),
              (e.atk_magic = (e.atk_magic * i) | 0),
              (e.def_str = (e.def_str * i) | 0),
              (e.def_agi = (e.def_agi * i) | 0),
              (e.def_magic = (e.def_magic * i) | 0),
              (e.hitrate = (e.hitrate * i) | 0),
              (e.hitMagic = (e.hitMagic * i) | 0),
              (e.critical = (e.critical * i) | 0),
              (e.wil = (e.wil * i) | 0),
              (e.tough = (e.tough * i) | 0),
              (e.block = (e.block * i) | 0),
              (e.brkArmor = (e.brkArmor * i) | 0),
              (e.insight = (e.insight * i) | 0),
              (e.def_field = (e.def_field * i) | 0),
              (e.back = (e.back * i) | 0),
              (e.magic_back = (e.magic_back * i) | 0),
              (e.life_absorption = (e.life_absorption * i) | 0),
              (e.mana_absorption = (e.mana_absorption * i) | 0),
              (e.magic_penetration = (e.magic_penetration * i) | 0),
              (e.newReflection = (e.newReflection * i) | 0),
              (e._hpMax = (e._hpMax * i) | 0),
              (e._mpMax = (e._mpMax * i) | 0));
          }
          e.monsterAI = this.monsterAI;
        }),
        (t.prototype.getDesc = function () {
          var e = new s["default"](),
            i = this.name,
            u = t.LINE_SIGN;
          (null != i &&
            (e.append(r["default"].makeColorString(i, l.Tool.COLOR_BLUE)),
            e.append(
              " " +
                l.Tool.manageString(
                  n.GameText.getText(n.GameText.TI_LEVEL),
                  this.level + "",
                ),
            ),
            e.append(u)),
            this.icon1 &&
              !this.icon1.isZero() &&
              e.append(n.GameText.STR_MONSTER_ICON + this.icon1 + u),
            e.append(
              n.GameText.STR_MONSTER_MONSTERTYPE +
                o["default"].getMonsterTypeString(this.monstertype) +
                u,
            ),
            0 != this.hpMax &&
              e.append(n.GameText.STR_MONSTER_HP_MAX + this.hpMax + u),
            0 != this.mpMax &&
              e.append(n.GameText.STR_MONSTER_MP_MAX + this.mpMax + u));
          var _ = this.speed,
            d = this.atkMin,
            p = this.atkMax,
            c = this.dodge,
            h = this.atk_str,
            f = this.atk_agi,
            T = this.atk_magic,
            E = this.def_str,
            y = this.def_agi,
            g = this.def_magic,
            v = this.hitrate,
            S = this.hitMagic,
            I = this.critical,
            m = this.wil,
            A = this.tough,
            C = this.block,
            P = this.brkArmor,
            R = this.insight,
            O = this.def_field,
            N = this.back,
            M = this.magic_back,
            L = this.life_absorption,
            w = this.mana_absorption,
            b = this.magic_penetration,
            x = this.bornStatus,
            D = this.escapeCond,
            B = this.escapeRate,
            G = this.rewardMoney,
            U = this.rewardExp,
            k = this.monsterAI,
            V = this.atkType;
          return (
            0 != _ && e.append(n.GameText.STR_MONSTER_SPEED + _ + u),
            e.append(
              n.GameText.STR_MONSTER_ATK_TYPE +
                o["default"].getAtkTypeString(V) +
                u,
            ),
            0 != d && e.append(n.GameText.STR_MONSTER_ATK_MIN + d + u),
            0 != p && e.append(n.GameText.STR_MONSTER_ATK_MAX + p + u),
            0 != c && e.append(n.GameText.STR_MONSTER_ATK_DODGE + c + u),
            0 != h && e.append(n.GameText.STR_MONSTER_ATK_STR + h + u),
            0 != f && e.append(n.GameText.STR_MONSTER_ATK_AGI + f + u),
            0 != T && e.append(n.GameText.STR_MONSTER_ATK_MAGIC + T + u),
            0 != E && e.append(n.GameText.STR_MONSTER_DEF_STR + E + u),
            0 != y && e.append(n.GameText.STR_MONSTER_DEF_AGI + y + u),
            0 != g && e.append(n.GameText.STR_MONSTER_DEF_MAGIC + g + u),
            0 != v && e.append(n.GameText.STR_MONSTER_HITRATE + v + u),
            0 != S && e.append(n.GameText.STR_MONSTER_HITMAGIC + S + u),
            0 != I && e.append(n.GameText.STR_MONSTER_CRITICAL + I + u),
            0 != m && e.append(n.GameText.STR_MONSTER_WIL + m + u),
            0 != A && e.append(n.GameText.STR_MONSTER_TOUGH + A + u),
            0 != C && e.append(n.GameText.STR_MONSTER_BLOCK + C + u),
            0 != P && e.append(n.GameText.STR_MONSTER_BRKARMOR + P + u),
            0 != R && e.append(n.GameText.STR_MONSTER_INSIGHT + R + u),
            0 != O && e.append(n.GameText.STR_MONSTER_DEF_FIELD + O + u),
            0 != N && e.append(n.GameText.STR_MONSTER_BACK + N + u),
            0 != M && e.append(n.GameText.STR_MONSTER_MAGIC_BACK + M + u),
            0 != L && e.append(n.GameText.STR_MONSTER_LIFE_ABSR + L + u),
            0 != w && e.append(n.GameText.STR_MONSTER_MANA_ABSP + w + u),
            0 != b && e.append(n.GameText.STR_MONSTER_MAGIC_PENT + b + u),
            0 != x.toNumber() &&
              e.append(n.GameText.STR_MONSTER_BORN_STATUS + x.toNumber() + u),
            0 != D && e.append(n.GameText.STR_MONSTER_ESCAPECOND + D + u),
            0 != B && e.append(n.GameText.STR_MONSTER_ESCAPE_RATE + B + u),
            0 != G &&
              e.append(
                l.Tool.manageString(
                  n.GameText.STR_MONSTER_REWARD_MONEY,
                  n.GameText.getMoneyText(a.ModelConst.MONEY3),
                ) +
                  ":" +
                  G +
                  u,
              ),
            0 != U && e.append(n.GameText.STR_MONSTER_REWARD_EXP + U + u),
            null != k && (e.append(u), e.append(k.getInfo())),
            e.toString()
          );
        }),
        (t.prototype.isHaveCanNotReliveBuffer = function () {
          return this.isBornStatus(
            o["default"].getBufferBitValue(
              o["default"].BUFFER_DIE_CANNOT_RELIVE,
            ),
          )
            ? !0
            : e.prototype.isHaveCanNotReliveBuffer.call(this);
        }),
        (t.LINE_SIGN = "\n"),
        t
      );
    })(_["default"]);
  t["default"] = d;
});
