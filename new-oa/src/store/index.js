import Vue from 'vue'
import Vuex from 'vuex'
import createVuexAlong from 'vuex-along' // 持久化存储 state 的 vuex 扩展
import global from './modules/global' // 全局vuex
Vue.use(Vuex)

export default new Vuex.Store({
	// 使用module
	modules: {
		global
	},
	plugins: [createVuexAlong()]
})
