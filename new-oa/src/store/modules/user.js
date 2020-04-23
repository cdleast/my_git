// vuex中的类型types
const types = {
    SET_IS_AUTNENTIATED: 'SET_IS_AUTNENTIATED', // 是否认证通过
    SET_USER: 'SET_USER' // 用户信息
}

// 设置属性，主要承载一些属性，存储数据的
const state = {
    isAutnenticated: false,  // 是否认证，默认为false
    user: {}   // 存储用户信息
}

// 对应的一些方法,用来获取到属性(state)的状态
const getters = {
    isAutnenticated: state => state.isAutnenticated,
    user: state => state.user
}

// 主要用来更改属性(state)的状态，完全是同步的操作
const mutations = {
    // 设置方法，规定一个类型为types.SET_IS_AUTNENTIATED
    // 更改认证状态
    [types.SET_IS_AUTNENTIATED](state, isAutnenticated) {
        if (isAutnenticated) {
            state.isAutnenticated = isAutnenticated
        } else {
            state.isAutnenticated = false
        }
    },
    // 更改用户信息
    [types.SET_USER](state, user) {
        if (user) {
            state.user = JSON.parse(user)
        } else {
            state.user = {}
        }
    }
}

// 不直接操作，应用mutations，可以实现异步的操作
const actions = {
    // 设置认证状态
    setIsAutnenticated: ({ commit }, isAutnenticated) => {
        commit(types.SET_IS_AUTNENTIATED, isAutnenticated)
    },
    // 设置用户信息
    setUser: ({ commit }, user) => {
        commit(types.SET_USER, user)
    },
    // 清除用户存储的信息
    clearCurrentState: ({ commit }) => {
        commit(types.SET_IS_AUTNENTIATED, false)
        commit(types.SET_USER, null)
    }
}

// 暴露对象，让其他页面可以拿到
export default {
    state,
    getters,
    mutations,
    actions
}