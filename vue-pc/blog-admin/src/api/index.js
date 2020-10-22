import request from '@/utils/request'


export default {
    /**
     * 首页-查询总用户
    */
    getUserMenuList(userId) {
        return request({
            url: `/system/menu/user/${userId}`,
            method: 'get'
        })
    },


    /**
     * 首页-查询总用户
    */
    getUserTotal() {
        return request({
            url: '/system/user/total',
            method: 'get'
        })
    },


    /**
     * 首页-查询总文章
    */
    getArticleTotal() {
        return request({
            url: '/blog/article/total',
            method: 'get'
        })
    },


    /**
     * 首页-查询总提问
    */
    getQuestionTotal() {
        return request({
            url: '/question/question/total',
            method: 'get'
        })
    },


    /**
     * 首页-查询各分类下的文章数
    */
    getCategoryTotal() {
        return request({
            url: '/article/category/total',
            method: 'get'
        })
    },


    /**
     * 首页-查询近6个月发布的文章数
    */
    getMonthArticleTotal() {
        return request({
            url: '/article/month/total',
            method: 'get'
        })
    },


    /**
     * 博客管理-分类管理-分页查询列表
     * query - 查询条件
     * current - 当前页数
     * size - 每页查询条数
    */
    getCategoryList(query, current = 1, size = 20) {
        return request({
            url: '/blog/category/search',
            method: 'post',
            data: {
                ...query,
                current,
                size
            }
        })
    },


    /**
     * 博客管理-分类管理-新增类别
    */
    addCategory(data) {
        return request({
            url: '/blog/category/add',
            method: 'post',
            data
        })
    },


    /**
     * 博客管理-分类管理-更新查询
    */
    getCategory(id) {
        return request({
            url: `/blog/category/update/${id}`,
            method: 'get'
        })
    },


    /**
     * 博客管理-分类管理-更新提交
    */
    updateCategory(data) {
        return request({
            url: '/blog/category/update',
            method: 'put',
            data
        })
    },


    /**
     * 博客管理-文章类别-列表删除
    */
    deleteCategory(id) {
        return request({
            url: `/blog/category/delete/${id}`,
            method: 'delete'
        })
    },


    /**
     * 博客管理-标签管理-分页条件查询列表
     * query - 查询条件
     * current - 当前页数
     * size - 每页查询条数
    */
    getLabelList(query, current = 1, size = 20) {
        return request({
            url: '/blog/label/search',
            method: 'post',
            data: {
                ...query,
                current,
                size
            }
        })
    },


    /**
     * 博客管理-标签管理-查询所有正常状态的分类
    */
    getLabelNormal() {
        return request({
            url: '/blog/label/normal',
            method: 'get'
        })
    },


    /**
     * 博客管理-标签管理-新增标签
    */
    addLabel(data) {
        return request({
            url: '/blog/label/add',
            method: 'post',
            data
        })
    },


    /**
     * 博客管理-标签管理-更新查询
    */
    getLabel(id) {
        return request({
            url: `/blog/label/update/${id}`,
            method: 'get'
        })
    },


    /**
     * 博客管理-标签管理-更新提交
    */
    updateLabel(data) {
        return request({
            url: '/blog/label/update',
            method: 'put',
            data
        })
    },


    /**
     * 博客管理-标签管理-列表删除
    */
    deleteLabel(id) {
        return request({
            url: `/blog/label/delete/${id}`,
            method: 'delete'
        })
    },


    /**
     * 博客管理-文章管理-分页条件查询列表
     * query - 查询条件
     * current - 当前页数
     * size - 每页查询条数
    */
    getArticleList(query, current = 1, size = 20) {
        return request({
            url: '/blog/article/search',
            method: 'post',
            data: {
                ...query,
                current,
                size
            }
        })
    },


    /**
     * 博客管理-文章管理-查看详情
    */
    getArticleDetails(id) {
        return request({
            url: `/blog/article/details/${id}`,
            method: 'get'
        })
    },


    /** 
     * 博客管理-文章管理-获取所有正常状态的分类和标签
    */
    getCategoryAndLabel() {
        return request({
            url: '/blog/category/label/list',
            method: 'get'
        })
    },


    /**
     * 博客管理-文章管理-文章审核通过
    */
    auditSuccess(id) {
        return request({
            url: `/blog/article/audit/success/${id}`,
            method: 'get'
        })
    },


    /**
     * 博客管理-文章管理-文章审核未通过
    */
    auditFail(id) {
        return request({
            url: `/blog/article/audit/fail/${id}`,
            method: 'get'
        })
    },


    /**
     * 博客管理-文章管理-文章删除
    */
    deleteArticle(id) {
        return request({
            url: `/blog/article/delete/${id}`,
            method: 'delete'
        })
    },


    /**
     * 广告管理-分页条件查询列表
     * query - 查询条件
     * current - 当前页数
     * size - 每页查询条数
    */
    getAdvertList(query, current = 1, size = 20) {
        return request({
            url: '/advert/index/search',
            method: 'post',
            data: {
                ...query,
                current,
                size
            }
        })
    },


    /**
     * 广告管理-上传图片
    */
    uploadImg(data = {}) {
        return request({
            url: '/advert/file/upload',
            method: 'post',
            data
        })
    },


    /**
     * 广告管理-删除图片 
     * /article/file/delete?fileUrl=http://xxxxx
    */
    deleteImg(imageUrl) {
        return request({
            url: '/advert/file/delete',
            method: 'delete',
            params: { 'fileUrl': imageUrl }
        })
    },


    /**
     * 广告管理-新增广告
    */
    addAdvert(data) {
        return request({
            url: '/advert/index/add',
            method: 'post',
            data
        })
    },


    /**
     * 广告管理-编辑查询
    */
    getAdvert(id) {
        return request({
            url: `/advert/index/update/${id}`,
            method: 'get'
        })
    },


    /**
     * 广告管理-编辑更新
    */
    updateAdvert(data) {
        return request({
            url: '/advert/index/update',
            method: 'put',
            data
        })
    },


    /**
     * 广告管理-删除广告
    */
    deleteAdvert(id) {
        return request({
            url: `/advert/index/delete/${id}`,
            method: 'delete'
        })
    },


    /**
     * 系统管理-菜单管理-查询列表
    */
    getMenuList(data) {
        return request({
            url: '/system/menu/search',
            method: 'post',
            data
        })
    },


    /**
     * 系统管理-菜单管理-新增列表
    */
    addMenu(data) {
        return request({
            url: '/system/menu/add',
            method: 'post',
            data
        })
    },


    /**
     * 系统管理-菜单管理-编辑查询
    */
    getMenu(id) {
        return request({
            url: `/system/menu/update/${id}`,
            method: 'get',
        })
    },


    /**
     * 系统管理-菜单管理-编辑更新
    */
    updateMenu(data) {
        return request({
            url: '/system/menu/update',
            method: 'put',
            data
        })
    },


    /**
     * 系统管理-菜单管理-删除列表
    */
    deleteMenu(id) {
        return request({
            url: `/system/menu/delete/${id}`,
            method: 'delete'
        })
    },


    /**
     * 系统管理-角色管理-分页查询列表
     * query - 查询条件
     * current - 当前页数
     * size - 每页查询条数
    */
    getRoleList(query, current = 1, size = 20) {
        return request({
            url: '/system/role/search',
            method: 'post',
            data: {
                ...query,
                current,
                size
            }
        })
    },


    /**
     * 系统管理-角色管理-新增角色
    */
    addRole(data) {
        return request({
            url: '/system/role/add',
            method: 'post',
            data
        })
    },


    /**
     * 系统管理-角色管理-编辑查询
    */
    getRole(id) {
        return request({
            url: `/system/role/update/${id}`,
            method: 'get',
        })
    },


    /**
     * 系统管理-角色管理-编辑更新
    */
    updateRole(data) {
        return request({
            url: '/system/role/update',
            method: 'put',
            data
        })
    },


    /**
     * 系统管理-角色管理-删除角色
    */
    deleteRole(id) {
        return request({
            url: `/system/role/delete/${id}`,
            method: 'delete'
        })
    },

    /**
     * 系统管理-角色管理-通过角色id查询所拥有的菜单ids
    */
    getMenuIdsByRoleId(id) {
        return request({
            url: `/system/role/${id}/menu/ids`,
            method: 'get'
        })
    },


    /**
     * 系统管理-角色管理-提交角色权限数据
    */
    saveRoleMenu(id, menuIds) {
        return request({
            url: `/system/role/${id}/menu/save`,
            method: 'post',
            data: menuIds
        })
    },


    /**
     * 系统管理-角色管理-分页查询列表
     * query - 查询条件
     * current - 当前页数
     * size - 每页查询条数
    */
    getUserList(query, current = 1, size = 20) {
        return request({
            url: '/system/user/search',
            method: 'post',
            data: {
                ...query,
                current,
                size
            }
        })
    },


    /**
     * 系统管理-用户管理-新增用户
    */
    addUser(data) {
        return request({
            url: '/system/user/add',
            method: 'post',
            data
        })
    },


    /**
     * 系统管理-用户管理-编辑查询
    */
    getUser(id) {
        return request({
            url: `/system/user/update/${id}`,
            method: 'get',
        })
    },


    /**
     * 系统管理-用户管理-编辑更新
    */
    updateUser(data) {
        return request({
            url: '/system/user/update',
            method: 'put',
            data
        })
    },


    /**
     * 系统管理-用户管理-删除用户
    */
    deleteUser(id) {
        return request({
            url: `/system/user/delete/${id}`,
            method: 'delete'
        })
    },


    /**
     * 系统管理-用户管理-通过用户id查询所拥有的菜单ids
    */
    getRoleIdsByUserId(id) {
        return request({
            url: `/system/user/${id}/role/ids`,
            method: 'get'
        })
    },


    /**
     * 系统管理-用户管理-保存用户拥有角色
    */
    saveUserRole(id, roleIds) {
        return request({
            url: `/system/user/${id}/role/save`,
            method: 'post',
            data: roleIds
        })
    },


    /**
     * 系统管理-用户管理-保存用户拥有角色
    */
    updatePassword(data) {
        return request({
            url: '/system/user/password',
            method: 'put',
            data
        })
    },
}