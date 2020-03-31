import { TASK_STATUS } from '@/constant'
<template>
  <div class="container">
    <van-nav-bar left-text="图表分析" left-arrow @click-left="onNavBarClickLeft" />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div id="chart"></div>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { Tab, Tabs, Toast } from 'vant'
import * as R from 'ramda'
import { HABIT_STATUS, RES_CODE, TASK_STATUS, TASK_STATUS_VIEW } from '@/constant'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/chart/pie'
import Task from '@/models/Task'
import TaskModule from '@/module/task'
import HabitModule from '@/module/habit'
import Habit from '@/models/Habit'

const ECHARTS_OPTIONS = {
  backgroundColor: '#fff',
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  }
}
const ALL_TASK_OPTIONS_SERIES = {
  name: '任务结果',
  type: 'pie',
  radius: '55%',
  center: ['50%', '30%'],
  roseType: 'radius',
  label: {
    color: 'rgba(0, 0, 0, 0.6)'
  },
  labelLine: {
    lineStyle: {
      color: 'rgba(0, 0, 0, 0.6)'
    },
    smooth: 0.2,
    length: 10,
    length2: 20
  },
  itemStyle: {
    shadowBlur: 200,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    color: function (index: any) {
      const colorList = ['red', 'orange', 'yellow', 'green', 'purple', 'indigo']
      return colorList[index.dataIndex]
    }
  },
  animationType: 'scale',
  animationEasing: 'elasticOut',
  animationDelay: () => Math.random() * 200
}
const CHART_MARGIN_TOP = 180
const CHART_HEIGHT = 320

type ChartDataT = { value: number; name: string; label: TASK_STATUS }
type ChartT = {
  setOption: (options: any) => {};
  resize: (options: any) => {};
}
interface DataI {
  activeTab: string;
  tabs: Array<string>;
  taskData: Array<ChartDataT>;
  habitData: Array<ChartDataT>;
  chart: ChartT;
  isLoading: boolean;
}

const taskData: Array<ChartDataT> = [
  { value: 0, name: TASK_STATUS_VIEW[TASK_STATUS.pending], label: TASK_STATUS.pending },
  { value: 0, name: TASK_STATUS_VIEW[TASK_STATUS.running], label: TASK_STATUS.running },
  { value: 0, name: TASK_STATUS_VIEW[TASK_STATUS.complete], label: TASK_STATUS.complete },
  { value: 0, name: TASK_STATUS_VIEW[TASK_STATUS.cancel], label: TASK_STATUS.cancel },
  { value: 0, name: TASK_STATUS_VIEW[TASK_STATUS.failed], label: TASK_STATUS.failed }
]
const habitData: Array<ChartDataT> = [
  { value: 0, name: TASK_STATUS_VIEW[TASK_STATUS.pending], label: TASK_STATUS.pending },
  { value: 0, name: TASK_STATUS_VIEW[TASK_STATUS.running], label: TASK_STATUS.running },
  { value: 0, name: TASK_STATUS_VIEW[TASK_STATUS.complete], label: TASK_STATUS.complete },
  { value: 0, name: TASK_STATUS_VIEW[TASK_STATUS.cancel], label: TASK_STATUS.cancel },
  { value: 0, name: TASK_STATUS_VIEW[TASK_STATUS.failed], label: TASK_STATUS.failed }
]

export default Vue.extend({
  name: 'analysisChart',
  data: (): DataI => ({
    isLoading: false,
    activeTab: '',
    tabs: ['任务', '习惯'],
    taskData,
    habitData,
    chart: { setOption: Function, resize: Function }
  }),
  methods: {
    updateChart (...data: Array<Array<ChartDataT>>) {
      this.chart.setOption({
        ...ECHARTS_OPTIONS,
        title: [
          {
            subtext: '任务统计',
            left: '50%',
            top: '0',
            textAlign: 'center'
          },
          {
            subtext: '习惯统计',
            left: '50%',
            top: CHART_HEIGHT,
            textAlign: 'center'
          }
        ],
        series: [
          {
            data: data[0],
            ...ALL_TASK_OPTIONS_SERIES,
            center: ['50%', CHART_MARGIN_TOP]
          },
          {
            data: data[1],
            ...ALL_TASK_OPTIONS_SERIES,
            center: ['50%', CHART_MARGIN_TOP + CHART_HEIGHT]
          }
        ]
      })
    },
    async onRefresh () {
      let res = await TaskModule.viewTasks()
      res = await HabitModule.viewHabits()
      Toast(res.code === RES_CODE.success ? '刷新成功' : res.msg)
      this.isLoading = false
    },
    updateTaskData (tasks: Array<Task>) {
      const tmp = {
        [TASK_STATUS.pending]: 0,
        [TASK_STATUS.running]: 0,
        [TASK_STATUS.failed]: 0,
        [TASK_STATUS.complete]: 0,
        [TASK_STATUS.cancel]: 0
      }
      tasks.forEach((item: Task) => { tmp[item.status]++ })
      this.taskData = this.taskData.map((item): ChartDataT => ({ name: item.name, value: tmp[item.label], label: item.label }))
    },
    updateHabitData (habits: Array<Habit>) {
      const tmp = {
        [HABIT_STATUS.pending]: 0,
        [HABIT_STATUS.running]: 0,
        [HABIT_STATUS.failed]: 0,
        [HABIT_STATUS.complete]: 0,
        [HABIT_STATUS.cancel]: 0
      }
      habits.forEach((item: Habit) => { tmp[item.status]++ })
      this.habitData = this.habitData.map((item): ChartDataT => ({ name: item.name, value: tmp[item.label], label: item.label }))
    }
  },
  mounted (): void {
    this.chart = echarts.init(document.getElementById('chart'))
    this.chart.resize({ height: CHART_HEIGHT * 2 })
    this.updateTaskData(this.tasks)
    this.updateHabitData(this.habits)
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  computed: {
    ...mapState(['tasks', 'habits'])
  },
  watch: {
    taskData (newVal: Array<ChartDataT>) {
      if (newVal) {
        this.updateChart(R.clone(newVal).sort((a, b) => a.value - b.value), this.habitData)
      }
    },
    tasks (newVal) {
      if (newVal) this.updateTaskData(newVal)
    },
    habitData (newVal: Array<ChartDataT>) {
      if (newVal) {
        this.updateChart(this.taskData, R.clone(newVal).sort((a, b) => a.value - b.value))
      }
    },
    habits (newVal) {
      if (newVal) this.updateHabitData(newVal)
    }
  }
})
</script>

<style lang="less" scoped>
  #chart {
    height: 100%;
    overflow-y: scroll;
  }
</style>
