export default [
    { path: '*', meta: { title: '404页面' }, name: 'nofind', component: () => import('@/components/global/nofind') },
    { path: '/login', meta: { title: '登录页' }, name: 'login', component: () => import('@/components/global/login') },
    { path: '/register', meta: { title: '注册页' }, name: 'register', component: () => import('@/components/global/register') }
]