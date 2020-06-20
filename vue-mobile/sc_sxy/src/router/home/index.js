export default [
    /**
     * 首页及二级子页面
    */
    {
        path: '/home', name: 'home', redirect: "/home/recommend", component: () => import('@/views/home'), children: [
            { path: 'recommend', name: 'recommend', component: () => import('@/views/home/recommend') },
            { path: 'learning', name: 'learning', component: () => import('@/views/home/learning') },
            { path: 'found', name: 'found', component: () => import('@/views/home/found') },
        ],
    },

    /**
     * 推荐子页面
    */
    { path: '/home/recommend/signin', name: 'signin', component: () => import('@/views/home/recommend/signin') },
    { path: '/home/recommend/ranking', name: 'ranking', component: () => import('@/views/home/recommend/ranking') },
    { path: '/home/recommend/teaching', name: 'teaching', component: () => import('@/views/home/recommend/teaching') },

    // 金牌课程部分
    { path: '/home/recommend/course-all', name: 'course-all', component: () => import('@/views/home/recommend/course/course-all') },
    { path: '/home/recommend/course-list', name: 'course-list', component: () => import('@/views/home/recommend/course/course-list') },
    { path: '/home/recommend/course-details', name: 'course-details', component: () => import('@/views/home/recommend/course/course-details') },
]