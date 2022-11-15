const { Model, DataTypes } = require('sequelize')

class Plano_Pagamento extends Model {
  static init(sequelize) {
    super.init({
    parcela: DataTypes.STRING,
    cod_tratamento: DataTypes.INTEGER,
    valor: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    data: DataTypes.STRING,
    observacao: DataTypes.STRING,
    }, {
      tableName: 'plano_pagamento',
      sequelize
    })
  }
}

module.exports = Plano_Pagamento

