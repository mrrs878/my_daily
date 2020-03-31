<template>
  <div class="container">
    <van-nav-bar left-text="添加任务" left-arrow @click-left="onNavBarClickLeft" />
    <van-field v-model="task.title" clearable label="任务名称" placeholder="请输入任务名称" @input="onTaskTitleInput" />
    <van-field v-model="task.detail" clearable label="任务详情" autosize type="textarea" placeholder="请输入任务详情" @input="onTaskDetailInput" />
    <van-cell title="提醒时间" :value="new Date(task.alarmTime).toLocaleString()" is-link @click="onTaskAlarmClick" />
    <van-cell title="任务标签" value-class="task-label-value">
      <van-icon slot="right-icon" name="add-o" :size="20" @click="onAddTaskLabelClick" />
      <div slot="label">
        <van-tag type="primary" closeable class="task-label" mark
                 @close="onLabelCloseClick(item)"
                 v-for="item in task.label" :key="item">{{ item }}</van-tag>
      </div>
    </van-cell>
    <van-button size="large" type="primary" class="position-bottom" @click="onCreateTaskClick">添加</van-button>
    <van-popup v-model="isAlarmTimePopup" round close-icon-position="top-left" position="bottom" closeable>
      <van-datetime-picker v-model="currentDateTime" type="datetime"
                           :formatter="dateTimeFormatter" @confirm="onDateTimeConfirm"
                           :min-date="minDateTime" :max-date="maxDateTime"/>
    </van-popup>
    <van-popup v-model="isLabelPopup" position="center" style="background-color: unset">
      <div class="task-label-popup">
        <van-field v-model="taskLabel" clearable placeholder="请输入标签" @input="onTaskLabelInput" />
        <br>
        <van-button size="large" type="primary" @click="onAddTaskBtnClick">添加</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { DatetimePicker, Tag, Toast } from 'vant'
import TaskModule from '@/module/task'
import Task from '@/models/Task'
import { RES_CODE, TASK_STATUS } from '@/constant'
import ToastError from '@/models/ToastError'

const CURRENT_DATE_TIME = new Date(`${new Date().toLocaleDateString()} 00:00:00`)
enum DATE_TIME_TYPE {
  year = 'year',
  month = 'month',
  day = 'day',
  hour = 'hour',
  minute = 'minute'
}
const DATE_TIME_FORMATTER = {
  [DATE_TIME_TYPE.year]: '年',
  [DATE_TIME_TYPE.month]: '月',
  [DATE_TIME_TYPE.day]: '日',
  [DATE_TIME_TYPE.hour]: '时',
  [DATE_TIME_TYPE.minute]: '分'
}

export default Vue.extend({
  name: 'addTask',
  data () {
    return {
      isAlarmTimePopup: false,
      isLabelPopup: false,
      task: new Task(CURRENT_DATE_TIME.getTime(), '', [], TASK_STATUS.pending, ''),
      taskLabel: '',
      currentDateTime: CURRENT_DATE_TIME,
      minDateTime: CURRENT_DATE_TIME,
      maxDateTime: new Date(CURRENT_DATE_TIME.getTime() + 1000 * 60 * 60 * 24 * 6)
    }
  },
  methods: {
    dateTimeFormatter (type: DATE_TIME_TYPE, val: string) {
      return `${val}${DATE_TIME_FORMATTER[type]}`
    },
    async onCreateTaskClick () {
      try {
        const label = this.task?.label?.join('#')
        const msg = this.task?.validate(CURRENT_DATE_TIME.getTime())
        if (msg) throw new ToastError(msg)
        const res = await TaskModule.addTask(Object.assign({}, this.task, { label }))
        Toast(res.code === RES_CODE.success ? '添加成功' : res.msg)
        if (res.code === RES_CODE.success) setTimeout(() => this.$router.back(), 2000)
      } catch (e) {
        console.log(e)
        if (e instanceof ToastError) Toast(e.msg)
      }
    },
    onTaskTitleInput (e: string) {
      this.task.title = e
    },
    onTaskDetailInput (e: string) {
      this.task.detail = e
    },
    onTaskAlarmClick () {
      this.isAlarmTimePopup = true
    },
    onDateTimeConfirm (value: Date) {
      this.isAlarmTimePopup = false
      this.task.alarmTime = value.getTime()
    },
    onTaskLabelInput (value: string) {
      this.taskLabel = value
    },
    onAddTaskLabelClick () {
      this.isLabelPopup = true
    },
    onAddTaskBtnClick () {
      this.isLabelPopup = false
      this.task.label.push(this.taskLabel)
      this.taskLabel = ''
    },
    onLabelCloseClick (e: string) {
      this.task.label = this.task.label.filter(item => item !== e)
    }
  },
  components: {
    [DatetimePicker.name]: DatetimePicker,
    [Tag.name]: Tag
  }
})
</script>

<style lang="less" scoped>
  .task-label-value {
    text-align: left;
  }
  .task-label {
    margin-right: 0.1rem;
    &:last-child {
      margin-right: 1rem;
    }
  }
  .task-label-popup {
    width: 80vw;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    padding-top: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
