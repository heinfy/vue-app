const getYearMonthDay = date => {
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return { year, month, day }
}

const getDate = (year, month, day) => {
  return new Date(year, month, day)
}
export { getYearMonthDay, getDate }

// https://www.bilibili.com/video/av67080602?from=search&seid=476622485596738350
