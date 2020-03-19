import { RouteConfig } from 'vue-router'

const Profile = () => import('@/views/profile/Profile.vue')
const About = () => import('@/views/profile/About.vue')
const AnalysisChart = () => import('@/views/profile/AnalysisChart.vue')
const Setting = () => import('@/views/profile/Setting.vue')
const BASE_PATH = '/profile'

const PROFILE_ROUTES_MAP = {
  profile: BASE_PATH,
  userInfo: `${ BASE_PATH }/userInfo`,
  analysisChart: `${ BASE_PATH }/analysisChart`,
  setting: `${ BASE_PATH }/setting`,
  about: `${ BASE_PATH }/about`
}

const PROFILE_ROUTES: Array<RouteConfig>  = [
  {
    name: 'profile',
    path: PROFILE_ROUTES_MAP.profile,
    component: Profile
  },
  {
    name: 'about',
    path: PROFILE_ROUTES_MAP.about,
    component: About
  },
  {
    name: 'analysisChart',
    path: PROFILE_ROUTES_MAP.analysisChart,
    component: AnalysisChart
  },
  {
    name: 'setting',
    path: PROFILE_ROUTES_MAP.setting,
    component: Setting
  }
]

export { PROFILE_ROUTES, PROFILE_ROUTES_MAP }
