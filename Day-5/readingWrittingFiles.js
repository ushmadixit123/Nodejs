var fs = require('fs');

// asynchronous way of reading code 
fs.readFile("readingFile.txt","utf-8",(err,data)=>{
    console.log(data)
});

// sychronous way of writing code

    const data = fs.readFileSync("./readingFile.txt", "utf-8");
    console.log(data);


// writting way in a file synchronous way

fs.writeFileSync("writtingFile.txt",data);

// asynchronous way of writting 

fs.writeFile("writtigfile.txt",data,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File written sucessfully!");
    }
})