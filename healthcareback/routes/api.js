let router = require('express').Router();
let UsersRouter = require('./users-router');
let StaffRouter = require('./staff-router');
let PatientRouter = require('./patient-router');
let Staff_scheduleRouter = require('./staff_schedule-router');

router.use('/users', UsersRouter);
router.use('/staff', StaffRouter);
router.use('/patients', PatientRouter);
router.use('/staff_schedule', Staff_scheduleRouter)

module.exports = router;
