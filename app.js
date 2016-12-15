var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./connection');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 2016;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

var perangkatRoutes = require('./routes/perangkat');
var dataRoutes = require('./routes/data');
var batteryRoutes = require('./routes/battery');
var userRoutes = require('./routes/user');
var tdlRoutes = require('./routes/tdl');
var statusRoutes = require('./routes/status');
var safeRoutes = require('./routes/safe');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

io.on('connection', function (socket) {
	// API
	var routeMobile = express.Router();
  	var APIhape = routeMobile.route('/perangkat');
  	APIhape.put(function(req,res,next){
  		console.log("masukk");
  		var data = [parseInt(req.body.deviceStatus), parseInt(req.body.deviceId)];
  		var raspi = [parseInt(req.body.deviceId), parseInt(req.body.deviceStatus)];
  		var query = 'UPDATE perangkat SET deviceStatus = ? WHERE deviceId = ?';
  		console.log(data);
  			connection.acquire(function(err, con) {
		      con.query(query, data, function(err, result) {
		        con.release();
		        if (err) {
		          res.send({status: 0, message: 'Update failed'});
		        } else {
		          res.send({status: 1, message: 'Update successfully'});
		        }
		      });
		    });
  		socket.broadcast.emit('kendaliPerangkat',raspi);
  	});
  	app.use('/socket',routeMobile);

	socket.on('kendaliPerangkat', function (data) {
		console.log(data);
		socket.broadcast.emit('kendaliPerangkat', data);
	});
 });

app.get('/', function (req, res) {
  res.send('Hello World!');
});

connection.init();

// ROUTES
perangkatRoutes.configure(app);
dataRoutes.configure(app);
batteryRoutes.configure(app);
userRoutes.configure(app);
tdlRoutes.configure(app);
statusRoutes.configure(app);
safeRoutes.configure(app);