import { Application, Context } from "https://deno.land/x/abc@v1.3.2/mod.ts";
import { getAllBooks , getBook} from './controllers/bookController.ts';
const app = new Application();

//listen to port
app.static('/', './public');

app.get('/', async(_ctx: Context) => {
    await _ctx.file('./public/index.html')
});
app.get('/books', getAllBooks).
    get('/books/:id', getBook);

app.start({port:3000});