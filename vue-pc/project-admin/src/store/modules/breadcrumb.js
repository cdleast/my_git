// 设置属性，主要承载一些属性，存储数据的
const state = {
    asideMenu: [], // 左侧导航栏打开的数组
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
        } else {
            state.currentMenu = null
        }

        // val.name === 'home' ? (state.currentMenu = null) : (state.currentMenu = val)
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