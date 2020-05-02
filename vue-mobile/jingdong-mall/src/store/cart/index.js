// 设置属性，主要承载一些属性，存储数据的
const state = {
    cartarry: [] // 存储购物车商品
}

// 对应的一些方法,用来获取到属性(state)的状态，相当于我们vue 计算属性
const getters = {
    // 购物车商品数量总数
    countsum: state => {
        let num = 0
        state.cartarry.forEach(v => {
            num += v.cartCount
        })
        return num
    }
}

// 主要用来更改属性(state)的状态，完全是同步的操作
const mutations = {
    //添加商品到购物车
    tocart(state, tag) {
        let goods = state.cartarry.find(v => v.title == tag.label)
        if (goods) {
            goods.cartCount += 1
        } else {
            state.cartarry.push({ title: tag.label, cartCount: 1 })
        }
    },
    //添加商品到购物车
    tocart(state, tag) {
        let goods = state.cartarry.find(v => v.title == tag.label)
        if (goods) {
            goods.cartCount += 1
        } else {
            state.cartarry.push({ title: tag.label, cartCount: 1 })
        }
    },
    //购物车商品数量加一
    cartadd(state, index) {
        state.cartarry[index].cartCount++
    },
    //购物车商品数量减一
    cartremove(state, index) {
        if (state.cartarry[index].cartCount > 1) {
            state.cartarry[index].cartCount--
        } else {
            if (window.confirm('确定从购物车移除商品吗？')) {
                state.cartarry.splice(index, 1)
            }
        }
    },
    //清空购物车
    clearcart(state) {
        state.cartarry = []
    }
}

// 不直接操作，应用mutations，可以实现异步的操作
const actions = {

}

// 暴露对象，让其他页面可以拿到
export default {
    state,
    getters,
    mutations,
    actions
}