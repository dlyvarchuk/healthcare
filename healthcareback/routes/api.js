let router = require('express').Router();
let UsersRouter = require('./users-router');
let StaffRouter = require('./staff-router');
let PatientRouter = require('./patient-router');
let Staff_scheduleRouter = require('./staff_schedule-router');
let StaffQueueRouter = require('./staff_queue-router');
let PatientVisitQueueRouter = require('./patient_visit_queue-router');

router.use('/users', UsersRouter);
router.use('/staff', StaffRouter);
router.use('/patient', PatientRouter);
router.use('/staff_queue', StaffQueueRouter);
router.use('/patient_visit_queue', PatientVisitQueueRouter);
router.use('/staff_schedule', Staff_scheduleRouter)

module.exports = router;
