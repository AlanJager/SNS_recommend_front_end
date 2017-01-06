import Vue from 'vue'
import ElementUI from 'element-ui'
// import jasmine from 'jasmine'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import App from './App.vue'
// import Element from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'


//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI)

// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import secondcomponent from './component/secondcomponent.vue'
import profile from './component/profile.vue'
import index from './component/index.vue'
import login from './component/login.vue'
import rating from './component/rating.vue'
import rating_result from './component/rating_result.vue'
import recommend from './component/recommend.vue'
import transE_chart from './component/transE_chart.vue'
import twitter_chart from './component/twitter_chart.vue'
import weibo_chart from './component/weibo_chart.vue'
import test from './unit_test'
import auth from './auth'

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First,
      beforeEnter: requireAuth
    },
    {
      path: '/second',
      component: secondcomponent,
      beforeEnter: requireAuth
    },
    {
      path: '/profile',
      component: profile,
      beforeEnter: requireAuth
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '',
      component: index
    },
    {
      path: '/rating',
      component: rating,
      beforeEnter: requireAuth
    },
    {
      path: '/rating_result',
      component: rating_result,
      beforeEnter: requireAuth
    },
    {
      path: '/recommend',
      component: recommend,
      beforeEnter: requireAuth
    },
    {
      path: '/chart',
      component: transE_chart,
      beforeEnter: requireAuth
    },
    {
      path: '/twitter_chart',
      component: twitter_chart,
      beforeEnter: requireAuth
    },
    {
      path: '/weibo_chart',
      component: weibo_chart,
      beforeEnter: requireAuth
    }
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
