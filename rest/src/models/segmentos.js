const { Model, DataTypes } = require('sequelize')

class Segmentos extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      pk_clinica: DataTypes.INTEGER
    }, {
      tableName: 'segmentos',
      sequelize
    })
  }
}

module.exports = Segmentos