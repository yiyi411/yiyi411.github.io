(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(30),
    n = (function () {
      function e() {}
      return (
        (e.makeIndexValue = function (t, i, n, a) {
          var r = new o["default"]();
          return (
            r.append(e.CHAR_SPLIT),
            r.append(t.toString()),
            10 > i && r.append("0"),
            r.append(i.toString()),
            n >= 0 && (10 > n && r.append("0"), r.append(n.toString())),
            a >= 0 && r.append(a.toString()),
            r.toString()
          );
        }),
        (e.CHAR_SPLIT = "/"),
        (e.CHAR_ICON = "i"),
        (e.CHAR_FACE_ICON = "f"),
        (e.CHAR_COLOR_STRING = "c"),
        (e.CHAR_BAG = "b"),
        (e.CHAR_MISSION = "m"),
        (e.CHAR_END = "p"),
        (e.CHAR_ICON_REWARD = "j"),
        (e.LENGTH_ICON = 7),
        (e.LENGTH_FACE_ICON = 4),
        (e.LENGTH_STRING = 8),
        (e.LENGTH_BAG = 4),
        (e.LENGTH_MISSION = 6),
        (e.UNDERLINE_CHAR = "{}"),
        (e.assistTextfield = new egret.TextField()),
        (e.makeRewardIconString = function (e, t) {
          for (var i = e.toString(); i.length < 2;) i = "0" + i;
          return "/j" + i + t.toString();
        }),
        (e.makeIconString = function (e, t) {
          return "";
        }),
        (e.makeFaceString = function (e) {
          return "";
        }),
        (e.makeMissionString = function (e) {
          return "";
        }),
        (e.makeColorString = function (e, t) {
          for (var i = t.toString(16); i.length < 6;) i = "0" + i;
          var o = "";
          return (o =
            this.CHAR_SPLIT +
            this.CHAR_COLOR_STRING +
            i +
            e +
            this.CHAR_SPLIT +
            this.CHAR_END);
        }),
        (e.converColorStrToStr = function (e) {
          for (var t = e, i = t.indexOf("/c"); i >= 0;)
            ((t = t.substring(0, i) + t.substring(i + 8)),
              (i = t.indexOf("/c")));
          for (i = t.indexOf("/p"); i >= 0;)
            ((t = t.substring(0, i) + t.substring(i + 2)),
              (i = t.indexOf("/p")));
          return t;
        }),
        (e.calculateEndCharPosition = function (e, t, i, o, n, a) {
          (void 0 === n && (n = -1),
            void 0 === a && (a = null),
            (e = this.converColorStrToStr(e)));
          var r = 0,
            s = 0,
            l = this.assistTextfield;
          ((l.fontFamily = o),
            (l.size = i),
            (l.multiline = !1),
            (l.wordWrap = !1));
          for (var u = "", _ = 0; _ < e.length; _++) {
            var d = e.charAt(_);
            if ("\\" == d || "/" == d) {
              var p = e.charAt(_ + 1);
              if ("n" == p) {
                ((s += i), (r = 0), (_ += 1), (u = ""));
                continue;
              }
            } else if ("\n" == d) {
              ((s += i), (r = 0), (u = ""));
              continue;
            }
            ((l.text = u + d),
              l.width > t
                ? ((s += i), (u = d), (l.text = u), (r = l.width))
                : ((r = l.width), (u += d)));
          }
          var c = "";
          return (
            n > 0 && l.width + n > t
              ? ((s += i), (r = 0), (u = ""), (l.text = u), (c = "\n"))
              : (c = ""),
            a && a.append(c),
            new egret.Point(r, s)
          );
        }),
        (e.getFaceIconPosition = function (e, t, i, o) {}),
        (e.getNextPowerSign = function (e) {
          if (!e) return -1;
          var t = e.indexOf("/");
          if (-1 != t) {
            var i = e.substring(t + 1, t + 2);
            switch (i) {
              case "i":
              case "j":
              case "f":
              case "c":
              case "b":
              case "m":
              case "p":
                return t;
            }
          }
          return -1;
        }),
        e
      );
    })();
  t["default"] = n;
});
