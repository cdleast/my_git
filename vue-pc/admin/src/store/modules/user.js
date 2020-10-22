import { getToken, setToken, setUser, getUser } from '@/utils/auth'

// 设置属性，主要承载一些属性，存储数据的
const state = {
    token: getToken(), // getToken() 作为token初始值，解决刷新页面之后token为null
    user: getUser()
}

// 对应的一些方法,用来获取到属性(state)的状态
const getters = {
    token: state => state.token,
    user: state => state.user
}

// 主要用来更改属性(state)的状态，完全是同步的操作
const mutations = {
    // 设置token
    SET_TOKEN(state, token) {
        state.token = token
        setToken(token)
    },

    // 设置用户信息
    SET_USER(state, user) {
        state.user = user
        setUser(user)
    }
}

// 不直接操作，应用mutations，可以实现异步的操作
const actions = {
    // 登录成功，存储token
    login: ({ commit }, token) => {
        commit("SET_TOKEN", token)
    },

    // 获取用户信息
    getUserInfo: ({ commit }, user) => {
        commit("SET_USER", user)
    }
}

// 暴露对象，让其他页面可以拿到
export default {
    namespaced: true, // 引用里需要指定模块名
    state,
    getters,
    mutations,
    actions
}