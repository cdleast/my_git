import axios from '@/utils/request/axios' // 请求文件


export default {
    // 左侧导航
    getLeftMenu() {
        return axios({
            url: '/proces/leftmenu',
            method: 'get'
        })
    },

}
