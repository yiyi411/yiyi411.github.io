(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }), (t.Message = void 0));
  var o = i(227),
    n = (function () {
      function e(e, t) {
        this.type = e;
        var i = o["default"].getProtobufCls(e);
        return i
          ? void (this._proto = t ? i.decode(t) : new i())
          : void (this.ba = new egret.ByteArray(t || new Uint8Array(0)));
      }
      return (
        Object.defineProperty(e.prototype, "bytes", {
          get: function () {
            var e = o["default"].getProtobufCls(this.type);
            return e
              ? e.encode(this._proto).finish()
              : this.ba && this.ba.bytes;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "proto", {
          get: function () {
            return this._proto;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.getType = function () {
          return this.type;
        }),
        (e.prototype.setType = function (e) {
          this.type = e;
        }),
        (e.prototype.addMsgInfo = function (e) {
          null != e && (null == this.sb && (this.sb = ""), (this.sb += e));
        }),
        (e.prototype.getMsgInfo = function () {
          return null == this.sb ? "" : this.sb.toString();
        }),
        (e.prototype.addTempSb = function (e) {
          null != e &&
            (null == this.tempSb && (this.tempSb = ""), (this.tempSb += e));
        }),
        (e.prototype.getTempSb = function () {
          return null == this.tempSb ? "" : this.tempSb.toString();
        }),
        (e.prototype.reset = function () {
          this.ba.position = 0;
        }),
        (e.prototype.getLength = function () {
          var e = this.ba.readUnsignedShort(),
            t = this.ba.readUnsignedByte();
          return (e << 8) + t;
        }),
        (e.prototype.putLength = function (e) {
          (this.ba.validateBuffer(2 * e + 3),
            this.ba.dataView.setUint16(this.ba.position, (e >>> 8) & 255),
            (this.ba.position += 2),
            this.ba.dataView.setUint8(this.ba.position, 255 & e),
            (this.ba.position += 1));
        }),
        (e.prototype.putString = function (e) {
          null == e && (e = "");
          var t = e.length;
          this.putLength(t);
          for (var i = 0; t > i; ++i) this.putShort(e.charCodeAt(i));
        }),
        (e.prototype.getChar = function () {
          return ((255 & this.getByte()) << 8) + (255 & this.getByte());
        }),
        (e.prototype.getString = function () {
          for (var e = this.getLength(), t = "", i = 0; e > i; ++i)
            t += String.fromCharCode(this.getChar());
          return t;
        }),
        (e.prototype.putLong = function (e) {
          (this.putInt(e.high), this.putInt(e.low));
        }),
        (e.prototype.getLong = function () {
          var e = this.getInt(),
            t = this.getInt();
          return new Long(t, e);
        }),
        (e.prototype.putByte = function (e) {
          this.ba.writeByte(e);
        }),
        (e.prototype.getByte = function () {
          return this.ba.readByte();
        }),
        (e.prototype.putBytes = function (e) {
          if (e) {
            var t = e.length;
            (this.putLength(t), (e.position = 0));
            for (var i = 0; t > i; ++i) this.putByte(e.readByte());
          }
        }),
        (e.prototype.getBytes = function () {
          for (
            var e = new egret.ByteArray(), t = this.getLength(), i = 0;
            t > i;
            i++
          )
            e.writeByte(this.getByte());
          return ((e.position = 0), e);
        }),
        (e.prototype.getNumbers = function () {
          for (var e = this.getLength(), t = [], i = 0; e > i; ++i) {
            var o = 255 & this.getByte();
            t.push(o);
          }
          return t;
        }),
        (e.prototype.getByteArray = function () {
          return this.getBytes();
        }),
        (e.prototype.putShort = function (e) {
          this.ba.writeShort(e);
        }),
        (e.prototype.getShort = function () {
          return this.ba.readShort();
        }),
        (e.prototype.putInt = function (e) {
          this.ba.writeInt(e);
        }),
        (e.prototype.getInt = function () {
          return this.ba.readInt();
        }),
        (e.prototype.putBoolean = function (e) {
          this.ba.writeBoolean(e);
        }),
        (e.prototype.getBoolean = function () {
          return this.ba.readBoolean();
        }),
        (e.prototype.readUTF = function () {
          return this.ba.readUTF();
        }),
        (e.prototype.readShort = function () {
          return this.getShort();
        }),
        (e.prototype.readByte = function () {
          return this.getByte();
        }),
        (e.prototype.readInt = function () {
          return this.getInt();
        }),
        e
      );
    })();
  t.Message = n;
});
