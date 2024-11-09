const express = require('express');
const { Server } = require("socket.io") 

const app = express();
app.use(express.static('public'))

const expressServer = app.listen(4000, () => {
	console.log("Server is running on port 4000")
});

// io is our socket.io server
const io = new Server(expressServer, {
	cors: [
		"http://localhost:4000"
	]
})

// on => is a regular javascript/node event listener
// emit the other BIG method => 
io.on('connect', (socket) => {
	console.log(socket.id, "has joined our server");
	// 1st arg of emit is the event name 
	socket.emit('welcome', [1, 2, 3])
	socket.on('thankYou', (data) => {
		console.log("message from the client", data)
	})
})

