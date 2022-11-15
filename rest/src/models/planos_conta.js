const { Model, DataTypes } = require('sequelize')

class Planos_conta extends Model {
  static init(sequelize) {
    super.init({
      plano: DataTypes.STRING,
      categoria: DataTypes.STRING,
      descricao: DataTypes.STRING,
      pk_clinica: DataTypes.INTEGER
    }, {
      tableName: 'planos_contas',
      sequelize
    })
  }
}

module.exports = Planos_conta
