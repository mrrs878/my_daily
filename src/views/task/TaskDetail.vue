<template>
  <div class="container">
    <van-nav-bar left-text="任务详情" left-arrow @click-left="onNavBarClickLeft" />
    <van-panel :title="task.title" status="状态">
      <div class="">
        <div class="panel-label">
          <van-tag mark type="primary" v-for="(item, index) in task.label" :key="index">{{ item }}</van-tag>
        </div>
        {{ task.description }}
      </div>
      <div slot="footer" class="panel-footer">
        <van-button size="small" type="danger">删除</van-button>
        <van-button size="small" type="primary">完成</van-button>
      </div>
    </van-panel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Panel, Tag } from 'vant'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'taskDetail',
  data () {
    return {
      task: { label: '', title: '', description: '' }
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
    .van-button:nth-child(1) {
      margin-right: 0.2rem;
    }
  }
  .panel-label {
    display: flex;
  }
</style>
