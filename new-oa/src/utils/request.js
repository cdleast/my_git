import axios from 'axios'
import { Loading, Message } from 'element-ui'

//定义loading变量
let loading;

// 开始加载动画
function startLoading() {
    loading = Loading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}

// 结束加载动画
function endLoading() {
    loading.close()
}

// 创建 axios 对象
const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // 请求路径的前缀
    timeout: 5000, // 请求超时，5000毫秒
})

// 请求拦截器
request.interceptors.request.use((config) => {
    startLoading();
    // 请求拦截
    return config;
}, (error) => {
    // 出现异常，抛出异常的报错
    return Promise.reject(error);
})

// 响应拦截器 401 token过期处理
request.interceptors.response.use((response) => {
    endLoading();
    return response;
}, (error) => {
    endLoading();
    Message.error(error);

    return Promise.reject(error)
})


export default request // 导出自定义创建 axios 对象