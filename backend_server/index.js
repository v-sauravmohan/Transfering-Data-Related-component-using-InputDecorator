var express = require('express');
var cors = require('cors');
var fs = require('fs');
var app = express();


file_path = "./assets/Sampledata.json";
app.use(cors())
console.log("FilePath - " + file_path);
fs.readFile(file_path,function(err,Data){
    if(!err){
        console.log('Received Data : '+ Data);
        app.get('/api', function (req, res, next) {
        res.end(Data);
        })
    }
}); 
app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080')
})