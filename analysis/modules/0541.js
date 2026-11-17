(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(22),
    n = i(61),
    a = i(54),
    r = i(37),
    s = i(18),
    l = i(19),
    u = i(31),
    _ = i(57),
    d = i(27),
    p = i(10),
    c = i(12),
    h = i(20),
    f = i(30),
    T = i(8),
    E = i(5),
    y = i(24),
    g = i(1),
    v = i(42),
    S = i(16),
    I = i(91),
    m = i(184),
    A = i(88),
    C = i(75),
    P = i(183),
    R = i(115),
    O = i(2),
    N = i(43),
    M = i(11),
    L = i(3),
    w = i(0),
    b = i(137),
    x = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return ((t.listScroll = 0), t);
      }
      return (
        __extends(t, e),
        (t.prototype.initialize = function () {
          (this.onProto(
            l["default"].CG_FIGHT_RUN_LOCALBATTLE,
            this.processLocalBattleReward,
          ),
            this.onProto(
              l["default"].CG_FIGHT_ENTER_REMOTEBATTLE,
              this.processEnterRemoteBattle,
            ),
            this.onProto(
              l["default"].CG_FIGHT_SEE_IN,
              this.processEnterRemoteBattle,
            ),
            this.onProto(
              l["default"].CG_FIGHT_ENTER_BATTLE_NOTIFY,
              this.processRemoteBattleNotify,
            ),
            this.onProto(
              l["default"].CG_FIGHT_BATTLE_UPDATE,
              this.processBattleUpdate,
            ),
            this.onProto(
              l["default"].CG_FIGHT_RUN_LOCALBATTLE_CESHI,
              this.onLocalBattleTest,
            ),
            this.onProto(
              l["default"].CG_FIGHT_SEE_OUT,
              this.processBattleSeeExit,
            ),
            this.onProto(l["default"].CG_FIGHT_PK_ASK, this.onPk, this),
            this.onProto(
              pb.EUserProtocol.S2C_BATTLE_GROUP_ID,
              this.onBattleGroupId,
            ),
            this.onProto(
              l["default"].CG_PIONEER_BATTLE_REPLAY,
              this.onBattlePlay,
              this,
            ),
            this.onProto(
              l["default"].CG_PIONEER_REPLAY_UPDATE,
              this.onBattleRePlayUpdate,
              this,
            ),
            this.onProto(
              l["default"].CG_OVER_ROUND,
              this.cgOverRoundRes,
              this,
            ));
        }),
        (t.prototype.processBattleSeeExit = function (e) {
          var t = e.body;
          if (null != t) {
            var i = a["default"].ins.battleAni;
            null != i && i.doExit();
          }
        }),
        (t.prototype.onPk = function (e) {
          var t = e.body;
          s["default"].processReqAskMsg(t);
        }),
        (t.prototype.update = function () {}),
        (t.prototype.processEnterRemoteBattle = function (e) {
          var t = e.body,
            i = t.getByte();
          return 0 > i
            ? (g["default"].alertMessage(
                t.getString(),
                p.GameText.getText(p.GameText.TI_ERROR),
              ),
              void (
                null != E["default"].arena &&
                R["default"].doUpdateArenaNearActorList()
              ))
            : void this.processRemoteBattleNotify(e);
        }),
        (t.prototype.processRemoteBattleNotify = function (e) {
          var t = e.body;
          this.dealRemoteBattle(t);
        }),
        (t.prototype.dealRemoteBattle = function (e) {
          a["default"].ins.isFight && a["default"].ins.exitBattle(!1, !0);
          for (
            var t = (e.getInt(), e.getByte()),
              i = e.getByte(),
              o = e.getByte(),
              r = e.getInt(),
              s = e.getInt(),
              l = e.getInt(),
              u = Array(n["default"].MAX_POS),
              _ = e.getByte(),
              d = 0;
            _ > d;
            d++
          ) {
            var p = this.parseBattleModel(e, t);
            null != p && (u[p.position] = p);
          }
          var c = C["default"].createRemoteBattle(0, u, null);
          (c.setType(t),
            t != n["default"].PET_PK || go.isAutoFight || (go.isAutoFight = !0),
            c.setBattleResult(i),
            (c.round = o),
            (c.roundEndTime = S["default"].timer.serverTime + r),
            (c.waitStatus = s),
            (c.nextBattleGroupID = l),
            c.setRemoteWaiting(!1),
            a["default"].ins.enterBattle(c));
        }),
        (t.prototype.parseBattleModel = function (e, t) {
          var i,
            o,
            a,
            r,
            s,
            l,
            d,
            p = e.getInt(),
            c = e.getByte(),
            h = e.getString(),
            f = e.getByte(),
            T = e.getInt(),
            y = e.getInt(),
            g = e.getInt(),
            S = e.getInt(),
            m = e.getLong();
          switch (c) {
            case u.MODEL_TYPE.TYPE_MONSTER:
            case u.MODEL_TYPE.TYPE_NPC:
            case u.MODEL_TYPE.TYPE_PET:
              i = e.getLong();
              break;
            case u.MODEL_TYPE.TYPE_BUDDY:
              ((l = e.getLong()),
                (r = e.getLong()),
                (s = e.getString()),
                (d = e.getByte()));
              break;
            default:
              ((i = e.getLong()), (o = e.getLong()), (a = e.getLong()));
          }
          var A = -1,
            C = !1;
          c == u.MODEL_TYPE.TYPE_MERCENARY &&
            ((A = e.getShort()), (C = e.getBoolean()));
          var P,
            R = e.getLong(),
            O = e.getInt(),
            N = e.getBoolean();
          N && (P = _["default"].fromByteFormationSkill(e));
          var M = e.getShort();
          if (c == u.MODEL_TYPE.TYPE_BUDDY) {
            var x = new b["default"](p);
            ((x.icon = r),
              (x.bagIcon = s),
              (x.position = f),
              (x.bStatus = m),
              (x.hp = T),
              (x.mp = g),
              (x.hpMax = y),
              (x.mpMax = S),
              (x.buddyType = d));
            var D = void 0;
            D =
              x.buddyType == pb.BuddyType.SAILOR
                ? L["default"].getProxy(w.ModName.Sailing, w.ProxyType.Sailing)
                : L["default"].getProxy(w.ModName.Buddy, w.ProxyType.Buddy);
            var B = l.toNumber(),
              G = D.buddys[B];
            if (G)
              return (
                (x.autoSkillID_Initiative = G.autoSkillID_Initiative),
                (x.autoSkillID = G.autoSkillID),
                (x.skillList = G.skillList),
                x
              );
          }
          var U = E["default"].myPlayer;
          if (null != U && U.getId() == p) {
            if (c == u.MODEL_TYPE.TYPE_PET) {
              var k = void 0,
                V = e.getInt();
              return (
                t == n["default"].PET_PK ||
                V > 0 ||
                t == n["default"].FINAL_BOSS
                  ? ((k = new v["default"](p)),
                    v["default"].fromBytesDetail(e, k),
                    V > 0 &&
                      ((k.ownerid = V),
                      (k.isLegionPet = !0),
                      (k.hpMax = y),
                      (k.mpMax = S)))
                  : (k = U.getPet()),
                null == k
                  ? null
                  : ((k.position = f),
                    (k.bStatus = m),
                    (k.hp = T),
                    (k.mp = g),
                    k)
              );
            }
            if (c == u.MODEL_TYPE.TYPE_MERCENARY) {
              var H = U.getMercenaryById(A);
              if (null == H) return null;
              if (0 == C && ((H = H.getPet()), null == H)) return null;
              H.position = f;
              var F = H.getClone();
              return (
                (F.worldMer = H),
                (F.position = f),
                (F.bStatus = m),
                (F.hp = T),
                (F.mp = g),
                F
              );
            }
            if (c == u.MODEL_TYPE.TYPE_LEGION) {
              var V = e.getInt(),
                Y = L["default"].getProxy(w.ModName.Legion, w.ProxyType.Legion)
                  .playLegionDataMap[V];
              if (!Y) return;
              var W = Y.cloneLegion();
              return (
                (W.position = f),
                (W.bStatus = m),
                (W.hp = T),
                (W.mp = g),
                (W.hpMax = y),
                (W.mpMax = S),
                (W.ownerid = p),
                W
              );
            }
            ((U.position = f), (U.bStatus = m), (U.hp = T), (U.mp = g));
            var K = L["default"].getProxy(
                w.ModName.CampWar,
                w.ProxyType.CampWar,
              ),
              j = L["default"].getProxy(w.ModName.Sailing, w.ProxyType.Sailing);
            return (
              t == n["default"].MTRADE_BATTLE && (j.isSailingWarPVP = !0),
              (K.isCampWarPVP || j.isSailingWarPVP) &&
                ((U.crossHp = T),
                (U.crossMp = g),
                (U.crossHpMax = y),
                (U.crossMpMax = S)),
              U
            );
          }
          var q = new I["default"]();
          return (
            q.setType(c),
            q.setId(p),
            q.setName(h),
            (q.position = f),
            (q.hp = T),
            (q.hpMax = y),
            (q.mp = g),
            (q.mpMax = S),
            (q.bStatus = m),
            q.setIcon1(i),
            q.setIcon2(o),
            q.setIcon3(a),
            (q.bornStatus = R),
            (q.keepout_atk_time = O),
            (q.formationSkill = P),
            q.setIconpet1(M),
            q
          );
        }),
        (t.prototype.processBattleUpdate = function (e) {
          var t = e.body,
            i = t.getByte(),
            o = a["default"].ins.battle;
          if (null != o) {
            var r = a["default"].ins.battleAni;
            if (null != r) {
              if ((r.setTag(n["default"].TAG_REMOTE_SEND_WAITING, !1), 0 > i))
                return void g["default"].alertMessage(
                  t.getString(),
                  p.GameText.getText(p.GameText.TI_ERROR),
                );
              if (0 == i) {
                var l = t.getByte();
                if (l != n["default"].BATTLE_STATUS_FINISH) {
                  var u = t.getInt();
                  return void (o.waitStatus = u);
                }
              }
              var _ = t.getByte(),
                d = t.getByte(),
                h = t.getInt(),
                f = t.getInt();
              (o.setBattleResult(_),
                (o.round = d),
                (o.roundEndTime = S["default"].timer.serverTime + h),
                (o.waitStatus = f),
                o.setRemoteWaiting(!1));
              for (
                var T =
                    (L["default"].getProxy(
                      w.ModName.Sailing,
                      w.ProxyType.Sailing,
                    ),
                    t.getByte()),
                  y = 0;
                T > y;
                y++
              ) {
                var A = t.getByte(),
                  C = t.getInt(),
                  P = t.getInt(),
                  R = t.getLong(),
                  N = t.getInt(),
                  M = t.getInt(),
                  b = t.getString(),
                  x = o.getPlayerByPos(A);
                if (null != x) {
                  x instanceof I["default"] && (x.message = b);
                  var D = o.getType() == n["default"].MTRADE_BATTLE && 25 == A;
                  if (
                    (D
                      ? ((x.crossHp = C),
                        (x.crossMp = P),
                        L["default"].sendNt(
                          O.MainEvent.ON_PLAYER_ATTR_UPDATE,
                          c.ModelConst.HP,
                        ))
                      : ((x.hp = C), (x.mp = P)),
                    o.getType() == n["default"].FINAL_BOSS &&
                      x instanceof v["default"])
                  ) {
                    var B = E["default"].myPlayer.getPet();
                    B &&
                      ((B.hpDisplay = B.hp = C),
                      (B.mpDisplay = B.mp = P),
                      L["default"].sendNt(O.MainEvent.ON_PET_ATTR_UPDATE));
                  }
                  ((x.bStatus = R),
                    x.setBattleIntValue(N),
                    (x.keepout_atk_time = M));
                }
              }
              for (var G = t.getByte(), y = 0; G > y; y++) {
                var U = m["default"].fromBytes(t.getByteArray());
                o.addAniControl(U);
              }
              if ((r.makeBattleAni(), _ != n["default"].RESULT_NONE)) {
                r.updateMercenaryHpMP();
                var k = t.getBoolean();
                if (k) {
                  var V = t.getByte();
                  if (V == n["default"].PK) {
                    var H = t.getInt(),
                      F = t.getInt(),
                      Y = E["default"].myPlayer;
                    null != Y && ((Y.Pkwincount = H), (Y.Pklosecount = F));
                  } else
                    (this.parseBattleNormalReward(t),
                      s["default"].processMissionNPCStatus(t));
                }
                var W = t.getBoolean();
                if (0 == W) {
                  var Y = E["default"].myPlayer;
                  null != Y && (Y.power = -1);
                }
                var K = t.getBoolean();
                if (0 == K) {
                  var Y = E["default"].myPlayer;
                  null != Y && (Y.countrypowerValue = 0);
                }
                (o.getType() == n["default"].FINAL_BOSS &&
                  (a["default"].ins.winData.damage = t.getInt()),
                  s["default"].processMyMercenaryCheck(t),
                  E["default"].handleMyPetLife(),
                  E["default"].handleMyPlayerDurability(!1, !0),
                  g["default"].updateWorldPlayerInfoUI(),
                  (a["default"].ins.winData.battleType = o.getType()),
                  (a["default"].ins.isGotResult = !0));
              }
            }
          }
        }),
        (t.prototype.onLocalBattleTest = function (e) {
          var t = e.body;
          try {
            for (
              var i = t.getInt(),
                o = ((i - 8) / 2) | 0,
                n =
                  (t.getInt(),
                  t.getInt(),
                  t.getInt(),
                  t.getInt(),
                  t.getInt(),
                  t.getInt(),
                  0),
                a = 0,
                r = 0;
              o > r;
              r++
            )
              ((n = t.getInt()), (a = t.getInt()));
            (t.getInt(), t.getInt());
          } catch (s) {}
        }),
        (t.prototype.processLocalBattleReward = function (e) {
          var t = e.body,
            i = t.getByte();
          if (0 == i) {
            (console.error("战斗验证失败：", i),
              (s["default"].worldReflashType = s["default"].WORLD_REFLASH_ALL));
            var o = E["default"].toBattleNpcId;
            if (void 0 != o) {
              var r = E["default"].getNpcByID(o);
              r && r.comeOutCounter > 4e3 && (r.comeOutCounter = 4e3);
            }
          }
          if (0 > i) {
            var l = t.getString();
            return (
              d["default"].confirm(l),
              (s["default"].worldReflashType = s["default"].WORLD_REFLASH_ALL),
              void a["default"].ins.exitBattle()
            );
          }
          E["default"].toBattleNpcId = void 0;
          var u;
          i == n["default"].RESULT_RIGHT_WIN &&
            (this.parseBattleNormalReward(t),
            s["default"].processMissionNPCStatus(t),
            (u = !0));
          var _ = t.getBoolean();
          if (0 == _) {
            var p = E["default"].myPlayer;
            null != p && (p.power = -1);
          }
          s["default"].processMyMercenaryCheck(t);
          var c = t.getBoolean();
          a["default"].ins.isChangeMap = c;
          var h = t.getBoolean();
          if (0 == h) {
            var p = E["default"].myPlayer;
            null != p && (p.countrypowerValue = 0);
          }
          (E["default"].handleMyPetLife(),
            E["default"].handleMyPlayerDurability(!1, !1),
            g["default"].updateWorldPlayerInfoUI(),
            (a["default"].ins.isGotResult = !0));
        }),
        (t.prototype.parseBattleNormalReward = function (e) {
          var t = E["default"].myPlayer;
          if (null != t) {
            var i = a["default"].ins.winData;
            i.clear();
            var o = new f["default"](),
              n = e.getInt();
            (n > 0 &&
              o.append(
                h["default"].makeColorString(
                  p.GameText.getMoneyText(c.ModelConst.MONEY3) + " +" + n,
                  T.Tool.COLOR_YELLOW,
                ) + "  ",
              ),
              (i.gainMoney = n),
              s["default"].processUpLevelMsg(e, t, o, i));
            var r = e.getBoolean(),
              u = e.getBoolean();
            1 == u && this.parsePetReward(e, E["default"].myPlayer.getPet(), o);
            var _ = e.getByte();
            if (_ > 0) {
              for (
                var d = 0, y = new Array(_), g = new Array(_), v = 0;
                _ > v;
                v++
              )
                ((y[v] = e.getShort()), (g[v] = e.getByte()), (d += g[v]));
              var S = new f["default"]();
              (t.updateAllKillMission(y, g, S),
                S.toString().trim().length > 0 && o.append(S.toString()),
                d > 0 && t.addValue(c.ModelConst.KILL_COUNT, d));
            }
            var I = e.getBoolean();
            if (I) {
              var m = E["default"].getEscort(),
                C = e.getByte();
              (C == A["default"].NEWESCORT
                ? P["default"].processEscrotRefreshPosMsg(e, m)
                : C == A["default"].OLDESCORT &&
                  A["default"].processEscrotRefreshPosMsg(e, m),
                s["default"].processEscortEventReword(e));
            }
            (s["default"].processAddItemMsg(
              e,
              l["default"].ADD_ITEM_BATTLE_REWARD,
            ),
              o.append(e.getMsgInfo()),
              this.processAfterBattlePoint(t, o, r),
              (i.missionTips = o.toString()));
          }
        }),
        (t.prototype.parsePetReward = function (e, t, i) {
          var o = e.getInt();
          ((a["default"].ins.winData.petExp = o),
            null != i &&
              o > 0 &&
              i.append(
                h["default"].makeColorString(
                  p.GameText.STR_PET_EXP_ADD + o,
                  T.Tool.COLOR_YELLOW,
                ) + "\n",
              ),
            null != t && t.addValue(c.ModelConst.EXP, o));
          var n = e.getByte();
          if (n > 0) {
            var r = e.getShort(),
              s = e.getByte();
            null != i &&
              s > 0 &&
              i.append(
                h["default"].makeColorString(
                  p.GameText.STR_PET_GROW_LV + s,
                  T.Tool.COLOR_YELLOW,
                ) + "\n",
              );
            var l = 0,
              u = 0,
              d = 0,
              f = 0,
              E = 0;
            s > 0 &&
              ((l = e.getShort()),
              (u = e.getShort()),
              (d = e.getShort()),
              (f = e.getShort()),
              (E = e.getShort()));
            for (
              var g = e.getInt(),
                v = e.getInt(),
                S = e.getByte(),
                I = e.getByte(),
                m = new y["default"](),
                A = 0;
              I > A;
              A++
            )
              m.addElement(_["default"].fromBytes(e));
            if (null != t) {
              (t.addValue(c.ModelConst.LEVEL, n),
                t.addValue(c.ModelConst.SP, r),
                t.addValue(c.ModelConst.PET_GROW_LEVEL, s),
                t.addValue(c.ModelConst.STR, l),
                t.addValue(c.ModelConst.CON, u),
                t.addValue(c.ModelConst.AGI, d),
                t.addValue(c.ModelConst.ILT, f),
                t.addValue(c.ModelConst.WIS, E),
                t.addValue(c.ModelConst.SET_EXP, g),
                t.addValue(c.ModelConst.SET_EXPMAX, v),
                (t.cp = S));
              for (var A = 0; A < m.size(); A++) {
                var C = m.elementAt(A);
                if (null != C) {
                  t.learnSkill(C);
                }
              }
              t.resumeHPMP();
            }
          }
        }),
        (t.prototype.processAfterBattlePoint = function (e, t, i) {
          if (null != e && null != t) {
            i
              ? t.append(
                  h["default"].makeColorString(
                    p.GameText.STR_BAG_FULL,
                    T.Tool.COLOR_RED,
                  ) + "\n",
                )
              : e.bag.countFreePos() < 6 &&
                t.append(
                  h["default"].makeColorString(
                    p.GameText.STR_BAG_WILL_FULL,
                    T.Tool.COLOR_RED,
                  ) + "\n",
                );
            var o = e.get(c.ModelConst.HP);
            (0 >= o || e.get(c.ModelConst.HPMAX) / o > 4) &&
              t.append(
                h["default"].makeColorString(
                  p.GameText.STR_HP_UNDER_QUARTER,
                  T.Tool.COLOR_RED,
                ) + "\n",
              );
          }
        }),
        (t.prototype.doPioneerInfo = function (e, t) {
          var i = new o.Message(pb.EUserProtocol.C2S_PIONEER_INFO),
            n = i.proto;
          ((n.monsterGroupId = t ? t : this.monsterGroupId),
            (n.type = e),
            N["default"].Service.onProto(
              pb.EUserProtocol.S2C_PIONEER_INFO,
              M["default"].alloc(
                this,
                this.onPioneerInfo,
                [n.monsterGroupId],
                !0,
              ),
            ),
            this.sendProto(i));
        }),
        (t.prototype.onPioneerInfo = function (e, t) {
          var i = this,
            o = t.body;
          this.monsterGroupId = e;
          for (var n = o.proto, a = 0; a < n.infos.length; a++) {
            var r = n.infos[a];
            r.players.sort(function (e, t) {
              return e.actorId - t.actorId;
            });
          }
          (n.infos.sort(function (e, t) {
            var o = i.getLevelMax(e.players),
              n = i.getLevelMax(t.players);
            return o == n ? e.round - t.round : o - n;
          }),
            this.sendNt(O.BattleEvent.BATTLE_RECORD_INFO, n));
        }),
        (t.prototype.getLevelMax = function (e) {
          for (var t = 0, i = 0; i < e.length; i++) {
            var o = e[i];
            t = Math.max(t, o.level);
          }
          return t;
        }),
        Object.defineProperty(t.prototype, "monsterGroupId", {
          get: function () {
            return this._monsterGroupId;
          },
          set: function (e) {
            (0 == e && (this.listScroll = 0), (this._monsterGroupId = e));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.onBattleGroupId = function (e) {
          var t = e.body,
            i = t.proto;
          this.monsterGroupId = i.monsterGroupId;
        }),
        (t.prototype.onBattleRePlay = function () {
          this.doBattlePlay(this.battlePlayId, this.type);
        }),
        (t.prototype.doBattlePlay = function (e, t) {
          ((this.battlePlayId = e), (this.type = t));
          var i = new o.Message(l["default"].CG_PIONEER_BATTLE_REPLAY);
          (i.putInt(this.monsterGroupId),
            i.putInt(t),
            i.putLong(e),
            this.sendProto(i));
        }),
        (t.prototype.onBattlePlay = function (e) {
          var t = e.body,
            i = t.getByte();
          return 0 > i
            ? void g["default"].alertMessage(t.getString())
            : void this.dealRePlayBattle(t);
        }),
        (t.prototype.dealRePlayBattle = function (e) {
          var t = (e.getInt(), e.getByte());
          t = n["default"].REMOTE;
          for (
            var i = e.getByte(),
              o = e.getByte(),
              r = e.getInt(),
              s = (e.getInt(), e.getInt()),
              l = Array(n["default"].MAX_POS),
              u = e.getByte(),
              _ = 0;
            u > _;
            _++
          ) {
            var d = this.parseRePlayBattleModel(e);
            null != d && (l[d.position] = d);
          }
          var p = C["default"].createRemoteBattle(0, l, null);
          (p.setType(t),
            p.setBattleResult(i),
            (p.round = o),
            (p.roundEndTime = S["default"].timer.serverTime + r),
            (p.waitStatus = 0),
            (p.nextBattleGroupID = s),
            p.setRemoteWaiting(!1),
            a["default"].ins.enterBattle(p));
        }),
        (t.prototype.cgOverRoundReq = function () {
          var e = new o.Message(l["default"].CG_OVER_ROUND);
          this.sendProto(e);
        }),
        (t.prototype.cgOverRoundRes = function (e) {
          E["default"].autoFollow &&
            L["default"].sendNt(O.BattleEvent.AUTO_SKIN_BATTLE);
        }),
        (t.prototype.doBattleRePlayUpdate = function (e) {
          var t = new o.Message(l["default"].CG_PIONEER_REPLAY_UPDATE);
          (t.putInt(this.monsterGroupId),
            t.putInt(this.type),
            t.putLong(this.battlePlayId),
            t.putByte(e),
            this.sendProto(t));
        }),
        (t.prototype.onBattleRePlayUpdate = function (e) {
          var t = e.body,
            i = a["default"].ins.battle;
          if (null != i) {
            var o = a["default"].ins.battleAni;
            if (null != o) {
              o.setTag(n["default"].TAG_REMOTE_SEND_WAITING, !1);
              var r = t.getByte(),
                s = t.getByte(),
                l = t.getInt();
              t.getInt();
              (i.setBattleResult(r),
                (i.round = s),
                (i.roundEndTime = S["default"].timer.serverTime + l),
                (i.waitStatus = 0),
                i.setRemoteWaiting(!1));
              for (var u = t.getByte(), _ = 0; u > _; _++) {
                var d = t.getByte(),
                  p = t.getInt(),
                  c = t.getInt(),
                  h = t.getLong(),
                  f = t.getInt(),
                  T = t.getInt(),
                  E = i.getPlayerByPos(d);
                null != E &&
                  ((E.hp = p),
                  (E.mp = c),
                  (E.bStatus = h),
                  E.setBattleIntValue(f),
                  (E.keepout_atk_time = T));
              }
              for (var y = t.getByte(), _ = 0; y > _; _++) {
                var g = m["default"].fromBytes(t.getByteArray());
                i.addAniControl(g);
              }
              (o.makeBattleAni(),
                r != n["default"].RESULT_NONE &&
                  ((a["default"].ins.isGotResult = !0),
                  console.log("开荒者战斗记录结束战斗")));
            }
          }
        }),
        (t.prototype.parseRePlayBattleModel = function (e) {
          var t = e.getInt(),
            i = e.getByte(),
            o = e.getString(),
            n = e.getByte(),
            a = e.getInt(),
            r = e.getInt(),
            s = e.getInt(),
            l = e.getInt(),
            d = e.getLong();
          (0 == l && (l = s), 0 == r && (r = a));
          var p, c, h;
          switch (i) {
            case u.MODEL_TYPE.TYPE_MONSTER:
            case u.MODEL_TYPE.TYPE_NPC:
            case u.MODEL_TYPE.TYPE_PET:
              p = e.getLong();
              break;
            default:
              ((p = e.getLong()), (c = e.getLong()), (h = e.getLong()));
          }
          var f = -1,
            T = !1;
          i == u.MODEL_TYPE.TYPE_MERCENARY &&
            ((f = e.getShort()), (T = e.getBoolean()));
          var E,
            y = e.getLong(),
            g = e.getInt(),
            v = e.getBoolean();
          v && (E = _["default"].fromByteFormationSkill(e));
          var S = e.getShort(),
            m = new I["default"]();
          return (
            m.setType(i),
            m.setId(t),
            m.setName(o),
            (m.position = n),
            (m.hp = a),
            (m.hpMax = r),
            (m.mp = s),
            (m.mpMax = l),
            (m.bStatus = d),
            m.setIcon1(p),
            m.setIcon2(c),
            m.setIcon3(h),
            (m.bornStatus = y),
            (m.keepout_atk_time = g),
            (m.formationSkill = E),
            m.setIconpet1(S),
            m
          );
        }),
        t
      );
    })(r["default"]);
  t["default"] = x;
});
