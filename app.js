require('dotenv').config()

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
//const user = require('./models/user')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var signupRouter=require('./routes/signup');
var activityRouter = require('./routes/activity')
var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/activity', activityRouter)

//Connect DATABASE
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, function(err) {
    if(!err) {
        console.log("Database connected...");
    } else {
        console.log(err);
    }
})



// const saveUser = new user({
//     username:"test2" ,
//       password:"test" ,
//       babyAge:"test2",
//       location:"test2"
// })
// saveUser.save()

module.exports = app;
