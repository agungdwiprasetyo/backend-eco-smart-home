var tdl = require('../models/tdl');

module.exports = {
  configure: function(app) {

// tdl
    app.get('/tdl', function(req, res) {
      tdl.get(res);
    })

    app.post('/tdl', function(req, res) {
      tdl.create(req.body, res);
    });

    app.put('/tdl', function(req, res) {
      tdl.update(req.body, res);
    });

    app.delete('/tdl/:id/', function(req, res) {
      tdl.delete(req.params.id, res);
    });

  }
};
