export default [
    /**
     * 首页及二级子页面
    */
    {
        path: '/home', name: 'home', redirect: "/home/home-recommend", component: () => import('@/views/home'), children: [
            { path: 'home-recommend', name: 'home-recommend', component: () => import('@/views/home/home-recommend/index') },
            { path: 'home-learning', name: 'home-learning', component: () => import('@/views/home/home-learning') },
            { path: 'home-found', name: 'home-found', component: () => import('@/views/home/home-found') },
        ],
    },

    /**
     * 推荐三级子页面
    */
    { path: '/home/home-recommend/recommend-signin', name: 'recommend-signin', component: () => import('@/views/home/home-recommend/recommend-signin') },
    { path: '/home/home-recommend/recommend-ranking', name: 'recommend-ranking', component: () => import('@/views/home/home-recommend/recommend-ranking') },
    { path: '/home/home-recommend/recommend-teaching', name: 'recommend-teaching', component: () => import('@/views/home/home-recommend/recommend-teaching') },
    { path: '/home/home-recommend/recommend-all-course', name: 'recommend-all-course', component: () => import('@/views/home/home-recommend/recommend-all-course') },
    { path: '/home/home-recommend/recommend-course-details', name: 'recommend-course-details', component: () => import('@/views/home/home-recommend/recommend-course-details') },
]