import Cookie from 'js-cookie'

// 设置属性，主要承载一些属性，存储数据的
const state = {
    isCollapse: false, // 左侧导航默认状态
    asideMenu: [] // 左侧导航栏数组
}

// 对应的一些方法,用来获取到属性(state)的状态
const getters = {

}

// 主要用来更改属性(state)的状态，完全是同步的操作
const mutations = {
    // 左侧导航展开收缩
    collapseMenu(state) {
        state.isCollapse = !state.isCollapse
    },

    // // 登录保存asideMenu
    setMenu(state, val) {
        state.asideMenu = val
        Cookie.set('asideMenu', JSON.stringify(val))
    },

    // 清除asideMenu
    clearMenu(state) {
        state.asideMenu = []
        Cookie.remove('asideMenu')
    },

    // 动态添加asideMenu
    addMenu(state, router) {
        // 1.如果不存在就不用往下走了
        if (!Cookie.get('asideMenu')) {
            return
        }
        // 2.先获取Cookie里面的asideMenu
        // let asideMenu = JSON.parse(Cookie.get('asideMenu'))
        // 3.将Cookie中获取到的asideMenu传给state里面，避免刷新的时候state里面的数据丢失
        state.asideMenu = asideMenu
        // 4.定义一个动态添加路由的数组
        let currentMenu = [{
            path: '/',
            component: () => import(`@/views/layout/index.vue`),
            children: [] // 动态添加的都放在这个里面
        }]
        // 5.循环asideMenu添加currentMenu中
        asideMenu.forEach(item => {
            // 先判断有没有子级
            if (item.children) {
                item.children = item.children.map(item => {
                    // 这个url是返回的url地址
                    item.component = () => import(`@/views/${item.url}`)
                    return item
                })
                // 动态加入到currentMenu中
                currentMenu[0].children.push(...item.children)
            } else {
                item.component = () => import(`@/views/${item.url}`)
                currentMenu[0].children.push(item)
            }
        })
        // 6.addRoutes动态路由的添加判断权限
        router.addRoutes(currentMenu)
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