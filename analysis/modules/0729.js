(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(0),
    a = i(71),
    r = i(1),
    s = i(5),
    l = i(12),
    u = i(4),
    _ = i(107),
    d = i(2),
    p = i(87),
    c = i(26),
    h = i(16),
    f = i(10),
    T = i(21),
    E = i(125),
    y = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        __extends(t, e),
        (t.prototype.exec = function (e) {
          p["default"].ins.hide();
          var t = s["default"].myPlayer,
            i = o["default"].getProxy(n.ModName.Misc, n.ProxyType.Misc);
          if (
            (i.data.gameInit ||
              (this.sendNt(d.MiscEvent.INIT_MISC),
              this.sendNt(c.SceneEvent.INIT_SCENE_MDR),
              (i.data.gameInit = !0)),
            1 == t.level
              ? this.sendNt(d.MainEvent.MAIN_STORY)
              : this.sendNt(c.SceneEvent.ON_SCENE_READY),
            null != t && t.get(l.ModelConst.LEVEL) >= 30)
          ) {
            var a = E.ObjectData.fromPlayerEventBytes(
              -2,
              0,
              u["default"].PLAYER_EVENT_ACTIVITY_LIST,
              h["default"].timer.serverTime + T["default"].MILLIS_IN_DAY,
              f.GameText.STR_EVERT_DAY,
              f.GameText.STR_ACTIVITY_LIST,
              "",
              "",
            );
            s["default"].addPlayerEvent(a);
          }
          try {
            o["default"].onEnter();
          } catch (y) {
            console.error(y);
          }
          r["default"].showMain();
          var g = s["default"].myPlayer.isSettingBit(
            u["default"].SETTING_USIC_BACKGROUND_OFF,
          );
          _["default"].ins.isMute = g;
        }),
        t
      );
    })(a["default"]);
  t["default"] = y;
});
