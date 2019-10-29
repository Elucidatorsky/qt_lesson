import Vue from 'vue'
import Router from 'vue-router'
// import home from '../pages/home/home'

// 路由的懒加载 @表示src目录下
const home = r => require.ensure([], 
  () => r(require('@/pages/home/home')), 'home')
const category = r => require.ensure([], 
  () => r(require('@/pages/category/category')), 'category')

Vue.use(Router);


export default new Router({
  node: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      meta: {
        index: 1
      },
      component: home
    },
    {
      path: '/category',
      meta: {
        index: 2
      },
      component: category
    },
    // {
    //   path: '/search',
    //   component: search
    // },
    // {
    //   path: '/shopcart',
    //   component: shopcart
    // },
    // {
    //   path: '/order',
    //   component: order
    // },
    // {
    //   path: '/user',
    //   component: user
    // },
    // {
    //   path: '/register',
    //   component: register
    // },
    // {
    //   path: '/login',
    //   component: login
    // },
    // {
    //   path: '/shipping',  //邮寄
    //   component: shipping
    // },
    // {
    //   path: '/payment',
    //   component: payment
    // },
    // {
    //   path: '/product/:id',
    //   component: productDetail
    // },
    // {
    //   path: '/profile',
    //   component: profile
    // },
    // {
    //   path: '/forget-password',
    //   component: forget-password
    // },
    // {
    //   path: '/update-info',
    //   component: updateInfo
    // }
  ]
})