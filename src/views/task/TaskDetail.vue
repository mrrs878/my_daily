<template>
  <div class="container">
    <van-nav-bar left-text="任务详情" left-arrow @click-left="onNavBarClickLeft" />
    <van-pull-refresh v-model="isRefreshing" @refresh="onRefresh">
      <van-panel :title="task.title" :status="TASK_STATUS_VIEW[task.status]">
        <div slot="header">
          <van-cell :title="task.title" :border="true" :value="TASK_STATUS_VIEW[task.status]">
            <div slot="label" class="panel-label">
              <van-tag mark type="primary" v-for="(item, index) in task.label" :key="index">{{ item }}</van-tag>
              {{ new Date(task.alarmTime).toLocaleString() }}
            </div>
          </van-cell>
        </div>
        <div>
          {{ task.detail }}
        </div>
        <div slot="footer" class="panel-footer">
          <van-button size="small" type="danger">删除</van-button>
          <div v-if="!task.DeletedAt && task.status !== TASK_STATUS.failed">
            <van-button size="small" type="warning" @click="onStatusActionClick(TASK_STATUS.cancel)" v-if="task.status !== TASK_STATUS.cancel">取消</van-button>
            <van-button size="small" type="info" @click="onStatusActionClick(TASK_STATUS.running)" v-if="task.status !== TASK_STATUS.running">进行中</van-button>
            <van-button size="small" type="primary" @click="onStatusActionClick(TASK_STATUS.complete)" v-if="task.status !== TASK_STATUS.complete">完成</van-button>
          </div>
        </div>
      </van-panel>
      <van-divider>更新时间：{{ task.UpdatedAt }}</van-divider>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as R from 'ramda'
import { Dialog, Panel, Tag, PullRefresh, Toast, Divider } from 'vant'
import { mapState } from 'vuex'
import Task from '@/models/Task'
import TaskModule from '@/module/task'
import { TASK_STATUS_VIEW, TASK_STATUS, UPDATE_MSG, RES_CODE } from '@/constant'

export default Vue.extend({
  name: 'taskDetail',
  data () {
    return {
      TASK_STATUS_VIEW,
      TASK_STATUS,
      task: new Task(new Date().getTime(), '', [], TASK_STATUS.pending, ''),
      isRefreshing: false
    }
  },
  methods: {
    async onStatusActionClick (status: TASK_STATUS) {
      await Dialog.confirm({ title: UPDATE_MSG[status] })
      const res = await TaskModule.updateTaskStatus(this.task.ID, status)
      Toast(res.code === RES_CODE.success ? '更新成功' : res.msg)
      setTimeout(() => this.$router.back(), 2000)
    },
    async onRefresh () {
      const res = await TaskModule.refreshTask(this.task.ID)
      Toast(res.code === RES_CODE.success ? '刷新成功' : res.msg)
      this.isRefreshing = false
    }
  },
  mounted (): void {
    const task = R.clone(this.tasks[this.$route.params.id])
    if (!Array.isArray(task.label) && task.label !== '') {
      task.label = task.label.split('#')
      task.UpdatedAt = new Date(task.UpdatedAt).toLocaleString()
    }
    this.task = task
  },
  components: {
    [Panel.name]: Panel,
    [Tag.name]: Tag,
    [PullRefresh.name]: PullRefresh,
    [Divider.name]: Divider
  },
  computed: {
    ...mapState(['tasks'])
  }
})
</script>

<style scoped lang="less">
  .van-panel__content {
    padding: 0.1rem 0.32rem;
    min-height: 1rem;
  }
  .van-panel__header {
    .van-cell__title {
      flex: 4;
    }
  }
  .van-cell__title, .van-cell__value {
    flex: 2;
  }
  .van-panel__footer.van-hairline--top::after {
    opacity: 0;
  }
  .van-panel.van-hairline--top-bottom:after {
    opacity: 0;
  }
  .panel-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    .van-button {
      margin-right: 0.2rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .panel-label {
    display: flex;
  }
</style>
