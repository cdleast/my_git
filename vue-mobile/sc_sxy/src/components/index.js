import headerBar from '@/components/global/headerBar' // 头部导航

const component = {
    install: function (Vue) {
        Vue.component('headerBar', headerBar)

    }
}

export default component