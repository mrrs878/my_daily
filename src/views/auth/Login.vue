<template>
  <div class="container">
    <van-nav-bar left-text="登录" left-arrow @click-left="onNavBarClickLeft" />
    <div class="login-info-container">
      <van-field v-model="name" clearable placeholder="请输入账号" />
      <van-field v-model="password" type="password" clearable placeholder="请输入密码" />
      <br>
      <div class="auth-action-container padding-h">
        <span @click="onAuthActionClick('forgetPwd')">忘记密码?</span>
        <span @click="onAuthActionClick('register')">注册</span>
      </div>
      <br>
      <br>
      <van-button size="large" type="primary" class="login-btn" @click="onLoginBtnClick">登录</van-button>
    </div>
    <div class="login-helpers">
      <img src="../../assets/img/github.svg" class="login-type" @click="onGithubLoginClick" alt="">
      <img src="../../assets/img/wechat.svg" class="login-type" @click="onWeChatLoginClick" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ToastError from '@/models/ToastError'
import { Toast } from 'vant'
import AuthModule from '@/module/auth'
import { ROUTES_MAP } from '@/router'

export default Vue.extend({
  name: 'login',
  data: () => ({
    name: '',
    password: ''
  }),
  methods: {
    async onLoginBtnClick () {
      try {
        const { name, password } = this
        if (name === '') throw new ToastError('请输入账号')
        if (password === '') throw new ToastError('请输入密码')
        Toast.loading('登录中...')
        const res = await AuthModule.login({ name, password })
        if (res) {
          Toast.clear(true)
          this.$router.back()
        }
      } catch (e) {
        if (e instanceof ToastError) Toast(e.msg)
      }
    },
    onAuthActionClick (type: string) {
      this.$router.push(type === 'forgetPwd' ? ROUTES_MAP.forgetPwd : ROUTES_MAP.register)
    },
    onGithubLoginClick () {
      window.location.href = 'https://github.com/login/oauth/authorize?client_id=7b961b417e4b3fc83488&scope=user,public_repo'
    },
    onWeChatLoginClick () {}
  }
})
</script>

<style lang="less" scoped>
  .login-info-container {
    margin-top: 35%;
  }
  .auth-action-container {
    font-size: 0.24rem;
    display: flex;
    justify-content: space-between;
    color: #1683f0;
  }
  .login-helpers {
    text-align: center;
    display: flex;
    justify-items: center;
    align-items: center;
    margin: 2.5rem auto 0;
    .login-type {
      height: 0.8rem;
      width: 0.8rem;
      margin: 0 0.25rem;
      &:nth-child(2) {
        height: 1rem;
        width: 1rem;
      }
    }
  }
</style>
