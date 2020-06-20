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
    appCourseDetails(ID) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appCourseDetails.do',
            method: 'POST',
            params: {
                COURSE_ID: ID
            }
        })
    },

    /**
     * 金牌课程详情/目录部分
    */
    appCoursewareList(ID) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSEWARE.appCoursewareList.do',
            method: 'POST',
            params: {
                COURSE_ID: ID,
                PAGE: 1,
                NUM: 10,
                NOPAGE: true
            }
        })
    },

    /**
     * 金牌课程详情/评价部分/评分值
    */
    appAverageComments(ID) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appAverageComments.do',
            method: 'POST',
            params: {
                COURSE_ID: ID
            }
        })
    },

    /**
     * 金牌课程详情/课程评论列表
    */
    appQueryComments(ID) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appQueryComments.do',
            method: 'POST',
            params: {
                COURSE_ID: ID,
                PAGE: 1,
                NUM: 10,
                NOPAGE: true
            }
        })
    },

    /**
     * 金牌课程详情/课程评论点赞
    */
    appAddSupport(ID, COMID) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appAddSupport.do',
            method: 'POST',
            params: {
                COURSE_ID: ID,
                COMMENT_ID: COMID
            }
        })
    },

    /**
     * 金牌课程详情/课程评论取消点赞
    */
    appDeleteSupport(ID, COMID) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appDeleteSupport.do',
            method: 'POST',
            params: {
                COURSE_ID: ID,
                COMMENT_ID: COMID
            }
        })
    },

    /**
     * 金牌课程详情/课程添加评论
    */
    appAddComments(ID, RATE, CONTENT) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appAddComments.do',
            method: 'POST',
            params: {
                COURSE_ID: ID,
                RATE: RATE,
                CONTENT: CONTENT
            }
        })
    },

    /**
     * 金牌课程/全部课程
    */
    appCoursesListAll(data) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appCoursesListAll.do',
            method: 'POST',
            params: {
                NAME: data.NAME,
                PAGE: data.PAGE,
                NUM: data.NUM,
                SORT: data.SORT,
                STATE: data.STATE,
                NOPAGE: data
            }
        })
    },

    /**
     * 金牌课程/课程分类
    */
    appCoursesCategory(NAME) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE_TYPE.appCoursesCategory.do',
            method: 'POST',
            params: {
                NAME: NAME
            }
        })
    },

    /**
     * 金牌课程/课程分类下课程列表
    */
    appCoursesList(data) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appCoursesList.do',
            method: 'POST',
            params: {
                TYPE_ID: data.TYPE_ID,
                PAGE: data.PAGE,
                NUM: data.NUM,
                NAME: data.NAME,
                SORT: data.SORT,
                STATE: data.STATE,
                NOPAGE: data.NOPAGE
            }
        })
    },

    /**
     * 金牌课程/我的课程
    */
    appCoursesListMy(data) {
        return request({
            url: '/archivetemp-api/EXEXM_COURSE.appCoursesListMy.do',
            method: 'POST',
            params: {
                NAME: data.NAME,
                PAGE: data.PAGE,
                NUM: data.NUM,
                SORT: data.SORT,
                NOPAGE: data.NOPAGE,
            }
        })
    },


}