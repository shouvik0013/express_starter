const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('First middleware');
    next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log('Second middleware');
    res.send('<h2>Response from the server</h2>')
})

// const server = http.createServer(app);  // app is also a valid request handler


// server.listen(3000);

app.listen(3000);