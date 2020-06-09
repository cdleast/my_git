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

    // 登录引导页-开屏广告
    loginGuide() {
        return request({
            url: '/archivetemp-api/EXEXM_BOOTSTRAP_AD.appLoginBoot.do',
            method: 'POST'
        })
    },

    // 获取账户登录的用户信息
    getAccountUser() {
        return request({
            url: '/archivetemp-api/EXEXM_USER_LIST.appEnalbeUserList.do',
            method: 'POST'
        })
    }
}