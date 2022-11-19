const { Model, DataTypes } = require('sequelize')

class Tratamentos extends Model {
  static init(sequelize) {
    super.init({
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
      tableName: 'tratamentos',
      sequelize
    })
  }
}

module.exports = Tratamentos