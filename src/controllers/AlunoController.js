const Aluno = require('../models/Aluno')

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
    };
  }

module.exports = new AlunoController();
