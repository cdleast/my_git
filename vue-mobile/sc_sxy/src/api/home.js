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
}