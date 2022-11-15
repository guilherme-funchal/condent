'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orcamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orcamentos.init({
    nome: DataTypes.STRING,
    cod_paciente: DataTypes.INTEGER,
    observacoes: DataTypes.STRING,
    pk_clinica: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    valor_total: DataTypes.DECIMAL,
    data: DataTypes.STRING,
    cod_tratamento: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    desconto: DataTypes.INTEGER,
    forma_pagamento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orcamentos',
  });
  return orcamentos;
};