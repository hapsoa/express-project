var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('firebaseStart/firebaseExample');
});

router.get('/my', function (req, res, next) {
    res.render('firebaseStart/myExample');
});

router.get('/my/signup', function (req, res, next) {
    res.render('firebaseStart/mySignUp');
});

router.get('/my2', function (req, res, next) {
    res.render('firebaseExample2/example2');
});

module.exports = router;