var http = require('http');
var fs = require('fs');
var path = require('path');

file_path = path.join('D:/InputDecT/src/assets','/Sampledata.json');
console.log("FilePath - " + file_path);
fs.readFile(file_path,function(err,Data){
    if(!err){
        console.log('Received Data : '+ Data);
        console.log("Server running @ : 'http://localhost:8080/' ")
        //create a server object:
        http.createServer(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
        res.end((Data));
        }).listen(8080); //the server object listens on port 8080
     }
    }); 
