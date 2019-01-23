let router = require('express').Router();
let UserController = require('../controller/User-controller');

module.exports = router;

router.get('/', UserController.get);
router.get('/:id', UserController.getById);
router.post('/', UserController.post);
router.put('/:id', UserController.put);
router.delete('/:id', UserController.delete);

