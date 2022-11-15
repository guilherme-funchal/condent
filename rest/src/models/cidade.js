const { Model, DataTypes } = require('sequelize')

class Cidade extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      cod_estado: DataTypes.INTEGER
    }, {
      tableName: 'cidades',
      sequelize
    })
  }
}

module.exports = Cidade
