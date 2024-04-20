const http = require('http');
const fs = require('fs');



var server = http.createServer((req, res) => {
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let myreadStream = fs.createReadStream(__dirname + '/home.html');
        myreadStream.pipe(res);

    }
    else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let myreadStream = fs.createReadStream(__dirname + '/contact.html');
        myreadStream.pipe(res);
    }
    else if (req.url === '/ninjas') {
        const myObj = [{ name: 'Niya', age: 23 }, { name: 'Ram', age: 24 }];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(myObj));
    }
    else {
        res.writeHead(404,{'Content-Type':'text/html'});
        let myreadStream = fs.createReadStream(__dirname + '/404Page.html');
        myreadStream.pipe(res);
    }
});

server.listen(3000,'localhost',()=>{
    console.log("server is listening on port 3000");
})