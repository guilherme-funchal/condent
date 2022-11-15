'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contas_receber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contas_receber.init({
    valor: DataTypes.DECIMAL,
    historico: DataTypes.STRING,
    pk_clinica: DataTypes.INTEGER,
    pk_plano_pagamento: DataTypes.INTEGER,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contas_receber',
  });
  return contas_receber;
};