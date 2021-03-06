// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible'
import { Swipe, SwipeItem, Icon, Field, ActionSheet, Toast, Panel, Uploader } from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import util from './assets/js/util'

Vue.use(Swipe).use(SwipeItem).use(Icon).use(Field).use(ActionSheet).use(Toast).use(Panel).use(Uploader)

Vue.prototype.$http = axios
Vue.prototype.$util = util  // 导入数据库到前端

Vue.config.productionTip = false

router.beforeEach((to, from, next) => { // 路由守卫
  document.title = to.meta.title
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
