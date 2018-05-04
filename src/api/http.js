import axios from 'axios'
import qs from 'qs'
import config from '../config'
const Promise = require('es6-promise').Promise

let instance = axios.create({
    baseURL: config.baseUri
})

let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
}

export function post(path = '', data = {}, type = 'json'){
    let url = _getApi(path)
    if (!url) {
      return new Promise((resolve, reject) => {
        reject(new Error('Parameter [path] cannot is empty'))
      })
    }
    if (type === 'formData') {
      headers.Accept = '*/*'
      headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return new Promise((resolve, reject) => {
      instance.post(url, data, {
        headers: headers,
        transformRequest: [data => {
          if (type === 'json') {
            return JSON.stringify(data)
          } else if (type === 'formData') {
            return qs.stringify(data)
          }
        }]
      }).then(r => {
        console.log('post:', r)
        if (r.status === 200) {
          if (typeof r.data === 'undefined' || r.data === '' || !r.data) {
            console.warn('Error returning data format. Response is empty!', url)
            reject(new Error('服务器响应数据为空'))
            return
          }
          if (typeof r.data.status === 'undefined' && typeof r.data.code === 'undefined') {
            reject(new Error('服务器未响应状态码'))
            return false
          }
          if ((typeof r.data.status !== 'undefined' && parseInt(r.data.status,  10) !== 0) ||
            (typeof r.data.code !== 'undefined' && parseInt(r.data.code, 10) !== 0)) {
            reject(new Error(r.data.message))
            return false
          }
          resolve(r.data)
        } else {
          reject(new Error('请求错误:a', r))
        }
      }).catch(e => {
        reject(new Error('请求错误b: ', e))
      })
    })
}

/**
 * @param {string} path 路径字符串 
 */
function _getApi (path) {
    if (!path) {
        console.log(`Api '${path}' is not found`)
        return false
    }
    let api = require('../config/api.js')
    if (api.default) {
        api = api.default
    }
    if (path.indexOf('.') < 0) {
        return api[path]
    }
    path = path.split('.')
    path.forEach(item => {
        api = api[item]
    })
    return api
}
