import { Application, Context } from "https://deno.land/x/abc@v1.3.2/mod.ts";
import { getAllSahams , getBook} from './controllers/sahamController.ts';
const app = new Application();

app.static('/', './public');

app.get('/', async(_ctx: Context) => {
    // await _ctx.file('./public/index.html')
    await _ctx.json({
        'message' :'welcome to index saham create by Rhamad Nursani Sidik'
    });
});
app.get('/saham', getAllSahams).
    get('/saham/:id', getBook);

app.start({port:3000});