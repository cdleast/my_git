import request from '@/utils/request/axios' // 请求文件

export default {
    // 登录用户
    login(users) {
        return request({
            url: '/archivetemp-api/SY_ORG_LOGIN.login.do',
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-DEVICE-NAME": "@chrome-76.0.3809.132"
            },
            params: {
                loginName: users.loginName,
                password: users.password
            }
        })
    },

    // 获取用户信息
    getUserInfo(){

    }
}