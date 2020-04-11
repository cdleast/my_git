import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui' // ElementUI 组件库
import 'element-ui/lib/theme-chalk/index.css' // ElementUI 样式
import axios from 'axios' // axios ajax 请求
import './global/filters/index' // 引入全局过滤器
import './global/directive/index' // 引入全局自定义指令
import func from './global/func/index' // 引入全局方法函数


// 配置全局使用模块
Vue.use(ElementUI, { size: 'small' }) // 使用 ElementUI
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(func) // 全局方法函数

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
