import request from '@/utils/request/axios' // 请求文件

export default {
    /**
     * 企业公告未读数量
    */
    appUnreadQuantity(data) {
        return request({
            url: '/archivetemp-api/EXEXM_NOTICE.appUnreadQuantity.do',
            method: 'POST',
            params: data
        })
    },

    /**
     * 企业公告列表
    */
    appGetCapsule(data) {
        return request({
            url: '/archivetemp-api/EXEXM_NOTICE.appGetCapsule.do',
            method: 'POST',
            params: data
        })
    },

    /**
    * 企业公告详情
    */
    appNotice(data) {
        return request({
            url: '/archivetemp-api/EXEXM_NOTICE.appNotice.do',
            method: 'POST',
            params: data
        })
    },

    /**
    * 企业公告搜索
    */
    appSearch(data) {
        return request({
            url: '/archivetemp-api/EXEXM_NOTICE.appSearch.do',
            method: 'POST',
            params: data
        })
    },
}