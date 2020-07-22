import Vue from 'vue'
import Vuex from 'vuex'
import breadcrumb from './modules/breadcrumb' // 面包屑
import tags from './modules/tags' // tag标签


Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		breadcrumb, tags
	}
})
