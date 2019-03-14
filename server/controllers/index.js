var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, response) => {
        if (err) {
          console.log('Error.');
        } else {
          res.send(response);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.send(JSON.stringify(models.messages.get()));
    },
    post: function (req, res) {
      models.messages.post(req.body);
      res.end();
    }
  }
};

