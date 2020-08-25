import Vue from 'vue'
import VueRouter from 'vue-router'
import global from './global' // 全局

Vue.use(VueRouter)


// 解决 点击同一路由，控制台报错问题，适用所有UI框架
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}


const routes = [
	...global
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
