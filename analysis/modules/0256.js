(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = i(55),
    n = i(12),
    a = i(31),
    r = i(42),
    s = i(56),
    l = (function (e) {
      function t() {
        var t = e.call(this) || this;
        return (t.setType(a.MODEL_TYPE.TYPE_LEGION), t);
      }
      return (
        __extends(t, e),
        (t.fromBytesVo = function (e) {
          var i = new t();
          ((i.legionId = e.getByte()),
            (i.id = e.getInt()),
            (i.icon1 = e.getLong()),
            (i.icon2 = e.getLong()),
            (i.icon3 = e.getLong()));
          var o = r["default"].fromBytesOtherPlayer(e, i);
          return (i.setPet(o), i);
        }),
        (t.prototype.setPet = function (e, t) {
          if ((void 0 === t && (t = !1), !e)) return void (this.pet = null);
          (this.setTabStatus(!1, n.ModelConst.PET_INNER_SHOW),
            (this.pet = e),
            (e.follower = this.id));
          var i = o.SpriteTool.getPetStyle(e);
          switch (i) {
            case 3:
            case 13:
            case 4:
            case 17:
            case 7:
            case 26:
              this.setTabStatus(!0, n.ModelConst.PET_INNER_SHOW);
          }
        }),
        (t.prototype.get = function (t) {
          switch (t) {
            case n.ModelConst.HPMAX:
              return this._hpMax;
            case n.ModelConst.MPMAX:
              return this._mpMax;
          }
          return e.prototype.get.call(this, t);
        }),
        (t.prototype.cloneLegion = function () {
          var e = new t();
          return (
            (e.id = this.id),
            (e.level = this.level),
            (e.name = this.name),
            (e.hp = this.hp),
            (e.mp = this.mp),
            (e.cp = this.cp),
            (e.str = this.str),
            (e.con = this.con),
            (e.agi = this.agi),
            (e.ilt = this.ilt),
            (e.wis = this.wis),
            (e.icon1 = this.icon1),
            (e.icon2 = this.icon2),
            (e.icon3 = this.icon3),
            (e.sex = this.sex),
            (e.race = this.race),
            (e.job = this.job),
            (e.itemSetData = this.itemSetData),
            (e.titlePower1 = this.titlePower1),
            (e.titlePowerValue1 = this.titlePowerValue1),
            (e.titlePower2 = this.titlePower2),
            (e.titlePowerValue2 = this.titlePowerValue2),
            (e.power = this.power),
            (e.powerValue = this.powerValue),
            (e.powerExpireTime = this.powerExpireTime),
            (e.skillList = this.skillList),
            (e.bag = this.bag),
            (e.level2 = this.level2),
            (e.countrypowerValue = this.countrypowerValue),
            (e.keepout_atk_time = this.keepout_atk_time),
            (e.formationList = this.formationList),
            (e.formationSkill = this.formationSkill),
            (e.autoSkillID_Initiative = this.autoSkillID_Initiative),
            (e.iconpet1 = this.iconpet1),
            e
          );
        }),
        t
      );
    })(s["default"]);
  t["default"] = l;
});
