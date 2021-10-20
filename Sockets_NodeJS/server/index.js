var express = require('express');
var app = express();
var server = require('http').Server(app);

var io = require('socket.io')(server,{
    cors: { // Permite el acceso de orígenes mixtos (CORS)
        origin: '*'
    }
});


app.use(express.static('client'))

app.get('/', (req,res)=>{
    res.status(200).send('DASASdD');
});

var messages = [{
    id: 1,
    text:"dsadasda",
    nick:"user_31032140"
}]

io.on('connection', (socket)=>{
    // console.log(socket);
    // console.log('user connected');
    socket.emit('messages', messages);

    socket.on('new-message', function(data){
        console.log('message from client:', data);
        messages.push(data);
        io.emit('messages', messages);
    })
})



server.listen(6677, function(){
    console.log('Server listening on port 6677');
})