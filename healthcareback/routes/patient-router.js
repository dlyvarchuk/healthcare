let router = require('express').Router();
let PatientController = require('../controllers/patient-controller');

module.exports = router;

router.get('/', PatientController.getAll);
router.get('/:id', PatientController.getById);
router.post('/', PatientController.create);
router.put('/:id', PatientController.update);
router.delete('/:id', PatientController.deleteOne);

