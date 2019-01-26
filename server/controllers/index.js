var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) { },
    // a function which handles posting a message to the database
    post: function (req, res) {
      /*
        1) retrieve message from req
        2) connect to mysql or create connection
        3) query mysql with (some command) and the message
         --> success handler
         --> failure handler
      */

    }
  },

  users: {
    // Ditto as above
    get: function (req, res) { },
    post: function (req, res) { }
  }
};

