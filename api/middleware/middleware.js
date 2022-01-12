const User = require('../users/users-model');

function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log('Method: ', req.method, '| URL: ', req.url, '| Timestamp: ', Date.now());
  next();
}

async function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  try {
    const possibleId = await User.getById(req.params.id);
    if (possibleId) {
      req.id = possibleId;
      next();
    } else {
      next({ status: 404, message: "user not found" });
    }
  } catch (err) {
    next(err);
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  const { name } = req.body;
  if (!name) {
    next({ status: 400, message: "missing required name field" });
  } else {
    next();
  }
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
