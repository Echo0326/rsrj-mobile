//挂着vue原型链上的属性及全局组件
import Vue from 'vue'
import api from '../api/api'
import * as baseUrl from '../api/api.root.config'
import {getWeiXinConfig} from '../api/weixin'
import  { AlertPlugin } from 'vux'
Vue.use(AlertPlugin)
Vue.config.productionTip = false
Vue.prototype.$api=api
Vue.prototype.$baseUrl=baseUrl
Vue.prototype.$getWeiXinConfig=getWeiXinConfig
console.log(process.env)
