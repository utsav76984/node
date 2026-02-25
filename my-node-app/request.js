
const { ifError } = require('assert/strict');
const http = require('http');


http.createServer((req, resp)=>{
    console.log(req.method);

    if(req.url === '/'){
    resp.write("<h1>home page</h1>")

    }else if(req.url === '/login'){

         resp.write("<h1>login page</h1>")
    }else{

        resp.write("other page")
    }

    resp.end();

}).listen(5000)