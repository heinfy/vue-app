export default {
  name: 'calendar',
  props: {
    propsInfoList: String,
    propMonthList: String
  },
  data() {
    return {
      monthList: [],
      showMonthActive: '',
      showMonth: '',
      infoList: '',
      calendarData: []
    }
  },
  created() {
    this.monthList = JSON.parse(this.propMonthList)
    this.infoList = JSON.parse(this.propsInfoList)
    // console.log(this.monthList, this.infoList)
    const date = this.getToday()
    const time = date.slice(0, 2)
    this.getCalendar(...time)
  },
  mounted() {
    this.showMonthActive = this.monthList[0]
    this.showMonth = this.formatMonth(this.monthList[0])
  },
  methods: {
    // 头部月份选择
    /* eslint-disable */
    setMonth(num) {
      let _this = this
      const curDate = _this.deformat(_this.showMonth)
      let currentIndex = _this.monthList.indexOf(curDate) + num
      if (currentIndex !== -1 && currentIndex < _this.monthList.length) {
        const result = _this.monthList[currentIndex]
        _this.getCalendar(...result.split('-'))
        _this.showMonthActive = result
        _this.showMonth = _this.formatMonth(result)
      } else {
        return false
      }
    },
    // 反格式化时间
    deformat(date) {
      let reg = /[\u4E00-\u9FA5]{1,}/gi
      const dateArr = date.replace(reg, '-').split('-')
      dateArr.pop()
      const dateStr = dateArr[0] + '-' + String(dateArr[1]).padStart(2, '0')
      return dateStr
    },
    // 格式化显示时间
    formatMonth(date) {
      const dateArr = date.split('-')
      const dateStr = dateArr[0] + '年' + Number(dateArr[1]) + '月'
      return dateStr
    },
    // 日历组件
    getCalendar(year, month) {
      let _this = this
      const firstDate = new Date(year, month - 1, 1)
      const firstDay = firstDate.getDay()
      const isLeapYear = year % 100 == 0 ? (year % 400 == 0 ? 1 : 0) : (year % 4 == 0 ? 1 : 0)
      const monthArray = [31, 28 + isLeapYear, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      const weeekLines = Math.ceil((monthArray[month - 1] + firstDay) / 7)
      let calendar = []
      for (let i = 0; i < weeekLines; i++) {
        let weeekLinesInfo = []
        for (let j = 0; j < 7; j++) {
          const cellNo = i * 7 + j
          const datePerLine = cellNo - firstDay + 1
          if (datePerLine <= 0 || datePerLine > monthArray[month - 1]) {
            let outOfMonth = {
              'appo': '',
              'time': `${year}-${month}`,
              'date': ''
            }
            weeekLinesInfo[j] = outOfMonth
          } else {
            let day = (datePerLine + '').padStart(2, '0')
            let inOfMonth = {
              "appo": '0',
              "time": `${year}-${month}`,
              "date": day
            }
            let everyDate = `${year}-${month}-${inOfMonth.date}`
            const reservations = _this.infoList
            for (let k = 0; k < reservations.length; k++) {
              // console.log(everyDate, reservations[k]);
              if (everyDate == reservations[k]) {
                inOfMonth.appo = '1'
              }
            }
            weeekLinesInfo[j] = inOfMonth
          }
        }
        calendar.push(weeekLinesInfo)
      }
      // window.console.log(calendar)
      _this.calendarData = JSON.stringify(calendar)
    },
    // 格式化当前日期 YYYY-MM-DD
    getToday() {
      let nowDate = new Date()
      let yy = nowDate.getFullYear().toString()
      let mm = (nowDate.getMonth() + 1 + '').padStart(2, '0')
      let dd = (nowDate.getDate() + '').padStart(2, '0')
      let hh = nowDate.getHours().toString().padStart(2, '0')
      let mt = (nowDate.getMinutes() + '').padStart(2, '0')
      let ss = (nowDate.getSeconds() + '').padStart(2, '0')
      return [yy, mm, dd, hh, mt, ss]
      // return `${yy}-${mm}-${dd}-${hh}-${mt}-${ss}`
    },
    // 调用父组件定义的方法
    showInfo(info) {
      if (info === 'cancel') return this.$emit('showInfo', 'cancel')
      if (info.appo === '' || info.appo === '0') return
      this.$emit('showInfo', `${info.time}-${info.date}`)
    }
  }
}
