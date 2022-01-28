import axios from 'axios'

// 1.创建axios实例
const service = axios.create({
    // url = base url + request url
    baseURL: process.env.VUE_APP_SERVER_URL,

    // baseURL: 'https://api.example.com',
    // 超时时间 单位是ms，这里设置了5s的超时时间
    timeout: 5 * 1000
})
export default service