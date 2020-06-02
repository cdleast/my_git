export default [
    { path: '/loginAccount', name: 'loginAccount', component: () => import('@/views/login/loginAccount') },
	{ path: '/loginPhone', name: 'loginPhone', component: () => import('@/views/login/loginPhone') },
	{ path: '/loginGuide', name: 'loginGuide', component: () => import('@/views/login/loginGuide') }
]