// npm ==> Node Package Manager (mangaes node packages and third part modules in nodejs)

// package.json ==> it manages all the packaages installed in projects as dependencies

// express ==> express is a node js framework.it hasy easy and flecible rounting it helps in connection with many templating engines.

const express = require('express');

const app = express();

app.get('/',function(req, res){
    res.send("This is home page");
});

app.get('/contact',(req, res)=>{
    res.send("this is contact page");
});

app.get('/profiles/:id/:name',(req, res)=>{
    res.send("You requested for id "+req.params.id+ " and name "+req.params.name);
})

app.listen(3000,()=>{
    console.log('server is listening on port 3000');
});