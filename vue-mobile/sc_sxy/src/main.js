import Vue from 'vue'
import Vant from 'vant' // vant 组件库
import 'vant/lib/index.css' // vant 全局样式
import '@/assets/scss/index.scss' // 自定义 scss
import 'amfe-flexible/index.js' // 用于设置 rem 基准值
// import '@/icons/iconfont/iconfont.css' // 字体图标库
import App from './App.vue'
import router from './router'
import store from './store'
import func from '@/func/index' // 引入全局方法函数


import axios from 'axios'
Vue.prototype.$axios = axios

Vue.use(Vant) // 全局vant
Vue.use(func) // 全局方法函数
Vue.config.productionTip = false


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')