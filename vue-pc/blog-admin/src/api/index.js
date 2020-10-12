import request from '@/utils/request'


export default {
    /**
     * 博客管理-文章类别-分页条件查询列表
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
     * 博客管理-文章类别-列表删除
    */
    deleteCategoryById(id) {
        return request({
            url: `/blog/category/${id}`,
            method: 'delete'
        })
    },
}