var battery = require('../models/battery');

module.exports = {
  configure: function(app) {

// battery
    app.get('/battery', function(req, res) {
      battery.get(res);
    })

    app.post('/battery', function(req, res) {
      battery.create(req.body, res);
    });

    app.put('/battery', function(req, res) {
      battery.update(req.body, res);
    });

    app.delete('/battery/:id/', function(req, res) {
      battery.delete(req.params.id, res);
    });

  }
};
