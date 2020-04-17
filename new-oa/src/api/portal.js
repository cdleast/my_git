import axios from '@/utils/request/axios' // 请求文件


export default {
    // 待办
    getDaiBan() {
        return axios({
            url: '/portal/daiban',
            method: 'get'
        })
    },

    // 待阅
    getDaiYue() {
        return axios({
            url: '/portal/daiyue',
            method: 'get'
        })
    },

    // 未结
    getWeiJie() {
        return axios({
            url: '/portal/weijie',
            method: 'get'
        })
    },

    // 委托
    getWeiTuo() {
        return axios({
            url: '/portal/weituo',
            method: 'get'
        })
    },

    // 提醒
    getTiXing() {
        return axios({
            url: '/portal/tixing',
            method: 'get'
        })
    },
}
