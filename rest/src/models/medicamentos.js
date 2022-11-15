const { Model, DataTypes } = require('sequelize')

class Medicamentos extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      tipo: DataTypes.STRING,
      via: DataTypes.STRING,
      posologia: DataTypes.STRING,
      observacoes: DataTypes.STRING,
      pk_clinica: DataTypes.INTEGER
    }, {
      tableName: 'medicamentos',
      sequelize
    })
  }
}

module.exports = Medicamentos