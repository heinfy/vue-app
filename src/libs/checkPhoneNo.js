export const checkPhoneNo = function(no) {
  const reg = /^((13[0-9])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|147|166|198|199)\d{8}$/
  console.log(reg.test(no))
  if (reg.test(no)) {
    return true
  } else {
    return no.length === 0 ? '手机号为空' : false
  }
}
