const express = require('express');
const { use } = require('express/lib/router');

const usersRouter = require('./users/users-router.js');

const server = express();

server.use(express.json());

// remember express by default cannot parse JSON in request bodies
// global middleware and the user's router need to be connected here

server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use('*', (req, res) => {
  res.status(404).json({ message: `${req.method} ${req.baseUrl} not found!` });
});

module.exports = server;
