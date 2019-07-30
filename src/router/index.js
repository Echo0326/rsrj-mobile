/*
* 路由器对象模块
* */

import Vue from 'vue'
import VueRouter from 'vue-router'
//路由模块
import HomerRouter from '../pages/home/homeRouter'
import EmptyRouter from '../pages/empty/emptyRouter'

//声明使用路由
Vue.use(VueRouter);

export default new VueRouter({
  //配置路由
  mode: 'history',
  routes:[
    ...HomerRouter,
    ...EmptyRouter
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
