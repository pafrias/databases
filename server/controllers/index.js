var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) { },
    // a function which handles posting a message to the database

    post: function (req, res) {

      console.log('got this far');
      //var data = req.body;
      //data.created_at = Date.now();

      models.messages.post()
        .then(() => {
          res.statusCode = 201;
          console.log('got very far');
          res.end();
        })
        .catch((err) => {
          res.statusCode = 404;
          res.end()
        });
      /*
        1) extract message from the request body
        --> potentially add created_at
        2) invoke the POST method from models (EXPECT A PROMISE in return)
        --> on resolve
        ---> respond with 201 and end
        --> on reject
        ---> repsond with 404 (or something) and end
      */
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) { },
    post: function (req, res) {
      // console.log('got this far');
      // var data = req.body;
      models.users.post()
        .then(() => {
          res.statusCode = 201;
          res.end()
        })
        .catch((err) => {
          res.statusCode = 404;
          res.end()
        });

    }
  }
};

