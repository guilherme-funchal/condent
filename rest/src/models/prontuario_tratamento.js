const { Model, DataTypes } = require('sequelize')

class Prontuario_tratamento extends Model {
  static init(sequelize) {
    super.init({
      descricao: DataTypes.STRING,
      cod_tratamento: DataTypes.INTEGER,
      data: DataTypes.STRING,
    }, {
      tableName: 'prontuario_tratamento',
      sequelize
    })
  }
}

module.exports = Prontuario_tratamento