const Router = require('koa-router')

const router = new Router()

router.prefix('/cors')
router.get('/', (ctx, next) => {
  // 
})

module.exports = router