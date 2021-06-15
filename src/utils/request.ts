import axios from 'axios'
import store from '../store/index'
import { ElMessage } from 'element-plus'
import { parseTime } from './parse-time'

// const ENV = import.meta.env;
// console.log(ENV);

interface log {
  url: string;
  info?: string;
  time: string | null;
  error: string | any;
  name: string;
  type: string;
}
function addBug (error: string, info?: string) {
  console.log(error)
  const data: log = {
    url: window.location.href,
    info,
    error,
    type: 'Ajax',
    name: store.state.user.userInfo.username,
    time: parseTime(new Date())
  }
  store.commit('setErrorLog', data)
}

const service = axios.create({
  baseURL: 'http://localhost:8080/vue3_ts_admin/',
  timeout: 10000
})

service.defaults.headers['content-type'] = 'application/json'

service.interceptors.request.use(
  (config) => {
    if (store.getters.getToken) {
      config.headers.Authorization = store.getters.getToken
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    // if (ENV.VUE_MOCK === "true") {
    console.log(response)

    const code = JSON.parse(response.request.response).code
    // } else {
    //   code = response.data.code || response.status;
    // }

    switch (code) {
      case 502:
        ElMessage({ message: response.data.message, type: 'warning' })
        break
      case 401:
        ElMessage({ message: response.data.message, type: 'error' })
        // store.dispatch("outLoing");
        // .then((res) => {
        //     router.push('/login')
        // }).catch((err) => {

        // });
        break
      case 500:
        ElMessage({ message: '服务器错误！', type: 'error' })
        addBug(response.data.message, '服务器错误')
        break
      case 400:
        ElMessage({ message: '参数错误！', type: 'error' })
        addBug(response.data.message, '参数错误！')
        break
      case 405:
        ElMessage({ message: '请检查你的请求类型！', type: 'error' })
        addBug(response.data.message, '请检查你的请求类型！')
        break
      case 200:
        return response.data
      default:
        ElMessage({ message: response.data.message, type: 'error' })
        addBug(response.data.message, code)
        break
    }
  },
  (error) => {
    addBug(error.config, error.message)

    return Promise.reject(error)
  }
)

export default service
