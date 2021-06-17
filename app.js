const http = require('http');
// ssh key added in github
// this line is purely for testing purpose

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

// the single '/' tells the nodejs that the path starts with /
// not the path only contains a '/'
// app.use('/', (req, res, next) => {
//     // console.log('Second middleware');
//     res.send('<h2>Response from the server</h2>')
// });

// const server = http.createServer(app);  // app is also a valid request handler


// server.listen(3000);

app.listen(3000);
