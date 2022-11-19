const { Model, DataTypes } = require('sequelize')

class Situacoes_agenda extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      descricao: DataTypes.STRING,
      pk_clinica: DataTypes.INTEGER
    }, {
      tableName: 'situacoes_agenda',
      sequelize
    })
  }
}

module.exports = Situacoes_agenda