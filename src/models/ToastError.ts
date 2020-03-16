import ToastErrorI from '@/interface/toastError'

class ToastError extends Error implements ToastErrorI{
  msg: string;
  constructor(msg: string) {
    super(msg)
    this.msg = msg
  }
}

export default ToastError
