import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store' // vuex
import global from './global' // 公共路由
import portal from './portal' // 个人门户
import proces from './proces' // 流程中心

// 解决 点击同一路由，控制台报错问题，适用所有UI框架
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
	...global, ...portal, ...proces,
	{ path: '/', redirect: '/portal' }
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})


// 添加路由守卫-未登录的时候只能进去登录页或者注册页
router.beforeEach((to, from, next) => {
	const isLogin = store.getters.isAutnenticated ? true : false;
	if (to.path == "/login" || to.path == "/register") {
		next();
	} else {
		isLogin ? next() : next("/login");
	}
})

export default router