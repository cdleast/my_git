import request from '@/utils/request/axios' // 请求文件

const host = 'http://robot.capitalwater.cn/robot/h5chat.html?sysNum=1476067342641247&receiveId=&sourceId=301'

export default {
	/**
	 * 获取用户url
	 */
    getUrl() {
        const userInfo = localStorage.getItem("USER_CODE");
        return `${host}&user_code=${userInfo}`
    }
}