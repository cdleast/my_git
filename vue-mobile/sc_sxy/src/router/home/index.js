export default [
    /**
     * 首页及二级子页面
     * 推荐/学习/发现/搜索
    */
    {
        path: '/home', name: 'home', redirect: "/home/recommend", component: () => import('@/views/home'), children: [
            { path: 'recommend', name: 'recommend', component: () => import('@/views/home/recommend') },
            { path: 'learning', name: 'learning', component: () => import('@/views/home/learning') },
            { path: 'found', name: 'found', component: () => import('@/views/home/found') },
        ],
    },

    /**
     * 第三方地址
    */
    { path: '/third-url', name: 'third-url', component: () => import('@/views/home/recommend/third-url') },

    // 搜索页面
    { path: '/search', name: 'search', component: () => import('@/views/home/search') },
    { path: '/search/list', name: 'search-list', component: () => import('@/views/home/search/search-list') },

    /**
     * 签到
    */
    { path: '/home/recommend/signin', name: 'signin', component: () => import('@/views/home/recommend/signin') },

    /**
     * 排行榜
    */
    { path: '/home/recommend/ranking', name: 'ranking', component: () => import('@/views/home/recommend/ranking') },

    /**
     * 直播
    */
    { path: '/home/recommend/teaching', name: 'teaching', component: () => import('@/views/home/recommend/teaching') },
    { path: '/home/recommend/teaching-history', name: 'teaching-history', component: () => import('@/views/home/recommend/teaching/teaching-history') },

    /**
     * 金牌课程
    */
    { path: '/home/recommend/course-all', name: 'course-all', component: () => import('@/views/home/recommend/course/course-all') },
    { path: '/home/recommend/course-list', name: 'course-list', component: () => import('@/views/home/recommend/course/course-list') },
    { path: '/home/recommend/course-details', name: 'course-details', component: () => import('@/views/home/recommend/course/course-details') },

    /**
     * 知识库
    */
    { path: '/home/recommend/knowledge-all', name: 'knowledge-all', component: () => import('@/views/home/recommend/knowledge/knowledge-all') },
    { path: '/home/recommend/knowledge-all-list', name: 'knowledge-all-list', component: () => import('@/views/home/recommend/knowledge/knowledge-all-list') },
    { path: '/home/recommend/knowledge-details', name: 'knowledge-details', component: () => import('@/views/home/recommend/knowledge/knowledge-details') },
    { path: '/home/recommend/knowledge-details-comments', name: 'knowledge-details-comments', component: () => import('@/views/home/recommend/knowledge/knowledge-details-comments') },

    /**
     * 企业资讯
    */
    { path: '/home/recommend/information-all', name: 'information-all', component: () => import('@/views/home/recommend/information/information-all') },
    { path: '/home/recommend/information-details', name: 'information-details', component: () => import('@/views/home/recommend/information/information-details') },

    /**
     * 同事圈
    */
    { path: '/home/found/colleague-details', name: 'colleague-details', component: () => import('@/views/home/found/colleague/colleague-details') },
]