// axios的封装
import Vue from 'vue'
import axios from 'axios'



const vue = new Vue();

// axios的配置
axios.defaults.timeout = 10000 // 请求超时
axios.defaults.baseUrl = 'http://localhost:3000'  // http://www.baidu.com

// 返回状态判断（响应拦截器）
axios.interceptors.response.use((res) => {
    if (res.data.code !== 200){
        alert('哎呀，网络异常了呢');
        return Promise.reject(res)
    }
    return res
}, (error) => {
    alert('哎呀，网络异常了呢');
    return Promise.reject(error)
})

export function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: param
        })
        .then(response => {
            resolve(response.data);
        }, err => {
            reject(err)
        })
        .catch(error => {
            reject(error)
        })
    })
}


export default {
    // 用户登录
    Login(params) {
        return fetchGet('/login', params)
    }
}