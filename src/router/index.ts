import Vue from 'vue'
import Router from 'vue-router'

import DemoRoutes from './routes/demo'

Vue.use(Router)

const routes = [
  ...DemoRoutes,
  {
    path: '/',
    name: 'Demo',
    component: () => import('@/pages/demo/index.vue')
  }
]

export default new Router({
  mode: 'history',
  routes
})
