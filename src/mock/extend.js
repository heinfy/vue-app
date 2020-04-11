import { Random } from 'mockjs'
// 創建自定義 Mock 函数
Random.extend({
  // 自定义函数名：function 函数
  fruit: function() {
    // eslint-disable-next-line
    const arr = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
    return this.pick(arr)
  }
})
