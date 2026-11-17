(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.NoticeMdr = void 0));
  var o = i(6),
    n = i(9),
    a = i(449),
    r = i(0),
    s = i(14),
    l = i(21),
    u = i(53),
    _ = (function (e) {
      function t() {
        var t = e.call(this, n.Layer.modal) || this;
        return (
          (t._view = t.mark("_view", a.NoticeView)),
          (t.isEasyHide = !0),
          t
        );
      }
      return (
        __extends(t, e),
        (t.prototype.onShow = function () {
          return __awaiter(this, void 0, void 0, function () {
            var e, t, i, o, a;
            return __generator(this, function (_) {
              switch (_.label) {
                case 0:
                  return (
                    (e = this._view),
                    (e.x = (e.parent.width - e.width) / 2),
                    (e.y = (e.parent.height - e.height) / 2),
                    n.Layer.setModalSpAlpha(0.8),
                    (t = this.getProxy(r.ProxyType.Login)),
                    [4, t.applyNotice()]
                  );
                case 1:
                  return (
                    (i = _.sent()),
                    i &&
                      (this._view.label_notice.textFlow =
                        s["default"].parseHtml(i)),
                    (o = localStorage.getItem(u.LocalStorageKey.loginNotice)),
                    (this.type = o),
                    (a = l["default"].getTimeDay()),
                    (this._view.imgProtoAgree.visible = o == a ? !0 : !1),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.onHide = function () {
          (n.Layer.setModalSpAlpha(), e.prototype.onHide.call(this));
        }),
        (t.prototype.addListeners = function () {
          var e = this;
          (e.listen(e._view.btnClose, e.hide),
            e.listen(e._view.imgAgreeBg, e.onBtnSelect));
        }),
        (t.prototype.onBtnSelect = function () {
          var e = this,
            t = l["default"].getTimeDay();
          (e._view.imgProtoAgree.visible ? (e.type = "0") : (e.type = t),
            (e._view.imgProtoAgree.visible = !e._view.imgProtoAgree.visible),
            localStorage.setItem(u.LocalStorageKey.loginNotice, e.type));
        }),
        t
      );
    })(o["default"]);
  t.NoticeMdr = _;
});
