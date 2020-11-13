import request from '@/utils/request'

export default {
    /**
     * 用户登录
    */
    loginUser(data) {
        return request({
            url: '/user/login',
            method: 'post',
            data
        })
    },


    /**
     * 获取用户信息
     */
    getUserInfo(token) {
        return request({
            url: `/user/info/${token}`,
            method: 'get'
        })
    },


    /**
     * 注册用户
     * regUser - 注册用户名
     * regPass - 密码
     * checkPass - 确认密码
     * checked - 用户协议
     */
    registerUser(data) {
        return request({
            url: '/user/register',
            method: 'post',
            data
        })
    },


    /**
     * 查询用户菜单权限树
    */
    getUserMenuList(userId) {
        return request({
            url: `/user/menu/${userId}`,
            method: 'get'
        })
    },


    /**
     * 校验密码, userId, password 旧密码
    */
    checkPwd(userId, password) {
        return request({
            url: '/user/pwd',
            method: 'post',
            data: {
                userId,
                password
            }
        })
    },


    /**
     * 修改密码userId 用户ID, password 新密码
    */
    updatePwd(userId, password) {
        return request({
            url: '/user/pwd',
            method: 'put',
            data: {
                userId,
                password
            }
        })
    },

    /**
     * 退出管理员用户
    */
    logoutUser(token) {
        return request({
            url: '/user/logout',
            method: 'post',
            data: {
                token
            }
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
     * 会员管理-数据列表分页查询列表
     * query - 查询条件
     * current - 当前页数
     * size - 每页查询条数
    */
    getMemberSearchList(query, current = 1, size = 20) {
        return request({
            url: '/member/list/search',
            method: 'post',
            data: {
                ...query,
                current,
                size
            }
        })
    },

    /**
     * 会员管理-新增
    */
    addMember(data) {
        return request({
            url: '/member/add',
            method: 'post',
            data
        })
    },


    /**
     * 会员管理-编辑查询-根据id查询
    */
    getMemberId(id) {
        return request({
            url: `/member/update/${id}`,
            method: 'get'
        })
    },


    /**
     * 会员管理-编辑更新
    */
    updateMemberId(data) {
        return request({
            url: '/member/update',
            method: 'put',
            data
        })
    },


    /**
     * 会员管理-删除
    */
    deleteMemberId(id) {
        return request({
            url: `/member/delete/${id}`,
            method: 'delete'
        })
    },


    /**
     * 供应商管理-数据列表分页查询列表
     * query - 查询条件
     * current - 当前页数
     * size - 每页查询条数
    */
    getSupplierSearchList(query, current = 1, size = 20) {
        return request({
            url: '/supplier/list/search',
            method: 'post',
            data: {
                ...query,
                current,
                size
            }
        })
    },

    /**
     * 供应商管理-新增
    */
    addSupplier(data) {
        return request({
            url: '/supplier/add',
            method: 'post',
            data
        })
    },


    /**
     * 供应商管理-编辑查询-根据id查询
    */
    getSupplierId(id) {
        return request({
            url: `/supplier/update/${id}`,
            method: 'get'
        })
    },


    /**
     * 供应商管理-编辑更新
    */
    updateSupplierId(data) {
        return request({
            url: '/supplier/update',
            method: 'put',
            data
        })
    },


    /**
     * 供应商管理-删除
    */
    deleteSupplierId(id) {
        return request({
            url: `/supplier/delete/${id}`,
            method: 'delete'
        })
    },


    /**
     * 商品管理-数据列表分页查询列表
     * query - 查询条件
     * current - 当前页数
     * size - 每页查询条数
    */
    getGoodsSearchList(query, current = 1, size = 20) {
        return request({
            url: '/goods/list/search',
            method: 'post',
            data: {
                ...query,
                current,
                size
            }
        })
    },

    /**
     * 商品管理-新增
    */
    addGoods(data) {
        return request({
            url: '/goods/add',
            method: 'post',
            data
        })
    },


    /**
     * 商品管理-编辑查询-根据id查询
    */
    getGoodsId(id) {
        return request({
            url: `/goods/update/${id}`,
            method: 'get'
        })
    },


    /**
     * 商品管理-编辑更新
    */
    updateGoodsId(data) {
        return request({
            url: '/goods/update',
            method: 'put',
            data
        })
    },


    /**
     * 商品管理-删除
    */
    deleteGoodsId(id) {
        return request({
            url: `/goods/delete/${id}`,
            method: 'delete'
        })
    },


    /**
     * 员工管理-数据列表分页查询列表
     * query - 查询条件
     * current - 当前页数
     * size - 每页查询条数
    */
    getStaffSearchList(query, current = 1, size = 20) {
        return request({
            url: '/staff/list/search',
            method: 'post',
            data: {
                ...query,
                current,
                size
            }
        })
    },

    /**
     * 员工管理-新增
    */
    addStaff(data) {
        return request({
            url: '/staff/add',
            method: 'post',
            data
        })
    },


    /**
     * 员工管理-编辑查询-根据id查询
    */
    getStaffId(id) {
        return request({
            url: `/staff/update/${id}`,
            method: 'get'
        })
    },


    /**
     * 员工管理-编辑更新
    */
    updateStaffId(data) {
        return request({
            url: '/staff/update',
            method: 'put',
            data
        })
    },


    /**
     * 员工管理-删除
    */
    deleteStaffId(id) {
        return request({
            url: `/staff/delete/${id}`,
            method: 'delete'
        })
    },


    /**
     * 博客管理-分类管理-分页查询列表
     * query - 查询条件
     * current - 当前页数
     * size - 每页查询条数
    */
    getCategorySearchList(query, current = 1, size = 20) {
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
    getCategoryId(id) {
        return request({
            url: `/blog/category/update/${id}`,
            method: 'get'
        })
    },


    /**
     * 博客管理-分类管理-更新提交
    */
    updateCategoryId(data) {
        return request({
            url: '/blog/category/update',
            method: 'put',
            data
        })
    },


    /**
     * 博客管理-文章类别-列表删除
    */
    deleteCategoryId(id) {
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
    getLabelSearchList(query, current = 1, size = 20) {
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
    getLabelId(id) {
        return request({
            url: `/blog/label/update/${id}`,
            method: 'get'
        })
    },


    /**
     * 博客管理-标签管理-更新提交
    */
    updateLabelId(data) {
        return request({
            url: '/blog/label/update',
            method: 'put',
            data
        })
    },


    /**
     * 博客管理-标签管理-列表删除
    */
    deleteLabelId(id) {
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


    /**
     * 点餐系统
    */
    addPizza(data) {
        return request({
            url: '/pizza/add',
            method: 'post',
            data
        })
    },


    /**
     * 美团外卖-商品查询
    */
    getGoodsList() {
        return request({
            url: '/meituan/goods',
            method: 'get'
        })
    },


    /**
     * 美团外卖-评级查询
    */
    getRatingsList() {
        return request({
            url: '/meituan/ratings',
            method: 'get'
        })
    },


    /**
     * 美团外卖-店家查询
     */
    getSellerList() {
        return request({
            url: '/meituan/seller',
            method: 'get'
        })
    },


    /**
     * 保险门户-新闻处理中心
     */
    getPortalNewsList() {
        return request({
            url: '/zh_portal/news',
            method: 'get'
        })
    },
}