import { Application, Context } from "https://deno.land/x/abc@v1.3.2/mod.ts";

const app = new Application();

app.post('/login', (ctx:Context) => {
    ctx.response.body =  'succes';
})
.get('/guest', ctx => {
    ctx.response.body = 'Guest Success';
})
.get('/auth', ctx => {
    ctx.response.body = 'Auth Success';
});

app.start({port:3000});