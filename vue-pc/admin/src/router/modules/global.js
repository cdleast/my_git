export default [
    {
        path: '/redirect/:path(.*)',
        name: 'redirect',
        hidden: true,
        component: () => import('@/views/redirect')
    },
    {
        path: '/login',
        name: 'login',
        hidden: true,
        component: () => import('@/views/login')
    },
    // {
    //     path: '/takeout',
    //     name: 'takeout',
    //     hidden: true,
    //     component: () => import('@/views/takeout'),
    //     meta: { title: '美团外卖', icon: 'el-icon-s-shop' },
    //     children: [

    //         {
    //             path: '/takeout/goods',
    //             name: 'takeout-goods',
    //             hidden: true,
    //             component: () => import('@/views/takeout/goods')
    //         },
    //         {
    //             path: '/takeout/ratings',
    //             name: 'takeout-ratings',
    //             hidden: true,
    //             component: () => import('@/views/takeout/ratings')
    //         },
    //         {
    //             path: '/takeout/seller',
    //             name: 'takeout-seller',
    //             hidden: true,
    //             component: () => import('@/views/takeout/seller')
    //         }
    //     ]
    // }
]