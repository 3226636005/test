import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/home/home.vue'
import city from './pages/city/city.vue'
import detail from './pages/detail/detail.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    component: home
  }, {
    path: '/city',
    component: city
  }, {
    path: '/detail',
    component: detail
  }]
})
