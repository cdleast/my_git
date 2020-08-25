import request from '@/utils/request'


export default {
    // 头部导航
    getDataList(params) {
        return request({
            url: '/mork/topbar.json',
            method: 'get',
            params
        })
    },

}