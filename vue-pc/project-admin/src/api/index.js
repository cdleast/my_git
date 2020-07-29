import request from '@/utils/request/axios'


export default {
    getToutiao(params) {
        return request({
            url: '/archivetemp-api/EXEXM_ORG_DEPT_A.appOrganization.do',
            method: 'POST',
            params
        })
    },
}