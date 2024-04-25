var BodyParser = require('body-parser');

var todoItems = [{item : 'cooking'},{item : 'reading'}];
var urlEncodedParser = BodyParser.urlencoded({extended : false});

module.exports = function(app){
    app.get('/todo',(req, res)=>{
        console.log("inside get");
        res.render('todo', {data : todoItems});
    });

    app.post('/todo',urlEncodedParser,(req, res)=>{
        console.log("inside post : ",req.body);
        todoItems.push(req.body);
        res.json(todoItems);
        
    });

    app.delete('/todo/:item',(req, res)=>{
        todoItems = todoItems.filter((todo)=>{
            return todo.item.replace(/ /g,'-') != req.params.item;
        });
        res.json(todoItems);
    });
}