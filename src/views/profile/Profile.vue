<template>
  <div class="container">
    <br>
    <van-skeleton title avatar :row="0" :loading="isReady">
      <van-cell center :title="user.name || '点击登录'" is-link to="/profile/userInfo">
        <img slot="icon" class="user-avatar" src="../../assets/img/profile/defaultAvatar.png" alt="">
      </van-cell>
    </van-skeleton>
    <van-cell title="图表分析" is-link to="/profile/analysisChart" />
    <van-cell title="设置" is-link to="/profile/setting" />
    <van-cell title="关于" is-link to="/profile/about" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'profile',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['user']),
    isReady () {
      return this.user === null
    }
  }
})
</script>

<style lang="less" scoped>
  .user-avatar {
    height: 1rem;
    width: 1rem;

    margin-right: 0.6rem;
  }
</style>
