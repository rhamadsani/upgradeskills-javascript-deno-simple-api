import { Application } from "https://deno.land/x/abc@v1.3.2/mod.ts";
import { login, guest , auth } from "./routes.ts";
import {authMiddleware} from "./authMiddleware.ts";
const app = new Application();

app.post('/login', login)
.get('/guest', guest)
.get('/auth', auth, authMiddleware);

app.start({port:3000});