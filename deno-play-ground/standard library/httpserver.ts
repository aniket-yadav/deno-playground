// http module

import { serve } from "https://deno.land/std/http/server.ts";

const server  = serve({ port: 3000});
console.log('listening for requests on port 3000');

for await (const req of server){
    //console.log("request made");
    const url = req.url;

  req.respond({ body:`hello world\' you visited ${url}`});

}