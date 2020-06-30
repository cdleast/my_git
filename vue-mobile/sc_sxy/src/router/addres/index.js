export default [
    { path: '/addres', name: 'addres', component: () => import('@/views/addres') },
    { path: '/addres/department', name: 'department', component: () => import('@/views/addres/department') },
]