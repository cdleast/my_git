// 设置属性，主要承载一些属性，存储数据的
const state = {
    isCollapse: false, // 左侧导航默认展开
}

// 对应的一些方法,用来获取到属性(state)的状态
const getters = {

}

// 主要用来更改属性(state)的状态，完全是同步的操作
const mutations = {
    // 左侧导航展开收缩
    toggleSideBar(state) {
        state.isCollapse = !state.isCollapse
    },

    // // 登录获取用户菜单权限树
    // setSidebar(state, val) {
    //     state.sidebars = val
    // },

    // 清除用户菜单权限树
    // clearSidebar(state) {
    //     state.sidebars = []
    // }
}

// 不直接操作，应用mutations，可以实现异步的操作
const actions = {

}

// 暴露对象，让其他页面可以拿到
export default {
    namespaced: true, // 命名空间，必须加文件名/方法函数
    state,
    getters,
    mutations,
    actions
}