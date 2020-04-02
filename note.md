## 🕐提醒功能（前端实现）
在user.token(vuex存储user)变化时:

- 若新值为""，停止worker线程

- 若新值不为""，启动一个worker线程(alarm.js)，初始化onmessage函数，处理子线程信号

  alarm.js内：

  1. 初始化onmessage函数，处理主线程信号

  2. 启动一个循环定时器，每隔一段时间读一下任务/习惯栈（vuex数据变化时会给worker发送信号，更新栈），获取栈顶数据（栈内数据以alarmTime排序，保证最近的task/habit在栈顶），计算该数据的alarmTIme与当前时间差值

     已过期提醒：若差值小于0

        1. 向主线程发送taskFailed/habitFailed信号
        2. 将其出栈

     即将过期提醒：若该差值小于临界值

        1. 向主线程发送alarm信号
        2. 将该数据id存入alarmedTasks/alarmedHabits避免下次添加任务后重复提醒该数据

应用销毁前停止worker线程

👀在前端使用worker实现此可能并不合适（线程间通信的消耗没准会更大，而且在主线程内实现起来更简单）。此举只是为了练习worker API，尝试JavaScript的"多线程"能力

## 📣消息推送功能

在user.token变化时：

- 若新值为""，关闭ws
- 若新值不为""，启动ws并传入消息处理函数

应用销毁前关闭ws
