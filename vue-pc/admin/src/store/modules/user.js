import { getToken, setToken, setUser, getUser, removeTokenUser } from '@/utils/auth'
import api from '@/api'


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
    // 登录获取token
    login({ commit }, form) {
        // resolve 触发成功处理, reject 触发异常处理
        return new Promise((resolve, reject) => {
            api.loginUser(form.loginUser.trim(), form.loginPass).then(res => {
                const resp = res.data // 获取到的就是响应的data数据
                commit('SET_TOKEN', resp.data.token)
                // 通过组件已经将token更新成功
                resolve(resp)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 通过token获取用户信息
    getUserInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            api.getUserInfo(state.token).then(res => {
                const respUser = res.data
                commit('SET_USER', respUser.data)
                resolve(respUser)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 用户退出
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            api.logoutUser(state.token).then(res => {
                const resp = res.data
                commit('SET_TOKEN', '')
                commit('SET_USER', null)
                removeTokenUser()
                resolve(resp)
            }).catch(error => {
                reject(error)
            })
        })
    }
}

// 暴露对象，让其他页面可以拿到
export default {
    namespaced: true, // 命名空间，必须加文件名/方法函数
    state,
    getters,
    mutations,
    actions
}