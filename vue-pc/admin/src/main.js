import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/styles/index.scss' // global css

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import "babel-polyfill" // 解决es6问题
import promise from "es6-promise"
promise.polyfill()

Vue.config.productionTip = false

import api from '@/api'
Vue.prototype.$api = api

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
