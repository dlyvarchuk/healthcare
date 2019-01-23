let passport = require('passport');
let User = require('../models/User');

let passportLocalStrategy = require('./passportLocalStrategy');
let passportGoogleStrategy = require('./passportGoogleStrategy');



passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(async function (id, done) {
    try {
        let user = await User.findById(id);
        done(null, user);
    } catch (e) {
        done(e);
    }
});

passport.use('local.signin', passportLocalStrategy.SignIn);
passport.use('local.signup', passportLocalStrategy.SignUp);
passport.use('google', passportGoogleStrategy.google);
