const http = require('http');
// ssh key added in github
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));


app.use('/add-product', (req, res, next) => {
    // console.log('Inside middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
})

// this url is also executed for get, post 
app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

// the single '/' tells the nodejs that the path starts with /
// not the path only contains a '/'
app.use('/', (req, res, next) => {
    // console.log('Second middleware');
    res.send('<h2>Response from the server</h2>')
});

// const server = http.createServer(app);  // app is also a valid request handler


// server.listen(3000);

app.listen(3000);