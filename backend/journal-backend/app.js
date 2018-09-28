var createError = require('http-errors');
var express = require('express');
const bodyParser = require('body-parser');
//Setting up the database to listen on port 3001
const port = process.env.PORT || 3001;

//Setting Up The database
function databaseSetUp() {
  //connecting to mlab in config
    const db = require('./config/indexConfig').mongoURI;

    //connecting to the datatbase and using a promise that will log the status of the connection
    const mongoose = require('mongoose');
    mongoose.connect(db, {useNewUrlParser: true}).then(
        ()=> {
            console.log("Successfully connected to the database.");
        },
        err => {
            console.log("ERROR connecting to the database.");
            throw err;
        }
    );
}
databaseSetUp();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//Use Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(bodyParser.json());

//listening for requests
console.log(`Listener started on port ${port}...`);
app.listen(port);

module.exports = app;
