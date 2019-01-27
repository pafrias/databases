var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function () { },

    // a function which can be used to insert a message into the database
    post: function (data) {

      console.log('got a little further');
      return new Promise((resolve, reject) => {

        var instruction = `INSERT messages (text, created, user_id, room_id) VALUE ('test', '2000-12-12', 1, 2)`;

        db.query(instruction, [], (err, data) => {
          if (err) {
            console.log('error');
            reject(err);
          } else {
            console.log('resolved');
            resolve(data);
          }
        });
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () { },
    post: function () {
      console.log('got a little further');

      return new Promise((resolve, reject) => {
        db.query("INSERT users (name) VALUE ('dude')", [], (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });

      /*
        * concatenate a big string with our INSERT directions
        *
        1) return a promise with resolve and reject
        2) inside promise -> has to use db querywith instruction and cb
        3) resolve and reject as needed
      */
    }
  }
};

