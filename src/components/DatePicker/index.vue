<template>
  <div class="date-picker" v-click-outside>
    <input type="text" :value="formatFate" />
    <div class="pannel" v-if="isVisible">
      <div class="pannel-nav">
        <span @click="changeYear(-1)">&lt;</span>
        <span @click="changeMonth(-1)">&lt;&lt;</span>
        <span>{{ time.year }}年</span>
        <span>{{ time.month + 1 }}月</span>
        <span @click="changeMonth(1)">&gt;&gt;</span>
        <span @click="changeYear(1)">&gt;</span>
      </div>
      <div class="pannel-content">
        <div class="week">
          <span v-for="k in 7" :key="'_' + k" class="cell">
            {{ weekDays[k - 1] }}
          </span>
        </div>
        <div class="days">
          <div v-for="i in 6" :key="i">
            <span
              v-for="j in 7"
              :key="j"
              @click="chooseDate(visibleDays[(i - 1) * 7 + (j - 1)])"
              class="cell-hover"
              :class="[
                {
                  'not-current-month': !isCurrentMonth(visibleDays[(i - 1) * 7 + (j - 1)])
                },
                { today: isToday(visibleDays[(i - 1) * 7 + (j - 1)]) },
                { select: isSelect(visibleDays[(i - 1) * 7 + (j - 1)]) }
              ]"
            >
              {{ visibleDays[(i - 1) * 7 + (j - 1)].getDate() }}
            </span>
          </div>
        </div>
      </div>
      <div class="pannel-footer" @click="setNow">今天</div>
    </div>
  </div>
</template>

<script>
import * as utils from './utils'
export default {
  directives: {
    clickOutside: {
      bind(el, bindings, vnode) {
        let handler = e => {
          if (el.contains(e.target)) {
            if (!vnode.context.isVisible) vnode.context.focus()
          } else {
            if (vnode.context.isVisible) vnode.context.blur()
          }
        }
        el.handler = handler
        document.addEventListener('click', handler)
      },
      unbind(el) {
        document.removeEventListener('click', el.handler)
      }
    }
  },
  data() {
    let { year, month } = utils.getYearMonthDay(this.value)
    return {
      weekDays: ['日', '一', '二', '三', '四', '五', '六'],
      time: { year, month },
      isVisible: false
    }
  },
  props: {
    value: {
      type: Date,
      default: () => new Date()
    }
  },
  computed: {
    formatFate() {
      let { year, month, day } = utils.getYearMonthDay(this.value)
      return `${year}-${month + 1}-${day}`
    },
    visibleDays() {
      // 获取当前月第一天是周几
      let { year, month } = utils.getYearMonthDay(utils.getDate(this.time.year, this.time.month, 1))
      let currentFirstDay = utils.getDate(year, month, 1)
      let day = currentFirstDay.getDay()
      let week = day === 0 ? 7 : day
      let startDay = currentFirstDay - week * 60 * 60 * 1000 * 24
      let arr = []
      for (let i = 0; i < 42; i++) {
        arr.push(new Date(startDay + i * 60 * 60 * 1000 * 24))
      }
      return arr
    }
  },
  methods: {
    focus() {
      this.isVisible = true
    },
    blur() {
      this.isVisible = false
    },
    isCurrentMonth(date) {
      let { year, month } = utils.getYearMonthDay(utils.getDate(this.time.year, this.time.month, 1))
      let { year: y, month: m } = utils.getYearMonthDay(date)
      return year === y && month === m
    },
    isToday(date) {
      let { year, month, day } = utils.getYearMonthDay(new Date())
      let { year: y, month: m, day: d } = utils.getYearMonthDay(date)
      return year === y && month === m && day === d
    },
    chooseDate(date) {
      this.time = utils.getYearMonthDay(date)
      this.$emit('input', date)
      this.blur()
    },
    isSelect(date) {
      let { year, month, day } = utils.getYearMonthDay(date)
      let { year: y, month: m, day: d } = utils.getYearMonthDay(this.value)
      return year === y && month === m && day === d
    },
    changeMonth(change) {
      let d = utils.getDate(this.time.year, this.time.month, 1)
      d.setMonth(d.getMonth() + change)
      this.time = utils.getYearMonthDay(d)
    },
    changeYear(change) {
      let d = utils.getDate(this.time.year, this.time.month, 1)
      d.setFullYear(d.getFullYear() + change)
      this.time = utils.getYearMonthDay(d)
    },
    setNow() {
      let now = new Date()
      this.time = utils.getYearMonthDay(now)
      this.$emit('input', now)
      this.blur()
    }
  }
}
</script>

<style lang="less" scoped>
.date-picker {
  margin-top: 20px;
  input {
    border: 1px solid gray;
    margin-left: 10px;
    height: 24px;
    line-height: 24px;
    padding-left: 5px;
    width: 140px;
    font-size: 16px;
  }
  .pannel {
    width: 32 * 7px;
    position: absolute;
    z-index: 10;
    box-shadow: 2px 2px 2px pink, -2px -2px 2px pink;
    background-color: #f6f6f6;
    .pannel-nav {
      height: 30px;
      display: flex;
      justify-content: space-around;
      span {
        cursor: pointer;
        user-select: none;
      }
    }
    .pannel-content {
      .week {
        .cell {
          width: 32px;
          height: 32px;
          display: inline-block;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          color: #333333;
        }
      }
      .cell-hover {
        width: 32px;
        height: 32px;
        display: inline-block;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: blue;
        &:hover {
          border: 1px solid pink;
          box-sizing: border-box;
        }
      }
      .not-current-month {
        color: #aaaaaa;
      }
      .today {
        background-color: pink;
      }
      .select {
        background-color: salmon;
      }
    }
    .pannel-footer {
      height: 30px;
      text-align: center;
    }
  }
}
</style>
