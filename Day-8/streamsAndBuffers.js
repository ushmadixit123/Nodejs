var fs = require('fs');


// readable stream =============
const myReadStream = fs.createReadStream(__dirname+'/readme.txt');
myReadStream.on('data',(chunk)=>{
    console.log("data recieved : ");
    console.log(chunk);
});

// writable stream =============
const myWriteStream = fs.createWriteStream(__dirname+'/write.txt');

myReadStream.on('data',(chunk)=>{
    console.log("data recieved : ");
    myWriteStream.write(chunk);
});
// console.log(__dirname)

// pipes========== it makes our work more easy as now we don't have to listen for chunk of data everytime and then write the data instead we if there is data with the help of file we can write that data in writeStream
myReadStream.pipe(myWriteStream);