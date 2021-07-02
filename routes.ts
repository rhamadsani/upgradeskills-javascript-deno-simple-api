import { Context } from "https://deno.land/x/abc@v1.3.2/mod.ts";

export const login = async (ctx: Context) => {
    interface Body {
        username: string;
        password: string
    }
    // const { username, password } = await ctx.body as Body;
    const  value  = await ctx.body as Body;

    console.log(value.username);
}

export const guest = (ctx: Context) => {
    ctx.response.body = 'Guest';
}

export const auth = (ctx: Context) => {
    ctx.response.body = 'Auth';
}