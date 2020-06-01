import axios from 'axios'

// 创建 axios 对象
const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // 请求路径的前缀
    timeout: 5000, // 请求超时，5000毫秒
})

// 请求拦截器
request.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error) // 出现异常，抛出异常的报错
})

// 响应拦截器 401 token过期处理
request.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error) // 出现异常，抛出异常的报错
})

export default request // 导出自定义创建 axios 对象