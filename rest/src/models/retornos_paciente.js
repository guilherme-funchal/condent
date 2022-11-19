const { Model, DataTypes } = require('sequelize')

class Retornos_paciente extends Model {
  static init(sequelize) {
    super.init({
      cod_paciente: DataTypes.INTEGER,
      cod_profissional: DataTypes.INTEGER,
      data: DataTypes.STRING,
      hora: DataTypes.STRING,
      cod_retorno: DataTypes.INTEGER,
      observacoes: DataTypes.STRING
    }, {
      tableName: 'retornos_paciente',
      sequelize
    })
  }
}

module.exports = Retornos_paciente