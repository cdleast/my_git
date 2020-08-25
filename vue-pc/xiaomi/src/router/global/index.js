export default [
    {
        path: '/', name: 'layout', component: () => import('@/views/layout'), redirect: '/home', children: [
            { path: 'home', name: 'home', label: '首页', component: () => import('@/views/home') },
            { path: 'about', name: 'about', label: '关于小米', component: () => import('@/views/about') },
        ]
    },
    { path: '/login', name: 'login', label: '登录', component: () => import('@/views/login') },
    { path: '/registered', name: 'registered', label: '注册', component: () => import('@/views/registered') },
]