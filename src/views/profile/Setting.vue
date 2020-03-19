<template>
  <div class="container">
    <van-nav-bar left-text="设置" left-arrow @click-left="onNavBarClickLeft" />
    <van-cell title="清除缓存" is-link />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'setting'
})
</script>

<style lang="less"></style>
