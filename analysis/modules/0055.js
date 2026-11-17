(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.SpriteTool = t.SprConst = void 0));
  var o = i(17),
    n = i(58),
    a = i(4),
    r = i(12),
    s = i(8),
    l = i(100),
    u = (function () {
      function e() {}
      return (
        (e.HOUSE_TWO_PEOPLE = 11),
        (e.HOUSE_TWO_PEOPLE_SPRITE = 790),
        (e.CAR_TWO_PEOPLE_SPRITE = 5e4),
        (e.CAR_OLE_TWO_PEOPLE = 54),
        (e.SPRITE_HEIGHT = 60),
        (e.PNG_HAIR = 0),
        (e.PNG_FACE = 1),
        (e.PNG_HAND = 2),
        (e.PNG_FEET = 3),
        (e.PNG_SHOULDER = 4),
        (e.PNG_BACK = 5),
        (e.PNG_CLOTHES = 6),
        (e.PNG_TROUSERS = 7),
        (e.PNG_WEAPON = 8),
        (e.PNG_HELMET = 10),
        (e.PNG_EQUIP_OTHER = 11),
        (e.PNG_PET = 12),
        (e.PNG_PET_ORHTER = 13),
        (e.PNG_TRANSPORT = 14),
        (e.PNG_WEAPON_FLASH = 15),
        (e.PNG_MINI = 16),
        (e.SPR_INDEX_MAN_WORLD_START = 100),
        (e.SPR_INDEX_MAN_BATTLE_START = 200),
        (e.SPR_INDEX_WOMAN_WORLD_START = 300),
        (e.SPR_INDEX_WOMAN_BATTLE_START = 400),
        (e.SPR_INDEX_PET_WORLD_START = 500),
        (e.SPR_INDEX_PET_BATTLE_START = 600),
        (e.SPR_INDEX_MAN_HOUSE_WORLD_START = 700),
        (e.SPR_INDEX_WOMAN_HOUSE_WORLD_START = 900),
        (e.SPR_INDEX_WEAPON_HOUSE_START = 2e3),
        (e.SPR_INDEX_WEAPON_HOUSE_END = 4e3),
        (e.SPR_INDEX_WEAPON_HOUSE_START_ADD = 3e4),
        (e.SPR_INDEX_WEAPON_HOUSE_ADD_DIS =
          e.SPR_INDEX_WEAPON_HOUSE_START_ADD - e.SPR_INDEX_WEAPON_HOUSE_END),
        (e.SPR_INDEX_EFF_START = 1300),
        (e.SPR_INDEX_CLOAK_START = 1100),
        (e.ANI_BATTLE_CUR = 1207),
        (e.SPRITE_CURSOR = 1209),
        (e.SPRITE_HLIGHT = 1212),
        (e.SPRITE_MAN_HEAD = 1213),
        (e.SPRITE_WOMAN_HEAD = 1214),
        (e.SPRITE_USE_ITEM_EFFECT = 1215),
        (e.SPRITE_POINTER_EFFECT = 1216),
        (e.SPRITE_GUIDE_ARROW = 1221),
        (e.SPRITE_LEVUP_UP = 1217),
        (e.SPRITE_MYPLAYER_POS = 1231),
        (e.SPRITE_BATTLE_LOADING = 1232),
        (e.SPRITE_DEF_FIELD = 1225),
        (e.SPRITE_VIP = 1228),
        (e.SPRITE_SUPER_QQ = 1227),
        (e.SPRITE_VIP_VIP3 = 1359),
        (e.SPRITE_VIP_VIP4 = 1360),
        (e.SPRITE_VIP_VIP5 = 1361),
        (e.SPRITE_VIP_VIP6 = 1362),
        (e.SPRITE_VIP_VIP7 = 1363),
        (e.SPRITE_VIP_VIP8 = 1364),
        (e.SPRITE_VIP_VIP9 = 1365),
        (e.SPRITE_JUMP_MAP = 1338),
        (e.ANIMATION_BATTLE_CURSOR = 0),
        (e.ANIMATION_BATTLE_DIE = 1),
        (e.ANIMATION_BATTLE_BONES = 2),
        (e.ANIMATION_BATTLE_CURSOR_CANNOT = 2),
        (e.ANIMATION_BATTLE_CURSOR_RANGE = 4),
        (e.ANIMATION_ARROW_LEFT_DOWN = 0),
        (e.ANIMATION_ARROW_RIGHT_UP = 1),
        (e.ANIMATION_ARROW_DOWN = 2),
        (e.ANIMATION_ARROW_LEFT = 3),
        (e.ANIMATION_ARROW_UP = 4),
        (e.ANIMATION_MAP_POINTER_PRESS = 0),
        (e.ANIMATION_UI_POINTER_PRESS = 1),
        (e.EFF_HIT = e.SPR_INDEX_EFF_START + 3),
        (e.EFF_RANGE = 1),
        (e.SPRITE_ITEM_ENCHANT = 1369),
        (e.ANIMATION_BATTLE_STAND = 4),
        (e.ANIMATION_BATTLE_ATTACK_START = 5),
        (e.ANIMATION_BATTLE_ATTACK_MOVE = 6),
        (e.ANIMATION_BATTLE_ATTACK_ACTION = 7),
        (e.ANIMATION_BATTLE_ATTACK_FALLBACK = 8),
        (e.ANIMATION_BATTLE_ATTACK_USE = 9),
        (e.ANIMATION_BATTLE_ATTACK_THROW = 10),
        (e.ANIMATION_BATTLE_ATTACK_DEF = 11),
        (e.ANIMATION_BATTLE_ATTACK_HURT = 12),
        (e.ANIMATION_BATTLE_ATTACK_SKILL = 13),
        (e.ANIMATION_BATTLE_DEF_START = 14),
        (e.ANIMATION_BATTLE_ATTACK_GUN = 15),
        (e.ANIMATION_NONE = -99),
        (e.FLAG_HASH_DATA = 1),
        (e.FLAG_MOTION_TURN_OFF = 2),
        (e.FLAG_MOTION_ALIVE = 4),
        (e.FLAG_SPRITE_VISIBLE = 8),
        (e.FLAG_ROTATE = 16),
        (e.FLAG_LOAD_PNG = 32),
        (e.FLAG_FRONT = 64),
        (e.FLAG_SIMPLE_SPRITE = 128),
        (e.FLAG_HIGH_TRANSPORT = 256),
        (e.FLAG_VIP = 512),
        (e.FLAG_SUPERQQ = 1024),
        e
      );
    })();
  t.SprConst = u;
  var _ = (function () {
    function e() {}
    return (
      (e.isShowBack = function (e, t) {
        return 31 == e ? !1 : !this.isExtTransport(t);
      }),
      (e.isExtTransport = function (e) {
        return this.transportStyleNotBack.includes(e);
      }),
      (e.getTwoPeopleSprite = function (t) {
        var i = e.getTransportStyle(t);
        return i == u.CAR_OLE_TWO_PEOPLE
          ? u.CAR_TWO_PEOPLE_SPRITE
          : u.HOUSE_TWO_PEOPLE_SPRITE;
      }),
      (e.getSpriteIdByIcon = function (t, i, o, n) {
        void 0 === n && (n = !1);
        var s,
          l = (t.low >> r.ModelConst.OFFSET_SEX) & r.ModelConst.LEN_SEX,
          _ = this.getLeftWeaponStyle(i),
          d = this.getRightWeaponStyle(i),
          p = e.getTransportStyle(o),
          c = _ > 0 && d > 0;
        return (s =
          p > 0 && 0 == n
            ? e.isTwoPeopleStyle(p)
              ? l == a["default"].SEX_MALE
                ? u.SPR_INDEX_MAN_HOUSE_WORLD_START + p
                : u.SPR_INDEX_WOMAN_HOUSE_WORLD_START + p
              : e.getHorseSpriteNameIDByWeapon(l, p, _, d, c)
            : e.getSpriteNameIDByWeapon(
                e.getDefaultSprNameID(l, n),
                _,
                d,
                c,
                n,
              ));
      }),
      (e.getPetSpriteByIcon = function (e, t) {
        void 0 === t && (t = !1);
        var i = r.ModelConst,
          o = (e.low >> i.OFFSET_PET_STYLE) & i.LEN_PET_STYLE;
        if (0 >= o) return null;
        var n = t ? u.SPR_INDEX_PET_BATTLE_START : u.SPR_INDEX_PET_WORLD_START;
        return n + o - 1;
      }),
      (e.doChangeSpriteIcon = function (t, i, o, n, l, _, d) {
        (void 0 === l && (l = !1),
          void 0 === _ && (_ = !1),
          void 0 === d && (d = 0));
        var p = r.ModelConst,
          c = 0,
          h = 0,
          f = 0,
          T = 0,
          E = 2,
          y = 0;
        (t && ((c = t.low), (T = t.high)),
          i && ((h = i.low), (E = i.high)),
          o && ((f = o.low), (y = o.high)));
        var g = (c >> p.OFFSET_SEX) & p.LEN_SEX,
          v = (c >> p.OFFSET_HAIR_STYLE) & p.LEN_HAIR_STYLE,
          S = (c >> p.OFFSET_HAIR_COLOR) & p.LEN_HAIR_COLOR,
          I = (T >> p.OFFSET_HAIR_ADD) & p.LEN_HAIR_ADD;
        (I > 0 && (v += I << s.Tool.getBitNum(p.LEN_HAIR_STYLE)),
          16 == v && (v = 0));
        var m = (c >> p.OFFSET_FACE_STYLE) & p.LEN_FACE_STYLE;
        0 >= m && (m = 1);
        var A = (T >> p.OFFSET_FACE_ADD) & p.LEN_FACE_ADD;
        A > 0 && (m += A << s.Tool.getBitNum(p.LEN_FACE_STYLE));
        var C = (c >> p.OFFSET_HAND_STYLE) & p.LEN_HAND_STYLE,
          P = (c >> p.OFFSET_HAND_COLOR) & p.LEN_HAND_COLOR,
          R = (T >> p.OFFSET_HAND_ADD) & p.LEN_HAND_ADD;
        R > 0 && (C += R << s.Tool.getBitNum(p.LEN_HAND_STYLE));
        var O = 3 == C ? 4 : (c >> p.OFFSET_FEET_STYLE) & p.LEN_FEET_STYLE,
          N = (c >> p.OFFSET_FEET_COLOR) & p.LEN_FEET_COLOR,
          M = (T >> p.OFFSET_FEET_ADD) & p.LEN_FEET_ADD;
        M > 0 && (O += M << s.Tool.getBitNum(p.LEN_FEET_STYLE));
        var L = (c >> p.OFFSET_HELMET_STYLE) & p.LEN_HELMET_STYLE,
          w = (c >> p.OFFSET_HELMET_COLOR) & p.LEN_HELMET_COLOR,
          b = (T >> p.OFFSET_HELMET_ADD) & p.LEN_HELMET_ADD;
        b > 0 && (L += b << s.Tool.getBitNum(p.LEN_HELMET_STYLE));
        var x = this.getShoulderStyle(i),
          D = (h >> p.OFFSET_SHOULDER_COLOR) & p.LEN_SHOULDER_COLOR,
          B = this.getLeftWeaponStyle(i),
          G = (h >> p.OFFSET_LWEAPON_COLOR) & p.LEN_LWEAPON_COLOR,
          U = l ? -99 : this.getRightWeaponStyle(i),
          k = (h >> p.OFFSET_RWEAPON_COLOR) & p.LEN_RWEAPON_COLOR;
        _ && ((B = 0), (U = 0));
        var V = (h >> p.OFFSET_WEAPON_FLASH) & p.LEN_WEAPON_FLASH,
          H = B > 0 && U > 0,
          F = (f >> p.OFFSET_CLOTHES_STYLE) & p.LEN_CLOTHES_STYLE,
          Y = (f >> p.OFFSET_CLOTHES_COLOR) & p.LEN_CLOTHES_COLOR,
          W = (y >> p.OFFSET_CLOTHES_ADD) & p.LEN_CLOTHES_ADD;
        (W > 0 && (F += W << s.Tool.getBitNum(p.LEN_CLOTHES_STYLE)),
          0 >= F && (F = 1));
        var K = (f >> p.OFFSET_TROUSERS_STYLE) & p.LEN_TROUSERS_STYLE,
          j = (f >> p.OFFSET_TROUSERS_COLOR) & p.LEN_TROUSERS_COLOR,
          q = (y >> p.OFFSET_TROUSERS_ADD) & p.LEN_TROUSERS_ADD;
        (q > 0 && (K += q << s.Tool.getBitNum(p.LEN_TROUSERS_STYLE)),
          0 >= K && (K = 1));
        var X = (c >> p.OFFSET_PET_STYLE) & p.LEN_PET_STYLE,
          z = (c >> p.OFFSET_PET_COLOR) & p.LEN_PET_COLOR,
          Q = l ? z : this.getBackStyle(o),
          J = (f >> p.OFFSET_BACK_COLOR) & p.LEN_BACK_COLOR,
          $ = l ? X : e.getTransportStyle(o),
          Z = (f >> p.OFFSET_TRANSPORT_COLOR) & p.LEN_TRANSPORT_COLOR;
        _ && (($ = d), (Q = e.getTwoPeopleSprite(o)));
        var et = (f >> p.OFFSET_FASH_ADD) & p.LEN_FASH_ADD;
        if (et > 0)
          switch (
            (23 == F || 24 == F
              ? ((C = 4), (O = 5))
              : 26 == F && ((D = Y), (C = 5), (P = Y), (O = 6), (N = Y)),
            F)
          ) {
            case 29:
              ((L = 43), (w = Y), g == a["default"].SEX_FEMALE && (O = 5));
              break;
            case 30:
              ((L = 32), (w = Y), g == a["default"].SEX_FEMALE && (O = 5));
              break;
            case 31:
              ((L = 33),
                (w = Y),
                (x = 32),
                (D = Y),
                g == a["default"].SEX_FEMALE && (O = 5));
              break;
            case 32:
              ((L = 34),
                (w = Y),
                (x = 33),
                (D = Y),
                g == a["default"].SEX_FEMALE && (O = 5));
              break;
            case 33:
              ((L = 35),
                (w = Y),
                (x = 34),
                (D = Y),
                g == a["default"].SEX_FEMALE && (O = 5));
              break;
            case 34:
              ((L = 36),
                (w = Y),
                (x = 35),
                (D = Y),
                g == a["default"].SEX_FEMALE && (O = 5));
              break;
            case 35:
              ((L = 37),
                (w = Y),
                (x = 36),
                (D = Y),
                g == a["default"].SEX_FEMALE && (O = 5));
              break;
            case 36:
              ((L = 38),
                (w = Y),
                (x = 37),
                (D = Y),
                g == a["default"].SEX_FEMALE && (O = 5));
              break;
            case 37:
              ((L = 39),
                (w = Y),
                (x = 38),
                (D = Y),
                g == a["default"].SEX_FEMALE && (O = 5));
              break;
            case 38:
              ((L = 40),
                (w = Y),
                (x = 39),
                (D = Y),
                g == a["default"].SEX_FEMALE && (O = 5));
              break;
            case 39:
              ((L = 41),
                (w = Y),
                (x = 40),
                (D = Y),
                g == a["default"].SEX_FEMALE && (O = 5));
              break;
            case 40:
              ((L = 42),
                (w = Y),
                (x = 41),
                (D = Y),
                g == a["default"].SEX_FEMALE && (O = 5));
              break;
            case 41:
              ((x = 42),
                (D = Y),
                (m = 16 + Y),
                (C = 6),
                (P = Y),
                (O = 7),
                (N = Y));
              break;
            case 42:
              ((x = 43),
                (D = Y),
                (m = 20 + Y),
                (C = 6),
                (P = Y),
                (O = 7),
                (N = Y));
              break;
            case 43:
              ((x = 44),
                (D = Y),
                (m = 24 + Y),
                (C = 7),
                (P = Y),
                (O = 8),
                (N = Y));
              break;
            case 44:
              ((x = 45),
                (D = Y),
                (m = 27 + Y),
                (C = 8),
                (P = Y),
                (O = 9),
                (N = Y));
              break;
            case 45:
              ((L = 44),
                (w = Y),
                g == a["default"].SEX_FEMALE && (L = 45),
                (x = 46),
                (D = Y),
                (C = 9),
                (P = Y),
                (O = 10),
                (N = Y));
              break;
            case 46:
              ((L = 46),
                (w = Y),
                (x = 47),
                (D = Y),
                (C = 10),
                (P = Y),
                (O = 11),
                (N = Y));
              break;
            case 47:
              ((L = 47),
                (w = Y),
                g == a["default"].SEX_FEMALE && (L = 48),
                (x = 31),
                (D = Y),
                (C = 11),
                (P = Y),
                (O = 12),
                (N = Y));
              break;
            case 48:
              ((L = 49),
                (w = Y),
                (x = 48),
                (D = Y),
                (C = 12),
                (P = Y),
                (O = 8),
                (N = Y));
              break;
            case 49:
              ((L = 50),
                (w = Y),
                g == a["default"].SEX_FEMALE && (L = 51),
                (x = 49),
                (D = Y),
                (C = 13),
                (P = Y),
                (O = 14),
                (N = Y));
              break;
            case 50:
              ((L = 52),
                (w = Y),
                (x = 50),
                (D = Y),
                (C = 14),
                (P = Y),
                (O = 13),
                (N = Y));
              break;
            case 51:
              Q = 32;
          }
        for (var tt, it = 0; it < n.length; it++) {
          var ot = n[it];
          if (ot) {
            var nt = -1,
              at = Math.floor(ot / 1e3);
            9 == at && (at = u.PNG_WEAPON);
            var rt = !1;
            if (1 == _)
              switch (at) {
                case u.PNG_HAIR:
                  if (v > 0) {
                    if ((((ot - 1) >> 2) & 1) != g) continue;
                    nt = p.START_HAIR + (v << 3) - 7 + (g << 2) + S;
                  }
                  break;
                case u.PNG_FACE:
                  if (m > 0) {
                    if ((((ot - 1) >> 2) & 1) != g) continue;
                    nt = p.START_FACE + (m << 3) - 7 + (g << 2);
                  }
                  break;
                case u.PNG_CLOTHES:
                  if (F > 0) {
                    if ((((ot - 1) >> 2) & 1) != g) continue;
                    nt = p.START_CLOTHES + (F << 3) - 7 + (g << 2) + Y;
                  }
                  break;
                case u.PNG_TROUSERS:
                  if (K > 0) {
                    if ((((ot - 1) >> 2) & 1) != g) continue;
                    nt = p.START_TROUSERS + (K << 3) - 7 + (g << 2) + j;
                  }
                  break;
                case u.PNG_SHOULDER:
                  if ((((ot - 1) >> 2) & 1) != g) continue;
                  x > 0 &&
                    (nt = p.START_SHOULDER + (x << 3) - 7 + (g << 2) + D);
                  break;
                case u.PNG_HELMET:
                  break;
                case u.PNG_TRANSPORT:
                  if (!($ > 0)) continue;
                  nt = ot - ((ot - 1) & 3) + Z;
                  break;
                default:
                  continue;
              }
            else
              switch (at) {
                case u.PNG_HAIR:
                  v > 0 && (nt = p.START_HAIR + (v << 3) - 7 + (g << 2) + S);
                  break;
                case u.PNG_FACE:
                  m > 0 && (nt = p.START_FACE + (m << 3) - 7 + (g << 2));
                  break;
                case u.PNG_HAND:
                  C > 0 && (nt = p.START_HAND + (C << 3) - 7 + (g << 2) + P);
                  break;
                case u.PNG_FEET:
                  O > 0 && (nt = p.START_FEET + (O << 3) - 7 + (g << 2) + N);
                  break;
                case u.PNG_SHOULDER:
                  x > 0 &&
                    (nt = p.START_SHOULDER + (x << 3) - 7 + (g << 2) + D);
                  break;
                case u.PNG_BACK:
                  Q > 0 &&
                    1 == n.length &&
                    (nt = p.START_BACK + (Q << 2) - 3 + J);
                  break;
                case u.PNG_CLOTHES:
                  F > 0 && (nt = p.START_CLOTHES + (F << 3) - 7 + (g << 2) + Y);
                  break;
                case u.PNG_TROUSERS:
                  K > 0 &&
                    (nt = p.START_TROUSERS + (K << 3) - 7 + (g << 2) + j);
                  break;
                case u.PNG_TRANSPORT:
                  $ > 0 && (nt = ot - ((ot - 1) & 3) + Z);
                  break;
                case u.PNG_PET:
                  $ > 0 && (nt = ot - ((ot - 1) & 3) + Q);
                  break;
                case u.PNG_WEAPON:
                  1 == H
                    ? void 0 == tt
                      ? (B > 0 && (nt = e.getWeaponIcon(B, G)), (tt = nt))
                      : ((rt = !0), U > 0 && (nt = e.getWeaponIcon(U, k)))
                    : (B > 0 && (nt = e.getWeaponIcon(B, G)),
                      U > 0
                        ? (nt = e.getWeaponIcon(U, k))
                        : -99 == U && (nt = ot));
                  break;
                case u.PNG_HELMET:
                  L > 0 && (nt = p.START_HELMET + (L << 2) - 3 + w);
                  break;
                case u.PNG_WEAPON_FLASH:
                  V > 0
                    ? (nt = ot - ((ot - 1) & 3) + (V - 1))
                    : -99 == U && (nt = ot);
                  break;
                default:
                  continue;
              }
            n[it] = -1 == nt || this.emptyFiles.includes(nt) ? null : nt;
          }
        }
      }),
      (e.getDefaultSprNameID = function (e, t) {
        var i;
        return (
          e == a["default"].SEX_MALE
            ? ((i = u.SPR_INDEX_MAN_WORLD_START),
              t && (i = u.SPR_INDEX_MAN_BATTLE_START))
            : ((i = u.SPR_INDEX_WOMAN_WORLD_START),
              t && (i = u.SPR_INDEX_WOMAN_BATTLE_START)),
          i
        );
      }),
      (e.getSpriteNameIDByWeapon = function (e, t, i, o, n) {
        t > 500 && (t -= 500);
        var r = 0;
        (t > 0 &&
          ((r = a["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD + ((t - 1) >> 4)),
          r == a["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND
            ? (r = 0)
            : r == a["default"].BALL_WEAPON_ID_AREA
              ? (r = a["default"].ITEM_TYPE_WEAPON_BALL)
              : r == a["default"].BALL_WEAPON_ID_ONEHAND_GUN
                ? (r = a["default"].ITEM_TYPE_WEAPON_ONEHAND_GUN)
                : r == a["default"].BALL_WEAPON_ID_TWOHAND_GUN
                  ? (r = a["default"].ITEM_TYPE_WEAPON_TWOHAND_GUN)
                  : r == a["default"].BALL_WEAPON_ID_ONEHAND_HAMMER
                    ? (r = a["default"].ITEM_TYPE_WEAPON_ONEHAND_HAMMER)
                    : r == a["default"].BALL_WEAPON_ID_TWOHAND_HAMMER
                      ? (r = a["default"].ITEM_TYPE_WEAPON_TWOHAND_HAMMER)
                      : r == a["default"].BALL_WEAPON_ID_TWOHAND_FAN &&
                        (r = a["default"].ITEM_TYPE_WEAPON_TWOHAND_FAN)),
          i > 500 && (i -= 500));
        var s = 0;
        i > 0 &&
          ((s = a["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD + ((i - 1) >> 4)),
          s == a["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND
            ? (s = 0)
            : s == a["default"].BALL_WEAPON_ID_AREA
              ? (s = a["default"].ITEM_TYPE_WEAPON_BALL)
              : s == a["default"].BALL_WEAPON_ID_ONEHAND_GUN
                ? (s = a["default"].ITEM_TYPE_WEAPON_ONEHAND_GUN)
                : s == a["default"].BALL_WEAPON_ID_TWOHAND_GUN
                  ? (s = a["default"].ITEM_TYPE_WEAPON_TWOHAND_GUN)
                  : s == a["default"].BALL_WEAPON_ID_ONEHAND_HAMMER
                    ? (s = a["default"].ITEM_TYPE_WEAPON_ONEHAND_HAMMER)
                    : s == a["default"].BALL_WEAPON_ID_TWOHAND_HAMMER
                      ? (s = a["default"].ITEM_TYPE_WEAPON_TWOHAND_HAMMER)
                      : s == a["default"].BALL_WEAPON_ID_TWOHAND_FAN &&
                        (s = a["default"].ITEM_TYPE_WEAPON_TWOHAND_FAN));
        var l = r;
        switch ((0 != s && (l = s), l)) {
          case 0:
          case a["default"].ITEM_TYPE_WEAPON_ONEHAND_HEAVY:
          case a["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND:
            break;
          case a["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD:
            e += o ? 63 : 13;
            break;
          case a["default"].ITEM_TYPE_WEAPON_ONEHAND_BLADE:
            e += o ? 65 : 15;
            break;
          case a["default"].ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW:
            e += o ? 71 : 21;
            break;
          case a["default"].ITEM_TYPE_WEAPON_ONEHAND_GUN:
            e += o ? 72 : 24;
            break;
          case a["default"].ITEM_TYPE_WEAPON_TWOHAND_GUN:
            e += 73;
            break;
          case a["default"].ITEM_TYPE_WEAPON_ONEHAND_HAMMER:
            e += o ? 74 : 44;
            break;
          case a["default"].ITEM_TYPE_WEAPON_TWOHAND_HAMMER:
            e += 36;
            break;
          case a["default"].ITEM_TYPE_WEAPON_TWOHAND_FAN:
            e += 37;
            break;
          default:
            e += l;
        }
        return e;
      }),
      (e.getHorseSpriteNameIDByWeapon = function (e, t, i, o, n) {
        i > 500 && (i -= 500);
        var r = 0;
        (i > 0 &&
          ((r = a["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD + ((i - 1) >> 4)),
          r == a["default"].BALL_WEAPON_ID_AREA
            ? (r = a["default"].ITEM_TYPE_WEAPON_BALL)
            : r == a["default"].BALL_WEAPON_ID_ONEHAND_GUN
              ? (r = a["default"].ITEM_TYPE_WEAPON_ONEHAND_GUN)
              : r == a["default"].BALL_WEAPON_ID_TWOHAND_GUN
                ? (r = a["default"].ITEM_TYPE_WEAPON_TWOHAND_GUN)
                : r == a["default"].BALL_WEAPON_ID_ONEHAND_HAMMER
                  ? (r = a["default"].ITEM_TYPE_WEAPON_ONEHAND_HAMMER)
                  : r == a["default"].BALL_WEAPON_ID_TWOHAND_HAMMER
                    ? (r = a["default"].ITEM_TYPE_WEAPON_TWOHAND_HAMMER)
                    : r == a["default"].BALL_WEAPON_ID_TWOHAND_FAN &&
                      (r = a["default"].ITEM_TYPE_WEAPON_TWOHAND_FAN)),
          o > 500 && (o -= 500));
        var s = 0;
        o > 0 &&
          ((s = a["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD + ((o - 1) >> 4)),
          s == a["default"].BALL_WEAPON_ID_AREA
            ? (s = a["default"].ITEM_TYPE_WEAPON_BALL)
            : s == a["default"].BALL_WEAPON_ID_ONEHAND_GUN
              ? (s = a["default"].ITEM_TYPE_WEAPON_ONEHAND_GUN)
              : s == a["default"].BALL_WEAPON_ID_TWOHAND_GUN
                ? (s = a["default"].ITEM_TYPE_WEAPON_TWOHAND_GUN)
                : s == a["default"].BALL_WEAPON_ID_ONEHAND_HAMMER
                  ? (s = a["default"].ITEM_TYPE_WEAPON_ONEHAND_HAMMER)
                  : s == a["default"].BALL_WEAPON_ID_TWOHAND_HAMMER
                    ? (s = a["default"].ITEM_TYPE_WEAPON_TWOHAND_HAMMER)
                    : s == a["default"].BALL_WEAPON_ID_TWOHAND_FAN &&
                      (s = a["default"].ITEM_TYPE_WEAPON_TWOHAND_FAN));
        var l = r;
        0 != s && (l = s);
        var _ = u.SPR_INDEX_WEAPON_HOUSE_START + 100 * (t - 1);
        switch (
          (_ >= u.SPR_INDEX_WEAPON_HOUSE_END &&
            (_ += u.SPR_INDEX_WEAPON_HOUSE_ADD_DIS),
          e == a["default"].SEX_FEMALE && (_ += 50),
          l)
        ) {
          case 0:
          case a["default"].ITEM_TYPE_WEAPON_ONEHAND_HEAVY:
          case a["default"].ITEM_TYPE_WEAPON_ONEHAND_HAND:
            return e == a["default"].SEX_MALE
              ? u.SPR_INDEX_MAN_HOUSE_WORLD_START + t
              : u.SPR_INDEX_WOMAN_HOUSE_WORLD_START + t;
          case a["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD:
            _ += n ? 33 : 13;
            break;
          case a["default"].ITEM_TYPE_WEAPON_ONEHAND_BLADE:
            _ += n ? 35 : 15;
            break;
          case a["default"].ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW:
            _ += n ? 41 : 21;
            break;
          case a["default"].ITEM_TYPE_WEAPON_ONEHAND_GUN:
            _ += 42;
            break;
          case a["default"].ITEM_TYPE_WEAPON_TWOHAND_GUN:
            _ += 43;
            break;
          case a["default"].ITEM_TYPE_WEAPON_ONEHAND_HAMMER:
            _ += n ? 44 : 24;
            break;
          case a["default"].ITEM_TYPE_WEAPON_TWOHAND_HAMMER:
            _ += 36;
            break;
          case a["default"].ITEM_TYPE_WEAPON_TWOHAND_FAN:
            _ += 37;
            break;
          default:
            _ += l;
        }
        return _;
      }),
      (e.getCloakSprId = function (e) {
        var t = this.getBackStyle(e),
          i = e.low,
          o = e.high,
          n =
            (i >> r.ModelConst.OFFSET_CLOTHES_STYLE) &
            r.ModelConst.LEN_CLOTHES_STYLE,
          a =
            (o >> r.ModelConst.OFFSET_CLOTHES_ADD) &
            r.ModelConst.LEN_CLOTHES_ADD;
        (a > 0 && (n += a << s.Tool.getBitNum(r.ModelConst.LEN_CLOTHES_STYLE)),
          0 >= n && (n = 1));
        var l = this.changeBackStyle(n);
        return (l && (t = l), u.SPR_INDEX_CLOAK_START + t);
      }),
      (e.changeBackStyle = function (e) {
        return 51 == e ? 32 : void 0;
      }),
      (e.getTransportStyle = function (e) {
        if (!e) return 0;
        var t =
            (e.low >> r.ModelConst.OFFSET_TRANSPORT_STYLE) &
            r.ModelConst.LEN_TRANSPORT_STYLE,
          i =
            (e.low >> r.ModelConst.OFFSET_TRANSPORT_ADD) &
            r.ModelConst.LEN_TRANSPORT_ADD;
        i > 0 && (t += i << s.Tool.getBitNum(r.ModelConst.LEN_TRANSPORT_STYLE));
        var o =
          (e.low >> r.ModelConst.OFFSET_TRANSPORT_ADD_2) &
          r.ModelConst.LEN_TRANSPORT_ADD_2;
        o > 0 &&
          (t +=
            o <<
            (s.Tool.getBitNum(r.ModelConst.LEN_TRANSPORT_STYLE) +
              r.ModelConst.LEN_TRANSPORT_ADD));
        var n =
          (e.high >> r.ModelConst.OFFSET_TRANSPORT_ADD_3) &
          r.ModelConst.LEN_TRANSPORT_ADD_3;
        return (
          n > 0 &&
            (t +=
              n <<
              (s.Tool.getBitNum(r.ModelConst.LEN_TRANSPORT_STYLE) +
                r.ModelConst.LEN_TRANSPORT_ADD +
                r.ModelConst.LEN_TRANSPORT_ADD_2)),
          t
        );
      }),
      (e.getBackStyle = function (e) {
        if (!e) return 0;
        var t =
            (e.low >> r.ModelConst.OFFSET_BACK_STYLE) &
            r.ModelConst.LEN_BACK_STYLE,
          i =
            (e.low >> r.ModelConst.OFFSET_BACK_ADD) & r.ModelConst.LEN_BACK_ADD;
        i > 0 && (t += i << s.Tool.getBitNum(r.ModelConst.LEN_BACK_STYLE));
        var o =
          (e.high >> r.ModelConst.OFFSET_BACK_ADD_2) &
          r.ModelConst.LEN_BACK_ADD_2;
        return (
          o > 0 &&
            (t +=
              o <<
              (s.Tool.getBitNum(r.ModelConst.LEN_BACK_STYLE) +
                s.Tool.getBitNum(r.ModelConst.LEN_BACK_ADD))),
          t
        );
      }),
      (e.getShoulderStyle = function (e) {
        if (!e) return 0;
        var t = r.ModelConst,
          i = (e.low >> t.OFFSET_SHOULDER_STYLE) & t.LEN_SHOULDER_STYLE,
          o = (e.low >> t.OFFSET_SHOULDER_ADD) & t.LEN_SHOULDER_ADD;
        o > 0 && (i += o << s.Tool.getBitNum(t.LEN_SHOULDER_STYLE));
        var n = (e.high >> t.OFFSET_SHOULDER_ADD_2) & t.LEN_SHOULDER_ADD_2;
        return (
          n > 0 &&
            (i +=
              n <<
              (s.Tool.getBitNum(t.LEN_SHOULDER_STYLE) +
                s.Tool.getBitNum(t.LEN_SHOULDER_ADD))),
          i
        );
      }),
      (e.getLeftWeaponStyle = function (e) {
        if (!e) return 0;
        var t =
            (e.low >> r.ModelConst.OFFSET_LWEAPON_STYLE) &
            r.ModelConst.LEN_LWEAPON_STYLE,
          i =
            (e.high >> r.ModelConst.OFFSET_LWEAPON_ADD) &
            r.ModelConst.LEN_LWEAPON_ADD;
        return (
          i > 0 && (t += i << s.Tool.getBitNum(r.ModelConst.LEN_LWEAPON_STYLE)),
          t
        );
      }),
      (e.getRightWeaponStyle = function (e) {
        if (!e) return 0;
        var t =
            (e.low >> r.ModelConst.OFFSET_RWEAPON_STYLE) &
            r.ModelConst.LEN_RWEAPON_STYLE,
          i =
            (e.high >> r.ModelConst.OFFSET_RWEAPON_ADD) &
            r.ModelConst.LEN_RWEAPON_ADD;
        return (
          i > 0 && (t += i << s.Tool.getBitNum(r.ModelConst.LEN_RWEAPON_STYLE)),
          t
        );
      }),
      (e.getPetStyle = function (e) {
        return (
          (e.icon1.toNumber() >> r.ModelConst.OFFSET_PET_STYLE) &
          r.ModelConst.LEN_PET_STYLE
        );
      }),
      (e.getWeaponIcon = function (e, t) {
        return e > 500
          ? r.ModelConst.START_WEAPON_ADD1 + ((e - 500) << 2) - 3 + t
          : r.ModelConst.START_WEAPON + (e << 2) - 3 + t;
      }),
      (e.isTwoPeopleStyle = function (e) {
        return e == u.HOUSE_TWO_PEOPLE
          ? !0
          : e == u.CAR_OLE_TWO_PEOPLE
            ? !0
            : !1;
      }),
      (e.isTwoPeopleSprite = function (e) {
        return e == u.HOUSE_TWO_PEOPLE_SPRITE
          ? !0
          : e >= 5e4 && 50010 > e
            ? !0
            : !1;
      }),
      (e.printIcon = function (e, t, i) {
        var o = r.ModelConst,
          n = (e >> o.OFFSET_SEX) & o.LEN_SEX,
          a = (e >> o.OFFSET_RACE) & o.LEN_RACE,
          s = (e >> o.OFFSET_JOB) & o.LEN_JOB,
          l = (e >> o.OFFSET_HAIR_STYLE) & o.LEN_HAIR_STYLE,
          u = (e >> o.OFFSET_HAIR_COLOR) & o.LEN_HAIR_COLOR,
          _ = (e >> o.OFFSET_FACE_STYLE) & o.LEN_FACE_STYLE,
          d = (e >> o.OFFSET_HAND_STYLE) & o.LEN_HAND_STYLE,
          p = (e >> o.OFFSET_HAND_COLOR) & o.LEN_HAND_COLOR,
          c = (e >> o.OFFSET_FEET_STYLE) & o.LEN_FEET_STYLE,
          h = (e >> o.OFFSET_FEET_COLOR) & o.LEN_FEET_COLOR,
          f = (e >> o.OFFSET_HELMET_STYLE) & o.LEN_HELMET_STYLE,
          T = (e >> o.OFFSET_HELMET_COLOR) & o.LEN_HELMET_COLOR,
          E =
            "性别:" +
            n +
            "\n" +
            ("种族:" + a + "\n") +
            ("职业:" + s + "\n") +
            ("头发样式:" + l + "\n") +
            ("头发颜色:" + u + "\n") +
            ("脸样式:" + _ + "\n") +
            ("手样式:" + d + "\n") +
            ("手颜色:" + p + "\n") +
            ("脚样式:" + c + "\n") +
            ("脚颜色:" + h + "\n") +
            ("头盔样式:" + f + "\n") +
            ("头盔颜色:" + T + "\n"),
          y = (t >> o.OFFSET_SHOULDER_STYLE) & o.LEN_SHOULDER_STYLE,
          g = (t >> o.OFFSET_SHOULDER_COLOR) & o.LEN_SHOULDER_COLOR,
          v = (t >> o.OFFSET_LWEAPON_STYLE) & o.LEN_LWEAPON_STYLE,
          S = (t >> o.OFFSET_LWEAPON_COLOR) & o.LEN_LWEAPON_COLOR,
          I = (t >> o.OFFSET_RWEAPON_STYLE) & o.LEN_RWEAPON_STYLE,
          m = (t >> o.OFFSET_RWEAPON_COLOR) & o.LEN_RWEAPON_COLOR,
          A = (t >> o.OFFSET_VIP) & o.LEN_VIP,
          C = (t >> o.OFFSET_WEAPON_FLASH) & o.LEN_WEAPON_FLASH,
          P = (t >> o.OFFSET_SHOULDER_ADD) & o.LEN_SHOULDER_ADD,
          R =
            "肩部样式:" +
            y +
            "\n" +
            ("肩部颜色:" + g + "\n") +
            ("武器(左)样式:" + v + "\n") +
            ("武器(左)颜色:" + S + "\n") +
            ("武器(右)样式:" + I + "\n") +
            ("武器(右)颜色:" + m + "\n") +
            ("VIP精灵样式:" + A + "\n") +
            ("武器发光(7宝石以上):" + C + "\n") +
            ("肩部样式(拓展):" + P + "\n"),
          O = (i >> o.OFFSET_BACK_STYLE) & o.LEN_BACK_STYLE,
          N = (i >> o.OFFSET_BACK_COLOR) & o.LEN_BACK_COLOR,
          M = (i >> o.OFFSET_CLOTHES_STYLE) & o.LEN_CLOTHES_STYLE,
          L = (i >> o.OFFSET_CLOTHES_COLOR) & o.LEN_CLOTHES_COLOR,
          w = (i >> o.OFFSET_TROUSERS_STYLE) & o.LEN_TROUSERS_STYLE,
          b = (i >> o.OFFSET_TROUSERS_COLOR) & o.LEN_TROUSERS_COLOR,
          x = (i >> o.OFFSET_TRANSPORT_STYLE) & o.LEN_TRANSPORT_STYLE,
          D = (i >> o.OFFSET_TRANSPORT_COLOR) & o.LEN_TRANSPORT_COLOR,
          B = (i >> o.OFFSET_BACK_ADD) & o.LEN_BACK_ADD,
          G = (i >> o.OFFSET_TRANSPORT_ADD) & o.LEN_TRANSPORT_ADD,
          U = (i >> o.OFFSET_FASH_ADD) & o.LEN_FASH_ADD,
          k = (i >> o.OFFSET_TRANSPORT_ADD_2) & o.LEN_TRANSPORT_ADD_2,
          V =
            "背部样式:" +
            O +
            "\n" +
            ("背部颜色:" + N + "\n") +
            ("衣服(上)样式:" + M + "\n") +
            ("衣服(上)颜色:" + L + "\n") +
            ("衣服(下)样式:" + w + "\n") +
            ("衣服(下)颜色:" + b + "\n") +
            ("坐骑样式:" + x + "\n") +
            ("坐骑颜色:" + D + "\n") +
            ("背部样式(拓展):" + B + "\n") +
            ("坐骑样式(拓展):" + G + "\n") +
            ("是否穿时装:" + U + "\n") +
            ("坐骑样式(拓展2):" + k + "\n");
        console.log(E + R + V);
      }),
      (e.cloneSprite = function (t, i) {
        if ((void 0 === i && (i = !0), null == t)) return null;
        var n = o["default"].alloc(l["default"]);
        return (
          t.clone(n),
          1 == i &&
            null != t.cloakSprite &&
            (n.cloakSprite = e.cloneSprite(t.cloakSprite, !1)),
          n
        );
      }),
      (e.createBattleEffSprite = function (t) {
        var i = e.createSprite(t, !0, n.LoadPri.UIScene);
        return ((i.scale = 2), i);
      }),
      (e.createSprite = function (e, t, i) {
        void 0 === i && (i = n.LoadPri.Scene);
        var a = o["default"].alloc(l["default"]);
        return (a.setSrc(e, i, t), a);
      }),
      (e.playEftSpr = function (e, t, i, a, r, s, u, _, d) {
        (void 0 === s && (s = 1),
          void 0 === _ && (_ = n.LoadPri.Effect),
          void 0 === d && (d = 2));
        var p = o["default"].alloc(l["default"]);
        ((p.autoRemove = !0),
          (p.autoPlay = !0),
          (p.x = t),
          (p.y = i),
          (p.scale = d),
          void 0 != u ? a.addChildAt(p, u) : a.addChild(p),
          p.setSrc(e),
          p.setCurAnimation(r, s));
      }),
      (e.transportStyleNotBack = [36, 42, 43, 48]),
      (e.emptyFiles = [4245]),
      e
    );
  })();
  t.SpriteTool = _;
});
