import { Application, Context } from "https://deno.land/x/abc@v1.3.2/mod.ts";
import { getAllSahams , getSaham, addSaham, updateSaham, deleteSaham} from './controllers/sahamController.ts';
import { login , register} from  './controllers/authController.ts';
// import { authorize } from './middleware/authorize.ts';
const app = new Application();

app.static('/', './public');

app.get('/', async(_ctx: Context) => {
    // await _ctx.file('./public/index.html')
    await _ctx.json({
        'message' :'welcome to index saham create by Rhamad Nursani Sidik'
    });
});
app.post('/login', login)
    .get('/saham', getAllSahams)
    .post('/saham', addSaham)
    .get('/saham/:id', getSaham)
    .put('/saham/:id', updateSaham)
    .delete('/saham/:id', deleteSaham);

app.start({port:3000});