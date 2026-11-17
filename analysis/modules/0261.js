(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(43),
    n = i(22),
    a = i(11),
    r = i(2),
    s = i(37),
    l = i(18),
    u = i(19),
    _ = i(12),
    d = i(1),
    p = i(5),
    c = i(30),
    h = i(8),
    f = i(10),
    T = i(31),
    E = i(0),
    y = i(421),
    g = i(57),
    v = i(65),
    S = i(15),
    I = i(4),
    m = i(113),
    A = i(74),
    C = i(28),
    P = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.npc_type = []),
          (t._isEnergyRed = !1),
          (t._isEnergyInfo = !1),
          (t.playerHp = 0),
          (t.playerMp = 0),
          (t.petHp = 0),
          (t.petMp = 0),
          t
        );
      }
      return (
        __extends(t, e),
        (t.prototype.onConnectLost = function () {
          e.prototype.onConnectLost.call(this);
        }),
        (t.prototype.onEnter = function () {
          var t = p["default"].myPlayer;
          (t.GenreIsOn() && this.doMainSkillTree(),
            (this._data.PlayerVo = t),
            e.prototype.onEnter.call(this));
        }),
        Object.defineProperty(t.prototype, "data", {
          get: function () {
            return this._data;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.initialize = function () {
          e.prototype.initialize.call(this);
          var t = this;
          ((t._data = new y.RoleModel()),
            t.onProto(
              u["default"].CG_ACTOR_ADDATTRIBUTE,
              t.onActorAddAttribuite,
              t,
            ),
            t.onProto(u["default"].CG_SKILL_UPDATE, t.onSkillUpdate, t),
            t.onProto(
              u["default"].CG_ACTOR_COMBATPOWER,
              t.onActorCombatpower,
              t,
            ),
            t.onProto(u["default"].CG_FORMATION, t.onFarmationUpdate, t),
            t.onProto(
              pb.EUserProtocol.S2C_TALENT_LIST,
              t.onTalentListCallBack,
              t,
            ),
            t.onProto(
              pb.EUserProtocol.S2C_SKILLTREE_LIST,
              t.onGetSkillTreeList,
              t,
            ),
            t.onProto(
              pb.EUserProtocol.S2C_CHOICE_SKILLTREE,
              t.onGetChoiceSkillTree,
              t,
            ),
            t.onProto(
              pb.EUserProtocol.S2C_SKILLTREE_RESET,
              t.onGetSkillTreeReset,
              t,
            ),
            t.onProto(
              pb.EUserProtocol.S2C_SKILLTREE_LEARN,
              t.onGetSkillTreeLearn,
              t,
            ),
            t.onProto(
              pb.EUserProtocol.S2C_SKILLTREE_GIVEUP,
              t.onSkillTreeGiveUp,
              t,
            ),
            t.onProto(
              pb.EUserProtocol.S2C_MAIN_SKILLTREE,
              t.onMainSkillTree,
              t,
            ),
            t.onProto(pb.EUserProtocol.S2C_SKILLTREE_UP, t.onSkillTreeUp, t),
            t.onProto(u["default"].CG_SCENE_WORLDDATA, t.onPlayerRefesh, t),
            t.onProto(pb.EUserProtocol.S2C_ARTIFACT_INFO, t.onArtifact, t),
            t.onProto(pb.EUserProtocol.S2C_ARTIFACT_UP, t.onArtifactLevel, t),
            t.onProto(
              pb.EUserProtocol.S2C_ARTIFACT_SKILL,
              t.onArtifactSkill,
              t,
            ),
            t.onProto(
              pb.EUserProtocol.S2C_ARTIFACT_SKILL_UP,
              t.onArtifactSkillLevel,
              t,
            ),
            t.onProto(
              pb.EUserProtocol.S2C_ARTIFACT_DECORATE,
              t.onArtifactAcc,
              t,
            ),
            t.onProto(
              pb.EUserProtocol.S2C_ARTIFACT_DECORATE_UP,
              t.onArtifactAccLevel,
              t,
            ),
            t.onProto(
              pb.EUserProtocol.S2C_ENERGY_ESSENCE_INFO,
              t.onEnergyInfo,
              t,
            ),
            t.onProto(
              pb.EUserProtocol.S2C_ENERGY_ESSENCE_UPDATE,
              t.onEnergyUpdate,
              t,
            ));
        }),
        (t.prototype.onPlayerRefesh = function () {
          this.sendNt(r.RoleEvent.ROLE_DATA_REFRESH);
        }),
        (t.prototype.onFarmationUpdate = function (e) {
          var t = e.body;
          g["default"].doUpdateFormation(t);
        }),
        (t.prototype.createAttrAdd = function (e, i) {
          for (var n = [], r = 0, s = 0; s < e.length; s++)
            if (e[s] != i[s]) {
              var u = [];
              (u.push(),
                (u[0] = _.ModelConst.STR + s),
                (u[1] = i[s] - e[s]),
                u[1] < 0 && (r += -u[1]),
                n.push(u));
            }
          if (!(n.length <= 0)) {
            var p = new c["default"]();
            if (r > 0) {
              p.append(
                h.Tool.manageStringList(f.GameText.STR_NEED_MONEY_ARRAY, [
                  T.ModelVo.getMoneyText(t.DEL_ARRTIBUTE[0]) +
                    t.DEL_ARRTIBUTE[1] * r,
                  t.DEL_ARRTIBUTE[2] + "",
                ]),
              );
              var E = h.Tool.manageString(
                f.GameText.STR_CHANGE_ATT_ASK,
                p.toString(),
              );
              return (
                d["default"].alertMessage(
                  E,
                  f.GameText.getText(f.GameText.TI_WARM_SHOW),
                  a["default"].alloc(this, this.createAttrAddForPoint, [r, n]),
                ),
                !0
              );
            }
            var y = l["default"].createAttrAddMessage(n);
            return (o["default"].Service.sendProto(y), !1);
          }
        }),
        (t.prototype.createAttrAddForPoint = function (e, i) {
          return __awaiter(this, void 0, Promise, function () {
            var n, a, r, s;
            return __generator(this, function (u) {
              switch (u.label) {
                case 0:
                  return (
                    (n = [t.DEL_ARRTIBUTE[0], t.DEL_ARRTIBUTE[1] * e]),
                    (a = p["default"].getMoneyArrayValue(
                      n,
                      t.DEL_ARRTIBUTE[2],
                    )),
                    [4, h.Tool.checkEnoughMoney(a[0], a[1], a[2], !0)]
                  );
                case 1:
                  return (
                    (r = u.sent()),
                    r
                      ? ((s = l["default"].createAttrAddMessage(i)),
                        o["default"].Service.sendProto(s),
                        d["default"].hideView(
                          E.ModName.Main,
                          E.MainViewType.Alert,
                        ),
                        [2, !1])
                      : [2, !0]
                  );
              }
            });
          });
        }),
        (t.prototype.onActorAddAttribuite = function (e) {
          var t = e.body,
            i = t.getByte();
          if (0 != i) {
            var o = t.getString();
            return void d["default"].alertMessage(o);
          }
          var n = p["default"].myPlayer;
          null != n &&
            ((n.cp = t.getShort()),
            (n.hp = t.getInt()),
            (n.mp = t.getInt()),
            (n.str = t.getShort()),
            (n.con = t.getShort()),
            (n.agi = t.getShort()),
            (n.ilt = t.getShort()),
            (n.wis = t.getShort()),
            (n.money1 = t.getInt()),
            (n.money2 = t.getInt()),
            (n.money3 = t.getInt()),
            n.addValue(_.ModelConst.COMBATPOINT, t.getInt()),
            this.sendNt(r.RoleEvent.ROLE_ATTR_UPDATE));
        }),
        (t.prototype.onSkillUpdate = function (e) {
          var t = e.body;
          if (null != t) {
            var i = p["default"].myPlayer;
            if (null != i) {
              i.skillList = l["default"].processDataPlayerSkillMsg(t, !0);
              var o = t.getByte();
              i.autoSkillID = [];
              for (var n = 0; o > n; n++) i.autoSkillID[n] = t.getShort();
              i.autoSkillID_Initiative = t.getShort();
            }
          }
        }),
        (t.prototype.onActorCombatpower = function (e) {
          var t = e.body,
            i = p["default"].myPlayer;
          (i.addValue(_.ModelConst.COMBATPOINT, t.getInt()),
            (i.ignore_back = t.getInt()),
            (i.ignore_magic_back = t.getInt()),
            (i.ignore_block = t.getInt()),
            (i.ignore_insight = t.getInt()),
            (i.ignore_wil = t.getInt()),
            (i.ignore_touch = t.getInt()),
            this.sendNt(r.RoleEvent.ROLE_COMBATPOWER));
        }),
        (t.prototype.doTalentList = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_TALENT_LIST);
          this.sendProto(e);
        }),
        (t.prototype.onTalentListCallBack = function (e) {
          var t = e.body,
            i = t.proto;
          (this.data.PlayerVo.isMyPlayer
            ? v["default"].ins.setData(pb.EUserProtocol.S2C_TALENT_LIST, i)
            : (v["default"].ins.setData(
                pb.EUserProtocol.S2C_TALENT_LIST +
                  I["default"].MODULEDATA_ISUSER,
                i,
              ),
              this.sendNt(r.RoleEvent.ON_USER_MESSAGE_NUM)),
            this.sendNt(r.RoleEvent.ROLE_TALENT_UPDATA));
        }),
        (t.prototype.doTalentLearn = function (e, t) {
          var i = new n.Message(pb.EUserProtocol.C2S_TALENT_LEARN),
            r = i.proto;
          ((r.rankId = e.dataNext.rankId),
            (r.rankLevel = e.dataNext.level),
            o["default"].Service.onProto(
              pb.EUserProtocol.S2C_TALENT_LEARN,
              a["default"].alloc(this, this.onTalentLearnCallBack, [e, t], !0),
            ),
            this.sendProto(i));
        }),
        (t.prototype.onTalentLearnCallBack = function (e, t, i) {
          var o = i.body,
            n = o.proto;
          (e.nextData(n.nextTalent),
            this.addAttr(n.attrib),
            this.replaceTalent(n.nextTalent, e.data.rankId),
            S.Tips.show("天赋升级成功"),
            l["default"].createWorldDataReflashMsg(),
            this.sendNt(r.RoleEvent.ROLE_TALENT_LENRN, [t]));
        }),
        (t.prototype.replaceTalent = function (e, t) {
          var i = v["default"].ins.getData(pb.EUserProtocol.S2C_TALENT_LIST);
          if (i) {
            for (var o, n = i.nextTalents.length - 1; n >= 0; n--)
              if (i.nextTalents[n].rankId == t) {
                ((o = i.nextTalents[n]), i.nextTalents.splice(n, 1));
                break;
              }
            if ((e && i.nextTalents.push(e), o)) {
              if (i.talents.length <= 0) return void i.talents.push(o);
              for (var n = 0; n < i.talents.length; n++) {
                if (i.talents[n].rankId == o.rankId) {
                  i.talents[n] = o;
                  break;
                }
                if (n == i.talents.length - 1) {
                  i.talents.push(o);
                  break;
                }
              }
            }
          }
        }),
        (t.prototype.addAttr = function (e) {
          for (var t = p["default"].myPlayer, i = 0; i < e.length; i++) {
            var o = e[i];
            t.addValue(o.k, o.v);
          }
        }),
        (t.prototype.getRoleSkill = function () {
          l["default"].createWorldDataMessage(I["default"].DATA_PLAYER_SKILL);
        }),
        (t.prototype.doSkillTreeList = function (e) {
          var t = this,
            i = new n.Message(pb.EUserProtocol.C2S_SKILLTREE_LIST),
            o = i.proto;
          ((o.id = e), t.sendProto(i));
        }),
        (t.prototype.onGetSkillTreeList = function (e) {
          var t = e.body,
            i = t.proto;
          (this.data.initSkillTree(i),
            this.sendNt(r.RoleEvent.ON_USER_MESSAGE_NUM));
        }),
        (t.prototype.doChoiceSkillTree = function (e) {
          var t = new n.Message(pb.EUserProtocol.C2S_CHOICE_SKILLTREE),
            i = t.proto;
          ((i.treeId = e), this.sendProto(t));
        }),
        (t.prototype.onGetChoiceSkillTree = function (e) {
          var t = e.body,
            i = t.proto;
          (this.data.updateSkillTreeId(i),
            this.sendNt(r.RoleEvent.ROLE_GENRE_POINT));
        }),
        (t.prototype.doSkillTreeReset = function () {
          var e = this,
            t = new n.Message(pb.EUserProtocol.C2S_SKILLTREE_RESET);
          t.proto;
          e.sendProto(t);
        }),
        (t.prototype.onGetSkillTreeReset = function (e) {
          var t = this,
            i = e.body;
          i.proto;
          (t.data.resetSkillGenre(),
            l["default"].createWorldDataReflashPlayerMsg());
        }),
        (t.prototype.doSkillTreeLearn = function (e) {
          var t = this,
            i = new n.Message(pb.EUserProtocol.C2S_SKILLTREE_LEARN),
            o = i.proto;
          ((o.skillId = e), t.sendProto(i));
        }),
        (t.prototype.onGetSkillTreeLearn = function (e) {
          var t = e.body,
            i = t.proto;
          (this.data.upLevelSkill(i),
            l["default"].createWorldDataReflashPlayerMsg());
        }),
        (t.prototype.doSkillTreeGiveUp = function (e, t) {
          var i = this,
            o = new n.Message(pb.EUserProtocol.C2S_SKILLTREE_GIVEUP),
            a = o.proto;
          ((a.skillId = e), (a.level = t), i.sendProto(o));
        }),
        (t.prototype.onSkillTreeGiveUp = function (e) {
          var t = e.body,
            i = t.proto;
          (this.data.giveUpSkill(i),
            l["default"].createWorldDataReflashPlayerMsg());
        }),
        (t.prototype.doMainSkillTree = function () {
          var e = this,
            t = new n.Message(pb.EUserProtocol.C2S_MAIN_SKILLTREE);
          t.proto;
          e.sendProto(t);
        }),
        (t.prototype.onMainSkillTree = function (e) {
          var t = this,
            i = e.body,
            o = i.proto;
          (t._data.initSkillGenre(o),
            0 != o.treeId &&
              t._data.PlayerVo.isMyPlayer &&
              this.doSkillTreeList(o.treeId),
            this.sendNt(r.RoleEvent.ROLE_GENRE_POINT),
            this.sendNt(r.RoleEvent.ON_USER_MESSAGE_NUM));
        }),
        (t.prototype.doSkillTreeUp = function (e) {
          var t = this,
            i = new n.Message(pb.EUserProtocol.C2S_SKILLTREE_UP),
            o = i.proto;
          ((o.up = e), t.sendProto(i));
        }),
        (t.prototype.onSkillTreeUp = function (e) {
          var t = this,
            i = e.body,
            o = i.proto;
          t.data.updateSkillGenreIsUp(o);
        }),
        (t.prototype.doArtifactAll = function (e) {
          (void 0 === e && (e = !0),
            e
              ? ((this.artifactAll = 0),
                this.doArtifact(),
                this.doArtifactSkill(),
                this.doArtifactAcc())
              : this.upArtifactRed());
        }),
        (t.prototype.upArtifactRed = function (e) {
          (void 0 === e && (e = !0),
            (this.artifactAll = 0),
            this.onArtifactAll(0, e),
            this.onArtifactAll(1, e),
            this.onArtifactAll(2, e));
        }),
        (t.prototype.onArtifactAll = function (e, t, i) {
          (void 0 === t && (t = !0),
            void 0 === i && (i = !0),
            this.artifactAll++);
          var o, n, a, s, l, u, _;
          switch (e) {
            case 0:
              u = i
                ? pb.EUserProtocol.S2C_ARTIFACT_INFO
                : pb.EUserProtocol.S2C_ARTIFACT_INFO +
                  I["default"].MODULEDATA_ISUSER;
              var d = v["default"].ins.getData(u);
              (m.RoleGodData.roleGodRed[u] ||
                (m.RoleGodData.roleGodRed[u] = {}),
                i && d.info.lvCost.length > 0
                  ? (-1 ==
                      m.RoleGodData.itemIds.indexOf(d.info.lvCost[0].itemId) &&
                      m.RoleGodData.itemIds.push(d.info.lvCost[0].itemId),
                    (o = p["default"].myPlayer.bag.getItemNumByID(
                      d.info.lvCost[0].itemId,
                    )),
                    (m.RoleGodData.roleGodRed[u][0] =
                      o >= d.info.lvCost[0].itemCount))
                  : i && (m.RoleGodData.roleGodRed[u][0] = !1));
              break;
            case 1:
              ((u = i
                ? pb.EUserProtocol.S2C_ARTIFACT_SKILL
                : pb.EUserProtocol.S2C_ARTIFACT_SKILL +
                  I["default"].MODULEDATA_ISUSER),
                (_ = i
                  ? pb.EUserProtocol.S2C_ARTIFACT_INFO
                  : pb.EUserProtocol.S2C_ARTIFACT_INFO +
                    I["default"].MODULEDATA_ISUSER));
              var c = v["default"].ins.getData(u);
              m.RoleGodData.roleGodRed[u] || (m.RoleGodData.roleGodRed[u] = {});
              var h = v["default"].ins.getData(_);
              ((l = h ? h.info.stage : 0),
                c.info.forEach(function (e) {
                  (i && l >= e.type && e.lvCost.length > 0
                    ? (-1 ==
                        m.RoleGodData.itemIds.indexOf(e.lvCost[0].itemId) &&
                        m.RoleGodData.itemIds.push(e.lvCost[0].itemId),
                      (o = p["default"].myPlayer.bag.getItemNumByID(
                        e.lvCost[0].itemId,
                      )),
                      (m.RoleGodData.roleGodRed[u][e.type] =
                        o >= e.lvCost[0].itemCount))
                    : i && (m.RoleGodData.roleGodRed[u][e.type] = !1),
                    (n = Math.max(e.attribute.length, e.attributeNext.length)));
                  for (var t = 0; n > t; t++)
                    ((a = e.attribute[t]),
                      (s = e.attributeNext[t]),
                      s
                        ? a
                          ? m.RoleGodData.setPower(i, u, e.type, t, a.k, a.v)
                          : m.RoleGodData.setPower(i, u, e.type, t, s.k, 0)
                        : m.RoleGodData.setPower(i, u, e.type, t, a.k, a.v));
                }));
              break;
            case 2:
              u = i
                ? pb.EUserProtocol.S2C_ARTIFACT_DECORATE
                : pb.EUserProtocol.S2C_ARTIFACT_DECORATE +
                  I["default"].MODULEDATA_ISUSER;
              var f = v["default"].ins.getData(u);
              (m.RoleGodData.roleGodRed[u] ||
                (m.RoleGodData.roleGodRed[u] = {}),
                f.info.forEach(function (e) {
                  (i && e.lvCost.length > 0
                    ? (-1 ==
                        m.RoleGodData.itemIds.indexOf(e.lvCost[0].itemId) &&
                        m.RoleGodData.itemIds.push(e.lvCost[0].itemId),
                      (o = p["default"].myPlayer.bag.getItemNumByID(
                        e.lvCost[0].itemId,
                      )),
                      (m.RoleGodData.roleGodRed[u][e.type] =
                        o >= e.lvCost[0].itemCount))
                    : i && (m.RoleGodData.roleGodRed[u][e.type] = !1),
                    (n = Math.max(e.attribute.length, e.attributeNext.length)));
                  for (var t = 0; n > t; t++)
                    ((a = e.attribute[t]),
                      (s = e.attributeNext[t]),
                      s
                        ? a
                          ? m.RoleGodData.setPower(i, u, e.type, t, a.k, a.v)
                          : m.RoleGodData.setPower(i, u, e.type, t, s.k, 0)
                        : m.RoleGodData.setPower(i, u, e.type, t, a.k, a.v));
                }));
          }
          return i
            ? (t &&
                this.artifactAll >= 3 &&
                (this.sendNt(r.RoleEvent.ROLE_ARTIFACT_INFO),
                this.sendNt(r.MainEvent.ON_UPDATE_PLAYER_INFO_UI)),
              void this.sendNt(r.RoleEvent.ROLE_ATTR_UPDATE))
            : void this.sendNt(r.RoleEvent.ON_USER_MESSAGE_NUM);
        }),
        (t.prototype.doArtifact = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_ARTIFACT_INFO);
          this.sendProto(e);
        }),
        (t.prototype.onArtifact = function (e) {
          var t = e.body,
            i = t.proto;
          return this.data.PlayerVo.isMyPlayer
            ? (v["default"].ins.setData(pb.EUserProtocol.S2C_ARTIFACT_INFO, i),
              this.sendNt(r.RoleEvent.ROLE_GOD_INFO, !1),
              void this.onArtifactAll(0))
            : (v["default"].ins.setData(
                pb.EUserProtocol.S2C_ARTIFACT_INFO +
                  I["default"].MODULEDATA_ISUSER,
                i,
              ),
              void this.onArtifactAll(0, !0, !1));
        }),
        (t.prototype.doArtifactLevel = function (e) {
          var t = new n.Message(pb.EUserProtocol.C2S_ARTIFACT_UP),
            i = t.proto;
          ((i.opt = e), this.sendProto(t));
        }),
        (t.prototype.onArtifactLevel = function (e) {
          var t = e.body,
            i = t.proto,
            o = v["default"].ins.getData(pb.EUserProtocol.S2C_ARTIFACT_INFO),
            n = o.info.stage != i.info.stage;
          ((o.info = i.info),
            l["default"].createWorldDataReflashMsg(),
            this.onArtifactAll(0, !1),
            this.onArtifactAll(1, !1),
            S.Tips.show("冶炼成功"),
            this.sendNt(r.RoleEvent.ROLE_GOD_INFO, n));
        }),
        (t.prototype.doArtifactSkill = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_ARTIFACT_SKILL);
          this.sendProto(e);
        }),
        (t.prototype.onArtifactSkill = function (e) {
          var t = e.body,
            i = t.proto;
          return (
            i.info.sort(function (e, t) {
              return e.type - t.type;
            }),
            this.data.PlayerVo.isMyPlayer
              ? (v["default"].ins.setData(
                  pb.EUserProtocol.S2C_ARTIFACT_SKILL,
                  i,
                ),
                this.sendNt(r.RoleEvent.ROLE_GOD_SKILL_INFO),
                void this.onArtifactAll(1))
              : (v["default"].ins.setData(
                  pb.EUserProtocol.S2C_ARTIFACT_SKILL +
                    I["default"].MODULEDATA_ISUSER,
                  i,
                ),
                void this.onArtifactAll(1, !0, !1))
          );
        }),
        (t.prototype.doArtifactSkillLevel = function (e) {
          var t = new n.Message(pb.EUserProtocol.C2S_ARTIFACT_SKILL_UP),
            i = t.proto;
          ((i.type = e), this.sendProto(t));
        }),
        (t.prototype.onArtifactSkillLevel = function (e) {
          for (
            var t = e.body,
              i = t.proto,
              o = v["default"].ins.getData(pb.EUserProtocol.S2C_ARTIFACT_SKILL),
              n = 0;
            n < o.info.length;
            n++
          ) {
            var a = o.info[n];
            if (a.type == i.info.type) {
              o.info[n] = i.info;
              break;
            }
          }
          var s = v["default"].ins.getData(pb.EUserProtocol.S2C_ARTIFACT_INFO);
          ((s.info.power = i.power),
            l["default"].createWorldDataReflashMsg(),
            this.onArtifactAll(1, !1),
            S.Tips.show("升级成功"),
            this.sendNt(r.RoleEvent.ROLE_GOD_SKILL_LIVIL_CALL, i.info));
        }),
        (t.prototype.doArtifactAcc = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_ARTIFACT_DECORATE);
          this.sendProto(e);
        }),
        (t.prototype.onArtifactAcc = function (e) {
          var t = e.body,
            i = t.proto;
          return (
            i.info.sort(function (e, t) {
              return e.type - t.type;
            }),
            this.data.PlayerVo.isMyPlayer
              ? (v["default"].ins.setData(
                  pb.EUserProtocol.S2C_ARTIFACT_DECORATE,
                  i,
                ),
                void this.onArtifactAll(2))
              : (v["default"].ins.setData(
                  pb.EUserProtocol.S2C_ARTIFACT_DECORATE +
                    I["default"].MODULEDATA_ISUSER,
                  i,
                ),
                void this.onArtifactAll(2, !0, !1))
          );
        }),
        (t.prototype.doArtifactAccLevel = function (e) {
          var t = new n.Message(pb.EUserProtocol.C2S_ARTIFACT_DECORATE_UP),
            i = t.proto;
          ((i.type = e), this.sendProto(t));
        }),
        (t.prototype.onArtifactAccLevel = function (e) {
          for (
            var t = e.body,
              i = t.proto,
              o = v["default"].ins.getData(
                pb.EUserProtocol.S2C_ARTIFACT_DECORATE,
              ),
              n = 0;
            n < o.info.length;
            n++
          ) {
            var a = o.info[n];
            if (a.type == i.info.type) {
              o.info[n] = i.info;
              break;
            }
          }
          var s = v["default"].ins.getData(pb.EUserProtocol.S2C_ARTIFACT_INFO);
          ((s.info.power = i.power),
            l["default"].createWorldDataReflashMsg(),
            this.onArtifactAll(2, !1),
            S.Tips.show("升级成功"),
            this.sendNt(r.RoleEvent.ROLE_GOD_ACC_INFO_LIVEL, i.info));
        }),
        (t.prototype.doNpcBook = function (e) {
          o["default"].Service.onProto(
            pb.EUserProtocol.S2C_NPC_BOOK_MAIN,
            a["default"].alloc(this, this.onNpcBook, [e], !0),
          );
          var t = new n.Message(pb.EUserProtocol.C2S_NPC_BOOK_MAIN),
            i = t.proto;
          ((i.type = 0 > e ? 0 : e), this.sendProto(t));
        }),
        (t.prototype.onNpcBook = function (e, t) {
          var i = t.body,
            o = i.proto,
            n = this;
          -1 == e && (n.npc_type = o.types);
          var a = o.npcs.concat();
          a.sort(function (e, t) {
            return e.id - t.id;
          });
          for (var s = a.length - 1; s >= 0; s--) {
            var l = a[s];
            n.isVisible(l.status)
              ? I["default"].isCountryMap(l.mapId) &&
                -1 == p["default"].myPlayer.countryId
                ? a.splice(s, 1)
                : I["default"].isCityMap(l.mapId) &&
                  o.city_level < 0 &&
                  a.splice(s, 1)
              : a.splice(s, 1);
          }
          n.sendNt(r.RoleEvent.ON_NPC_BOOK, [a, e]);
        }),
        (t.prototype.isVisible = function (e) {
          return 0 != (e & A["default"].STATUS_VISIBLE);
        }),
        (t.prototype.naticonEq = function (e, t) {
          for (var i = 0; i < e.length; i++) {
            var o = e[i],
              n = o.level <= 0 ? 1 : o.level;
            if (o.npcId == t.npcId && t.mapLevel != n) return !0;
          }
          return !1;
        }),
        Object.defineProperty(t.prototype, "isEnergyInfo", {
          get: function () {
            return this._isEnergyInfo;
          },
          set: function (e) {
            ((this._isEnergyInfo = e),
              this.energyInfo &&
                (this.isEnergyRed =
                  this.energyInfo.leftEnergy < this.energyInfo.belowTips &&
                  C["default"].ins.getIsOpen(C.LevelOpenId.Energy)));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "isEnergyRed", {
          get: function () {
            return this._isEnergyRed;
          },
          set: function (e) {
            ((this._isEnergyRed = e),
              this.sendNt(r.RoleEvent.ROLE_ATTR_UPDATE));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.onEnergyInfo = function (e) {
          var t = e.body;
          ((this.energyInfo = t.proto),
            this.isEnergyInfo &&
              (this.isEnergyRed =
                this.energyInfo.leftEnergy < this.energyInfo.belowTips &&
                C["default"].ins.getIsOpen(C.LevelOpenId.Energy)),
            this.sendNt(r.MainEvent.MAIN_BLOOD_BOTTLE));
        }),
        (t.prototype.doEnergyBuy = function (e) {
          if (!(0 >= e)) {
            if (this.energyInfo.leftEnergy >= this.energyInfo.energyTopLimit)
              return void S.Tips.show("购买失败，能量精华池已达上限");
            o["default"].Service.onProto(
              pb.EUserProtocol.S2C_ENERGY_ESSENCE_BUY,
              a["default"].alloc(this, this.onEnergyBuy, [e], !0),
            );
            var t = new n.Message(pb.EUserProtocol.C2S_ENERGY_ESSENCE_BUY),
              i = t.proto;
            ((i.money = e), this.sendProto(t));
          }
        }),
        (t.prototype.onEnergyBuy = function (e, t) {
          var i = e * this.energyInfo.ratio;
          S.Tips.show("购买成功，已获得" + i + "能量精华");
        }),
        (t.prototype.setUpHpMp = function () {
          var e = p["default"].myPlayer;
          ((e.hp = this.playerHp), (e.mp = this.playerMp));
          var t = e.pet;
          (t && ((t.hp = this.petHp), (t.mp = this.petMp)),
            (this.playerHp = 0),
            (this.playerMp = 0),
            (this.petHp = 0),
            (this.petMp = 0));
        }),
        (t.prototype.getIsUpHpMp = function () {
          return (
            0 != this.playerHp ||
            0 != this.playerMp ||
            0 != this.petHp ||
            0 != this.petMp
          );
        }),
        (t.prototype.onEnergyUpdate = function (e) {
          var t = e.body,
            i = t.proto;
          (i.addEnergy > 0 && S.Tips.show("能量精华已增加" + i.addEnergy),
            (this.energyInfo.leftEnergy = i.leftEnergy),
            (this.playerHp = i.playerHp),
            (this.playerMp = i.playerMp),
            (this.petHp = i.petHp),
            (this.petMp = i.petMp),
            !go.isFight && this.getIsUpHpMp() && this.setUpHpMp(),
            this.sendNt(r.RoleEvent.ON_ENERGY_UPDATE),
            this.sendNt(r.MainEvent.MAIN_BLOOD_BOTTLE));
        }),
        (t.DEL_ARRTIBUTE = [_.ModelConst.MONEY2, 2, 100]),
        t
      );
    })(s["default"]);
  t["default"] = P;
});
