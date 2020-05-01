export default [
    { path: '/login', meta: { title: '登录页' }, name: 'login', component: () => import('@/components/login') },
    { path: '/register', meta: { title: '注册页' }, name: 'register', component: () => import('@/components/register') },
    {
        path: '/botnav', meta: { title: '底部导航' }, name: 'botnav', component: () => import('@/views/botnav'), children: [
            { path: 'home', meta: { title: '首页' }, name: 'home', component: () => import('@/views/home') },
            { path: 'list', meta: { title: '列表' }, name: 'list', component: () => import('@/views/list') },
            { path: 'search', meta: { title: '搜索' }, name: 'search', component: () => import('@/views/search') },
            {
                path: 'cart', meta: {
                    title: '购物车',
                    requireAuth: true // 当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
                }, name: 'cart', component: () => import('@/views/cart')
            },
            {
                path: 'mine', meta: {
                    title: '我的',
                    requireAuth: true  // 当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
                }, name: 'mine', component: () => import('@/views/mine')
            }
        ]
    },
]