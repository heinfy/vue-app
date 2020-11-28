<template>
  <div class="main-container">
    <header-component :title="'日历组件'"></header-component>
    <div class="cal-ctn">
      <div class="btn" @click="changeFlag">显示日历组件</div>
      <p>* 数据为模拟假数据</p>
      <!-- 日历组件 -->
      <calendar
        v-if="calendarVisible"
        class="calendar-box"
        :propsInfoList="JSON.stringify(propsInfoList)"
        :propMonthList="JSON.stringify(propMonthList)"
        @showInfo="getScheduleInfo"
      >
      </calendar>
    </div>
  </div>
</template>

<script>
import calendar from '@/components/Calendar2/Calendar.vue'
export default {
  name: 'calendar2',
  components: {
    calendar: calendar
  },
  data() {
    return {
      calendarVisible: false,
      propsInfoList: [
        '2019-07-01',
        '2019-07-08',
        '2019-07-09',
        '2019-07-10',
        '2019-08-01',
        '2019-08-12',
        '2019-08-20',
        '2019-08-30',
        '2019-09-01',
        '2019-09-10',
        '2019-09-20',
        '2019-09-23',
        '2019-09-26',
        '2019-09-30'
      ],
      propMonthList: ['2019-07', '2019-08', '2019-09']
    }
  },
  methods: {
    getScheduleInfo(info) {
      console.log(info)
    },
    changeFlag() {
      this.calendarVisible = !this.calendarVisible
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 44px;
  .cal-ctn {
    .btn {
      display: block;
      background-color: #f5f5f5;
      width: 100px;
      height: 30px;
      line-height: 30px;
      margin: 20px auto;
      border: 1px solid #a5c5b5;
      border-radius: 2px;
    }
    p {
      font-size: 14px;
      color: #ef4123;
    }
    .calendar-box {
      background-color: #f5f5f5;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 15;
    }
  }
}
</style>
