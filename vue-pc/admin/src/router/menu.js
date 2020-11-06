import Layout from '@/layout' // 布局页面

export default [
    {
        path: '/',
        component: Layout,
        redirect: 'home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home'),
                meta: { title: '首页', icon: 'el-icon-s-home' }
            },
            {
                path: '/member',
                name: 'member',
                component: () => import('@/views/member'),
                meta: { title: '会员管理', icon: 'el-icon-s-custom' }
            },
            {
                path: '/supplier',
                name: 'supplier',
                component: () => import('@/views/supplier'),
                meta: { title: '供应商管理', icon: 'el-icon-s-cooperation' }
            },
            {
                path: '/goods',
                name: 'goods',
                component: () => import('@/views/goods'),
                meta: { title: '商品管理', icon: 'el-icon-s-goods' }
            },
            {
                path: '/staff',
                name: 'staff',
                component: () => import('@/views/staff'),
                meta: { title: '员工管理', icon: 'el-icon-user-solid' }
            },
            {
                name: 'blog',
                meta: { title: '博客管理', icon: 'el-icon-notebook-2' },
                children: [
                    {
                        path: '/article',
                        name: 'blogArticle',
                        component: () => import('@/views/blog/article'),
                        meta: { title: '文章管理', icon: 'el-icon-notebook-1' }
                    },
                    {
                        path: '/category',
                        name: 'blogCategory',
                        component: () => import('@/views/blog/category'),
                        meta: { title: '分类管理', icon: 'el-icon-s-order' }
                    },
                    {
                        path: '/label',
                        name: 'blogLabel',
                        component: () => import('@/views/blog/label'),
                        meta: { title: '标签管理', icon: 'el-icon-collection-tag' },
                        children: [
                            {
                                path: '/label1',
                                name: 'blog-label-label1',
                                component: () => import('@/views/blog/label/label1'),
                                meta: { title: 'label1', icon: 'el-icon-notebook-1' }
                            },
                            {
                                path: '/label2',
                                name: 'blog-label-label2',
                                component: () => import('@/views/blog/label/label2'),
                                meta: { title: 'label2', icon: 'el-icon-notebook-1' }
                            }
                        ]
                    }
                ]
            },
            {
                path: '/advert',
                name: 'advert',
                component: () => import('@/views/advert'),
                meta: { title: '广告管理', icon: 'el-icon-picture-outline-round' }
            },
            {
                name: 'system',
                meta: { title: '系统管理', icon: 'el-icon-setting' },
                children: [
                    {
                        path: '/user',
                        name: 'systemUser',
                        component: () => import('@/views/system/user'),
                        meta: { title: '用户管理', icon: 'el-icon-user-solid' }
                    },
                    {
                        path: '/role',
                        name: 'systemRole',
                        component: () => import('@/views/system/role'),
                        meta: { title: '角色管理', icon: 'el-icon-coin' }
                    },
                    {
                        path: '/menu',
                        name: 'systemMenu',
                        component: () => import('@/views/system/menu'),
                        meta: { title: '菜单管理', icon: 'el-icon-menu' }
                    }
                ]
            },
            {
                path: '/test',
                name: 'test',
                component: () => import('@/views/test'),
                meta: { title: '测试页面', icon: 'el-icon-picture-outline-round' }
            }
        ]
    }
]