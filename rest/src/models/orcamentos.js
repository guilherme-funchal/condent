const { Model, DataTypes } = require('sequelize')

class Orcamentos extends Model {
  static init(sequelize) {
    super.init({
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
      tableName: 'orcamentos',
      sequelize
    })
  }
}

module.exports = Orcamentos