let router = require('express').Router();
let UsersController = require('../controllers/users-controller');

router.get('/', UsersController.getAll);

router.get('/:id', UsersController.getById);

router.post('/', UsersController.create);

router.put('/:id', UsersController.update);

router.delete('/:id', UsersController.deleteOne);

module.exports = router;
