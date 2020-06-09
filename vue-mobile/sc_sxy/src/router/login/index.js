export default [
    { path: '/login', name: 'login', component: () => import('@/views/login') },
	{ path: '/loginPhone', name: 'loginPhone', component: () => import('@/views/login/loginPhone') },
	{ path: '/loginGuide', name: 'loginGuide', component: () => import('@/views/login/loginGuide') }
]