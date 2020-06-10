import Vue from 'vue'
import Vant from 'vant' // vant 组件库
import 'vant/lib/index.css' // vant 全局样式
import '@/assets/scss/index.scss' // 自定义 scss
import 'amfe-flexible/index.js' // 用于设置 rem 基准值
// import '@/icons/iconfont/iconfont.css' // 字体图标库
import App from './App.vue' // 主页面
import router from './router' // 主路由
import store from './store' // 主vuex
import func from '@/func/index' // 引入全局方法函数
import GL_Compoent from '@/components/index.js' // 全局注册组件
import './permission' // 权限拦截，判断是否登录等
import VueAwesomeSwiper from 'vue-awesome-swiper' // 轮播图插件
import 'swiper/css/swiper.min.css' // 轮播图插件样式


import axios from 'axios'
Vue.prototype.$axios = axios


Vue.use(Vant) // 全局vant
Vue.use(func) // 全局方法函数
Vue.use(GL_Compoent) // 使用全局组件
Vue.use(VueAwesomeSwiper) // 全局轮播图

// Vue.config.productionTip = false
// 开发环境 development, 生产环境 production 
Vue.config.productionTip = process.env.NODE_ENV === 'production';


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')