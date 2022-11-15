const { Model, DataTypes } = require('sequelize')

class Contas_receber extends Model {
  static init(sequelize) {
    super.init({
      valor: DataTypes.DECIMAL,
      historico: DataTypes.STRING,
      pk_clinica: DataTypes.INTEGER,
      pk_plano_pagamento: DataTypes.INTEGER,
      estado: DataTypes.STRING
    }, {
      tableName: 'contas_receber',
      sequelize
    })
  }
}

module.exports = Contas_receber