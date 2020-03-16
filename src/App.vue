<template>
  <div id="app">
    <router-view />
    <m-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MFooter from '@/components/MFooter.vue'

export default Vue.extend({
  name: 'App',
  components: { MFooter }
})
</script>

<style lang="less">
  #app {
    font-size: 0.32rem;
  }
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    box-sizing: border-box;
    width: 100vw;
  }
  .container.footer {
    height: calc(100vh - 1rem);
  }
  .padding-h {
    padding: 0 0.2rem;
  }
  .padding-v {
    padding: 0.2rem 0;
  }
  .position-bottom {
    position: fixed!important;
    bottom: 0;
  }
  .position-bottom.footer{
    position: fixed!important;
    bottom: 1rem;
  }
  .van-picker__cancel {
    opacity: 0;
  }
  .van-popup__close-icon--top-left {
    top: 0.16rem!important;
  }
  .van-pull-refresh, .van-pull-refresh__track {
    height: 100%;
  }
  .van-cell__value {
    flex: 2!important;
  }
  .van-tag--mark {
    margin-right: 0.1rem;
  }
</style>
