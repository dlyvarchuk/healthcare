let mongoose = require('mongoose');
let http = require('http');
let express = require('express');
let session = require('express-session');
let path = require('path');
let UserRoute = require('./route/User-route');
let Logger = require('./route/Logger-route');
let StaffRoute = require('./route/Staff-route');
require('./config/passport');
let passport = require('passport');


mongoose.connect('mongodb://localhost:27017/healthcare', {useNewUrlParser: true});

let app = express();
let server = http.createServer(app);
let port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'medicalApp',
    resave: false,
    saveUninitialized: true,
    cookie: {
        MaxAge: 1000*60*60*24*4
    }
}));


app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (req, res, next) {
    res.end('local strategy')
});


app.use('/user', UserRoute);

app.use('/logger', Logger);

app.use('/staff', StaffRoute);



app.use(function (req, res, next) {
    next(new Error('page not Found'));
});
app.use(function (req, res, next, err) {
    res.end(err);
});

server.listen(port, () => {
    console.log(`Listening port ${port}`)
});








