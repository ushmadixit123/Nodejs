const http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var myreadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8'); myreadStream.pipe(res);
});

server.listen(3000, 'localhost', () => {
     console.log("server is listening on port 3000"); 
    });