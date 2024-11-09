// io() connects to the socket.io server at the url
const socket = io('http://localhost:4000')

// socket has an
	// on method and
	// an emit method
socket.on('welcome', data => {
	console.log(data)
	// once welcome
	socket.emit('thankYou', [4, 5, 6])
})