import axios from 'axios'

// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})


// request拦截器
service.interceptors.request.use(config => {
    return config
}, error => {
    Promise.reject(error)
})


// respone拦截器
service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    })


export default service
