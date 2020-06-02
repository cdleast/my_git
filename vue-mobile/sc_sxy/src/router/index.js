import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{ path: '/loginAccount', name: 'loginAccount', component: () => import('@/views/login/loginAccount') },
	{ path: '/loginPhone', name: 'loginPhone', component: () => import('@/views/login/loginPhone') },
	{ path: '/loginGuide', name: 'loginGuide', component: () => import('@/views/login/loginGuide') }
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router