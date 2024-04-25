var BodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo').then(()=>console.log("connected")).catch((err)=>console.log(err));


// create schema => like a blueprint
var todoSchema =  new mongoose.Schema({
    item : String
})
var todo = mongoose.model('TodoItem',todoSchema);

var todoItems  = [];

var urlEncodedParser = BodyParser.urlencoded({extended : false});

module.exports = function(app){
    app.get('/todo',async (req, res)=>{
        console.log("inside get");
        await todo.find().then((data)=>{
            todoItems = data;
            console.log(todoItems)
        }).catch((err)=>console.log(err));
        res.render('todo',{data : todoItems});
    });

    app.post('/todo',urlEncodedParser,async(req, res)=>{
        // console.log("inside post : ",req.body);
        // todoItems.push(req.body);
        let item = req.body;
        await todo(item).save().then((data)=>console.log("saved")).catch((err)=>console.log(err));
        await todo.find().then((data)=>
        {
        todoItems = data;
        }).catch((err)=>console.log(err));
        res.render('todo',{data : todoItems});
        
    });

    app.delete('/todo/:item',(req, res)=>{
        // todoItems = todoItems.filter((todo)=>{
        //     return todo.item.replace(/ /g,'-') != req.params.item;
        // });
        todo.findOneAndDelete({item : req.params.item}).then((data)=>console.log("deleted "+data)).catch((err)=>console.log(err));
        res.json(todoItems);
    });
}