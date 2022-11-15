const { Model, DataTypes } = require('sequelize')

class Contas_pagar extends Model {
  static init(sequelize) {
    super.init({
      unidade: DataTypes.STRING,
      fornecedor: DataTypes.STRING,
      vencimento: DataTypes.STRING,
      documento: DataTypes.STRING,
      historico: DataTypes.STRING,
      valor: DataTypes.DECIMAL,
      estado_pagamento: DataTypes.STRING,
      pk_clinica: DataTypes.INTEGER,
      pk_despesa_item: DataTypes.INTEGER
    }, {
      tableName: 'contas_pagar',
      sequelize
    })
  }
}

module.exports = Contas_pagar