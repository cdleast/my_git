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
}