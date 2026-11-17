(function (e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = (function () {
    function e() {}
    return (
      (e.regProtobuf = function () {
        var e;
        this._protobuf =
          ((e = {}),
          (e[pb.EUserProtocol.C2S_4399_LOGIN] = pb.c2s_4399_login),
          (e[pb.EUserProtocol.S2C_4399_LOGIN] = pb.s2c_4399_login),
          (e[pb.EUserProtocol.C2S_4399_GAME_BOX_LOGIN] =
            pb.c2s_4399GameBoxLogin),
          (e[pb.EUserProtocol.S2C_4399_GAME_BOX_LOGIN] =
            pb.s2c_4399GameBoxLogin),
          (e[pb.EUserProtocol.C2S_7K7K_LOGIN] = pb.c2s_7k7k_login),
          (e[pb.EUserProtocol.S2C_7K7K_LOGIN] = pb.s2c_7k7k_login),
          (e[pb.EUserProtocol.C2S_ACCU_RECHARGE_GET] =
            pb.c2s_accu_recharge_get),
          (e[pb.EUserProtocol.S2C_ACCU_RECHARGE_GET] =
            pb.s2c_accu_recharge_get),
          (e[pb.EUserProtocol.C2S_ACCU_RECHARGE_ACQUIRE] =
            pb.c2s_accu_recharge_acquire),
          (e[pb.EUserProtocol.S2C_ACCU_RECHARGE_ACQUIRE] =
            pb.s2c_accu_recharge_acquire),
          (e[pb.EUserProtocol.ACTIVITY_FRIST_BILL_GETINFO] =
            pb.s2c_ActivityInfo),
          (e[pb.EUserProtocol.C2S_ACTIVITY_LIMIT_SHOP_INFO] =
            pb.c2s_LimitShopInfo),
          (e[pb.EUserProtocol.S2C_ACTIVITY_LIMIT_SHOP_INFO] =
            pb.s2c_LimitShopInfo),
          (e[pb.EUserProtocol.C2S_ACTIVITY_LIMIT_SHOP_BUY] =
            pb.c2s_LimitShopBuy),
          (e[pb.EUserProtocol.S2C_ACTIVITY_LIMIT_SHOP_BUY] =
            pb.s2c_LimitShopBuy),
          (e[pb.EUserProtocol.C2S_SHARE_INFO] = pb.c2s_ShareInfo),
          (e[pb.EUserProtocol.S2C_SHARE_INFO] = pb.s2c_ShareInfo),
          (e[pb.EUserProtocol.C2S_SHARE_REWARD] = pb.c2s_ShareReward),
          (e[pb.EUserProtocol.S2C_SHARE_REWARD] = pb.s2c_ShareReward),
          (e[pb.EUserProtocol.C2S_GRADE_DAY_INFO] = pb.c2s_GradeDayInfo),
          (e[pb.EUserProtocol.S2C_GRADE_DAY_INFO] = pb.s2c_GradeDayInfo),
          (e[pb.EUserProtocol.C2S_GRADE_DAY_REWARD] = pb.c2s_GradeDayReward),
          (e[pb.EUserProtocol.S2C_GRADE_DAY_REWARD] = pb.s2c_GradeDayReward),
          (e[pb.EUserProtocol.C2S_GRADE_ACTIVE_REWARD] =
            pb.c2s_GradeActiveReward),
          (e[pb.EUserProtocol.S2C_GRADE_ACTIVE_REWARD] =
            pb.s2c_GradeActiveReward),
          (e[pb.EUserProtocol.C2S_GROUP_BUY_INFO] = pb.c2s_GroupBuyInfo),
          (e[pb.EUserProtocol.S2C_GROUP_BUY_INFO] = pb.s2c_GroupBuyInfo),
          (e[pb.EUserProtocol.C2S_PUB_BUY_REWARD] = pb.c2s_PubBuyReward),
          (e[pb.EUserProtocol.S2C_PUB_BUY_REWARD] = pb.s2c_PubBuyReward),
          (e[pb.EUserProtocol.S2C_SEND_SHOP_INFO] = pb.s2c_SendShopInfo),
          (e[pb.EUserProtocol.C2S_SEND_SHOP_CLOSE] = pb.c2s_SendShopClose),
          (e[pb.EUserProtocol.S2C_SEND_SHOP_CLOSE] = pb.s2c_SendShopClose),
          (e[pb.EUserProtocol.C2S_SEND_SHOP_BUY] = pb.c2s_SendShopBuy),
          (e[pb.EUserProtocol.S2C_SEND_SHOP_BUY] = pb.s2c_SendShopBuy),
          (e[pb.EUserProtocol.C2S_RICH_MAP_INFO] = pb.c2s_RichMapInfo),
          (e[pb.EUserProtocol.S2C_RICH_MAP_INFO] = pb.s2c_RichMapInfo),
          (e[pb.EUserProtocol.C2S_RICH_FORWARD] = pb.c2s_RichForward),
          (e[pb.EUserProtocol.S2C_RICH_FORWARD] = pb.s2c_RichForward),
          (e[pb.EUserProtocol.C2S_CASINO] = pb.c2s_Casino),
          (e[pb.EUserProtocol.S2C_CASINO] = pb.s2c_Casino),
          (e[pb.EUserProtocol.C2S_RICH_ACHIEVEMENT] = pb.c2s_RichAchievement),
          (e[pb.EUserProtocol.S2C_RICH_ACHIEVEMENT] = pb.s2c_RichAchievement),
          (e[pb.EUserProtocol.C2S_RICH_ACHIEVEMENT_REWARD] =
            pb.c2s_RichAchievementReward),
          (e[pb.EUserProtocol.S2C_RICH_ACHIEVEMENT_REWARD] =
            pb.s2c_RichAchievementReward),
          (e[pb.EUserProtocol.C2S_RICH_TASK_INFO] = pb.c2s_RichTaskInfo),
          (e[pb.EUserProtocol.S2C_RICH_TASK_INFO] = pb.s2c_RichTaskInfo),
          (e[pb.EUserProtocol.C2S_RICH_SCORE_BUY] = pb.c2s_RichScoreBuy),
          (e[pb.EUserProtocol.S2C_RICH_SCORE_BUY] = pb.s2c_RichScoreBuy),
          (e[pb.EUserProtocol.S2C_RICH_HAS_REWARD] = pb.s2c_RichHasReward),
          (e[pb.EUserProtocol.C2S_ARTIFACT_INFO] = pb.c2s_ArtifactInfo),
          (e[pb.EUserProtocol.S2C_ARTIFACT_INFO] = pb.s2c_ArtifactInfo),
          (e[pb.EUserProtocol.C2S_ARTIFACT_SKILL] = pb.c2s_ArtifactSkill),
          (e[pb.EUserProtocol.S2C_ARTIFACT_SKILL] = pb.s2c_ArtifactSkill),
          (e[pb.EUserProtocol.C2S_ARTIFACT_DECORATE] = pb.c2s_ArtifactDecorate),
          (e[pb.EUserProtocol.S2C_ARTIFACT_DECORATE] = pb.s2c_ArtifactDecorate),
          (e[pb.EUserProtocol.C2S_ARTIFACT_UP] = pb.c2s_ArtifactUp),
          (e[pb.EUserProtocol.S2C_ARTIFACT_UP] = pb.s2c_ArtifactUp),
          (e[pb.EUserProtocol.C2S_ARTIFACT_SKILL_UP] = pb.c2s_ArtifactSkillUp),
          (e[pb.EUserProtocol.S2C_ARTIFACT_SKILL_UP] = pb.s2c_ArtifactSkillUp),
          (e[pb.EUserProtocol.C2S_ARTIFACT_DECORATE_UP] =
            pb.c2s_ArtifactDecorateUp),
          (e[pb.EUserProtocol.S2C_ARTIFACT_DECORATE_UP] =
            pb.s2c_ArtifactDecorateUp),
          (e[pb.EUserProtocol.C2S_BATTLE_PASS] = pb.C2SBattlePass),
          (e[pb.EUserProtocol.S2C_BATTLE_PASS] = pb.S2CBattlePass),
          (e[pb.EUserProtocol.C2S_BUDDY] = pb.C2SBuddy),
          (e[pb.EUserProtocol.S2C_BUDDY] = pb.S2CBuddy),
          (e[pb.EUserProtocol.S2C_BULK_INFO] = pb.s2c_BulkInfo),
          (e[pb.EUserProtocol.C2S_BULK_BUY] = pb.c2s_BulkBuy),
          (e[pb.EUserProtocol.S2C_BULK_BUY] = pb.s2c_BulkBuy),
          (e[pb.EUserProtocol.C2S_BULK_REWARD] = pb.c2s_BulkReward),
          (e[pb.EUserProtocol.S2C_BULK_REWARD] = pb.s2c_BulkReward),
          (e[pb.EUserProtocol.C2S_BULK_INFO] = pb.c2s_BulkInfo),
          (e[pb.EUserProtocol.C2S_BYTEDANCE_AUTOLOGIN] =
            pb.c2s_bytedance_autologin),
          (e[pb.EUserProtocol.S2C_BYTEDANCE_AUTOLOGIN] =
            pb.s2c_bytedance_autologin),
          (e[pb.EUserProtocol.C2S_CELEBRATION_REWARD_INFO] =
            pb.c2s_CelebrationRewardInfo),
          (e[pb.EUserProtocol.S2C_CELEBRATION_REWARD_INFO] =
            pb.s2c_CelebrationRewardInfo),
          (e[pb.EUserProtocol.C2S_CELEBRATION_GRT_REWARD] =
            pb.c2s_CelebrationGetReward),
          (e[pb.EUserProtocol.S2C_CELEBRATION_GRT_REWARD] =
            pb.s2c_CelebrationGetReward),
          (e[pb.EUserProtocol.C2S_CELEBRATION_TASK_INFO] =
            pb.c2s_CelebrationTaskInfo),
          (e[pb.EUserProtocol.S2C_CELEBRATION_TASK_INFO] =
            pb.s2c_CelebrationTaskInfo),
          (e[pb.EUserProtocol.C2S_BUY_CELEBRATION_INFO] =
            pb.c2s_BuyCelebrationInfo),
          (e[pb.EUserProtocol.S2C_BUY_CELEBRATION_INFO] =
            pb.s2c_BuyCelebrationInfo),
          (e[pb.EUserProtocol.S2C_CELEBRATION_POINT] = pb.s2c_CelebrationPoint),
          (e[pb.EUserProtocol.C2S_CHANNEL_LOGIN] = pb.c2s_channel_login),
          (e[pb.EUserProtocol.S2C_CHANNEL_LOGIN] = pb.s2c_channel_login),
          (e[pb.EUserProtocol.C2S_WEEK_CARD_INFO] = pb.c2s_WeekCardInfo),
          (e[pb.EUserProtocol.S2C_WEEK_CARD_INFO] = pb.s2c_WeekCardInfo),
          (e[pb.EUserProtocol.C2S_MONTH_CARD_INFO] = pb.c2s_MonthCardInfo),
          (e[pb.EUserProtocol.S2C_MONTH_CARD_INFO] = pb.s2c__MonthCardInfo),
          (e[pb.EUserProtocol.C2S_DAILY_GIFT_PACK] = pb.c2s_DailyGIftPack),
          (e[pb.EUserProtocol.S2C_DAILY_GIFT_PACK] = pb.s2c_DailyGIftPack),
          (e[pb.EUserProtocol.C2S_SUPER_WEEK_CARD_INFO] =
            pb.c2s_SuperWeekCardInfo),
          (e[pb.EUserProtocol.S2C_SUPER_WEEK_CARD_INFO] =
            pb.s2c_SuperWeekCardInfo),
          (e[pb.EUserProtocol.C2S_SUPER_MONTH_CARD_INFO] =
            pb.c2s_SuperMonthCardInfo),
          (e[pb.EUserProtocol.S2C_SUPER_MONTH_CARD_INFO] =
            pb.s2c_SuperMonthCardInfo),
          (e[pb.EUserProtocol.C2S_CLIMB_TOWER_INFO] = pb.c2s_ClimbTowerInfo),
          (e[pb.EUserProtocol.S2C_CLIMB_TOWER_INFO] = pb.s2c_ClimbTowerInfo),
          (e[pb.EUserProtocol.C2S_CLIMB_TOWER_CHALLENGE] =
            pb.c2s_ClimbTowerChallenge),
          (e[pb.EUserProtocol.S2C_CLIMB_TOWER_CHALLENGE] =
            pb.s2c_ClimbTowerChallenge),
          (e[pb.EUserProtocol.C2S_CLIMB_TOWER_SWEEP] = pb.c2s_ClimbTowerSweep),
          (e[pb.EUserProtocol.S2C_CLIMB_TOWER_SWEEP] = pb.s2c_ClimbTowerSweep),
          (e[pb.EUserProtocol.S2C_CLIMB_TOWER_UPDATE_SCORE] =
            pb.s2c_ClimbTowerUpdateScore),
          (e[pb.EUserProtocol.S2C_ORDER_STATUS_CHANGED] = pb.s2c_orderStatus),
          (e[pb.EUserProtocol.S2C_BAG_UPDATE] = pb.s2c_Bag_Update),
          (e[pb.EUserProtocol.C2S_CONFIG_REQUEST] = pb.c2s_config_request),
          (e[pb.EUserProtocol.S2C_CONFIG_RESPONSE] = pb.s2c_config_response),
          (e[pb.EUserProtocol.S2C_CONQUER_INFO] = pb.s2c_ConquerInfo),
          (e[pb.EUserProtocol.C2S_CONQUER_BOSS_CHALLENGE] =
            pb.c2s_ConquerBossChallenge),
          (e[pb.EUserProtocol.S2C_CONQUER_BOSS_CHALLENGE] =
            pb.s2c_ConquerBossChallenge),
          (e[pb.EUserProtocol.C2S_CONQUER_BOSS_REWARD] =
            pb.c2s_ConquerBossReward),
          (e[pb.EUserProtocol.S2C_CONQUER_BOSS_REWARD] =
            pb.s2c_ConquerBossReward),
          (e[pb.EUserProtocol.C2S_CORSSIND_INFO] = pb.c2s_CorssindInfo),
          (e[pb.EUserProtocol.S2C_CORSSIND_INFO] = pb.s2c_CorssindInfo),
          (e[pb.EUserProtocol.C2S_CORSSIND_PRE] = pb.c2s_CorssindPre),
          (e[pb.EUserProtocol.S2C_CORSSIND_PRE] = pb.s2c_CorssindPre),
          (e[pb.EUserProtocol.C2S_CORSSIND_PRE_BATTLE] =
            pb.c2s_CorssindPreBattle),
          (e[pb.EUserProtocol.S2C_CORSSIND_PRE_BATTLE] =
            pb.s2c_CorssindPreBattle),
          (e[pb.EUserProtocol.C2S_CORSSIND_PRE_WATCH] =
            pb.c2s_CorssindPreWatch),
          (e[pb.EUserProtocol.S2C_CORSSIND_PRE_WATCH] =
            pb.s2c_CorssindPreWatch),
          (e[pb.EUserProtocol.C2S_CORSSIND_PRE_RANK] = pb.c2s_CorssindPreRank),
          (e[pb.EUserProtocol.S2C_CORSSIND_PRE_RANK] = pb.s2c_CorssindPreRank),
          (e[pb.EUserProtocol.C2S_CORSSIND_MB] = pb.c2s_CorssindMB),
          (e[pb.EUserProtocol.S2C_CORSSIND_MB] = pb.s2c_CorssindMB),
          (e[pb.EUserProtocol.C2S_CORSSIND_MB_BATT] = pb.c2s_CorssindMBBatt),
          (e[pb.EUserProtocol.S2C_CORSSIND_MB_BATT] = pb.s2c_CorssindMBBatt),
          (e[pb.EUserProtocol.C2S_CORSSIND_RANK] = pb.c2s_CorssindRank),
          (e[pb.EUserProtocol.S2C_CORSSIND_RANK] = pb.s2c_CorssindRank),
          (e[pb.EUserProtocol.C2S_CORSSIND_RANK_LIKE] =
            pb.c2s_CorssindRankLike),
          (e[pb.EUserProtocol.S2C_CORSSIND_RANK_LIKE] =
            pb.s2c_CorssindRankLike),
          (e[pb.EUserProtocol.C2S_CORSSIND_FM] = pb.c2s_CorssindFM),
          (e[pb.EUserProtocol.S2C_CORSSIND_FM] = pb.s2c_CorssindFM),
          (e[pb.EUserProtocol.C2S_CORSSIND_SIGNUP] = pb.c2s_CorssindSignup),
          (e[pb.EUserProtocol.S2C_CORSSIND_SIGNUP] = pb.s2c_CorssindSignup),
          (e[pb.EUserProtocol.C2S_CORSSIND_ROLLOUT] = pb.c2s_CorssindRollOut),
          (e[pb.EUserProtocol.S2C_CORSSIND_ROLLOUT] = pb.s2c_CorssindRollOut),
          (e[pb.EUserProtocol.S2C_CORSSIND_PREOPEN] = pb.s2c_CorssindPreOpen),
          (e[pb.EUserProtocol.S2C_CORSSIND_MB_TYPE] = pb.s2c_CorssindMBType),
          (e[pb.EUserProtocol.S2C_CORSSIND_MB_SYN] = pb.s2c_CorssindMBSyn),
          (e[pb.EUserProtocol.S2C_CORSSIND_PRE_START] =
            pb.s2c_CorssindPreStart),
          (e[pb.EUserProtocol.S2C_CORSSIND_NORMAL_START] =
            pb.s2c_CorssindNormalStart),
          (e[pb.EUserProtocol.C2S_CROSS_RANK_REWARD] = pb.c2s_crossRankReward),
          (e[pb.EUserProtocol.S2C_CROSS_RANK_REWARD] = pb.s2c_crossRankReward),
          (e[pb.EUserProtocol.C2S_SIMPLE_TEAMINFO] = pb.c2s_simple_teaminfo),
          (e[pb.EUserProtocol.S2C_SIMPLE_TEAMINFO] = pb.s2c_simple_teaminfo),
          (e[pb.EUserProtocol.C2S_LEAVEMAP] = pb.c2s_leaveMap),
          (e[pb.EUserProtocol.S2C_LEAVEMAP] = pb.s2c_leaveMap),
          (e[pb.EUserProtocol.C2S_USE_SPEAKER] = pb.c2s_use_speaker),
          (e[pb.EUserProtocol.S2C_USE_SPEAKER] = pb.s2c_use_speaker),
          (e[pb.EUserProtocol.C2S_INVITE_PLAYER] = pb.c2s_invite_player),
          (e[pb.EUserProtocol.C2S_NullTeamMember] = pb.c2s_NullTeamMember),
          (e[pb.EUserProtocol.S2C_NullTeamMember] = pb.s2c_NullTeamMember),
          (e[pb.EUserProtocol.C2S_CROSS_RANK_INFO] = pb.c2s_CrossRankInfo),
          (e[pb.EUserProtocol.S2C_CROSS_RANK_INFO] = pb.s2c_CrossRankInfo),
          (e[pb.EUserProtocol.C2S_CROSS_RANK_REFRESH_ENEMY] =
            pb.c2s_CrossRankRefreshEnemy),
          (e[pb.EUserProtocol.S2C_CROSS_RANK_REFRESH_ENEMY] =
            pb.s2c_CrossRankRefreshEnemy),
          (e[pb.EUserProtocol.C2S_CROSS_RANK_DAILY_REWARD] =
            pb.c2s_CrossRankDailyReward),
          (e[pb.EUserProtocol.S2C_CROSS_RANK_DAILY_REWARD] =
            pb.s2c_CrossRankDailyReward),
          (e[pb.EUserProtocol.C2S_CROSS_RANK_DEFEND_REWARD] =
            pb.c2s_CrossRankDefendReward),
          (e[pb.EUserProtocol.S2C_CROSS_RANK_DEFEND_REWARD] =
            pb.s2c_CrossRankDefendReward),
          (e[pb.EUserProtocol.C2S_CROSS_RANK_BATTLE_RECORD] =
            pb.c2s_CrossRankBattleRecord),
          (e[pb.EUserProtocol.S2C_CROSS_RANK_BATTLE_RECORD] =
            pb.s2c_CrossRankBattleRecord),
          (e[pb.EUserProtocol.C2S_CROSS_RANKING] = pb.c2s_CrossRanking),
          (e[pb.EUserProtocol.S2C_CROSS_RANKING] = pb.s2c_CrossRanking),
          (e[pb.EUserProtocol.C2S_CROSS_BUY_NUM] = pb.c2s_CrossRankBuyNum),
          (e[pb.EUserProtocol.S2C_CROSS_BUY_NUM] = pb.s2c_CrossRankBuyNum),
          (e[pb.EUserProtocol.C2S_CROSS_RANK_CHALLENGE] =
            pb.c2s_CrossRankChallenge),
          (e[pb.EUserProtocol.S2C_CROSS_RANK_CHALLENGE] =
            pb.s2c_CrossRankChallenge),
          (e[pb.EUserProtocol.C2S_CROSS_RANK_VIEW_REWARD] =
            pb.c2s_CrossRankViewReward),
          (e[pb.EUserProtocol.S2C_CROSS_RANK_VIEW_REWARD] =
            pb.s2c_CrossRankViewReward),
          (e[pb.EUserProtocol.C2S_CROSS_TEAM_INFO] = pb.c2s_CrossTeamInfo),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_INFO] = pb.s2c_CrossTeamInfo),
          (e[pb.EUserProtocol.C2S_CROSS_TEAM_MB] = pb.c2s_CrossTeamMB),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_MB] = pb.s2c_CrossTeamMB),
          (e[pb.EUserProtocol.C2S_CROSS_TEAM_MB_BATTLE] =
            pb.c2s_CrossTeamMBBattle),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_MB_BATTLE] =
            pb.s2c_CrossTeamMBBattle),
          (e[pb.EUserProtocol.C2S_CROSS_TEAM_PRE] = pb.c2s_CrossTeamPre),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_PRE] = pb.s2c_CrossTeamPre),
          (e[pb.EUserProtocol.C2S_CROSS_TEAM_MY] = pb.c2s_CrossTeamMy),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_MY] = pb.s2c_CrossTeamMy),
          (e[pb.EUserProtocol.C2S_CROSS_TEAM_QUICK] = pb.c2s_CrossTeamQuick),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_QUICK] = pb.s2c_CrossTeamQuick),
          (e[pb.EUserProtocol.C2S_CROSS_TEAM_PROMOTE] =
            pb.c2s_crossTeamPromote),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_PROMOTE] =
            pb.s2c_crossTeamPromote),
          (e[pb.EUserProtocol.C2S_CROSS_TEAM_SEARCH] = pb.c2s_CrossTeamSearch),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_SEARCH] = pb.s2c_CrossTeamSearch),
          (e[pb.EUserProtocol.C2S_CROSS_TEAM_OFFICIALMATCH] =
            pb.c2s_CrossTeamOfficialMatch),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_OFFICIALMATCH] =
            pb.s2c_CrossTeamOfficialMatch),
          (e[pb.EUserProtocol.C2S_CROSS_TEAM_RANK] = pb.c2s_CrossTeamRank),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_RANK] = pb.s2c_CrossTeamRank),
          (e[pb.EUserProtocol.C2S_CROSS_TEAM_CHECKINFO] =
            pb.c2s_CrossTeamCheckInfo),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_CHECKINFO] =
            pb.s2c_CrossTeamCheckInfo),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_MB_BATTLE_START] =
            pb.s2c_crossTeamMbBattleStart),
          (e[pb.EUserProtocol.C2S_CROSS_TEAM_QUICK_BATTLE] =
            pb.c2s_crossTeamQuickBattle),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_QUICK_BATTLE] =
            pb.s2c_crossTeamQuickBattle),
          (e[pb.EUserProtocol.C2S_CROSS_TEAM_QUIT] = pb.c2s_crossTeamQuit),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_QUIT] = pb.s2c_crossTeamQuit),
          (e[pb.EUserProtocol.C2S_CROSS_TEAM_OPERATE] =
            pb.c2s_crossTeamOperate),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_OPERATE] =
            pb.s2c_crossTeamOperate),
          (e[pb.EUserProtocol.C2S_CROSS_TEAM_SIGN_UP] = pb.c2s_crossTeamSignUp),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_SIGN_UP] = pb.s2c_crossTeamSignUp),
          (e[pb.EUserProtocol.C2S_CROSS_TEAM_RANK_LIKE] =
            pb.c2s_crossTeamRankLike),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_RANK_LIKE] =
            pb.s2c_crossTeamRankLike),
          (e[pb.EUserProtocol.C2S_CROSS_TEAM_ROLLOUT] =
            pb.c2s_CrossTeamRollOut),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_ROLLOUT] =
            pb.s2c_CrossTeamRollOut),
          (e[pb.EUserProtocol.S2C_CROSS_TEAM_ADD_SCORE] =
            pb.s2c_crossTeamAddScore),
          (e[pb.EUserProtocol.C2S_TASK_GETINFO] = pb.c2s_task_getinfo),
          (e[pb.EUserProtocol.S2C_TASK_GETINFO] = pb.s2c_task_getinfo),
          (e[pb.EUserProtocol.C2S_SUB_TASK_OK_NOTIFY] =
            pb.c2s_sub_task_ok_notify),
          (e[pb.EUserProtocol.C2S_TASK_SUBMIT] = pb.c2s_task_submit),
          (e[pb.EUserProtocol.S2C_TASK_SUBMIT] = pb.s2c_task_submit),
          (e[pb.EUserProtocol.C2S_ENTER_DUNGEON_INFO] =
            pb.c2s_enterDungeonInfo),
          (e[pb.EUserProtocol.S2C_ENTER_DUNGEON_INFO] =
            pb.s2c_enterDungeonInfo),
          (e[pb.EUserProtocol.C2S_DT_CREATE] = pb.c2s_dt_create),
          (e[pb.EUserProtocol.S2S_DT_CREATE] = pb.s2c_dt_create),
          (e[pb.EUserProtocol.C2S_DT_MATCH] = pb.c2s_dt_match),
          (e[pb.EUserProtocol.S2S_DT_MATCH] = pb.s2c_dt_match),
          (e[pb.EUserProtocol.C2S_DT_START] = pb.c2s_dt_start),
          (e[pb.EUserProtocol.S2S_DT_START] = pb.s2c_dt_start),
          (e[pb.EUserProtocol.C2S_DT_MODIFY] = pb.c2s_dt_modify),
          (e[pb.EUserProtocol.S2C_DT_MODIFY] = pb.s2c_dt_modify),
          (e[pb.EUserProtocol.C2S_D_CN_LOGIN] = pb.c2s_d_cn_login),
          (e[pb.EUserProtocol.S2C_D_CN_LOGIN] = pb.s2c_d_cn_login),
          (e[pb.EUserProtocol.S2C_ENERGY_ESSENCE_INFO] =
            pb.s2c_EnergyEssenceInfo),
          (e[pb.EUserProtocol.C2S_ENERGY_ESSENCE_BUY] =
            pb.c2s_EnergyEssenceBuy),
          (e[pb.EUserProtocol.S2C_ENERGY_ESSENCE_BUY] =
            pb.s2c_EnergyEssenceBuy),
          (e[pb.EUserProtocol.S2C_ENERGY_ESSENCE_UPDATE] =
            pb.s2c_EnergyEssenceUpdate),
          (e[pb.EUserProtocol.S2C_FACTIONBATTLE_STATUS] =
            pb.s2c_factionBattle_status),
          (e[pb.EUserProtocol.C2S_FACTIONBATTLE_SIGNUP] =
            pb.c2s_factionBattle_signUp),
          (e[pb.EUserProtocol.S2C_FACTIONBATTLE_SIGNUP] =
            pb.s2c_factionBattle_signUp),
          (e[pb.EUserProtocol.C2S_FACTIONBATTLE_TOGGLE] =
            pb.c2s_factionBattle_toggle),
          (e[pb.EUserProtocol.S2C_FACTIONBATTLE_TOGGLE] =
            pb.s2c_factionBattle_toggle),
          (e[pb.EUserProtocol.C2S_FACTIONBATTLE_RESTORE_FATIGUE] =
            pb.c2s_factionBattle_restore_fatigue),
          (e[pb.EUserProtocol.S2C_FACTIONBATTLE_COMMON_MSG] =
            pb.s2c_factionBattle_common),
          (e[pb.EUserProtocol.C2S_FACTIONBATTLE_OCCUPY] =
            pb.c2s_factionBattle_occupy),
          (e[pb.EUserProtocol.C2S_FACTIONBATTLE_MEMBERS] =
            pb.c2s_factionBattle_members),
          (e[pb.EUserProtocol.S2C_FACTIONBATTLE_MEMBERS] =
            pb.s2c_factionBattle_members),
          (e[pb.EUserProtocol.C2S_FACTIONBATTLE_ON_ACT_CLICK] =
            pb.c2s_factionBattle_onActClick),
          (e[pb.EUserProtocol.S2C_FACTIONBATTLE_ON_ACT_CLICK] =
            pb.s2c_factionBattle_onActClick),
          (e[pb.EUserProtocol.C2S_FACTIONBATTLE_USEBUFF] =
            pb.c2s_factionBattle_useBuff),
          (e[pb.EUserProtocol.C2S_FACTIONBATTLE_GETINFO] =
            pb.c2s_factionBattle_getInfo),
          (e[pb.EUserProtocol.S2C_FACTIONBATTLE_GETINFO] =
            pb.s2c_factionBattle_getInfo),
          (e[pb.EUserProtocol.C2S_FACTIONBATTLE_MATCH] =
            pb.c2s_factionBattle_match),
          (e[pb.EUserProtocol.S2C_FACTIONBATTLE_MATCH] =
            pb.s2c_factionBattle_match),
          (e[pb.EUserProtocol.S2C_FACTIONBATTLE_HONORPLAYER] =
            pb.s2c_factionBattle_honorPlayer),
          (e[pb.EUserProtocol.C2S_FINAL_BOSS_INFO] = pb.c2s_FinalBossInfo),
          (e[pb.EUserProtocol.S2C_FINAL_BOSS_INFO] = pb.s2c_FinalBossInfo),
          (e[pb.EUserProtocol.C2S_FINAL_BOSS_RANK_INFO] =
            pb.c2s_FinalBossRankInfo),
          (e[pb.EUserProtocol.S2C_FINAL_BOSS_RANK_INFO] =
            pb.s2c_FinalBossRankInfo),
          (e[pb.EUserProtocol.C2S_FINAL_BOSS_RECORD] = pb.c2s_FinalBossRecord),
          (e[pb.EUserProtocol.S2C_FINAL_BOSS_RECORD] = pb.s2c_FinalBossRecord),
          (e[pb.EUserProtocol.C2S_FINAL_BOSS_PET_SET] = pb.c2s_FinalBossPetSet),
          (e[pb.EUserProtocol.S2C_FINAL_BOSS_PET_SET] = pb.s2c_FinalBossPetSet),
          (e[pb.EUserProtocol.C2S_FINAL_BOSS_CHALLENGE] =
            pb.c2s_FinalBossChallenge),
          (e[pb.EUserProtocol.S2C_FINAL_BOSS_CHALLENGE] =
            pb.s2c_FinalBossChallenge),
          (e[pb.EUserProtocol.C2S_FINAL_BOSS_BUY_TIMES] =
            pb.c2s_FinalBossBuyTimes),
          (e[pb.EUserProtocol.S2C_FINAL_BOSS_BUY_TIMES] =
            pb.s2c_FinalBossBuyTimes),
          (e[pb.EUserProtocol.C2S_FLASH_CN_LOGIN] = pb.c2s_flashcn_login),
          (e[pb.EUserProtocol.S2C_FLASH_CN_LOGIN] = pb.s2c_flashcn_login),
          (e[pb.EUserProtocol.C2S_FLASHCN_IDCARD_AUTH] =
            pb.c2s_flashcn_idcard_auth),
          (e[pb.EUserProtocol.S2C_FLASHCN_IDCARD_AUTH] =
            pb.s2c_flashcn_idcard_auth),
          (e[pb.EUserProtocol.C2S_FUND_GET] = pb.c2s_fund_get),
          (e[pb.EUserProtocol.S2C_FUND_GET] = pb.s2c_fund_get),
          (e[pb.EUserProtocol.C2S_FUND_ACQUIRE] = pb.c2s_fund_acquire),
          (e[pb.EUserProtocol.S2C_FUND_ACQUIRE] = pb.s2c_fund_acquire),
          (e[pb.EUserProtocol.C2S_FUND_BUYLIST] = pb.c2s_fund_buylist),
          (e[pb.EUserProtocol.S2C_FUND_BUYLIST] = pb.s2c_fund_buylist),
          (e[pb.EUserProtocol.C2S_FUND_BUY] = pb.c2s_fund_buy),
          (e[pb.EUserProtocol.S2C_FUND_BUY] = pb.s2c_fund_buy),
          (e[pb.EUserProtocol.C2S_GAMERSKY_LOGIN] = pb.c2s_gamersky_login),
          (e[pb.EUserProtocol.S2C_GAMERSKY_LOGIN] = pb.s2c_gamersky_login),
          (e[pb.EUserProtocol.C2S_GUOPAN_LOGIN] = pb.c2s_guopan_login),
          (e[pb.EUserProtocol.S2C_GUOPAN_LOGIN] = pb.s2c_guopan_login),
          (e[pb.EUserProtocol.C2S_GUOPAN_IDCARD_AUTH] =
            pb.c2s_guopan_idcard_auth),
          (e[pb.EUserProtocol.S2C_GUOPAN_IDCARD_AUTH] =
            pb.s2c_guopan_idcard_auth),
          (e[pb.EUserProtocol.C2S_GUOPAN_ALTER_CHANNEL] =
            pb.c2s_guopan_alter_channel),
          (e[pb.EUserProtocol.S2C_GUOPAN_ALTER_CHANNEL] =
            pb.s2c_guopan_alter_channel),
          (e[pb.EUserProtocol.C2S_H5_PHONELOGIN] = pb.c2s_h5_phonelogin),
          (e[pb.EUserProtocol.S2C_H5_LOGIN] = pb.s2c_h5_login),
          (e[pb.EUserProtocol.C2S_H5_AUTH_CODE] = pb.c2s_h5_auth_code),
          (e[pb.EUserProtocol.S2C_H5_AUTH_CODE] = pb.s2c_h5_auth_code),
          (e[pb.EUserProtocol.C2S_H5_IDCARD_AUTH] = pb.c2s_h5_idcard_auth),
          (e[pb.EUserProtocol.S2C_H5_IDCARD_AUTH] = pb.s2c_h5_idcard_auth),
          (e[pb.EUserProtocol.C2S_H5_PASSWORD_LOGIN] =
            pb.c2s_h5_password_login),
          (e[pb.EUserProtocol.C2S_H5_ALTER_PASSWORD] =
            pb.c2s_h5_alter_password),
          (e[pb.EUserProtocol.S2C_H5_ALTER_PASSWORD] =
            pb.s2c_h5_alter_password),
          (e[pb.EUserProtocol.C2S_H5_ALTER_PASSWORD_BY_SESSION] =
            pb.c2s_h5_alter_password_by_session),
          (e[pb.EUserProtocol.C2S_H5_REGISTER] = pb.c2s_h5_register),
          (e[pb.EUserProtocol.S2C_H5_REGISTER] = pb.s2c_h5_register),
          (e[pb.EUserProtocol.C2S_H5_BIND_PHONE] = pb.c2s_h5_bind_phone),
          (e[pb.EUserProtocol.S2C_H5_BIND_PHONE] = pb.s2c_h5_bind_phone),
          (e[pb.EUserProtocol.C2S_H5_CLEAR_PRIVACY] = pb.c2s_h5_clear_privacy),
          (e[pb.EUserProtocol.S2C_H5_CLEAR_PRIVACY] = pb.s2c_h5_clear_privacy),
          (e[pb.EUserProtocol.C2S_H5_PICTURE_VERIFY] =
            pb.c2s_h5_picture_verify),
          (e[pb.EUserProtocol.S2C_H5_PICTURE_VERIFY] =
            pb.s2c_h5_picture_verify),
          (e[pb.EUserProtocol.C2S_H5_PICTURE_VERIFY_BACK] =
            pb.c2S_h5_picture_verify_back),
          (e[pb.EUserProtocol.S2C_H5_PICTURE_VERIFY_BACK] =
            pb.s2c_h5_picture_verify_back),
          (e[pb.EUserProtocol.C2S_HAND_BOOK_INFO] = pb.c2s_HandBookInfo),
          (e[pb.EUserProtocol.S2C_HAND_BOOK_INFO] = pb.s2c_HandBookInfo),
          (e[pb.EUserProtocol.C2S_HAND_BOOK_UNLOCK] = pb.c2s_HandBookUnlock),
          (e[pb.EUserProtocol.S2C_HAND_BOOK_UNLOCK] = pb.s2c_HandBookUnlock),
          (e[pb.EUserProtocol.C2S_HAND_BOOK_LEVEL_VIEW] =
            pb.c2s_HandBookLevelView),
          (e[pb.EUserProtocol.S2C_HAND_BOOK_LEVEL_VIEW] =
            pb.s2c_HandBookLevelView),
          (e[pb.EUserProtocol.S2C_HAND_BOOK_GROUP_LIST] =
            pb.s2c_HandBookGroupList),
          (e[pb.EUserProtocol.S2C_HAND_BOOK_RED_DOT] = pb.s2c_HandBookRedDot),
          (e[pb.EUserProtocol.S2C_HAND_BOOK_POWER_INFO] =
            pb.s2c_HandBookPowerInfo),
          (e[pb.EUserProtocol.C2S_HAND_BOOK_ILLUSION] =
            pb.c2s_HandBookIllusion),
          (e[pb.EUserProtocol.S2C_HAND_BOOK_ILLUSION] =
            pb.s2c_HandBookIllusion),
          (e[pb.EUserProtocol.C2S_HJYGAME_LOGIN] = pb.c2s_hjygame_login),
          (e[pb.EUserProtocol.S2C_HJYGAME_LOGIN] = pb.s2c_hjygame_login),
          (e[pb.EUserProtocol.C2S_HKT_AUTOLOGIN] = pb.c2s_hkt_autologin),
          (e[pb.EUserProtocol.S2C_HKT_AUTOLOGIN] = pb.s2c_hkt_autologin),
          (e[pb.EUserProtocol.C2S_IOSAPP_LOGIN] = pb.c2s_iosapp_autologin),
          (e[pb.EUserProtocol.S2C_IOSAPP_LOGIN] = pb.s2c_iosapp_autologin),
          (e[pb.EUserProtocol.C2S_IOSAPP_LOGIN_OFFICIAL] =
            pb.c2s_iosapp_official_autologin),
          (e[pb.EUserProtocol.S2C_IOSAPP_LOGIN_OFFICIAL] =
            pb.s2c_iosapp_official_autologin),
          (e[pb.EUserProtocol.C2S_IOSAPP_DELACCOUNT] =
            pb.c2s_iosapp_official_del_account),
          (e[pb.EUserProtocol.S2C_IOSAPP_DELACCOUNT] =
            pb.s2c_iosapp_official_del_account),
          (e[pb.EUserProtocol.C2S_IOSAPP_IDCARD_AUTH] =
            pb.c2s_iosapp_idcard_auth),
          (e[pb.EUserProtocol.S2C_IOSAPP_IDCARD_AUTH] =
            pb.s2c_iosapp_idcard_auth),
          (e[pb.EUserProtocol.C2S_KUAISHOU_AUTOLOGIN] =
            pb.c2s_kuaishou_autologin),
          (e[pb.EUserProtocol.S2C_KUAISHOU_AUTOLOGIN] =
            pb.s2c_kuaishou_autologin),
          (e[pb.EUserProtocol.C2S_LEDOU_LOGIN] = pb.c2s_ledou_login),
          (e[pb.EUserProtocol.S2C_LEDOU_LOGIN] = pb.s2c_ledou_login),
          (e[pb.EUserProtocol.C2S_LEGION_INFO] = pb.c2s_LegionInfo),
          (e[pb.EUserProtocol.S2C_LEGION_INFO] = pb.s2c_LegionInfo),
          (e[pb.EUserProtocol.C2S_LEGION_FORMATION] = pb.c2s_LegionFormation),
          (e[pb.EUserProtocol.S2C_LEGION_FORMATION] = pb.s2c_LegionFormation),
          (e[pb.EUserProtocol.C2S_LEGION_BATTLE] = pb.c2s_LegionBattle),
          (e[pb.EUserProtocol.S2C_LEGION_BATTLE] = pb.s2c_LegionBattle),
          (e[pb.EUserProtocol.S2C_LEGION_EXP_REWARD] = pb.s2c_LegionExpReward),
          (e[pb.EUserProtocol.S2C_LEGION_ACTOR_HP] = pb.s2c_LegionActorHp),
          (e[pb.EUserProtocol.C2S_LEVELOPEN_INFO] = pb.c2s_LevelOpen_Info),
          (e[pb.EUserProtocol.S2C_LEVELOPEN_INFO] = pb.s2c_LevelOpen_Info),
          (e[pb.EUserProtocol.S2C_LEVELOPEN_TIR] = pb.s2c_LevelOpen_Tri),
          (e[pb.EUserProtocol.C2S_LEVELOPEN_EFF] = pb.c2s_LevelOpen_Eff),
          (e[pb.EUserProtocol.C2S_CLASS_TOP_CLASS] = pb.c2s_class_top_class),
          (e[pb.EUserProtocol.S2C_CLASS_TOP_CLASS] = pb.s2c_class_top_class),
          (e[pb.EUserProtocol.C2S_LIMITED_RANK_INFO] =
            pb.c2s_limited_rank_info),
          (e[pb.EUserProtocol.S2C_LIMITED_RANK_INFO] =
            pb.s2c_limited_rank_info),
          (e[pb.EUserProtocol.C2S_LIMIT_RECHARGE_PREVIEW] =
            pb.c2s_limit_recharge_preview),
          (e[pb.EUserProtocol.S2C_LIMIT_RECHARGE_PREVIEW] =
            pb.s2c_limit_recharge_preview),
          (e[pb.EUserProtocol.C2S_LIMIT_RECHARGE_ORDER] =
            pb.c2s_limit_recharge_order),
          (e[pb.EUserProtocol.S2C_LIMIT_RECHARGE_ORDER] =
            pb.s2c_limit_recharge_order),
          (e[pb.EUserProtocol.C2S_LOGIN_NOTICE] = pb.c2s_login_notice),
          (e[pb.EUserProtocol.S2C_LOGIN_NOTICE] = pb.s2c_login_notice),
          (e[pb.EUserProtocol.S2C_HEART_PUSH] = pb.s2c_HeartPush),
          (e[pb.EUserProtocol.C2S_HEART_PUSH] = pb.c2s_HeartPush),
          (e[pb.EUserProtocol.C2S_LOGIN_GIFT_LIST] = pb.c2s_login_gift_list),
          (e[pb.EUserProtocol.S2C_LOGIN_GIFT_LIST] = pb.s2c_login_gift_list),
          (e[pb.EUserProtocol.C2S_LOGIN_GIFT_ACQUIRE] =
            pb.c2s_login_gift_acquire),
          (e[pb.EUserProtocol.S2C_LOGIN_GIFT_ACQUIRE] =
            pb.s2c_login_gift_acquire),
          (e[pb.EUserProtocol.C2S_MT_REQUEST] = pb.c2s_MT_request),
          (e[pb.EUserProtocol.S2C_MT_RETURN] = pb.s2c_MT_return),
          (e[pb.EUserProtocol.C2S_MINE_MAIN_INFO] = pb.c2s_MineMainInfo),
          (e[pb.EUserProtocol.S2C_MINE_MAIN_INFO] = pb.s2c_MineMainInfo),
          (e[pb.EUserProtocol.C2S_MINE_FIGHT_INFO] = pb.c2s_MineFightInfo),
          (e[pb.EUserProtocol.S2C_MINE_FIGHT_INFO] = pb.s2c_MineFightInfo),
          (e[pb.EUserProtocol.C2S_MINE_PET_EDIT_INFO] = pb.c2s_MinePetEditInfo),
          (e[pb.EUserProtocol.S2C_MINE_PET_EDIT_INFO] = pb.s2c_MinePetEditInfo),
          (e[pb.EUserProtocol.C2S_MINE_BUY_TIMES] = pb.c2s_MineBuyTimes),
          (e[pb.EUserProtocol.S2C_MINE_BUY_TIMES] = pb.s2c_MineBuyTimes),
          (e[pb.EUserProtocol.S2C_MINE_POINT_UPDATE] = pb.s2c_MinePointUpdate),
          (e[pb.EUserProtocol.C2S_MINE_SEARCH] = pb.c2s_MineSearch),
          (e[pb.EUserProtocol.S2C_MINE_SEARCH] = pb.s2c_MineSearch),
          (e[pb.EUserProtocol.C2S_MINE_DO_FIGHT] = pb.c2s_MineDoFight),
          (e[pb.EUserProtocol.S2C_MINE_DO_FIGHT] = pb.s2c_MineDoFight),
          (e[pb.EUserProtocol.C2S_MINE_CANCEL] = pb.c2s_MineCancel),
          (e[pb.EUserProtocol.C2S_NEW_AREA] = pb.C2SNewArena),
          (e[pb.EUserProtocol.S2C_NEW_AREA] = pb.S2CNewArena),
          (e[pb.EUserProtocol.C2S_FUNCTION_INFO] = pb.c2s_FunctionInfo),
          (e[pb.EUserProtocol.S2C_FUNCTION_INFO] = pb.s2c_FunctionInfo),
          (e[pb.EUserProtocol.S2C_FUNCTION_REWARD] = pb.s2c_FunctionReward),
          (e[pb.EUserProtocol.C2S_NPC_BOOK_MAIN] = pb.c2s_npc_book_main),
          (e[pb.EUserProtocol.S2C_NPC_BOOK_MAIN] = pb.s2c_npc_book_main),
          (e[pb.EUserProtocol.C2S_OPTIONAL_DRAW_INFO] =
            pb.c2s_OptionalDrawInfo),
          (e[pb.EUserProtocol.S2C_OPTIONAL_DRAW_INFO] =
            pb.s2c_OptionalDrawInfo),
          (e[pb.EUserProtocol.C2S_CHOOSE_REWARD_ITEM] =
            pb.c2s_ChooseRewardItem),
          (e[pb.EUserProtocol.S2C_CHOOSE_REWARD_ITEM] =
            pb.s2c_ChooseRewardItem),
          (e[pb.EUserProtocol.C2S_OPTIONAL_START_DRAW] =
            pb.c2s_OptionalStartDraw),
          (e[pb.EUserProtocol.S2C_OPTIONAL_START_DRAW] =
            pb.s2c_OptionalStartDraw),
          (e[pb.EUserProtocol.C2S_OPTIONAL_RECHARGE_INFO] =
            pb.c2s_OptionalRechargeInfo),
          (e[pb.EUserProtocol.S2C_OPTIONAL_RECHARGE_INFO] =
            pb.s2c_OptionalRechargeInfo),
          (e[pb.EUserProtocol.C2S_OPTIONAL_GET_REWARD] =
            pb.c2s_OptionalGetReward),
          (e[pb.EUserProtocol.S2C_OPTIONAL_GET_REWARD] =
            pb.s2c_OptionalGetReward),
          (e[pb.EUserProtocol.C2S_PET_EQUIP] = pb.c2s_petEquip),
          (e[pb.EUserProtocol.S2C_PET_EQUIP] = pb.s2c_petEquip),
          (e[pb.EUserProtocol.C2S_PET_OFF_EQUIP] = pb.c2s_offPetEquip),
          (e[pb.EUserProtocol.S2C_PET_OFF_EQUIP] = pb.s2c_offPetEquip),
          (e[pb.EUserProtocol.C2S_PET_EQUIP_UP] = pb.c2s_petEquip_Up),
          (e[pb.EUserProtocol.S2C_PET_EQUIP_UP] = pb.s2c_petEquip_Up),
          (e[pb.EUserProtocol.S2C_PET_EQUIP_UP_EXP] = pb.s2c_petEquipUpExp),
          (e[pb.EUserProtocol.C2S_PET_PK_INFO] = pb.c2s_PetPKInfo),
          (e[pb.EUserProtocol.S2C_PET_PK_INFO] = pb.s2c_PetPKInfo),
          (e[pb.EUserProtocol.C2S_PET_PK_ACHIEVE_REWARD] =
            pb.c2s_PetPKAchieveReward),
          (e[pb.EUserProtocol.S2C_PET_PK_ACHIEVE_REWARD] =
            pb.s2c_PetPKAchieveReward),
          (e[pb.EUserProtocol.C2S_PET_PK_SKILL_UP] = pb.c2s_PetPKSkillUp),
          (e[pb.EUserProtocol.S2C_PET_PK_SKILL_UP] = pb.s2c_PetPKSkillUp),
          (e[pb.EUserProtocol.C2S_PET_PK_SET_INFO] = pb.c2s_PetPKSetInfo),
          (e[pb.EUserProtocol.S2C_PET_PK_SET_INFO] = pb.s2c_PetPKSetInfo),
          (e[pb.EUserProtocol.C2S_PET_PK_SET_UP] = pb.c2s_PetPKSetUp),
          (e[pb.EUserProtocol.S2C_PET_PK_SET_UP] = pb.s2c_PetPKSetUp),
          (e[pb.EUserProtocol.C2S_PET_PK_RIVAL_INFO] = pb.c2s_PetPKRivalInfo),
          (e[pb.EUserProtocol.S2C_PET_PK_RIVAL_INFO] = pb.s2c_PetPKRivalInfo),
          (e[pb.EUserProtocol.C2S_PET_PK_CHALLENGE] = pb.c2s_PetPKChallenge),
          (e[pb.EUserProtocol.S2C_PET_PK_CHALLENGE] = pb.s2c_PetPKChallenge),
          (e[pb.EUserProtocol.C2S_PET_PK_RANK_INFO] = pb.c2s_PetPKRanInfo),
          (e[pb.EUserProtocol.S2C_PET_PK_RANK_INFO] = pb.s2c_PetPKRanInfo),
          (e[pb.EUserProtocol.C2S_PET_PK_CHALLENGE_ANSWER] =
            pb.c2s_PetPKChallengeAnswer),
          (e[pb.EUserProtocol.S2C_PET_PK_CHALLENGE_ANSWER] =
            pb.s2c_PetPKChallengeAnswer),
          (e[pb.EUserProtocol.S2C_PET_PK_CHALLENGE_NOTIFY] =
            pb.s2c_PetPKChallengeNotify),
          (e[pb.EUserProtocol.C2S_PET_PK_PROVOKE] = pb.c2s_PetPKProvoke),
          (e[pb.EUserProtocol.S2C_PET_PK_PROVOKE] = pb.s2c_PetPKProvoke),
          (e[pb.EUserProtocol.C2S_PET_PK_PUNISH] = pb.c2s_PetPKPunish),
          (e[pb.EUserProtocol.S2C_PET_PK_PUNISH] = pb.s2c_PetPKPunish),
          (e[pb.EUserProtocol.C2S_PET_PK_CONFIRM_PUSNISH] =
            pb.c2s_PetPKConfirmPunish),
          (e[pb.EUserProtocol.S2C_PET_PK_CONFIRM_PUSNISH] =
            pb.s2c_PetPKConfirmPunish),
          (e[pb.EUserProtocol.S2C_PET_PK_PUNISH_NOTIFY] =
            pb.s2c_PetPKPunishNotify),
          (e[pb.EUserProtocol.C2S_PET_PK_PUSNISH_DATA] =
            pb.c2s_PetPKPunishData),
          (e[pb.EUserProtocol.S2C_PET_PK_PUSNISH_DATA] =
            pb.s2c_PetPKPunishData),
          (e[pb.EUserProtocol.C2S_PET_PK_PUSNISH_DATA_CONFIRM] =
            pb.c2s_PetPKPunishDataConfirm),
          (e[pb.EUserProtocol.C2S_PIONEER_INFO] = pb.c2s_PioneerInfo),
          (e[pb.EUserProtocol.S2C_PIONEER_INFO] = pb.s2c_PioneerInfo),
          (e[pb.EUserProtocol.C2S_PLAY800_AUTOLOGIN] =
            pb.c2s_play800_autologin),
          (e[pb.EUserProtocol.S2C_PLAY800_AUTOLOGIN] =
            pb.s2c_play800_autologin),
          (e[pb.EUserProtocol.C2S_PERSON_SET] = pb.c2s_PersonSet),
          (e[pb.EUserProtocol.S2C_PERSON_SET] = pb.s2c_PersonSet),
          (e[pb.EUserProtocol.C2S_SET_SELL_ITEM] = pb.c2s_SetSellItem),
          (e[pb.EUserProtocol.S2C_SET_SELL_ITEM] = pb.s2c_SetSellItem),
          (e[pb.EUserProtocol.C2S_DOSOMETHING] = pb.c2s_doSomething),
          (e[pb.EUserProtocol.S2C_DOSOMETHING] = pb.s2c_doSomething),
          (e[pb.EUserProtocol.C2S_GET_ITEM_RATE] = pb.c2s_GetItemRate),
          (e[pb.EUserProtocol.S2C_GET_ITEM_RATE] = pb.s2c_GetItemRate),
          (e[pb.EUserProtocol.C2S_BLOCK_SETTING] = pb.c2s_blockSetting),
          (e[pb.EUserProtocol.S2C_BLOCK_SETTING] = pb.s2c_blockSetting),
          (e[pb.EUserProtocol.C2S_QQ_AUTOLOGIN] = pb.c2s_qq_autologin),
          (e[pb.EUserProtocol.S2C_QQ_AUTOLOGIN] = pb.s2c_qq_autologin),
          (e[pb.EUserProtocol.C2S_QQGAMECENTER_AUTOLOGIN] =
            pb.c2s_qqgamecenter_autologin),
          (e[pb.EUserProtocol.S2C_QQGAMECENTER_AUTOLOGIN] =
            pb.s2c_qqgamecenter_autologin),
          (e[pb.EUserProtocol.C2S_QUNHEI_LOGIN] = pb.c2s_qunhei_login),
          (e[pb.EUserProtocol.S2C_QUNHEI_LOGIN] = pb.s2c_qunhei_login),
          (e[pb.EUserProtocol.C2S_QUNHEI_IDCARD_AUTH] =
            pb.c2s_qunhei_idcard_auth),
          (e[pb.EUserProtocol.S2C_QUNHEI_IDCARD_AUTH] =
            pb.s2c_qunhei_idcard_auth),
          (e[pb.EUserProtocol.C2S_RED_PACKET_INFO] = pb.c2s_RedPacketInfo),
          (e[pb.EUserProtocol.S2C_RED_PACKET_INFO] = pb.s2c_RedPacketInfo),
          (e[pb.EUserProtocol.C2S_RED_PACKET_GET_REWARD] =
            pb.c2s_RedPacketGetReward),
          (e[pb.EUserProtocol.S2C_RED_PACKET_GET_REWARD] =
            pb.s2c_RedPacketGetReward),
          (e[pb.EUserProtocol.C2S_RED_PACKET_EXCHANGE] =
            pb.c2s_RedPacketExchange),
          (e[pb.EUserProtocol.S2C_RED_PACKET_EXCHANGE] =
            pb.s2c_RedPacketExchange),
          (e[pb.EUserProtocol.S2C_RED_PACKET_POOL_UPDATE] =
            pb.s2c_RedPacketPoolUpdate),
          (e[pb.EUserProtocol.S2C_RED_PACKET_POPUP] = pb.s2c_RedPacketPopup),
          (e[pb.EUserProtocol.S2C_SEAL_INFO] = pb.s2c_SealInfo),
          (e[pb.EUserProtocol.C2S_CHISEL_SEAL] = pb.c2s_ChiselSeal),
          (e[pb.EUserProtocol.S2C_CHISEL_SEAL] = pb.s2c_ChiselSeal),
          (e[pb.EUserProtocol.C2S_SEAL_SET_UP] = pb.c2s_SealSetUp),
          (e[pb.EUserProtocol.S2C_SEAL_SET_UP] = pb.s2c_SealSetUp),
          (e[pb.EUserProtocol.C2S_SEAL_TAKE_OFF] = pb.c2s_SealTakeOff),
          (e[pb.EUserProtocol.S2C_SEAL_TAKE_OFF] = pb.s2c_SealTakeOff),
          (e[pb.EUserProtocol.C2S_SEAL_ABSORB] = pb.c2s_SealAbsorb),
          (e[pb.EUserProtocol.S2C_SEAL_ABSORB] = pb.s2c_SealAbsorb),
          (e[pb.EUserProtocol.C2S_SEAL_STRENGTHEN] = pb.c2s_SealStrengthen),
          (e[pb.EUserProtocol.S2C_SEAL_STRENGTHEN] = pb.s2c_SealStrengthen),
          (e[pb.EUserProtocol.S2C_SEVEN_DAY_REWARD_INFO] =
            pb.s2c_SevenDayRewardInfo),
          (e[pb.EUserProtocol.C2S_SEVEN_DAY_REWARD_GET] =
            pb.c2s_SevenDayRewardGet),
          (e[pb.EUserProtocol.S2C_SEVEN_DAY_REWARD_GET] =
            pb.s2c_SevenDayRewardGet),
          (e[pb.EUserProtocol.C2S_SIMO_LOGIN] = pb.c2s_simo_login),
          (e[pb.EUserProtocol.S2C_SIMO_LOGIN] = pb.s2c_simo_login),
          (e[pb.EUserProtocol.C2S_SIMO_IDCARD_AUTH] = pb.c2s_simo_idcard_auth),
          (e[pb.EUserProtocol.S2C_SIMO_IDCARD_AUTH] = pb.s2c_simo_idcard_auth),
          (e[pb.EUserProtocol.C2S_SKILLTREE_LIST] = pb.c2s_SkillTree_List),
          (e[pb.EUserProtocol.S2C_SKILLTREE_LIST] = pb.s2c_SkillTree_List),
          (e[pb.EUserProtocol.C2S_CHOICE_SKILLTREE] = pb.c2s_Choice_SkillTree),
          (e[pb.EUserProtocol.S2C_CHOICE_SKILLTREE] = pb.s2c_Choice_SkillTree),
          (e[pb.EUserProtocol.C2S_SKILLTREE_RESET] = pb.c2s_SkillTree_Reset),
          (e[pb.EUserProtocol.S2C_SKILLTREE_RESET] = pb.s2c_SkillTree_Reset),
          (e[pb.EUserProtocol.C2S_SKILLTREE_LEARN] = pb.c2s_SkillTree_Learn),
          (e[pb.EUserProtocol.S2C_SKILLTREE_LEARN] = pb.s2c_SkillTree_Learn),
          (e[pb.EUserProtocol.C2S_SKILLTREE_GIVEUP] = pb.c2s_SkillTree_GiveUp),
          (e[pb.EUserProtocol.S2C_SKILLTREE_GIVEUP] = pb.s2c_SkillTree_GiveUp),
          (e[pb.EUserProtocol.C2S_MAIN_SKILLTREE] = pb.c2s_Main_SkillTree),
          (e[pb.EUserProtocol.S2C_MAIN_SKILLTREE] = pb.s2c_Main_SkillTree),
          (e[pb.EUserProtocol.C2S_SKILLTREE_UP] = pb.c2s_SkillTree_Up),
          (e[pb.EUserProtocol.S2C_SKILLTREE_UP] = pb.s2c_SkillTree_Up),
          (e[pb.EUserProtocol.C2S_SWJOY_LOGIN] = pb.c2s_swjoy_login),
          (e[pb.EUserProtocol.S2C_SWJOY_LOGIN] = pb.s2c_swjoy_login),
          (e[pb.EUserProtocol.C2S_TALENT_LIST] = pb.c2s_Talent_List),
          (e[pb.EUserProtocol.S2C_TALENT_LIST] = pb.s2c_Talent_List),
          (e[pb.EUserProtocol.C2S_TALENT_LEARN] = pb.c2s_Talent_Learn),
          (e[pb.EUserProtocol.S2C_TALENT_LEARN] = pb.s2c_Talent_Learn),
          (e[pb.EUserProtocol.C2S_GUILD_TASK_INFO] = pb.c2s_GuildTaskInfo),
          (e[pb.EUserProtocol.S2C_GUILD_TASK_INFO] = pb.s2c_GuildTaskInfo),
          (e[pb.EUserProtocol.C2S_GUILD_TASK_REWARD] = pb.c2s_GuildTaskReward),
          (e[pb.EUserProtocol.S2C_GUILD_TASK_REWARD] = pb.s2c_GuildTaskReward),
          (e[pb.EUserProtocol.C2S_TASK_INFO] = pb.c2s_TaskInfo),
          (e[pb.EUserProtocol.S2C_TASK_INFO] = pb.s2c_TaskInfo),
          (e[pb.EUserProtocol.C2S_TASK_ACTIVE_REWARD] =
            pb.c2s_TaskActiveReward),
          (e[pb.EUserProtocol.S2C_TASK_ACTIVE_REWARD] =
            pb.s2c_TaskActiveReward),
          (e[pb.EUserProtocol.SCENE_PLAYER_ASK_EVENT] = pb.c2s_playerAskEvent),
          (e[pb.EUserProtocol.S2C_SCENE_PLAYER_ASK_EVENT] =
            pb.s2c_playerAskEvent),
          (e[pb.EUserProtocol.S2C_ERROR_NOTICE] = pb.s2c_errorNotice),
          (e[pb.EUserProtocol.S2C_BAG_FULL] = pb.s2c_bagFullNotice),
          (e[pb.EUserProtocol.S2C_BLOOD_BOTTLE_INFO] = pb.s2c_bloodBottleInfo),
          (e[pb.EUserProtocol.S2C_VIRTUAL_MAP_BATTLE] =
            pb.s2c_virtualMapBattle),
          (e[pb.EUserProtocol.S2C_BATTLE_GROUP_ID] = pb.s2c_battleGroupId),
          (e[pb.EUserProtocol.C2S_COMMON_REWARD_INIT] =
            pb.c2s_CommonRewardInit),
          (e[pb.EUserProtocol.S2C_COMMON_REWARD_INIT] =
            pb.s2c_CommonRewardInit),
          (e[pb.EUserProtocol.C2S_COMMON_REWARD_ASK] = pb.c2s_CommonRewardAsk),
          (e[pb.EUserProtocol.S2C_COMMON_REWARD_ASK] = pb.s2c_CommonRewardAsk),
          (e[pb.EUserProtocol.S2C_RES_UPDATE] = pb.s2c_ResUpdate),
          (e[pb.EUserProtocol.C2S_COMMON_REWARD_SHOW] =
            pb.c2s_CommonRewardShow),
          (e[pb.EUserProtocol.S2C_COMMON_REWARD_SHOW] =
            pb.s2c_CommonRewardShow),
          (e[pb.EUserProtocol.C2S_COMMON_DIALOGUE] = pb.c2s_CommonDialogue),
          (e[pb.EUserProtocol.S2C_COMMON_DIALOGUE] = pb.s2c_CommonDialogue),
          (e[pb.EUserProtocol.C2S_COMMON_DIALOGUE_SAVE] =
            pb.c2s_CommonDialogueSave),
          (e[pb.EUserProtocol.S2C_COMMON_DIALOGUE_SAVE] =
            pb.s2c_CommonDialogueSave),
          (e[pb.EUserProtocol.C2S_VIVO_LOGIN] = pb.c2s_vivo_login),
          (e[pb.EUserProtocol.S2C_VIVO_LOGIN] = pb.s2c_vivo_login),
          (e[pb.EUserProtocol.C2S_WXMP_AUTOLOGIN] = pb.c2s_autologin),
          (e[pb.EUserProtocol.S2C_WXMP_AUTOLOGIN] = pb.s2c_autologin),
          (e[pb.EUserProtocol.C2S_MIDAS_ORDER_CONFIRM] =
            pb.c2s_midas_order_confirm),
          (e[pb.EUserProtocol.S2C_MIDAS_ORDER_CONFIRM] =
            pb.s2c_midas_order_confirm),
          (e[pb.EUserProtocol.C2S_SUBSCRIBE] = pb.c2s_subscribe),
          (e[pb.EUserProtocol.S2C_SUBSCRIBE] = pb.s2c_subscribe),
          (e[pb.EUserProtocol.C2S_SUBSCRIBE_STATUS] = pb.c2s_subscribe_status),
          (e[pb.EUserProtocol.S2C_SUBSCRIBE_STATUS] = pb.s2c_subscribe_status),
          (e[pb.EUserProtocol.C2S_WORLD_BOSS_INFO] = pb.c2s_WorldBossInfo),
          (e[pb.EUserProtocol.S2C_WORLD_BOSS_INFO] = pb.s2c_WorldBossInfo),
          (e[pb.EUserProtocol.C2S_WORLD_BOSS_CHALLENGE] =
            pb.c2s_WorldBossChallenge),
          (e[pb.EUserProtocol.S2C_WORLD_BOSS_CHALLENGE] =
            pb.s2c_WorldBossChallenge),
          (e[pb.EUserProtocol.C2S_WORLD_BOSS_SWEEP] = pb.c2s_WorldBossSweep),
          (e[pb.EUserProtocol.S2C_WORLD_BOSS_SWEEP] = pb.s2c_WorldBossSweep),
          (e[pb.EUserProtocol.C2S_WORLD_BOSS_BUY_TIMES] =
            pb.c2s_WorldBossBuyTimes),
          (e[pb.EUserProtocol.S2C_WORLD_BOSS_BUY_TIMES] =
            pb.s2c_WorldBossBuyTimes),
          (e[pb.EUserProtocol.C2S_WORLD_BOSS_ACHIEVE_REWARD] =
            pb.c2s_WorldBossAchieveReward),
          (e[pb.EUserProtocol.S2C_WORLD_BOSS_ACHIEVE_REWARD] =
            pb.s2c_WorldBossAchieveReward),
          (e[pb.EUserProtocol.C2S_WORLD_BOSS_RANK] = pb.c2s_WorldBossRank),
          (e[pb.EUserProtocol.S2C_WORLD_BOSS_RANK] = pb.s2c_WorldBossRank),
          (e[pb.EUserProtocol.S2C_WORLD_BOSS_UPDATE] = pb.s2c_WorldBossUpdate),
          (e[pb.EUserProtocol.C2S_WORLD_BOSS_ACHIEVEMENT] =
            pb.c2s_WorldBossAchievement),
          (e[pb.EUserProtocol.S2C_WORLD_BOSS_ACHIEVEMENT] =
            pb.s2c_WorldBossAchievement),
          (e[pb.EUserProtocol.S2C_WORLD_BOSS_UNLOCK_SWEEP] =
            pb.s2c_WorldBossUnlockSweep),
          (e[pb.EUserProtocol.S2C_WORLD_BOSS_ACHIEVE_UPDATE] =
            pb.s2c_WorldBossAchieveUpdate),
          (e[pb.EUserProtocol.C2S_XSERVER_PK_RANK_ENEMIES] = pb.c2s_enemies),
          (e[pb.EUserProtocol.S2C_XSERVER_PK_RANK_ENEMIES] = pb.s2c_enemies),
          (e[pb.EUserProtocol.C2S_XSERVER_PK_RANK_SIGNUP] = pb.c2s_signup),
          (e[pb.EUserProtocol.S2C_XSERVER_PK_RANK_SIGNUP] = pb.s2c_signup),
          (e[pb.EUserProtocol.C2S_XSERVER_PK_RANK_MATCH] = pb.c2s_match),
          (e[pb.EUserProtocol.S2C_XSERVER_PK_RANK_MATCH] = pb.s2c_match),
          (e[pb.EUserProtocol.C2S_XSERVER_PK_RANK_INFO] = pb.c2s_info),
          (e[pb.EUserProtocol.S2C_XSERVER_PK_RANK_INFO] = pb.s2c_info),
          (e[pb.EUserProtocol.C2S_XSERVER_PK_RANK_ENTER] = pb.c2s_enter),
          (e[pb.EUserProtocol.S2C_XSERVER_PK_RANK_ENTER] = pb.s2c_enter),
          (e[pb.EUserProtocol.C2S_XSERVER_PK_RANK_LEAVE] = pb.c2s_leave),
          (e[pb.EUserProtocol.S2C_XSERVER_PK_RANK_LEAVE] = pb.s2c_leave),
          (e[pb.EUserProtocol.C2S_XSERVER_PK_RANK_CONFIG] = pb.c2s_config),
          (e[pb.EUserProtocol.S2C_XSERVER_PK_RANK_CONFIG] = pb.s2c_config),
          (e[pb.EUserProtocol.S2C_XSERVER_PK_RANK_BATTLERS] = pb.s2c_battlers),
          (e[pb.EUserProtocol.C2S_XSERVER_PK_RANK_RANKLIST] = pb.c2s_ranklist),
          (e[pb.EUserProtocol.S2C_XSERVER_PK_RANK_RANKLIST] = pb.s2c_ranklist),
          (e[pb.EUserProtocol.C2S_XSERVER_PK_RANK_QACMD] = pb.c2s_qacmd),
          (e[pb.EUserProtocol.S2C_XSERVER_PK_RANK_QACMD] = pb.s2c_qacmd),
          (e[pb.EUserProtocol.C2S_XSERVER_PK_RANK_ASSIST] = pb.c2s_assist),
          (e[pb.EUserProtocol.S2C_XSERVER_PK_RANK_ASSIST] = pb.s2c_assist),
          (e[pb.EUserProtocol.C2S_YOUXIYOU_LOGIN] = pb.c2s_youxiyou_login),
          (e[pb.EUserProtocol.S2C_YOUXIYOU_LOGIN] = pb.s2c_youxiyou_login),
          e);
      }),
      (e.getProtobufCls = function (e) {
        return this._protobuf && this._protobuf[e];
      }),
      e
    );
  })();
  t["default"] = o;
});
