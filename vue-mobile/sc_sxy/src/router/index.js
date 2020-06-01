import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{ path: '/login', name: 'login', component: () => import('@/views/login') },
	{ path: '/phone', name: 'phone', component: () => import('@/views/login/phone') }
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router