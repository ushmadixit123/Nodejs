const express = require('express');

const app = express();

app.set("view engine","ejs");


app.get('/',(req, res)=>{
    // console.log(req.query);
    res.render('home',{data : req.query});
});
app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});