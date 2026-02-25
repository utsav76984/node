
const http = require("http")

http.createServer((req, resp) => {

    const age=20;
    resp.setHeader('contact-types', "text/html")
    resp.write(`
        <html>
        <head></head>
        <body>
            <h1>hello utsav kalathiya</h1>
            <h2>`+age+`</h2>
            <h2>`+new Date+`</h2>
            
        </body>
        </html>`)
    resp.end();
}).listen(4800)