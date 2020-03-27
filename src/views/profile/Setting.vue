import { MSG_TYPE } from '@/constant'
<template>
  <div class="container">
    <van-nav-bar left-text="设置" left-arrow @click-left="onNavBarClickLeft" />
    <van-cell title="更新缓存" is-link @click="onCleanCacheClick" />
    <van-cell title="任务提醒灵敏度" value="1min" is-link @click="onSetRefreshRateCellClick" />
    <br>
    <br>
    <van-button type="primary" size="large" @click="onLogoutClick">退出登录</van-button>
    <van-popup v-model="isSetRatePopup" closeable  close-icon-position="top-left" round position="bottom">
      <van-picker show-toolbar title="选择刷新间隔(min)" :columns="refreshRates" @confirm="onSetRefreshCfmClick" />
    </van-popup>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Dialog, Toast } from 'vant'
import AuthModule from '@/module/auth'
import { ROUTES_MAP } from '@/router'
import { postMessage } from '@/worker/alarm'
import { MSG_TYPE } from '@/constant'
import { swReg } from '@/registerServiceWorker'

export default Vue.extend({
  name: 'setting',
  data () {
    return {
      isSetRatePopup: false,
      refreshRates: [1, 5, 10]
    }
  },
  methods: {
    cleanCache () {
      swReg.update().then(() => {
        Toast('更新成功')
      }).catch(e => {
        console.log(e)
      })
    },
    onCleanCacheClick () {
      Dialog.confirm({
        title: '提示',
        message: '确定更新缓存吗?'
      }).then(this.cleanCache).catch(() => {})
    },
    onSetRefreshRateCellClick () {
      this.isSetRatePopup = true
    },
    onSetRefreshCfmClick (e: number) {
      this.isSetRatePopup = false
      postMessage<number>({ type: MSG_TYPE.setRefreshRate, msg: e })
    },
    async onLogoutClick () {
      try {
        Dialog.confirm({
          title: '提示',
          message: '确定退出登录吗?'
        }).then(async () => {
          const res = await AuthModule.logout()
          if (res) await this.$router.replace(ROUTES_MAP.task)
        }).catch(() => {})
      } catch (e) {
        console.log(e)
      }
    }
  }
})
</script>

<style lang="less"></style>
