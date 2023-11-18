const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const searchEngineTool = require("./searchEngineTool");

const app = new Koa();
app.use(bodyParser());

app.use(async ctx => {
  // the parsed body will store in ctx.request.body
  // if nothing was parsed, body will be an empty object {}

  let question = ctx.request.body.q;
  let engine = ctx.request.body.engine ? ctx.request.body.engine : 'baidu';
  ctx.body = { q: question, results: await searchEngineTool(question, engine) };
});

app.listen(3000);