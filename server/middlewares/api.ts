import axios from 'axios';
import { Middleware } from 'koa';

export const api = (): Middleware => function apiMiddleware(ctx, next) {
    const apiClient = axios.create({
        baseURL: ctx.backendURL.href,
        maxRedirects: 0
    });

    const setTiming = (url: string) => {
        const current = ctx.timings.find(x => x.url === url);

        if (current) {
            current.end = Date.now();
        }
    };

    apiClient.interceptors.response.use(
        response => {
            setTiming(response.request.path);

            return response;
        },
        err => {
            setTiming(err.request.path);

            return Promise.reject(err);
        }
    );

    ctx.apiClient = apiClient;

    return next();
};
