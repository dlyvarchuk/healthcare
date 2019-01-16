let router = require('express').Router();
let UsersRouter = require('./users-router');
let StaffRouter = require('./staff-router');

router.use('/users', UsersRouter);
router.use('/staff', StaffRouter);

module.exports = router;
