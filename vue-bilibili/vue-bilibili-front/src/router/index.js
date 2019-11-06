import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/component/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: header,
      meta: {
        title: '星辰笔记'
      }
    }
  ]
})
