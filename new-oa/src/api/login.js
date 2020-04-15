import request from '@/utils/request' // 请求文件


// 提交表单给后台进行验证是否正确
export function login(username, password) {
    return request({
        url: '/user/login',
        method: 'post',
        data: {
            username,
            password
        }
    })
}