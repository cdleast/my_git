import defaultSettings from '@/settings' // 引入设置状态文件
const { showSettings, fixedHeader, sidebarLogo, tagsView } = defaultSettings

// 设置属性，主要承载一些属性，存储数据的
const state = {
    showSettings: showSettings, // 是否显示设置按钮
    fixedHeader: fixedHeader, // 是否固定头部
    sidebarLogo: sidebarLogo, // logo状态
    tagsView: tagsView // 是否显示tagsView导航
}

// 对应的一些方法,用来获取到属性(state)的状态
const getters = {

}

// 主要用来更改属性(state)的状态，完全是同步的操作
const mutations = {
    // Switch 开关变化
    CHANGE_SETTING: (state, { key, value }) => {
        // hasOwnProperty判断自身属性是否存在
        if (state.hasOwnProperty(key)) {
            state[key] = value
        }
    }
}

// 不直接操作，应用mutations，可以实现异步的操作
const actions = {
    // Switch 开关变化
    changeSetting({ commit }, data) {
        commit('CHANGE_SETTING', data)
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