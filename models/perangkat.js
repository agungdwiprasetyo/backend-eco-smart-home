var connection = require('../connection');
var socketio = require('../socket/socket-io');

function Perangkat() {

  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from perangkat', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.post = function(req, res) {
    connection.acquire(function(err, con) {
      var creds = [req.id_perangkat, req.id_user, req.id_rumah, req.nama_perangkat];
      var query = 'insert into perangkat (id_perangkat, id_user, id_rumah, nama_perangkat) values (?, ?, ?, ?, ?)';

      con.query(query, creds, function(err, result) {
        con.release();

        if (err) {
          res.send({status: 1, message: 'Insert failed'});
        } else {
          res.send({status: 0, message: 'Insert successfully'});
        }
      });
    });
  };

  this.update = function(req, res) {
    var data = [parseInt(req.deviceStatus), parseInt(req.deviceId)];
    socketio.sendKendali(data); // emit to socket-io
    connection.acquire(function(err, con) {
      var query = 'UPDATE perangkat SET deviceStatus = ? WHERE deviceId = ?';
      con.query(query, data, function(err, result) {
        con.release();
        console.log("data = "+data);
        if (err) {
          res.send({status: 0, message: 'Update failed'});
        } else {
          res.send({status: 1, message: 'Update successfully'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from perangkat where id_perangkat = ?', [id], function(err, result) {
        con.release();

        if (err) {
          res.send({status: 1, message: 'Delete failed'});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };

}

module.exports = new Perangkat();
