<template>
  <div class="container footer">
    <p class="time" @click="onDateTimeClick">{{ dateTime }}</p>
    <van-pull-refresh v-model="isLoading" @refresh="onTaskRefresh">
      <van-swipe-cell class="task-cell" v-for="(item, index) in tasks" :key="item.ID"
                      @open="onSwipeCellOpen" @close="onSwipeCellClose">
        <van-cell :title="item.title" :value="item.detail" center clickable @click="onTaskClick(index)">
          <van-icon slot="icon" name="thumb-circle-o" size="16" class="task-status-icon" :class="{'active': item.status === 2}" />
        </van-cell>
        <template slot="right">
          <van-button square type="danger" text="取消" @click="onSwipeRightClick('delete', item.ID)" />
          <van-button square type="info" text="进行中" @click="onSwipeRightClick('running', item.ID)" />
          <van-button square type="primary" text="已完成" @click="onSwipeRightClick('complete', item.ID)" />
        </template>
      </van-swipe-cell>
    </van-pull-refresh>
    <van-calendar v-model="isCalendar" @confirm="onCalendarConfirm" :default-date="defaultDate" :min-date="minDate" :max-date="maxDate" />
    <van-button type="primary" class="position-bottom footer" size="large" @click="onAddTaskClick">添加任务</van-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Panel, SwipeCell, PullRefresh, Toast, Calendar, Dialog } from 'vant'
import TaskModule from '@/module/task'
import { TASK_STATUS } from '@/constant'
import { ROUTES_MAP } from '@/router'
import { mapState } from 'vuex'

const DATE = new Date()
enum SWIPE_RIGHT_ACTIONS {
  delete = 'delete',
  running = 'running',
  complete = 'complete'
}

const TASK_ACTION_HANDLERS = {
  async [SWIPE_RIGHT_ACTIONS.delete] (id: number) {
    try {
      await Dialog.confirm({ title: '确定取消该任务吗?' })
      await TaskModule.updateTaskStatus(id, TASK_STATUS.cancel)
    } catch (e) {
      console.log(e)
    }
  },
  async [SWIPE_RIGHT_ACTIONS.running] (id: number) {
    try {
      await Dialog.confirm({ title: '确定任务在进行中吗?' })
      await TaskModule.updateTaskStatus(id, TASK_STATUS.running)
    } catch (e) {
      console.log(e)
    }
  },
  async [SWIPE_RIGHT_ACTIONS.complete] (id: number) {
    try {
      await Dialog.confirm({ title: '确定已经完成该任务了吗?' })
      await TaskModule.updateTaskStatus(id, TASK_STATUS.complete)
    } catch (e) {
      console.log(e)
    }
  }
}

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
    onSwipeRightClick (type: SWIPE_RIGHT_ACTIONS, id: number) {
      TASK_ACTION_HANDLERS[type](id)
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
        await TaskModule.viewTasks()
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
  },
  computed: {
    ...mapState(['tasks'])
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
