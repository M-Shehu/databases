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
      // console.log('db called');
      var queryString = 'SELECT messages.id, messages.messages, users.username, rooms.room_name FROM messages, users, rooms WHERE messages.id_Users = users.id AND messages.id_Rooms = rooms.id';
      var queryArgs = [];
      dbConnection.query(queryString, queryArgs, (err, results) => {
        if (err) {
          callback(err);
        } else {
          // console.log(results);
          callback(null, results);
        }
      });
    }, 
    post: function(message) {
      var queryUserId = `select id from users where username = '${message.username}'`;
      var queryRoomId = `select id from rooms where room_name = '${message.room_name}'`;
      // var queryString = `INSERT INTO messages (messages, id_users, id_rooms) VALUE ('${message.messages}', where id_users in (${queryUserId}), where id_rooms in (${queryRoomId}))`;
      var queryArgs = [];
      dbConnection.query(queryUserId, queryArgs, (err, resultsUser) => {
        if (err) {
          console.log(err);
        } else {
          dbConnection.query(queryRoomId, queryArgs, (err, resultsRooms) => {
            if (err) { throw err; }
            var queryString = `INSERT INTO messages (messages, id_users, id_rooms) VALUE ("${message.messages}", ${resultsUser[0].id}, ${resultsRooms[0].id})`;
            dbConnection.query(queryString, queryArgs, (err) => {
              if (err) { throw err; }
              // console.log('WE DID IT!!! DANCE MUSIC')
            });
          });
        }
      });
    }
  }, 

  users: {
    post: function(username) {
      var queryString = `INSERT IGNORE INTO users (username) VALUE ('${username}')`;
      var queryArgs = [];
      dbConnection.query(queryString, queryArgs, (err) => {
        if (err) {
          console.log(err);
        } else {
          // console.log('WE DID USERNAME!!!');
        }
      });
    }
  }, 

  rooms: {
    post: function(roomname) {
      var queryString = `INSERT IGNORE INTO rooms (room_name) VALUE ('${roomname}')`;
      var queryArgs = [];
      dbConnection.query(queryString, queryArgs, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('WE DID ROOMS!!!');
        }
      });
    }
  }
};

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


