(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(5),
    n = i(4),
    a = i(10),
    r = i(12),
    s = i(20),
    l = i(30),
    u = i(8),
    _ = i(64),
    d = (function () {
      function e(e) {
        this.type = e;
      }
      return (
        (e.prototype.getType = function () {
          return this.type;
        }),
        (e.fromBytes = function (t) {
          var i = new e(t.readByte());
          i.not = t.readByte();
          var o = 255 & t.readByte(),
            n = new egret.ByteArray();
          return (o > 0 && t.readBytes(n, 0, o), (i.data = n), i);
        }),
        (e.prototype.isConditionOfSatisfy = function (e) {
          return this.checkCondition(e, this.data);
        }),
        (e.prototype.checkCondition = function (t, i) {
          if (null == t) return !1;
          i.position = 0;
          var a,
            s = !0;
          switch (this.type) {
            case e.CONDITION_NONE:
              s = !0;
              break;
            case e.CONDITION_LEVEL:
              var l = i.readByte();
              s = t.getLevel() >= l;
              break;
            case e.CONDITION_KILL_MONSTER:
              var u = (i.readShort(), i.readUTF(), i.readByte()),
                d = i.readByte();
              s = d >= u;
              break;
            case e.CONDITION_MONEY:
              var p = i.readInt();
              s = t.get(r.ModelConst.MONEY1) >= p;
              break;
            case e.CONDITION_MONEY2:
              var c = i.readInt();
              ((s = t.get(r.ModelConst.MONEY2) >= c),
                0 == s && (s = t.get(r.ModelConst.MONEY1) >= c));
              break;
            case e.CONDITION_MONEY3:
              var h = i.readInt();
              s = t.get(r.ModelConst.MONEY3) >= h;
              break;
            case e.CONDITION_HONOR:
              var f = i.readShort();
              s = t.get(r.ModelConst.COUNTRY_HONOR) >= f;
              break;
            case e.CONDITION_COUNTRY_RANK:
              var T = i.readByte();
              s =
                T == n["default"].RANK_SOLDIER
                  ? t.isStatusBit(r.ModelConst.STATUS_IS_SOLDIER)
                  : t.get(r.ModelConst.COUNTRY_RANK) == T;
              break;
            case e.CONDITION_COUNTRY_RANK_2:
              var T = i.readByte();
              s = t.get(r.ModelConst.COUNTRY_RANK) >= T;
              break;
            case e.CONDITION_HAVE_ITEM:
              var E = i.readInt(),
                y = (i.readUTF(), i.readByte()),
                g = t.getItemNumByIdInBag(E);
              s = g >= y;
              break;
            case e.CONDITION_EQUIP_ITEM:
              var v = i.readInt();
              i.readUTF();
              s = t.isEquipItemByIdInEquip(v);
              break;
            case e.CONDITION_MISSION_DONE:
              var S = i.readShort();
              i.readUTF();
              s = _["default"].isMissionFinish(t, S);
              break;
            case e.CONDITION_MISSION_DOING:
              var S = i.readShort(),
                I = (i.readUTF(), t.getMissionById(S));
              s = null != I;
              break;
            case e.CONDITION_SCHOOL:
              var m = i.readByte();
              s = t.getRace() == m;
              break;
            case e.CONDITION_JOB:
              var A = i.readByte();
              s = t.getJob() == A;
              break;
            case e.CONDITION_IN_MAP:
              var C = i.readShort();
              i.readUTF();
              s = o["default"].getCurMapID() == C;
              break;
            case e.CONDITION_AFTER_DATE:
              (i.readByte(), i.readByte());
              break;
            case e.CONDITION_AFTER_TIME:
              (i.readByte(), i.readByte());
              break;
            case e.CONDITION_SEX:
              s = t.get(r.ModelConst.SEX) == n["default"].SEX_MALE;
              break;
            case e.CONDITION_IN_GUILD:
              break;
            case e.CONDITION_HAVE_BUFF:
              i.readByte();
              break;
            case e.CONDITION_PLAYER_HP:
              var P = i.readInt();
              s = t.get(r.ModelConst.HP) >= P;
              break;
            case e.CONDITION_PLAYER_MP:
              var R = i.readInt();
              s = t.get(r.ModelConst.MP) >= R;
              break;
            case e.CONDITION_PLAYER_CON:
              var O = i.readShort();
              s = t.get(r.ModelConst.CON) >= O;
              break;
            case e.CONDITION_PLAYER_STR:
              var N = i.readShort();
              s = t.get(r.ModelConst.STR) >= N;
              break;
            case e.CONDITION_PLAYER_ITL:
              var M = i.readShort();
              s = t.get(r.ModelConst.ILT) >= M;
              break;
            case e.CONDITION_PLAYER_AGI:
              var L = i.readShort();
              s = t.get(r.ModelConst.AGI) >= L;
              break;
            case e.CONDITION_VIP:
              var l = i.readByte();
              s =
                o["default"].isVip(t) || t.getSuperQqLevel() > 0
                  ? t.getVipLevel() >= l || t.getSuperQqLevel() >= l
                  : !1;
              break;
            case e.CONDITION_CITY_ID:
            case e.CONDITION_CITY_BRANCH:
              break;
            case e.CONDITION_CITY_SCALE:
              ((a = i.readByte()), (s = o["default"].cityScale >= a));
              break;
            case e.CONDITION_CITY_LEVEL:
              ((a = i.readByte()), (s = o["default"].cityLevel >= a));
              break;
            case e.CONDITION_CITY_DEGREE:
              ((a = i.readInt()), (s = o["default"].cityDegree >= a));
              break;
            case e.CONDITION_CITY_ARMY:
              ((a = i.readInt()), (s = o["default"].cityArmy >= a));
              break;
            case e.CONDITION_CITY_ISMASTER:
              s = o["default"].getPlayerID() == o["default"].cityMasterId;
          }
          return 0 == this.not ? s : !s;
        }),
        (e.prototype.getConditionDesc = function () {
          if (null == this.data || this.data.length <= 0) return null;
          try {
            var t = this.data;
            t.position = 0;
            var i = new l["default"](),
              n = this.type;
            if (n == e.CONDITION_KILL_MONSTER) {
              var d = (t.readShort(), t.readUTF()),
                p = t.readByte(),
                c = t.readByte();
              (i.append(a.GameText.STR_CONDITION_KILL_MONSTER),
                i.append(s["default"].makeColorString(d, u.Tool.COLOR_YELLOW)));
              var h = c >= p;
              i.append(
                s["default"].makeColorString(
                  (h ? p : c) + "/" + p,
                  h ? u.Tool.COLOR_GREEN : u.Tool.COLOR_RED,
                ),
              );
            } else if (n == e.CONDITION_HAVE_ITEM) {
              var f = t.readInt(),
                T = t.readUTF(),
                p = t.readByte(),
                c = o["default"].myPlayer.getItemNumByIdInBag(f);
              (i.append(a.GameText.STR_CONDITION_GET),
                i.append(s["default"].makeColorString(T, u.Tool.COLOR_YELLOW)));
              var h = c >= p;
              i.append(
                s["default"].makeColorString(
                  (h ? p : c) + "/" + p,
                  h ? u.Tool.COLOR_GREEN : u.Tool.COLOR_RED,
                ),
              );
            } else if (n == e.CONDITION_MISSION_DONE) {
              var f = t.readShort(),
                E = t.readUTF(),
                y = _["default"].isMissionFinish(o["default"].myPlayer, f);
              i.append(
                u.Tool.manageString(
                  a.GameText.STR_CONDITION_MISSION_DONE,
                  s["default"].makeColorString(
                    E,
                    y ? u.Tool.COLOR_GREEN : u.Tool.COLOR_RED,
                  ),
                ),
              );
            } else if (n == e.CONDITION_HONOR) {
              var g = t.readShort(),
                h = o["default"].myPlayer.countryHonor >= g;
              i.append(
                u.Tool.manageString(
                  a.GameText.STR_CONDITION_HONOR,
                  s["default"].makeColorString(
                    "" + g,
                    h ? u.Tool.COLOR_GREEN : u.Tool.COLOR_RED,
                  ),
                ),
              );
            } else if (n == e.CONDITION_MONEY) {
              var v = t.readInt(),
                h = o["default"].myPlayer.money1 >= v;
              i.append(
                u.Tool.manageString(
                  a.GameText.STR_CONDITION_NEED,
                  a.GameText.getMoneyText(r.ModelConst.MONEY1) +
                    s["default"].makeColorString(
                      "" + v,
                      h ? u.Tool.COLOR_GREEN : u.Tool.COLOR_RED,
                    ),
                ),
              );
            } else if (n == e.CONDITION_MONEY2) {
              var S = t.readInt(),
                h = o["default"].myPlayer.money2 >= S;
              i.append(
                u.Tool.manageString(
                  a.GameText.STR_CONDITION_NEED,
                  a.GameText.getMoneyText(r.ModelConst.MONEY2) +
                    s["default"].makeColorString(
                      "" + S,
                      h ? u.Tool.COLOR_GREEN : u.Tool.COLOR_RED,
                    ),
                ),
              );
            } else if (n == e.CONDITION_MONEY3) {
              var I = t.readInt(),
                h = o["default"].myPlayer.money3 >= I;
              i.append(
                u.Tool.manageString(
                  a.GameText.STR_CONDITION_NEED,
                  a.GameText.getMoneyText(r.ModelConst.MONEY3) +
                    s["default"].makeColorString(
                      "" + I,
                      h ? u.Tool.COLOR_GREEN : u.Tool.COLOR_RED,
                    ),
                ),
              );
            } else if (n == e.CONDITION_CITY_DEGREE) {
              var m = t.readInt(),
                h = o["default"].cityDegree >= m;
              i.append(
                u.Tool.manageString(
                  a.GameText.STR_CONDITION_NEED_CITY_DEGREE,
                  s["default"].makeColorString(
                    "" + m,
                    h ? u.Tool.COLOR_GREEN : u.Tool.COLOR_RED,
                  ),
                ),
              );
            } else if (n == e.CONDITION_CITY_ARMY) {
              var A = t.readInt(),
                h = o["default"].cityArmy >= A;
              i.append(
                u.Tool.manageString(
                  a.GameText.STR_CONDITION_NEED_CITY_ARMY,
                  s["default"].makeColorString(
                    "" + A,
                    h ? u.Tool.COLOR_GREEN : u.Tool.COLOR_RED,
                  ),
                ),
              );
            } else this.getAcceptConditionDesc(i, t);
            return i.toString();
          } catch (C) {
            return (console.error(C), null);
          }
        }),
        (e.prototype.getAcceptConditionDesc = function (t, i) {
          var l = this.type;
          if (l == e.CONDITION_LEVEL) {
            var _ = i.readByte(),
              d = o["default"].myPlayer.get(r.ModelConst.LEVEL) >= _;
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_LEVEL,
                s["default"].makeColorString(
                  "" + _,
                  d ? u.Tool.COLOR_GREEN : u.Tool.COLOR_RED,
                ),
              ),
            );
          } else if (l == e.CONDITION_EQUIP_ITEM) {
            i.readInt();
            var p = i.readUTF();
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_EQUIP_ITEM,
                s["default"].makeColorString(p, u.Tool.COLOR_RED),
              ),
            );
          } else if (l == e.CONDITION_MISSION_DOING) {
            var c = i.readShort(),
              p = i.readUTF();
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_MISSION_DOING,
                s["default"].makeColorString(p, u.Tool.COLOR_RED),
              ),
            );
          } else if (l == e.CONDITION_SCHOOL) {
            var h = i.readByte();
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_SCHOOL,
                s["default"].makeColorString(
                  n["default"].getRaceString(h),
                  u.Tool.COLOR_RED,
                ),
              ),
            );
          } else if (l == e.CONDITION_JOB) {
            var f = i.readByte();
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_JOB,
                s["default"].makeColorString(
                  n["default"].getJobString(f),
                  u.Tool.COLOR_RED,
                ),
              ),
            );
          } else if (l == e.CONDITION_COUNTRY_RANK) {
            var T = i.readByte();
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_COUNTRY_RANK,
                s["default"].makeColorString(
                  n["default"].getRankString(T),
                  u.Tool.COLOR_RED,
                ),
              ),
            );
          } else if (l == e.CONDITION_COUNTRY_RANK_2) {
            var T = i.readByte();
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_COUNTRY_RANK2,
                s["default"].makeColorString(
                  n["default"].getRankString(T),
                  u.Tool.COLOR_RED,
                ),
              ),
            );
          } else if (l == e.CONDITION_IN_MAP) {
            i.readShort();
            var p = i.readUTF();
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_IN_MAP,
                s["default"].makeColorString(p, u.Tool.COLOR_RED),
              ),
            );
          } else if (l == e.CONDITION_AFTER_DATE) {
            var E = i.readByte(),
              y = i.readByte();
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_AFTER_DATE,
                s["default"].makeColorString(
                  u.Tool.manageStringList(a.GameText.STR_CONDITION_MONTH_DAY, [
                    E + "",
                    y + "",
                  ]),
                  u.Tool.COLOR_RED,
                ),
              ),
            );
          } else if (l == e.CONDITION_AFTER_TIME) {
            var g = i.readByte(),
              v = i.readByte();
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_AFTER_DATE,
                s["default"].makeColorString(
                  u.Tool.manageStringList(
                    a.GameText.STR_CONDITION_HOUR_MINUTE,
                    [g + "", v + ""],
                  ),
                  u.Tool.COLOR_RED,
                ),
              ),
            );
          } else if (l == e.CONDITION_SEX)
            t.append(a.GameText.STR_CONDITION_SEX);
          else if (l == e.CONDITION_IN_GUILD)
            t.append(a.GameText.STR_CONDITION_IN_GUILD);
          else if (l == e.CONDITION_HAVE_BUFF) {
            var c = i.readByte();
            t.append(
              u.Tool.manageString(a.GameText.STR_CONDITION_HAVE_BUFF, c + ""),
            );
          } else if (l == e.CONDITION_PLAYER_HP) {
            var S = i.readInt();
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_PLAYER_HP,
                s["default"].makeColorString("" + S, u.Tool.COLOR_RED),
              ),
            );
          } else if (l == e.CONDITION_PLAYER_MP) {
            var I = i.readInt();
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_PLAYER_MP,
                s["default"].makeColorString("" + I, u.Tool.COLOR_RED),
              ),
            );
          } else if (l == e.CONDITION_PLAYER_CON) {
            var m = i.readShort();
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_PLAYER_CON,
                s["default"].makeColorString("" + m, u.Tool.COLOR_RED),
              ),
            );
          } else if (l == e.CONDITION_PLAYER_STR) {
            var A = i.readShort();
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_PLAYER_STR,
                s["default"].makeColorString("" + A, u.Tool.COLOR_RED),
              ),
            );
          } else if (l == e.CONDITION_PLAYER_ITL) {
            var C = i.readShort();
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_PLAYER_ITL,
                s["default"].makeColorString("" + C, u.Tool.COLOR_RED),
              ),
            );
          } else if (l == e.CONDITION_PLAYER_AGI) {
            var P = i.readShort();
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_PLAYER_AGI,
                s["default"].makeColorString("" + P, u.Tool.COLOR_RED),
              ),
            );
          } else if (l == e.CONDITION_VIP) {
            var _ = i.readByte(),
              R = a.GameText.STR_VIP;
            (o["default"].isQQVip && (R = a.GameText.STR_QQ_DIAMOND),
              t.append(
                u.Tool.manageString(
                  a.GameText.STR_CONDITION_LEVEL,
                  R + s["default"].makeColorString("" + _, u.Tool.COLOR_RED),
                ),
              ));
          } else if (l == e.CONDITION_CITY_SCALE) {
            var O = i.readByte();
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_CITY_SCALE,
                s["default"].makeColorString("" + O, u.Tool.COLOR_RED),
              ),
            );
          } else if (l == e.CONDITION_CITY_LEVEL) {
            var N = i.readByte();
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_CITY_LEVEL,
                s["default"].makeColorString("" + (N + 1), u.Tool.COLOR_RED),
              ),
            );
          } else if (l == e.CONDITION_CITY_BRANCH) {
            var M = i.readByte();
            t.append(
              u.Tool.manageString(
                a.GameText.STR_CONDITION_CITY_BRANCH,
                s["default"].makeColorString("" + M, u.Tool.COLOR_RED),
              ),
            );
          } else
            l == e.CONDITION_CITY_ISMASTER &&
              t.append(a.GameText.STR_CONDITION_CITY_ISMASTER);
        }),
        (e.prototype.cleanKillMonster = function () {
          this.setKilledMonsterNum(0, 0, !0, null);
        }),
        (e.prototype.updateKilledMonsterNum = function (e, t, i) {
          this.setKilledMonsterNum(e, t, !1, i);
        }),
        (e.prototype.setKilledMonsterNum = function (t, i, o, n) {
          var r = this.type;
          if (r == e.CONDITION_KILL_MONSTER)
            try {
              var l = this.data;
              l.position = 0;
              var _ = l.readShort(),
                d = l.readUTF(),
                p = l.readByte(),
                c = l.readByte(),
                h = 0;
              if (0 == o) {
                if (_ != t) return;
                var f = c + i;
                (f > u.Tool.MAX_VALUE_byte && (f = u.Tool.MAX_VALUE_byte),
                  (h = f),
                  null != n &&
                    n.append(
                      s["default"].makeColorString(
                        a.GameText.STR_CONDITION_MISSION,
                        u.Tool.COLOR_YELLOW,
                      ) +
                        d +
                        " " +
                        s["default"].makeColorString(
                          h + "",
                          h >= p ? u.Tool.COLOR_GREEN : u.Tool.COLOR_RED,
                        ) +
                        "/" +
                        p +
                        "\n",
                    ));
              }
              (l.clear(),
                l.writeShort(_),
                l.writeUTF(d),
                l.writeByte(p),
                l.writeByte(h));
            } catch (T) {
              console.error(T);
            }
        }),
        (e.prototype.getKillMonsterId = function () {
          var t = this.type;
          if (t == e.CONDITION_KILL_MONSTER) {
            var i = this.data;
            i.position = 0;
            var o = i.readShort();
            return ((i.position = 0), o);
          }
        }),
        (e.prototype.getMissionDoneId = function () {
          var t = this.type;
          if (t == e.CONDITION_MISSION_DONE) {
            var i = this.data;
            i.position = 0;
            var o = i.readShort();
            return ((i.position = 0), o);
          }
        }),
        (e.prototype.updateHaveItemNum = function (t, i) {
          if (this.type == e.CONDITION_HAVE_ITEM) {
            var n = o["default"].myPlayer;
            if (null != n)
              try {
                var a = this.data;
                a.position = 0;
                var r = a.readInt(),
                  l = (a.readUTF(), a.readByte()),
                  _ = n.getItemNumByIdInBag(t);
                if (r != t) return;
                i.append(
                  "  (" +
                    s["default"].makeColorString(
                      _ + "",
                      _ >= l ? u.Tool.COLOR_GREEN : u.Tool.COLOR_RED,
                    ) +
                    "/" +
                    l +
                    ")",
                );
              } catch (d) {
                console.error(d);
              }
          }
        }),
        (e.CONDITION_NONE = 0),
        (e.CONDITION_LEVEL = 1),
        (e.CONDITION_KILL_MONSTER = 2),
        (e.CONDITION_MONEY = 3),
        (e.CONDITION_MONEY2 = 4),
        (e.CONDITION_MONEY3 = 5),
        (e.CONDITION_HONOR = 6),
        (e.CONDITION_HAVE_ITEM = 7),
        (e.CONDITION_EQUIP_ITEM = 8),
        (e.CONDITION_MISSION_DONE = 9),
        (e.CONDITION_MISSION_DOING = 10),
        (e.CONDITION_SCHOOL = 11),
        (e.CONDITION_IN_MAP = 12),
        (e.CONDITION_AFTER_DATE = 13),
        (e.CONDITION_AFTER_TIME = 14),
        (e.CONDITION_SEX = 15),
        (e.CONDITION_IN_GUILD = 16),
        (e.CONDITION_HAVE_BUFF = 17),
        (e.CONDITION_PLAYER_HP = 18),
        (e.CONDITION_PLAYER_MP = 19),
        (e.CONDITION_PLAYER_CON = 20),
        (e.CONDITION_PLAYER_STR = 21),
        (e.CONDITION_PLAYER_ITL = 22),
        (e.CONDITION_PLAYER_AGI = 23),
        (e.CONDITION_VIP = 24),
        (e.CONDITION_CITY_ID = 25),
        (e.CONDITION_CITY_SCALE = 26),
        (e.CONDITION_CITY_LEVEL = 27),
        (e.CONDITION_CITY_BRANCH = 28),
        (e.CONDITION_CITY_DEGREE = 29),
        (e.CONDITION_CITY_ARMY = 30),
        (e.CONDITION_CITY_ISMASTER = 31),
        (e.CONDITION_JOB = 32),
        (e.CONDITION_COUNTRY_RANK = 33),
        (e.CONDITION_COUNTRY_RANK_2 = 34),
        e
      );
    })();
  t["default"] = d;
});
