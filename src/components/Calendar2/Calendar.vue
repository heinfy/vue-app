<template>
  <div @touchmove.prevent class="calendar-container">
    <!-- 头部月份选择 -->
    <p class="choose-month">
      <span :class="monthList.indexOf(showMonthActive) === 0 ? '' : 'active-color'" @click="setMonth(-1)">
        &lt; 上个月
      </span>
      <span class="active-color">{{ showMonth }}</span>
      <span
        :class="monthList.indexOf(showMonthActive) === monthList.length - 1 ? '' : 'active-color'"
        @click="setMonth(1)"
      >
        下个月 &gt;
      </span>
    </p>
    <!-- // 日历组件 -->
    <div class="calendar">
      <!-- 日历组件头部 -->
      <ul class="calendar-header">
        <li>日</li>
        <li>一</li>
        <li>二</li>
        <li>三</li>
        <li>四</li>
        <li>五</li>
        <li>六</li>
      </ul>
      <!-- 日历组件主体 -->
      <ul class="calendar-body">
        <li v-for="(item, index) in JSON.parse(calendarData)" :key="index">
          <span
            v-for="(subItem, subIndex) in item"
            :class="[subItem.appo == '1' ? 'soon-time' : '']"
            @click="showInfo(subItem)"
            :key="subIndex"
          >
            <span>{{ subItem.date }}</span>
            <p v-if="subItem.appo == ''"></p>
            <p v-else-if="subItem.appo == '0'">不可约</p>
            <p v-else>可约</p>
          </span>
        </li>
      </ul>
    </div>
    <!-- 底部取消 -->
    <div @click="showInfo('cancel')" class="cancel color-active">取消</div>
  </div>
</template>

<script>
import min from './Calendar-mixins.js'
export default {
  mixins: [min]
}
</script>

<style scoped>
.calendar-container {
  width: 375px;
  background-color: #fff;
  border-radius: 10px;
}

.calendar-container .choose-month {
  width: 375px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #b3bcd8;
  display: flex;
  justify-content: space-between;
}

.calendar-container .choose-month span {
  color: #8a91a4;
  font-size: 14px;
  padding: 0 14px;
}

.calendar-container .choose-month .active-color {
  color: #517df7;
}

.calendar {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.calendar .calendar-header {
  width: 100%;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  color: #1f2845;
}

.calendar .calendar-body {
  width: 100%;
}

.calendar .calendar-body li {
  text-align: center;
  width: 100%;
  height: 40px;
  font-size: 14px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 40px;
  color: #8a91a4;
}

.calendar .calendar-body li span {
  display: block;
  width: 100%;
  height: 12px;
  position: relative;
}

.calendar .calendar-body li span p {
  width: 100%;
  padding-top: 4px;
  font-size: 12px;
}

.calendar .calendar-body li .soon-time {
  color: #517df7;
}

.calendar-container .cancel {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-top: 1px solid #b3bcd8;
  border-radius: 0px 0px 12px 12px;
  font-size: 14px;
  font-weight: 500;
  color: #517df7;
}
</style>
