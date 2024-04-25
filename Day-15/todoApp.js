const express = require('express');
const app = express();
const BodyParser = require('body-parser');
app.set("view engine","ejs");
var todoController = require('./controllers/todoController');
const urlEncodedParser = BodyParser.urlencoded({extended : false});

app.use(express.static('./public'));
todoController(app);
app.listen(4000,()=>{
    console.log("server is listening on port 3000");
});