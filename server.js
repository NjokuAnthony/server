const http = require("http")

http.createServer = ((request, respond) => {
    respond.end("this is the sixth time i am working on creating a server")
}).listen(6000)


console.log("well don Tony")