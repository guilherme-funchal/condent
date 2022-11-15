
const { Model, DataTypes } = require('sequelize')

class Procedimentos extends Model {
  static init(sequelize) {
    super.init({
      descricao: DataTypes.STRING,
      cod_tratamento: DataTypes.INTEGER,
      regiao: DataTypes.STRING,
      situacao: DataTypes.STRING,
      cod_profissional: DataTypes.INTEGER,
      data_final: DataTypes.STRING,
      observacao: DataTypes.STRING,
      pk_clinica: DataTypes.INTEGER,
      valor: DataTypes.DECIMAL,
      data_inicio: DataTypes.STRING
    }, {
      tableName: 'procedimentos',
      sequelize
    })
  }
}

module.exports = Procedimentos