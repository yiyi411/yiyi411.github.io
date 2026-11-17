(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(17),
    a = i(55),
    r = i(5),
    s = i(936),
    l = i(74),
    u = i(72),
    _ = i(26),
    d = i(149),
    p = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return ((t._posCnt = 10), (t._curLv = 0), t);
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, "actMgr", {
          get: function () {
            return this._actMgr;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.onAdded = function () {
          (e.prototype.onAdded.call(this),
            this._headMgr.addPosSpr(),
            (this._curLv = this.vo.level));
        }),
        (t.prototype.updateName = function () {}),
        (t.prototype.setWorldPos = function (t, i) {
          e.prototype.setWorldPos.call(this, t, i);
          var o = u["default"].ins.scale,
            n = this.parent;
          n.updateFocus(t * o, i * o);
        }),
        (t.prototype.setTilePos = function (t, i, n) {
          (void 0 === n && (n = !0),
            e.prototype.setTilePos.call(this, t, i, n));
          var a = this.parent;
          (a.map.checkClearArrow(t, i),
            this.updateDepth(),
            o["default"].sendNt(_.SceneEvent.ON_MAIN_PLAYER_POS_CHANGED));
        }),
        (t.prototype.onMoveEnd = function (t) {
          (void 0 === t && (t = !1), e.prototype.onMoveEnd.call(this, t));
          var i = this.parent;
          i.dispatcher.dispatchEventWith(_.SceneEvent.ON_MAIN_PLAYER_MOVE, !1);
        }),
        (t.prototype.autoMove = function (e, t) {
          if (!e || !e.length) return void n["default"].release(t);
          for (var i = !1; e.length;) {
            var o = e.shift();
            if (2 == o.length) {
              var a = 0 == e.length,
                u = o[0],
                _ = o[1],
                d = null,
                p = 0;
              if (a) {
                ((d = t), (t = null));
                var c = r["default"].getNPC(u, _);
                (this.vo.autoMoveEndPt.setTo(u, _),
                  !c ||
                    (c.npcType == l["default"].NPC_MONSTER &&
                      c.npcType == l["default"].NPC_JUMP_MAP_AREA) ||
                    (p = 1));
              }
              var h = this.moveTo(u, _, d, p);
              i = h > 0;
            } else if (3 == o.length) {
              var f = n["default"].alloc(s.JumpMap);
              (f.setData(o), this._actMgr.add(f));
              break;
            }
          }
          (i && (this.vo.isAutoMoving = !0), t && n["default"].release(t));
        }),
        (t.prototype.stopAutoMove = function () {
          var e = this,
            t = e.vo;
          if (
            ((t.isAutoMoving = !1),
            this.actMgr.removeAll(),
            (this.act = _.SpriteAction.STAND),
            u["default"].ins.isBlock(t.x, t.y))
          ) {
            var i = 5,
              o = u["default"].getPointByCenter(t.x, t.y, i, i);
            (e.setTilePos(o.x, o.y, !0), n["default"].release(o));
          }
        }),
        (t.prototype.onLevelUpdate = function () {
          this.vo.level > this._curLv &&
            ((this._curLv = this.vo.level),
            a.SpriteTool.playEftSpr(
              a.SprConst.SPRITE_LEVUP_UP,
              0,
              0,
              this.dsp,
              void 0,
              void 0,
              void 0,
              void 0,
              1,
            ));
        }),
        Object.defineProperty(t.prototype, "moveEnable", {
          get: function () {
            return !this.vo.isMember();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.onRelease = function () {
          ((this._curLv = 0), e.prototype.onRelease.call(this));
        }),
        t
      );
    })(d["default"]);
  t["default"] = p;
});
