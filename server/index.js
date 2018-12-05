// 第三方
const Koa = require('koa')
const logger = require('koa-logger')

// 自定义
// const jsonpRouter = require('./cross-domain/jsonp')
const corsRouter = require('./cross-domain/cors')

const app = new Koa()

app.use(logger())
app.use(corsRouter.routes())

app.listen(8001)