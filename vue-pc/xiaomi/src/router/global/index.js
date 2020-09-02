export default [
    {
        path: '/', name: 'layout', component: () => import('@/views/layout'), redirect: '/home', children: [
            { path: 'home', name: 'home', meta: { title: '首页' }, component: () => import('@/views/home') },

            /**
             * 关于小米
            */
            {
                path: '/about', name: 'about', meta: { title: '关于小米' }, component: () => import('@/views/about'), redirect: '/about/introduction', children: [
                    { path: 'introduction', name: 'introduction', meta: { title: '公司简介' }, component: () => import('@/views/about/about-introduction') },
                    { path: 'founder', name: 'founder', meta: { title: '管理团队' }, component: () => import('@/views/about/about-founder') },
                    { path: 'culture', name: 'culture', meta: { title: '小米文化' }, component: () => import('@/views/about/about-culture') },
                    { path: 'history', name: 'history', meta: { title: '发展经历' }, component: () => import('@/views/about/about-history') },
                    { path: 'news', name: 'news', meta: { title: '小米新闻' }, component: () => import('@/views/about/about-news') },
                    { path: 'join', name: 'join', meta: { title: '加入小米' }, component: () => import('@/views/about/about-join') },
                    { path: 'investors', name: 'investors', meta: { title: '投资者关系' }, component: () => import('@/views/about/about-investors') },
                    { path: 'contact', name: 'contact', meta: { title: '联系我们' }, component: () => import('@/views/about/about-contact') },
                ]
            },

            /**
             * 帮助中心
            */
            {
                path: 'service', name: 'service', meta: { title: '帮助中心', show: true }, component: () => import('@/views/service'), children: [
                    { path: 'quick-repair', name: 'quick-repair', meta: { title: '1小时快修服务' }, component: () => import('@/views/service/service-repair') },
                    { path: 'exchange', name: 'exchange', meta: { title: '小米售后服务政策查询' }, component: () => import('@/views/service/service-exchange') },
                    {
                        path: 'guide', name: 'guide', meta: { title: '购物指南' }, component: () => import('@/views/service/guide'), redirect: '/service/guide/sendtime', children: [
                            { path: 'sendtime', name: 'sendtime', meta: { title: '发货时效' }, component: () => import('@/views/service/guide/guide-sendtime') },
                            { path: 'problems', name: 'problems', meta: { title: '购物车常见问题和购物技巧' }, component: () => import('@/views/service/guide/guide-problems') },
                            { path: 'salestime', name: 'salestime', meta: { title: '销售时间' }, component: () => import('@/views/service/guide/guide-salestime') },
                            { path: 'postal', name: 'postal', meta: { title: '包邮政策' }, component: () => import('@/views/service/guide/guide-postal') },
                            { path: 'payment', name: 'payment', meta: { title: '支付帮助' }, component: () => import('@/views/service/guide/guide-payment') },
                            { path: 'activity', name: 'activity', meta: { title: '活动相关' }, component: () => import('@/views/service/guide/guide-activity') },
                            { path: 'avoid', name: 'avoid', meta: { title: '防诈骗提示' }, component: () => import('@/views/service/guide/guide-avoid') },
                        ]
                    },
                    { path: 'sitelist', name: 'sitelist', meta: { title: '服务网点' }, component: () => import('@/views/service/service-sitelist') },
                ]
            },

        ]
    },






    { path: '/login', name: 'login', meta: { title: '登录' }, component: () => import('@/views/login') },
    { path: '/registered', name: 'registered', meta: { title: '注册' }, component: () => import('@/views/registered') },
]