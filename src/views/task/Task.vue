<template>
  <div class="container footer">
    <p class="time" @click="onDateTimeClick">{{ dateTime }}</p>
    <van-pull-refresh v-model="isLoading" @refresh="onTaskRefresh">
      <van-swipe-cell class="task-cell" v-for="item in 4" :key="item" @open="onSwipeCellOpen" @close="onSwipeCellClose">
        <van-cell title="单元格" value="内容" center clickable @click="onTaskClick(item)">
          <van-icon slot="icon" name="thumb-circle-o" size="16" class="task-status-icon active" />
        </van-cell>
        <template slot="right">
          <van-button square type="danger" text="删除" />
          <van-button square type="primary" text="已完成" />
        </template>
      </van-swipe-cell>
    </van-pull-refresh>
    <van-calendar v-model="isCalendar" @confirm="onCalendarConfirm" :default-date="defaultDate" :min-date="minDate" :max-date="maxDate" />
    <van-button type="primary" class="position-bottom footer" size="large" @click="onAddTaskClick">添加任务</van-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Panel, SwipeCell, PullRefresh, Toast, Calendar } from 'vant'
import TaskModule from '@/module/task'
import { ROUTES_MAP } from '@/router'

const DATE = new Date()

export default Vue.extend({
  name: 'task',
  data () {
    return {
      isLoading: false,
      timerId: 0,
      dateTime: DATE.toLocaleString(),
      defaultDate: DATE,
      minDate: new Date(DATE.getTime() - 1000 * 60 * 60 * 24 * 30),
      maxDate: DATE,
      isCalendar: false,
      isSwiping: false
    }
  },
  methods: {
    onTaskRefresh () {
      setTimeout(() => {
        Toast('刷新成功')
        this.isLoading = false
      }, 1000)
    },
    onTaskClick (e: number) {
      if (this.isSwiping) {
        this.isSwiping = false
        return
      }
      this.$router.push(`${ROUTES_MAP.taskDetail}/${e}`)
    },
    onDateTimeClick () {
      this.isCalendar = true
    },
    onCalendarConfirm () {
      this.isCalendar = false
    },
    onSwipeCellOpen () {
      this.isSwiping = true
    },
    onSwipeCellClose () {
      this.isSwiping = false
    },
    onAddTaskClick () {
      this.$router.push(ROUTES_MAP.addTask)
    },
    initClock () {
      const timerId = setInterval(() => {
        this.dateTime = new Date().toLocaleString()
      }, 1000)
      this.$once('hook:beforeDestroy', function () {
        clearInterval(timerId)
      })
    },
    async getTasks () {
      try {
        const res = await TaskModule.viewTasks()
      } catch (e) {
        console.log(e)
      }
    }
  },
  created (): void {
    this.initClock()
    this.getTasks()
  },
  components: {
    [Panel.name]: Panel,
    [SwipeCell.name]: SwipeCell,
    [PullRefresh.name]: PullRefresh,
    [Calendar.name]: Calendar
  }
})
</script>

<style scoped lang="less">
  .time {
    text-align: center;
    color: #1683f0;
  }
  .task-status-icon {
    margin-right: 0.2rem;
    &.active {
      color: #1683f0;
    }
  }
</style>
