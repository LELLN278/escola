const { Router } = require('express');
const userController = require('../controllers/UserController');
const router = new Router();


router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.delete('/:id', userController.delete);

module.exports = router;
