const { Model, DataTypes } = require('sequelize')

class Clinica extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      cnpj: DataTypes.STRING
    }, {
      tableName: 'clinicas',
      sequelize
    })
  }
}

module.exports = Clinica
