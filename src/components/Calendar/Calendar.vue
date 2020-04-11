<template>
  <div class="calendar-container">
    <!-- // 显示本月日期 2019-6，可点击 -->
    <div class="show-date" @click="clickData">{{ showDate }}</div>
    <!-- // 今天的日期 2019-6-6 -->
    <div class="now-time">今日：{{ exactTime }}</div>
    <!-- // 日历组件 -->
    <div class="calendar">
      <!-- // 日历组件头部 -->
      <ul class="calendar-header">
        <li>日</li>
        <li>一</li>
        <li>二</li>
        <li>三</li>
        <li>四</li>
        <li>五</li>
        <li>六</li>
      </ul>
      <!-- // 日历组件主体 -->
      <ul class="calendar-body">
        <li class="calendar-row" v-for="(item, index) in JSON.parse(calendarData)" :key="index">
          <!-- // 注意给 不同的日子加类名
          // 周末：weekend  工作日：weekday
          // 过去的事项 already-time 今天的事项 exact-time 将来的事项 soon-time
          // 给有事项的日子实现点击弹框，显示这天的事项内容 -->
          <span
            v-for="(subItem, subIndex) in item"
            :class="[
              subIndex == 0 || subIndex == 6 ? 'weekend' : 'weekday',
              subItem.type === '1' ? 'exact-time' : '',
              subItem.type == '0' ? 'already-time' : '',
              subItem.type === '2' ? 'soon-time' : ''
            ]"
            @click="showInfo(subItem)"
            :key="subIndex"
          >
            {{ subItem.date }}
          </span>
        </li>
      </ul>
    </div>
    <!-- // popup 和 picker 搭配，实现 年月 选择   mint-ui 库 -->
    <mt-popup v-model="popupVisible" position="bottom">
      <mt-picker :slots="slots" :showToolbar="true" ref="picker">
        <img src="@/assets/images/calendar/picker_cancel.png" class="picker_cancel" @click="cancelFunc" />
        <img src="@/assets/images/calendar/picker_sure.png" class="picker_sure" @click="sureFunc" />
      </mt-picker>
    </mt-popup>
  </div>
</template>

<script>
/* eslint-disable */
import { MessageBox } from 'mint-ui'
export default {
  name: "calendar-test",
  props: {
    propsTime: String,
    propsInfoList: String
  },
  data() {
    return {
      // 接收父组件传值 '2019-06'
      time: '',
      // 接收父组件数据列表
      infoList: '',
      // 日历组件
      calendarData: [],
      // 页面展示的 '年-月'
      showDate: '',
      // 当前的 '年-月-日'
      exactTime: '',
      // pupop 显示
      popupVisible: false,
      // picker 数据
      slots: []
    }
  },
  created() {
    // 拿到父组件的 list
    this.infoList = this.propsInfoList
    // 拿到父组件的 '2019-06'
    this.time = this.propsTime.split('-')
    // 获取今天 '2019-06-06'
    const date = this.getToday()
    this.exactTime = date.slice(0,3).join('-')
    // 日历组件
    this.getCalendar(...(this.time))
    // 组装 picker 数组
    this.getSlotsArray(...(date.slice(0,2)))
  },
  methods: {
    // 日历组件
    getCalendar(year, month) {
      let _this = this
      // 转存当天 '2019-06-06'
      const rightNow = _this.exactTime
      // 拼接 显示日历上的年月 '2019-05'
      _this.showDate = `${year}-${month}`
      // 获取当月的第一天
      const firstDate = new Date(year, month - 1, 1)
      // 获取第一天周几
      const firstDay = firstDate.getDay()
      // 判断是否为闰年
      const isLeapYear = year % 100 == 0? year % 400 == 0? 1: 0: year % 4 == 0 ? 1: 0
      // 获取今年每个月的天数
      const monthArray = [31, 28 + isLeapYear, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      // 计算星期的行数
      const weeekLines =Math.ceil((monthArray[month - 1] + firstDay)/7)
      let calendar = []
      for(let i = 0; i < weeekLines; i++) {
        let weeekLinesInfo = []
        for(let j = 0; j < 7; j++) {
          // 计算每个单元格的序号
          const cellNo = i * 7 + j
          // 计算每个单元格应该填充的日期
          const datePerLine = cellNo - firstDay + 1
          // 排除空白格
          if(datePerLine <= 0 || datePerLine > monthArray[month - 1]) {
            // 不存在的显示为 null 和 ''
            let outOfMonth = {
              "type" : 'null',
              "date" : ''
            }
            weeekLinesInfo[j] = outOfMonth
          } else {
            let day = (datePerLine + '').padStart(2,'0')
            let inOfMonth = {
              "type" : '',
              "date" : day,
              "isDone": '',
              "infor": ''
            }
            // 今天背景变成一个红圈,这是今天 => rightNow
            const propsDate = `${year}-${month}-${day}`
            // 比较每月的今天
            if(propsDate == rightNow){
              inOfMonth.type = "1"
            }
            const reservations = JSON.parse(_this.infoList)
            // 将 父组件传的 list 赋值在日历上
            // 预定列表 和 当月每一天比较
            for(let k = 0; k < reservations.length; k++) {
              if(propsDate == reservations[k].date){
                // inOfMonth.type = "1"
                inOfMonth.infor = reservations[k].info
                if(rightNow == reservations[k].date) {
                  inOfMonth.type = "1"
                  inOfMonth.isDone = "doing"
                } else if (rightNow > reservations[k].date) {
                  inOfMonth.type = "0"
                  inOfMonth.isDone = "pass"
                } else if (rightNow < reservations[k].date) {
                  inOfMonth.type = "2"
                  inOfMonth.isDone = "will"
                }
              }
            }
            weeekLinesInfo[j] = inOfMonth
          }
        }
        calendar.push(weeekLinesInfo)
      }
      window.console.log(calendar)
      // 即将遍历二维数组
      _this.calendarData = JSON.stringify(calendar)
    },
    // 格式化当前日期 YYYY-MM-DD
    getToday() {
      let nowDate = new Date()
      let yy = nowDate.getFullYear().toString()
      let mm = (nowDate.getMonth() + 1 + '').padStart(2,'0')
      let dd = (nowDate.getDate() + '').padStart(2,'0')
      let hh = nowDate.getHours().toString().padStart(2,'0')
      let mt = (nowDate.getMinutes() + '').padStart(2,'0')
      let ss = (nowDate.getSeconds() + '').padStart(2,'0')
      return [yy, mm, dd, hh, mt, ss]
      // return `${yy}-${mm}-${dd}-${hh}-${mt}-${ss}`
    },
    // 组装 picker 数组
    getSlotsArray(year, month){
      let _this = this
      let yearArray = []
      for(let i = -10 ; i <= 10 ; i ++){
        yearArray.push(year - 1 + i)
      }
      let monthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      let slots = [
        {
          flex: 1,
          values:yearArray,
          textAlign: 'right',
          className:"slot1",
          defaultIndex: 11
        },
        {
          divider: true,
          content: '-',
          className: 'slot2'
        },
        {
          flex: 1,
          values:monthArray,
          textAlign: 'left',
          className:"slot3",
          defaultIndex: month - 1
        }
      ]
      _this.slots = slots
      console.log('_this.slots', _this.slots)
    },
    // 显示日期弹窗
    clickData(){
      alert('postcss-px-to-viewport 和 picker 貌似不兼容')
      this.popupVisible = true
    },
    // 取消按钮
    cancelFunc(){
      this.popupVisible = false;
    },
    // 确认按钮
    sureFunc() {
      let _this = this
      _this.popupVisible = false
      const clickData = _this.$refs.picker.getValues()
      const year = clickData[0] + ''
      const month = (clickData[1] + '').padStart(2,'0')
      const day = _this.time[2]
      _this.getDateInfo(year, month)
      _this.getCalendar(year, month)
    },
    // 调用父组件定义的方法
    getDateInfo(year, month) {
      this.$emit('getDateInfo', year, month)
    },
    // 点击展示某天的事项信息
    showInfo(info) {
      let _this = this
      const infor = info
      if(infor.infor) {
        const [year, month] = _this.showDate.split('-')
        console.log(year, month, info)
        const titleDate = `${year}-${month}-${info.date}`
        const preview = info.infor
        MessageBox({
          title: titleDate,
          message: preview,
          showCancelButton: false,
          closeOnClickModal: true
        })
      }
    }
  }
}
</script>

<style>
/* 日期控件*/
.mint-popup,
.mint-popup-bottom {
  width: 375px;
}
.calendar-container .picker {
  width: 375px;
}
.calendar-container .picker-toolbar {
  width: 375px;
  border-bottom: 1px solid #ef4123;
  height: 50px;
  background-color: #ffffff;
}
.calendar-container .picker-items {
  background-color: #ffffff;
}
.picker_cancel {
  float: left;
  width: 40px;
  margin-top: 8px;
  margin-left: 10px;
}

.picker_sure {
  float: right;
  width: 40px;
  margin-top: 8px;
  margin-right: 10px;
}
</style>

<style scoped>
.show-date {
  width: 120px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  font-size: 14px;
  /* vue-cli2.x 报错，但是在vue-cli3.x没影响 */
  background-clip: text;
  color: transparent;
  color: #3b3b3b;
  border: 1px solid #42b983;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #42b983;
}

.now-time {
  height: 30px;
  line-height: 30px;
  font: 400 normal 14px 'SourceHanSansCN-Bold/SimSun/SimHei/Microsoft YaHei';
  background-clip: text;
  color: #333;
}

.calendar-container {
  width: 375px;
  height: 622px;
  background-color: #f5f5f5;
}

.calendar {
  width: 375px;
  padding: 5px 0;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 10px 10px #42b983;
}

.calendar .calendar-header {
  width: 375px;
  height: 32px;
  line-height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5px 0;
  text-align: center;
  font: 700 normal 14px 'SimSun/SimHei/Microsoft YaHei';
  color: #42b983;
}

.calendar .calendar-body {
  width: 375px;
}

.calendar .calendar-body li {
  text-align: center;
  width: 375px;
  height: 32px;
  font-size: 16px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 32px;
}

.calendar .calendar-body li span {
  display: block;
  width: 100%;
  height: 32px;
  line-height: 32px;
  position: relative;
}

.calendar .calendar-body li .weekday {
  color: #333333;
}

.calendar .calendar-body li .weekend {
  color: #666666;
}

.calendar .calendar-body li span::after {
  content: '';
  display: block;
  height: 24px;
  width: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.calendar .calendar-body li .exact-time::after {
  border: 2px solid #f47920;
}

.calendar .calendar-body li .already-time::after {
  border: 2px solid #b2b2b2;
}

.calendar .calendar-body li .soon-time::after {
  border: 2px solid #007acc;
}
</style>
