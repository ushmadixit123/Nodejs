const express = require('express');

const app = express();
app.set("view engine",'ejs');

app.get('/',(req, res)=>{
    res.render('index');
})

app.get('/contact',(req, res)=>{
    res.render('contact');
})

app.get('/profiles/:name/:age/:job', (req, res)=>{
    const hobies = ['cyclig','reading','cooking'];
    res.render('profiles',{name : req.params.name,age:req.params.age,job:req.params.job,Hobbies : hobies});
})

app.listen(3000, ()=>{
    console.log("server is listening on port 3000");
});

