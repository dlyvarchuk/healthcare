let router = require('express').Router();
let PatientDiagnosisController = require('../controllers/patient_diagnosis-controller');

module.exports = router;

router.get('/', PatientDiagnosisController.getAll);
router.get('/:id', PatientDiagnosisController.getById);
router.post('/', PatientDiagnosisController.create);
router.put('/:id', PatientDiagnosisController.update);
router.delete('/:id', PatientDiagnosisController.deleteOne);
