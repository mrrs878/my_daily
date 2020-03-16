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

export enum BASE_APIS {
  test = 'http://192.168.5.210:9090',
  dev = 'http://localhost:9090',
  prod = ''
}
