const { Model, DataTypes } = require('sequelize')

class Especialidades extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      pk_clinica: DataTypes.INTEGER
    }, {
      tableName: 'especialidades',
      sequelize
    })
  }
}

module.exports = Especialidades