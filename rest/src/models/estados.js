const { Model, DataTypes } = require('sequelize')

class Estados extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING
    }, {
      tableName: 'estados',
      sequelize
    })
  }
}

module.exports = Estados