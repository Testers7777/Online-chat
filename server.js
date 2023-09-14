const app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', function (socket) {
    console.log('an user is connected')
    socket.on('disconnect', function () {
        console.log('an user is disconnected')
    })
    socket.on('chat message', function(msg){
        console.log('message sent : ' + msg)
        io.emit('chat message', msg)
    })
})
http.listen(3000, function () {
    console.log('Server running on 3000')
})
