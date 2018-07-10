var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('textFinder/main');
});

router.get('/2', function (req, res, next) {
    res.render('textFinder2/textFinder');
});




module.exports = router;