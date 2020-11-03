// 设置属性，主要承载一些属性，存储数据的
const state = {
    visitedViews: [
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home'),
            meta: { title: '首页', icon: 'el-icon-s-home', affix: true }
        }
    ] // 用户访问过的页面
}


// 对应的一些方法,用来获取到属性(state)的状态
const getters = {

}


// 主要用来更改属性(state)的状态，完全是同步的操作
const mutations = {
    // 添加用户访问过的页面
    ADD_VISITED_VIEW: (state, view) => {
        // some方法 只要其中一个为true 就会返回true的
        // 判断是否已经打开过当前路由页面
        // console.log(view)
        if (state.visitedViews.some(v => v.path === view.path)) return
        state.visitedViews.push(view)
    },

    // 删除标签导航
    CLOSE_TAG_VIEW: (state, view) => {
        state.visitedViews.splice(view, 1)
    },

    // 退出清除visitedViews标签
    CLEAR_TAG_VIEW: (state) => {
        state.visitedViews = state.visitedViews.filter(item => {
            return item.meta.affix
        })
    }
}


// 不直接操作，应用mutations，可以实现异步的操作
const actions = {
    // 添加用户访问过的页面
    addVisitedView({ commit }, view) {
        commit('ADD_VISITED_VIEW', view)
    },

    // 删除标签导航
    closeTagView({ commit }, view) {
        commit('CLOSE_TAG_VIEW', view)
    },

    // 退出清除visitedViews标签
    clearTagView({ commit }) {
        commit('CLEAR_TAG_VIEW')
    },
}


// 暴露对象，让其他页面可以拿到
export default {
    namespaced: true, // 命名空间，必须加文件名/方法函数
    state,
    getters,
    mutations,
    actions
}