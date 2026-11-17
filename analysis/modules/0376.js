(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(5),
    n = i(32),
    a = i(56),
    r = i(57),
    s = i(55),
    l = i(4),
    u = i(10),
    _ = i(30),
    d = i(8),
    p = i(1),
    c = i(61),
    h = i(75),
    f = i(377),
    T = i(24),
    E = i(54),
    y = i(3),
    g = i(0),
    v = i(17),
    S = i(44),
    I = i(2),
    m = i(42),
    A = i(31),
    C = i(137),
    P = (function () {
      function e(e) {
        ((this.orderIndex = {}),
          (this.planVector = []),
          (this.hLightSpr = {}),
          (this.allOrderPlayer = []),
          (this.selectSkill = {}),
          (this.selectItem = {}),
          (this.isEnable = !0),
          (this.cusorSprite = s.SpriteTool.createBattleEffSprite(
            s.SprConst.SPRITE_CURSOR,
          )),
          (this.cusorSprite.scale = 1.4),
          this.setCursorEnable(!0),
          (this.battleAni = e),
          (this.allOrderPlayer = []));
        var t = this.battle.getType(),
          i = o["default"].myPlayer;
        if (t == c["default"].PET_PK)
          for (var n = 0; n < c["default"].MAX_POS; n++) {
            var a = this.battle.getPlayerByPos(n);
            a &&
              a instanceof m["default"] &&
              a.ownerid == i.getId() &&
              this.addOrderPlayer(a);
          }
        else if (t == c["default"].FINAL_BOSS) {
          this.addOrderPlayer(i);
          for (var n = 0; n < c["default"].MAX_POS; n++) {
            var a = this.battle.getPlayerByPos(n);
            a &&
              a instanceof m["default"] &&
              a.ownerid == i.getId() &&
              this.addOrderPlayer(a);
          }
        } else
          for (var n = 0; n < c["default"].MAX_POS; n++) {
            var a = this.battle.getPlayerByPos(n);
            if (a) {
              var r =
                  a.type == A.MODEL_TYPE.TYPE_LEGION && a.ownerid == i.getId(),
                l =
                  a.type == A.MODEL_TYPE.TYPE_PLAYER && a.getId() == i.getId();
              if (r || l) {
                this.addOrderPlayer(a);
                var u = a.position,
                  _ = -1;
                _ = h["default"].isLeftSide(u) ? u + 1 : u - 1;
                var d = this.battle.getPlayerByPos(_);
                null == d ||
                  d.getType() != A.MODEL_TYPE.TYPE_PET ||
                  this.addOrderPlayer(d);
                for (
                  var p = 0, f = u - 2, T = u + 2, E = 4, y = 0;
                  E > y;
                  y++
                ) {
                  var g = void 0;
                  (0 == (1 & p) ? ((g = f), (f -= 2)) : ((g = T), (T += 2)),
                    p++);
                  var v = this.battle.getPlayerByPos(g);
                  v && v instanceof C["default"] && this.addOrderPlayer(v);
                }
              }
            }
          }
      }
      return (
        Object.defineProperty(e.prototype, "battle", {
          get: function () {
            return E["default"].ins.battle;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.addOrderPlayer = function (e) {
          this.allOrderPlayer.includes(e) || this.allOrderPlayer.push(e);
        }),
        (e.prototype.addPlan = function (e, t) {
          if (null == t) {
            var i = this.battle.getPlayerByPos(e);
            return void (
              null != i &&
              ((t = new egret.ByteArray()), t.writeByte(0), (t.position = 0))
            );
          }
          (this.battle.setPlan(e, t),
            this.battle.getType() == c["default"].LOCAL ||
            this.battle.getType() == c["default"].CROSS_SERVER
              ? this.planVector.push(t)
              : (this.planVector[e] = t));
        }),
        (e.prototype.cleanPlanVector = function () {
          this.planVector.length = 0;
        }),
        (e.prototype.isRomoteReady = function () {
          if (null == this.planVector) return !1;
          if (null == this.battleAni || null == this.battle) return !1;
          if (null == this.allOrderPlayer || !this.allOrderPlayer.length)
            return !1;
          for (var e = 0, t = 0, i = this.planVector; t < i.length; t++) {
            var o = i[t];
            o && e++;
          }
          return e && e >= this.allOrderPlayer.length;
        }),
        (e.prototype.getPlanData = function (e) {
          return d.Tool.isArrayIndexOutOfBounds(e, this.planVector)
            ? null
            : this.planVector[e];
        }),
        (e.prototype.setOrderIndex = function (e, t) {
          this.orderIndex[t] = e;
        }),
        (e.prototype.getOrderIndex = function (e) {
          return this.orderIndex[e];
        }),
        (e.prototype.getnowOrderIndex = function () {
          var e = c["default"].ORDER_NONE,
            t = this.getOrderPlayer();
          return (t && (e = t.position), e);
        }),
        (e.prototype.setOrderInit = function (e) {
          this._isOrderInit = e;
        }),
        (e.prototype.isOrderInit = function () {
          return this._isOrderInit;
        }),
        (e.prototype.setPetRound = function (e) {
          this.battleAni.setTag(c["default"].TAG_PET_ORDER, e);
        }),
        (e.prototype.isPetRound = function () {
          return this.battleAni.isTag(c["default"].TAG_PET_ORDER);
        }),
        (e.prototype.setBuddyRound = function (e) {
          this.battleAni.setTag(c["default"].TAG_BUDDY_ORDER, e);
        }),
        (e.prototype.isBuddyRound = function () {
          return this.battleAni.isTag(c["default"].TAG_BUDDY_ORDER);
        }),
        (e.prototype.isReady = function () {
          if (this.battle.getType() == c["default"].LOCAL) {
            if (null == this.battleAni || null == this.battle) return !0;
            for (var e = 0, t = this.allOrderPlayer; e < t.length; e++) {
              var i = t[e];
              if (null == this.battle.getPlanData(i.position)) return !1;
            }
            return !0;
          }
          return this.isRomoteReady();
        }),
        (e.prototype.isPetAuto = function () {
          return this.battle.getType() == c["default"].PET_PK
            ? !1
            : null == o["default"].myPlayer
              ? !1
              : o["default"].myPlayer.isSettingBit(
                  l["default"].SETTING_PET_PLAN_OFF,
                );
        }),
        (e.prototype.setFoucsGWidgetToOrder = function (e) {
          switch (e) {
            case c["default"].ORDER_ATTACK:
            case c["default"].ORDER_SKILL:
            case c["default"].ORDER_ITEM:
            case c["default"].ORDER_AUTO:
              break;
            default:
              ((e = c["default"].ORDER_ATTACK),
                this.setOrderIndex(
                  c["default"].ORDER_ATTACK,
                  this.getnowOrderIndex(),
                ));
          }
          var t = E["default"].ins.view;
          t.setSelectIdxByOrder(e);
        }),
        (e.prototype.initAttackOrder = function () {
          this.setFoucsGWidgetToOrder(c["default"].ORDER_ATTACK);
          var e = this.getOrderPlayer();
          null != e &&
            (this.setCursor(
              e.position < c["default"].LEFT_MAX_POS
                ? c["default"].LEFT_MAX_POS
                : 0,
            ),
            this.changeOrder(c["default"].ORDER_ATTACK));
        }),
        (e.prototype.updatePlayerHpMpInfo = function () {
          for (
            var e = this.battle.getType(), t = 0, i = this.allOrderPlayer;
            t < i.length;
            t++
          ) {
            var n = i[t];
            ((n.hpDisplay = n.hp), (n.mpDisplay = n.mp));
          }
          if (e == c["default"].FINAL_BOSS) {
            var a = o["default"].myPlayer.getPet();
            a && ((a.hpDisplay = a.hp), (a.mpDisplay = a.mp));
          }
          e != c["default"].PET_PK && this.updateBattlePlayerInfo();
        }),
        (e.prototype.initRoundStartOrder = function () {
          if (!this.isOrderInit()) {
            if (
              (this.setOrderInit(!0),
              this.checkSkipAnimeGWidgetShow(!1),
              this.battleAni.isAutoEscape)
            ) {
              for (var e = 0, t = this.allOrderPlayer; e < t.length; e++) {
                var i = t[e];
                i &&
                  this.addPlan(
                    i.position,
                    this.getBattlePlanData(
                      c["default"].PLAN_ESCAPE,
                      i.position,
                    ),
                  );
              }
              return;
            }
            if (
              (this.battle.clearAllPlan(),
              1 == this.battleAni.isTag(c["default"].TAG_IS_AUTO_FIGHT))
            ) {
              if ((this.updateAutoFightText(), S.GuideModel.ins.isForbidBattle))
                return;
              return void this.doAutoFight();
            }
            if (
              (this.updatePlayerHpMpInfo(),
              null != this.battleAni &&
                this.battleAni.isTag(c["default"].TAG_IS_BATTLE_SEE))
            )
              return void (
                go.isRePlayBattle &&
                (E["default"].ins.view.grp_orderHead.visible = !1)
              );
            for (var o = 0, n = this.allOrderPlayer; o < n.length; o++) {
              var i = n[o];
              if (i) {
                if (1 == this.battle.isValidBattlePlayer(i)) {
                  this.orderPlayer = i;
                  break;
                }
                null == this.battle.getPlanData(i.position) &&
                  this.addPlan(
                    i.position,
                    this.getBattlePlanData(c["default"].PLAN_NONE, i.position),
                  );
              }
            }
            var a = this.orderPlayer,
              r =
                this.battle.getType() != c["default"].PET_PK &&
                a.type == A.MODEL_TYPE.TYPE_PET;
            r && this.setOrderPet(a);
            var s = a.type == A.MODEL_TYPE.TYPE_BUDDY;
            if (
              (s && this.setOrderBuddy(a),
              this.setPetRound(r),
              this.setBuddyRound(s),
              E["default"].ins.view.updateOrderHead(this.getOrderPlayer()),
              E["default"].ins.view.updateList(
                this.isPetRound() || this.isBuddyRound(),
              ),
              this.getOrderIndex(a.position) == c["default"].ORDER_NONE)
            )
              (this.initAttackOrder(),
                y["default"].sendNt(I.BattleEvent.BATTLE_FIRST));
            else {
              var l = this.getOrderIndex(a.position);
              if (l == c["default"].ORDER_ITEM)
                return void this.initAttackOrder();
              (this.setFoucsGWidgetToOrder(l),
                (this.targetSelectPanel = this.getTargetSelectPanel()),
                0 == this.isCursorEnable() && this.initAttackOrder());
            }
          }
        }),
        (e.prototype.setOrderPet = function (e) {
          this.orderPet = e;
        }),
        (e.prototype.getOrderPlayer = function () {
          return this.isPetRound()
            ? this.orderPet
            : this.isBuddyRound()
              ? this.orderBuddy
              : this.orderPlayer;
        }),
        (e.prototype.setOrderBuddy = function (e) {
          this.orderBuddy = e;
        }),
        (e.prototype.getMyPlayer = function () {
          return o["default"].myPlayer;
        }),
        (e.prototype.setSelectSkill = function (e, t) {
          this.selectSkill[t] = e;
        }),
        (e.prototype.getSelectSkill = function (e) {
          return this.selectSkill[e];
        }),
        (e.prototype.setSelectItem = function (e, t) {
          this.selectItem[t] = e;
        }),
        (e.prototype.getSelectItem = function (e) {
          return this.selectItem[e];
        }),
        (e.prototype.setCursor = function (e) {
          this.cursor = e;
        }),
        (e.prototype.getCursor = function () {
          return this.cursor;
        }),
        (e.prototype.isCursorEnable = function () {
          return this.isEnable;
        }),
        (e.prototype.setCursorEnable = function (e) {
          if (((this.isEnable = e), null != this.cusorSprite)) {
            var t = e
              ? s.SprConst.ANIMATION_BATTLE_CURSOR
              : s.SprConst.ANIMATION_BATTLE_CURSOR_CANNOT;
            this.cusorSprite.setCurAnimation(t, -1);
          }
        }),
        (e.prototype.checkSkipAnimeGWidgetShow = function (e) {
          (this.battleAni.isTag(c["default"].TAG_IS_BATTLE_SEE) &&
            (e = go.isRePlayBattle ? e : !1),
            S.GuideModel.ins.isForbidBattle && (e = !0),
            (E["default"].ins.view.btnSkip.visible = e));
        }),
        (e.prototype.updateAutoFightText = function () {
          this.battleAni.isTag(c["default"].TAG_IS_BATTLE_SEE) ||
            E["default"].ins.view.updateAuto(
              this.battleAni.isTag(c["default"].TAG_IS_AUTO_FIGHT),
            );
        }),
        (e.prototype.checkPetGWidgetShow = function () {
          null != this.battleAni &&
            E["default"].ins.view.updatePetAuto(this.isPetAuto());
        }),
        (e.prototype.hideAllPlayerMsg = function () {
          for (var e = 0, t = this.battle.playerList.length; t > e; ++e) {
            var i = this.battleAni.getPlayerByPos(e);
            i && i.hideMsg();
          }
        }),
        (e.prototype.paint = function (e) {
          (E["default"].ins.view.updateSkillTxt(null),
            this.hideAllPlayerMsg(),
            go.isRePlayBattle
              ? (this.drawRePlayBattleHLights(e), this.drawInfoMsg(e, null))
              : (this.drawHLights(e), this.drawCursor(e)));
        }),
        (e.prototype.drawRePlayBattleHLights = function (e) {
          var t = this.battleAni;
          for (var i in this.hLightSpr) {
            var o = this.hLightSpr[i];
            o && (o.visible = !1);
          }
          if (!t.isTag(c["default"].TAG_PLAYER_PLAN_END))
            for (var n = t.targetLocation, a = 0; a < n.length; a++) {
              var i = n[a],
                r = this.battleAni.getPosition(i, c["default"].COORD_X),
                l = this.battleAni.getPosition(i, c["default"].COORD_Y),
                o = this.hLightSpr[i];
              o
                ? ((o.visible = !0), o.action())
                : ((o = this.hLightSpr[i] =
                    s.SpriteTool.createBattleEffSprite(
                      s.SprConst.SPRITE_HLIGHT,
                    )),
                  o.draw(e, r, l - 6, 0),
                  o.action());
            }
        }),
        (e.prototype.drawHLights = function (e) {
          for (var t in this.hLightSpr) {
            var i = this.hLightSpr[t];
            i && (i.visible = !1);
          }
          if (null != this.targetSelectPanel) {
            var o = this.targetSelectPanel.getTargetPos();
            if (null != o)
              for (var n = 0; n < o.length; n++) {
                var t = o[n],
                  a = this.battleAni.getPosition(t, c["default"].COORD_X),
                  r = this.battleAni.getPosition(t, c["default"].COORD_Y),
                  i = this.hLightSpr[t];
                i
                  ? ((i.visible = !0), i.action())
                  : ((i = this.hLightSpr[t] =
                      s.SpriteTool.createBattleEffSprite(
                        s.SprConst.SPRITE_HLIGHT,
                      )),
                    i.draw(e, a, r - 6, 0),
                    i.action());
              }
          }
        }),
        (e.prototype.updateBattlePlayerInfo = function () {
          this.battleAni.isTag(c["default"].TAG_IS_BATTLE_SEE) ||
            (this.battle.getType() != c["default"].PET_PK &&
              E["default"].ins.view.updatePlayerInfo());
        }),
        (e.prototype.drawCursor = function (e) {
          if (null != this.targetSelectPanel) {
            var t = this.getCursor(),
              i = this.getOrderPlayer();
            if (i) {
              var o = this.battleAni.getPosition(t, c["default"].COORD_X),
                n = this.battleAni.getPosition(t, c["default"].COORD_Y);
              if (
                (this.cusorSprite.draw(e, o, n - c["default"].CURSOR_OFFSET_Y),
                this.getOrderIndex(i.position) == c["default"].ORDER_INFO)
              )
                return void this.drawInfoMsg(e, t);
              this.drawCurMsg(e, t, o, n, !0, !1);
              var a = "";
              switch (this.getOrderIndex(i.position)) {
                case c["default"].ORDER_ATTACK:
                  a = u.GameText.STR_BATTLE_PANEL_ORDER_ATTACK;
                  break;
                case c["default"].ORDER_SKILL:
                  var r = this.getSelectSkill(i.position);
                  a = r ? r.name : "选择技能";
                  break;
                case c["default"].ORDER_ITEM:
                  var s = this.getSelectItem(i.position);
                  a = s ? s.name : "选择物品";
              }
              E["default"].ins.view.updateSkillTxt(a);
            }
          }
        }),
        (e.prototype.drawInfoMsg = function (e, t) {
          for (var i = 0; i < this.battle.playerList.length; i++) {
            var o = this.battleAni.getPosition(i, c["default"].COORD_X),
              n = this.battleAni.getPosition(i, c["default"].COORD_Y);
            this.drawCurMsg(e, i, o, n, i == t, !0);
          }
        }),
        (e.prototype.drawCurMsg = function (e, t, i, o, n, r) {
          var s = this.battleAni.getPlayerByPos(t);
          if (s && s.vo && !s.vo.isBattleStatus(a["default"].BSTATUS_ESCAPE)) {
            var l = s.vo.hp;
            (l > 0 &&
              (s.updateHpBar(!0),
              go.isRePlayBattle && s.updateMpBar(!0),
              r && s.updateBuff(!0)),
              (n || (go.isRePlayBattle && l > 0)) && s.updateName(!0));
          }
        }),
        (e.prototype.handlerMouse = function (e, t) {
          null != this.targetSelectPanel
            ? this.targetSelectPanel.handlerMouse(e, t)
            : this.battleAni.isTag(c["default"].TAG_SEE_INFO) &&
              ((this.targetSelectPanel = f["default"].alloc(
                l["default"].SKILL_AREA_SINGLE,
              )),
              this.targetSelectPanel.handlerMouse(e, t));
        }),
        (e.prototype.logicAnimePlaying = function () {}),
        (e.prototype.logicBattleSee = function () {
          (this.initRoundStartOrder(),
            this.logicRemoteWaiting(),
            this.logicTargetSelect());
        }),
        (e.prototype.logicRemoteWaiting = function () {}),
        (e.prototype.isRemoteWaitting = function () {
          for (var e = 0, t = this.allOrderPlayer; e < t.length; e++) {
            var i = t[e];
            if (this.battle.isValidBattlePlayer(i)) return !1;
          }
          return !0;
        }),
        (e.prototype.selectAutoFightTarget = function (e) {
          if (null == this.battle) return 0;
          var t = this.battle,
            i = 0,
            o = t.getLeftPosNum();
          1 == h["default"].isLeftSide(e.position) &&
            ((i = c["default"].LEFT_MAX_POS), (o = c["default"].MAX_POS));
          for (var n = i; o > n; n++) {
            var a = t.getPlayerByPos(n);
            if (0 != t.isValidBattlePlayer(a)) return n;
          }
          return i;
        }),
        (e.prototype.doAutoFight = function () {
          var e = this.battleAni,
            t = this.battle;
          if (
            0 != e.isTag(c["default"].TAG_ALL_END) &&
            1 != t.isRemoteWaiting() &&
            !S.GuideModel.ins.isForbidBattle
          ) {
            if (t.getType() == c["default"].LOCAL) {
              for (
                var i = !0, o = 0, n = this.allOrderPlayer;
                o < n.length;
                o++
              ) {
                var a = n[o];
                t.isValidBattlePlayer(a) && (i = !1);
              }
              if (i) return;
            }
            for (var r = 0, s = this.allOrderPlayer; r < s.length; r++) {
              var a = s[r];
              t.getPlanData(a.position) ||
                (0 == t.isValidBattlePlayer(a)
                  ? this.addPlan(
                      a.position,
                      this.getBattlePlanData(
                        c["default"].PLAN_NONE,
                        a.position,
                      ),
                    )
                  : 0 == this.isUseSkillInitiative(a) &&
                    (this.setCursor(this.selectAutoFightTarget(a)),
                    this.addPlan(
                      a.position,
                      this.getBattlePlanData(
                        c["default"].PLAN_ATTACK,
                        a.position,
                      ),
                    )));
            }
            (this.updatePlayerHpMpInfo(), this.doPlanData());
          }
        }),
        (e.prototype.isUseSkillInitiative = function (e) {
          if (null == e) return !1;
          var t = e.getSkillByID(e.autoSkillID_Initiative);
          if (null == t || !r["default"].isCanUse(e, t, null)) return !1;
          var i = this.getCursor(),
            o = -1;
          return (
            (o = this.battle.searchAICursor(e, t.area, !0)),
            this.setCursor(o),
            this.addPlan(
              e.position,
              this.getBattlePlanData(
                c["default"].PLAN_USE_SKILL,
                e.position,
                t.id,
              ),
            ),
            this.setCursor(i),
            !0
          );
        }),
        (e.prototype.logic = function () {
          if (this.battle.getType() == c["default"].LOCAL) {
            if (this.battle.getPlanTime() <= 0) {
              if (S.GuideModel.ins.isForbidBattle) return;
              for (var e = 0, t = this.allOrderPlayer; e < t.length; e++) {
                var i = t[e];
                i &&
                  null == this.battle.getPlanData(i.position) &&
                  this.addPlan(
                    i.position,
                    this.getBattlePlanData(c["default"].PLAN_NONE, i.position),
                  );
              }
              return (this.updatePlayerHpMpInfo(), void this.doPlanData());
            }
          } else if (this.isRemoteWaitting())
            return (
              this.updatePlayerHpMpInfo(),
              void this.battle.setRemoteWaiting(!0)
            );
          (this.initRoundStartOrder(), this.logicTargetSelect());
        }),
        (e.prototype.logicTargetSelect = function () {
          if (
            (null != this.cusorSprite && this.cusorSprite.action(),
            null != this.targetSelectPanel &&
              1 == this.targetSelectPanel.isFinshSelect())
          ) {
            var e = this.targetSelectPanel.getTargetPos();
            return this.getOrderIndex(this.getnowOrderIndex()) ==
              c["default"].ORDER_INFO
              ? (this.doViewPlayerInfo(e),
                void this.targetSelectPanel.setFinshSelect(!1))
              : void this.doOrderAction(
                  this.getOrderIndex(this.getnowOrderIndex()),
                  e,
                );
          }
        }),
        (e.prototype.changeOrder = function (e) {
          var t = this.getOrderPlayer();
          (this.setOrderIndex(e, this.getnowOrderIndex()),
            this.cleanTargetSelect());
          var i = this.getOrderIndex(this.getnowOrderIndex());
          switch (
            (i != c["default"].ORDER_SKILL &&
              delete this.selectSkill[t.position],
            i != c["default"].ORDER_ITEM && delete this.selectItem[t.position],
            i)
          ) {
            case c["default"].ORDER_ATTACK:
              this.targetSelectPanel = this.getTargetSelectPanel();
              break;
            case c["default"].ORDER_SKILL:
              this.initSkillListPanel();
              break;
            case c["default"].ORDER_ITEM:
              this.initItemListPanel();
              break;
            case c["default"].ORDER_INFO:
              this.targetSelectPanel = this.getTargetSelectPanel();
          }
        }),
        (e.prototype.doViewPlayerInfo = function (e) {
          if (!(null == e || e.length <= 0)) {
            var t = this.battle.getPlayerByPos(e[0]);
            null != t && E["default"].ins.showCheck(t);
          }
        }),
        (e.prototype.getBattlePlanData = function (e, t, i) {
          void 0 === i && (i = -1);
          var o = new egret.ByteArray();
          switch ((o.writeByte(e), e)) {
            case c["default"].PLAN_ATTACK:
              o.writeByte(this.getCursor());
              break;
            case c["default"].PLAN_USE_SKILL:
              (o.writeByte(this.getCursor()),
                i > 0
                  ? o.writeShort(i)
                  : o.writeShort(this.getSelectSkill(t).id));
              break;
            case c["default"].PLAN_USE_ITEM:
              (o.writeByte(this.getCursor()),
                o.writeByte(this.getSelectItem(t).slotPos));
              break;
            case c["default"].PLAN_ESCAPE:
              break;
            case c["default"].PLAN_NONE:
          }
          return o;
        }),
        (e.prototype.getSequenceList = function () {
          var e = new T["default"](),
            t = this.battle;
          if (null == this.battle.resultControlList) return e;
          for (
            var i = 0, o = 0, n = 0, a = null, r = 0;
            r < t.resultControlList.length;
            r++
          ) {
            var s = t.resultControlList[r];
            if (null != s) {
              switch (((i = o), (o = s.byte0), (n = s.counter), s.type)) {
                case c["default"].TYPE_BATTLE_SKILL:
                case c["default"].TYPE_BATTLE_ESCAPE:
                  0 == h["default"].isSameSide(i, o) &&
                    ((a = new T["default"]()), e.addElement(a));
                  break;
                case c["default"].TYPE_BATTLE_TARGET_EFFECT:
                  (h["default"].isEffectStatus(n, c["default"].EFFECT_REBORN) ||
                    h["default"].isEffectStatus(
                      n,
                      c["default"].EFFECT_DIE_DELAY,
                    )) &&
                    ((a = new T["default"]()), e.addElement(a));
              }
              (null == a && ((a = new T["default"]()), e.addElement(a)),
                a.addElement(s));
            }
          }
          return (
            this.cleanTargetSelect(),
            this.setOrderInit(!1),
            this.setPetRound(!1),
            this.setBuddyRound(!1),
            t.getType() != c["default"].LOCAL && this.cleanPlanVector(),
            this.checkSkipAnimeGWidgetShow(!0),
            e
          );
        }),
        (e.prototype.doBattleRoundLogic = function () {
          (this.battle.logicRound(), this.battleAni.makeBattleAni());
        }),
        (e.prototype.doOrderAction = function (e, t) {
          var i = this.getOrderPlayer();
          if (null != i) {
            var o;
            switch (e) {
              case c["default"].ORDER_ATTACK:
                o = this.getBattlePlanData(
                  c["default"].PLAN_ATTACK,
                  i.position,
                );
                break;
              case c["default"].ORDER_SKILL:
                o = this.getBattlePlanData(
                  c["default"].PLAN_USE_SKILL,
                  i.position,
                );
                break;
              case c["default"].ORDER_ITEM:
                ((o = this.getBattlePlanData(
                  c["default"].PLAN_USE_ITEM,
                  i.position,
                )),
                  null != o && this.removeBagUseItem(e));
                break;
              case c["default"].ORDER_ESCAPE:
                o = this.getBattlePlanData(
                  c["default"].PLAN_ESCAPE,
                  i.position,
                );
            }
            this.addPlan(i.position, o);
            for (var n = 0, a = this.allOrderPlayer; n < a.length; n++) {
              var r = a[n];
              if (r && !this.battle.getPlanData(r.position))
                if (e == c["default"].ORDER_ESCAPE)
                  this.addPlan(
                    r.position,
                    this.getBattlePlanData(
                      c["default"].PLAN_ESCAPE,
                      r.position,
                    ),
                  );
                else if (0 == this.battle.isValidBattlePlayer(r))
                  this.addPlan(
                    r.position,
                    this.getBattlePlanData(c["default"].PLAN_NONE, r.position),
                  );
                else if (i.position != r.position) {
                  if (
                    0 == this.isPetRound() &&
                    r.type == A.MODEL_TYPE.TYPE_PET &&
                    this.isPetAuto()
                  ) {
                    0 == this.isUseSkillInitiative(r) &&
                      this.addPlan(
                        r.position,
                        this.getBattlePlanData(
                          c["default"].PLAN_NONE,
                          r.position,
                        ),
                      );
                    continue;
                  }
                  this.orderPlayer = r;
                  var s =
                    this.battle.getType() != c["default"].PET_PK &&
                    r.type == A.MODEL_TYPE.TYPE_PET;
                  (s && this.setOrderPet(r), this.setPetRound(s));
                  var l = r.type == A.MODEL_TYPE.TYPE_BUDDY;
                  (l && this.setOrderBuddy(r),
                    this.setBuddyRound(l),
                    this.setPetRound(!1),
                    this.setBuddyRound(!1),
                    E["default"].ins.view.updateList(
                      this.isPetRound() || this.isBuddyRound(),
                    ),
                    E["default"].ins.view.updateOrderHead(
                      this.getOrderPlayer(),
                    ));
                  var u = this.getOrderIndex(this.getnowOrderIndex());
                  return (
                    this.setFoucsGWidgetToOrder(u),
                    (this.targetSelectPanel = this.getTargetSelectPanel()),
                    void (0 == this.isCursorEnable() && this.initAttackOrder())
                  );
                }
            }
            S.GuideModel.ins.isForbidBattle || this.doPlanData();
          }
        }),
        (e.prototype.removeBagUseItem = function (e) {
          var t = this.getOrderPlayer().position;
          if (e == c["default"].ORDER_ITEM) {
            var i = this.getMyPlayer();
            if (null != i && this.battle.getType() != c["default"].LOCAL) {
              var o = i.bag;
              if (null == o) return;
              var n = this.getSelectItem(t);
              if (null == n) return;
              o.removeBagItemByPos(n.slotPos, 1);
            }
          }
        }),
        (e.prototype.doPlanData = function () {
          if ((this.cleanTargetSelect(), 1 == this.isReady())) {
            switch (
              (this.setPetRound(!1),
              this.setBuddyRound(!1),
              E["default"].ins.view.updateOrderHead(this.getOrderPlayer()),
              E["default"].ins.view.updateList(
                this.isPetRound() || this.isBuddyRound(),
              ),
              this.battle.getType())
            ) {
              case c["default"].LOCAL:
                this.doBattleRoundLogic();
                break;
              default:
                this.battle.setRemoteWaiting(!0);
            }
            this.battle.clearAllPlan();
          }
          (E["default"].ins.closeBattleOther(), this.setOrderInit(!1));
        }),
        (e.prototype.initItemListPanel = function () {
          var e = this.getMyPlayer();
          if (null != e && null != e.bag) {
            var t = e.bag.getCanUseItemList(n["default"].CAN_USE_BATTLE);
            return null == t || 0 == t.length
              ? (p["default"].alertMessage(
                  u.GameText.STR_BATTLE_ITEM_USE_NULL_INFO,
                  u.GameText.STR_BATTLE_ITEM_USE_NULL,
                ),
                void this.initAttackOrder())
              : void p["default"].showModal(
                  g.ModName.Bag,
                  g.BagViewType.UseItem,
                  { subType: p["default"].SUB_BATTLE_ITEM_LIST, itemList: t },
                );
          }
        }),
        (e.prototype.initSkillListPanel = function () {
          var e = this.getOrderPlayer();
          if (null != e) {
            var t = a["default"].getSkillListByType(
              e.skillList,
              l["default"].SKILL_TYPE_ACTIVE,
            );
            if (null == t || 0 == t.length)
              return void p["default"].alertMessage(
                u.GameText.getText(u.GameText.TI_BATTLE_NO_SKILL),
              );
            ((E["default"].ins.skillPlayer = e), E["default"].ins.showSkill(t));
          }
        }),
        (e.prototype.getTargetSelectPanel = function () {
          this.clearTargetSelectPanel();
          var e = this.getOrderPlayer().position,
            t = null;
          switch (this.getOrderIndex(this.getnowOrderIndex())) {
            case c["default"].ORDER_ATTACK:
              t = f["default"].alloc(l["default"].SKILL_AREA_SINGLE);
              break;
            case c["default"].ORDER_SKILL:
              var i = this.getSelectSkill(e);
              if (null == i) return null;
              ((t = f["default"].alloc(i.area)), t.setSelectSkill(i));
              break;
            case c["default"].ORDER_ITEM:
              var o = this.getSelectItem(e);
              if (null == o) return null;
              ((t = f["default"].alloc(o.area)), t.setSelectItem(o));
              break;
            case c["default"].ORDER_INFO:
              t = f["default"].alloc(l["default"].SKILL_AREA_SINGLE);
          }
          return (null != t && t.init(), t);
        }),
        (e.prototype.cleanTargetSelect = function () {
          ((this.cusorSprite.visible = !1), this.clearTargetSelectPanel());
        }),
        (e.prototype.doMenuAction = function (e) {
          var t = this.battleAni,
            i = this.battle,
            n = this.getOrderPlayer();
          if (t.isTag(c["default"].TAG_IS_BATTLE_SEE)) {
            if (
              e != p["default"].EVENT_BATTLE_ORDER_CHAT_INPUT &&
              e != p["default"].EVENT_BATTLE_ORDER_CHAT_ROOM &&
              e != p["default"].EVENT_ALL_QUIT_BATTLE_SEE &&
              e != p["default"].EVENT_BATTLE_ORDER_CHAT_INFO &&
              e != p["default"].EVENT_ALL_INFO_SKIP_ANIME
            )
              return (this.cleanTargetSelect(), !1);
          } else {
            if (
              1 == i.isRemoteWaiting() &&
              e != p["default"].EVENT_BATTLE_ORDER_CHAT_INPUT &&
              e != p["default"].EVENT_BATTLE_ORDER_CHAT_ROOM &&
              e != p["default"].EVENT_ALL_INFO_LEADER_FORCE
            )
              return !1;
            if (
              0 == this.battleAni.isTag(c["default"].TAG_ALL_END) &&
              e != p["default"].EVENT_BATTLE_ORDER_CHAT_INPUT &&
              e != p["default"].EVENT_BATTLE_ORDER_CHAT_ROOM &&
              e != p["default"].EVENT_ALL_INFO_SKIP_ANIME &&
              e != p["default"].EVENT_ALL_VIEW_WORLD_DEL_AUTO_FIRE &&
              e != p["default"].EVENT_ALL_AUTOMODEL_ESCAPE
            )
              return !1;
          }
          switch (e) {
            case p["default"].EVENT_BATTLE_ORDER_ATTACK:
              if (
                1 == o["default"].useGuide &&
                t.isTag(c["default"].TAG_IS_GUIDE_ATTACK_MENU)
              )
                return (
                  t.setTag(c["default"].TAG_IS_GUIDE_ATTACK_MENU, !1),
                  t.setTag(c["default"].TAG_IS_GUIDE_ATTACK_TARGET, !0),
                  this.changeOrder(c["default"].ORDER_ATTACK),
                  !0
                );
              if (
                this.getOrderIndex(this.getnowOrderIndex()) ==
                  c["default"].ORDER_ATTACK &&
                1 == this.isCursorEnable() &&
                null != this.targetSelectPanel
              )
                return (this.targetSelectPanel.setFinshSelect(!0), !0);
              this.changeOrder(c["default"].ORDER_ATTACK);
              break;
            case p["default"].EVENT_BATTLE_ORDER_SKILL:
              this.changeOrder(c["default"].ORDER_SKILL);
              break;
            case p["default"].EVENT_BATTLE_ORDER_ITEM:
              if (1 == this.isPetRound())
                return (
                  p["default"].alertMessage(
                    u.GameText.STR_BATTLE_ITEM_PET_CANNOT_USE,
                  ),
                  !1
                );
              if (1 == this.isBuddyRound())
                return (
                  p["default"].alertMessage(
                    u.GameText.STR_BATTLE_ITEM_BUDDY_CANNOT_USE,
                  ),
                  !1
                );
              this.changeOrder(c["default"].ORDER_ITEM);
              break;
            case p["default"].EVENT_BATTLE_ORDER_CHAT_INFO:
              this.battleAni.isTag(c["default"].TAG_IS_BATTLE_SEE)
                ? this.battleAni.setTag(c["default"].TAG_SEE_INFO, !0)
                : this.changeOrder(c["default"].ORDER_INFO);
              break;
            case p["default"].EVENT_BATTLE_ORDER_AUTO:
              0 == this.battleAni.isTag(c["default"].TAG_IS_AUTO_FIGHT) &&
                ((o["default"].TAG_IS_AUTO_FIGHT_FLAG = !0),
                t.setTag(c["default"].TAG_IS_AUTO_FIGHT, !0),
                this.updateAutoFightText(),
                this.doAutoFight());
              break;
            case p["default"].EVENT_ALL_VIEW_WORLD_DEL_AUTO_FIRE:
              1 == t.isTag(c["default"].TAG_IS_AUTO_FIGHT) &&
                (t.setTag(c["default"].TAG_IS_AUTO_FIGHT, !1),
                (o["default"].TAG_IS_AUTO_FIGHT_FLAG = !1),
                this.updateAutoFightText(),
                this.setFoucsGWidgetToOrder(c["default"].ORDER_ATTACK));
              break;
            case p["default"].EVENT_BATTLE_ORDER_ESCAPE:
              if (n && n.type == A.MODEL_TYPE.TYPE_PET)
                return (
                  p["default"].alertMessage(u.GameText.STR_BATTLE_PET_ESCAPE),
                  !1
                );
              if (n && n.type == A.MODEL_TYPE.TYPE_BUDDY)
                return (
                  p["default"].alertMessage(u.GameText.STR_BATTLE_BUDDY_ESCAPE),
                  !1
                );
              (this.doOrderAction(c["default"].ORDER_ESCAPE, null),
                this.setOrderIndex(
                  c["default"].ORDER_NONE,
                  this.getnowOrderIndex(),
                ));
              break;
            case p["default"].EVENT_BATTLE_ORDER_CHAT_ROOM:
              this.doBattleChatRoom();
              break;
            case p["default"].EVENT_ALL_INFO_SKIP_ANIME:
              (t.closePlayerAnimation(), this.checkSkipAnimeGWidgetShow(!1));
              break;
            case p["default"].EVENT_ALL_INFO_PET_ORDER_AUTO:
            case p["default"].EVENT_ALL_INFO_PET_ORDER_HAND:
              this.doChangePetAutoHand();
              break;
            case p["default"].EVENT_ALL_QUIT_BATTLE_SEE:
              this.battleAni.doBattleSeeExit();
              break;
            case p["default"].EVENT_ALL_AUTOMODEL_ESCAPE:
              (t.closePlayerAnimation(),
                this.checkSkipAnimeGWidgetShow(!1),
                (t.isAutoEscape = !0));
          }
          return !0;
        }),
        (e.prototype.setAuto = function () {}),
        (e.prototype.doChangePetAutoHand = function () {
          var e = this.isPetAuto();
          e = !e;
          var t = o["default"].myPlayer;
          if (
            (t.clearSettingBit(l["default"].SETTING_PET_PLAN_OFF),
            e && t.setSettingBit(l["default"].SETTING_PET_PLAN_OFF),
            this.checkPetGWidgetShow(),
            1 == this.isPetRound() && 1 == this.isPetAuto())
          ) {
            if (1 == this.battle.isRemoteWaiting()) return;
            if (0 == this.battleAni.isTag(c["default"].TAG_ALL_END)) return;
            (0 == this.isUseSkillInitiative(this.orderPet) &&
              this.addPlan(
                this.orderPet.position,
                this.getBattlePlanData(
                  c["default"].PLAN_NONE,
                  this.orderPet.position,
                ),
              ),
              this.doPlanData());
          }
        }),
        (e.prototype.doBattleChatRoom = function () {
          var e = this.getMyPlayer();
          if (null != e) {
            var t = -1;
            (e.isPlayerTeam() && (t = l["default"].CHAT_TYPE_TEAM),
              y["default"].showView(
                g.ModName.Chat,
                g.ChatViewType.ChatAllView,
                [t],
              ));
          }
        }),
        (e.prototype.selectUse = function (e) {
          var t = this.getOrderPlayer();
          if (e instanceof r["default"]) {
            var i = e,
              o = new _["default"]();
            if (0 == r["default"].isCanUse(this.getOrderPlayer(), i, o))
              return (
                p["default"].alertMessage(
                  o.toString(),
                  u.GameText.getText(u.GameText.TI_ERROR),
                ),
                !1
              );
            (this.setSelectSkill(i, t.position),
              (this.targetSelectPanel = this.getTargetSelectPanel()));
          } else if (e instanceof n["default"]) {
            var a = e;
            (this.setSelectItem(a, t.position),
              (this.targetSelectPanel = this.getTargetSelectPanel()));
          }
          return !0;
        }),
        (e.prototype.clearTargetSelectPanel = function () {
          (v["default"].release(this.targetSelectPanel),
            (this.targetSelectPanel = null));
        }),
        (e.prototype.onRelease = function () {
          (v["default"].release(this.cusorSprite),
            (this.cusorSprite = null),
            v["default"].releaseObj(this.hLightSpr),
            (this.hLightSpr = null),
            this.cleanPlanVector(),
            (this.planVector = null),
            this.clearTargetSelectPanel(),
            (this.battleAni = null),
            (this.selectSkill = {}),
            (this.selectItem = {}),
            (this._isOrderInit = void 0),
            (this.orderIndex = {}),
            (this.orderPlayer = null),
            (this.orderPet = null),
            (this.allOrderPlayer.length = 0));
        }),
        e
      );
    })();
  t["default"] = P;
});
