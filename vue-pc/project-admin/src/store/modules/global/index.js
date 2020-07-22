import { getToken, setToken, removeToken } from '@/utils/request/auth'

// 设置属性，主要承载一些属性，存储数据的
const state = {
    token: getToken(),
}

// 对应的一些方法,用来获取到属性(state)的状态
const getters = {
    token: state => state.user.token
}

// 主要用来更改属性(state)的状态，完全是同步的操作
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
}

// 不直接操作，应用mutations，可以实现异步的操作
const actions = {

}

// 暴露对象，让其他页面可以拿到
export default {
    state,
    getters,
    mutations,
    actions
}