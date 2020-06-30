export default [
    { path: '/myinfo', name: 'myinfo', component: () => import('@/views/myinfo') },
    { path: '/myinfo/set', name: 'my-set', component: () => import('@/views/myinfo/set') },
    { path: '/myinfo/level', name: 'my-level', component: () => import('@/views/myinfo/level') },
    { path: '/myinfo/charm', name: 'my-charm', component: () => import('@/views/myinfo/charm') },
    { path: '/myinfo/education', name: 'my-education', component: () => import('@/views/myinfo/education') },
    { path: '/myinfo/certificate', name: 'my-certificate', component: () => import('@/views/myinfo/certificate') },
    { path: '/myinfo/achievement', name: 'my-achievement', component: () => import('@/views/myinfo/achievement') },
    { path: '/myinfo/integral', name: 'my-integral', component: () => import('@/views/myinfo/integral') },
    
    { path: '/myinfo/task', name: 'my-task', component: () => import('@/views/myinfo/my-task') },
    { path: '/myinfo/photo', name: 'my-photo', component: () => import('@/views/myinfo/my-photo') },
    { path: '/myinfo/draft', name: 'my-draft', component: () => import('@/views/myinfo/my-draft') },
    { path: '/myinfo/problem', name: 'my-problem', component: () => import('@/views/myinfo/my-problem') },
    { path: '/myinfo/answer', name: 'my-answer', component: () => import('@/views/myinfo/my-answer') },
    { path: '/myinfo/share', name: 'my-share', component: () => import('@/views/myinfo/my-share') },
    { path: '/myinfo/post', name: 'my-post', component: () => import('@/views/myinfo/my-post') },
    { path: '/myinfo/backpack', name: 'my-backpack', component: () => import('@/views/myinfo/my-backpack') },
    { path: '/myinfo/download', name: 'my-download', component: () => import('@/views/myinfo/my-download') },
    { path: '/myinfo/fans', name: 'my-fans', component: () => import('@/views/myinfo/my-fans') }
]