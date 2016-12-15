var data = require('../models/data');

module.exports = {
  configure: function(app) {

// DATA
    app.get('/data', function(req, res) {
      data.get(req, res);
    })

    app.post('/data', function(req, res) {
      data.post(req.body, res);
    });

    app.put('/data', function(req, res) {
      data.update(req.body, res);
    });

    app.delete('/data/:id/', function(req, res) {
      data.delete(req.params.id, res);
    });

  }
};
