const Aluno = require('../models/Aluno')

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Cleber',
      sobrenome: 'Nascimento',
      email: 'cleber278@gmai.com',
      idade: 32,
      peso: 65,
      altura: 1.70,
    });
    res.json(novoAluno);
  }
}

module.exports = new HomeController();
