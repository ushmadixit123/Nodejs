// normal function declaration =====

function sayHi(){
    console.log("Hello from nodejs");
}

sayHi();

// function expression

let sayBye = function(name){
    console.log(name +" Bye function ! ");
}

sayBye("ushma");

// higher order function

function callbackfunction(func,name){
    func(name);
}

callbackfunction(sayBye, "ushma");