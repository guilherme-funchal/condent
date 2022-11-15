const { Model, DataTypes } = require('sequelize')

class Perfis extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    acl: DataTypes.STRING,
    pk_clinica: DataTypes.INTEGER
    }, {
      tableName: 'perfis',
      sequelize
    })
  }
}

module.exports = Perfis