import Vue from 'vue'

import 'normalize.css/normalize.css' // 样式初始化文件，替换原来的reset

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router'
import store from './store'

import '@/styles/index.scss' // 全局 css


// 使用 第三方库
Vue.use(ElementUI)


// 开发环境 development, 生产环境 production
Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')