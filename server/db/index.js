var mysql = require('mysql');

dbConnection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

dbConnection.connect();

module.exports = {
  messages: {
    get: function(callback) {
      console.log('db called');
      var queryString = 'SELECT messages, id_Users, id_Rooms FROM messages';
      var queryArgs = [];
      dbConnection.query(queryString, queryArgs, (err, results) => {
        if (err) {
          callback(err);
        } else {
          console.log(results);
          callback(null, results);
        }
      });
    }
  }
};

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


