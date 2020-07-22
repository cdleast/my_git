import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/index.scss' // global css

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/permission' // 权限拦截，判断是否登录等
import '@/filters/index.js' // 引入全局过滤器
import '@/directive/index.js' // 引入全局自定义指令
import func from '@/func/index.js' // 引入全局方法函数
import component from '@/components/index.js' // 全局注册组件
import API from '@/api' // api文件

import axios from 'axios'

Vue.use(ElementUI) // UI库
Vue.use(component) // 使用全局组件
Vue.use(func) // 全局方法函数
Vue.prototype.EventBus = new Vue() // 全局事件总线


Vue.prototype.$api = API // api
Vue.prototype.$axios = axios // ajax方法
Vue.prototype.$func = func // 全局方法
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
