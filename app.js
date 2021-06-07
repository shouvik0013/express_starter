const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('Inside middleware');
    res.send('<h2>Add product page</h2>');
})


// the single '/' tells the nodejs that the path starts with /
// not the path only contains a '/'
app.use('/', (req, res, next) => {
    console.log('Second middleware');
    res.send('<h2>Response from the server</h2>')
});

// const server = http.createServer(app);  // app is also a valid request handler


// server.listen(3000);

app.listen(3000);