var events = require('events');

var myEmmitter = new events.EventEmitter();

myEmmitter.on("someEvent",function(msg){
    console.log(msg);
});

myEmmitter.emit('someEvent','the event was emmitted!');