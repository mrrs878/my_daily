<template>
  <div class="container">
    <br>
    <van-skeleton title avatar :row="0" :loading="isReady">
      <van-cell center :title="user.name || '点击登录'" is-link>
        <img slot="icon" class="user-avatar" src="../../assets/img/profile/defaultAvatar.png" alt="">
      </van-cell>
    </van-skeleton>
    <van-cell title="图表分析" is-link to="/profile/analysisChart" />
    <van-cell title="消息中心" is-link center to="/profile/messageCenter">
      <div class="badge" :class="{ 'empty': msgCnt === 0 }">{{ msgCnt }}</div>
    </van-cell>
    <van-cell title="设置" is-link to="/profile/setting" />
    <van-cell title="关于" is-link to="/profile/about" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { MessageI } from '@/interface/model'

export default Vue.extend({
  name: 'profile',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['user', 'message']),
    isReady () {
      return this.user === null
    },
    msgCnt () {
      const tmp = this.message.filter((item: MessageI) => item.status === 0)
      return tmp.length
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
  .badge {
    padding: 0 0.05rem;
    background-color: #f00;
    color: #fff;
    border-radius: 999px;
    width: max-content;
    font-size: 0.2rem;
    height: 0.3rem;
    line-height: 0.3rem;
    margin-left: auto;
    &.empty {
      opacity: 0;
    }
  }
</style>
