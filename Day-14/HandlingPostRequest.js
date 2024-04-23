const express = require('express');
const app = express();
const BodyParser = require('body-parser');
app.set("view engine","ejs");
var urlEncodedParser = BodyParser.urlencoded({extended : false});

app.get('/',(req, res)=>{
    res.render('profile');
})
app.post('/profile',urlEncodedParser,(req, res)=>{
    console.log(req.body);
    res.render('result-profile',{data : req.body});
})

app.listen(3000,()=>{
    console.log("server is listening on port 3000");
});