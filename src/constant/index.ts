const test = '';

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
  dev = 'dev',
  prod = 'prod'
}

export enum RES_CODE {
  success = 0,
  fail = -1
}

export enum BASE_APIS {
  // test = 'http://192.168.2.146:9090',
  test = 'http://192.168.5.210:9090',
  dev = 'http://localhost:9090',
  prod = ''
}

export const UPDATE_MSG = {
  [TASK_STATUS.pending]: '',
  [TASK_STATUS.cancel]: '确定取消该任务吗?',
  [TASK_STATUS.running]: '确定任务在进行中吗?',
  [TASK_STATUS.failed]: '',
  [TASK_STATUS.complete]: '确定已经完成该任务了吗?'
}

export const INVALID_NUMBER = -1
