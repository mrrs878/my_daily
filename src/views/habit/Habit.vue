<template>
  <div class="container">
    <div class="empty" v-show="habits.length === 0">空空如也~</div>
    <van-button type="primary" class="position-bottom footer" size="large" @click="onAddHabitClick">添加习惯</van-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ROUTES_MAP } from '@/router'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'habit',
  methods: {
    onAddHabitClick () {
      this.$router.push(ROUTES_MAP.addHabit)
    }
  },
  computed: {
    ...mapState(['habits'])
  }
})
</script>

<style lang="less" scoped></style>
