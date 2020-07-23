import Vue from 'vue'
import Vuex from 'vuex'
import breadcrumb from './modules/breadcrumb' // 面包屑
import tags from './modules/tags' // tag标签
import aside from './modules/aside' // 左侧导航栏


Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		breadcrumb, tags, aside
	}
})
