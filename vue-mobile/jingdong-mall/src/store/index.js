import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import cart from './cart'
Vue.use(Vuex)

let store = new Vuex.Store({
	modules: {
		user, cart
	}
})


// 监听每次调用mutations的时候,都会进这个方法，然后我们可以做一些自己想做的处理
store.subscribe((mutations, state) => {
	localStorage.setItem('cartarry', JSON.stringify(state.cart.cartarry))
})

export default store