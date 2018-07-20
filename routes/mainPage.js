var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('main-page/main');
});

router.get('/instagram', function (req, res, next) {
    res.render('instagram');
});

router.get('/firebase', function (req, res, next) {
    res.render('firebase');
});

router.get('/modal', function (req, res, next) {
    res.render('modal/modal');
});

router.get('/grid-1', function (req, res, next) {
    res.render('grid-1/grid-1');
});

router.get('/card-4', function (req, res, next) {
    res.render('card/card-4');
});

router.get('/table', function (req, res, next) {
    res.render('table/table');
});

module.exports = router;