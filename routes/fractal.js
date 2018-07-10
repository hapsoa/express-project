var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('fractal/main');
});

router.get('/education', function (req, res, next) {
    res.render('fractal-education/fractal');
});



module.exports = router;