import { Middleware } from 'koa';
import * as send from 'koa-send';

export const favicon = (): Middleware => async (ctx, next) => {
    if (ctx.path !== '/favicon.ico') {
        return next();
    }

    await send(ctx, ctx.path, {
        maxAge: 1.2e9
    });
};
