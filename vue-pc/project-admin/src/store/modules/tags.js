import Cookie from 'js-cookie'
import router from '@/router'

// 设置属性，主要承载一些属性，存储数据的
const state = {
    // tag数组
    tagsList: [
        {
            path: '/',
            name: 'home',
            label: '首页',
            icon: 'home'
        }
    ]
}

// 对应的一些方法,用来获取到属性(state)的状态
const getters = {

}

// 主要用来更改属性(state)的状态，完全是同步的操作
const mutations = {
    // 点击打开菜单
    selectMenu(state, val) {
        if (val.name !== 'home') {
            // 数组去重，判断打开的页面在tagsList中是否存在，存在不进行任何操作
            // findIndex如果找不到数据会返回-1
            let result = state.tagsList.findIndex(item => item.name === val.name)
            result === -1 ? state.tagsList.push(val) : ''
            Cookie.set('tagList', JSON.stringify(state.tagsList))
        }
    },

    // 删除选中的tag标签
    closeTag(state, val) {
        // 找到点击删除的tag标签的索引，然后删除
        let result = state.tagsList.findIndex(item => {
            return item.name === val.name
        })
        // 获取当前删除前一个的路径
        let path = state.tagsList[result - 1].name
        router.push({ name: `${path}` });
        state.tagsList.splice(result, 1)
        Cookie.set('tagList', JSON.stringify(state.tagsList))
    },

    // 获取tags标签列表
    getMenu(state) {
        if (Cookie.get('tagList')) {
            let tagList = JSON.parse(Cookie.get('tagList'))
            state.tagsList = tagList
        }
    },

    // 清除tagsList标签
    clearTagsList(state) {
        state.tagsList = []
        Cookie.remove('tagList')
    },

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