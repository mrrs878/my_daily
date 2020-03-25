<template>
  <div class="container">
    <van-nav-bar left-text="关于" left-arrow @click-left="onNavBarClickLeft" />
    <van-cell title="一只基于Vue + Typescript的日志应用"></van-cell>
    <van-cell-group title="主要技术:">
      <van-cell title="Vue、Typescript、Vant、PWA、ECharts"></van-cell>
    </van-cell-group>
    <van-cell-group title="主要功能:">
      <van-cell>
        <van-checkbox v-model="checked" disabled shape="square">登录、注册功能</van-checkbox>
      </van-cell>
      <van-cell>
        <van-checkbox v-model="unchecked" disabled shape="square">微信登录功能</van-checkbox>
      </van-cell>
      <van-cell>
        <van-checkbox v-model="checked" disabled shape="square">任务增、删、改、查</van-checkbox>
      </van-cell>
      <van-cell>
        <van-checkbox v-model="checked" disabled shape="square">任务完成情况图表分析</van-checkbox>
      </van-cell>
      <van-cell>
        <van-checkbox v-model="checked" disabled shape="square">PWA</van-checkbox>
      </van-cell>
      <van-cell>
        <van-checkbox v-model="checked" disabled shape="square">推送功能</van-checkbox>
      </van-cell>
      <van-cell>
        <van-checkbox v-model="unchecked" disabled shape="square">习惯增、删、改、查</van-checkbox>
      </van-cell>
      <van-cell>
        <van-checkbox v-model="unchecked" disabled shape="square">习惯完成情况图表分析</van-checkbox>
      </van-cell>
    </van-cell-group>
    <br>
    <br>
    <van-divider>📫 mrrs878@foxmail.com</van-divider>
    <br>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Checkbox, Divider } from 'vant'

export default Vue.extend({
  name: 'about',
  data () {
    return {
      checked: true,
      unchecked: false
    }
  },
  components: {
    [Checkbox.name]: Checkbox,
    [Divider.name]: Divider
  }
})
</script>

<style lang="less" scoped>
  .van-cell-group.van-hairline--top-bottom:after {
    border-top-width: 0;
  }
</style>
