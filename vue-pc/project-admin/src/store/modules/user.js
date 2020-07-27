import Cookie from 'js-cookie'

// 设置属性，主要承载一些属性，存储数据的
const state = {
    token: ''
}

// 对应的一些方法,用来获取到属性(state)的状态
const getters = {

}

// 主要用来更改属性(state)的状态，完全是同步的操作
const mutations = {
    // 设置存储Token
    setToken(state, val) {
        state.token = val
        Cookie.set('token', val)
    },

    // 清除Token
    clearToken(state) {
        state.token = ''
        Cookie.remove('token')
    },

    // 获取Token
    getToken(state) {
        state.token = Cookie.get('token')
    }
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