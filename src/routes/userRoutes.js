const { Router } = require('express');
const userController = require('../controllers/UserController');
const loginRequired = require('../middlewares/loginRequired');
const router = new Router();


router.post('/', userController.store);
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.delete('/:id', userController.delete);

module.exports = router;
