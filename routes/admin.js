const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    // console.log('Inside middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
})

// this url is also executed for get, post 
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;