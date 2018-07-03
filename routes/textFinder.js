var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('textFinder/main');
});




module.exports = router;