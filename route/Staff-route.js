let router = require('express').Router();
let StaffController = require('../controller/Staff-controller');

module.exports = router;

router.get('/', StaffController.get);
router.get('/:id', StaffController.getById);
router.post('/', StaffController.post);
router.put('/:id', StaffController.put);
router.delete('/:id', StaffController.delete);

