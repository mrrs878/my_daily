<template>
  <div class="container">
    <van-loading size="24px" vertical>登录中...</van-loading>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AuthModule from '@/module/auth'
import { Loading } from 'vant'

export default Vue.extend({
  name: 'githubLogin',
  async created () {
    const { code } = this.$route.query
    if (typeof code !== 'string') return
    const res = await AuthModule.loginByGithub(code)
    if (res) {
      await AuthModule.updateToken(res)
      this.$router.replace('/task')
    }
  },
  components: {
    [Loading.name]: Loading
  }
})
</script>

<style scoped lang="less">
  .container {
    justify-content: center;
  }
</style>
