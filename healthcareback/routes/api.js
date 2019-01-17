let router = require('express').Router();
let UsersRouter = require('./users-router');
let StaffRouter = require('./staff-router');
let PatientRouter = require('./patient-router')

router.use('/users', UsersRouter);
router.use('/staff', StaffRouter);
router.use('/patients', PatientRouter);

module.exports = router;
