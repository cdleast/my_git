import HeaderNav from '@/components/global/header' // 沙盒/生产环境

const component = {
    install: function (Vue) {
        Vue.component('HeaderNav', HeaderNav)

    }
}

export default component