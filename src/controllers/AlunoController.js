const Aluno = require('../models/Aluno');
const Photo = require('../models/Photo');

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
    attributes: ['id' , 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
    order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
    include: {
      model: Photo,
      attributes: ['url', 'filename', 'created_at'],
    },
     });
    res.json(alunos);
    };

    async show(req, res) {
      try{
        const { id } = req.params;

        if(!id) {
          return res.status(400).json({
            errors: ['Faltando ID'],
          });
        }

        const aluno = await Aluno.findByPk(id, {
    attributes: ['id' , 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
    order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
    include: {
      model: Photo,
      attributes: ['url', 'filename', 'created_at'],
    },
     })

        if(!aluno){
          return res.status(400).json({
            errors: ['Aluno não existe'],
          })
        }

        return res.json(aluno);

      } catch(e) {
          return res.status(400).json({
            errors: e.errors.map((err) => err.message),
          });
      }

    }

    async store(req, res){
      try{
        const aluno = await Aluno.create(req.body);
        return res.json(aluno);

      } catch(e){
        return res.status.json({
          errors: e.errors.map((err) => err.message),
        })
      }
    }

    async update(req, res){
      try{
        const { id } = req.params;

        if(!id) {
          return res.status(400).json({
            errors: ['Faltando ID'],
          });
        }

        const aluno = await Aluno.findByPk(id)

        if(!aluno){
          return res.status(400).json({
            errors: ['Aluno não existe'],
          })
        }

        const alunoAtualizado = await aluno.update(req.body);
        return res.json(alunoAtualizado);

      } catch(e) {
          return res.status(400).json({
            errors: e.errors.map((err) => err.message),
          });
      }
    }

    async delete(req, res){
      try{
        const { id } = req.params;

        if(!id) {
          return res.status(400).json({
            errors: ['Faltando ID'],
          });
        }

        const aluno = await Aluno.findByPk(id)

        if(!aluno){
          return res.status(400).json({
            errors: ['Aluno não existe'],
          })
        }

        await aluno.destroy()
        return res.json({
          apagado: true,
        });

      } catch(e) {
          return res.status(400).json({
            errors: e.errors.map((err) => err.message),
          });
      }
    }
  }

module.exports = new AlunoController();
