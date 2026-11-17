(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(4),
    n = i(386),
    a = i(12),
    r = i(62),
    s = i(20),
    l = i(8),
    u = i(55),
    _ = i(242),
    d = i(61),
    p = i(244),
    c = i(243),
    h = i(13),
    f = i(251),
    T = i(21),
    E = i(56),
    y = i(241),
    g = i(24),
    v = i(181),
    S = i(17),
    I = i(54),
    m = i(245),
    A = i(180),
    C = i(184),
    P = (function () {
      function e() {}
      return (
        (e.addBufferBySpecial = function (e, t, i, a, r, s, u, _) {
          if (
            a == o["default"].BUFFER_DIE_CANNOT_RELIVE &&
            ((i = 0 | i), e > 0 && t >= 0)
          ) {
            if (0 == i && a == o["default"].BUFFER_NONE)
              return void l.Tool.debug(
                "FightTool.addBufferBySpecial() addValue = " +
                  i +
                  ",addStatus=" +
                  a,
              );
            e--;
            var d = 0 | r.readAddValue,
              p = n.Buffer.alloc(s, t, i, a, e, u, d, _);
            r.addBuffer(p);
          }
        }),
        (e.processBattleHpMpPower = function (e, t, i, o, n, r) {
          if (null == e) return !1;
          if (((i = 0 | i), e.isDead())) return !1;
          e.addValue(t, i);
          var s = d["default"].EFFECT_HIT;
          t == a.ModelConst.HP
            ? e.isDeadNoWithDelay() && (s |= d["default"].EFFECT_DIE)
            : (s |= d["default"].EFFECT_MP_CHANGE);
          var l = C["default"].createBattleTargetEffect(e.position, i, s, o, r);
          return (null != n && n.addElement(l), !0);
        }),
        (e.processBattlePower = function (t, i, u, _, p, c, f, T, E, y) {
          if (null != t && null != i && !(0 >= p)) {
            if (
              (f == o["default"].BUFFER_RESIST_DIE_1HP &&
                i.isTabStatus(a.ModelConst.BUFFER_DIE_1HP_CHECK) &&
                (f = 0),
              f == o["default"].BUFFER_RESIST_DIE_FULLHP &&
                i.isTabStatus(a.ModelConst.BUFFER_DIE_FULLHP_CHECK) &&
                (f = 0),
              f == o["default"].BUFFER_RESIST_DIE_DELAY &&
                i.isTabStatus(a.ModelConst.BUFFER_DIE_DELAY_CHECK) &&
                (f = 0),
              f != o["default"].BUFFER_NONE)
            ) {
              if (
                f != o["default"].BUFFER_TYPE_BUFF &&
                f != o["default"].BUFFER_TYPE_DEBUFF &&
                i.isBattleStatus(
                  o["default"].getBufferBitValue(
                    o["default"].BUFFER_INVINCIBLE,
                  ),
                )
              )
                return void r["default"].addPromptMsg(
                  o["default"].getBufferString(f) +
                    "无效,(" +
                    s["default"].makeColorString(i.getName(), 65280) +
                    ")无敌状态!",
                );
              if (
                o["default"].getBufferType(f) == o["default"].BUFFER_TYPE_DEBUFF
              ) {
                if (
                  i.isBattleStatus(
                    o["default"].getBufferBitValue(
                      o["default"].BUFFER_RESIST_DEBUFF,
                    ),
                  )
                )
                  return void r["default"].addPromptMsg(
                    o["default"].getBufferString(f) +
                      "无效,(" +
                      s["default"].makeColorString(i.getName(), 65280) +
                      ")全减益免疫!",
                  );
                if (
                  f == o["default"].BUFFER_STUN &&
                  i.isBattleStatus(
                    o["default"].getBufferBitValue(
                      o["default"].BUFFER_RESIST_STUN,
                    ),
                  )
                )
                  return void r["default"].addPromptMsg(
                    "(" +
                      s["default"].makeColorString(i.getName(), 65280) +
                      ")免疫定身!",
                  );
                if (
                  f == o["default"].BUFFER_SILENCE &&
                  i.isBattleStatus(
                    o["default"].getBufferBitValue(
                      o["default"].BUFFER_RESIST_SILENCE,
                    ),
                  )
                )
                  return void r["default"].addPromptMsg(
                    "(" +
                      s["default"].makeColorString(i.getName(), 65280) +
                      ")免疫封魔!",
                  );
                if (
                  f == o["default"].BUFFER_CHAO &&
                  i.isBattleStatus(
                    o["default"].getBufferBitValue(
                      o["default"].BUFFER_RESIST_CHAO,
                    ),
                  )
                )
                  return void r["default"].addPromptMsg(
                    "(" +
                      s["default"].makeColorString(i.getName(), 65280) +
                      ")免疫混乱!",
                  );
                if (
                  f == o["default"].BUFFER_BLOCK_TALK &&
                  i.isBattleStatus(
                    o["default"].getBufferBitValue(
                      o["default"].BUFFER_RESIST_TALK,
                    ),
                  )
                )
                  return void r["default"].addPromptMsg(
                    "(" +
                      s["default"].makeColorString(i.getName(), 65280) +
                      ")免疫禁言!",
                  );
                if (
                  f == o["default"].BUFFER_BLOCK_SKILL &&
                  i.isBattleStatus(
                    o["default"].getBufferBitValue(
                      o["default"].BUFFER_RESIST_SKILL,
                    ),
                  )
                )
                  return void r["default"].addPromptMsg(
                    "(" +
                      s["default"].makeColorString(i.getName(), 65280) +
                      ")免疫封技!",
                  );
                if (
                  f == o["default"].BUFFER_WEAK &&
                  i.isBattleStatus(
                    o["default"].getBufferBitValue(
                      o["default"].BUFFER_RESIST_WEAK,
                    ),
                  )
                )
                  return void r["default"].addPromptMsg(
                    "(" +
                      s["default"].makeColorString(i.getName(), 65280) +
                      ")免疫衰弱!",
                  );
                if (1 == t.isWilSuccess(i, u, _))
                  return void r["default"].addPromptMsg(
                    o["default"].getBufferString(f) +
                      "无效,(" +
                      s["default"].makeColorString(i.getName(), 65280) +
                      ")状态抵抗!",
                  );
                if (
                  f == o["default"].BUFFER_SNEER &&
                  i.isBattleStatus(
                    o["default"].getBufferBitValue(
                      o["default"].BUFFER_RESIST_SNEER,
                    ),
                  )
                )
                  return void r["default"].addSystemChat(
                    "(" +
                      s["default"].makeColorString(i.getName(), 65280) +
                      ")免疫嘲讽!",
                  );
              }
            }
            var g = 0,
              v = -1,
              S = 0;
            switch (p) {
              case o["default"].POWER_SWORD_ATK_TIME:
              case o["default"].POWER_BLADE_ATK_TIME:
              case o["default"].POWER_HEAVY_ATK_TIME:
              case o["default"].POWER_LANCE_ATK_TIME:
              case o["default"].POWER_STAFF_ATK_TIME:
              case o["default"].POWER_HAND_ATK_TIME:
              case o["default"].POWER_BOW_ATK_TIME:
              case o["default"].POWER_HAND_ITEM_ATK_TIME:
              case o["default"].POWER_ALL_ATK_TIME:
              case o["default"].POWER_BALL_ATK_TIME:
              case o["default"].POWER_GUN_ATK_TIME:
              case o["default"].POWER_HAMMER_ATK_TIME:
              case o["default"].POWER_FAN_ATK_TIME:
                var I = i.getEquipWeaponType();
                if (
                  p == o["default"].POWER_SWORD_ATK_TIME &&
                  I != o["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD &&
                  I != o["default"].ITEM_TYPE_WEAPON_TWOHAND_SWORD
                )
                  return;
                if (
                  p == o["default"].POWER_BLADE_ATK_TIME &&
                  I != o["default"].ITEM_TYPE_WEAPON_ONEHAND_BLADE &&
                  I != o["default"].ITEM_TYPE_WEAPON_TWOHAND_BLADE
                )
                  return;
                if (
                  p == o["default"].POWER_HEAVY_ATK_TIME &&
                  I != o["default"].ITEM_TYPE_WEAPON_ONEHAND_HEAVY &&
                  I != o["default"].ITEM_TYPE_WEAPON_TWOHAND_HEAVY
                )
                  return;
                if (
                  p == o["default"].POWER_LANCE_ATK_TIME &&
                  I != o["default"].ITEM_TYPE_WEAPON_TWOHAND_LANCE
                )
                  return;
                if (
                  p == o["default"].POWER_STAFF_ATK_TIME &&
                  I != o["default"].ITEM_TYPE_WEAPON_TWOHAND_STAFF
                )
                  return;
                if (
                  p == o["default"].POWER_BALL_ATK_TIME &&
                  I != o["default"].ITEM_TYPE_WEAPON_BALL
                )
                  return;
                if (
                  p == o["default"].POWER_GUN_ATK_TIME &&
                  I != o["default"].ITEM_TYPE_WEAPON_ONEHAND_GUN &&
                  I != o["default"].ITEM_TYPE_WEAPON_TWOHAND_GUN
                )
                  return;
                if (
                  p == o["default"].POWER_HAMMER_ATK_TIME &&
                  I != o["default"].ITEM_TYPE_WEAPON_ONEHAND_HAMMER &&
                  I != o["default"].ITEM_TYPE_WEAPON_TWOHAND_HAMMER
                )
                  return;
                if (
                  p == o["default"].POWER_FAN_ATK_TIME &&
                  I != o["default"].ITEM_TYPE_WEAPON_TWOHAND_FAN
                )
                  return;
                if (
                  p == o["default"].POWER_HAND_ATK_TIME &&
                  I != o["default"].BACK_ERROR_NULL_HAND
                )
                  return;
                if (
                  p == o["default"].POWER_BOW_ATK_TIME &&
                  I != o["default"].ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW &&
                  I != o["default"].ITEM_TYPE_WEAPON_TWOHAND_CROSSBOW &&
                  I != o["default"].ITEM_TYPE_WEAPON_TWOHAND_BOW
                )
                  return;
                if (
                  p == o["default"].POWER_HAND_ITEM_ATK_TIME &&
                  I != o["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND
                )
                  return;
                ((v = a.ModelConst.ATK_TIME), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_SPEED:
                ((v = a.ModelConst.SPEED), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_SPEED_PERCENT:
                ((v = a.ModelConst.SPEED),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_ATK_STR:
                ((v = a.ModelConst.ATK_STR), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_ATK_STR_PERCENT:
                ((v = a.ModelConst.ATK_STR),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_ATK_STR_NEARBY:
                ((v = a.ModelConst.ATK_STR_NEARBY), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_ATK_STR_NEARBY_PERCENT:
                ((v = a.ModelConst.ATK_STR_NEARBY),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_ATK_STR_RANGE:
                ((v = a.ModelConst.ATK_STR_RANGE), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_ATK_STR_RANGE_PERCENT:
                ((v = a.ModelConst.ATK_STR_RANGE),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_ATK_AGI_NEARBY:
                ((v = a.ModelConst.ATK_AGI_NEARBY), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_ATK_AGI_NEARBY_PERCENT:
                ((v = a.ModelConst.ATK_AGI_NEARBY),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_ATK_AGI_RANGE:
                ((v = a.ModelConst.ATK_AGI_RANGE), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_ATK_AGI_RANGE_PERCENT:
                ((v = a.ModelConst.ATK_AGI_RANGE),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_DEF_STR_NEARBY:
                ((v = a.ModelConst.DEF_STR_NEARBY), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_DEF_STR_NEARBY_PERCENT:
                ((v = a.ModelConst.DEF_STR_NEARBY),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_DEF_STR_RANGE:
                ((v = a.ModelConst.DEF_STR_RANGE), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_DEF_STR_RANGE_PERCENT:
                ((v = a.ModelConst.DEF_STR_RANGE),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_DEF_AGI_NEARBY:
                ((v = a.ModelConst.DEF_AGI_NEARBY), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_DEF_AGI_NEARBY_PERCENT:
                ((v = a.ModelConst.DEF_AGI_NEARBY),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_DEF_AGI_RANGE:
                ((v = a.ModelConst.DEF_AGI_RANGE), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_DEF_AGI_RANGE_PERCENT:
                ((v = a.ModelConst.DEF_AGI_RANGE),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_ATK_AGI:
                ((v = a.ModelConst.ATK_AGI), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_ATK_AGI_PERCENT:
                ((v = a.ModelConst.ATK_AGI),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_ATK_MAGIC:
                ((v = a.ModelConst.ATK_MAGIC), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_ATK_MAGIC_PERCENT:
                ((v = a.ModelConst.ATK_MAGIC),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_DEF_STR:
                ((v = a.ModelConst.DEF_STR), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_DEF_STR_PERCENT:
                ((v = a.ModelConst.DEF_STR),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_DEF_AGI:
                ((v = a.ModelConst.DEF_AGI), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_DEF_AGI_PERCENT:
                ((v = a.ModelConst.DEF_AGI),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_DEF_MAGIC:
                ((v = a.ModelConst.DEF_MAGIC), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_DEF_MAGIC_PERCENT:
                ((v = a.ModelConst.DEF_MAGIC),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_CRITICAL:
                ((v = a.ModelConst.CRITICAL), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_CRITICAL_PERCENT:
                ((v = a.ModelConst.CRITICAL),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_MAGIC_HITRATE:
                ((v = a.ModelConst.HIT_MAGIC), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_MAGIC_HITRATE_PERCENT:
                ((v = a.ModelConst.HIT_MAGIC),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_HITRATE:
                ((v = a.ModelConst.HIT_RATE), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_HITRATE_PERCENT:
                ((v = a.ModelConst.HIT_RATE),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_HIT_FORCE:
                ((v = a.ModelConst.FORCE_HIT), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_HIT_FORCE_PERCENT:
                ((v = a.ModelConst.FORCE_HIT),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_DODGE:
                ((v = a.ModelConst.DODGE), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_DODGE_PERCENT:
                ((v = a.ModelConst.DODGE),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_WIL:
                ((v = a.ModelConst.WIL), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_WIL_PERCENT:
                ((v = a.ModelConst.WIL),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_TOUGH:
                ((v = a.ModelConst.TOUGH), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_TOUGH_PERCENT:
                ((v = a.ModelConst.TOUGH),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_PENETRATION:
                ((v = a.ModelConst.BRK_ARMOR), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_PENETRATION_PERCENT:
                ((v = a.ModelConst.BRK_ARMOR),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_MAGIC_PENETRATION:
                ((v = a.ModelConst.MAGIC_PENETRATION),
                  (g = c),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_MAGIC_PENETRATION_PERCENT:
                ((v = a.ModelConst.MAGIC_PENETRATION),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_BLOCK:
                ((v = a.ModelConst.BLOCK), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_BLOCK_PERCENT:
                ((v = a.ModelConst.BLOCK),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_DEF_FIELD:
                ((v = a.ModelConst.DEF_FIELD), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_DEF_FIELD_PERCENT:
                ((v = a.ModelConst.DEF_FIELD),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_INSIGHT:
                ((v = a.ModelConst.INSIGHT), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_INSIGHT_PERCENT:
                ((v = a.ModelConst.INSIGHT),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_BACK:
                ((v = a.ModelConst.BACK), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_BACK_PERCENT:
                ((v = a.ModelConst.BACK),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_MAGIC_BACK:
                ((v = a.ModelConst.MAGIC_BACK), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_MAGIC_BACK_PERCENT:
                ((v = a.ModelConst.MAGIC_BACK),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_LIFE_ABSORPTION:
                ((v = a.ModelConst.LIFE_ABSORPTION), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_LIFE_ABSORPTION_PERCENT:
                ((v = a.ModelConst.LIFE_ABSORPTION),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_MANA_ABSORPTION:
                ((v = a.ModelConst.MANA_ABSORPTION), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_MANA_ABSORPTION_PERCENT:
                ((v = a.ModelConst.MANA_ABSORPTION),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_HEAL_RECOVERY:
                ((v = a.ModelConst.HEAL_RECOVERY), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_HEAL_RECOVERY_PERCENT:
                ((v = a.ModelConst.HEAL_RECOVERY),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_MANA_RECOVERY:
                ((v = a.ModelConst.MANA_RECOVERY), (g = c), i.addValue(v, g));
                break;
              case o["default"].POWER_MANA_RECOVERY_PERCENT:
                ((v = a.ModelConst.MANA_RECOVERY),
                  (g = h.GUtil.intNum((c * i.get(v)) / 100)),
                  i.addValue(v, g));
                break;
              case o["default"].POWER_HP:
                if (
                  ((v = a.ModelConst.HP),
                  (g = c),
                  null != _ &&
                    _.area != o["default"].SKILL_AREA_MY_SELF &&
                    ((g = h.GUtil.intNum(g)),
                    e.processBattleKeepOutPower(i, g, y)))
                )
                  break;
                if (
                  (g > 0 &&
                    i.isBattleStatus(
                      o["default"].getBufferBitValue(o["default"].BUFFER_BURN),
                    ) &&
                    (g /= 2),
                  (g = h.GUtil.intNum(g)),
                  0 == e.processBattleHpMpPower(i, v, g, E, y))
                )
                  return void e.addBufferBySpecial(T, v, g, f, i, t, E, u);
                t.checkDie1Hp(i, null);
                break;
              case o["default"].POWER_HP_PERCENT:
                v = a.ModelConst.HP;
                var m = i.get(a.ModelConst.HPMAX);
                if (
                  ((g =
                    m % 100 == 0 ? c * ((m / 100) | 0) : ((c * m) / 100) | 0),
                  (g = 0 | g),
                  null != _ && _.area != o["default"].SKILL_AREA_MY_SELF)
                ) {
                  var A = e.processBattleKeepOutPower(i, g, y);
                  if (A) {
                    var C = i.get(a.ModelConst.NEW_REFLECTION);
                    if (!C) break;
                    var P = 0;
                    if (
                      ((P =
                        m % 100 == 0
                          ? C * ((m / 100) | 0)
                          : ((C * m) / 100) | 0),
                      (g += P),
                      l.Tool.debug(
                        "回合:" +
                          t.round +
                          ",pos:" +
                          i.position +
                          ",newReflection:" +
                          C +
                          ",defValue:" +
                          P +
                          ",addValue:" +
                          g,
                      ),
                      g >= 0)
                    )
                      return;
                  }
                }
                if (0 > g) {
                  var R = e.calTouch(i);
                  if (
                    (null != u &&
                      i != u &&
                      (R -= u.get(a.ModelConst.IGNORE_TOUCH)),
                    R > d["default"].MAX_RATE_TOUCH &&
                      (R = d["default"].MAX_RATE_TOUCH),
                    l.Tool.debug(
                      "回合:" +
                        t.round +
                        ",pos:" +
                        i.position +
                        ",targetPos:" +
                        (u && u.position) +
                        "getTouch:" +
                        R +
                        "addValue:" +
                        g,
                    ),
                    R > 0)
                  ) {
                    if (Math.abs(g) % 1e3 == 0) {
                      var O = (((g / 1e3) | 0) * R) | 0;
                      g -= O;
                    } else {
                      var O = ((g * R) / 1e3) | 0;
                      g -= O;
                    }
                    g > 0 && (g = 0);
                  }
                }
                if (
                  (g > 0 &&
                    i.isBattleStatus(
                      o["default"].getBufferBitValue(o["default"].BUFFER_BURN),
                    ) &&
                    (g /= 2),
                  (g = h.GUtil.intNum(g)),
                  0 == e.processBattleHpMpPower(i, v, g, E, y))
                )
                  return void e.addBufferBySpecial(T, v, g, f, i, t, E, u);
                t.checkDie1Hp(i, null);
                break;
              case o["default"].POWER_RECOVER:
                if (
                  ((g = h.GUtil.intNum(g)),
                  0 == this.processBattleReborn(i, g, g, E, y))
                )
                  return;
                break;
              case o["default"].POWER_RECOVER_PERCENT:
                var N = h.GUtil.intNum((c * i.get(a.ModelConst.HPMAX)) / 100),
                  M = h.GUtil.intNum((c * i.get(a.ModelConst.MPMAX)) / 100);
                if (0 == this.processBattleReborn(i, N, M, E, y)) return;
                break;
              case o["default"].POWER_MP:
                if (
                  ((v = a.ModelConst.MP),
                  (g = c),
                  g > 0 &&
                    i.isBattleStatus(
                      o["default"].getBufferBitValue(
                        o["default"].BUFFER_POISON,
                      ),
                    ) &&
                    (g /= 2),
                  (g = h.GUtil.intNum(g)),
                  0 == e.processBattleHpMpPower(i, v, g, E, y))
                )
                  return void e.addBufferBySpecial(T, v, g, f, i, t, E, u);
                break;
              case o["default"].POWER_MP_PERCENT:
                if (
                  ((v = a.ModelConst.MP),
                  (g = (c * i.get(a.ModelConst.MPMAX)) / 100),
                  (g = h.GUtil.intNum(g)),
                  g > 0 &&
                    i.isBattleStatus(
                      o["default"].getBufferBitValue(
                        o["default"].BUFFER_POISON,
                      ),
                    ) &&
                    ((g /= 2), (g = h.GUtil.intNum(g))),
                  0 == e.processBattleHpMpPower(i, v, g, E, y))
                )
                  return void e.addBufferBySpecial(T, v, g, f, i, t, E, u);
                break;
              case o["default"].POWER_REMOVE_STATUS:
                ((v = a.ModelConst.BUFFER_REMOVE_STATUS),
                  (g = c),
                  i.removeBufferByStatus(c));
                break;
              case o["default"].POWER_KEEPOUT_ATK_TIME:
                ((v = a.ModelConst.KEEPOUT_ATK_TIME),
                  (g = c),
                  (S = i.keepout_atk_time),
                  0 > g &&
                    0 >= S + g &&
                    i.isTabStatus(a.ModelConst.TAG_IS_KEEP_OUT) &&
                    g++,
                  i.addValue(v, g));
                break;
              default:
                f &&
                  console.error(
                    "技能<<" +
                      _.name +
                      ">>配置出错，statusBit:" +
                      f +
                      " 配在了无效的 power:" +
                      p,
                  );
            }
            if (T > 0 && v >= 0) {
              if (0 == g && f == o["default"].BUFFER_NONE) return;
              T--;
              var L = i.readAddValue;
              p == o["default"].POWER_KEEPOUT_ATK_TIME &&
                0 > g &&
                i.isTabStatus(a.ModelConst.TAG_IS_KEEP_OUT) &&
                (S--, (L = i.keepout_atk_time - S));
              var w = n.Buffer.alloc(t, v, 0 | g, f, T, E, 0 | L, u);
              (l.Tool.debug(
                "增加buff,施法者是：" +
                  u.getName() +
                  ", attrID=" +
                  v +
                  ", addStatus=" +
                  f +
                  ", lastRound=" +
                  T +
                  ", animeID=" +
                  E +
                  ", realAdd=" +
                  L,
              ),
                i.addBuffer(w));
            }
          }
        }),
        (e.processBattleReborn = function (e, t, i, n, r) {
          if (0 == e.isDead()) return !1;
          if (
            e.isBattleStatus(
              o["default"].getBufferBitValue(
                o["default"].BUFFER_DIE_CANNOT_RELIVE,
              ),
            )
          )
            return !1;
          (e.clearBufferList(!0), e.addValue(a.ModelConst.HP, t));
          var s = d["default"].EFFECT_HIT | d["default"].EFFECT_REBORN,
            l = C["default"].createBattleTargetEffect(e.position, t, s, n);
          return (
            null != r && r.addElement(l),
            0 != i && e.addValue(a.ModelConst.MP, i),
            !0
          );
        }),
        (e.processBattleKeepOutPower = function (e, t, i) {
          if (null == e) return !1;
          if (((t = 0 | t), t >= 0)) return !1;
          if (e.keepout_atk_time <= 0) return !1;
          var o = d["default"].EFFECT_HIT;
          (0 == e.isTabStatus(a.ModelConst.TAG_IS_KEEP_OUT) &&
            (o |= d["default"].EFFECT_KEEPOUT),
            e.setTabStatus(!0, a.ModelConst.TAG_IS_KEEP_OUT));
          var n = C["default"].createBattleTargetEffect(
            e.position,
            0,
            o,
            0,
            !1,
          );
          return (null != i && i.addElement(n), !0);
        }),
        (e.selectRandTarget = function (t, i, o) {
          var n = 0,
            a = t.getLeftPosNum();
          1 == o
            ? 1 == e.isLeftSide(i.position) &&
              ((n = d["default"].LEFT_MAX_POS), (a = d["default"].MAX_POS))
            : 0 == e.isLeftSide(i.position) &&
              ((n = d["default"].LEFT_MAX_POS), (a = d["default"].MAX_POS));
          for (
            var r = new Array(d["default"].MAX_POS), s = 0, u = n;
            a > u;
            u++
          ) {
            var _ = t.getPlayerByPos(u);
            0 != t.isValidBattlePlayer(_) &&
              1 != l.Tool.isArrayIndexOutOfBounds(s, r) &&
              ((r[s] = _.position), s++);
          }
          if (0 >= s) return n;
          if (1 == s) return r[0];
          var p = t.randRange(0, s - 1);
          return 1 == l.Tool.isArrayIndexOutOfBounds(p, r) ? n : r[p];
        }),
        (e.selectRandActivePlayer = function (e, t) {
          for (
            var i = 0,
              o = d["default"].MAX_POS,
              n = new Array(d["default"].MAX_POS),
              a = 0,
              r = i;
            o > r;
            r++
          ) {
            var s = e.getPlayerByPos(r);
            0 != e.isValidBattlePlayer(s) &&
              s.position != t.position &&
              1 != l.Tool.isArrayIndexOutOfBounds(a, n) &&
              ((n[a] = s.position), a++);
          }
          if (0 >= a) return i;
          if (1 == a) return n[0];
          var u = e.randRange(0, a - 1);
          return 1 == l.Tool.isArrayIndexOutOfBounds(u, n) ? i : n[u];
        }),
        (e.selectValueTarget = function (t, i, n, r) {
          var s = 0,
            l = t.getLeftPosNum();
          1 == r
            ? 1 == e.isLeftSide(i.position) &&
              ((s = d["default"].LEFT_MAX_POS), (l = d["default"].MAX_POS))
            : 0 == e.isLeftSide(i.position) &&
              ((s = d["default"].LEFT_MAX_POS), (l = d["default"].MAX_POS));
          for (var u = -1, _ = -1, p = s; l > p; p++) {
            var c = t.getPlayerByPos(p);
            if (0 != t.isValidBattlePlayer(c)) {
              var h = 0;
              switch (n) {
                case o["default"].AI_HATE_MIN:
                case o["default"].AI_HATE_MAX:
                  h = c.get(a.ModelConst.ARGO);
                  break;
                case o["default"].AI_HP_MIN_ENEMY:
                case o["default"].AI_HP_MAX_ENEMY:
                case o["default"].AI_HP_MIN_FRIEND:
                case o["default"].AI_HP_MAX_FRIEND:
                  h = c.get(a.ModelConst.HP);
                  break;
                case o["default"].AI_SPEED_MIN_ENEMY:
                case o["default"].AI_SPEED_MAX_ENEMY:
                case o["default"].AI_SPEED_MIN_FRIEND:
                case o["default"].AI_SPEED_MAX_FRIEND:
                  h = c.get(a.ModelConst.SPEED);
              }
              (-1 == u && ((_ = p), (u = h)),
                (n == o["default"].AI_HATE_MIN ||
                  n == o["default"].AI_HP_MIN_ENEMY ||
                  n == o["default"].AI_SPEED_MIN_ENEMY ||
                  n == o["default"].AI_HP_MIN_FRIEND ||
                  n == o["default"].AI_SPEED_MIN_FRIEND) &&
                  u > h &&
                  ((_ = p), (u = h)),
                (n == o["default"].AI_HATE_MAX ||
                  n == o["default"].AI_HP_MAX_ENEMY ||
                  n == o["default"].AI_SPEED_MAX_ENEMY ||
                  n == o["default"].AI_HP_MAX_FRIEND ||
                  n == o["default"].AI_SPEED_MAX_FRIEND) &&
                  h > u &&
                  ((_ = p), (u = h)));
            }
          }
          return _;
        }),
        (e.selectRandDeadFriend = function (t, i) {
          var o = 0,
            n = t.getLeftPosNum();
          0 == e.isLeftSide(i.position) &&
            ((o = d["default"].LEFT_MAX_POS), (n = d["default"].MAX_POS));
          for (
            var a = new Array(d["default"].MAX_POS), r = 0, s = o;
            n > s;
            s++
          ) {
            var u = t.getPlayerByPos(s);
            null != u &&
              1 != u.isBattleStatus(E["default"].BSTATUS_ESCAPE) &&
              0 != u.isDead() &&
              1 != l.Tool.isArrayIndexOutOfBounds(r, a) &&
              ((a[r] = u.position), r++);
          }
          if (0 >= r) return o;
          if (1 == r) return a[0];
          var _ = t.randRange(0, r - 1);
          return 1 == l.Tool.isArrayIndexOutOfBounds(_, a) ? o : a[_];
        }),
        (e.getPlayerByPos = function (e) {
          return this._obj[e];
        }),
        (e.getPlayer = function (e) {
          return e ? this._obj[e.position] : void 0;
        }),
        (e.setPlayer = function (e, t) {
          var i = this._obj[e.position];
          (i && S["default"].release(i), (this._obj[e.position] = t));
        }),
        (e.clearPlayer = function () {
          S["default"].releaseObj(this._obj);
        }),
        (e.isAnimationIDCheck = function (e) {
          if (null == e) return !0;
          var t = !1,
            i = e.getCurAnimation();
          if (null == i) t = !0;
          else {
            var o = i.getCheckId();
            o >= 0 && i.curFrame == o ? (t = !0) : i.looptime <= 0 && (t = !0);
          }
          return t;
        }),
        (e.getPetOwnerPos = function (e) {
          if (null == e) return -1;
          if (e.type == o.MODEL_TYPE.TYPE_PET) {
            var t = e;
            if (null != t.owner) return t.owner.position;
          }
          return e.position;
        }),
        (e.getTarget = function (e) {
          if (null == e) return null;
          var t;
          if (((t = Array.isArray(e) ? e : e.arr), !t || t.length <= 0))
            return null;
          for (var i = [], o = 0; o < t.length; o++) {
            var n = t[o];
            null != n && (i[o] = n);
          }
          return i;
        }),
        (e.isSameSide = function (t, i) {
          var o = e.getPositionSide(t),
            n = e.getPositionSide(i);
          return o == n;
        }),
        (e.getPositionSide = function (e) {
          return e < d["default"].LEFT_MAX_POS
            ? d["default"].LEFT_SIDE
            : d["default"].RIGHT_SIDE;
        }),
        (e.isLeftSide = function (t) {
          return e.getPositionSide(t) == d["default"].LEFT_SIDE;
        }),
        (e.getPositionColumn = function (t) {
          return e.isLeftSide(t)
            ? 0 == (1 & t)
              ? d["default"].POSITION_COLUMN_1
              : d["default"].POSITION_COLUMN_2
            : 0 == (1 & t)
              ? d["default"].POSITION_COLUMN_3
              : d["default"].POSITION_COLUMN_4;
        }),
        (e.isEffectStatus = function (e, t) {
          return 0 != (e & t);
        }),
        (e.createLocalBattle = function (e, t, i) {
          console.log("创建本地战斗（单人");
          var o = new f["default"](e, t, d["default"].LOCAL, i);
          return o;
        }),
        (e.createRemoteBattle = function (e, t, i) {
          console.log("创建联网战斗（组队打怪）");
          var o = new f["default"](e, t, d["default"].REMOTE, i);
          return o;
        }),
        (e.createPKBattle = function (e, t) {
          console.log("创建PK战斗（Player VS Player）");
          var i = new f["default"](e, t, d["default"].PK, null);
          return i;
        }),
        (e.calTouch = function (e) {
          if (null == e) return 0;
          var t = e.get(a.ModelConst.TOUGH);
          return (
            e.isBattleStatus(
              o["default"].getBufferBitValue(o["default"].BUFFER_BLOOD),
            ) && (t = (t / 2) | 0),
            e.isBattleStatus(
              o["default"].getBufferBitValue(o["default"].BUFFER_WEAK),
            ) && (t = (t / 2) | 0),
            0 >= t ? 0 : 0 | t
          );
        }),
        (e.getLeftRightTypeTarget = function (e, t) {
          (e.push(t), e.push(t % 2 == 0 ? t + 1 : t - 1));
        }),
        (e.removeControlByType = function (e, t) {
          if (null != e) {
            var i = e.size();
            if (0 != i)
              for (var o = i - 1; o >= 0; o--) {
                var n = e.elementAt(o);
                null != n && n.type == t && e.removeElement(n);
              }
          }
        }),
        (e.getBufferdescInfo = function (e) {
          var t = "";
          return (t +=
            o["default"].getBufferType(e) == o["default"].BUFFER_TYPE_BUFF
              ? s["default"].makeColorString(
                  "(" + o["default"].getBufferString(e) + ")",
                  T["default"].COLOR_GREEN,
                )
              : s["default"].makeColorString(
                  "(" + o["default"].getBufferString(e) + ")",
                  T["default"].COLOR_RED,
                ));
        }),
        (e.sortModelList = function (e) {
          var t = S["default"].alloc(g["default"]);
          t.length = e.size();
          for (var i = 0; i < e.size(); i++) {
            for (var o = e.elementAt(i), n = 0; ;) {
              if (n >= t.size()) break;
              var a = t.elementAt(n);
              if (
                a &&
                a.battleSprite &&
                o.battleSprite.spriteY < a.battleSprite.spriteY
              ) {
                t.insertElementAt(o, n);
                break;
              }
              n++;
            }
            n == t.size() && t.addElement(o);
          }
          return t;
        }),
        (e.createBattleDoAttack = function (e, t, i, o, n, a, r, s) {
          if (null == e) return null;
          var l = y["default"].alloc(e, d["default"].BATTLE_CONTROL_DO_ATTACK),
            u = S["default"].alloc(_["default"]);
          return (
            (this.effectAnimeId = a),
            u.setData(e, t, i, o, n, a, r, s),
            (l.obj = u),
            l
          );
        }),
        (e.addBattleSprite = function (t, i, o) {
          if (null != o && null != o.battleSprite && null != t) {
            (t.setMotionAlive(!0),
              t.setMotionTurnOff(!0),
              t.setCurAnimationLoopTime(i));
            var n = 0,
              a = 0;
            (1522 == this.effectAnimeId && ((n = 200), (a = -25)),
              t.setSpritePosition(
                o.battleSprite.spriteX + n,
                o.battleSprite.spriteY + a,
              ),
              (t.scale = 2),
              e.isLeftSide(o.vo.position) || t.setRotate(!0),
              t.parent || I["default"].ins.scene.addChild(t),
              o.battleEffectSpriteList.push(t));
          }
        }),
        (e.createBattlePlayerAnimation = function (e, t, i, o, n, a, r, s) {
          if ((void 0 === s && (s = !1), null == e)) return null;
          var l = e.getPlayerByPos(t);
          if (null == l) return null;
          var u = y["default"].alloc(
              e,
              d["default"].BATTLE_CONTROL_PLAYER_ANIMATION,
            ),
            _ = S["default"].alloc(p["default"]);
          return (
            _.setData(e, l, i, o, n, a, r),
            (_.isMagicField = s),
            (u.obj = _),
            u
          );
        }),
        (e.getAniEffectByControl = function (t, i, o, n) {
          if (null == i)
            return void console.debug(
              "FightTool.getAniEffectListByControl() ERROR: effectControl is null",
            );
          if (null == t)
            return void console.debug(
              "FightTool.getAniEffectListByControl() ERROR: aniEngine is null",
            );
          if (null == n)
            return void console.debug(
              "FightTool.getAniEffectListByControl() ERROR: vector is null",
            );
          try {
            var r = i.byte0,
              s = i.counter,
              _ = i.int0,
              p = i.int1,
              c = e.isEffectStatus(s, d["default"].EFFECT_CRITICAL),
              h = e.isEffectStatus(s, d["default"].EFFECT_DIE),
              f = e.isEffectStatus(s, d["default"].EFFECT_HIT),
              T = e.isEffectStatus(s, d["default"].EFFECT_REBORN),
              E = e.isEffectStatus(s, d["default"].EFFECT_STUN),
              y = e.isEffectStatus(s, d["default"].EFFECT_MP_CHANGE),
              g = e.isEffectStatus(s, d["default"].EFFECT_BLOCK),
              I = e.isEffectStatus(s, d["default"].EFFECT_DEF_FIELD),
              C = e.isEffectStatus(s, d["default"].EFFECT_TOUCH),
              P = e.isEffectStatus(s, d["default"].EFFECT_DIE_DELAY),
              R = e.isEffectStatus(s, d["default"].EFFECT_KEEPOUT),
              O = void 0;
            if (p > 0) {
              var N = u.SpriteTool.createBattleEffSprite(p);
              e.addBattleSprite(N, 1, t.getPlayerByPos(r));
            }
            if (
              (E && ((O = e.createBattlePlayerShake(t, r, 6)), n.addElement(O)),
              T && ((O = e.createBattlePlayerVisible(t, r)), n.addElement(O)),
              f)
            ) {
              if (R) {
                var M = m["default"].alloc(d.BattleImageType.offet);
                return (
                  (O = e.createNumEffect(
                    t,
                    null,
                    t.getPlayerByPos(r),
                    -1,
                    0,
                    0,
                    -1,
                    M,
                  )),
                  e.updateAffectCount(O, o, r),
                  void n.addElement(O)
                );
              }
              if (0 != _)
                ((1 == y && 0 > _) ||
                  ((O = e.createNumEffect2(t, _, r, c, y)),
                  e.updateAffectCount(O, o, r),
                  n.insertElementAt(O, 0)),
                  (O = e.createHPMPUpdate(
                    t,
                    r,
                    y ? a.ModelConst.MP_DISPLAY : a.ModelConst.HP_DISPLAY,
                    _,
                  )),
                  n.addElement(O));
              else if (C) {
                if (((O = e.createNumEffect2(t, _, r, c, y)), null != O)) {
                  var L = O.obj;
                  ((L.setIndex = v["default"].BATTLE_TOUGHNESS),
                    L.numSet && S["default"].release(L.numSet),
                    (L.numSet = A["default"].alloc(L.setIndex)));
                }
                (e.updateAffectCount(O, o, r), n.insertElementAt(O, 0));
              }
              0 == y &&
                (0 > _ || I || C) &&
                ((O = e.createBattlePlayerAnimation(
                  t,
                  r,
                  u.SprConst.ANIMATION_BATTLE_ATTACK_HURT,
                  u.SprConst.ANIMATION_BATTLE_STAND,
                  1,
                  0,
                  h,
                  I,
                )),
                n.addElement(O));
            } else {
              if (P)
                return (
                  (O = e.createBattlePlayerAnimation(
                    t,
                    r,
                    u.SprConst.ANIMATION_BATTLE_ATTACK_HURT,
                    u.SprConst.ANIMATION_BATTLE_STAND,
                    1,
                    0,
                    !0,
                    !1,
                  )),
                  void n.addElement(O)
                );
              var M = void 0;
              if (1 == g) M = m["default"].alloc(d.BattleImageType.block);
              else {
                var w = 6;
                (e.isLeftSide(r) && (w = -w),
                  (O = e.createBattlePlayerAnimation(
                    t,
                    r,
                    u.SprConst.ANIMATION_BATTLE_ATTACK_FALLBACK,
                    u.SprConst.ANIMATION_BATTLE_STAND,
                    10,
                    w,
                    !1,
                  )),
                  n.addElement(O),
                  (M = m["default"].alloc(d.BattleImageType.miss)));
              }
              ((O = e.createNumEffect(
                t,
                null,
                t.getPlayerByPos(r),
                -1,
                0,
                0,
                -1,
                M,
              )),
                e.updateAffectCount(O, o, r),
                n.addElement(O));
            }
          } catch (b) {
            l.Tool.debug(b);
          }
        }),
        (e.updateAffectCount = function (e, t, i) {
          if (null != e && null != t && !(0 > i || i >= t.length)) {
            t[i] || (t[i] = 0);
            var o = t[i];
            (e.setDelay(2 * o), e.addVSpeed(-o), t[i]++);
          }
        }),
        (e.createBattlePlayerMove = function (e, t, i, o) {
          if (null == e) return null;
          var n = e.getPlayerByPos(t);
          if (null == n) return null;
          var a = y["default"].alloc(e, d["default"].BATTLE_CONTROL_MOVE);
          return ((a.actorPlayer = n), (a.baseX = i), (a.baseY = o), a);
        }),
        (e.createBattlePlayerShake = function (e, t, i) {
          if (null == e) return null;
          var o = e.getPlayerByPos(t);
          if (null == o || null == o.battleSprite) return null;
          var n = y["default"].alloc(
            e,
            d["default"].BATTLE_CONTROL_PLAYER_SHAKE,
          );
          return (
            (n.actorPlayer = o),
            (n.counter = i),
            (n.baseX = o.battleSprite.spriteX),
            (n.baseY = o.battleSprite.spriteY),
            n
          );
        }),
        (e.createBattlePlayerVisible = function (e, t) {
          if (null == e) return null;
          var i = e.getPlayerByPos(t);
          if (null == i) return null;
          var o = y["default"].alloc(e, d["default"].BATTLE_CONTROL_VISIBLE);
          return ((o.actorPlayer = i), o);
        }),
        (e.createBattleSkill = function (e, t) {
          if (null == e) return null;
          if (null == t)
            return (
              console.error(
                "FightTool.createBattleSkill() ERROR: aniControl is null!!!!!!!!!!!!!!!!!",
              ),
              null
            );
          var i = y["default"].alloc(e, d["default"].BATTLE_CONTROL_SKILL);
          return ((i.aniControl = t), i.getAniEffectList(e, t.subControls), i);
        }),
        (e.createBattlePlayerEscape = function (e, t) {
          if (null == e) return null;
          if (null == t)
            return (
              console.error(
                "FightTool.createBattlePlayerEscape() ERROR: aniControl is null!!!!!!!!!!!!!!!!!",
              ),
              null
            );
          var i = y["default"].alloc(e, d["default"].BATTLE_CONTROL_ESCAPE);
          return ((i.aniControl = t), i);
        }),
        (e.createHPMPUpdate = function (e, t, i, o) {
          var n = y["default"].alloc(
            e,
            d["default"].BATTLE_CONTROL_HPMP_UPDATE,
          );
          return (
            (n.actorPlayer = e.getPlayerByPos(t)),
            (n.attr = i),
            (n.attrValue = o),
            n
          );
        }),
        (e.createNumEffect = function (e, t, i, o, n, a, r, s) {
          var l = y["default"].alloc(e, d["default"].BATTLE_CONTROL_NUM_EFFECT),
            u = S["default"].alloc(c["default"]);
          return (u.setData(i, o, n, t, a, r), u.setImage(s), (l.obj = u), l);
        }),
        (e.createNumEffect2 = function (t, i, o, n, a) {
          if (null == t) return null;
          var r = t.getPlayerByPos(o);
          if (null == r)
            return (
              l.Tool.debug("createNumEffect() ERROR: p is null, p'pos = " + o),
              null
            );
          if (null == r.battleSprite) return null;
          var s = 0;
          s = e.isLeftSide(o) ? -1 : 1;
          var u = -4,
            _ = v["default"].BATTLE_DMG;
          return (
            i >= 0 && ((_ = v["default"].BATTLE_ADD), (s = 0), (u = -6)),
            1 == a && (_ = v["default"].BATTLE_MP),
            0 > i && (i = -i),
            n && (_ = v["default"].BATTLE_CRITICAL),
            e.createNumEffect(t, "" + i, r, _, 0, s, u)
          );
        }),
        (e._obj = {}),
        e
      );
    })();
  t["default"] = P;
});
