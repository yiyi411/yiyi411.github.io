(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(16),
    n = i(21),
    a = i(62),
    r = i(184),
    s = i(32),
    l = i(31),
    u = i(178),
    _ = i(91),
    d = i(56),
    p = i(57),
    c = i(4),
    h = i(10),
    f = i(12),
    T = i(8),
    E = i(75),
    y = i(61),
    g = i(13),
    v = i(24),
    S = i(5),
    I = (function () {
      function e(e, t, i, o) {
        (void 0 === e && (e = 0),
          void 0 === t && (t = []),
          void 0 === i && (i = 0),
          (this.battleSeq = 0),
          (this.rowLeft = 0),
          (this.rowRight = 0),
          (this.round = 0),
          (this.roundEndTime = 0),
          (this.type = y["default"].LOCAL),
          (this.result = y["default"].RESULT_NONE),
          (this.seed = 0),
          (this.playerList = new Array(y["default"].MAX_POS)),
          (this.guardHash = {}),
          (this.playerPlanData = new Array(y["default"].MAX_POS)),
          (this.resultControlList = []),
          (this.totalHitTime = 1),
          (this.block = 0),
          (this.isLeftHand = !0),
          (this.atkType = 0),
          (this._randCnt = 0),
          (this.waitStatus = 0),
          (this.nextBattleGroupID = -1),
          this.setType(i),
          (this.seed = e),
          (this.random = new T.Random(e)),
          (this.playerList = t),
          this.setMonsterGroup(o),
          this.initBattleRowNum(),
          (this.isLeftHavePlayer = this.isHavePlayer(
            0,
            y["default"].LEFT_MAX_POS,
          )),
          (this.isRightHavePlayer = this.isHavePlayer(
            y["default"].LEFT_MAX_POS,
            y["default"].MAX_POS,
          )),
          (this.round = 0),
          this.updateRoundEndTime(),
          this.initKeepoutatktime(t));
      }
      return (
        (e.prototype.clearData = function () {
          (this.setMonsterGroup(null),
            (this.playerList = null),
            (this.random = null),
            (this.playerPlanData = null),
            this.cleanAniControlList());
        }),
        (e.prototype.getRowLeft = function () {
          return this.rowLeft;
        }),
        (e.prototype.getRowRight = function () {
          return this.rowRight;
        }),
        (e.prototype.getLeftPosNum = function () {
          return 2 * this.getRowLeft();
        }),
        (e.prototype.getRightPosNum = function () {
          return 2 * this.getRowRight();
        }),
        (e.prototype.setRemoteWaiting = function (e) {
          this._isRemoteWaiting = e;
        }),
        (e.prototype.isRemoteWaiting = function () {
          return this._isRemoteWaiting;
        }),
        (e.prototype.getPlanTime = function () {
          return n["default"].getPlanTime(this.roundEndTime);
        }),
        (e.prototype.updateRoundEndTime = function () {
          0 == this.round
            ? (this.roundEndTime =
                o["default"].timer.serverTime +
                y["default"].FIRST_ROUND_PLAN_TIME)
            : (this.roundEndTime =
                o["default"].timer.serverTime +
                y["default"].NORMAL_ROUND_PLAN_TIME);
        }),
        (e.prototype.isBattleFinish = function () {
          return this.result != y["default"].RESULT_NONE;
        }),
        (e.prototype.setBattleResult = function (e) {
          this.result = e;
        }),
        (e.prototype.updateBattleResult = function () {
          var e = y["default"].RESULT_NONE,
            t = this.round,
            i = this.getActivePlayerNum(
              0,
              this.getLeftPosNum(),
              this.isLeftHavePlayer,
            ),
            o = this.getActivePlayerNum(
              y["default"].LEFT_MAX_POS,
              y["default"].MAX_POS,
              this.isRightHavePlayer,
            );
          (0 >= i && 0 >= o
            ? (e = y["default"].RESULT_BOTH_LOSE)
            : 0 >= i
              ? (e = y["default"].RESULT_RIGHT_WIN)
              : 0 >= o
                ? (e = y["default"].RESULT_LEFT_WIN)
                : t >= y["default"].MAX_ROUND &&
                  (e = y["default"].RESULT_ROUND_OVER),
            (this.result = e));
        }),
        (e.prototype.setMonsterGroup = function (e) {
          this.monsterGroup = e;
        }),
        (e.prototype.getMonsterGroup = function () {
          return this.monsterGroup;
        }),
        (e.prototype.initKeepoutatktime = function (e) {
          if (!(null == e || e.length <= 0))
            for (var t = 0; t < e.length; t++) {
              var i = e[t];
              null != i &&
                (i.keepout_atk_time = i.get(f.ModelConst.KEEPOUT_ATK_TIME));
            }
        }),
        (e.prototype.initBattleRowNum = function () {
          for (
            var e = 5, t = 5, i = 0, o = 0, n = 0;
            n < y["default"].MAX_POS;
            n++
          ) {
            var a = this.getPlayerByPos(n);
            null != a &&
              (1 == E["default"].isLeftSide(n)
                ? ((i = g.GUtil.intNum(n / 2) + 1), i > e && (e = i))
                : ((o =
                    g.GUtil.intNum((n - y["default"].LEFT_MAX_POS) / 2) + 1),
                  o > t && (t = o)));
          }
          (e >= y["default"].MAX_ROW_NUM && (e = y["default"].MAX_ROW_NUM),
            t >= y["default"].MAX_ROW_NUM && (t = y["default"].MAX_ROW_NUM),
            (this.rowLeft = e),
            (this.rowRight = t));
        }),
        (e.prototype.getPlayerByPos = function (e) {
          return null == this.playerList
            ? null
            : 0 == this.isValidPos(e)
              ? null
              : this.playerList[e];
        }),
        (e.prototype.getType = function () {
          return this.type;
        }),
        (e.prototype.setType = function (e) {
          this.type = e;
        }),
        (e.prototype.cleanGuardData = function () {
          for (var e in this.guardHash) delete this.guardHash[e];
        }),
        (e.prototype.setSkillGuardData = function (e, t, i) {
          if (null != e && !(null == i || i.length <= 0)) {
            var o = e.power1;
            if (!(
              o < c["default"].POWER_GUARD_STR_ATTACK ||
              o > c["default"].POWER_GUARD_ALL_ATTACK
            )) {
              var n = e.powerValue1;
              if (!(0 >= n))
                for (var a = 0; a < i.length; a++) {
                  var r = i[a];
                  this.addGuardData(r, o, t, n);
                }
            }
          }
        }),
        (e.prototype.addGuardData = function (e, t, i, o) {
          if (!(0 > e || e >= y["default"].MAX_POS)) {
            var n = T.Tool.setKeyXY(e, t),
              a = T.Tool.setKeyXY(i, o);
            this.guardHash[n] = a;
          }
        }),
        (e.prototype.getGuardPos = function (e, t) {
          var i = this.guardHash;
          if (Object.keys(i).length <= 0) return -1;
          if (0 > e || e >= y["default"].MAX_POS) return -1;
          if (t == c["default"].ATKTYPE_BLESS) return -1;
          var o = 0,
            n = i[T.Tool.setKeyXY(e, c["default"].POWER_GUARD_ALL_ATTACK)];
          null != n && (o = n);
          var a = 0,
            r = null;
          switch (t) {
            case c["default"].ATKTYPE_STR:
            case c["default"].ATKTYPE_RANGE_STR:
              r = i[T.Tool.setKeyXY(e, c["default"].POWER_GUARD_STR_ATTACK)];
              break;
            case c["default"].ATKTYPE_AGI:
            case c["default"].ATKTYPE_RANGE_AGI:
              r = i[T.Tool.setKeyXY(e, c["default"].POWER_GUARD_AGI_ATTACK)];
              break;
            case c["default"].ATKTYPE_MAGIC:
              r = i[T.Tool.setKeyXY(e, c["default"].POWER_GUARD_MAGIC_ATTACK)];
              break;
            case c["default"].ATKTYPE_CURSE:
              r = i[T.Tool.setKeyXY(e, c["default"].POWER_GUARD_CURSE_ATTACK)];
          }
          if (null == n && null == r) return -1;
          null != r && (a = r);
          var s = T.Tool.getXKey(o),
            l = T.Tool.getYKey(o),
            u = T.Tool.getXKey(a),
            _ = T.Tool.getYKey(a);
          return (
            l > _ && ((_ = l), (u = s)),
            _ > 0 && this.randInt(100) < _ ? u : -1
          );
        }),
        (e.prototype.setPlan = function (e, t) {
          var i = this.playerPlanData;
          null != i &&
            null != e &&
            null != t &&
            (0 > e || e >= i.length || (i[e] = t));
        }),
        (e.prototype.getPlanData = function (e) {
          var t = this.playerPlanData;
          return null == t ? null : 0 > e || e >= t.length ? null : t[e];
        }),
        (e.prototype.clearPlan = function (e) {
          var t = this.playerPlanData;
          null != t && (0 > e || e >= t.length || (t[e] = null));
        }),
        (e.prototype.clearAllPlan = function () {
          var e = this.playerPlanData;
          if (null != e) for (var t = 0; t < e.length; ++t) e[t] = null;
        }),
        (e.prototype.cleanAniControlList = function () {
          this.resultControlList.length = 0;
        }),
        (e.prototype.addAniControl = function (e) {
          null != e && this.resultControlList.push(e);
        }),
        (e.prototype.mergeControlList = function (e, t) {
          if (null == e) return null;
          for (var i = 0; i < e.length; i++) {
            var o = e.elementAt(i);
            if (null != o)
              for (
                var n = o.counter, a = o.int1, r = e.length - 1;
                r > i;
                r--
              ) {
                var s = e.elementAt(r);
                if (null != s) {
                  var l = o.int0,
                    u = s.counter,
                    _ = s.int0,
                    d = s.int1;
                  if (
                    a == d &&
                    !(
                      (1 == t &&
                        E["default"].isEffectStatus(
                          u,
                          y["default"].EFFECT_REBORN,
                        )) ||
                      E["default"].isEffectStatus(
                        n,
                        y["default"].EFFECT_MP_CHANGE,
                      ) !=
                        E["default"].isEffectStatus(
                          u,
                          y["default"].EFFECT_MP_CHANGE,
                        ) ||
                      (0 > l && _ >= 0) ||
                      (l >= 0 && 0 > _)
                    )
                  ) {
                    var p = E["default"].isEffectStatus(
                        n,
                        y["default"].EFFECT_HIT,
                      ),
                      c = E["default"].isEffectStatus(
                        u,
                        y["default"].EFFECT_HIT,
                      );
                    p == c &&
                      (0 != p ||
                        E["default"].isEffectStatus(
                          n,
                          y["default"].EFFECT_BLOCK,
                        ) ==
                          E["default"].isEffectStatus(
                            u,
                            y["default"].EFFECT_BLOCK,
                          )) &&
                      ((o.counter |= u), (o.int0 += _), e.removeElement(s));
                  }
                }
              }
          }
          return e;
        }),
        (e.prototype.logicRound = function () {
          (this.cleanGuardData(),
            this.cleanAniControlList(),
            T.Tool.debug("===========执行玩家回合Buffer doRoundBuffer"),
            this.doRoundBuffer());
          var e = this.sortModelListBySpeed();
          T.Tool.debug("===========回合前自动回血，回蓝 doRoundHpMp");
          for (var t = 0; t < e.size(); t++) {
            var i = e.elementAt(t);
            null != i && this.doRoundHpMp(i);
          }
          T.Tool.debug(
            "===========回合前自动技能 - 所有角色自动执行回合前的自动技能 doAutoSkill",
          );
          for (var t = 0; t < e.size(); t++) {
            var i = e.elementAt(t);
            null != i && this.doAutoSkill(i);
          }
          e = this.sortModelListBySpeed();
          for (var t = 0; t < e.size(); t++) {
            var i = e.elementAt(t);
            if (null != i) {
              var o = this.getPlanData(i.position),
                n = !1;
              (null != o && (n = this.doPlayerPlan(i, o)),
                n ||
                  i.getType() == l.MODEL_TYPE.TYPE_PLAYER ||
                  (i.getType() == l.MODEL_TYPE.TYPE_PET
                    ? this.doPetAI(i)
                    : i instanceof _["default"] && this.doMonsterAI(i)));
            }
          }
          this.doEndRoundCheckBuffer();
          for (var t = 0; t < y["default"].MAX_POS; ++t) {
            var a = this.getPlayerByPos(t);
            a &&
              T.Tool.debug(
                "回合:" +
                  this.round +
                  ",pos:" +
                  a.position +
                  ",hp:" +
                  a.hp +
                  ",mp:" +
                  a.mp,
              );
          }
          (this.round++,
            this.updateRoundEndTime(),
            (this.waitStatus = 0),
            this.updateBattleResult());
        }),
        (e.prototype.doRoundHpMp = function (e) {
          var t = e.get(f.ModelConst.HEAL_RECOVERY),
            i = e.get(f.ModelConst.MANA_RECOVERY),
            o = new v["default"](),
            n = e.hpMax,
            a = e.mpMax,
            r = 0,
            s = 0;
          if (
            (e.isBattleStatus(
              c["default"].getBufferBitValue(c["default"].BUFFER_ADD_HP),
            ) && (r = g.GUtil.intNum(0.005 * n)),
            e.isBattleStatus(
              c["default"].getBufferBitValue(c["default"].BUFFER_ADD_MP),
            ) && (s = g.GUtil.intNum(0.005 * a)),
            r > 0 && (t += r),
            s > 0 && (i += s),
            t > 0)
          ) {
            var l = !0;
            ((e.isBattleStatus(
              c["default"].getBufferBitValue(c["default"].BUFFER_BURN),
            ) ||
              e.isBattleStatus(
                c["default"].getBufferBitValue(c["default"].BUFFER_BLOOD),
              )) &&
              (l = !1),
              1 == l &&
                (E["default"].processBattleHpMpPower(
                  e,
                  f.ModelConst.HP,
                  t,
                  0,
                  o,
                ),
                T.Tool.debug(
                  "回合：" +
                    this.round +
                    ",回复生命(" +
                    e.position +
                    "): value = " +
                    t +
                    ",hp =" +
                    e.get(f.ModelConst.HP),
                )));
          }
          if (i > 0) {
            var l = !0;
            (e.isBattleStatus(
              c["default"].getBufferBitValue(c["default"].BUFFER_POISON),
            ) && (l = !1),
              1 == l &&
                (E["default"].processBattleHpMpPower(
                  e,
                  f.ModelConst.MP,
                  i,
                  0,
                  o,
                ),
                T.Tool.debug(
                  "回合：" +
                    this.round +
                    ",回复法力(" +
                    e.position +
                    "): value = " +
                    i +
                    ",mp =" +
                    e.get(f.ModelConst.MP),
                )));
          }
          for (var u = 0; u < o.length; u++) {
            var _ = o.elementAt(u);
            this.addAniControl(_);
          }
        }),
        (e.prototype.doRoundBuffer = function () {
          for (var e = 0; e < this.playerList.length; e++) {
            var t = this.playerList[e];
            if (null != t)
              if (t.isDeadNoWithDelay()) {
                var i = t.isHaveCanNotReliveBuffer();
                1 == i && t.runBufferList(!0);
              } else if (!t.isBattleStatus(d["default"].BSTATUS_ESCAPE)) {
                var o = t.runBufferList(!0);
                if (((o = this.mergeControlList(o, !0)), null != o))
                  for (var n = 0; n < o.length; n++) {
                    var a = o.elementAt(n);
                    this.addAniControl(a);
                  }
              }
          }
        }),
        (e.prototype.checkDie1Hp = function (e, t) {
          if (null != e && 0 != e.isDead()) {
            var i = new v["default"]();
            if (
              0 == e.isTabStatus(f.ModelConst.BUFFER_DIE_1HP_CHECK) &&
              e.isBattleStatus(
                c["default"].getBufferBitValue(
                  c["default"].BUFFER_RESIST_DIE_1HP,
                ),
              )
            ) {
              var o = e.isHaveCanNotReliveBuffer();
              0 == o &&
                (e.setTabStatus(!0, f.ModelConst.BUFFER_DIE_1HP_CHECK),
                null != t
                  ? E["default"].processBattleReborn(
                      e,
                      1,
                      0,
                      c["default"].SPRITE_USE_ITEM,
                      t,
                    )
                  : E["default"].processBattleReborn(
                      e,
                      1,
                      0,
                      c["default"].SPRITE_USE_ITEM,
                      i,
                    ));
            }
            if (null == t)
              for (var n = 0; n < i.length; n++) {
                var a = i.elementAt(n);
                this.addAniControl(a);
              }
          }
        }),
        (e.prototype.doEndRoundCheckBuffer = function () {
          for (
            var e = new v["default"](), t = 0;
            t < this.playerList.length;
            t++
          ) {
            var i = this.playerList[t];
            if (null != i) {
              var o = i.isHaveCanNotReliveBuffer();
              if (i.isDead())
                if (
                  0 == i.isTabStatus(f.ModelConst.BUFFER_DIE_FULLHP_CHECK) &&
                  i.isBattleStatus(
                    c["default"].getBufferBitValue(
                      c["default"].BUFFER_RESIST_DIE_FULLHP,
                    ),
                  )
                ) {
                  if (0 == o) {
                    (i.setTabStatus(!0, f.ModelConst.BUFFER_DIE_FULLHP_CHECK),
                      E["default"].processBattleReborn(
                        i,
                        i.get(f.ModelConst.HPMAX),
                        0,
                        c["default"].SPRITE_USE_ITEM,
                        e,
                      ));
                    continue;
                  }
                } else if (i.isDeadDelay()) {
                  i.setTabStatus(!0, f.ModelConst.BUFFER_DIE_DELAY_CHECK);
                  var n = r["default"].createBattleTargetEffect(
                    i.position,
                    0,
                    y["default"].EFFECT_DIE_DELAY,
                    0,
                  );
                  (e.addElement(n),
                    i.clearBufferList(!1),
                    1 == o && i.runBufferList(!1));
                  continue;
                }
              i.isDead() || i.isBattleStatus(d["default"].BSTATUS_ESCAPE)
                ? (i.clearBufferList(!1), 1 == o && i.runBufferList(!1))
                : (i.runBufferList(!1), this.doCheckWilBufferRemove(i));
            }
          }
          for (var a = 0; a < e.length; a++) {
            var n = e.elementAt(a);
            this.addAniControl(n);
          }
        }),
        (e.prototype.doCheckWilBufferRemove = function (e) {
          if (null != e) {
            var t = e.battleBufferList;
            if (!(null == t || t.size() <= 0)) {
              for (var i = new v["default"](), o = 0; o < t.size(); o++) {
                var n = t.elementAt(o);
                null != n &&
                  n.getStatus() != c["default"].BUFFER_NONE &&
                  c["default"].getBufferType(n.getStatus()) ==
                    c["default"].BUFFER_TYPE_DEBUFF &&
                  i.addElement(n);
              }
              if (!(i.size() <= 0)) {
                var a = this.isWilSuccess(e, null, null);
                if (0 != a) {
                  var r = this.randRange(0, i.size() - 1);
                  if (!(0 > r || r >= i.size())) {
                    var s = i.elementAt(r);
                    if (null != s) {
                      (T.Tool.debug(
                        "状态抵抗(" +
                          e.position +
                          "): 清除负面Buffer addValue -> " +
                          s.getAddValue() +
                          " status -> " +
                          s.getStatus(),
                      ),
                        s.destroy(e),
                        t.removeElement(s),
                        i.removeElement(s));
                      for (var o = 0; o < i.length; o++) {
                        var l = i.elementAt(o);
                        if (null != l && l.getStatus() == s.getStatus()) return;
                      }
                      e.clearBattleStatus(
                        c["default"].getBufferBitValue(s.getStatus()),
                      );
                    }
                  }
                }
              }
            }
          }
        }),
        (e.prototype.doAutoSkill = function (e) {
          if (null != e) {
            var t = null;
            if (e instanceof _["default"]) {
              var i = e;
              if (((t = this.getSkillByAI(this, !0, i)), null == t)) return;
              return void this.doUseSkill(e, t, this.searchAICursor(e, t.area));
            }
            var o = this.getAutoSkillIDByRound(e);
            if (!(0 > o) && ((t = e.getSkillByID(o)), null != t)) {
              var n = -1;
              ((n = this.searchAICursor(e, t.area)),
                this.doUseSkillById(e, o, n));
            }
          }
        }),
        (e.prototype.getAutoSkillIDByRound = function (e) {
          if (null == e) return -1;
          if (null == e.autoSkillID) return -2;
          var t = -1,
            i = e.getAutoSkillCount();
          if (0 >= i) return -3;
          var o = this.round % i;
          return (
            o >= 0 && o < e.autoSkillID.length && (t = e.autoSkillID[o]),
            t
          );
        }),
        (e.prototype.doPlayerPlan = function (e, t) {
          if (null == e) return !1;
          if (null == t) return !1;
          var i = 0;
          t.position = 0;
          var o = t.readByte();
          switch (o) {
            case y["default"].PLAN_ATTACK:
              ((i = t.readByte()), this.doAttack(e, i));
              break;
            case y["default"].PLAN_USE_SKILL:
              i = t.readByte();
              var n = t.readShort();
              this.doUseSkillById(e, n, i);
              break;
            case y["default"].PLAN_USE_ITEM:
              i = t.readByte();
              var a = t.readByte();
              this.doUseItem(e, a, i);
              break;
            case y["default"].PLAN_ESCAPE:
              this.doEscape(e, !1);
              break;
            case y["default"].PLAN_NONE:
              return !1;
          }
          return !0;
        }),
        (e.prototype.isPetSucessGrard = function (e, t, i, o) {
          if (null == e || null == t) return !1;
          var n = e.getSkillPowerValue(
              c["default"].SKILL_TYPE_PASSIVE,
              c["default"].POWER_PET_GRARD_ALL_ATTACK,
            ),
            a = t.getSkillPowerValue(
              c["default"].SKILL_TYPE_PASSIVE,
              c["default"].POWER_GRARD_MASTER_ALL_ATTACK,
            ),
            r = e.getSkillPowerValue(c["default"].SKILL_TYPE_PASSIVE, i);
          return (
            r > n && (n = r),
            n > 0 && this.randInt(100) < n
              ? !0
              : ((r = t.getSkillPowerValue(c["default"].SKILL_TYPE_PASSIVE, o)),
                r > a && (a = r),
                a > 0 && this.randInt(100) < a ? !0 : !1)
          );
        }),
        (e.prototype.getGrardPet = function (e, t, i) {
          if (null == e || e.getType() != l.MODEL_TYPE.TYPE_PLAYER) return null;
          if (t == c["default"].ATKTYPE_BLESS) return null;
          if (0 == this.isValidBattlePlayer(e)) return null;
          if (null != e && e.keepout_atk_time > 0 && i) return null;
          var o = this.getPlayerPet(e.position);
          if (null == o) return null;
          if (0 == this.isValidBattlePlayer(o)) return null;
          if (
            o.isBattleStatus(
              c["default"].getBufferBitValue(c["default"].BUFFER_STUN),
            )
          )
            return null;
          if (
            o.isBattleStatus(
              c["default"].getBufferBitValue(c["default"].BUFFER_CHAO),
            )
          )
            return null;
          if (
            o.isBattleStatus(
              c["default"].getBufferBitValue(c["default"].BUFFER_SNEER),
            )
          )
            return null;
          var n;
          switch (t) {
            case c["default"].ATKTYPE_STR:
            case c["default"].ATKTYPE_RANGE_STR:
              n = this.isPetSucessGrard(
                e,
                o,
                c["default"].POWER_PET_GRARD_STR_ATTACK,
                c["default"].POWER_GRARD_MASTER_STR_ATTACK,
              );
              break;
            case c["default"].ATKTYPE_AGI:
            case c["default"].ATKTYPE_RANGE_AGI:
              n = this.isPetSucessGrard(
                e,
                o,
                c["default"].POWER_PET_GRARD_AGI_ATTACK,
                c["default"].POWER_GRARD_MASTER_AGI_ATTACK,
              );
              break;
            case c["default"].ATKTYPE_MAGIC:
              n = this.isPetSucessGrard(
                e,
                o,
                c["default"].POWER_PET_GRARD_MAGIC_ATTACK,
                c["default"].POWER_GRARD_MASTER_MAGIC_ATTACK,
              );
              break;
            case c["default"].ATKTYPE_CURSE:
              n = this.isPetSucessGrard(
                e,
                o,
                c["default"].POWER_PET_GRARD_CURSE_ATTACK,
                c["default"].POWER_GRARD_MASTER_CURSE_ATTACK,
              );
          }
          return n ? o : null;
        }),
        (e.prototype.doAttack = function (e, t) {
          if (
            (T.Tool.debug(
              "回合:" +
                this.round +
                ",pos:" +
                e.position +
                ",name:" +
                e.name +
                ",do attack start targetCursor:" +
                t,
            ),
            null != e &&
              !e.isDeadNoWithDelay() &&
              !e.isBattleStatus(d["default"].BSTATUS_ESCAPE) &&
              !e.isBattleStatus(
                c["default"].getBufferBitValue(c["default"].BUFFER_STUN),
              ) &&
              (e.isBattleStatus(
                c["default"].getBufferBitValue(c["default"].BUFFER_CHAO),
              ) && (t = E["default"].selectRandActivePlayer(this, e)),
              0 != this.isValidPos(t)))
          ) {
            var i = this.getPlayerByPos(t);
            if (
              (e.isBattleStatus(
                c["default"].getBufferBitValue(c["default"].BUFFER_SNEER),
              ) &&
                ((i = e.getbuffer(c["default"].BUFFER_SNEER).getTarget()),
                T.Tool.debug(
                  "嘲讽生效: targetPlayer , targetPlayer pos " +
                    (i && i.position),
                )),
              null == i)
            )
              return void T.Tool.debug(
                "doAttak(): targetPlayer is null, pos = " + t,
              );
            if (
              (!i.isDeadNoWithDelay() &&
                1 != i.isBattleStatus(d["default"].BSTATUS_ESCAPE)) ||
              ((t = E["default"].selectRandTarget(this, e, !0)),
              (i = this.getPlayerByPos(t)),
              null != i)
            ) {
              var o = e.getAttackType(null);
              this.atkType = o;
              var n = this.getGrardPet(i, o, !0);
              if (null != n) i = n;
              else {
                var a = this.getGuardPos(i.position, o);
                (null != i && i.keepout_atk_time > 0 && (a = -1),
                  a >= 0 &&
                    ((n = this.getPlayerByPos(a)),
                    this.isValidBattlePlayer(n) && (i = n)));
              }
              var s = r["default"].createBattleUseSkillControl(
                e.position,
                t,
                -1,
                e.getAttakAnimePos(),
                c["default"].ANIME_TYPE_PHYSIC,
                e.getAttackRangeAnime(),
                0,
                null,
              );
              this.addAniControl(s);
              var l = new v["default"]();
              1 != i.isBattleStatus(d["default"].BSTATUS_ESCAPE) &&
                (i.isDeadNoWithDelay() ||
                  (null != i &&
                    i.setTabStatus(!1, f.ModelConst.TAG_IS_KEEP_OUT),
                  this.calDamage(e, i, null, l, 1),
                  null != i &&
                    i.isTabStatus(f.ModelConst.TAG_IS_KEEP_OUT) &&
                    (i.doKeepAtkTime(),
                    i.setTabStatus(!1, f.ModelConst.TAG_IS_KEEP_OUT)),
                  s.setSubControlList(l),
                  T.Tool.debug(
                    "回合:" +
                      this.round +
                      ",pos:" +
                      e.position +
                      ",name:" +
                      e.name +
                      ",do attack end targetCursor:" +
                      t,
                  )));
            }
          }
        }),
        (e.prototype.doUseSkillById = function (e, t, i) {
          if (null != e) {
            var o = e.getSkillByID(t);
            null != o && this.doUseSkill(e, o, i);
          }
        }),
        (e.prototype.doUseSkill = function (e, t, i) {
          if (
            (T.Tool.debug(
              "回合:" +
                this.round +
                ",pos:" +
                e.position +
                ",name:" +
                e.name +
                " ,use skill Start:" +
                (t && t.name + " " + t.id),
            ),
            0 != this.isValidPos(i) &&
              null != e &&
              !e.isDeadNoWithDelay() &&
              !e.isBattleStatus(d["default"].BSTATUS_ESCAPE) &&
              t.type != c["default"].SKILL_TYPE_PASSIVE &&
              0 != p["default"].isCanUse(e, t, null) &&
              !e.isBattleStatus(
                c["default"].getBufferBitValue(c["default"].BUFFER_STUN),
              ))
          ) {
            if (
              e.isBattleStatus(
                c["default"].getBufferBitValue(c["default"].BUFFER_SNEER),
              )
            ) {
              var o = e.getbuffer(c["default"].BUFFER_SNEER).getTarget();
              if (t.type == c["default"].SKILL_TYPE_ROUND) return;
              return void (
                0 == E["default"].isSameSide(e.position, o.position) &&
                this.doAttack(e, o.position)
              );
            }
            if (
              e.isBattleStatus(
                c["default"].getBufferBitValue(c["default"].BUFFER_CHAO),
              )
            ) {
              if (t.type == c["default"].SKILL_TYPE_ROUND) return;
              i = E["default"].selectRandActivePlayer(this, e);
            } else {
              if (
                e.isBattleStatus(
                  c["default"].getBufferBitValue(c["default"].BUFFER_SILENCE),
                )
              ) {
                if (t.type == c["default"].SKILL_TYPE_ROUND) return;
                return void (
                  0 == E["default"].isSameSide(e.position, i) &&
                  this.doAttack(e, i)
                );
              }
              if (1 == c["default"].isPhysicalAtkType(t.skillAtkType)) {
                if (
                  e.isBattleStatus(
                    c["default"].getBufferBitValue(
                      c["default"].BUFFER_BLOCK_SKILL,
                    ),
                  )
                ) {
                  if (t.type == c["default"].SKILL_TYPE_ROUND) return;
                  return void (
                    0 == E["default"].isSameSide(e.position, i) &&
                    this.doAttack(e, i)
                  );
                }
              } else if (
                e.isBattleStatus(
                  c["default"].getBufferBitValue(
                    c["default"].BUFFER_BLOCK_TALK,
                  ),
                )
              ) {
                if (t.type == c["default"].SKILL_TYPE_ROUND) return;
                return void (
                  0 == E["default"].isSameSide(e.position, i) &&
                  this.doAttack(e, i)
                );
              }
            }
            var n = this.getSelectArea(e.position, i, t.area);
            if (null != n) {
              var a = e.getAttackType(t);
              this.atkType = a;
              var s = null;
              (e.getType() == l.MODEL_TYPE.TYPE_PLAYER ||
                e.getType() == l.MODEL_TYPE.TYPE_PET ||
                e.getType() == l.MODEL_TYPE.TYPE_LEGION ||
                e.getType() == l.MODEL_TYPE.TYPE_BUDDY) &&
                (s = t.name);
              var u = r["default"].createBattleUseSkillControl(
                e.position,
                i,
                t.area,
                t.position,
                t.anime1,
                t.anime2,
                t.anime3,
                s,
              );
              this.addAniControl(u);
              var _ = new v["default"]();
              (t.useMP > 0 &&
                E["default"].processBattleHpMpPower(
                  e,
                  f.ModelConst.MP,
                  -t.useMP,
                  0,
                  _,
                  !0,
                ),
                t.useHP > 0 &&
                  E["default"].processBattleHpMpPower(
                    e,
                    f.ModelConst.HP,
                    -t.useHP,
                    0,
                    _,
                    !0,
                  ),
                this.setSkillGuardData(t, e.position, n),
                t.type == c["default"].SKILL_TYPE_ACTIVE &&
                  (t.power1 == c["default"].POWER_SKILL_REMOVE_STATUS &&
                    e.removeBufferByStatus(t.powerValue1),
                  t.power2 == c["default"].POWER_SKILL_REMOVE_STATUS &&
                    e.removeBufferByStatus(t.powerValue2),
                  t.power3 == c["default"].POWER_SKILL_REMOVE_STATUS &&
                    e.removeBufferByStatus(t.powerValue3)));
              for (var h = !1, y = [], S = 0; S < n.length; S++) {
                var I = n[S];
                if (0 != this.isValidPos(I)) {
                  var o = this.getPlayerByPos(I);
                  if (
                    null != o &&
                    1 != o.isBattleStatus(d["default"].BSTATUS_ESCAPE)
                  ) {
                    if (o.isDead()) {
                      if (o.isDeadDelay()) continue;
                      if (0 == t.isRebornSkill()) continue;
                    }
                    y.push(o);
                  }
                }
              }
              for (
                var m = this.isExpendHp(t, a), A = y.length, S = 0;
                A > S;
                S++
              ) {
                var o = y[S],
                  C = this.getGrardPet(o, a, m);
                if (null != C) o = C;
                else {
                  var P = this.getGuardPos(o.position, a);
                  (null != o && o.keepout_atk_time > 0 && m && (P = -1),
                    P >= 0 &&
                      ((C = this.getPlayerByPos(P)),
                      this.isValidBattlePlayer(C) && (o = C)));
                }
                null != o && o.setTabStatus(!1, f.ModelConst.TAG_IS_KEEP_OUT);
                var R = this.calDamage(e, o, t, _, A);
                1 == R &&
                  ((h = !0),
                  this.processSkillPower(o, e, t, _),
                  null != o &&
                    o.isTabStatus(f.ModelConst.TAG_IS_KEEP_OUT) &&
                    (o.doKeepAtkTime(),
                    o.setTabStatus(!1, f.ModelConst.TAG_IS_KEEP_OUT)));
              }
              if (1 == h) {
                var O = t.getPowerValue(c["default"].POWER_SKILL_HP);
                0 > O && (O = 0);
                var N = t.getPowerValue(c["default"].POWER_SKILL_HP_PERCENT);
                (N > 0 &&
                  (O += g.GUtil.intNum((N * e.get(f.ModelConst.HPMAX)) / 100)),
                  O > 0 &&
                    E["default"].processBattleHpMpPower(
                      e,
                      f.ModelConst.HP,
                      O,
                      0,
                      _,
                    ),
                  (O = t.getPowerValue(c["default"].POWER_SKILL_MP)),
                  0 > O && (O = 0),
                  (N = t.getPowerValue(c["default"].POWER_SKILL_MP_PERCENT)),
                  N > 0 &&
                    (O += g.GUtil.intNum(
                      (N * e.get(f.ModelConst.MPMAX)) / 100,
                    )),
                  O > 0 &&
                    E["default"].processBattleHpMpPower(
                      e,
                      f.ModelConst.MP,
                      O,
                      0,
                      _,
                    ));
              }
              (u.setSubControlList(_),
                T.Tool.debug(
                  "回合:" +
                    this.round +
                    ",pos:" +
                    e.position +
                    ",use skill end:" +
                    (t && t.name + " " + t.id) +
                    " ,isSKillHit:" +
                    h,
                ));
            }
          }
        }),
        (e.prototype.isExpendHp = function (e, t) {
          if (null == e) return !0;
          if (
            t == c["default"].ATKTYPE_CURSE ||
            t == c["default"].ATKTYPE_BLESS
          ) {
            var i = e.getPowerValue(c["default"].POWER_HP);
            return 0 > i
              ? !0
              : ((i = e.getPowerValue(c["default"].POWER_HP_PERCENT)),
                0 > i ? !0 : !1);
          }
          return !0;
        }),
        (e.prototype.processSkillPower = function (e, t, i, o) {
          null != e &&
            null != i &&
            (i.power1 > 0 &&
              E["default"].processBattlePower(
                this,
                e,
                t,
                i,
                i.power1,
                i.powerValue1,
                i.statusBit1,
                i.round,
                i.anime3,
                o,
              ),
            i.power2 > 0 &&
              E["default"].processBattlePower(
                this,
                e,
                t,
                i,
                i.power2,
                i.powerValue2,
                i.statusBit2,
                i.round,
                i.anime3,
                o,
              ),
            i.power3 > 0 &&
              E["default"].processBattlePower(
                this,
                e,
                t,
                i,
                i.power3,
                i.powerValue3,
                i.statusBit3,
                i.round,
                i.anime3,
                o,
              ));
        }),
        (e.prototype.doUseItem = function (e, t, i) {
          if (
            null != e &&
            !e.isDeadNoWithDelay() &&
            !e.isBattleStatus(d["default"].BSTATUS_ESCAPE)
          ) {
            var o = e.bag;
            if (null != o) {
              var n = o.getBagItemBySlotPos(t);
              if (
                null != n &&
                0 != s["default"].isValidEquipRequire(e, n, null) &&
                0 != n.isCanUse(s["default"].CAN_USE_BATTLE) &&
                !e.isBattleStatus(
                  c["default"].getBufferBitValue(c["default"].BUFFER_STUN),
                )
              ) {
                e.isBattleStatus(
                  c["default"].getBufferBitValue(c["default"].BUFFER_CHAO),
                ) && (i = E["default"].selectRandActivePlayer(this, e));
                var a = this.getSelectArea(e.position, i, n.area);
                if (null != a) {
                  var u = null;
                  e.getType() == l.MODEL_TYPE.TYPE_PLAYER && (u = n.name);
                  var _ = r["default"].createBattleUseSkillControl(
                    e.position,
                    i,
                    n.area,
                    c["default"].SKILL_POS_STAND,
                    c["default"].ANIME_TYPE_USE_ITEM,
                    c["default"].SPRITE_USE_ITEM,
                    0,
                    u,
                  );
                  this.addAniControl(_);
                  for (var p = new v["default"](), h = 0; h < a.length; h++) {
                    var T = a[h];
                    if (!(0 > T || T >= y["default"].MAX_POS)) {
                      var g = this.getPlayerByPos(T);
                      if (
                        null != g &&
                        1 != g.isBattleStatus(d["default"].BSTATUS_ESCAPE)
                      ) {
                        if (g.isDead()) {
                          if (g.isDeadDelay()) continue;
                          if (0 == n.isRebornItem()) continue;
                        }
                        (null != g &&
                          g.setTabStatus(!1, f.ModelConst.TAG_IS_KEEP_OUT),
                          this.processItemPower(g, n, p));
                      }
                    }
                  }
                  (_.setSubControlList(p), o.removeBagItemByPos(t, 1));
                }
              }
            }
          }
        }),
        (e.prototype.processItemPower = function (e, t, i) {
          if (null != e && null != t) {
            var o = 0;
            (t.power1 > 0 &&
              E["default"].processBattlePower(
                this,
                e,
                null,
                null,
                t.power1,
                t.powerValue1,
                0,
                t.round,
                o,
                i,
              ),
              t.power2 > 0 &&
                E["default"].processBattlePower(
                  this,
                  e,
                  null,
                  null,
                  t.power2,
                  t.powerValue2,
                  0,
                  t.round,
                  o,
                  i,
                ));
          }
        }),
        (e.prototype.doEscape = function (e, t) {
          if (
            null != e &&
            !e.isDead() &&
            !e.isBattleStatus(
              c["default"].getBufferBitValue(c["default"].BUFFER_STUN),
            )
          ) {
            var i = 0;
            ((i = (t = !0)
              ? y["default"].ESCAPE_SUCCESS
              : this.isEscapeSuccess(e)),
              i == y["default"].ESCAPE_SUCCESS &&
                e.setBattleStatus(d["default"].BSTATUS_ESCAPE));
            var o = r["default"].createBattleEscape(e.position, i);
            this.addAniControl(o);
          }
        }),
        (e.prototype.isEscapeSuccess = function (e) {
          if (null == e) return y["default"].ESCAPE_FAILED;
          var t = -1,
            i = 0,
            o = y["default"].LEFT_MAX_POS;
          E["default"].isLeftSide(e.position) &&
            ((i = y["default"].LEFT_MAX_POS), (o = y["default"].MAX_POS));
          for (var n = 0, a = i; o > a; a++) {
            var r = this.getPlayerByPos(a);
            null != r && ((n = r.get(f.ModelConst.LEVEL)), n > t && (t = n));
          }
          var s = 0;
          return (
            (n = e.get(f.ModelConst.LEVEL)),
            (s =
              -7 >= n - t
                ? y["default"].ESCAPE_RATE_LOW
                : n - t >= 7
                  ? y["default"].ESCAPE_RATE_HIGH
                  : y["default"].ESCAPE_RATE_MID),
            this.randInt(100) < s
              ? y["default"].ESCAPE_SUCCESS
              : y["default"].ESCAPE_FAILED
          );
        }),
        (e.prototype.doPetAI = function (e) {
          if (0 != this.isValidBattlePlayer(e)) {
            var t = E["default"].selectValueTarget(
              this,
              e,
              c["default"].AI_HATE_MAX,
              !0,
            );
            this.doAttack(e, t);
          }
        }),
        (e.prototype.doMonsterAI = function (e) {
          if (0 != this.isValidBattlePlayer(e)) {
            var t = this.getSkillByAI(this, !1, e);
            if (e.getAITargetPos() == u.MonsterAI.TARGET_ESCAPE)
              return void this.doEscape(e, !0);
            var i = this.getAttackTarget(this, e);
            0 != this.isValidPos(i) &&
              (null == t ? this.doAttack(e, i) : this.doUseSkill(e, t, i));
          }
        }),
        (e.prototype.getAttackTarget = function (e, t) {
          return null == e
            ? -1
            : null == t.monsterAI || 0 == e.isValidPos(t.monsterAI.targetPos)
              ? E["default"].selectValueTarget(
                  e,
                  t,
                  c["default"].AI_HATE_MAX,
                  !0,
                )
              : t.monsterAI.targetPos;
        }),
        (e.prototype.getSkillByAI = function (e, t, i) {
          if (null == e) return null;
          if (null == i.monsterAI) return null;
          if (1 == t) return this.getAutoSkill(e, i);
          var o = this.getBattleSkill(e, i);
          return null == o || o.useMP > i.get(f.ModelConst.MP)
            ? null
            : 0 == o.isEnoughHP(i)
              ? null
              : o;
        }),
        (e.prototype.getBattleSkill = function (e, t) {
          var i = t.monsterAI.conType;
          if (null == i || i.length <= 0) return null;
          var o = i.length;
          ((t.monsterAI.targetPos = -1), (t.message = null));
          for (var n = 0; o > n; n++)
            if (0 != this.isValidConAI(e, t, n)) {
              var a = this.getConSkill(e, n, t);
              if (null == a || a.type != c["default"].SKILL_TYPE_ROUND)
                return (
                  (t.monsterAI.targetPos = this.selectAttackTarget(e, t, n)),
                  (t.message = t.monsterAI.msg[n]),
                  a
                );
            }
          return null;
        }),
        (e.prototype.selectAttackTarget = function (e, t, i) {
          if (null == e) return -1;
          if (null == t) return -1;
          var o = t.monsterAI.targetType;
          if (1 == T.Tool.isArrayIndexOutOfBounds(i, o)) return -1;
          var n = o[i];
          switch (n) {
            case c["default"].AI_ESCAPE:
              return u.MonsterAI.TARGET_ESCAPE;
            case c["default"].AI_HATE_MIN:
              return E["default"].selectValueTarget(e, t, n, !0);
            case c["default"].AI_HATE_MAX:
              return E["default"].selectValueTarget(e, t, n, !0);
            case c["default"].AI_HP_MIN_ENEMY:
              return E["default"].selectValueTarget(e, t, n, !0);
            case c["default"].AI_HP_MAX_ENEMY:
              return E["default"].selectValueTarget(e, t, n, !0);
            case c["default"].AI_SPEED_MIN_ENEMY:
              return E["default"].selectValueTarget(e, t, n, !0);
            case c["default"].AI_SPEED_MAX_ENEMY:
              return E["default"].selectValueTarget(e, t, n, !0);
            case c["default"].AI_HP_MIN_FRIEND:
              return E["default"].selectValueTarget(e, t, n, !1);
            case c["default"].AI_HP_MAX_FRIEND:
              return E["default"].selectValueTarget(e, t, n, !1);
            case c["default"].AI_SPEED_MIN_FRIEND:
              return E["default"].selectValueTarget(e, t, n, !1);
            case c["default"].AI_SPEED_MAX_FRIEND:
              return E["default"].selectValueTarget(e, t, n, !1);
            case c["default"].AI_RAND_ENEMY:
              return E["default"].selectRandTarget(e, t, !0);
            case c["default"].AI_RAND_FRIEND:
              return E["default"].selectRandTarget(e, t, !1);
            case c["default"].AI_SELF:
              return t.position;
            case c["default"].AI_RAND_FRIEND_DEAD:
              return E["default"].selectRandDeadFriend(e, t);
            case c["default"].AI_RAND_ALL_ALIVE:
              return E["default"].selectRandActivePlayer(e, t);
          }
          return -1;
        }),
        (e.prototype.getConSkill = function (e, t, i) {
          var o = i.monsterAI,
            n = o.skill1,
            a = o.skill2;
          if (null == n || n.length <= 0) return null;
          if (null == a || a.length <= 0) return null;
          var r = n[t],
            s = a[t];
          if (null != r && null != s) {
            var l = e.random.nextInt();
            return 0 == (1 & l) ? r : s;
          }
          return null != r ? r : s;
        }),
        (e.prototype.isValidConAI = function (e, t, i) {
          var o = 0,
            n = e.getLeftPosNum(),
            a = 0,
            r = t.monsterAI.conValue,
            s = t.monsterAI.conType;
          switch (s[i]) {
            case c["default"].CONDITION_NONE:
              return !0;
            case c["default"].CONDITION_HP_BELOW:
              return (
                (a =
                  (100 * t.get(f.ModelConst.HP)) / t.get(f.ModelConst.HPMAX)),
                (a = 0 | a),
                a < r[i]
              );
            case c["default"].CONDITION_HP_HIGH:
              return (
                (a =
                  (100 * t.get(f.ModelConst.HP)) / t.get(f.ModelConst.HPMAX)),
                (a = 0 | a),
                a > r[i]
              );
            case c["default"].CONDITION_HELP_RATE:
              var l = e.randInt(100);
              return l < r[i];
            case c["default"].CONDITION_ROUND:
              return r[i] <= e.round ? !0 : !1;
            case c["default"].CONDITION_PLAYER_COUNT:
              return (
                1 == E["default"].isLeftSide(t.position) &&
                  ((o = y["default"].LEFT_MAX_POS), (n = y["default"].MAX_POS)),
                r[i] <= e.getActivePlayerNum(o, n, !1) ? !0 : !1
              );
            case c["default"].CONDITION_MONSTER_COUNT:
              return (
                0 == E["default"].isLeftSide(t.position) &&
                  ((o = y["default"].LEFT_MAX_POS), (n = y["default"].MAX_POS)),
                r[i] <= e.getActivePlayerNum(o, n, !1) ? !0 : !1
              );
          }
          return !1;
        }),
        (e.prototype.getAutoSkill = function (e, t) {
          var i = t.monsterAI.conType;
          if (null == i || i.length <= 0) return null;
          var o = i.length;
          t.message = null;
          for (var n = 0; o > n; n++)
            if (0 != this.isValidConAI(e, t, n)) {
              var a = this.getConSkill(e, n, t);
              if (
                null != a &&
                a.type == c["default"].SKILL_TYPE_ROUND &&
                !(a.useMP > t.get(f.ModelConst.MP)) &&
                0 != a.isEnoughHP(t)
              )
                return ((t.message = t.monsterAI.msg[n]), a);
            }
          return null;
        }),
        (e.prototype.sortModelListBySpeed = function () {
          var e = this.playerList,
            t = new v["default"]();
          if (null == e) return t;
          for (var i = 0; i < e.length; i++) {
            var o = e[i];
            if (null != o) {
              for (var n = 0; ;) {
                if (n >= t.size()) break;
                var a = t.elementAt(n);
                if (o.get(f.ModelConst.SPEED) > a.get(f.ModelConst.SPEED)) {
                  t.insertElementAt(o, n);
                  break;
                }
                n++;
              }
              n == t.size() && t.addElement(o);
            }
          }
          return t;
        }),
        (e.prototype.calInsight = function (e, t, i, o) {
          if (
            this.atkType != c["default"].ATKTYPE_MAGIC &&
            this.atkType != c["default"].ATKTYPE_CURSE
          )
            return !1;
          var n = 0;
          if (
            (null != i && i.useMP > 0 && (n = i.useMP),
            t.get(f.ModelConst.MP) < n)
          )
            return !1;
          var a = this.calc(y["default"].BATTLE_INSIGHT, t, e, i);
          if (0 >= a) return !1;
          var r = this.randInt(100),
            s = a > r;
          if (
            (T.Tool.debug(
              e.position +
                " ->被洞察(" +
                t.position +
                "): insight = " +
                a +
                ",randValue=" +
                r +
                "," +
                s,
            ),
            1 == s)
          ) {
            t.addValue(f.ModelConst.MP, -n);
            var l = new Array(y["default"].DMG_DATA_SIZE).fill(0);
            this.delDamageEffect(l, e, t, i, o, o);
          }
          return s;
        }),
        (e.prototype.calDamage = function (e, t, i, o, r) {
          if (null == e) return !1;
          if (null == t) return !1;
          var s = this.atkType,
            l =
              null != i &&
              c["default"].getSkillAreaPlayerNum(i.area) !=
                c["default"].SKILL_AREA_CURSOR_1;
          if (
            1 == l &&
            s != c["default"].ATKTYPE_MAGIC &&
            s != c["default"].ATKTYPE_CURSE &&
            t.isBattleStatus(
              c["default"].getBufferBitValue(c["default"].BUFFER_HIDE),
            )
          )
            return (
              a["default"].addPromptMsg(
                n["default"].manageString(
                  h.GameText.STR_BATTLE_ATKTYPE_MAGIC_INVALID,
                  t.getName(),
                ),
              ),
              !1
            );
          if (s == c["default"].ATKTYPE_BLESS) {
            var u = new Array(y["default"].DMG_DATA_SIZE).fill(0);
            return (
              (u[y["default"].DMG_EFFECT] = 0 | y["default"].EFFECT_HIT),
              this.delDamageEffect(u, e, t, i, o, o),
              !0
            );
          }
          if (
            t.isBattleStatus(
              c["default"].getBufferBitValue(c["default"].BUFFER_INVINCIBLE),
            )
          )
            return (
              a["default"].addPromptMsg(
                n["default"].manageString(
                  h.GameText.STR_BATTLE_BUFFER_INVINCIBLE,
                  t.getName(),
                ),
              ),
              !1
            );
          if (
            t.isBattleStatus(
              c["default"].getBufferBitValue(c["default"].BUFFER_RESIST_MAGIC),
            ) &&
            0 == c["default"].isPhysicalAtkType(s)
          )
            return (
              a["default"].addPromptMsg(
                n["default"].manageString(
                  h.GameText.STR_BATTLE_BUFFER_RESIST_MAGIC,
                  t.getName(),
                ),
              ),
              !1
            );
          if (
            t.isBattleStatus(
              c["default"].getBufferBitValue(c["default"].BUFFER_RESIST_PHYSIC),
            ) &&
            1 == c["default"].isPhysicalAtkType(s)
          )
            return (
              a["default"].addPromptMsg(
                n["default"].manageString(
                  h.GameText.STR_BATTLE_BUFFER_RESIST_PHYSIC,
                  t.getName(),
                ),
              ),
              !1
            );
          if (1 == this.calInsight(e, t, i, o)) return !1;
          ((this.isLeftHand = !0),
            (this.block = 0),
            (this.totalHitTime = e.get(f.ModelConst.ATK_TIME)),
            null != i && (this.totalHitTime += i.atk_time),
            (this.totalHitTime = T.Tool.sumValue(
              this.totalHitTime,
              0,
              f.ModelConst.MIN_HIT_TIME,
              f.ModelConst.MAX_HIT_TIME,
            )),
            1 == c["default"].isPhysicalAtkType(s) &&
              (this.block = this.calc(y["default"].BATTLE_BLOCK, t, e, i)));
          var _ = e.get(f.ModelConst.LEFT_ATK_TIME),
            d = e.get(f.ModelConst.RIGHT_ATK_TIME),
            p = _ > 0 && d > 0;
          0 >= _ && d > 0 && (this.isLeftHand = !1);
          for (
            var g = !1, S = new v["default"](), I = new v["default"](), m = 0;
            m < this.totalHitTime;
            m++
          ) {
            var u = this.calcDirectDamage(e, t, i, r);
            if (
              (1 == p && (this.isLeftHand = !this.isLeftHand),
              null != u &&
                E["default"].isEffectStatus(
                  u[y["default"].DMG_EFFECT],
                  y["default"].EFFECT_HIT,
                ) &&
                (g = !0),
              g && (this.block -= y["default"].BLOCK_HIT_REDUCE),
              this.delDamageEffect(u, e, t, i, S, I),
              1 == t.isDead())
            ) {
              this.checkDie1Hp(t, null);
              break;
            }
          }
          var A = y["default"].MAX_SHOW_HIT_2;
          (null != i &&
            c["default"].getSkillAreaPlayerNum(i.area) >
              c["default"].SKILL_AREA_CURSOR_2 &&
            (A = y["default"].MAX_SHOW_HIT),
            S.length >= A && (S = this.mergeControlList(S, !1)),
            (I = this.mergeControlList(I, !1)));
          for (var m = 0; m < S.length; m++) o.addElement(S.elementAt(m));
          for (var m = 0; m < I.length; m++) o.addElement(I.elementAt(m));
          return g;
        }),
        (e.prototype.delDamageEffect = function (e, t, i, o, n, a, s) {
          if (null != e) {
            var l = E["default"].isEffectStatus(
                e[y["default"].DMG_EFFECT],
                y["default"].EFFECT_HIT,
              ),
              u = e[y["default"].DMG_VALUE] ? -e[y["default"].DMG_VALUE] : 0;
            (1 == l &&
              (i.addValue(f.ModelConst.HP, u),
              t.addValue(f.ModelConst.ARGO, -u)),
              i.isDeadNoWithDelay() &&
                (e[y["default"].DMG_EFFECT] |= y["default"].EFFECT_DIE));
            var _ = r["default"].createBattleTargetEffect(
              i.position,
              u,
              e[y["default"].DMG_EFFECT],
              0,
            );
            if ((n.addElement(_), 1 == l)) {
              var d = e[y["default"].DMG_HP_GET_VALUE];
              d > 0 &&
                (t.addValue(f.ModelConst.HP, d),
                (_ = r["default"].createBattleTargetEffect(
                  t.position,
                  d,
                  y["default"].EFFECT_HIT,
                  0,
                )),
                a.addElement(_));
              var p = e[y["default"].DMG_MP_GET_VALUE];
              p > 0 &&
                (t.addValue(f.ModelConst.MP, p),
                (_ = r["default"].createBattleTargetEffect(
                  t.position,
                  p,
                  y["default"].EFFECT_HIT | y["default"].EFFECT_MP_CHANGE,
                  0,
                )),
                a.addElement(_));
              var c = -e[y["default"].DMG_BACK_VALUE];
              if (c) {
                (t.addValue(f.ModelConst.HP, c),
                  i.addValue(f.ModelConst.ARGO, -c));
                var h = y["default"].EFFECT_HIT;
                (1 == t.isDeadNoWithDelay() &&
                  ((h |= y["default"].EFFECT_DIE), this.checkDie1Hp(t, null)),
                  (_ = r["default"].createBattleTargetEffect(
                    t.position,
                    c,
                    h,
                    0,
                  )),
                  a.addElement(_));
              }
            }
          }
        }),
        (e.prototype.calcDirectDamage = function (e, t, i, o) {
          var n = new Array(y["default"].DMG_DATA_SIZE).fill(0);
          if (null == e) return n;
          if (null == t) return n;
          var a = 0,
            r = this.calc(y["default"].BATTLE_HITRATE, e, t, i);
          a = this.randInt(100);
          var s = r > a;
          T.Tool.debug(
            "回合" +
              this.round +
              "命中(" +
              e.position +
              "->" +
              t.position +
              "): hitRate = " +
              r +
              ",randValue = " +
              a +
              ",isHit = " +
              s,
          );
          var l = this.calc(y["default"].BATTLE_DAMAGE, e, t, i);
          T.Tool.debug(
            "回合" +
              this.round +
              "伤害(" +
              e.position +
              "->" +
              t.position +
              "): dmg = " +
              l,
          );
          var u = 0;
          (t.isBattleStatus(
            c["default"].getBufferBitValue(c["default"].BUFFER_WEAK),
          ) && (u += 20),
            t.isBattleStatus(
              c["default"].getBufferBitValue(c["default"].BUFFER_BLOOD),
            ) && (u += 10),
            u > 0 && (l += g.GUtil.intNum((l * u) / 100)),
            T.Tool.debug(
              "回合" +
                this.round +
                "衰弱--伤害(" +
                e.position +
                "->" +
                t.position +
                "): dmg = " +
                l,
            ));
          var _ = this.calc(y["default"].BATTLE_CRI_RATE, e, t, i);
          a = this.randInt(100);
          var d = _ > a;
          if (
            (T.Tool.debug(
              "回合" +
                this.round +
                "暴击(" +
                e.position +
                "->" +
                t.position +
                "): criRate = " +
                _ +
                ",randValue = " +
                a +
                ",isCritical = " +
                d,
            ),
            d &&
              ((l = g.GUtil.intNum((15 * l) / 10)),
              (n[y["default"].DMG_EFFECT] |= y["default"].EFFECT_CRITICAL)),
            1 == s && this.block > 0)
          ) {
            a = this.randInt(100);
            var p = S["default"].isPreviewBeta
              ? Math.min(y["default"].MAX_BLOCK_TOUCH, this.block)
              : this.block;
            (p > a && (s = !1),
              T.Tool.debug(
                "回合" +
                  this.round +
                  "格挡(" +
                  t.position +
                  "): randValue=" +
                  a +
                  ",block=" +
                  this.block +
                  "," +
                  s,
              ),
              (n[y["default"].DMG_EFFECT] |= y["default"].EFFECT_BLOCK));
          }
          if (1 == s) {
            (l > 0 &&
              t.keepout_atk_time > 0 &&
              (0 == t.isTabStatus(f.ModelConst.TAG_IS_KEEP_OUT) &&
                (n[y["default"].DMG_EFFECT] |= y["default"].EFFECT_KEEPOUT),
              t.setTabStatus(!0, f.ModelConst.TAG_IS_KEEP_OUT),
              (l = 0)),
              (n[y["default"].DMG_BACK_VALUE] = this.calBackValue(e, t, i, l)));
            var h = l;
            ((l = this.calTouchDmg(t, e, i, l)),
              T.Tool.debug(
                "回合" +
                  this.round +
                  "伤害减免(强韧)(" +
                  e.position +
                  "->" +
                  t.position +
                  "): oldDmg=" +
                  h +
                  ",damage=" +
                  l,
              ),
              h != l &&
                (n[y["default"].DMG_EFFECT] |= y["default"].EFFECT_TOUCH),
              (h = l),
              (l = this.calDefFieldDmg(t, l)),
              T.Tool.debug(
                "回合" +
                  this.round +
                  "法力护盾减免(强韧)(" +
                  e.position +
                  "->" +
                  t.position +
                  "): oldDmg=" +
                  h +
                  ",damage=" +
                  l,
              ),
              h != l &&
                (n[y["default"].DMG_EFFECT] |= y["default"].EFFECT_DEF_FIELD));
          }
          return (
            (n[y["default"].DMG_VALUE] = l),
            1 == s &&
              ((n[y["default"].DMG_EFFECT] |= y["default"].EFFECT_HIT),
              (n[y["default"].DMG_HP_GET_VALUE] = this.calHPMPGetValue(
                e,
                i,
                l,
                !0,
                o,
              )),
              (n[y["default"].DMG_MP_GET_VALUE] = this.calHPMPGetValue(
                e,
                i,
                l,
                !1,
                o,
              ))),
            T.Tool.debug(
              "回合" +
                this.round +
                "伤害数值(" +
                e.position +
                "->" +
                t.position +
                "): damage = " +
                l,
            ),
            T.Tool.debug(
              "回合" +
                this.round +
                "是否命中(" +
                e.position +
                "->" +
                t.position +
                "): isHit = " +
                s,
            ),
            T.Tool.debug(
              "回合" +
                this.round +
                "是否暴击(" +
                e.position +
                "->" +
                t.position +
                "): isCritical = " +
                d,
            ),
            T.Tool.debug(
              "回合" +
                this.round +
                "反击伤害值(" +
                e.position +
                "->" +
                t.position +
                "): DMG_BACK_VALUE = " +
                n[y["default"].DMG_BACK_VALUE],
            ),
            T.Tool.debug(
              "回合" +
                this.round +
                "生命吸收值(" +
                e.position +
                "->" +
                t.position +
                "): DMG_HP_GET_VALUE = " +
                n[y["default"].DMG_HP_GET_VALUE],
            ),
            T.Tool.debug(
              "回合" +
                this.round +
                "法力吸收值(" +
                e.position +
                "->" +
                t.position +
                "): DMG_MP_GET_VALUE = " +
                n[y["default"].DMG_MP_GET_VALUE],
            ),
            n
          );
        }),
        (e.prototype.isWilSuccess = function (e, t, i) {
          var o = e.get(f.ModelConst.WIL);
          if (
            (null != i &&
              (o -= i.getPowerValue(c["default"].POWER_SKILL_TARGET_WIL)),
            null != t && e != t && (o -= t.get(f.ModelConst.IGNORE_WIL)),
            0 >= o)
          )
            return !1;
          o > y["default"].MAX_RATE_WIL && (o = y["default"].MAX_RATE_WIL);
          var n = this.randInt(1e3);
          return o > n;
        }),
        (e.prototype.calTouchDmgOld = function (e, t, i) {
          if (null == e) return i;
          var o = e.get(f.ModelConst.TOUGH);
          if (
            (null != t &&
              (o -= t.getPowerValue(c["default"].POWER_SKILL_TARGET_TOUCH)),
            0 >= o)
          )
            return i;
          var n = i - o;
          return (0 > n && (n = 0), n);
        }),
        (e.prototype.calTouchDmg = function (e, t, i, o) {
          if (null == e) return o;
          var n = E["default"].calTouch(e);
          if (
            (null != i &&
              (n -= i.getPowerValue(c["default"].POWER_SKILL_TARGET_TOUCH)),
            null != t && e != t && (n -= t.get(f.ModelConst.IGNORE_TOUCH)),
            n > y["default"].MAX_RATE_TOUCH &&
              (n = y["default"].MAX_RATE_TOUCH),
            0 >= n)
          )
            return o;
          var a = o - g.GUtil.intNum((o * n) / 1e3);
          return (0 > a && (a = 0), g.GUtil.intNum(a));
        }),
        (e.prototype.calHPMPGetValue = function (e, t, i, o, n) {
          if (null == e) return 0;
          if (e.isDead()) return 0;
          0 >= n && (n = 1);
          var a = 0;
          if (1 == o) {
            if (
              e.isBattleStatus(
                c["default"].getBufferBitValue(c["default"].BUFFER_BURN),
              )
            )
              return 0;
            ((a = e.get(f.ModelConst.LIFE_ABSORPTION)),
              null != t &&
                (a += t.getPowerValue(
                  c["default"].POWER_SKILL_LIFE_ABSORPTION,
                )));
          } else {
            if (
              e.isBattleStatus(
                c["default"].getBufferBitValue(c["default"].BUFFER_POISON),
              )
            )
              return 0;
            ((a = e.get(f.ModelConst.MANA_ABSORPTION)),
              null != t &&
                (a += t.getPowerValue(
                  c["default"].POWER_SKILL_MANA_ABSORPTION,
                )));
          }
          if (((a /= n), (a = g.GUtil.intNum(a)), 0 >= a)) return 0;
          a > y["default"].MAX_RATE_HPMP_GET &&
            (a = y["default"].MAX_RATE_HPMP_GET);
          var r = (i * a) / 1e3;
          return g.GUtil.intNum(r);
        }),
        (e.prototype.calBackValue = function (e, t, i, o) {
          var n = this.atkType,
            a = 0;
          if (
            t.isBattleStatus(
              c["default"].getBufferBitValue(c["default"].BUFFER_STUN),
            )
          )
            return 0;
          if (
            e.isBattleStatus(
              c["default"].getBufferBitValue(c["default"].BUFFER_INVINCIBLE),
            )
          )
            return 0;
          if (n == c["default"].ATKTYPE_MAGIC) {
            if (
              e.isBattleStatus(
                c["default"].getBufferBitValue(
                  c["default"].BUFFER_RESIST_MAGIC,
                ),
              )
            )
              return 0;
            a = this.calc(y["default"].BATTLE_MAGIC_BACK, t, e, i);
          } else if (c["default"].isPhysicalAtkType(n)) {
            if (
              e.isBattleStatus(
                c["default"].getBufferBitValue(
                  c["default"].BUFFER_RESIST_PHYSIC,
                ),
              )
            )
              return 0;
            a = this.calc(y["default"].BATTLE_BACK, t, e, i);
          }
          if (0 >= a) return 0;
          var r = this.randInt(100),
            s = a > r;
          if (0 == s) return 0;
          var l = g.GUtil.intNum((o * a) / 100);
          return (
            n == c["default"].ATKTYPE_MAGIC
              ? T.Tool.debug(
                  "魔法攻击(" +
                    t.position +
                    "): 最终伤害:" +
                    o +
                    " -> 反击值:" +
                    l,
                )
              : c["default"].isPhysicalAtkType(n) &&
                T.Tool.debug(
                  "物理反击(" +
                    t.position +
                    "): 最终伤害:" +
                    o +
                    " -> 反击值:" +
                    l,
                ),
            l
          );
        }),
        (e.prototype.calDefFieldDmg = function (e, t) {
          if (null == e || 0 == t) return t;
          var i = e.get(f.ModelConst.DEF_FIELD);
          if (0 >= i) return t;
          var o = e.get(f.ModelConst.MP),
            n = o;
          if (0 >= n) return t;
          n > i && (n = i);
          var a = Math.min(t, n);
          (e.addValue(f.ModelConst.MP, -a),
            e.addValue(f.ModelConst.DEF_FIELD, -a));
          var r = t - a;
          return r;
        }),
        (e.prototype.calc = function (e, t, i, o, n) {
          var a = 0;
          switch ((null == o && (o = p["default"].DUMMY_SKILL), e)) {
            case y["default"].BATTLE_DAMAGE:
              return this.calcWithType(
                y["default"].BATTLE_DAMAGE,
                t.getAttackType(o),
                t,
                i,
                o,
              );
            case y["default"].BATTLE_HITRATE:
              return this.calcWithType(
                y["default"].BATTLE_HITRATE,
                t.getAttackType(o),
                t,
                i,
                o,
              );
            case y["default"].BATTLE_STR_HITRATE:
              a =
                t.get(f.ModelConst.HIT_RATE) +
                o.getPowerValue(c["default"].POWER_SKILL_HITRATE) -
                i.get(f.ModelConst.DODGE);
              var r = t.get(f.ModelConst.FORCE_HIT);
              return (
                r > f.ModelConst.MAX_FORCE_RATE &&
                  (r = f.ModelConst.MAX_FORCE_RATE),
                (r += o.getPowerValue(c["default"].POWER_SKILL_HIT_FORCE)),
                r > a && (a = r),
                T.Tool.debug(
                  "(劈砍STR)命中率计算  HIT_RATE:" +
                    t.get(f.ModelConst.HIT_RATE) +
                    "(skill.powerHitRate=" +
                    o.getPowerValue(c["default"].POWER_HITRATE) +
                    "), t.DODGE:" +
                    i.get(f.ModelConst.DODGE) +
                    ", 强制命中: " +
                    r +
                    " 输出:" +
                    a,
                ),
                0 | a
              );
            case y["default"].BATTLE_AGI_HITRATE:
              a =
                t.get(f.ModelConst.HIT_RATE) +
                o.getPowerValue(c["default"].POWER_SKILL_HITRATE) -
                i.get(f.ModelConst.DODGE);
              var r = t.get(f.ModelConst.FORCE_HIT);
              return (
                r > f.ModelConst.MAX_FORCE_RATE &&
                  (r = f.ModelConst.MAX_FORCE_RATE),
                (r += o.getPowerValue(c["default"].POWER_SKILL_HIT_FORCE)),
                r > a && (a = r),
                0 | a
              );
            case y["default"].BATTLE_MAGIC_HITRATE:
              ((a = t.get(f.ModelConst.HIT_MAGIC)),
                (a += o.getPowerValue(c["default"].POWER_SKILL_HITRATE)));
              var s = this.getLevelIncludeLevel2(i);
              return (0 >= s && (s = 1), (a = g.GUtil.intNum((10 * a) / s)));
            case y["default"].BATTLE_DMG_STR:
              var u = this.calc(y["default"].BATTLE_RD_STR, i, t, o),
                _ = this.calc(y["default"].BATTLE_AP_STR, t, i, o),
                d = this.randRange(
                  y["default"].BATTLE_DMG_MIN,
                  y["default"].BATTLE_DMG_MAX,
                ),
                h = g.GUtil.intNum((100 - u) * _ * d);
              return (
                _ > 0 &&
                  d > 0 &&
                  100 - u > 0 &&
                  0 > h &&
                  (h = T.Tool.MAX_VALUE_int),
                (a = g.GUtil.intNum(h / 1e4)),
                0 >= a && (a = 1),
                0 | a
              );
            case y["default"].BATTLE_AP_STR:
              var E = this.calc(y["default"].BATTLE_RAND_ATC, t, i, o),
                v = t.getAttackType(o),
                I = (function () {
                  switch (v) {
                    case c["default"].ATKTYPE_RANGE_STR:
                      return t.get(f.ModelConst.ATK_STR_RANGE);
                    case c["default"].ATKTYPE_STR:
                      return t.get(f.ModelConst.ATK_STR_NEARBY);
                    default:
                      return 0;
                  }
                })(),
                m = S["default"].isPreviewBeta ? I : 0,
                A = S["default"].isPreviewBeta
                  ? 0
                  : t.get(f.ModelConst.ATK_STR);
              return (
                (a =
                  g.GUtil.intNum((A + m) / this.totalHitTime) +
                  E +
                  g.GUtil.intNum(
                    o.getPowerValue(c["default"].POWER_SKILL_DAMAGE) /
                      this.totalHitTime,
                  )),
                T.Tool.debug(
                  "(劈砍)攻击点数计算  ATK_STR=" +
                    t.get(f.ModelConst.ATK_STR) +
                    " randRange(随机武器伤害)=" +
                    E +
                    "(skill.powerDamage=" +
                    o.getPowerValue(c["default"].POWER_SKILL_DAMAGE) +
                    ") 输出:" +
                    a,
                ),
                0 | a
              );
            case y["default"].BATTLE_RD_STR:
              var C = void 0 != n ? n : i.getAttackType(o);
              a = S["default"].isPreviewBeta ? 0 : t.get(f.ModelConst.DEF_STR);
              var I = (function () {
                  switch (C) {
                    case c["default"].ATKTYPE_RANGE_STR:
                      return t.get(f.ModelConst.DEF_STR_RANGE);
                    case c["default"].ATKTYPE_STR:
                      return t.get(f.ModelConst.DEF_STR_NEARBY);
                    default:
                      return 0;
                  }
                })(),
                m = S["default"].isPreviewBeta ? I : 0;
              ((a =
                (80 *
                  (a +
                    m -
                    i.get(f.ModelConst.BRK_ARMOR) -
                    o.getPowerValue(c["default"].POWER_SKILL_BRK_ARMOR))) /
                100),
                (a = g.GUtil.intNum(a)));
              var s = this.getLevelIncludeLevel2(i) + 12;
              return (
                0 >= s && (s = 1),
                (a = g.GUtil.intNum(a / s)),
                a > y["default"].BATTLE_RD_MAX
                  ? (a = y["default"].BATTLE_RD_MAX)
                  : 0 > a && (a = 0),
                T.Tool.debug(
                  "(劈砍)豁免率计算  DEF_STR:" +
                    t.get(f.ModelConst.DEF_STR) +
                    " t.BRK_ARMOR:" +
                    i.get(f.ModelConst.BRK_ARMOR) +
                    " t.LEVEL:" +
                    i.get(f.ModelConst.LEVEL) +
                    " 输出:" +
                    a,
                ),
                0 | a
              );
            case y["default"].BATTLE_DMG_AGI:
              var P = this.calc(y["default"].BATTLE_RD_AGI, i, t, o),
                R = this.calc(y["default"].BATTLE_AP_AGI, t, i, o),
                O = this.randRange(
                  y["default"].BATTLE_DMG_MIN,
                  y["default"].BATTLE_DMG_MAX,
                ),
                N = g.GUtil.intNum((100 - P) * R * O);
              return (
                100 - P > 0 &&
                  R > 0 &&
                  O > 0 &&
                  0 > N &&
                  (N = T.Tool.MAX_VALUE_int),
                (a = g.GUtil.intNum(N / 1e4)),
                0 >= a && (a = 1),
                0 | a
              );
            case y["default"].BATTLE_AP_AGI:
              var E = this.calc(y["default"].BATTLE_RAND_ATC, t, i, o),
                M = t.getAttackType(o),
                I = (function () {
                  switch (M) {
                    case c["default"].ATKTYPE_RANGE_AGI:
                      return t.get(f.ModelConst.ATK_AGI_RANGE);
                    case c["default"].ATKTYPE_AGI:
                      return t.get(f.ModelConst.ATK_AGI_NEARBY);
                    default:
                      return 0;
                  }
                })(),
                m = S["default"].isPreviewBeta ? I : 0,
                A = S["default"].isPreviewBeta
                  ? 0
                  : t.get(f.ModelConst.ATK_AGI);
              return (
                (a =
                  g.GUtil.intNum((A + m) / this.totalHitTime) +
                  E +
                  g.GUtil.intNum(
                    o.getPowerValue(c["default"].POWER_SKILL_DAMAGE) /
                      this.totalHitTime,
                  )),
                T.Tool.debug(
                  "(穿刺)攻击点数计算  ATK_AGI:" +
                    t.get(f.ModelConst.ATK_AGI) +
                    " randRange(随机武器伤害)=" +
                    E +
                    "(skill.powerDamage=" +
                    o.getPowerValue(c["default"].POWER_SKILL_DAMAGE) +
                    "),  输出:" +
                    a,
                ),
                a
              );
            case y["default"].BATTLE_RD_AGI:
              var L = void 0 != n ? n : i.getAttackType(o);
              a = S["default"].isPreviewBeta ? 0 : t.get(f.ModelConst.DEF_AGI);
              var I = (function () {
                  switch (L) {
                    case c["default"].ATKTYPE_RANGE_AGI:
                      return t.get(f.ModelConst.DEF_AGI_RANGE);
                    case c["default"].ATKTYPE_AGI:
                      return t.get(f.ModelConst.DEF_AGI_NEARBY);
                    default:
                      return 0;
                  }
                })(),
                m = S["default"].isPreviewBeta ? I : 0;
              ((a =
                (80 *
                  (a +
                    m -
                    i.get(f.ModelConst.BRK_ARMOR) -
                    o.getPowerValue(c["default"].POWER_SKILL_BRK_ARMOR))) /
                100),
                (a = g.GUtil.intNum(a)));
              var s = this.getLevelIncludeLevel2(i) + 12;
              return (
                0 >= s && (s = 1),
                (a = g.GUtil.intNum(a / s)),
                a > y["default"].BATTLE_RD_MAX
                  ? (a = y["default"].BATTLE_RD_MAX)
                  : 0 > a && (a = 0),
                T.Tool.debug(
                  "(穿刺)豁免率计算  DEF_AGI:" +
                    t.get(f.ModelConst.DEF_AGI) +
                    " t.BRK_ARMOR:" +
                    i.get(f.ModelConst.BRK_ARMOR) +
                    " t.LEVEL:" +
                    i.get(f.ModelConst.LEVEL) +
                    " 输出:" +
                    a,
                ),
                0 | a
              );
            case y["default"].BATTLE_DMG_MAGIC:
              var w = this.calc(y["default"].BATTLE_RD_MAGIC, i, t, o),
                b = this.calc(y["default"].BATTLE_AP_MAGIC, t, i, o),
                x = this.randRange(
                  y["default"].BATTLE_DMG_MIN,
                  y["default"].BATTLE_DMG_MAX,
                ),
                D = g.GUtil.intNum((100 - w) * b * x);
              return (
                100 - w > 0 &&
                  b > 0 &&
                  x > 0 &&
                  0 > D &&
                  (D = T.Tool.MAX_VALUE_int),
                (a = g.GUtil.intNum(D / 1e4)),
                0 >= a && (a = 1),
                0 | a
              );
            case y["default"].BATTLE_AP_MAGIC:
              var E = this.calc(y["default"].BATTLE_RAND_ATC, t, i, o);
              if (t.type == l.MODEL_TYPE.TYPE_PLAYER && null != t.bag) {
                var B = t.getEquipWeaponType();
                B != c["default"].ITEM_TYPE_WEAPON_TWOHAND_STAFF &&
                  B != c["default"].ITEM_TYPE_WEAPON_BALL &&
                  B != c["default"].ITEM_TYPE_WEAPON_ONEHAND_HAMMER &&
                  B != c["default"].ITEM_TYPE_WEAPON_TWOHAND_HAMMER &&
                  B != c["default"].ITEM_TYPE_WEAPON_TWOHAND_FAN &&
                  (E = 0);
              }
              return (a =
                g.GUtil.intNum(
                  t.get(f.ModelConst.ATK_MAGIC) / this.totalHitTime,
                ) +
                E +
                g.GUtil.intNum(
                  o.getPowerValue(c["default"].POWER_SKILL_DAMAGE) /
                    this.totalHitTime,
                ));
            case y["default"].BATTLE_RD_MAGIC:
              ((a =
                (80 *
                  (t.get(f.ModelConst.DEF_MAGIC) -
                    i.get(f.ModelConst.MAGIC_PENETRATION) -
                    o.getPowerValue(
                      c["default"].POWER_SKILL_MAGIC_PENETRATION,
                    ))) /
                100),
                (a = g.GUtil.intNum(a)));
              var s = this.getLevelIncludeLevel2(i) + 12;
              return (
                0 >= s && (s = 1),
                (a = g.GUtil.intNum(a / s)),
                a > y["default"].BATTLE_RD_MAX
                  ? (a = y["default"].BATTLE_RD_MAX)
                  : 0 > a && (a = 0),
                0 | a
              );
            case y["default"].BATTLE_CRI_RATE:
              ((a =
                t.get(f.ModelConst.CRITICAL) +
                o.getPowerValue(c["default"].POWER_SELF_CRITICAL)),
                S["default"].isPreviewBeta && (a -= i.ignoreCritical));
              var s = this.getLevelIncludeLevel2(i);
              return (0 >= s && (s = 1), (a = g.GUtil.intNum((15 * a) / s)));
            case y["default"].BATTLE_RAND_ATC:
              return this.randRange(
                t.get(f.ModelConst.ATK_MIN),
                t.get(f.ModelConst.ATK_MAX),
              );
            case y["default"].BATTLE_BLOCK:
              ((a = t.get(f.ModelConst.BLOCK)),
                (a -= o.getPowerValue(c["default"].POWER_SKILL_TARGET_BLOCK)),
                (a -= i.get(f.ModelConst.IGNORE_BLOCK)));
              var s = this.getLevelIncludeLevel2(i);
              return (
                0 >= s && (s = 1),
                (a = g.GUtil.intNum((7 * a) / s)),
                0 > a && (a = 0),
                S["default"].isPreviewBeta ||
                  (a > y["default"].MAX_BLOCK_TOUCH &&
                    (a = y["default"].MAX_BLOCK_TOUCH)),
                0 | a
              );
            case y["default"].BATTLE_INSIGHT:
              ((a = t.get(f.ModelConst.INSIGHT)),
                (a -= o.getPowerValue(c["default"].POWER_SKILL_TARGET_INSIGHT)),
                (a -= i.get(f.ModelConst.IGNORE_INSIGHT)));
              var s = this.getLevelIncludeLevel2(i);
              return (
                0 >= s && (s = 1),
                (a = g.GUtil.intNum((7 * a) / s)),
                0 > a && (a = 0),
                a > y["default"].MAX_INSIGHT_TOUCH &&
                  (a = y["default"].MAX_INSIGHT_TOUCH),
                a
              );
            case y["default"].BATTLE_BACK:
              ((a = t.get(f.ModelConst.BACK)),
                (a -= o.getPowerValue(c["default"].POWER_SKILL_TARGET_BACK)),
                (a -= i.get(f.ModelConst.IGNORE_BACK)));
              var s = this.getLevelIncludeLevel2(i);
              return (
                0 >= s && (s = 1),
                (a = g.GUtil.intNum((7 * a) / s)),
                0 > a && (a = 0),
                a > t.get(f.ModelConst.BACK_MAX) &&
                  (a = t.get(f.ModelConst.BACK_MAX)),
                0 | a
              );
            case y["default"].BATTLE_MAGIC_BACK:
              ((a = t.get(f.ModelConst.MAGIC_BACK)),
                (a -= o.getPowerValue(
                  c["default"].POWER_SKILL_TARGET_MAGIC_BACK,
                )),
                (a -= i.get(f.ModelConst.IGNORE_MAGIC_BACK)));
              var s = this.getLevelIncludeLevel2(i);
              return (
                0 >= s && (s = 1),
                (a = g.GUtil.intNum((7 * a) / s)),
                0 > a && (a = 0),
                a > t.get(f.ModelConst.BACK_MAX) &&
                  (a = t.get(f.ModelConst.BACK_MAX)),
                a
              );
          }
          return 0;
        }),
        (e.prototype.calcWithType = function (e, t, i, o, n) {
          switch (e) {
            case y["default"].BATTLE_DAMAGE:
              switch (t) {
                case c["default"].ATKTYPE_STR:
                case c["default"].ATKTYPE_RANGE_STR:
                  return this.calc(y["default"].BATTLE_DMG_STR, i, o, n);
                case c["default"].ATKTYPE_AGI:
                case c["default"].ATKTYPE_RANGE_AGI:
                  return this.calc(y["default"].BATTLE_DMG_AGI, i, o, n);
                case c["default"].ATKTYPE_MAGIC:
                  return this.calc(y["default"].BATTLE_DMG_MAGIC, i, o, n);
                case c["default"].ATKTYPE_CURSE:
                  return 0;
                default:
                  return 0;
              }
            case y["default"].BATTLE_HITRATE:
              switch (t) {
                case c["default"].ATKTYPE_STR:
                case c["default"].ATKTYPE_RANGE_STR:
                  return this.calc(y["default"].BATTLE_STR_HITRATE, i, o, n);
                case c["default"].ATKTYPE_AGI:
                case c["default"].ATKTYPE_RANGE_AGI:
                  return this.calc(y["default"].BATTLE_AGI_HITRATE, i, o, n);
                case c["default"].ATKTYPE_MAGIC:
                case c["default"].ATKTYPE_CURSE:
                  return this.calc(y["default"].BATTLE_MAGIC_HITRATE, i, o, n);
                case c["default"].ATKTYPE_BLESS:
                  return 100;
                default:
                  return 0;
              }
          }
          return 0;
        }),
        (e.prototype.randInt = function (e) {
          if (null == this.random) return 0;
          var t = this.random.nextInt();
          return (
            (t = Math.abs(t) % e),
            this._randCnt++,
            T.Tool.debug(
              "random randInt v:" +
                t +
                " randCnt:" +
                this._randCnt +
                "base" +
                e,
            ),
            t
          );
        }),
        (e.prototype.randRange = function (e, t) {
          if (e == t) return e;
          var i = this.randInt(t - e + 1);
          return e + i;
        }),
        (e.prototype.isValidPos = function (e, t) {
          if (void 0 == t) return 0 > e || e >= y["default"].MAX_POS ? !1 : !0;
          var i = 0,
            o = 2 * this.rowLeft;
          return (
            0 == E["default"].isLeftSide(e) &&
              ((i = y["default"].LEFT_MAX_POS), (o = y["default"].MAX_POS)),
            i > t || t >= o ? !1 : !0
          );
        }),
        (e.prototype.isValidBattlePlayer = function (e) {
          return null == e
            ? !1
            : 1 == e.isDeadNoWithDelay() ||
                e.isBattleStatus(d["default"].BSTATUS_ESCAPE)
              ? !1
              : !0;
        }),
        (e.prototype.isHavePlayer = function (e, t) {
          for (var i = e; t > i; i++) {
            var o = this.getPlayerByPos(i);
            if (null != o && o.getType() == l.MODEL_TYPE.TYPE_PLAYER) return !0;
          }
          return !1;
        }),
        (e.prototype.getActivePlayerNum = function (e, t, i) {
          for (var o = 0, n = e; t > n; n++) {
            var a = this.getPlayerByPos(n);
            null != a &&
              ((i && a.getType() != l.MODEL_TYPE.TYPE_PLAYER) ||
                (1 == this.isValidBattlePlayer(a) && o++));
          }
          return o;
        }),
        (e.prototype.getSelectArea = function (e, t, i) {
          var o = c["default"].getSearchTypeByArea(i);
          switch (o) {
            case c["default"].SKILL_AREA_SEARCH_ALL:
              break;
            case c["default"].SKILL_AREA_SEARCH_ENEMY:
              if (1 == E["default"].isSameSide(e, t)) return null;
              break;
            case c["default"].SKILL_AREA_SEARCH_FRIEND:
              if (0 == E["default"].isSameSide(e, t)) return null;
              break;
            case c["default"].SKILL_AREA_SEARCH_MY_SELF:
              return e != t ? null : [255 & t];
            case c["default"].SKILL_AREA_SEARCH_MY_OWNER:
              return [255 & t];
          }
          var n = null,
            a = [];
          switch (i) {
            case c["default"].SKILL_AREA_SINGLE:
            case c["default"].SKILL_AREA_ENEMY_SINGLE:
            case c["default"].SKILL_AREA_ME_SIGHLE:
              a = this.getColumnTypeTarget(t, 1, !1);
              break;
            case c["default"].SKILL_AREA_PLAYER_AND_PET:
            case c["default"].SKILL_AREA_FRONT_BACK_TWO:
            case c["default"].SKILL_AREA_ENEMY_FONT_BACK_TWO:
            case c["default"].SKILL_AREA_ME_FONT_BACK_TWO:
              a = this.getRowTypeTarget(t, 1);
              break;
            case c["default"].SKILL_AREA_UP_DOWN_TWO:
            case c["default"].SKILL_AREA_ENEMY_UP_DOWN_TWO:
            case c["default"].SKILL_AREA_ME_UP_DOWN_TWO:
              a = this.getColumnTypeTarget(t, 2, !1);
              break;
            case c["default"].SKILL_AREA_UP_DOWN_THREE:
            case c["default"].SKILL_AREA_ENEMY_UP_DOWN_THREE:
            case c["default"].SKILL_AREA_ME_UP_DOWN_THREE:
              a = this.getColumnTypeTarget(t, 3, !1);
              break;
            case c["default"].SKILL_AREA_UP_DOWN_FOUR:
            case c["default"].SKILL_AREA_ENEMY_UP_DOWN_FOUR:
            case c["default"].SKILL_AREA_ME_UP_DOWN_FOUR:
              a = this.getColumnTypeTarget(t, 4, !1);
              break;
            case c["default"].SKILL_AREA_UP_DOWN_FIVE:
            case c["default"].SKILL_AREA_ENEMY_UP_DOWN_FIVE:
            case c["default"].SKILL_AREA_ME_UP_DOWN_FIVE:
              a = this.getColumnTypeTarget(t, 5, !1);
              break;
            case c["default"].SKILL_AREA_TEN:
            case c["default"].SKILL_AREA_ENEMY_TEN:
            case c["default"].SKILL_AREA_ME_TEN:
              a = this.getColumnTypeTarget(t, 3, !0);
              break;
            case c["default"].SKILL_AREA_SQUARE:
            case c["default"].SKILL_AREA_ENEMY_SQUARE:
            case c["default"].SKILL_AREA_ME_SQUARE:
              a = this.getRowTypeTarget(t, 2);
              break;
            case c["default"].SKILL_AREA_AROUND_SIX:
            case c["default"].SKILL_AREA_ENEMY_AROUND_SIX:
            case c["default"].SKILL_AREA_ME_AROUND_SIX:
              a = this.getRowTypeTarget(t, 3);
              break;
            case c["default"].SKILL_AREA_ALL:
            case c["default"].SKILL_AREA_ENEMY_ALL:
            case c["default"].SKILL_AREA_ME_ALL:
            case c["default"].SKILL_AREA_ME_ALL_NO_SELF:
            case c["default"].SKILL_AREA_ALL_NO_SELF:
              var r = E["default"].getPositionSide(t);
              ((i == c["default"].SKILL_AREA_ALL ||
                i == c["default"].SKILL_AREA_ALL_NO_SELF) &&
                (r = -1),
                (n = this.getAllTypeTarget(r, e, i)));
              break;
            case c["default"].SKILL_AREA_ENEMY_HP_LEAST:
            case c["default"].SKILL_AREA_ENEMY_HP_MOST:
            case c["default"].SKILL_AREA_ME_HP_LEAST:
            case c["default"].SKILL_AREA_ME_HP_MOST:
              return [255 & t];
          }
          if (
            null != a &&
            a.length > 0 &&
            ((n = E["default"].getTarget(a)),
            i == c["default"].SKILL_AREA_PLAYER_AND_PET)
          ) {
            var s = !1;
            if (null != n && n.length > 0)
              for (var l = 0; l < n.length; l++) n[l] == e && (s = !0);
            if (0 == s) return null;
          }
          return n;
        }),
        (e.prototype.getColumnTypeTarget = function (e, t, i) {
          for (var o = [], n = 0; t > n; n++) {
            var a = 0;
            if (n % 2 == 0) {
              if (1 == i && 0 == n) {
                E["default"].getLeftRightTypeTarget(o, e);
                continue;
              }
              a = e - 2 * g.GUtil.intNum(n / 2);
            } else a = e + 2 * (g.GUtil.intNum(n / 2) + 1);
            0 != this.isValidPos(e, a) && o.push(a);
          }
          return o;
        }),
        (e.prototype.getRowTypeTarget = function (e, t) {
          for (var i = [], o = 0; t > o; o++) {
            var n = 0,
              a = g.GUtil.intNum(o / 2);
            ((n = o % 2 == 0 ? e - 2 * a : e + 2 * (a + 1)),
              0 != this.isValidPos(e, n) &&
                E["default"].getLeftRightTypeTarget(i, n));
          }
          return i;
        }),
        (e.prototype.getAllTypeTarget = function (e, t, i) {
          var o = 0,
            n = y["default"].MAX_POS;
          e == y["default"].LEFT_SIDE
            ? ((o = 0), (n = o + this.getLeftPosNum()))
            : e == y["default"].RIGHT_SIDE &&
              ((o = y["default"].LEFT_MAX_POS),
              (n = o + this.getRightPosNum()));
          var a = n - o;
          if (0 >= a) return null;
          var r = new Array(a).fill(0),
            s = !0;
          t >= 0 &&
            (i == c["default"].SKILL_AREA_ME_ALL_NO_SELF ||
              i == c["default"].SKILL_AREA_ALL_NO_SELF) &&
            (s = !1);
          for (var l = 0, u = o; n > u; u++) (0 != s || u != t) && (r[l++] = u);
          if (l > a) return null;
          var _ = new Array(l).fill(0);
          return (T.Tool.arraycopy(r, 0, _, 0, l), _);
        }),
        (e.prototype.countNotNullPlayerPos = function (e) {
          if (null == e || e.length <= 0) return 0;
          for (var t = 0, i = 0; i < e.length; i++) {
            var o = this.getPlayerByPos(e[i]);
            0 != this.isValidBattlePlayer(o) && t++;
          }
          return t;
        }),
        (e.prototype.getPlayerPet = function (e) {
          var t = this.getPlayerByPos(e);
          if (null == t || t.getType() != l.MODEL_TYPE.TYPE_PLAYER) return null;
          var i = e - 1;
          E["default"].isLeftSide(e) && (i = e + 1);
          var o = this.getPlayerByPos(i);
          return null == o
            ? null
            : o.getType() != l.MODEL_TYPE.TYPE_PET
              ? null
              : o;
        }),
        (e.prototype.searchAICursor = function (e, t, i) {
          if (null == e) return 0;
          switch (t) {
            case c["default"].SKILL_AREA_ENEMY_HP_LEAST:
              return E["default"].selectValueTarget(
                this,
                e,
                c["default"].AI_HP_MIN_ENEMY,
                !0,
              );
            case c["default"].SKILL_AREA_ENEMY_HP_MOST:
              return E["default"].selectValueTarget(
                this,
                e,
                c["default"].AI_HP_MAX_ENEMY,
                !0,
              );
            case c["default"].SKILL_AREA_ME_HP_LEAST:
              return E["default"].selectValueTarget(
                this,
                e,
                c["default"].AI_HP_MIN_FRIEND,
                !1,
              );
            case c["default"].SKILL_AREA_ME_HP_MOST:
              return E["default"].selectValueTarget(
                this,
                e,
                c["default"].AI_HP_MAX_FRIEND,
                !1,
              );
            case c["default"].SKILL_AREA_PLAYER_AND_PET:
              return e.position;
          }
          var o = 0,
            n = y["default"].MAX_POS,
            a = c["default"].getSearchTypeByArea(t);
          switch (a) {
            case c["default"].SKILL_AREA_SEARCH_ALL:
              if (t != c["default"].SKILL_AREA_SINGLE) break;
            case c["default"].SKILL_AREA_SEARCH_ENEMY:
              E["default"].isLeftSide(e.position)
                ? ((o = y["default"].LEFT_MAX_POS), (n = y["default"].MAX_POS))
                : ((o = 0), (n = y["default"].LEFT_MAX_POS));
              break;
            case c["default"].SKILL_AREA_SEARCH_FRIEND:
              E["default"].isLeftSide(e.position)
                ? ((o = 0), (n = y["default"].LEFT_MAX_POS))
                : ((o = y["default"].LEFT_MAX_POS), (n = y["default"].MAX_POS));
              break;
            case c["default"].SKILL_AREA_SEARCH_MY_SELF:
              return e.position;
            case c["default"].SKILL_AREA_SEARCH_MY_OWNER:
              return E["default"].getPetOwnerPos(e);
          }
          for (
            var r = o,
              s = 0,
              l = c["default"].getSkillAreaPlayerNum(t),
              u = {},
              _ = o;
            n > _;
            _++
          )
            if (l != c["default"].SKILL_AREA_CURSOR_ALL) {
              var d = this.getSelectArea(e.position, _, t),
                p = this.countNotNullPlayerPos(d);
              if (1 != i) {
                if (p == c["default"].getSkillAreaPlayerNum(t)) return _;
                p > s && ((s = p), (r = _));
              } else if (p > 0) {
                var h = u[p];
                (null == h && ((h = []), (u[p] = h)),
                  h.push(_),
                  p > s && (s = p));
              }
            } else {
              if (
                (t == c["default"].SKILL_AREA_ME_ALL_NO_SELF ||
                  t == c["default"].SKILL_AREA_ALL_NO_SELF) &&
                _ == e.position
              )
                continue;
              var f = this.getPlayerByPos(_);
              if (1 == this.isValidBattlePlayer(f)) return _;
            }
          if (1 == i && Object.keys(u).length > 0) {
            var h = u[s];
            if (null != h && h.length > 0) {
              var g = T.Tool.rand(h.length),
                v = h[g];
              if (null != v) {
                var S = v;
                return S;
              }
            }
          }
          return r;
        }),
        (e.prototype.setWaitStatus = function (e) {
          this.waitStatus |= 1 << e;
        }),
        (e.prototype.clearWaitStatus = function (e) {
          this.waitStatus &= ~(1 << e);
        }),
        (e.prototype.isWaitStatus = function (e) {
          return 0 != (this.waitStatus & (1 << e));
        }),
        (e.prototype.getLevelIncludeLevel2 = function (e) {
          var t = e.get(f.ModelConst.LEVEL);
          return (t += e.get(f.ModelConst.LEVEL2));
        }),
        e
      );
    })();
  t["default"] = I;
});
