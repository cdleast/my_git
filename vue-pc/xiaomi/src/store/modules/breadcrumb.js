import Cookie from 'js-cookie'

// 设置属性，主要承载一些属性，存储数据的
const state = {
    currentMenu: null // 当前打开的页面
}

// 对应的一些方法,用来获取到属性(state)的状态
const getters = {

}

// 主要用来更改属性(state)的状态，完全是同步的操作
const mutations = {
    // 点击打开菜单
    selectMenu(state, val) {
        // 判断当前点击的身份为首页，首页的话不加进去
        if (val.name !== 'home') {
            // 当前打开的页面为传过来的值val
            state.currentMenu = val
            Cookie.set('breadcrumb', JSON.stringify(val))
        } else {
            state.currentMenu = null
        }
    },

    // 获取面包屑
    getBreadcrumb(state, name) {
        if (Cookie.get('breadcrumb')) {
            let breadcrumb = JSON.parse(Cookie.get('breadcrumb'))
            state.currentMenu = breadcrumb
        }
    },

    // 清除面包屑
    clearBreadcrumb(state) {
        state.currentMenu = null
        Cookie.remove('breadcrumb')
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