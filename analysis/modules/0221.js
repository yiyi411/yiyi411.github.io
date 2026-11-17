(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(2),
    n = i(0),
    a = i(37),
    r = i(4),
    s = i(1),
    l = i(22),
    u = i(18),
    _ = i(19),
    d = i(33),
    p = i(5),
    c = i(1467),
    h = i(256),
    f = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        __extends(t, e),
        (t.prototype.initialize = function () {
          var t = this;
          (e.prototype.initialize.call(this),
            t.onProto(pb.EUserProtocol.S2C_LEGION_INFO, t.onUpdateLegionInfo),
            t.onProto(
              pb.EUserProtocol.S2C_LEGION_FORMATION,
              t.onUpdateFormation,
            ),
            t.onProto(pb.EUserProtocol.S2C_LEGION_BATTLE, t.onBattle),
            t.onProto(pb.EUserProtocol.S2C_LEGION_EXP_REWARD, t.onExpReward),
            t.onProto(pb.EUserProtocol.S2C_LEGION_ACTOR_HP, t.onUpdateActorHp),
            this.onProto(
              _["default"].CG_LEGION_CHANGE_NOTIFY,
              this.onLegionChangeMsg,
              this,
            ),
            this.onProto(
              _["default"].CG_LOGIN_ACTORLIST_INFO,
              this.onLegionActorlistMsg,
              this,
            ),
            t.initData());
        }),
        (t.prototype.initData = function () {
          (this._LegionData || (this._LegionData = new c["default"]()),
            this._playLegionDataMap || (this._playLegionDataMap = {}));
        }),
        (t.prototype.onUpdateLegionInfo = function (e) {
          var t = e.body,
            i = t.proto;
          (this._LegionData.updateInfo(i),
            this.sendNt(o.LegionEvent.legionUpdate));
        }),
        (t.prototype.sendLegionInfo = function () {
          var e = new l.Message(pb.EUserProtocol.C2S_LEGION_INFO);
          this.sendProto(e);
        }),
        (t.prototype.sendLegionFormation = function (e, t, i, o) {
          void 0 === o && (o = 0);
          var n = new l.Message(pb.EUserProtocol.C2S_LEGION_FORMATION),
            a = n.proto;
          ((a.type = e),
            (a.legionId = t),
            (a.index = i),
            (a.actorId = o),
            this.sendProto(n));
        }),
        (t.prototype.sendBattle = function (e) {
          var t = new l.Message(pb.EUserProtocol.C2S_LEGION_BATTLE),
            i = t.proto;
          ((i.legionId = e), this.sendProto(t));
        }),
        (t.prototype.onUpdateFormation = function (e) {
          var t = e.body,
            i = t.proto;
          (this._LegionData.updateFormation(i),
            this.sendNt(o.LegionEvent.legionFormation));
        }),
        (t.prototype.onBattle = function (e) {
          var t = e.body,
            i = t.proto;
          this._LegionData.updateBattle(i.legionId);
          p["default"].myPlayer;
          this.sendNt(o.LegionEvent.legionBattle);
        }),
        (t.prototype.onLegionChangeMsg = function (e) {
          var t = e.body,
            i = t.getInt(),
            o = p["default"].getModel(i);
          if (o) {
            o.clearLegionList();
            for (var n = t.getByte(), a = 0; n > a; a++) {
              var r = h["default"].fromBytesVo(t);
              o.addLegionVo(r, !0);
            }
          }
        }),
        (t.prototype.onLegionActorlistMsg = function (e) {
          for (var t = e.body, i = t.getByte(), o = 0; i > o; o++) {
            var n = t.getInt();
            (this._playLegionDataMap[n] ||
              (this._playLegionDataMap[n] = new h["default"]()),
              u["default"].processDataPlayerDetail(
                t,
                this._playLegionDataMap[n],
              ));
            var a = this._playLegionDataMap[n],
              r = a.bag;
            null == r
              ? ((r = new d["default"](a)), a.setBag(r))
              : r.clearEquipAndBagItem();
            var s = [];
            ((s = u["default"].processDataPlayerItemMsg(t)),
              r.initBagItem(s),
              (this._playLegionDataMap[n].skillList = u[
                "default"
              ].processDataPlayerSkillMsg(t, !0)));
          }
        }),
        (t.prototype.onExpReward = function (e) {
          var t = e.body,
            i = t.proto,
            o = i.exp;
          o > 0 &&
            s["default"].showModal(
              n.ModName.Legion,
              n.LegionViewType.LegionTips,
              o,
            );
        }),
        (t.prototype.onUpdateActorHp = function (e) {
          for (var t = e.body, i = t.proto, o = 0; o < i.infos.length; o++) {
            var n = i.infos[o],
              a = this._playLegionDataMap[n.actorId];
            if (a) {
              ((a.hp = n.hp),
                (a.hpMax = n.maxHp),
                (a.mp = n.mp),
                (a.mpMax = n.maxMp));
              var r = a.getPet();
              null != r && ((r.hp = n.petHp), (r.mp = n.petMp));
            }
          }
        }),
        (t.prototype.updateRole = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
              return (
                (p["default"].legionSelectId = e),
                p["default"].doLogOutMsg(
                  r["default"].ACTOR_LEAVE_TYPE_BACKTOLIST,
                  !0,
                ),
                [2]
              );
            });
          });
        }),
        (t.prototype.checkNowActorIsStateFull = function () {
          for (
            var e = !0, t = this._LegionData.getNowActorList(), i = 0;
            i < t.length;
            i++
          ) {
            var o = t[i],
              n = this._playLegionDataMap[o];
            if (n && ((e = n.isStateFull()), !e)) break;
          }
          return e;
        }),
        Object.defineProperty(t.prototype, "nowSelectLegionId", {
          get: function () {
            return this._nowSelectLegionId;
          },
          set: function (e) {
            this._nowSelectLegionId = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "LegionData", {
          get: function () {
            return this._LegionData;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "playLegionDataMap", {
          get: function () {
            return this._playLegionDataMap || {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.onFormation = 1),
        (t.offFormation = 2),
        t
      );
    })(a["default"]);
  t["default"] = f;
});
