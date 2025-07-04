const { Sequelize, Model } = require('sequelize');
const appConfig = require('../config/appConfig');

 class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate:{
          notEmpty: {
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate:{
          notEmpty: {
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get (){
          return `${appConfig.url}/images/${this.getDataValue('filename')}`
        }
      },

    }, {
      sequelize,
      tableName:'fotos',
    })

    return this;
  }

  static associate(models) {
     this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' })
  }
}

 module.exports = Photo;

