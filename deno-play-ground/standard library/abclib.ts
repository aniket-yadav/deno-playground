import { Application, Context } from "https://deno.land/x/abc@v1.0.3/mod.ts";
import {
get_all_books,
get_book,
delete_book,
create_book
} from './controllers/bookControllers.ts';

const app = new Application();


app.static('/','public');

//router

app.get('/',async (ctx: Context)=>{
    
    
    await ctx.file('./public/index.html');
});

app.get('/books',get_all_books)
.get('/books/:id',get_book)
.post('/books',create_book)
.delete('/books/:id',delete_book)


//listen to port 
app.start({port:3000});

