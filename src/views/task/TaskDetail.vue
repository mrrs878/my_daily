<template>
  <div class="container">
    <van-nav-bar left-text="任务详情" left-arrow @click-left="onNavBarClickLeft" />
    <van-panel :title="task.title" :status="TASK_STATUS_VIEW[task.status]">
      <div class="">
        <div class="panel-label">
          <van-tag mark type="primary" v-for="(item, index) in task.label" :key="index">{{ item }}</van-tag>
        </div>
        <br>
        {{ task.detail }}
      </div>
      <div slot="footer" class="panel-footer">
        <van-button size="small" type="danger">删除</van-button>
        <div v-if="!task.DeletedAt">
          <van-button size="small" type="warning" @click="onStatusActionClick(TASK_STATUS.cancel)" v-show="task.status !== TASK_STATUS.cancel">取消</van-button>
          <van-button size="small" type="info" @click="onStatusActionClick(TASK_STATUS.running)" v-show="task.status !== TASK_STATUS.running">进行中</van-button>
          <van-button size="small" type="primary" @click="onStatusActionClick(TASK_STATUS.complete)" v-show="task.status !== TASK_STATUS.complete">完成</van-button>
        </div>
      </div>
    </van-panel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Panel, Tag } from 'vant'
import { mapState } from 'vuex'
import Task from '@/models/Task'
import TaskModule from '@/module/task'
import { TASK_STATUS_VIEW, TASK_STATUS } from '@/constant'

export default Vue.extend({
  name: 'taskDetail',
  data () {
    return {
      TASK_STATUS_VIEW,
      TASK_STATUS,
      task: new Task(new Date().getTime(), '', [], TASK_STATUS.pending, '')
    }
  },
  methods: {
    onStatusActionClick (status: TASK_STATUS) {
      TaskModule.updateTaskStatus(this.task.ID, status)
    }
  },
  mounted (): void {
    const task = this.tasks[this.$route.params.id]
    this.task = task
    this.task.label = task.label.split('#')
  },
  components: {
    [Panel.name]: Panel,
    [Tag.name]: Tag
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
  .van-panel__footer.van-hairline--top::after {
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
