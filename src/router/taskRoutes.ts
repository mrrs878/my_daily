import { RouteConfig } from 'vue-router'

const Task = () => import('@/views/task/Task.vue')
const TaskDetail = () => import('@/views/task/TaskDetail.vue')
const AddTask = () => import('@/views/task/AddTask.vue')
const NotFound = () => import('@/views/task/NotFound.vue')
const BASE_PATH = '/task'

const TASK_ROUTES_MAP = {
  root: '/',
  notFound: '/404',
  task: BASE_PATH,
  taskDetail: `${BASE_PATH}/index`,
  addTask: `${BASE_PATH}/add`
}

const TASK_ROUTES: Array<RouteConfig> = [
  {
    name: 'task',
    path: TASK_ROUTES_MAP.root,
    component: Task
  },
  {
    name: 'notFound',
    path: TASK_ROUTES_MAP.notFound,
    component: NotFound
  },
  {
    name: 'taskR',
    path: TASK_ROUTES_MAP.task,
    redirect: '/'
  },
  {
    name: 'taskDetail',
    path: `${TASK_ROUTES_MAP.taskDetail}/:id`,
    component: TaskDetail
  },
  {
    name: 'addTask',
    path: TASK_ROUTES_MAP.addTask,
    component: AddTask
  }
]

export { TASK_ROUTES, TASK_ROUTES_MAP }
