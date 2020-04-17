import HeaderNav from '@/components/global/header' // 头部导航
import BreadCrumb from '@/components/global/breadcrumb' // 导航栏面包屑

const component = {
    install: function (Vue) {
        Vue.component('HeaderNav', HeaderNav)
        Vue.component('BreadCrumb', BreadCrumb)

    }
}

export default component