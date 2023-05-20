const http = require("http")

http.createServer((req, res) => {
    res.end("this is the fifth time i am working on creating a server")
}).listen(5000)


console.log("after building your server, in your terminal write 'node server' to view it in your console.")