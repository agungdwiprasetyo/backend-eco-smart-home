var connection = require('../connection');

function Tdl() {

  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from tdl', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.post = function(req, res) {
    connection.acquire(function(err, con) {
      var creds = [req.daya, req.harga];
      var query = 'insert into tdl (daya, harga) values (?, ?)';

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
      var creds = [req.harga, req.daya];
      var query = 'update tdl set harga = ? where daya = ?';

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
      con.query('delete from tdl where id_tdl = ?', [id], function(err, result) {
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

module.exports = new Tdl();
