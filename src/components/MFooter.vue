<template>
  <van-tabbar v-model="active" @change="onTabbarChange" v-show="isFooter">
    <van-tabbar-item name="task">
      任务
      <template #icon="props">
        <van-icon :name="props.active ? 'clock' : 'clock-o'" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item name="habit">
      习惯
      <template #icon="props">
        <van-icon :name="props.active ? 'award' : 'award-o'" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item name="profile" icon="user-o" :badge="msgCnt" :class="{ 'badge': msgCnt === 0 }">
      我的
      <template #icon="props">
        <van-icon :name="props.active ? 'manager' : 'user-o'" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import Vue from 'vue'
import app from '@/main'
import { TabbarItem, Tabbar } from 'vant'
import { ROUTES_MAP } from '@/router'
import layout from '@/layout'
import { mapState } from 'vuex'
import { MessageI } from '@/interface/model'

enum FOOTER_ROUTES {
  task = 'task',
  taskDetail = 'taskDetail'
}

export default Vue.extend({
  name: 'mFooter',
  data: () => ({
    active: 'task'
  }),
  methods: {
    onTabbarChange (e: FOOTER_ROUTES) {
      const path = ROUTES_MAP[e]
      if (!path && app) app.$router.push(ROUTES_MAP.notFound)
      else if (app.$route.path !== path && app) app.$router.push(ROUTES_MAP[e])
    }
  },
  watch: {
    '$route' (newVal) {
      const path = newVal.path.slice(1)
      this.active = path === '' ? 'task' : path
    }
  },
  computed: {
    isFooter () {
      return layout.FOOTER_PAGES.includes(this.$route.path)
    },
    ...mapState(['message']),
    msgCnt () {
      const tmp = this.message.filter((item: MessageI) => item.status === 0)
      return tmp.length
    }
  },
  components: {
    'van-tabbar': Tabbar,
    'van-tabbar-item': TabbarItem
  }
})
</script>

<style lang="less">
  .van-tabbar-item.badge .van-info {
    opacity: 0;
  }
</style>
