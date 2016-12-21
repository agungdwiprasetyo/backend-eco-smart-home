var connection = require('../connection');

function Battery() {

  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('SELECT * FROM `battery` ORDER BY id_battery desc limit 1', function(err, result) {
        con.release();
        // var objs = [];
        // for (var i = 0;i < result.length; i++) {
        //     objs.push({'id_battery': result[i].id_battery});
        //     objs.push({'id_user': result[i].id_user});
        //     objs.push({'id_rumah': result[i].id_rumah});
        //     objs.push({'kapasitas': result[i].kapasitas});
        //     objs.push({'perkiraan': result[i].perkiraan});
        //     objs.push({'mah': result[i].mah});
        //     objs.push({'datetime': result[i].datetime});
        // }
        // res.send(JSON.stringify(objs));
        res.send(JSON.stringify(result));
      });
    });
  };

  this.post = function(req, res) {
    connection.acquire(function(err, con) {
      var creds = [req.id_user, req.id_rumah, req.kapasitas, req.datetime];
      var query = 'insert into battery (id_user, id_rumah, kapasitas, datetime) values (?, ?, ?, ?)';

      con.query(query, creds, function(err, result) {
        con.release();

        if (err) {
          res.send({status: 1, message: creds});
        } else {
          res.send({status: 0, message: 'Insert successfully'});
        }
      });
    });
  };

  this.update = function(req, res) {
    connection.acquire(function(err, con) {
      var creds = [req.kapasitas, req.datetime, req.id_user, req.id_rumah];
      var query = 'update battery set kapasitas = ?, datetime = ? where id_user = ? and id_rumah = ?';

      con.query(query, creds, function(err, result) {
        con.release();

        if (err) {
          res.send({status: 1, message: 'Insert failed'});
        } else {
          res.send({status: 0, message: creds});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from battery where battery = ?', [id], function(err, result) {
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

module.exports = new Battery();
