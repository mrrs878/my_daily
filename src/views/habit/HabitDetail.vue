<template>
  <div class="container">
    <van-nav-bar left-text="习惯详情" left-arrow @click-left="onNavBarClickLeft" />
    <van-pull-refresh v-model="isRefreshing" @refresh="onRefresh">
      <van-panel>
        <div slot="header">
          <van-cell :title="habit.title" :border="true" :value="HABIT_STATUS_VIEW[habit.status]">
            <div slot="label">
              <div class="panel-label">
                <van-tag mark type="primary" v-for="(item, index) in habit.label" :key="index">{{ item }}</van-tag>
              </div>
              {{ habit.alarmTime }}
              <br>
              <div class="panel-label">
                <van-tag mark plain type="primary" v-for="(item, index) in habit.alarmDate" :key="index">{{ item }}</van-tag>
              </div>
            </div>
          </van-cell>
        </div>
        <div>
          {{ habit.detail }}
        </div>
        <div slot="footer" class="panel-footer">
          <van-button size="small" type="danger">删除</van-button>
          <div v-if="!habit.DeletedAt && habit.status !== HABIT_STATUS.failed">
            <van-button size="small" type="warning" @click="onStatusActionClick(HABIT_STATUS.cancel)" v-if="habit.status !== HABIT_STATUS.cancel">取消</van-button>
            <van-button size="small" type="info" @click="onStatusActionClick(HABIT_STATUS.running)" v-if="habit.status !== HABIT_STATUS.running">进行中</van-button>
            <van-button size="small" type="primary" @click="onStatusActionClick(HABIT_STATUS.complete)" v-if="habit.status !== HABIT_STATUS.complete">完成</van-button>
          </div>
        </div>
      </van-panel>
      <van-divider>更新时间：{{ habit.UpdatedAt }}</van-divider>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Dialog, Divider, Panel, PullRefresh, Tag, Toast } from 'vant'
import { mapState } from 'vuex'
import Habit from '@/models/Habit'
import { HABIT_STATUS, HABIT_STATUS_VIEW, RES_CODE, UPDATE_MSG } from '@/constant'
import * as R from 'ramda'
import HabitModule from '@/module/habit'

export default Vue.extend({
  name: 'habitDetail',
  data () {
    return {
      HABIT_STATUS_VIEW,
      HABIT_STATUS,
      isRefreshing: false,
      habit: new Habit('', '', [], HABIT_STATUS.pending, '', [])
    }
  },
  methods: {
    async onRefresh () {
      const res = await HabitModule.refreshHabit(this.habit.ID)
      Toast(res.code === RES_CODE.success ? '刷新成功' : res.msg)
      this.isRefreshing = false
    },
    async onStatusActionClick (status: HABIT_STATUS) {
      await Dialog.confirm({ title: UPDATE_MSG[status] })
      const res = await HabitModule.updateHabitStatus(this.habit.ID, status)
      Toast(res.code === RES_CODE.success ? '更新成功' : res.msg)
      setTimeout(() => this.$router.back(), 2000)
    }
  },
  mounted (): void {
    const habit = R.clone(this.habits[this.$route.params.id])
    if ((!Array.isArray(habit.label) && habit.label !== '')) {
      habit.label = habit.label.split('#')
      habit.UpdatedAt = new Date(habit.UpdatedAt).toLocaleString()
    }
    if (!Array.isArray(habit.alarmDate)) habit.alarmDate = habit.alarmDate.split('#')
    this.habit = habit
  },
  components: {
    [Panel.name]: Panel,
    [Tag.name]: Tag,
    [PullRefresh.name]: PullRefresh,
    [Divider.name]: Divider
  },
  computed: {
    ...mapState(['habits'])
  }
})
</script>

<style scoped lang="less">
  .van-panel__content {
    padding: 0.1rem 0.32rem;
    min-height: 1rem;
  }
  .van-panel__header {
    .van-cell__title {
      flex: 4;
    }
  }
  .van-cell__title, .van-cell__value {
    flex: 2;
  }
  .van-panel__footer.van-hairline--top::after {
    opacity: 0;
  }
  .van-panel.van-hairline--top-bottom:after {
    opacity: 0;
  }
  .panel-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    .van-button {
      margin-right: 0.2rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .panel-label {
    display: flex;
  }
</style>
