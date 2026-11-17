(function (e, t, i) {
  "use strict";
  var o;
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.CampWarActiveState =
      t.CampWarState =
      t.MonsterGroupType =
      t.ShopItemType =
      t.MapType =
      t.ShopEnterId =
      t.backIcons =
      t.backBase =
      t.BACK_ICONS =
      t.BACK_ICON_BASE =
      t.BACK_ROUND_ICONS =
      t.BACK_ROUND_ICON_BASE =
      t.MOUNT_TYPE =
      t.MODEL_TYPE =
      t.Unit =
      t.P8_SIGN_SUBSCRIPTION_ID =
      t.QQ_SIGN_SUBSCRIPTION_ID =
      t.WX_SIGN_SUBSCRIPTION_ID =
        void 0));
  var n = i(12),
    a = i(20),
    r = i(30),
    s = i(8),
    l = i(13),
    u = i(0),
    _ = i(3),
    d = i(5);
  ((t.WX_SIGN_SUBSCRIPTION_ID = "GSfgNHg_p48YEVV3JDYRPgmfFjBdvpCINhkb6Vm5CWw"),
    (t.QQ_SIGN_SUBSCRIPTION_ID = "be096ac5c512a50d7f5b5fcda841931a"),
    (t.P8_SIGN_SUBSCRIPTION_ID =
      "RgxMves_hfusgeOwp_EFVxmrJI3JxxKF9QG_C61tDwE"));
  var p;
  !(function (e) {
    ((e[(e.second = 1e3)] = "second"),
      (e[(e.minute = 6e4)] = "minute"),
      (e[(e.hour = 36e5)] = "hour"),
      (e[(e.day = 864e5)] = "day"),
      (e[(e.week = 6048e5)] = "week"));
  })((p = t.Unit || (t.Unit = {})));
  var c;
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
  })((c = t.MODEL_TYPE || (t.MODEL_TYPE = {})));
  var h;
  (!(function (e) {
    ((e[(e.TYPE_NONE = 0)] = "TYPE_NONE"),
      (e[(e.TYPE_PET_3V3 = 1)] = "TYPE_PET_3V3"),
      (e[(e.TYPE_PET_5V5 = 2)] = "TYPE_PET_5V5"));
  })((h = t.MOUNT_TYPE || (t.MOUNT_TYPE = {}))),
    (t.BACK_ROUND_ICON_BASE = "common_panel_y0"),
    (t.BACK_ROUND_ICONS = [
      "common_panel_y1",
      "common_panel_y2",
      "common_panel_y3",
      "common_panel_y4",
      "common_panel_y5",
      "common_panel_y6",
    ]),
    (t.BACK_ICON_BASE = "common_panel_ge0"),
    (t.BACK_ICONS = [
      "common_panel_ge1",
      "common_panel_ge2",
      "common_panel_ge3",
      "common_panel_ge4",
      "common_panel_ge5",
      "common_panel_ge6",
    ]),
    (t.backBase = "bb_pic_ka0"),
    (t.backIcons = [
      "bb_pic_ka1",
      "bb_pic_ka2",
      "bb_pic_ka3",
      "bb_pic_ka4",
      "bb_pic_ka5",
      "bb_pic_ka6",
    ]));
  var f = (function () {
    function e() {}
    return (
      (e.getMaxPlayerShow = function () {
        return (
          go.maxRole || (go.maxRole = 20),
          go.isPc ? go.maxRole << 1 : go.maxRole
        );
      }),
      (e.isShowOthers = function (t, i) {
        if (!t || !i) return !1;
        if (t.follower == i.id) return !0;
        if (t.isInTeam() && t.leaderID == i.leaderID) return !0;
        var o = this.getShowOther();
        if (!o) return !1;
        var n = this.getShowFar();
        if (!n) {
          var a = Math.abs(t.x - i.x),
            r = Math.abs(t.y - i.y),
            s = e.SHOW_SIMPLE_PLAYER_GRID;
          if (
            (go.isPc &&
              (s = Math.round(go.gameStage.stageWidth / go.contentWidth) * s),
            a > s || r > s)
          )
            return !1;
        }
        return !0;
      }),
      (e.getCreateHair = function (t, i) {
        switch (t) {
          case e.JOB_RANGER:
            return i == e.SEX_MALE ? 1 : 15;
          case e.JOB_XIUZHEN:
            return i == e.SEX_MALE ? 8 : 3;
          case e.JOB_WARRIOR:
            return i == e.SEX_MALE ? 2 : 1;
          case e.JOB_WIZARD:
            return i == e.SEX_MALE ? 7 : 3;
        }
      }),
      (e.getCreateHairColor = function (t, i) {
        switch (t) {
          case e.JOB_RANGER:
            return i == e.SEX_MALE ? 0 : 1;
          case e.JOB_XIUZHEN:
            return i == e.SEX_MALE ? 3 : 1;
          case e.JOB_WARRIOR:
            return i == e.SEX_MALE ? 1 : 2;
          case e.JOB_WIZARD:
            return (i == e.SEX_MALE, 0);
        }
      }),
      (e.getRelationName = function (t) {
        var i;
        switch (t) {
          case e.RELATION_FRIEND:
            i =
              "暂无任何好友。\n温馨提示:您可在世界频道点击玩家头像添加其为好友。";
            break;
          case e.RELATION_BLACK:
          case e.RELATION_BLACK_FRIEND:
            i =
              "暂无被您加入黑名单的玩家。\n温馨提示:已被您加入黑名单的玩家发言会被您屏蔽，并且无法添加您为好友。如想解除该玩家限制，可在黑名单中移除。";
            break;
          case e.RELATION_MASTER:
          case e.RELATION_PRENTICE:
            i =
              "暂无与您为师徒关系的玩家。您可以到个人城市找到代理市长雷恩了解师徒招募功能。";
            break;
          case e.RELATION_CLOSEFRIEND:
            i =
              "暂无与您互为好友的玩家。\n温馨提示:相互添加为好友的两个玩家可变为密友关系。";
            break;
          case e.RELATION_TUTOR:
            i =
              "该区暂无任何导师。\n温馨提示:导师为正常玩家帮助新手答疑解惑，如果您对游戏了解足够自信，且愿意帮助新手玩家，可联系客服申请。";
            break;
          case e.RELATION_TEMP:
            i =
              "暂无最近与您发起聊天的玩家。\n温馨提示:您与非好友的玩家发起私聊后可在临时功能中重新恢复对话。";
        }
        return i;
      }),
      (e.processWorldPower = function (t, i, o) {
        if (null == t) return !1;
        if (0 >= i) return !1;
        switch (i) {
          case e.POWER_HP:
            return (e.addValuePlayer(t, n.ModelConst.HP, o, !1, -1), !0);
          case e.POWER_HP_PERCENT:
            return (
              e.addValuePlayer(t, n.ModelConst.HP, o, !0, n.ModelConst.HPMAX),
              !0
            );
          case e.POWER_MP:
            return (e.addValuePlayer(t, n.ModelConst.MP, o, !1, -1), !0);
          case e.POWER_MP_PERCENT:
            return (
              e.addValuePlayer(t, n.ModelConst.MP, o, !0, n.ModelConst.MPMAX),
              !0
            );
        }
        return !1;
      }),
      (e.addValuePlayer = function (e, t, i, o, n) {
        if (null != e) {
          e.addValue(t, o ? (i * e.get(n)) / 100 : i);
          var a = e.getPet();
          null != a && a.addValue(t, o ? (i * a.get(n)) / 100 : i);
          var r = e.getMerList();
          if (null != r)
            for (var s = 0; s < r.length; s++) {
              var l = r[s];
              null != l &&
                (l.addValue(t, o ? (i * l.get(n)) / 100 : i),
                (a = l.getPet()),
                null != a && a.addValue(t, o ? (i * a.get(n)) / 100 : i));
            }
          for (
            var d = _["default"].getProxy(u.ModName.Legion, u.ProxyType.Legion),
              p = d.LegionData.getNowActorList(),
              s = 0;
            s < p.length;
            s++
          ) {
            var c = p[s];
            if (null != c) {
              var h = d.playLegionDataMap[c];
              h &&
                (h.addValue(t, o ? (i * h.get(n)) / 100 : i),
                (a = h.getPet()),
                null != a && a.addValue(t, o ? (i * a.get(n)) / 100 : i));
            }
          }
        }
      }),
      (e.getPowerDesc = function (t, i, o, n, l) {
        (void 0 === o && (o = null),
          void 0 === n && (n = 0),
          void 0 === l && (l = !0));
        var u = new r["default"](),
          _ = "",
          d = "";
        (n > 0 ? (d = "(+" + n + ")") : 0 > n && (d = "(" + -n + ")"),
          0 == l && (d = a["default"].makeColorString(d, s.Tool.COLOR_GRAY)));
        var p = i + n,
          c = i + d,
          h = -i + d;
        switch (t) {
          case e.POWER_STR:
            return p >= 0 ? "力量+" + c : "力量" + c;
          case e.POWER_STR_PERCENT:
            return p >= 0 ? "力量+" + c + "%" : "力量" + c + "%";
          case e.POWER_CON:
            return p >= 0 ? "体质+" + c : "体质" + c;
          case e.POWER_CON_PERCENT:
            return p >= 0 ? "体质+" + c + "%" : "体质" + c + "%";
          case e.POWER_AGI:
            return p >= 0 ? "敏捷+" + c : "敏捷" + c;
          case e.POWER_AGI_PERCENT:
            return p >= 0 ? "敏捷+" + c + "%" : "敏捷" + c + "%";
          case e.POWER_ILT:
            return p >= 0 ? "智力+" + c : "智力" + c;
          case e.POWER_ILT_PERCENT:
            return p >= 0 ? "智力+" + c + "%" : "智力" + c + "%";
          case e.POWER_WIS:
            return p >= 0 ? "感知+" + c : "感知" + c;
          case e.POWER_WIS_PERCENT:
            return p >= 0 ? "感知+" + c + "%" : "感知" + c + "%";
          case e.POWER_HPMAX:
            return p >= 0 ? "生命上限+" + c : "生命上限" + c;
          case e.POWER_HPMAX_PERCENT:
            return p >= 0 ? "生命上限+" + c + "%" : "生命上限" + c + "%";
          case e.POWER_MPMAX:
            return p >= 0 ? "法力上限+" + c : "法力上限" + c;
          case e.POWER_MPMAX_PERCENT:
            return p >= 0 ? "法力上限+" + c + "%" : "法力上限" + c + "%";
          case e.POWER_SWORD_PERCENT:
            return p >= 0
              ? "剑类武器伤害、耐久+" + c + "%"
              : "剑类武器伤害、耐久" + c + "%";
          case e.POWER_BLADE_PERCENT:
            return p >= 0
              ? "刀类伤害、耐久+" + c + "%"
              : "刀类伤害、耐久" + c + "%";
          case e.POWER_HEAVY_PERCENT:
            return p >= 0
              ? "重型武器伤害、耐久+" + c + "%"
              : "重型武器伤害、耐久" + c + "%";
          case e.POWER_LANCE_PERCENT:
            return p >= 0
              ? "长柄武器伤害、耐久+" + c + "%"
              : "长柄武器伤害、耐久" + c + "%";
          case e.POWER_STAFF_PERCENT:
            return p >= 0
              ? "法杖武器伤害、耐久+" + c + "%"
              : "法杖武器伤害、耐久" + c + "%";
          case e.POWER_BALL_PERCENT:
            return p >= 0
              ? "法器武器伤害、耐久+" + c + "%"
              : "法器武器伤害、耐久" + c + "%";
          case e.POWER_HAND_PERCENT:
            return p >= 0 ? "空手伤害+" + c + "%" : "空手伤害" + c + "%";
          case e.POWER_BOW_PERCENT:
            return p >= 0
              ? "远程武器伤害、耐久+" + c + "%"
              : "远程武器伤害、耐久" + c + "%";
          case e.POWER_HAND_ITEM_PERCENT:
            return p >= 0
              ? "手持物伤害、耐久+" + c + "%"
              : "手持物伤害、耐久" + c + "%";
          case e.POWER_ALL_PERCENT:
            return p >= 0
              ? "武器伤害、耐久+" + c + "%"
              : "武器伤害、耐久" + c + "%";
          case e.POWER_EQUIP_ARMOR_DUR_PERCENT:
            return p >= 0
              ? "装备防具耐久+" + c + "%"
              : "装备防具耐久" + c + "%";
          case e.POWER_SPEED_PERCENT:
            return p >= 0 ? "出手速度+" + c + "%" : "出手速度" + c + "%";
          case e.POWER_HITRATE_PERCENT:
            return p >= 0 ? "命中率+" + c + "%" : "命中率" + c + "%";
          case e.POWER_DODGE_PERCENT:
            return p >= 0 ? "躲闪 +" + c + "%" : "躲闪 " + c + "%";
          case e.POWER_MAGIC_HITRATE_PERCENT:
            return p >= 0 ? "魔法命中+" + c + "%" : "魔法命中" + c + "%";
          case e.POWER_CRITICAL_PERCENT:
            return p >= 0 ? "致命率+" + c + "%" : "致命率" + c + "%";
          case e.POWER_ATK_STR_PERCENT:
            return p >= 0 ? "劈砍攻击力+" + c + "%" : "劈砍攻击力" + c + "%";
          case e.POWER_ATK_AGI_PERCENT:
            return p >= 0 ? "穿刺攻击力+" + c + "%" : "穿刺攻击力" + c + "%";
          case e.POWER_ATK_MAGIC_PERCENT:
            return p >= 0 ? "魔法攻击力+" + c + "%" : "魔法攻击力" + c + "%";
          case e.POWER_DEF_STR_PERCENT:
            return p >= 0 ? "劈砍防御力+" + c + "%" : "劈砍防御力" + c + "%";
          case e.POWER_DEF_AGI_PERCENT:
            return p >= 0 ? "穿刺防御力+" + c + "%" : "穿刺防御力" + c + "%";
          case e.POWER_DEF_MAGIC_PERCENT:
            return p >= 0 ? "魔法防御力+" + c + "%" : "魔法防御力" + c + "%";
          case e.POWER_WIL_PERCENT:
            return p >= 0
              ? "基础状态抵抗+" + c + "%"
              : "基础状态抵抗" + c + "%";
          case e.POWER_TOUGH_PERCENT:
            return p >= 0 ? "伤害减免+" + c + "%" : "伤害减免" + c + "%";
          case e.POWER_BLOCK_PERCENT:
            return p >= 0 ? "格挡+" + c + "%" : "格挡" + c + "%";
          case e.POWER_INSIGHT_PERCENT:
            return p >= 0 ? "洞察+" + c + "%" : "洞察" + c + "%";
          case e.POWER_PENETRATION_PERCENT:
            return p >= 0 ? "破甲+" + c + "%" : "破甲" + c + "%";
          case e.POWER_DEF_FIELD_PERCENT:
            return p >= 0 ? "法力护盾+" + c + "%" : "法力护盾" + c + "%";
          case e.POWER_BACK_PERCENT:
            return p >= 0 ? "反击+" + c + "%" : "反击" + c + "%";
          case e.POWER_MAGIC_BACK_PERCENT:
            return p >= 0 ? "魔法反馈+" + c + "%" : "魔法反馈" + c + "%";
          case e.POWER_LIFE_ABSORPTION_PERCENT:
            return p >= 0 ? "生命吸收+" + c + "%" : "生命吸收" + c + "%";
          case e.POWER_MANA_ABSORPTION_PERCENT:
            return p >= 0 ? "法力吸收+" + c + "%" : "法力吸收" + c + "%";
          case e.POWER_MAGIC_PENETRATION_PERCENT:
            return p >= 0 ? "魔法穿透+" + c + "%" : "魔法穿透" + c + "%";
          case e.POWER_HIT_FORCE_PERCENT:
            return p >= 0 ? "强制命中率+" + c + "%" : "强制命中率" + c + "%";
          case e.POWER_HEAL_RECOVERY_PERCENT:
            return p >= 0
              ? "每回合自动恢复生命+" + c + "%"
              : "每回合自动造成生命" + h + "%的伤害";
          case e.POWER_MANA_RECOVERY_PERCENT:
            return p >= 0
              ? "每回合自动恢复法力+" + c + "%"
              : "每回合自动造成法力" + h + "%的伤害";
          case e.POWER_HP:
            return p >= 0 ? "生命+" + c : "生命" + c;
          case e.POWER_HP_PERCENT:
            return p >= 0
              ? "回复最大生命值+" + c + "%"
              : "造成最大生命值" + h + "%的伤害";
          case e.POWER_MP:
            return p >= 0 ? "法力+" + c : "法力" + i;
          case e.POWER_MP_PERCENT:
            return p >= 0
              ? "回复最大法力值+" + c + "%"
              : "扣除最大法力值" + h + "%";
          case e.POWER_SPEED:
            return p >= 0 ? "出手速度+" + c : "出手速度" + c;
          case e.POWER_HITRATE:
            return p >= 0 ? "命中+" + c : "命中" + c;
          case e.POWER_DODGE:
            return p >= 0 ? "躲闪 +" + c : "躲闪 " + c;
          case e.POWER_MAGIC_HITRATE:
            return p >= 0 ? "魔法命中+" + c : "魔法命中" + c;
          case e.POWER_CRITICAL:
            return p >= 0 ? "致命点+" + c : "致命点" + c;
          case e.POWER_ATK_STR:
            return p >= 0 ? "劈砍攻击力+" + c : "劈砍攻击力" + c;
          case e.POWER_ATK_AGI:
            return p >= 0 ? "穿刺攻击力+" + c : "穿刺攻击力" + c;
          case e.POWER_ATK_MAGIC:
            return p >= 0 ? "魔法攻击力+" + c : "魔法攻击力" + c;
          case e.POWER_DEF_STR:
            return p >= 0 ? "劈砍防御力+" + c : "劈砍防御力" + c;
          case e.POWER_DEF_AGI:
            return p >= 0 ? "穿刺防御力+" + c : "穿刺防御力" + c;
          case e.POWER_DEF_MAGIC:
            return p >= 0 ? "魔法防御力+" + c : "魔法防御力" + c;
          case e.POWER_WIL:
            return p >= 0 ? "状态抵抗值+" + c : "状态抵抗值" + c;
          case e.POWER_TOUGH:
            return p >= 0 ? "伤害减免+" + c : "伤害减免" + c;
          case e.POWER_BLOCK:
            return p >= 0 ? "格挡+" + c : "格挡" + c;
          case e.POWER_INSIGHT:
            return p >= 0 ? "洞察+" + c : "洞察" + c;
          case e.POWER_PENETRATION:
            return p >= 0 ? "破甲+" + c : "破甲" + c;
          case e.POWER_DEF_FIELD:
            return p >= 0 ? "法力护盾+" + c : "法力护盾" + c;
          case e.POWER_BACK:
            return p >= 0 ? "反击+" + c : "反击" + c;
          case e.POWER_MAGIC_BACK:
            return p >= 0 ? "魔法反馈+" + c : "魔法反馈" + c;
          case e.POWER_LIFE_ABSORPTION:
            return p >= 0 ? "基础生命吸收+" + c : "基础生命吸收" + c;
          case e.POWER_MANA_ABSORPTION:
            return p >= 0 ? "基础法力吸收+" + c : "基础法力吸收" + c;
          case e.POWER_MAGIC_PENETRATION:
            return p >= 0 ? "魔法穿透+" + c : "魔法穿透" + c;
          case e.POWER_HIT_FORCE:
            return i + n >= 0 ? "基础强制命中率+" + c : "基础强制命中率" + c;
          case e.POWER_HEAL_RECOVERY:
            return p >= 0
              ? "每回合自动恢复生命+" + c
              : "每回合自动扣除生命" + c;
          case e.POWER_MANA_RECOVERY:
            return p >= 0
              ? "每回合自动恢复法力+" + c
              : "每回合自动扣除法力" + c;
          case e.POWER_REMOVE_STATUS:
            return "清除目标" + e.getBufferString(p) + "状态";
          case e.POWER_RECOVER:
            return "战斗中复活并回复生命和法力" + c + "点";
          case e.POWER_SKILL_DAMAGE:
            return p >= 0 ? "技能附带伤害+" + c : "技能附带伤害" + c;
          case e.POWER_SKILL_HITRATE:
            if ((u.append("技能附带"), null != o)) {
              var f = o;
              (f.skillAtkType == e.ATKTYPE_MAGIC ||
                f.skillAtkType == e.ATKTYPE_CURSE) &&
                u.append(
                  f.skillAtkType == e.ATKTYPE_MAGIC ||
                    f.skillAtkType == e.ATKTYPE_CURSE
                    ? "魔法"
                    : "物理",
                );
            }
            return (
              u.append("命中" + (p >= 0 ? "+" + c : "" + c)),
              u.toString()
            );
          case e.POWER_SELF_CRITICAL:
            return p >= 0 ? "附带致命点+" + c : "附带致命点" + c;
          case e.POWER_SKILL_HIT_FORCE:
            return p >= 0
              ? "附加强制命中率+" + c + "%"
              : "附加强制命中率" + c + "%";
          case e.POWER_SKILL_MAGIC_PENETRATION:
            return p >= 0
              ? "无视目标+" + c + "点法术防御"
              : "无视目标" + c + "点法术防御";
          case e.POWER_SKILL_BRK_ARMOR:
            return p >= 0
              ? "无视目标+" + c + "点物理防御"
              : "技能附带破甲" + c + "点物理防御";
          case e.POWER_SKILL_REMOVE_STATUS:
            return "清除自身" + e.getBufferString(p) + "状态";
          case e.POWER_PET_DAMAGE:
            return p >= 0 ? "宠物伤害+" + c + "%" : "宠物伤害" + c + "%";
          case e.POWER_PET_HPMAX_PERCENT:
            return p >= 0
              ? "宠物生命上限+" + c + "%"
              : "宠物生命上限" + c + "%";
          case e.POWER_PET_MPMAX_PERCENT:
            return p >= 0
              ? "宠物法力上限+" + c + "%"
              : "宠物法力上限" + c + "%";
          case e.POWER_PET_STR_PERCENT:
            return p >= 0 ? "宠物力量+" + c + "%" : "宠物力量" + c + "%";
          case e.POWER_PET_CON_PERCENT:
            return p >= 0 ? "宠物体质+" + c + "%" : "宠物体质" + c + "%";
          case e.POWER_PET_AGI_PERCENT:
            return p >= 0 ? "宠物敏捷+" + c + "%" : "宠物敏捷" + c + "%";
          case e.POWER_PET_ILT_PERCENT:
            return p >= 0 ? "宠物智力+" + c + "%" : "宠物智力" + c + "%";
          case e.POWER_PET_WIS_PERCENT:
            return p >= 0 ? "宠物感知+" + c + "%" : "宠物感知" + c + "%";
          case e.POWER_RECOVER_PERCENT:
            return "复活并回复体力及法力" + c + "%";
          case e.POWER_HPMP_RECOVER:
            return "战斗后，自动恢复生命和法力" + c + "%";
          case e.POWER_OPEN_STORE:
            return "开通" + c + "格仓库";
          case e.POWER_TO_WORLDMAP:
            return p >= 0 ? "传送到世界地图+" + c : "传送到世界地图" + c;
          case e.POWER_CHEST_LV1:
            return "直接开启";
          case e.POWER_CHEST_LV2:
            return "需要万能钥匙";
          case e.POWER_CHEST_LV3:
            return "需要神秘钥匙";
          case e.POWER_REQ_SLOT:
            return "";
          case e.POWER_TO_GXGY:
            return p >= 0 ? "ToXY+" + c : "ToXY " + c;
          case e.POWER_EXPIRE_TIME:
            return "";
          case e.POWER_RESET_MISSION:
            return p >= 0 ? "重置任务+" + c : "重置任务" + c;
          case e.POWER_CHEST_KEY_LEVEL:
            return "";
          case e.POWER_PET_EGG:
            return "";
          case e.POWER_TRANSPORT:
            return "";
          case e.POWER_POWER_TITLE:
            return p >= 0 ? "称号+" + c : "称号" + c;
          case e.POWER_GUARD_STR_ATTACK:
            return c + "%几率替目标抵挡劈砍攻击";
          case e.POWER_GUARD_AGI_ATTACK:
            return c + "%几率替目标抵挡穿刺攻击";
          case e.POWER_GUARD_MAGIC_ATTACK:
            return c + "%几率替目标抵挡魔法攻击";
          case e.POWER_GUARD_CURSE_ATTACK:
            return c + "%几率替目标抵挡诅咒攻击";
          case e.POWER_GUARD_ALL_ATTACK:
            return c + "%几率替目标抵挡所有攻击";
          case e.POWER_GRARD_MASTER_STR_ATTACK:
            return "主人受到劈砍攻击时," + c + "%几率为其承受伤害";
          case e.POWER_GRARD_MASTER_AGI_ATTACK:
            return "主人受到穿刺攻击时," + c + "%几率为其承受伤害";
          case e.POWER_GRARD_MASTER_MAGIC_ATTACK:
            return "主人受到魔法攻击时," + c + "%几率为其承受伤害";
          case e.POWER_GRARD_MASTER_CURSE_ATTACK:
            return "主人受到诅咒攻击时," + c + "%几率为其承受攻击效果";
          case e.POWER_GRARD_MASTER_ALL_ATTACK:
            return "主人受到攻击时," + c + "%几率为其承受伤害";
          case e.POWER_PET_GRARD_STR_ATTACK:
            return "受到劈砍攻击时,所携带宠物" + c + "%几率为其承受伤害";
          case e.POWER_PET_GRARD_AGI_ATTACK:
            return "受到穿刺攻击时,所携带宠物" + c + "%几率为其承受伤害";
          case e.POWER_PET_GRARD_MAGIC_ATTACK:
            return "受到魔法攻击时,所携带宠物" + c + "%几率为其承受伤害";
          case e.POWER_PET_GRARD_CURSE_ATTACK:
            return "受到诅咒攻击时,所携带宠物" + c + "%几率为其承受攻击效果";
          case e.POWER_PET_GRARD_ALL_ATTACK:
            return "受到攻击时,所携带宠物" + c + "%几率为其承受伤害";
          case e.POWER_PET_ADD_EXP:
            return "使用后，目前所携带宠物经验+" + c;
          case e.POWER_ADD_EXP:
            return "使用后，角色经验+" + c;
          case e.POWER_EXP_BY_TIME:
            return "战斗经验" + (Math.floor(p / 10) + "." + (p % 10)) + "倍";
          case e.POWER_EXP_MISSION_BY_TIME:
            return "任务经验" + (Math.floor(p / 10) + "." + (p % 10)) + "倍";
          case e.POWER_IDENTIFY:
            return "未鉴定属性";
          case e.POWER_SWORD_ATK_TIME:
            return p >= 0 ? "用剑时攻击次数+" + c : "用剑时攻击次数" + c;
          case e.POWER_BLADE_ATK_TIME:
            return p >= 0 ? "用刀时攻击次数+" + c : "用刀时攻击次数" + c;
          case e.POWER_HEAVY_ATK_TIME:
            return p >= 0 ? "用重型时攻击次数+" + c : "用重型时攻击次数" + c;
          case e.POWER_LANCE_ATK_TIME:
            return p >= 0 ? "用长柄时攻击次数+" + c : "用长柄时攻击次数" + c;
          case e.POWER_STAFF_ATK_TIME:
            return p >= 0 ? "用法杖时攻击次数+" + c : "用法杖时攻击次数" + c;
          case e.POWER_BALL_ATK_TIME:
            return p >= 0 ? "用法器时攻击次数+" + c : "用法器时攻击次数" + c;
          case e.POWER_HAND_ATK_TIME:
            return p >= 0 ? "空手时攻击次数+" + c : "空手时攻击次数" + c;
          case e.POWER_BOW_ATK_TIME:
            return p >= 0
              ? "用远程武器时攻击次数+" + c
              : "用远程武器时攻击次数" + c;
          case e.POWER_HAND_ITEM_ATK_TIME:
            return p >= 0
              ? "用手持物时攻击次数+" + c
              : "用手持物时攻击次数" + c;
          case e.POWER_ALL_ATK_TIME:
            return p >= 0 ? "攻击次数+" + c : "攻击次数" + c;
          case e.POWER_COMPOSITE:
            return "合成属性";
          case e.POWER_SKILL_HP:
            return p >= 0 ? "恢复自身生命+" + c : "恢复自身生命" + c;
          case e.POWER_SKILL_HP_PERCENT:
            return p >= 0
              ? "恢复自身生命+" + c + "%"
              : "恢复自身生命" + c + "%";
          case e.POWER_SKILL_MP:
            return p >= 0 ? "恢复自身法力+" + c : "恢复自身法力" + c;
          case e.POWER_SKILL_MP_PERCENT:
            return p >= 0
              ? "恢复自身法力+" + c + "%"
              : "恢复自身法力" + c + "%";
          case e.POWER_SKILL_LIFE_ABSORPTION:
            return (
              (_ = s.Tool.getPointValue(p, 1)),
              p >= 0 ? "附带生命吸收+" + _ + "%" : "附带生命吸收" + _ + "%"
            );
          case e.POWER_SKILL_MANA_ABSORPTION:
            return (
              (_ = s.Tool.getPointValue(p, 1)),
              p >= 0 ? "附带法力吸收+" + _ + "%" : "附带法力吸收" + _ + "%"
            );
          case e.POWER_SKILL_TARGET_BACK:
            return p >= 0 ? "目标反击值-" + c : "目标反击值+" + h;
          case e.POWER_SKILL_TARGET_MAGIC_BACK:
            return p >= 0 ? "目标魔法反馈值-" + c : "目标魔法反馈值+" + h;
          case e.POWER_SKILL_TARGET_BLOCK:
            return p >= 0 ? "目标格挡值-" + c : "目标格挡值+" + h;
          case e.POWER_SKILL_TARGET_INSIGHT:
            return p >= 0 ? "目标洞察值-" + c : "目标洞察值+" + h;
          case e.POWER_SKILL_TARGET_WIL:
            return (
              (_ = s.Tool.getPointValue(Math.abs(p), 1)),
              p >= 0 ? "目标状态抵抗率-" + _ : "目标状态抵抗率+" + _
            );
          case e.POWER_SKILL_TARGET_TOUCH:
            return p >= 0 ? "目标伤害减免值-" + c : "目标伤害减免值+" + h;
          case e.POWER_IGNORE_BACK:
            return p >= 0 ? "无视反击+" + c : "无视反击" + c;
          case e.POWER_IGNORE_MAGIC_BACK:
            return p >= 0 ? "无视魔法反馈+" + c : "无视魔法反馈" + c;
          case e.POWER_IGNORE_BLOCK:
            return p >= 0 ? "无视格挡+" + c : "无视格挡" + c;
          case e.POWER_IGNORE_INSIGHT:
            return p >= 0 ? "无视洞察+" + c : "无视洞察" + c;
          case e.POWER_IGNORE_WIL:
            return p >= 0 ? "无视状态抵抗+" + c : "无视状态抵抗" + c;
          case e.POWER_IGNORE_TOUCH:
            return p >= 0 ? "无视伤害减免+" + c : "无视伤害减免" + c;
          case e.POWER_KEEPOUT_ATK_TIME:
            return p >= 0 ? "免伤护盾+" + c : "免伤护盾" + c;
          case e.POWER_CHEST_LV4:
            return "需要黄金钥匙";
          case e.POWER_COLOR_BOX:
            return "登陆礼盒";
          case e.POWER_GUN_ATK_TIME:
            return p >= 0 ? "用火枪时攻击次数+" + c : "用火枪时攻击次数" + c;
          case e.POWER_GUN_PERCENT:
            return p >= 0
              ? "火枪类武器伤害、耐久+" + c + "%"
              : "火枪类武器伤害、耐久" + c + "%";
          case e.POWER_HAMMER_ATK_TIME:
            return p >= 0 ? "用锤类时攻击次数+" + c : "用锤类攻击次数" + c;
          case e.POWER_HAMMER_PERCENT:
            return p >= 0
              ? "锤类武器伤害、耐久+" + c + "%"
              : "锤类武器伤害、耐久" + c + "%";
          case e.POWER_FAN_ATK_TIME:
            return p >= 0 ? "用扇子时攻击次数+" + c : "用扇子攻击次数" + c;
          case e.POWER_FAN_PERCENT:
            return p >= 0
              ? "扇类武器伤害、耐久+" + c + "%"
              : "扇类武器伤害、耐久" + c + "%";
          case e.POWER_SKILL_SCROLL:
          case e.POWER_SKILL_SCROLL_PET:
          case e.POWER_NEW_GET_PET:
          case e.POWER_NEW_GET_ITEM:
          case e.POWER_ENCHANT_ITEM:
          case e.POWER_FORMATION_BOOK:
          case e.POWER_TURN_MONSTER_CARD:
          case e.POWER_SKILL_BOOK_PET:
            return "";
          case e.POWER_HP_MP:
            return "能量:" + c;
          case e.POWER_BLADE_L_ATK_TIME:
            return p >= 0 ? "用轻刀时攻击次数+" + c : "用轻刀时攻击次数" + c;
          case e.POWER_BLADE_H_ATK_TIME:
            return p >= 0 ? "用重刀时攻击次数+" + c : "用重刀时攻击次数" + c;
          case e.POWER_SWORD_L_ATK_TIME:
            return p >= 0 ? "用轻剑时攻击次数+" + c : "用轻剑时攻击次数" + c;
          case e.POWER_SWORD_H_ATK_TIME:
            return p >= 0 ? "用重剑时攻击次数+" + c : "用重剑时攻击次数" + c;
          case e.POWER_CROSSBOW_L_ATK_TIME:
            return p >= 0 ? "用轻弩时攻击次数+" + c : "用轻弩时攻击次数" + c;
          case e.POWER_CROSSBOW_H_ATK_TIME:
            return p >= 0 ? "用重弩时攻击次数+" + c : "用重弩时攻击次数" + c;
          case e.POWER_ARROW_ATK_TIME:
            return p >= 0 ? "用弓箭时攻击次数+" + c : "用弓箭时攻击次数" + c;
          case e.POWER_BLADE_L_DAMAGE_PERCENT:
            return p >= 0
              ? "轻刀武器伤害、耐久+" + c + "%"
              : "轻刀武器伤害、耐久" + c + "%";
          case e.POWER_BLADE_H_DAMAGE_PERCENT:
            return p >= 0
              ? "重刀武器伤害、耐久+" + c + "%"
              : "重刀武器伤害、耐久" + c + "%";
          case e.POWER_SWORD_L_DAMAGE_PERCENT:
            return p >= 0
              ? "轻剑武器伤害、耐久+" + c + "%"
              : "轻剑武器伤害、耐久" + c + "%";
          case e.POWER_SWORD_H_DAMAGE_PERCENT:
            return p >= 0
              ? "重剑武器伤害、耐久+" + c + "%"
              : "重剑武器伤害、耐久" + c + "%";
          case e.POWER_CROSSBOW_L_DAMAGE_PERCENT:
            return p >= 0
              ? "重弩武器伤害、耐久+" + c + "%"
              : "重弩武器伤害、耐久" + c + "%";
          case e.POWER_CROSSBOW_H_DAMAGE_PERCENT:
            return p >= 0
              ? "轻弩武器伤害、耐久+" + c + "%"
              : "轻弩武器伤害、耐久" + c + "%";
          case e.POWER_ARROW_DAMAGE_PERCENT:
            return p >= 0
              ? "弓箭武器伤害、耐久+" + c + "%"
              : "弓箭武器伤害、耐久" + c + "%";
          case e.POWER_DEF_STR_RANGE:
            return p >= 0 ? "远程劈砍防御点数+" + c : "远程劈砍防御点数" + c;
          case e.POWER_DEF_STR_RANGE_PERCENT:
            return p >= 0
              ? "远程劈砍防御百分比+" + c + "%"
              : "远程劈砍防御百分比" + c + "%";
          case e.POWER_DEF_STR_NEARBY:
            return p >= 0 ? "近身劈砍防御点数+" + c : "近身劈砍防御点数" + c;
          case e.POWER_DEF_STR_NEARBY_PERCENT:
            return p >= 0
              ? "近身劈砍防御百分比+" + c + "%"
              : "近身劈砍防御百分比" + c + "%";
          case e.POWER_DEF_AGI_RANGE:
            return p >= 0 ? "远程穿刺防御点数+" + c : "远程穿刺防御点数" + c;
          case e.POWER_DEF_AGI_RANGE_PERCENT:
            return p >= 0
              ? "远程穿刺防御百分比+" + c + "%"
              : "远程穿刺防御百分比" + c + "%";
          case e.POWER_DEF_AGI_NEARBY:
            return p >= 0 ? "近身穿刺防御点数+" + c : "近身穿刺防御点数" + c;
          case e.POWER_DEF_AGI_NEARBY_PERCENT:
            return p >= 0
              ? "近身穿刺防御百分比+" + c + "%"
              : "近身穿刺防御百分比" + c + "%";
          case e.POWER_ATK_STR_NEARBY:
            return p >= 0 ? "近身劈砍攻击点数+" + c : "近身劈砍攻击点数" + c;
          case e.POWER_ATK_STR_NEARBY_PERCENT:
            return p >= 0
              ? "近身劈砍攻击百分比+" + c + "%"
              : "近身劈砍攻击百分比" + c + "%";
          case e.POWER_ATK_STR_RANGE:
            return p >= 0 ? "远程劈砍攻击点数+" + c : "远程劈砍攻击点数" + c;
          case e.POWER_ATK_STR_RANGE_PERCENT:
            return p >= 0
              ? "远程劈砍攻击百分比+" + c + "%"
              : "远程劈砍攻击百分比" + c + "%";
          case e.POWER_ATK_AGI_NEARBY:
            return p >= 0 ? "近战穿刺攻击点数+" + c : "近战穿刺攻击点数" + c;
          case e.POWER_ATK_AGI_NEARBY_PERCENT:
            return p >= 0
              ? "近战穿刺攻击百分比+" + c + "%"
              : "近战穿刺攻击百分比" + c + "%";
          case e.POWER_ATK_AGI_RANGE:
            return p >= 0 ? "远程穿刺攻击点数+" + c : "远程穿刺攻击点数" + c;
          case e.POWER_ATK_AGI_RANGE_PERCENT:
            return p >= 0
              ? "远程穿刺攻击百分比+" + c + "%"
              : "远程穿刺攻击百分比" + c + "%";
          case e.POWER_IGNORE_CRITICAL:
            return p >= 0 ? "抗致命点数+" + c : "抗致命点数" + c;
          case e.POWER_IGNORE_CRITICAL_PERCENT:
            return p >= 0
              ? "抗致命点数百分比+" + c + "%"
              : "抗致命点数百分比" + c + "%";
          case e.POWER_CRITICAL_DAMAGE:
            return p >= 0 ? "致命伤害+" + c + "%" : "致命伤害" + c + "%";
          case e.POWER_CRITICAL_DAMAGE_PERCENT:
            return p >= 0
              ? "致命伤害百分比+" + c + "%"
              : "致命伤害百分比" + c + "%";
        }
        return "未知power_" + t + "_" + p;
      }),
      (e.getPowerDescMin2Max = function (t, i, o, n, l, u) {
        (void 0 === n && (n = null),
          void 0 === l && (l = 0),
          void 0 === u && (u = !0));
        var _ = new r["default"](),
          d = "",
          p = "",
          c = "";
        (l > 0 ? (c = "(+" + l + ")") : 0 > l && (c = "(" + -l + ")"),
          0 == u && (c = a["default"].makeColorString(c, s.Tool.COLOR_GRAY)));
        var h = i + l,
          f = i + c,
          T = -i + c,
          E = o + l,
          y = o + c,
          g = -o + c;
        switch (t) {
          case e.POWER_STR:
            return h >= 0 ? "力量 " + f + "-" + y : "力量 " + f + "-" + y;
          case e.POWER_STR_PERCENT:
            return h >= 0
              ? "力量 " + f + "%-" + y + "%"
              : "力量 " + f + "%-" + y + "%";
          case e.POWER_CON:
            return h >= 0 ? "体质 " + f + "-" + y : "体质 " + f + "-" + y;
          case e.POWER_CON_PERCENT:
            return h >= 0
              ? "体质 " + f + "%-" + y + "%"
              : "体质 " + f + "%-" + y + "%";
          case e.POWER_AGI:
            return h >= 0 ? "敏捷 " + f + "-" + y : "敏捷 " + f + "-" + y;
          case e.POWER_AGI_PERCENT:
            return h >= 0
              ? "敏捷 " + f + "%-" + y + "%"
              : "敏捷 " + f + "%-" + y + "%";
          case e.POWER_ILT:
            return h >= 0 ? "智力 " + f + "-" + y : "智力 " + f + "-" + y;
          case e.POWER_ILT_PERCENT:
            return h >= 0
              ? "智力 " + f + "%-" + y + "%"
              : "智力 " + f + "%-" + y + "%";
          case e.POWER_WIS:
            return h >= 0 ? "感知 " + f + "-" + y : "感知 " + f + "-" + y;
          case e.POWER_WIS_PERCENT:
            return h >= 0
              ? "感知 " + f + "%-" + y + "%"
              : "感知 " + f + "%-" + y + "%";
          case e.POWER_HPMAX:
            return h >= 0
              ? "生命上限 " + f + "-" + y
              : "生命上限 " + f + "-" + y;
          case e.POWER_HPMAX_PERCENT:
            return h >= 0
              ? "生命上限 " + f + "%-" + y + "%"
              : "生命上限 " + f + "%-" + y + "%";
          case e.POWER_MPMAX:
            return h >= 0
              ? "法力上限 " + f + "-" + y
              : "法力上限 " + f + "-" + y;
          case e.POWER_MPMAX_PERCENT:
            return h >= 0
              ? "法力上限 " + f + "%-" + y + "%"
              : "法力上限 " + f + "%-" + y + "%";
          case e.POWER_SWORD_PERCENT:
            return h >= 0
              ? "剑类武器伤害、耐久 " + f + "%-" + y + "%"
              : "剑类武器伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_BLADE_PERCENT:
            return h >= 0
              ? "刀类伤害、耐久 " + f + "%-" + y + "%"
              : "刀类伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_HEAVY_PERCENT:
            return h >= 0
              ? "重型武器伤害、耐久 " + f + "%-" + y + "%"
              : "重型武器伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_LANCE_PERCENT:
            return h >= 0
              ? "长柄武器伤害、耐久 " + f + "%-" + y + "%"
              : "长柄武器伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_STAFF_PERCENT:
            return h >= 0
              ? "法杖武器伤害、耐久 " + f + "%-" + y + "%"
              : "法杖武器伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_BALL_PERCENT:
            return h >= 0
              ? "法器武器伤害、耐久 " + f + "%-" + y + "%"
              : "法器武器伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_HAND_PERCENT:
            return h >= 0
              ? "空手伤害 " + f + "%-" + y + "%"
              : "空手伤害 " + f + "%-" + y + "%";
          case e.POWER_BOW_PERCENT:
            return h >= 0
              ? "远程武器伤害、耐久 " + f + "%-" + y + "%"
              : "远程武器伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_HAND_ITEM_PERCENT:
            return h >= 0
              ? "手持物伤害、耐久 " + f + "%-" + y + "%"
              : "手持物伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_ALL_PERCENT:
            return h >= 0
              ? "武器伤害、耐久 " + f + "%-" + y + "%"
              : "武器伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_EQUIP_ARMOR_DUR_PERCENT:
            return h >= 0
              ? "装备防具耐久 " + f + "%-" + y + "%"
              : "装备防具耐久 " + f + "%-" + y + "%";
          case e.POWER_SPEED_PERCENT:
            return h >= 0
              ? "出手速度 " + f + "%-" + y + "%"
              : "出手速度 " + f + "%-" + y + "%";
          case e.POWER_HITRATE_PERCENT:
            return h >= 0
              ? "命中率 " + f + "%-" + y + "%"
              : "命中率 " + f + "%-" + y + "%";
          case e.POWER_DODGE_PERCENT:
            return h >= 0
              ? "躲闪 " + f + "%-" + y + "%"
              : "躲闪 " + f + "%-" + y + "%";
          case e.POWER_MAGIC_HITRATE_PERCENT:
            return h >= 0
              ? "魔法命中 " + f + "%-" + y + "%"
              : "魔法命中 " + f + "%-" + y + "%";
          case e.POWER_CRITICAL_PERCENT:
            return h >= 0
              ? "致命率 " + f + "%-" + y + "%"
              : "致命率 " + f + "%-" + y + "%";
          case e.POWER_ATK_STR_PERCENT:
            return h >= 0
              ? "劈砍攻击力 " + f + "%-" + y + "%"
              : "劈砍攻击力 " + f + "%-" + y + "%";
          case e.POWER_ATK_AGI_PERCENT:
            return h >= 0
              ? "穿刺攻击力 " + f + "%-" + y + "%"
              : "穿刺攻击力 " + f + "%-" + y + "%";
          case e.POWER_ATK_MAGIC_PERCENT:
            return h >= 0
              ? "魔法攻击力 " + f + "%-" + y + "%"
              : "魔法攻击力 " + f + "%-" + y + "%";
          case e.POWER_DEF_STR_PERCENT:
            return h >= 0
              ? "劈砍防御力 " + f + "%-" + y + "%"
              : "劈砍防御力 " + f + "%-" + y + "%";
          case e.POWER_DEF_AGI_PERCENT:
            return h >= 0
              ? "穿刺防御力 " + f + "%-" + y + "%"
              : "穿刺防御力 " + f + "%-" + y + "%";
          case e.POWER_DEF_MAGIC_PERCENT:
            return h >= 0
              ? "魔法防御力 " + f + "%-" + y + "%"
              : "魔法防御力 " + f + "%-" + y + "%";
          case e.POWER_WIL_PERCENT:
            return h >= 0
              ? "基础状态抵抗 " + f + "%-" + y + "%"
              : "基础状态抵抗 " + f + "%-" + y + "%";
          case e.POWER_TOUGH_PERCENT:
            return h >= 0
              ? "伤害减免 " + f + "%-" + y + "%"
              : "伤害减免 " + f + "%-" + y + "%";
          case e.POWER_BLOCK_PERCENT:
            return h >= 0
              ? "格挡 " + f + "%-" + y + "%"
              : "格挡 " + f + "%-" + y + "%";
          case e.POWER_INSIGHT_PERCENT:
            return h >= 0
              ? "洞察 " + f + "%-" + y + "%"
              : "洞察 " + f + "%-" + y + "%";
          case e.POWER_PENETRATION_PERCENT:
            return h >= 0
              ? "破甲 " + f + "%-" + y + "%"
              : "破甲 " + f + "%-" + y + "%";
          case e.POWER_DEF_FIELD_PERCENT:
            return h >= 0
              ? "法力护盾 " + f + "%-" + y + "%"
              : "法力护盾 " + f + "%-" + y + "%";
          case e.POWER_BACK_PERCENT:
            return h >= 0
              ? "反击 " + f + "%-" + y + "%"
              : "反击 " + f + "%-" + y + "%";
          case e.POWER_MAGIC_BACK_PERCENT:
            return h >= 0
              ? "魔法反馈 " + f + "%-" + y + "%"
              : "魔法反馈 " + f + "%-" + y + "%";
          case e.POWER_LIFE_ABSORPTION_PERCENT:
            return h >= 0
              ? "生命吸收 " + f + "%-" + y + "%"
              : "生命吸收 " + f + "%-" + y + "%";
          case e.POWER_MANA_ABSORPTION_PERCENT:
            return h >= 0
              ? "法力吸收 " + f + "%-" + y + "%"
              : "法力吸收 " + f + "%-" + y + "%";
          case e.POWER_MAGIC_PENETRATION_PERCENT:
            return h >= 0
              ? "魔法穿透 " + f + "%-" + y + "%"
              : "魔法穿透 " + f + "%-" + y + "%";
          case e.POWER_HIT_FORCE_PERCENT:
            return h >= 0
              ? "强制命中率 " + f + "%-" + y + "%"
              : "强制命中率 " + f + "%-" + y + "%";
          case e.POWER_HEAL_RECOVERY_PERCENT:
            return h >= 0
              ? "每回合自动恢复生命 " + f + "%-" + y + "%"
              : "每回合自动造成生命 " + T + "%-" + g + "%的伤害";
          case e.POWER_MANA_RECOVERY_PERCENT:
            return h >= 0
              ? "每回合自动恢复法力 " + f + "%-" + y
              : "每回合自动造成法力 " + T + "%-" + g + "%的伤害";
          case e.POWER_HP:
            return h >= 0 ? "生命 " + f + "-" + y : "生命 " + f + "-" + y;
          case e.POWER_HP_PERCENT:
            return h >= 0
              ? "回复最大生命值 " + f + "%-" + y + "%"
              : "造成最大生命值 " + T + "%-" + g + "%的伤害";
          case e.POWER_MP:
            return h >= 0 ? "法力 " + f + "-" + y : "法力 " + i + "-" + o;
          case e.POWER_MP_PERCENT:
            return h >= 0
              ? "回复最大法力值 " + f + "%-" + y + "%"
              : "扣除最大法力值 " + T + "%-" + g + "%";
          case e.POWER_SPEED:
            return h >= 0
              ? "出手速度 " + f + "-" + y
              : "出手速度 " + f + "-" + y;
          case e.POWER_HITRATE:
            return h >= 0 ? "命中 " + f + "-" + y : "命中 " + f + "-" + y;
          case e.POWER_DODGE:
            return h >= 0 ? "躲闪 " + f + "-" + y : "躲闪 " + f + "-" + y;
          case e.POWER_MAGIC_HITRATE:
            return h >= 0
              ? "魔法命中 " + f + "-" + y
              : "魔法命中 " + f + "-" + y;
          case e.POWER_CRITICAL:
            return h >= 0 ? "致命点 " + f + "-" + y : "致命点 " + f + "-" + y;
          case e.POWER_ATK_STR:
            return h >= 0
              ? "劈砍攻击力 " + f + "-" + y
              : "劈砍攻击力 " + f + "-" + y;
          case e.POWER_ATK_AGI:
            return h >= 0
              ? "穿刺攻击力 " + f + "-" + y
              : "穿刺攻击力 " + f + "-" + y;
          case e.POWER_ATK_MAGIC:
            return h >= 0
              ? "魔法攻击力 " + f + "-" + y
              : "魔法攻击力 " + f + "-" + y;
          case e.POWER_DEF_STR:
            return h >= 0
              ? "劈砍防御力 " + f + "-" + y
              : "劈砍防御力 " + f + "-" + y;
          case e.POWER_DEF_AGI:
            return h >= 0
              ? "穿刺防御力 " + f + "-" + y
              : "穿刺防御力 " + f + "-" + y;
          case e.POWER_DEF_MAGIC:
            return h >= 0
              ? "魔法防御力 " + f + "-" + y
              : "魔法防御力 " + f + "-" + y;
          case e.POWER_WIL:
            return h >= 0
              ? "状态抵抗值 " + f + "-" + y
              : "状态抵抗值 " + f + "-" + y;
          case e.POWER_TOUGH:
            return h >= 0
              ? "伤害减免 " + f + "-" + y
              : "伤害减免 " + f + "-" + y;
          case e.POWER_BLOCK:
            return h >= 0 ? "格挡 " + f + "-" + y : "格挡 " + f + "-" + y;
          case e.POWER_INSIGHT:
            return h >= 0 ? "洞察 " + f + "-" + y : "洞察 " + f + "-" + y;
          case e.POWER_PENETRATION:
            return h >= 0 ? "破甲 " + f + "-" + y : "破甲 " + f + "-" + y;
          case e.POWER_DEF_FIELD:
            return h >= 0
              ? "法力护盾 " + f + "-" + y
              : "法力护盾 " + f + "-" + y;
          case e.POWER_BACK:
            return h >= 0 ? "反击 " + f + "-" + y : "反击 " + f + "-" + y;
          case e.POWER_MAGIC_BACK:
            return h >= 0
              ? "魔法反馈 " + f + "-" + y
              : "魔法反馈 " + f + "-" + y;
          case e.POWER_LIFE_ABSORPTION:
            return h >= 0
              ? "基础生命吸收 " + f + "-" + y
              : "基础生命吸收 " + f + "-" + y;
          case e.POWER_MANA_ABSORPTION:
            return h >= 0
              ? "基础法力吸收 " + f + "-" + y
              : "基础法力吸收 " + f + "-" + y;
          case e.POWER_MAGIC_PENETRATION:
            return h >= 0
              ? "魔法穿透 " + f + "-" + y
              : "魔法穿透 " + f + "-" + y;
          case e.POWER_HIT_FORCE:
            return i + l >= 0
              ? "基础强制命中率 " + f + "-" + y
              : "基础强制命中率 " + f + "-" + y;
          case e.POWER_HEAL_RECOVERY:
            return h >= 0
              ? "每回合自动恢复生命 " + f + "-" + y
              : "每回合自动扣除生命 " + f + "-" + y;
          case e.POWER_MANA_RECOVERY:
            return h >= 0
              ? "每回合自动恢复法力 " + f + "-" + y
              : "每回合自动扣除法力 " + f + "-" + y;
          case e.POWER_REMOVE_STATUS:
            return "清除目标" + e.getBufferString(h) + "状态";
          case e.POWER_RECOVER:
            return "战斗中复活并回复生命和法力 " + f + "-" + y + "点";
          case e.POWER_SKILL_DAMAGE:
            return h >= 0
              ? "技能附带伤害 " + f + "-" + y
              : "技能附带伤害 " + f + "-" + y;
          case e.POWER_SKILL_HITRATE:
            if ((_.append("技能附带"), null != n)) {
              var v = n;
              (v.skillAtkType == e.ATKTYPE_MAGIC ||
                v.skillAtkType == e.ATKTYPE_CURSE) &&
                _.append(
                  v.skillAtkType == e.ATKTYPE_MAGIC ||
                    v.skillAtkType == e.ATKTYPE_CURSE
                    ? "魔法"
                    : "物理",
                );
            }
            return (
              _.append(
                "命中" + (h >= 0 ? "+" + f + "-" + y : "" + f + "-" + y),
              ),
              _.toString()
            );
          case e.POWER_SELF_CRITICAL:
            return h >= 0
              ? "附带致命点 " + f + "-" + y
              : "附带致命点 " + f + "-" + y;
          case e.POWER_SKILL_HIT_FORCE:
            return h >= 0
              ? "附加强制命中率 " + f + "%-" + y + "%"
              : "附加强制命中率 " + f + "%-" + y + "%";
          case e.POWER_SKILL_MAGIC_PENETRATION:
            return h >= 0
              ? "无视目标 " + f + "-" + y + "点法术防御"
              : "无视目标 " + f + "-" + y + "点法术防御";
          case e.POWER_SKILL_BRK_ARMOR:
            return h >= 0
              ? "无视目标 " + f + "-" + y + "点物理防御"
              : "技能附带破甲 " + f + "-" + y + "点物理防御";
          case e.POWER_SKILL_REMOVE_STATUS:
            return "清除自身" + e.getBufferString(h) + "状态";
          case e.POWER_PET_DAMAGE:
            return h >= 0
              ? "宠物伤害 " + f + "%-" + y + "%"
              : "宠物伤害 " + f + "%-" + y + "%";
          case e.POWER_PET_HPMAX_PERCENT:
            return h >= 0
              ? "宠物生命上限 " + f + "%-" + y + "%"
              : "宠物生命上限 " + f + "%-" + y + "%";
          case e.POWER_PET_MPMAX_PERCENT:
            return h >= 0
              ? "宠物法力上限 " + f + "%-" + y + "%"
              : "宠物法力上限 " + f + "%-" + y + "%";
          case e.POWER_PET_STR_PERCENT:
            return h >= 0
              ? "宠物力量 " + f + "%-" + y + "%"
              : "宠物力量 " + f + "%-" + y + "%";
          case e.POWER_PET_CON_PERCENT:
            return h >= 0
              ? "宠物体质 " + f + "%-" + y + "%"
              : "宠物体质 " + f + "%-" + y + "%";
          case e.POWER_PET_AGI_PERCENT:
            return h >= 0
              ? "宠物敏捷 " + f + "%-" + y + "%"
              : "宠物敏捷 " + f + "%-" + y + "%";
          case e.POWER_PET_ILT_PERCENT:
            return h >= 0
              ? "宠物智力 " + f + "%-" + y + "%"
              : "宠物智力 " + f + "%-" + y + "%";
          case e.POWER_PET_WIS_PERCENT:
            return h >= 0
              ? "宠物感知 " + f + "%-" + y + "%"
              : "宠物感知 " + f + "%-" + y + "%";
          case e.POWER_RECOVER_PERCENT:
            return "复活并回复体力及法力 " + f + "%-" + y + "%";
          case e.POWER_HPMP_RECOVER:
            return "战斗后，自动恢复生命和法力 " + f + "%-" + y + "%";
          case e.POWER_OPEN_STORE:
            return "开通" + f + "格仓库";
          case e.POWER_TO_WORLDMAP:
            return h >= 0
              ? "传送到世界地图 " + f + "-" + y
              : "传送到世界地图 " + f + "-" + y;
          case e.POWER_CHEST_LV1:
            return "可合成出其他物品";
          case e.POWER_CHEST_LV2:
            return "需要万能钥匙";
          case e.POWER_CHEST_LV3:
            return "需要神秘钥匙";
          case e.POWER_REQ_SLOT:
            return "";
          case e.POWER_TO_GXGY:
            return h >= 0 ? "ToXY" + f : "ToXY " + f;
          case e.POWER_EXPIRE_TIME:
            return "";
          case e.POWER_RESET_MISSION:
            return h >= 0 ? "重置任务 " + f : "重置任务 " + f;
          case e.POWER_CHEST_KEY_LEVEL:
            return "";
          case e.POWER_PET_EGG:
            return "";
          case e.POWER_TRANSPORT:
            return "";
          case e.POWER_POWER_TITLE:
            return h >= 0 ? "称号 " + f : "称号 " + f;
          case e.POWER_GUARD_STR_ATTACK:
            return f + "%-" + y + "%几率替目标抵挡劈砍攻击";
          case e.POWER_GUARD_AGI_ATTACK:
            return f + "%-" + y + "%几率替目标抵挡穿刺攻击";
          case e.POWER_GUARD_MAGIC_ATTACK:
            return f + "%-" + y + "%几率替目标抵挡魔法攻击";
          case e.POWER_GUARD_CURSE_ATTACK:
            return f + "%-" + y + "%几率替目标抵挡诅咒攻击";
          case e.POWER_GUARD_ALL_ATTACK:
            return f + "%-" + y + "%几率替目标抵挡所有攻击";
          case e.POWER_GRARD_MASTER_STR_ATTACK:
            return "主人受到劈砍攻击时," + f + "%-" + y + "%几率为其承受伤害";
          case e.POWER_GRARD_MASTER_AGI_ATTACK:
            return "主人受到穿刺攻击时," + f + "%-" + y + "%几率为其承受伤害";
          case e.POWER_GRARD_MASTER_MAGIC_ATTACK:
            return "主人受到魔法攻击时," + f + "%-" + y + "%几率为其承受伤害";
          case e.POWER_GRARD_MASTER_CURSE_ATTACK:
            return (
              "主人受到诅咒攻击时," + f + "%-" + y + "%几率为其承受攻击效果"
            );
          case e.POWER_GRARD_MASTER_ALL_ATTACK:
            return "主人受到攻击时," + f + "%-" + y + "%几率为其承受伤害";
          case e.POWER_PET_GRARD_STR_ATTACK:
            return (
              "受到劈砍攻击时,所携带宠物" + f + "%-" + y + "%几率为其承受伤害"
            );
          case e.POWER_PET_GRARD_AGI_ATTACK:
            return (
              "受到穿刺攻击时,所携带宠物" + f + "%-" + y + "%几率为其承受伤害"
            );
          case e.POWER_PET_GRARD_MAGIC_ATTACK:
            return (
              "受到魔法攻击时,所携带宠物" + f + "%-" + y + "%几率为其承受伤害"
            );
          case e.POWER_PET_GRARD_CURSE_ATTACK:
            return (
              "受到诅咒攻击时,所携带宠物" +
              f +
              "%-" +
              y +
              "%几率为其承受攻击效果"
            );
          case e.POWER_PET_GRARD_ALL_ATTACK:
            return "受到攻击时,所携带宠物" + f + "%-" + y + "%几率为其承受伤害";
          case e.POWER_PET_ADD_EXP:
            return "使用后，目前所携带宠物经验+" + f;
          case e.POWER_ADD_EXP:
            return "使用后，角色经验+" + f;
          case e.POWER_EXP_BY_TIME:
            return (
              "战斗经验" +
              (Math.floor(h / 10) + "." + (h % 10)) +
              "-" +
              (Math.floor(E / 10) + "." + (E % 10)) +
              "倍"
            );
          case e.POWER_EXP_MISSION_BY_TIME:
            return (
              "任务经验" +
              (Math.floor(h / 10) + "." + (h % 10)) +
              "-" +
              (Math.floor(E / 10) + "." + (E % 10)) +
              "倍"
            );
          case e.POWER_IDENTIFY:
            return "未鉴定属性";
          case e.POWER_SWORD_ATK_TIME:
            return h >= 0
              ? "用剑时攻击次数 " + f + "-" + y
              : "用剑时攻击次数 " + f + "-" + y;
          case e.POWER_BLADE_ATK_TIME:
            return h >= 0
              ? "用刀时攻击次数 " + f + "-" + y
              : "用刀时攻击次数 " + f + "-" + y;
          case e.POWER_HEAVY_ATK_TIME:
            return h >= 0
              ? "用重型时攻击次数 " + f + "-" + y
              : "用重型时攻击次数 " + f + "-" + y;
          case e.POWER_LANCE_ATK_TIME:
            return h >= 0
              ? "用长柄时攻击次数 " + f + "-" + y
              : "用长柄时攻击次数 " + f + "-" + y;
          case e.POWER_STAFF_ATK_TIME:
            return h >= 0
              ? "用法杖时攻击次数 " + f + "-" + y
              : "用法杖时攻击次数 " + f + "-" + y;
          case e.POWER_BALL_ATK_TIME:
            return h >= 0
              ? "用法器时攻击次数 " + f + "-" + y
              : "用法器时攻击次数 " + f + "-" + y;
          case e.POWER_HAND_ATK_TIME:
            return h >= 0
              ? "空手时攻击次数 " + f + "-" + y
              : "空手时攻击次数 " + f + "-" + y;
          case e.POWER_BOW_ATK_TIME:
            return h >= 0
              ? "用远程武器时攻击次数 " + f + "-" + y
              : "用远程武器时攻击次数 " + f + "-" + y;
          case e.POWER_HAND_ITEM_ATK_TIME:
            return h >= 0
              ? "用手持物时攻击次数 " + f + "-" + y
              : "用手持物时攻击次数 " + f + "-" + y;
          case e.POWER_ALL_ATK_TIME:
            return h >= 0
              ? "攻击次数 " + f + "-" + y
              : "攻击次数 " + f + "-" + y;
          case e.POWER_COMPOSITE:
            return "合成属性";
          case e.POWER_SKILL_HP:
            return h >= 0
              ? "恢复自身生命 " + f + "-" + y
              : "恢复自身生命 " + f + "-" + y;
          case e.POWER_SKILL_HP_PERCENT:
            return h >= 0
              ? "恢复自身生命 " + f + "%-" + y + "%"
              : "恢复自身生命 " + f + "%-" + y + "%";
          case e.POWER_SKILL_MP:
            return h >= 0
              ? "恢复自身法力 " + f + "-" + y
              : "恢复自身法力 " + f + "-" + y;
          case e.POWER_SKILL_MP_PERCENT:
            return h >= 0
              ? "恢复自身法力 " + f + "%-" + y + "%"
              : "恢复自身法力 " + f + "%-" + y + "%";
          case e.POWER_SKILL_LIFE_ABSORPTION:
            return (
              (d = s.Tool.getPointValue(h, 1)),
              (p = s.Tool.getPointValue(E, 1)),
              h >= 0
                ? "附带生命吸收 " + d + "%-" + p + "%"
                : "附带生命吸收 " + d + "%-" + p + "%"
            );
          case e.POWER_SKILL_MANA_ABSORPTION:
            return (
              (d = s.Tool.getPointValue(h, 1)),
              (p = s.Tool.getPointValue(E, 1)),
              h >= 0
                ? "附带法力吸收 " + d + "%-" + p + "%"
                : "附带法力吸收 " + d + "%-" + p + "%"
            );
          case e.POWER_SKILL_TARGET_BACK:
            return h >= 0
              ? "目标反击值 " + f + "-" + y
              : "目标反击值 " + T + "-" + g;
          case e.POWER_SKILL_TARGET_MAGIC_BACK:
            return h >= 0
              ? "目标魔法反馈值 " + f + "-" + y
              : "目标魔法反馈值 " + T + "-" + g;
          case e.POWER_SKILL_TARGET_BLOCK:
            return h >= 0
              ? "目标格挡值 " + f + "-" + y
              : "目标格挡值 " + T + "-" + g;
          case e.POWER_SKILL_TARGET_INSIGHT:
            return h >= 0
              ? "目标洞察值 " + f + "-" + y
              : "目标洞察值 " + T + "-" + g;
          case e.POWER_SKILL_TARGET_WIL:
            return (
              (d = s.Tool.getPointValue(Math.abs(h), 1)),
              (p = s.Tool.getPointValue(E, 1)),
              h >= 0
                ? "目标状态抵抗率 " + d + "-" + p
                : "目标状态抵抗率 " + d + "-" + p
            );
          case e.POWER_SKILL_TARGET_TOUCH:
            return h >= 0
              ? "目标伤害减免值 " + f + "-" + y
              : "目标伤害减免值 " + T + "-" + g;
          case e.POWER_IGNORE_BACK:
            return h >= 0
              ? "无视反击 " + f + "-" + y
              : "无视反击 " + f + "-" + y;
          case e.POWER_IGNORE_MAGIC_BACK:
            return h >= 0
              ? "无视魔法反馈 " + f + "-" + y
              : "无视魔法反馈 " + f + "-" + y;
          case e.POWER_IGNORE_BLOCK:
            return h >= 0
              ? "无视格挡 " + f + "-" + y
              : "无视格挡 " + f + "-" + y;
          case e.POWER_IGNORE_INSIGHT:
            return h >= 0
              ? "无视洞察 " + f + "-" + y
              : "无视洞察 " + f + "-" + y;
          case e.POWER_IGNORE_WIL:
            return h >= 0
              ? "无视状态抵抗 " + f + "-" + y
              : "无视状态抵抗 " + f + "-" + y;
          case e.POWER_IGNORE_TOUCH:
            return h >= 0
              ? "无视伤害减免 " + f + "-" + y
              : "无视伤害减免 " + f + "-" + y;
          case e.POWER_KEEPOUT_ATK_TIME:
            return h >= 0
              ? "免伤护盾 " + f + "-" + y
              : "免伤护盾 " + f + "-" + y;
          case e.POWER_CHEST_LV4:
            return "需要黄金钥匙";
          case e.POWER_COLOR_BOX:
            return "登陆礼盒";
          case e.POWER_GUN_ATK_TIME:
            return h >= 0
              ? "用火枪时攻击次数 " + f + "-" + y
              : "用火枪时攻击次数 " + f + "-" + y;
          case e.POWER_GUN_PERCENT:
            return h >= 0
              ? "火枪类武器伤害、耐久 " + f + "%-" + y + "%"
              : "火枪类武器伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_HAMMER_ATK_TIME:
            return h >= 0
              ? "用锤类时攻击次数 " + f + "-" + y
              : "用锤类攻击次数" + f + "-" + y;
          case e.POWER_HAMMER_PERCENT:
            return h >= 0
              ? "锤类武器伤害、耐久 " + f + "%-" + y + "%"
              : "锤类武器伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_FAN_ATK_TIME:
            return h >= 0
              ? "用扇子时攻击次数 " + f + "-" + y
              : "用扇子攻击次数" + f + "-" + y;
          case e.POWER_FAN_PERCENT:
            return h >= 0
              ? "扇类武器伤害、耐久 " + f + "%-" + y + "%"
              : "扇类武器伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_SKILL_SCROLL:
          case e.POWER_SKILL_SCROLL_PET:
          case e.POWER_NEW_GET_PET:
          case e.POWER_NEW_GET_ITEM:
          case e.POWER_ENCHANT_ITEM:
          case e.POWER_FORMATION_BOOK:
          case e.POWER_TURN_MONSTER_CARD:
          case e.POWER_SKILL_BOOK_PET:
            return "";
          case e.POWER_HP_MP:
            return "能量 " + f + "-" + y;
          case e.POWER_BLADE_L_ATK_TIME:
            return h >= 0
              ? "用轻刀时攻击次数 " + f + "-" + y
              : "用轻刀时攻击次数 " + f + "-" + y;
          case e.POWER_BLADE_H_ATK_TIME:
            return h >= 0
              ? "用重刀时攻击次数 " + f + "-" + y
              : "用重刀时攻击次数 " + f + "-" + y;
          case e.POWER_SWORD_L_ATK_TIME:
            return h >= 0
              ? "用轻剑时攻击次数 " + f + "-" + y
              : "用轻剑时攻击次数 " + f + "-" + y;
          case e.POWER_SWORD_H_ATK_TIME:
            return h >= 0
              ? "用重剑时攻击次数 " + f + "-" + y
              : "用重剑时攻击次数 " + f + "-" + y;
          case e.POWER_CROSSBOW_L_ATK_TIME:
            return h >= 0
              ? "用轻弩时攻击次数 " + f + "-" + y
              : "用轻弩时攻击次数 " + f + "-" + y;
          case e.POWER_CROSSBOW_H_ATK_TIME:
            return h >= 0
              ? "用重弩时攻击次数 " + f + "-" + y
              : "用重弩时攻击次数 " + f + "-" + y;
          case e.POWER_ARROW_ATK_TIME:
            return h >= 0
              ? "用弓箭时攻击次数 " + f + "-" + y
              : "用弓箭时攻击次数 " + f + "-" + y;
          case e.POWER_BLADE_L_DAMAGE_PERCENT:
            return h >= 0
              ? "轻刀武器伤害、耐久 " + f + "%-" + y + "%"
              : "轻刀武器伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_BLADE_H_DAMAGE_PERCENT:
            return h >= 0
              ? "重刀武器伤害、耐久 " + f + "%-" + y + "%"
              : "重刀武器伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_SWORD_L_DAMAGE_PERCENT:
            return h >= 0
              ? "轻剑武器伤害、耐久 " + f + "%-" + y + "%"
              : "轻剑武器伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_SWORD_H_DAMAGE_PERCENT:
            return h >= 0
              ? "重剑武器伤害、耐久 " + f + "%-" + y + "%"
              : "重剑武器伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_CROSSBOW_L_DAMAGE_PERCENT:
            return h >= 0
              ? "重弩武器伤害、耐久 " + f + "%-" + y + "%"
              : "重弩武器伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_CROSSBOW_H_DAMAGE_PERCENT:
            return h >= 0
              ? "轻弩武器伤害、耐久 " + f + "%-" + y + "%"
              : "轻弩武器伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_ARROW_DAMAGE_PERCENT:
            return h >= 0
              ? "弓箭武器伤害、耐久 " + f + "%-" + y + "%"
              : "弓箭武器伤害、耐久 " + f + "%-" + y + "%";
          case e.POWER_DEF_STR_RANGE:
            return h >= 0
              ? "远程劈砍防御点数 " + f + "-" + y
              : "远程劈砍防御点数 " + f + "-" + y;
          case e.POWER_DEF_STR_RANGE_PERCENT:
            return h >= 0
              ? "远程劈砍防御百分比 " + f + "%-" + y + "%"
              : "远程劈砍防御百分比 " + f + "%-" + y + "%";
          case e.POWER_DEF_STR_NEARBY:
            return h >= 0
              ? "近身劈砍防御点数 " + f + "-" + y
              : "近身劈砍防御点数 " + f + "-" + y;
          case e.POWER_DEF_STR_NEARBY_PERCENT:
            return h >= 0
              ? "近身劈砍防御百分比 " + f + "%-" + y + "%"
              : "近身劈砍防御百分比 " + f + "%-" + y + "%";
          case e.POWER_DEF_AGI_RANGE:
            return h >= 0
              ? "远程穿刺防御点数 " + f + "-" + y
              : "远程穿刺防御点数 " + f + "-" + y;
          case e.POWER_DEF_AGI_RANGE_PERCENT:
            return h >= 0
              ? "远程穿刺防御百分比 " + f + "%-" + y + "%"
              : "远程穿刺防御百分比 " + f + "%-" + y + "%";
          case e.POWER_DEF_AGI_NEARBY:
            return h >= 0
              ? "近身穿刺防御点数 " + f + "-" + y
              : "近身穿刺防御点数 " + f + "-" + y;
          case e.POWER_DEF_AGI_NEARBY_PERCENT:
            return h >= 0
              ? "近身穿刺防御百分比 " + f + "%-" + y + "%"
              : "近身穿刺防御百分比 " + f + "%-" + y + "%";
          case e.POWER_ATK_STR_NEARBY:
            return h >= 0
              ? "近身劈砍攻击点数 " + f + "-" + y
              : "近身劈砍攻击点数 " + f + "-" + y;
          case e.POWER_ATK_STR_NEARBY_PERCENT:
            return h >= 0
              ? "近身劈砍攻击百分比 " + f + "%-" + y + "%"
              : "近身劈砍攻击百分比 " + f + "%-" + y + "%";
          case e.POWER_ATK_STR_RANGE:
            return h >= 0
              ? "远程劈砍攻击点数 " + f + "-" + y
              : "远程劈砍攻击点数 " + f + "-" + y;
          case e.POWER_ATK_STR_RANGE_PERCENT:
            return h >= 0
              ? "远程劈砍攻击百分比 " + f + "%-" + y + "%"
              : "远程劈砍攻击百分比 " + f + "%-" + y + "%";
          case e.POWER_ATK_AGI_NEARBY:
            return h >= 0
              ? "近战穿刺攻击点数 " + f + "-" + y
              : "近战穿刺攻击点数 " + f + "-" + y;
          case e.POWER_ATK_AGI_NEARBY_PERCENT:
            return h >= 0
              ? "近战穿刺攻击百分比 " + f + "%-" + y + "%"
              : "近战穿刺攻击百分比 " + f + "%-" + y + "%";
          case e.POWER_ATK_AGI_RANGE:
            return h >= 0
              ? "远程穿刺攻击点数 " + f + "-" + y
              : "远程穿刺攻击点数 " + f + "-" + y;
          case e.POWER_ATK_AGI_RANGE_PERCENT:
            return h >= 0
              ? "远程穿刺攻击百分比 " + f + "%-" + y + "%"
              : "远程穿刺攻击百分比 " + f + "%-" + y + "%";
          case e.POWER_IGNORE_CRITICAL:
            return h >= 0
              ? "抗致命点数 " + f + "-" + y
              : "抗致命点数 " + f + "-" + y;
          case e.POWER_IGNORE_CRITICAL_PERCENT:
            return h >= 0
              ? "抗致命点数百分比 " + f + "%-" + y + "%"
              : "抗致命点数百分比 " + f + "%-" + y + "%";
          case e.POWER_CRITICAL_DAMAGE:
            return h >= 0
              ? "致命伤害 " + f + "%-" + y + "%"
              : "致命伤害 " + f + "%-" + y + "%";
          case e.POWER_CRITICAL_DAMAGE_PERCENT:
            return h >= 0
              ? "致命伤害百分比 " + f + "%-" + y + "%"
              : "致命伤害百分比 " + f + "%-" + y + "%";
        }
        return "未知power_" + t + "_" + h + "_" + E;
      }),
      (e.getSkillTypeString = function (e) {
        return 0 > e || e >= this.skillTypeText.length
          ? "skillType_" + e
          : this.skillTypeText[e];
      }),
      (e.getSkillWeaponString = function (t) {
        return 0 > t || t >= e.skillWeaponText.length
          ? "weapon_" + t
          : e.skillWeaponText[t];
      }),
      (e.getSearchTypeByArea = function (t) {
        return (t >= e.SKILL_AREA_ENEMY_SINGLE &&
          t <= e.SKILL_AREA_ENEMY_ALL) ||
          t == e.SKILL_AREA_ENEMY_HP_LEAST ||
          t == e.SKILL_AREA_ENEMY_HP_MOST
          ? e.SKILL_AREA_SEARCH_ENEMY
          : (t >= e.SKILL_AREA_ME_SIGHLE && t <= e.SKILL_AREA_ME_ALL) ||
              t == e.SKILL_AREA_ME_HP_LEAST ||
              t == e.SKILL_AREA_ME_HP_MOST ||
              t == e.SKILL_AREA_ME_ALL_NO_SELF
            ? e.SKILL_AREA_SEARCH_FRIEND
            : t == e.SKILL_AREA_MY_SELF
              ? e.SKILL_AREA_SEARCH_MY_SELF
              : t == e.SKILL_AREA_MY_OWNER
                ? e.SKILL_AREA_SEARCH_MY_OWNER
                : e.SKILL_AREA_SEARCH_ALL;
      }),
      (e.getSkillAreaPlayerNum = function (t) {
        switch (t) {
          case e.SKILL_AREA_PLAYER_AND_PET:
          case e.SKILL_AREA_FRONT_BACK_TWO:
          case e.SKILL_AREA_UP_DOWN_TWO:
          case e.SKILL_AREA_ENEMY_FONT_BACK_TWO:
          case e.SKILL_AREA_ENEMY_UP_DOWN_TWO:
          case e.SKILL_AREA_ME_FONT_BACK_TWO:
          case e.SKILL_AREA_ME_UP_DOWN_TWO:
            return e.SKILL_AREA_CURSOR_2;
          case e.SKILL_AREA_UP_DOWN_THREE:
          case e.SKILL_AREA_ENEMY_UP_DOWN_THREE:
          case e.SKILL_AREA_ME_UP_DOWN_THREE:
            return e.SKILL_AREA_CURSOR_3;
          case e.SKILL_AREA_UP_DOWN_FOUR:
          case e.SKILL_AREA_ENEMY_UP_DOWN_FOUR:
          case e.SKILL_AREA_ME_UP_DOWN_FOUR:
          case e.SKILL_AREA_SQUARE:
          case e.SKILL_AREA_ENEMY_SQUARE:
          case e.SKILL_AREA_ME_SQUARE:
          case e.SKILL_AREA_TEN:
          case e.SKILL_AREA_ENEMY_TEN:
          case e.SKILL_AREA_ME_TEN:
            return e.SKILL_AREA_CURSOR_4;
          case e.SKILL_AREA_UP_DOWN_FIVE:
          case e.SKILL_AREA_ENEMY_UP_DOWN_FIVE:
          case e.SKILL_AREA_ME_UP_DOWN_FIVE:
            return e.SKILL_AREA_CURSOR_5;
          case e.SKILL_AREA_AROUND_SIX:
          case e.SKILL_AREA_ENEMY_AROUND_SIX:
          case e.SKILL_AREA_ME_AROUND_SIX:
            return e.SKILL_AREA_CURSOR_6;
          case e.SKILL_AREA_ALL:
          case e.SKILL_AREA_ENEMY_ALL:
          case e.SKILL_AREA_ME_ALL:
          case e.SKILL_AREA_ME_ALL_NO_SELF:
          case e.SKILL_AREA_ALL_NO_SELF:
            return e.SKILL_AREA_CURSOR_ALL;
        }
        return e.SKILL_AREA_CURSOR_1;
      }),
      (e.getSkillAreaString = function (t) {
        return 0 > t || t >= e.skillAreaText.length
          ? "skillArea_" + t
          : e.skillAreaText[t];
      }),
      (e.getSkillPositionString = function (t) {
        return 0 > t || t >= e.skillPositionText.length
          ? "skillPos_" + t
          : e.skillPositionText[t];
      }),
      (e.getGradeString = function (t, i) {
        return 0 > t || t >= e.gradeText.length
          ? "无限制"
          : i && t == e.GRADE_1
            ? "优秀"
            : e.gradeText[t];
      }),
      (e.getGradeColor = function (t) {
        switch (t) {
          case e.GRADE_0:
            return 16777215;
          case e.GRADE_1:
            return 8967498;
          case e.GRADE_2:
            return 2674687;
          case e.GRADE_3:
            return 16757760;
          case e.GRADE_4:
            return 13006335;
          case e.GRADE_5:
            return 13389647;
        }
        return s.Tool.COLOR_WHITE;
      }),
      (e.getGradeStrokeColor = function (t) {
        switch (t) {
          case e.GRADE_0:
            return 4144959;
          case e.GRADE_1:
            return 3562037;
          case e.GRADE_2:
            return 2837086;
          case e.GRADE_3:
            return 7486222;
          case e.GRADE_4:
            return 5711226;
          case e.GRADE_5:
            return 7021604;
        }
        return 4144959;
      }),
      (e.getItemTypeString = function (t) {
        return 0 > t || t >= e.itemTypeText.length
          ? "itemtype_" + t
          : e.itemTypeText[t];
      }),
      (e.isOneHandWeapon = function (t, i) {
        return e.isNullHand(t, i)
          ? !1
          : e.isTwoHand(t, i) &&
              t != e.ITEM_TYPE_WEAPON_ONEHAND_HAND &&
              i != e.ITEM_TYPE_WEAPON_ONEHAND_HAND
            ? !1
            : e.isNoHeavyTypeWeapon(t) || e.isNoHeavyTypeWeapon(i)
              ? !0
              : !1;
      }),
      (e.isNoHeavyTypeWeapon = function (t) {
        return t > 0 &&
          (t == e.ITEM_TYPE_WEAPON_ONEHAND_SWORD ||
            t == e.ITEM_TYPE_WEAPON_ONEHAND_BLADE ||
            t == e.ITEM_TYPE_WEAPON_ONEHAND_HEAVY ||
            t == e.ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW ||
            t == e.ITEM_TYPE_WEAPON_ONEHAND_HEAVY ||
            t == e.ITEM_TYPE_WEAPON_ONEHAND_GUN ||
            t == e.ITEM_TYPE_WEAPON_ONEHAND_HAMMER)
          ? !0
          : !1;
      }),
      (e.isHeavyTypeWeapon = function (t) {
        return t > 0 &&
          (t == e.ITEM_TYPE_WEAPON_TWOHAND_SWORD ||
            t == e.ITEM_TYPE_WEAPON_TWOHAND_BLADE ||
            t == e.ITEM_TYPE_WEAPON_TWOHAND_HEAVY ||
            t == e.ITEM_TYPE_WEAPON_TWOHAND_STAFF ||
            t == e.ITEM_TYPE_WEAPON_TWOHAND_LANCE ||
            t == e.ITEM_TYPE_WEAPON_TWOHAND_CROSSBOW ||
            t == e.ITEM_TYPE_WEAPON_TWOHAND_BOW ||
            t == e.ITEM_TYPE_WEAPON_BALL ||
            t == e.ITEM_TYPE_WEAPON_TWOHAND_GUN ||
            t == e.ITEM_TYPE_WEAPON_TWOHAND_HAMMER ||
            t == e.ITEM_TYPE_WEAPON_TWOHAND_FAN)
          ? !0
          : !1;
      }),
      (e.isNullHand = function (e, t) {
        return 0 > e && 0 > t ? !0 : !1;
      }),
      (e.isTwoHand = function (e, t) {
        return e > 0 && t > 0 ? !0 : !1;
      }),
      (e.isValidSword = function (t, i) {
        return e.isValidOneSword(t, i) || e.isValidTwoSword(t, i);
      }),
      (e.isValidBlade = function (t, i) {
        return e.isValidOneBlade(t, i) || e.isValidTwoBlade(t, i);
      }),
      (e.isValidHeavy = function (t, i) {
        return e.isValidOneHeavy(t, i) || e.isValidTwoHeavy(t, i);
      }),
      (e.isValidCrossrow = function (t, i) {
        return e.isValidOneCrossrow(t, i) || e.isValidTwoCrossrow(t, i);
      }),
      (e.isValidGun = function (t, i) {
        return e.isValidOneGun(t, i) || e.isValidTwoGun(t, i);
      }),
      (e.isValidHammer = function (t, i) {
        return e.isValidOneHammer(t, i) || e.isValidTwoHammer(t, i);
      }),
      (e.isValidFan = function (t, i) {
        return e.isValidTwoFan(t, i);
      }),
      (e.isValidLance = function (t, i) {
        return (
          e.ITEM_TYPE_WEAPON_TWOHAND_LANCE == t ||
          e.ITEM_TYPE_WEAPON_TWOHAND_LANCE == i
        );
      }),
      (e.isValidOneSword = function (t, i) {
        return (
          e.ITEM_TYPE_WEAPON_ONEHAND_SWORD == t ||
          e.ITEM_TYPE_WEAPON_ONEHAND_SWORD == i
        );
      }),
      (e.isValidTwoSword = function (t, i) {
        return (
          e.ITEM_TYPE_WEAPON_TWOHAND_SWORD == t ||
          e.ITEM_TYPE_WEAPON_TWOHAND_SWORD == i
        );
      }),
      (e.isValidOneBlade = function (t, i) {
        return (
          e.ITEM_TYPE_WEAPON_ONEHAND_BLADE == t ||
          e.ITEM_TYPE_WEAPON_ONEHAND_BLADE == i
        );
      }),
      (e.isValidTwoBlade = function (t, i) {
        return (
          e.ITEM_TYPE_WEAPON_TWOHAND_BLADE == t ||
          e.ITEM_TYPE_WEAPON_TWOHAND_BLADE == i
        );
      }),
      (e.isValidOneHeavy = function (t, i) {
        return (
          e.ITEM_TYPE_WEAPON_ONEHAND_HEAVY == t ||
          e.ITEM_TYPE_WEAPON_ONEHAND_HEAVY == i
        );
      }),
      (e.isValidTwoHeavy = function (t, i) {
        return (
          e.ITEM_TYPE_WEAPON_TWOHAND_HEAVY == t ||
          e.ITEM_TYPE_WEAPON_TWOHAND_HEAVY == i
        );
      }),
      (e.isValidOneCrossrow = function (t, i) {
        return (
          e.ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW == t ||
          e.ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW == i
        );
      }),
      (e.isValidTwoCrossrow = function (t, i) {
        return (
          e.ITEM_TYPE_WEAPON_TWOHAND_CROSSBOW == t ||
          e.ITEM_TYPE_WEAPON_TWOHAND_CROSSBOW == i
        );
      }),
      (e.isValidBow = function (t, i) {
        return (
          e.ITEM_TYPE_WEAPON_TWOHAND_BOW == t ||
          e.ITEM_TYPE_WEAPON_TWOHAND_BOW == i
        );
      }),
      (e.isValidStaff = function (t, i) {
        return (
          e.ITEM_TYPE_WEAPON_TWOHAND_STAFF == t ||
          e.ITEM_TYPE_WEAPON_TWOHAND_STAFF == i
        );
      }),
      (e.isValidBall = function (t, i) {
        return e.ITEM_TYPE_WEAPON_BALL == t || e.ITEM_TYPE_WEAPON_BALL == i;
      }),
      (e.isValidOneGun = function (t, i) {
        return (
          e.ITEM_TYPE_WEAPON_ONEHAND_GUN == t ||
          e.ITEM_TYPE_WEAPON_ONEHAND_GUN == i
        );
      }),
      (e.isValidTwoGun = function (t, i) {
        return (
          e.ITEM_TYPE_WEAPON_TWOHAND_GUN == t ||
          e.ITEM_TYPE_WEAPON_TWOHAND_GUN == i
        );
      }),
      (e.isValidOneHammer = function (t, i) {
        return (
          e.ITEM_TYPE_WEAPON_ONEHAND_HAMMER == t ||
          e.ITEM_TYPE_WEAPON_ONEHAND_HAMMER == i
        );
      }),
      (e.isValidTwoHammer = function (t, i) {
        return (
          e.ITEM_TYPE_WEAPON_TWOHAND_HAMMER == t ||
          e.ITEM_TYPE_WEAPON_TWOHAND_HAMMER == i
        );
      }),
      (e.isValidTwoFan = function (t, i) {
        return (
          e.ITEM_TYPE_WEAPON_TWOHAND_FAN == t ||
          e.ITEM_TYPE_WEAPON_TWOHAND_FAN == i
        );
      }),
      (e.getSexString = function (e) {
        return 0 > e || e >= this.sexTEXT.length ? "sex_" + e : this.sexTEXT[e];
      }),
      (e.getRaceString = function (e) {
        return 0 > e || e >= this.raceText.length
          ? "race_" + e
          : this.raceText[e];
      }),
      (e.getSkillJobIcon = function (t) {
        return (
          (0 > t || t >= e.skillJobIcon.length) && (t = 0),
          e.skillJobIcon[t]
        );
      }),
      (e.getJobString = function (e) {
        return 0 > e || e >= this.jobText.length ? "job_" + e : this.jobText[e];
      }),
      (e.getJobInfoString = function (e) {
        return 0 > e || e >= this.jobInfoText.length
          ? "jobinfo_" + e
          : this.jobInfoText[e];
      }),
      (e.getSkillGenreInfoString = function (e) {
        return 0 > e || e >= this.skillGenreInfoText.length
          ? "skillGenreInfoText_" + e
          : this.skillGenreInfoText[e];
      }),
      (e.getJobByRace = function (t, i) {
        if (0 > t || t >= e.raceJobList.length) return e.JOB_WARRIOR;
        var o = e.raceJobList[t];
        return null == o
          ? e.JOB_WARRIOR
          : 0 > i || i >= o.length
            ? e.JOB_WARRIOR
            : e.raceJobList[t][i];
      }),
      (e.getRankString = function (e) {
        return 0 > e || e >= this.rankText.length
          ? ""
          : 0 == e
            ? "--"
            : this.rankText[e];
      }),
      (e.getBuildingText = function (e) {
        return 0 > e || e >= this.buildingText.length
          ? "building_" + e
          : 0 == e
            ? "等级"
            : this.buildingText[e].labelDisplay;
      }),
      (e.getBuildingText2 = function (e) {
        return 0 > e || e >= this.buildingText.length
          ? "building_" + e
          : 0 == e
            ? "国家"
            : this.buildingText[e].labelDisplay;
      }),
      (e.getSearchMemText = function (e) {
        return 0 > e || e >= this.searchMemText.length
          ? "searchMem_" + e
          : this.searchMemText[e];
      }),
      (e.getAtkTypeString = function (e) {
        return 0 > e || e >= this.AtkTypeText.length
          ? "atkType_" + e
          : this.AtkTypeText[e];
      }),
      (e.isPhysicalAtkType = function (e) {
        return e <= this.ATKTYPE_RANGE_AGI;
      }),
      (e.getBuffIcon = function (t) {
        switch (t) {
          case e.BUFFER_NONE:
            return null;
          case e.BUFFER_POISON:
            return "buff_icon_zd";
          case e.BUFFER_BURN:
            return "buff_icon_ss";
          case e.BUFFER_BLOOD:
            return "buff_icon_lx";
          case e.BUFFER_ATTR_DOWN:
            return "buff_icon_js";
          case e.BUFFER_BLOCK_TALK:
            return "buff_icon_jy";
          case e.BUFFER_BLOCK_SKILL:
            return "buff_icon_jf";
          case e.BUFFER_SILENCE:
            return "buff_icon_fmo";
          case e.BUFFER_STUN:
            return "buff_icon_ds";
          case e.BUFFER_CHAO:
            return "buff_icon_hl";
          case e.BUFFER_WEAK:
            return "buff_icon_sr";
          case e.BUFFER_SNEER:
            return "buff_icon_cf";
          case e.BUFFER_TYPE_DEBUFF:
          case e.BUFFER_DIE_CANNOT_RELIVE:
            return "buff_icon_fm";
          case e.BUFFER_ATTR_UP:
          case e.BUFFER_ADD_MP:
          case e.BUFFER_ADD_HP:
            return "buff_icon_hf";
          case e.BUFFER_HIDE:
            return "buff_icon_hy";
          case e.BUFFER_RESIST_MAGIC:
            return "buff_icon_mm";
          case e.BUFFER_RESIST_PHYSIC:
            return "buff_icon_wm";
          case e.BUFFER_RESIST_SILENCE:
          case e.BUFFER_RESIST_STUN:
          case e.BUFFER_RESIST_CHAO:
          case e.BUFFER_RESIST_DEBUFF:
          case e.BUFFER_RESIST_TALK:
          case e.BUFFER_RESIST_SKILL:
          case e.BUFFER_RESIST_WEAK:
          case e.BUFFER_RESIST_SNEER:
            return "buff_icon_my";
          case e.BUFFER_INVINCIBLE:
            return "buff_icon_wd";
          case e.BUFFER_TYPE_BUFF:
          case e.BUFFER_RESIST_DIE_1HP:
          case e.BUFFER_RESIST_DIE_FULLHP:
          case e.BUFFER_RESIST_DIE_DELAY:
            return "buff_icon_zm";
        }
      }),
      (e.getBufferBitValue = function (t) {
        return t == e.BUFFER_NONE ? 0 : t >= 30 ? Math.pow(2, t) : 1 << t;
      }),
      (e.getBufferString = function (t) {
        return 0 > t || t >= e.bufferText.length
          ? "buffer_" + t
          : e.bufferText[t];
      }),
      (e.getBufferType = function (t, i) {
        if ((void 0 === i && (i = !1), 1 == i)) {
          if (
            t >= e.getBufferBitValue(e.BUFFER_POISON) &&
            t <= e.getBufferBitValue(e.BUFFER_WEAK)
          )
            return e.BUFFER_TYPE_DEBUFF;
          if (t == e.getBufferBitValue(e.BUFFER_DIE_CANNOT_RELIVE))
            return e.BUFFER_TYPE_DEBUFF;
          if (t == e.getBufferBitValue(e.BUFFER_SNEER))
            return e.BUFFER_TYPE_DEBUFF;
        } else {
          if (t >= e.BUFFER_POISON && t <= e.BUFFER_WEAK)
            return e.BUFFER_TYPE_DEBUFF;
          if (t == e.BUFFER_DIE_CANNOT_RELIVE) return e.BUFFER_TYPE_DEBUFF;
          if (t == e.BUFFER_SNEER) return e.BUFFER_TYPE_DEBUFF;
        }
        return e.BUFFER_TYPE_BUFF;
      }),
      (e.isHairItem = function (t) {
        return t >= e.ITEM_ID_HAIR_START && t <= e.ITEM_ID_HAIR_END;
      }),
      (e.isFaceItem = function (t) {
        return t >= e.ITEM_ID_FACE_START && t <= e.ITEM_ID_FACE_END;
      }),
      (e.isChangeJobItem = function (t) {
        return t >= e.ITEM_ID_JOB_START && t <= e.ITEM_ID_JOB_END;
      }),
      (e.isCountrySkillShop = function (t) {
        return t >= e.SKILL_SHOP_COUNTRY_START_PLAYER &&
          t <= e.SKILL_SHOP_COUNTRY_END_PLAYER
          ? !0
          : t >= e.SKILL_SHOP_COUNTRY_START_PET &&
              t <= e.SKILL_SHOP_COUNTRY_END_PET
            ? !0
            : !1;
      }),
      (e.getTypeBySkillShopID = function (t) {
        return t >= e.SKILL_SHOP_START_PLAYER && t < e.SKILL_SHOP_END_PLAYER
          ? e.SKILL_TYPE_PLAYER
          : t >= e.SKILL_SHOP_START_PET && t < e.SKILL_SHOP_END_PET
            ? e.SKILL_TYPE_PET
            : e.SKILL_TYPE_OTHER;
      }),
      (e.getTypeBySkillID = function (t) {
        return t < e.SKILL_END_PLAYER
          ? e.SKILL_ID_TYPE_PLAYER
          : t < e.SKILL_END_PET_NORMAL_TALENT
            ? e.SKILL_ID_PET_NORMAL_TALENT
            : t < e.SKILL_END_PET_LEARN_TALENT
              ? e.SKILL_ID_PET_LEARN_TALENT
              : e.SKILL_ID_OTHER;
      }),
      (e.isPetTalentSkill = function (t) {
        var i = e.getTypeBySkillID(t);
        return (
          i == e.SKILL_ID_PET_NORMAL_TALENT || i == e.SKILL_ID_PET_LEARN_TALENT
        );
      }),
      (e.isEscortMap = function (t) {
        return t == e.MAP_ID_ESCORT;
      }),
      (e.isTeamBoss = function (t) {
        return t == e.MAP_ID_TEAMBOSS;
      }),
      (e.isCountryWarMap = function (t) {
        return t == e.MAP_ID_COUNTRY_WAR;
      }),
      (e.isCountryBossMap = function (t) {
        return t == e.MAP_ID_COUNTRY_BOSS;
      }),
      (e.isMapUpdata = function (t) {
        return t == e.MAP_ID_ARENA_SINGLE ||
          t == e.MAP_ID_CHALLENGE ||
          t == e.MAP_ID_ARENA_TEAM ||
          t == e.MAP_ID_ARENA_SINGLE_CROSS ||
          t == e.MAP_ID_ARENA_TEAM_CROSS
          ? !0
          : !1;
      }),
      (e.isCommonMap = function (t) {
        return t >= e.MAP_ID_START_COMMON && t <= e.MAP_ID_END_COMMON ? !0 : !1;
      }),
      (e.isCityMap = function (t) {
        return (t >= e.MAP_ID_START_CITY_EAST && t <= e.MAP_ID_END_CITY_EAST) ||
          (t >= e.MAP_ID_START_CITY_WEST && t <= e.MAP_ID_END_CITY_WEST)
          ? !0
          : !1;
      }),
      (e.isAllocateCityMap = function (t) {
        return t >= e.MAP_ID_START_CITY_ALLOCATE &&
          t <= e.MAP_ID_END_CITY_ALLOCATE
          ? !0
          : !1;
      }),
      (e.isCountryMap = function (t) {
        return (t >= e.MAP_ID_START_COUNTRY_EAST &&
          t <= e.MAP_ID_END_COUNTRY_EAST) ||
          (t >= e.MAP_ID_START_COUNTRY_WEST && t <= e.MAP_ID_END_COUNTRY_WEST)
          ? !0
          : !1;
      }),
      (e.isAllocateCountryMap = function (t) {
        return t >= e.MAP_ID_START_COUNTRY_ALLOCATE &&
          t <= e.MAP_ID_END_COUNTRY_ALLOCATE
          ? !0
          : !1;
      }),
      (e.isMirrorMap = function (t) {
        return t >= e.MAP_ID_START_MIRROR && t <= e.MAP_ID_END_MIRROR ? !0 : !1;
      }),
      (e.isAllocateMirrorMap = function (t) {
        return t >= e.MAP_ID_START_MIRROR_ALLOCATE &&
          t <= e.MAP_ID_END_MIRROR_ALLOCATE
          ? !0
          : !1;
      }),
      (e.getAreaID = function (t, i) {
        var o = t / e.ID_PER_AREA,
          n = t,
          a = e.startChar.charCodeAt(0) + o,
          r = "!".charCodeAt(0);
        return (
          a > e.endChar.charCodeAt(0) &&
            ((r =
              e.startChar.charCodeAt(0) + ((a % e.endChar.charCodeAt(0)) - 1)),
            (a = e.startChar.charCodeAt(0))),
          1 == i
            ? r != "!".charCodeAt(0)
              ? "" + String.fromCharCode(a) + String.fromCharCode(r) + n
              : "" + String.fromCharCode(a) + n
            : "" + n
        );
      }),
      (e.getIdByAreaID = function (e, t) {
        var i = this.startChar.charCodeAt(0),
          o = this.endChar.charCodeAt(0);
        try {
          if (null == e || "" == e.trim()) return 0;
          var n = e.charCodeAt(0),
            a = "!".charCodeAt(0);
          e.length >= 2 && (a = e.charCodeAt(1));
          var r = 0;
          return (
            n >= i && o >= n
              ? a >= i && o >= a
                ? ((r = o - i + 1 + (a - i)), (e = e.substring(2)))
                : ((r = n - i), (e = e.substring(1)))
              : ((r = t / this.ID_PER_AREA), (r = l.GUtil.intNum(r))),
            (r * this.ID_PER_AREA + +parseInt(e)) | 0
          );
        } catch (s) {
          return (console.error(s), 0);
        }
      }),
      (e.getMonsterAIConditionString = function (e) {
        var t = this.monsterAIConditionText;
        return 0 > e || e >= t.length ? "condition_" + e : t[e];
      }),
      (e.getMonsterAIString = function (e) {
        var t = this.monsterAIText;
        return 0 > e || e >= t.length ? "AI_" + e : t[e];
      }),
      (e.getMonsterTypeString = function (e) {
        return 0 > e || e >= this.monsterTypeText.length
          ? "monsterType_" + e
          : this.monsterTypeText[e];
      }),
      (e.getMonsterGroupTypeString = function (e) {
        return 0 > e || e >= this.monsterGroupTypeText.length
          ? "groupType_" + e
          : this.monsterGroupTypeText[e];
      }),
      (e.isNetBattleID = function (t) {
        return t >= e.BATTLE_NET_START && t <= e.BATTLE_NET_END;
      }),
      (e.getMercenaryFightString = function (t) {
        return 0 > t || t >= e.mercenaryFight.length
          ? "mercenaryFight_" + t
          : e.mercenaryFight[t];
      }),
      (e.isComposeShop = function (t) {
        return t >= e.SHOP_COMPOSE_START && t < e.SHOP_COMPOSE_END;
      }),
      (e.isIntegralShop = function (t) {
        return t >= e.SHOP_INTEGRAL_START && t < e.SHOP_INTEGRAL_END;
      }),
      (e.isArenaShop = function (t) {
        return t >= e.SHOP_SPORT_START && t < e.SHOP_SPORT_END;
      }),
      (e.isCrossOneArenaShop = function (t) {
        return t == e.CROSS_ONE_ARENA;
      }),
      (e.isCrossOneArenaRankShop = function (t) {
        return t == e.CROSS_ONE_ARENA_RANK;
      }),
      (e.isCrossOneArenaSignupShop = function (t) {
        return t == e.CROSS_ONE_ARENA_SIGN_UP;
      }),
      (e.isCrossOneArenaCancelShop = function (t) {
        return t == e.CROSS_ONE_ARENA_CANCEL;
      }),
      (e.isCrossPKShop = function (t) {
        return t == e.CROSS_PK;
      }),
      (e.isCrossPKSignupShop = function (t) {
        return t == e.CROSS_PK_SIGN_UP;
      }),
      (e.isCrossPKCancelShop = function (t) {
        return t == e.CROSS_PK_CANCEL;
      }),
      (e.isSkyArenaShop = function (t) {
        return t >= e.SHOP_SKY_START && t < e.SHOP_SKY_END;
      }),
      (e.isVipShop = function (t) {
        return (
          (t >= e.SHOP_VIP_COUNTRY_START && t <= e.SHOP_VIP_COUNTRY_END) ||
          (t >= e.SHOP_VIP_START && t <= e.SHOP_VIP_END)
        );
      }),
      (e.isSuperQQShop = function (t) {
        return (
          (t >= e.SHOP_SUPER_QQ_COUNTRY_START &&
            t <= e.SHOP_SUPER_QQ_COUNTRY_END) ||
          (t >= e.SHOP_SUPER_QQ_START && t <= e.SHOP_SUPER_QQ_END)
        );
      }),
      (e.isPetShop = function (t) {
        return t >= e.SHOP_PET_START && t < e.SHOP_PET_END;
      }),
      (e.isCrossServerActivity = function (t) {
        return t == e.CROSS_SERVER_ACTIVITY;
      }),
      (e.isFurnaceShop = function (t) {
        return t >= e.FURNACE_START && t < e.FURNACE_END;
      }),
      (e.isSoldierShop = function (t) {
        return t >= e.SHOP_SOLDIER_START && t <= e.SHOP_SOLDIER_END;
      }),
      (e.isCountrySoldierShop = function (t) {
        return t >= e.SHOP_SOLDIER_COUNTRY_START && t <= e.SHOP_SOLDIER_END;
      }),
      (e.isCountryShop = function (t) {
        return t >= e.SHOP_COUNTRY_START && t <= e.SHOP_COUNTRY_END;
      }),
      (e.isEnchantShop = function (t) {
        return t >= e.SHOP_ENCHANT_START && t < e.SHOP_ENCHANT_COUNTRY_START;
      }),
      (e.isEnchantCountryShop = function (t) {
        return t >= e.SHOP_ENCHANT_COUNTRY_START && t <= e.SHOP_ENCHANT_END;
      }),
      (e.isAdvancedShop = function (t) {
        return t >= e.SHOP_ADVANCED_START && t < e.SHOP_ADVANCED_END;
      }),
      (e.isGuessGameShop = function (t) {
        return t >= e.SHOP_MINIGAME_START && t <= e.SHOP_MINIGAME_END;
      }),
      (e.getBufferInfoString = function (e) {
        return 0 > e || e >= this.bufferInfoText.length
          ? "buffer_" + e
          : this.bufferInfoText[e];
      }),
      (e.getAnimeStartType = function (e) {
        return 7 & e;
      }),
      (e.getAnimeTraceType = function (e) {
        return (e >> 3) & 7;
      }),
      (e.getCountryBookText = function (t) {
        return s.Tool.isArrayIndexOutOfBounds(t, e.countryBooks)
          ? "countryBook_" + t
          : e.countryBooks[t];
      }),
      (e.getResourseText = function (t, i) {
        switch (t) {
          case e.ITEM_ID_WOOD:
            return i + "木材";
          case e.ITEM_ID_STONE:
            return i + "石材";
          case e.ITEM_ID_IRON:
            return i + "铁矿";
          default:
            return "数据错误";
        }
      }),
      (e.getGoodsTypeText = function (t) {
        return s.Tool.isArrayIndexOutOfBounds(t, e.goodsTypeText)
          ? null
          : e.goodsTypeText[t];
      }),
      (e.getGoodsType = function (t) {
        return s.Tool.isArrayIndexOutOfBounds(t, e.goodsType)
          ? -1
          : e.goodsType[t];
      }),
      (e.getGoodsIcon = function (t) {
        return s.Tool.isArrayIndexOutOfBounds(t, e.goodsIcon)
          ? e.goodsIcon[e.goodsIcon.length - 1]
          : e.goodsIcon[t];
      }),
      (e.getPurchaseTypeText = function (t) {
        return s.Tool.isArrayIndexOutOfBounds(t, e.purchaseTypeText)
          ? null
          : e.purchaseTypeText[t];
      }),
      (e.getPurchaseType = function (t) {
        return s.Tool.isArrayIndexOutOfBounds(t, e.purchaseType)
          ? -1
          : e.purchaseType[t];
      }),
      (e.getPurchaseIcon = function (t) {
        return s.Tool.isArrayIndexOutOfBounds(t, e.purchaseIcon)
          ? e.purchaseIcon[0]
          : e.purchaseIcon[t];
      }),
      (e.getItemVocation = function (t) {
        var i = t.id,
          o = t.type;
        if (this.PHYSICAL_WEAPON_TYPES.includes(o)) return this.PHYSICAL_JOBS;
        if (this.MAGIC_WEAPON_TYPES.includes(o)) return this.MAGIC_JOBS;
        for (var n = 0, a = e.RANGER_START.length; a > n; ++n)
          if (i >= e.RANGER_START[n] && i <= e.RANGER_END[n])
            return e.JOB_RANGER;
        for (var n = 0, a = e.XIUZHEN_START.length; a > n; ++n)
          if (i >= e.XIUZHEN_START[n] && i <= e.XIUZHEN_END[n])
            return e.JOB_XIUZHEN;
        for (var n = 0, a = e.WARRIOR_START.length; a > n; ++n)
          if (i >= e.WARRIOR_START[n] && i <= e.WARRIOR_END[n])
            return e.JOB_WARRIOR;
        for (var n = 0, a = e.WIZARD_START.length; a > n; ++n)
          if (i >= e.WIZARD_START[n] && i <= e.WIZARD_END[n])
            return e.JOB_WIZARD;
        return i >= e.NEW_START[0] && i <= e.NEW_END[0]
          ? e.JOB_NEW
          : i >= e.BACKUP2_START[0] && i <= e.BACKUP2_END[0]
            ? e.JOB_BACKUP2
            : i >= e.BACKUP3_START[0] && i <= e.BACKUP3_END[0]
              ? e.JOB_BACKUP3
              : i >= e.BACKUP4_START[0] && i <= e.BACKUP4_END[0]
                ? e.JOB_CHUISHI
                : i >= e.BACKUP5_START[0] && i <= e.BACKUP5_END[0]
                  ? e.JOB_LANWU
                  : -2;
      }),
      (e.setShowOther = function (e) {
        e
          ? egret.localStorage.setItem("ShowOther", "1")
          : egret.localStorage.setItem("ShowOther", "0");
      }),
      (e.getShowOther = function () {
        var e = egret.localStorage.getItem("ShowOther");
        return e ? "1" == e : !0;
      }),
      (e.setShowFar = function (e) {
        e
          ? egret.localStorage.setItem("ShowFar", "1")
          : egret.localStorage.setItem("ShowFar", "0");
      }),
      (e.getShowFar = function () {
        var e = egret.localStorage.getItem("ShowFar");
        return e ? "1" == e : !1;
      }),
      (e.getShowPK = function () {
        var e = d["default"].myPlayer;
        if (!e) return !1;
        var t = egret.localStorage.getItem("ShowPK_" + e.id);
        return "1" == t;
      }),
      (e.setShowPK = function (e) {
        var t = d["default"].myPlayer;
        t &&
          (e
            ? egret.localStorage.setItem("ShowPK_" + t.id, "1")
            : egret.localStorage.setItem("ShowPK_" + t.id, "0"));
      }),
      (e.LANG_ZHCN = 0),
      (e.LANG_ZHHK = 1),
      (e.LANG_EN = 2),
      (e.LANG_JPN = 3),
      (e.LANG_IND = 4),
      (e.LANG_DEFAULT = e.LANG_ZHCN),
      (e.CLIENT_TYPE_NULL = 0),
      (e.CLIENT_TYPE_JAR = 1),
      (e.CLIENT_TYPE_ANDROID = 2),
      (e.CLIENT_TYPE_IOS = 3),
      (e.CLIENT_TYPE_JAR_NEW = 4),
      (e.CLIENT_TYPE_ANDROID_NEW = 5),
      (e.CLIENT_TYPE_IOS_NEW = 6),
      (e.SHOW_SIMPLE_PLAYER_GRID = 5),
      (e.WINDOW_BOTTOM = 120),
      (e.SpriteOffPos = {
        22: [40, 25],
        34: [15, 0],
        11: [20, 0],
        518: [-30, 0],
        534: [-20, 0],
        504: [-30, 0],
        910: [10, 0],
        922: [40, 25],
        525: [-20, 0],
        20050: [0, -80],
        20051: [0, -50],
        20052: [0, -40],
        20373: [0, 40],
        20254: [-40, 0],
      }),
      (e.punishIcon = { 0: "cw_pic_rj", 1: "cw_pic_cn", 2: "cw_pic_jj" }),
      (e.STRONGE_TYPE_SKILL = 0),
      (e.STRONGE_TYPE_PLAYER = 1),
      (e.STRONGE_TYPE_PET = 2),
      (e.STRONGE_PET_TRAINER = 1),
      (e.STRONGE_PET_SYNTHESIS = 2),
      (e.STRONGE_PET_BAG = 2),
      (e.GAME_SPEED_MAX = 3),
      (e.FRAME_RATE = 65),
      (e.BOY = 0),
      (e.GIRL = 1),
      (e.EAST = 0),
      (e.WEST = 1),
      (e.SOLDIER = 0),
      (e.SORCERER = 1),
      (e.MAX_STAT_LEVEL = 100),
      (e.MAX_MISSION_SIZE = 10),
      (e.SPRITE_USE_ITEM = 1215),
      (e.GRID_WIDTH = 24),
      (e.GRID_HEIGHT = 24),
      (e.SUCCESS = 1),
      (e.ERROR = -1),
      (e.BACK_ERROR_DUR = -400),
      (e.BACK_ERROR_NULL_HAND = -401),
      (e.BACK_ERROR_JUMP_SHOP = -100),
      (e.BACK_ERROR_HIGH_KEY3 = -48),
      (e.BACK_ERROR_HIGH_KEY4 = -47),
      (e.BACK_ERROR_IDENTIFY_KEY = -49),
      (e.ACTOR_LEAVE_TYPE_BACKTOLIST = 1),
      (e.ACTOR_LEAVE_TYPE_BACKTOLOGINLIST = 2),
      (e.ACTOR_LEAVE_TYPE_BACKTOLOGIN = 3),
      (e.ACTOR_LEAVE_TYPE_KICKTOLIST = 4),
      (e.ACTOR_LEAVE_TYPE_KICKTOLOGIN = 5),
      (e.ACTOR_LEAVE_TYPE_SELFKICK = 6),
      (e.ACTOR_LEAVE_TYPE_SESSIONCLOSE = 7),
      (e.SETTING_INVITE_REJECT = 1),
      (e.SETTING_JOIN_ACCEPT = 2),
      (e.SETTING_JOIN_REJECT = 4),
      (e.SETTING_CHAT_WORLD_OFF = 8),
      (e.SETTING_CHAT_MAP_OFF = 16),
      (e.SETTING_CHAT_COUNTRY_OFF = 32),
      (e.SETTING_CHAT_TEAM_OFF = 64),
      (e.SETTING_CHAT_PRIVATE_OFF = 128),
      (e.SETTING_CHAT_SERVER_OFF = 1 << 31),
      (e.SETTING_SHOW_TRANSPORT_OFF = 256),
      (e.SETTING_SHOW_PET_OFF = 512),
      (e.SETTING_PET_PLAN_OFF = 1024),
      (e.SETTING_SHOW_CHAT_ALL = 2048),
      (e.SETTING_SHOW_CHAT_MORE = 4096),
      (e.SETTING_SHOW_CHAT_OFF = 8192),
      (e.SETTING_MASTER_REJECT = 16384),
      (e.SETTING_SPRITE_GUIDE = 1 << 27),
      (e.SETTING_CHAT_UNION_OFF = 65536),
      (e.SETTING_USIC_BACKGROUND_OFF = 32768),
      (e.SETTING_MUSIC_EFFECT_OFF = 1 << 28),
      (e.SELECT_CHANNEL2 = [
        e.SETTING_CHAT_WORLD_OFF,
        e.SETTING_CHAT_MAP_OFF,
        e.SETTING_CHAT_COUNTRY_OFF,
        e.SETTING_CHAT_TEAM_OFF,
        e.SETTING_CHAT_PRIVATE_OFF,
        e.SETTING_CHAT_UNION_OFF,
        e.SETTING_CHAT_SERVER_OFF,
      ]),
      (e.SETTING_MINI_MAP_ALL = 1 << 18),
      (e.SETTING_MINI_MAP_OFF = 1 << 19),
      (e.SETTING_SHOW_NAME_ALL = 1 << 20),
      (e.SETTING_SHOW_NAME_OFF = 1 << 21),
      (e.SETTING_SHOW_PLAYER_ALL = 1 << 22),
      (e.SETTING_SHOW_PLAYER_FAR = 1 << 23),
      (e.SETTING_SHOW_PLAYER_OFF = 1 << 24),
      (e.SETTING_MAP_IMG_MINI = 1 << 25),
      (e.SETTING_MAP_IMG_OFF = 1 << 26),
      (e.SETTING_MAP_PLAYER_LOAD_50 = 1 << 29),
      (e.SETTING_MAP_PLAYER_LOAD_20 = 1 << 30),
      (e.SETTING_GLOBAL_START = 18),
      (e.SETTING_GLOBAL_END = 30),
      (e.CHAT_TYPE_WORLD = 1),
      (e.CHAT_TYPE_MAP = 2),
      (e.CHAT_TYPE_COUNTRY = 3),
      (e.CHAT_TYPE_TEAM = 4),
      (e.CHAT_TYPE_PRIVATE = 5),
      (e.CHAT_TYPE_SYSTEM = 6),
      (e.CHAT_TYPE_UNION = 7),
      (e.CHAT_TYPE_SERVER = 8),
      (e.CHAT_TYPE_ALL = 10),
      (e.CHAT_TYPE_NOTHING = 11),
      (e.CHAT_TYPE_CROSS_SEVER_TEAM = 99),
      (e.LUCKMONEY_TYPE_PYQ = 1),
      (e.LUCKMONEY_TYPE_RKL = 2),
      (e.LUCKMONEY_TYPE_PJF = 3),
      (e.LUCKMONEY_RKL_TYPE1 = 1),
      (e.LUCKMONEY_RKL_TYPE2 = 2),
      (e.LUCKMONEY_RKL_TYPE3 = 3),
      (e.LUCKMONEY_RKL_TYPE4 = 4),
      (e.LUCKMONEY_RKL_TYPE5 = 5),
      (e.LUCKMONEY_RKL_TYPE6 = 6),
      (e.LUCKMONEY_RKL_TYPE7 = 7),
      (e.LUCKMONEY_RKL_TYPE8 = 8),
      (e.LUCKMONEY_RKL_TYPE9 = 9),
      (e.LUCKMONEY_RKL_TYPE10 = 10),
      (e.DATA_PLAYER_DETAIL = 2),
      (e.DATA_PLAYER_MISSION_BYTE = 4),
      (e.DATA_PLAYER_MISSION = 8),
      (e.DATA_PLAYER_ITEM = 16),
      (e.DATA_PLAYER_SKILL = 32),
      (e.DATA_PLAYER_LIST_BASE = 64),
      (e.DATA_PLAYER_LIST_EXTRA = 128),
      (e.DATA_MAP_NORMAL = 256),
      (e.DATA_MAP_MINI = 512),
      (e.DATA_NPC_BASE = 1024),
      (e.DATA_MONSTER_GROUP = 2048),
      (e.DATA_MONSTER_MODEL = 4096),
      (e.DATA_MAP_IMAGE = 8192),
      (e.DATA_GUILD_MAP = 16384),
      (e.DATA_CITY = 32768),
      (e.DATA_NOTICE = 65536),
      (e.DATA_SPRITE = 1 << 17),
      (e.DATA_SPRITE_MINI = 1 << 18),
      (e.DATA_CLIENT_NEW = 1 << 19),
      (e.DATA_FORMATION = 1 << 20),
      (e.DATA_MASTER_INFO = 1 << 21),
      (e.DATA_TURN_MONSTER = 1 << 22),
      (e.DATA_END = 32),
      (e.ANIME_TYPE_PHYSIC = 0),
      (e.ANIME_TYPE_MAGIC = 1),
      (e.ANIME_TYPE_USE_ITEM = 2),
      (e.ANIME_TYPE_BACKUP = 3),
      (e.ANIME_NORMAL = 0),
      (e.ANIME_ALL = 1),
      (e.ANIME_POINT = 2),
      (e.ANIME_FRONT = 3),
      (e.PLAYER_DATA_FLAG =
        e.DATA_PLAYER_DETAIL |
        e.DATA_PLAYER_MISSION_BYTE |
        e.DATA_PLAYER_MISSION |
        e.DATA_PLAYER_ITEM |
        e.DATA_PLAYER_SKILL |
        e.DATA_FORMATION |
        e.DATA_TURN_MONSTER),
      (e.NEW_SCENE_DATA_FLAG =
        e.DATA_NPC_BASE | e.DATA_MONSTER_GROUP | e.DATA_MONSTER_MODEL),
      (e.LOGIN_DATA_FLAG =
        e.PLAYER_DATA_FLAG | e.NEW_SCENE_DATA_FLAG | e.DATA_NOTICE),
      (e.SIMPLE_FLASH_DATA_FLAG = e.DATA_PLAYER_LIST_BASE),
      (e.REFRESH_DATA_FLAG = e.PLAYER_DATA_FLAG | e.SIMPLE_FLASH_DATA_FLAG),
      (e.JUMP_MAP_DATA_FLAG = e.SIMPLE_FLASH_DATA_FLAG | e.NEW_SCENE_DATA_FLAG),
      (e.POWER_ADD_MOENY1 = 301),
      (e.POWER_ADD_MOENY2 = 302),
      (e.POWER_ADD_MOENY3 = 303),
      (e.POWER_ADD_ITEM = 304),
      (e.POWER_NONE = 0),
      (e.POWER_STR = 1),
      (e.POWER_STR_PERCENT = 2),
      (e.POWER_CON = 3),
      (e.POWER_CON_PERCENT = 4),
      (e.POWER_AGI = 5),
      (e.POWER_AGI_PERCENT = 6),
      (e.POWER_ILT = 7),
      (e.POWER_ILT_PERCENT = 8),
      (e.POWER_WIS = 9),
      (e.POWER_WIS_PERCENT = 10),
      (e.POWER_HPMAX = 11),
      (e.POWER_HPMAX_PERCENT = 12),
      (e.POWER_MPMAX = 13),
      (e.POWER_MPMAX_PERCENT = 14),
      (e.POWER_SPEED_PERCENT = 23),
      (e.POWER_HITRATE_PERCENT = 24),
      (e.POWER_DODGE_PERCENT = 25),
      (e.POWER_MAGIC_HITRATE_PERCENT = 26),
      (e.POWER_CRITICAL_PERCENT = 27),
      (e.POWER_ATK_STR_PERCENT = 28),
      (e.POWER_ATK_AGI_PERCENT = 29),
      (e.POWER_ATK_MAGIC_PERCENT = 30),
      (e.POWER_DEF_STR_PERCENT = 31),
      (e.POWER_DEF_AGI_PERCENT = 32),
      (e.POWER_DEF_MAGIC_PERCENT = 33),
      (e.POWER_WIL_PERCENT = 34),
      (e.POWER_TOUGH_PERCENT = 35),
      (e.POWER_REFLECTION_PERCENT = 36),
      (e.POWER_BLOCK_PERCENT = 37),
      (e.POWER_INSIGHT_PERCENT = 38),
      (e.POWER_PENETRATION_PERCENT = 39),
      (e.POWER_DEF_FIELD_PERCENT = 40),
      (e.POWER_BACK_PERCENT = 41),
      (e.POWER_MAGIC_BACK_PERCENT = 42),
      (e.POWER_LIFE_ABSORPTION_PERCENT = 43),
      (e.POWER_MANA_ABSORPTION_PERCENT = 44),
      (e.POWER_MAGIC_PENETRATION_PERCENT = 45),
      (e.POWER_HIT_FORCE_PERCENT = 46),
      (e.POWER_HEAL_RECOVERY_PERCENT = 47),
      (e.POWER_MANA_RECOVERY_PERCENT = 48),
      (e.POWER_HP = 49),
      (e.POWER_HP_PERCENT = 50),
      (e.POWER_MP = 51),
      (e.POWER_MP_PERCENT = 52),
      (e.POWER_SPEED = 53),
      (e.POWER_HITRATE = 54),
      (e.POWER_DODGE = 55),
      (e.POWER_MAGIC_HITRATE = 56),
      (e.POWER_CRITICAL = 57),
      (e.POWER_ATK_STR = 58),
      (e.POWER_ATK_AGI = 59),
      (e.POWER_ATK_MAGIC = 60),
      (e.POWER_DEF_STR = 61),
      (e.POWER_DEF_AGI = 62),
      (e.POWER_DEF_MAGIC = 63),
      (e.POWER_WIL = 64),
      (e.POWER_TOUGH = 65),
      (e.POWER_REFLECTION = 66),
      (e.POWER_BLOCK = 67),
      (e.POWER_INSIGHT = 68),
      (e.POWER_PENETRATION = 69),
      (e.POWER_DEF_FIELD = 70),
      (e.POWER_BACK = 71),
      (e.POWER_MAGIC_BACK = 72),
      (e.POWER_LIFE_ABSORPTION = 73),
      (e.POWER_MANA_ABSORPTION = 74),
      (e.POWER_MAGIC_PENETRATION = 75),
      (e.POWER_HIT_FORCE = 76),
      (e.POWER_HEAL_RECOVERY = 77),
      (e.POWER_MANA_RECOVERY = 78),
      (e.POWER_REMOVE_STATUS = 79),
      (e.POWER_RECOVER = 80),
      (e.POWER_SKILL_DAMAGE = 81),
      (e.POWER_SKILL_HITRATE = 82),
      (e.POWER_SELF_CRITICAL = 84),
      (e.POWER_SKILL_HIT_FORCE = 85),
      (e.POWER_SKILL_MAGIC_PENETRATION = 86),
      (e.POWER_SKILL_BRK_ARMOR = 87),
      (e.POWER_SKILL_REMOVE_STATUS = 88),
      (e.POWER_PET_DAMAGE = 89),
      (e.POWER_PET_HPMAX_PERCENT = 90),
      (e.POWER_PET_MPMAX_PERCENT = 91),
      (e.POWER_PET_STR_PERCENT = 92),
      (e.POWER_PET_CON_PERCENT = 93),
      (e.POWER_PET_AGI_PERCENT = 94),
      (e.POWER_PET_ILT_PERCENT = 95),
      (e.POWER_PET_WIS_PERCENT = 96),
      (e.POWER_RECOVER_PERCENT = 97),
      (e.POWER_HPMP_RECOVER = 98),
      (e.POWER_OPEN_STORE = 99),
      (e.POWER_CHEST_LV1 = 100),
      (e.POWER_CHEST_LV2 = 101),
      (e.POWER_CHEST_LV3 = 102),
      (e.POWER_REQ_SLOT = 103),
      (e.POWER_TO_WORLDMAP = 104),
      (e.POWER_TO_GXGY = 105),
      (e.POWER_EXPIRE_TIME = 106),
      (e.POWER_RESET_MISSION = 107),
      (e.POWER_CHEST_KEY_LEVEL = 108),
      (e.POWER_PET_EGG = 109),
      (e.POWER_COSTUME = 110),
      (e.POWER_TRANSPORT = 111),
      (e.POWER_POWER_TITLE = 112),
      (e.POWER_GUARD_STR_ATTACK = 113),
      (e.POWER_GUARD_AGI_ATTACK = 114),
      (e.POWER_GUARD_MAGIC_ATTACK = 115),
      (e.POWER_GUARD_CURSE_ATTACK = 116),
      (e.POWER_GUARD_ALL_ATTACK = 117),
      (e.POWER_PET_ADD_EXP = 118),
      (e.POWER_ADD_EXP = 119),
      (e.POWER_EXP_BY_TIME = 120),
      (e.POWER_IDENTIFY = 121),
      (e.POWER_SWORD_ATK_TIME = 122),
      (e.POWER_BLADE_ATK_TIME = 123),
      (e.POWER_HEAVY_ATK_TIME = 124),
      (e.POWER_LANCE_ATK_TIME = 125),
      (e.POWER_STAFF_ATK_TIME = 126),
      (e.POWER_HAND_ATK_TIME = 127),
      (e.POWER_BOW_ATK_TIME = 128),
      (e.POWER_HAND_ITEM_ATK_TIME = 129),
      (e.POWER_ALL_ATK_TIME = 130),
      (e.POWER_COMPOSITE = 131),
      (e.POWER_SWORD_PERCENT = 133),
      (e.POWER_BLADE_PERCENT = 134),
      (e.POWER_HEAVY_PERCENT = 135),
      (e.POWER_LANCE_PERCENT = 136),
      (e.POWER_STAFF_PERCENT = 137),
      (e.POWER_HAND_PERCENT = 138),
      (e.POWER_BOW_PERCENT = 139),
      (e.POWER_HAND_ITEM_PERCENT = 140),
      (e.POWER_ALL_PERCENT = 141),
      (e.POWER_EQUIP_ARMOR_DUR_PERCENT = 142),
      (e.POWER_SKILL_HP = 145),
      (e.POWER_SKILL_HP_PERCENT = 146),
      (e.POWER_SKILL_MP = 147),
      (e.POWER_SKILL_MP_PERCENT = 148),
      (e.POWER_SKILL_LIFE_ABSORPTION = 149),
      (e.POWER_SKILL_MANA_ABSORPTION = 150),
      (e.POWER_SKILL_TARGET_BACK = 151),
      (e.POWER_SKILL_TARGET_MAGIC_BACK = 152),
      (e.POWER_SKILL_TARGET_BLOCK = 153),
      (e.POWER_SKILL_TARGET_INSIGHT = 154),
      (e.POWER_SKILL_TARGET_WIL = 155),
      (e.POWER_SKILL_TARGET_TOUCH = 156),
      (e.POWER_GRARD_MASTER_STR_ATTACK = 157),
      (e.POWER_GRARD_MASTER_AGI_ATTACK = 158),
      (e.POWER_GRARD_MASTER_MAGIC_ATTACK = 159),
      (e.POWER_GRARD_MASTER_CURSE_ATTACK = 160),
      (e.POWER_GRARD_MASTER_ALL_ATTACK = 161),
      (e.POWER_PET_GRARD_STR_ATTACK = 162),
      (e.POWER_PET_GRARD_AGI_ATTACK = 163),
      (e.POWER_PET_GRARD_MAGIC_ATTACK = 164),
      (e.POWER_PET_GRARD_CURSE_ATTACK = 165),
      (e.POWER_PET_GRARD_ALL_ATTACK = 166),
      (e.POWER_EXP_MISSION_BY_TIME = 167),
      (e.POWER_IGNORE_BACK = 168),
      (e.POWER_IGNORE_MAGIC_BACK = 169),
      (e.POWER_IGNORE_BLOCK = 170),
      (e.POWER_IGNORE_INSIGHT = 171),
      (e.POWER_IGNORE_WIL = 172),
      (e.POWER_IGNORE_TOUCH = 173),
      (e.POWER_BALL_ATK_TIME = 174),
      (e.POWER_BALL_PERCENT = 175),
      (e.POWER_SKILL_SCROLL = 176),
      (e.POWER_SKILL_SCROLL_PET = 177),
      (e.POWER_KEEPOUT_ATK_TIME = 178),
      (e.POWER_NEW_GET_PET = 179),
      (e.POWER_NEW_GET_ITEM = 180),
      (e.POWER_ENCHANT_ITEM = 181),
      (e.POWER_FORMATION_BOOK = 182),
      (e.POWER_CHEST_LV4 = 183),
      (e.POWER_COLOR_BOX = 184),
      (e.POWER_TURN_MONSTER_CARD = 185),
      (e.POWER_SKILL_BOOK_PET = 186),
      (e.POWER_GUN_ATK_TIME = 190),
      (e.POWER_GUN_PERCENT = 191),
      (e.POWER_HAMMER_ATK_TIME = 192),
      (e.POWER_HAMMER_PERCENT = 193),
      (e.POWER_FAN_ATK_TIME = 194),
      (e.POWER_FAN_PERCENT = 195),
      (e.POWER_MAGIC_PERCENT = 196),
      (e.POWER_PHYSICS_PERCENT = 197),
      (e.POWER_HP_MP = 197),
      (e.POWER_IGNORE_CRITICAL = 201),
      (e.POWER_IGNORE_CRITICAL_PERCENT = 202),
      (e.POWER_CRITICAL_DAMAGE = 203),
      (e.POWER_CRITICAL_DAMAGE_PERCENT = 204),
      (e.POWER_BLADE_L_ATK_TIME = 210),
      (e.POWER_BLADE_H_ATK_TIME = 211),
      (e.POWER_SWORD_L_ATK_TIME = 212),
      (e.POWER_SWORD_H_ATK_TIME = 213),
      (e.POWER_CROSSBOW_L_ATK_TIME = 214),
      (e.POWER_CROSSBOW_H_ATK_TIME = 215),
      (e.POWER_ARROW_ATK_TIME = 216),
      (e.POWER_BLADE_L_DAMAGE_PERCENT = 230),
      (e.POWER_BLADE_H_DAMAGE_PERCENT = 231),
      (e.POWER_SWORD_L_DAMAGE_PERCENT = 232),
      (e.POWER_SWORD_H_DAMAGE_PERCENT = 233),
      (e.POWER_CROSSBOW_L_DAMAGE_PERCENT = 234),
      (e.POWER_CROSSBOW_H_DAMAGE_PERCENT = 235),
      (e.POWER_ARROW_DAMAGE_PERCENT = 236),
      (e.POWER_DEF_STR_RANGE = 250),
      (e.POWER_DEF_STR_RANGE_PERCENT = 251),
      (e.POWER_DEF_STR_NEARBY = 252),
      (e.POWER_DEF_STR_NEARBY_PERCENT = 253),
      (e.POWER_DEF_AGI_RANGE = 254),
      (e.POWER_DEF_AGI_RANGE_PERCENT = 255),
      (e.POWER_DEF_AGI_NEARBY = 256),
      (e.POWER_DEF_AGI_NEARBY_PERCENT = 257),
      (e.POWER_ATK_STR_NEARBY = 258),
      (e.POWER_ATK_STR_NEARBY_PERCENT = 259),
      (e.POWER_ATK_STR_RANGE = 260),
      (e.POWER_ATK_STR_RANGE_PERCENT = 261),
      (e.POWER_ATK_AGI_NEARBY = 262),
      (e.POWER_ATK_AGI_NEARBY_PERCENT = 263),
      (e.POWER_ATK_AGI_RANGE = 264),
      (e.POWER_ATK_AGI_RANGE_PERCENT = 265),
      (e.RELATION_FRIEND = 0),
      (e.RELATION_BLACK = 1),
      (e.RELATION_BLACK_FRIEND = 2),
      (e.RELATION_MASTER = 3),
      (e.RELATION_PRENTICE = 4),
      (e.RELATION_CLOSEFRIEND = 7),
      (e.RELATION_TUTOR = 8),
      (e.RELATION_TEMP = 9),
      (e.MASTER_FLAG_NONE = 0),
      (e.MASTER_FLAG_MASTER = 1),
      (e.MASTER_FLAG_PRENTICE = 2),
      (e.ADMIN_MAX = 10),
      (e.ACHIEVEMENT_NEW = 1),
      (e.ACHIEVEMENT_UNAC = 2),
      (e.ACHIEVEMENT_REACH = 3),
      (e.BAG_CHECKUP_RESULT_NEW = 1),
      (e.BAG_CHECKUP_RESULT_UPDATE = 2),
      (e.BAG_CHECKUP_RESULT_ASK = 3),
      (e.IS_OPEN_TYPE_LOTTERY_DRAW_NEW = 2),
      (e.IS_OPEN_TYPE_BOSS_REWARD = 3),
      (e.IS_OPEN_TYPE_CHARGE_ACTIVITY = 4),
      (e.IS_OPEN_TYPE_ENCHANT = 5),
      (e.IS_OPEN_TYPE_FORMATION = 6),
      (e.IS_OPEN_TYPE_WO = 7),
      (e.IS_OPEN_TYPE_MO9_POP = 8),
      (e.IS_OPEN_TYPE_PLAYER_IDENTIFY = 9),
      (e.IS_OPEN_TYPE_UPGRADE = 10),
      (e.IS_OPEN_TYPE_BATTLE = 11),
      (e.IS_OPEN_TYPE_COST_REWARD = 12),
      (e.ISO_OPEN_TYPE_LOTTERY = 13),
      (e.IS_OPEN_TYPE_ACTIVITYSIGNIN = 21),
      (e.IS_OPEN_TYPE_BONUS_ONLINE = 104),
      (e.IS_OPEN_TYPE_ACTIVITY_ICON = 99),
      (e.IS_OPEN_TYPE_MISSION_ICON = 100),
      (e.IS_OPEN_TYPE_CEREMONY_ICON = 101),
      (e.IS_OPEN_TYPE_SHARE_ICON = 105),
      (e.IS_OPEN_TYPE_OPEN_ICON = 102),
      (e.IS_OPEN_TYPE_CHARGE_NAME = 103),
      (e.IS_OPEN_TYPE_CHARGE = 106),
      (e.IS_OPEN_TYPE_DAILY_ICON = 107),
      (e.SKILL_TYPE_PASSIVE = 1),
      (e.SKILL_TYPE_ROUND = 2),
      (e.SKILL_TYPE_ACTIVE = 3),
      (e.SKILL_TYPE_FORMATION = 4),
      (e.skillTypeText = ["", "被动", "自动", "主动", "阵型"]),
      (e.SKILL_WEAPON_NONE = 0),
      (e.SKILL_WEAPON_MELEE_1 = 1),
      (e.SKILL_WEAPON_MELEE_2 = 2),
      (e.SKILL_WEAPON_MELEE_3 = 3),
      (e.SKILL_WEAPON_RANGE = 4),
      (e.SKILL_WEAPON_ONE_HAND = 5),
      (e.SKILL_WEAPON_ONE_SWORD = 6),
      (e.SKILL_WEAPON_TWO_SWORD = 7),
      (e.SKILL_WEAPON_HEAVY_SWORD = 8),
      (e.SKILL_WEAPON_ONE_BLADE = 9),
      (e.SKILL_WEAPON_TWO_BLADE = 10),
      (e.SKILL_WEAPON_HEAVY_BLADE = 11),
      (e.SKILL_WEAPON_ONE_HEAVY = 12),
      (e.SKILL_WEAPON_LANCE = 13),
      (e.SKILL_WEAPON_ONE_CROSSBOW = 14),
      (e.SKILL_WEAPON_TOW_CROSSBOW = 15),
      (e.SKILL_WEAPON_HEAVY_CROSSBOW = 16),
      (e.SKILL_WEAPON_BOW = 17),
      (e.SKILL_WEAPON_HAND = 18),
      (e.SKILL_WEAPON_CANE = 19),
      (e.SKILL_WEAPON_SWORD = 20),
      (e.SKILL_WEAPON_ONE_HAND_BLADE = 21),
      (e.SKILL_WEAPON_BALL = 22),
      (e.SKILL_WEAPON_GUN = 23),
      (e.SKILL_WEAPON_TWO_GUN = 24),
      (e.SKILL_WEAPON_HEAVY_GUN = 25),
      (e.SKILL_WEAPON_HAMMER = 26),
      (e.SKILL_WEAPON_TWO_HAMMER = 27),
      (e.SKILL_WEAPON_HEAVY_HAMMER = 28),
      (e.SKILL_WEAPON_FAN = 29),
      (e.skillWeaponText = [
        "无限制",
        "空手、剑类、刀类、重型武器、长柄武器",
        "轻剑、轻刀",
        "重剑、重刀、重型武器、长柄武器",
        "轻弩、重弩、弓",
        "单手持武器或空手",
        "单手剑限制",
        "单手剑双持限制",
        "重剑限制",
        "刀类武器限制",
        "单手刀双持限制",
        "重刀限制",
        "重型武器",
        "长柄武器",
        "轻弩、重弩",
        "轻弩双持限制",
        "重弩限制",
        "弓",
        "空手",
        "法杖",
        "剑类武器限制",
        "单手刀限制",
        "法器限制",
        "轻枪、重枪",
        "轻型火枪",
        "重型火枪",
        "轻锤、重锤",
        "轻型锤",
        "重型锤",
        "扇",
      ]),
      (e.SKILL_AREA_SEARCH_ALL = 0),
      (e.SKILL_AREA_SEARCH_ENEMY = 1),
      (e.SKILL_AREA_SEARCH_FRIEND = 2),
      (e.SKILL_AREA_SEARCH_MY_SELF = 3),
      (e.SKILL_AREA_SEARCH_MY_OWNER = 4),
      (e.SKILL_AREA_CURSOR_1 = 1),
      (e.SKILL_AREA_CURSOR_2 = 2),
      (e.SKILL_AREA_CURSOR_3 = 3),
      (e.SKILL_AREA_CURSOR_4 = 4),
      (e.SKILL_AREA_CURSOR_5 = 5),
      (e.SKILL_AREA_CURSOR_6 = 6),
      (e.SKILL_AREA_CURSOR_ALL = -1),
      (e.SKILL_AREA_SINGLE = 0),
      (e.SKILL_AREA_FRONT_BACK_TWO = 1),
      (e.SKILL_AREA_UP_DOWN_TWO = 2),
      (e.SKILL_AREA_UP_DOWN_THREE = 3),
      (e.SKILL_AREA_UP_DOWN_FOUR = 4),
      (e.SKILL_AREA_UP_DOWN_FIVE = 5),
      (e.SKILL_AREA_TEN = 6),
      (e.SKILL_AREA_SQUARE = 7),
      (e.SKILL_AREA_AROUND_SIX = 8),
      (e.SKILL_AREA_ALL = 9),
      (e.SKILL_AREA_ENEMY_SINGLE = 10),
      (e.SKILL_AREA_ENEMY_FONT_BACK_TWO = 11),
      (e.SKILL_AREA_ENEMY_UP_DOWN_TWO = 12),
      (e.SKILL_AREA_ENEMY_UP_DOWN_THREE = 13),
      (e.SKILL_AREA_ENEMY_UP_DOWN_FOUR = 14),
      (e.SKILL_AREA_ENEMY_UP_DOWN_FIVE = 15),
      (e.SKILL_AREA_ENEMY_TEN = 16),
      (e.SKILL_AREA_ENEMY_SQUARE = 17),
      (e.SKILL_AREA_ENEMY_AROUND_SIX = 18),
      (e.SKILL_AREA_ENEMY_ALL = 19),
      (e.SKILL_AREA_ME_SIGHLE = 20),
      (e.SKILL_AREA_ME_FONT_BACK_TWO = 21),
      (e.SKILL_AREA_ME_UP_DOWN_TWO = 22),
      (e.SKILL_AREA_ME_UP_DOWN_THREE = 23),
      (e.SKILL_AREA_ME_UP_DOWN_FOUR = 24),
      (e.SKILL_AREA_ME_UP_DOWN_FIVE = 25),
      (e.SKILL_AREA_ME_TEN = 26),
      (e.SKILL_AREA_ME_SQUARE = 27),
      (e.SKILL_AREA_ME_AROUND_SIX = 28),
      (e.SKILL_AREA_ME_ALL = 29),
      (e.SKILL_AREA_MY_SELF = 30),
      (e.SKILL_AREA_ENEMY_HP_LEAST = 31),
      (e.SKILL_AREA_ENEMY_HP_MOST = 32),
      (e.SKILL_AREA_ME_HP_LEAST = 33),
      (e.SKILL_AREA_ME_HP_MOST = 34),
      (e.SKILL_AREA_MY_OWNER = 35),
      (e.SKILL_AREA_ME_ALL_NO_SELF = 36),
      (e.SKILL_AREA_ALL_NO_SELF = 37),
      (e.SKILL_AREA_PLAYER_AND_PET = 38),
      (e.skillAreaText = [
        "单体",
        "前后两人",
        "上下两人",
        "上下三人",
        "上下四人",
        "上下五人",
        "十字",
        "正方",
        "六人长方",
        "全体",
        "敌单体",
        "敌前后两人",
        "敌上下两人",
        "敌上下三人",
        "敌上下四人",
        "敌上下五人",
        "敌十字",
        "敌正方",
        "敌六人长方",
        "敌全体",
        "我单体",
        "我前后两人",
        "我上下两人",
        "我上下三人",
        "我上下四人",
        "我上下五人",
        "我十字",
        "我正方",
        "我六人长方",
        "我全体",
        "自身",
        "敌当前生命最少者",
        "敌当前生命最大者",
        "我当前生命最少者",
        "我当前生命最大者",
        "自身主人",
        "我全体(不包括自身)",
        "全体(不包括自身)",
        "宠物和主人",
      ]),
      (e.SKILL_POS_STAND = 0),
      (e.SKILL_POS_FRONT = 1),
      (e.SKILL_POS_CENTER = 2),
      (e.skillPositionText = ["原地", "目标身前", "中央"]),
      (e.GRADE_0 = 0),
      (e.GRADE_1 = 1),
      (e.GRADE_2 = 2),
      (e.GRADE_3 = 3),
      (e.GRADE_4 = 4),
      (e.GRADE_5 = 5),
      (e.gradeText = ["普通", "精致", "稀有", "史诗", "传说"]),
      (e.gradeAllText = ["无限制", "普通", "精致", "稀有", "史诗", "传说"]),
      (e.gradeGoods = [
        -1,
        e.GRADE_0,
        e.GRADE_1,
        e.GRADE_2,
        e.GRADE_3,
        e.GRADE_4,
        e.GRADE_5,
      ]),
      (e.ITEM_TYPE_ARMOR_HEAD = 0),
      (e.ITEM_TYPE_ARMOR_CLOTHES = 1),
      (e.ITEM_TYPE_ARMOR_TROUSERS = 2),
      (e.ITEM_TYPE_ARMOR_SHOULDER = 3),
      (e.ITEM_TYPE_ARMOR_WAIST = 4),
      (e.ITEM_TYPE_ARMOR_BACK = 5),
      (e.ITEM_TYPE_ARMOR_SHOES = 6),
      (e.ITEM_TYPE_ARMOR_HAND = 7),
      (e.ITEM_TYPE_ARMOR_NECKLACE = 8),
      (e.ITEM_TYPE_ARMOR_RING = 9),
      (e.ITEM_TYPE_ARMOR_AMULET = 10),
      (e.ITEM_TYPE_ARMOR_TRANSPORT = 11),
      (e.ITEM_TYPE_ARMOR_FASHION = 12),
      (e.ITEM_TYPE_WEAPON_ONEHAND_SWORD = 13),
      (e.ITEM_TYPE_WEAPON_TWOHAND_SWORD = 14),
      (e.ITEM_TYPE_WEAPON_ONEHAND_BLADE = 15),
      (e.ITEM_TYPE_WEAPON_TWOHAND_BLADE = 16),
      (e.ITEM_TYPE_WEAPON_ONEHAND_HEAVY = 17),
      (e.ITEM_TYPE_WEAPON_TWOHAND_HEAVY = 18),
      (e.ITEM_TYPE_WEAPON_TWOHAND_STAFF = 19),
      (e.ITEM_TYPE_WEAPON_TWOHAND_LANCE = 20),
      (e.ITEM_TYPE_WEAPON_ONEHAND_CROSSBOW = 21),
      (e.ITEM_TYPE_WEAPON_TWOHAND_CROSSBOW = 22),
      (e.ITEM_TYPE_WEAPON_TWOHAND_BOW = 23),
      (e.ITEM_TYPE_WEAPON_ONEHAND_HAND = 24),
      (e.ITEM_TYPE_TASK = 25),
      (e.ITEM_TYPE_BATTLE_USE = 26),
      (e.ITEM_TYPE_ANYTIME_USE = 27),
      (e.ITEM_TYPE_NOT_BATTLE_USE = 28),
      (e.ITEM_TYPE_BUILD_MATERIAL = 29),
      (e.ITEM_TYPE_GEM = 30),
      (e.ITEM_TYPE_SKILL_BOOK = 31),
      (e.ITEM_TYPE_PET = 32),
      (e.ITEM_TYPE_SPECEAIL = 33),
      (e.ITEM_TYPE_WEAPON_BALL = 34),
      (e.ITEM_TYPE_WEAPON_ONEHAND_GUN = 35),
      (e.ITEM_TYPE_WEAPON_TWOHAND_GUN = 36),
      (e.ITEM_TYPE_WEAPON_ONEHAND_HAMMER = 37),
      (e.ITEM_TYPE_WEAPON_TWOHAND_HAMMER = 38),
      (e.ITEM_TYPE_WEAPON_TWOHAND_FAN = 39),
      (e.ITEM_TYPE_BLOOD_BOTTLE = 40),
      (e.ITEM_TYPE_PET_EQUIP = 41),
      (e.ITEM_TYPE_PET_EQUIP_EXP_BOOK = 42),
      (e.ITEM_TYPE_SEAL = 43),
      (e.ITEM_TYPE_ENERGY_ESSENCE = 44),
      (e.ITEM_TYPE_BOX_CHOOSE_ONE = 45),
      (e.ITEM_TYPE_ADD_PET_LIFE = 46),
      (e.ITEM_TYPE_LN_STONE = 47),
      (e.BALL_WEAPON_ID_AREA = e.ITEM_TYPE_WEAPON_ONEHAND_HAND + 1),
      (e.BALL_WEAPON_ID_ONEHAND_GUN = e.ITEM_TYPE_WEAPON_ONEHAND_HAND + 2),
      (e.BALL_WEAPON_ID_TWOHAND_GUN = e.ITEM_TYPE_WEAPON_ONEHAND_HAND + 3),
      (e.BALL_WEAPON_ID_ONEHAND_HAMMER = e.ITEM_TYPE_WEAPON_ONEHAND_HAND + 4),
      (e.BALL_WEAPON_ID_TWOHAND_HAMMER = e.ITEM_TYPE_WEAPON_ONEHAND_HAND + 5),
      (e.BALL_WEAPON_ID_TWOHAND_FAN = e.ITEM_TYPE_WEAPON_ONEHAND_HAND + 6),
      (e.itemTypeText = [
        "头",
        "衣",
        "裤",
        "肩",
        "腰带",
        "背",
        "鞋",
        "护手",
        "链",
        "戒",
        "护符",
        "坐骑",
        "时装",
        "单手剑",
        "双手剑",
        "单手刀",
        "双手刀",
        "轻型武器",
        "重型武器",
        "杖",
        "长柄武器",
        "轻弩",
        "重弩",
        "弓箭",
        "副手",
        "任务物品",
        "战斗道具",
        "世界道具",
        "普通道具",
        "建筑材料",
        "宝石",
        "技能书",
        "宠物",
        "特殊",
        "法器",
        "轻枪",
        "重枪",
        "轻型锤",
        "重型锤",
        "扇子",
        "血瓶",
        "宠物装备",
        "宠物装备经验",
        "赋灵符",
        "能量精华",
        "普通道具",
        "普通道具",
        "特殊道具",
      ]),
      (e.typeBSText = [
        "无限制",
        "武器",
        "头部",
        "肩部",
        "背部",
        "腰部",
        "裤子",
        "鞋子",
        "手部",
        "胸部",
        "项链",
        "戒指",
        "护符",
        "坐骑",
        "时装",
      ]),
      (e.typeBS = [
        -1,
        e.ITEM_TYPE_WEAPON_ONEHAND_SWORD,
        e.ITEM_TYPE_ARMOR_HEAD,
        e.ITEM_TYPE_ARMOR_SHOULDER,
        e.ITEM_TYPE_ARMOR_BACK,
        e.ITEM_TYPE_ARMOR_WAIST,
        e.ITEM_TYPE_ARMOR_TROUSERS,
        e.ITEM_TYPE_ARMOR_SHOES,
        e.ITEM_TYPE_ARMOR_HAND,
        e.ITEM_TYPE_ARMOR_CLOTHES,
        e.ITEM_TYPE_ARMOR_NECKLACE,
        e.ITEM_TYPE_ARMOR_RING,
        e.ITEM_TYPE_ARMOR_AMULET,
        e.ITEM_TYPE_ARMOR_TRANSPORT,
        e.ITEM_TYPE_ARMOR_FASHION,
      ]),
      (e.SEX_MALE = 0),
      (e.SEX_FEMALE = 1),
      (e.SEX_MAX = 2),
      (e.sexTEXT = ["男", "女"]),
      (e.RACE_EAST = 0),
      (e.RACE_WEAT = 1),
      (e.RACE_MAX = 2),
      (e.raceText = ["东方", "西方"]),
      (e.JOB_RANGER = 1),
      (e.JOB_XIUZHEN = 2),
      (e.JOB_WARRIOR = 3),
      (e.JOB_WIZARD = 4),
      (e.JOB_NEW = 5),
      (e.JOB_BACKUP2 = 6),
      (e.JOB_PET_WIL = 7),
      (e.JOB_PET_STR = 8),
      (e.JOB_PET_AGI = 9),
      (e.JOB_BACKUP3 = 10),
      (e.JOB_CHUISHI = 11),
      (e.JOB_LANWU = 12),
      (e.jobText = [
        "",
        "侠客",
        "修真",
        "战士",
        "法师",
        "贤者",
        "武圣",
        "睿智",
        "勇猛",
        "迅捷",
        "枪王",
        "锤师",
        "岚舞",
      ]),
      (e.jobTextBuddy = [
        "",
        "侠",
        "修",
        "战",
        "法",
        "贤",
        "武",
        "睿",
        "勇",
        "迅",
        "枪",
        "锤",
        "岚",
      ]),
      (e.skillJobIcon = [
        "",
        "liupai_icon_wq2",
        "liupai_icon_wq4",
        "liupai_icon_wq1",
        "liupai_icon_wq3",
        "liupai_icon_wq7",
        "liupai_icon_wq6",
        "",
        "",
        "",
        "liupai_icon_wq5",
        "liupai_icon_wq8",
        "liupai_icon_wq9",
      ]),
      (e.jobInfoText = [
        "",
        "侠客注重/cFFA500内功和剑术修炼/p。他们/cFFA500敏捷/p而且\n具有极强的/cFFA500瞬间破杀能力/p，就算是最强大\n的敌人，在侠客面前往往也无法全身而退\n侠客着重于/cFFA500提升敏捷/p属性，它能让侠客拥\n有更高的/cFFA500暴击值和穿刺伤害/p。",
        "/cCC4F4F高难：不推荐新手/p\n修真者注重/cFFA500精神修炼/p，擅长/cFFA500咒术与各种五行之术/p\n他们可以运用各种自然之力，帮助队友/cFFA500恢复状态/p\n和/cFFA500提升能力/p，是战斗中不可缺少的战友。修真者\n着重于/cFFA500提升体质和感知/p属性，/cFFA500体质/p能让修真者拥\n有更高的/cFFA500生命值/p，而/cFFA500感知/p则会让他们拥有更强的/cFFA500魔法抵抗力/p。",
        "战士是/cFFA500近身格斗/p和施法者的融合。他们以强大\n的力量击退敌人，更可使用具有守护力量的光\n环协助队友驱除一切负面魔法。战士着重于提\n升/cFFA500力量/p属性，它能让战士拥有更强的/cFFA500伤害能力/p\n和更高的/cFFA500生命值/p。",
        "/cCC4F4F高难：不推荐新手/p\n法师具有强大的精神力，他们可以使用大范围\n/cFFA500魔法攻击/p，极具杀伤力的攻击能快速粉碎对手\n置对手于死地。法师着重于/cFFA500提升智力/p属性，它\n能让法师拥有更高的/cFFA500魔法伤害和魔力值/p，同时\n让法师有更强的/cFFA500魔法抵抗力/p。",
      ]),
      (e.skillGenreInfoText = [
        "",
        "刀类流派能让你在一回合内对敌人造成多次伤害，而你总能在疾风般的攻势中对敌人的弱点造成致命打击。",
        "剑类流派能让你的每一次攻击都命中敌人，体力和武器伤害是你的制胜法门。",
        "长柄流派的体力成长和大量的武器伤害，让你永远是敌人的噩梦。",
        "弩弓流派让敌人的反击和伤害减免形同虚设，优秀的射击技能让你在前期一往无前。",
        "重型武器流派拥有最高的武器伤害成长和偏差值最大的伤害区间，伤害爆发时的它能碾压一切敌人。",
        "弓箭流派拥有最快的出手速度与百发百中的箭矢，让他们在对决中无往不利。",
        "法杖流派的施法者们，以各种手段增强自己的魔力。单体技能吸取敌人的生命力使其虚弱，而毁灭性的群体法术则可以撕裂他的敌人。",
      ]),
      (e.raceJobList = [
        [e.JOB_RANGER, e.JOB_XIUZHEN],
        [e.JOB_WARRIOR, e.JOB_WIZARD],
      ]),
      (e.RANK_NONE = 0),
      (e.RANK_KING = 1),
      (e.RANK_PRIME = 2),
      (e.RANK_MARSHAL = 3),
      (e.RANK_KNIGHT = 4),
      (e.RANK_LORD = 5),
      (e.RANK_NOBLE = 6),
      (e.RANK_NATIONAL = 7),
      (e.RANK_SOLDIER = 8),
      (e.RANK_SUCCOR = 9),
      (e.RANK_COMTE = 10),
      (e.RANK_VICOMTE = 11),
      (e.RANK_NO_RANK = 100),
      (e.rankText = [
        "无限制",
        "国王",
        "宰相",
        "元帅",
        "将军",
        "领主",
        "贵族",
        "国民",
        "士兵",
        "援军",
        "伯爵",
        "子爵",
      ]),
      (e.BUILDING_NONE = 0),
      (e.BUILDING_PALACE = 1),
      (e.BUILDING_CAMP = 2),
      (e.BUILDING_HOUSE = 3),
      (e.BUILDING_FACTORY_WOOD = 4),
      (e.BUILDING_FACTORY_STONE = 5),
      (e.BUILDING_FACTORY_IRON = 6),
      (e.BUILDING_SKILLSHOP_EAST_KNIGHT = 7),
      (e.BUILDING_SKILLSHOP_EAST_MASTER = 8),
      (e.BUILDING_SKILLSHOP_WEST_KNIGHT = 9),
      (e.BUILDING_SKILLSHOP_WEST_MASTER = 10),
      (e.BUILDING_SHOP_ITEM = 11),
      (e.BUILDING_SHOP_WEAPON = 12),
      (e.BUILDING_SHOP_ARMOR = 13),
      (e.buildingText = [
        { labelDisplay: "国力排名", id: e.BUILDING_NONE, index: -1 },
        { labelDisplay: "皇宫", id: e.BUILDING_PALACE, index: 0 },
        { labelDisplay: "军营", id: e.BUILDING_CAMP, index: 1 },
        { labelDisplay: "民居", id: e.BUILDING_HOUSE, index: 2 },
        { labelDisplay: "木材厂", id: e.BUILDING_FACTORY_WOOD, index: 3 },
        { labelDisplay: "石材厂", id: e.BUILDING_FACTORY_STONE, index: 4 },
        { labelDisplay: "铁矿厂", id: e.BUILDING_FACTORY_IRON, index: 5 },
        {
          labelDisplay: "侠客技能所",
          id: e.BUILDING_SKILLSHOP_EAST_KNIGHT,
          index: 6,
        },
        {
          labelDisplay: "修真技能所",
          id: e.BUILDING_SKILLSHOP_EAST_MASTER,
          index: 7,
        },
        {
          labelDisplay: "战士技能所",
          id: e.BUILDING_SKILLSHOP_WEST_KNIGHT,
          index: 8,
        },
        {
          labelDisplay: "法师技能所",
          id: e.BUILDING_SKILLSHOP_WEST_MASTER,
          index: 9,
        },
        { labelDisplay: "道具商店", id: e.BUILDING_SHOP_ITEM, index: 10 },
        { labelDisplay: "武器商店", id: e.BUILDING_SHOP_WEAPON, index: 11 },
        { labelDisplay: "防具商店", id: e.BUILDING_SHOP_ARMOR, index: 12 },
      ]),
      (e.soldierText = ["国战成员", "士兵申请", "援军申请"]),
      (e.SEARCH_MEM_ALL = 0),
      (e.SEARCH_MEM_ONLINE = 1),
      (e.SEARCH_MEM_UN_ONLINE = 2),
      (e.SEARCH_MEM_APPLY = 3),
      (e.searchMemText = ["所有", "在线", "离线", "申请"]),
      (e.ATKTYPE_STR = 0),
      (e.ATKTYPE_RANGE_STR = 1),
      (e.ATKTYPE_AGI = 2),
      (e.ATKTYPE_RANGE_AGI = 3),
      (e.ATKTYPE_MAGIC = 4),
      (e.ATKTYPE_CURSE = 5),
      (e.ATKTYPE_BLESS = 6),
      (e.AtkTypeText = [
        "近身劈砍",
        "远程劈砍",
        "近身穿刺",
        "远程穿刺",
        "魔法攻击",
        "诅咒攻击",
        "祝福",
      ]),
      (e.BUFFER_NONE = 0),
      (e.BUFFER_POISON = 1),
      (e.BUFFER_BURN = 2),
      (e.BUFFER_BLOOD = 3),
      (e.BUFFER_ATTR_DOWN = 4),
      (e.BUFFER_BLOCK_TALK = 5),
      (e.BUFFER_BLOCK_SKILL = 6),
      (e.BUFFER_SILENCE = 7),
      (e.BUFFER_STUN = 8),
      (e.BUFFER_CHAO = 9),
      (e.BUFFER_WEAK = 10),
      (e.BUFFER_SNEER = 31),
      (e.BUFFER_ATTR_UP = 11),
      (e.BUFFER_ADD_MP = 12),
      (e.BUFFER_ADD_HP = 13),
      (e.BUFFER_HIDE = 14),
      (e.BUFFER_RESIST_MAGIC = 15),
      (e.BUFFER_RESIST_PHYSIC = 16),
      (e.BUFFER_RESIST_SILENCE = 17),
      (e.BUFFER_RESIST_STUN = 18),
      (e.BUFFER_RESIST_CHAO = 19),
      (e.BUFFER_RESIST_DEBUFF = 20),
      (e.BUFFER_INVINCIBLE = 21),
      (e.BUFFER_RESIST_TALK = 22),
      (e.BUFFER_RESIST_SKILL = 23),
      (e.BUFFER_RESIST_WEAK = 24),
      (e.BUFFER_RESIST_SNEER = 32),
      (e.BUFFER_TYPE_BUFF = 25),
      (e.BUFFER_TYPE_DEBUFF = 26),
      (e.BUFFER_RESIST_DIE_1HP = 27),
      (e.BUFFER_RESIST_DIE_FULLHP = 28),
      (e.BUFFER_RESIST_DIE_DELAY = 29),
      (e.BUFFER_DIE_CANNOT_RELIVE = 30),
      (e.BUFFER_VALUE_MAX = e.BUFFER_RESIST_SNEER),
      (e.bufferText = [
        "无",
        "中毒",
        "火烧",
        "流血",
        "属性减少",
        "禁言",
        "封技",
        "封魔",
        "定身",
        "混乱",
        "衰弱",
        "属性增加",
        "持续回魔",
        "持续回血",
        "幻影",
        "魔攻无效",
        "物攻无效",
        "免疫封魔",
        "免疫定身",
        "免疫混乱",
        "全减益免疫",
        "无敌",
        "免疫禁言",
        "免疫封技",
        "免疫衰弱",
        "增益",
        "减益",
        "不死意志",
        "死者苏生",
        "死亡傀儡",
        "驱逐",
        "嘲讽",
        "免疫嘲讽",
      ]),
      (e.ITEM_ID_HAIR_START = 40100),
      (e.ITEM_ID_HAIR_END = 40199),
      (e.ITEM_ID_FACE_START = 40200),
      (e.ITEM_ID_FACE_END = 40249),
      (e.ITEM_ID_RANGER = 41100),
      (e.ITEM_ID_XIUZHEN = 41101),
      (e.ITEM_ID_WARRIOR = 41102),
      (e.ITEM_ID_WIZARD = 41103),
      (e.ITEM_ID_NEW = 41104),
      (e.ITEM_ID_BACKUP2 = 41105),
      (e.ITEM_ID_BACKUP3 = 41106),
      (e.ITEM_ID_BACKUP4 = 41107),
      (e.ITEM_ID_BACKUP5 = 41108),
      (e.ITEM_ID_JOB_START = e.ITEM_ID_RANGER),
      (e.ITEM_ID_JOB_END = 41110),
      (e.SKILL_TYPE_PLAYER = 0),
      (e.SKILL_TYPE_PET = 1),
      (e.SKILL_TYPE_OTHER = 2),
      (e.SKILL_SHOP_START_PLAYER = 1),
      (e.SKILL_SHOP_END_PLAYER = 2e3),
      (e.SKILL_SHOP_START_PET = 2e3),
      (e.SKILL_SHOP_END_PET = 4e3),
      (e.SKILL_SHOP_END_OTHER = 1e4),
      (e.SKILL_SHOP_COUNTRY_START_PLAYER = 1500),
      (e.SKILL_SHOP_COUNTRY_END_PLAYER = 1999),
      (e.SKILL_SHOP_COUNTRY_START_PET = 3500),
      (e.SKILL_SHOP_COUNTRY_END_PET = 3999),
      (e.SKILL_ID_TYPE_PLAYER = 0),
      (e.SKILL_ID_PET_NORMAL_TALENT = 1),
      (e.SKILL_ID_PET_LEARN_TALENT = 2),
      (e.SKILL_ID_OTHER = 3),
      (e.SKILL_END_PLAYER = 5e3),
      (e.SKILL_END_PET_NORMAL_TALENT = 6e3),
      (e.SKILL_END_PET_LEARN_TALENT = 7e3),
      (e.SKILL_END_OTHER = 1e4),
      (e.MAP_ID_ESCORT = 999),
      (e.MAP_ID_TEAMBOSS = 997),
      (e.MAP_ID_COUNTRY_WAR = 998),
      (e.MAP_ID_COUNTRY_BOSS = 993),
      (e.MAP_ID_ARENA_SINGLE_CROSS = 5900),
      (e.MAP_ID_ARENA_TEAM_CROSS = 5901),
      (e.MAP_ID_START_COMMON = 1),
      (e.MAP_ID_END_COMMON = 999),
      (e.MAP_ID_CHALLENGE = 994),
      (e.MAP_ID_ARENA_SINGLE = 995),
      (e.MAP_ID_ARENA_TEAM = 996),
      (e.MAP_ID_START_CITY_EAST = 1e3),
      (e.MAP_ID_END_CITY_EAST = 2999),
      (e.MAP_ID_START_CITY_WEST = 3e3),
      (e.MAP_ID_END_CITY_WEST = 4999),
      (e.MAP_ID_START_COUNTRY_EAST = 5e3),
      (e.MAP_ID_END_COUNTRY_EAST = 5499),
      (e.MAP_ID_START_COUNTRY_WEST = 5500),
      (e.MAP_ID_END_COUNTRY_WEST = 5999),
      (e.MAP_ID_START_MIRROR = 6e3),
      (e.MAP_ID_END_MIRROR = 6099),
      (e.MAP_ID_START_CITY_ALLOCATE = 1e4),
      (e.MAP_ID_END_CITY_ALLOCATE = 19999),
      (e.MAP_ID_START_COUNTRY_ALLOCATE = 2e4),
      (e.MAP_ID_END_COUNTRY_ALLOCATE = 29999),
      (e.MAP_ID_START_MIRROR_ALLOCATE = 3e4),
      (e.MAP_ID_END_MIRROR_ALLOCATE = 31999),
      (e.ITEM_ID_PET = 24),
      (e.ITEM_ID_WOOD = 1e3),
      (e.ITEM_ID_STONE = 1001),
      (e.ITEM_ID_IRON = 1002),
      (e.ITEM_ID_IDENTIFY_SCROLL = 4e4),
      (e.ITEM_ID_IDENTIFY_SCROLL_BIND = 40001),
      (e.ITEM_ID_COMMAND_BOOK = 40002),
      (e.ITEM_ID_PET_RESET = 40004),
      (e.ITEM_ID_PET_AGE = 40005),
      (e.ITEM_ID_REPAIR = 40008),
      (e.ITEM_ID_PET_RESET2 = 40015),
      (e.ITEM_ID_CHANGE_NAME = 40016),
      (e.ITEM_ID_SPEAK = 40017),
      (e.ITEM_ID_PET_ADD_SKILL = 40020),
      (e.ITEM_ID_STAR_SCROLL = 40021),
      (e.ITEM_ID_CHANGE_SEX = 42e3),
      (e.ITEM_ID_CP_POINT_ADD = 42001),
      (e.ITEM_ID_SP_POINT_ADD = 42002),
      (e.ITEM_ID_PROSPERITY_DEGREE_POINT_ADD = 42003),
      (e.ITEM_ID_SKILL_PLAYER = 42004),
      (e.ITEM_ID_SKILL_PET = 42005),
      (e.ITEM_ID_SKILL_PLAYER_2 = 42006),
      (e.ITEM_ID_SKILL_PET_2 = 42007),
      (e.ITEM_ID_HIGH_IDENTIFY_SCROLL = 40022),
      (e.ITEM_ID_HIGH_IDENTIFY_SCROLL_BIND = 40023),
      (e.ITEM_ID_UPGRADE_IDENTIFY_SCROLL = 40024),
      (e.ITEM_ID_UPGRAND_IDENTIFY_SCROLL_BIND = 40025),
      (e.ITEM_ID_UPGRADE_INTENSIFY_SCROLL = 40026),
      (e.ITEM_ID_UPGRAND_INTENSIFY_SCROLL_BIND = 40027),
      (e.ITEM_ID_PET_EXPERIENCE_BOOK = 40047),
      (e.ITEM_ID_PET_EXPERIENCE_BOOK2 = 40043),
      (e.ITEM_ID_PET_EXPERIENCE_BOOK3 = 40006),
      (e.ITEM_ID_SPEAK2 = 42016),
      (e.ITEM_ID_SKILL_PLAYER_3 = 42017),
      (e.ITEM_ID_SKILL_PET_3 = 42018),
      (e.ITEM_ID_ADD_BAG_SIZE = 288),
      (e.ID_PER_AREA = 5e7),
      (e.startChar = "a"),
      (e.endChar = "z"),
      (e.CONDITION_NONE = 0),
      (e.CONDITION_HP_BELOW = 1),
      (e.CONDITION_HP_HIGH = 2),
      (e.CONDITION_HELP_RATE = 3),
      (e.CONDITION_ROUND = 4),
      (e.CONDITION_PLAYER_COUNT = 5),
      (e.CONDITION_MONSTER_COUNT = 6),
      (e.monsterAIConditionText = [
        "无条件",
        "HP小于百分之%U",
        "HP大于百分之%U",
        "百分之%U执行",
        "战场已进行大于%U回合",
        "玩家生存数量大于%U",
        "怪物生存数量大于%U",
      ]),
      (e.AI_HATE_MIN = 1),
      (e.AI_HATE_MAX = 2),
      (e.AI_HP_MIN_ENEMY = 3),
      (e.AI_HP_MAX_ENEMY = 4),
      (e.AI_SPEED_MIN_ENEMY = 5),
      (e.AI_SPEED_MAX_ENEMY = 6),
      (e.AI_HP_MIN_FRIEND = 7),
      (e.AI_HP_MAX_FRIEND = 8),
      (e.AI_SPEED_MIN_FRIEND = 9),
      (e.AI_SPEED_MAX_FRIEND = 10),
      (e.AI_RAND_ENEMY = 11),
      (e.AI_RAND_FRIEND = 12),
      (e.AI_SELF = 13),
      (e.AI_RAND_FRIEND_DEAD = 14),
      (e.AI_RAND_ALL_ALIVE = 15),
      (e.AI_ESCAPE = 16),
      (e.monsterAIText = [
        "",
        "最少仇恨的敌人",
        "最大仇恨的敌人",
        "HP最低的敌人",
        "HP最高的敌人",
        "速度最低的敌人",
        "速度最高的敌人",
        "HP最低的队友",
        "HP最高的队友",
        "速度最低的队友",
        "速度最高的队友",
        "随机敌人",
        "随机队友",
        "自已",
        "随机已死亡的队友",
        "随机自已以外的活人",
        "逃跑",
      ]),
      (e.MONSTER_NORMAL = 0),
      (e.MONSTER_ELITE = 1),
      (e.MONSTER_BOSS = 2),
      (e.MONSTER_HIGHER_BOSS = 3),
      (e.MONSTER_HIGHEST_BOSS = 4),
      (e.monsterTypeText = ["普通", "精英", "BOSS", "高级BOSS", "远古BOSS"]),
      (e.BATTLE_NORMAL = 0),
      (e.BATTLE_BOSS = 1),
      (e.BATTLE_NPC = 2),
      (e.BATTLE_VIP = 3),
      (e.monsterGroupTypeText = [
        "常规战斗",
        "BOSS战斗",
        "携带NPC的常规战斗",
        "携带VIP的常规战斗",
      ]),
      (e.BATTLE_NET_START = 1e4),
      (e.BATTLE_NET_END = 15e3),
      (e.MERCENARY_FIGHT_TYPE_STR = 0),
      (e.MERCENARY_FIGHT_TYPE_BLESS = 1),
      (e.MERCENARY_FIGHT_TYPE_DEF = 2),
      (e.MERCENARY_FIGHT_TYPE_CURSE = 3),
      (e.mercenaryFight = ["猛攻", "治疗", "守护", "诅咒"]),
      (e.SHOP_PET_USEITEM_ID = 3),
      (e.SHOP_TYPE_50 = 50),
      (e.SHOP_MARKETPLACE = e.SHOP_TYPE_50),
      (e.SHOP_TYPE_10 = e.SHOP_TYPE_50),
      (e.SHOP_REPAIR_ID = 10001),
      (e.SHOP_COUNTRY_MENU = 10002),
      (e.SHOP_COUNTRY_MISSION = 10003),
      (e.SHOP_REBORN_MAP = 10004),
      (e.SHOP_ESCORT_LIST = 10005),
      (e.OFFLINE_MISSION_LIST = 10006),
      (e.SHOP_REWARD_CODE = 10007),
      (e.SHOP_STORE = 10008),
      (e.SHOP_COUNTRY_STORE = 10009),
      (e.SHOP_COUNTRY_SYSTEM_STORE = 10010),
      (e.SHOP_COUNTRY_WAR = 10011),
      (e.SHOP_WAR_DECLARE = 10012),
      (e.SHOP_WAR_INFO = 10013),
      (e.SHOP_CAMP = 10014),
      (e.SHOP_UNIN = 10015),
      (e.SHOP_WAR_RESULT = 10016),
      (e.SHOP_MARRY = 10017),
      (e.SHOP_DIVORCE = 10018),
      (e.SHOP_TEAMBOSS = 10019),
      (e.SHOP_MARRYWISH = 12e3),
      (e.SHOP_SPORT_START = 10020),
      (e.SHOP_SPORT_END = 10030),
      (e.SHOP_INTEGRAL_START = 10040),
      (e.SHOP_INTEGRAL_END = 10050),
      (e.SHOP_SKY_START = 10901),
      (e.SHOP_SKY_END = 10910),
      (e.SHOP_COMPOSE_START = 10050),
      (e.SHOP_COMPOSE_COUNTRY_START = 10500),
      (e.SHOP_COMPOSE_END = 10900),
      (e.SHOP_PLAYER_SELL = 10031),
      (e.SHOP_PLAYER_BUY = 10032),
      (e.SHOP_ARENA_SINGLE = 10033),
      (e.SHOP_ARENA_TEAM = 10034),
      (e.SHOP_QUESTION = 10035),
      (e.SHOP_QUESTION_VIP = 10036),
      (e.SHOP_QUESTION_SUPER_QQ = 10038),
      (e.SHOP_STORE_VIP = 10037),
      (e.SHOP_COUNTRY_VIPGETMONEY = 10039),
      (e.SHOP_BACKUP_START = 10039),
      (e.SHOP_BACKUP_END = 10040),
      (e.SHOP_STORE_HIGHT_VIP = 12003),
      (e.SHOP_PET_START = 10911),
      (e.SHOP_PET_COUNTRY_START = 10950),
      (e.SHOP_PET_END = 11e3),
      (e.FURNACE_START = 11001),
      (e.FURNACE_COUNTRY_START = 11020),
      (e.FURNACE_END = 11040),
      (e.CROSS_SERVER_ACTIVITY = 11315),
      (e.CROSS_ONE_ARENA_SIGN_UP = 23700),
      (e.CROSS_ONE_ARENA_CANCEL = 23701),
      (e.CROSS_ONE_ARENA = 23702),
      (e.CROSS_ONE_ARENA_RANK = 999999),
      (e.CROSS_PK_SIGN_UP = 23706),
      (e.CROSS_PK_CANCEL = 23707),
      (e.CROSS_PK = 23708),
      (e.SHOP_VIP_1 = 2e3),
      (e.SHOP_VIP_2_4 = 2002),
      (e.SHOP_VIP_5_7 = 2003),
      (e.SHOP_VIP_8_9 = 2004),
      (e.SHOP_EQUIP = 204),
      (e.SHOP_EQUIP2 = 205),
      (e.SHOP_DISCOUNT = 24e3),
      (e.SHOP_SPECIAL = 2154),
      (e.SHOP_STRATEGY_ID = 11217),
      (e.SHOP_TOWER_ID = 23722),
      (e.SHOP_PLA_SHOP_ID = 24100),
      (e.SHOP_RED_PACKET = 23800),
      (e.SHOP_CAMPWAR_ID = 31e3),
      (e.SHOP_SOLDIER_START = 20001),
      (e.SHOP_SOLDIER_COUNTRY_START = 21e3),
      (e.SHOP_SOLDIER_END = 21999),
      (e.SHOP_COUNTRY_START = 22e3),
      (e.SHOP_COUNTRY_END = 23999),
      (e.SHOP_VIP_COUNTRY_START = 23e3),
      (e.SHOP_VIP_COUNTRY_END = 23020),
      (e.SHOP_VIP_START = 2e3),
      (e.SHOP_VIP_END = 2020),
      (e.SHOP_SUPER_QQ_COUNTRY_START = 23021),
      (e.SHOP_SUPER_QQ_COUNTRY_END = 23040),
      (e.SHOP_SUPER_QQ_START = 2021),
      (e.SHOP_SUPER_QQ_END = 2040),
      (e.SHOP_ENCHANT_START = 23100),
      (e.SHOP_ENCHANT_COUNTRY_START = 23200),
      (e.SHOP_ENCHANT_END = 23299),
      (e.SHOP_ADVANCED_START = 23400),
      (e.SHOP_ADVANCED_END = 23499),
      (e.SHOP_MINIGAME_START = 23600),
      (e.SHOP_MINIGAME_END = 23699),
      (e.SHOP_CORSS_SC = 25701),
      (e.SHOP_CORSS_GZ = 25702),
      (e.SHOP_CORSS_SM = 25703),
      (e.GAME_TYPE_GUESS = 0),
      (e.GAME_TYPE_PLUMBER = 1),
      (e.GAME_TYPE_LINKUP = 2),
      (e.GAME_TYPE_FILP = 3),
      (e.CROSS_TEAM_SIGN = 23705),
      (e.CROSS_TEAM_SIGN_UP = 23703),
      (e.CROSS_TEAM_SIGN_UP_CANCEL = 23704),
      (e.bufferInfoText = [
        "无",
        "中毒",
        "火烧",
        "流血",
        "属性减少",
        "禁言",
        "封技",
        "封魔",
        "定身",
        "混乱",
        "衰弱",
        "属性增加",
        "持续回魔",
        "持续回血",
        "物理群体技能和祝福群体技能对其无效",
        "魔攻无效",
        "物攻无效",
        "封魔效果对其无效",
        "定身效果对其无效",
        "混乱效果对其无效",
        "全减益免疫",
        "无敌",
        "禁言效果对其无效",
        "封技效果对其无效",
        "衰弱效果对其无效",
        "增益",
        "减益",
        "死亡后，会复活并恢复1点生命。一场战斗只能生效一次",
        "死亡后，会复活并恢复所有生命，一场战斗只能生效一次",
        "生命值为0时，不会马上死亡。直到回合结束时，才会触发死亡效果。",
        "复活、不死意志、死者苏生效果对该宠物无效。",
        "嘲讽",
        "嘲讽效果对其无效",
      ]),
      (e.PLAYER_EVENT_TEAM_INVITE = 1),
      (e.PLAYER_EVENT_TEAM_APPLY = 2),
      (e.PLAYER_EVENT_PKASK = 3),
      (e.PLAYER_EVENT_JOINCOUNTRYASK = 4),
      (e.PLAYER_EVENT_ESCORT = 5),
      (e.PLAYER_EVENT_MASTER = 6),
      (e.PLAYER_EVENT_JOINCOUNTRYHANDLE = 7),
      (e.PLAYER_EVENT_MERRY = 8),
      (e.PLAYER_WEDDING_CARD = 9),
      (e.PLAYER_EVENT_PRENTICE = 10),
      (e.PLAYER_EVENT_CROSS_TEAM_INVITE = 11),
      (e.PLAYER_EVENT_CROSS_TEAM_JOIN = 12),
      (e.PLAYER_EVENT_MAIL = 100),
      (e.PLAYER_EVENT_TOURIST_MODIFY = 101),
      (e.PLAYER_EVENT_ACTIVITY_LIST = 102),
      (e.PLAYER_EVENT_CD_CONFIRM = 103),
      (e.PLAYER_SHOP_TYPE_NORMAL = 0),
      (e.PLAYER_SHOP_TYPE_ENCHANT = 1),
      (e.NEAR_ALL = 0),
      (e.NEAR_SHOP = 1),
      (e.NEAR_ENCHANT_SHOP = 2),
      (e.NEAR_TEAM = 3),
      (e.NEAR_FIGHT = 4),
      (e.NEAR_PHOTO = 5),
      (e.NEAR_NULL = 6),
      (e.NEAR_MY_TEAM = 7),
      (e.NEAR_PET = 999),
      (e.NEARSTR = [
        { type: e.NEAR_ALL, name: "所有" },
        { type: e.NEAR_SHOP, name: "摆摊" },
        { type: e.NEAR_ENCHANT_SHOP, name: "附魔" },
        { type: e.NEAR_TEAM, name: "组队" },
        { type: e.NEAR_FIGHT, name: "战斗" },
        { type: e.NEAR_NULL, name: "空闲" },
      ]),
      (e.COUNTRY_COMMAND_NONE = 0),
      (e.COUNTRY_COMMAND_CHANGE_NAME = 1),
      (e.COUNTRY_COMMAND_ADD_PROSPERITY = 2),
      (e.COUNTRY_COMMAND_TRANSFER_RESOURCE = 3),
      (e.COUNTRY_COMMAND_ADD_PEOPLE = 4),
      (e.COUNTRY_COMMAND_ADD_LAND = 5),
      (e.COUNTRY_COMMAND_ADD_ARMY = 6),
      (e.COUNTRY_COMMAND_ADD_ARMY_USELAND = 7),
      (e.COUNTRY_COMMAND_REFRESH_TASK = 8),
      (e.COUNTRY_COMMAND_KING_COMMAND = 9),
      (e.COUNTRY_COMMAND_CREATE_WAR = 10),
      (e.countryBooks = [
        "",
        "国家改名",
        "提升繁荣度",
        "资源转换",
        "增加民众数",
        "增加空余土地",
        "增加军力值",
        "增加军力(消耗土地)",
        "重置当天国家任务",
        "繁荣增幅",
        "强制攻击",
      ]),
      (e.DONATE_TYPE_MONEY3 = 1),
      (e.DONATE_TYPE_MONEY1 = 2),
      (e.DONATE_TYPE_WOOD = 3),
      (e.DONATE_TYPE_STONE = 4),
      (e.DONATE_TYPE_IRON = 5),
      (e.DONATE_MONEY3 = [
        ["1万铜", "无"],
        ["10万铜", "无"],
        ["100万铜", "无"],
      ]),
      (e.DONATE_MONEY3_VALUE = [
        [e.DONATE_TYPE_MONEY3, 1e4],
        [e.DONATE_TYPE_MONEY3, 1e5],
        [e.DONATE_TYPE_MONEY3, 1e6],
      ]),
      (e.DONATE_MONEY1 = [
        ["10黄金", "10贡献度"],
        ["50黄金", "50贡献度"],
        ["100黄金", "100贡献度"],
        ["500黄金", "500贡献度"],
        ["1000黄金", "1000贡献度"],
      ]),
      (e.DONATE_MONEY1_VALUE = [
        [e.DONATE_TYPE_MONEY1, 10],
        [e.DONATE_TYPE_MONEY1, 50],
        [e.DONATE_TYPE_MONEY1, 100],
        [e.DONATE_TYPE_MONEY1, 500],
        [e.DONATE_TYPE_MONEY1, 1e3],
      ]),
      (e.DONATE_WOOD = [
        ["5木材", "1贡献度"],
        ["50木材", "10贡献度"],
        ["500木材", "100贡献度"],
      ]),
      (e.DONATE_WOOD_VALUE = [
        [e.DONATE_TYPE_WOOD, 5],
        [e.DONATE_TYPE_WOOD, 50],
        [e.DONATE_TYPE_WOOD, 500],
      ]),
      (e.DONATE_STONE = [
        ["5石材", "1贡献度"],
        ["50石材", "10贡献度"],
        ["500石材", "100贡献度"],
      ]),
      (e.DONATE_STONE_VALUE = [
        [e.DONATE_TYPE_STONE, 5],
        [e.DONATE_TYPE_STONE, 50],
        [e.DONATE_TYPE_STONE, 500],
      ]),
      (e.DONATE_IRON = [
        ["5铁矿", "1贡献度"],
        ["50铁矿", "10贡献度"],
        ["500铁矿", "100贡献度"],
      ]),
      (e.DONATE_IRON_VALUE = [
        [e.DONATE_TYPE_IRON, 5],
        [e.DONATE_TYPE_IRON, 50],
        [e.DONATE_TYPE_IRON, 500],
      ]),
      (e.BUILD_BUFF_ID_PALACE = 1),
      (e.BUILD_BUFF_ID_UP_WALL = 2),
      (e.BUILD_BUFF_ID_DOWN_WALL = 3),
      (e.BUILD_BUFF_ID_UP_TOWER = 4),
      (e.BUILD_BUFF_ID_MIDDLE_TOWER = 5),
      (e.BUILD_BUFF_ID_DOWN_TOWER = 6),
      (e.EVENT_COUNTRY_IDEFINECATION_IMG = 8011),
      (e.EVENT_ALL_COUNTRY_ONLINE_INFORM = 8012),
      (e.EVENT_COUNTRY_LIST_SEARCH = 8013),
      (e.ICON_TYPE_TEAM = 1),
      (e.lab_tips = "lab_tips"),
      (e.input = "input"),
      (e.maxChars = "maxChars"),
      (e.restrict = "restrict"),
      (e.SEARCH_ITEM_TYPE_SWORD = 1),
      (e.SEARCH_ITEM_TYPE_BLADE = 2),
      (e.SEARCH_ITEM_TYPE_STICK = 3),
      (e.SEARCH_ITEM_TYPE_BOW = 4),
      (e.SEARCH_ITEM_TYPE_HAEAVY = 5),
      (e.SEARCH_ITEM_TYPE_SPECIAL = 6),
      (e.SEARCH_ITEM_TYPE_ARMOR = 7),
      (e.SEARCH_ITEM_TYPE_JEWELRY = 8),
      (e.SEARCH_ITEM_TYPE_PET = 9),
      (e.SEARCH_ITEM_TYPE_GEM = 10),
      (e.SEARCH_ITEM_TYPE_MATERIAL = 11),
      (e.SEARCH_ITEM_TYPE_OTHER = 12),
      (e.SEARCH_ITEM_TYPE_BALL = 13),
      (e.SEARCH_ITEM_TYPE_GUN = 14),
      (e.SEARCH_ITEM_TYPE_PIKE = 15),
      (e.SEARCH_ITEM_TYPE_HAMMER = 16),
      (e.SEARCH_ITEM_TYPE_FAN = 17),
      (e.SEARCH_ITEM_TYPE_SUIT = 18),
      (e.SEARCH_ITEM_TYPE_HORSE = 19),
      (e.goodsTypeText = [
        "全部",
        "剑",
        "火枪",
        "刀",
        "杖",
        "弓",
        "重型武器",
        "特殊武器",
        "长枪",
        "法器",
        "锤子",
        "扇子",
        "护甲",
        "饰品",
        "时装",
        "坐骑",
        "宠物",
        "宝石",
        "材料",
        "其它",
      ]),
      (e.goodsType = [
        0,
        e.SEARCH_ITEM_TYPE_SWORD,
        e.SEARCH_ITEM_TYPE_GUN,
        e.SEARCH_ITEM_TYPE_BLADE,
        e.SEARCH_ITEM_TYPE_STICK,
        e.SEARCH_ITEM_TYPE_BOW,
        e.SEARCH_ITEM_TYPE_HAEAVY,
        e.SEARCH_ITEM_TYPE_SPECIAL,
        e.SEARCH_ITEM_TYPE_PIKE,
        e.SEARCH_ITEM_TYPE_BALL,
        e.SEARCH_ITEM_TYPE_HAMMER,
        e.SEARCH_ITEM_TYPE_FAN,
        e.SEARCH_ITEM_TYPE_ARMOR,
        e.SEARCH_ITEM_TYPE_JEWELRY,
        e.SEARCH_ITEM_TYPE_SUIT,
        e.SEARCH_ITEM_TYPE_HORSE,
        e.SEARCH_ITEM_TYPE_PET,
        e.SEARCH_ITEM_TYPE_GEM,
        e.SEARCH_ITEM_TYPE_MATERIAL,
        e.SEARCH_ITEM_TYPE_OTHER,
      ]),
      (e.goodsIcon = [
        6, 43, 4, 14, 5, 8, 35, 12, 40, 56, 57, 23, 20, 11, 31e3, 25, 34, 30,
        85,
      ]),
      (e.PURCHASE_ITEM_TYPE_GEM = 1),
      (e.PURCHASE_ITEM_TYPE_MATERIAL = 2),
      (e.PURCHASE_ITEM_TYPE_TASKITEM = 3),
      (e.PURCHASE_ITEM_TYPE_OTHER = 4),
      (e.purchaseTypeText = ["--", "宝石", "材料", "任务物品", "其它"]),
      (e.purchaseType = [
        -1,
        e.PURCHASE_ITEM_TYPE_GEM,
        e.PURCHASE_ITEM_TYPE_MATERIAL,
        e.PURCHASE_ITEM_TYPE_TASKITEM,
        e.PURCHASE_ITEM_TYPE_OTHER,
      ]),
      (e.purchaseIcon = [34, 30, 32, 35]),
      (e.goodsLevelText = [
        "无限制",
        "0-10级",
        "11-20级",
        "21-30级",
        "31-40级",
        "41-50级",
        "51-60级",
        "61-70级",
        "71-80级",
        "81-90级",
      ]),
      (e.SEARCH_SORT_OBJ_PRICE = 1),
      (e.SEARCH_SORT_OBJ_CREATETIME = 2),
      (e.SEARCH_SORT_TYPE_ASC = 1),
      (e.SEARCH_SORT_TYPE_DESC = -1),
      (e.SKYARENA = 7e4),
      (e.ARENA = 70001),
      (e.MONEY1 = -1),
      (e.MONEY2 = -2),
      (e.MONEY3 = -3),
      (e.EXP = -4),
      (e.ACTIVE = -5),
      (e.SCORE_TOWER = -6),
      (e.RICHMAN_SCORE = -10),
      (e.RED_PACKET = -11),
      (e.TYPE_ENERGY_ESSENCE = -12),
      (e.TYPE_RMB = -13),
      (e.TYPE_DEFEND_SCORE = -14),
      (e.TYPE_CAMPWAR_SCORE = -15),
      (e.STATUS_IMG_NUM_0 = 0),
      (e.STATUS_IMG_NUM_1 = 1),
      (e.STATUS_IMG_NUM_2 = 2),
      (e.STATUS_IMG_NUM_3 = 3),
      (e.STATUS_IMG_NUM_4 = 4),
      (e.STATUS_IMG_NUM_5 = 5),
      (e.STATUS_IMG_NUM_6 = 6),
      (e.CROSS_ARENA_ONE_STATUS = "cross_arena_one_status"),
      (e.MODULEDATA_ISUSER = "_s"),
      (e.ROLE_USER_MESSAGE_NUM = 8),
      (e.USER_VIP_MAX = 9),
      (e.VIDIO_SHOPID = 3e4),
      (e.viewType_not_open = -1),
      (e.viewType_open = 0),
      (e.viewType_auto_tab = 1),
      (e.viewType_change_tab = 2),
      (e.CHARGE_TYPE_NORMAL = 1),
      (e.CHARGE_TYPE_WEEK_MONTH_CARD = 2),
      (e.CHARGE_TYPE_DIAILY_GIFT = 3),
      (e.CHARGE_TYPE_GROUP_BUY = 4),
      (e.CHARGE_TYPE_SEND_SHOP = 5),
      (e.CHARGE_TYPE_FUND = 6),
      (e.CHARGE_TYPE_WAR_ORDER = 7),
      (e.CHARGE_TYPE_OPTIONAL_DRAW = 8),
      (e.CHARGE_TYPE_FIRST_CHARGE_GIFT = 9),
      (e.RANGER_START = [2e3, 10200, 10700, 11200, 11700, 12200, 12700, 13200]),
      (e.RANGER_END = [2099, 10236, 10736, 11236, 11736, 12236, 12736, 13236]),
      (e.XIUZHEN_START = [
        2100, 10300, 10800, 11300, 11800, 12300, 12800, 13300,
      ]),
      (e.XIUZHEN_END = [2199, 10336, 10836, 11336, 11836, 12336, 12836, 13336]),
      (e.WARRIOR_START = [
        2200, 10100, 10600, 11100, 11600, 12100, 12600, 13100,
      ]),
      (e.WARRIOR_END = [2299, 10136, 10636, 11136, 11636, 12136, 12637, 13136]),
      (e.WIZARD_START = [2300, 1e4, 10500, 11e3, 11500, 12e3, 12500, 13e3]),
      (e.WIZARD_END = [2399, 10036, 10536, 11036, 11536, 12036, 12536, 13036]),
      (e.NEW_START = [2400]),
      (e.NEW_END = [2499]),
      (e.BACKUP2_START = [2500]),
      (e.BACKUP2_END = [2599]),
      (e.BACKUP3_START = [2600]),
      (e.BACKUP3_END = [2699]),
      (e.BACKUP4_START = [2700]),
      (e.BACKUP4_END = [2799]),
      (e.BACKUP5_START = [2800]),
      (e.BACKUP5_END = [2899]),
      (e.PHYSICAL_WEAPON_TYPES = [13, 14, 15, 16, 17, 18, 20, 21, 22, 23]),
      (e.MAGIC_WEAPON_TYPES = [19, 24]),
      (e.PHYSICAL_JOBS = [
        e.JOB_RANGER,
        e.JOB_WARRIOR,
        e.JOB_BACKUP2,
        e.JOB_BACKUP3,
        e.JOB_CHUISHI,
      ]),
      (e.MAGIC_JOBS = [e.JOB_XIUZHEN, e.JOB_WIZARD, e.JOB_NEW, e.JOB_LANWU]),
      (e.rankReward = "rankReward"),
      (e.MoneyTypeGrade =
        ((o = {}),
        (o[e.MONEY3] = 1),
        (o[e.EXP] = 1),
        (o[e.SCORE_TOWER] = 2),
        (o[e.ACTIVE] = 0),
        (o[e.RICHMAN_SCORE] = 2),
        (o[e.MONEY1] = 3),
        (o[e.MONEY2] = 3),
        (o[e.RED_PACKET] = 3),
        (o[e.TYPE_ENERGY_ESSENCE] = 3),
        o)),
      (e.CAMPWAR1 = 16708245),
      (e.CAMPWAR2 = 16749716),
      (e.CAMPWAR3 = 8250111),
      e
    );
  })();
  t["default"] = f;
  var T;
  !(function (e) {
    ((e[(e.xia_ke = 400)] = "xia_ke"),
      (e[(e.fa_shi = 401)] = "fa_shi"),
      (e[(e.zhan_shi = 402)] = "zhan_shi"),
      (e[(e.xiu_zhen = 403)] = "xiu_zhen"));
  })((T = t.ShopEnterId || (t.ShopEnterId = {})));
  var E;
  !(function (e) {
    e[(e.city = 1)] = "city";
  })((E = t.MapType || (t.MapType = {})));
  var y;
  !(function (e) {
    ((e[(e.ordinary = 1)] = "ordinary"),
      (e[(e.equipment = 2)] = "equipment"),
      (e[(e.pet = 3)] = "pet"));
  })((y = t.ShopItemType || (t.ShopItemType = {})));
  var g;
  !(function (e) {
    ((e[(e.Tower = 1)] = "Tower"), (e[(e.BossAttack = 2)] = "BossAttack"));
  })((g = t.MonsterGroupType || (t.MonsterGroupType = {})));
  var v;
  !(function (e) {
    ((e[(e.REST = -1)] = "REST"),
      (e[(e.Sign = 0)] = "Sign"),
      (e[(e.War = 1)] = "War"));
  })((v = t.CampWarState || (t.CampWarState = {})));
  var S;
  !(function (e) {
    ((e[(e.NO = -1)] = "NO"),
      (e[(e.REST = 0)] = "REST"),
      (e[(e.NEXTTIME = 1)] = "NEXTTIME"),
      (e[(e.WARTIME = 2)] = "WARTIME"));
  })((S = t.CampWarActiveState || (t.CampWarActiveState = {})));
});
