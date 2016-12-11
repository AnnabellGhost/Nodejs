var express=require('express');
var app=express();
var http=require('http').Server(app);
var io=require('socket.io')(http);

// app.get('/',function(req,res){
//     res.sendFile(__dirname+'/public');
// });
app.use('/',express.static(__dirname+'/public'));
var userNum=0;
io.on('connection',function(socket){
    console.log('a user connected....');
    socket.on('disconnect',function(){
        --userNum;
        console.log('user disconnected');
    });
    
    socket.on('adduser',function(username){
        socket.username=username;
        ++userNum;
        console.log(userNum);
    });
    socket.on('newMsg',function(data){
       socket.broadcast.emit('newMsg',{
           username:socket.username,
           message:data
       }); 
       
    });
});

http.listen(3000,function(){
    console.log('Listening on *:3000');
});