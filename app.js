var express =require('express');
var http =require('http');
var fs= require('fs');

var app=express();
var server =http.createServer(app);


app.get('/',function(req,res){
res.send('<h1>Hi Sasikumar</h1>');
})


app.get('/test',function(req,res){
    fs.readFile('./data.json',function(err, data){
        var taskdata= JSON.parse(data.toString()).test;
res.json(taskdata);
    });
    });
    

server.listen(1234,function(){
    console.log("server started 1234");
})