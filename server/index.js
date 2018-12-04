// 第三方
const Koa = require('koa')
const logger = require('koa-logger')

// 自定义
const router = require('./cross-domain')

const app = new Koa()

app.use(logger())
app.use(router.routes())

app.listen(8001)