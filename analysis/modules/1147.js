(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(2),
    a = i(37),
    r = i(22),
    s = i(18),
    l = i(19),
    u = i(32),
    _ = i(179),
    d = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        __extends(t, e),
        (t.prototype.onConnectLost = function () {
          e.prototype.onConnectLost.call(this);
        }),
        (t.prototype.initialize = function () {
          (e.prototype.initialize.call(this),
            (this._bookGroupModel = new _.BookGroupModel()),
            this.onProto(
              pb.EUserProtocol.S2C_HAND_BOOK_GROUP_LIST,
              this.onBookGroupList,
            ),
            this.onProto(
              pb.EUserProtocol.S2C_HAND_BOOK_INFO,
              this.onHandBookInfo,
            ),
            this.onProto(
              pb.EUserProtocol.S2C_HAND_BOOK_UNLOCK,
              this.onHandBookUnlock,
            ),
            this.onProto(
              pb.EUserProtocol.S2C_HAND_BOOK_RED_DOT,
              this.onHandBookRedDot,
            ),
            this.onProto(
              pb.EUserProtocol.S2C_HAND_BOOK_POWER_INFO,
              this.onHandBookPowerInfo,
            ));
        }),
        (t.prototype.sendHandBookInfo = function (e, t) {
          var i = new r.Message(pb.EUserProtocol.C2S_HAND_BOOK_INFO),
            o = i.proto;
          ((o.group = e), (o.type = t), this.sendProto(i));
        }),
        (t.prototype.onHandBookInfo = function (e) {
          var t = e.body,
            i = t.proto;
          ((this._bookGroupModel.nowBookGroup = i),
            o["default"].sendNt(n.BookGroupEvent.bookGroupInfo));
        }),
        (t.prototype.sendHandBookUnlock = function (e, t) {
          var i = new r.Message(pb.EUserProtocol.C2S_HAND_BOOK_UNLOCK),
            o = i.proto;
          ((o.group = e), (o.type = t), this.sendProto(i));
        }),
        (t.prototype.onHandBookUnlock = function (e) {
          var t = e.body,
            i = t.proto;
          ((this._bookGroupModel.nowBookGroup.canUnlock = !1),
            (this._bookGroupModel.nowBookGroup.info.level = i.level),
            (this._bookGroupModel.nowBookGroup.info.rate = i.rate));
          for (
            var a = 0;
            a < this._bookGroupModel.nowBookGroup.itemInfos.length;
            a++
          ) {
            var r = this._bookGroupModel.nowBookGroup.itemInfos[a];
            i.itemIds.indexOf(r.info.itemId) >= 0 && (r.unlock = !0);
          }
          o["default"].sendNt(n.BookGroupEvent.bookGroupUpdate);
        }),
        (t.prototype.onBookGroupList = function (e) {
          for (var t = e.body, i = t.proto, o = 0; o < i.infos.length; o++) {
            var n = i.infos[o];
            this._bookGroupModel.groupMapList[n.group] = [];
            for (var a = 0; a < n.info.length; a++) {
              var r = n.info[a];
              (this._bookGroupModel.groupMapList[n.group].push(r.type),
                this._bookGroupModel.groupTypeName[n.group] ||
                  (this._bookGroupModel.groupTypeName[n.group] = {}),
                (this._bookGroupModel.groupTypeName[n.group][r.type] = r.name),
                this._bookGroupModel.groupTypeIcon[n.group] ||
                  (this._bookGroupModel.groupTypeIcon[n.group] = {}),
                (this._bookGroupModel.groupTypeIcon[n.group][r.type] = r.icon));
            }
          }
        }),
        (t.prototype.onHandBookPowerInfo = function (e) {
          var t = e.body,
            i = t.proto;
          _.BookGroupModel.bookGroupPower = {};
          for (var o = 0; o < i.infos.length; o++)
            for (var n = i.infos[o], a = 0; a < n.info.length; a++) {
              var r = n.info[a].power,
                s = n.info[a].powerValue;
              (_.BookGroupModel.bookGroupPower[r] ||
                (_.BookGroupModel.bookGroupPower[r] = 0),
                n.info[a].effect && (_.BookGroupModel.bookGroupPower[r] += s));
            }
        }),
        (t.prototype.createBookItemInfo = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, o;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (t = new r.Message(l["default"].CG_HAND_BOOK_ITEM_INFO)),
                    t.putInt(e),
                    [4, this.sendProtoAsync(t)]
                  );
                case 1:
                  return (
                    n.sent(),
                    (i = s["default"].getReceiveMsg()),
                    null == i
                      ? [2]
                      : ((o = new u["default"]()),
                        u["default"].fromBytesAtts2(o, i),
                        [2, o])
                  );
              }
            });
          });
        }),
        (t.prototype.onHandBookRedDot = function (e) {
          var t = e.body,
            i = t.proto;
          this._bookGroupModel.clearRed();
          for (var a = 0; a < i.infos.length; a++) {
            var r = i.infos[a];
            this._bookGroupModel.bookGroupRed[r.group] = r.type;
          }
          o["default"].sendNt(n.BookGroupEvent.bookGroupRed);
        }),
        Object.defineProperty(t.prototype, "bookGroupModel", {
          get: function () {
            return this._bookGroupModel;
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })(a["default"]);
  t["default"] = d;
});
