'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pacientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pacientes.init({
    nome: DataTypes.STRING,
    sexo: DataTypes.STRING,
    cpf: DataTypes.STRING,
    documento: DataTypes.STRING,
    endereco: DataTypes.STRING,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    telefone1: DataTypes.STRING,
    telefone2: DataTypes.STRING,
    celular: DataTypes.STRING,
    foto: DataTypes.STRING,
    pk_clinica: DataTypes.INTEGER,
    email: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    data_nasc: DataTypes.STRING,
    cep: DataTypes.STRING,
    profissao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pacientes',
  });
  return pacientes;
};