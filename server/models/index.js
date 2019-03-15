var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.messages.get((err, responseArray) => {
        if (err) {
          console.log('Error.');
        } else {
          var responseObject = {results: responseArray};
          callback(null, responseObject);
        }
      });
    }, // a function which produces all the messages
    post: function (message) {
      db.users.post(message.username);
      db.rooms.post(message.room_name);
      db.messages.post(message);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

