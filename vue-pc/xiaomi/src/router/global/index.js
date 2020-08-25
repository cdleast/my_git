export default [
    {
        path: '/', name: 'layout', component: () => import('@/views/layout'), redirect: '/home', children: [
            { path: 'home', name: 'home', meta: { title: '首页' }, component: () => import('@/views/home') },
            { path: 'about', name: 'about', meta: { title: '关于小米' }, component: () => import('@/views/about') },
        ]
    },
    { path: '/login', name: 'login', meta: { title: '登录' }, component: () => import('@/views/login') },
    { path: '/registered', name: 'registered', meta: { title: '注册' }, component: () => import('@/views/registered') },
]