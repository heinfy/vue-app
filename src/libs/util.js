/* eslint-disable */
let util = {}
util.isType = function () {
  var isAndroid
  var u = navigator.userAgent, app = navigator.appVersion
  isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
  return isAndroid
}
util.isiOS = function () {
  var isiOS
  var u = navigator.userAgent
  isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  return isiOS
}
util.getType = function (obj) {
  // tostring会返回对应不同的标签的构造函数
  var toString = Object.prototype.toString
  var map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  if (obj instanceof Element) {
    return 'element'
  }
  return map[toString.call(obj)]
}
util.deepClone = function (data) {
  var type = util.getType(data)
  var obj
  if (type === 'array') {
    obj = []
  } else if (type === 'object') {
    obj = {}
  } else {
    // 不再具有下一层次
    return data
  }
  if (type === 'array') {
    for (var i = 0, len = data.length; i < len; i++) {
      obj.push(util.deepClone(data[i]))
    }
  } else if (type === 'object') {
    for (var key in data) {
      obj[key] = util.deepClone(data[key])
    }
  }
  return obj
}
util.dateFtt = function (fmt, date) {
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)) }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  }
  return fmt
}
export default util
