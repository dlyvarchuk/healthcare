let router = require('express').Router();
let UsersController = require('../controllers/users-controller');

module.exports = router;

router.get('/', UsersController.getAll);
router.get('/:id', UsersController.getById);
router.get('?login_name=', UsersController.getByLoginName);
router.post('/', UsersController.create);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.deleteOne);
