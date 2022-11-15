const { Model, DataTypes } = require('sequelize')

class FormasPagamento extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      pk_clinica: DataTypes.INTEGER
    }, {
      tableName: 'formas_pagamento',
      sequelize
    })
  }
}

module.exports = FormasPagamento