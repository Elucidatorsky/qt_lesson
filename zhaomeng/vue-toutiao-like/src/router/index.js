import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// <script src="main.js"/>
// 懒加载

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: () => import('../views/Layout/index')
    }
  ]
})
