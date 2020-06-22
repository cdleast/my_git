import headerBar from '@/components/global/header-bar' // 头部导航

const component = {
    install: function (Vue) {
        Vue.component('header-bar', headerBar)

    }
}

export default component