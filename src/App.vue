<template>
  <div id="app">
    <router-view />
    <m-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MFooter from '@/components/MFooter.vue'
import userModule from '@/module/user'
import { initWorkers } from '@/worker'

export default Vue.extend({
  name: 'App',
  created (): void {
    userModule.getUserInfo()
    initWorkers()
  },
  components: { MFooter }
})
</script>

<style lang="less">
  body {
    overscroll-behavior-y: contain!important;
  }
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
    padding-right: 0.32rem;
    padding-left: 0.32rem;
  }
  .padding-v {
    padding-top: 0.32rem;
    padding-bottom: 0.32rem;
  }
  .position-bottom {
    position: fixed!important;
    bottom: 0;
  }
  .position-bottom.footer{
    position: fixed!important;
    bottom: 1rem;
  }
  .empty {
    color: #ccc;
    text-align: center;
    position: fixed;
    top: 2rem;
    width: 100%;
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
