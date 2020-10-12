import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },

    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true
    },

    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [{
            path: 'home',
            name: 'home',
            component: () => import('@/views/home'),
            meta: { title: '首页', icon: 'el-icon-s-home', affix: true } // affix: true 固定没有删除选项
        }]
    },

    // 博客管理
    {
        path: '/blog',
        component: Layout,
        redirect: '/blog/article',
        name: 'blog',
        meta: { title: '博客管理', icon: 'el-icon-notebook-2' },
        children: [
            {
                path: 'article',
                name: 'blogArticle',
                component: () => import('@/views/blog/article'),
                meta: { title: '文章管理', icon: 'el-icon-notebook-1' }
            },
            {
                path: 'category',
                name: 'blogCategory',
                component: () => import('@/views/blog/category'),
                meta: { title: '分类管理', icon: 'el-icon-s-order' }
            },
            {
                path: 'label',
                name: 'blogLabel',
                component: () => import('@/views/blog/label'),
                meta: { title: '标签管理', icon: 'el-icon-collection-tag' }
            }
        ]
    },

    // 广告管理
    {
        path: '/advert',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'advert',
                component: () => import('@/views/advert'),
                meta: { title: '广告管理', icon: 'el-icon-picture-outline-round' }
            }
        ]
    },

    // 系统管理
    {
        path: '/system',
        component: Layout,
        redirect: '/system/user',
        name: 'system',
        meta: { title: '系统管理', icon: 'el-icon-setting' },
        children: [
            {
                path: 'user',
                name: 'systemUser',
                component: () => import('@/views/system/user'),
                meta: { title: '用户管理', icon: 'el-icon-user-solid' }
            },
            {
                path: 'role',
                name: 'systemRole',
                component: () => import('@/views/system/role'),
                meta: { title: '角色管理', icon: 'el-icon-coin' }
            },
            {
                path: 'menu',
                name: 'systemMenu',
                component: () => import('@/views/system/menu'),
                meta: { title: '菜单管理', icon: 'el-icon-menu' }
            }
        ]
    },

    // 跳转外网
    {
        path: 'mengxuegu',
        component: Layout,
        children: [
            {
                path: 'http://www.mengxuegu.com',
                meta: { title: '梦学谷官网', icon: 'el-icon-link' }
            }
        ]
    },

    // 标签导航刷新
    {
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import('@/views/redirect/index')
            }
        ]
    },

    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()


export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
