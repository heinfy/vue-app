import Mock from 'mockjs'

Mock.mock('/api/goodslist', 'get', {
  status: 200,
  message: '获取商品成功',
  'data|2-20': [
    {
      'id|+1': 0, // id: '@increment(1)',
      name: '@cword(2, 10)',
      price: '@natural(2, 10)',
      count: '@natural(200, 1000)',
      img: '@dataImage(80x80)'
    }
  ]
})

Mock.mock('/api/addgoods', 'post', aption => {
  // aption 请求参数
  console.log(aption)

  return Mock.mock({
    status: 200,
    message: '@cword(2, 10)'
  })
})

Mock.mock(/\/api\/getgoods/, 'get', option => {
  // option 请求参数
  console.log(option)
  const res = /\/api\/getgoods\/(\d+)/.exec(option.url)
  console.log(res)
  return Mock.mock({
    status: 200,
    message: '@cword(2, 10)',
    data: {
      id: res[1] - 0,
      name: '@fruit()',
      price: '@natural(2, 10)',
      count: '@natural(200, 1000)',
      img: '@dataImage(80x80)'
    }
  })
})
