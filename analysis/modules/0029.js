(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(4),
    n = i(3),
    a = i(0),
    r = (function () {
      function e() {}
      return (
        (e.getMapMaskUrl = function (e) {
          return "assets/map/" + e + ".json";
        }),
        (e.getMapBlurUrl = function (e) {
          return "assets/map/" + e + "/" + e + ".jpg";
        }),
        (e.getMapMergedUrl = function (e) {
          return "assets/map_merged/" + e;
        }),
        (e.getMapBmpUrl = function (e, t) {
          return "assets/map_slice/" + t + ".png";
        }),
        (e.getSpriteUrl = function (e) {
          return "assets/sprite/model/" + e + ".json";
        }),
        (e.getSpriteFrameUrl = function (e) {
          return "assets/sprite/fragment/" + e;
        }),
        (e.getUiPng = function (e) {
          return "assets/png_bg/" + e + ".png";
        }),
        (e.getUiHintBg = function (e) {
          return "assets/hint_bg/" + e + ".png";
        }),
        (e.getUiTalentBg = function (e) {
          return "assets/icon_tf/" + e + ".png";
        }),
        (e.getUiTaskBg = function (e) {
          return "assets/icon_task/" + e + ".png";
        }),
        (e.getUiGongnengBg = function (e) {
          return "assets/gongneng/" + e + ".png";
        }),
        (e.getUiJpg = function (e) {
          return "assets/jpg_bg/" + e + ".jpg";
        }),
        (e.getFontUrl = function (e) {
          return "assets/font/" + e;
        }),
        (e.getZhenFaImg = function (e) {
          return !e || 0 > e ? null : "assets/zhenfa/" + e + ".png";
        }),
        (e.getBattleBg = function (e) {
          return e
            ? o["default"].isCountryWarMap(e) ||
              o["default"].isCountryBossMap(e) ||
              o["default"].isTeamBoss(e)
              ? "assets/png_bg/country_bg_0.png"
              : o["default"].isEscortMap(e) &&
                  !n["default"].getProxy(a.ModName.Scene, a.ProxyType.Scene)
                    .isMapReady
                ? "assets/png_bg/yunbiao_bg_0.png"
                : null
            : null;
        }),
        (e.getIcon = function (e) {
          return e;
        }),
        (e.getEmoticons = function (e) {
          return "f" + e;
        }),
        (e.getBuildingIcon = function (t) {
          return 0 > t || t >= e.buildingIcon.length
            ? ""
            : "country_pic_" + e.buildingIcon[t];
        }),
        (e.getSign = function (e, t) {
          var i = "";
          return (
            -1 == t
              ? (i = e ? "common_sign_weidacheng" : "common_sign_weidacheng_d")
              : 0 == t
                ? (i = e ? "common_sign_kelingqu" : "common_sign_kelingqu_d")
                : 1 == t &&
                  (i = e ? "common_sign_yidaceng" : "common_sign_yiwancheng2"),
            i
          );
        }),
        (e.getMapBgById = function (e) {
          if (go.isPc) {
            var t = this;
            switch (!0) {
              case t.MAP_BG_11.includes(e):
                return 11;
              case t.MAP_BG_12.includes(e):
                return 12;
              case t.MAP_BG_13.includes(e):
                return 13;
              case t.MAP_BG_14.includes(e):
                return 14;
              case t.MAP_BG_15.includes(e):
                return 15;
              case t.MAP_BG_16.includes(e):
                return 16;
              case t.MAP_BG_17.includes(e):
                return 17;
              case t.MAP_BG_18.includes(e):
                return 18;
              case t.MAP_BG_19.includes(e):
                return 19;
              case t.MAP_BG_20.includes(e):
                return 20;
              case t.MAP_BG_21.includes(e):
                return 21;
              case t.MAP_BG_22.includes(e):
                return 22;
              case t.MAP_BG_24.includes(e):
                return 24;
              case t.MAP_BG_25.includes(e) || (e >= 843 && 853 >= e):
                return 25;
              case t.MAP_BG_26.includes(e):
                return 26;
              case t.MAP_BG_27.includes(e):
                return 27;
              case t.MAP_BG_28.includes(e):
                return 28;
              case t.MAP_BG_29.includes(e):
                return 29;
              case e >= 1e3 && 1090 >= e:
              case e >= 3e3 && 3090 >= e:
              case t.MAP_BG_BLACK.includes(e):
                return this.BLACK_IMG;
            }
            return 10;
          }
        }),
        (e.getUIAnimateSrc = function (e) {
          return "assets/anim/" + e;
        }),
        (e.getSkillTreeIcon = function (e) {
          switch (e) {
            case 1:
              return "liupai_icon_2_d";
            case 2:
              return "liupai_icon_1_d";
            case 3:
              return "liupai_icon_6_d";
            case 4:
              return "liupai_icon_3_d";
            case 5:
              return "liupai_icon_5_d";
            case 6:
              return "liupai_icon_4_d";
            case 7:
              return "liupai_icon_7_d";
          }
          return null;
        }),
        (e.buildingIcon = [
          "huanggong",
          "huanggong",
          "junying",
          "minju",
          "mucaichang",
          "shicaichang",
          "tiekuangchang",
          "xiake",
          "xiuzhen",
          "zhanshi",
          "fashi",
          "daoju",
          "wuqishangdian",
          "fangju",
        ]),
        (e.MAP_BG_11 = [5, 13, 14, 303, 824, 836]),
        (e.MAP_BG_12 = [12, 37, 272, 454, 832, 920, 921, 932]),
        (e.MAP_BG_13 = [
          252, 253, 260, 271, 280, 281, 450, 451, 452, 829, 840, 841, 901, 902,
          903, 947, 948, 949, 950, 951,
        ]),
        (e.MAP_BG_14 = [22, 29, 30, 35, 270, 831, 905, 990]),
        (e.MAP_BG_15 = [
          255, 257, 258, 456, 457, 837, 900, 939, 943, 944, 945, 946, 957,
        ]),
        (e.MAP_BG_16 = [
          12, 256, 291, 297, 298, 500, 904, 914, 915, 916, 917, 928, 929, 930,
          941, 942, 952, 953,
        ]),
        (e.MAP_BG_17 = [261, 262, 263, 264, 302, 835, 906, 936]),
        (e.MAP_BG_18 = [273, 801, 808, 809, 810, 922, 923, 924, 938]),
        (e.MAP_BG_19 = [277, 278, 279, 819, 820]),
        (e.MAP_BG_20 = [
          8, 9, 10, 23, 24, 25, 26, 27, 31, 32, 290, 293, 911, 963, 964,
        ]),
        (e.MAP_BG_21 = [33, 34, 299, 453, 821, 822, 823, 937, 974, 975, 976]),
        (e.MAP_BG_22 = [501, 502]),
        (e.MAP_BG_24 = [
          28, 300, 301, 455, 834, 907, 908, 909, 913, 925, 926, 927, 931, 960,
          965,
        ]),
        (e.MAP_BG_25 = [940, 973]),
        (e.MAP_BG_26 = [856, 857]),
        (e.MAP_BG_27 = [912]),
        (e.MAP_BG_28 = [961, 962, 988, 989, 991, 992]),
        (e.MAP_BG_29 = [842, 854, 855, 958, 977, 978, 979]),
        (e.MAP_BG_BLACK = [19]),
        (e.BLACK_IMG = 999),
        e
      );
    })();
  t["default"] = r;
});
