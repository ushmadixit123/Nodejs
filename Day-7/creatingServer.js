const http = require('http');

var server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Happy node js learning!");
});
server.listen(3000,'localhost',()=>{
    console.log("server is listening n port 3000");
})