import axios from "axios";

const service = axios.create({
    baseURL: 'https://m8436f8jry.re.qweatherapi.com',
    timeout: 50000
})

// 封装响应拦截器
service.interceptors.response.use((res) => {
    if (res.status === 200) {
        return res.data
    }
})

export default service
