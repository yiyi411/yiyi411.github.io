(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(17),
    n = i(16),
    a = i(34),
    r = i(11),
    s = i(99),
    l = i(347),
    u = i(58),
    _ = i(348),
    d = i(225),
    p = i(349),
    c = i(132),
    h = (function () {
      function e() {
        ((this._uiShow = !1),
          (this._lastGcT = 0),
          (this._gcInterval = 0),
          (this._errorRetryTimes = u.RETRY_TIME),
          this.init());
      }
      return (
        Object.defineProperty(e, "ins", {
          get: function () {
            return (this._ins || (this._ins = new e()), this._ins);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {
          egret.ImageLoader.crossOrigin = "anonymous";
          var e = this;
          ((e._resMap = Object.create(null)),
            (e._loadingMap = Object.create(null)),
            (e._workingList = []),
            (e._waitingList = []),
            (e._succList = []),
            (e._failList = []),
            (e._groupInfo = Object.create(null)),
            (e._imgTmp = Object.create(null)),
            (e._releaseTime = go.releaseImgTime > 0 ? go.releaseImgTime : 18e3),
            (e._gcInterval = go.gcInterval > 0 ? go.gcInterval : 3e5),
            (e._releaseUITime = 3e3),
            (e._lastCheck = 0),
            (e._lastGcT = n["default"].timer.time),
            go.cdn_url_list &&
              go.cdn_url_list.length > u.RETRY_TIME &&
              (e._errorRetryTimes = go.cdn_url_list.length),
            n["default"].addUpdateItem(e));
        }),
        (e.prototype.loadSheet = function (t) {
          var i = this,
            n = e.SheetData;
          if (!i.exists(n)) return (t.exec(), void o["default"].release(t));
          var a = function (e, o) {
            ((i._resMap[o] = null),
              delete i._resMap[o],
              new l["default"]().start(
                e,
                r["default"].alloc(i, function (e) {
                  p.ResLdr.JsonObj[e.key] = e.value;
                }),
                t,
              ));
          };
          i.load(n, r["default"].alloc(i, a), u.LoadPri.Init);
        }),
        (e.prototype.loadJsonList = function (e, t, i) {
          function n() {
            (t.exec(),
              d++,
              d == p &&
                (i.exec(), o["default"].release(t), o["default"].release(i)));
          }
          function s(e, t) {
            var i = _._resMap[t];
            (new l["default"]().start(
              i,
              r["default"].alloc(_, function (e) {
                e.key.indexOf("assets/") > -1
                  ? _.addJsonRes(e.key, e.value)
                  : ((_._resMap[e.key] = e.value), _.addRef(e.key));
              }),
              r["default"].alloc(_, n),
            ),
              a.delayCall(
                r["default"].alloc(_, function () {
                  return _.unload(t);
                }),
              ));
          }
          if (e && e.length) {
            var _ = this,
              d = 0,
              p = e.length;
            _.loadGroup(e, null, u.LoadPri.Init, r["default"].alloc(_, s));
          }
        }),
        (e.prototype.getRealUrl = function (e, t) {
          if (e.indexOf("://") > -1 && e.indexOf(go.cdn_url) < 0) return e;
          if (
            (/^assets\/\w{2,}\/\w{32}\.\w+$/.test(e) ||
              /^assets\/\w{2,5}\/\w{16}\.\w+$/.test(e)) &&
            e.indexOf("png_bg") < 0
          )
            return e;
          var i = this;
          if (
            !i.urlHash ||
            -1 != e.indexOf("gm.json") ||
            e.indexOf("sdk_res") >= 0
          )
            return e;
          var o = e.split("/"),
            n = i.getHashArr(o);
          if (n) {
            var a = n.substr(0, 2);
            return ("ad" === a && (a = "dirad"), "assets/" + a + "/" + n + t);
          }
          return e.indexOf("assets/map/") > -1 &&
            (n = this.getHashArr(o.slice(0, 3)))
            ? ((o[2] = n), o.join("/"))
            : null;
        }),
        (e.prototype.getHashArr = function (e) {
          for (var t = this.urlHash, i = 0, o = e.length; t && o > i;)
            ((t = t[e[i]]), i++);
          return "string" == typeof t ? t : null;
        }),
        (e.prototype.exists = function (e) {
          return this.urlHash ? null !== this.getHashArr(e.split("/")) : !1;
        }),
        (e.prototype.getRes = function (e) {
          var t = p.ResLdr.JsonObj[e];
          return t ? t : this._resMap[e];
        }),
        (e.prototype.setUIShow = function (e) {
          var t = this;
          t._uiShow !== e && ((t._uiShow = e), e && t.checkNow());
        }),
        (e.prototype.getAnimDur = function (e) {
          var t = this.getRes(e + u.MergeCfgType.Json);
          if (!t && ((t = this.getRes(e + u.MergeCfgType.Bin)), !t))
            return null;
          var i = [],
            o = d.MergedBmp,
            n = o.Pos.indexOf("dur");
          if (Array.isArray(t))
            for (var a = 0, r = t.length; r > a; a++) i.push(t[a][n]);
          else if (t instanceof egret.ByteArray) {
            t.position = 0;
            for (var r = t.readShort(), a = 0; r > a; a++)
              ((t.position = o.HeadSize + (o.Pos.length * a + n) * o.Size),
                i.push(t.readShort()));
          }
          return i;
        }),
        (e.prototype.load = function (e, t, i, n) {
          var a = this,
            r = -1,
            s = a.getLoadingItem(e);
          s
            ? (r = a._workingList.indexOf(s))
            : ((s = o["default"].alloc(_["default"])),
              (s.url = e),
              (a._loadingMap[e] = s));
          var l = this._imgTmp[e];
          (l && l.pri > i && (l.pri = i),
            (s.priority = i),
            s.addSucc(t),
            s.addFail(n));
          var u = a.getRes(e);
          return u
            ? void (a._succList.indexOf(e) < 0 && a._succList.push(e))
            : void (r > -1 || a.addToWait(s));
        }),
        (e.prototype.unload = function (e) {
          if (e) {
            var t = this,
              i = t.getLoadingItem(e);
            if (i) {
              if (i.mergedBmp) {
                var n = t.getLoadingItem(i.url + d.ExtPng);
                n && (t.removeWorking(n.url), t.removeProcessing(n.url));
              }
              (t.removeWorking(e), t.removeProcessing(e));
            }
            var a = t._resMap[e];
            (a &&
              (a instanceof d.MergedBmp
                ? o["default"].release(a)
                : a instanceof egret.Texture
                  ? o["default"].release(a)
                  : "function" == typeof a.dispose && a.dispose()),
              (t._resMap[e] = null),
              delete t._resMap[e]);
          }
        }),
        (e.prototype.addJsonRes = function (e, t) {
          p.ResLdr.JsonObj[e] = t;
        }),
        (e.prototype.loadMerge = function (e, t, i, n) {
          var a = u.MergeCfgType.Json,
            s = this,
            l = s.getLoadingItem(e);
          l ||
            ((l = o["default"].alloc(_["default"])),
            (l.url = e),
            (l.priority = i),
            (s._loadingMap[e] = l));
          var p = this._imgTmp[e];
          (p && p.pri > i && (p.pri = i), l.addSucc(t));
          var c = s.getRes(e);
          if (c) s._succList.indexOf(e) < 0 && s._succList.push(e);
          else if (l.mergedBmp) {
            if (l.priority > i) {
              var h = s.getLoadingItem(e + d.ExtPng);
              h && (h.priority = i);
              var f = s.getLoadingItem(e + a);
              (f && (f.priority = i), (l.priority = i));
            }
          } else {
            var T = o["default"].alloc(d.MergedBmp);
            ((l.mergedBmp = T),
              T.init(e, a, i, n),
              this.load(e + d.ExtPng, r["default"].alloc(T, T.imgLoaded), i),
              this.load(e + a, r["default"].alloc(T, T.cfgLoaded), i));
          }
        }),
        (e.prototype.onMergedLoaded = function (e) {
          var t = this,
            i = e.url,
            o = t.getLoadingItem(i);
          o && (o.mergedBmp = null);
          var n = i + d.ExtPng;
          ((t._resMap[n] = null), delete t._resMap[n]);
          var a = i + e.type;
          ((t._resMap[a] = null),
            delete t._resMap[a],
            (t._resMap[i] = e),
            t._succList.indexOf(i) < 0 && t._succList.push(i));
        }),
        (e.prototype.addRef = function (e) {
          if (e) {
            var t = this._imgTmp[e],
              i = n["default"].timer.time;
            t
              ? ((t.count = t.count + 1), (t.time = i))
              : (this._imgTmp[e] = { count: 1, time: i, pri: u.LoadPri.Max });
          }
        }),
        (e.prototype.decRef = function (e) {
          if (e) {
            var t = this._imgTmp[e];
            t && ((t.count = t.count - 1), (t.time = n["default"].timer.time));
          }
        }),
        (e.prototype.checkNow = function () {
          var e = this,
            t = [];
          for (var i in e._imgTmp) {
            var o = e._imgTmp[i];
            o && o.count < 1 && (e.unload(i), t.push(i));
          }
          for (var a = 0, r = t; a < r.length; a++) {
            var i = r[a];
            delete e._imgTmp[i];
          }
          "function" == typeof gg.triggerGC &&
            ((e._lastGcT = n["default"].timer.time), gg.triggerGC());
        }),
        (e.prototype.loadGroup = function (t, i, o, n) {
          var a = e.GroupIdx++;
          this._groupInfo[a] = { urls: t, loaded: [], onComp: i, onProg: n };
          for (var s = 0, l = t; s < l.length; s++) {
            var u = l[s];
            this.load(
              u,
              r["default"].alloc(this, this.onGroupOne),
              o,
              r["default"].alloc(this, this.onGroupFail),
            );
          }
          return a;
        }),
        (e.prototype.loadMergeGroup = function (t, i, o, n) {
          var a = e.GroupIdx++;
          this._groupInfo[a] = { urls: t, loaded: [], onComp: i, onProg: n };
          for (var s = 0, l = t; s < l.length; s++) {
            var u = l[s];
            this.loadMerge(u, r["default"].alloc(this, this.onGroupOne), o);
          }
          return a;
        }),
        (e.prototype.getGroupLoaded = function (e) {
          var t = this._groupInfo[e];
          return t ? t.loaded.length : 0;
        }),
        (e.prototype.onGroupOne = function (e, t) {
          this.progGroup(t);
        }),
        (e.prototype.onGroupFail = function (e) {
          this.progGroup(e);
        }),
        (e.prototype.progGroup = function (e) {
          var t = [],
            i = this.getGroupIdx(e);
          if (0 !== i) {
            var n = this._groupInfo[i];
            (n.loaded.indexOf(e) < 0 && n.loaded.push(e),
              n.onProg && n.onProg.exec([i, e]),
              n.loaded.length === n.urls.length &&
                (n.onComp && n.onComp.exec(i), t.push(i)));
            for (var a = 0, r = t; a < r.length; a++)
              ((i = r[a]),
                (n = this._groupInfo[i]),
                (this._groupInfo[i] = null),
                delete this._groupInfo[i],
                o["default"].release(n.onComp),
                o["default"].release(n.onProg));
          }
        }),
        (e.prototype.getGroupIdx = function (e) {
          for (var t in this._groupInfo) {
            var i = this._groupInfo[t];
            if (i && i.urls.indexOf(e) > -1) return +t;
          }
          return 0;
        }),
        (e.prototype.getLoadingItem = function (e) {
          return this._loadingMap[e];
        }),
        (e.prototype.addToWait = function (e) {
          if (!(this._waitingList.indexOf(e) > -1)) {
            for (var t = this._waitingList, i = 0; i < t.length; i++) {
              var o = t[i];
              if (o.priority > e.priority) break;
            }
            s.ArrayUtil.insertAt(t, i, e);
          }
        }),
        (e.prototype.getIsScene = function (e) {
          return (
            e === u.LoadPri.SceneMain ||
            e === u.LoadPri.SceneMainPet ||
            e === u.LoadPri.Scene ||
            e === u.LoadPri.Map
          );
        }),
        (e.prototype.loadNext = function () {
          for (
            var e = this._waitingList,
              t = this._workingList,
              i = this._uiShow,
              n = 0;
            n < e.length && !(t.length >= u.MAX_LOAD_THREAD);
            n++
          ) {
            var a = e[n],
              r = this.getIsScene(a.priority);
            (i && r && a.type === u.ResType.IMAGE) ||
              (s.ArrayUtil.removeAt(e, n),
              n--,
              t.push(a),
              (a.loader = o["default"].alloc(p.ResLdr)),
              a.loader.load(a.url, a.type));
          }
        }),
        (e.prototype.removeWorking = function (e) {
          var t = this.getLoadingItem(e),
            i = this._workingList.indexOf(t);
          i > -1 && s.ArrayUtil.removeAt(this._workingList, i);
        }),
        (e.prototype.removeProcessing = function (e) {
          var t = this.getLoadingItem(e);
          if (t) {
            var i = this._waitingList.indexOf(t);
            (i > -1 && s.ArrayUtil.removeAt(this._waitingList, i),
              t.mergedBmp &&
                (o["default"].release(t.mergedBmp), (t.mergedBmp = null)),
              t.running ||
                ((this._loadingMap[e] = null),
                delete this._loadingMap[e],
                o["default"].release(t)),
              c["default"].loadCancel(e));
          }
        }),
        (e.prototype.onSucc = function (e, t) {
          var i = this;
          ((i._resMap[e] = t),
            i._succList.indexOf(e) < 0 && i._succList.push(e),
            i.removeWorking(e));
        }),
        (e.prototype.onFail = function (e, t, i, o) {
          var n = this,
            a = n.getLoadingItem(e);
          n.removeWorking(e);
          var r =
            a.priority === u.LoadPri.Init
              ? u.INIT_RETRY_TIME
              : n._errorRetryTimes;
          if (a.errCnt < r) (a.errCnt++, n.addToWait(a));
          else {
            for (var s = !1, l = 0, _ = n._failList; l < _.length; l++) {
              var d = _[l];
              d.url === e && ((s = !0), (d.errMsg = i), (d.errCode = o));
            }
            s ||
              n._failList.push({ url: e, realUrl: t, errMsg: i, errCode: o });
          }
        }),
        (e.prototype.update = function (e) {
          var t = this;
          (t.procSucc(),
            t.procFail(),
            e.time - t._lastCheck > 1e3 &&
              ((t._lastCheck = e.time), t.procRem(e.time)),
            t.procWait(),
            "function" == typeof gg.triggerGC &&
              e.time - t._lastGcT > t._gcInterval &&
              ((t._lastGcT = n["default"].timer.time), gg.triggerGC()),
            t.loadNext());
        }),
        (e.prototype.procWait = function () {
          var e = this,
            t = [];
          for (var i in e._imgTmp) {
            var o = e._imgTmp[i];
            if (o && 0 === o.count) {
              var n = e.getLoadingItem(i);
              if (n) {
                var a = e._waitingList.indexOf(n);
                if (a >= 0) (e.removeProcessing(i), (t[t.length] = i));
                else if (n.mergedBmp) {
                  var r = e.getLoadingItem(n.url + d.ExtPng);
                  if (!r) continue;
                  ((a = e._waitingList.indexOf(r)),
                    a >= 0 &&
                      (e.removeProcessing(r.url),
                      e.removeProcessing(n.url),
                      (t[t.length] = i)));
                }
              }
            }
          }
          for (var s = 0, l = t; s < l.length; s++) {
            var i = l[s];
            delete e._imgTmp[i];
          }
        }),
        (e.prototype.procRem = function (e) {
          var t = this,
            i = [];
          for (var o in t._imgTmp) {
            var n = t._imgTmp[o],
              a = n.pri === u.LoadPri.UI ? t._releaseUITime : t._releaseTime;
            n &&
              n.count < 1 &&
              e - n.time >= a &&
              (t.unload(o), (i[i.length] = o));
          }
          for (var r = 0, s = i; r < s.length; r++) {
            var o = s[r];
            delete t._imgTmp[o];
          }
        }),
        (e.prototype.procSucc = function () {
          for (var e = this, t = 0, i = e._succList; t < i.length; t++) {
            var o = i[t],
              n = e.getRes(o),
              a = e.getLoadingItem(o);
            a && (a.onSucc(n), e.removeProcessing(o));
          }
          e._succList.length = 0;
        }),
        (e.prototype.procFail = function () {
          for (var e = this, t = 0, i = e._failList; t < i.length; t++) {
            var o = i[t];
            o.realUrl
              ? (o.errCode || o.errMsg) &&
                0 !== o.errCode &&
                "time out" !== o.errMsg &&
                console.error(
                  "res load error:",
                  "url:" + o.realUrl,
                  "code:" + o.errCode,
                  "errMsg:" + o.errMsg,
                )
              : console.error("res load error:", "url:" + o.url);
            var n = o.url,
              a = e.getLoadingItem(n);
            a && (a.onFail(), e.removeProcessing(n));
          }
          e._failList.length = 0;
        }),
        (e.SheetData = "assets/data/sheet.json"),
        (e.GroupIdx = 1),
        e
      );
    })();
  t["default"] = h;
});
