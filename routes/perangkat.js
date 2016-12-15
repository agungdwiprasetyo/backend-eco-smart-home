var perangkat = require('../models/perangkat');

module.exports = {
  configure: function(app) {

// PERANGKAT
    app.get('/perangkat', function(req, res) {
      perangkat.get(res);
    })

    app.post('/perangkat/', function(req, res) {
      perangkat.create(req.body, res);
    });

    app.put('/perangkat/', function(req, res) {
      perangkat.update(req.body, res);
    });

    app.delete('/perangkat/:id/', function(req, res) {
      perangkat.delete(req.params.id, res);
    });

  }
};
