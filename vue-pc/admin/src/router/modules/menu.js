import Layout from '@/layout' // 布局页面

export default [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        name: 'layout',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home'),
                meta: { title: '首页', icon: 'el-icon-s-home' }
            },
            {
                path: '/excel',
                name: 'excel',
                redirect: '/excel/export-excel',
                component: () => import('@/views/excel'),
                meta: { title: 'excel', icon: 'el-icon-document' },
                children: [
                    {
                        path: '/excel/export-excel',
                        name: 'excel-export-excel',
                        component: () => import('@/views/excel/export-excel'),
                        meta: { title: '导出 Excel', icon: 'el-icon-document' }
                    },
                    {
                        path: '/export-selected-excel',
                        name: 'export-selected-excel',
                        component: () => import('@/views/excel/selected-excel'),
                        meta: { title: '导出 已选择项', icon: 'el-icon-document' }
                    },
                    {
                        path: '/export-merge-header',
                        name: 'export-merge-header',
                        component: () => import('@/views/excel/merge-header'),
                        meta: { title: '导出 多级表头', icon: 'el-icon-document' }
                    },
                    {
                        path: '/upload-excel',
                        name: 'upload-excel',
                        component: () => import('@/views/excel/upload-excel'),
                        meta: { title: '上传 Excel', icon: 'el-icon-document' }
                    }
                ]
            },
            {
                path: '/zh_portal',
                name: 'zh_portal',
                redirect: '/zh_portal/news',
                component: () => import('@/views/zh_portal'),
                meta: { title: '中华保险门户', icon: 'el-icon-s-ticket' },
                children: [
                    {
                        path: '/zh_portal/news',
                        name: 'zh_portal-news',
                        component: () => import('@/views/zh_portal/news'),
                        meta: { title: '新闻处理中心', icon: 'el-icon-s-ticket' }
                    },
                    {
                        path: '/zh_portal/official',
                        name: 'zh_portal-official',
                        component: () => import('@/views/zh_portal/official'),
                        meta: { title: '公文处理中心', icon: 'el-icon-s-ticket' }
                    },
                    {
                        path: '/zh_portal/business',
                        name: 'zh_portal-business',
                        component: () => import('@/views/zh_portal/business'),
                        meta: { title: '业务流程中心', icon: 'el-icon-s-ticket' }
                    },
                    {
                        path: '/zh_portal/todo',
                        name: 'zh_portal-todo',
                        component: () => import('@/views/zh_portal/todo'),
                        meta: { title: '集成待办中心', icon: 'el-icon-s-ticket' }
                    },
                    {
                        path: '/zh_portal/statistical',
                        name: 'zh_portal-statistical',
                        component: () => import('@/views/zh_portal/statistical'),
                        meta: { title: '查询统计中心', icon: 'el-icon-s-ticket' }
                    },
                    {
                        path: '/zh_portal/quicklinks',
                        name: 'zh_portal-quicklinks',
                        component: () => import('@/views/zh_portal/quicklinks'),
                        meta: { title: '快捷链接', icon: 'el-icon-s-ticket' }
                    },
                ]
            },
            {
                path: '/takeout',
                name: 'takeout',
                component: () => import('@/views/takeout'),
                meta: { title: '美团外卖', icon: 'el-icon-s-shop', activeMenu: '/takeout' }
            },
            {
                path: '/pizza',
                name: 'pizza',
                component: () => import('@/views/pizza'),
                meta: { title: '点餐系统', icon: 'el-icon-s-order' }
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
                        name: 'blog-category',
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
                path: '/tree',
                name: 'tree',
                component: () => import('@/views/tree'),
                redirect: '/tree/tree1',
                meta: { title: 'tree', icon: 'el-icon-menu' },
                children: [
                    {
                        path: '/tree/tree1',
                        name: 'tree-tree1',
                        component: () => import('@/views/tree/tree1'),
                        redirect: '/tree/tree1/tree1-1',
                        meta: { title: 'tree1', icon: 'el-icon-menu' },
                        children: [
                            {
                                path: '/tree/tree1/tree1-1',
                                name: 'tree-tree1-tree1_1',
                                component: () => import('@/views/tree/tree1/tree1-1'),
                                meta: { title: 'tree1-1', icon: 'el-icon-menu' }
                            },
                            {
                                path: '/tree/tree1/tree1-2',
                                name: 'tree-tree1-tree1_2',
                                component: () => import('@/views/tree/tree1/tree1-2'),
                                meta: { title: 'tree1-2', icon: 'el-icon-menu' }
                            },
                            {
                                path: '/tree/tree1/tree1-3',
                                name: 'tree-tree1-tree1_3',
                                component: () => import('@/views/tree/tree1/tree1-3'),
                                meta: { title: 'tree1-3', icon: 'el-icon-menu' }
                            }
                        ]
                    },
                    {
                        path: '/tree/tree2',
                        name: 'tree-tree2',
                        component: () => import('@/views/tree/tree2'),
                        meta: { title: 'tree2', icon: 'el-icon-menu' }
                    },
                    {
                        path: '/tree/tree3',
                        name: 'tree-tree3',
                        component: () => import('@/views/tree/tree1'),
                        meta: { title: 'tree3', icon: 'el-icon-menu' }
                    }
                ]
            },
            {
                path: '/test',
                name: 'test',
                component: () => import('@/views/test'),
                meta: { title: '测试页面', icon: 'el-icon-sort' }
            }
        ]
    }
]