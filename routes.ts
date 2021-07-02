import { Context } from "https://deno.land/x/abc@v1.3.2/mod.ts";
import users from "./users.ts";
import {  Payload , Header, create, getNumericDate} from "https://deno.land/x/djwt@v2.2/mod.ts";
import key from './key.ts';

const header: Header = {
    alg: "HS256",
    type: "JWT"
}

export const login = async (ctx: Context) => {
    interface Body {
        username: string;
        password: string
    }
    const { username, password } = await ctx.body as Body;

    for (const user of users){
        if(username === user.username && password === user.password){
            const payload: Payload = {
                iss:user.username, 
                exp: getNumericDate(60*60)
            }
            const jwt = await create(header, payload, key);
            if(jwt){
                ctx.response.status = 200;
                ctx.json({
                    id: user.id,
                    username: user.username, 
                    jwt
                });
            }else{
                ctx.response.status = 500;
                ctx.json({
                    message : 'Internal Server error'
                });
            }
            return;
        }
    }

    ctx.response.status = 422;
    ctx.json({
        message: 'Invalid Username or Password'
    });
}

export const guest = (ctx: Context) => {
    return 'Guest';
}

export const auth = (ctx: Context) => {
    return 'Auth';
}