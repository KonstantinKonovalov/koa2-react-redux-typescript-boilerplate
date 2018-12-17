import * as Koa from 'koa';
import { api } from './middlewares/api';
import { favicon } from './middlewares/favicon';
import { timings } from './middlewares/timings';
import { publicRouter, protectedRouter } from './routes';

const assets = require('./assets.json');

const app = new Koa();

app.proxy = true;

app.context.assets = assets;

app.use(async (ctx: any, next: Function) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
});

app.use(favicon());
app.use(timings());
app.use(api());
app.use(publicRouter.routes());
app.use(protectedRouter.routes());

export { app };
