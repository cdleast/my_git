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

    // 校验密码, userId, password 旧密码
    checkPwd(userId, password) {
        return axios({
            url: '/user/pwd',
            method: 'post',
            data: {
                userId,
                password
            }
        })
    },

    // 修改密码userId 用户ID, password 新密码
    updatePwd(userId, password) {
        return axios({
            url: '/user/pwd',
            method: 'put',
            data: {
                userId,
                password
            }
        })
    },

    // 退出系统
    logout(token) {
        return axios({
            url: '/user/logout',
            method: 'post',
            data: {
                token
            }
        })
    }
}
