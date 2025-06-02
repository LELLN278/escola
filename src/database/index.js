const Sequelize = require('sequelize');
const dataBaseConfig = require ('../config/database');
const Aluno = require('../models/Aluno');

const connection = new Sequelize(dataBaseConfig);
const models = [Aluno];


models.forEach((model) => model.init(connection));

module.exports = connection;
