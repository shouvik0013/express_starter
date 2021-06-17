const express = require('express');

const router = express.Router();

// the single '/' tells the nodejs that the path starts with /
// not the path only contains a '/'
router.get('/', (req, res, next) => {
    // console.log('Second middleware');
    res.send('<h2>Response from the server</h2>')
});


module.exports = router;