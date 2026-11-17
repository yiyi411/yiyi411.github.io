(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(43),
    a = i(22),
    r = i(11),
    s = i(2),
    l = i(19),
    u = i(5),
    _ = i(27),
    d = i(4),
    p = i(10),
    c = i(23),
    h = i(12),
    f = i(20),
    T = i(30),
    E = i(8),
    y = i(1),
    g = i(31),
    v = i(18),
    S = i(0),
    I = i(35),
    m = i(15),
    A = (function () {
      function e() {
        ((this.id = 0),
          (this.level = 0),
          (this.addLevel = 0),
          (this.name = ""),
          (this.type = 0),
          (this.info = ""),
          (this.sp = 0),
          (this.money1 = 0),
          (this.money2 = 0),
          (this.money3 = 0),
          (this.reqJob = 0),
          (this.reqLevel = 0),
          (this.anime1 = 0),
          (this.anime2 = 0),
          (this.anime3 = 0),
          (this.skillWeapon = 0),
          (this.skillAtkType = 0),
          (this.atk_time = 0),
          (this.area = 0),
          (this.position = 0),
          (this.useMP = 0),
          (this.useHP = 0),
          (this.round = 0),
          (this.power1 = 0),
          (this.powerValue1 = 0),
          (this.statusBit1 = 0),
          (this.power2 = 0),
          (this.powerValue2 = 0),
          (this.statusBit2 = 0),
          (this.power3 = 0),
          (this.powerValue3 = 0),
          (this.statusBit3 = 0),
          (this.formationtyep = 0),
          (this.skillId = 0),
          (this.iconIndex = 0),
          (this.teamcount = 0));
      }
      return (
        (e.getDelSkillMoneyStr = function () {
          var t = e.DELETE_SKILL_MONEY[1];
          return 0 >= t
            ? ""
            : f["default"].makeColorString(
                E.Tool.manageString(
                  p.GameText.STR_CONDITION_NEED,
                  g.ModelVo.getMoneyText(this.DELETE_SKILL_MONEY[0]) + t,
                ),
                E.Tool.COLOR_RED,
              );
        }),
        (e.prototype.getRealLevelInfo = function () {
          return this.addLevel > 0
            ? E.Tool.manageString(
                p.GameText.getText(p.GameText.TI_LEVEL),
                this.level - this.addLevel + "+" + this.addLevel,
              )
            : E.Tool.manageString(
                p.GameText.getText(p.GameText.TI_LEVEL),
                this.level + "",
              );
        }),
        (e.prototype.isAddSkill = function () {
          return this.addLevel <= 0
            ? !1
            : this.level - this.addLevel > 0
              ? !1
              : !0;
        }),
        (e.fromBytes = function (t) {
          var i = new e();
          return (e.fromBaseBytes(t, i), i);
        }),
        (e.fromShopBytes = function (t) {
          var i = new e();
          return (this.fromBaseBytes(t, i), this.tryFromShopBytes(t, i), i);
        }),
        (e.tryFromShopBytes = function (e, t) {
          try {
            ((t.sp = 65535 & e.getShort()),
              (t.money1 = 65535 & e.getShort()),
              (t.money2 = 65535 & e.getShort()),
              (t.money3 = e.getInt()),
              (t.reqJob = e.getByte()),
              (t.reqLevel = e.getByte()));
          } catch (i) {}
          return t;
        }),
        (e.fromBaseBytes = function (e, t) {
          try {
            ((t.id = 65535 & e.getShort()),
              (t.level = e.getByte()),
              (t.name = e.getString()),
              (t.type = e.getByte()),
              (t.info = e.getString()),
              (t.skillWeapon = e.getByte()),
              (t.power1 = e.getShort()),
              (t.powerValue1 = e.getShort()),
              (t.power2 = e.getShort()),
              (t.powerValue2 = e.getShort()),
              (t.power3 = e.getShort()),
              (t.powerValue3 = e.getShort()),
              t.type != d["default"].SKILL_TYPE_PASSIVE &&
                ((t.skillAtkType = e.getByte()),
                (t.area = e.getByte()),
                (t.round = e.getByte()),
                (t.atk_time = e.getByte()),
                (t.useMP = 65535 & e.getShort()),
                (t.useHP = 65535 & e.getShort()),
                (t.anime1 = e.getByte()),
                (t.anime2 = e.getShort()),
                (t.anime3 = e.getShort()),
                (t.position = e.getByte()),
                (t.statusBit1 = e.getByte()),
                (t.statusBit2 = e.getByte()),
                (t.statusBit3 = e.getByte())),
              (t.isLearnByBook = e.getBoolean()));
          } catch (i) {
            console.error(i);
          }
          return t;
        }),
        (e.fromBaseBytesForItem = function (e, t) {
          try {
            ((t.id = 65535 & e.getShort()),
              (t.level = e.getByte()),
              (t.name = e.getString()),
              (t.type = e.getByte()),
              (t.info = e.getString()),
              (t.skillWeapon = e.getByte()),
              (t.power1 = e.getShort()),
              (t.powerValue1 = e.getShort()),
              (t.power2 = e.getShort()),
              (t.powerValue2 = e.getShort()),
              (t.power3 = e.getShort()),
              (t.powerValue3 = e.getShort()),
              t.type != d["default"].SKILL_TYPE_PASSIVE &&
                ((t.skillAtkType = e.getByte()),
                (t.area = e.getByte()),
                (t.round = e.getByte()),
                (t.atk_time = e.getByte()),
                (t.useMP = 65535 & e.getShort()),
                (t.useHP = 65535 & e.getShort()),
                (t.anime1 = e.getByte()),
                (t.anime2 = e.getShort()),
                (t.anime3 = e.getShort()),
                (t.position = e.getByte()),
                (t.statusBit1 = e.getByte()),
                (t.statusBit2 = e.getByte()),
                (t.statusBit3 = e.getByte())));
          } catch (i) {
            console.error(i);
          }
          return t;
        }),
        (e.prototype.getClone = function () {
          var t = new e();
          return (
            (t.id = this.id),
            (t.level = this.level),
            (t.name = this.name),
            (t.type = this.type),
            (t.info = this.info),
            (t.sp = this.sp),
            (t.money1 = this.money1),
            (t.money2 = this.money2),
            (t.money3 = this.money3),
            (t.reqJob = this.reqJob),
            (t.reqLevel = this.reqLevel),
            (t.anime1 = this.anime1),
            (t.anime2 = this.anime2),
            (t.anime3 = this.anime3),
            (t.skillWeapon = this.skillWeapon),
            (t.skillAtkType = this.skillAtkType),
            (t.atk_time = this.atk_time),
            (t.area = this.area),
            (t.position = this.position),
            (t.useMP = this.useMP),
            (t.useHP = this.useHP),
            (t.round = this.round),
            (t.power1 = this.power1),
            (t.powerValue1 = this.powerValue1),
            (t.statusBit1 = this.statusBit1),
            (t.power2 = this.power2),
            (t.powerValue2 = this.powerValue2),
            (t.statusBit2 = this.statusBit2),
            (t.power3 = this.power3),
            (t.powerValue3 = this.powerValue3),
            (t.statusBit3 = this.statusBit3),
            (t.isLearnByBook = this.isLearnByBook),
            t
          );
        }),
        (e.prototype.get = function (t) {
          switch (t) {
            case e.SKILL_ATK_TYPE:
              return this.skillAtkType;
          }
          return 0;
        }),
        (e.prototype.getMoney = function () {
          return this.money1 > 0
            ? this.money1
            : this.money2 > 0
              ? this.money2
              : this.money3 > 0
                ? this.money3
                : 0;
        }),
        (e.prototype.getMoneyType = function () {
          return this.money1 > 0
            ? h.ModelConst.MONEY1
            : this.money2 > 0
              ? h.ModelConst.MONEY2
              : this.money3 > 0
                ? h.ModelConst.MONEY3
                : h.ModelConst.MONEY3;
        }),
        (e.prototype.getMoneyIcon = function () {
          return (this.money1 > 0, this.money2 > 0, this.money3 > 0, 0);
        }),
        (e.prototype.getPowerValue = function (e) {
          var t = 0;
          return (
            this.power1 == e && (t += this.powerValue1),
            this.power2 == e && (t += this.powerValue2),
            this.power3 == e && (t += this.powerValue3),
            0 | t
          );
        }),
        (e.prototype.isRebornSkill = function () {
          return this.power1 == d["default"].POWER_RECOVER ||
            this.power1 == d["default"].POWER_RECOVER_PERCENT
            ? !0
            : this.power2 == d["default"].POWER_RECOVER ||
                this.power2 == d["default"].POWER_RECOVER_PERCENT
              ? !0
              : this.power3 == d["default"].POWER_RECOVER ||
                  this.power3 == d["default"].POWER_RECOVER_PERCENT
                ? !0
                : !1;
        }),
        (e.prototype.isEnoughHP = function (e) {
          return this.useHP <= 0
            ? !0
            : null == e
              ? !1
              : e.get(h.ModelConst.HP) >= this.useHP + 1;
        }),
        (e.prototype.getName = function () {
          return (
            f["default"].makeColorString(this.name, E.Tool.COLOR_YELLOW) +
            " (" +
            E.Tool.manageString(
              p.GameText.getText(p.GameText.TI_LEVEL),
              this.level + "",
            ) +
            ")"
          );
        }),
        (e.prototype.getDesc = function (t, i, o) {
          (void 0 === i && (i = -1), void 0 === o && (o = 24));
          var n = new T["default"](),
            a = [],
            r = "",
            s = u["default"].myPlayer;
          if (null == s) return r;
          if (t) {
            if (((r = ""), this.money1 > 0)) {
              var l = s.get(h.ModelConst.MONEY1);
              r +=
                this.money1 <= l
                  ? f["default"].makeColorString(
                      " " +
                        g.ModelVo.getMoneyText(h.ModelConst.MONEY1) +
                        this.money1,
                      E.Tool.COLOR_GREEN,
                    )
                  : f["default"].makeColorString(
                      " " +
                        g.ModelVo.getMoneyText(h.ModelConst.MONEY1) +
                        this.money1,
                      E.Tool.COLOR_RED,
                    );
            }
            if (this.money2 > 0) {
              var _ = s.get(h.ModelConst.MONEY2);
              r +=
                this.money2 <= _
                  ? f["default"].makeColorString(
                      " " +
                        g.ModelVo.getMoneyText(h.ModelConst.MONEY2) +
                        this.money2,
                      E.Tool.COLOR_GREEN,
                    )
                  : f["default"].makeColorString(
                      " " +
                        g.ModelVo.getMoneyText(h.ModelConst.MONEY2) +
                        this.money2,
                      E.Tool.COLOR_RED,
                    );
            }
            if (this.money3 > 0) {
              var c = s.get(h.ModelConst.MONEY3);
              r +=
                this.money3 <= c
                  ? f["default"].makeColorString(
                      " " +
                        g.ModelVo.getMoneyText(h.ModelConst.MONEY3) +
                        this.money3,
                      E.Tool.COLOR_GREEN,
                    )
                  : f["default"].makeColorString(
                      " " +
                        g.ModelVo.getMoneyText(h.ModelConst.MONEY3) +
                        this.money3,
                      E.Tool.COLOR_RED,
                    );
            }
            if (
              (0 == E.Tool.isNullText(r) &&
                n.append(
                  E.Tool.manageString(
                    p.GameText.STR_SKILL_GETD_DESC_COST,
                    r + "\n",
                  ),
                ),
              this.sp > 0)
            ) {
              var y = this.sp + "";
              ((y =
                this.sp <= s.get(h.ModelConst.SP)
                  ? f["default"].makeColorString(y, E.Tool.COLOR_GREEN)
                  : f["default"].makeColorString(y, E.Tool.COLOR_RED)),
                n.append(
                  E.Tool.manageString(
                    p.GameText.STR_SKILL_GETD_DESC_NEED_SP,
                    y,
                  ),
                ));
            }
            ((r = ""),
              0 != this.reqJob &&
                (r += E.Tool.manageString(
                  p.GameText.STR_SKILL_GETD_DESC_JOB,
                  d["default"].getJobString(this.reqJob),
                )),
              0 != this.reqLevel &&
                (r += E.Tool.manageString(
                  p.GameText.STR_SKILL_GETD_DESC_LEVEL,
                  this.reqLevel + "",
                )),
              0 == E.Tool.isNullText(r) &&
                (r = E.Tool.manageString(
                  p.GameText.STR_SKILL_GETD_DESC_NEED,
                  r + "",
                )));
          }
          if (
            (null != this.name &&
              (n.append(this.getName()),
              n.append("    " + d["default"].getSkillTypeString(this.type)),
              n.append("\n")),
            this.type != d["default"].SKILL_TYPE_PASSIVE &&
              (n.append(d["default"].getSkillAreaString(this.area)),
              n.append(
                "    " +
                  d["default"].getAtkTypeString(this.skillAtkType) +
                  "\n",
              )),
            0 != this.power1)
          )
            if (0 != this.powerValue1) {
              var v = d["default"].getPowerDesc(
                this.power1,
                this.powerValue1,
                this,
              );
              (this.statusBit1 &&
                0 != this.statusBit1 &&
                (v += "," + d["default"].getBufferString(this.statusBit1)),
                a.push([v, E.Tool.COLOR_GREEN]));
            } else
              this.statusBit1 &&
                0 != this.statusBit1 &&
                a.push([
                  d["default"].getBufferString(this.statusBit1),
                  E.Tool.COLOR_GREEN,
                ]);
          if (0 != this.power2)
            if (0 != this.powerValue2) {
              var v = d["default"].getPowerDesc(
                this.power2,
                this.powerValue2,
                this,
              );
              (this.statusBit2 &&
                0 != this.statusBit2 &&
                (v += "," + d["default"].getBufferString(this.statusBit2)),
                a.push([v, E.Tool.COLOR_GREEN]));
            } else
              this.statusBit2 &&
                0 != this.statusBit2 &&
                a.push([
                  d["default"].getBufferString(this.statusBit2),
                  E.Tool.COLOR_GREEN,
                ]);
          if (0 != this.power3)
            if (0 != this.powerValue3) {
              var v = d["default"].getPowerDesc(
                this.power3,
                this.powerValue3,
                this,
              );
              (this.statusBit3 &&
                0 != this.statusBit3 &&
                (v += "," + d["default"].getBufferString(this.statusBit3)),
                a.push([v, E.Tool.COLOR_GREEN]));
            } else
              this.statusBit3 &&
                0 != this.statusBit3 &&
                a.push([
                  d["default"].getBufferString(this.statusBit3),
                  E.Tool.COLOR_GREEN,
                ]);
          if (
            (this.round > 0 &&
              a.push([
                E.Tool.manageString(
                  p.GameText.STR_ITEM_GET_LAST_ROUND,
                  this.round + "",
                ),
                null,
              ]),
            this.atk_time && 0 != this.atk_time)
          ) {
            var S = this.atk_time > 0 ? "+" : "";
            a.push([
              E.Tool.manageString(
                p.GameText.STR_ITEM_COM_ATK_TIME,
                S + this.atk_time,
              ),
              null,
            ]);
          }
          return (
            (r = ""),
            this.useMP &&
              0 != this.useMP &&
              (r +=
                " " +
                E.Tool.manageString(
                  p.GameText.STR_SKILL_GETD_DESC_USE_MP,
                  this.useMP + "",
                )),
            this.useHP &&
              0 != this.useHP &&
              (r +=
                " " +
                E.Tool.manageString(
                  p.GameText.STR_SKILL_GETD_DESC_USE_HP,
                  this.useHP + "",
                )),
            0 == E.Tool.isNullText(r) &&
              a.push([
                E.Tool.manageString(p.GameText.STR_SKILL_GETD_DESC_EXPEND, r),
                null,
              ]),
            this.skillWeapon > 0 &&
              ((r = E.Tool.manageString(
                p.GameText.STR_SKILL_GETD_DESC_WEAPON,
                d["default"].getSkillWeaponString(this.skillWeapon),
              )),
              0 ==
              e.isValidSkillWeapon(
                u["default"].myPlayer.get(h.ModelConst.LEFT_WEAPON_TYPE),
                u["default"].myPlayer.get(h.ModelConst.RIGHT_WEAPON_TYPE),
                this,
              )
                ? a.push([r, E.Tool.COLOR_RED])
                : a.push([r, null])),
            n.append(E.Tool.composeString(a, i, 2, o)),
            (a = []),
            null != this.info && n.append(this.info + "\n"),
            n.toString()
          );
        }),
        (e.prototype.getDescList = function (t) {
          var i = [],
            o = new T["default"](),
            n = [],
            a = "",
            r = u["default"].myPlayer;
          if (null == r) return a;
          if (t) {
            if (((a = ""), this.money1 > 0)) {
              var s = r.get(h.ModelConst.MONEY1);
              a +=
                this.money1 <= s
                  ? f["default"].makeColorString(
                      " " +
                        g.ModelVo.getMoneyText(h.ModelConst.MONEY1) +
                        this.money1,
                      E.Tool.COLOR_GREEN,
                    )
                  : f["default"].makeColorString(
                      " " +
                        g.ModelVo.getMoneyText(h.ModelConst.MONEY1) +
                        this.money1,
                      E.Tool.COLOR_RED,
                    );
            }
            if (this.money2 > 0) {
              var l = r.get(h.ModelConst.MONEY2);
              a +=
                this.money2 <= l
                  ? f["default"].makeColorString(
                      " " +
                        g.ModelVo.getMoneyText(h.ModelConst.MONEY2) +
                        this.money2,
                      E.Tool.COLOR_GREEN,
                    )
                  : f["default"].makeColorString(
                      " " +
                        g.ModelVo.getMoneyText(h.ModelConst.MONEY2) +
                        this.money2,
                      E.Tool.COLOR_RED,
                    );
            }
            if (this.money3 > 0) {
              var _ = r.get(h.ModelConst.MONEY3);
              a +=
                this.money3 <= _
                  ? f["default"].makeColorString(
                      " " +
                        g.ModelVo.getMoneyText(h.ModelConst.MONEY3) +
                        this.money3,
                      E.Tool.COLOR_GREEN,
                    )
                  : f["default"].makeColorString(
                      " " +
                        g.ModelVo.getMoneyText(h.ModelConst.MONEY3) +
                        this.money3,
                      E.Tool.COLOR_RED,
                    );
            }
            if (
              (0 == E.Tool.isNullText(a) &&
                (o.append(
                  E.Tool.manageString(
                    p.GameText.STR_SKILL_GETD_DESC_COST,
                    a + "\n",
                  ),
                ),
                i.push(
                  E.Tool.manageString(p.GameText.STR_SKILL_GETD_DESC_COST, a),
                )),
              this.sp > 0)
            ) {
              var c = this.sp + "";
              ((c =
                this.sp <= r.get(h.ModelConst.SP)
                  ? f["default"].makeColorString(c, E.Tool.COLOR_GREEN)
                  : f["default"].makeColorString(c, E.Tool.COLOR_RED)),
                o.append(
                  E.Tool.manageString(
                    p.GameText.STR_SKILL_GETD_DESC_NEED_SP,
                    c,
                  ),
                ),
                i.push(
                  E.Tool.manageString(
                    p.GameText.STR_SKILL_GETD_DESC_NEED_SP_NON,
                    c,
                  ),
                ));
            }
            ((a = ""),
              0 != this.reqJob &&
                (a += E.Tool.manageString(
                  p.GameText.STR_SKILL_GETD_DESC_JOB,
                  d["default"].getJobString(this.reqJob),
                )),
              0 != this.reqLevel &&
                (a += E.Tool.manageString(
                  p.GameText.STR_SKILL_GETD_DESC_LEVEL,
                  this.reqLevel + "",
                )),
              0 == E.Tool.isNullText(a) &&
                ((a = E.Tool.manageString(
                  p.GameText.STR_SKILL_GETD_DESC_NEED,
                  a + "",
                )),
                i.push(
                  E.Tool.manageString(
                    p.GameText.STR_SKILL_GETD_DESC_NEED,
                    a + "",
                  ),
                )));
          }
          if (
            (null != this.name &&
              (o.append(this.getName()),
              i.push(this.getName()),
              o.append("    " + d["default"].getSkillTypeString(this.type)),
              i.push(d["default"].getSkillTypeString(this.type)),
              o.append("\n")),
            this.type != d["default"].SKILL_TYPE_PASSIVE &&
              (o.append(d["default"].getSkillAreaString(this.area)),
              i.push(d["default"].getSkillAreaString(this.area)),
              o.append(
                "    " +
                  d["default"].getAtkTypeString(this.skillAtkType) +
                  "\n",
              ),
              i.push(d["default"].getAtkTypeString(this.skillAtkType))),
            0 != this.power1)
          )
            if (0 != this.powerValue1) {
              var y = d["default"].getPowerDesc(
                this.power1,
                this.powerValue1,
                this,
              );
              (this.statusBit1 &&
                0 != this.statusBit1 &&
                (y += "," + d["default"].getBufferString(this.statusBit1)),
                n.push([y, E.Tool.COLOR_GREEN]));
            } else
              this.statusBit1 &&
                0 != this.statusBit1 &&
                n.push([
                  d["default"].getBufferString(this.statusBit1),
                  E.Tool.COLOR_GREEN,
                ]);
          if (0 != this.power2)
            if (0 != this.powerValue2) {
              var y = d["default"].getPowerDesc(
                this.power2,
                this.powerValue2,
                this,
              );
              (this.statusBit2 &&
                0 != this.statusBit2 &&
                (y += "," + d["default"].getBufferString(this.statusBit2)),
                n.push([y, E.Tool.COLOR_GREEN]));
            } else
              this.statusBit2 &&
                0 != this.statusBit2 &&
                n.push([
                  d["default"].getBufferString(this.statusBit2),
                  E.Tool.COLOR_GREEN,
                ]);
          if (0 != this.power3)
            if (0 != this.powerValue3) {
              var y = d["default"].getPowerDesc(
                this.power3,
                this.powerValue3,
                this,
              );
              (this.statusBit3 &&
                0 != this.statusBit3 &&
                (y += "," + d["default"].getBufferString(this.statusBit3)),
                n.push([y, E.Tool.COLOR_GREEN]));
            } else
              this.statusBit3 &&
                0 != this.statusBit3 &&
                n.push([
                  d["default"].getBufferString(this.statusBit3),
                  E.Tool.COLOR_GREEN,
                ]);
          if (
            (this.round > 0 &&
              n.push([
                E.Tool.manageString(
                  p.GameText.STR_ITEM_GET_LAST_ROUND,
                  this.round + "",
                ),
                null,
              ]),
            this.atk_time && 0 != this.atk_time)
          ) {
            var v = this.atk_time > 0 ? "+" : "";
            n.push([
              E.Tool.manageString(
                p.GameText.STR_ITEM_COM_ATK_TIME,
                v + this.atk_time,
              ),
              null,
            ]);
          }
          return (
            (a = ""),
            this.useMP &&
              0 != this.useMP &&
              (a +=
                " " +
                E.Tool.manageString(
                  p.GameText.STR_SKILL_GETD_DESC_USE_MP,
                  this.useMP + "",
                )),
            this.useHP &&
              0 != this.useHP &&
              (a +=
                " " +
                E.Tool.manageString(
                  p.GameText.STR_SKILL_GETD_DESC_USE_HP,
                  this.useHP + "",
                )),
            0 == E.Tool.isNullText(a) &&
              n.push([
                E.Tool.manageString(p.GameText.STR_SKILL_GETD_DESC_EXPEND, a),
                null,
              ]),
            this.skillWeapon > 0 &&
              ((a = E.Tool.manageString(
                p.GameText.STR_SKILL_GETD_DESC_WEAPON,
                d["default"].getSkillWeaponString(this.skillWeapon),
              )),
              0 ==
              e.isValidSkillWeapon(
                u["default"].myPlayer.get(h.ModelConst.LEFT_WEAPON_TYPE),
                u["default"].myPlayer.get(h.ModelConst.RIGHT_WEAPON_TYPE),
                this,
              )
                ? n.push([a, E.Tool.COLOR_RED])
                : n.push([a, null])),
            (n = []),
            null != this.info && o.append(this.info + "\n"),
            o.toString()
          );
        }),
        (e.isCanUse = function (t, i, o) {
          if (null == t || null == i) return !1;
          if (t.get(h.ModelConst.MP) < i.useMP)
            return (null != o && o.append(p.GameText.STR_SKILL_LACK_MP), !1);
          if (0 == i.isEnoughHP(t))
            return (null != o && o.append(p.GameText.STR_SKILL_LACK_HP), !1);
          if (
            t.getType() == g.MODEL_TYPE.TYPE_PLAYER ||
            t.getType() == g.MODEL_TYPE.TYPE_LEGION
          ) {
            var n = t.get(h.ModelConst.LEFT_WEAPON_TYPE),
              a = t.get(h.ModelConst.RIGHT_WEAPON_TYPE);
            if (
              i.type == d["default"].SKILL_TYPE_ACTIVE &&
              ((n == d["default"].BACK_ERROR_DUR &&
                a == d["default"].BACK_ERROR_DUR) ||
                (n == d["default"].BACK_ERROR_DUR && -1 == a) ||
                (-1 == n && a == d["default"].BACK_ERROR_DUR))
            )
              return (
                null != o && o.append(p.GameText.STR_SKILL_WEAPON_DESTROY),
                !1
              );
            if (0 == e.isValidSkillWeapon(n, a, i))
              return (
                null != o &&
                  o.append(p.GameText.STR_SKILL_WEAPON_DISCREPANCIES),
                !1
              );
          }
          return !0;
        }),
        (e.isValidSkillWeapon = function (e, t, i) {
          switch (i.skillWeapon) {
            case d["default"].SKILL_WEAPON_NONE:
              return !0;
            case d["default"].SKILL_WEAPON_MELEE_1:
              if (
                d["default"].isNullHand(e, t) ||
                d["default"].isValidSword(e, t) ||
                d["default"].isValidBlade(e, t) ||
                d["default"].isValidHeavy(e, t) ||
                d["default"].isValidLance(e, t)
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_MELEE_2:
              if (
                d["default"].isValidOneSword(e, t) ||
                d["default"].isValidOneBlade(e, t)
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_MELEE_3:
              if (
                d["default"].isValidTwoSword(e, t) ||
                d["default"].isValidTwoBlade(e, t) ||
                d["default"].isValidTwoHeavy(e, t) ||
                d["default"].isValidLance(e, t)
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_RANGE:
              if (
                d["default"].isValidCrossrow(e, t) ||
                d["default"].isValidBow(e, t)
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_ONE_HAND:
              if (
                d["default"].isOneHandWeapon(e, t) ||
                d["default"].isNullHand(e, t)
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_ONE_SWORD:
              if (
                d["default"].isOneHandWeapon(e, t) &&
                d["default"].isValidOneSword(e, t)
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_TWO_SWORD:
              if (
                e == d["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD &&
                t == d["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_HEAVY_SWORD:
              if (d["default"].isValidTwoSword(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_ONE_BLADE:
              if (d["default"].isValidBlade(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_TWO_BLADE:
              if (
                e == d["default"].ITEM_TYPE_WEAPON_ONEHAND_BLADE &&
                t == d["default"].ITEM_TYPE_WEAPON_ONEHAND_BLADE
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_HEAVY_BLADE:
              if (d["default"].isValidTwoBlade(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_ONE_HEAVY:
              if (d["default"].isValidTwoHeavy(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_LANCE:
              if (d["default"].isValidLance(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_ONE_CROSSBOW:
              if (d["default"].isValidCrossrow(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_TOW_CROSSBOW:
              if (
                e == d["default"].ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW &&
                t == d["default"].ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_HEAVY_CROSSBOW:
              if (d["default"].isValidTwoCrossrow(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_BOW:
              if (d["default"].isValidBow(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_HAND:
              if (d["default"].isNullHand(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_CANE:
              if (d["default"].isValidStaff(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_BALL:
              if (d["default"].isValidBall(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_SWORD:
              if (d["default"].isValidSword(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_ONE_HAND_BLADE:
              if (
                d["default"].isOneHandWeapon(e, t) &&
                d["default"].isValidOneBlade(e, t)
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_GUN:
              if (d["default"].isValidGun(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_TWO_GUN:
              if (
                e == d["default"].ITEM_TYPE_WEAPON_ONEHAND_GUN &&
                t == d["default"].ITEM_TYPE_WEAPON_ONEHAND_GUN
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_HEAVY_GUN:
              if (d["default"].isValidTwoGun(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_HAMMER:
              if (d["default"].isValidHammer(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_TWO_HAMMER:
              if (
                e == d["default"].ITEM_TYPE_WEAPON_ONEHAND_HAMMER &&
                t == d["default"].ITEM_TYPE_WEAPON_ONEHAND_HAMMER
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_HEAVY_HAMMER:
              if (d["default"].isValidTwoHammer(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_FAN:
              if (d["default"].isValidFan(e, t)) return !0;
          }
          return !1;
        }),
        (e.isValidSkillWeaponUseSkillWeapon = function (e, t, i) {
          switch (i) {
            case d["default"].SKILL_WEAPON_NONE:
              return !0;
            case d["default"].SKILL_WEAPON_MELEE_1:
              if (
                d["default"].isNullHand(e, t) ||
                d["default"].isValidSword(e, t) ||
                d["default"].isValidBlade(e, t) ||
                d["default"].isValidHeavy(e, t) ||
                d["default"].isValidLance(e, t)
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_MELEE_2:
              if (
                d["default"].isValidOneSword(e, t) ||
                d["default"].isValidOneBlade(e, t)
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_MELEE_3:
              if (
                d["default"].isValidTwoSword(e, t) ||
                d["default"].isValidTwoBlade(e, t) ||
                d["default"].isValidTwoHeavy(e, t) ||
                d["default"].isValidLance(e, t)
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_RANGE:
              if (
                d["default"].isValidCrossrow(e, t) ||
                d["default"].isValidBow(e, t)
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_ONE_HAND:
              if (
                d["default"].isOneHandWeapon(e, t) ||
                d["default"].isNullHand(e, t)
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_ONE_SWORD:
              if (
                d["default"].isOneHandWeapon(e, t) &&
                d["default"].isValidOneSword(e, t)
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_TWO_SWORD:
              if (
                e == d["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD &&
                t == d["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_HEAVY_SWORD:
              if (d["default"].isValidTwoSword(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_ONE_BLADE:
              if (d["default"].isValidBlade(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_TWO_BLADE:
              if (
                e == d["default"].ITEM_TYPE_WEAPON_ONEHAND_BLADE &&
                t == d["default"].ITEM_TYPE_WEAPON_ONEHAND_BLADE
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_HEAVY_BLADE:
              if (d["default"].isValidTwoBlade(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_ONE_HEAVY:
              if (d["default"].isValidTwoHeavy(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_LANCE:
              if (d["default"].isValidLance(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_ONE_CROSSBOW:
              if (d["default"].isValidCrossrow(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_TOW_CROSSBOW:
              if (
                e == d["default"].ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW &&
                t == d["default"].ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_HEAVY_CROSSBOW:
              if (d["default"].isValidTwoCrossrow(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_BOW:
              if (d["default"].isValidBow(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_HAND:
              if (d["default"].isNullHand(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_CANE:
              if (d["default"].isValidStaff(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_BALL:
              if (d["default"].isValidBall(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_SWORD:
              if (d["default"].isValidSword(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_ONE_HAND_BLADE:
              if (
                d["default"].isOneHandWeapon(e, t) &&
                d["default"].isValidOneBlade(e, t)
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_GUN:
              if (d["default"].isValidGun(e, t)) return !0;
              break;
            case d["default"].SKILL_WEAPON_TWO_GUN:
              if (
                e == d["default"].ITEM_TYPE_WEAPON_ONEHAND_GUN &&
                t == d["default"].ITEM_TYPE_WEAPON_ONEHAND_GUN
              )
                return !0;
              break;
            case d["default"].SKILL_WEAPON_HEAVY_GUN:
              if (d["default"].isValidTwoGun(e, t)) return !0;
          }
          return !1;
        }),
        (e.doUseLearnSkillItem = function (t, i, o, s) {
          var _ = u["default"].myPlayer;
          if (null == _) return !1;
          var d = _.bag;
          if (null == d) return !1;
          if (null == t) return !1;
          var c = new a.Message(l["default"].CG_SKILL_SCROLL_LEARN);
          c.putShort(t.slotPos);
          var h = -1;
          if (i) {
            if (null == o || null == s)
              return (
                y["default"].alertMessage(p.GameText.STR_PET_ENTER_DETAIL_USE),
                !1
              );
            h = s.slotPos;
          }
          (c.putShort(h),
            n["default"].Service.sendProto(c),
            n["default"].Service.onProto(
              l["default"].CG_SKILL_SCROLL_LEARN,
              r["default"].alloc(e, e.doUseLearnSkillItemCb, [t, i, o, s, h]),
            ));
        }),
        (e.doUseLearnSkillItemCb = function (t, i, o, n, a, s) {
          var l = s.body;
          if (null != l) {
            var u = l.getByte();
            if (0 > u) return void y["default"].errorMessage(l.getString());
            var _ = new T["default"](),
              d = (l.getInt(), l.getByte(), l.getInt()),
              c = l.getShort(),
              h = l.getByte(),
              f = l.getByte(),
              g = null;
            f > 0 && (g = e.fromBytes(l));
            var v = p.GameText.getText(p.GameText.TI_YOU);
            (i && (v = p.GameText.getText(p.GameText.TI_PET_INFO)),
              1 == h
                ? _.append(
                    E.Tool.manageStringList(
                      p.GameText.STR_USE_LEARN_SKILL_ITEM_NEW,
                      [v, null != g ? g.getName() : "", d + ""],
                    ),
                  )
                : _.append(
                    E.Tool.manageStringList(
                      p.GameText.STR_USE_LEARN_SKILL_ITEM_ADD,
                      [v, null != g ? g.name : "", h + "", d + ""],
                    ),
                  ),
              null != g && _.append(g.getDesc(!1)),
              y["default"].alertMessage(
                _.toString(),
                p.GameText.getText(p.GameText.TI_WARM_SHOW),
                r["default"].alloc(this, this.doUseLearnSkillItemASK, [
                  c,
                  h,
                  t,
                  a,
                  i,
                  o,
                ]),
              ));
          }
        }),
        (e.doUseLearnSkillItemASK = function (e, t, i, u, _, d) {
          o["default"].sendNt(s.SkillEvent.DO_USE_LEARN_SKILL_ITEM_ASK);
          var p = new a.Message(l["default"].CG_SKILL_SCROLL_LEARN_ASK);
          (p.putInt(e),
            p.putByte(t),
            p.putBoolean(!0),
            p.putShort(i.slotPos),
            p.putShort(u),
            n["default"].Service.sendProto(p),
            n["default"].Service.onProto(
              l["default"].CG_SKILL_SCROLL_LEARN_ASK,
              r["default"].alloc(this, this.learnSkillAskCb, [_, d]),
            ));
        }),
        (e.learnSkillAskCb = function (t, i, n) {
          var a = n.body;
          if (null != a) {
            var r = a.getByte();
            if (0 > r) return void y["default"].errorMessage(a.getString());
            var l = u["default"].myPlayer,
              _ = a,
              d = _.getInt(),
              p = e.fromBytes(_),
              c = _.getBoolean(),
              h = 0;
            if (
              (1 == c && ((p.addLevel = _.getByte()), (h = p.addLevel)),
              null != p)
            ) {
              t
                ? (i.learnSkill(p), (i.sp = d), i.checkHPMP())
                : (l.learnSkill(p), (l.sp = d), l.checkHPMP());
              var T = _.getByte(),
                g = _.getShort(),
                v = l.bag;
              T > 0 && v.removeBagItemByPos(g, T);
              var S = "";
              (h > 0 &&
                (S =
                  f["default"].makeColorString(
                    p.name + "(" + (p.level - h) + "+" + h + ")",
                    E.Tool.COLOR_GREEN,
                  ) + "\n"),
                y["default"].alertMessage(S + p.getDesc(!1)),
                o["default"].sendNt(
                  s.SkillEvent.DO_USE_LEARN_SKILL_ITEM_SUCCESS,
                ),
                o["default"].sendNt(s.BagEvent.BAG_EQUIPMENT_UPDATE));
            }
          }
        }),
        (e.doLearnSkill = function (t, i) {
          return __awaiter(this, void 0, Promise, function () {
            var n, a, r, l, _, d, c, h, f, T, A, C, P, R, O, N;
            return __generator(this, function (M) {
              switch (M.label) {
                case 0:
                  return null == t || null == i
                    ? [2, null]
                    : [
                        4,
                        E.Tool.checkEnoughMoney(i.money1, i.money2, i.money3),
                      ];
                case 1:
                  return 0 == M.sent()
                    ? [2, null]
                    : ((n = v["default"].createLearnSkill(
                        u["default"].shopID,
                        i,
                      )),
                      [4, I["default"].sendProtoAsync(n)]);
                case 2:
                  if ((M.sent(), (n = v["default"].getReceiveMsg()), null == n))
                    return [2, null];
                  if (((a = n.getByte()), 0 > a))
                    return (
                      y["default"].errorMessage(n.getString()),
                      [2, null]
                    );
                  if (1 == a)
                    return (
                      y["default"].alertMessage(
                        p.GameText.STR_COUNTRY_PRICE_ADUST,
                      ),
                      [2, null]
                    );
                  if (0 != a) return [2, null];
                  if (
                    ((r = n.getInt()),
                    (l = n.getInt()),
                    (_ = n.getInt()),
                    (d = n.getInt()),
                    (c = n.getInt()),
                    (h = null),
                    (f = n.getByte()),
                    f > 0 && (h = e.fromShopBytes(n)),
                    (t.sp = l),
                    g.ModelVo.setPlayerMoney(_, d, c, null),
                    (T = o["default"].getProxy(
                      S.ModName.Shop,
                      S.ProxyType.Shop,
                    )),
                    (A = T.data.ShopSkillAndMaxList),
                    null == A)
                  )
                    return [2, null];
                  for (C = null, P = -1, R = 0; R < A.length; R++)
                    if (((O = A[R].skill), null != O && O.id == r)) {
                      ((P = R), (C = O));
                      break;
                    }
                  if (
                    ((N = n.getBoolean()),
                    1 == N &&
                      ((C = e.fromBytes(n)), (C.addLevel = n.getByte())),
                    -1 == P)
                  )
                    return [2, null];
                  if (null == C) return [2, null];
                  if ((t.learnSkill(C), t.checkHPMP(), null != h)) {
                    if (h.id != C.id) return [2, null];
                    A[P].skill = h;
                  }
                  return (
                    m.Tips.show("技能学习成功"),
                    o["default"].sendNt(s.SkillEvent.DO_LEARN_SKILL_SUCESS),
                    [2, h]
                  );
              }
            });
          });
        }),
        (e.doDropSkill = function (t, i) {
          var o = this;
          if (null == t || null == i) return !1;
          var a = e.getDelSkillMoneyStr(),
            s = E.Tool.manageStringList(p.GameText.STR_SKILL_DROP_ASK, [
              i.name,
              "\n" + a + "\n" + i.getDesc(!1),
            ]);
          y["default"].alertMessage(
            s,
            p.GameText.getText(p.GameText.TI_UN_SKILL),
            r["default"].alloc(null, function () {
              return __awaiter(o, void 0, void 0, function () {
                var o, a, s;
                return __generator(this, function (_) {
                  switch (_.label) {
                    case 0:
                      return (
                        (o = u["default"].getMoneyArrayValue(
                          e.DELETE_SKILL_MONEY,
                        )),
                        [4, E.Tool.checkEnoughMoney(o[0], o[1], o[2])]
                      );
                    case 1:
                      return 0 == _.sent()
                        ? [2, !1]
                        : ((a = d["default"].SKILL_TYPE_PLAYER),
                          t.getType() == g.MODEL_TYPE.TYPE_PET &&
                            (a = d["default"].SKILL_TYPE_PET),
                          (s = v["default"].createDropSkill(i.id, a)),
                          n["default"].Service.sendProto(s),
                          n["default"].Service.onProto(
                            l["default"].CG_SKILL_DELETE,
                            r["default"].alloc(e, e.doDropSkillCb, [t, i]),
                          ),
                          [2]);
                  }
                });
              });
            }),
          );
        }),
        (e.doDropSkillCb = function (t, i, n) {
          var a = n.body;
          if (null != a) {
            var r = a.getByte();
            if (0 > r)
              return void y["default"].alertMessage(
                a.getString(),
                p.GameText.getText(p.GameText.TI_ERROR),
              );
            var l = a.getInt(),
              u = a.getInt(),
              _ = a.getInt(),
              d = a.getInt(),
              c = a.getInt(),
              h = t.getSkillByID(l);
            if (null == h)
              return void console.error(
                "doDropSkillCb >>>skill == null  skillID >>> " + l,
              );
            var f = a.getBoolean();
            if (1 == f) {
              var T = e.fromBytes(a);
              ((T.addLevel = a.getByte()), t.learnSkill(T));
            } else t.removeSkill(h);
            ((t.sp = u),
              t.checkHPMP(),
              g.ModelVo.setPlayerMoney(_, d, c, null),
              o["default"].sendNt(s.SkillEvent.DO_DROP_SKILL_SUCESS));
          }
        }),
        (e.doDropSkillOneLevel = function (t, i) {
          return __awaiter(this, void 0, void 0, function () {
            var n, a, r, l, _, c, h, f, T, S, m, A, C, P;
            return __generator(this, function (R) {
              switch (R.label) {
                case 0:
                  return null == t || null == i
                    ? [2, !1]
                    : ((n = this.getDelSkillMoneyStr()),
                      y["default"].waitForTwiceSureUI,
                      [
                        4,
                        y["default"].waitForTwiceSureUI(
                          E.Tool.manageString(
                            p.GameText.STR_PLAYER_DROP_SKILL_ONE_ASK,
                            [i.name, "\n" + n + "\n" + i.getDesc(!1)],
                          ),
                          p.GameText.getText(p.GameText.TI_UN_SKILL),
                        ),
                      ]);
                case 1:
                  return (a = R.sent())
                    ? ((r = u["default"].getMoneyArrayValue(
                        e.DELETE_SKILL_MONEY,
                      )),
                      [4, E.Tool.checkEnoughMoney(r[0], r[1], r[2])])
                    : [2, !1];
                case 2:
                  return 0 == R.sent()
                    ? [2, !1]
                    : ((l = d["default"].SKILL_TYPE_PLAYER),
                      t.getType() == g.MODEL_TYPE.TYPE_PET &&
                        (l = d["default"].SKILL_TYPE_PET),
                      (_ = v["default"].createDropSkillOneLevel(i.id, l)),
                      [4, I["default"].sendProtoAsync(_)]);
                case 3:
                  return (
                    R.sent(),
                    (_ = v["default"].getReceiveMsg()),
                    null == _
                      ? [2, !1]
                      : ((c = _.getByte()),
                        0 > c
                          ? (y["default"].alertMessage(
                              _.getString(),
                              p.GameText.getText(p.GameText.TI_ERROR),
                            ),
                            [2])
                          : ((h = _.getInt()),
                            (f = _.getInt()),
                            (T = _.getInt()),
                            (S = _.getInt()),
                            (m = _.getInt()),
                            (A = t.getSkillByID(h)),
                            null == A
                              ? [2, !1]
                              : ((C = _.getBoolean()),
                                1 == C
                                  ? ((P = e.fromBytes(_)),
                                    (P.addLevel = _.getByte()),
                                    t.learnSkill(P))
                                  : t.removeSkill(A),
                                (t.sp = f),
                                t.checkHPMP(),
                                g.ModelVo.setPlayerMoney(T, S, m, null),
                                y["default"].updateWorldPlayerInfoUI(),
                                o["default"].sendNt(
                                  s.SkillEvent.DO_DROP_SKILL_SUCESS,
                                ),
                                [2, !0])))
                  );
              }
            });
          });
        }),
        (e.doSetAutoSkill = function (t, i) {
          if (null == t || null == i) return !1;
          var o = t.isAutoSkill(i.id) < 0,
            a = v["default"].createAutoSkillMsg(t, i.id, o);
          n["default"].Service.sendProto(a);
          var s = l["default"].CG_SKILL_AUTO_ACTIVE;
          return (
            0 == o && (s = l["default"].CG_SKILL_AUTO_INVALID),
            n["default"].Service.onProto(
              s,
              r["default"].alloc(e, e.doSetAutoSkillCb, [t, i, o]),
            ),
            !0
          );
        }),
        (e.doSetAutoSkillCb = function (e, t, i, n) {
          var a = n.body;
          if (null == a) return null;
          var r = a.getByte();
          return 0 > r
            ? (y["default"].alertMessage(
                a.getString(),
                p.GameText.getText(p.GameText.TI_ERROR),
              ),
              void o["default"].sendNt(s.SkillEvent.DO_SET_AUTO_SKILL))
            : (i ? e.setAutoSkillActive(t.id) : e.setAutoSkillInvalid(t.id),
              void o["default"].sendNt(s.SkillEvent.DO_SET_AUTO_SKILL));
        }),
        (e.doMenuButton = function () {}),
        (e.doDropSkillMenu = function () {}),
        (e.doPlayerSkillDropSelect = function () {}),
        (e.doPlayerSetSkillInitiative = function (t, i, o) {
          if ((void 0 === o && (o = !0), null == t || null == i)) return !1;
          var s = new a.Message(l["default"].CG_SKILL_INITIATIVE_SET),
            u = d["default"].SKILL_TYPE_PLAYER;
          return (
            null != t &&
              t.getType() == g.MODEL_TYPE.TYPE_PET &&
              (u = d["default"].SKILL_TYPE_PET),
            s.putByte(u),
            s.putInt(i.id),
            n["default"].Service.sendProto(s),
            n["default"].Service.onProto(
              l["default"].CG_SKILL_INITIATIVE_SET,
              r["default"].alloc(e, e.doPlayerSetSkillInitiativeCb, [t, i, o]),
            ),
            !0
          );
        }),
        (e.doPlayerSetSkillInitiativeCb = function (e, t, i, n) {
          var a = n.body;
          null != a &&
            ((e.autoSkillID_Initiative = t.id),
            i &&
              y["default"].alertMessage(
                E.Tool.manageString(
                  p.GameText.STR_SKILL_INITIATIVE_SUCCESS,
                  t.name,
                ),
              ),
            o["default"].sendNt(s.SkillEvent.STR_SKILL_INITIATIVE));
        }),
        (e.doPlayerCancelSkillInitiative = function (t, i) {
          if (null == t || null == i) return !1;
          var o = new a.Message(l["default"].CG_SKILL_INITIATIVE_CLEAN),
            s = d["default"].SKILL_TYPE_PLAYER;
          return (
            null != t &&
              t.getType() == g.MODEL_TYPE.TYPE_PET &&
              (s = d["default"].SKILL_TYPE_PET),
            o.putByte(s),
            o.putInt(i.id),
            n["default"].Service.sendProto(o),
            n["default"].Service.onProto(
              l["default"].CG_SKILL_INITIATIVE_CLEAN,
              r["default"].alloc(e, e.doPlayerCancelSkillInitiativeCb, [t, i]),
            ),
            !0
          );
        }),
        (e.doPlayerCancelSkillInitiativeCb = function (e, t, i) {
          var n = i.body;
          null != n &&
            ((e.autoSkillID_Initiative = -1),
            y["default"].alertMessage(p.GameText.STR_SKILL_INITIATIVE_FAIL),
            o["default"].sendNt(s.SkillEvent.STR_SKILL_INITIATIVE));
        }),
        (e.updatePlayerSkill = function (e) {}),
        (e.doGetFormation = function (t) {
          var i,
            o = t.getByte();
          o > 0 && (i = []);
          for (var n = 0; o > n; n++) {
            var a = e.fromByteFormationSkill(t);
            null != a && i.push(a);
          }
          return i;
        }),
        (e.fromByteFormationSkill = function (t) {
          var i = new e();
          return (
            (i.formationtyep = t.getByte()),
            (i.id = t.getInt()),
            (i.skillId = t.getByte()),
            (i.level = t.getByte()),
            (i.name = t.getString()),
            (i.iconIndex = t.getByte()),
            (i.power1 = t.getShort()),
            (i.powerValue1 = t.getShort()),
            (i.power2 = t.getShort()),
            (i.powerValue2 = t.getShort()),
            (i.power3 = t.getShort()),
            (i.powerValue3 = t.getShort()),
            (i.teamcount = t.getByte()),
            (i.isDefault = t.getBoolean()),
            (i.type = d["default"].SKILL_TYPE_FORMATION),
            i
          );
        }),
        (e.doUseFormationBookItem = function (t) {
          var i = u["default"].myPlayer;
          if (null != i) {
            var o = i.bag;
            if (null != o) {
              var s = new a.Message(l["default"].CG_FORMATION_LEARN);
              (s.putShort(t.slotPos),
                s.putInt(t.id),
                n["default"].Service.sendProto(s),
                n["default"].Service.onProto(
                  l["default"].CG_FORMATION_LEARN,
                  r["default"].alloc(e, e.doUseFormationBookItemCb, [i, o, t]),
                ));
            }
          }
        }),
        (e.doUseFormationBookItemCb = function (t, i, n, a) {
          var r = a.body;
          if (null != r) {
            var l = r.getByte();
            if (0 > l) return void y["default"].alertMessage(r.getString());
            i.removeBagItemByPos(n.slotPos, 1);
            var u = e.fromByteFormationSkill(r);
            null == t.formationList && (t.formationList = []);
            for (var _ = !1, d = 0; d < t.formationList.length; d++) {
              var p = t.formationList[d];
              if (null != p && l == p.formationtyep) {
                ((_ = !0), t.formationList.splice(d, 1, u));
                break;
              }
            }
            0 == _ && t.formationList.push(u);
            var h = o["default"].getProxy(S.ModName.Bag, S.ProxyType.Bag);
            (h.sendNt(s.BagEvent.BAG_EQUIPMENT_UPDATE),
              y["default"].alertMessage(
                c.GameText2.STR_LEARN_FORMATION_SUCCESS,
              ));
          }
        }),
        (e.doSetDefaultFormation = function (t, i) {
          if (null == t || null == i) return !1;
          var o = i.skillId;
          i.isDefault && (o = 0);
          var s = new a.Message(l["default"].CG_FORMATION_CHANGE_DEFAULT);
          (s.putByte(o),
            n["default"].Service.sendProto(s),
            n["default"].Service.onProto(
              l["default"].CG_FORMATION_CHANGE_DEFAULT,
              r["default"].alloc(e, e.doSetDefaultFormationCb, [t]),
            ));
        }),
        (e.doSetDefaultFormationCb = function (t, i) {
          var n = i.body;
          if (null != n) {
            var a = n.getByte();
            if (0 > a) return void y["default"].alertMessage(n.getString());
            ((t.formationList = e.doGetFormation(n)),
              o["default"].sendNt(s.SkillEvent.DO_SET_DEF_FORMATION));
          }
        }),
        (e.doForGetFormation = function (t, i) {
          return __awaiter(this, void 0, void 0, function () {
            var n, r, u, _, d, h;
            return __generator(this, function (f) {
              switch (f.label) {
                case 0:
                  return null == t || null == i
                    ? [2]
                    : [
                        4,
                        y["default"].waitForTwiceSureUI(
                          E.Tool.manageString(
                            c.GameText2.STR_FORGET_FORMATION_ASK,
                            i.name,
                          ),
                          p.GameText.getText(p.GameText.TI_WARM_SHOW),
                        ),
                      ];
                case 1:
                  return (n = f.sent())
                    ? ((r = i.skillId),
                      (u = o["default"].getProxy(
                        S.ModName.Role,
                        S.ProxyType.Role,
                      )),
                      (_ = new a.Message(l["default"].CG_FORMATION_FORGET)),
                      _.putByte(r),
                      [4, u.sendProtoAsync(_)])
                    : [2, !1];
                case 2:
                  return (
                    f.sent(),
                    (d = v["default"].getReceiveMsg()),
                    null == d
                      ? [2]
                      : ((h = d.getByte()),
                        0 > h
                          ? (y["default"].alertMessage(d.getString()), [2, !1])
                          : ((t.formationList = e.doGetFormation(d)),
                            y["default"].alertMessage(
                              c.GameText2.STR_FORGET_FORMATION_SUCCESS,
                            ),
                            o["default"].sendNt(
                              s.SkillEvent.DO_DROP_SKILL_SUCESS,
                            ),
                            [2]))
                  );
              }
            });
          });
        }),
        (e.doUpdateFormation = function (e) {
          if (null != e) {
            var t = u["default"].myPlayer;
            if (null != t) {
              var i = t.getPet(),
                n = e.getBoolean();
              (n
                ? ((t.formationSkill = this.fromByteFormationSkill(e)),
                  null != i && (i.formationSkill = t.formationSkill))
                : ((t.formationSkill = null),
                  null != i && (i.formationSkill = null)),
                o["default"].sendNt(s.MainEvent.PLAYER_FORMATION));
            }
          }
        }),
        (e.prototype.getFormationInfo = function (e) {
          var t = this.name + ":",
            i = [];
          if (0 != this.power1 && 0 != this.powerValue1) {
            var o = d["default"].getPowerDesc(
              this.power1,
              this.powerValue1,
              this,
            );
            ((t += f["default"].makeColorString(o, E.Tool.COLOR_GREEN) + "  "),
              i.push(f["default"].makeColorString(o, E.Tool.COLOR_GREEN)));
          }
          if (0 != this.power2 && 0 != this.powerValue2) {
            var o = d["default"].getPowerDesc(
              this.power2,
              this.powerValue2,
              this,
            );
            ((t += f["default"].makeColorString(o, E.Tool.COLOR_GREEN) + "  "),
              i.push(f["default"].makeColorString(o, E.Tool.COLOR_GREEN)));
          }
          if (0 != this.power3 && 0 != this.powerValue3) {
            var o = d["default"].getPowerDesc(
              this.power3,
              this.powerValue3,
              this,
            );
            ((t += f["default"].makeColorString(o, E.Tool.COLOR_GREEN)),
              i.push(f["default"].makeColorString(o, E.Tool.COLOR_GREEN)));
          }
          return (
            this.teamcount > 0 &&
              ((t += E.Tool.manageString(
                c.GameText2.STR_FORGET_TEAM_NEED,
                this.teamcount + "",
              )),
              i.push(
                E.Tool.manageString(
                  c.GameText2.STR_FORGET_TEAM_NEED,
                  this.teamcount + "",
                ),
              )),
            e ? i : t
          );
        }),
        (e.doWorldSeeFormation = function () {}),
        (e.doUsePetSealItemLearnSkill = function (t, i, o, s) {
          var _ = u["default"].myPlayer;
          if (null == _) return !1;
          var d = _.bag;
          if (null == d) return !1;
          if (null == t) return !1;
          var c = new a.Message(l["default"].CG_SKILL_BOOK_LEARN);
          c.putShort(t.slotPos);
          var h = -1;
          if (i) {
            if (null == o || null == s)
              return (
                y["default"].alertMessage(p.GameText.STR_PET_ENTER_DETAIL_USE),
                !1
              );
            h = s.slotPos;
          }
          (c.putShort(h),
            n["default"].Service.sendProto(c),
            n["default"].Service.onProto(
              l["default"].CG_SKILL_BOOK_LEARN,
              r["default"].alloc(e, e.doUsePetSealItemLearnSkillCb, [
                t,
                i,
                o,
                s,
                h,
              ]),
            ));
        }),
        (e.doUsePetSealItemLearnSkillCb = function (t, i, u, d, c, h) {
          var f = h.body;
          if (null != f) {
            var g = f.getByte();
            if (0 > g) return void y["default"].errorMessage(f.getString());
            var v = new T["default"](),
              S = (f.getInt(), f.getByte(), f.getInt()),
              I = f.getShort(),
              m = f.getByte(),
              A = f.getByte(),
              C = null;
            A > 0 && (C = e.fromBytes(f));
            var P = p.GameText.getText(p.GameText.TI_YOU);
            (i && (P = p.GameText.getText(p.GameText.TI_PET_INFO)),
              1 == m
                ? v.append(
                    E.Tool.manageStringList(
                      p.GameText.STR_USE_LEARN_SKILL_ITEM_NEW,
                      [P, null != C ? C.getName() : "", S + ""],
                    ),
                  )
                : v.append(
                    E.Tool.manageStringList(
                      p.GameText.STR_USE_LEARN_SKILL_ITEM_ADD,
                      [P, null != C ? C.name : "", m + "", S + ""],
                    ),
                  ),
              null != C && v.append(C.getDesc(!1)),
              _["default"].confirm(
                v.toString(),
                r["default"].alloc(null, function () {
                  var _ = new a.Message(l["default"].CG_SKILL_BOOK_LEARN_ASK);
                  (_.putInt(I),
                    _.putByte(m),
                    _.putBoolean(!0),
                    _.putShort(t.slotPos),
                    _.putShort(c),
                    n["default"].Service.sendProto(_),
                    o["default"].sendNt(
                      s.SkillEvent.DO_USE_PET_LEARN_SKILL_ITEM_ASK,
                    ),
                    n["default"].Service.onProto(
                      l["default"].CG_SKILL_BOOK_LEARN_ASK,
                      r["default"].alloc(e, e.learnPetSkillAskCb, [i, u]),
                    ));
                }),
                p.GameText.getText(p.GameText.TI_WARM_SHOW),
              ));
          }
        }),
        (e.learnPetSkillAskCb = function (t, i, n) {
          var a = n.body;
          if (null != a) {
            var r = a.getByte();
            if (0 > r) return void y["default"].errorMessage(a.getString());
            var l = a,
              _ = l.getInt(),
              d = u["default"].myPlayer,
              p = d.bag,
              c = e.fromBytes(l),
              h = l.getBoolean(),
              T = 0;
            if (
              (1 == h && ((c.addLevel = l.getByte()), (T = c.addLevel)),
              null != c)
            ) {
              t
                ? (i.learnSkill(c), (i.sp = _), i.checkHPMP())
                : (d.learnSkill(c), (d.sp = _), d.checkHPMP());
              var g = l.getByte(),
                v = l.getShort();
              g > 0 && p.removeBagItemByPos(v, g);
              var S = "";
              (T > 0 &&
                (S =
                  f["default"].makeColorString(
                    c.name + "(" + (c.level - T) + "+" + T + ")",
                    E.Tool.COLOR_GREEN,
                  ) + "\n"),
                y["default"].alertMessage(S + c.getDesc(!1)),
                o["default"].sendNt(
                  s.SkillEvent.DO_USE_PET_LEARN_SKILL_ITEM_SUCCESS,
                ));
            }
          }
        }),
        (e.DELETE_SKILL_MONEY = [h.ModelConst.MONEY2, 0]),
        (e.SKILL_ATK_TYPE = 1),
        (e.isformationopen = !1),
        (e.DUMMY_SKILL = new e()),
        e
      );
    })();
  t["default"] = A;
});
