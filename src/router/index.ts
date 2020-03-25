import Vue from 'vue'
import VueRouter from 'vue-router'

import { TASK_ROUTES, TASK_ROUTES_MAP } from './taskRoutes'
import { PROFILE_ROUTES, PROFILE_ROUTES_MAP } from './profileRoutes'
import { HABIT_ROUTES, HABIT_ROUTES_MAP } from './habitRoutes'
import { AUTH_ROUTES_MAP, AUTH_ROUTES } from './authRoutes'
import CONFIG from '@/config'

Vue.use(VueRouter)

const routes = [
  ...TASK_ROUTES,
  ...PROFILE_ROUTES,
  ...HABIT_ROUTES,
  ...AUTH_ROUTES
]
const ROUTES_MAP = {
  ...TASK_ROUTES_MAP,
  ...PROFILE_ROUTES_MAP,
  ...HABIT_ROUTES_MAP,
  ...AUTH_ROUTES_MAP
}

const WHITE_LIST_PAGE = [
  ROUTES_MAP.task, ROUTES_MAP.root, ROUTES_MAP.habit, ROUTES_MAP.profile, ROUTES_MAP.login, ROUTES_MAP.about,
  ROUTES_MAP.register, ROUTES_MAP.forgetPwd
]

const router = new VueRouter({
  mode: CONFIG.routerMode,
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem(CONFIG.tokenName) && !WHITE_LIST_PAGE.includes(to.path)) {
    loginToast()
  } else next()
})

export default router
export { ROUTES_MAP, WHITE_LIST_PAGE }
