const { Model, DataTypes } = require('sequelize')

class Retornos extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      pk_clinica: DataTypes.INTEGER
    }, {
      tableName: 'retornos',
      sequelize
    })
  }
}

module.exports = Retornos