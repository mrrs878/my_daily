<template>
  <div class="container">
    <van-pull-refresh v-model="isLoading" @refresh="onHabitRefresh" :disabled="user.token === ''">
      <div style="overflow: scroll">
        <van-swipe-cell class="task-cell" v-for="(item, index) in habits" :key="item.ID"
                        :disabled="item.status === HABIT_STATUS.cancel || item.status === HABIT_STATUS.failed"
                        @open="onSwipeCellOpen" @close="onSwipeCellClose">
          <van-cell :title="item.title" :value="item.detail" center clickable @click="onHabitClick(index)">
            <van-icon slot="icon" name="thumb-circle-o" size="16" class="task-status-icon" :class="{'active': item.status === 2}" />
          </van-cell>
          <template slot="right">
            <van-button square type="danger" text="取消" v-if="item.status !== HABIT_STATUS.cancel"
                        @click="onSwipeRightClick(HABIT_STATUS.cancel, item.ID)" />
            <van-button square type="info" text="进行中" v-if="item.status !== HABIT_STATUS.running"
                        @click="onSwipeRightClick(HABIT_STATUS.running, item.ID)" />
            <van-button square type="primary" text="已完成" v-if="item.status !== HABIT_STATUS.complete"
                        @click="onSwipeRightClick(HABIT_STATUS.complete, item.ID)" />
          </template>
        </van-swipe-cell>
        <div class="empty" v-show="habits.length === 0">空空如也~</div>
      </div>
    </van-pull-refresh>
    <van-button type="primary" class="position-bottom footer" size="large" @click="onAddHabitClick">添加习惯</van-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ROUTES_MAP } from '@/router'
import { mapState } from 'vuex'
import HabitModule from '@/module/habit'
import { RES_CODE, HABIT_STATUS, UPDATE_MSG } from '@/constant'
import { Dialog, Panel, Toast } from 'vant'

export default Vue.extend({
  name: 'habit',
  data () {
    return {
      isLoading: false,
      isSwiping: false,
      HABIT_STATUS
    }
  },
  methods: {
    async onHabitRefresh () {
      const res = await HabitModule.viewHabits()
      Toast(res.code === RES_CODE.success ? '刷新成功' : res.msg)
      this.isLoading = false
    },
    onSwipeCellOpen () {
      this.isSwiping = true
    },
    onSwipeCellClose () {
      this.isSwiping = false
    },
    onHabitClick (e: number) {
      if (this.isSwiping) {
        this.isSwiping = false
        return
      }
      this.$router.push(`${ROUTES_MAP.habitDetail}/${e}`)
    },
    async onSwipeRightClick (status: HABIT_STATUS, id: number) {
      await Dialog.confirm({ title: UPDATE_MSG[status] })
      const res = await HabitModule.updateHabitStatus(id, status)
      Toast(res.code === RES_CODE.success ? '更新成功' : res.msg)
    },
    onAddHabitClick () {
      this.$router.push(ROUTES_MAP.addHabit)
    },
    async getHabits () {
      try {
        await HabitModule.viewHabits()
      } catch (e) {
        console.log(e)
      }
    }
  },
  created (): void {
    this.getHabits()
  },
  components: {
    [Panel.name]: Panel
  },
  computed: {
    ...mapState(['habits', 'user'])
  }
})
</script>

<style lang="less" scoped>
  .task-status-icon {
    margin-right: 0.2rem;
    &.active {
      color: #1683f0;
    }
  }
  .van-pull-refresh {
    height: calc(100% - 1rem);
    overflow: scroll;
  }
</style>
