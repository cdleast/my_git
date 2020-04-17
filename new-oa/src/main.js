import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui' // ElementUI 组件库
import 'element-ui/lib/theme-chalk/index.css' // ElementUI 样式
import axios from 'axios' // axios ajax 请求
import './utils/filters/index' // 引入全局过滤器
import './utils/directive/index' // 引入全局自定义指令
import func from './utils/function/index' // 引入全局方法函数
import GL_Compoent from './utils/component/index' // 全局注册组件


// 配置全局使用模块
Vue.use(ElementUI) // 使用 ElementUI
Vue.config.productionTip = false
Vue.use(func) // 全局方法函数
Vue.use(GL_Compoent) // 使用全局组件
Vue.prototype.$axios = axios

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')