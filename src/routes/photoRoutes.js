const { Router } = require('express');
const loginRequired = require('../middlewares/loginRequired');

const photoController = require('../controllers/PhotoController');

const router = new Router();


router.post('/', loginRequired, photoController.store);

module.exports = router;
