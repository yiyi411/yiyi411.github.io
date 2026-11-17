(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(22),
    n = i(17),
    a = i(16),
    r = i(21),
    s = i(18),
    l = i(19),
    u = i(5),
    _ = i(62),
    d = i(102),
    p = i(31),
    c = i(91),
    h = i(56),
    f = i(55),
    T = i(10),
    E = i(20),
    y = i(61),
    g = i(376),
    v = i(75),
    S = i(24),
    I = i(54),
    m = i(378),
    A = i(99),
    C = i(115),
    P = i(240),
    R = i(8),
    O = i(245),
    N = i(29),
    M = i(44),
    L = i(1),
    w = i(3),
    b = i(0),
    x = (function () {
      function e() {
        ((this.isAutoEscape = !1),
          (this.tagValue = 0),
          (this.endCounter = -1),
          (this.playersColumn1 = Array(y["default"].NUM_COLUMN_1)),
          (this.playersColumn2 = Array(y["default"].NUM_COLUMN_2)),
          (this.playersColumn3 = Array(y["default"].NUM_COLUMN_3)),
          (this.playersColumn4 = Array(y["default"].NUM_COLUMN_4)),
          (this.battleX = 0),
          (this.battleY = 0),
          (this.battleWidth = 0),
          (this.battleHeight = 0),
          (this.battlePosition = new Array(y["default"].MAX_POS)),
          (this.posData = new Array(y["default"].POS_DATA_SIZE)),
          (this.animCtrls = []),
          (this.nextPollTime = 0),
          (this.targetLocation = []),
          (this.frontPlayerVector = new S["default"]()),
          (this.battleX = 0),
          (this.battleY = 0),
          (this.battleWidth = y["default"].SCREEN_WIDTH),
          (this.battleHeight = y["default"].SCREEN_HEIGHT),
          (this.battlePanel = new g["default"](this)));
        var e = this.battle,
          t = e.getRowLeft(),
          i = e.getRowRight(),
          o = this.battleX,
          n = this.battleWidth,
          a = this.battleY,
          r = this.battleHeight;
        (this.initBattlePosition(o, a, n, r, this.getOffsetY(r, t), t, !1),
          this.initBattlePosition(o, a, n, r, this.getOffsetY(r, i), i, !0));
        for (var s = 0; s < y["default"].MAX_POS; s++) {
          var l = this.getPlayerVoByPos(s);
          this.addBattlePlayer(l, s);
        }
        this.check();
      }
      return (
        (e.prototype.setGuide = function () {
          this.setTag(y["default"].TAG_IS_GUIDE_ATTACK_MENU, !0);
        }),
        (e.prototype.setTag = function (e, t) {
          t ? (this.tagValue |= e) : (this.tagValue &= ~e);
        }),
        (e.prototype.isTag = function (e) {
          return 0 != (this.tagValue & e);
        }),
        (e.prototype.setEndCounter = function () {
          this.endCounter = y["default"].END_COUNT;
        }),
        (e.prototype.isEndCounter = function () {
          return this.endCounter > 0;
        }),
        (e.prototype.getPlayerByPos = function (e) {
          return v["default"].getPlayer(this.getPlayerVoByPos(e));
        }),
        (e.prototype.getPlayerVoByPos = function (e) {
          return null != this.battle ? this.battle.getPlayerByPos(e) : void 0;
        }),
        (e.prototype.setColumnPlayer = function (e, t) {
          var i,
            o = v["default"].getPositionColumn(t),
            n = -1;
          switch (o) {
            case y["default"].POSITION_COLUMN_1:
              ((i = this.playersColumn1), (n = t / 2));
              break;
            case y["default"].POSITION_COLUMN_2:
              ((i = this.playersColumn2), (n = (t - 1) / 2));
              break;
            case y["default"].POSITION_COLUMN_3:
              ((i = this.playersColumn3),
                (n = (t - y["default"].LEFT_MAX_POS) / 2));
              break;
            case y["default"].POSITION_COLUMN_4:
              ((i = this.playersColumn4),
                (n = (t - y["default"].LEFT_MAX_POS - 1) / 2));
          }
          ((n = 0 | n), null != i && (0 > n || n >= i.length || (i[n] = e)));
        }),
        Object.defineProperty(e.prototype, "battle", {
          get: function () {
            return I["default"].ins.battle;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.check = function () {
          (this.checkBattleSee(),
            (1 == u["default"].TAG_IS_AUTO_FIGHT_FLAG || go.isAutoFight) &&
              this.setTag(y["default"].TAG_IS_AUTO_FIGHT, !0),
            this.battlePanel.updateAutoFightText());
          var e = this.isTag(y["default"].TAG_IS_BATTLE_SEE),
            t = w["default"].getProxy(b.ModName.Battle, b.ProxyType.Battle);
          ((go.isRePlayBattle = e && t.monsterGroupId > 0),
            I["default"].ins.view.initMenuList(e));
          var i = null;
          if (0 == this.isTag(y["default"].TAG_IS_BATTLE_SEE)) {
            var o = u["default"].myPlayer;
            i =
              o.formationSkill &&
              N["default"].getZhenFaImg(o.formationSkill.iconIndex);
          }
          ((I["default"].ins.view.img_formation.source = i),
            this.checkMyPetInBattle(),
            this.checkArenaFight());
        }),
        (e.prototype.checkArenaFight = function () {
          null != u["default"].arena &&
            1 != this.isTag(y["default"].TAG_IS_BATTLE_SEE) &&
            _["default"].addPromptMsg(
              T.GameText.STR_BATTLE_ANI_ENGINE_AREAN_BEGIN,
            );
        }),
        (e.prototype.checkBattleSee = function () {
          var e = this.battle.getType();
          if (e != y["default"].LOCAL && e != y["default"].PET_PK) {
            var t = u["default"].myPlayer;
            if (null != t) {
              for (var i = 0; i < y["default"].MAX_POS; i++) {
                var o = this.getPlayerVoByPos(i);
                if (
                  null != o &&
                  o.getType() == p.MODEL_TYPE.TYPE_PLAYER &&
                  o.isMyPlayer &&
                  o.getId() == t.getId()
                )
                  return;
              }
              (this.setTag(y["default"].TAG_IS_BATTLE_SEE, !0),
                _["default"].addPromptMsg(
                  E["default"].makeColorString(
                    T.GameText.STR_BATTLE_ANI_ENGINE_BATTLE_SEE,
                    r["default"].COLOR_GREEN,
                  ),
                ));
            }
          }
        }),
        (e.prototype.checkMyPetInBattle = function () {
          if (
            (this.setTag(y["default"].TAG_HAVE_MY_PET, !1),
            this.battle.getType() != y["default"].PET_PK)
          ) {
            var e = u["default"].myPlayer;
            if (null != e) {
              var t = e.position,
                i = this.getPlayerVoByPos(t);
              if (null != i && i.getId() == e.getId()) {
                var o = -1;
                o = v["default"].isLeftSide(t) ? t + 1 : t - 1;
                var n = this.getPlayerVoByPos(o);
                null != n &&
                  n.getType() == p.MODEL_TYPE.TYPE_PET &&
                  (this.setTag(y["default"].TAG_HAVE_MY_PET, !0),
                  null != this.battlePanel &&
                    (this.battlePanel.setOrderPet(n),
                    this.battlePanel.checkPetGWidgetShow()));
              }
            }
          }
        }),
        (e.prototype.getOffsetY = function (e, t) {
          if (0 == t || t >= y["default"].MAX_ROW_NUM) return 0;
          var i = 0,
            o = y["default"].POS_MIN_HEIGHT * t;
          if (e > o) {
            var n = (e - o) / t;
            (0 > n && (n = 0),
              (i = n),
              i >= y["default"].MAX_OFFSET_Y &&
                (i = y["default"].MAX_OFFSET_Y));
          }
          return i;
        }),
        (e.prototype.addBattlePlayer = function (e, t) {
          if (null != e) {
            var i = n["default"].alloc(m["default"]);
            ((e.position = t), this.setColumnPlayer(e, t));
            var o = this.getPosition(e.position, y["default"].COORD_X),
              a = this.getPosition(e.position, y["default"].COORD_Y);
            (i.setPosition(o, a),
              e == u["default"].myPlayer &&
                ((this.startHP = e.hp), (this.startMP = e.mp)),
              (e.hpDisplay = e.hp),
              (e.mpDisplay = e.mp),
              i.init(e),
              e instanceof c["default"] || e.checkHPMP(),
              v["default"].setPlayer(e, i));
          }
        }),
        (e.prototype.getPosition = function (e, t) {
          return 0 > e || e >= y["default"].MAX_POS
            ? 0
            : this.battlePosition[t][e];
        }),
        (e.prototype.setPosition = function (e, t, i) {
          0 > e ||
            e >= y["default"].MAX_POS ||
            (this.battlePosition[t] || (this.battlePosition[t] = []),
            (this.battlePosition[t][e] = i));
        }),
        (e.prototype.getPosData = function (e) {
          return 0 > e || e >= this.posData.length ? 0 : this.posData[e];
        }),
        (e.prototype.initBattlePosition = function (e, t, i, o, n, a, r) {
          var s = i / 2,
            l = o - n,
            u = l / a,
            _ = s - y["default"].SIDE_POS_MIN_WIDTH,
            d = _ / 10;
          (d < y["default"].BOREDER_MIN_DIS &&
            (d = y["default"].BOREDER_MIN_DIS),
            (_ -= d),
            0 >= _ && (_ = 0));
          var p = (3 * _) / 10;
          r
            ? ((this.posData[y["default"].POS_RIGHT_HEIGHT] = u),
              (this.posData[y["default"].POS_RIGHT_SPACE] = p))
            : ((this.posData[y["default"].POS_LEFT_HEIGHT] = u),
              (this.posData[y["default"].POS_LEFT_SPACE] = p));
          var c = e + d,
            h = t,
            f = 0;
          r && ((f = y["default"].LEFT_MAX_POS), (c = e + i - d));
          for (var T = f + 2 * a, E = 0, g = 0, S = f; T > S; S++) {
            var I = v["default"].getPositionColumn(S),
              m = Math.floor((S - f) / 2 + 1);
            ((E = c),
              (g = h + u * m),
              (I == y["default"].POSITION_COLUMN_2 ||
                I == y["default"].POSITION_COLUMN_3) &&
                (g += n),
              r
                ? ((E -= y["default"].POS_MIN_WIDTH / 2),
                  I == y["default"].POSITION_COLUMN_3 &&
                    (E -= p + y["default"].POS_MIN_WIDTH))
                : ((E += y["default"].POS_MIN_WIDTH / 2),
                  I == y["default"].POSITION_COLUMN_2 &&
                    (E += p + y["default"].POS_MIN_WIDTH)),
              a >= y["default"].MAX_ROW_NUM &&
                0 == (1 & m) &&
                (r ? (E -= (2 * p) / 3) : (E += (2 * p) / 3)),
              this.setPosition(S, y["default"].COORD_X, E),
              this.setPosition(S, y["default"].COORD_Y, g));
          }
        }),
        (e.prototype.addPlayerPlanControl = function (e, t) {
          if (null != t) {
            var i = this.getPlayerByPos(e);
            null != i && i.battlePlanControlList.push(t);
          }
        }),
        (e.prototype.addAnimationControl = function (e) {
          null != e && this.animCtrls.push(e);
        }),
        (e.prototype.insertAnimationControl = function (e, t) {
          null != e && A.ArrayUtil.insertAt(this.animCtrls, t, e);
        }),
        (e.prototype.onRelease = function () {
          (this.frontPlayerVector.removeAllElements(),
            this.removeAnimCtrls(),
            this.planSequenceList &&
              (this.planSequenceList.removeAllElements(),
              (this.planSequenceList = null)),
            v["default"].clearPlayer(),
            this.battlePanel &&
              (this.battlePanel.onRelease(), (this.battlePanel = null)),
            (this.isAutoEscape = !1),
            (this.endCounter = -1));
        }),
        (e.prototype.sendLocalBattleReward = function () {
          var e = this.battle;
          if (e.getType() == y["default"].LOCAL) {
            this.updateMercenaryHpMP();
            var t = new o.Message(l["default"].CG_FIGHT_RUN_LOCALBATTLE);
            (t.putInt(this.startHP),
              t.putInt(this.startMP),
              t.putInt(u["default"].myPlayer.hp),
              t.putInt(u["default"].myPlayer.mp),
              t.putShort(e.seed));
            var i = e.getMonsterGroup(),
              n = -1;
            (null != i && (n = i.groupId), t.putShort(n));
            var a = this.isTag(y["default"].TAG_HAVE_MY_PET);
            t.putBoolean(a);
            var r = w["default"].getProxy(b.ModName.Buddy, b.ProxyType.Buddy),
              _ = r.buddyNum > 0 ? r.buddyNum : 0;
            t.putByte(_);
            var d = this.battlePanel.planVector,
              p = d.length;
            ((a || _ > 0) && (p /= (a ? 2 : 1) + _), t.putByte(p));
            for (var c = 0; c < d.length;) {
              var h = d[c++];
              if ((t.putBytes(h), 1 == a)) {
                var f = null;
                (c < d.length && (f = d[c++]), t.putBytes(f));
              }
              if (_ > 0)
                for (var T = 0; _ > T; T++) {
                  var E = null;
                  (c < d.length && (E = d[c++]), t.putBytes(E));
                }
            }
            if (r.buddyNum > 0) {
              for (var g = r.getFightBuddy(), c = 0; c < g.length; c++) {
                var v = g[c];
                v.resumeHPMP();
              }
              r.buddyNum = 0;
            }
            s["default"].sendRequest(t);
          }
        }),
        (e.prototype.sendRemoteBattleUpdate = function () {
          var e = this.battlePanel.isRomoteReady();
          if (!(a["default"].timer.serverTime < this.nextPollTime && 0 == e)) {
            var t = this.battle.round;
            if (1 == e && !go.isRePlayBattle) {
              if (this.battle.getType() == y["default"].CROSS_SERVER) {
                for (
                  var i = this.battlePanel.getPlanData(0),
                    o = this.battlePanel.getPlanData(1),
                    n = this.battlePanel.planVector.length,
                    r = o ? 2 : 1,
                    l = [],
                    u = r;
                  n > u;
                  u++
                ) {
                  var _ = this.battlePanel.getPlanData(u);
                  l.push(_);
                }
                var d = s["default"].createBattlePlan(t, i, o, l);
                s["default"].sendRequest(d);
              } else {
                var d = s["default"].createPetBattlePlan(
                  t,
                  this.battlePanel.planVector,
                );
                s["default"].sendRequest(d);
              }
              (this.battlePanel.cleanPlanVector(),
                this.battlePanel.battle.clearAllPlan());
            }
            if (I["default"].ins.isReqBattleUpdate)
              if (go.isRePlayBattle) {
                var p = w["default"].getProxy(
                  b.ModName.Battle,
                  b.ProxyType.Battle,
                );
                p.monsterGroupId > 0 && p.doBattleRePlayUpdate(t + 1);
              } else {
                var d = s["default"].createBattleUpdate(t);
                s["default"].sendRequest(d);
              }
            (this.setTag(y["default"].TAG_REMOTE_SEND, !0),
              this.setTag(y["default"].TAG_REMOTE_SEND_WAITING, !0),
              (this.nextPollTime =
                a["default"].timer.serverTime + y["default"].POLL_INTERVAL));
          }
        }),
        (e.prototype.doBattleSeeExit = function () {
          if (1 != this.battle.isBattleFinish()) {
            var e = s["default"].createFightSeeQuitMsg();
            s["default"].sendRequest(e);
          }
        }),
        (e.prototype.doExit = function () {
          (this.setEndCounter(), this.exit());
        }),
        (e.prototype.updateMercenaryHpMP = function () {
          for (var e = 0; e < y["default"].MAX_POS; e++) {
            var t = this.getPlayerVoByPos(e);
            null != t &&
              t instanceof d["default"] &&
              t.refreshWorldMercenaryData();
          }
        }),
        (e.prototype.closePlayerAnimation = function () {
          this.frontPlayerVector.removeAllElements();
          for (
            var e = this.battle.playerList, t = 0;
            t < y["default"].MAX_POS;
            t++
          ) {
            var i = e[t];
            if (null != i) {
              var o = v["default"].getPlayer(i);
              ((i.hpDisplay = i.hp),
                (i.mpDisplay = i.mp),
                o.clearEftList(),
                n["default"].releaseList(o.battlePlanControlList));
              var a = o.battleSprite;
              if (null != a) {
                (a.setFront(!1),
                  a.setCurAnimation(f.SprConst.ANIMATION_BATTLE_STAND, -1));
                var r = this.getPosition(i.position, y["default"].COORD_X),
                  s = this.getPosition(i.position, y["default"].COORD_Y);
                (a.setSpritePosition(r, s),
                  i.isBattleStatus(h["default"].BSTATUS_ESCAPE) || i.isDead()
                    ? a.setSpriteVisible(!1)
                    : a.setSpriteVisible(!0),
                  i.isDead() &&
                    o.playDieSprite(
                      o.dieSprite
                        ? f.SprConst.ANIMATION_BATTLE_BONES
                        : f.SprConst.ANIMATION_BATTLE_DIE,
                    ));
              }
            }
          }
          (this.removeAnimCtrls(),
            this.planSequenceList && this.planSequenceList.removeAllElements(),
            this.setTag(y["default"].TAG_ALL_END, !0),
            this.battlePanel.updateBattlePlayerInfo());
        }),
        (e.prototype.removeAnimCtrls = function () {
          for (var e = 0, t = this.animCtrls; e < t.length; e++) {
            var i = t[e];
            i instanceof P["default"] || n["default"].release(i);
          }
          this.animCtrls.length = 0;
        }),
        (e.prototype.exit = function () {
          (u["default"].arena &&
            (this.isTag(y["default"].TAG_IS_BATTLE_SEE)
              ? u["default"].arena.setStatus(
                  !0,
                  C["default"].STAGE_BATTLE_VIEW_EXIT,
                )
              : 0 == this.isWin()
                ? u["default"].arena.setStatus(
                    !0,
                    C["default"].STAGE_BATTLE_FAIL,
                  )
                : u["default"].arena.setStatus(
                    !0,
                    C["default"].STAGE_BATTLE_WIN,
                  )),
            I["default"].ins.exitBattle());
        }),
        (e.prototype.getNextBattleID = function () {
          var e = this.battle;
          return null == e ? -1 : e.nextBattleGroupID;
        }),
        (e.prototype.logic = function () {
          if (
            (this.doBattleAnimations(),
            0 == this.isTag(y["default"].TAG_ALL_END))
          )
            return void this.battlePanel.logicAnimePlaying();
          if (1 != this.isTag(y["default"].TAG_WAITING_NEXT_BATTLE)) {
            if (this.endCounter > 0)
              return void (this.endCounter > 1
                ? this.endCounter--
                : this.isShowNextBattle()
                  ? (this.setTag(y["default"].TAG_WAITING_NEXT_BATTLE, !0),
                    (this.waitNextBattleTime =
                      a["default"].timer.serverTime +
                      y["default"].INTERVAL_NEXT_BATTLE_TIME))
                  : 1 == this.isTag(y["default"].TAG_IS_BATTLE_SEE) &&
                    this.exit());
            if (1 == this.battle.isRemoteWaiting())
              this.isTag(y["default"].TAG_IS_BATTLE_SEE)
                ? this.battlePanel.logicBattleSee()
                : this.battlePanel.logicRemoteWaiting();
            else {
              if (this.battle.isBattleFinish())
                return this.battle.getType() != y["default"].LOCAL &&
                  0 == this.isTag(y["default"].TAG_REMOTE_SEND)
                  ? void this.battle.setRemoteWaiting(!0)
                  : (this.setEndCounter(), void this.sendLocalBattleReward());
              this.isTag(y["default"].TAG_IS_BATTLE_SEE)
                ? this.battlePanel.logicBattleSee()
                : this.battlePanel.logic();
            }
            switch (this.battle.getType()) {
              case y["default"].LOCAL:
                break;
              default:
                0 == this.isTag(y["default"].TAG_REMOTE_SEND_WAITING) &&
                  (u["default"].gStage == u["default"].STAGE_ARENA_NEW_BATTLE ||
                    this.sendRemoteBattleUpdate());
            }
          } else {
            if (a["default"].timer.serverTime >= this.waitNextBattleTime)
              return void this.exit();
            if (
              null != u["default"].myPlayer &&
              u["default"].myPlayer.isMember()
            );
            else {
              var e = s["default"].createEnterRemoteBattle(
                this.getNextBattleID(),
              );
              (s["default"].sendRequest(e),
                (this.waitNextBattleTime = a["default"].timer.serverTime));
            }
          }
        }),
        (e.prototype.isShowNextBattle = function () {
          return (
            this.getNextBattleID() > 0 &&
            this.isWin() &&
            0 == this.isTag(y["default"].TAG_IS_BATTLE_SEE)
          );
        }),
        (e.prototype.setPlanSequenceList = function (e) {
          this.planSequenceList = e;
        }),
        (e.prototype.makeBattleAni = function () {
          1 == this.isTag(y["default"].TAG_IS_BATTLE_SEE) &&
            0 == this.isTag(y["default"].TAG_ALL_END) &&
            this.closePlayerAnimation();
          var e = this.battlePanel.getSequenceList();
          (null != e && e.size() > 0 && this.setPlanSequenceList(e),
            this.battle.cleanAniControlList());
        }),
        (e.prototype.makeBattleAnim = function () {
          if (
            null != this.planSequenceList &&
            !(this.planSequenceList.size() <= 0) &&
            this.isTag(y["default"].TAG_PLAYER_PLAN_END)
          ) {
            var e = this.planSequenceList.elementAt(0);
            if ((this.planSequenceList.removeElementAt(0), e.size() <= 0))
              return void R.Tool.debug(
                "BattleDefine.makeBattleAnim(): animeList.size = 0, why ???!!!",
              );
            var t;
            this.targetLocation.length = 0;
            for (
              var i = 0, o = new Array(y["default"].MAX_POS).fill(0), n = 0;
              n < e.size();
              n++
            ) {
              var a = e.elementAt(n);
              if (null != a) {
                for (
                  var r = a.byte0, s = 0;
                  a.subControls && s < a.subControls.length;
                  s++
                ) {
                  var l = a.subControls[s];
                  r != l.byte0 &&
                    -1 == this.targetLocation.indexOf(l.byte0) &&
                    this.targetLocation.push(l.byte0);
                }
                switch (a.type) {
                  case y["default"].TYPE_BATTLE_SKILL:
                    ((t = v["default"].createBattleSkill(this, a)),
                      this.addPlayerPlanControl(r, t),
                      t.setDelay(i),
                      (i += y["default"].DEFAULT_DELAY_TIME));
                    break;
                  case y["default"].TYPE_BATTLE_ESCAPE:
                    ((t = v["default"].createBattlePlayerEscape(this, a)),
                      this.addPlayerPlanControl(r, t));
                    break;
                  case y["default"].TYPE_BATTLE_TARGET_EFFECT:
                    var u = new S["default"]();
                    v["default"].getAniEffectByControl(this, a, o, u);
                    for (var s = 0; s < u.size(); s++) {
                      var _ = u.elementAt(s);
                      this.addAnimationControl(_);
                    }
                }
              }
            }
            this.setTag(y["default"].TAG_ALL_END, !1);
          }
        }),
        (e.prototype.doBattleAnimations = function () {
          (this.setTag(y["default"].TAG_ALL_END, !0),
            this.setTag(y["default"].TAG_PLAYER_PLAN_END, !0),
            this.frontPlayerVector.removeAllElements());
          for (
            var e = this.battle.playerList, t = 0;
            t < y["default"].MAX_POS;
            t++
          ) {
            var i = e[t];
            if (null != i) {
              var o = v["default"].getPlayer(i),
                a = o.battleSprite;
              if (null != a) {
                (a.action(),
                  null != o.dialogAIFrame && o.dialogAIFrame.advanceTime());
                var r = o.battlePlanControlList;
                if (r.length > 0) {
                  var s = r[0];
                  null == s
                    ? r.shift()
                    : (this.setTag(y["default"].TAG_ALL_END, !1),
                      this.setTag(y["default"].TAG_PLAYER_PLAN_END, !1),
                      s.action(),
                      s.isDone() &&
                        (r.shift(),
                        s instanceof P["default"] || n["default"].release(s)));
                }
                a.isFront() && this.frontPlayerVector.addElement(i);
                for (
                  var l = o.battleEffectSpriteList.length, u = l - 1;
                  u >= 0;
                  u--
                ) {
                  var _ = o.battleEffectSpriteList[u];
                  null != _ &&
                    (this.setTag(y["default"].TAG_ALL_END, !1),
                    _.action(),
                    _.isMotionAlive() ||
                      (A.ArrayUtil.removeAt(o.battleEffectSpriteList, u),
                      _ == o.dieSprite
                        ? (_.setMotionAlive(!0),
                          _.setSpritePosition(a.spriteX, a.spriteY))
                        : n["default"].release(_)));
                }
              }
            }
          }
          for (var d = this.animCtrls.length - 1; d >= 0; d--) {
            var s = this.animCtrls[d];
            null != s &&
              (s.type == y["default"].BATTLE_CONTROL_PLAYER_ANIMATION &&
                this.setTag(y["default"].TAG_PLAYER_PLAN_END, !1),
              this.setTag(y["default"].TAG_ALL_END, !1),
              s.action(),
              s.isDone() &&
                (A.ArrayUtil.removeAt(this.animCtrls, d),
                s instanceof P["default"] || n["default"].release(s)));
          }
          this.makeBattleAnim();
        }),
        (e.prototype.paint = function (e) {
          (I["default"].ins.view.updateTime(null),
            this.drawBorderString(e, null));
          var t = this.battle;
          this.drawBattlePlayer(e);
          var i = this.battlePanel;
          null != i && i.paint(e);
          for (var o = 0, n = this.animCtrls; o < n.length; o++) {
            var s = n[o];
            null != s && s.draw(e);
          }
          if (
            (this.drawRound(e),
            this.drawTime(e),
            1 == this.isTag(y["default"].TAG_IS_BATTLE_SEE))
          )
            0 == t.isBattleFinish() &&
              this.drawBorderString(e, T.GameText.STR_BATTLE_SEE);
          else if (t.isRemoteWaiting())
            this.drawBorderString(e, T.GameText.STR_WAITING);
          else if (1 == this.isTag(y["default"].TAG_WAITING_NEXT_BATTLE)) {
            var l = T.GameText.STR_WAIT_NEXT_BATTLE,
              _ = Math.max(
                0,
                this.waitNextBattleTime - a["default"].timer.serverTime,
              ),
              d = (_ / r["default"].MILLIS_IN_SECOND) | 0;
            return ((l += "(" + d + ")"), void this.drawBorderString(e, l));
          }
          if (this.endCounter >= 0) {
            var p = I["default"].ins.winData;
            p.missionTips &&
              (L["default"].showMissionTips(p.missionTips),
              (p.missionTips = null));
            var c = this.battlePanel.allOrderPlayer[0] || u["default"].myPlayer;
            c &&
              this.drawBattleWinOrLostText(
                e,
                t.result,
                v["default"].getPositionSide(c.position),
                !1,
              );
          }
        }),
        (e.prototype.drawBorderString = function (e, t) {
          I["default"].ins.view.updateMsg(t);
        }),
        (e.prototype.drawTime = function (e) {
          if (
            this.isTag(y["default"].TAG_PLAYER_PLAN_END) &&
            this.isTag(y["default"].TAG_ALL_END) &&
            null != this.battle &&
            u["default"].gStage != u["default"].STAGE_ARENA_NEW_BATTLE &&
            !M.GuideModel.ins.isForbidBattle
          ) {
            var t = this.battle.roundEndTime - a["default"].timer.serverTime;
            I["default"].ins.view.updateTime((t / 1e3) | 0);
          }
        }),
        (e.prototype.drawBattlePlayer = function (e) {
          var t = this.frontPlayerVector;
          (this.drawColModel(e, this.playersColumn1),
            this.drawColModel(e, this.playersColumn2),
            this.drawColModel(e, this.playersColumn3),
            this.drawColModel(e, this.playersColumn4));
          for (var i = 0; i < t.size(); i++) {
            var o = t.elementAt(i);
            this.drawPlayer(e, o);
          }
        }),
        (e.prototype.drawColModel = function (e, t) {
          for (var i = 0; i < t.length; i++) {
            var o = t[i],
              n = v["default"].getPlayer(o);
            null != o &&
              null != n.battleSprite &&
              (n.battleSprite.isFront() || this.drawPlayer(e, o));
          }
        }),
        (e.prototype.drawPlayer = function (e, t) {
          var i = v["default"].getPlayer(t),
            o = i.battleSprite;
          if (null != o) {
            if (
              (o.parent || e.addChild(o),
              !o.isSpriteVisible() && (t.isDead() || t.hpDisplay <= 0)
                ? i.dieSprite &&
                  (i.dieSprite.action(),
                  i.dieSprite.parent || e.addChild(i.dieSprite))
                : i.dieSprite && i.dieSprite.setSpriteVisible(!1),
              null != i.dialogAIFrame)
            ) {
              var n = 0,
                a = o.spriteX + n - (i.dialogAIFrame.width >> 1),
                r =
                  o.spriteY -
                  2 * f.SprConst.SPRITE_HEIGHT -
                  i.dialogAIFrame.height -
                  30;
              ((i.dialogAIFrame.x = a), (i.dialogAIFrame.y = r));
              var s = i.dialogAIFrame.dsp;
              s.parent || e.addChild(s);
            }
            1 == this.battle.isWaitStatus(t.position) && o.isSpriteVisible()
              ? (i.okImg ||
                  ((i.okImg = O["default"].alloc(y.BattleImageType.ok)),
                  e.addChild(i.okImg)),
                (i.okImg.visible = !0),
                (i.okImg.x = o.spriteX - (i.okImg.width >> 1)),
                (i.okImg.y = o.spriteY - f.SprConst.SPRITE_HEIGHT))
              : i.okImg && (i.okImg.visible = !1);
          }
        }),
        (e.prototype.drawRound = function (e) {
          I["default"].ins.view.updateRound(this.battle.round);
        }),
        (e.prototype.drawBattleWinOrLostText = function (e, t, i, o) {
          if (I["default"].ins.isGotResult) {
            I["default"].ins.isGotResult = !1;
            var n;
            if (
              (i == y["default"].LEFT_SIDE
                ? t == y["default"].RESULT_LEFT_WIN && (n = !0)
                : t == y["default"].RESULT_RIGHT_WIN && (n = !0),
              1 == this.isTag(y["default"].TAG_IS_BATTLE_SEE))
            ) {
              var a = null;
              (t == y["default"].RESULT_LEFT_WIN
                ? (a = T.GameText.STR_BATTLE_LEFT_WIN)
                : t == y["default"].RESULT_RIGHT_WIN &&
                  (a = T.GameText.STR_BATTLE_RIGHT_WIN),
                null == a || go.isRePlayBattle || this.drawBorderString(e, a));
            } else
              this.isShowNextBattle() || I["default"].ins.showResult(1 == n);
            t == y["default"].RESULT_ROUND_OVER
              ? this.drawBorderString(e, "超过最大回合数")
              : t == y["default"].RESULT_WAR_TIME_OUT
                ? this.drawBorderString(e, "国战战斗时间到")
                : t == y["default"].RESULT_ARENA_OUT &&
                  this.drawBorderString(e, "竞技战斗时间到");
          }
        }),
        (e.prototype.isWin = function () {
          var e = !1,
            t = this.battle,
            i = this.battlePanel.allOrderPlayer[0] || u["default"].myPlayer;
          return t && i
            ? (v["default"].getPositionSide(i.position) ==
              y["default"].LEFT_SIDE
                ? t.result == y["default"].RESULT_LEFT_WIN && (e = !0)
                : t.result == y["default"].RESULT_RIGHT_WIN && (e = !0),
              e)
            : !1;
        }),
        e
      );
    })();
  t["default"] = x;
});
