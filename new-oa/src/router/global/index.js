export default [
    { path: '/nofind', meta: { title: '404页面' }, name: 'nofind', component: () => import('@/views/global/nofind') },
    { path: '/login', meta: { title: '登录页' }, name: 'login', component: () => import('@/views/global/login') },
    { path: '/register', meta: { title: '注册页' }, name: 'register', component: () => import('@/views/global/register') }
]