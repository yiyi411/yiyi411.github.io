(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(43),
    a = i(16),
    r = i(11),
    s = i(2),
    l = i(0),
    u = i(10),
    _ = i(12),
    d = i(20),
    p = i(8),
    c = i(1),
    h = i(24),
    f = i(18),
    T = i(19),
    E = i(5),
    y = i(31),
    g = i(178),
    v = i(91),
    S = i(57),
    I = i(35),
    m = i(25),
    A = (function (e) {
      function t() {
        var t = e.call(this) || this;
        return (t.setType(y.MODEL_TYPE.TYPE_MERCENARY), t);
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, "groupId", {
          get: function () {
            return this._groupId;
          },
          set: function (e) {
            this._groupId = this.id = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "sceneId", {
          get: function () {
            return p.Tool.isNullText(this._sceneId)
              ? ((this._sceneId = this.ownerid + "_" + this._groupId),
                this._sceneId)
              : this._sceneId;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.refreshWorldMercenaryData = function () {
          null != this.worldMer &&
            ((this.worldMer.hp = this.hp), (this.worldMer.mp = this.mp));
        }),
        (t.prototype.clearData = function () {
          if (this.ownerid == E["default"].getPlayerID()) return !1;
          var t = E["default"].getModel(this.ownerid),
            i = t && t.getMercenaryById(this.groupId),
            o = i && i.hashCode == this.hashCode;
          o ||
            (e.prototype.clearData.call(this),
            (this.ownerid = null),
            (this._sceneId = null));
        }),
        (t.fromBytesList = function (e, i) {
          var o = new t();
          return (
            (o.groupId = e.getShort()),
            i &&
              ((o.money1 = e.getInt()),
              (o.money2 = e.getInt()),
              (o.money3 = e.getInt())),
            (o.level = e.getByte()),
            (o.job = e.getByte()),
            (o.icon1 = e.getLong()),
            (o.icon2 = e.getLong()),
            (o.icon3 = e.getLong()),
            (o.strength = e.getByte()),
            (o.name = e.getString()),
            (o.monstertype = e.getByte()),
            i
              ? (o.expireTime1 = e.getShort())
              : (o.expireTime1 = a["default"].timer.serverTime + e.getInt()),
            o
          );
        }),
        (t.fromBytesFull = function (e) {
          var i = new t();
          return (
            (i.groupId = e.getShort()),
            (i.expireTime1 = a["default"].timer.serverTime + e.getInt()),
            t.fromBytesMercenary(i, e),
            i.setPet(t.fromBytesMercenary(new t(), e)),
            i
          );
        }),
        (t.fromBytesSimple = function (e) {
          var i = new t();
          return (
            (i.groupId = e.getShort()),
            t.fromBytesSimpleData(e, i),
            i.setPet(t.fromBytesSimpleData(e, new t())),
            i
          );
        }),
        (t.prototype.setPet = function (e, t) {
          if (
            (void 0 === t && (t = !1),
            this.pet && (this.pet = null),
            this.setTabStatus(!1, _.ModelConst.PET_INNER_SHOW),
            e)
          ) {
            ((this.pet = e), (e.follower = this.id));
            var i =
              (e.icon1.low >> _.ModelConst.OFFSET_PET_STYLE) &
              _.ModelConst.LEN_PET_STYLE;
            switch (i) {
              case 3:
              case 13:
              case 4:
              case 17:
              case 7:
              case 26:
                this.setTabStatus(!0, _.ModelConst.PET_INNER_SHOW);
            }
          }
        }),
        (t.fromBytesSimpleData = function (e, t) {
          if (null == t) return null;
          var i = e.getInt();
          return 0 > i
            ? null
            : ((t.id = i),
              (t.icon1 = e.getLong()),
              (t.icon2 = e.getLong()),
              (t.icon3 = e.getLong()),
              t);
        }),
        (t.fromBytesMercenary = function (e, t) {
          if (null == e) return null;
          if (null == v["default"].fromBytes(t, e)) return null;
          ((e.info = t.getString()),
            (e.job = t.getByte()),
            (e.strength = t.getByte()),
            (e.hp = t.getInt()),
            (e.mp = t.getInt()),
            (e.icon2 = t.getLong()),
            (e.icon3 = t.getLong()));
          var i = t.getBoolean();
          if (i) {
            for (var o = t.getByte(), n = new h["default"](), a = 0; o > a; a++)
              n.addElement(S["default"].fromBytes(t));
            e.setAI(g.MonsterAI.fromBytes(t, n.arr));
          }
          return e;
        }),
        (t.prototype.getCoolDownTime = function (e) {
          if (this.expireTime1 < 0) return u.GameText.STR_HAVE_NO_TIME;
          if (1 == e) return p.Tool.getTimeStrByMin(this.expireTime1, !0);
          var t =
            (this.expireTime1 - a["default"].timer.serverTime) /
            p.Tool.MILLIS_IN_MINUTE;
          return p.Tool.getTimeStrByMin(t, !0);
        }),
        (t.doMercenaryListMsg = function (e, t) {
          var i = f["default"].createMercenaryListMsg(
            E["default"].shopID,
            e,
            t,
          );
          (n["default"].Service.onProto(
            T["default"].CG_SOLDIER_GROUP_LIST,
            r["default"].alloc(this, this.doMercenaryListMsgCb),
          ),
            n["default"].Service.sendProto(i));
        }),
        (t.doMercenaryListMsgCb = function (e) {
          var i = e.body;
          if (null == i) return null;
          var n = new h["default"](),
            a = i.getShort();
          if (a > 0)
            for (var r = 0; a > r; r++) n.addElement(t.fromBytesList(i, !0));
          var s = o["default"].getProxy(l.ModName.Shop, l.ProxyType.Shop);
          ((s.data.ShopMerList = n),
            c["default"].showWin(l.ModName.Shop, l.ShopViewType.ShopMer));
        }),
        (t.doMercenaryInfoMsg = function (e, t, i) {
          if (null == e) return !1;
          if (0 == i) {
            var o = E["default"].myPlayer;
            if (null != o && null != o.getMercenaryById(e.groupId))
              return (e.setTabStatus(!0, _.ModelConst.MERCENARY_INFO), !0);
          }
          if (1 == e.isTabStatus(_.ModelConst.MERCENARY_INFO))
            return (e.setTabStatus(!0, _.ModelConst.MERCENARY_INFO), !0);
          var a = null;
          return (
            i
              ? ((a = f["default"].createMercenaryInfoMsg(e.groupId)),
                n["default"].Service.onProto(
                  T["default"].CG_SOLDIER_GROUP_INFO,
                  r["default"].alloc(this, this.doMercenaryInfoMsgCb, [
                    e,
                    t,
                    i,
                  ]),
                ))
              : ((a = f["default"].createMercenaryMyInfoMsg(t, e.groupId)),
                n["default"].Service.onProto(
                  T["default"].CG_SOLDIER_GROUP_MY_INFO,
                  r["default"].alloc(this, this.doMercenaryInfoMsgCb, [
                    e,
                    t,
                    i,
                  ]),
                )),
            n["default"].Service.sendProto(a),
            !1
          );
        }),
        (t.doMercenaryInfoMsgCb = function (e, i, n, r) {
          var l = r.body;
          if (null == l) return null;
          var u = -1;
          if ((n ? ((u = l.getInt()), l.reset()) : (u = l.getByte()), 0 > u))
            return void c["default"].errorMessage(l.getString());
          (0 == n &&
            ((e.groupId = l.getShort()),
            (e.expireTime1 = a["default"].timer.serverTime + l.getInt())),
            (e = t.fromBytesMercenary(e, l)));
          var d = t.fromBytesMercenary(new t(), l);
          (e.setPet(d),
            e.setTabStatus(!0, _.ModelConst.MERCENARY_INFO),
            o["default"].sendNt(s.PetEvent.PET_MER_INFO));
        }),
        (t.doMercenaryBuyMsg = function (e) {
          if (null != e && (e.money1 > 0 || e.money2 > 0 || e.money3 > 0)) {
            var i = u.GameText.STR_MERCENARY_BUY,
              o = e.money1 > 0,
              n = void 0;
            (o &&
              (n = d["default"].makeColorString(
                e.money1 > 0 ? u.GameText.STR_MONEY1 + e.money1 + "\n" : "",
                p.Tool.COLOR_YELLOW,
              )),
              (o = e.money2 > 0));
            var a = void 0;
            o &&
              (a = d["default"].makeColorString(
                e.money2 > 0 ? u.GameText.STR_MONEY2 + e.money2 + "\n" : "",
                p.Tool.COLOR_MONEY2,
              ));
            var s = void 0;
            ((o = e.money3 > 0),
              o &&
                (s = d["default"].makeColorString(
                  e.money3 > 0 ? u.GameText.STR_MONEY3 + e.money3 + "\n" : "",
                  p.Tool.COLOR_MONEY3,
                )));
            var l = [];
            (l.push(e.name), n && l.push(n), a && l.push(a), s && l.push(s));
            var _ = p.Tool.manageStringList(
              u.GameText.STR_MERCENARY_BUY_ASK,
              l,
            );
            c["default"].alertMessage(
              _,
              i,
              r["default"].alloc(this, t.doMercenaryBuyAlert, [e]),
            );
          }
        }),
        (t.doMercenaryBuyAlert = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var t, i;
            return __generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return [
                    4,
                    p.Tool.checkEnoughMoney(e.money1, e.money2, e.money3),
                  ];
                case 1:
                  return 0 == o.sent()
                    ? [2, !0]
                    : ((t = e.isTabStatus(_.ModelConst.MERCENARY_INFO)),
                      (i = f["default"].createMercenaryBuyMsg(
                        E["default"].shopID,
                        e,
                        !t,
                      )),
                      n["default"].Service.onProto(
                        T["default"].CG_SOLDIER_GROUP_BUY,
                        r["default"].alloc(this, this.doMercenaryBuyMsgCb, [
                          e,
                          t,
                        ]),
                      ),
                      n["default"].Service.sendProto(i),
                      [2, !0]);
              }
            });
          });
        }),
        (t.doMercenaryBuyMsgCb = function (e, i, n) {
          var r = n.body;
          if (null == r) return null;
          var _ = r.getByte();
          if (0 > _) return void c["default"].errorMessage(r.getString());
          if (1 == _)
            return void c["default"].alertMessage(
              u.GameText.STR_COUNTRY_PRICE_ADUST,
            );
          if (0 == _) {
            ((e.groupId = r.getShort()),
              (e.expireTime1 = a["default"].timer.serverTime + r.getInt()));
            var d = r.getByte(),
              p = r.getInt(),
              h = r.getInt(),
              f = r.getInt();
            y.ModelVo.setPlayerMoney(p, h, f, null);
            var T = E["default"].myPlayer;
            if (null != T) {
              (d == t.SOLDIER_STATE_FIGHT &&
                (0 == i &&
                  ((e = t.fromBytesMercenary(e, r)),
                  e.setPet(t.fromBytesMercenary(new t(), r))),
                (e.money1 = 0),
                (e.money2 = 0),
                (e.money3 = 0),
                T.addMercenary(e, !0)),
                c["default"].alertMessageGuide(
                  u.GameText.STR_MERCENARY_BUY_SUCCESS,
                  m.GuideSpriteId.mercenaryTip3,
                ));
              var g = o["default"].getProxy(l.ModName.Shop, l.ProxyType.Shop);
              (g.data.ShopMerList.removeElement(e),
                o["default"].sendNt(s.ShopEvent.SHOP_GET_MER_SUCCESS));
            }
          }
        }),
        (t.doMercenaryMyListMsg = function (e) {
          return __awaiter(this, void 0, Promise, function () {
            var i, n, r, u, _, u, d;
            return __generator(this, function (p) {
              switch (p.label) {
                case 0:
                  return null == e
                    ? [2, null]
                    : ((i = f["default"].createMercenaryMyListMsg()),
                      [4, I["default"].sendProtoAsync(i)]);
                case 1:
                  if ((p.sent(), (i = f["default"].getReceiveMsg()), null == i))
                    return [2];
                  if (
                    ((n = new h["default"]()),
                    (r = e.getMerList()),
                    null != r && r.length > 0)
                  )
                    for (u = 0; u < r.length; u++)
                      null != r[u] &&
                        r[u].expireTime1 > a["default"].timer.serverTime &&
                        n.addElement(r[u]);
                  for (
                    f["default"].processMyMercenaryCheck(i),
                      _ = i.getShort(),
                      u = 0;
                    _ > u;
                    u++
                  )
                    n.addElement(t.fromBytesList(i, !1));
                  return (
                    (d = o["default"].getProxy(l.ModName.Pet, l.ProxyType.Pet)),
                    (d.data.SelfMerList = n),
                    o["default"].sendNt(s.PetEvent.PET_MER_LIST),
                    [2]
                  );
              }
            });
          });
        }),
        (t.doMercenarySetStatus = function (e, t) {
          if (null != e) {
            var i = 0 == e.isTabStatus(_.ModelConst.MERCENARY_INFO),
              o = f["default"].createMercenarySetStatusMsg(e.groupId, i, t);
            (n["default"].Service.onProto(
              T["default"].CG_SOLDIER_STATE_SET,
              r["default"].alloc(this, this.doMercenarySetStatusCb, [e, t]),
            ),
              n["default"].Service.sendProto(o));
          }
        }),
        (t.doMercenarySetStatusCb = function (e, i, n) {
          var a = n.body;
          if (null == a) return null;
          var r = a.getByte();
          if (0 > r) return void c["default"].errorMessage(a.getString());
          var l = E["default"].myPlayer;
          if (null != l) {
            var u = 0 == e.isTabStatus(_.ModelConst.MERCENARY_INFO);
            (i == t.SOLDIER_STATE_FIGHT
              ? (1 == u &&
                  ((e = t.fromBytesMercenary(e, a)),
                  e.setPet(t.fromBytesMercenary(new t(), a))),
                l.addMercenary(e, !0))
              : l.removeMercenary(e),
              o["default"].sendNt(s.PetEvent.PET_MER_STATUS));
          }
        }),
        (t.doMercenaryDelMsg = function (e) {
          if (null != e) {
            var t = f["default"].createMercenaryDelMsg(e.groupId);
            (n["default"].Service.onProto(
              T["default"].CG_SOLDIER_DELETE,
              r["default"].alloc(this, this.doMercenaryDelMsgCb, [e]),
            ),
              n["default"].Service.sendProto(t));
          }
        }),
        (t.doMercenaryDelMsgCb = function (e, t) {
          var i = t.body;
          if (null == i) return null;
          var n = i.getByte();
          if (0 > n) return void c["default"].errorMessage(i.getString());
          var a = E["default"].myPlayer;
          if (null != a) {
            var r = a.getMercenaryById(e.groupId);
            (null != r && a.removeMercenary(r),
              o["default"].sendNt(s.PetEvent.PET_MER_DELETE));
          }
        }),
        (t.prototype.getClone = function () {
          var i = new t();
          return (
            e.prototype.setMonsterData.call(this, i),
            (i.groupId = this.groupId),
            (i.strength = this.strength),
            (i.hp = this.hp),
            (i.mp = this.mp),
            (i.expireTime1 = this.expireTime1),
            (i.job = this.job),
            (i.info = this.info),
            i
          );
        }),
        (t.doClearMyActivityMercenary = function (e) {
          var t = E["default"].myPlayer;
          if (null != t) {
            var i = e.getBoolean();
            if (i) {
              if (null == t.merList || t.merList.length <= 0) return;
              t.merList = null;
            }
          }
        }),
        (t.SOLDIER_STATE_SLEEP = 1),
        (t.SOLDIER_STATE_FIGHT = 2),
        (t.SOLDIER_STATE_SACK = 3),
        t
      );
    })(v["default"]);
  t["default"] = A;
});
