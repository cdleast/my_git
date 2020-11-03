import Vue from 'vue'
import Vuex from 'vuex'
import createVuexAlong from "vuex-along" // 持久化存储 state 的 vuex 扩展
import settings from './modules/settings' // 设置状态
import user from './modules/user' // 登录用户
import sidebar from './modules/sidebar' // 侧边栏
import tagsView from './modules/tagsView' // 快捷导航


Vue.use(Vuex)



export default new Vuex.Store({
    modules: {
        settings, user, sidebar, tagsView
    },
    plugins: [createVuexAlong({
        name: "sidebar-tagsView-settings", // 保存的集合名字
        local: {
            list: ["sidebar", "tagsView", "settings"] // 保存模块的数据
        },
    })]
})
