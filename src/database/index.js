const Sequelize = require('sequelize');
const dataBaseConfig = require ('../config/database');
const Aluno = require('../models/Aluno');
const User = require('../models/User');

const connection = new Sequelize(dataBaseConfig);
const models = [Aluno, User];


models.forEach((model) => model.init(connection));

module.exports = connection;
