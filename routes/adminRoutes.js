import express from 'express';
var router = express.Router();

router.route('/Admin');

router.get('/addBooks', function(req, res, next) {
    res.send('inserting books');
});

module.exports = router;