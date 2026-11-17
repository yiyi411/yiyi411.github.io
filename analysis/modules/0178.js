(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.MonsterAI = void 0));
  var o = i(5),
    n = i(4),
    a = i(10),
    r = i(20),
    s = i(30),
    l = i(8),
    u = (function () {
      function e() {
        ((this.conType = null),
          (this.conValue = null),
          (this.msg = null),
          (this.skill1 = null),
          (this.skill2 = null),
          (this.targetType = null),
          (this.targetPos = 0));
      }
      return (
        (e.fromBytes = function (t, i) {
          var n = new e();
          n.id = t.getShort();
          var a = t.getByte();
          ((n.conType = []),
            (n.conValue = []),
            (n.msg = []),
            (n.skill1 = []),
            (n.skill2 = []),
            (n.targetType = []));
          for (var r = 0; a > r; r++)
            ((n.conType[r] = t.getByte()),
              (n.conValue[r] = t.getInt()),
              (n.msg[r] = t.getString()),
              (n.skill1[r] = o["default"].getSkillById(
                i,
                t.getShort(),
                t.getByte(),
              )),
              (n.skill2[r] = o["default"].getSkillById(
                i,
                t.getShort(),
                t.getByte(),
              )),
              (n.targetType[r] = t.getByte()));
          return n;
        }),
        (e.createMonsterAI = function (t, i, n) {
          var a = new e();
          if (((a.id = t), null != i)) {
            var r = i.length;
            ((a.conType = []),
              (a.conValue = []),
              (a.msg = []),
              (a.skill1 = []),
              (a.skill2 = []),
              (a.targetType = []));
            for (var s = 0; r > s; s++) {
              var u = i[s];
              if (null != u) {
                var _ = 2;
                ((a.conType[s] = l.Tool.parseInt(u[_++])),
                  (a.conValue[s] = l.Tool.parseInt(u[_++])),
                  (a.msg[s] = u[_++]),
                  (a.skill1[s] = o["default"].getSkillById(
                    n,
                    l.Tool.parseInt(u[_++]),
                    l.Tool.parseInt(u[_++]),
                  )),
                  (a.skill2[s] = o["default"].getSkillById(
                    n,
                    l.Tool.parseInt(u[_++]),
                    l.Tool.parseInt(u[_++]),
                  )),
                  (a.targetType[s] = l.Tool.parseInt(u[_++])));
              }
            }
          }
          return a;
        }),
        (e.prototype.getInfo = function () {
          var e = new s["default"](),
            t = this.id,
            i = this.conType,
            o = this.conValue,
            u = this.msg,
            _ = this.skill1,
            d = this.skill2,
            p = this.targetType;
          0 != t &&
            e.append(
              r["default"].makeColorString(
                l.Tool.manageString(a.GameText.STR_MONSTERAI_ID, t + ""),
                l.Tool.COLOR_BLUE,
              ) + "\n",
            );
          for (var c = 0; c < i.length; c++)
            (e.append(
              a.GameText.STR_CONDITION +
                l.Tool.manageString(
                  n["default"].getMonsterAIConditionString(i[c]) + "",
                  o[c] + "",
                ) +
                "\n",
            ),
              null != u[c] && e.append(a.GameText.STR_DIALOGUE + u[c] + "\n"),
              null != _[c] &&
                e.append(
                  l.Tool.manageStringList(a.GameText.STR_MONSTERAI_SKILL_INFO, [
                    "1",
                    _[c].level + "",
                    _[c].id + "",
                  ]) + "\n",
                ),
              null != d[c] &&
                e.append(
                  l.Tool.manageStringList(a.GameText.STR_MONSTERAI_SKILL_INFO, [
                    "2",
                    d[c].level + "",
                    d[c].id + "",
                  ]) + "\n",
                ),
              0 != p[c] &&
                e.append(
                  a.GameText.STR_NPC_MISSION_DEST +
                    n["default"].getMonsterAIString(p[c]) +
                    "\n",
                ),
              e.append("\n"));
          return e.toString();
        }),
        (e.TARGET_ESCAPE = 100),
        e
      );
    })();
  t.MonsterAI = u;
});
