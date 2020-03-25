import { RouteConfig } from 'vue-router'

const Login = () => import('@/views/auth/Login.vue')
const Register = () => import('@/views/auth/Register.vue')
const ForgetPwd = () => import('@/views/auth/ForgetPwd.vue')
const BASE_PATH = '/auth'

const AUTH_ROUTES_MAP = {
  login: BASE_PATH,
  register: `${ BASE_PATH }/register`,
  forgetPwd: `${ BASE_PATH }/forgetPwd`
}

const AUTH_ROUTES: Array<RouteConfig> = [
  {
    name: 'login',
    path: AUTH_ROUTES_MAP.login,
    component: Login
  },
  {
    name: 'register',
    path: AUTH_ROUTES_MAP.register,
    component: Register
  },
  {
    name: 'forgetPwd',
    path: AUTH_ROUTES_MAP.forgetPwd,
    component: ForgetPwd
  }
]

export { AUTH_ROUTES_MAP, AUTH_ROUTES }
