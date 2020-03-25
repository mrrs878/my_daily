<template>
  <div class="container">
    <van-nav-bar left-text="注册" left-arrow @click-left="onNavBarClickLeft" />
    <van-field v-model="name" autofocus clearable placeholder="请输入账号" />
    <van-field v-model="password" type="password" clearable autosize placeholder="请输入密码" />
    <br>
    <br>
    <van-button size="large" type="primary" class="login-btn" @click="onRegBtnClick">注册</van-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ToastError from '@/models/ToastError'
import { Toast } from 'vant'
import AuthModule from '@/module/auth'

export default Vue.extend({
  name: 'register',
  data: () => ({
    name: '',
    password: ''
  }),
  methods: {
    async onRegBtnClick () {
      try {
        const { name, password } = this
        if (name === '') throw new ToastError('请输入账号')
        if (password === '') throw new ToastError('请输入密码')
        Toast.loading('注册中...')
        const res = await AuthModule.register({ name, password })
        if (res) {
          Toast.clear(true)
          this.$router.back()
        }
      } catch (e) {
        if (e instanceof ToastError) Toast(e.msg)
      }
    }
  }
})
</script>

<style lang="less" scoped></style>
