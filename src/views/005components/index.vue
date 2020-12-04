<template>
  <div class="main-container">
    <header-component :title="'组件'"></header-component>
    <div class="load-ctn">
      <button class="cpt" @click="loadingAnimate">loading 动画</button>
      <button class="cpt" @click="showCalendar1">calendar1 日历</button>
      <button class="cpt" @click="showCalendar2">calendar2 日历</button>
      <button class="cpt" @click="showToast(1)">Toast - 1</button>
      <button class="cpt" @click="showToast(2)">Toast - 2</button>
      <button class="cpt" @click="showToast(3)">Toast - 3</button>
      <!-- v-model 可以替换 :value 和 @input -->
      <!-- :value="now" @input="val=>value=val" ===== v-model="now" -->
      <date-picker v-model="now"></date-picker>
      <loading v-show="loadAnimation" class="loading" :size="40"></loading>

      <!-- calendar1 日历组件 -->
      <calendar1
        v-if="calendarVisible"
        @getDateInfo="getDateInfo"
        :propsInfoList="propsInfoList"
        :propsTime="propsTime"
      />
      <!-- calendar2 日历组件 -->
      <calendar2
        v-if="calendarVisible2"
        class="calendar-box"
        :propsInfoList="JSON.stringify(propsInfoList2)"
        :propMonthList="JSON.stringify(propMonthList2)"
        @showInfo="getScheduleInfo2"
      />
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading/'
import calendar1 from '@/components/Calendar/Calendar.vue'
import calendar2 from '@/components/Calendar2/Calendar.vue'
import MyToast from '@/components/MyToast'
import DatePicker from '@/components/DatePicker'
export default {
  name: 'components',
  components: {
    Loading,
    calendar1,
    calendar2,
    DatePicker
  },
  data() {
    return {
      loadAnimation: false,
      // 日历组件1
      calendarVisible: false,
      propsTime: '',
      propsInfoList: '',
      middle: [
        {
          id: '232',
          date: '2020-11-01',
          info: '我要去吃大餐'
        },
        {
          id: '292',
          date: '2020-12-25',
          info: '我要去吃大餐'
        },
        {
          id: '369',
          date: '2021-01-02',
          info: '我要去吃大餐'
        }
      ],
      // 日历组件2
      calendarVisible2: false,
      propsInfoList2: [
        '2019-07-08',
        '2019-08-12',
        '2019-09-23'
      ],
      propMonthList2: ['2019-07', '2019-08', '2019-09'],
      // DatePicker
      now: new Date()
    }
  },
  created() {
    // 模拟首屏ajax请求，将当月数据传入组件中
    this.propsInfoList = JSON.stringify(this.middle)
    this.propsTime = this.getToday()
  },
  methods: {
    loadingAnimate() {
      this.loadAnimation = true
      setTimeout(() => {
        this.loadAnimation = false
      }, 2000)
    },
    // 日历组件1
    showCalendar1() {
      this.calendarVisible = !this.calendarVisible
    },
    getToday() {
      const nowDate = new Date()
      const yy = nowDate.getFullYear().toString()
      const mm = (nowDate.getMonth() + 1 + '').padStart(2, '0')
      const dd = (nowDate.getDate() + '').padStart(2, '0')
      return `${yy}-${mm}-${dd}`
    },
    // 组件传值
    getDateInfo(year, month) {
      const _this = this
      _this.propsTime = `${year}-${month}`
      _this.calendarVisible = false
      // 模拟点击选取其他年月的ajax
      setTimeout(() => {
        _this.propsInfoList = []
        let middle
        if(month === '01') {
          middle = [
            {
              id: '232',
              date: '2021-01-10',
              info: '我要去吃小餐'
            }
          ]
        } else if(month === '02') {
          middle = _this.middle
        } else if(month === '03') {
          middle = [
            {
              id: '232',
              date: '2021-03-10',
              info: '我要去吃小餐'
            }
          ]
        } else {
          middle = ''
        }
        _this.propsInfoList = JSON.stringify(middle)
        _this.calendarVisible = true
      }, 100)
    },
    onValuesChange(picker, values) {
      if(values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    },
    // showToast
    showToast(type) {
      if(type === 1) {
        MyToast({ name: '严重警告' }).$on('results', text => {
          console.log(text)
        })
      } else if(type === 2) {
        this.$message.info('普通消息')
        // this.$message.error('错误消息')
        // this.$message.warning('警告消息')
        // this.$message.success('成功消息')
      } else if(type === 3) {
        this.$toast('这是一条测试信息', 1500)
      }
    },
    // 日历组件2
    getScheduleInfo2(info) {
      console.log(info)
      if(info === 'cancel') this.showCalendar2()
    },
    showCalendar2() {
      this.calendarVisible2 = !this.calendarVisible2
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 44px;
  .load-ctn {
    .cpt {
      display: block;
      background-color: #f5f5f5;
      min-width: 200px;
      height: 44px;
      line-height: 44px;
      margin: 20px auto 0;
      border: 1px solid #a5c5b5;
      border-radius: 2px;
    }
    .loading {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 100;
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
