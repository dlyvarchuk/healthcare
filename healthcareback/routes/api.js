let router = require('express').Router();
let UsersRouter = require('./users-router');
let StaffRouter = require('./staff-router');
let PatientRouter = require('./patient-router');
let Staff_scheduleRouter = require('./staff_schedule-router');
let StaffQueueRouter = require('./staff_queue-router');
let PatientVisitQueueRouter = require('./patient_visit_queue-router');
let PatientVisitRouter = require('./patient_visit-router');
let PatientDiagnosisRouter = require('./patient_diagnosis-router');

router.use('/users', UsersRouter);
router.use('/staff', StaffRouter);
router.use('/patient', PatientRouter);
router.use('/staff-queue', StaffQueueRouter);
router.use('/patient-visit-queue', PatientVisitQueueRouter);
router.use('/staff-schedule', Staff_scheduleRouter);
router.use('/patient-visit', PatientVisitRouter);
router.use('/patient-diagnosis', PatientDiagnosisRouter);

module.exports = router;
