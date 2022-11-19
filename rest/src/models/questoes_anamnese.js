const { Model, DataTypes } = require('sequelize')

class Questoes_anamnese extends Model {
  static init(sequelize) {
    super.init({
      pergunta: DataTypes.STRING,
      pk_clinica: DataTypes.INTEGER
    }, {
      tableName: 'questoes_anamnese',
      sequelize
    })
  }
}

module.exports = Questoes_anamnese