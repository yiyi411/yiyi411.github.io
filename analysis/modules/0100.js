(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o,
    n = i(17),
    a = i(11),
    r = i(58),
    s = i(59),
    l = i(26),
    u = i(12),
    _ = i(29),
    d = i(364),
    p = i(55),
    c = i(4),
    h = i(8);
  !(function (e) {
    ((e[(e.CLOAK = 0)] = "CLOAK"),
      (e[(e.INNER = 1)] = "INNER"),
      (e[(e.ANIM = 2)] = "ANIM"),
      (e[(e.VIP = 3)] = "VIP"));
  })(o || (o = {}));
  var f = [19027, 19027, 19027, 19028, 19029, 19030, 19031, 19032, 19033],
    T = 1226,
    E = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t._fragFiles = []),
          (t._isPet = !1),
          (t._needChanged = !1),
          (t.animations = {}),
          (t.nameID = -1),
          (t.autoPlay = !1),
          (t.autoRemove = !1),
          (t._isMotionAlive = !0),
          (t.spriteStatusFlag = 0),
          t
        );
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, "endHandle", {
          set: function (e) {
            var t = this;
            (n["default"].release(t._endHandler), (t._endHandler = e));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "animLoaded", {
          set: function (e) {
            var t = this;
            (n["default"].release(t._animLoaded), (t._animLoaded = e));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.setVipLv = function (e) {
          var i = this;
          if (!e || 1 > e) return void i.removeVipSpr();
          var a = i.vipSprite;
          if (a) {
            if (a._vipLv == e) return;
            return (
              (a._needChanged = !0),
              (a._vipLv = e),
              void a.setSrc(T, i._pri)
            );
          }
          ((a = n["default"].alloc(t)),
            (a.autoPlay = !0),
            (a._needChanged = !0),
            (a._vipLv = e),
            a.setSrc(T, i._pri),
            (a.x += 20),
            (a.y = -this.getHeight() + 10),
            i.addChildAt(a, o.VIP),
            (i.vipSprite = a));
        }),
        (t.prototype.removeVipSpr = function () {
          var e = this;
          e.vipSprite &&
            (n["default"].release(e.vipSprite), (e.vipSprite = null));
        }),
        (t.prototype.setInnerSprite = function (e) {
          if (e && !this.isExtTransport()) {
            var t = this;
            ((t.innerSprite = e), t.addChildAt(t.innerSprite, 0));
          }
        }),
        (t.prototype.removeInner = function () {
          var e = this;
          if (e.innerSprite) {
            var t = e.innerSprite.parent;
            (t == this && t.removeChild(e.innerSprite), (e.innerSprite = null));
          }
        }),
        (t.prototype.isInnerSpr = function () {
          if (!this.parent) return !1;
          var e = this.parent;
          e.innerSprite == this;
        }),
        Object.defineProperty(t.prototype, "dir", {
          set: function (e) {
            var t = this;
            t._dir = e;
            var i = t._scale || 1;
            t.scaleX = t._dir == l.Direction.RIGHT ? -i : i;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "scale", {
          set: function (e) {
            var t = this;
            ((t._scale = e || 1),
              (t.scaleX = t._dir == l.Direction.RIGHT ? -t._scale : t._scale),
              (t.scaleY = t._scale));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "isLoaded", {
          get: function () {
            return void 0 != this._data;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "isLoadFail", {
          get: function () {
            return this._loadFail;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getHeight = function () {
          var e = this;
          return e.nameID == p.SprConst.SPRITE_JUMP_MAP
            ? 40
            : e._anim
              ? e._anim.getHeight()
              : 0;
        }),
        (t.prototype.getWidth = function () {
          var e = this;
          return e._anim && e._anim.width;
        }),
        (t.prototype.play = function () {
          var e = this;
          e._anim && e._anim.play();
        }),
        (t.prototype.stop = function () {
          var e = this;
          e._anim && e._anim.stop();
        }),
        (t.prototype.setHeadIcon = function (e) {
          var t = this;
          if (!t._icon1 || !t._icon1.eq(e)) {
            ((t._needChanged = !0),
              (t._icon1 = e),
              (t._icon2 = t._icon3 = null));
            var i = (e.low >> u.ModelConst.OFFSET_SEX) & u.ModelConst.LEN_SEX,
              o =
                i == c["default"].SEX_MALE
                  ? p.SprConst.SPRITE_MAN_HEAD
                  : p.SprConst.SPRITE_WOMAN_HEAD;
            return o ? t.setSrc(o, r.LoadPri.UI, !1) : !1;
          }
        }),
        (t.prototype.setPetIcon = function (e, t, i) {
          (void 0 === t && (t = !1), void 0 === i && (i = r.LoadPri.Scene));
          var o = this;
          if (!o._icon1 || !o._icon1.eq(e)) {
            ((o._needChanged = !0),
              (o._icon1 = e),
              (o._icon2 = o._icon3 = null),
              (o._isPet = !0));
            var n = p.SpriteTool.getPetSpriteByIcon(e, t);
            return n ? o.setSrc(n, i, t) : !1;
          }
        }),
        (t.prototype.setIcon = function (e, t, i, o, n) {
          (void 0 === o && (o = !1), void 0 === n && (n = r.LoadPri.Scene));
          var a = this;
          if (
            ((a._icon1_t = a._icon2_t = a._icon3_t = null),
            !(
              a._icon1 &&
              a._icon1.eq(e) &&
              a._icon2 &&
              a._icon2.eq(t) &&
              a._icon3 &&
              a._icon3.eq(i)
            ) || p.SpriteTool.isTwoPeopleSprite(this.nameID))
          ) {
            ((a._needChanged = !0),
              (a._icon1 = h.Tool.copyLong(e, a._icon1)),
              (a._icon2 = h.Tool.copyLong(t, a._icon2)),
              (a._icon3 = h.Tool.copyLong(i, a._icon3)),
              (a._isPet = !1));
            var s = p.SpriteTool.getSpriteIdByIcon(e, t, i, o);
            return s ? (console.log("setIcon", s), a.setSrc(s, n, o)) : !1;
          }
        }),
        (t.prototype.setTwoHouse = function (e, t, i) {
          void 0 === i && (i = r.LoadPri.Scene);
          var o = this,
            n = p.SpriteTool.getTwoPeopleSprite(e.icon3);
          return (
            e.setTabStatus(!1, u.ModelConst.HIDE_SPIRTE),
            t.setTabStatus(!0, u.ModelConst.HIDE_SPIRTE),
            (o._needChanged = !0),
            (o._icon1 = h.Tool.copyLong(e.icon1, o._icon1)),
            (o._icon2 = h.Tool.copyLong(e.icon2, o._icon2)),
            (o._icon3 = h.Tool.copyLong(e.icon3, o._icon3)),
            (o._icon1_t = h.Tool.copyLong(t.icon1, o._icon1_t)),
            (o._icon2_t = h.Tool.copyLong(t.icon2, o._icon2_t)),
            (o._icon3_t = h.Tool.copyLong(t.icon3, o._icon3_t)),
            this.setSrc(n, i, !1)
          );
        }),
        (t.prototype.setCloak = function (e, t, i) {
          (void 0 === t && (t = !1), void 0 === i && (i = r.LoadPri.Scene));
          var o = this;
          if (!o._icon3 || !o._icon3.eq(e)) {
            ((o._needChanged = !0),
              (o._icon1 = null),
              (o._icon2 = null),
              (o._icon3 = h.Tool.copyLong(e, o._icon3)),
              (o._isPet = !1));
            var n = p.SpriteTool.getCloakSprId(e);
            return o.setSrc(n, i, t);
          }
        }),
        (t.prototype.setSrc = function (e, t, i) {
          (void 0 === i && (i = !1), e instanceof Long && (e = e.toNumber()));
          var o = this,
            n = _["default"].getSpriteUrl(e);
          if (n == o._url && !o._needChanged) return !1;
          (o.removeAnim(),
            (o.nameID = e),
            (o._url = n),
            (o._pri = t),
            (o._isBattle = i));
          var r = s["default"].ins.getRes(n);
          return (
            r
              ? o.onLoaded(r, n)
              : s["default"].ins.load(
                  o._url,
                  a["default"].alloc(o, o.onLoaded),
                  t,
                  a["default"].alloc(o, o.onLoadFail),
                ),
            !0
          );
        }),
        (t.prototype.removeAnim = function () {
          ((this._anim = null), n["default"].releaseObj(this.animations));
        }),
        (t.prototype.onLoaded = function (e, t) {
          var i = this;
          if (t == i._url) {
            ((i._data = e), (i._fragFiles.length = 0));
            for (var o = 0, n = i._data.files; o < n.length; o++) {
              var a = n[o];
              i._fragFiles.push(a);
            }
            (i._needChanged && (i.changeSpriteIcon(), (i._needChanged = !1)),
              void 0 != i._playAnimId && i.isAnimIdExits(i._playAnimId)
                ? (i.setCurAnimation(i._playAnimId, i._playAnimLoops),
                  (i._playAnimId = void 0),
                  (i._playAnimLoops = void 0))
                : i.setFirstAnimation());
          }
        }),
        (t.prototype.onLoadFail = function () {
          ((this._loadFail = !0), this.setMotionAlive(!1));
        }),
        (t.prototype.onAnimLoaded = function () {
          var e = this;
          (e.vipSprite && (e.vipSprite.y = -this.getHeight() + 10),
            e._animLoaded && e._animLoaded.exec());
        }),
        (t.prototype.getAnimData = function (e) {
          for (var t = 0, i = this._data.anis; t < i.length; t++) {
            var o = i[t];
            if (o.id == e) return o;
          }
          return null;
        }),
        (t.prototype.setFirstAnimation = function () {
          var e = this,
            t = e._data.anis;
          t.length > 0 && e.setCurAnimation(t[0].id, e._playAnimLoops);
        }),
        (t.prototype.changeSpriteIcon = function () {
          var e = this;
          if (e.nameID == T) return void (e._fragFiles[0] = f[e._vipLv - 1]);
          var i = e._icon1,
            a = e._icon2,
            r = e._icon3,
            s = p.SpriteTool.getTransportStyle(r),
            l = p.SpriteTool.isTwoPeopleStyle(s);
          (p.SpriteTool.doChangeSpriteIcon(
            i,
            a,
            r,
            e._fragFiles,
            e._isPet,
            l,
            s,
          ),
            l &&
              e._icon1_t &&
              !e._icon1_t.isZero() &&
              p.SpriteTool.doChangeSpriteIcon(
                e._icon1_t,
                e._icon2_t,
                e._icon3_t,
                e._fragFiles,
                e._isPet,
                l,
                0,
              ));
          var u = e.parent;
          if (!u || u.cloakSprite != e) {
            if (11 == Math.floor(e.nameID / 100))
              return void console.error(
                e.nameID,
                e.parent,
                e._url,
                e.$hashCode,
              );
            var _ = e._isBattle,
              d = e._pri,
              c = p.SpriteTool.getTransportStyle(r);
            (e.setHighTransport((2 == c || 4 == c) && 0 == _),
              p.SpriteTool.isExtTransport(c) && this.removeInner());
            var h = p.SpriteTool.getBackStyle(r);
            if (h > 0 && p.SpriteTool.isShowBack(h, c))
              if (e.cloakSprite) e.cloakSprite.setCloak(r, _, d);
              else {
                var E = n["default"].alloc(t);
                ((E.autoPlay = e.autoPlay),
                  (e.cloakSprite = E),
                  e.addChildAt(e.cloakSprite, o.CLOAK),
                  E.setCloak(r, _, d));
              }
            else
              e.cloakSprite &&
                (n["default"].release(e.cloakSprite), (e.cloakSprite = void 0));
          }
        }),
        (t.prototype.isExtTransport = function () {
          var e = p.SpriteTool.getTransportStyle(this._icon3);
          return p.SpriteTool.isExtTransport(e);
        }),
        (t.prototype.setHighTransport = function (e) {
          ((this.spriteStatusFlag &= ~p.SprConst.FLAG_HIGH_TRANSPORT),
            e && (this.spriteStatusFlag |= p.SprConst.FLAG_HIGH_TRANSPORT));
        }),
        (t.prototype.isHighTransport = function () {
          return 0 != (this.spriteStatusFlag & p.SprConst.FLAG_HIGH_TRANSPORT);
        }),
        (t.prototype.getCurAnimation = function () {
          return this._anim;
        }),
        (t.prototype.getCurAniID = function () {
          var e = this.getCurAnimation();
          return null != e ? e.id : -1;
        }),
        (t.prototype.getAnimationID = function () {
          return this._anim.id;
        }),
        (t.prototype.getCheckID = function () {
          return this._anim.getCheckId();
        }),
        Object.defineProperty(t.prototype, "spriteX", {
          get: function () {
            return this.x;
          },
          set: function (e) {
            this.x = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "spriteY", {
          get: function () {
            return this.y;
          },
          set: function (e) {
            this.y = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.setSpritePosition = function (e, t) {
          ((this.x = e), (this.y = t));
        }),
        (t.prototype.isCurAnimation = function (e) {
          return this._anim.id == e;
        }),
        (t.prototype.setRotate = function (e) {
          this.dir = e ? l.Direction.RIGHT : l.Direction.LEFT;
        }),
        (t.prototype.getRotate = function () {
          return this.dir == l.Direction.RIGHT;
        }),
        (t.prototype.action = function () {
          var e = this;
          if (e.isMotionAlive()) {
            var t = e.getCurAnimation();
            (t && t.action(), null != e.cloakSprite && e.cloakSprite.action());
          }
        }),
        (t.prototype.replay = function () {
          var e = this,
            t = e.getCurAnimation();
          t &&
            (t.stop(), e.setCurAnimationLoopTime(e._playAnimLoops), t.action());
        }),
        (t.prototype.setMotionAlive = function (e) {
          (e && this._loadFail) || (this._isMotionAlive = e);
        }),
        (t.prototype.isMotionAlive = function () {
          return this._isMotionAlive;
        }),
        (t.prototype.setFront = function (e) {
          this._isFront = e;
        }),
        (t.prototype.isFront = function () {
          return this._isFront;
        }),
        (t.prototype.getAnimation = function (e) {
          var t = this,
            i = t.animations[e];
          if (i) return i;
          var o = t.getAnimData(e);
          return o
            ? ((i = n["default"].alloc(d["default"])),
              i.initData(o, t._data.frames, t._fragFiles, t._pri, t.isUiAnim),
              (t.animations[e] = i),
              i)
            : null;
        }),
        (t.prototype.isAnimIdExits = function (e) {
          var t = this;
          if (!t._data) return !1;
          for (var i = 0, o = t._data.anis; i < o.length; i++) {
            var n = o[i];
            if (n.id == e) return !0;
          }
          return !1;
        }),
        (t.prototype.setCurAnimation = function (e, t) {
          void 0 === t && (t = -1);
          var i = this;
          if (
            ((i._playAnimId = e),
            (i._playAnimLoops = t),
            i.setMotionAlive(!0),
            !i.isLoaded)
          )
            return !0;
          var n = i.getAnimation(e);
          if (!n) return (i.setCurAnimationLoopTime(t), !1);
          if (((n.looptime = t), i._anim != n)) {
            (i._anim && i._anim.parent && i._anim.parent.removeChild(i._anim),
              (i._anim = n));
            var a = o.ANIM;
            (i.vipSprite && (a = i.getChildIndex(i.vipSprite)),
              i.addChildAt(i._anim, a),
              i._anim.checkLoadedComp(),
              i.autoPlay && i.action());
          }
          return !0;
        }),
        (t.prototype.setCurAnimationLoopTime = function (e) {
          var t = this,
            i = t.getCurAnimation();
          null != i ? (i.looptime = e) : (t._playAnimLoops = e);
        }),
        (t.prototype.getCurAnimationLoopTime = function () {
          var e = this,
            t = e.getCurAnimation();
          return null != t ? t.looptime : -1;
        }),
        (t.prototype.setSpriteVisible = function (e) {
          this.visible = e;
        }),
        (t.prototype.isSpriteVisible = function () {
          return this.visible;
        }),
        (t.prototype.setMotionTurnOff = function (e) {
          this._isMotionTurnOff = e;
        }),
        (t.prototype.isMotionTurnOff = function () {
          return this._isMotionTurnOff;
        }),
        (t.prototype.onAnimEnd = function () {
          var e = this;
          (e.isMotionTurnOff() && e.setMotionAlive(!1),
            e.autoRemove && e.dispose(),
            e._endHandler && e._endHandler.exec());
        }),
        (t.prototype.clone = function (e) {
          var t = this,
            i = t._anim;
          (i
            ? ((e._playAnimId = i.id), (e._playAnimLoops = i.looptime))
            : ((e._playAnimId = t._playAnimId),
              (e._playAnimLoops = t._playAnimLoops)),
            t._icon1 || t._icon2 || t._icon3
              ? e.setIcon(t._icon1, t._icon2, t._icon3, t._isBattle, t._pri)
              : e.setSrc(t.nameID, t._pri, t._isBattle));
        }),
        (t.prototype.onAlloc = function () {
          var e = this;
          (e.setSpriteVisible(!0),
            e.setMotionAlive(!0),
            e.setMotionTurnOff(!1));
        }),
        (t.prototype.dispose = function () {
          this.onRelease();
        }),
        (t.prototype.onRelease = function () {
          var e = this;
          ((e.x = e.y = e.rotation = e.anchorOffsetX = e.anchorOffsetY = 0),
            (e.scaleX = e.scaleY = 1),
            (e._vipLv = void 0),
            (e._isPet = !1),
            (e._needChanged = !1),
            (e.autoPlay = !1),
            (e.autoRemove = !1),
            (e.spriteStatusFlag = 0),
            (e._scale = void 0),
            (e._dir = void 0),
            (e._icon1 = void 0),
            (e._icon2 = void 0),
            (e._icon3 = void 0),
            (e._icon1_t = void 0),
            (e._icon2_t = void 0),
            (e._icon3_t = void 0),
            (e._fragFiles.length = 0),
            (e._playAnimId = void 0),
            (e._playAnimLoops = void 0),
            (e._url = void 0),
            (e._data = void 0),
            (e.nameID = void 0),
            (e.mapSort = void 0),
            (e.name = ""),
            (e.visible = !0),
            (e._isMotionAlive = !0),
            (e._isMotionTurnOff = !1),
            (e.isUiAnim = void 0),
            e.removeChildren(),
            e.removeAnim(),
            n["default"].release(e._endHandler),
            (e._endHandler = null),
            n["default"].release(e._animLoaded),
            (e._animLoaded = null),
            e.removeVipSpr(),
            e.cloakSprite &&
              (n["default"].release(e.cloakSprite), (e.cloakSprite = void 0)),
            e.removeInner(),
            e.parent && e.parent.removeChild(e));
        }),
        (t.prototype.draw = function (e, t, i, o) {
          (void 0 === t && (t = 0), void 0 === i && (i = 0));
          var n = this;
          ((n.visible = !0),
            n.setSpritePosition(t, i),
            n.parent ||
              (e && (void 0 != o ? e.addChildAt(n, o) : e.addChild(n))));
        }),
        t
      );
    })(egret.DisplayObjectContainer);
  t["default"] = E;
});
