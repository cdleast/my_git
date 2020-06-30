import request from '@/utils/request/axios' // 请求文件

export default {
    /* 
    * 通讯录组织架构
    */
    appOrganization(data) {
        return request({
            url: '/archivetemp-api/EXEXM_ORG_DEPT_A.appOrganization.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 通讯录组列表
    */
    appAddressGroupList(data) {
        return request({
            url: '/archivetemp-api/EXEXM_ADDRESS_GROUP.appAddressGroupList.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 通讯录组列表下部门
    */
    appAddressGroupDept(data) {
        return request({
            url: '/archivetemp-api/EXEXM_ADDRESS_GROUP_DEPT.appAddressGroupDept.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 通讯录组列表下部门人员
    */
    appDeptUserList(data) {
        return request({
            url: '/archivetemp-api/EXEXM_ADDRESS_GROUP_DEPT.appDeptUserList.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 通讯录组织架构下部门下人员
    */
    appOrgUser(data) {
        return request({
            url: '/archivetemp-api/EXEXM_ORG_DEPT_A.appOrgUser.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 通讯录组织架构下人员部门
    */
    appOrgDept(data) {
        return request({
            url: '/archivetemp-api/EXEXM_ORG_DEPT_A.appOrgDept.do',
            method: 'POST',
            params: data
        })
    },

    /* 
    * 通讯录搜索
    */
    appSearchDept(data) {
        return request({
            url: '/archivetemp-api/EXEXM_ADDRESS_GROUP.appSearchDept.do',
            method: 'POST',
            params: data
        })
    },
}