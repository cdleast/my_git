import axios from '@/utils/request/axios' // 请求文件


export default {
    // 注册用户 
    register(pojo) {
        return axios({
            url: '/user/register',
            method: 'post',
            data: pojo
        })
    },

    // 登录用户
    login(users) {
        return axios({
            url: '/user/login',
            method: 'post',
            data: {
                username: users.username,
                password: users.password
            }
        })
    },

    // 获取用户的数据
    getUserInfo(token) {
        return axios({
            url: `/user/info/${token}`,
            method: 'get'
        })
    },

    // 退出系统
    logout(token) {
        return axios({
            url: `/user/logout`,
            method: 'post',
            data: {
                token
            }
        })
    }
}
