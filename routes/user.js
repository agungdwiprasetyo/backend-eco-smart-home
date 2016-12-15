var user = require('../models/user');

module.exports = {
  configure: function(app) {

// user
    app.get('/user', function(req, res) {
      user.get(res);
    })

    app.post('/user/', function(req, res) {
      user.create(req.body, res);
    });

    app.put('/user/', function(req, res) {
      user.update(req.body, res);
    });

    app.delete('/user/:id/', function(req, res) {
      user.delete(req.params.id, res);
    });

  }
};
