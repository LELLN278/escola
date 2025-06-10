const { Router } = require('express');
const alunoController = require('../controllers/AlunoController');
const router = new Router();


router.get('/', alunoController.index);

module.exports = router;
