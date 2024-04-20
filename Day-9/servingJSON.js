var http = require('http');

var server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    const myObj = {
        name : 'Ushma',
        age:23
    }
    res.end(JSON.stringify(myObj));
});

server.listen(3000,'localhost',()=>{
    console.log("server is listening on port 3000");
});