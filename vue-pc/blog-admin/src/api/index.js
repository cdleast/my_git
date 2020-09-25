import request from '@/utils/request'


export default {
    test() {
        return request({
            url: '/vue-admin-template/user/login',
            method: 'post',
            data
        })
    }
}