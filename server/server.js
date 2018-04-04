
'use strict';

require('dotenv').config(); // import env variables

const express = require('express');
const http = require('http');
const ejs = require('ejs');

const server = express();

// Development Server Options
const isDev = process.env.NODE_ENV !== 'production';
const env  = isDev ? 'development' : process.env.NODE_ENV;
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

server.set('env', env);
server.set('host', host); 
server.set('port', port);

if (isDev) {
  server.use(require('connect-livereload')({ port: 35729 }));
}

// Production Server Paths
server.get('/', express.static('./distribution/avero'));
server.get('/api/token', (request, response)=>{
  const tokenPage = ejs.compile('<%= token %>');
  const returnPage = tokenPage({token: process.env.API_KEY});
  response.setHeader('Content-Type', 'application/javascript');
  response.setHeader('Content-Length', returnPage.length);
  response.send(returnPage);
});
server.use(express.static('./distribution'));

// Create the server
http.createServer(server).listen(port);

console.log('=================================');
console.log('  Server listening on port ' + port);
console.log('=================================');
