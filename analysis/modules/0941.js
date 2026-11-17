(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(17),
    n = i(16),
    a = i(55),
    r = i(12),
    s = i(8),
    l = i(136),
    u = i(74),
    _ = i(192),
    d = i(237),
    p = i(72),
    c = i(306),
    h = i(172),
    f = i(100),
    T = i(4),
    E = i(18),
    y = i(43),
    g = i(5),
    v = i(3),
    S = i(2),
    I = i(308),
    m = i(64),
    A = 8,
    C = 3,
    P = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return ((t.nextMoveTime = 0), t);
      }
      return (
        __extends(t, e),
        (t.prototype.updateVo = function (t) {
          (this.updateMissionIcon(), e.prototype.updateVo.call(this, t));
        }),
        (t.prototype.onSharpUpdate = function () {
          (e.prototype.onSharpUpdate.call(this),
            this.updateSignPos(),
            this.updateWelcomePos());
        }),
        (t.prototype.onSprAnimLoaded = function () {
          (e.prototype.onSprAnimLoaded.call(this),
            v["default"].sendNt(S.MainEvent.NPC_LOADED, this));
        }),
        (t.prototype.updateWelcomePos = function () {
          this.welcomeFrame &&
            ((this.welcomeFrame.x = -this.welcomeFrame.width >> 1),
            (this.welcomeFrame.y =
              -this.welcomeFrame.height - this.getHeight() - 10));
        }),
        (t.prototype.updateSignPos = function () {
          this.missionSign &&
            ((this.missionSign.y =
              -this.getHeight() - this.missionSign.height - 5),
            (this.missionSign.x = -(this.missionSign.width >> 1)));
        }),
        (t.prototype.updateMissionIcon = function () {
          var e = this.vo.getSign(),
            t = this.vo.missions;
          if (e == r.ModelConst.NPC_MSS_ACCEPT && t) {
            for (var i = !1, n = 0, a = t; n < a.length; n++) {
              var s = a[n],
                l = s.getMissionStatus();
              if (l == m.MissionConst.CAN_ACCEPT) {
                i = !0;
                break;
              }
            }
            if (!i) {
              e = r.ModelConst.NPC_MSS_NONE;
              for (var u = 0, d = t; u < d.length; u++) {
                var s = d[u];
                if (s.isShowNotAcceptMission(g["default"].myPlayer)) {
                  e = r.ModelConst.NPC_MSS_NOT_ACCEPT;
                  break;
                }
              }
            }
          }
          return e
            ? (this.missionSign ||
                ((this.missionSign = o["default"].alloc(_.MissionSign)),
                this.add(this.missionSign)),
              this.missionSign.setSign(e),
              void this.updateSignPos())
            : void (
                this.missionSign &&
                (o["default"].release(this.missionSign),
                (this.missionSign = null))
              );
        }),
        (t.prototype.updateName = function () {
          var e =
              this.vo.npcType == u["default"].NPC_MONSTER ? 16716288 : 1900540,
            t = this.vo.npcType == u["default"].NPC_MONSTER ? 1380111 : 0;
          this._headMgr.setName(this.vo.name, e, t);
        }),
        (t.prototype.checkIsInScreen = function (e) {
          var t = this.parent;
          if (!t) return !1;
          var i = p["default"].ins.scale,
            o = this.x - I["default"].NPC_WIDTH_HALF,
            n = this.y - I["default"].NPC_HEIGHT,
            a = t.isInScreen(
              o * i,
              n * i,
              I["default"].NPC_WIDTH * i,
              I["default"].NPC_HEIGHT * i,
              e,
            );
          return (
            this._isInScreen != a &&
              ((this._isInScreen = a), a && this.updateDepth()),
            a
          );
        }),
        (t.prototype.isInScreen = function () {
          return this.checkIsInScreen(!0);
        }),
        (t.prototype.getHeight = function () {
          return this.vo
            ? this.vo.icon1.toNumber() == a.SprConst.SPRITE_JUMP_MAP
              ? 40
              : e.prototype.getHeight.call(this)
            : a.SprConst.SPRITE_HEIGHT;
        }),
        (t.prototype.createMoveControl = function () {
          if (this.vo) {
            var e = this.vo;
            if (
              !e.isCurTarget &&
              !g["default"].isAccelerate &&
              e.npcType == u["default"].NPC_MONSTER &&
              0 != e.isVisible() &&
              0 != e.isEnable() &&
              !(e.rangeX <= 0 || e.rangeY <= 0 || this.isMoving)
            ) {
              var t = l["default"].randomBetween(C, A);
              this.nextMoveTime = n["default"].timer.time + 1e3 * t;
              var i = p["default"].randomPointByRange(
                e.sourceGx,
                e.sourceGy,
                e.rangeX,
                e.rangeY,
              );
              (this.moveTo(i.x, i.y), o["default"].release(i));
            }
          }
        }),
        (t.prototype.onAlloc = function () {
          e.prototype.onAlloc.call(this);
        }),
        (t.prototype.onAdded = function () {
          var t = this.vo;
          (t && t.init(),
            e.prototype.onAdded.call(this),
            p["default"].ins.isBlock(t.x, t.y),
            this.updateDepth(),
            this.getNpcMissionData());
        }),
        (t.prototype.getNpcMissionData = function () {
          var e = this.vo;
          if (
            e.isVisible &&
            e.isEnable &&
            !e.isTabStatus(r.ModelConst.NPC_MISSION_LOAD)
          ) {
            var t = e.getSign();
            if (
              t == r.ModelConst.NPC_MSS_ACCEPT ||
              t == r.ModelConst.NPC_MSS_SUBMIT
            ) {
              var i =
                e.npcType == u["default"].NPC_MISSION ||
                e.npcType == u["default"].NPC_POWER;
              if (i) {
                var o = E["default"].createGetMissionDataMsg(e.id);
                y["default"].Service.sendProto(o);
              }
            }
          }
        }),
        (t.prototype.setWorldPos = function (t, i) {
          e.prototype.setWorldPos.call(this, t, i + 12);
        }),
        (t.prototype.updateDepth = function () {
          var e = this,
            t = e.dsp;
          if (t && t.parent) {
            for (var i, o = t.parent, n = 0, a = o.numChildren; a > n; n++) {
              var r = o.getChildAt(n);
              if (
                t != r &&
                (r instanceof h["default"] || r instanceof f["default"])
              ) {
                var s = r instanceof h["default"] ? r.y + r.height : r.y;
                t.y > s && (i = n);
              }
            }
            ((i = void 0 == i ? 0 : i + 1), o.setChildIndex(t, i));
          }
        }),
        (t.prototype.onRelease = function () {
          ((this.missionSign = void 0),
            (this.welcomeFrame = void 0),
            e.prototype.onRelease.call(this));
        }),
        (t.prototype.showWelcome = function () {
          (this.initWelcome(),
            this.welcomeFrame &&
              this.vo.isTabStatus(r.ModelConst.MOVE_NPC_WELCOME) &&
              (this.vo.setTabStatus(!1, r.ModelConst.MOVE_NPC_WELCOME),
              this.welcomeFrame.setDrawCount(60 * T["default"].FRAME_RATE)));
        }),
        (t.prototype.hideWelcome = function () {
          this.welcomeFrame &&
            (this.welcomeFrame.setDrawCount(-1),
            this.vo.setTabStatus(!0, r.ModelConst.MOVE_NPC_WELCOME));
        }),
        (t.prototype.initWelcome = function () {
          1 != s.Tool.isNullText(this.vo.welcome) &&
            this.vo.npcType != u["default"].NPC_MONSTER &&
            (this.welcomeFrame ||
              ((this.welcomeFrame = o["default"].alloc(d["default"])),
              (this.welcomeFrame.text = this.vo.welcome),
              this.add(this.welcomeFrame),
              this.vo.setTabStatus(!0, r.ModelConst.MOVE_NPC_WELCOME),
              this.updateWelcomePos()));
        }),
        (t.prototype.hide = function (e) {
          (this.vo.hide(e), this.updateSprite());
        }),
        (t.prototype.advanceTime = function (t) {
          return (
            e.prototype.advanceTime.call(this, t),
            n["default"].timer.time > this.nextMoveTime &&
              this.createMoveControl(),
            this.vo.comeOutCounter > 0
              ? ((this.vo.comeOutCounter -= t),
                void (
                  this.vo.comeOutCounter <= 0 &&
                  ((this.vo.comeOutCounter = 0),
                  this.vo.setVisible(!0),
                  this.vo.setEnable(!0),
                  this.updateSprite())
                ))
              : void 0
          );
        }),
        t
      );
    })(c.Model);
  t["default"] = P;
});
