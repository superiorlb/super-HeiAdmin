import axios from "axios";
import { ElMessage } from 'element-plus'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10 * 1000
})
service.interceptors.request.use((config) => {
    config.headers['token'] = '123456789'
    if (config.data === undefined) {
        config.data = {}
    }
    return config
}, error => {
    ElMessage.error(error)
    return Promise.reject(error)
})
service.interceptors.response.use((res) => {
    if (res.status === 200) {
        if (res.data.code === 200) {
            return res.data
        } else if (res.data.code === 500) {
            ElMessage.error(res.data.msg)
        }
    }
}, error => {
    ElMessage.error(error)
    return Promise.reject(error)
})

export default service