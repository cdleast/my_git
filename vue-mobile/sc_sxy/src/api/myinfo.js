import request from '@/utils/request/axios' // 请求文件

export default {
    /**
     * 我的课程数量/我的收藏数量
    */
    appCourseSum() {
        return request({
            url: '/archivetemp-api/EXEXM_INTEGRAL_INFO_V.appCourseSum.do',
            method: 'POST'
        })
    },

    /* 
    * 我的魅力值总数
    */
    appMyCharisma(data) {
        return request({
            url: '/archivetemp-api/EXEXM_INTEGRAL_INFO_V.appMyCharisma.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 近7天的魅力值
    */
    appCharismaSeven(data) {
        return request({
            url: '/archivetemp-api/EXEXM_INTEGRAL_INFO_V.appCharismaSeven.do',
            method: 'POST',
            params: data
        })
    },
}