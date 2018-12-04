const Router = require('koa-router')

const router = new Router()

router.prefix('/cross_domain')
router.get('/', (ctx, next) => {
  ctx.body = 'hehehe'
})

console.log(router.routes())
module.exports =  router