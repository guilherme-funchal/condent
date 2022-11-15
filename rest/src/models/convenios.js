const { Model, DataTypes } = require('sequelize')

class Convenios extends Model {
  static init(sequelize) {
    super.init({
      operadora: DataTypes.STRING,
      codigo_cred: DataTypes.INTEGER,
      tabela: DataTypes.STRING,
      valor: DataTypes.DECIMAL,
      observacoes: DataTypes.STRING,
      pk_clinica: DataTypes.INTEGER
    }, {
      tableName: 'convenios',
      sequelize
    })
  }
}

module.exports = Convenios