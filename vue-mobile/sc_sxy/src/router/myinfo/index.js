export default [
    { path: '/myinfo', name: 'myinfo', component: () => import('@/views/myinfo') },
    { path: '/myinfo/my-set', name: 'my-set', component: () => import('@/views/myinfo/my-set') },
]