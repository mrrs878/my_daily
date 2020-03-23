<template>
  <div class="container">
    <van-nav-bar left-text="设置" left-arrow @click-left="onNavBarClickLeft" />
    <van-cell title="清除缓存" is-link @click="onCleanCacheClick" />
    <van-cell title="订阅通知" is-link @click="onSubClick" />
  </div>
</template>

<script lang="js">
import Vue from 'vue'
import { Dialog } from 'vant'
import { urlBase64ToUint8Array } from '@/util/base64'
import { subscribable } from '@/api/sw'

export default Vue.extend({
  name: 'setting',
  methods: {
    cleanCache () {},
    async subscribeUserToPush (registration, publicKey) {
      const subscribeOptions = {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey)
      }
      // eslint-disable-next-line no-return-await
      return await registration.pushManager.subscribe(subscribeOptions)
    },
    onCleanCacheClick () {
      Dialog.confirm({
        title: '提示',
        message: '确定清除缓存吗?'
      }).then(this.cleanCache).catch(() => {})
    },
    async onSubClick () {
      const publicKey = 'BOEQSjdhorIf8M0XFNlwohK3sTzO9iJwvbYU-fuXRF0tvRpPPMGO6d_gJC_pUQwBT7wD8rKutpNTFHOHN3VqJ0A'
      const subscription = await this.subscribeUserToPush(self.registration, publicKey)
      await subscribable(subscription)
    }
  }
})
</script>

<style lang="less"></style>
