export const checkIdCard = function(id) {
  const reg = /^\d{6}(18|19|20)\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  const provinces = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外'
  }
  if(reg.test(id)) {
    const checkProvince = id.substr(0, 2)
    if(checkProvince in provinces) {
      const coefficient = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      const coeOfValue = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
      const idCardArray = id.split('')
      let idCardCeoSum = 0
      for(let i = 0; i < 17; i++) {
        idCardCeoSum += idCardArray[i] * coefficient[i]
      }
      const lastValue = coeOfValue[idCardCeoSum % 11]
      return lastValue.toLowerCase() === id.substr(17, 1).toLowerCase()
    } else {
      return false
    }
  } else {
    return id.length === 0 ? '证件号为空' : false
  }
}

export const checkPhoneNo = function(no) {
  const reg = /^((13[0-9])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|147|166|198|199)\d{8}$/
  console.log(reg.test(no))
  if(reg.test(no)) {
    return true
  } else {
    return no.length === 0 ? '手机号为空' : false
  }
}

/**
 * 参数说明：
 * @param {Number} number - 要格式化的数字
 * @param {Number} decimals - 保留几位小数
 * @param {String} decPoint - 小数点符号
 * @param {String} thousandsSep - 千分位符号
 */
export const formatMoney = function(amount, decimals = 2, decPoint = '.', thousandsSep = ';') {
  let number = amount
  if(/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(number) || /^$/.test(number)) {
    number = (number + '').replace(/[^0-9+-Ee.]/g, '')
    const n = !isFinite(+number) ? 0 : +number
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals) // 获取绝对值
    const sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep // 默认小数点符号
    const dec = (typeof decPoint === 'undefined') ? '.' : decPoint // 默认千分位符号
    let s = ''
    const toFixedFix = function(n, prec) {
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
    console.log(s.join(dec))
    alert('格式化后的金额：' + s.join(dec))
  } else {
    alert('格式错误')
  }
}
