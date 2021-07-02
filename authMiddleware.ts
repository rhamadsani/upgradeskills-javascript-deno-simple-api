import { MiddlewareFunc , Context} from "https://deno.land/x/abc@v1.3.2/mod.ts";
import { verify } from "https://deno.land/x/djwt@v2.2/mod.ts";
import key from './key.ts';

export const authMiddleware: MiddlewareFunc = (next) =>
  async (ctx: Context) => {
    const headers: Headers = ctx.request.headers;
    const authorization = headers.get('Authorization');

    if(!authorization){
        ctx.response.status = 401;
        return;
    }

    const jwt = authorization.split(' ')[1];
    if(!jwt){
        ctx.response.status = 401;
        return;
    }
    const payload = await verify(jwt, key, "HS256")
    if(!payload){
        ctx.response.status = 401;
        return;
    }
    return await next(ctx);
  }
