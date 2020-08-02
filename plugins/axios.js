/*
 * @name: 组件名
 * @Description: 组件描述
 * @module: 组件存放位置
 * @Version: 0.1.0
 * @Autor: hselenat
 * @Date: 2020-08-02 16:40:17
 * @LastEditors: hselenat
 * @LastEditTime: 2020-08-02 16:45:12
 * @example: 调用示例
 */

import Vue from 'vue'
import axios from 'axios'

const service = axios.create({
  // timeout:5
  baseURL: '/api'
})

// 请求拦截：主要做tocken的管理

// 响应拦截

Vue.prototype.$http = service
export const http = service
