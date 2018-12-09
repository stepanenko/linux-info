
const express = require('express');
const socket = require('socket.io');
const helmet  = require('helmet');

const app = express();

app.use(helmet());

const port = process.env.PORT || 5000;
const server = app.listen(port, function() {
  console.log('Listening on port:', port)
});

const io = socket(server);

io.on('connection', function(socket) {
  console.log('New user connected, id:', socket.id);

  socket.on('disconnect', function() {
    console.log('User disconnected, id:', socket.id);

    socket.broadcast.emit('leave', {
      status: `User has left this chat`
    });
  });

  socket.on('join', function(user) {

    socket.broadcast.emit('join', {
      status: 'New user has joined this chat'
    });
  });

  socket.on('leave', function(user) {

    socket.broadcast.emit('leave', {
      status: `${user} has left this chat`
    });
  });

  socket.on('message', function(data) {

    io.emit('message', {
      user: data.user,
      message: data.message
    });
  });

  socket.on('typing', function(user) {

    socket.broadcast.emit('typing', {
      message: `${user} is typing a message...`
    });
  });

});

app.get('/', function(req, res) {
  res.send('Welcome to live chat server v1.1')
});
