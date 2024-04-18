var fs = require('fs');

// asynchronous way of reading code 
// fs.readFile("readingFile.txt","utf-8",(err,data)=>{
//     console.log(data)
// });

// sychronous way of writing code

// var data = fs.readFileSync("readingFile.txt","utf-8");

try {
    const data = fs.readFileSync("./readingFile.txt", "utf-8");
    console.log(data);
} catch (err) {
    console.error("Error reading file:", err);
}