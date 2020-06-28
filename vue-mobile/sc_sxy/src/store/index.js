import Vue from 'vue'
import Vuex from 'vuex'
import createVuexAlong from 'vuex-along' // 持久化存储 state 的 vuex 扩展
import login from './modules/login'
import home from './modules/home'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		login, home
	},
	plugins: [createVuexAlong()]
})

export default store