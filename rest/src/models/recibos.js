const { Model, DataTypes } = require('sequelize')

class Recibos extends Model {
  static init(sequelize) {
    super.init({
      data: DataTypes.STRING,
      valor: DataTypes.DECIMAL,
      prestador: DataTypes.STRING,
      responsavel: DataTypes.STRING,
      cpf: DataTypes.STRING,
      descricao: DataTypes.STRING,
      observacoes: DataTypes.STRING,
      pk_clinica: DataTypes.INTEGER,
      codigo_paciente: DataTypes.INTEGER
    }, {
      tableName: 'recibos',
      sequelize
    })
  }
}

module.exports = Recibos