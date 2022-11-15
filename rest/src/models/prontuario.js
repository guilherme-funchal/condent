const { Model, DataTypes } = require('sequelize')

class Prontuario extends Model {
  static init(sequelize) {
    super.init({
      descricao: DataTypes.STRING,
      cod_paciente: DataTypes.INTEGER,
      data: DataTypes.STRING
    }, {
      tableName: 'prontuario',
      sequelize
    })
  }
}

module.exports = Prontuario