var connection = require('../connection');

function Data() {

  this.get = function(req,res) {
    connection.acquire(function(err, con) {
      var tipe = req.headers['tipe'];
      // Masih dumy cok, asal wae
      var tanggalSekarang = 30;
      var bulanSekarang = 10;
      console.log(tipe);
      con.query('select pemakaian_daya, datetime from data', function(err, result) {
        con.release();
        var objs = [];
        for (var i = 0;i < result.length; i++) {
            var date = new Date(result[i].datetime);
            if(tipe=="hari"){
              if(date.getDate()==tanggalSekarang){
                objs.push({'pemakaian_daya':result[i].pemakaian_daya});
              }
            }
            else if(tipe=="minggu"){
              if(date.getDate()<=30 && date.getDate()>=24){
                objs.push({'pemakaian_daya':result[i].pemakaian_daya});
              }
            }
            else if(tipe=="bulan"){
              if(date.getMonth()==bulanSekarang){
                objs.push({'pemakaian_daya':result[i].pemakaian_daya});
              }
            }
            // objs.push({'pemakaian_daya':result[i].pemakaian_daya,
            //            'tanggal':date.getDate(),
            //            'bulan':date.getMonth()+1,
            //            'tahun':date.getFullYear(),
            //            'jam':date.getHours(),
            //            'menit':date.getMinutes(),
            //             'tipe':tipe});
        }
        res.send(objs);
        // res.send(result);
      });
    });
  };

  this.post = function(req, res) {
    connection.acquire(function(err, con) {
      var creds = [req.id_perangkat, req.id_user, req.id_rumah, req.pemakaian_daya, req.datetime];
      var query = 'insert into data (id_perangkat, id_user, id_rumah, pemakaian_daya, datetime) values (?, ?, ?, ?, ?)';

      con.query(query, creds, function(err, result) {
        con.release();

        if (err) {
          res.send({status: 0, message: 'Insert failed'});
        } else {
          res.send({status: 1, message: 'Insert successfully'});
        }
      });
    });
  };

  this.update = function(req, res) {
    connection.acquire(function(err, con) {
      var creds = [req.pemakaian_daya, req.id_perangkat];
      var query = 'update perangkat set pemakaian_daya = ? where id_perangkat = ?';

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

module.exports = new Data();
