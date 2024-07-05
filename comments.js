//create web server
const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//create server
const http = require('http');
const server = http.createServer(app);
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

//create route
app.get('/', (req, res) => {
  res.send('Hello World');
});

//create route
