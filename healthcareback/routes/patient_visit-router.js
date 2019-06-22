let router = require('express').Router();
let PatientVisitController = require('../controllers/patient_visit-controller');

module.exports = router;

router.get('/', PatientVisitController.getAll);
router.get('/:id', PatientVisitController.getById);
router.post('/', PatientVisitController.create);
router.put('/:id', PatientVisitController.update);
router.delete('/:id', PatientVisitController.deleteOne);
