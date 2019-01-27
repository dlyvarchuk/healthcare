let router = require('express').Router();
let StaffController = require('../controllers/staff-controller');

module.exports = router;

router.get('/', StaffController.getAll);
router.get('/:id', StaffController.getById);
router.post('/', StaffController.create);
router.put('/:id', StaffController.update);
router.delete('/:id', StaffController.deleteOne);
