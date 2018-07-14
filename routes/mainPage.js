var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('main-page/main.pug');
});

router.get('/instagram', function (req, res, next) {
    res.render('instagram');
});

router.get('/firebase', function (req, res, next) {
    res.render('firebase');
});

module.exports = router;