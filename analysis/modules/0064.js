(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.MissionType = t.MissionConst = void 0));
  var o = i(3),
    n = i(43),
    a = i(11),
    r = i(2),
    s = i(0),
    l = i(18),
    u = i(19),
    _ = i(5),
    d = i(4),
    p = i(10),
    c = i(12),
    h = i(20),
    f = i(30),
    T = i(8),
    E = i(1),
    y = i(26),
    g = i(231),
    v = i(32),
    S = i(74),
    I = i(15),
    m = i(35),
    A = i(382),
    C = i(69),
    P = i(81),
    R = i(62),
    O = i(114),
    N = i(52),
    M = i(46),
    L = i(27),
    w = (function () {
      function e() {}
      return (
        (e.CAN_SUBMIT = 0),
        (e.NOT_CAN_SUBMIT = 1),
        (e.CAN_ACCEPT = 2),
        (e.NOT_CAN_ACCEPT = 3),
        (e.FINISH = 4),
        e
      );
    })();
  t.MissionConst = w;
  var b;
  !(function (e) {
    ((e[(e.TASK_TYPE_OTHER = 0)] = "TASK_TYPE_OTHER"),
      (e[(e.TASK_TYPE_DAY_ACTIVITY = 1)] = "TASK_TYPE_DAY_ACTIVITY"),
      (e[(e.TASK_TYPE_ARENA = 2)] = "TASK_TYPE_ARENA"),
      (e[(e.TASK_TYPE_CHALLENG = 3)] = "TASK_TYPE_CHALLENG"),
      (e[(e.TASK_TYPE_DAY_TASK = 4)] = "TASK_TYPE_DAY_TASK"),
      (e[(e.TASK_TYPE_SOON = 5)] = "TASK_TYPE_SOON"),
      (e[(e.TASK_TYPE_MAIN = 6)] = "TASK_TYPE_MAIN"));
  })((b = t.MissionType || (t.MissionType = {})));
  var x = (function (e) {
    function t(t) {
      var i = e.call(this) || this;
      return (
        (i.series = ""),
        (i.rewardItems = null),
        (i.selectItems = null),
        (i.selectIndex = 0),
        (i.acceptCondition = null),
        (i.submitCondition = null),
        (i.escortCost = null),
        (i.id = t),
        i
      );
    }
    return (
      __extends(t, e),
      Object.defineProperty(t.prototype, "status", {
        get: function () {
          return this.getMissionStatus();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.isRandomMission = function () {
        return (this.setting & t.MISSION_IS_RANDOM) > 0;
      }),
      (t.prototype.couldNotDel = function () {
        return (this.setting & t.MISSION_SET_UNDELETABLE) > 0;
      }),
      (t.prototype.isDirectSubmit = function () {
        return (this.setting & t.MISSION_SET_SUBMIT) > 0;
      }),
      (t.prototype.isUnLimitSubmit = function () {
        return (this.setting & t.MISSION_SET_UNLIMITED) > 0;
      }),
      (t.prototype.isEscort = function () {
        return (this.setting & t.MISSION_IS_ESCORT) > 0;
      }),
      (t.prototype.isEscortTeam = function () {
        return (this.setting & t.MISSION_IS_ESTEAM) > 0;
      }),
      (t.prototype.isCityOrCountry = function () {
        return (this.setting & t.MISSION_IS_CITY_OR_COUNTRY) > 0;
      }),
      (t.prototype.isExclude = function () {
        return this.isCityOrCountry() || this.isEscort() || this.isEscortTeam();
      }),
      (t.prototype.isCountryAssignTask = function () {
        return 0 != (this.setting & t.MISSION_IS_COUNTRY_TASK);
      }),
      (t.prototype.isShowGuide = function () {
        return 0 != (this.setting & t.MISSION_SHOW_GUIDE);
      }),
      (t.prototype.isOneKeyMission = function () {
        return 0 != (this.setting & t.MISSION_IS_ONE_KEY);
      }),
      (t.prototype.isOneKeyShow = function () {
        return 0 != (this.setting & t.MISSION_IS_ONE_KEY_SHOW);
      }),
      (t.prototype.setOneKeySHow = function () {
        this.setting |= t.MISSION_IS_ONE_KEY_SHOW;
      }),
      (t.prototype.isGuideMission = function () {
        return this.isEscort()
          ? !1
          : 0 != (this.setting & t.MISSION_IS_GUIDE_MISSION);
      }),
      (t.prototype.isGuideBag = function () {
        return this.isEscort()
          ? !1
          : 0 != (this.setting & t.MISSION_IS_GUIDE_BAG);
      }),
      (t.prototype.isHaveSpecailReward = function () {
        return 0 != (this.setting & t.MISSION_HAVE_SPECAIL_REWARD);
      }),
      (t.prototype.isHaveSpecailReward2 = function () {
        return 0 != (this.setting & t.MISSION_HAVE_SPECAIL_REWARD2);
      }),
      (t.prototype.isForHelp = function () {
        return this._isHelp;
      }),
      (t.prototype.isHaveSpecailExecute = function () {
        return 0 != (this.setting & t.MISSION_HAVE_SPECAIL_EXECTUE);
      }),
      (t.prototype.isVisibleAndSubmit = function (e, t) {
        if (null == e) return !1;
        if (1 == this.isCityOrCountry()) {
          if (this.npcId != e.missionGroupID) return !1;
        } else {
          if (d["default"].isAllocateCityMap(t)) return !1;
          if (d["default"].isAllocateCountryMap(t)) return !1;
          var i = t;
          if (
            (d["default"].isAllocateMirrorMap(t) && (i = _["default"].orgMapID),
            d["default"].isCommonMap(i) && this.mapId != i)
          )
            return !1;
          if (d["default"].isCommonMap(i) && this.npcId != e.getId()) return !1;
        }
        return !0;
      }),
      (t.prototype.getName = function () {
        var e = "";
        return (
          this.type == b.TASK_TYPE_MAIN && (e += "主线："),
          this.series && (e += this.series + "-"),
          e + this.name
        );
      }),
      (t.fromBytes = function (e) {
        var i = new t(e.readShort());
        ((i.name = e.readUTF()),
          (i.level = e.readByte()),
          (i.simpleDesc = e.readUTF()),
          (i.desc = e.readUTF()),
          (i.setting = 65535 & e.readShort()),
          (i.mapId = e.readShort()),
          (i.npcId = e.readByte()),
          (i.radarMapID = e.readShort()),
          i.radarMapID > 0 &&
            ((i.radarGx = e.readByte()), (i.radarGy = e.readByte())),
          (i.dialogNotStartNotReady = e.readUTF()),
          (i.dialogStartNotFinish = e.readUTF()),
          (i.dialogStartFinish = e.readUTF()),
          (i.exp = e.readInt()),
          (i.money2 = e.readShort()),
          (i.money3 = e.readShort()),
          1 == i.isHaveSpecailReward() &&
            ((i.honor = e.readShort()),
            (i.countryLand = e.readShort()),
            (i.countryProsperity = e.readShort()),
            (i.countryPeople = e.readShort()),
            (i.countryWood = e.readShort()),
            (i.countryStone = e.readShort()),
            (i.countryIron = e.readShort()),
            (i.cityArmy = e.readShort()),
            (i.cityProsperity = e.readShort()),
            (i.promoteProsperity = e.readShort())),
          1 == i.isHaveSpecailReward2() && (i.countryArmy = e.readShort()),
          1 == i.isHaveSpecailExecute() &&
            ((i.acceptJumpMapID = e.readShort()),
            i.acceptJumpMapID > 0 &&
              ((i.acceptJumpMapGx = e.readByte()),
              (i.acceptJumpMapGy = e.readByte())),
            (i.submitJumpMapID = e.readShort()),
            i.submitJumpMapID > 0 &&
              ((i.submitJumpMapGx = e.readByte()),
              (i.submitJumpMapGy = e.readByte())),
            (i.acceptBattleID = e.readShort()),
            (i.submitBattleID = e.readShort()),
            (i.submitNextMissionID = e.readShort())),
          1 == i.isEscort() &&
            ((i.escortCost = []),
            (i.escortCost[0] = e.readInt()),
            (i.escortCost[1] = e.readInt()),
            (i.escortCost[2] = e.readInt()),
            e.readByte(),
            e.readByte()));
        var o = e.readByte();
        if (o > 0) {
          i.rewardItems = [];
          for (var n = 0; o > n; n++) {
            var a = v["default"].fromMissionBytes(e);
            i.rewardItems[n] = a;
          }
        }
        if (((o = e.readByte()), o > 0)) {
          i.selectItems = [];
          for (var n = 0; o > n; n++) {
            var a = v["default"].fromMissionBytes(e, !0);
            i.selectItems[n] = a;
          }
        }
        if (((o = e.readByte()), o > 0)) {
          i.acceptCondition = [];
          for (var n = 0; o > n; n++)
            i.acceptCondition[n] = g["default"].fromBytes(e);
        }
        if (((o = e.readByte()), o > 0)) {
          i.submitCondition = [];
          for (var n = 0; o > n; n++)
            i.submitCondition[n] = g["default"].fromBytes(e);
        }
        try {
          ((i.type = e.readInt()),
            (i.series = e.readUTF()),
            (i.acceptMapId = e.readInt()),
            (i.acceptNpcId = e.readInt()),
            (i.canAccept = e.readByte()));
        } catch (r) {
          console.error(r);
        }
        return ((i._isHelp = e.readBoolean()), i.init(), i);
      }),
      (t.prototype.init = function () {
        ((this.simpleDesc = T.Tool.convertDesc(this.simpleDesc)),
          (this.desc = T.Tool.convertDesc(this.desc)),
          (this.dialogNotStartNotReady = T.Tool.convertDesc(
            this.dialogNotStartNotReady,
          )),
          (this.dialogStartNotFinish = T.Tool.convertDesc(
            this.dialogStartNotFinish,
          )),
          (this.dialogStartFinish = T.Tool.convertDesc(this.dialogStartFinish)),
          this.initSelectItemsIndex());
      }),
      (t.prototype.initSelectItemsIndex = function () {
        if (this.selectItems && this.selectItems.length)
          for (
            var e = _["default"].myPlayer.job, t = 0;
            t < this.selectItems.length;
            ++t
          ) {
            var i = this.selectItems[t];
            if (i) {
              var o = d["default"].getItemVocation(i);
              ("number" == typeof o ? o == e : o.includes(e)) &&
                (this.selectIndex = t);
            }
          }
      }),
      (t.convertDesc = function (e) {
        return T.Tool.convertDesc(e);
      }),
      (t.prototype.getMissionStatus = function (e, t) {
        e || (e = _["default"].myPlayer);
        var i = w.CAN_SUBMIT;
        if (null != e.getMissionById(this.id))
          i = this.isComplete(e) ? w.CAN_SUBMIT : w.NOT_CAN_SUBMIT;
        else {
          var o = !1;
          if (null == t || t.length <= 0) o = !0;
          else
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              if (null != a && Number(a) == e.getId()) {
                o = !0;
                break;
              }
            }
          i = this.isCanAccept(e) && 1 == o ? w.CAN_ACCEPT : w.NOT_CAN_ACCEPT;
        }
        return i;
      }),
      (t.prototype.isShowNotAcceptMission = function (e) {
        if (null == e) return !1;
        var t = O.MissionModel.mainMission;
        if (this.type == b.TASK_TYPE_MAIN && t && this.id != t.id) return !1;
        if (t && t.id == this.id) return !0;
        var i = this.acceptCondition;
        if (null != i && i.length > 1) {
          var o = i[0];
          if (
            o.getType() != g["default"].CONDITION_NONE &&
            o.isConditionOfSatisfy(e)
          )
            return !0;
        }
        var n = e.getMissionCntInfo(this.id);
        return n ? !0 : !1;
      }),
      (t.prototype.getMissionRewardString = function (e, t) {
        var i = new f["default"](),
          o = "",
          n = this.exp;
        if (
          (n > 0 &&
            (o += T.Tool.manageString(
              p.GameText.STR_MISSION_REWARD_EXP,
              n + "  ",
            )),
          t > 0 && (o += p.GameText.STR_MONEY1 + t + "  "),
          this.money2 > 0 &&
            (o +=
              p.GameText.STR_MONEY2 +
              (this.isEscort()
                ? "(" + p.GameText.STR_COUNTRY_WAR_ROUND_NULL + ")"
                : this.money2 + "") +
              "  "),
          this.money3 > 0 && (o += p.GameText.STR_MONEY3 + this.money3 + "  "),
          this.honor > 0 &&
            (o += T.Tool.manageString(
              p.GameText.STR_MISSION_REWARD_HONOR,
              this.honor + "  ",
            )),
          this.cityProsperity > 0 &&
            (o += T.Tool.manageString(
              p.GameText.STR_MISSION_REWARD_CITY_PROS,
              this.cityProsperity + "  ",
            )),
          this.cityArmy > 0 &&
            (o += T.Tool.manageString(
              p.GameText.STR_MISSION_REWARD_CITY_ARMY,
              this.cityArmy + "  ",
            )),
          this.countryArmy > 0 &&
            (o += T.Tool.manageString(
              p.GameText.STR_MISSION_REWARD_COUNTRY_ARMY,
              this.countryArmy + "  ",
            )),
          this.countryLand > 0 &&
            (o += T.Tool.manageString(
              p.GameText.STR_MISSION_REWARD_COUNTRY_LAND,
              this.countryLand + "  ",
            )),
          this.countryProsperity > 0)
        ) {
          var a = "";
          (this.promoteProsperity > 0 &&
            (a = h["default"].makeColorString(
              "+" + this.promoteProsperity,
              T.Tool.COLOR_GREEN,
            )),
            (o += T.Tool.manageString(
              p.GameText.STR_MISSION_REWARD_COUNTRY_PROS,
              this.countryProsperity + a + "  ",
            )));
        }
        return (
          this.countryPeople > 0 &&
            (o += T.Tool.manageString(
              p.GameText.STR_MISSION_REWARD_COUNTRY_PEOP,
              this.countryPeople + "  ",
            )),
          this.countryWood > 0 &&
            (o += T.Tool.manageString(
              p.GameText.STR_MISSION_REWARD_COUNTRY_WOOD,
              this.countryWood + "  ",
            )),
          this.countryStone > 0 &&
            (o += T.Tool.manageString(
              p.GameText.STR_MISSION_REWARD_COUNTRY_STONE,
              this.countryStone + "  ",
            )),
          this.countryIron > 0 &&
            (o += T.Tool.manageString(
              p.GameText.STR_MISSION_REWARD_COUNTRY_IRON,
              this.countryIron + "  ",
            )),
          0 == T.Tool.isNullText(o),
          (0 == T.Tool.isNullText(o) ||
            (this.rewardItems && this.rewardItems.length)) &&
            i.append(
              h["default"].makeColorString(
                p.GameText.STR_MISSION_REWARD + "：",
                16039029,
              ) + o,
            ),
          i.toString()
        );
      }),
      (t.prototype.getEscortDesc = function () {
        var e = new f["default"]();
        (e.append(this.desc), e.append("\n"), e.append("\n"));
        var t = this.escortCost;
        if (1 == this.isEscort() && null != t && t.length >= 3) {
          var i = "";
          (t[0] > 0 &&
            (i += t[0] + p.GameText.getMoneyText(c.ModelConst.MONEY1)),
            t[1] > 0 &&
              (i += t[1] + p.GameText.getMoneyText(c.ModelConst.MONEY2)),
            t[2] > 0 &&
              (i += t[2] + p.GameText.getMoneyText(c.ModelConst.MONEY3)),
            i
              ? (e.append(
                  h["default"].makeColorString(
                    p.GameText.STR_MISSION_ESCORT + "：",
                    16776960,
                  ),
                ),
                e.append("\n"),
                e.append(i))
              : e.append(
                  h["default"].makeColorString(
                    "无需" + p.GameText.STR_MISSION_ESCORT,
                    16776960,
                  ),
                ),
            e.append("\n"));
        }
        return (e.append(this.getMissionRewardString(!0, 0)), e.toString());
      }),
      (t.prototype.getSubmitDetails = function () {
        var e = new f["default"]();
        e.append(this.dialogStartFinish + "\n");
        var t = this.getConditionDesc(this.submitCondition);
        return (
          0 == T.Tool.isNullText(t) &&
            (e.append(
              h["default"].makeColorString(
                p.GameText.STR_MISSION_FINISH + "：",
                16776960,
              ) + t,
            ),
            e.append("\n")),
          e.append("\n"),
          e.append(this.getMissionRewardString(!1, 0)),
          e.toString()
        );
      }),
      (t.prototype.getDetails = function (e) {
        var t = new f["default"]();
        (t.append(this.desc),
          t.append("\n"),
          1 == e &&
            0 == T.Tool.isNullText(this.simpleDesc) &&
            (t.append(
              "(" +
                h["default"].makeColorString(
                  this.simpleDesc,
                  T.Tool.COLOR_YELLOW,
                ) +
                ")",
            ),
            t.append("\n")),
          t.append("\n"));
        var i = this.getMissCntDesc();
        i && (t.append(i), t.append("\n"));
        var o = this.getConditionDesc(this.submitCondition);
        return (
          0 == T.Tool.isNullText(o) &&
            (t.append(
              h["default"].makeColorString(
                p.GameText.STR_NPC_MISSION_DEST,
                16039029,
              ) + o,
            ),
            t.append("\n")),
          t.append(this.getMissionRewardString(!0, 0)),
          t.toString()
        );
      }),
      (t.prototype.getMissCntDesc = function () {
        var e = _["default"].myPlayer.getMissionCntInfo(this.id);
        if (!e) return null;
        var t = h["default"].makeColorString(
          e.compCnt + "/" + e.total,
          e.compCnt >= e.total ? T.Tool.COLOR_RED : T.Tool.COLOR_GREEN,
        );
        return h["default"].makeColorString("每日可完成次数：", 16039029) + t;
      }),
      (t.prototype.getDoingDesc = function (e) {
        var t = new f["default"](),
          i = this.getMissCntDesc();
        i && (t.append(i), t.append("\n"));
        var o = this.getConditionDesc(this.submitCondition);
        return (
          0 == T.Tool.isNullText(o) &&
            (t.append(
              h["default"].makeColorString(
                p.GameText.STR_NPC_MISSION_DEST,
                16039029,
              ) + o,
            ),
            t.append("\n")),
          1 == e
            ? t.append(this.simpleDesc + "\n")
            : t.append(this.dialogStartNotFinish + "\n"),
          t.toString()
        );
      }),
      (t.prototype.getMainDesc = function () {
        var e = new f["default"](),
          t = _["default"].myPlayer,
          i =
            this.isCanAccept(t) || this.isComplete()
              ? T.Tool.COLOR_PMESSAGE
              : T.Tool.COLOR_NMESSAGE,
          o =
            h["default"].makeColorString(
              this.type == b.TASK_TYPE_MAIN ? "主线：" : "任务：",
              T.Tool.COLOR_WHITE,
            ) +
            h["default"].makeColorString(
              this.series ? this.series + "-" + this.name : this.name,
              i,
            );
        if ((e.append(o), !t.getMissionById(this.id))) return e.toString();
        e.append("\n");
        var n = this.getConditionDesc(this.submitCondition);
        return (
          0 == T.Tool.isNullText(n) &&
            e.append(
              h["default"].makeColorString(
                p.GameText.STR_NPC_MISSION_DEST,
                T.Tool.COLOR_WHITE,
              ) + n,
            ),
          e.toString()
        );
      }),
      (t.prototype.getConditionDesc = function (e) {
        if (null == e) return null;
        for (var t = new f["default"](), i = null, o = 0; o < e.length; o++)
          if (((i = e[o]), null != i)) {
            var n = i.getConditionDesc();
            T.Tool.isNullText(n) || (o > 0 && t.append("\n"), t.append(n));
          }
        return t.toString();
      }),
      (t.prototype.isHasSelectItem = function () {
        var e = this.selectItems;
        if (null != e && e.length > 0)
          for (var t = 0; t < e.length; t++) if (null != e[t]) return !0;
        return !1;
      }),
      (t.prototype.isCanAccept = function (e, t) {
        if ((void 0 === t && (t = !0), null == e)) return !1;
        if (this.level > e.getLevel()) return !1;
        if (t) {
          var i = e.getMissionCntInfo(this.id);
          if (i && i.compCnt >= i.total) return !1;
        }
        if (
          this.type == b.TASK_TYPE_MAIN &&
          void 0 != this.canAccept &&
          0 === this.canAccept
        )
          return !1;
        if (null == this.acceptCondition) return !0;
        for (var o = 0; o < this.acceptCondition.length; o++)
          if (0 == this.acceptCondition[o].isConditionOfSatisfy(e)) return !1;
        return !0;
      }),
      (t.prototype.isComplete = function (e) {
        if (((e = e || _["default"].myPlayer), null == this.submitCondition))
          return !0;
        for (var t = 0; t < this.submitCondition.length; t++) {
          var i = this.submitCondition[t];
          if (0 == i.isConditionOfSatisfy(e)) return !1;
        }
        return !0;
      }),
      (t.prototype.isHandUpMission = function () {
        return this.id >= 6e3 && this.id <= 6050;
      }),
      (t.prototype.updateKillMission = function (e, t, i) {
        var n = this.submitCondition;
        if (null != n) {
          for (var a = 0; a < n.length; a++)
            null != n[a] && n[a].updateKilledMonsterNum(e, t, i);
          o["default"].sendNt(r.MissionEvent.ON_MAIN_MISSION_UPDATE, this.id);
        }
      }),
      (t.prototype.updateHaveItemDesc = function (e, t) {
        var i = this.submitCondition;
        if (null != i)
          for (var o = 0; o < i.length; o++)
            null != i[o] && i[o].updateHaveItemNum(e, t);
      }),
      (t.prototype.cleanKillMission = function () {
        var e = this.submitCondition;
        if (!(null == e || e.length <= 0))
          for (var t = 0; t < e.length; t++)
            null != e[t] && e[t].cleanKillMonster();
      }),
      (t.doAcceptMissionMsg = function (e, t, i) {
        return __awaiter(this, void 0, Promise, function () {
          var o, n, a, r, s, u;
          return __generator(this, function (d) {
            switch (d.label) {
              case 0:
                return null == e || null == t || null == i
                  ? [2, !1]
                  : ((o = e.getMissionCntInfo(i.id)),
                    o && o.compCnt >= o.total
                      ? (L["default"].confirm(p.GameText.MISSION_MAX_CNT_TIPS),
                        [2, !1])
                      : i.isEscort() &&
                          null != i.escortCost &&
                          3 == i.escortCost.length
                        ? [
                            4,
                            T.Tool.checkEnoughMoney(
                              i.escortCost[0],
                              i.escortCost[1],
                              i.escortCost[2],
                            ),
                          ]
                        : [3, 2]);
              case 1:
                if (0 == d.sent()) return [2, !1];
                d.label = 2;
              case 2:
                return (
                  (n = l["default"].createTastAcceptMsg(t.getId(), i.getId())),
                  this.lastAcceptId == i.getId()
                    ? (I.Tips.show("你已经接受过这个任务了"), [2])
                    : ((this.lastAcceptId = i.getId()),
                      [4, m["default"].sendProtoAsync(n)])
                );
              case 3:
                return (a = d.sent())
                  ? (this.lastAcceptId == i.getId() &&
                      (this.lastAcceptId = void 0),
                    (r = a.getByte()),
                    0 != r
                      ? (E["default"].alertMessage(
                          a.getString(),
                          p.GameText.getText(p.GameText.TI_ERROR),
                        ),
                        this.onAcceptFail(),
                        [2, !1])
                      : (l["default"].processMissionNPCStatus(a),
                        (s = a.getBoolean()),
                        0 == s
                          ? (e.addMission(i),
                            0 == T.Tool.isNullText(i.simpleDesc) &&
                              R["default"].addPromptMsg(
                                T.Tool.manageString(
                                  p.GameText.STR_MISSION_BULLETIN,
                                  i.simpleDesc,
                                ),
                              ),
                            _["default"].checkNPCRelaMissions(!0),
                            [2, i.doAcceptEndCheck(t)])
                          : ((u = a.getByte()),
                            0 != u
                              ? (E["default"].alertMessage(a.getString()),
                                this.onSubmitFail(),
                                [2, !1])
                              : (l["default"].processMissionReward(e, i.id, a),
                                _["default"].checkNPCRelaMissions(!0),
                                [2, i.doSubmitEndCheck(t)]))))
                  : [2];
            }
          });
        });
      }),
      (t.onAcceptFail = function () {
        C.MainPlayerAi.ins.open &&
          ((C.MainPlayerAi.ins.open = !1),
          I.Tips.show("接受任务失败，自动挂机已关闭"));
      }),
      (t.onSubmitFail = function () {
        C.MainPlayerAi.ins.open &&
          ((C.MainPlayerAi.ins.open = !1),
          I.Tips.show("提交任务失败，自动挂机已关闭"));
      }),
      (t.doSubmitMissionMsg = function (e, t, i, o) {
        return __awaiter(this, void 0, Promise, function () {
          var n, a, r, s, u, d;
          return __generator(this, function (c) {
            switch (c.label) {
              case 0:
                return null == e || null == t || null == i
                  ? [2, !1]
                  : this.lastSubmitId == i.id
                    ? (I.Tips.show("你已经提交过这个任务了"), [2])
                    : ((this.lastSubmitId = i.id),
                      (n = l["default"].createTaskDeliverMsg(
                        t.getId(),
                        i.id,
                        null != o ? o.id : -1,
                      )),
                      [4, m["default"].sendProtoAsync(n)]);
              case 1:
                return (
                  (a = c.sent()),
                  i.id == this.lastSubmitId && (this.lastSubmitId = void 0),
                  (r = a.getByte()),
                  0 != r
                    ? (E["default"].alertMessage(
                        a.getString(),
                        p.GameText.getText(p.GameText.TI_ERROR),
                      ),
                      this.onSubmitFail(),
                      [2, !1])
                    : (go.isHKTNative &&
                        gs.report &&
                        (null === i || void 0 === i ? void 0 : i.type) ==
                          b.TASK_TYPE_MAIN &&
                        gs.report(
                          N.REPORT_TYPE.MISSION_COMPLETION,
                          go.roleLv,
                          go.roleName,
                          go.roleId,
                          i.id,
                          i.name,
                        ),
                      l["default"].processMissionNPCStatus(a),
                      l["default"].processMissionReward(
                        _["default"].myPlayer,
                        i.id,
                        a,
                      ),
                      (s = e.submitMission(i)),
                      s || _["default"].myPlayer.onDelMission(i),
                      (u = t.getMissonById(i.id)),
                      u && u.cleanKillMission(),
                      (d = e.getMissionCntInfo(i.id)),
                      d && d.compCnt++,
                      _["default"].checkNPCRelaMissions(!0),
                      [2, i.doSubmitEndCheck(t)])
                );
            }
          });
        });
      }),
      (t.doDeleteMissionMsg = function (e, i) {
        if (null != i && null != e.getMissionById(i.id)) {
          var o = l["default"].createTaskAbandonMsg(i.getId());
          (n["default"].Service.sendProto(o),
            n["default"].Service.onProto(
              u["default"].CG_TASK_ABANDON,
              a["default"].alloc(t, t.doDeleteMissionMsgCb, [e, i]),
            ));
        }
      }),
      (t.doDeleteMissionMsgCb = function (e, t, i) {
        var o = i.body,
          n = o.getByte();
        if (0 != n)
          return void E["default"].alertMessage(
            o.getString(),
            p.GameText.getText(p.GameText.TI_ERROR),
          );
        l["default"].processMissionNPCStatus(o);
        e.deleteMission(t);
        (_["default"].checkNPCRelaMissions(!0, !0),
          E["default"].hideView(
            s.ModName.Mission,
            s.MissionViewType.MissionDialog,
          ));
      }),
      (t.prototype.getId = function () {
        return this.id;
      }),
      (t.checkPlayerMissionStatus = function (e, i, o) {
        if (0 >= i) return !0;
        if (null == e) return !0;
        if (0 != (o & t.MISSION_STATUS_SUBMIT) && t.isMissionFinish(e, i))
          return !0;
        var n = e.getMissionById(i);
        if (null != n) {
          var a = n.isComplete(e);
          if (1 == a) {
            if (0 != (o & t.MISSION_STATUS_NOT_SUBMIT)) return !0;
          } else if (0 != (o & t.MISSION_STATUS_ACCEPT)) return !0;
        } else if (
          0 != (o & t.MISSION_STATUS_NOT_ACCEPT) &&
          0 == t.isMissionFinish(e, i)
        )
          return !0;
        return !1;
      }),
      (t.isMissionFinish = function (e, t) {
        if (null == e) return !1;
        var i = e.missionStatus;
        if (0 > t || null == i) return !1;
        var o = Math.floor(t / 8),
          n = Math.floor(t % 8);
        return o >= 0 && o < i.length && 0 != (i[o] & (1 << n)) ? !0 : !1;
      }),
      (t.finishMission = function (e, t) {
        this.setMissionStatus(e, t, !0);
      }),
      (t.setMissionStatus = function (e, t, i) {
        if (null != e) {
          var o = e.missionStatus;
          if (!(0 > t || null == o)) {
            var n = Math.floor(t / 8),
              a = Math.floor(t % 8);
            0 > n ||
              n >= o.length ||
              (i ? (o[n] |= 1 << a) : (o[n] &= ~(1 << a)));
          }
        }
      }),
      (t.isHaveSubmitMission = function (e, t) {
        var i = e.missionList;
        if (null == i || i.length < 0) return !1;
        for (
          var o = _["default"].getCurMapID(), n = null, a = 0;
          a < i.length;
          a++
        )
          if (
            ((n = i[a]),
            null != n && 0 != n.isVisibleAndSubmit(t, o) && n.isComplete(e))
          )
            return !0;
        return !1;
      }),
      (t.doMissionAutoPathMsg = function (e) {
        var t = l["default"].createAutoMoveMsgByMisssion(e);
        return (n["default"].Service.sendProto(t), !0);
      }),
      (t.prototype.doShowGuide = function (e) {
        if (null != e) {
          var t = _["default"].getCurMapID();
          if (
            (d["default"].isAllocateMirrorMap(t) && (t = _["default"].orgMapID),
            t == this.radarMapID)
          ) {
            var i = e.getGx(),
              n = e.getGy(),
              a = this.radarGx,
              r = this.radarGy;
            o["default"].sendNt(y.SceneEvent.ON_SHOW_ARROW_GUIDE, {
              startX: i,
              startY: n,
              endX: a,
              endY: r,
            });
          }
        }
      }),
      (t.prototype.doAcceptEndCheck = function (e) {
        return (
          1 == this.isShowGuide() && this.doShowGuide(_["default"].myPlayer),
          this.acceptBattleID > 0
            ? (_["default"].toBattle(this.acceptBattleID), !0)
            : this.acceptJumpMapID > 0
              ? (_["default"].doJumpMap(
                  this.acceptJumpMapID,
                  this.acceptJumpMapGx,
                  this.acceptJumpMapGy,
                ),
                !0)
              : 1 == this.isOneKeyMission()
                ? (S["default"].doMissionInfoView(
                    _["default"].myPlayer,
                    this,
                    e,
                    E["default"].SUB_MISSION_ONE_ACCEPT,
                  ),
                  C.MainPlayerAi.ins.open)
                : !0
        );
      }),
      (t.prototype.doSubmitEndCheck = function (e) {
        O.MissionModel.mainMission &&
          O.MissionModel.mainMission.id == this.id &&
          (O.MissionModel.mainMission = null);
        var t = this.submitBattleID;
        if (t > 0)
          return (
            _["default"].toBattle(t),
            C.MainPlayerAi.ins.updateCurMission(),
            !0
          );
        var i = this.submitJumpMapID;
        if (i > 0)
          return (
            _["default"].doJumpMap(
              i,
              this.submitJumpMapGx,
              this.submitJumpMapGy,
            ),
            !0
          );
        var n = this.submitNextMissionID;
        if (n > 0) {
          var a = e.getMissonById(n) || _["default"].getNpcMissionById(n);
          if (
            a &&
            (a.type == b.TASK_TYPE_MAIN &&
              ((a.canAccept = 1),
              o["default"].sendNt(y.SceneEvent.ON_NPC_SIGN_UPDATE, [
                a.acceptNpcId,
              ])),
            a.isCanAccept(_["default"].myPlayer))
          ) {
            C.MainPlayerAi.ins.curMissionId = a.id;
            var r = e.id;
            return (
              (e = _["default"].getNpcByID(a.acceptNpcId)),
              r != a.acceptNpcId
                ? S["default"].doMissionInfoView(
                    _["default"].myPlayer,
                    a,
                    e,
                    E["default"].SUB_MISSION_VIEW,
                  )
                : S["default"].handleChoiceMissionAction(a, e),
              !1
            );
          }
        }
        return (
          C.MainPlayerAi.ins.updateCurMission(),
          _["default"].checkOneKeyMissionFinish(!0),
          !0
        );
      }),
      (t.prototype.getOffsetLineDesc = function () {
        var e = new f["default"]();
        return (
          e.append(this.desc),
          e.append("\n"),
          e.append("\n"),
          e.append(
            T.Tool.manageString(
              p.GameText.STR_MISSION_OFFSET_LINE_DESC,
              h["default"].makeColorString(
                T.Tool.getTimeStrByMin(this.honor, !1),
                T.Tool.COLOR_GREEN,
              ),
            ),
          ),
          e.toString()
        );
      }),
      (t.doOffLineList = function (e) {
        return __awaiter(this, void 0, void 0, function () {
          var i, o, n, a, r, s, u, s, u, d, c, h, f;
          return __generator(this, function (T) {
            switch (T.label) {
              case 0:
                return (
                  (i = l["default"].createTaskOffLineListMsg()),
                  [4, m["default"].sendProtoAsync(i)]
                );
              case 1:
                if ((T.sent(), (o = l["default"].getReceiveMsg()), null == o))
                  return [2];
                if (((n = o.getShort()), 0 >= n))
                  return (
                    E["default"].alertMessage(
                      p.GameText.STR_MISSION_OFFSET_LINE_NULL,
                    ),
                    [2]
                  );
                for (a = [], r = [], s = 0; n > s; s++)
                  ((u = new t(o.getShort())),
                    (u.name = o.getString()),
                    (u.desc = o.getString()),
                    (u.honor = o.getShort()),
                    a.push(u));
                for (s = 0; s < a.length; s++) ((u = a[s]), r.push([u.name]));
                return (
                  (d = ""),
                  (c = ""),
                  null != e && ((d = e.getName()), (c = e.talkDetail)),
                  (h = _["default"].myPlayer),
                  (f = { player: h, npc: e }),
                  E["default"].createMissionUI(
                    e.name,
                    e.talkDetail,
                    r,
                    a,
                    null,
                    E["default"].SUB_MISSION_OFFLINE_LIST,
                    f,
                  ),
                  [2]
                );
            }
          });
        });
      }),
      (t.doOffLineActivate = function (e) {
        return __awaiter(this, void 0, Promise, function () {
          var t, i, o;
          return __generator(this, function (n) {
            switch (n.label) {
              case 0:
                return null == e
                  ? [2, !1]
                  : [
                      4,
                      E["default"].waitForTwiceSureUI(
                        p.GameText.STR_MISSION_OFFSET_LINE_ASK,
                        p.GameText.STR_MISSION_OFFSET_LINE,
                      ),
                    ];
              case 1:
                return (t = n.sent())
                  ? ((i = l["default"].createTaskOffLineActivateMsg(e.id)),
                    [4, m["default"].sendProtoAsync(i)])
                  : [2, !1];
              case 2:
                return ((o = n.sent()), o ? [2, !0] : [2, !1]);
            }
          });
        });
      }),
      (t.doTouristSubmitMission = function () {
        return !1;
      }),
      (t.prototype.getCurCondition = function (e) {
        var t = this;
        if (!t.submitCondition || !t.submitCondition.length) return null;
        for (var i = 0, o = t.submitCondition; i < o.length; i++) {
          var n = o[i];
          if (
            n.getType() == g["default"].CONDITION_KILL_MONSTER &&
            !n.isConditionOfSatisfy(e)
          )
            return n;
        }
        for (var a = 0, r = t.submitCondition; a < r.length; a++) {
          var n = r[a];
          if (!n.isConditionOfSatisfy(e)) return n;
        }
        return null;
      }),
      (t.prototype.getMissionKillMonsterIds = function (e) {
        var t = this;
        if (!t.submitCondition || !t.submitCondition.length) return null;
        for (var i = [], o = 0, n = t.submitCondition; o < n.length; o++) {
          var a = n[o];
          if (!a.isConditionOfSatisfy(e)) {
            var r = a.getType();
            r == g["default"].CONDITION_KILL_MONSTER &&
              i.push(a.getKillMonsterId());
          }
        }
        return i;
      }),
      (t.getDefMission = function () {
        for (
          var e =
              _["default"].myPlayer.race == d["default"].RACE_EAST
                ? A.EastMissionList
                : A.WestMissionList,
            i = 0,
            o = e;
          i < o.length;
          i++
        ) {
          var n = o[i],
            a = n.id,
            r = t.isMissionFinish(_["default"].myPlayer, a);
          if (!r) return n;
        }
        return null;
      }),
      (t.autoRunNpc = function (e, t, i) {
        (i || (i = _["default"].orgMapID),
          o["default"]
            .getProxy(s.ModName.Mission, s.ProxyType.Mission)
            .navigateMsg(
              i,
              e,
              t
                ? P["default"].VITALITY_AUTO_RUN_MISSION
                : P["default"].VITALITY_AUTO_RUN_NPC,
            ));
      }),
      (t.MISSION_SET_SUBMIT = 1),
      (t.MISSION_SET_DAILY = 2),
      (t.MISSION_SET_WEEKLY = 4),
      (t.MISSION_SET_UNLIMITED = 8),
      (t.MISSION_SET_UNDELETABLE = 16),
      (t.MISSION_IS_CITY_OR_COUNTRY = 32),
      (t.MISSION_IS_ESCORT = 64),
      (t.MISSION_IS_ESTEAM = 128),
      (t.MISSION_SHOW_GUIDE = 256),
      (t.MISSION_HAVE_SPECAIL_REWARD = 512),
      (t.MISSION_HAVE_SPECAIL_EXECTUE = 1024),
      (t.MISSION_IS_COUNTRY_TASK = 2048),
      (t.MISSION_IS_ONE_KEY = 4096),
      (t.MISSION_IS_GUIDE_MISSION = 8192),
      (t.MISSION_IS_GUIDE_BAG = 16384),
      (t.MISSION_HAVE_SPECAIL_REWARD2 = 32768),
      (t.MISSION_IS_ONE_KEY_SHOW = 1 << 20),
      (t.MISSION_IS_RANDOM = 1 << 21),
      (t.MISSION_STATUS_SUBMIT = 1),
      (t.MISSION_STATUS_ACCEPT = 2),
      (t.MISSION_STATUS_NOT_SUBMIT = 4),
      (t.MISSION_STATUS_NOT_ACCEPT = 8),
      (t.AUTO_MOVE_ERROR26 = -26),
      (t.AUTO_MOVE_ERROR27 = -27),
      t
    );
  })(M.ObjBase);
  t["default"] = x;
});
