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
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: () => import('@/views/dashboard/index'),
            meta: { title: '首页', icon: 'dashboard' }
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
                name: 'article',
                component: () => import('@/views/blog/article'),
                meta: { title: '文章管理', icon: 'el-icon-notebook-1' }
            },
            {
                path: 'category',
                name: 'category',
                component: () => import('@/views/blog/category'),
                meta: { title: '分类管理', icon: 'el-icon-s-order' }
            },
            {
                path: 'label',
                name: 'label',
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
                name: 'user',
                component: () => import('@/views/user'),
                meta: { title: '用户管理', icon: 'el-icon-user-solid' }
            },
            {
                path: 'role',
                name: 'role',
                component: () => import('@/views/role'),
                meta: { title: '角色管理', icon: 'el-icon-coin' }
            },
            {
                path: 'menu',
                name: 'menu',
                component: () => import('@/views/menu'),
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
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
