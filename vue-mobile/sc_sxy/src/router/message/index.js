export default [
    { path: '/message', name: 'message', component: () => import('@/views/message') },
    { path: '/message/enterprise-announcement', name: 'enterprise-announcement', component: () => import('@/views/message/enterprise/enterprise-announcement') },
    { path: '/message/enterprise-details', name: 'enterprise-details', component: () => import('@/views/message/enterprise/enterprise-details') },
    { path: '/message/enterprise-search', name: 'enterprise-search', component: () => import('@/views/message/enterprise/enterprise-search') },
]