const http = require('http');

const express = require('express');

const app = express();


const server = http.createServer(app);  // app is also a valid request handler


server.listen(3000);