var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ajouRouter = require('./routes/ajou-university');
var kakaotalkRouter = require('./routes/kakaotalk');
var calculatorRouter = require('./routes/calculator');
var jsonFilter01Router = require('./routes/jsonFilter01');
var selectionControlsRouter = require('./routes/selectionControls');
var textFinderRouter = require('./routes/textFinder');
var fractalRouter = require('./routes/fractal');
var mainPageRouter = require('./routes/mainPage');
var firebaseStartRouter = require('./routes/firebaseStart');
var showingPeopleDataRouter = require('./routes/showingPeopleData');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'dist')));

// app.use('/', indexRouter);
app.use('/', mainPageRouter);
app.use('/users', usersRouter);
app.use('/ajou', ajouRouter);
app.use('/kakaotalk', kakaotalkRouter);
app.use('/calculator', calculatorRouter);
app.use('/json-filter-01', jsonFilter01Router);
app.use('/selectionControls', selectionControlsRouter);
app.use('/textFinder', textFinderRouter);
app.use('/fractal', fractalRouter);
app.use('/firebaseStart', firebaseStartRouter);
app.use('/showingPeopleData', showingPeopleDataRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
