<template>
  <div class="container footer">
    <van-pull-refresh v-model="isLoading" @refresh="onTaskRefresh">
      <div style="overflow: scroll">
        <van-swipe-cell class="task-cell" v-for="(item, index) in tasks" :key="item.ID"
                        :disabled="item.status === TASK_STATUS.cancel || item.status === TASK_STATUS.failed"
                        @open="onSwipeCellOpen" @close="onSwipeCellClose">
          <van-cell :title="item.title" :value="item.detail" center clickable @click="onTaskClick(index)">
            <van-icon slot="icon" name="thumb-circle-o" size="16" class="task-status-icon" :class="{'active': item.status === 2}" />
          </van-cell>
          <template slot="right">
            <van-button square type="danger" text="取消" v-if="item.status !== TASK_STATUS.cancel"
                        @click="onSwipeRightClick(TASK_STATUS.cancel, item.ID)" />
            <van-button square type="info" text="进行中" v-if="item.status !== TASK_STATUS.running"
                        @click="onSwipeRightClick(TASK_STATUS.running, item.ID)" />
            <van-button square type="primary" text="已完成" v-if="item.status !== TASK_STATUS.complete"
                        @click="onSwipeRightClick(TASK_STATUS.complete, item.ID)" />
          </template>
        </van-swipe-cell>
      </div>
    </van-pull-refresh>
    <van-calendar v-model="isCalendar" @confirm="onCalendarConfirm" :default-date="defaultDate" :min-date="minDate" :max-date="maxDate" />
    <van-button type="primary" class="position-bottom footer" size="large" @click="onAddTaskClick">添加任务</van-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Panel, SwipeCell, Toast, Calendar, Dialog } from 'vant'
import TaskModule from '@/module/task'
import { RES_CODE, TASK_STATUS, UPDATE_MSG } from '@/constant'
import { ROUTES_MAP } from '@/router'
import { mapState } from 'vuex'

const DATE = new Date()

export default Vue.extend({
  name: 'task',
  data () {
    return {
      isLoading: false,
      timerId: 0,
      defaultDate: DATE,
      minDate: new Date(DATE.getTime() - 1000 * 60 * 60 * 24 * 30),
      maxDate: DATE,
      isCalendar: false,
      isSwiping: false,
      TASK_STATUS
    }
  },
  methods: {
    async onTaskRefresh () {
      const res = await TaskModule.viewTasks()
      Toast(res.code === RES_CODE.success ? '刷新成功' : res.msg)
      this.isLoading = false
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
    async onSwipeRightClick (status: TASK_STATUS, id: number) {
      await Dialog.confirm({ title: UPDATE_MSG[status] })
      const res = await TaskModule.updateTaskStatus(id, status)
      Toast(res.code === RES_CODE.success ? '更新成功' : res.msg)
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
    this.getTasks()
  },
  components: {
    [Panel.name]: Panel,
    [SwipeCell.name]: SwipeCell,
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
  .van-pull-refresh {
    height: calc(100% - 1rem);
    overflow: scroll;
  }
</style>
