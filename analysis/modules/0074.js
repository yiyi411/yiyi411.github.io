(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(18),
    n = i(5),
    a = i(4),
    r = i(10),
    s = i(12),
    l = i(20),
    u = i(8),
    _ = i(1),
    d = i(64),
    p = i(31),
    c = i(15),
    h = i(35),
    f = i(69),
    T = i(27),
    E = i(3),
    y = i(26),
    g = (function (e) {
      function t() {
        var t = e.call(this, p.MODEL_TYPE.TYPE_NPC) || this;
        return (
          (t.rangeX = 0),
          (t.rangeY = 0),
          (t.sourceGx = 0),
          (t.sourceGy = 0),
          (t.missions = null),
          (t._isInit = !1),
          (t.comeOutCounter = -1),
          (t._sign = 0),
          t
        );
      }
      return (
        __extends(t, e),
        (t.prototype.getCanAcceptMission = function () {
          var e = this;
          if (e.isVisible() && e.isEnable()) return e.getAcceptMis(e.missions);
        }),
        (t.prototype.getAcceptMis = function (e) {
          if (!e || !e.length) return null;
          var t = n["default"].myPlayer;
          if (!t) return null;
          for (var i = 0, o = e; i < o.length; i++) {
            var a = o[i];
            if (
              1123 != a.id &&
              1122 != a.id &&
              !d["default"].isMissionFinish(t, a.id) &&
              !t.getMissionById(a.id) &&
              a.isCanAccept(t)
            )
              return a;
          }
          return null;
        }),
        (t.prototype.init = function () {
          if (!this._isInit) {
            if (
              ((this._isInit = !0),
              (this.talkDetail = u.Tool.convertDesc(this.talkDetail)),
              (this.welcome = u.Tool.convertDesc(this.welcome)),
              this.setInitVisible(this.isVisible()),
              this.setInitEnable(this.isEnable()),
              this.checkRelaMissionVisible(),
              !go.openPay && a["default"].isCityMap(n["default"].orgMapID))
            ) {
              var e = [
                "神秘商人",
                "游戏攻略师",
                "仓库管理员",
                "成就商人(趣味答题)",
              ];
              e.includes(this.name) &&
                (this.setInitVisible(!1), this.setVisible(!1));
            }
            (go.isIOSOfficial || go.isIOSNative) &&
              this._name.indexOf("激活码") > -1 &&
              (this.setInitVisible(!1), this.setVisible(!1));
          }
        }),
        (t.prototype.checkRelaMissionVisible = function () {
          if (null != this.missionData) {
            var e = this.missionData;
            if (
              0 == this.isTabStatus(s.ModelConst.NPC_MISSION_DISPLAY) &&
              this.missionData[0] > 0
            ) {
              var t = d["default"].checkPlayerMissionStatus(
                n["default"].myPlayer,
                e[0],
                e[1],
              );
              1 == t &&
                (this.setTabStatus(!0, s.ModelConst.NPC_MISSION_DISPLAY),
                this.setVisible(!0),
                this.setEnable(!0));
            }
            if (
              0 == this.isTabStatus(s.ModelConst.NPC_MISSION_HIDE) &&
              e[2] > 0
            ) {
              var i = d["default"].checkPlayerMissionStatus(
                n["default"].myPlayer,
                e[2],
                e[3],
              );
              1 == i &&
                (this.setTabStatus(!0, s.ModelConst.NPC_MISSION_HIDE),
                this.setVisible(!1),
                this.setEnable(!1),
                (this.comeOutCounter = -1));
            }
          }
        }),
        (t.prototype.setVisible = function (e) {
          e
            ? (this.status |= t.STATUS_VISIBLE)
            : (this.status &= ~t.STATUS_VISIBLE);
        }),
        (t.prototype.getMissonById = function (e) {
          var t = this.missions;
          if (null == t) return null;
          for (var i = null, o = 0; o < t.length; o++)
            if (((i = t[o]), null != i && i.getId() == e)) return i;
          return null;
        }),
        (t.prototype.isVisible = function () {
          return 0 != (this.status & t.STATUS_VISIBLE);
        }),
        (t.prototype.isInitVisible = function () {
          return 0 != (this.status & t.STATUS_INIT_VISIBLE);
        }),
        (t.prototype.setInitVisible = function (e) {
          e
            ? (this.status |= t.STATUS_INIT_VISIBLE)
            : (this.status &= ~t.STATUS_INIT_VISIBLE);
        }),
        (t.prototype.isInitEnable = function () {
          return 0 != (this.status & t.STATUS_INIT_ENABLE);
        }),
        (t.prototype.setInitEnable = function (e) {
          e
            ? (this.status |= t.STATUS_INIT_ENABLE)
            : (this.status &= ~t.STATUS_INIT_ENABLE);
        }),
        (t.prototype.isEnable = function () {
          return 0 != (this.status & t.STATUS_ENABLE);
        }),
        (t.prototype.setEnable = function (e) {
          e
            ? (this.status |= t.STATUS_ENABLE)
            : (this.status &= ~t.STATUS_ENABLE);
        }),
        (t.prototype.getSign = function () {
          return this._sign;
        }),
        (t.prototype.setSign = function (e) {
          return e < s.ModelConst.NPC_MSS_NONE ||
            e > s.ModelConst.NPC_MSS_NOT_ACCEPT
            ? void (this._sign = s.ModelConst.NPC_MSS_NONE)
            : void (this._sign = e);
        }),
        (t.prototype.readNPCSign = function (e) {
          this.setSign(e.getByte());
        }),
        (t.prototype.isUseMissionData = function () {
          return 0 != (this.status & t.STATUS_MISSION_DATA_USE);
        }),
        (t.prototype.isMissionLoadEveryTime = function () {
          return 0 != (this.status & t.STATUS_MISSION_LOAD_EVERY_TIME);
        }),
        (t.prototype.isJumpIcon = function () {
          return 0 != (this.status & t.STATUS_JUMP_ICON);
        }),
        (t.doGetCountryBuildingNPC = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i, o;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return null == e
                    ? [2]
                    : e.isTabStatus(s.ModelConst.NPC_COUNTRY_BLOAD)
                      ? [2]
                      : (e.setTabStatus(!0, s.ModelConst.NPC_COUNTRY_BLOAD),
                        0 ==
                        a["default"].isAllocateCountryMap(
                          n["default"].getCurMapID(),
                        )
                          ? [2]
                          : ((t = e.getId()),
                            t < a["default"].BUILDING_PALACE ||
                            t > a["default"].BUILDING_SHOP_ARMOR
                              ? [2]
                              : [4, this.doGetNPCData([t])]));
                case 1:
                  return (
                    (i = r.sent()),
                    null == i || i.length <= 0
                      ? [2]
                      : ((o = i[0]), e.copyCountryBuildingNPCData(o), [2])
                  );
              }
            });
          });
        }),
        (t.doGetNPCData = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (t = o["default"].createGetNPCData(e)),
                    [4, h["default"].sendProtoAsync(t)]
                  );
                case 1:
                  return (
                    n.sent(),
                    (t = o["default"].getReceiveMsg()),
                    null == t ? [2, null] : ((i = this.parseNPCData(t)), [2, i])
                  );
              }
            });
          });
        }),
        (t.doNpc = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var i;
            return __generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return null == e || 0 == e.isEnable()
                    ? [2, !1]
                    : ((i = n["default"].myPlayer),
                      null == i
                        ? [2, !1]
                        : e.id == this.doNpcId
                          ? [2, !1]
                          : ((this.doNpcId = e.id),
                            a["default"].isAllocateCountryMap(
                              n["default"].getCurMapID(),
                            )
                              ? [4, this.doGetCountryBuildingNPC(e)]
                              : [3, 2]));
                case 1:
                  (o.sent(), (o.label = 2));
                case 2:
                  return e.npcType != t.NPC_MISSION && e.npcType != t.NPC_POWER
                    ? [3, 4]
                    : e.isMissionLoadEveryTime() ||
                        0 == e.isTabStatus(s.ModelConst.NPC_MISSION_LOAD)
                      ? [4, this.doGetMissionData(e)]
                      : [3, 4];
                case 3:
                  (o.sent(),
                    e.setTabStatus(!0, s.ModelConst.NPC_MISSION_LOAD),
                    (o.label = 4));
                case 4:
                  return (
                    (this.doNpcId = null),
                    1 == d["default"].isHaveSubmitMission(i, e)
                      ? (this.doMissionNpc(i, e), [2, !0])
                      : 1 == this.doSpecialNpc(i, e)
                        ? [2, !0]
                        : null != e.talkDetail ||
                            (null != e.missions && e.missions.length > 0)
                          ? (this.doMissionNpc(i, e), [2, !0])
                          : [2, !0]
                  );
              }
            });
          });
        }),
        (t.handleChoiceMissionAction = function (e, t) {
          var i = n["default"].myPlayer;
          if (null != i && null != e && null != t)
            if (null != i.getMissionById(e.getId()))
              e.isComplete(i) &&
              e.isVisibleAndSubmit(t, n["default"].getCurMapID())
                ? this.doMissionInfoView(
                    i,
                    e,
                    t,
                    _["default"].SUB_MISSION_SUBMIT_NORMAL,
                  )
                : this.doMissionInfoView(
                    i,
                    e,
                    t,
                    _["default"].SUB_MISSION_DOING,
                  );
            else if (e.isCanAccept(i, !1)) {
              var o = _["default"].SUB_MISSION_ACCEPT;
              (1 == e.isEscort()
                ? (o = _["default"].SUB_MISSION_ESCORT_INFO)
                : 1 == e.isDirectSubmit() &&
                  (o = _["default"].SUB_MISSION_DIRECT_STEP1),
                this.doMissionInfoView(i, e, t, o));
            } else {
              var a =
                u.Tool.manageString(
                  r.GameText.STR_NPC_MISSION_NOT_READY,
                  l["default"].makeColorString(e.name, 16776960),
                ) +
                "\n" +
                e.dialogNotStartNotReady;
              (_["default"].alertMessage(a),
                f.MainPlayerAi.ins.open &&
                  ((f.MainPlayerAi.ins.open = !1),
                  c.Tips.show("接受任务失败，自动挂机已关闭")));
            }
        }),
        (t.doMissionInfoView = function (e, t, i, o) {
          if (e) {
            var n = { player: e, mission: t, npc: i },
              a = "",
              s = [],
              p = [],
              c = null;
            if (
              o == _["default"].SUB_MISSION_ONE_ACCEPT ||
              o == _["default"].SUB_MISSION_ONE_SUBMIT
            ) {
              var h = f.MainPlayerAi.ins;
              if (h.open)
                return void d["default"].doMissionAutoPathMsg(t.getId());
            }
            switch (o) {
              case _["default"].SUB_MISSION_SUBMIT_NORMAL:
                a = t.getSubmitDetails();
                var T = r.GameText.getText(r.GameText.TI_SUBMIT_MISSION);
                (s.push([T]),
                  p.push([_["default"].EVENT_ALL_TASK_SUBMIT]),
                  (c = t.selectItems));
                break;
              case _["default"].SUB_MISSION_DIRECT_STEP1:
                ((a = t.desc),
                  0 == u.Tool.isNullText(t.dialogStartFinish)
                    ? (s.push([r.GameText.STR_NPC_MISSION_ASK]),
                      p.push([_["default"].EVENT_ALL_TASK_DIRECT_STEP2]))
                    : (s.push([r.GameText.STR_NPC_MISSION_SURE]),
                      p.push([_["default"].EVENT_ALL_TASK_SUBMIT])));
                break;
              case _["default"].SUB_MISSION_DIRECT_STEP2:
                ((a = t.dialogStartFinish),
                  s.push([r.GameText.STR_NPC_MISSION_SURE]),
                  p.push([_["default"].EVENT_ALL_TASK_SUBMIT]));
                break;
              case _["default"].SUB_MISSION_ACCEPT:
                ((a = t.getDetails(!1)),
                  t.isRandomMission() &&
                    ((a = t.getRandomMissionDoingDesc(t)),
                    (a += t.getDetails(!1))),
                  s.push([r.GameText.getText(r.GameText.TI_ACCEPT_MISSION)]),
                  p.push([_["default"].EVENT_ALL_TASK_ACCEPT]));
                break;
              case _["default"].SUB_MISSION_ESCORT_INFO:
                ((a = t.getEscortDesc()),
                  s.push([r.GameText.STR_NPC_MISSION_ESCORT]),
                  p.push([_["default"].EVENT_ALL_TASK_ACCEPT]));
                break;
              case _["default"].SUB_MISSION_OFFLINE_INFO:
                ((a = t.getOffsetLineDesc()),
                  s.push([r.GameText.getText(r.GameText.TI_ACCEPT_MISSION)]),
                  p.push([_["default"].EVENT_ALL_TASK_OFF_ACTIVATE]));
                break;
              case _["default"].SUB_MISSION_VIEW:
                if (((a = t.getDetails(!0)), t.isRandomMission())) {
                  ((a = t.getRandomMissionDoingDesc(t)),
                    (a += t.getDetails(!0)));
                  var E = t.rmissionStatus,
                    y = "";
                  ((y = r.GameText.getText(r.GameText.TI_MISSION_REFLASH)),
                    1 == E &&
                      (s.push([
                        r.GameText.getText(r.GameText.TI_MISSION_SUBMIT),
                      ]),
                      p.push([_["default"].EVENT_ALL_TASK_SUBMIT]),
                      (y = r.GameText.getText(r.GameText.TI_MISSION_RESET))),
                    s.push([r.GameText.getText(r.GameText.TI_DELECT_MISSION)]),
                    p.push([_["default"].EVENT_ALL_TASK_DEL]),
                    s.push([y]),
                    p.push([_["default"].EVENT_ALL_RANDOM_MISSION_REFLASH]));
                } else {
                  var g = t && null != e.getMissionById(t.id);
                  (g &&
                    (s.push([r.GameText.getText(r.GameText.TI_DELECT_MISSION)]),
                    p.push([_["default"].EVENT_ALL_TASK_DEL])),
                    s.push([
                      g
                        ? r.GameText.getText(r.GameText.TI_TASK_PATH)
                        : "前往接取",
                    ]),
                    p.push([_["default"].EVENT_ALL_TASK_PATH]));
                }
                break;
              case _["default"].SUB_MISSION_DOING:
                ((a = t.getDoingDesc(!1)),
                  t &&
                    null != e.getMissionById(t.id) &&
                    (s.push([r.GameText.getText(r.GameText.TI_DELECT_MISSION)]),
                    p.push([_["default"].EVENT_ALL_TASK_DEL])),
                  t.acceptBattleID > 0
                    ? (s.push([r.GameText.STR_NPC_MISSION_CONTINUE]),
                      p.push([_["default"].EVENT_MISSION_FIGHT]))
                    : (s.push([r.GameText.getText(r.GameText.TI_TASK_PATH)]),
                      p.push([_["default"].EVENT_ALL_TASK_PATH])));
                break;
              case _["default"].SUB_MISSION_ONE_ACCEPT:
                ((a = t.simpleDesc),
                  1 == u.Tool.isNullText(a) &&
                    (a = u.Tool.manageString(
                      r.GameText.STR_NPC_MISSION_ACCEPT,
                      l["default"].makeColorString(t.name, u.Tool.COLOR_YELLOW),
                    )));
                var v = t.getConditionDesc(t.submitCondition);
                (0 == u.Tool.isNullText(v) &&
                  (a +=
                    "\n" +
                    l["default"].makeColorString(
                      r.GameText.STR_NPC_MISSION_DEST,
                      16776960,
                    ) +
                    v),
                  (a += "\n" + r.GameText.STR_NPC_MISSION_AUTO_ASK),
                  s.push([r.GameText.getText(r.GameText.TI_TASK_PATH)]),
                  p.push([_["default"].EVENT_ALL_TASK_PATH]));
                break;
              case _["default"].SUB_MISSION_ONE_SUBMIT:
                ((a = u.Tool.manageString(
                  r.GameText.STR_NPC_MISSION_FINISH,
                  l["default"].makeColorString(t.name, u.Tool.COLOR_YELLOW),
                )),
                  (a += "\n" + r.GameText.STR_NPC_MISSION_AUTO_ASK),
                  s.push([r.GameText.getText(r.GameText.TI_TASK_PATH)]),
                  p.push([_["default"].EVENT_ALL_TASK_PATH]));
                break;
              case _["default"].SUB_RANDOM_MISSION_CHANGE:
                if (t.isRandomMission()) {
                  var S = t.getRandomMissionTime();
                  ((a = S),
                    s.push([r.GameText.getText(r.GameText.TI_MISSION_REFLASH)]),
                    p.push([_["default"].EVENT_ALL_RANDOM_MISSION_REFLASH]));
                }
            }
            _["default"].createMissionUI(t.name, a, s, p, c, o, n);
          }
        }),
        (t.doGetMissionData = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return null == e
                    ? [2]
                    : ((t = o["default"].createGetMissionDataMsg(e.id)),
                      [4, h["default"].sendProtoAsync(t)]);
                case 1:
                  i = n.sent();
                  try {
                    this.formatMissionData(i);
                  } catch (a) {
                    console.error(a);
                  }
                  return [2];
              }
            });
          });
        }),
        (t.formatMissionData = function (e) {
          if (e) {
            var t = e.getShort(),
              i = n["default"].getNpcByID(t);
            if (i) {
              i.setTabStatus(!0, s.ModelConst.NPC_MISSION_LOAD);
              var a = e.getByte();
              if (0 > a)
                return void T["default"].confirm(
                  e.getString(),
                  null,
                  r.GameText.getText(r.GameText.TI_ERROR),
                );
              for (var l = a, u = [], _ = 0; l > _; _++) {
                var p = d["default"].fromBytes(e.getByteArray());
                (u.push(p),
                  (p.acceptNpcId = i.id),
                  (p.acceptMapId = n["default"].orgMapID));
              }
              ((i.missions = u), o["default"].processDataMonsterGroupMsg(e));
              var c = o["default"].processDataMonsterMsg(e);
              (c && o["default"].processDataMonsterAIMsg(e),
                E["default"].sendNt(y.SceneEvent.ON_NPC_SIGN_UPDATE, [t]));
            }
          }
        }),
        (t.parseNPCData = function (e) {
          (e.getByte(), e.getByte(), e.getByte());
          for (var t = e.getByte(), i = new Array(t), o = 0; t > o; o++) {
            var n = this.fromBytes(e);
            (n.init(), (i[o] = n));
          }
          return i;
        }),
        (t.prototype.copyCountryBuildingNPCData = function (e) {
          null != e &&
            ((this.missionData = e.missionData),
            (this.comeOutTime = e.comeOutTime),
            (this.menuJumpMap = e.menuJumpMap),
            (this.jumpMapID = e.jumpMapID),
            (this.jumpMapGx = e.jumpMapGx),
            (this.jumpMapGy = e.jumpMapGy),
            (this.jumpMapReqMissionID = e.jumpMapReqMissionID),
            (this.jumpMapReqMissionState = e.jumpMapReqMissionState),
            (this.menuBattle = e.menuBattle),
            (this.battleID = e.battleID),
            (this.battleReqMissionID = e.battleReqMissionID),
            (this.battleReqMissionState = e.battleReqMissionState),
            (this.menuShop = e.menuShop),
            (this.shopID = e.shopID),
            (this.shopReqMissionID = e.shopReqMissionID),
            (this.shopReqMissionState = e.shopReqMissionState),
            (this.menuTeacher = e.menuTeacher),
            (this.teacherId = e.teacherId),
            (this.teacherReqMissionID = e.teacherReqMissionID),
            (this.teacherReqMissionState = e.teacherReqMissionState),
            (this.missionGroupID = e.missionGroupID),
            (this.npcType = e.npcType),
            (this.talkDetail = e.talkDetail),
            (this.topic = e.topic));
        }),
        (t.fromBytes = function (e) {
          var i = new t();
          (i.readNPCSign(e),
            (i.id = e.getByte()),
            (i.missionGroupID = e.getByte()),
            (i.npcType = e.getByte()),
            (i.icon1 = e.getLong()),
            (i.businessIcon = e.getShort()),
            (i.name = e.readUTF()),
            (i.welcome = e.readUTF()),
            (i.talkDetail = e.readUTF()),
            (i.status = e.getByte()),
            i.setDir(e.getByte()));
          var o = e.getByte(),
            n = e.getByte();
          switch (
            (i.setPosition(o, n),
            (i.rangeX = e.getByte()),
            (i.rangeY = e.getByte()),
            1 == i.isUseMissionData() &&
              ((i.missionData = new Array(4)),
              (i.missionData[0] = e.getShort()),
              (i.missionData[1] = e.getByte()),
              (i.missionData[2] = e.getShort()),
              (i.missionData[3] = e.getByte())),
            i.npcType)
          ) {
            case t.NPC_MONSTER:
              ((i.battleID = new Array(1)),
                (i.battleID[0] = e.getShort()),
                (i.comeOutTime = e.getByte()));
              break;
            case t.NPC_JUMP_MAP:
            case t.NPC_JUMP_MAP_AREA:
              ((i.topic = e.readUTF()),
                (i.jumpMapID = new Array(1)),
                (i.jumpMapID[0] = e.getShort()),
                (i.jumpMapGx = new Array(1)),
                (i.jumpMapGx[0] = e.getByte()),
                (i.jumpMapGy = new Array(1)),
                (i.jumpMapGy[0] = e.getByte()));
              break;
            case t.NPC_SHOP:
              ((i.topic = e.readUTF()),
                (i.shopID = new Array(1)),
                (i.shopID[0] = e.getShort()));
              break;
            case t.NPC_TEACHER:
              ((i.topic = e.readUTF()),
                (i.teacherId = new Array(1)),
                (i.teacherId[0] = e.getShort()));
              break;
            case t.NPC_TRADE:
              i.topic = e.readUTF();
              break;
            case t.NPC_MISSION:
              break;
            case t.NPC_POWER:
              this.readPowerNPCData(i, e);
          }
          return ((i.sourceGx = o), (i.sourceGy = n), i);
        }),
        (t.readPowerNPCData = function (e, t) {
          if (null != e) {
            var i = t.getByte();
            if (i > 0) {
              ((e.menuJumpMap = new Array(i)),
                (e.jumpMapID = new Array(i)),
                (e.jumpMapGx = new Array(i)),
                (e.jumpMapGy = new Array(i)),
                (e.jumpMapReqMissionID = new Array(i)),
                (e.jumpMapReqMissionState = new Array(i)));
              for (var o = 0; i > o; o++)
                ((e.menuJumpMap[o] = t.readUTF()),
                  (e.jumpMapID[o] = t.getShort()),
                  (e.jumpMapGx[o] = t.getByte()),
                  (e.jumpMapGy[o] = t.getByte()),
                  (e.jumpMapReqMissionID[o] = t.getShort()),
                  (e.jumpMapReqMissionState[o] = t.getByte()));
            }
            if (((i = t.getByte()), i > 0)) {
              ((e.menuBattle = new Array(i)),
                (e.battleID = new Array(i)),
                (e.battleReqMissionID = new Array(i)),
                (e.battleReqMissionState = new Array(i)));
              for (var o = 0; i > o; o++)
                ((e.menuBattle[o] = t.readUTF()),
                  (e.battleID[o] = t.getShort()),
                  (e.battleReqMissionID[o] = t.getShort()),
                  (e.battleReqMissionState[o] = t.getByte()));
            }
            if (((i = t.getByte()), i > 0)) {
              ((e.menuShop = new Array(i)),
                (e.shopID = new Array(i)),
                (e.shopReqMissionID = new Array(i)),
                (e.shopReqMissionState = new Array(i)));
              for (var o = 0; i > o; o++)
                ((e.menuShop[o] = t.readUTF()),
                  (e.shopID[o] = t.getShort()),
                  (e.shopReqMissionID[o] = t.getShort()),
                  (e.shopReqMissionState[o] = t.getByte()));
            }
            if (((i = t.getByte()), i > 0)) {
              ((e.menuTeacher = Array(i)),
                (e.teacherId = Array(i)),
                (e.teacherReqMissionID = Array(i)),
                (e.teacherReqMissionState = Array(i)));
              for (var o = 0; i > o; o++)
                ((e.menuTeacher[o] = t.readUTF()),
                  (e.teacherId[o] = t.getShort()),
                  (e.teacherReqMissionID[o] = t.getShort()),
                  (e.teacherReqMissionState[o] = t.getByte()));
            }
          }
        }),
        (t.handlerMissionNPCAction = function (e, i) {
          var o = i[0];
          switch (o) {
            case t.CHOICE_TYPE_QUIT:
              _["default"].closeAllUI();
              break;
            case t.CHOICE_TYPE_STRING:
              _["default"].alertMessage(i[1]);
              break;
            case t.CHOICE_TYPE_MISSION:
              var a = i[1];
              this.handleChoiceMissionAction(a, e);
              break;
            case t.CHOICE_TYPE_POWERNPC:
              var r = i[1],
                s = i[2];
              switch (r) {
                case t.POWER_NPC_JUMPMAP:
                  n["default"].doJumpMap(
                    e.jumpMapID[s],
                    e.jumpMapGx[s],
                    e.jumpMapGy[s],
                  );
                  break;
                case t.POWER_NPC_BATTLE:
                  n["default"].toBattle(e.battleID[s]);
                  break;
                case t.POWER_NPC_SHOP:
                  n["default"].doBrowseShop(e.shopID[s], e);
                  break;
                case t.POWER_NPC_TEACHER:
                  n["default"].openShopSkill(e.teacherId[s]);
              }
              break;
            case t.CHOICE_TYPE_JUMP_MAP:
              n["default"].doJumpMap(
                e.jumpMapID[0],
                e.jumpMapGx[0],
                e.jumpMapGy[0],
              );
              break;
            case t.CHOICE_TYPE_SHOP:
              n["default"].doBrowseShop(e.shopID[0], e);
              break;
            case t.CHOICE_TYPE_SKILL_SHOP:
              n["default"].openShopSkill(e.teacherId[0]);
              break;
            case t.CHOICE_TYPE_TRADE:
            case t.CHOICE_TYPE_TRADE_OLD:
              var l = n["default"].myPlayer;
              if (null == l || l.isShopMode()) return;
              _["default"].createGoodsUI(!1);
          }
        }),
        (t.doSpecialNpc = function (e, i) {
          if (null == i) return !1;
          var o = [],
            n = [],
            a = -1;
          if (
            (i.npcType == t.NPC_JUMP_MAP || i.npcType == t.NPC_JUMP_MAP_AREA
              ? (a = t.CHOICE_TYPE_JUMP_MAP)
              : i.npcType == t.NPC_TEACHER
                ? (a = t.CHOICE_TYPE_SKILL_SHOP)
                : i.npcType == t.NPC_SHOP
                  ? (a = t.CHOICE_TYPE_SHOP)
                  : i.npcType == t.NPC_TRADE && (a = t.CHOICE_TYPE_TRADE),
            0 > a)
          )
            return !1;
          (o.push([a == t.CHOICE_TYPE_JUMP_MAP ? i.topic || i.name : i.topic]),
            n.push([a, i]),
            o.length ||
              (o.push([r.GameText.getText(r.GameText.TI_QUIT)]),
              n.push([t.CHOICE_TYPE_QUIT])));
          var s = { player: e, npc: i };
          return (
            _["default"].createMissionUI(
              a == t.CHOICE_TYPE_JUMP_MAP ? i.name || i.topic : i.name,
              i.talkDetail,
              o,
              n,
              null,
              _["default"].SUB_MISSION_NPC_MENU,
              s,
            ),
            !0
          );
        }),
        (t.doMissionNpc = function (e, i) {
          if (
            null != e &&
            null != i &&
            i.npcType != t.NPC_MONSTER &&
            i.npcType != t.NPC_SIGN
          ) {
            var o,
              a = n["default"].getCurMapID(),
              s = [],
              l = [],
              u = [],
              p = [],
              c = null,
              h = e.missionList;
            if (null != h && h.length > 0)
              for (var T = 0; T < h.length; T++)
                if (
                  ((c = h[T]), null != c && 0 != c.isVisibleAndSubmit(i, a))
                ) {
                  o = c.getMissionStatus(e);
                  var E = c.name;
                  s.push([E, o]);
                  var y = [t.CHOICE_TYPE_MISSION, c];
                  (l.push(y), o == d.MissionConst.CAN_SUBMIT && u.push(y));
                }
            var g = i.missions;
            if (null != g && g.length > 0)
              for (var T = 0; T < g.length; T++) {
                var v = g[T];
                if (
                  null != v &&
                  null == e.getMissionById(v.getId()) &&
                  1 != d["default"].isMissionFinish(e, v.getId()) &&
                  ((o = v.getMissionStatus(e)),
                  o != d.MissionConst.NOT_CAN_ACCEPT ||
                    0 != v.isShowNotAcceptMission(e))
                ) {
                  var E = v.name;
                  s.push([E, o]);
                  var y = [t.CHOICE_TYPE_MISSION, v];
                  (l.push(y),
                    o == d.MissionConst.CAN_SUBMIT
                      ? u.push(y)
                      : o == d.MissionConst.CAN_ACCEPT && p.push(y));
                }
              }
            if (
              (i.npcType == t.NPC_POWER && t.addPowerNPCChoice(e, i, s, l),
              1 == s.length && 1 == l.length)
            ) {
              var S = l[0];
              if (null != S) {
                var I = S[0];
                if (I == t.CHOICE_TYPE_MISSION)
                  return void t.handlerMissionNPCAction(i, S);
              }
            } else if (1 == u.length && i.npcType == t.NPC_MISSION)
              return void t.handlerMissionNPCAction(i, u[0]);
            var m = f.MainPlayerAi.ins;
            if (m.open && m.curMission) {
              for (var A = 0, C = u; A < C.length; A++) {
                var P = C[A];
                if (P[1].id == m.curMission.id)
                  return void t.handlerMissionNPCAction(i, P);
              }
              if (
                m.curMission.type == d.MissionType.TASK_TYPE_MAIN &&
                m.curMission.status == d.MissionConst.CAN_ACCEPT
              )
                for (var R = 0, O = p; R < O.length; R++) {
                  var N = O[R];
                  if (N[1].id == m.curMission.id)
                    return void t.handlerMissionNPCAction(i, N);
                }
            }
            s.length ||
              (s.push([r.GameText.getText(r.GameText.TI_QUIT)]),
              l.push([t.CHOICE_TYPE_QUIT]));
            var M = { player: e, npc: i };
            _["default"].createMissionUI(
              i.name,
              i.talkDetail,
              s,
              l,
              null,
              _["default"].SUB_MISSION_NPC_MENU,
              M,
            );
          }
        }),
        (t.addPowerNPCChoice = function (e, i, o, n) {
          if (null != i && null != o && null != n) {
            if (null != i.menuJumpMap && i.menuJumpMap.length > 0)
              for (var a = 0; a < i.menuJumpMap.length; a++)
                0 !=
                  d["default"].checkPlayerMissionStatus(
                    e,
                    i.jumpMapReqMissionID[a],
                    i.jumpMapReqMissionState[a],
                  ) &&
                  (o.push([i.menuJumpMap[a]]),
                  n.push([t.CHOICE_TYPE_POWERNPC, t.POWER_NPC_JUMPMAP, a]));
            if (null != i.menuBattle && i.menuBattle.length > 0)
              for (var a = 0; a < i.menuBattle.length; a++)
                0 !=
                  d["default"].checkPlayerMissionStatus(
                    e,
                    i.battleReqMissionID[a],
                    i.battleReqMissionState[a],
                  ) &&
                  (o.push([i.menuBattle[a]]),
                  n.push([t.CHOICE_TYPE_POWERNPC, t.POWER_NPC_BATTLE, a]));
            if (null != i.menuShop && i.menuShop.length > 0)
              for (var a = 0; a < i.menuShop.length; a++)
                if (
                  0 !=
                  d["default"].checkPlayerMissionStatus(
                    e,
                    i.shopReqMissionID[a],
                    i.shopReqMissionState[a],
                  )
                ) {
                  var r = i.menuShop[a];
                  (go.openPay ||
                    (!r.includes("抽大奖") && !r.includes("游戏攻略"))) &&
                    (o.push([r]),
                    n.push([t.CHOICE_TYPE_POWERNPC, t.POWER_NPC_SHOP, a]));
                }
            if (null != i.menuTeacher && i.menuTeacher.length > 0)
              for (var a = 0; a < i.menuTeacher.length; a++)
                0 !=
                  d["default"].checkPlayerMissionStatus(
                    e,
                    i.teacherReqMissionID[a],
                    i.teacherReqMissionState[a],
                  ) &&
                  (o.push([i.menuTeacher[a]]),
                  n.push([t.CHOICE_TYPE_POWERNPC, t.POWER_NPC_TEACHER, a]));
          }
        }),
        (t.prototype.isInJumpMapArea = function (e, t) {
          var i = this.sourceGx,
            o = this.sourceGy,
            n = this.rangeX,
            a = this.rangeY;
          return e >= i - n && i + n >= e && t >= o - a && o + a >= t ? !0 : !1;
        }),
        (t.prototype.resetVisibleData = function () {
          (this.setTabStatus(!1, s.ModelConst.NPC_MISSION_DISPLAY),
            this.setTabStatus(!1, s.ModelConst.NPC_MISSION_HIDE),
            this.setVisible(this.isInitVisible()),
            this.setEnable(this.isInitEnable()),
            (this.comeOutCounter = -1));
        }),
        (t.prototype.checkSetHidePlayer = function () {
          0 != this.isVisible() && 0 == this.isHidePlayer();
        }),
        (t.prototype.isHidePlayer = function () {
          return 0 != (this.status & t.STATUS_HIDE_PLAYER);
        }),
        (t.prototype.hide = function (e) {
          0 != this.isVisible() &&
            ((this.isCurTarget = !1),
            this.setVisible(!1),
            this.setEnable(!1),
            1 == e
              ? n["default"].isAccelerate
                ? (this.comeOutCounter =
                    (1e3 * this.comeOutTime) / n["default"].MONSTER_UPDATE)
                : (this.comeOutCounter = 1e3 * this.comeOutTime)
              : n["default"].isAccelerate
                ? (this.comeOutCounter = 1e4 / n["default"].MONSTER_UPDATE)
                : (this.comeOutCounter = 1e4));
        }),
        (t.prototype.isMonsterInBattle = function (e, i) {
          var o = this;
          if (!(
            o.npcType == t.NPC_MONSTER &&
            o.isVisible() &&
            o.isEnable() &&
            o.battleID &&
            o.battleID.length
          ))
            return !1;
          var a = o.battleID[0],
            r = n["default"].getMonsterGroup(a);
          if (!r) return !1;
          for (var s = 0, l = e; s < l.length; s++) {
            var u = l[s];
            if (r.monsters.includes(u)) return !0;
          }
          return !1;
        }),
        (t.NPC_MISSION = 0),
        (t.NPC_MONSTER = 1),
        (t.NPC_SHOP = 2),
        (t.NPC_JUMP_MAP = 3),
        (t.NPC_SIGN = 4),
        (t.NPC_POWER = 5),
        (t.NPC_GIFT = 6),
        (t.NPC_TEACHER = 7),
        (t.NPC_JUMP_MAP_AREA = 8),
        (t.NPC_TRADE = 9),
        (t.NPC_GUILD = 10),
        (t.NPC_BUILDING = 11),
        (t.NPC_PET_RECOVER = 12),
        (t.STATUS_VISIBLE = 1),
        (t.STATUS_ENABLE = 2),
        (t.STATUS_PASSABLE = 4),
        (t.STATUS_MISSION_DATA_USE = 8),
        (t.STATUS_MISSION_LOAD_EVERY_TIME = 16),
        (t.STATUS_JUMP_ICON = 32),
        (t.STATUS_HIDE_PLAYER = 64),
        (t.STATUS_GUIDE_NPC = 128),
        (t.STATUS_INIT_VISIBLE = 1024),
        (t.STATUS_INIT_ENABLE = 2048),
        (t.SHOW_WELCOME_RANGE = 60),
        (t.POWER_NPC_JUMPMAP = 0),
        (t.POWER_NPC_BATTLE = 1),
        (t.POWER_NPC_SHOP = 2),
        (t.POWER_NPC_TEACHER = 3),
        (t.CHOICE_TYPE_STRING = 0),
        (t.CHOICE_TYPE_MISSION = 1),
        (t.CHOICE_TYPE_POWERNPC = 2),
        (t.CHOICE_TYPE_JUMP_MAP = 3),
        (t.CHOICE_TYPE_SHOP = 4),
        (t.CHOICE_TYPE_SKILL_SHOP = 5),
        (t.CHOICE_TYPE_TRADE = 6),
        (t.CHOICE_TYPE_TRADE_OLD = 8),
        (t.CHOICE_TYPE_QUIT = 7),
        t
      );
    })(p.ModelVo);
  t["default"] = g;
});
