<template>
  <div class="container">
    <van-nav-bar left-text="消息中心" left-arrow @click-left="onNavBarClickLeft"
                 :right-text="rightText" @click-right="onNavBarClickRight" />
    <van-pull-refresh v-model="isLoading" @refresh="onMsgRefresh">
      <div style="overflow: scroll">
        <van-swipe-cell class="task-cell" v-for="item in message" :key="item.ID"
                        @open="onSwipeCellOpen" @close="onSwipeCellClose">
          <template #left>
            <van-button square type="primary" text="置为已读" v-show="item.status === 0" @click="onReadMsgBtnClick(item.ID)" />
          </template>
          <van-cell :title="item.title" :value="item.detail" center clickable @click="onMsgClick(item.ID)">
            <div class="cell-icon"  :class="{ 'active': item.status === 0 }" slot="icon"></div>
          </van-cell>
          <template #right>
            <van-button square type="danger" text="删除" @click="onDelMsgBtnClick(item.ID)" />
          </template>
        </van-swipe-cell>
        <div class="empty" v-show="message.length === 0">空空如也~</div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { Toast } from 'vant'
import ws from '@/util/ws'
import { MessageI } from '@/interface/model'

export default Vue.extend({
  name: 'messageCenter',
  data () {
    return {
      isLoading: false,
      isSwiping: false
    }
  },
  methods: {
    async onMsgRefresh () {
      ws.sendMsg({ label: 'GetAll', data: JSON.stringify({ user_id: this.user.ID }) })
      Toast('刷新成功')
    },
    onSwipeCellOpen () {
    },
    onSwipeCellClose () {
    },
    onMsgClick (ID: number) {
    },
    onReadMsgBtnClick (ID: number) {
      ws.sendMsg({ label: 'ReadOne', data: JSON.stringify({ ID, user_id: this.user.ID }) })
    },
    onDelMsgBtnClick (ID: number) {
      ws.sendMsg({ label: 'RemoveOne', data: JSON.stringify({ ID, user_id: this.user.ID }) })
    },
    onNavBarClickRight () {
      ws.sendMsg({ label: 'ReadAll', data: JSON.stringify({ status: 1, user_id: this.user.ID }) })
    }
  },
  computed: {
    ...mapState(['message', 'user']),
    rightText () {
      const tmp = this.message.filter((item: MessageI) => item.status === 0)
      return tmp.length === 0 ? '' : '全部已读'
    }
  }
})
</script>

<style lang="less" scoped>
  .cell-icon {
    height: 5px;
    border-radius: 50%;
    background-color: #ee0a24;
    margin-right: 0.2rem;
    &.active {
      width: 5px;
    }
  }
</style>
