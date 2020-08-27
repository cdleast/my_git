import request from '@/utils/request'


export default {
    // 头部导航数据
    getHeadDataList(params) {
        return request({
            url: '/mork/topbar.json',
            method: 'get',
            params
        })
    },

    // 底部导航数据
    getFooterDataList(params) {
        return request({
            url: '/mork/footer.json',
            method: 'get',
            params
        })
    },

    // 底部导航数据
    getAboutDataList(params) {
        return request({
            url: '/mork/about.json',
            method: 'get',
            params
        })
    },

}