var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/instagram', function (req, res, next) {
    res.render('instagram');
});

router.get('/firebase', function (req, res, next) {
    res.render('firebase');
});


module.exports = router;
