
const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

http.createServer((req, resp) => {

    if (req.url === '/') {

        fs.readFile('form.html', 'utf-8', (error, data) => {

            if (error) {
                resp.writeHead(500, { "content-type": "text/plain" });
                resp.end("Server Error");
                return;
            }

            resp.writeHead(200, { "content-type": "text/html" });
            resp.end(data);   // ✅ end here
        });

    } else if (req.url === '/submit' && req.method === 'POST') {

        let databody = [];

        req.on('data', (chunk) => {
            databody.push(chunk);
        });

        req.on('end', () => {

            let rawdata = Buffer.concat(databody).toString();

            let readableData = queryString.parse(rawdata);

            console.log("Parsed Data:", readableData);

            resp.writeHead(200, { "content-type": "text/html" });
            resp.end('<h1>Data Submitted</h1>');  // ✅ end inside here
        });
    }

}).listen(3200, () => {
    console.log("Server running on http://localhost:3200");
});

// <=
// ===
// =>

// ================================sem code====================================


// const http = require('http');
// const fs = require('fs');

// http.createServer((req, resp) => {

//     if (req.url == '/') {

//         fs.readFile('form.html', 'utf-8', (error, data) => {

//             if (error) {
//                 resp.writeHead(500, { "content-type": "text/plain" });
//                 resp.end("Server Error");
//                 return;
//             }

//             resp.writeHead(200, { "content-type": "text/html" });
//             resp.write(data);
         
//         });

//     } else if (req.url == '/submit') {

//         let databody = [];

//         req.on('data', (chonk)=>{
//             databody.push(chonk);
//         });

//          req.on('end',()=>{
//            let rawdata = Buffer.concat(databody).toString();
//             console.log(rawdata);
//          })
//         resp.writeHead(200, { "content-type": "text/html" });
//         resp.write('<h1>Data Submitted</h1>');
//         resp.end();

//     }

// }).listen(3200, () => {
//     console.log("Server running on http://localhost:3200");
// });

// const http = require('http');

// http.createServer((req, resp) => {

//     console.log(req.url);

//     if (req.url == '/') {
//         resp.writeHead(200, { "content-type": "text/html" })
//         resp.write(`
        
//         <form action="/submit"  method="post">
    
//         <input type="text" placeholder="enter name"  name="name"/>
//         <input type="text" placeholder="enter email"  name="email"/>
//         <button>submit</button>
        
//         </form>
        
//         `)
//         resp.end();

//     }else if(req.url=='/submit'){

//         resp.write('<h1>data submited</h1>')
//     }


// }).listen(3200)