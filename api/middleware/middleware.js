const User = require('../users/users-model');

function logger(req, res, next) {
  // DO YOUR MAGIC > I broke into multiple lines for readability and preference
  console.log('Method: ', req.method);
  console.log('URL: "', req.url, '"');
  console.log('Timestamp: ', Date.now());
  next();
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
};
