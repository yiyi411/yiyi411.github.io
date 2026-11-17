(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(17),
    n = i(11),
    a = i(127),
    r = i(58),
    s = i(59),
    l = (function () {
      function e() {
        ((this.isStop = !0), (this._position = 0));
      }
      return (
        Object.defineProperty(e.prototype, "volume", {
          get: function () {
            return this.channel && this.channel.volume;
          },
          set: function (e) {
            var t = this;
            t.channel && (t.channel.volume = e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.play = function (e) {
          var t = u.ins;
          if (!t.isMute) {
            var i = this;
            i.sound &&
              ((i._loop = e),
              t.recoverWebAudio(n["default"].alloc(i, i.startPlay, null, !0)));
          }
        }),
        (e.prototype.stop = function () {
          var e = this;
          (e.channel &&
            ((e._position = e.channel.position),
            e.channel.stop(),
            e.channel.removeEventListener(
              egret.Event.SOUND_COMPLETE,
              e.onPlayComplete,
              e,
            ),
            (e.channel = null)),
            o["default"].release(e.onComplete),
            (e.onComplete = null),
            (e.isStop = !0));
        }),
        (e.prototype.startPlay = function () {
          var e = this;
          e.isStop ||
            e.channel ||
            ((e.channel = e.sound.play(e._position, 1)),
            e.channel.addEventListener(
              egret.Event.SOUND_COMPLETE,
              e.onPlayComplete,
              e,
            ),
            (e.channel.volume = 1));
        }),
        (e.prototype.onPlayComplete = function (e) {
          var t = this;
          ((t.isStop = !t._loop),
            (t._position = 0),
            t.channel.removeEventListener(
              egret.Event.SOUND_COMPLETE,
              t.onPlayComplete,
              t,
            ),
            (t.channel = null));
          var i = t.onComplete;
          ((t.onComplete = null),
            i && (i.exec(), o["default"].release(i)),
            t._loop && this.startPlay());
        }),
        (e.prototype.clear = function () {
          var e = this;
          (e.stop(),
            (e.url = null),
            (e.loaded = !1),
            (e.sound = null),
            (e._position = 0));
        }),
        e
      );
    })(),
    u = (function () {
      function e() {
        ((this._effectMap = Object.create(null)),
          (this._init = !1),
          (this._enable = !0),
          (this._ext = ".mp3"),
          (this._isActive = !0),
          (this._isMute = !1));
      }
      return (
        Object.defineProperty(e, "ins", {
          get: function () {
            return (this._ins || (this._ins = new e()), this._ins);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "isMute", {
          get: function () {
            return this._isMute;
          },
          set: function (e) {
            var t = this;
            if (t._isMute !== e) {
              if (((t._isMute = e), !e)) return void this.resumeMusic();
              var i;
              for (var o in t._effectMap)
                ((i = t._effectMap[o]), i && i.stop());
              this.stopMusic();
            }
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {
          var e = this;
          "undefined" != typeof webAudio
            ? webAudio.initAudio(n["default"].alloc(e, e.onInit, null, !0))
            : this.onInit(".mp3");
        }),
        (e.prototype.onInit = function (e) {
          (e && (this._ext = e),
            (this._init = !0),
            (this._bgMusic = new l()),
            this.playMusic(a.SoundMusic.MAIN));
        }),
        (e.prototype.enable = function (e) {
          this._enable = e;
        }),
        Object.defineProperty(e.prototype, "isReady", {
          get: function () {
            return (
              this._init && this._enable && this._isActive && !this._isMute
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.recoverWebAudio = function (e) {
          "undefined" != typeof webAudio ? webAudio.resumeAudio(e) : e.exec();
        }),
        (e.prototype.onActivate = function () {
          ((this._isActive = !0),
            this.recoverWebAudio(
              n["default"].alloc(this, this.resumeMusic, null, !0),
            ));
        }),
        (e.prototype.onDeActivate = function () {
          ((this._isActive = !1), this.stopMusic());
        }),
        (e.prototype.playMusic = function (e) {
          var t = this;
          if (t.isReady) {
            var i = t.getMusicUrl(e),
              o = t._bgMusic;
            if (o.url === i) return void this.resumeMusic();
            (o.clear(),
              (o.url = i),
              (o.name = e),
              (o.isStop = !1),
              s["default"].ins.load(
                i + t._ext,
                n["default"].alloc(t, t.onLoaded, [o]),
                r.LoadPri.Scene,
                n["default"].alloc(t, t.onLoadFail, [o]),
              ));
          }
        }),
        (e.prototype.resumeMusic = function () {
          var e = this;
          if (e.isReady) {
            var t = e._bgMusic;
            t.loaded && t.isStop && ((t.isStop = !1), t.play(!0));
          }
        }),
        (e.prototype.stopMusic = function () {
          var e = this._bgMusic;
          e && e.stop();
        }),
        (e.prototype.playEffect = function (e, t, i) {
          var a = this;
          if (!a.isReady)
            return void (t && (t.exec(), o["default"].release(t)));
          var u = a._effectMap[e];
          u || (a._effectMap[e] = u = new l());
          var _ = u.onComplete;
          (o["default"].release(_),
            (u.url = e && a.getMusicUrl(e)),
            (u.onComplete = t),
            (u.isStop = !1),
            u.loaded
              ? u.play(!1)
              : s["default"].ins.load(
                  u.url + a._ext,
                  n["default"].alloc(a, a.onLoaded, [u]),
                  i ? r.LoadPri.UI : r.LoadPri.Scene,
                  n["default"].alloc(a, a.onLoadFail, [u]),
                ));
        }),
        (e.prototype.stopEffect = function (e) {
          var t = this._effectMap[e];
          t && t.stop();
        }),
        (e.prototype.onLoaded = function (e, t, i) {
          if (((e.sound = t), (e.loaded = !0), !this.isReady))
            return void (e.isStop = !0);
          var o = e == this._bgMusic,
            n = this._bgMusic.name;
          ((n == a.SoundMusic.WIN || n == a.SoundMusic.LOSE) && (o = !1),
            e.play(o));
        }),
        (e.prototype.onLoadFail = function (e, t) {
          var i = e.onComplete;
          ((e.onComplete = null), i && (i.exec(), o["default"].release(i)));
        }),
        (e.prototype.getMusicUrl = function (e) {
          return "assets/music/" + e;
        }),
        e
      );
    })();
  ((t["default"] = u), (window.SoundMgr = u));
});
