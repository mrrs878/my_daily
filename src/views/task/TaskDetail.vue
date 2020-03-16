<template>
  <div class="container">
    <van-nav-bar left-text="任务详情" left-arrow @click-left="onNavBarClickLeft" />
    <van-panel title="任务详情" desc="描述信息" status="状态">
      <div class="">内容</div>
      <div slot="footer" class="panel-footer">
        <van-button size="small" type="danger">删除</van-button>
        <van-button size="small" type="primary">完成</van-button>
      </div>
    </van-panel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Panel } from 'vant'

export default Vue.extend({
  name: 'taskDetail',
  components: {
    [Panel.name]: Panel
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
</style>
