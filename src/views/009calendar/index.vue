<template>
  <div class="main-container">
    <header-component :title="'日历组件'"></header-component>
    <!-- 日历 -->
    <div class="cal-ctn">
      <calendar v-if="calendarVisible" @getDateInfo="getDateInfo" :propsInfoList="propsInfoList" :propsTime="propsTime">
      </calendar>
    </div>
  </div>
</template>

<script>
import calendar from '@/components/Calendar/Calendar.vue'
export default {
  name: 'test',
  components: {
    'calendar': calendar
  },
  data() {
    return {
      calendarVisible: true,
      propsTime: '',
      propsInfoList: '',
      middle: [
        {
          id: '232',
          date: '2019-09-01',
          info: '我要去吃大餐'
        },
        {
          id: '292',
          date: '2019-10-06',
          info: '我要去吃大餐'
        },
        {
          id: '292',
          date: '2019-10-25',
          info: '我要去吃大餐'
        },
        {
          id: '369',
          date: '2019-11-30',
          info: '我要去吃大餐'
        }
      ]
    }
  },
  created() {
    // 模拟首屏ajax请求，将当月数据传入组件中
    this.propsInfoList = JSON.stringify(this.middle)
    this.propsTime = this.getToday()
  },
  mounted() {
    window.alert('测试时间为19年 9|10|11月，完成是在10月')
  },
  methods: {
    // 格式化当前日期 YYYY-MM-DD
    getToday() {
      let nowDate = new Date()
      let yy = nowDate.getFullYear().toString()
      let mm = (nowDate.getMonth() + 1 + '').padStart(2, '0')
      let dd = (nowDate.getDate() + '').padStart(2, '0')
      // let hh = nowDate.getHours().toString().padStart(2,'0')
      // let mt = (nowDate.getMinutes() + '').padStart(2,'0')
      // let ss = (nowDate.getSeconds() + '').padStart(2,'0')
      return `${yy}-${mm}-${dd}` // -${hh}-${mt}-${ss}
    },
    // 组件传值
    getDateInfo(year, month) {
      let _this = this
      _this.propsTime = `${year}-${month}`
      _this.calendarVisible = false
      // 模拟点击选取其他年月的ajax，假数据，只能显示19年 5 6 7三个月
      setTimeout(() => {
        _this.propsInfoList = []
        let middle
        if(month === '05') {
          middle = [
            {
              id: '232',
              date: '2019-05-10',
              info: '我要去吃小餐'
            }
          ]
        } else if(month === '06') {
          middle = _this.middle
        } else if(month === '07') {
          middle = [
            {
              id: '232',
              date: '2019-07-10',
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
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 44px;
}
</style>
