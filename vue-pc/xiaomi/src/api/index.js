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

    // 关于小米
    getAboutDataList(params) {
        return request({
            url: '/mork/about.json',
            method: 'get',
            params
        })
    },

    // 帮助中心
    getServiceDataList(params) {
        return request({
            url: '/mork/service.json',
            method: 'get',
            params
        })
    },

    // 获取三级联动省市区
    getProvinceCityArea(params) {
        return request({
            url: '/mork/area.json',
            method: 'get',
            params
        })
    }

}