<template>
  <div class="container">
    <van-nav-bar left-text="设置" left-arrow @click-left="onNavBarClickLeft" />
    <van-cell title="清除缓存" is-link @click="onCleanCacheClick" />
    <br>
    <br>
    <van-button type="primary" size="large" @click="onLogoutClick">退出登录</van-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Dialog } from 'vant'
import AuthModule from '@/module/auth'
import { ROUTES_MAP } from '@/router'

export default Vue.extend({
  name: 'setting',
  methods: {
    cleanCache () {},
    onCleanCacheClick () {
      Dialog.confirm({
        title: '提示',
        message: '确定清除缓存吗?'
      }).then(this.cleanCache).catch(() => {})
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
