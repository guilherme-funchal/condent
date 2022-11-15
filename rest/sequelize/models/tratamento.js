'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tratamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tratamento.init({
    descricao: DataTypes.STRING,
    cod_paciente: DataTypes.INTEGER,
    forma_pagamento: DataTypes.STRING,
    situacao: DataTypes.STRING,
    tipo: DataTypes.STRING,
    data_inicio: DataTypes.STRING,
    data_fim: DataTypes.STRING,
    cod_unidade: DataTypes.INTEGER,
    cod_convenio: DataTypes.INTEGER,
    pk_clinica: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tratamento',
  });
  return tratamento;
};