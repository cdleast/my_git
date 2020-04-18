import axios from '@/utils/request/axios' // 请求文件


export default {
    // 待办
    getDaiBan() {
        return axios({
            url: '/portal/daiban',
            method: 'get'
        })
    },

    // 待阅
    getDaiYue() {
        return axios({
            url: '/portal/daiyue',
            method: 'get'
        })
    },

    // 未结
    getWeiJie() {
        return axios({
            url: '/portal/weijie',
            method: 'get'
        })
    },

    // 委托
    getWeiTuo() {
        return axios({
            url: '/portal/weituo',
            method: 'get'
        })
    },

    // 提醒
    getTiXing() {
        return axios({
            url: '/portal/tixing',
            method: 'get'
        })
    },

    // 通知公告
    getTongZhiGongGao() {
        return axios({
            url: '/portal/tongzhigonggao',
            method: 'get'
        })
    },

    // 公司要闻
    getGongSiYaoWen() {
        return axios({
            url: '/portal/gongsiyaowen',
            method: 'get'
        })
    },

    // 所属公司要闻
    getSuoShuGongSiYaoWen() {
        return axios({
            url: '/portal/suoshugongsiyaowen',
            method: 'get'
        })
    },

    // 常用功能
    getChangYongGongNeng() {
        return axios({
            url: '/portal/changyonggongneng',
            method: 'get'
        })
    },

    // 新动态
    getXinDongTai() {
        return axios({
            url: '/portal/xindongtai',
            method: 'get'
        })
    },

    // 每周资讯
    getMeiZhouZiXun() {
        return axios({
            url: '/portal/meizhouzixun',
            method: 'get'
        })
    },

    // 每周财经
    getMeiZhouCaiJig() {
        return axios({
            url: '/portal/meizhoucaijing',
            method: 'get'
        })
    },

    // 经营参考
    getJingYingCanKao() {
        return axios({
            url: '/portal/jingyingcankao',
            method: 'get'
        })
    },

    // 规章制度
    getGuiZhangZhiDu() {
        return axios({
            url: '/portal/guizhangzhidu',
            method: 'get'
        })
    },

    // 法律法规
    getFaLvFaGui() {
        return axios({
            url: '/portal/falvfagui',
            method: 'get'
        })
    },

    // 企业文化
    getQiYeWenHua() {
        return axios({
            url: '/portal/qiyewenhua',
            method: 'get'
        })
    },
}
