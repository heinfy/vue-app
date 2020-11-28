<template>
  <div class="main-container">
    <header-component :title="'金钱格式化和日期选择组件'"></header-component>
    <div class="curr-ctn">
      <div class="check">
        <label for="currency">金额</label>
        <input id="currency" type="text" @blur="checkMoney()" v-model="amount" />
        <span v-show="show">请输入正确的金额</span>
      </div>
      <!-- <div class="btn" @click='numberFormat(amount, 2, ".", ",")'>格式化</div> -->
      <div class="btn" @click="numberFormat(amount, 2)">点击格式化</div>
      <div class="show">{{ formatNum }}</div>
      <!-- v-model 可以替换 :value 和 @input -->
      <!-- :value="now" @input="val=>value=val" ===== v-model="now" -->
      <date-picker v-model="now"></date-picker>
    </div>
  </div>
</template>

<script>
import DatePicker from '../../components/DatePicker'
/* eslint-disable */
export default {
  name: 'currency',
    components: {
    'date-picker': DatePicker
  },
  data() {
    return {
      // 输入的金额
      amount: '',
      // 提示金额是否正确，span标签的显示与隐藏
      show: false,
      // 格式化后的金额
      formatNum: '',
      // DatePicker 组件
      now: new Date()
    }
  },
  methods: {
    checkMoney() {
      let number = this.amount
      // 金额正确进入 if
      if(/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(number) || /^$/.test(number)) {
        this.show = false
        // console.log('yes')
      } else {
        this.show = true
        // console.log('no')
      }
    },
    /**
     * 参数说明：
     * @param {Number} number - 要格式化的数字
     * @param {Number} decimals - 保留几位小数
     * @param {String} decPoint - 小数点符号
     * @param {String} thousandsSep - 千分位符号
     */
    numberFormat(number, decimals, decPoint, thousandsSep) {
      if(this.show) {
        alert('格式错误')
      } else {
        number = (number + '').replace(/[^0-9+-Ee.]/g, '')
        let n = !isFinite(+number) ? 0 : +number
        let prec = !isFinite(+decimals) ? 0 : Math.abs(decimals) // 获取绝对值
        let sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep // 默认小数点符号
        let dec = (typeof decPoint === 'undefined') ? '.' : decPoint // 默认千分位符号
        let s = ''
        let toFixedFix = function(n, prec) {
          var k = Math.pow(10, prec)
          return '' + Math.ceil(n * k) / k
        }
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
        var re = /(-?\d+)(\d{3})/
        while(re.test(s[0])) {
          s[0] = s[0].replace(re, '$1' + sep + '$2')
        }
        if((s[1] || '').length < prec) {
          s[1] = s[1] || ''
          s[1] += new Array(prec - s[1].length + 1).join('0')
        }
        this.formatNum = s.join(dec)
      }
    }
  }
}
</script>

<style scoped>
.main-container {
  margin-top: 44px;
}
.main-container .check {
  width: 300px;
  margin: 44px auto 0;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  background-color: #e5e5c9;
}
.curr-ctn {
  width: 375px;
  height: 623px;
  overflow-y: scroll;
}
.main-container .check label {
  font: 400 normal 14px/30px "Microsoft YaHei";
}
.main-container .check input {
  margin-left: 10px;
  height: 24px;
  line-height: 24px;
  padding-left: 5px;
  width: 140px;
  font: 400 normal 16px "SimHei";
}
.main-container .check span {
  padding-left: 15px;
  font-size: 12px;
  color: #ef4123;
}
.main-container .btn {
  display: block;
  background-color: #f5f5f5;
  width: 100px;
  height: 30px;
  line-height: 30px;
  margin: 20px auto;
  border: 1px solid #a5c5b5;
  border-radius: 2px;
}
.main-container .show {
  margin: 10px auto 0;
  width: 140px;
  height: 32px  ;
  text-align: center;
  line-height: 32px ;
  background-color: #f5f5f5;
  font-size: 14px;
}
</style>
