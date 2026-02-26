const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {

    fs.readFile('./index.html', 'utf-8', (err, data) => {

        if (err) {
            console.log(err);
            resp.writeHead(500, { "Content-Type": "text/plain" });
            return resp.end("Internal Server Error");
        }

        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.end(data);
    });

}).listen(3200);

console.log("Server running at http://localhost:3200");