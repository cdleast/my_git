export default [
    { path: '/login', meta: { title: '登录页' }, name: 'login', component: () => import('@/components/login') },
    { path: '/register', meta: { title: '注册页' }, name: 'register', component: () => import('@/components/register') },
    { path: '/home', meta: { title: '首页' }, name: 'home', component: () => import('@/views/home') },
]