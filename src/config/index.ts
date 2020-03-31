import { ENVS } from '@/constant'
import { RouterMode } from 'vue-router'

const routerMode: RouterMode = 'history'

export default {
  env: process.env.NODE_ENV === 'production' ? ENVS.dev : ENVS.test,
  tokenName: 'access_token',
  routerMode
}
