import type { Context } from "https://deno.land/x/abc@v1.3.2/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.2.4/mod.ts";
import { addUserModel, User } from "../models/users.ts";

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

export const register = async (ctx: Context) => {
    let {name, email, password } = await ctx.body as User;
    if(!name || !email || !password){
        return ctx.json({
            'status': 'error',
            'message' : 'body required key name, email & password'
        }, 422);
    }
    if(name == '' || email == '' || password == ''){
        return ctx.json({
            'status': 'error',
            'message' : 'body required value name, email & password'
        }, 422);
    }
    password = await bcrypt.hash(password);
    return ctx.json(addUserModel({name, email, password}));
}