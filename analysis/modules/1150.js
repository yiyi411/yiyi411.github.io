(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(0),
    a = i(6),
    r = i(4),
    s = i(1151),
    l = i(1152),
    u = i(1153),
    _ = i(2),
    d = i(1),
    p = i(15),
    c = i(25),
    h = i(73),
    f = i(5),
    T = i(26),
    E = i(42),
    y = (function (e) {
      function t(t) {
        var i = e.call(this, t) || this;
        return ((i._view = i.mark("_view", s["default"])), i);
      }
      return (
        __extends(t, e),
        (t.prototype.onInit = function () {
          var e = this;
          ((e._view.horizontalCenter = 0),
            (e._view.top = 0),
            (e._view.bottom = r["default"].WINDOW_BOTTOM),
            (e._list2 = new eui.ArrayCollection()),
            (e._view.listSelect.itemRenderer = l["default"]),
            (e._view.listSelect.dataProvider = e._list2),
            (e._list = new eui.ArrayCollection()),
            (e._view.listItem.itemRenderer = u["default"]),
            (e._view.listItem.dataProvider = e._list),
            (e._proxy = o["default"].getProxy(
              n.ModName.Raiders,
              n.ProxyType.Raiders,
            )));
        }),
        (t.prototype.addListeners = function () {
          var e = this;
          (e.onNt(_.BookGroupEvent.bookGroupInfo, e.updateInfo, e),
            e.onNt(_.BookGroupEvent.bookGroupUpdate, e.updatePage, e),
            e.onNt(_.BookGroupEvent.bookGroupRed, e.updateSelectRed, e),
            e.onEgret(
              e._view.listSelect,
              eui.ItemTapEvent.ITEM_TAP,
              e.tapListSelect,
              e,
            ),
            e.onEgret(
              e._view.listItem,
              eui.ItemTapEvent.ITEM_TAP,
              e.tapItemSelect,
              e,
            ),
            e.onEgret(e._view.leftBtn, egret.TouchEvent.TOUCH_TAP, e.onLeftBtn),
            e.onEgret(
              e._view.rightBtn,
              egret.TouchEvent.TOUCH_TAP,
              e.onRightBtn,
            ),
            e.onEgret(e._view.lockBtn, egret.TouchEvent.TOUCH_TAP, e.onLockBtn),
            e.onEgret(e._view.lvBtn, egret.TouchEvent.TOUCH_TAP, e.onLvBtn));
        }),
        (t.prototype.regGuide = function () {
          var e = this;
          (e.regGuideSpr(c.GuideSpriteId.handbookLevelBtn, e._view.lvBtn),
            e.regGuideSpr(c.GuideSpriteId.handbookTip2, e._view));
        }),
        (t.prototype.onShow = function () {
          this._list2.refresh();
        }),
        (t.prototype.onHide = function () {
          e.prototype.onHide.call(this);
        }),
        (t.prototype.updateInfo = function () {
          var e = this._proxy.bookGroupModel.nowBookGroup;
          (this._list2.replaceAll(
            this._proxy.bookGroupModel.groupMapList[e.group],
          ),
            (this._view.iconImg.source =
              this._proxy.bookGroupModel.getGroupTypeIcon(e.group, e.type)),
            (this._view.groupName.text =
              this._proxy.bookGroupModel.getGroupTypeName(e.group, e.type)),
            (this._view.sumNum.text =
              "总数:" +
              this._proxy.bookGroupModel._nowHasNum +
              "/" +
              e.itemInfos.length),
            (this._view.listItem.selectedIndex = 0),
            this.updatePage());
        }),
        (t.prototype.updatePage = function () {
          var e = this._proxy.bookGroupModel.nowBookGroup;
          this._view.proNum.text = e.info.rate + "%";
          var t = e.info.power > 0;
          ((this._view.levelTxt.text = t ? e.info.level + "级" : "暂未开放"),
            (this._view.proImg.source = e.canUnlock
              ? "zb_panel_d"
              : "ji_panel_bk"),
            (this._view.desTxt.text = t
              ? this._proxy.bookGroupModel.getGroupTypeDes(
                  e.group,
                  e.type,
                  e.info.level,
                )
              : "暂未开放"),
            (this._view.iconBgImg.source = this._proxy.bookGroupModel.getBgImg(
              e.info.level,
            )),
            (this._view.lockBtn.visible = t ? e.canUnlock : !1),
            (this._view.lvBtn.visible = t ? !e.canUnlock : !1),
            (this._view.hint.visible = t ? e.canUnlock : !1),
            (this.sumPage = Math.ceil(e.itemInfos.length / 12)),
            (this._view.pageNum.text =
              this._proxy.bookGroupModel.nowIndex + "/" + this.sumPage),
            (this._list.source = this._proxy.bookGroupModel.getItemsList()),
            this.tapItemSelect2(),
            this.updateSelectRed());
        }),
        (t.prototype.updateSelectRed = function () {
          var e = this._proxy.bookGroupModel.nowBookGroup;
          (this._list2.replaceAll(
            this._proxy.bookGroupModel.groupMapList[e.group],
          ),
            (this._view.listSelect.selectedIndex = this._list2.source.indexOf(
              e.type,
            )));
        }),
        (t.prototype.tapListSelect = function () {
          var e = this._proxy.bookGroupModel.nowBookGroup,
            t = this._list2.source[this._view.listSelect.selectedIndex];
          ((this._proxy.bookGroupModel.nowIndex = 1),
            (this._proxy.bookGroupModel._nowType = t),
            this._proxy.sendHandBookInfo(e.group, t));
        }),
        (t.prototype.tapItemSelect = function () {
          return __awaiter(this, void 0, void 0, function () {
            var e, t, i, o, n, a;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return !this._list ||
                    this._list.source.length <= 0 ||
                    this._view.listItem.selectedIndex < 0
                    ? [2]
                    : ((e =
                        this._list.source[this._view.listItem.selectedIndex]),
                      (t = this._proxy.bookGroupModel.nowBookGroup.group),
                      (i = this._proxy.bookGroupModel.nowBookGroup.type),
                      (o = e),
                      3 != t || 41 == i
                        ? [3, 2]
                        : [4, E["default"].doSeeRaidersPet(o.info.itemId)]);
                case 1:
                  return (
                    (n = r.sent()),
                    d["default"].checkPet(null, null, 4, n),
                    [3, 4]
                  );
                case 2:
                  return [4, this._proxy.createBookItemInfo(o.info.itemId)];
                case 3:
                  ((a = r.sent()),
                    d["default"].alertItemInfo(a.id),
                    this.tapItemSelect2(a),
                    (r.label = 4));
                case 4:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.tapItemSelect2 = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, o, n, a;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return !this._list ||
                    this._list.source.length <= 0 ||
                    this._view.listItem.selectedIndex < 0
                    ? [2]
                    : ((this._view.spGroup.visible = !0),
                      (t = this._proxy.bookGroupModel.nowBookGroup.group),
                      (i = this._proxy.bookGroupModel.nowBookGroup.type),
                      3 == t
                        ? ((this._view.spGroup.visible = !1), [2])
                        : e
                          ? [3, 2]
                          : ((o =
                              this._list.source[
                                this._view.listItem.selectedIndex
                              ]),
                            (n = o),
                            [
                              4,
                              this._proxy.createBookItemInfo(n.info.itemId),
                            ]));
                case 1:
                  ((e = r.sent()), (r.label = 2));
                case 2:
                  return (
                    (a = this._copyPlayer =
                      h["default"].getCompareSprite(
                        f["default"].myPlayer,
                        e,
                        this._copyPlayer,
                      )),
                    this.updateRole(
                      0,
                      0,
                      a,
                      T.Direction.RIGHT,
                      this._view.spGroup,
                    ),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.onLeftBtn = function () {
          (this._proxy.bookGroupModel.nowIndex--,
            this._proxy.bookGroupModel.nowIndex < 1 &&
              (p.Tips.show("已到达第一页"),
              (this._proxy.bookGroupModel.nowIndex = 1)),
            this.updatePage());
        }),
        (t.prototype.onRightBtn = function () {
          (this._proxy.bookGroupModel.nowIndex++,
            this._proxy.bookGroupModel.nowIndex > this.sumPage &&
              (p.Tips.show("已到达最后一页"),
              (this._proxy.bookGroupModel.nowIndex = this.sumPage)),
            this.updatePage());
        }),
        (t.prototype.onLockBtn = function () {
          d["default"].showModal(
            n.ModName.Raiders,
            n.RaidersViewType.BookGroupTips,
          );
        }),
        (t.prototype.onLvBtn = function () {
          d["default"].showModal(
            n.ModName.Raiders,
            n.RaidersViewType.BookGroupLevel,
          );
        }),
        t
      );
    })(a["default"]);
  t["default"] = y;
});
