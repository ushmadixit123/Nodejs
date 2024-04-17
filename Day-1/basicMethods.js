// To console anything on terminal

console.log("Welcome to nodejs");

// setTimeOut method ==> is used to do something after a particular interval of time 

setTimeout(()=>{
    console.log("settimeout is called!");
},2000);

// setInterval method ===> is used to do something constantly after a particular interval of time
let time = 2;

setInterval(()=>{
    time += 2;
    console.log(time + " seconds have passed!");
},2000);


// to find in which directory we are currently in

console.log(__dirname);

// to find in which file we are currently in 

console.log(__filename);