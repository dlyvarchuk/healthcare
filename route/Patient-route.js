let router = require('express').Router();
let PatientController = require('../controller/Patient-controller');

module.exports = router;

router.get('/', PatientController.get);
router.get('/:id', PatientController.getById);
router.post('/', PatientController.post);
router.put('/:id', PatientController.put);
router.delete('/:id', PatientController.delete);

