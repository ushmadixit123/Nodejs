// to delete a file
var fs = require('fs');

// fs.unlink("filename");

// create directory

fs.mkdir("newDirectory",()=>{
    console.log("Directry created successfully");
});

fs.mkdirSync("newDirectory");

// remove directory

fs.rmdir("newDirectory",()=>{
    console.log("directory removed successfully!");
})

fs.rmdirSync("newDirectory");