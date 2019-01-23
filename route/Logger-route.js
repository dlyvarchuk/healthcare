let router = require('express').Router();
let LoggerController = require('../controller/Logger-controller');
module.exports = router;

router.post('/login', LoggerController.login, function (req, res, next) {
    try {
        res.json(req.user)
    } catch (e) {
        next(e);
    }
});
router.post('/logup', LoggerController.logup,  function (req, res, next) {
    try {
        res.json(req.user)
    } catch (e) {
        next(e);
    }
});
router.get('/google', LoggerController.google);

router.get('/google/callback', LoggerController.googleCallback,
    function(req,res, next){
        try {
            res.json(req.user);
        } catch (e) {
            next(e);
        }
    });