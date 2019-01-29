let router = require('express').Router();
let PatientVisitQueueController = require('../controllers/patient_visit_queue-controller');

module.exports = router;

router.get('/', PatientVisitQueueController.getAll);
router.get('/:id', PatientVisitQueueController.getById);
router.post('/', PatientVisitQueueController.create);
router.put('/:id', PatientVisitQueueController.update);
router.delete('/:id', PatientVisitQueueController.deleteOne);
