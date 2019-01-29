let router = require('express').Router();
let StaffQueueController = require('../controllers/staff_queue-controller');

module.exports = router;

router.get('/', StaffQueueController.getAll);
router.get('/:id', StaffQueueController.getById);
router.post('/', StaffQueueController.create);
router.put('/:id', StaffQueueController.update);
router.delete('/:id', StaffQueueController.deleteOne);
