(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(16),
    n = i(4),
    a = i(8),
    r = i(1),
    s = i(24),
    l = i(85),
    u = i(5),
    _ = i(370),
    d = i(374),
    p = i(3),
    c = i(2),
    h = i(0),
    f = i(14),
    T = (function () {
      function e(e) {
        ((this.promptMsssage = new s["default"]()),
          (this.marqueeMsssage = new s["default"]()),
          (this.noticeMsssage = new s["default"]()),
          (this.chatMessages = new s["default"]()),
          (this.messageTime = new s["default"]()),
          (this.startDrawBottomY = e));
      }
      return (
        (e.isPromptEmtry = function () {
          return e.getInstance().promptMsssage.size() <= 0;
        }),
        (e.addPromptMsg = function (t) {
          var i = p["default"].getProxy(h.ModName.Misc, h.ProxyType.Misc);
          i.data.gameInit &&
            (a.Tool.isNullText(t) ||
              ((t = f["default"].parseTxt(t)),
              e.getInstance().promptMsssage.addElement(t),
              _.Briefing.show()));
        }),
        (e.delPromptMsg = function () {
          e.getInstance().promptMsssage.removeAllElements();
        }),
        (e.isMarqueeEmtry = function () {
          return e.getInstance().marqueeMsssage.size() <= 0;
        }),
        (e.addMarquee = function (t) {
          var i = p["default"].getProxy(h.ModName.Misc, h.ProxyType.Misc);
          i.data.gameInit &&
            (a.Tool.isNullText(t) ||
              (e.getInstance().marqueeMsssage.addElement(t), d.Marquee.show()));
        }),
        (e.delMarqueeMsg = function () {
          e.getInstance().marqueeMsssage.removeAllElements();
        }),
        (e.addNoticeMsg = function (e) {
          (this.addPromptMsg(e),
            l["default"].addChatMsg(
              new l["default"](e, n["default"].CHAT_TYPE_SYSTEM, -1, "", 0),
              !1,
            ),
            p["default"].sendNt(c.ChatEvent.ADD_MAIN_CHAT));
        }),
        (e.addPointMsg = function (e, t) {
          a.Tool.isNullText(e) || r["default"].showMissionTips(e);
        }),
        (e.getInstance = function () {
          return (
            null == this.instance &&
              (this.instance = new e(go.gameStage.stageHeight - 10)),
            this.instance
          );
        }),
        (e.addMsg = function (t) {
          null != t &&
            ((null != u["default"].myPlayer &&
              u["default"].myPlayer.isSettingBit(
                n["default"].SETTING_SHOW_CHAT_OFF,
              )) ||
              (this.getInstance().chatMessages.size() >=
                e.WORLD_MESSAGE_MAX_NUM &&
                (this.getInstance().chatMessages.removeAllElements(),
                this.getInstance().messageTime.removeAllElements()),
              this.getInstance().chatMessages.addElement(t),
              this.getInstance().messageTime.addElement(
                o["default"].timer.serverTime,
              )));
        }),
        (e.addSystemChat = function (e, t) {
          (void 0 === t && (t = n["default"].CHAT_TYPE_SYSTEM),
            l["default"].addChatMsg(new l["default"](e, t, -1, "", 0), !1),
            p["default"].sendNt(c.ChatEvent.ADD_MAIN_CHAT));
        }),
        (e.setPointLocationParam = function (t, i) {
          ((e.POINT_LOCATION_X = t), (e.POINT_LOCATION_Y = i));
        }),
        (e.setPromptLocationParam = function (t, i) {
          ((e.PROMPT_LOCATION_X = t), (e.PROMPT_LOCATION_Y = i));
        }),
        (e.WORLD_MESSAGE_MAX_NUM = 10),
        (e.POINT_LOCATION_X = 0),
        (e.POINT_LOCATION_Y = 0),
        (e.PROMPT_LOCATION_X = 0),
        (e.PROMPT_LOCATION_Y = 0),
        e
      );
    })();
  t["default"] = T;
});
