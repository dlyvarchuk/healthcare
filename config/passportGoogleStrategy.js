let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
let User = require('../models/User');

let strategies = {};

strategies.google = new GoogleStrategy({
        clientID: '719264331668-2a05b75le117ibffuia03ij8s61699e7.apps.googleusercontent.com',
        clientSecret: 'XqcpC0iMC0mc-D08pESJsDU-',
        callbackURL: 'http://localhost:3000/logger/google/callback'
    },
    async function(accessToken, refreshToken, profile, done) {
        try {
            let principal = await User.findOne({googleId: profile.id});
            if (principal) {
                done(null, principal)
            } else {
                let principalByGoogle = await User.create({
                    googleId: profile.id
                });
                return done(null, principalByGoogle)
            }
        } catch (e) {
            done(e);
        }
    }
);

module.exports = strategies;