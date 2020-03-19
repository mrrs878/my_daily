<template>
  <div class="container" style="text-align: center">
    <van-nav-bar left-text="404" left-arrow @click-left="onNavBarClickLeft" />
    网页走丢了
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'default'
})
</script>

<style lang="less" scoped>
  .container {
    overscroll-behavior-y: contain!important;
  }
</style>
