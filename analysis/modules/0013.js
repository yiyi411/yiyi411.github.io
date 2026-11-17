(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }), (t.GUtil = void 0));
  var o = i(17),
    n = i(32),
    a = i(31),
    r = i(100),
    s = i(368),
    l = i(33),
    u = i(5),
    _ = i(4),
    d = i(64),
    p = i(8),
    c = i(34),
    h = i(11),
    f = i(47),
    T = i(42),
    E = i(1),
    y = i(18),
    g = i(69),
    v = i(28),
    S = i(383),
    I = i(55),
    m = i(58),
    A = i(21),
    C = i(156),
    P = (function () {
      function e() {}
      return (
        (e.createArray = function (e, t, i, o) {
          void 0 === t && (t = 0);
          for (var n, a = [], r = t; e > r; r++)
            (o || (n = null != i ? i : r), a.push(n));
          return a;
        }),
        (e.remove = function (e, t) {
          return e
            ? (e.parent && e.parent.removeChild(e),
              t && (o["default"].release(e), (e = null)),
              e)
            : null;
        }),
        (e.copyList = function (e, t) {
          if (!e) return null;
          for (var i, o = [], n = 0; n < e.length; n++)
            ((i = e[n]), o.push(i), t && o.push(i));
          return o;
        }),
        (e.center = function (e, t) {
          if ((t || (t = e.parent), !t)) return e.x;
          var i = (t.width - e.width) >> 1;
          return i;
        }),
        (e.intNum = function (e) {
          return 0 | e;
        }),
        (e.initMoney = function (e) {
          for (var t, i = 0; i < e.length; i++)
            ((t = e[i]), (t.isNot = !0), (t.textNum.text = "0"));
        }),
        (e.getMoney = function (e) {
          return parseInt(e.textNum.text) || 0;
        }),
        (e.setMoney = function (e, t) {
          (void 0 === t && (t = 0), (e.textNum.text = "" + t));
        }),
        (e.setMoneys = function (e, t) {
          for (var i, o = 0; o < e.length; o++)
            ((i = e[o]), (i.textNum.text = "" + t[o]));
        }),
        (e.getItemList = function (e, t, i) {
          (void 0 === t && (t = 6), void 0 === i && (i = !1));
          var o = e.length;
          i && 0 >= o && (o = 1);
          for (
            var n, a = Math.ceil(o / t), r = a * t, s = [], l = 0;
            r > l;
            l++
          )
            ((n = o > l ? e[l] : null), s.push(n));
          return s;
        }),
        (e.getMinList = function (e, t, i) {
          if (!e) return [];
          var o = e.length;
          if (o >= t) return e;
          for (var n = [], a = 0; t > a; a++)
            o > a ? n.push(e[a]) : i ? n.unshift(null) : n.push(null);
          return n;
        }),
        (e.getMaxList = function (e, t) {
          for (var i, o = e.length, n = [], a = 0; t > a; a++)
            ((i = o > a ? e[a] : null), n.push(i));
          return n;
        }),
        (e.getListNUll = function (e, t) {
          var i = e.length;
          if (i >= t) return e;
          for (var o = [], n = 0; t > n; n++)
            i > n ? o.push(e[n]) : o.push(null);
          return o;
        }),
        (e.getListNullBeautify = function (e, t, i) {
          void 0 === i && (i = 1);
          for (var o = [], n = Math.max(e.length, t), a = 0; n > a; a++)
            a < e.length ? o.push(e[a]) : o.push(null);
          ((n = i - (o.length % i)), n == i && (n = 0));
          for (var a = 0; n > a; a++) o.push(null);
          return o;
        }),
        (e.getListNumNUll = function (e, t) {
          for (var i = e.length, o = [], n = 0; t > n; n++)
            i > n ? o.push(e[n]) : o.push(null);
          return o;
        }),
        (e.listChangeState = function (e, t, i, o, n, a) {
          void 0 === a && (a = !1);
          for (var r = [], s = 0; s < e.length; s++)
            if (
              e[s].hasOwnProperty(t) &&
              e[s][t] == i &&
              e[s].hasOwnProperty(o)
            ) {
              ((e[s][o] = n), a && r.push(e.splice(s, 1)[0]));
              break;
            }
          return this.listSplicing(e, r);
        }),
        (e.getListRew = function (e, t, i) {
          for (var o = 0; o < e.length; o++)
            if (e[o].hasOwnProperty(t) && e[o][t] == i) return !0;
          return !1;
        }),
        (e.listChangeStateOnes = function (e, t, i) {
          for (var o = 0; o < e.length; o++)
            e[o].hasOwnProperty(t) && (e[o][t] = i);
          return e;
        }),
        (e.getListMoney = function (e) {
          for (var t = new s["default"](), i = e.length - 1; i >= 0; i--)
            e[i].itemId == _["default"].MONEY1
              ? ((t.money1 += e[i].itemCount), e.splice(i, 1))
              : e[i].itemId == _["default"].MONEY2
                ? ((t.money2 += e[i].itemCount), e.splice(i, 1))
                : e[i].itemId == _["default"].MONEY3
                  ? ((t.money3 += e[i].itemCount), e.splice(i, 1))
                  : e[i].itemId == _["default"].EXP &&
                    ((t.exp += e[i].itemCount), e.splice(i, 1));
          return t;
        }),
        (e.listReciprocal = function (e, t, i) {
          for (var o = [], n = e.length - 1; n >= 0; n--)
            e[n].hasOwnProperty(t) && e[n][t] == i && o.push(e.splice(n, 1)[0]);
          return this.listSplicing(e, o);
        }),
        (e.listStatsuSort = function (e, t, i, o) {
          for (var n = [], a = [], r = e.length - 1; r >= 0; r--)
            e[r].hasOwnProperty(t) &&
              (e[r][t] == i
                ? n.unshift(e.splice(r, 1)[0])
                : e[r][t] == o && a.unshift(e.splice(r, 1)[0]));
          return (this.listSplicing(e, n, !0), this.listSplicing(e, a));
        }),
        (e.listReciprocalTow = function (e, t, i) {
          if (t.length != i.length) return e;
          for (var o = [], n = e.length - 1; n >= 0; n--) {
            for (var a = 0, r = 0; r < t.length; r++)
              e[n].hasOwnProperty(t[r]) && e[n][t[r]] == i[r] && a++;
            a == t.length && o.push(e.splice(n, 1)[0]);
          }
          return this.listSplicing(e, o);
        }),
        (e.listSplicing = function (e, t, i) {
          if ((void 0 === i && (i = !1), i))
            for (var o = t.length - 1; o >= 0; o--) e.unshift(t[o]);
          else for (var o = 0; o < t.length; o++) e.push(t[o]);
          return e;
        }),
        (e.getOnlineNum = function (e) {
          for (var t, i = 0, o = e.length, n = 0; o > n; n++)
            ((t = e[n]), t.isOnline && i++);
          return i;
        }),
        (e.createTwoArray = function (e, t) {
          for (var i = new Array(e), o = 0; o < i.length; o++)
            i[o] = new Array(t);
          return i;
        }),
        (e.covertTwoList = function (e, t) {
          for (var i = [], o = e.length, n = [], a = 0; o > a; a++)
            (n.push([e[a], t[a]]), (a + 1) % 2 == 0 && (i.push(n), (n = [])));
          return i;
        }),
        (e.chainArr = function (e, t, i) {
          void 0 === t && (t = 0);
          for (var o, n, a, r, s, l, u = 0, _ = e.length; _ > u; u++)
            ((o = e[u]),
              0 != u &&
                ((n = e[u - 1]),
                (a = this.getWidth(n)),
                (s = 0),
                (l = 0),
                i && i[u - 1] && (s = i[u - 1]),
                o.anchorOffsetX &&
                  ((r = this.getWidth(o)), (l += r * o.anchorOffsetX)),
                (o.x = n.x + a + s + t + l)));
        }),
        (e.getWidth = function (e) {
          var t = e.width * e.scaleX;
          return (t = e instanceof eui.Label ? e.textWidth : e.width);
        }),
        (e.getArray = function (e, t, i) {
          return (-1 == t && (t = 0), e && t < e.length ? e[t] : i);
        }),
        (e.bgFull = function (e) {
          if (e && e.parent) {
            var t = e.parent.width,
              i = e.parent.height;
            if (!go.isPc) {
              var o = Math.max(t / e.width, i / e.height);
              ((e.width *= o), (e.height *= o));
            }
            ((e.x = (t - e.width * e.scaleX) / 2),
              (e.y = (i - e.height * e.scaleY) / 2));
          }
        }),
        (e.joinArray = function (e, t) {
          if (t && e) for (var i = t.length, o = 0; i > o; o++) e.push(t[o]);
          return e;
        }),
        (e.verticalArray = function (e, t) {
          var i = [];
          if (e)
            for (
              var o = e.length, n = t, a = Math.floor(o / t), r = 0;
              n > r;
              r++
            ) {
              i.push(e[r]);
              for (var s = 0; a - 1 > s; s++) i.push(e[r + s * n + t]);
            }
          return i;
        }),
        (e.pos = function (e, t, i) {
          ((i.x = e), (i.y = t));
        }),
        (e.size = function (e, t, i) {
          ((i.width = e), (i.height = t));
        }),
        (e.drawRect = function (e, t, i, o, n, a) {
          (null != a && e.graphics.beginFill(a),
            e.graphics.drawRect(t, i, o, n));
        }),
        (e.dealList = function (e, t, i) {
          if (e)
            if (i) {
              var o = e.indexOf(t);
              -1 == o && e.push(t);
            } else {
              var o = e.indexOf(t);
              -1 != o && e.splice(o, 1);
            }
        }),
        (e.dealList2 = function (e, t, i, o, n) {
          for (var a, r, s = e.length, l = 0; s > l; l++)
            ((a = e[l]),
              (r = this.findList(i, a, t)),
              r && this.dealList(o, r, n));
        }),
        (e.findList = function (e, t, i) {
          if (e)
            for (var o = e.length, n = void 0, a = 0; o > a; a++)
              if (((n = e[a]), n[i] == t)) return n;
        }),
        (e.compareEquip = function (e, t) {
          var i,
            o = t
              ? t
              : u["default"].myPlayer
                ? l["default"].getCompareEquip(
                    u["default"].myPlayer.bag,
                    e.type,
                  )
                : null;
          return (
            null == o
              ? (i = !0)
              : (e.reqLv > o.reqLv || e.grade > o.grade) && (i = !0),
            i
          );
        }),
        (e.isSuitableWeapon = function (e, t) {
          if ((void 0 === t && (t = u["default"].myPlayer), !e.isEquipClass()))
            return !1;
          var i = !1;
          switch (t.job) {
            case _["default"].JOB_RANGER:
              (e.type == _["default"].ITEM_TYPE_WEAPON_ONEHAND_SWORD ||
                e.type == _["default"].ITEM_TYPE_WEAPON_ONEHAND_BLADE) &&
                (i = !0);
              break;
            case _["default"].JOB_XIUZHEN:
              e.type == _["default"].ITEM_TYPE_WEAPON_TWOHAND_STAFF && (i = !0);
              break;
            case _["default"].JOB_WARRIOR:
              (e.type == _["default"].ITEM_TYPE_WEAPON_TWOHAND_SWORD ||
                e.type == _["default"].ITEM_TYPE_WEAPON_TWOHAND_BLADE) &&
                (i = !0);
              break;
            case _["default"].JOB_WIZARD:
              e.type == _["default"].ITEM_TYPE_WEAPON_TWOHAND_STAFF && (i = !0);
          }
          return i;
        }),
        (e.compareEquipByJob = function (e, t, i) {
          var o = this.isJobEquipByBody(e, null, i);
          return o ? this.compareEquip(e, t) : void 0;
        }),
        (e.isJobEquipByBody = function (e, t, i) {
          t || (t = u["default"].myPlayer);
          var o = !1;
          n["default"].isValidEquipRequire(t, e, null) && (o = !0);
          var a = l["default"].getCompareEquip(t.bag, e.type);
          return (i || (a && a.type != e.type && (o = !1)), o);
        }),
        (e.findNpc = function (t) {
          var i,
            o,
            n = t.npcId,
            a = t.npcName,
            r = t.mapId,
            s = t.mapType,
            l = u["default"].mapId,
            p = s == _.MapType.city;
          if (
            (null == n && a && (n = u["default"].getNpcIdByName(a)),
            p && t.isGuide && (o = !0),
            s
              ? p && (i = _["default"].isAllocateCityMap(l))
              : r
                ? (i = r == l)
                : e.isNpcShow(n) && (i = !0),
            i)
          )
            e.isNpcShow(n)
              ? d["default"].autoRunNpc(n)
              : o &&
                (_["default"].isAllocateCityMap(l) &&
                  (t.npcId2
                    ? (n = t.npcId2)
                    : t.npcName2 &&
                      (n = u["default"].getNpcIdByName(t.npcName2))),
                e.isNpcShow(n) && d["default"].autoRunNpc(n));
          else if (((g.MainPlayerAi.ins.autoNpcData = t), t.mapId && !p)) {
            var c = t.px ? t.px : 10,
              h = t.px ? t.py : 10;
            u["default"].doJumpMap(t.mapId, c, h);
          }
          return i;
        }),
        (e.isNpcShow = function (e) {
          var t = u["default"].getNpcByID(e);
          return t && t.isVisible() && t.isEnable() ? !0 : void 0;
        }),
        (e.findItem = function (e, t) {
          var i = -1;
          if (e && e.source)
            for (
              var o = e.source.length, n = void 0, a = void 0, r = 0;
              o > r;
              r++
            )
              ((n = e.source[r]),
                (a = n ? n.item : n),
                a && a.slotPos == t && (i = r));
          return i;
        }),
        (e.scrollItem = function (e, t, i) {
          var o = e.dataProvider;
          if ((i && (t = this.findItem(o, t)), -1 != t)) {
            var n = void 0,
              a = e.parent ? e.parent.width : e.width,
              r = e.parent ? e.parent.height : e.height,
              s = 0,
              l = 0,
              u = void 0;
            if (e.numChildren > 0) {
              var _ = e.getChildAt(0);
              ((s = _.width), (l = _.height));
              var d = 0,
                p = 0;
              if (
                (e.layout &&
                  (e.layout instanceof eui.TileLayout
                    ? ((d = e.layout.horizontalGap), (p = e.layout.verticalGap))
                    : e.layout instanceof eui.VerticalLayout
                      ? ((d = 0), (p = e.layout.$gap))
                      : e.layout instanceof eui.HorizontalLayout &&
                        ((d = e.layout.$gap), (p = 0), (u = !0))),
                u)
              )
                n = t * (s + d) - a;
              else {
                var c = Math.floor(a / (s + d)),
                  h = Math.ceil(t / c),
                  f = Math.floor(h * (l + p));
                n = f - r;
              }
            }
            n > 0 && (u ? (e.scrollH = n) : (e.scrollV = n));
          }
          return t;
        }),
        (e.scrollList = function (e, t, i, o) {
          egret.callLater(function () {
            if (!i)
              for (var n = e.parent; n;) {
                if (n instanceof eui.Scroller) {
                  i = n;
                  break;
                }
                n = n.parent;
              }
            var a = i ? i.width : e.width,
              r = i ? i.height : e.height,
              s = e.dataProvider;
            if (s.length) {
              t > s.source.length ? (t = s.source.length) : (t += 1);
              var l,
                u,
                _ = 0,
                d = 0,
                p = 0,
                c = 0;
              (e.layout &&
                (e.layout instanceof eui.TileLayout
                  ? ((_ = e.layout.horizontalGap), (d = e.layout.verticalGap))
                  : e.layout instanceof eui.VerticalLayout
                    ? (d = e.layout.$gap)
                    : e.layout instanceof eui.HorizontalLayout &&
                      ((_ = e.layout.$gap), (l = !0))),
                i && i.viewport.validateNow());
              var h = e.getVirtualElementAt(0);
              if (((p = h.width), (c = h.height), l)) u = t * (p + _) - a;
              else {
                var f = Math.floor(a / (p + _)),
                  T = Math.ceil(t / f),
                  E = Math.floor(T * (c + d));
                u = E - r;
              }
              if (u > 0) {
                if (!o) {
                  var y = 0;
                  if (i) {
                    var g = void 0,
                      v = void 0;
                    (l
                      ? ((y = a / 2 - p / 2), (g = i.measuredWidth), (v = a))
                      : ((y = r / 2 - c / 2), (g = i.measuredHeight), (v = r)),
                      g > u + y + v && (u += y));
                  }
                }
                i
                  ? l
                    ? (i.viewport.scrollH = u)
                    : (i.viewport.scrollV = u)
                  : l
                    ? (e.scrollH = u)
                    : (e.scrollV = u);
              }
              i && i.viewport.validateNow();
            }
          }, this);
        }),
        (e.scrollHV = function (e, t, i, o) {
          (void 0 === o && (o = 350),
            c.delayCall(
              h["default"].alloc(
                this,
                function (e, t, i) {
                  if (t && !(t.numChildren <= 0)) {
                    0 > i && (i = 0);
                    var o = !1,
                      n = 0,
                      a = 0,
                      r = 0,
                      s = 0,
                      l = 0,
                      u = 0,
                      _ = 0,
                      d = t.dataProvider.source.length,
                      p = t.$children.length,
                      c = 1,
                      h = 0,
                      f = 0;
                    (t.layout instanceof eui.HorizontalLayout
                      ? ((n = t.layout.gap),
                        (r = e.width),
                        (a = 0),
                        (s = e.height),
                        (c = 1),
                        (h -= t.layout.paddingRight),
                        (h += t.layout.paddingLeft))
                      : t.layout instanceof eui.VerticalLayout
                        ? ((a = t.layout.gap),
                          (s = e.height),
                          (n = 0),
                          (r = e.width),
                          (c = 2),
                          (f += t.layout.paddingTop),
                          (f += t.layout.paddingBottom))
                        : t.layout instanceof eui.TileLayout &&
                          ((a = t.layout.verticalGap),
                          (n = t.layout.horizontalGap),
                          (s = e.height),
                          (r = e.width),
                          (c = 3),
                          (h -= t.layout.paddingRight),
                          (h += t.layout.paddingLeft),
                          (f -= t.layout.paddingTop),
                          (f += t.layout.paddingBottom)),
                      i >= d && (i = d - 1));
                    for (var T = 0, E = 0, y = 0, g = !0, v = 0; d > v; v++) {
                      try {
                        if (p > v) {
                          var S = t.getChildAt(v);
                          ((T = S.height), (E = S.width));
                        }
                      } catch (I) {}
                      if (
                        (g &&
                          ((g = !1), (y = Math.floor(r / (E + n)) * (E + n))),
                        1 == c && (l += E + n),
                        (2 == c || 3 == c) &&
                          (_ += E + n) >= y &&
                          ((_ = 0), (u += T + a)),
                        v == i)
                      ) {
                        ((l = l >= r ? l - r - n + h : 0),
                          (u = u >= s ? u - s - a + f : 0),
                          (o = !0));
                        break;
                      }
                    }
                    o &&
                      (2 == c || 3 == c
                        ? (e.viewport.scrollV = u)
                        : (e.viewport.scrollH = l));
                  }
                },
                [e, t, i],
                !0,
              ),
              o,
            ));
        }),
        (e.dealPoint = function (e, t) {
          t || (t = ["x", "y", "width", "height"]);
          for (var i, o = 0; o < t.length; o++)
            ((i = t[o]), (e[i] = Math.floor(e[i])));
        }),
        (e.getMoneyItem = function (e, t, i) {
          var o;
          return (
            e
              ? ((o = new n["default"]()), (o.quantity = i), (o.id = t))
              : ((o = new pb.itemInfo()), (o.itemCount = i), (o.itemId = t)),
            (o.name = a.ModelVo.getMoneyText(t)),
            (o.bagIcon = p.Tool.getMoneyIcon(t)),
            o
          );
        }),
        (e.itemInfoClone = function (e) {
          var t = new pb.itemInfo();
          return (
            (t.name = e.name),
            (t.bagIcon = e.bagIcon),
            (t.effectId = e.effectId),
            (t.fashIcons = e.fashIcons),
            (t.grade = e.grade),
            (t.hasAcquired = e.hasAcquired),
            (t.hasLock = e.hasLock),
            (t.hasSelect = e.hasSelect),
            (t.haveNum = 0 == e.haveNum ? null : e.haveNum),
            (t.icon = e.icon),
            (t.info = e.info),
            (t.itemCount = e.itemCount),
            (t.itemId = e.itemId),
            (t.hasHelp = e.hasHelp),
            t
          );
        }),
        (e.getTaskStatu = function (e, t) {
          t = t || u["default"].myPlayer;
          var i = d.MissionConst.CAN_ACCEPT;
          if (d["default"].isMissionFinish(t, e)) i = d.MissionConst.FINISH;
          else {
            var o = t.getMissionById(e);
            o && (i = o.getMissionStatus(t));
          }
          return i;
        }),
        (e.isTouchItem = function (e, t) {
          var i,
            o = e.target;
          if (o instanceof f.ItemIconBase) i = o;
          else {
            var n = o.parent;
            n && n instanceof f.ItemIconBase && (i = n);
          }
          return i ? (t || i.showTip(), !0) : void 0;
        }),
        (e.getLeader = function () {
          var e = u["default"].getTypeModel(_["default"].NEAR_MY_TEAM);
          if (e)
            for (var t = 0; t < e.arr.length; t++) {
              var i = e.arr[t];
              if (i.isLeader) return i;
            }
        }),
        (e.setLayout = function (e, t) {
          e.visible != t && ((e.visible = t), (e.includeInLayout = t));
        }),
        (e.checkHead = function (e) {
          var t = e.pet;
          if (t) {
            if (!e.isServerTeam)
              return void E["default"].alertMessage("跨服成员不支持查看");
            var i = u["default"].myPlayer;
            return i.isServerTeam_2
              ? void E["default"].alertMessage("跨服活动中不支持查看")
              : void T["default"].doPetInfoMsg(
                  t,
                  y["default"].PET_INFO_SEE_PLAYER,
                  [e.id],
                );
          }
        }),
        (e.listenTabList = function (e, t, i) {
          for (var o, n = e.tabList, a = 0; a < n.length; a++)
            ((o = n[a]),
              (o.currentState = "up"),
              i ||
                (e.listen(o, t.bind(this, a, o, e)),
                e.tabIndex == a && (o.currentState = "labUp")));
        }),
        (e.resetTabList = function (e) {
          this.listenTabList(e, null, !0);
        }),
        (e.createTestList = function (e, t, i) {
          void 0 === t && (t = 20);
          var o,
            n,
            a = [],
            r = i ? e : new e();
          r.setDefault && r.setDefault();
          for (var s = 0; t > s; s++) {
            o = {};
            for (var l in r)
              ((n = r[l]),
                Object.prototype.hasOwnProperty.call(r, l) &&
                  ("number" == typeof n
                    ? (n = s + 1)
                    : "string" == typeof n && (n = "测试名称" + (s + 1))),
                (o[l] = n));
            a.push(o);
          }
          return a;
        }),
        (e.updateVo = function (e, t) {
          var i;
          for (var o in t || {})
            t.hasOwnProperty(o) && ((i = t[o]), (e[o] = i));
          return e;
        }),
        (e.showHideList = function (e, t) {
          for (var i, o = e.length, n = 0; o > n; n++)
            ((i = e[n]), (i.visible = t));
        }),
        (e.coveryDataList = function (e, t, i) {
          var o = [];
          if (e)
            for (
              var n = e.length,
                a = i.length,
                r = void 0,
                s = void 0,
                l = void 0,
                u = 0;
              n > u;
              u++
            ) {
              ((r = e[u]), (s = new t()));
              for (var _ = 0; a > _; _++) ((l = i[_]), (s[l] = r[l]));
              o.push(s);
            }
          return o;
        }),
        (e.isTxtOut = function (e, t) {
          t || (t = e.text);
          var i = Math.floor(e.width / e.size);
          return t.length > i;
        }),
        (e.openMainInfo = function (e) {
          v["default"].ins.openMainInfoById(e);
        }),
        (e.openMainInfoArr = function (e) {
          for (var t = [], i = 0; i < e.length; i++) {
            var o = v["default"].ins.getGuideLevelData(e[i]);
            o && !o._isUnlock && (t = t.concat(o.atlas));
          }
          E["default"].openMainInfo(t);
        }),
        (e.getEqualPartList = function (e, t, i) {
          for (
            var o = [], n = Math.floor(e / t), a = i ? 1 : 0, r = a;
            t > r;
            r++
          )
            o.push(n * r);
          return (o.push(e), o);
        }),
        (e.setGray = function (e, t, i) {
          (void 0 === i && (i = !0),
            i && (e.touchEnabled = !t),
            (e.filters = t ? S.FilterUtil.grayFilter : void 0));
        }),
        (e.dealLockList = function (e, t, i, o, n) {
          if (e)
            for (var a = e.length, r = 0; a > r; r++)
              this.dealLock(e[r], t, i, o, n);
          return e;
        }),
        (e.dealLock = function (e, t, i, o, n) {
          return (
            (e.hasLock = t),
            (e.hasAcquired = i),
            o && (n || (n = I.SprConst.SPRITE_ITEM_ENCHANT)),
            (e.effectId = o ? n : 0),
            e
          );
        }),
        (e.createSprite = function (e, t) {
          var i = o["default"].alloc(r["default"]),
            n = e.getType();
          if (n == _.MODEL_TYPE.TYPE_PET || n == _.MODEL_TYPE.TYPE_PET_MONSTER)
            i.setPetIcon(e.icon1, t);
          else if (n == _.MODEL_TYPE.TYPE_BUDDY)
            i.setSrc(e.icon, m.LoadPri.UIScene, t);
          else if (
            n == _.MODEL_TYPE.TYPE_LEGION ||
            n == _.MODEL_TYPE.TYPE_PLAYER ||
            n == _.MODEL_TYPE.TYPE_MERCENARY ||
            n == _.MODEL_TYPE.TYPE_PLAYER_MONSTER
          ) {
            var a = e.getIconpet1();
            a
              ? i.setPetIcon(Long.fromNumber(a))
              : i.setIcon(e.icon1, e.icon2, e.icon3, t);
          } else i.setSrc(e.icon1, m.LoadPri.UIScene, t);
          return ((i.scale = 2), i);
        }),
        (e.isHasRemind = function (e) {
          var t = egret.localStorage.getItem(e + u["default"].myPlayer.id),
            i = A["default"].getTimeDay();
          return t == i;
        }),
        (e.setRemind = function (e, t) {
          void 0 === t && (t = !0);
          var i = A["default"].getTimeDay(),
            o = e + u["default"].myPlayer.id;
          t
            ? egret.localStorage.setItem(o, i)
            : egret.localStorage.removeItem(o);
        }),
        (e.eqLong = function (e, t) {
          for (var i = 0; i < e.length; i++) if (t.eq(e[i])) return !0;
          return !1;
        }),
        (e.getAlertRemind = function (t) {
          return e.isHasRemind(C.DataDefine.alertRemind + "_" + t);
        }),
        (e.setAlertRemind = function (t, i) {
          (void 0 === i && (i = !0),
            e.setRemind(C.DataDefine.alertRemind + "_" + t, i));
        }),
        e
      );
    })();
  t.GUtil = P;
});
