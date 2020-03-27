import { ENVS } from '@/constant'
import {RouterMode} from "vue-router";

const routerMode: RouterMode = 'history'

export default {
  env: ENVS.dev,
  tokenName: 'access_token',
  routerMode
}
