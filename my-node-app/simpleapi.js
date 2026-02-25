const http = require("http")
const { json } = require("stream/consumers")


    const userData = [
        {
            name: 'utsav',
            age: '20',
            email: 'utsav@gmail.com'
        },


        {
            name: 'parth',
            age: '21',
            email: 'parth@gmail.com'
        },


        {
            name: 'jay',
            age: '25',
            email: 'jay@gmail.com'
        }
    ]

http.createServer((req, resp) => {

    resp.setHeader('Content-type','application/json')
    resp.write(JSON.stringify(userData))
    resp.end();


}).listen(6100)