<template>
  <div class="container">
    <van-nav-bar left-text="关于" left-arrow @click-left="onNavBarClickLeft" />
    <van-cell title="一只集记录、提醒、推送于一体的日志应用"></van-cell>
    <van-cell-group title="主要技术:">
      <van-cell title="Vue、Typescript、JWT、Vant、PWA、Web Workers、Websockets、ECharts"></van-cell>
      <van-cell title="Go、gin、gorm"></van-cell>
    </van-cell-group>
    <van-cell-group title="主要功能:" class="feathers-container">
      <van-cell>
        <van-checkbox v-model="checked" disabled shape="square">登录、注册、权限拦截功能(JWT)</van-checkbox>
      </van-cell>
      <van-cell>
        <van-checkbox v-model="unchecked" disabled shape="square">微信登录(仅PC端)</van-checkbox>
      </van-cell>
      <van-cell>
        <van-checkbox v-model="checked" disabled shape="square">Github登录(OAuth)</van-checkbox>
      </van-cell>
      <van-cell>
        <van-checkbox v-model="checked" disabled shape="square">任务/习惯增、删、改、查(gorm)(未分页)</van-checkbox>
      </van-cell>
      <van-cell>
        <van-checkbox v-model="checked" disabled shape="square">任务/习惯完成情况图表分析(ECharts)</van-checkbox>
      </van-cell>
      <van-cell>
        <van-checkbox v-model="checked" disabled shape="square">提醒功能(Web Workers)</van-checkbox>
      </van-cell>
      <van-cell>
        <van-checkbox v-model="checked" disabled shape="square">离线消息推送(service worker)(仅PC端)</van-checkbox>
      </van-cell>
      <van-cell>
        <van-checkbox v-model="checked" disabled shape="square">在线消息推送(Websockets)</van-checkbox>
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
    border-width: 0;
  }
  .feathers-container {
    height: 40vh;
    overflow-y: scroll;
  }
</style>
