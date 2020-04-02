export enum TASK_STATUS {
  pending,
  running,
  complete,
  failed,
  cancel
}
export const TASK_STATUS_VIEW = {
  [TASK_STATUS.pending]: '待定中',
  [TASK_STATUS.running]: '进行中',
  [TASK_STATUS.complete]: '已完成',
  [TASK_STATUS.failed]: '失败',
  [TASK_STATUS.cancel]: '已取消'
}

export enum ENVS {
  test = 'test',
  dev = 'dev'
}

export enum RES_CODE {
  success = 0,
  fail = -1
}

export enum BASE_APIS {
  test = 'http://localhost:9090',
  dev = 'https://api.p18c.top'
}

export enum BASE_WS_APIS {
  test = 'ws://localhost:9090',
  dev = 'ws://api.p18c.top',
}

export const UPDATE_MSG = {
  [TASK_STATUS.pending]: '',
  [TASK_STATUS.cancel]: '确定取消吗?',
  [TASK_STATUS.running]: '确定在进行中吗?',
  [TASK_STATUS.failed]: '',
  [TASK_STATUS.complete]: '确定已经完成了吗?'
}

export enum HABIT_STATUS {
  pending,
  running,
  complete,
  failed,
  cancel
}

export const HABIT_STATUS_VIEW = {
  [HABIT_STATUS.pending]: '待定中',
  [HABIT_STATUS.running]: '进行中',
  [HABIT_STATUS.complete]: '已完成',
  [HABIT_STATUS.failed]: '失败',
  [HABIT_STATUS.cancel]: '已取消'
}

export enum MSG_TYPE {
  alarm = 'alarm',
  token = 'token',
  requestError = 'requestError',
  tasksChange = 'tasksChange',
  habitsChange = 'habitsChange',
  taskFailed = 'taskFailed',
  habitFailed = 'habitFailed',
  setRefreshRate = 'setRefreshRate'
}

export const INVALID_NUMBER = -1
