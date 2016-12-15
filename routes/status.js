var status = require('../models/status');

module.exports = {
  configure: function(app) {

// status
    app.get('/status', function(req, res) {
      status.get(res);
    })

    app.post('/status', function(req, res) {
      status.create(req.body, res);
    });

    app.put('/status', function(req, res) {
      status.update(req.body, res);
    });

    app.delete('/status/:id/', function(req, res) {
      status.delete(req.params.id, res);
    });

  }
};
