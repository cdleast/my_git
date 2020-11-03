import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/index.scss' // global css

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI) // UI库

import 'animate.css' // CSS3动画库

import directive from '@/directive' // 导入全局自定义指令
Vue.use(directive)


// 权限拦截
import './permission'

import "babel-polyfill" // 解决 ie9 不支持 es6 语法的问题
import promise from "es6-promise" // 支持ES6语法=> 箭头函数可能会报promise错误
promise.polyfill()


import api from '@/api' // api文件
Vue.prototype.$api = api // api




Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
