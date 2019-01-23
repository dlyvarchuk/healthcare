let controller = {};
module.exports = controller;

let passport = require('passport');

controller.login = passport.authenticate('local.signin', {failureRedirect: '/'});

controller.logup = passport.authenticate('local.signup', {failureRedirect: '/'});
controller.google = passport.authenticate('google',
    {
        scope: ['https://www.googleapis.com/auth/userinfo.profile']
    });
controller.googleCallback = passport.authenticate('google', {failureRedirect: true});
    // async function (req, res, next) {
    //     if(req.file === undefined){
    //         res.redirect('/');
    //     }else {
    //         let user = await Member.findById(req.user._id);
    //         let type = req.file.mimetype.split('/');
    //         type = type[1];
    //         fs.rename(req.file.path, req.file.path + '.' + type, function (err, data) {
    //             err ? console.log(err) : data;
    //         });
    //         let path = req.file.path;
    //         path = path.slice(6) + '.' + type;
    //         user.avatar = path;
    //         user.save();
    //         res.redirect('/');
    //     }
    // };