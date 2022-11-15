'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contas_pagar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contas_pagar.init({
    documento: DataTypes.STRING,
    estado_pagamento: DataTypes.STRING,
    fornecedor: DataTypes.STRING,
    historico: DataTypes.STRING,
    pk_clinica: DataTypes.INTEGER,
    pk_despesa_item: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL,
    vencimento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contas_pagar',
  });
  return contas_pagar;
};