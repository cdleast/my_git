// 设置属性，主要承载一些属性，存储数据的
const state = {
    visitedViews: [ // 用户访问过的页面
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home'),
            meta: { title: '首页', icon: 'el-icon-s-home', affix: true }
        }
    ],
    cachedViews: [] // 刷新缓存
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
        if (state.visitedViews.some(v => v.path === view.path)) return
        state.visitedViews.push(view)
    },

    // 删除选中标签
    DEL_VISITED_VIEW: (state, view) => {
        // entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。
        for (const [i, v] of state.visitedViews.entries()) {
            if (v.path === view.path) {
                state.visitedViews.splice(i, 1)
                break
            }
        }
    },

    // 右键刷新
    DEL_CACHED_VIEW: (state, view) => {
        const index = state.cachedViews.indexOf(view.name)
        index > -1 && state.cachedViews.splice(index, 1)
    },

    // 右键删除其他标签
    DEL_OTHERS_VISITED_VIEWS: (state, view) => {
        state.visitedViews = state.visitedViews.filter(v => {
            return v.meta.affix || v.path === view.path
        })
    },

    // 右键删除所有标签
    DEL_ALL_VISITED_VIEWS: state => {
        // keep affix tags
        const affixTags = state.visitedViews.filter(item => item.meta.affix)
        state.visitedViews = affixTags
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
    addView({ dispatch }, view) {
        dispatch('addVisitedView', view)
        // dispatch('addCachedView', view)
    },
    addVisitedView({ commit }, view) {
        commit('ADD_VISITED_VIEW', view)
    },
    // addCachedView({ commit }, view) {
    //     commit('ADD_CACHED_VIEW', view)
    // },

    // 删除标签-异步
    delView({ dispatch, state }, view) {
        return new Promise(resolve => {
            dispatch('delVisitedView', view)
            dispatch('delCachedView', view) // 右键刷新的方法
            resolve({
                visitedViews: [...state.visitedViews]
            })
        })
    },

    // 删除标签-同步
    delVisitedView({ commit, state }, view) {
        return new Promise(resolve => {
            commit('DEL_VISITED_VIEW', view)
            resolve([...state.visitedViews])
        })
    },

    // 右键刷新标签
    delCachedView({ commit, state }, view) {
        return new Promise(resolve => {
            commit('DEL_CACHED_VIEW', view)
            resolve([...state.cachedViews])
        })
    },

    // 右键删除其他标签-异步
    delOthersViews({ dispatch, state }, view) {
        return new Promise(resolve => {
            dispatch('delOthersVisitedViews', view)
            resolve({
                visitedViews: [...state.visitedViews]
            })
        })
    },

    // 右键删除其他标签-同步
    delOthersVisitedViews({ commit, state }, view) {
        return new Promise(resolve => {
            commit('DEL_OTHERS_VISITED_VIEWS', view)
            resolve([...state.visitedViews])
        })
    },

    // 右键删除所有标签-同步
    delAllViews({ dispatch, state }, view) {
        return new Promise(resolve => {
            dispatch('delAllVisitedViews', view)
            resolve({
                visitedViews: [...state.visitedViews]
            })
        })
    },

    // 右键删除所有标签-异步
    delAllVisitedViews({ commit, state }) {
        return new Promise(resolve => {
            commit('DEL_ALL_VISITED_VIEWS')
            resolve([...state.visitedViews])
        })
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