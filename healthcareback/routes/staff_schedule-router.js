let router = require('express').Router();
let Staff_scheduleController = require('../controllers/staff_schedule-controller');


router.get('/', Staff_scheduleController.getAll);

router.get('/:id', Staff_scheduleController.getById);

router.post('/', Staff_scheduleController.create);

router.put('/:id', Staff_scheduleController.update);

router.delete('/:id', Staff_scheduleController.deleteOne);

module.exports = router;