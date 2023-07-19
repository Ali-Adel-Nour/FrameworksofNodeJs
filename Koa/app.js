const Koa = require('koa');
const compose = require('koa-compose');

const app = new Koa();

const loggingMiddleware = async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log('%s %s - %s', ctx.method, ctx.url, ms);
};

const responseMiddleware = async (ctx) => {
  ctx.body = "Hello, world!";
};

const middleware = compose([loggingMiddleware, responseMiddleware]);

app.use(middleware);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
