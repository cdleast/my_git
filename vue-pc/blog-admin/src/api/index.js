import request from '@/utils/request'


export default {
    /**
     * 博客管理-分类管理-分页条件查询列表
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
}