import Vue from 'vue'
import 'babel-polyfill'
import router from './router'
import store from './store'
import App from './App'
/*加载过滤器*/
import './filters'
/*处理路由变化要做的事情*/
import './router/router-change'
/*挂载vue原型链上的属性及全局组件*/
import './vue-prototype&component'
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
})
