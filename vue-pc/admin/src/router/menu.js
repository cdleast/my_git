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
                path: '/blog',
                name: 'blog',
                redirect: '/blog/article',
                component: () => import('@/views/blog'),
                meta: { title: '博客管理', icon: 'el-icon-notebook-2' },
                children: [
                    {
                        path: '/blog/article',
                        name: 'blog-article',
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
                        name: 'blog-label',
                        component: () => import('@/views/blog/label'),
                        meta: { title: '标签管理', icon: 'el-icon-collection-tag' }
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
                path: '/system',
                name: 'system',
                redirect: '/system/user',
                component: () => import('@/views/system'),
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
            {
                path: '/test',
                name: 'test',
                component: () => import('@/views/test'),
                meta: { title: '测试页面', icon: 'el-icon-picture-outline-round' }
            },
            {
                path: '/tree',
                name: 'tree',
                component: () => import('@/views/tree'),
                redirect: '/tree/tree1',
                meta: { title: 'tree', icon: 'el-icon-picture-outline-round' },
                children: [
                    {
                        path: '/tree/tree1',
                        name: 'tree-tree1',
                        component: () => import('@/views/tree/tree1'),
                        redirect: '/tree/tree1/tree1-1',
                        meta: { title: 'tree1', icon: 'el-icon-user-solid' },
                        children: [
                            {
                                path: '/tree/tree1/tree1-1',
                                name: 'tree-tree1-tree1_1',
                                component: () => import('@/views/tree/tree1/tree1-1'),
                                meta: { title: 'tree1-1', icon: 'el-icon-user-solid' }
                            },
                            {
                                path: '/tree/tree1/tree1-2',
                                name: 'tree-tree1-tree1_2',
                                component: () => import('@/views/tree/tree1/tree1-2'),
                                meta: { title: 'tree1-2', icon: 'el-icon-user-solid' }
                            },
                            {
                                path: '/tree/tree1/tree1-3',
                                name: 'tree-tree1-tree1_3',
                                component: () => import('@/views/tree/tree1/tree1-3'),
                                meta: { title: 'tree1-3', icon: 'el-icon-user-solid' }
                            }
                        ]
                    },
                    {
                        path: '/tree/tree2',
                        name: 'tree-tree2',
                        component: () => import('@/views/tree/tree2'),
                        meta: { title: 'tree2', icon: 'el-icon-user-solid' }
                    },
                    {
                        path: '/tree/tree3',
                        name: 'tree-tree3',
                        component: () => import('@/views/tree/tree1'),
                        meta: { title: 'tree3', icon: 'el-icon-user-solid' }
                    }
                ]
            }
        ]
    }
]