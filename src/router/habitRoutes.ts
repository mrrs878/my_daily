import { RouteConfig } from 'vue-router'

const Habit = () => import('@/views/habit/Habit.vue')
const AddHabit = () => import('@/views/habit/AddHabit.vue')
const BASE_PATH = '/habit'

const HABIT_ROUTES_MAP = {
  habit: BASE_PATH,
  habitDetail: `${BASE_PATH}/`,
  addHabit: `${BASE_PATH}/add`
}

const HABIT_ROUTES: Array<RouteConfig> = [
  {
    name: 'habit',
    path: HABIT_ROUTES_MAP.habit,
    component: Habit
  },
  {
    name: 'addHabit',
    path: HABIT_ROUTES_MAP.addHabit,
    component: AddHabit
  }
]

export { HABIT_ROUTES_MAP, HABIT_ROUTES }
