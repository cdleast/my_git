import request from '@/utils/request/axios' // 请求文件

export default {
    // 登录用户
    login(users) {
        return request({
            url: '/archivetemp-api/SY_ORG_LOGIN.login.do',
            method: 'POST',
            params: {
                loginName: users.loginName,
                password: users.password
            }
        })
    },

    // 登录引导页
    loginGuide() {
        return request({
            url: '/archivetemp-api/EXEXM_BOOTSTRAP_AD.appLoginBoot.do',
            method: 'POST'
        })
    }
}