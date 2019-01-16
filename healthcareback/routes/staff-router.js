let router = require('express').Router();
let StaffController = require('../controllers/staff-controller');

router.get('/', StaffController.getAll);

router.get('/:id', StaffController.getById);

router.post('/', StaffController.create);

router.put('/:id', StaffController.update);

router.delete('/:id', StaffController.deleteOne);

module.exports = router;
