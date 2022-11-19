const { Model, DataTypes } = require('sequelize')

class Tipo_agendamento extends Model {
  static init(sequelize) {
    super.init({
      sigla: DataTypes.STRING,
      nome: DataTypes.STRING,
      pk_clinica: DataTypes.INTEGER
    }, {
      tableName: 'tipo_agendamento',
      sequelize
    })
  }
}

module.exports = Tipo_agendamento