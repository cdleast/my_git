import Vue from 'vue'
import VueRouter from 'vue-router'
import global from './global' // 公共路由
Vue.use(VueRouter)

const routes = [
	...global,
	{ path: '/', redirect: '/botnav/home' },
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
