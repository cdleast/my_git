import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/index.scss' // global css

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/permission' // 权限拦截，判断是否登录等
import '@/filters/index.js' // 引入全局过滤器
import '@/directive/index.js' // 引入全局自定义指令
import func from '@/func/index.js' // 引入全局方法函数
import component from '@/components/index.js' // 全局注册组件
import API from '@/api' // api文件

import './mock'

import axios from 'axios'

Vue.use(ElementUI) // UI库
Vue.use(component) // 使用全局组件
Vue.use(func) // 全局方法函数
Vue.prototype.EventBus = new Vue() // 全局事件总线


Vue.prototype.$api = API // api
Vue.prototype.$axios = axios // ajax方法
Vue.prototype.$func = func // 全局方法
Vue.config.productionTip = false
// 开发环境 development, 生产环境 production 
// Vue.config.productionTip = process.env.NODE_ENV === 'production'


// 路由拦截
router.beforeEach((to, from, next) => {
	// 防止刷新后vuex里丢失token
	store.commit('getToken')
	// 防止刷新后vuex里丢失标签列表tagList
	store.commit('getMenu')
	let token = store.state.user.token
	// 过滤登录页，防止死循环
	if (!token && to.name !== 'login') {
		next({ name: 'login' })
	} else {
		next()
	}
})


new Vue({
	router,
	store,
	render: h => h(App),
	// 判断vue程序进行刷新的时候，加载左侧导航权限
	created() {
		store.commit('addMenu', router)
	}
}).$mount('#app')
