const { Router } = require('express');
const multer = require('multer')

const photoController = require('../controllers/PhotoController');
const multerConfig = require('../config/multer');

const upload = multer(multerConfig);

const router = new Router();


router.post('/', upload.single('photo'),  photoController.store);

module.exports = router;
