import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'


Vue.use(Vant)


// 开发环境 development, 生产环境 production
Vue.config.productionTip = process.env.NODE_ENV === 'production'


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')