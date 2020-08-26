import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/index.scss' // global css
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from '@/api' // api文件

// 视频播放插件
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video


Vue.use(ElementUI);





Vue.prototype.$api = api // api
Vue.config.productionTip = false



new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
