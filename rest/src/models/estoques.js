const { Model, DataTypes } = require('sequelize')

class Estoques extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      inicial: DataTypes.INTEGER,
      minimo: DataTypes.INTEGER,
      atual: DataTypes.INTEGER,
      pk_clinica: DataTypes.INTEGER
    }, {
      tableName: 'estoques',
      sequelize
    })
  }
}

module.exports = Estoques