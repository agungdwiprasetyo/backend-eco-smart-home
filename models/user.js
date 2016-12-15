var connection = require('../connection');

function User() {

  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from user', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.post = function(req, res) {
    connection.acquire(function(err, con) {
      var creds = [req.kategori_user, req.nama_user, req.email, req.password, req.id_rumah, req.daya, req.status_notif, req.sleep_time, req.wake_time];
      var query = 'insert into user (kategori_user, nama_user, email, password, id_rumah, daya, status_notif, sleep_time, wake_time) values (?, ?, ?, ?, ?, ?, ?, ?, ?)';

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
      var creds = [req.kategori_user, req.nama_user, req.email, req.password, req.id_rumah, req.daya, req.status_notif, req.sleep_time, req.wake_time];
      var query = 'update user set kategori_user = ?, nama_user = ?, email = ?, password = ?, id_rumah = ?, daya = ?, status_notif = ?, sleep_time = ?, wake_time = ? where id_user = ?';

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
      con.query('delete from user where id_user = ?', [id], function(err, result) {
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

module.exports = new User();
