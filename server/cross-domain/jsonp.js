const Router = require('koa-router')
const queryString = require('querystring')

const router = new Router()

router.prefix('/cross_domain')
router.get('/', (ctx, next) => {
  const qs = queryString.parse(ctx.querystring)
  
  // 跨域获取的服务端数据
  const test = {
    name: '小狼'
  }

  /**
   * 当前跨域请求中获取前端定义的函数名，并把请求数据转为json
   * json进行序列化后做为参数传入callback函数中
   */
  ctx.body = `${qs.callback}(${JSON.stringify(test)})`
})

module.exports = router