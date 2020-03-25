<template>
  <div class="container">
    <van-nav-bar left-text="添加习惯" left-arrow @click-left="onNavBarClickLeft" />
    <van-field v-model="habit.title" autofocus clearable label="习惯名称" placeholder="请输入习惯名称" @input="onHabitTitleInput" />
    <van-field v-model="habit.detail" clearable label="习惯详情" autosize type="textarea" placeholder="请输入习惯详情" @input="onHabitDetailInput" />
    <van-cell title="提醒时间" :value="habit.alarmTime" is-link @click="onHabitAlarmTimeClick" />
    <van-cell title="提醒日期" is-link @click="onHabitAlarmDateClick">
      <div slot="label">
        <van-tag v-for="item in habit.alarmDate" class="date-tag" type="primary" :key="item">星期{{ item }}</van-tag>
      </div>
    </van-cell>
    <van-cell title="习惯标签" center value-class="habit-label-value">
      <van-icon slot="right-icon" name="add-o" :size="20" @click="onAddHabitLabelClick" />
      <van-tag type="primary" class="habit-label" mark v-for="item in habit.label" :key="item">{{ item }}</van-tag>
    </van-cell>
    <van-button size="large" type="primary" class="position-bottom" @click="onCreateHabitClick">添加</van-button>
    <van-popup v-model="isAlarmTimePopup" round close-icon-position="top-left" position="bottom" closeable>
      <van-datetime-picker v-model="currentDateTime" type="time"
                           :formatter="dateTimeFormatter" @confirm="onDateTimeConfirm" />
    </van-popup>
    <van-popup v-model="isAlarmDatePopup" round close-icon-position="top-left" position="bottom" closeable>
      <div class="date-tag-container">
        <van-tag size="large" type="primary" :plain="!habit.alarmDate.includes(item)" class="date-tag"
                 @click="onHabitDateTagClick(item)"
                 v-for="item in ['一', '二', '三', '四', '五', '六', '日']" :key="item">星期{{ item }}</van-tag>
      </div>
    </van-popup>
    <van-popup v-model="isLabelPopup" position="center" style="background-color: unset">
      <div class="habit-label-popup">
        <van-field v-model="habitLabel" autofocus clearable placeholder="请输入标签" @input="onHabitLabelInput" />
        <br>
        <van-button size="large" type="primary" @click="onAddLabelClick">添加</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Habit from '@/models/Habit'
import { HABIT_STATUS, RES_CODE } from '@/constant'
import { DatetimePicker, Tag, Toast } from 'vant'
import HabitModule from '@/module/habit'
import ToastError from '@/models/ToastError'

const CURRENT_DATE_TIME = new Date()
enum DATE_TIME_TYPE {
  year = 'year',
  month = 'month',
  day = 'day',
  hour = 'hour',
  minute = 'minute'
}
const DATE_TIME_FORMATTER = {
  [DATE_TIME_TYPE.year]: '年',
  [DATE_TIME_TYPE.month]: '月',
  [DATE_TIME_TYPE.day]: '日',
  [DATE_TIME_TYPE.hour]: '时',
  [DATE_TIME_TYPE.minute]: '分'
}

export default Vue.extend({
  name: 'addHabit',
  data () {
    return {
      habit: new Habit(CURRENT_DATE_TIME.toLocaleTimeString(), '', [], HABIT_STATUS.pending, '', []),
      isAlarmTimePopup: false,
      isAlarmDatePopup: false,
      isLabelPopup: false,
      habitLabel: '',
      currentDateTime: CURRENT_DATE_TIME.toTimeString()
    }
  },
  methods: {
    dateTimeFormatter (type: DATE_TIME_TYPE, val: string) {
      return `${val}${DATE_TIME_FORMATTER[type]}`
    },
    onDateTimeConfirm (value: string) {
      this.isAlarmTimePopup = false
      this.habit.alarmTime = value
    },
    onHabitTitleInput (e: string) {
      this.habit.title = e
    },
    onHabitDetailInput (e: string) {
      this.habit.detail = e
    },
    onHabitAlarmTimeClick () {
      this.isAlarmTimePopup = true
    },
    onHabitAlarmDateClick () {
      this.isAlarmDatePopup = true
    },
    onAddHabitLabelClick () {
      this.isLabelPopup = true
    },
    async onCreateHabitClick () {
      try {
        const label = this.habit?.label?.join('#')
        const msg = this.habit?.validate()
        if (msg) throw new ToastError(msg)
        const res = await HabitModule.addHabit(Object.assign({}, this.habit, { label }))
        Toast(res.code === RES_CODE.success ? '添加成功' : res.msg)
        if (res.code === RES_CODE.success) setTimeout(() => this.$router.back(), 2000)
      } catch (e) {
        console.log(e)
        if (e instanceof ToastError) Toast(e.msg)
      }
    },
    onHabitLabelInput (value: string) {
      this.habitLabel = value
    },
    onAddLabelClick () {
      this.isLabelPopup = false
      this.habit.label.push(this.habitLabel)
      this.habitLabel = ''
    },
    onHabitDateTagClick (item: string) {
      if (this.habit.alarmDate.includes(item)) {
        this.habit.alarmDate = this.habit.alarmDate.filter(tag => tag !== item)
      } else this.habit.alarmDate.push(item)
    }
  },
  components: {
    [DatetimePicker.name]: DatetimePicker,
    [Tag.name]: Tag
  }
})
</script>

<style lang="less" scoped>
  .habit-label-value {
    text-align: left;
  }
  .habit-label {
    margin-right: 0.1rem;
    &:last-child {
      margin-right: 1rem;
    }
  }
  .habit-label-popup {
    width: 80vw;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    padding-top: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .date-tag-container {
    height: 30vh;
    box-sizing: border-box;
    text-align: center;
    padding-top: 1rem;
  }
  .date-tag {
    margin: 0.2rem;
  }
</style>
