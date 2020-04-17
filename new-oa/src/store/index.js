import Vue from 'vue'
import Vuex from 'vuex'
import createVuexAlong from 'vuex-along' // 持久化存储 state 的 vuex 扩展
import user from './modules/user' // 用户操作(登录、认证、存储token)
import global from './modules/global' // 公告vuex

Vue.use(Vuex)

export default new Vuex.Store({
	// 使用module
	modules: {
		user, global
	},
	plugins: [createVuexAlong()]
})
