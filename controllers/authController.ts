import type { Context } from "https://deno.land/x/abc@v1.3.2/mod.ts";

export const login = async (ctx: Context) => {
    interface login {
        email: string;
        password: string;
    }
    const body = await ctx.body;
    if(!body){
        return ctx.json({
            'status': 'error', 
            'message': 'body required email & password'
        },422);
    }
    const { email, password } = body as login;

    console.log(email, password)
    return ctx.customContext
}

export const register = (ctx: Context) => {
    
}