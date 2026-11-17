(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }), (t.Model = void 0));
  var o = i(17),
    n = i(11),
    a = i(58),
    r = i(100),
    s = i(937),
    l = i(171),
    u = i(938),
    _ = i(940),
    d = i(72),
    p = i(26),
    c = i(4),
    h = i(5),
    f = i(54),
    T = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return ((t._maxH = 0), (t._maxW = 0), t);
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, "dir", {
          get: function () {
            return this._dir;
          },
          set: function (e) {
            switch (((this._dir = e), this.vo.setDir(e), e)) {
              case p.Direction.RIGHT:
              case p.Direction.RIGHT_DOWN:
              case p.Direction.RIGHT_UP:
              case p.Direction.UP:
                e = p.Direction.RIGHT;
                break;
              case p.Direction.LEFT:
              case p.Direction.LEFT_UP:
              case p.Direction.LEFT_DOWN:
              case p.Direction.DOWN:
                e = p.Direction.LEFT;
            }
            this._sprite && (this._sprite.dir = e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "act", {
          get: function () {
            return this._act;
          },
          set: function (e) {
            this._act != e &&
              ((this._act = e),
              this._sprite && this._sprite.setCurAnimation(e));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.updateVo = function (t) {
          e.prototype.updateVo.call(this);
          var i = this;
          i.vo &&
            (i.setTilePos(i.vo.x, i.vo.y),
            (this.dir = this.vo.dir),
            this.updateName(),
            this.updateSprite(t));
        }),
        (t.prototype.updateName = function () {
          this._headMgr.setName(this.vo.name);
        }),
        (t.prototype.updateVisible = function () {
          var e = this;
          ((e.visible = e.vo.isVisible() && !f["default"].ins.isFight),
            e._sprite && (e.visible ? e._sprite.play() : e._sprite.stop()));
        }),
        (t.prototype.addSprite = function () {
          var e = this;
          e._sprite ||
            ((e._sprite = o["default"].alloc(r["default"])),
            (e._sprite.autoPlay = !0),
            (e._sprite.animLoaded = n["default"].alloc(e, e.onSprAnimLoaded)),
            e.dsp.addChildAt(e._sprite, 0));
        }),
        (t.prototype.onSprAnimLoaded = function () {
          var e = this;
          if (e._sprite) {
            var t = e._sprite.getWidth(),
              i = e._sprite.getHeight(),
              o = !1;
            (t != e._maxW && ((e._maxW = t), (o = !0)),
              i != e._maxH && ((e._maxH = i), (o = !0)),
              o && e.onSharpUpdate());
          }
        }),
        (t.prototype.removeSprite = function () {
          var e = this;
          if (e._sprite) {
            var t = e._sprite;
            ((e._sprite = null), o["default"].release(t));
          }
        }),
        (t.prototype.updateSprite = function (e) {
          var t = this;
          (t.updateVisible(),
            t.visible && t._sprite && (t.setSpriteSrc(e), this.updateVipSpr()));
        }),
        (t.prototype.updateVipSpr = function () {
          var e = this;
          e._sprite && e._sprite.setVipLv(e.vo.getVipLevel2());
        }),
        (t.prototype.setSpriteSrc = function (e) {
          var t = this,
            i = t.vo.icon1;
          if (i)
            if (e) {
              var o = t.vo.id == h["default"].myPlayer.id,
                n = o ? a.LoadPri.SceneMain : a.LoadPri.Scene;
              t._sprite.setIcon(t.vo.icon1, t.vo.icon2, t.vo.icon3, !1, n);
            } else t._sprite.setSrc(i, a.LoadPri.Scene);
        }),
        (t.prototype.onMoveStart = function () {
          this.act = p.SpriteAction.MOVE;
        }),
        (t.prototype.onMoveEnd = function (e) {
          (void 0 === e && (e = !1), e || (this.act = p.SpriteAction.STAND));
        }),
        (t.prototype.moveTo = function (e, t, i, n) {
          void 0 === n && (n = 0);
          var a = d["default"].findPath(this.vo.x, this.vo.y, e, t, n);
          if (!a) return (o["default"].release(i), -1);
          if (a.length < 2)
            return (
              o["default"].releaseList(a),
              i && (i.exec(), o["default"].release(i)),
              0
            );
          var r = o["default"].alloc(l["default"]);
          return (r.setPath(a, i), this._actMgr.add(r), 1);
        }),
        (t.prototype.stopMove = function () {
          (this._actMgr &&
            this.isMoving &&
            this._actMgr.removeAllActByCls(l["default"]),
            (this.act = p.SpriteAction.STAND));
        }),
        (t.prototype.setWorldPos = function (t, i) {
          0 > t ||
            0 > i ||
            (e.prototype.setWorldPos.call(this, t, i), this.updateRect());
        }),
        Object.defineProperty(t.prototype, "isMoving", {
          get: function () {
            return this._actMgr && this._actMgr.curAct instanceof l["default"];
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getMoveSpeed = function () {
          var e = h["default"].getModel(this.vo.follower) || this.vo;
          return (
            (h["default"].getSpeed(e) / c["default"].FRAME_RATE) *
            1.5 *
            1.5 *
            (go.moveSpeed || 1)
          );
        }),
        (t.prototype.onAdded = function () {
          (e.prototype.onAdded.call(this), (this.dsp.name = this.vo.name));
        }),
        (t.prototype.onAlloc = function () {
          e.prototype.onAlloc.call(this);
          var t = this;
          (t.addSprite(),
            (t._actMgr = o["default"].alloc(s["default"])),
            t.add(t._actMgr),
            (t._headMgr = o["default"].alloc(u["default"])),
            t.add(t._headMgr),
            (t.rect = o["default"].alloc(egret.Rectangle)));
        }),
        (t.prototype.onSharpUpdate = function () {
          (this.updateHeadMgrY(), this.updateRect());
          (this.getHeight(), this.getWidth());
        }),
        (t.prototype.updateRect = function () {
          var e = this.getHeight(),
            t = this.getWidth();
          this.rect && this.rect.setTo(this.x - (t >> 1), this.y - e, t, e);
        }),
        (t.prototype.updateHeadMgrY = function () {
          this._headMgr.y = -(this.getHeight() + this._headMgr.height);
        }),
        (t.prototype.getHeight = function () {
          return this._maxH;
        }),
        (t.prototype.getWidth = function () {
          return this._maxW;
        }),
        Object.defineProperty(t.prototype, "isMonster", {
          get: function () {
            return this.vo ? this.vo.isMonster : void 0;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.advanceTime = function (t) {
          e.prototype.advanceTime.call(this, t);
        }),
        (t.prototype.onRelease = function () {
          var t = this;
          (o["default"].release(t.rect),
            (t.rect = null),
            t.removeSprite(),
            (t._actMgr = void 0),
            (t._headMgr = void 0),
            (t._maxW = 0),
            (t._maxH = 0),
            (t._act = void 0),
            (t._dir = void 0),
            e.prototype.onRelease.call(this));
        }),
        t
      );
    })(_["default"]);
  t.Model = T;
});
