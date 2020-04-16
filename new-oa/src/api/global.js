import request from '@/utils/request' // 请求文件


export default {
    // 注册用户 
    register(pojo) {
        return request({
            url: '/user/register',
            method: 'post',
            data: pojo
        })
    },

    // 登录用户
    login(users) {
        return request({
            url: '/user/login',
            method: 'post',
            data: {
                username: users.username,
                password: users.password
            }
        })
    },
}
