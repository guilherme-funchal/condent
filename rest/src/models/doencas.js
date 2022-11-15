const { Model, DataTypes } = require('sequelize')

class Doencas extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING
    }, {
      tableName: 'doencas',
      sequelize
    })
  }
}

module.exports = Doencas