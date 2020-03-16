import Vue from 'vue'
import VueRouter from 'vue-router'

import { TASK_ROUTES, TASK_ROUTES_MAP } from './taskRoutes'

Vue.use(VueRouter)

const routes = [
  ...TASK_ROUTES
]
const ROUTES_MAP = {
  ...TASK_ROUTES_MAP
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
export { ROUTES_MAP }
