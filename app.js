require('dotenv').config()

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var cors = require('cors');
// var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//Connect DATABASE
// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// }, function(err) {
//     if(!err) {
//         console.log("Database connected...");
//     } else {
//         console.log(err);
//     }
// })



// const saveUser = new user({
//     userName:"test1" ,
//       passWord:"test1" ,
//       babyAge:"test1",
//       location:"test1"
// })
// saveUser.save()

module.exports = app;
