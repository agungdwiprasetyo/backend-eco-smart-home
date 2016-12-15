var connection = require('../connection');

function Status() {

  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from status_perangkat', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.post = function(req, res) {
    connection.acquire(function(err, con) {
      var creds = [req.id_perangkat, req.id_user, req.status];
      var query = 'insert into status_perangkat (id_perangkat, id_user, status) values (?, ?, ?)';

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
    connection.acquire(function(err, con) {
      var creds = [req.status, req.id_perangkat];
      var query = 'update status_perangkat set status = ? where id_perangkat = ?';

      con.query(query, creds, function(err, result) {
        con.release();

        if (err) {
          res.send({status: 1, message: 'Update failed'});
        } else {
          res.send({status: 0, message: 'Update successfully'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from status_perangkat where id_perangkat = ?', [id], function(err, result) {
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

module.exports = new Status();
