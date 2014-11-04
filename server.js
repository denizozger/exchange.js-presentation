const 
	express = require('express'),
  app = express(),
	http = require('http').Server(app),
	io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));

http.listen(3000, function(){
  console.log('Server listening on *:3000');
});


io.on('connection', function(socket) {

	console.log('A user connected');

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    console.log('A user disconnected');
  });

});

