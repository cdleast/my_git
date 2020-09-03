import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'; // UI库
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import '@/assets/scss/index.scss' // global css
import api from '@/api' // api文件


import VueAwesomeSwiper from 'vue-awesome-swiper' // 轮播图插件
import 'swiper/css/swiper.css'
// import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)


import BaiduMap from 'vue-baidu-map' // 百度地图api
Vue.use(BaiduMap, {
	ak: 'Lf18663IUntCD6lsswcsoIzatbPtu8kw'
})


// 视频播放插件
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video







Vue.prototype.$api = api // api
Vue.config.productionTip = false



new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
