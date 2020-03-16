export enum TASK_STATUS {
  pending,
  complete,
  failed
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
  test = 'http://192.168.2.146:9090',
  dev = 'http://localhost:9090',
  prod = ''
}
