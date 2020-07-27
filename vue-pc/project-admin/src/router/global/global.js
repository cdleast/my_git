export default [
    // {
    //     path: '/', name: 'layout', component: () => import('@/views/layout'), redirect: '/home', children: [
    //         { path: 'home', name: 'home', component: () => import('@/views/home') },
    //         { path: 'video', name: 'video', component: () => import('@/views/video') },
    //         { path: 'user', name: 'user', component: () => import('@/views/user') },
    //         { path: 'pageOne', name: 'pageOne', component: () => import('@/views/other/pageOne') },
    //         { path: 'pageTwo', name: 'pageTwo', component: () => import('@/views/other/pageTwo') },
    //     ]
    // },

    { path: '/login', name: 'login', component: () => import('@/views/login') },
]