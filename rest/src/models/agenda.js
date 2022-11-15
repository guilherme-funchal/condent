const { Model, DataTypes } = require('sequelize')

class Agenda extends Model {
  static init(sequelize) {
    super.init({
      cod_paciente: DataTypes.INTEGER,
      cod_profissional: DataTypes.INTEGER,
      cod_unidade: DataTypes.INTEGER,
      pk_clinica: DataTypes.STRING,
      dia: DataTypes.STRING,
      titulo: DataTypes.STRING,
      inicio: DataTypes.STRING,
      fim: DataTypes.STRING
    }, {
      tableName: 'agendas',
      sequelize
    })
  }
}

module.exports = Agenda
