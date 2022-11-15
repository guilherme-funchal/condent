const { Model, DataTypes } = require('sequelize')

class Unidade extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      endereco: DataTypes.STRING,
      complemento: DataTypes.STRING,
      cidade: DataTypes.STRING,
      bairro: DataTypes.STRING,
      estado: DataTypes.STRING,
      pk_clinica: DataTypes.STRING
    }, {
      tableName: 'unidades',
      sequelize
    })
  }
}

module.exports = Unidade
