(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(43),
    n = i(22),
    a = i(2),
    r = i(37),
    s = i(19),
    l = i(32),
    u = i(42),
    _ = i(12),
    d = i(1),
    p = i(5),
    c = i(290),
    h = i(15),
    f = i(33),
    T = i(11),
    E = i(4),
    y = i(21),
    g = i(10),
    v = i(16),
    S = i(20),
    I = i(8),
    m = i(62),
    A = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return ((t.petPKListType = -1), (t.petIds = []), t);
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, "data", {
          get: function () {
            return this._data;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.onConnectLost = function () {
          ((this.data.PlayerVo = null), e.prototype.onConnectLost.call(this));
        }),
        (t.prototype.initialize = function () {
          var t = this;
          (e.prototype.initialize.call(this),
            (this._data = new c.PetModel()),
            t.onProto(pb.EUserProtocol.S2C_PET_EQUIP, t.onPetEquip, t),
            t.onProto(pb.EUserProtocol.S2C_PET_OFF_EQUIP, t.onOffPetEquip, t),
            t.onProto(s["default"].GC_ITEM_INFO_UPDATE, t.upItemUpdate, t),
            t.onProto(s["default"].GC_PET_INFO_UPDATE, t.upPetUpdate, t),
            t.onProto(pb.EUserProtocol.S2C_PET_PK_INFO, t.onPetPkInfo, t),
            t.onProto(
              pb.EUserProtocol.S2C_PET_PK_ACHIEVE_REWARD,
              t.onPetRew,
              t,
            ),
            t.onProto(
              pb.EUserProtocol.S2C_PET_PK_CHALLENGE_NOTIFY,
              t.onPetPkNotify,
              t,
            ),
            t.onProto(
              pb.EUserProtocol.S2C_PET_PK_CHALLENGE,
              t.onPetPkBattle,
              t,
            ),
            t.onProto(
              pb.EUserProtocol.S2C_PET_PK_CHALLENGE_ANSWER,
              t.onPetPkNotifyAnSwer,
              t,
            ),
            t.onProto(pb.EUserProtocol.S2C_PET_PK_RANK_INFO, t.onPetPkRank, t),
            t.onProto(pb.EUserProtocol.S2C_PET_PK_PROVOKE, t.onPetPkProvoke, t),
            t.onProto(pb.EUserProtocol.S2C_PET_PK_PUNISH, t.onPetPkPunish, t),
            t.onProto(
              pb.EUserProtocol.S2C_PET_PK_CONFIRM_PUSNISH,
              t.onPetPkConfirmPunish,
              t,
            ),
            t.onProto(
              pb.EUserProtocol.S2C_PET_PK_PUNISH_NOTIFY,
              t.onPetPkPunishNotify,
              t,
            ),
            t.onProto(
              pb.EUserProtocol.S2C_PET_PK_PUSNISH_DATA,
              t.onPetPkPunishData,
              t,
            ));
        }),
        (t.prototype.onEnter = function () {
          (e.prototype.onEnter.call(this), this.doPetPkPunishData());
        }),
        (t.prototype.doPetSeeMsg = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (t) {
              return [2, u["default"].doPetSeeMsg(e)];
            });
          });
        }),
        (t.prototype.openBattlePet = function (e) {
          var t,
            i = p["default"].myPlayer.pet;
          if (!i) return void h.Tips.show("请先设置出战宠物");
          (this.data.setMyPetsList(),
            (this.data.selectedPetId =
              null === (t = i.getPetId()) || void 0 === t
                ? void 0
                : t.toString()),
            (i = this.data.getSelectedPet()));
          var o = this.doPetSeeMsg(i);
          o && d["default"].checkPet(null, e);
        }),
        (t.prototype.openPetInfo = function (e) {
          var t;
          return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return e
                    ? ((this.data.selectedPetId =
                        null === (t = e.getPetId()) || void 0 === t
                          ? void 0
                          : t.toString()),
                      [4, this.doPetSeeMsg(e)])
                    : [2];
                case 1:
                  return ((i = o.sent()), i && d["default"].checkPet(), [2]);
              }
            });
          });
        }),
        (t.prototype.doPetEquip = function (e) {
          var t,
            i = this;
          if (((t = i.data.getPet()), !t))
            return (d["default"].alertMessage("未获取到宠物"), !1);
          var o = t.getPetItemPos();
          if (-1 == o)
            return (d["default"].alertMessage("该宠物已穿满装备"), !1);
          var a = new n.Message(pb.EUserProtocol.C2S_PET_EQUIP),
            r = a.proto;
          return (
            (r.equipId = e.petUid),
            (r.petPos = this.data.isPetBag
              ? t.petItem.slotPos
              : f["default"].PET_POS),
            (r.pos = o),
            i.sendProto(a),
            !0
          );
        }),
        (t.prototype.onPetEquip = function (e) {
          this.sendNt(a.PetEvent.PET_UP_EQUIP);
        }),
        (t.prototype.doOffPetEquip = function (e, t) {
          void 0 === t && (t = 0);
          var i = new n.Message(pb.EUserProtocol.C2S_PET_OFF_EQUIP),
            o = i.proto,
            a = this.data.getPet();
          return 1 != t || a.getIsEquip()
            ? ((o.petPos = this.data.isPetBag
                ? a.petItem.slotPos
                : f["default"].PET_POS),
              (o.type = t),
              0 == t && (o.equipId = e.petUid),
              void this.sendProto(i))
            : void d["default"].alertMessage("该宠物未穿装备");
        }),
        (t.prototype.onOffPetEquip = function (e) {
          this.sendNt(a.PetEvent.PET_UP_EQUIP);
        }),
        (t.prototype.upItemUpdate = function (e) {
          var t = e.body,
            i = t.getShort(),
            o = l["default"].fromBytes(t);
          o.slotPos < 0
            ? (p["default"].myPlayer.bag.store[i] = null)
            : (p["default"].myPlayer.bag.store[o.slotPos] = o);
        }),
        (t.prototype.upPetUpdate = function (e) {
          var t = e.body;
          if (null == t) return !1;
          var i,
            o = t.getShort();
          if (this.data.isPetBag)
            for (var n = this.data.SelfPetsLsit, r = 0; r < n.length; r++) {
              var s = n.elementAt(r);
              if (s.petItem.slotPos == o) {
                i = s;
                break;
              }
            }
          else i = p["default"].myPlayer.pet;
          return i
            ? (u["default"].fromBytesDetail(t, i, !1),
              i.setTabStatus(!0, _.ModelConst.PET_INFO),
              void this.sendNt(a.MainEvent.ON_PET_ATTR_UPDATE))
            : void console.error("myPet is NULL");
        }),
        (t.prototype.getPetItem = function (e) {
          var t = this.data.getSelectedPet();
          if (t) {
            for (var i = 0; i < t.bag.store.length; i++) {
              var o = t.bag.store[i];
              if (o.petUid.eq(e)) return o;
            }
            return null;
          }
        }),
        (t.prototype.doPetPkInfo = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_PET_PK_INFO);
          this.sendProto(e);
        }),
        (t.prototype.onPetPkInfo = function (e) {
          var t = e.body,
            i = t.proto;
          i.info.achieve.sort(function (e, t) {
            return e.needScore - t.needScore;
          });
          for (var o = 0; o < i.info.achieve.length; o++) {
            var n = i.info.achieve[o];
            ((n.items[0].hasLock = 0 == n.type),
              2 == n.type && (n.items[0].hasAcquired = !0));
          }
          ((this.petBattle = i.info), this.sendNt(a.PetEvent.PET_PK_INFO));
        }),
        (t.prototype.doPetRew = function (e) {
          var t = new n.Message(pb.EUserProtocol.C2S_PET_PK_ACHIEVE_REWARD),
            i = t.proto;
          ((i.id = e), this.sendProto(t));
        }),
        (t.prototype.onPetRew = function (e) {
          var t = e.body,
            i = t.proto;
          this.sendNt(a.PetEvent.PET_PK_REW, i);
        }),
        (t.prototype.doPetSkillLevel = function (e, t) {
          o["default"].Service.onProto(
            pb.EUserProtocol.S2C_PET_PK_SKILL_UP,
            T["default"].alloc(this, this.onPetSkillLevel, [t], !0),
          );
          var i = new n.Message(pb.EUserProtocol.C2S_PET_PK_SKILL_UP),
            a = i.proto;
          ((a.id = e), o["default"].Service.sendProto(i));
        }),
        (t.prototype.onPetSkillLevel = function (e, t) {
          var i = t.body,
            o = i.proto;
          this.sendNt(a.PetEvent.PET_PK_SKILL_LEVEL, [o, e]);
        }),
        (t.prototype.setPetIds = function (e) {
          for (
            var t = !1, i = e == pb.FightType.type_3v3 ? 3 : 5, o = 0;
            i > o;
            o++
          )
            this.petIds[o] || ((t = !0), this.petIds.push(Long.fromNumber(0)));
          return t;
        }),
        (t.prototype.doPetPkSetInfo = function (e) {
          o["default"].Service.onProto(
            pb.EUserProtocol.S2C_PET_PK_SET_INFO,
            T["default"].alloc(this, this.onPetPkSetInfo, [e], !0),
          );
          var t = new n.Message(pb.EUserProtocol.C2S_PET_PK_SET_INFO),
            i = t.proto;
          ((i.type = e), o["default"].Service.sendProto(t));
        }),
        (t.prototype.onPetPkSetInfo = function (e, t) {
          var i = t.body,
            o = i.proto;
          this.petIds = o.petId;
          for (
            var n = this.setPetIds(e),
              r = !1,
              s = this.data.SelfPetsLsit.arr,
              l = 0;
            l < this.petIds.length;
            l++
          ) {
            var _ = this.petIds[l];
            if (0 != _.toNumber()) {
              var d = u["default"].getPetArrById(s, null, _);
              (!d || d.petItem.getPetAge() <= 0) &&
                ((r = !0), (this.petIds[l] = Long.fromNumber(0)));
            }
          }
          (this.sendNt(a.PetEvent.PET_PK_EDIT_INFO),
            (r || n) &&
              (console.error("校验编辑列表"),
              this.doetPkSetUp(this.petIds, e)));
        }),
        (t.prototype.petIdEq = function (e, t) {
          if (t == pb.FightType.type_3v3 && 3 != e.length) return !1;
          if (t == pb.FightType.type_5v5 && 5 != e.length) return !1;
          for (var i = 0; i < e.length; i++) {
            var o = e[i];
            if (!this.petIds[i] || !o.eq(this.petIds[i])) return !1;
          }
          return !0;
        }),
        (t.prototype.doetPkSetUp = function (e, t) {
          o["default"].Service.onProto(
            pb.EUserProtocol.S2C_PET_PK_SET_UP,
            T["default"].alloc(this, this.onPetPkSetUp, [e], !0),
          );
          var i = new n.Message(pb.EUserProtocol.C2S_PET_PK_SET_UP),
            a = i.proto;
          ((a.petId = e), (a.type = t), o["default"].Service.sendProto(i));
        }),
        (t.prototype.onPetPkSetUp = function (e, t) {
          for (var i = [], o = [], n = 0; n < e.length; n++) {
            var r = e[n];
            0 == this.petIds[n].toNumber() || r.eq(this.petIds[n])
              ? 0 == this.petIds[n].toNumber() &&
                0 != r.toNumber() &&
                (i.push({ pos: n, curValue: r }),
                o.push({ pos: n, curValue: this.petIds[n] }))
              : (i.push({ pos: n, curValue: r }),
                o.push({ pos: n, curValue: this.petIds[n] }));
          }
          ((this.petIds = e),
            this.sendNt(a.PetEvent.PET_PK_EDIT_SET_UP, [i, o]));
        }),
        (t.prototype.isPetPk = function (e) {
          var t = this.petIds;
          if (t.length <= 0) return !1;
          for (var i = 0, o = 0; o < t.length; o++) {
            var n = t[o];
            n.toNumber() > 0 && i++;
          }
          var a = e == pb.FightType.type_3v3 ? 3 : 5;
          return i >= a;
        }),
        (t.prototype.doPetPkBattleWorld = function (e, t) {
          return __awaiter(this, void 0, void 0, function () {
            var i, a, r, s, l;
            return __generator(this, function (u) {
              switch (u.label) {
                case 0:
                  return this.petIds.length !=
                    (t == pb.FightType.type_3v3 ? 3 : 5)
                    ? [3, 4]
                    : (i = this.isPetPk(t))
                      ? (this.doPetPkBattle(e, t, !0), [3, 3])
                      : [3, 1];
                case 1:
                  return (
                    (a = y["default"].manageString2(
                      g.GameText.PET_BATTLE_PK_EDIT_DESC,
                      [t == pb.FightType.type_3v3 ? "3" : "5"],
                    )),
                    [4, d["default"].waitForTwiceSureUI(a)]
                  );
                case 2:
                  if (((r = u.sent()), !r)) return [2];
                  (d["default"].createPetBattleEditUI(
                    t == pb.FightType.type_3v3 ? 0 : 1,
                  ),
                    (u.label = 3));
                case 3:
                  return [2];
                case 4:
                  return (
                    o["default"].Service.onProto(
                      pb.EUserProtocol.S2C_PET_PK_SET_INFO,
                      T["default"].alloc(
                        this,
                        this.onPetPkBattleWorld,
                        [e, t],
                        !0,
                      ),
                    ),
                    (s = new n.Message(pb.EUserProtocol.C2S_PET_PK_SET_INFO)),
                    (l = s.proto),
                    (l.type = t),
                    o["default"].Service.sendProto(s),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.onPetPkBattleWorld = function (e, t, i) {
          return __awaiter(this, void 0, void 0, function () {
            var o, n, a, r, s;
            return __generator(this, function (l) {
              switch (l.label) {
                case 0:
                  return (
                    (o = i.body),
                    (n = o.proto),
                    (this.petIds = n.petId),
                    this.setPetIds(t),
                    (a = this.isPetPk(t))
                      ? [3, 2]
                      : ((r = y["default"].manageString2(
                          g.GameText.PET_BATTLE_PK_EDIT_DESC,
                          [t == pb.FightType.type_3v3 ? "3" : "5"],
                        )),
                        [4, d["default"].waitForTwiceSureUI(r)])
                  );
                case 1:
                  return (s = l.sent())
                    ? (d["default"].createPetBattleEditUI(
                        t == pb.FightType.type_3v3 ? 0 : 1,
                      ),
                      [2])
                    : [2];
                case 2:
                  return (this.doPetPkBattle(e, t, !0), [2]);
              }
            });
          });
        }),
        (t.prototype.doPetPkBattle = function (e, t, i) {
          void 0 === i && (i = !1);
          var o = new n.Message(pb.EUserProtocol.C2S_PET_PK_CHALLENGE),
            a = o.proto;
          ((a.type = t), (a.id = e), (a.isChat = i), this.sendProto(o));
        }),
        (t.prototype.onPetPkBattle = function (e) {}),
        (t.prototype.onPetPkNotify = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, o, n, a;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (t = e.body),
                    (i = t.proto),
                    (o =
                      i.name +
                      "(" +
                      i.lv +
                      "级" +
                      E["default"].getJobString(i.job) +
                      ")对您发起一场宠物对决" +
                      (i.type == pb.FightType.type_3v3 ? "3V3" : "5V5") +
                      "模式。\n" +
                      S["default"].makeColorString(
                        "PS：宠物对决有概率拒绝失败",
                        I.Tool.COLOR_GREEN,
                      )),
                    [
                      4,
                      d["default"].waitForTwiceSureUI(
                        o,
                        "决斗",
                        "确认",
                        "拒绝",
                        null,
                        !1,
                      ),
                    ]
                  );
                case 1:
                  return (
                    (n = r.sent()),
                    (a = p["default"].getModelById(i.actorId))
                      ? (this.doPetPkNotifyAnSwer(n ? 2 : 1, i.actorId), [2])
                      : (m["default"].addPromptMsg(g.GameText.PET_BATTLE_SQ),
                        [2])
                  );
              }
            });
          });
        }),
        (t.prototype.doPetPkNotifyAnSwer = function (e, t) {
          var i = new n.Message(pb.EUserProtocol.C2S_PET_PK_CHALLENGE_ANSWER),
            o = i.proto;
          ((o.opt = e), (o.actorId = t), this.sendProto(i));
        }),
        (t.prototype.onPetPkNotifyAnSwer = function (e) {
          var t = e.body,
            i = t.proto;
          if (1 == i.opt) {
            var o = p["default"].getModelById(i.actorId);
            o &&
              (m["default"].addPromptMsg(o.name + "成功拒绝了您的请求"),
              (o.isReject = !0));
          }
          this.sendNt(a.PetEvent.PET_PK_REJECT);
        }),
        (t.prototype.doPetPkRank = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_PET_PK_RANK_INFO);
          this.sendProto(e);
        }),
        (t.prototype.onPetPkRank = function (e) {
          var t = e.body,
            i = t.proto;
          (i.info.sort(function (e, t) {
            return e.rank - t.rank;
          }),
            this.sendNt(a.PetEvent.PET_PK_RANK_INFO, i.info));
        }),
        (t.prototype.doPetPkProvoke = function () {
          if (!this.data.SelfPetsLsit || this.data.SelfPetsLsit.length <= 0)
            return void d["default"].alertMessage("当前没有宠物无法叫嚣");
          for (var e = !1, t = 0; t < this.data.SelfPetsLsit.length; t++) {
            var i = this.data.SelfPetsLsit.elementAt(t);
            if (i.petItem.getPetAge() > 0) {
              e = !0;
              break;
            }
          }
          if (!e)
            return void d["default"].alertMessage(
              "当前所有宠物寿命都为0，无法进行世界叫嚣",
            );
          var o = new n.Message(pb.EUserProtocol.C2S_PET_PK_PROVOKE);
          this.sendProto(o);
        }),
        (t.prototype.onPetPkProvoke = function (e) {
          h.Tips.show("叫嚣成功");
        }),
        (t.prototype.doPetPkPunish = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_PET_PK_PUNISH);
          this.sendProto(e);
        }),
        (t.prototype.onPetPkPunish = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, o, n, a, r, n, s, l, u, _;
            return __generator(this, function (p) {
              switch (p.label) {
                case 0:
                  for (
                    t = e.body, i = t.proto, o = [], n = 0;
                    n < i.descs.length;
                    n++
                  )
                    o.push(
                      "" +
                        S["default"].makeColorString(
                          i.name,
                          I.Tool.COLOR_GREEN,
                        ) +
                        i.descs[n],
                    );
                  for (
                    a = [{ title: "挑衅对方的话", list: o }], r = [], n = 0;
                    3 > n;
                    n++
                  )
                    ((s = Object.create(null)),
                      (s.bg = E["default"].punishIcon[n]),
                      (s.title = ""),
                      r.push(s));
                  return [
                    4,
                    d["default"].showCheckHAlert(
                      a,
                      r,
                      y["default"].manageString2(g.GameText.PET_BATTLE_PUNISH, [
                        i.name,
                      ]),
                      g.GameText.STR_TYPE_WIN_ACTION_DO,
                    ),
                  ];
                case 1:
                  return (
                    (l = p.sent()),
                    (u = l[0]),
                    (_ = l[1]),
                    this.doPetPkConfirmPunish(u, _),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.doPetPkConfirmPunish = function (e, t) {
          var i = new n.Message(pb.EUserProtocol.C2S_PET_PK_CONFIRM_PUSNISH),
            o = i.proto;
          ((o.select = e), (o.type = t), this.sendProto(i));
        }),
        (t.prototype.onPetPkConfirmPunish = function (e) {
          this.sendNt(a.PetEvent.PET_PK_PUNISH);
        }),
        (t.prototype.onPetPkPunishNotify = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, o;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (t = e.body),
                    (i = t.proto),
                    (o = p["default"].myPlayer),
                    (o.punishType = i.select),
                    (o.punishTime = v["default"].timer.serverTime + 36e5),
                    [
                      4,
                      d["default"].waitForTwiceSureUI(
                        y["default"].manageString2(
                          g.GameText.PET_BATTLE_PK_PUNISH,
                          [
                            i.name,
                            "" +
                              S["default"].makeColorString(
                                i.bName,
                                I.Tool.COLOR_GREEN,
                              ) +
                              i.descs,
                          ],
                        ),
                      ),
                    ]
                  );
                case 1:
                  return (n.sent(), this.doPetPkPunishDataConfirm(), [2]);
              }
            });
          });
        }),
        (t.prototype.doPetPkPunishData = function () {
          var e = new n.Message(pb.EUserProtocol.C2S_PET_PK_PUSNISH_DATA);
          this.sendProto(e);
        }),
        (t.prototype.onPetPkPunishData = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, o;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (t = e.body),
                    (i = t.proto),
                    (o = p["default"].myPlayer),
                    (o.punishType = i.select),
                    (o.punishTime = i.time.toNumber()),
                    void 0 == i.desc || "" == i.desc
                      ? [3, 2]
                      : [
                          4,
                          d["default"].waitForTwiceSureUI(
                            y["default"].manageString2(
                              g.GameText.PET_BATTLE_PK_PUNISH,
                              [
                                i.name,
                                "" +
                                  S["default"].makeColorString(
                                    i.bName,
                                    I.Tool.COLOR_GREEN,
                                  ) +
                                  i.desc,
                              ],
                            ),
                          ),
                        ]
                  );
                case 1:
                  (n.sent(), this.doPetPkPunishDataConfirm(), (n.label = 2));
                case 2:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.doPetPkPunishDataConfirm = function () {
          var e = new n.Message(
            pb.EUserProtocol.C2S_PET_PK_PUSNISH_DATA_CONFIRM,
          );
          this.sendProto(e);
        }),
        (t.prototype.applyMyAllPetsDetail = function () {
          return __awaiter(this, void 0, void 0, function () {
            var e, t, i, o;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  (this._data.syncPets(),
                    (e = this._data.myPets),
                    (t = 0),
                    (i = e),
                    (n.label = 1));
                case 1:
                  return t < i.length
                    ? ((o = i[t]), [4, this.doPetSeeMsg(o)])
                    : [3, 4];
                case 2:
                  (n.sent(), (n.label = 3));
                case 3:
                  return (t++, [3, 1]);
                case 4:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.getMyPetById = function (e) {
          var t, i;
          if (!e) return null;
          for (var o = this._data.myPets, n = 0, a = o; n < a.length; n++) {
            var r = a[n];
            if (
              null ===
                (i =
                  null ===
                    (t = null === r || void 0 === r ? void 0 : r.petItem) ||
                  void 0 === t
                    ? void 0
                    : t.petId) || void 0 === i
                ? void 0
                : i.eq(e)
            )
              return r;
          }
          return null;
        }),
        (t.prototype.getMyPets = function () {
          for (
            var e = this._data.myPets, t = [], i = 0, o = e;
            i < o.length;
            i++
          ) {
            var n = o[i];
            n.isAlive() && t.push(n);
          }
          return t;
        }),
        (t.prototype.getMyPetsByJob = function (e) {
          var t = [];
          if (
            e != E["default"].JOB_PET_AGI &&
            e != E["default"].JOB_PET_STR &&
            e != E["default"].JOB_PET_WIL
          )
            return t;
          for (var i = this._data.myPets, o = 0, n = i; o < n.length; o++) {
            var a = n[o];
            (null === a || void 0 === a ? void 0 : a.job) == e &&
              a.isAlive() &&
              t.push(a);
          }
          return t;
        }),
        t
      );
    })(r["default"]);
  t["default"] = A;
});
