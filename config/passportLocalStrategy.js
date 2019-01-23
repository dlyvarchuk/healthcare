let LocalStrategy = require('passport-local').Strategy;
let User = require('../models/User');

let strategies = {};

strategies.SignIn = new LocalStrategy({
        usernameField: 'login',
        passwordField: 'password',
        passReqToCallback: true
    },
    async function (req, login, password, done) {

        try {
            let principal = await User.findOne({
                login
            });
            if (principal && principal.comparePassword(password)) {
                return done(null, principal);
            } else {
                return done(false, null);
            }
        } catch (e) {
            return done(e);
        }
    });

strategies.SignUp = new LocalStrategy({
        usernameField: 'login',
        passwordField: 'password',
        passReqToCallback: true
    },
    async function (req, login, password, done) {

        try {
            let alredyExists = await User.findOne({
                login
            });
            if (alredyExists) {
                return done(false, null);
            } else {
                let user = new User(req.body);
                user.hashPassword();
                await user.save();
                return done(null, user);
            }
        } catch (e) {
            done(e);
        }
    });
module.exports = strategies;
