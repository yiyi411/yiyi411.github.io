(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.BagItemProcessInfoMdr = t.ProcessInfoData = void 0));
  var o = i(514),
    n = i(6),
    a = i(9),
    r = i(5),
    s = i(515),
    l = i(1),
    u = i(0),
    _ = (function () {
      function e() {}
      return e;
    })();
  t.ProcessInfoData = _;
  var d = (function (e) {
    function t() {
      var t = e.call(this, a.Layer.modal) || this;
      return ((t._view = t.mark("_view", o["default"])), t);
    }
    return (
      __extends(t, e),
      (t.prototype.onInit = function () {
        ((this._view.horizontalCenter = 0),
          (this._view.verticalCenter = 0),
          (this._view.listItem.itemRenderer = s.BagItemProcessInfo_1),
          (this._dataForList = new eui.ArrayCollection()),
          (this._view.listItem.dataProvider = this._dataForList));
      }),
      (t.prototype.addListeners = function () {
        this.onEgret(
          this._view.btnClose,
          egret.TouchEvent.TOUCH_TAP,
          this.hideView,
          this,
        );
      }),
      (t.prototype.onShow = function () {
        return __awaiter(this, void 0, void 0, function () {
          var e, t, i, o, n, a, s, l, u, d, p, c, h, f, T, E, y;
          return __generator(this, function (g) {
            switch (g.label) {
              case 0:
                return (
                  (e = this._showArgs),
                  [4, r["default"].doGetEquipIdentifyAttr(e)]
                );
              case 1:
                for (
                  t = g.sent(),
                    i = 1,
                    o = 1,
                    e.getIsItemPetEquip() &&
                      ((i = Number(t.getString())), (o = t.getInt())),
                    n = t.getShort(),
                    a = [],
                    s = 0;
                  n > s;
                  s++
                ) {
                  for (
                    l = t.getString(),
                      u = this.getTypeStr(l),
                      a[s] = new _(),
                      a[s].type = u,
                      d = t.getShort(),
                      p = [],
                      c = 0;
                    d > c;
                    c++
                  )
                    ((h = t.getShort()),
                      (f = t.getShort()),
                      (T = t.getShort()),
                      (E = e.getPowerDes_2(h, f, T, l)),
                      e.getIsItemPetEquip() &&
                        ((y = ""),
                        E.indexOf("%") >= 0 && (y = "%"),
                        (E +=
                          "/c88D54A（" +
                          o +
                          "级:" +
                          Math.ceil(f * i) +
                          y +
                          "-" +
                          Math.ceil(T * i) +
                          y +
                          "）/p")),
                      p.push(E));
                  a[s].infoList = p;
                }
                return ((this._dataForList.source = a), [2]);
            }
          });
        });
      }),
      (t.prototype.hideView = function () {
        l["default"].hideView(u.ModName.Bag, u.BagViewType.BagItemProcessInfo);
      }),
      (t.prototype.initView = function () {}),
      (t.prototype.getTypeStr = function (e) {
        var t = "";
        switch (e) {
          case "power1":
          case "power2":
          case "bindPower1":
          case "bindPower2":
            t = "鉴定属性";
            break;
          case "power3":
            t = "合成属性";
            break;
          case "power4":
          case "power5":
          case "power6":
          case "power7":
            t = "进阶属性";
        }
        return t;
      }),
      t
    );
  })(n["default"]);
  t.BagItemProcessInfoMdr = d;
});
