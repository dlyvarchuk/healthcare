let router = require('express').Router();
let PatientContactController = require('../controller/PatientContact-controller');

module.exports = router;

router.get('/', PatientContactController.get);
router.get('/:id', PatientContactController.getById);
router.post('/', PatientContactController.post);
router.put('/:id', PatientContactController.put);
router.delete('/:id', PatientContactController.delete);

