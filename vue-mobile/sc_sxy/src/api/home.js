import request from '@/utils/request/axios' // 请求文件

export default {
    // 获取首页轮播图
    homeSwiper(){
        return request({
            url: '/archivetemp-api/EXEXM_HOME_AD.appGetPicture.do',
            method: 'POST'
        })
    },

    // 热门头条
    hotInfo(){
        return request({
            url: '/archivetemp-api/EXEXM_HOT_HEADLINES.appHotHeadlines.do',
            method: 'POST'
        })
    }

    
}