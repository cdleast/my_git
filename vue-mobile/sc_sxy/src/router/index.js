import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './login' // 登录
import home from './home' // 首页
import message from './message' // 消息
import addres from './addres' // 通讯录
import secretary from './secretary' // 小秘书
import myinfo from './myinfo' // 我的


// 解决 点击同一路由，控制台报错问题，适用所有UI框架
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
	{ path: '/', redirect: '/home' },
	...login, ...home, ...message, ...addres, ...secretary, ...myinfo
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router