var safe = require('../models/safe');

module.exports = {
  configure: function(app) {

// safe
    app.get('/safe', function(req, res) {
      safe.get(res);
    })

    app.post('/safe', function(req, res) {
      safe.create(req.body, res);
    });

    app.put('/safe', function(req, res) {
      safe.update(req.body, res);
    });

    app.delete('/safe/:id/', function(req, res) {
      safe.delete(req.params.id, res);
    });

  }
};
