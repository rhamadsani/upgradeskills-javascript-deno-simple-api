import { Application, Context } from "https://deno.land/x/abc@v1.3.2/mod.ts";
import { getAllSahams , getSaham, addSaham, updateSaham, deleteSaham} from './controllers/sahamController.ts';
import { getSahamIndex, getIndex, addIndex, updateIndex , deleteIndex} from './controllers/indexController.ts';
import { login , register} from  './controllers/authController.ts';
// import { authorize } from './middleware/authorize.ts';
const app = new Application();

app.static('/', './public');
app.get('/', async(_ctx: Context) => {
    await _ctx.json({
        'message' :'welcome to index saham create by Rhamad Nursani Sidik'
    });
});

//auth 
app.post('/login', login)
    .post('/register', register);

//user 

//saham
app.get('/saham', getAllSahams)
    .post('/saham', addSaham)
    .get('/saham/:id', getSaham)
    .put('/saham/:id', updateSaham)
    .delete('/saham/:id', deleteSaham);

//index 
app.get('/saham-index/:sahamId', getSahamIndex)
    .get('/index/:id', getIndex)
    .post('/index', addIndex)
    .put('index/:id', updateIndex)
    .delete('index/:id', deleteIndex);

//
app.start({port:3000});