(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(11),
    n = i(2),
    a = i(13),
    r = i(58),
    s = i(59),
    l = i(37),
    u = i(25),
    _ = i(155),
    d = i(1305),
    p = i(44),
    c = i(19),
    h = i(22),
    f = i(18),
    T = i(69),
    E = i(5),
    y = i(1),
    g = i(0),
    v = i(3),
    S = i(4),
    I = i(34),
    m = i(285),
    A = i(75),
    C = i(12),
    P = i(101),
    R = i(54),
    O = (i(135), i(27)),
    N = i(33),
    M = i(28),
    L = i(26),
    w = i(52),
    b = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return ((t.isJson = !0), t);
      }
      return (
        __extends(t, e),
        (t.prototype.setGuideData = function (e, t) {
          if (e && 0 != e.length) {
            var i = t ? 1 : 0,
              o = e.length,
              n = new h.Message(c["default"].CG_ACTOR_TASK_RECORD_INFO_NEW);
            (n.putByte(i), n.putInt(o));
            for (var a = 0; o > a; a++) n.putInt(e[a]);
            f["default"].sendRequest(n);
          }
        }),
        (t.prototype.initialize = function () {
          var e = this;
          (e.onNt("guideTest", e.onTestGuide),
            e.onNt(n.GuideEvent.GUIDE, e.onGuide),
            e.onNt(n.GuideEvent.GUIDE_ING, e.isLeadIng),
            e.onNt(n.GuideEvent.GUIDE_REMOVE, e.removeLead),
            e.onNt(n.GuideEvent.GUIDE_DATA, e.setData),
            e.onNt(n.GuideEvent.GUIDE_REST_INITED, e.initedGuides),
            e.onNt(n.GuideEvent.GUIDE_CHECK, e.checkTrigger),
            e.onNt(n.GuideEvent.GUIDE_SKIP, e.onSkip),
            e.onNt(n.GuideEvent.GUIDE_CLEAR, e.clear),
            e.onNt(n.GuideEvent.GUIDE_ALERT, e.onAlert),
            e.onNt(n.GuideEvent.GUIDE_AUTO_FINISH, e.onAutoFinish),
            e.onNt(n.MainEvent.STOP_AUTO_MOVE, e.onStopAutoMove),
            e.onNt(n.MainEvent.NPC_LOADED, e.npcLoad),
            e.onNt(n.BattleEvent.BATTLE_ROLE_LOAD, e.battleRoleLoad),
            e.onNt(n.BagEvent.BAG_FIX, e.onFix),
            e.onNt(n.BagEvent.BAG_FULL, e.onBagFull),
            e.onNt(n.PetEvent.PET_SKILL_POINT, e.onPetSkillPoint),
            e.onNt(n.MainEvent.ROLE_HP, e.onRoleHp),
            e.onNt(n.BattleEvent.BATTLE_FAIL, e.onBattleFail),
            e.onNt(n.BattleEvent.BATTLE_FIRST, e.onFirst),
            e.onNt(n.BattleEvent.BATTLE_PET_DIE, e.onBattlePetDie),
            e.onNt(n.BattleEvent.ON_BATTLE_END, e.battleEnd),
            e.onNt(n.MainEvent.OPEN_UI, e.onOpenUI),
            e.onNt(n.MainEvent.CLOSE_UI, e.onCloseUI),
            e.onNt(n.MiscEvent.ENTER_GAME, e.onEnterGame),
            e.onNt(n.TeamEvent.Team, e.updateTeam),
            e.onProto(
              c["default"].CG_ACTOR_TASK_RECORD_INFO_NEW,
              e.getGuideData,
            ));
        }),
        (t.prototype.onAutoFinish = function (e) {
          var t = e.body,
            i = t[0],
            o = t[1];
          this.setGuideData(i);
          var n = o.length;
          if (n) for (var a = 0; n > a; a++) this.onReport(o[a]);
        }),
        (t.prototype.setData = function (e) {
          var t = e.body;
          t && this.setGuideData(t[0], t[1] ? t[1] : null);
        }),
        (t.prototype.getGuideData = function (e) {
          var t,
            i = p.GuideModel.ins,
            o = e.body,
            n = o.readInt(),
            a = [];
          i.isDataBack = !0;
          for (var r = 0; n > r; r++)
            ((t = o.readInt()), a.push(t), i.setHasGuideId(t));
          try {
            var s = o.getLong(),
              l = o.getLong();
            i.setTime(s.toNumber(), l.toNumber());
          } catch (u) {
            console.log("error", u);
          }
          this.loadGuideConfig();
        }),
        (t.prototype.on = function (e, t, i) {
          this.onNt(e, t, this, i);
        }),
        (t.prototype.off = function (e, t) {
          this.offNt(e, t, this);
        }),
        (t.prototype.update = function () {}),
        (t.prototype.initedGuides = function () {
          var e = this;
          (e.removeAllTriggerListeners(),
            e.removeAllCompleteListeners(),
            this.onPetSkillPoint());
          for (
            var t, i, o = p.GuideModel.ins.restGuides, n = 0, a = o.length;
            a > n;
            n++
          )
            ((t = o[n]),
              (i = t.triggerType),
              _.GuideUtil.registEvent(i, e, e.checkTrigger, e.cancelTrigger));
          e.checkTrigger();
        }),
        (t.prototype.checkTrigger = function (e) {
          var t = p.GuideModel.ins;
          if (t.isDataBack) {
            var i = this;
            if (i._guide && !i._nextGuide && !i._waitGuide && t.isShowGuide)
              return void console.log("引导拦截", this._guide);
            var o;
            i._nextGuide && 1 === i._nextGuide.lock && (o = !0);
            var n = e ? e.body : null;
            if (i._nextGuide) {
              var a = !0;
              if (
                (i._guide &&
                  t.isShowGuide &&
                  i._guide.id == i._nextGuide.id &&
                  (a = !1),
                a)
              ) {
                var r = i.checkGuideTrigger(i._nextGuide, n);
                r && i.trigger(i._nextGuide);
              }
            } else
              for (var s = t.restGuides, l = 0, u = s.length; u > l; l++) {
                var _ = s[l];
                if (!i._waitGuide || _ === i._waitGuide) {
                  var r = i.checkGuideTrigger(_, n);
                  if (r) {
                    (1 === _.lock && (o = !0), i.trigger(_));
                    break;
                  }
                }
              }
          }
        }),
        (t.prototype.trigger = function (e) {
          var t = this,
            i = p.GuideModel.ins;
          if (e) {
            var o = E["default"].myPlayer.isSettingBit(
              S["default"].SETTING_MUSIC_EFFECT_OFF,
            );
            if (o) {
              var r = i.getGroupListByCnf(e.groupId, !0);
              return (
                this.onReport(e.groupId),
                void (r && t.sendFinishLead(r))
              );
            }
          }
          if (R["default"].ins.isFight && !e.isBattle)
            return (
              console.log("非战斗引导拦截", e),
              void (R["default"].ins.viewData = { isGuide: !0 })
            );
          if (p.GuideModel.ins.isGuideAlertIng)
            return void console.log("二次弹窗引导拦截", e);
          if (e.isTeam && E["default"].myPlayer.isMember())
            return (
              (p.GuideModel.ins.isGuideTeam = !0),
              void console.log("组队队员拦截", e)
            );
          if (
            p.GuideModel.ins.isCloseGuide &&
            e.layer == u.GuideLayer.mainGuide &&
            !e.isBattle
          )
            return void console.log("打开UI拦截主界面引导", e);
          var s = e.npcData;
          if (s) {
            var l = i.getNpcData(s);
            if (!l) return void console.log("找不到该引导的npc数据", e);
            if (!l.isInScreen())
              return (
                (this._waitNpc = l),
                t.onNt(
                  L.SceneEvent.ON_MAIN_PLAYER_POS_CHANGED,
                  t.onMainPlayerMove,
                ),
                a.GUtil.findNpc({ npcName: s }),
                void console.log("不在屏幕显示,自动寻路", e)
              );
            (T.MainPlayerAi.ins.stopAutoMove(), i.setNpcData(l, !0));
          }
          (t.delDelay(), (t.guide = e), t.triggerGuide(e.id));
          var d = t.checkComplete();
          if (!d) {
            if (
              (i.setGuideStatu(e, u.GuideStatu.ing),
              e &&
                e.layer == u.GuideLayer.mainGuide &&
                !i.isLeadSprs(u.GuideDefine.autoHangGuideList))
            ) {
              var c = v["default"].getProxy(g.ModName.Main, g.ProxyType.Main);
              c.model.menuOpen ||
                ((c.model.menuOpen = !0),
                v["default"].sendNt(n.MainEvent.BTN_SWITCH));
            }
            var h = e.completeType;
            (_.GuideUtil.registComplete(h, t, t.onCheckComplete),
              t.sendNt(n.GuideEvent.GUIDE, !0),
              t.closeOther());
          }
        }),
        (t.prototype.closeOther = function () {
          (T.MainPlayerAi.ins.open &&
            ((p.GuideModel.ins.isAutoHang = !0),
            (T.MainPlayerAi.ins.open = !1)),
            p.GuideModel.ins.isForbidMissionView &&
              y["default"].hideView(
                g.ModName.Mission,
                g.MissionViewType.MissionDialog,
              ),
            v["default"].sendNt(n.MainEvent.ON_CLOSE_HINT, !0));
        }),
        (t.prototype.onCheckComplete = function (e, t) {
          this.delDelay();
          var i = t.body;
          this.checkComplete(e, i);
        }),
        (t.prototype.checkComplete = function (e, t) {
          void 0 === e && (e = [-1]);
          var i = this._guide;
          if (i) {
            var o = p.GuideModel.ins,
              a = this.checkCanComplete(i, e, t),
              r = a.flag;
            if (
              (go.openPay ||
                (i.isRecharge &&
                  ((r = !0),
                  console.log("充值引导，不显示充值，自动当完成", i))),
              i.platformType)
            ) {
              var s = o.isPlatform(i.platformType);
              s || (r = !0);
            }
            if (r) {
              (i.isEnd && this.onReport(i.groupId),
                o.setGuideStatu(i, u.GuideStatu.has),
                this.completeGuide(),
                this.dealGuideComplete(a));
              var l = i.isAutoHangUp;
              (l && o.isAutoHang && (T.MainPlayerAi.ins.open = !0),
                i.isAutoFight &&
                  o.isAutoFight &&
                  ((o.isAutoFight = !1),
                  (E["default"].TAG_IS_AUTO_FIGHT_FLAG = !1),
                  v["default"].sendNt(n.BattleEvent.UPDATE_AUTO_FIGHT)));
            }
            return r;
          }
        }),
        (t.prototype.checkCanComplete = function (e, t, i) {
          return (
            void 0 === t && (t = [-1]),
            _.GuideUtil.checkCanComplete(e, t, i)
          );
        }),
        (t.prototype.dealGuideComplete = function (e) {
          e.flag &&
            (e.npcData &&
              ((e.npcData.isGuide = !0), a.GUtil.findNpc(e.npcData)),
            e.openId &&
              (console.log("自动打开功能解锁介绍界面", e.openId),
              M["default"].ins.openMainInfoById(e.openId)),
            e.alertId &&
              (console.log("自动打开二次确认弹窗", e.alertId),
              v["default"].sendNt(n.GuideEvent.GUIDE_ALERT, e.alertId)));
        }),
        (t.prototype.cancelTrigger = function (e) {
          var t = e.body,
            i = this;
          if (i.isGuideIng(t)) {
            var n = i._guide;
            (n &&
              n.isCancel &&
              (i.delDelay(),
              (i.lastId = I.delayCall(
                o["default"].alloc(i, i.delGuideData, [n.id]),
                1e3,
              ))),
              (i._waitGuide = n),
              i.showHideGuide());
          }
        }),
        (t.prototype.delGuideData = function (e) {
          this.delDelay();
          var t = this._guide;
          t && t.id == e && this.clearGuide();
        }),
        (t.prototype.delDelay = function () {
          this.lastId && (I.clearDelay(this.lastId), (this.lastId = null));
        }),
        (t.prototype.getTriggers = function () {
          return this._guide ? this._guide.triggerType : null;
        }),
        (t.prototype.checkGuideTrigger = function (e, t) {
          var i = _.GuideUtil.isCanGuide(e, void 0, !0, t);
          return i;
        }),
        (t.prototype.triggerGuide = function (e) {
          (this._recordTriggerGuide || (this._recordTriggerGuide = []),
            -1 === this._recordTriggerGuide.indexOf(e) &&
              this._recordTriggerGuide.push(e));
        }),
        (t.prototype.completeGuide = function () {
          var e = this,
            t = !0;
          (e.removeAllCompleteListeners(),
            (e._waitGuide = null),
            (e.nextGuide = null));
          var i = e._guide.completeIds;
          if (i && i.length > 0) {
            var o = e._guide.nextId;
            if (
              (e.showHideGuide(),
              e.sendFinishLeadAll(e._guide),
              (e.guide = null),
              o)
            ) {
              for (
                var n = p.GuideModel.ins.restGuides, a = 0, r = n.length;
                r > a;
                a++
              )
                if (o === n[a].id) {
                  e.nextGuide = n[a];
                  break;
                }
              t = e.checkNextGuide();
            }
          } else {
            (e.showHideGuide(), p.GuideModel.ins.completeGuides([e._guide.id]));
            var o = e._guide.nextId;
            if (((e.guide = null), o))
              for (
                var n = p.GuideModel.ins.restGuides, a = 0, r = n.length;
                r > a;
                a++
              )
                if (o === n[a].id) {
                  ((e.nextGuide = n[a]), (t = e.checkNextGuide()));
                  break;
                }
          }
          t && e.checkTrigger();
        }),
        (t.prototype.checkNextGuide = function () {
          var e = !0,
            t = this;
          if (t._nextGuide) {
            var i = t.checkCanComplete(t._nextGuide);
            i.flag &&
              ((t._guide = t._nextGuide),
              t.completeGuide(),
              t.dealGuideComplete(i),
              (e = !1));
          }
          return e;
        }),
        (t.prototype.sendFinishLeadAll = function (e, t) {
          var i = e.completeIds;
          (i && i.length && this.sendFinishLead(i),
            t && this.sendFinishLead([e.id]));
        }),
        (t.prototype.sendFinishLead = function (e, t) {
          (p.GuideModel.ins.completeGuides(e, t), this.finishGuide(e));
        }),
        (t.prototype.finishGuide = function (e) {
          this.setGuideData(e);
        }),
        (t.prototype.isGuideIng = function (e) {
          return _.GuideUtil.isGuide(e, this.getTriggers());
        }),
        Object.defineProperty(t.prototype, "guide", {
          set: function (e) {
            ((this._guide = e), (p.GuideModel.ins.curGuide = e));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "nextGuide", {
          set: function (e) {
            ((this._nextGuide = e),
              (p.GuideModel.ins.nextGuide = e),
              e && this.delayNextGuide());
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.removeDelayNext = function () {
          this.delayNext &&
            (I.clearDelay(this.delayNext), (this.delayNext = null));
        }),
        (t.prototype.delayNextGuide = function () {
          (console.log("delayNextGuide"),
            this.removeDelayNext(),
            (this.delayNext = I.delayCall(
              o["default"].alloc(this, this.delDelayNextGuide),
              6e4,
            )));
        }),
        (t.prototype.delDelayNextGuide = function () {
          (this.removeDelayNext(),
            p.GuideModel.ins.isShowGuide || p.GuideModel.ins.isGuideAlertIng
              ? this.delayNextGuide()
              : (this.nextGuide = null));
        }),
        (t.prototype.removeAllTriggerListeners = function () {
          _.GuideUtil.removeAllTriggerListeners(this, this.checkTrigger);
        }),
        (t.prototype.removeAllCompleteListeners = function () {
          _.GuideUtil.removeAllCompleteListeners(this, this.checkComplete);
        }),
        (t.prototype.isLeadIng = function (e) {
          var t,
            i = e.body,
            o = this._guideView;
          o && ((t = _.GuideUtil.findTar(o.parent, i)), t && o.showHide(!1));
        }),
        (t.prototype.removeLead = function (e) {
          var t,
            i = e.body;
          if ((i && (t = i.parent), t))
            for (var o = t.numChildren, n = void 0, r = o - 1; r >= 0; r--)
              ((n = t.getChildAt(r)),
                n instanceof d.GuideView && a.GUtil.remove(n));
        }),
        (t.prototype.loadGuideConfig = function () {
          var e = "assets/guide/guide.";
          e += this.isJson ? "json" : "bin";
          var t = s["default"].ins.getRes(e);
          t
            ? p.GuideModel.ins.cfgs
              ? p.GuideModel.ins.initGuides()
              : this.setGuideCfg(t)
            : s["default"].ins.load(
                e,
                o["default"].alloc(this, this.onLoadGuideCfg),
                r.LoadPri.UI,
              );
        }),
        (t.prototype.onLoadGuideCfg = function (e, t) {
          if (this.isJson) this.setGuideCfg(e);
          else {
            for (
              var i = e,
                o = "",
                n = i.dataView.buffer,
                a = new Float32Array(n),
                r = 0;
              r < a.length;
              r++
            )
              o += String.fromCharCode(a[r]);
            var s = JSON.parse(o);
            this.setGuideCfg(s);
          }
        }),
        (t.prototype.setGuideCfg = function (e) {
          ((p.GuideModel.ins.cfgs = e), p.GuideModel.ins.initGuides());
        }),
        (t.prototype.onGuide = function (e) {
          var t = e ? e.body : void 0;
          (t || (this.guide = null), this.showHideGuide(t));
        }),
        (t.prototype.onSkip = function (e) {
          var t = this,
            i = p.GuideModel.ins;
          if (t._guide) {
            this.onReport(t._guide.groupId);
            var o = i.getGroupList(t._guide.groupId);
            o ? t.sendFinishLead(o, !0) : t.sendFinishLead([t._guide.id], !0);
          }
          (t.clearGuide(), t.showHideGuide(), t.checkTrigger());
        }),
        (t.prototype.clear = function (e) {
          (this.showHideGuide(), this.clearGuide(), p.GuideModel.ins.clear());
        }),
        (t.prototype.clearGuide = function () {
          this.guide = this.nextGuide = this._waitGuide = null;
        }),
        (t.prototype.onTestGuide = function () {
          (this.loadGuideConfig(), this.showHideGuide(!0));
        }),
        (t.prototype.onAlert = function (e) {
          var t,
            i,
            n,
            a,
            r = this,
            s = e.body;
          switch (((p.GuideModel.ins.isGuideAlertIng = !0), s)) {
            case u.GuideAlertType.pet:
              ((t = "是否寻路到宠物训练处？"),
                (i = r.onGoPet),
                (n = "宠物技能"),
                (a = u.GuideSpriteId.petShopSelect));
              break;
            case u.GuideAlertType.equipAdvanced:
              ((t = "是否寻路到装备进阶商人处？"),
                (i = r.onGoEquip),
                (n = "装备进阶"),
                (a = u.GuideSpriteId.equipAdvancedSelect));
              break;
            case u.GuideAlertType.transfer:
              ((t = "是否跳转到职业认证师处？"),
                (i = r.onGoTransfer),
                (n = "转职"),
                (a = u.GuideSpriteId.transfer));
              break;
            case u.GuideAlertType.smelt:
              ((t = "是否跳转到熔炼合成师处？"),
                (i = r.onGoSmelt),
                (n = "熔炼"),
                (a = u.GuideSpriteId.smelt));
              break;
            case u.GuideAlertType.equipShop:
              ((t = "是否跳转到武器与防具商人处？"),
                (i = r.onEquipShop),
                (n = "装备商店"),
                (a = u.GuideSpriteId.equipShopSelect));
              break;
            case u.GuideAlertType.cssSeal:
              ((t = "是否寻路到圣印仙师？"),
                (i = r.onGoCss),
                (n = "可在玛雅城->圣印仙师处找到该玩法。"),
                (a = u.GuideSpriteId.cssTip));
          }
          var l = o["default"].alloc(r, r.onSure, [i]);
          O["default"].confirmParam({
            content: t,
            confirm: l,
            cancelCb: o["default"].alloc(r, r.onCancel, [n, l, a]),
            isEasy: !1,
          });
        }),
        (t.prototype.onSure = function (e) {
          (console.log("onSure"),
            (p.GuideModel.ins.isGuideAlertIng = void 0),
            e && e());
        }),
        (t.prototype.onGoPet = function () {
          (console.log("onGoPet"),
            a.GUtil.findNpc({ mapId: 906, npcId: 16, px: 2, py: 4 }));
        }),
        (t.prototype.onGoCss = function () {
          a.GUtil.findNpc({ mapId: 960, npcId: 23, px: 19, py: 23 });
        }),
        (t.prototype.onGoEquip = function () {
          (console.log("onGoEquip"),
            a.GUtil.findNpc({ mapId: 960, npcId: 17, px: 6, py: 17 }));
        }),
        (t.prototype.onGoTransfer = function () {
          (console.log("onGoTransfer"),
            (E["default"].jumpMapData = {
              type: P.JumpMapType.openMainInfo,
              data: 14,
            }),
            E["default"].doJumpMap(14, 33, 19));
        }),
        (t.prototype.onGoSmelt = function () {
          (console.log("onGoSmelt"),
            (E["default"].jumpMapData = {
              type: P.JumpMapType.openMainInfo,
              data: 15,
            }),
            E["default"].doJumpMap(824, 37, 20));
        }),
        (t.prototype.onEquipShop = function () {
          (console.log("onEquipShop"),
            a.GUtil.findNpc({ mapId: 5, npcId: 0, px: 15, py: 15 }));
        }),
        (t.prototype.onCancel = function (e, t, i) {
          console.log("onCancel");
          var n = this;
          return (
            y["default"].alertMessage(
              "是否确认取消传送，确认取消后，" + e + "学习教程将不再出现。",
              void 0,
              o["default"].alloc(n, n.onSureCancel, [i]),
              void 0,
              t,
              "传送",
            ),
            !0
          );
        }),
        (t.prototype.onSureCancel = function (e) {
          p.GuideModel.ins.isGuideAlertIng = void 0;
          var t = p.GuideModel.ins.getGuideIdBySpriteId(e, !0);
          if (t) {
            var i = p.GuideModel.ins.getGroupList(t);
            i && this.sendFinishLead(i);
          }
        }),
        (t.prototype.npcLoad = function (e) {
          var t = e.body;
          if (t.visible && t.vo) {
            var i = m.GuideTool.getNpcGuideId(t.vo.name);
            i &&
              ((t.vo.dataType = C.ModelConst.NPC),
              (t.dsp.sprData = t.vo),
              _.GuideUtil.regGuideSpr(null, i, t.dsp),
              p.GuideModel.ins.setNpcData(t));
          }
        }),
        (t.prototype.battleRoleLoad = function (e) {
          var t = e.body;
          if (t) {
            var i = t.vo,
              o = R["default"].ins.isSelectPos(i.position);
            o && this.updateBattleGuide(t);
          }
        }),
        (t.prototype.updateBattleGuide = function (e) {
          var t = u.GuideSpriteId.battleHighSelect,
            i = e.vo;
          ((i.dataType = C.ModelConst.BATTLE_PLAYER),
            i.setPosition(e.x, e.y),
            (e.battleSprite.sprData = i),
            _.GuideUtil.regGuideSpr(null, t, e.battleSprite, void 0, !0));
        }),
        (t.prototype.onFirst = function () {
          var e = R["default"].ins.getSelectPos();
          if (e && e.length) {
            var t = A["default"].getPlayerByPos(e[0]);
            t && t.isLoad && this.updateBattleGuide(t);
          }
        }),
        (t.prototype.onFix = function (e) {
          var t = e.body,
            i = p.GuideModel.ins;
          if (t) {
            var o = !i.getHasGuideId(u.GuideSpriteId.euqipRepairTip);
            o &&
              (i.setTriggerGuide2(u.GuideTriggerDataType.equipFix, !0),
              this.checkTrigger());
          } else
            (i.setTriggerGuide2(u.GuideTriggerDataType.equipFix, !1),
              this._guide &&
                this._guide.spriteId == u.GuideSpriteId.euqipRepairBtn &&
                this.showHideGuide());
        }),
        (t.prototype.onBagFull = function () {
          (console.log("onBagFull"),
            p.GuideModel.ins.getHasGuideId(u.GuideSpriteId.bagFullTip) ||
              (p.GuideModel.ins.setTriggerGuide2(
                u.GuideTriggerDataType.bagFull,
                !0,
              ),
              this.checkTrigger(),
              this._guide &&
                v["default"].hideView(
                  g.ModName.Shop,
                  g.ShopViewType.ShopAutoSell,
                )));
        }),
        (t.prototype.onPetSkillPoint = function () {
          console.log("onPetSkillPoint");
          var e = p.GuideModel.ins;
          if (e.isDataBack && !e.getHasGuideId(u.GuideSpriteId.petSkillTip)) {
            var t = this.getPetGuideData();
            (e.setTriggerGuide3(u.GuideTriggerDataType.petSkillPoint, t),
              t && this.checkTrigger());
          }
        }),
        (t.prototype.getPetGuideData = function () {
          var e = 0;
          E["default"].myPlayer &&
            E["default"].myPlayer.pet &&
            (e = E["default"].myPlayer.pet.get(C.ModelConst.SP));
          var t,
            i = p.GuideModel.ins.getTriggerDataValue(
              u.GuideSpriteId.petSkillTip,
              u.GuideTriggerDataType.petSkillPoint,
            );
          return (e >= i && (t = i), t);
        }),
        (t.prototype.onRoleHp = function () {
          R["default"].ins.isFight
            ? (p.GuideModel.ins.isHpChange = !0)
            : this.countBlood();
        }),
        (t.prototype.battleEnd = function () {
          (p.GuideModel.ins.isHpChange &&
            ((p.GuideModel.ins.isHpChange = void 0), this.countBlood()),
            p.GuideModel.ins.isPetDie &&
              ((p.GuideModel.ins.isPetDie = void 0), this.onPetDie()));
        }),
        (t.prototype.countBlood = function () {
          if (!p.GuideModel.ins.getHasGuideId(u.GuideSpriteId.drug)) {
            var e =
                E["default"].myPlayer && E["default"].myPlayer.bag
                  ? E["default"].myPlayer.bag.getItem(
                      N["default"].BLOOD_BOTTLE_POS,
                    )
                  : null,
              t = null != e,
              i = E["default"].myPlayer.get(C.ModelConst.HP),
              o = E["default"].myPlayer.get(C.ModelConst.HPMAX),
              n = o / 2 >= i,
              a = n && !t;
            a &&
              (p.GuideModel.ins.setTriggerGuide2(
                u.GuideTriggerDataType.blood,
                !0,
              ),
              this.checkTrigger());
          }
        }),
        (t.prototype.onBattleFail = function () {
          var e,
            t,
            i,
            o,
            n = p.GuideModel.ins;
          (n.getHasGuide(u.GuideSpriteId.mercenaryTip) ||
            ((o = n.findGuide(u.GuideSpriteId.mercenaryTip)),
            o &&
              ((e = _.GuideUtil.isCanGuide(o, [2])),
              e &&
                n.setTriggerGuide2(
                  u.GuideTriggerDataType.battleFail_mercenary,
                  !0,
                ))),
            n.getHasGuide(u.GuideSpriteId.equipShopTip) ||
              ((o = n.findGuide(u.GuideSpriteId.equipShopTip)),
              o &&
                ((t = _.GuideUtil.isCanGuide(o, [4])),
                t &&
                  n.setTriggerGuide2(u.GuideTriggerDataType.battleFail, !0))),
            n.getHasGuide(u.GuideSpriteId.legionEnter) ||
              ((o = n.findGuide(u.GuideSpriteId.legionEnter)),
              o &&
                ((i = _.GuideUtil.isCanGuide(o, [2])),
                i &&
                  n.setTriggerGuide2(
                    u.GuideTriggerDataType.battleFail_legion,
                    !0,
                  ))),
            (e || t || i) && this.checkTrigger());
        }),
        (t.prototype.onBattlePetDie = function () {
          R["default"].ins.isFight
            ? (p.GuideModel.ins.isPetDie = !0)
            : this.onPetDie();
        }),
        (t.prototype.onPetDie = function () {
          var e = p.GuideModel.ins.getHasGuide(u.GuideSpriteId.petSkillTip);
          if (!e) {
            var t = this.getPetGuideData(),
              i = null != t;
            (p.GuideModel.ins.setTriggerGuide2(
              u.GuideTriggerDataType.battlePetDie,
              i,
            ),
              i && this.checkTrigger());
          }
        }),
        (t.prototype.onStopAutoMove = function () {
          this.onDealNextGuide();
        }),
        (t.prototype.onDealNextGuide = function () {
          var e = p.GuideModel.ins;
          if (e.nextGuide) {
            if (e.cfgs) {
              var t = e.nextGuide.restoreList;
              if (t)
                for (var i = e.cfgs.length, o = 0; o < t.length; o++)
                  for (var n = t[o], a = i - 1; a >= 0; a--) {
                    var r = e.cfgs[a];
                    r.id == n &&
                      (e.setHasGuide(r.spriteId, !0),
                      e.setHasGuide(n, !0),
                      e.restGuides.unshift(r),
                      this.restoreData(r));
                  }
            }
            this.nextGuide = null;
          }
        }),
        (t.prototype.restoreData = function (e) {
          switch (e.spriteId) {
            case u.GuideSpriteId.petSkillTip:
              p.GuideModel.ins.setTriggerGuide2(
                u.GuideTriggerDataType.battlePetDie,
              );
          }
        }),
        (t.prototype.updateTeam = function () {
          E["default"].myPlayer.isInTeam() ||
            (p.GuideModel.ins.isGuideTeam &&
              ((p.GuideModel.ins.isGuideTeam = void 0), this.checkTrigger()));
        }),
        (t.prototype.onOpenUI = function () {
          var e = p.GuideModel.ins;
          e.isEnterGame &&
            e.isMainGuide &&
            (this.onGuide(), (e.isCloseGuide = !0), e.openUINum++);
        }),
        (t.prototype.onCloseUI = function () {
          var e = p.GuideModel.ins;
          e.isEnterGame &&
            e.isCloseGuide &&
            1 == e.openUINum &&
            (e.openUINum--,
            (e.isCloseGuide = void 0),
            e.isShowGuide ||
              (console.log("有被关闭掉的主界面引导，重新检测引导触发"),
              this.checkTrigger()));
        }),
        (t.prototype.onEnterGame = function () {
          p.GuideModel.ins.isEnterGame = !0;
        }),
        (t.prototype.onMainPlayerMove = function () {
          var e = this;
          p.GuideModel.ins.getHasGuide(u.GuideSpriteId.npcCunZhang) ||
            (this._waitNpc &&
              this._waitNpc.isInScreen() &&
              (T.MainPlayerAi.ins.stopAutoMove(),
              this.checkTrigger(),
              e.offNt(
                L.SceneEvent.ON_MAIN_PLAYER_POS_CHANGED,
                e.onMainPlayerMove,
              )));
        }),
        (t.prototype.onReport = function (e) {
          (go.isHKTNative || go.isWeixin) &&
            gs.report &&
            gs.report(
              w.REPORT_TYPE.TUTORIAL_COMPLETION,
              go.roleLv,
              go.roleName,
              go.roleId,
              e,
            );
        }),
        (t.prototype.showHideGuide = function (e) {
          this.guideView.showHide(e);
        }),
        Object.defineProperty(t.prototype, "guideView", {
          get: function () {
            return (
              this._guideView || (this._guideView = new d.GuideView()),
              this._guideView
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })(l["default"]);
  t["default"] = b;
});
