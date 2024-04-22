const express = require('express');

const app = express();
app.set("view engine",'ejs');

app.get('/',(req, res)=>{
    res.sendFile(__dirname+"/home.html");
})

app.get('/contact',(req, res)=>{
    res.sendFile(__dirname+"/contact.html");
})

app.get('/profiles/:name/:age/:job', (req, res)=>{
    res.render('profiles',{name : req.params.name,age:req.params.age,job:req.params.job});
})

app.listen(3000, ()=>{
    console.log("server is listening on port 3000");
});

