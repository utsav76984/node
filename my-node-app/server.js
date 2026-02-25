const http = require("http");

http.createServer((req , resp)=>{
    resp.write("<h1>hello oneplus</h1>")

    resp.end("hello utsav ")

}).listen(6351);





