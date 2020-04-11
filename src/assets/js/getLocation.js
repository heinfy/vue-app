let getPosition = function(cb, errcb) {
  // eslint-disable-next-line
  let geolocation = new qq.maps.Geolocation('GZTBZ-BYWCX-32Z4O-Z3RDI-ZZMD5-NFFWK', 'myapp')
  if (geolocation) {
    let options = { timeout: 1000, failTipFlag: true }
    /* eslint-disable */
    geolocation.getLocation(position => {
      console.log('success定位成功执行的方法', position)
      let lon = position.lng
      let lat = position.lat
      let city = position.city
      let province = position.province
      let location = { lon, lat, city, province }
      if(typeof cb === 'function') cb(location)
    }, error => {
      console.log('定位失败执行的方法 error', error)
      if(typeof errcb === 'function') errcb()
    }, options)
  } else {
    console.log('未获取位置对象')
  }
}
export { getPosition }
