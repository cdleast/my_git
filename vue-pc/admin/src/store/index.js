import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user' // 登录用户


Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        user
    }
})
