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
  if (reg.test(id)) {
    const checkProvince = id.substr(0, 2)
    if (checkProvince in provinces) {
      const coefficient = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      const coeOfValue = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
      const idCardArray = id.split('')
      let idCardCeoSum = 0
      for (let i = 0; i < 17; i++) {
        idCardCeoSum += idCardArray[i] * coefficient[i]
      }
      const lastValue = coeOfValue[idCardCeoSum % 11]
      return lastValue.toLowerCase() === id.substr(17, 1).toLowerCase()
    } else {
      return false
    }
  } else {
    return id.length === 0 ? 'id为空' : false
  }
}
