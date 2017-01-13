var socketio = require('socket.io');
var ioConnect = false;

module.exports.listen = function(server) {
	var io = socketio.listen(server);

	io.on('connection', function (socket) {
		ioConnect = true;
		console.log('Socket.io connected');
		socket.emit('kendaliPerangkat', 'connected!!');

		thiskendali = function(data){
			console.log(data);
			console.log('jancuk');
			socket.emit('kendaliPerangkat', data);
		}

		socket.on('kendaliPerangkat', function(data){
			console.log(data);
			socket.broadcast.emit('kendaliPerangkat', data);
		});

		socket.on('monitoringPerangkat', function(data){
			socket.broadcast.emit('monitoringPerangkat', data);
		});
	 });

	return io;
}

module.exports.sendKendali = function(data){
	if (ioConnect){
		thiskendali(data);
	}else{
		console.log('Socket.io belum connect');
	}
}