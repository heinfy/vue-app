/**
 * 判断是不是某app
 */
export const isXbj = () => /某app名字/i.test(navigator.userAgent)

/**
 * 获取区间随机整数
 */
export const randomFrom = (lowerValue, upperValue) => {
  return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue)
}

/**
 * 取得地址栏参数
 */
export const getParams = name => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  console.log(window.location)
  const r = window.location.search.substr(1).match(reg)
  if (r != null) return decodeURIComponent(r[2])
  else return null
}

/**
 * 获取地址栏参数（#前后都可以）
 */
export const getParamsFn = name => {
  // 未传参，返回空
  if (!name) return null
  // 查询参数：先通过search取值，如果取不到就通过hash来取
  let after = window.location.search
  after = after.substr(1) + '&' + window.location.hash.split('?')[1]
  // 地址栏URL没有查询参数，返回空
  if (!after) return null
  // 如果查询参数中没有"name"，返回空
  if (after.indexOf(name) === -1) return null
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  // 当地址栏参数存在中文时，需要解码，不然会乱码
  const r = decodeURI(after).match(reg)
  // 如果url中"name"没有值，返回空
  if (!r) return null
  return r[2]
}

/**
 * 是否为移动终端、ios终端、android终端
 */
export const versions = () => {
  const u = navigator.userAgent; let os
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  if (isiOS) os = 'ios'
  else if (isAndroid) os = 'android'
  else os = ''
  return os
}

/**
 * 获取需要的时间格式 ｜如：2020年5月23日0时30分00秒
 * @param { String } timestramp 时间戳
 * @param { String } format 类型
 */
export const getDate = (timestramp, format = 'yyyy-MM-dd hh:mm:ss') => {
  const fillZero = num => num.toString().padStart(2, '0')
  const time = new Date(timestramp)
  const pattern = {
    y: time.getFullYear(),
    M: time.getMonth() + 1,
    d: time.getDate(),
    h: time.getHours(),
    m: time.getMinutes(),
    s: time.getSeconds(),
    i: time.getMilliseconds()
  }
  for (var k in pattern) {
    const regexp = new RegExp(`(${k}+)`)
    const replaceFn = (match) => {
      // 其他的都判断匹配长度是否大于1，大于则补充0，否则直接输出
      return match.length === 1 ? pattern[k] : fillZero(pattern[k])
    }
    // 将字符串按照正则匹配替换成函数返回值
    format = format.replace(regexp, replaceFn)
  }

  return format
}

/**
 * 获取倒计时时间 | 调用：countdown(+new Date(), 1591550903637, 'dd日h时mm分s秒i毫秒')
 * @param { String } startTime 时间戳
 * @param { String } endTime 时间戳
 * @param { String } format 返回时间格式
 * @returns { String | Boolean } 返回值
 */
export const countdown = (startTime, endTime, format = 'dd日h时mm分s秒i毫秒') => {
  const flag = startTime - endTime < 0
  if (flag) {
    // 获取毫秒数差
    const timeFrame = endTime - startTime
    // 获取天数差
    const days = Math.floor(timeFrame / (24 * 3600 * 1000))
    // 获取除去天数的毫秒数
    const leaveDayTimes = timeFrame - days * 24 * 3600 * 1000
    // 获取小时差
    const hours = Math.floor(leaveDayTimes / (3600 * 1000))
    // 获取除去小时的毫秒数
    const leaveHourTimes = leaveDayTimes - hours * 3600 * 1000
    // 获取分钟差
    const minutes = Math.floor(leaveHourTimes / (60 * 1000))
    // 获取除去分钟的毫秒数
    const leaveMinuteTimes = leaveHourTimes - minutes * 60 * 1000
    // 获取秒差
    const seconds = Math.floor(leaveMinuteTimes / 1000)
    // 获取去除秒数的毫秒数
    const milliseconds = Math.floor((leaveMinuteTimes - seconds * 1000) / 10)
    let pattern = {
      m: minutes,
      s: seconds,
      i: milliseconds
    }
    const fillZero = num => num.toString().padStart(2, '0')
    if (/d+/ig.test(format)) pattern = { d: days, h: hours, ...pattern }
    else pattern = { h: days * 24 + hours, ...pattern }
    for (var k in pattern) {
      const regexp = new RegExp(`(${k}+)`)
      const replaceFn = (match) => match.length === 1 ? pattern[k] : fillZero(pattern[k])
      format = format.replace(regexp, replaceFn)
    }
    return format
  } else {
    return false
  }
}
