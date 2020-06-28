import request from '@/utils/request/axios' // 请求文件

export default {
    /**
     * 获取首页轮播图
    */
    appGetPicture() {
        return request({
            url: '/archivetemp-api/EXEXM_HOME_AD.appGetPicture.do',
            method: 'POST'
        })
    },

    /**
     * 热门头条
    */
    appHotHeadlines() {
        return request({
            url: '/archivetemp-api/EXEXM_HOT_HEADLINES.appHotHeadlines.do',
            method: 'POST'
        })
    },

    /**
     * 金牌课程
    */
    appGoldCourse() {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appGoldCourse.do',
            method: 'POST'
        })
    },

    /**
     * 金牌课程详情
    */
    appCourseDetails(data) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appCourseDetails.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 金牌课程详情/目录部分
    */
    appCoursewareList(data) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSEWARE.appCoursewareList.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 金牌课程详情/评价部分/评分值
    */
    appAverageComments(data) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appAverageComments.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 金牌课程详情/课程评论列表
    */
    appQueryComments(data) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appQueryComments.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 金牌课程详情/课程评论点赞
    */
    appAddSupport(data) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appAddSupport.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 金牌课程详情/课程评论取消点赞
    */
    appDeleteSupport(data) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appDeleteSupport.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 金牌课程详情/课程添加评论
    */
    appAddComments(data) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appAddComments.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 金牌课程/全部课程
    */
    appCoursesListAll(data) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appCoursesListAll.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 金牌课程/课程分类
    */
    appCoursesCategory(data) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE_TYPE.appCoursesCategory.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 金牌课程/课程分类下课程列表
    */
    appCoursesList(data) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appCoursesList.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 金牌课程/我的课程
    */
    appCoursesListMy(data) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appCoursesListMy.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 金牌课程/我的课程数量/我的收藏数量
    */
    appCourseSum() {
        return request({
            url: '/archivetemp-api/EXEXM_INTEGRAL_INFO_V.appCourseSum.do',
            method: 'POST'
        })
    },

    /**
     * 行业优秀课程
    */
    appExcellentCourse() {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appExcellentCourse.do',
            method: 'POST'
        })
    },

    /**
     * 同事圈详情
    */
    appColleague(ID) {
        return request({
            url: '/archivetemp-api/EXEXM_MOMENTS.appColleague.do',
            method: 'POST',
            params: {
                ID: ID
            }
        })
    },

    /**
     * 同事圈点赞
    */
    appGiveLike(data) {
        return request({
            url: '/archivetemp-api/EXEXM_MOMENTS_LIKE.appGiveLike.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 同事圈取消点赞
    */
    appCancelLike(data) {
        return request({
            url: '/archivetemp-api/EXEXM_MOMENTS_LIKE.appCancelLike.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 胶囊广告
    */
    appGetCapsule() {
        return request({
            url: '/archivetemp-api/EXEXM_HOME_CAPSULE.appGetCapsule.do',
            method: 'POST'
        })
    },

    /**
     * 知识库/浏览人数添加
    */
    appAddKnLl(data) {
        return request({
            url: '/archivetemp-api/EXEXM_KNOWLEDGE_LOOK.appAddKnLl.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 知识库/浏览人数统计
    */
    appCountKnOt(data) {
        return request({
            url: '/archivetemp-api/EXEXM_KNOWLEDGE_LOOK.appCountKnOt.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 知识库详情
    */
    appEXEXM_KNOWLEDGE(data) {
        return request({
            url: '/archivetemp-api/EXEXM_KNOWLEDGE.byid.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 知识库/是否收藏
    */
    appKnScCollection(data) {
        return request({
            url: '/archivetemp-api/EXEXM_KNOWLEDGE_COLLECTION.appKnScCollection.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 知识库/添加收藏
    */
    appAddKnScCollection(data) {
        return request({
            url: '/archivetemp-api/EXEXM_KNOWLEDGE_COLLECTION.appAddKnScCollection.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 知识库/取消
    */
    appKnDeleteCollection(data) {
        return request({
            url: '/archivetemp-api/EXEXM_KNOWLEDGE_COLLECTION.appKnDeleteCollection.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 知识库/是否点赞
    */
    appIsLike(data) {
        return request({
            url: '/archivetemp-api/EXEXM_KNOWLEDGE_LIKE.appIsLike.do',
            method: 'POST',
            params: data
        })
    },


    /**
     * 知识库/点赞
    */
    appLike(data) {
        return request({
            url: '/archivetemp-api/EXEXM_KNOWLEDGE_LIKE.appLike.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 知识库/取消点赞
    */
    appCancelLike(data) {
        return request({
            url: '/archivetemp-api/EXEXM_KNOWLEDGE_LIKE.appCancelLike.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 知识库/评论人数
    */
    appCountKnPlCollection(data) {
        return request({
            url: '/archivetemp-api/EXEXM_KNOWLEDGE_COMMENT.appCountKnPlCollection.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 知识库/评论列表
    */
    appQueryKnPl(data) {
        return request({
            url: '/archivetemp-api/EXEXM_KNOWLEDGE_COMMENT.appQueryKnPl.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 知识库/提交评论
    */
    appAddKnPl(data) {
        return request({
            url: '/archivetemp-api/EXEXM_KNOWLEDGE_COMMENT.appAddKnPl.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 企业资讯顶部根栏目列表
    */
    appChnlList() {
        return request({
            url: '/archivetemp-api/EXEXM_INFORMATION_CHNL.appChnlList.do',
            method: 'POST'
        })
    },

    /**
     * 企业资讯列表
    */
    appInforList(data) {
        return request({
            url: '/archivetemp-api/EXEXM_INFORMATION.appInforList.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 企业资讯详情
    */
    appInformation(data) {
        return request({
            url: '/archivetemp-api/EXEXM_INFORMATION.appInformation.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 是否签到
    */
    appDoYouSignIn(data) {
        return request({
            url: '/archivetemp-api/EXEXM_SIGNED.appDoYouSignIn.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 签到保存 
    */
    appSignIn(data) {
        return request({
            url: '/archivetemp-api/EXEXM_SIGNED.appSignIn.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 自动签到
    */
    appAutomaticSignIn(data) {
        return request({
            url: '/archivetemp-api/EXEXM_SIGNED.appAutomaticSignIn.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 今日签到奖励
    */
    appSignInAwardToday(data) {
        return request({
            url: '/archivetemp-api/EXEXM_SIGNED.appSignInAwardToday.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 额外签到奖励
    */
    appSignInAdditional(data) {
        return request({
            url: '/archivetemp-api/EXEXM_SIGNED.appSignInAdditional.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 当月累计签到天数
    */
    appAccumulatedDays(data) {
        return request({
            url: '/archivetemp-api/EXEXM_SIGNED.appAccumulatedDays.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 签到列表
    */
    appSignInList(data) {
        return request({
            url: '/archivetemp-api/EXEXM_SIGNED.appSignInList.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 当月心情列表
    */
    appMoodList(data) {
        return request({
            url: '/archivetemp-api/EXEXM_SIGNED.appMoodList.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 月累计签到奖励
    */
    appAttendanceAward(data) {
        return request({
            url: '/archivetemp-api/EXEXM_SIGNED.appAttendanceAward.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 领取钱袋礼包
    */
    appGiftCollection(data) {
        return request({
            url: '/archivetemp-api/EXEXM_SIGNED.appGiftCollection.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 排行榜类别+排行榜类型+签到心情+学习计划来源类型+公告类别+公告紧急程度
    */
    SY_COMM_INFO(data) {
        return request({
            url: '/archivetemp-api/SY_COMM_INFO.dict.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 我的排行榜值
    */
    appMyRanking(data) {
        return request({
            url: '/archivetemp-api/EXEXM_LEADERBOARD.appMyRanking.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 排行榜列表
    */
    appRankingListClass(data) {
        return request({
            url: '/archivetemp-api/EXEXM_LEADERBOARD.appRankingListClass.do',
            method: 'POST',
            params: data
        })
    },

}