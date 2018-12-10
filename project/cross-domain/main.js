/**
 * cors简单请求
 */
function simple() {
  ajax({
    url: 'http://localhost:8000/cors/',
    header: {
      // 'Access-Control-Allow-Origin': 'null'
    },
    cb: (res) => {
      console.log('res', res)
    }
  }) 
}


/**
 * cors非简单请求
 */
function unsimple() {
  ajax({
    url: 'http://localhost:8000/cors/',
    header: {
      'X-Custom-Header' : 'value',
    },
    cb: (res) => {
      console.log('res', res.getAllResponseHeaders())
    }
  })
}
unsimple()