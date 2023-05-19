const http = require("http")

http.createServer((request, respond) => {
    respond.end("Learning Node.js looks interesting for the main-time")
}).listen(8000)

console.log("node js is an open source package that helps to build backend")