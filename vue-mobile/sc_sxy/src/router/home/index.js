export default [
    {
        path: '/home', name: 'home',redirect: "/home/home-recommend", component: () => import('@/views/home'), children: [
            { path: 'home-recommend', name: 'home-recommend', component: () => import('@/views/home/home-recommend') },
            { path: 'home-learning', name: 'home-learning', component: () => import('@/views/home/home-learning') },
            { path: 'home-found', name: 'home-found', component: () => import('@/views/home/home-found') },
        ]
    }
]