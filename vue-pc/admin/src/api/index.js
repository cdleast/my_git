import request from '@/utils/request'

export default {
    /**
     * 用户登录
    */
    loginUser(data) {
        return request({
            url: '/user/login',
            method: 'post',
            data
        })
    },


    /**
     * 获取用户信息
     */
    getUserInfo(token) {
        return request({
            url: `/user/info/${token}`,
            method: 'get'
        })
    },


    /**
     * 注册用户
     * regUser - 注册用户名
     * regPass - 密码
     * checkPass - 确认密码
     * checked - 用户协议
     */
    registerUser(data) {
        return request({
            url: '/user/register',
            method: 'post',
            data
        })
    },


    /**
     * 退出管理员用户
    */
    logoutUser(token) {
        return request({
            url: '/user/logout',
            method: 'post',
            data: {
                token
            }
        })
    }

}