var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('firebaseStart/firebaseExample');
});

router.get('/my', function (req, res, next) {
    res.render('firebaseStart/myExample');
});

module.exports = router;