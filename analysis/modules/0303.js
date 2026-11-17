(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.MapChildItemVo = t.MapItemVo = void 0));
  var o = i(43),
    n = i(11),
    a = i(0),
    r = i(10),
    s = i(8),
    l = i(1),
    u = i(24),
    _ = i(18),
    d = i(19),
    p = i(5),
    c = i(4),
    h = (function () {
      function e() {}
      return e;
    })();
  t.MapItemVo = h;
  var f = (function () {
    function e() {}
    return e;
  })();
  t.MapChildItemVo = f;
  var T = (function () {
    function e() {
      this.mapList = new u["default"]();
    }
    return (
      Object.defineProperty(e, "Instance", {
        get: function () {
          return (null == e.worldMap && (e.worldMap = new e()), e.worldMap);
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.doEnterWorldMap = function () {
        var t = _["default"].createWorldMapMsg();
        (o["default"].Service.onProto(
          d["default"].CG_SCENE_WORLDMAP,
          n["default"].alloc(e, this.doEnterWorldMapCb),
        ),
          o["default"].Service.sendProto(t));
      }),
      (e.prototype.doEnterWorldMapCb = function (t) {
        var i = t.body;
        null != i &&
          ((e.worldMap = new e()),
          e.worldMap.fromBytes(i),
          l["default"].showWin(
            a.ModName.WorldMap,
            a.WorldMapViewType.WorldMap,
          ));
      }),
      (e.prototype.WorldMap = function () {}),
      (e.prototype.fromBytes = function (e) {
        this.mapList.removeAllElements();
        for (var t = e.getByte(), i = 0; t > i; i++) {
          var o = s.Tool.byte2short(e.getByte()),
            n = e.getString(),
            a = e.getShort(),
            r = e.getShort(),
            l = e.getByte(),
            u = new h();
          ((u.id = o),
            (u.name = n),
            (u.px = a),
            (u.py = r),
            (u.state = l),
            this.mapList.addElement(u));
        }
      }),
      (e.prototype.fromListBytes = function (e) {
        for (var t = new u["default"](), i = e.getByte(), o = 0; i > o; o++) {
          var n = new f();
          ((n.id = e.getShort()),
            (n.name = e.getString()),
            (n.info = e.getString()),
            (n.state = e.getByte()),
            (n.isNeedItem = e.getByte()),
            t.addElement(n));
        }
        return t;
      }),
      (e.prototype.doGetMapList = function (t) {
        var i = t.id,
          a = _["default"].createWorldMapListMsg(i);
        (o["default"].Service.onProto(
          d["default"].CG_SCENE_WORLDMAP_DATA,
          n["default"].alloc(e, this.doGetMapListCb, [t]),
        ),
          o["default"].Service.sendProto(a));
      }),
      (e.prototype.doGetMapListCb = function (t, i) {
        var o = i.body;
        if (null != o) {
          var n = o.getByte();
          if (0 > n) return void l["default"].errorMessage(o.getString());
          var r = e.Instance.fromListBytes(o),
            s = {};
          ((s.mapItemVo = t),
            (s.list = r),
            l["default"].showModal(
              a.ModName.WorldMap,
              a.WorldMapViewType.WorldMapList,
              s,
            ));
        }
      }),
      (e.prototype.doJumpMap = function (t) {
        return __awaiter(this, void 0, Promise, function () {
          var i, a, s, u, c;
          return __generator(this, function (h) {
            switch (h.label) {
              case 0:
                return null == t
                  ? [2]
                  : ((i = t.id), [4, p["default"].checkCrossServer()]);
              case 1:
                return (a = h.sent())
                  ? ((s = "离开跨服副本，会自动退出队伍\n是否确定离开？"),
                    [
                      4,
                      l["default"].waitForTwiceSureUI(
                        s,
                        r.GameText.getText(r.GameText.TI_WARM_SHOW),
                      ),
                    ])
                  : [3, 3];
              case 2:
                if (((u = h.sent()), !u)) return [2];
                h.label = 3;
              case 3:
                return (
                  (c = _["default"].createWorldMapEnterMsg(i)),
                  o["default"].Service.onProto(
                    d["default"].CG_SCENE_WORLDMAP_ENTER,
                    n["default"].alloc(e, e.doJumpMapCb),
                  ),
                  o["default"].Service.sendProto(c),
                  [2]
                );
            }
          });
        });
      }),
      (e.doJumpMapCb = function (e) {
        var t = e.body;
        if (null != t) {
          var i = t.getByte();
          if (0 > i)
            return void (-6 == i
              ? (t.getString(),
                l["default"].alertMessage(
                  r.GameText.TELEPORT_STONE_GOTO_SHOW,
                  r.GameText.getText(r.GameText.TI_WARM_SHOW),
                  n["default"].alloc(
                    this,
                    function () {
                      (l["default"].closeAllUI(),
                        p["default"].doBrowseShop(c["default"].SHOP_TYPE_50));
                    },
                    [],
                    !0,
                  ),
                ))
              : l["default"].alertMessage(
                  t.getString(),
                  r.GameText.getText(r.GameText.TI_WARM_SHOW),
                ));
          var o = 1 == t.getByte();
          if (1 == o) {
            var a = t.getShort(),
              s = t.getInt(),
              u = p["default"].myPlayer;
            if (null == u || null == u.bag) return;
            var d = u.bag.getItem(a);
            (null == d || d.id != s) &&
              (_["default"].worldReflashType = _["default"].WORLD_REFLASH_ALL);
            u.bag.removeBagItemByPos(a, 1);
          }
          (_["default"].processDataBlockFlagMsg(t), l["default"].closeAllUI());
        }
      }),
      (e.worldMap = null),
      (e.STATE_NONE = 0),
      (e.STATE_HAVE_EVENT = 1),
      (e.STATE_FINISH = 2),
      e
    );
  })();
  t["default"] = T;
});
