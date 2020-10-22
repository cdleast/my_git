import Layout from '@/layout' // 布局页面

export default [
    { // 首页
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [{
            path: '/home',
            name: 'home',
            component: () => import('@/views/home'),
            meta: { title: '首页', icon: 'el-icon-s-home', affix: true } // affix: true 固定没有删除选项
        }]
    },

    { // 会员管理
        path: '',
        component: Layout,
        children: [
            {
                path: '/member',
                name: 'member',
                component: () => import('@/views/member'),
                meta: { title: '会员管理', icon: 'el-icon-s-custom' }
            }
        ]
    },

    { // 供应商管理
        path: '',
        component: Layout,
        children: [
            {
                path: '/supplier',
                name: 'supplier',
                component: () => import('@/views/supplier'),
                meta: { title: '供应商管理', icon: 'el-icon-s-cooperation' }
            }
        ]
    },

    { // 商品管理
        path: '',
        component: Layout,
        children: [
            {
                path: '/goods',
                name: 'goods',
                component: () => import('@/views/goods'),
                meta: { title: '商品管理', icon: 'el-icon-s-goods' }
            }
        ]
    },

    { // 员工管理
        path: '',
        component: Layout,
        children: [
            {
                path: '/staff',
                name: 'staff',
                component: () => import('@/views/staff'),
                meta: { title: '员工管理', icon: 'el-icon-user-solid' }
            }
        ]
    },

    { // 博客管理
        path: '/blog',
        component: Layout,
        name: 'blog',
        redirect: '/blog/article',
        meta: { title: '博客管理', icon: 'el-icon-notebook-2' },
        children: [
            {
                path: '/blog/article',
                name: 'blogArticle',
                component: () => import('@/views/blog/article'),
                meta: { title: '文章管理', icon: 'el-icon-notebook-1' }
            },
            {
                path: '/blog/category',
                name: 'blogCategory',
                component: () => import('@/views/blog/category'),
                meta: { title: '分类管理', icon: 'el-icon-s-order' }
            },
            {
                path: '/blog/label',
                name: 'blogLabel',
                component: () => import('@/views/blog/label'),
                meta: { title: '标签管理', icon: 'el-icon-collection-tag' }
            }
        ]
    },

    { // 广告管理
        path: '',
        component: Layout,
        children: [
            {
                path: '/advert',
                name: 'advert',
                component: () => import('@/views/advert'),
                meta: { title: '广告管理', icon: 'el-icon-picture-outline-round' }
            }
        ]
    },

    { // 系统管理
        path: '/system',
        component: Layout,
        redirect: '/system/user',
        name: 'system',
        meta: { title: '系统管理', icon: 'el-icon-setting' },
        children: [
            {
                path: '/system/user',
                name: 'systemUser',
                component: () => import('@/views/system/user'),
                meta: { title: '用户管理', icon: 'el-icon-user-solid' }
            },
            {
                path: '/system/role',
                name: 'systemRole',
                component: () => import('@/views/system/role'),
                meta: { title: '角色管理', icon: 'el-icon-coin' }
            },
            {
                path: '/system/menu',
                name: 'systemMenu',
                component: () => import('@/views/system/menu'),
                meta: { title: '菜单管理', icon: 'el-icon-menu' }
            }
        ]
    },
]