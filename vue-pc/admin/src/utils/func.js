/**
 * 串转化为我们前端定义的组件
*/
export function filterRouter(routers) {
    const accessedRouters = routers.filter(route => {
        if (route.children) {
            route.children = route.children.map(item => {
                // 这个url是返回的url地址
                item.component = () => import(`@/${item.url}`)
                filterRouter(item.children)
            })
        } else {
            route.component = () => import(`@/${route.url}`)
        }

        return true
    })
    return accessedRouters
}
