var express = require('express');
var router = express.Router();

router.get('/login', function (req, res, next) {
    res.render('kakaotalk/login');
});

router.get('/main', function (req, res, next) {
    res.render('kakaotalk/main');
});

router.get('/friends', function (req, res, next) {
    res.render('kakaotalk/friends');
});

router.get('/chatting-list', function (req, res, next) {
    res.render('kakaotalk/chatting-list');
});

router.get('/configure', function (req, res, next) {
    res.render('kakaotalk/configure');
});

router.get('/personal-profile', function (req, res, next) {
    res.render('kakaotalk/personal-profile');
});

router.get('/chatting', function (req, res, next) {
    res.render('kakaotalk/chatting');
});

module.exports = router;