const Router = require('koa-router')

const router = new Router()

router.prefix('/cors')

router.get('/', (ctx, next) => {
  ctx.set('exposed-header', 'header')

  /**
   * 这三个头必须在实际请求中体现
   */
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8001')
  ctx.set('Access-Control-Allow-Credentials', true)
  ctx.set('Access-Control-Expose-Headers', 'exposed-header')
  
  console.log(ctx.headerSent)
  ctx.body = '跨域了吗'
})


/**
 * 非简单请求下,option请求头内包含所有Access-Control-Allow-*
 * prelight通过后，实际请求中不需要携带以上头信息
 */
router.options('/', (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8001')
  ctx.set('Access-Control-Allow-Credentials', true)
  ctx.set('Access-Control-Allow-Methods', 'get')
  ctx.set('Access-Control-Max-Age', 10)  //  缓存验证请求的有效期，很重要！

  // preflight请求头Access-Control-Allow-Headers中的头必须是服务端设置返回头的子集
  // 不允许超出范围
  ctx.set('Access-Control-Allow-Headers', 'X-Custom-Header, haha')  

  ctx.body = '验证通过'
})

module.exports = router