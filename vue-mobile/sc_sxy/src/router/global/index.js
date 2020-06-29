export default [
	/**
	 * 登录部分
	*/
    { path: '/login', name: 'login', component: () => import('@/views/login') },
	{ path: '/loginPhone', name: 'loginPhone', component: () => import('@/views/login/loginPhone') },
	{ path: '/loginGuide', name: 'loginGuide', component: () => import('@/views/login/loginGuide') },

	/**
	 * pdf预览
	*/
	{ path: '/pdf', name: 'pdf', component: () => import('@/components/global/pdf') },
]