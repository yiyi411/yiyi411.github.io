(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(3),
    n = i(22),
    a = i(54),
    r = i(0),
    s = i(15),
    l = i(1),
    u = i(18),
    _ = i(33),
    d = i(5),
    p = i(135),
    c = i(2),
    h = i(44),
    f = i(13),
    T = i(7),
    E = i(34),
    y = i(11),
    g = i(28),
    v = i(69),
    S = i(193),
    I = i(97),
    m = i(272),
    A = i(35),
    C = i(4),
    P = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        __extends(t, e),
        (t.prototype.setData = function (e) {
          ((this.width = 0), (this.vo = e));
          var t;
          ((t = new eui.Button()), (t.skinName = "CancelBtnSkin"));
          var i = t.labelDisplay;
          ((i.size = 18),
            (t.label = e[0]),
            this.addChild(t),
            t.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this),
            (this.btn = t));
          var o = i.textWidth,
            n = 120;
          (o > n && (n = o + 16), (this.width += n));
          var a = e.length,
            r = n + 8;
          if (a >= 3) {
            var s = e[2],
              l = void 0,
              u = void 0,
              _ = 0;
            a >= 5 && ((u = e[4]), u && (_ = u.length));
            for (var d = 0; s > d; d++) {
              var p = new eui.EditableText();
              ((p.border = !0),
                (p.borderColor = 16777215),
                (l = _ > d ? u[d] : 100),
                (p.width = p.maxWidth = l),
                a >= 4 && ((p.prompt = e[3][d]), (p.promptColor = 0)),
                this.addChild(p),
                (this["input" + d] = p),
                (p.text = this.getLocal(d)));
              var c = p.maxWidth + 8;
              ((p.x = r), (p.y = 10), (r += c), (this.width += c));
            }
          }
          (this.updateBtn(), this.updateTestBtn(), this.addListeners());
        }),
        (t.prototype.addListeners = function () {
          if (this.vo)
            for (var e = this.vo, t = e[2], i = void 0, o = 0; t > o; o++)
              ((i = this["input" + o]),
                this.listen(
                  i,
                  this.onChangeTxt.bind(this, o),
                  egret.Event.CHANGE,
                ));
        }),
        (t.prototype.onChangeTxt = function (e) {
          var t = (this.vo, this["input" + e]);
          t &&
            "autoAddProp" == this.type &&
            ((go.propNum = t.text ? parseInt(t.text) : 0),
            localStorage.setItem("propNum", go.propNum + ""));
        }),
        Object.defineProperty(t.prototype, "type", {
          get: function () {
            return this.vo ? this.vo[1] : void 0;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.onClick = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var e, t, i, n, a, r, l;
            return __generator(this, function (_) {
              switch (_.label) {
                case 0:
                  if (null == this.vo) return [2];
                  if (((e = this.vo[2]), (this.inputLen = e), this.isClient))
                    return (this.dealClient(), [2]);
                  if ("addMythical" != this.vo[1]) return [3, 5];
                  ((t = 50131), (_.label = 1));
                case 1:
                  return 50146 >= t
                    ? ((i = u["default"].createGetGM("additem " + t + " 1")),
                      [4, A["default"].sendProtoAsync(i)])
                    : [3, 4];
                case 2:
                  (_.sent(), (_.label = 3));
                case 3:
                  return (t++, [3, 1]);
                case 4:
                  return (
                    s.Tips.show("成功使用作弊指令"),
                    o["default"].sendNt("DEBUG_SERVER_TIME_UP"),
                    u["default"].createWorldDataMessage(
                      C["default"].REFRESH_DATA_FLAG,
                    ),
                    [2]
                  );
                case 5:
                  if (((n = ""), (n += this.vo[1]), e))
                    for (a = "" != n ? " " : "", r = void 0, l = 0; e > l; l++)
                      ((r = this["input" + l].text),
                        r || (this.vo[5] && (r = this.vo[5][l])),
                        (n += a + r));
                  return (
                    "cleanuserrecord" == n && (n += " 0"),
                    "" != n && (this.saveLocal(), u["default"].sendGM(n)),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.dealClient = function () {
          for (var e = this, t = [], i = 0; i < this.inputLen; i++)
            t.push(this["input" + i].text);
          var T,
            A,
            C = h.GuideModel.ins;
          switch (this.index) {
            case 0:
              var P = void 0,
                R = t[2];
              if ((R && "" != R && (P = JSON.parse(R)), "" == t[0]))
                return void s.Tips.show("请输入模块名称");
              if ("" == t[1]) return void s.Tips.show("请输入面板名称");
              l["default"].showWin(t[0], t[1], P);
              break;
            case 1:
              if ("" == t[0]) return void s.Tips.show("请输入模块名称");
              if ("" == t[1]) return void s.Tips.show("请输入面板名称");
              o["default"].hideView(t[0], t[1]);
              break;
            case 2:
              if ("" == t[0]) return void s.Tips.show("请输入地图id");
              this.gotoMap(
                parseInt(t[0]),
                this.dealTxt(t[1], 10),
                this.dealTxt(t[2], 10),
                this.dealTxt(t[3]),
              );
              break;
            case 3:
              for (
                var O = _["default"].getPagItemVector(d["default"].myPlayer),
                  N = O.size(),
                  M = void 0,
                  L = 0;
                N > L;
                L++
              )
                ((M = O.elementAt(L)),
                  o["default"]
                    .getProxy(r.ModName.Bag, r.ProxyType.Bag)
                    .doSellItemAction_2(M, M.quantity));
              break;
            case 4:
              ((a["default"].ins.isReqBattleUpdate = !this.isReqBattleUpdate),
                this.updateBtn());
              break;
            case 5:
              if ("" == t[0]) return void s.Tips.show("道具名称");
              var w = parseInt(t[1]);
              ((this.model.dropNum = w || 1),
                o["default"].sendNt("debugProp", [t[0], !1]));
              break;
            case 6:
              A = [];
              for (var b = void 0, x = void 0, D = 0; D < C.cfgs.length; D++)
                ((b = C.cfgs[D]),
                  (x = b.id),
                  x && (C.getHasGuide(x) || A.push(b.id)));
              this.sendSaveGuide(A);
              break;
            case 7:
              var B = t[2],
                G = "-1" == B,
                U = "2" == B;
              if ("" == t[0] && !G) return void s.Tips.show("引导id不能为空");
              var k = void 0;
              if (!G)
                try {
                  var V = JSON.parse(t[0]);
                  k = V;
                } catch (H) {
                  return void console.log("json格式错误");
                }
              var F = C.isAllFinish;
              if (F) {
                ((C.isAllFinish = !1), (C.isDataBack = !0));
                for (var Y = C.cfgs.length, L = 0; Y > L; L++) {
                  var W = C.cfgs[L];
                  C.setHasGuideId(W.id);
                }
              }
              var K = parseInt(t[1]),
                j = !1;
              (K && (j = !0),
                B && (A = C.getGroupListByCnf(k, !U, !0, G, j)),
                (A && 0 != A.length) ||
                  (A = !A && k instanceof Array ? k : [k]),
                this.sendSaveGuide(A, j),
                j &&
                  (f.GUtil.dealList2(A, "id", C.cfgs, C.restGuides, !0),
                  F && o["default"].sendNt("guideTest")),
                go.isTest && o["default"].sendNt(c.GuideEvent.GUIDE_CHECK));
              break;
            case 8:
              ((go.isTest = !go.isTest),
                localStorage.setItem("isTest", go.isTest ? "1" : "0"),
                this.updateTestBtn());
              break;
            case 9:
              console.log("自动道具");
              break;
            case 10:
              if ("" == t[0]) return void s.Tips.show("任务类型");
              var q = [
                  { tasks: [664, 744], maps: [251, 24, 22] },
                  { tasks: [1, 335], maps: [22, 12, 8] },
                  { tasks: [809], maps: [914, 13, 7] },
                  { tasks: [392, 397], maps: [813, 15, 11] },
                ],
                i = parseInt(t[0]),
                X = q[i - 1];
              if (X) {
                for (var L = 0; L < X.tasks.length; L++)
                  this.sendStr("finishtask " + X.tasks[L]);
                E.delayCall(
                  y["default"].alloc(this, function () {
                    var t = X.maps;
                    e.gotoMap(t[0], t[1], t[2]);
                  }),
                  1e3,
                );
              }
              break;
            case 11:
              if ("" == t[0]) return void s.Tips.show("道具id");
              o["default"].sendNt("debugProp", [t[0], !0]);
              break;
            case 12:
              if ("" == t[0]) return void s.Tips.show("事件类型");
              (t[1] && "" != t[1] && (P = JSON.parse(t[1])),
                o["default"].sendNt(t[0], P));
              break;
            case 13:
              if (!t[0]) return void s.Tips.show("协议号");
              var z = new n.Message(parseInt(t[0]));
              if (t[1] && "" != t[1]) {
                P = JSON.parse(t[1]);
                var Q = z.proto;
                f.GUtil.updateVo(Q, P);
              }
              u["default"].sendRequest(z);
              break;
            case 14:
              ((go.isTestData = !go.isTestData),
                localStorage.setItem("isTestData", go.isTestData ? "1" : "0"),
                this.updateTestBtn());
              break;
            case 15:
              this.sendPKQACMD(pb.cmd.SET_LEVEL_CONDITION, Number(t[0]));
              break;
            case 16:
              this.sendPKQACMD(pb.cmd.SET_POWER_CONDITION, Number(t[0]));
              break;
            case 17:
              this.sendPKQACMD(pb.cmd.SET_ATK_TIMES, Number(t[0]));
              break;
            case 18:
              this.sendPKQACMD(pb.cmd.SET_DEF_TIMES, Number(t[0]));
              break;
            case 19:
              this.sendPKQACMD(pb.cmd.REMOVE_FIGHT_HISTORY, Number(t[0]));
              break;
            case 20:
              (s.Tips.show("清理功能锁成功"), g["default"].ins.removeButton());
              break;
            case 21:
              ((p.DebugModel.ins.isNotLock = !p.DebugModel.ins.isNotLock),
                this.updateTestBtn());
              break;
            case 22:
              ((v.MainPlayerAi.ins.open = !v.MainPlayerAi.ins.open),
                this.updateTestBtn());
              break;
            case 23:
              ((go.isAllPlatform = !go.isAllPlatform),
                localStorage.setItem(
                  "isAllPlatform",
                  go.isAllPlatform ? "1" : "0",
                ),
                this.updateTestBtn());
              break;
            case 24:
              T = !0;
              for (var J = void 0, $ = void 0, Z = void 0, L = 0; 4 > L; L++)
                (($ = Math.floor(500 * Math.random())),
                  (Z = Math.floor(500 * Math.random())),
                  (J = I.VoUtil.createIntroduceVo(
                    L + 1,
                    m.ViewID.bossAttack,
                    "介绍描述" + (L + 1),
                    Z,
                    50 + $,
                    $ % 2 == 0 ? 1 : 0,
                    L + 1,
                    L + 1,
                  )),
                  S.IntroduceModel.ins.addIntroduce(J));
              S.IntroduceModel.ins.registeUI(m.ViewID.bossAttack);
          }
          (this.saveLocal(), T && this.onClose());
        }),
        (t.prototype.sendStr = function (e) {
          u["default"].sendGM(e);
        }),
        (t.prototype.gotoMap = function (e, t, i, n) {
          var a = o["default"].getProxy(r.ModName.Scene, r.ProxyType.Scene);
          a.createJumpMapMessage(e, t, i, n);
        }),
        (t.prototype.sendSaveGuide = function (e, t) {
          var i = o["default"].getProxy(r.ModName.Guide, r.ProxyType.Guide);
          i.setGuideData(e, t);
        }),
        (t.prototype.updateTestBtn = function () {
          var e,
            t = this;
          if (t.isClient)
            switch (t.index) {
              case 8:
                e = go.isTest ? "取消测试模式" : "测试模式";
                break;
              case 14:
                e = go.isTestData ? "取消测试数据" : "测试数据";
                break;
              case 21:
                e = p.DebugModel.ins.isNotLock ? "取消屏蔽锁" : "屏蔽锁";
                break;
              case 22:
                e = v.MainPlayerAi.ins.open ? "取消挂机" : "挂机";
                break;
              case 23:
                e = go.isAllPlatform ? "设置当前平台" : "设置全平台";
            }
          e && t.btn && (t.btn.label = e);
        }),
        (t.prototype.onClose = function () {
          o["default"].sendNt("debugClose");
        }),
        (t.prototype.updateBtn = function () {
          this.isClient &&
            4 == this.index &&
            this.btn &&
            (this.btn.label = this.isReqBattleUpdate
              ? "后端战场协议"
              : "前端战场协议");
        }),
        Object.defineProperty(t.prototype, "isReqBattleUpdate", {
          get: function () {
            return a["default"].ins.isReqBattleUpdate;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.saveLocal = function () {
          for (var e, t = 0; t < this.inputLen; t++)
            ((e = this.getKey(t)),
              localStorage.setItem(e, this["input" + t].text));
        }),
        (t.prototype.getLocal = function (e) {
          var t = "autoAddProp" == this.type ? "propNum" : this.getKey(e),
            i = localStorage.getItem(t);
          return null != i ? i : "";
        }),
        (t.prototype.getKey = function (e) {
          var t = this.isClient ? "client" : "";
          return (t += "debugItem_" + this.index + "_" + e);
        }),
        (t.prototype.dealTxt = function (e, t) {
          return (void 0 === t && (t = 0), e || t);
        }),
        (t.prototype.dataChanged = function () {
          this.alpha = 0;
        }),
        Object.defineProperty(t.prototype, "model", {
          get: function () {
            return p.DebugModel.ins;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "proxy", {
          get: function () {
            return o["default"].getProxy(r.ModName.Debug, r.ProxyType.Debug);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.sendPKQACMD = function (e, t) {
          var i = o["default"].getProxy(
            r.ModName.CrossServerPK,
            r.ProxyType.CrossServerPK,
          );
          i.doQACMD(e, t);
        }),
        t
      );
    })(T["default"]);
  t["default"] = P;
});
