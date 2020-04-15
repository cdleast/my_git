// 设置属性，主要承载一些属性，存储数据的
const state = {
    openTab: [],// 所有打开的路由
    activeIndex: '/protal' // 激活状态
}

// 对应的一些方法,用来获取到属性(state)的状态
const getters = {
    openTab: state => state.openTab,
    activeIndex: state => state.activeIndex
}

// 主要用来更改属性(state)的状态，完全是同步的操作
const mutations = {
    // 添加tabs
    add_tabs(state, data) {
        state.openTab.push(data);
    },
    // 删除tabs
    delete_tabs(state, route) {
        state.openTab = state.openTab.filter((res)=>{
            return res.route !== route;
        })
    },
    // 设置当前激活的tab
    set_active_index(state, index) {
        state.activeIndex = index;
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