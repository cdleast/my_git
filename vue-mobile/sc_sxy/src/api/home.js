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
     * 知识库详情
    */
    appEXEXM_KNOWLEDGE(ID) {
        return request({
            url: '/archivetemp-api/EXEXM_KNOWLEDGE.byid.do',
            method: 'POST',
            params: {
                ID: ID
            }
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
}