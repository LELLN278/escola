const Sequelize = require('sequelize');
const dataBaseConfig = require ('../config/database');
const Aluno = require('../models/Aluno');
const User = require('../models/User');
const Foto = require('../models/Photo');

const connection = new Sequelize(dataBaseConfig);
const models = [Aluno, User, Foto];


models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

module.exports = connection;
