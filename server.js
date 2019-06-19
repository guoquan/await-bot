const Koa = require('koa');
const logger = require('koa-logger')
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const Boom = require('boom');

const { PORT, } = require('./config');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  await next(); // make sure request.body is ready
  ctx.body = {message:'OK', code:0, request:ctx.request};
});

app.use(logger());
app.use(router.routes());
app.use(bodyParser());

app.use(router.allowedMethods({
  throw: true,
  notImplemented: () => new Boom.notImplemented(),
  methodNotAllowed: () => new Boom.methodNotAllowed()
}));

app.listen(PORT);
