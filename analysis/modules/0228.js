(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.MonsterGroup = void 0));
  var o = i(61),
    n = i(75),
    a = i(5),
    r = i(4),
    s = i(30),
    l = i(3),
    u = i(0),
    _ = (function () {
      function e() {
        ((this.flag = 0),
          (this.monsters = new Array(e.MONSTERGROUP_MONSTERS)),
          (this.npcs = new Array(e.MONSTERGROUP_NPCS)));
      }
      return (
        (e.prototype.isFlag = function (e) {
          return 0 != (this.flag & e);
        }),
        (e.fromBytes = function (t) {
          var i = new e();
          try {
            ((i.groupId = 65535 & t.getShort()),
              (i.type = t.getByte()),
              (i.nextBattleGroupID = 65535 & t.getShort()),
              (i.flag = t.getByte()),
              (i.coefficient = t.getInt()));
            var o = 10;
            i.isFlag(e.FLAG_MONSTER_20) && (o = e.MONSTERGROUP_MONSTERS);
            for (var n = 0; o > n; n++) i.monsters[n] = t.getShort();
            if (i.isFlag(e.FLAG_HAVE_NPC))
              for (var n = 0; n < e.MONSTERGROUP_NPCS; n++)
                i.npcs[n] = t.getShort();
          } catch (a) {
            console.error(a);
          }
          return i;
        }),
        (e.prototype.setGroupMonsterDataToBattle = function (e) {
          if (null != e) {
            var t = this.monsters;
            if (null != t)
              for (var i, o, n = 0; n < t.length; n++)
                ((i = t[n]),
                  0 >= i ||
                    n >= e.length ||
                    ((o = a["default"].getMonster(i)),
                    null != o &&
                      ((o = o.getClone(this.coefficient)),
                      o.resumeHPMP(),
                      (e[n] = o),
                      (o.position = n))));
          }
        }),
        (e.prototype.getGroupNPCList = function () {
          var e = this.npcs;
          if (null == e) return null;
          for (var t, i, o = new Array(e.length), n = 0; n < e.length; n++)
            ((t = e[n]),
              0 >= t ||
                ((i = a["default"].getMonster(t)),
                null != i &&
                  ((i = i.getClone(this.coefficient)),
                  i.resumeHPMP(),
                  (o[n] = i))));
          return o;
        }),
        (e.getLocalBattlePlayerList = function (e, t) {
          if (null == e) return null;
          if (null == t) return null;
          var i = o["default"].LOCAL_BATTLE_MY_POS,
            a = i - 1,
            r = new Array(o["default"].MAX_POS);
          (t.setGroupMonsterDataToBattle(r),
            (e.position = i),
            (r[e.position] = e));
          var s = e.getPet();
          null != s && s.isAlive() && ((s.position = a), (r[s.position] = s));
          var _,
            d = i - 2,
            p = i + 2,
            c = 0,
            h = t.getGroupNPCList();
          if (null != h)
            for (var f = 0; f < h.length; f++) {
              var T = h[f];
              null != T &&
                ((_ = d),
                f >= 2 && (_ = p),
                0 != (1 & f) && (_ -= 1),
                0 > _ ||
                  _ >= o["default"].MAX_POS ||
                  n["default"].isLeftSide(_) ||
                  ((T.position = _), (r[T.position] = T), c++));
            }
          var E = l["default"].getProxy(u.ModName.Buddy, u.ProxyType.Buddy);
          if (0 == c) {
            var y = E.getFightBuddy();
            if ((console.log(y, "buddyList"), y.length > 0)) {
              for (var g = 0, f = 0; f < y.length; f++) {
                var T = y[f];
                null != T &&
                  (0 == (1 & g) ? ((_ = d), (d -= 2)) : ((_ = p), (p += 2)),
                  g++,
                  0 > _ ||
                    _ >= o["default"].MAX_POS ||
                    n["default"].isLeftSide(_) ||
                    ((T.position = _), (r[T.position] = T), E.buddyNum++));
              }
              return r;
            }
          }
          var v = e.getMerList();
          if (null != v)
            for (var g = 0, f = 0; f < v.length; f++) {
              var T = v[f];
              if (
                null != T &&
                (0 == (1 & g) ? ((_ = d), (d -= 2)) : ((_ = p), (p += 2)),
                g++,
                !(
                  0 > _ ||
                  _ >= o["default"].MAX_POS ||
                  n["default"].isLeftSide(_)
                ))
              ) {
                var S = T.getClone();
                ((S.worldMer = T), (S.position = _), (r[S.position] = S));
                var I = T.getPet();
                if (null != I) {
                  var m = I.getClone();
                  ((m.worldMer = I), (m.position = _ - 1), (r[m.position] = m));
                }
              }
            }
          return r;
        }),
        (e.prototype.getInfo = function () {
          var e = new s["default"](),
            t = this.groupId;
          if (
            (0 != t && e.append("怪物战斗组:" + t + "\n"),
            e.append(
              "战斗类型:" +
                r["default"].getMonsterGroupTypeString(this.type) +
                "\n",
            ),
            0 != this.nextBattleGroupID &&
              e.append("下一场怪物战斗:" + this.nextBattleGroupID + "\n"),
            this.monsters.length > 0)
          )
            for (var i = 0; i < this.monsters.length; i++)
              0 != this.monsters[i] &&
                e.append("怪物" + (i + 1) + ":" + this.monsters[i] + "\n");
          if (this.npcs.length > 0)
            for (var i = 0; i < this.npcs.length; i++)
              0 != this.npcs[i] &&
                e.append("NPC" + (i + 1) + ":" + this.npcs[i] + "\n");
          return e.toString();
        }),
        (e.FLAG_MONSTER_20 = 1),
        (e.FLAG_HAVE_NPC = 2),
        (e.MONSTERGROUP_MONSTERS = 20),
        (e.MONSTERGROUP_NPCS = 4),
        e
      );
    })();
  t.MonsterGroup = _;
});
