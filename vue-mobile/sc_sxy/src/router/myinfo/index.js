export default [
    { path: '/myinfo', name: 'myinfo', component: () => import('@/views/myinfo') },
    { path: '/myinfo/my-set', name: 'my-set', component: () => import('@/views/myinfo/set') },
    { path: '/myinfo/my-level', name: 'my-level', component: () => import('@/views/myinfo/level') },
    { path: '/myinfo/my-charm', name: 'my-charm', component: () => import('@/views/myinfo/charm') },
    { path: '/myinfo/my-education', name: 'my-education', component: () => import('@/views/myinfo/education') },
    { path: '/myinfo/my-certificate', name: 'my-certificate', component: () => import('@/views/myinfo/certificate') },
    { path: '/myinfo/my-achievement', name: 'my-achievement', component: () => import('@/views/myinfo/achievement') },
    { path: '/myinfo/my-integral', name: 'my-integral', component: () => import('@/views/myinfo/integral') },
    
    { path: '/myinfo/my-task', name: 'my-task', component: () => import('@/views/myinfo/my-task') },
    { path: '/myinfo/my-photo', name: 'my-photo', component: () => import('@/views/myinfo/my-photo') },
    { path: '/myinfo/my-draft', name: 'my-draft', component: () => import('@/views/myinfo/my-draft') },
    { path: '/myinfo/my-problem', name: 'my-problem', component: () => import('@/views/myinfo/my-problem') },
    { path: '/myinfo/my-answer', name: 'my-answer', component: () => import('@/views/myinfo/my-answer') },
    { path: '/myinfo/my-share', name: 'my-share', component: () => import('@/views/myinfo/my-share') },
    { path: '/myinfo/my-post', name: 'my-post', component: () => import('@/views/myinfo/my-post') },
    { path: '/myinfo/my-backpack', name: 'my-backpack', component: () => import('@/views/myinfo/my-backpack') },
    { path: '/myinfo/my-download', name: 'my-download', component: () => import('@/views/myinfo/my-download') },
    { path: '/myinfo/my-fans', name: 'my-fans', component: () => import('@/views/myinfo/my-fans') }
]