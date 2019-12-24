const Fly = require("flyio/dist/npm/wx")
const servise = new Fly;

servise.config.timeout = 5000
servise.config.baseURL = '/api'

// 请求拦截器
servise.interceptors.request.use(
    config => {
        config.headers['Content-type'] = 'application/json;charse=UTF-8'

        // 请求带上token
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

servise.interceptors.request.use(
    response => {
        const res = response.data
        // 请求错误响应码
        if (!res.succeed) {
            if (res.error.code) {
                console.log(res)
            }
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)

export default servise