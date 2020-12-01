export const addJS = cb => {
  const url = 'https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js'
  const script = document.createElement('script')
  const fnName = `tx-web-map${Math.random().toString().replace('.', '')}`
  script.src = url + `?callback=${fnName}`
  document.body.appendChild(script)
  script.onload = () => {
    cb()
    document.body.removeChild(script)
  }
  script.onerror = () => {
    setTimeout(() => {
      document.body.removeChild(script)
    }, 500)
  }
}

export const getPosition = (cb, errcb) => {
  // eslint-disable-next-line
  const geolocation = new qq.maps.Geolocation('GZTBZ-BYWCX-32Z4O-Z3RDI-ZZMD5-NFFWK', 'myapp')
  if(geolocation) {
    const options = { timeout: 3000, failTipFlag: true }
    geolocation.getLocation(position => {
      document.body.removeChild(document.getElementsByTagName('iframe')[0])
      position.status = 1
      if(typeof cb === 'function') cb(position)
    }, error => {
      if(typeof errcb === 'function') errcb({ error: error, status: 0 })
    }, options)
  } else {
    errcb({ status: 0 })
  }
}
