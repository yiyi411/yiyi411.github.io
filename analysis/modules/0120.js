(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.loginStorage = void 0));
  var o = i(257),
    n = i(396),
    a = !0,
    r = egret.localStorage,
    s = (function () {
      function e() {
        ((this._key = null), (this._iv = null), (this._id = ""));
      }
      return (
        (e.prototype.getUser = function () {
          return this._id;
        }),
        (e.prototype.init = function (e, t) {
          ((this._key = n.md5(e)), (this._iv = n.md5(t)));
        }),
        (e.prototype.setUser = function (e) {
          this._id = e;
        }),
        (e.prototype.set = function (e, t) {
          if (null == e) return void console.error("存储的key不能为空");
          if (((e = this.formatKey(e)), null == t))
            return (
              console.warn("存储的值为空，则直接移除该存储"),
              void this.remove(e)
            );
          if ("function" == typeof t)
            return void console.error("储存的值不能为方法");
          if ("object" == typeof t)
            try {
              t = JSON.stringify(t);
            } catch (i) {
              return void console.error("解析失败，str = " + t);
            }
          else "number" == typeof t && (t += "");
          if (null != this._key && null != this._iv && a)
            try {
              t = o.EncryptUtil.aesEncrypt("" + t, this._key, this._iv);
            } catch (i) {
              t = null;
            }
          r.setItem(e, t);
        }),
        (e.prototype.get = function (e, t) {
          if (null == e) return null;
          e = this.formatKey(e);
          var i = r.getItem(e);
          if (
            a &&
            null != i &&
            "" !== i &&
            null != this._key &&
            null != this._iv
          )
            try {
              i = o.EncryptUtil.aesDecrypt(i, this._key, this._iv);
            } catch (n) {
              i = null;
            }
          return null === i ? t : i;
        }),
        (e.prototype.formatKey = function (e) {
          return (
            "1" == go.isGoodNative && (e = e + "_" + go.game_index),
            this._id && (e = e + "_" + this._id),
            a && (e = n.md5(e)),
            e
          );
        }),
        (e.prototype.getNumber = function (e, t) {
          void 0 === t && (t = 0);
          var i = this.get(e);
          return Number(i) || t;
        }),
        (e.prototype.getBoolean = function (e) {
          var t = this.get(e);
          return "false" === t || "0" === t ? !1 : Boolean(t) || !1;
        }),
        (e.prototype.getJson = function (e, t) {
          var i = this.get(e);
          return (i && JSON.parse(i)) || t;
        }),
        (e.prototype.remove = function (e) {
          return null == e
            ? void console.error("存储的key不能为空")
            : ((e = this.formatKey(e)), void r.removeItem(e));
        }),
        (e.prototype.clear = function () {
          r.clear();
        }),
        e
      );
    })();
  t.loginStorage = new s();
});
