var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('ajou-univ-homepage/ajou-university');
});



module.exports = router;