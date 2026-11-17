(function (e, t, i) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.ModelVo = t.MODEL_TYPE = void 0));
  var o,
    n = i(5),
    a = i(10),
    r = i(20),
    s = i(30),
    l = i(8),
    u = i(4),
    _ = i(12),
    d = i(55),
    p = i(3),
    c = i(26),
    h = i(1),
    f = i(24),
    T = i(2),
    E = i(15),
    y = i(23),
    g = i(90),
    v = i(52),
    S = [8, 10, 15, 18, 20, 25, 30, 35, 50, 60, 65];
  !(function (e) {
    ((e[(e.TYPE_NONE = 0)] = "TYPE_NONE"),
      (e[(e.TYPE_NPC = 1)] = "TYPE_NPC"),
      (e[(e.TYPE_MONSTER = 2)] = "TYPE_MONSTER"),
      (e[(e.TYPE_PLAYER = 3)] = "TYPE_PLAYER"),
      (e[(e.TYPE_PET = 4)] = "TYPE_PET"),
      (e[(e.TYPE_MERCENARY = 5)] = "TYPE_MERCENARY"),
      (e[(e.TYPE_PLAYER_MONSTER = 6)] = "TYPE_PLAYER_MONSTER"),
      (e[(e.TYPE_PET_MONSTER = 7)] = "TYPE_PET_MONSTER"),
      (e[(e.TYPE_PLAYER_COMPETE = 8)] = "TYPE_PLAYER_COMPETE"),
      (e[(e.TYPE_COMPETE_PET = 9)] = "TYPE_COMPETE_PET"),
      (e[(e.TYPE_LEGION = 10)] = "TYPE_LEGION"),
      (e[(e.TYPE_BUDDY = 11)] = "TYPE_BUDDY"));
  })((o = t.MODEL_TYPE || (t.MODEL_TYPE = {})));
  var I = (function (e) {
    function t(i, n) {
      var a = e.call(this) || this;
      return (
        (a._isMyPlayer = !1),
        (a.controlList = []),
        (a.intValue1 = 0),
        (a.type = o.TYPE_NONE),
        (a._name = ""),
        (a.info = ""),
        (a.title = ""),
        (a.shopName = ""),
        (a.level = 0),
        (a.icon1 = new Long(0, 0)),
        (a.icon2 = new Long(0, 0)),
        (a.icon3 = new Long(0, 0)),
        (a.status = _.ModelConst.STATUS_NONE),
        (a.mode = _.ModelConst.MODE_NORMAL),
        (a.countryId = -1),
        (a.countryName = ""),
        (a.countryRank = -1),
        (a.level2 = 0),
        (a.iconpet1 = 0),
        (a.isServerTeam = !0),
        (a.isServerTeam_2 = !1),
        (a.lastMoveBeginIndex = 0),
        (a.leaderID = -1),
        (a.miniDir = t.DIR_RIGHT),
        (a.dir = t.DIR_RIGHT),
        void 0 != n
          ? ((a.id = i), (a.name = n), (a.type = o.TYPE_PLAYER))
          : (a.type = i),
        a
      );
    }
    return (
      __extends(t, e),
      (t.prototype.getPetIcon = function () {
        return this.PetHeadIcon;
      }),
      Object.defineProperty(t.prototype, "icon", {
        get: function () {
          return this._icon;
        },
        set: function (e) {
          this._icon = e;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "bagIcon", {
        get: function () {
          return this._bagIcon;
        },
        set: function (e) {
          this._bagIcon = e;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.onAttrUpdate = function (e) {
        this.isMyPlayer &&
          p["default"].sendNt(T.MainEvent.ON_PLAYER_ATTR_UPDATE, e);
      }),
      Object.defineProperty(t.prototype, "isMyPlayer", {
        get: function () {
          return this._isMyPlayer;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.setMyPlayer = function () {
        this._isMyPlayer = !0;
      }),
      (t.prototype.clearCountry = function () {
        ((this.countryId = -1),
          (this.countryName = ""),
          (this.countryRank = -1));
      }),
      (t.prototype.getMerList = function () {
        return this.merList;
      }),
      Object.defineProperty(t.prototype, "isMercenary", {
        get: function () {
          return this.merList && this.merList.length ? !0 : void 0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.getMercenaryById = function (e) {
        if (null == this.merList) return null;
        for (var t = 0; t < this.merList.length; t++) {
          var i = this.merList[t];
          if (null != i && i.type == o.TYPE_MERCENARY && i.groupId == e)
            return i;
        }
        return null;
      }),
      (t.prototype.addMercenary = function (e, t) {
        if ((void 0 === t && (t = !1), null == e)) return !1;
        if (e.type != o.TYPE_MERCENARY) return !1;
        var i = this.merList;
        if (null == i)
          i = this.merList = new Array(_.ModelConst.MAX_MERCENARY_MEMBER);
        else
          for (var n = 0, a = this.merList; n < a.length; n++) {
            var r = a[n];
            if (r && r.groupId == e.groupId) {
              this.removeMercenary(r);
              break;
            }
          }
        for (var s = 0, l = 0; l < i.length; l++)
          if (null == i[l]) {
            s = l;
            break;
          }
        return 0 == this.addMember(e)
          ? !1
          : ((i[s] = e),
            (e.ownerid = this.id),
            e.setPosition(this.x, this.y),
            t && p["default"].sendNt(c.SceneEvent.ON_MER_ADD, e),
            !0);
      }),
      (t.prototype.removeMercenary = function (e) {
        if (null == e) return !1;
        if (e.type != o.TYPE_MERCENARY) return !1;
        if (null == this.merList) return !1;
        for (var t = 0; t < this.merList.length; t++) {
          var i = this.merList[t];
          if (null != i && i.type == e.type && i.groupId == e.groupId)
            return (
              this.removeMercenaryByGroupoID(i.groupId),
              (this.merList[t] = null),
              p["default"].sendNt(c.SceneEvent.ON_MER_DEL, i),
              !0
            );
        }
        return !1;
      }),
      (t.prototype.clearMercenary = function () {
        if (!(null == this.merList || this.merList.length < 0)) {
          if (null != this.members && this.members.size() > 0)
            for (var e = this.members.size() - 1; e >= 0; e--) {
              var t = this.members.elementAt(e);
              (null == t || t.getType() == o.TYPE_MERCENARY) &&
                this.removeMercenary(t);
            }
          this.merList = null;
        }
      }),
      (t.prototype.setPet = function (e, t) {
        if ((void 0 === t && (t = !1), !e))
          return (
            (this.pet = null),
            void p["default"].sendNt(c.SceneEvent.ON_PET_DEL, this.id)
          );
        (this.setTabStatus(!1, _.ModelConst.PET_INNER_SHOW),
          (this.pet = e),
          (e.follower = this.id));
        var i = d.SpriteTool.getPetStyle(e);
        switch (i) {
          case 3:
          case 13:
          case 4:
          case 17:
          case 7:
          case 26:
            this.setTabStatus(!0, _.ModelConst.PET_INNER_SHOW);
        }
        t && p["default"].sendNt(c.SceneEvent.ON_PET_ADD, e);
      }),
      (t.prototype.getPet = function () {
        return this.pet;
      }),
      Object.defineProperty(t.prototype, "buddys", {
        get: function () {
          return this._buddys;
        },
        set: function (e) {
          this._buddys = e;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.checkIsHasLegionVo = function (e) {
        return this.legionList.indexOf(e) >= 0;
      }),
      (t.prototype.checkIsHasLegionTem = function () {
        return null != this.legionList && this.legionList.length > 0;
      }),
      (t.prototype.addLegionVo = function (e, t) {
        return (
          void 0 === t && (t = !1),
          null == e
            ? !1
            : e.type != o.TYPE_LEGION
              ? !1
              : 0 == this.addMember(e)
                ? !1
                : (this.legionList || (this.legionList = []),
                  this.legionList.push(e),
                  (e.ownerid = this.id),
                  e.setPosition(this.x, this.y),
                  t && p["default"].sendNt(c.SceneEvent.ON_LEGION_ADD, e),
                  !0)
        );
      }),
      (t.prototype.removeLegionVo = function (e) {
        if (null == e) return !1;
        if (e.type != o.TYPE_LEGION) return !1;
        if (null == this.legionList) return !1;
        var t = this.legionList.indexOf(e);
        return (
          t >= 0 &&
            ((e = this.legionList.splice(t, 1)[0]),
            this.removeMember(e.id, o.TYPE_LEGION),
            p["default"].sendNt(c.SceneEvent.ON_LEGION_DEL, e)),
          !0
        );
      }),
      (t.prototype.clearLegionList = function () {
        if (this.legionList) {
          if (null != this.members && this.members.size() > 0)
            for (var e = this.members.size() - 1; e >= 0; e--) {
              var t = this.members.elementAt(e);
              (null == t || t.getType() == o.TYPE_LEGION) &&
                this.removeLegionVo(t);
            }
          null == this.legionList;
        }
      }),
      (t.prototype.getLeaderID = function () {
        return this.leaderID;
      }),
      (t.prototype.setLeaderID = function (e) {
        this.leaderID = e;
      }),
      (t.prototype.getMembers = function () {
        return this.members;
      }),
      (t.prototype.isLeader = function () {
        return this.leaderID == this.id;
      }),
      (t.prototype.isInTeam = function () {
        return this.leaderID > 0;
      }),
      (t.prototype.isMember = function () {
        return this.isInTeam() && 0 == this.isLeader();
      }),
      (t.prototype.isPlayerLeader = function () {
        return this.isLeader() && this.isHasPlayerMember();
      }),
      (t.isSameTeam = function (e, t) {
        return null == e || null == t
          ? !1
          : e.leaderID <= 0 || t.leaderID <= 0
            ? !1
            : e.leaderID != t.leaderID
              ? !1
              : !0;
      }),
      (t.prototype.getMemberById = function (e) {
        if (null == this.members || this.members.size() <= 0) return !1;
        for (var t = 0; t < this.members.size(); t++) {
          var i = this.members.elementAt(t);
          if (i.getType() == o.TYPE_PLAYER && i.id == e) return !0;
        }
        return !1;
      }),
      (t.prototype.addMember = function (e) {
        if (null == e) return !1;
        if (
          (e.type == o.TYPE_PLAYER,
          e.type == o.TYPE_PLAYER && e.getId() == this.getId())
        )
          return !1;
        var t = !1;
        if (null != this.members)
          for (var i = 0; i < this.members.size(); i++) {
            var n = this.members.elementAt(i);
            if (
              null != n &&
              n.type == e.type &&
              ((e.type == o.TYPE_PLAYER && n.getId() == e.getId()) ||
                (e.type == o.TYPE_MERCENARY && n.groupId == e.groupId))
            ) {
              t = !0;
              break;
            }
          }
        return (
          1 == t &&
            (e.type == o.TYPE_PLAYER
              ? this.removeMember(e.getId())
              : e.type == o.TYPE_MERCENARY &&
                this.removeMercenaryByGroupoID(e.groupId)),
          null == this.members && (this.members = new f["default"]()),
          this.leaderID <= 0 && this.setLeaderID(this.id),
          e.setLeaderID(this.id),
          (e.follower = this.id),
          this.members.addElement(e),
          this.initFollowPos(),
          this.isTwoPeopleHouse() &&
            this.getSex() != e.getSex() &&
            e.type == o.TYPE_PLAYER &&
            (null == this.playerSprite ||
              this.playerSprite != d.SprConst.HOUSE_TWO_PEOPLE_SPRITE ||
              this.playerSprite != d.SprConst.CAR_TWO_PEOPLE_SPRITE) &&
            this.refreshWorldSprite(),
          e.type == o.TYPE_PLAYER &&
            p["default"].sendNt(c.SceneEvent.UPDATE_MODLE, this),
          !0
        );
      }),
      (t.prototype.initFollowPos = function () {
        var e = this.pet,
          t = this.px,
          i = this.py;
        null != e && e.setWorldPos(t, i);
        var o = this.members;
        if (null != o)
          for (var n = 0; n < o.size(); n++) {
            var a = o.elementAt(n);
            null != a &&
              (a.setWorldPos(t, i),
              null != a.pet && a.pet.setWorldPos(a.px, a.py));
          }
      }),
      (t.prototype.removeMercenaryByGroupoID = function (e) {
        return this.removeMember(e, o.TYPE_MERCENARY);
      }),
      (t.prototype.removeMember = function (e, t) {
        if (
          (void 0 === t && (t = o.TYPE_PLAYER),
          1 == this.isMember() && t == o.TYPE_PLAYER)
        )
          return !1;
        if (null != this.members)
          for (var i = 0; i < this.members.size(); i++) {
            var n = this.members.elementAt(i);
            if (null != n && n.type == t) {
              var a = 0;
              if (
                (n.type == o.TYPE_PLAYER
                  ? (a = n.id)
                  : n.type == o.TYPE_MERCENARY
                    ? (a = n.groupId)
                    : n.type == o.TYPE_LEGION && (a = n.id),
                a == e)
              ) {
                (this.members.removeElement(n),
                  n.type == o.TYPE_PLAYER && n.setLeaderID(n.id),
                  n.clearMember(),
                  this.initFollowPos(),
                  1 != this.isTwoPeopleHouse() ||
                    (n.type != o.TYPE_PLAYER && n.type != o.TYPE_LEGION) ||
                    this.refreshWorldSprite());
                break;
              }
            }
          }
        return (
          (null == this.members || this.members.size() <= 0) &&
            this.clearMember(),
          !0
        );
      }),
      (t.prototype.ignoreMember = function () {
        (this.setLeaderID(this.id), this.clearMember());
      }),
      (t.prototype.clearMember = function () {
        var e = !1;
        if (
          (this.isVisible() || (e = !0),
          this.setTabStatus(!1, _.ModelConst.HIDE_SPIRTE),
          null != this.members && this.members.size() > 0)
        )
          for (var t = this.members.size() - 1; t >= 0; t--) {
            var i = this.members.elementAt(t);
            null != i
              ? (i.getType() != o.TYPE_MERCENARY ||
                  null == this.getMercenaryById(i.groupId)) &&
                ((i.getType() == o.TYPE_LEGION && this.checkIsHasLegionVo(i)) ||
                  ((i.follower = null), this.members.removeElement(i)))
              : this.members.removeElement(i);
          }
        (null == this.members || this.members.size() <= 0
          ? ((this.members = null),
            this.getLeaderID() == this.id &&
              (this.setLeaderID(-1),
              this.cleanLastMove(),
              (this.follower = null)))
          : this.getLeaderID() == this.id && (this.follower = null),
          this.refreshWorldSprite(),
          this.type == o.TYPE_PLAYER &&
            p["default"].sendNt(c.SceneEvent.UPDATE_MODLE, this));
      }),
      (t.prototype.isFollower = function () {
        return null != this.follower;
      }),
      (t.prototype.getLastMove = function () {
        return 0 == this.isTabStatus(_.ModelConst.LAST_MOVE_FILL)
          ? null
          : null == this.lastMove
            ? null
            : this.lastMove[this.lastMoveBeginIndex];
      }),
      (t.prototype.saveLastMove = function (e, t) {
        if (null == this.lastMove) {
          this.lastMove = [];
          for (var i = 5; i;) (i--, this.lastMove.push([]));
        }
        ((this.lastMove[this.lastMoveBeginIndex][0] = e),
          (this.lastMove[this.lastMoveBeginIndex][1] = t),
          (this.lastMoveBeginIndex =
            (this.lastMoveBeginIndex + 1) % this.lastMove.length),
          0 == this.lastMoveBeginIndex &&
            this.setTabStatus(!0, _.ModelConst.LAST_MOVE_FILL));
      }),
      (t.prototype.cleanLastMove = function () {
        if (
          (this.setTabStatus(!1, _.ModelConst.LAST_MOVE_FILL),
          (this.lastMoveBeginIndex = 0),
          null != this.lastMove)
        )
          for (var e = 0; e < this.lastMove.length; e++)
            this.lastMove[e][0] = this.lastMove[e][1] = 0;
      }),
      (t.fromBytes = function (e, t) {
        (t.setVipLevel2(e.getByte()),
          t.setId(e.getInt()),
          t.setName(e.getString()),
          t.setInfo(e.getString()),
          t.setTitle(e.getString()),
          t.setLevel(e.getByte()),
          t.setLevel2(e.getByte()),
          t.setIcon1(e.getLong()),
          t.setIcon2(e.getLong()),
          t.setIcon3(e.getLong()),
          t.setSetting(e.getInt()),
          t.setStatus(e.getInt()),
          t.setMode(e.getByte()),
          t.isShopMode() &&
            ((t.shopName = e.getString()), t.setShoptype(e.getByte())));
        var i = e.getInt();
        (t.setCountryId(i),
          i >= 0 &&
            (t.setCountryName(e.getString()), t.setCountryRank(e.getByte())),
          t.setPosition(e.getByte(), e.getByte()),
          (t.vipLevel = e.getByte()));
      }),
      (t.prototype.isHasPhoto = function () {
        return this.isStatusBit(_.ModelConst.STATUS_IS_PHOTO);
      }),
      (t.prototype.isHasCard = function () {
        return this.isStatusBit(_.ModelConst.STATUS_IS_CARD);
      }),
      (t.prototype.isHasCity = function () {
        return this.isStatusBit(_.ModelConst.STATUS_IS_CITY);
      }),
      (t.prototype.isTourist = function () {
        return this.isStatusBit(_.ModelConst.STATUS_IS_TOURIST);
      }),
      (t.prototype.isRobot = function () {
        return this.isStatusBit(_.ModelConst.STATUS_IS_ROBOT);
      }),
      (t.prototype.setType = function (e) {
        this.type = e;
      }),
      (t.prototype.getType = function () {
        return this.type;
      }),
      (t.isLongTrouses = function (e) {
        return e >= 52;
      }),
      (t.setHandAndFeet = function (e) {
        var t = 1,
          i = 1;
        return (
          (e.low |=
            (t & _.ModelConst.LEN_HAND_STYLE) <<
            _.ModelConst.OFFSET_HAND_STYLE),
          (e.low |=
            (i & _.ModelConst.LEN_FEET_STYLE) <<
            _.ModelConst.OFFSET_FEET_STYLE),
          e
        );
      }),
      (t.prototype.addValue = function (e, t) {
        switch (((t = 0 | t), e)) {
          case _.ModelConst.LEVEL:
            if (t > 0) {
              var i = l.Tool.sumValue(this.level, t, 0, 120);
              this.setLevel(i);
            }
            break;
          case _.ModelConst.LEVEL2:
            t > 0 &&
              ((this.level2 = l.Tool.sumValue(this.level2, t, 0, 120)),
              this.onAttrUpdate(e));
            break;
          case _.ModelConst.ENCHANTVALUE:
            this.enchantValue += t;
            break;
          case _.ModelConst.COUNTRY_RANK_SET:
            this.countryRank = t;
            break;
          case _.ModelConst.COUNTRY_ID_SET:
            this.countryId = t;
            break;
          case _.ModelConst.STATUS_SET:
            this.status = t;
        }
        this.onAttrUpdate(e);
      }),
      (t.prototype.get = function (e) {
        switch (e) {
          case _.ModelConst.ID:
            return this.id;
          case _.ModelConst.SEX:
            return this.sex;
          case _.ModelConst.RACE:
            return this.race;
          case _.ModelConst.JOB:
            return this.job;
          case _.ModelConst.LEVEL:
            return this.level;
          case _.ModelConst.LEVEL2:
            return this.level2;
          case _.ModelConst.SETTING:
            return this.setting;
          case _.ModelConst.STATUS:
            return this.status;
          case _.ModelConst.COUNTRY_ID:
            return this.countryId;
          case _.ModelConst.COUNTRY_RANK:
            return this.countryRank;
          case _.ModelConst.PX:
            return this.px;
          case _.ModelConst.PY:
            return this.py;
        }
        return 0;
      }),
      (t.prototype.getDir = function () {
        return this.dir;
      }),
      (t.prototype.setDir = function (e) {
        switch (((this.miniDir = e), e)) {
          case t.DIR_RIGHT:
          case t.DIR_LEFT:
          case t.DIR_DOWN:
          case t.DIR_UP:
          case t.DIR_NONE:
            this.dir = e;
            break;
          case t.DIR_LEFT_UP:
          case t.DIR_LEFT_DOWN:
            this.dir = t.DIR_LEFT;
            break;
          case t.DIR_RIGHT_UP:
          case t.DIR_RIGHT_DOWN:
            this.dir = t.DIR_RIGHT;
        }
      }),
      (t.prototype.setPosition = function (e, t) {
        ((this.x = e), (this.y = t));
      }),
      (t.prototype.setWorldPos = function (e, t) {
        ((this.px = e), (this.py = t));
      }),
      (t.prototype.getGx = function () {
        return this.x;
      }),
      (t.prototype.getGy = function () {
        return this.y;
      }),
      (t.prototype.getPx = function () {
        return this.px;
      }),
      (t.prototype.getPy = function () {
        return this.py;
      }),
      (t.prototype.isShopMode = function () {
        return this.mode == _.ModelConst.MODE_SHOP;
      }),
      (t.prototype.setShopMode = function (e) {
        this.setMode(e ? _.ModelConst.MODE_SHOP : _.ModelConst.MODE_NORMAL);
      }),
      (t.prototype.setId = function (e) {
        this.id = e;
      }),
      (t.prototype.getId = function () {
        return this.id;
      }),
      (t.prototype.getClientUid = function (e) {
        var t = u["default"].getAreaID(
          this.id,
          n["default"].isLoginSetting(n["default"].IS_ZONE),
        );
        return (1 == e && (t = "(ID:" + t + ")"), t);
      }),
      Object.defineProperty(t.prototype, "name", {
        get: function () {
          return this._name;
        },
        set: function (e) {
          ((this._name = e),
            p["default"].sendNt(c.SceneEvent.ON_PLAYER_NAME_UPDATE, this.id));
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.setName = function (e) {
        this.name = e;
      }),
      (t.prototype.getName = function () {
        return this._name;
      }),
      (t.prototype.setInfo = function (e) {
        this.info = e;
      }),
      (t.prototype.getInfo = function () {
        return this.info;
      }),
      (t.prototype.setTitle = function (e) {
        ((this.title = e),
          p["default"].sendNt(c.SceneEvent.ON_PLAYER_NAME_UPDATE, this.id));
      }),
      (t.prototype.getTitle = function () {
        return this.title;
      }),
      (t.prototype.isGetSexRaceJobByIcon = function () {
        return this.type != o.TYPE_PLAYER ||
          this.id == n["default"].getPlayerID() ||
          this.icon1.isZero()
          ? !1
          : !0;
      }),
      (t.prototype.setSex = function (e) {
        this.sex = e;
      }),
      (t.prototype.getSex = function () {
        return 1 == this.isGetSexRaceJobByIcon()
          ? (this.icon1.toNumber() >> _.ModelConst.OFFSET_SEX) &
              _.ModelConst.LEN_SEX
          : this.sex;
      }),
      (t.prototype.setRace = function (e) {
        this.race = e;
      }),
      (t.prototype.getRace = function () {
        return 1 == this.isGetSexRaceJobByIcon()
          ? (this.icon1.toNumber() >> _.ModelConst.OFFSET_RACE) &
              _.ModelConst.LEN_RACE
          : this.race;
      }),
      (t.prototype.setJob = function (e) {
        this.job = e;
      }),
      (t.prototype.getJob = function () {
        return 1 == this.isGetSexRaceJobByIcon()
          ? (this.icon1.toNumber() >> _.ModelConst.OFFSET_JOB) &
              _.ModelConst.LEN_JOB
          : this.job;
      }),
      (t.prototype.setLevel = function (e) {
        var t = this.level;
        if (((this.level = e), go.isHKTNative && this.isMyPlayer && gs.report))
          for (var i = 0; i < S.length; ++i) {
            var o = S[i];
            t >= o || (e > o && gs.report(v.REPORT_TYPE.RoleLevelUp, o));
          }
        this.onAttrUpdate(_.ModelConst.LEVEL);
      }),
      (t.prototype.getLevel = function () {
        return this.level;
      }),
      (t.prototype.setLevel2 = function (e) {
        this.level2 = e;
      }),
      (t.prototype.getLevel2 = function () {
        return this.level2;
      }),
      (t.prototype.getRemark = function () {
        return this.remark;
      }),
      (t.prototype.setRemark = function (e) {
        this.remark = e;
      }),
      (t.prototype.setIcon1 = function (e) {
        this.icon1 = e;
      }),
      (t.prototype.getIcon1 = function () {
        return (this.icon1 || (this.icon1 = Long.fromNumber(0)), this.icon1);
      }),
      (t.prototype.setIcon2 = function (e) {
        this.icon2 = e;
      }),
      (t.prototype.getIcon2 = function () {
        return (this.icon2 || (this.icon2 = Long.fromNumber(0)), this.icon2);
      }),
      (t.prototype.setIcon3 = function (e) {
        this.icon3 = e;
      }),
      (t.prototype.getIcon3 = function () {
        return (this.icon3 || (this.icon3 = Long.fromNumber(0)), this.icon3);
      }),
      (t.prototype.setSetting = function (e) {
        this.setting = e;
      }),
      (t.prototype.getSetting = function () {
        return this.setting;
      }),
      (t.prototype.setStatus = function (e) {
        this.status = e;
      }),
      (t.prototype.getStatus = function () {
        return this.status;
      }),
      (t.prototype.isStatusBit = function (e) {
        return 0 != (this.status & e);
      }),
      (t.prototype.setStatusBit = function (e) {
        this.status |= e;
      }),
      (t.prototype.clearStatusBit = function (e) {
        this.status &= ~e;
      }),
      (t.prototype.setMode = function (e) {
        ((this.mode = e),
          p["default"].sendNt(c.SceneEvent.ON_MODE_UPDATE, this.id));
      }),
      (t.prototype.getMode = function () {
        return this.mode;
      }),
      (t.prototype.setCountryId = function (e) {
        this.countryId = e;
      }),
      (t.prototype.getCountryId = function () {
        return this.countryId;
      }),
      Object.defineProperty(t.prototype, "isCountry", {
        get: function () {
          return this.countryId > 0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.setCountryName = function (e) {
        this.countryName = e;
      }),
      (t.prototype.getCountryName = function () {
        return this.countryName;
      }),
      (t.prototype.setCountryRank = function (e) {
        this.countryRank = e;
      }),
      (t.prototype.getCountryRank = function () {
        return this.countryRank;
      }),
      (t.prototype.getCountryRankStr = function () {
        var e = u["default"].getRankString(this.countryRank);
        return (
          this.isStatusBit(_.ModelConst.STATUS_IS_SOLDIER)
            ? (e += "(" + a.GameText.STR_MODEL_SOLDIER + ")")
            : this.isStatusBit(_.ModelConst.STATUS_IS_HELP) &&
              (e += "(" + a.GameText.STR_MODEL_HELP + ")"),
          e
        );
      }),
      (t.prototype.setVipLevel = function (e) {
        this.vipLevel = e;
      }),
      (t.prototype.getVipLevel = function () {
        return this.vipLevel;
      }),
      (t.prototype.setVipLevel2 = function (e) {
        e != this.vipLevel2 &&
          ((this.vipLevel2 = e),
          this.onAttrUpdate(_.ModelConst.VIP_LEVEL_2),
          this.isMyPlayer && (go.rolePower = e));
      }),
      (t.prototype.getVipLevel2 = function () {
        return this.vipLevel2;
      }),
      (t.prototype.setSuperQqLevel = function (e) {
        this.superQqLevel = e;
      }),
      (t.prototype.getSuperQqLevel = function () {
        return this.superQqLevel;
      }),
      (t.prototype.setEnchantValue = function (e) {
        this.enchantValue = e;
      }),
      (t.prototype.getEnchantValue = function () {
        return this.enchantValue;
      }),
      (t.prototype.setShoptype = function (e) {
        this.shoptype = e;
      }),
      (t.prototype.getShoptype = function () {
        return this.shoptype;
      }),
      (t.prototype.getIconpet1 = function () {
        return this.iconpet1;
      }),
      (t.prototype.setIconpet1 = function (e) {
        this.iconpet1 = e;
      }),
      (t.prototype.setTabStatus = function (e, t) {
        e ? (this.intValue1 |= t) : (this.intValue1 &= ~t);
      }),
      (t.prototype.isTabStatus = function (e) {
        return 0 != (this.intValue1 & e);
      }),
      (t.prototype.getIntValue1 = function () {
        return this.intValue1;
      }),
      (t.prototype.setIntValue1 = function (e) {
        this.intValue1 = e;
      }),
      (t.prototype.setBattleIntValue = function (e) {
        for (var t = 27; 30 >= t; t++) {
          var i = 1 << t;
          l.Tool.isBit(i, e) ? (this.intValue1 |= i) : (this.intValue1 &= ~i);
        }
      }),
      (t.prototype.refreshPlayerAllSprite = function () {
        if (
          (null != this.pet && this.pet.refreshWorldSprite(),
          this.refreshWorldSprite(),
          null != this.merList)
        )
          for (var e = 0; e < this.merList.length; e++)
            null != this.merList[e] && this.merList[e].refreshWorldSprite();
      }),
      (t.prototype.refreshWorldSprite = function () {
        (this.onAttrUpdate(_.ModelConst.ICON),
          this.isMyPlayer ||
            p["default"].sendNt(c.SceneEvent.ON_PLAYER_ICON_UPDATE, this.id));
      }),
      (t.getMoneyText = function (e) {
        switch (e) {
          case _.ModelConst.MONEY1:
            return a.GameText.STR_MONEY1;
          case _.ModelConst.MONEY2:
            return a.GameText.STR_MONEY2;
          case _.ModelConst.MONEY3:
            return a.GameText.STR_MONEY3;
          case u["default"].MONEY1:
            return a.GameText.STR_MONEY1;
          case u["default"].MONEY2:
            return a.GameText.STR_MONEY2;
          case u["default"].MONEY3:
            return a.GameText.STR_MONEY3;
          case u["default"].EXP:
            return a.GameText.STR_USER_EXP;
          case u["default"].ACTIVE:
            return a.GameText.STR_USER_ACTIVE;
          case u["default"].SCORE_TOWER:
            return a.GameText.STR_USER_TOWER;
          case u["default"].RICHMAN_SCORE:
            return a.GameText.STR_USER_RICHMAN;
          case u["default"].TYPE_ENERGY_ESSENCE:
            return a.GameText.ENERGY_ESSENCE;
          case u["default"].TYPE_DEFEND_SCORE:
            return a.GameText.DEFEND_SCORE;
          case u["default"].TYPE_CAMPWAR_SCORE:
            return a.GameText.CAMPWAR_SCORE;
          default:
            var t = g["default"].getSpecialIconData(e);
            if (t) return t.name;
        }
        return a.GameText.STR_MONEY;
      }),
      (t.checkEnoughMoney = function () {}),
      (t.forRecharge = function () {
        h["default"].createChargeUI(0);
      }),
      (t.setPlayerMoney = function (e, t, i, o) {
        if (0 > e || 0 > t || 0 > i) return !1;
        var u = n["default"].myPlayer;
        if (null == u) return !1;
        null == o && (o = new s["default"]());
        var d = e - u.get(_.ModelConst.MONEY1),
          p = t - u.get(_.ModelConst.MONEY2),
          c = i - u.get(_.ModelConst.MONEY3);
        return (
          0 > d
            ? o.append(
                a.GameText.STR_DEDUCT +
                  r["default"].makeColorString(
                    a.GameText.STR_MONEY1 + -d,
                    l.Tool.COLOR_YELLOW,
                  ) +
                  "\n",
              )
            : d > 0 &&
              o.append(
                a.GameText.STR_ADD +
                  r["default"].makeColorString(
                    a.GameText.STR_MONEY1 + d,
                    l.Tool.COLOR_YELLOW,
                  ) +
                  "\n",
              ),
          0 > p
            ? o.append(
                a.GameText.STR_DEDUCT +
                  r["default"].makeColorString(
                    a.GameText.STR_MONEY2 + -p,
                    l.Tool.COLOR_MONEY2,
                  ) +
                  "\n",
              )
            : p > 0 &&
              o.append(
                a.GameText.STR_ADD +
                  r["default"].makeColorString(
                    a.GameText.STR_MONEY2 + p,
                    l.Tool.COLOR_MONEY2,
                  ) +
                  "\n",
              ),
          0 > c
            ? o.append(
                a.GameText.STR_DEDUCT +
                  r["default"].makeColorString(
                    a.GameText.STR_MONEY3 + -c,
                    l.Tool.COLOR_MONEY3,
                  ) +
                  "\n",
              )
            : c > 0 &&
              o.append(
                a.GameText.STR_ADD +
                  r["default"].makeColorString(
                    a.GameText.STR_MONEY3 + c,
                    l.Tool.COLOR_MONEY3,
                  ) +
                  "\n",
              ),
          (u.money1 = e),
          (u.money2 = t),
          (u.money3 = i),
          !0
        );
      }),
      (t.getInitegral = function (e, t) {
        var i = 0;
        switch (t) {
          case u["default"].SKYARENA:
          case u["default"].ARENA:
            if (((i = n["default"].myPlayer.getPoint(t)), e > i)) {
              var o = new s["default"]();
              (o.append(
                l.Tool.manageStringList(
                  a.GameText.STR_MODEL_MONEY_NOT_ENOUGHT,
                  [a.GameText.STR_SKY_ATTR_ARENA, e + ""],
                ) +
                  l.Tool.manageString(a.GameText.STR_MODEL_MONEY_HAVE, i + ""),
              ),
                h["default"].alertMessage(
                  o.toString(),
                  a.GameText.STR_EGRAL_SKYARENA_NOTENOUGH,
                  null,
                ));
            }
        }
        return i >= e;
      }),
      (t.prototype.clearData = function () {
        if (this.isMyPlayer) return !1;
        var e = n["default"].getModel(this.id);
        return e && e.hashCode == this.hashCode
          ? !1
          : ((this.pet = null),
            (this.members = null),
            (this.merList = null),
            (this.legionList = null),
            !0);
      }),
      (t.getPlayerMaxVIP = function () {
        return this.maxVIP;
      }),
      (t.prototype.isTwoPeopleHouse = function () {
        var e = d.SpriteTool.getTransportStyle(this.icon3);
        return d.SpriteTool.isTwoPeopleStyle(e);
      }),
      (t.prototype.isVisible = function () {
        return !this.isTabStatus(_.ModelConst.HIDE_SPIRTE);
      }),
      (t.prototype.clearMemberHideStatus = function () {
        if (0 != this.isLeader()) {
          var e = this.members && this.members.arr;
          if (null != e)
            for (var t = 0; t < e.length; t++) {
              var i = e[t];
              null != i &&
                i.isTabStatus(_.ModelConst.HIDE_SPIRTE) &&
                (i.setTabStatus(!1, _.ModelConst.HIDE_SPIRTE),
                i.refreshWorldSprite());
            }
        }
      }),
      (t.prototype.isHasPlayerMember = function () {
        if (this.members)
          for (var e = 0; e < this.members.length; e++) {
            var t = this.members.elementAt(e);
            if (null != t && t.type == o.TYPE_PLAYER) return !0;
          }
        return !1;
      }),
      (t.prototype.isPlayerTeam = function () {
        return 0 == this.isInTeam()
          ? !1
          : this.isLeader() && !this.isHasPlayerMember()
            ? !1
            : !0;
      }),
      (t.prototype.isSettingBit = function (e) {
        return 0 != (this.setting & e);
      }),
      (t.prototype.setSettingBit = function (e) {
        this.setting |= e;
      }),
      (t.prototype.clearSettingBit = function (e) {
        this.setting &= ~e;
      }),
      (t.prototype.isMaster = function () {
        return this.masterFlag == u["default"].MASTER_FLAG_MASTER;
      }),
      (t.prototype.isBattleRemote = function () {
        return (
          this.mode == _.ModelConst.MODE_BATTLE_REMOTE ||
          this.mode == _.ModelConst.MODE_BATTLE_PK
        );
      }),
      (t.prototype.getModelString = function () {
        var e = new s["default"]();
        switch (
          (this.isPlayerTeam() &&
            (this.isLeader()
              ? e.append("(" + a.GameText.STR_LEADER + ")")
              : this.isMember() && e.append("(" + a.GameText.STR_MEMBER + ")")),
          this.getMode())
        ) {
          case _.ModelConst.MODE_SHOP:
            u["default"].PLAYER_SHOP_TYPE_ENCHANT == this.getShoptype()
              ? e.append(y.GameText2.STR_ENCHANT)
              : u["default"].PLAYER_SHOP_TYPE_NORMAL == this.getShoptype() &&
                e.append(a.GameText.getText(a.GameText.TI_PUT_SHOP));
            break;
          case _.ModelConst.MODE_BATTLE_LOCAL:
          case _.ModelConst.MODE_BATTLE_REMOTE:
            e.append(a.GameText.STR_BATTLE);
            break;
          case _.ModelConst.MODE_BATTLE_PK:
            e.append(a.GameText.getText(a.GameText.TI_PK));
            break;
          case _.ModelConst.MODE_BATTLE_OB:
            e.append(a.GameText.getText(a.GameText.TI_VIEW_BATTLE));
            break;
          case _.ModelConst.MODE_BATTLE_PET_PK:
            e.append(a.GameText.PET_BATTLE_PK);
        }
        return (
          l.Tool.isNullText(e.toString()) && e.append(a.GameText.STR_FREE),
          e.toString()
        );
      }),
      (t.prototype.isBattleMode = function () {
        return this.mode >= _.ModelConst.MODE_BATTLE_LOCAL;
      }),
      (t.prototype.isKing = function () {
        return this.countryRank == u["default"].RANK_KING;
      }),
      (t.prototype.getJobName = function () {
        return u["default"].getJobString(this.getJob());
      }),
      (t.prototype.getOnlineDesc = function () {
        return this.isOnline ? "在线" : "离线";
      }),
      Object.defineProperty(t.prototype, "isOnline", {
        get: function () {
          return this.isStatusBit(_.ModelConst.STATUS_ONLINE);
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.getPetLife = function () {
        if (!this.pet) return !1;
        var e = 0 | Math.floor(this.pet.getPetAge());
        return e > 0;
      }),
      (t.prototype.getPetHave = function () {
        return this.petHave;
      }),
      (t.prototype.getIsReject = function () {
        return this.isReject;
      }),
      (t.prototype.isCanMove = function () {
        return this.isShopMode()
          ? (E.Tips.show(a.GameText.STR_SHOP_CANNOT_MOVE), !1)
          : this.isMember()
            ? (E.Tips.show(a.GameText.MEMBER_CANNOT_MOVE), !1)
            : !n["default"].isEscortStatus();
      }),
      (t.prototype.setDefault = function () {}),
      Object.defineProperty(t.prototype, "isMonster", {
        get: function () {
          return this.type == o.TYPE_MONSTER;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.maxVIP = -1),
      (t.MAX_MERCENARY_MEMBER = 2),
      (t.DIR_RIGHT = 0),
      (t.DIR_LEFT = 1),
      (t.DIR_DOWN = 2),
      (t.DIR_UP = 3),
      (t.DIR_LEFT_UP = 4),
      (t.DIR_LEFT_DOWN = 5),
      (t.DIR_RIGHT_UP = 6),
      (t.DIR_RIGHT_DOWN = 7),
      (t.DIR_NONE = 8),
      (t.DIR_START = t.DIR_RIGHT),
      (t.DIR_END = t.DIR_RIGHT_DOWN),
      (t.DIR_NUM = t.DIR_START + t.DIR_END + 1),
      t
    );
  })(egret.HashObject);
  t.ModelVo = I;
});
