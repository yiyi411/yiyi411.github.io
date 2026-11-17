(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(61),
    n = i(75),
    a = i(4),
    r = i(12),
    s = i(8),
    l = i(24),
    u = i(5),
    _ = i(31),
    d = i(74),
    p = i(105),
    c = i(54),
    h = (function () {
      function e(t) {
        ((this.type = e.TYPE_NONE),
          (this.spriteStatusFlag = 0),
          (this.byte0 = 0),
          (this.byte1 = 0),
          (this.byte2 = 0),
          (this.int0 = 0),
          (this.int1 = 0),
          (this.maxCounter = 0),
          (this.counter = 0),
          (this.subControlIndex = 0),
          (this.type = t));
      }
      return (
        (e.prototype.setStatus = function (e, t) {
          ((this.spriteStatusFlag &= ~e), t && (this.spriteStatusFlag |= e));
        }),
        (e.prototype.isStatus = function (e) {
          return 0 != (this.spriteStatusFlag & e);
        }),
        (e.prototype.setSubControlList = function (e) {
          e instanceof l["default"]
            ? (this.subControls = e.arr)
            : (this.subControls = e);
        }),
        (e.prototype.execute = function () {
          var t = this.type;
          switch (t) {
            case e.TYPE_JUMP_MAP:
              break;
            case e.TYPE_MOVE:
              break;
            case e.TYPE_PIXEL_MOVE:
              break;
            case e.TYPE_MOVE_TO:
          }
        }),
        (e.prototype.executeJumpMap = function () {
          var t = this.int0,
            i = this.byte0,
            o = this.byte1;
          (this.setStatus(e.FLAG_FINISH, !0), u["default"].doJumpMap(t, i, o));
        }),
        (e.prototype.executePixelMove = function () {
          var t = this.byte0,
            i = this.byte1,
            o = this.byte2,
            n = this.int0,
            a = this.int1;
          this.setStatus(e.FLAG_FINISH, !0);
          var s = (this.model = this.getMoveModelByGrp(n, a, o));
          if (null != s) {
            var l = p["default"].getDirByMovePixels(t, i, !1);
            (s.getDir() != l && s.setDir(l),
              s.setTabStatus(!0, r.ModelConst.MOVE_END_CHECK));
          }
        }),
        (e.prototype.executeMoveTo = function () {
          var t = this.byte0,
            i = this.byte1,
            o = this.int0;
          if (0 == this.counter) {
            var n = (this.model = this.getMoveModel(
              o,
              _.MODEL_TYPE.TYPE_PLAYER,
            ));
            if (null == n) return;
            if (1 == n.isMember())
              return void this.setStatus(e.FLAG_FINISH, !0);
            if (c["default"].ins.isFight)
              return (
                n.setTabStatus(!0, r.ModelConst.MOVE_END_CHECK),
                n.setPosition(t, i),
                void this.setStatus(e.FLAG_FINISH, !0)
              );
            var a = (n.getGx(), n.getGy(), void 0),
              s = a.size();
            if ((1 == this.isAutoMoveEndStep() && (s -= 1), 0 >= s)) {
              if (
                (n.setTabStatus(!0, r.ModelConst.MOVE_END_CHECK),
                1 == this.isAutoMoveEndStep())
              ) {
                var l = u["default"].getNPC(t, i);
                null != l && d["default"].doNpc(l);
              } else n.setPosition(t, i);
              return void this.setStatus(e.FLAG_FINISH, !0);
            }
            this.subControls = new Array(s);
            for (var p = 0; s > p; p++);
            this.counter = 1;
          }
          if (
            1 == this.executeSubControls() &&
            (this.setStatus(e.FLAG_FINISH, !0), 1 == this.isAutoMoveEndStep())
          ) {
            var l = u["default"].getNPC(t, i);
            null != l && d["default"].doNpc(l);
          }
        }),
        (e.prototype.executeMove = function () {
          var t = this.byte0,
            i = this.byte1,
            o = this.byte2,
            n = this.int0;
          if (0 == this.isStatus(e.FLAG_INIT)) {
            var s = (this.model = this.getMoveModel(n, o));
            if (null == s) return void this.setStatus(e.FLAG_FINISH, !0);
            ((this.maxCounter = a["default"].GRID_WIDTH / i),
              s.getDir() != t && s.setDir(t),
              this.setStatus(e.FLAG_INIT, !0));
          }
          (this.counter++,
            this.counter >= this.maxCounter &&
              (this.model.setTabStatus(!0, r.ModelConst.MOVE_END_CHECK),
              this.setStatus(e.FLAG_FINISH, !0)));
        }),
        (e.prototype.executeSubControls = function () {
          return null == this.subControls ||
            this.subControlIndex < 0 ||
            this.subControlIndex >= this.subControls.length
            ? !0
            : (null == this.subControls[this.subControlIndex]
                ? this.subControlIndex++
                : (this.subControls[this.subControlIndex].execute(),
                  this.subControls[this.subControlIndex].isStatus(
                    e.FLAG_FINISH,
                  ) && this.subControlIndex++),
              !1);
        }),
        (e.prototype.getMoveModel = function (e, t) {
          return this.getMoveModelByGrp(e, 0, t);
        }),
        (e.prototype.getMoveModelByGrp = function (e, t, i) {
          var o = null;
          switch (i) {
            case _.MODEL_TYPE.TYPE_PLAYER:
              o = u["default"].getModel(e);
              break;
            case _.MODEL_TYPE.TYPE_NPC:
              o = u["default"].getNpcByID(e, !1);
              break;
            case _.MODEL_TYPE.TYPE_PET:
              var n = u["default"].getModel(e);
              null != n && (o = n.getPet());
              break;
            case _.MODEL_TYPE.TYPE_MERCENARY:
              var n = u["default"].getModel(e);
              null != n && (o = n.getMercenaryById(t));
          }
          return o;
        }),
        (e.createChangeStage = function (t) {
          var i = new e(e.TYPE_CHANGE_STAGE);
          return ((i.int0 = t), i);
        }),
        (e.createJumpMap = function (t, i, o) {
          var n = new e(e.TYPE_JUMP_MAP);
          return ((n.int0 = t), (n.byte0 = 255 & i), (n.byte1 = 255 & o), n);
        }),
        (e.createMove = function (t, i, o, n) {
          var a = new e(e.TYPE_MOVE);
          return ((a.byte1 = o), (a.byte0 = i), (a.byte2 = n), (a.int0 = t), a);
        }),
        (e.createPixelMove = function (t, i, o, n, a) {
          var r = new e(e.TYPE_PIXEL_MOVE);
          return (
            (r.byte0 = 255 & i),
            (r.byte1 = 255 & o),
            (r.byte2 = n),
            (r.int0 = t),
            void 0 != a && (r.int1 = a),
            r
          );
        }),
        (e.createMoveTo = function (t, i, o) {
          var n = new e(e.TYPE_MOVE_TO);
          return ((n.byte0 = 255 & i), (n.byte1 = 255 & o), (n.int0 = t), n);
        }),
        (e.prototype.setAutoMoveEndStep = function () {
          this.int1 = e.AUTO_MOVE_END_STEP;
        }),
        (e.prototype.isAutoMoveEndStep = function () {
          return this.int1 == e.AUTO_MOVE_END_STEP;
        }),
        (e.createBattleUseSkillControl = function (t, i, o, n, a, r, l, u) {
          var _ = new e(e.TYPE_BATTLE_SKILL);
          _.byte0 = 255 & t;
          var d = new egret.ByteArray();
          try {
            d.writeByte(i);
            var p = 0;
            return (
              o >= 0 && (p = s.Tool.setBit(!0, e.BCONTROL_HAS_AREA_LIST, p)),
              l > 0 && (p = s.Tool.setBit(!0, e.BCONTROL_HAS_ANIME2, p)),
              null != u && (p = s.Tool.setBit(!0, e.BCONTROL_HAS_NAME, p)),
              d.writeByte(p),
              s.Tool.isBit(e.BCONTROL_HAS_AREA_LIST, p) && d.writeByte(o),
              d.writeByte(n),
              d.writeByte(a),
              d.writeShort(r),
              s.Tool.isBit(e.BCONTROL_HAS_ANIME2, p) && d.writeShort(l),
              s.Tool.isBit(e.BCONTROL_HAS_NAME, p) && d.writeUTF(u),
              (_.datas = d),
              _
            );
          } catch (c) {
            return (console.error(c), null);
          }
        }),
        (e.createBattleEscape = function (t, i) {
          var o = new e(e.TYPE_BATTLE_ESCAPE);
          return ((o.byte0 = 255 & t), (o.byte1 = i), o);
        }),
        (e.createBattleTargetEffect = function (t, i, o, n, a) {
          var r = new e(e.TYPE_BATTLE_TARGET_EFFECT);
          return (
            1 == a && (r.type = e.TYPE_BATTLE_SELF_EFFECT),
            (r.byte0 = 255 & t),
            (r.counter = o),
            (r.int0 = i),
            (r.int1 = n),
            r
          );
        }),
        (e.prototype.toBytesBattleEffect = function (e) {
          (this.int0 > 3e4 || this.int0 < -3e4
            ? (this.counter |= o["default"].EFFECT_INT_VALUE)
            : this.int0 > 120 || this.int0 < -120
              ? (this.counter |= o["default"].EFFECT_SHORT_VALUE)
              : (this.counter |= o["default"].EFFECT_BYTE_VALUE),
            0 != this.int1 && (this.counter |= o["default"].EFFECT_HAS_ANIME),
            e.writeByte(this.byte0),
            e.writeShort(this.counter),
            n["default"].isEffectStatus(
              this.counter,
              o["default"].EFFECT_INT_VALUE,
            )
              ? e.writeInt(this.int0)
              : n["default"].isEffectStatus(
                    this.counter,
                    o["default"].EFFECT_SHORT_VALUE,
                  )
                ? e.writeShort(this.int0)
                : n["default"].isEffectStatus(
                    this.counter,
                    o["default"].EFFECT_BYTE_VALUE,
                  ) && e.writeByte(this.int0),
            n["default"].isEffectStatus(
              this.counter,
              o["default"].EFFECT_HAS_ANIME,
            ) && e.writeShort(this.int1));
        }),
        (e.prototype.fromBytesBattleEffect = function (e) {
          ((this.byte0 = e.readByte()),
            (this.counter = e.readShort()),
            n["default"].isEffectStatus(
              this.counter,
              o["default"].EFFECT_INT_VALUE,
            )
              ? (this.int0 = e.readInt())
              : n["default"].isEffectStatus(
                    this.counter,
                    o["default"].EFFECT_SHORT_VALUE,
                  )
                ? (this.int0 = e.readShort())
                : n["default"].isEffectStatus(
                    this.counter,
                    o["default"].EFFECT_BYTE_VALUE,
                  ) && (this.int0 = e.readByte()),
            n["default"].isEffectStatus(
              this.counter,
              o["default"].EFFECT_HAS_ANIME,
            ) && (this.int1 = 65535 & e.readShort()));
        }),
        (e.prototype.toBytesBattleEscape = function (e) {
          (e.writeByte(this.byte0), e.writeByte(this.byte1));
        }),
        (e.prototype.fromBytesBattleEscape = function (e) {
          ((this.byte0 = e.readByte()), (this.byte1 = e.readByte()));
        }),
        (e.prototype.toBytesBattleSkill = function (t) {
          if (
            (t.writeByte(this.byte0),
            t.writeShort(null == this.datas ? 0 : this.datas.length),
            null != this.datas && t.writeBytes(this.datas),
            t.writeByte(null == this.subControls ? 0 : this.subControls.length),
            null != this.subControls)
          )
            for (var i = 0; i < this.subControls.length; i++) {
              var o = this.subControls[i];
              null != o ? t.writeBytes(o.toBytes()) : t.writeByte(e.TYPE_NONE);
            }
        }),
        (e.prototype.fromBytesBattleSkill = function (t) {
          this.byte0 = t.readByte();
          var i = t.readShort();
          i > 0 &&
            ((this.datas = new egret.ByteArray()),
            t.readBytes(this.datas, 0, i));
          var o = t.readByte();
          if (o > 0) {
            this.subControls = new Array(o);
            for (var n = 0; o > n; n++) {
              var a = new e(t.readByte());
              (a.fromBytes(t), (this.subControls[n] = a));
            }
          }
        }),
        (e.prototype.fromBytes = function (t) {
          switch (this.type) {
            case e.TYPE_BATTLE_SKILL:
              this.fromBytesBattleSkill(t);
              break;
            case e.TYPE_BATTLE_ESCAPE:
              this.fromBytesBattleEscape(t);
              break;
            case e.TYPE_BATTLE_TARGET_EFFECT:
            case e.TYPE_BATTLE_SELF_EFFECT:
              this.fromBytesBattleEffect(t);
          }
        }),
        (e.fromBytes = function (t) {
          var i = new e(t.readByte());
          return (i.fromBytes(t), i);
        }),
        (e.prototype.toBytes = function () {
          var t = new egret.ByteArray();
          try {
            switch ((t.writeByte(this.type), this.type)) {
              case e.TYPE_BATTLE_SKILL:
                this.toBytesBattleSkill(t);
                break;
              case e.TYPE_BATTLE_ESCAPE:
                this.toBytesBattleEscape(t);
                break;
              case e.TYPE_BATTLE_TARGET_EFFECT:
              case e.TYPE_BATTLE_SELF_EFFECT:
                this.toBytesBattleEffect(t);
            }
            return t;
          } catch (i) {
            return (console.error(i), t.writeByte(e.TYPE_NONE), t);
          }
        }),
        (e.removeControlByType = function (e, t) {
          if (null != e) {
            var i = e.size();
            if (0 != i)
              for (var o = i - 1; o >= 0; o--) {
                var n = e.elementAt(o);
                null != n && n.type == t && e.removeElement(n);
              }
          }
        }),
        (e.AUTO_MOVE_END_STEP = 1),
        (e.TYPE_NONE = 0),
        (e.TYPE_JUMP_MAP = 1),
        (e.TYPE_MOVE_TO = 14),
        (e.TYPE_MOVE = 15),
        (e.TYPE_BATTLE_SKILL = 31),
        (e.TYPE_BATTLE_ESCAPE = 32),
        (e.TYPE_BATTLE_TARGET_EFFECT = 33),
        (e.TYPE_BATTLE_SELF_EFFECT = 34),
        (e.BCONTROL_HAS_AREA_LIST = 1),
        (e.BCONTROL_HAS_NAME = 2),
        (e.BCONTROL_HAS_ANIME2 = 4),
        (e.TYPE_PIXEL_MOVE = 80),
        (e.TYPE_CHANGE_STAGE = 81),
        (e.FLAG_FINISH = 2),
        (e.FLAG_INIT = 4),
        e
      );
    })();
  t["default"] = h;
});
