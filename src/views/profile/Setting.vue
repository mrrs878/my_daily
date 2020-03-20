<template>
  <div class="container">
    <van-nav-bar left-text="设置" left-arrow @click-left="onNavBarClickLeft" />
    <van-cell title="清除缓存" is-link @click="onCleanCacheClick" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Dialog } from 'vant'

export default Vue.extend({
  name: 'setting',
  methods: {
    cleanCache () {},
    onCleanCacheClick () {
      Dialog.confirm({
        title: '提示',
        message: '确定清除缓存吗?'
      }).then(this.cleanCache).catch(() => {})
    }
  }
})
</script>

<style lang="less"></style>
