const { Model, DataTypes } = require('sequelize')

class Proteses extends Model {
  static init(sequelize) {
    super.init({
      paciente: DataTypes.INTEGER,
      solicitante: DataTypes.STRING,
      protetico: DataTypes.STRING,
      tabela_serv: DataTypes.STRING,
      regiao: DataTypes.STRING,
      quantidade: DataTypes.STRING,
      cor: DataTypes.STRING,
      valor: DataTypes.DECIMAL,
      entrega: DataTypes.STRING,
      detalhes: DataTypes.STRING,
      pk_clinica: DataTypes.INTEGER
      }, {
      tableName: 'proteses',
      sequelize
    })
  }
}

module.exports = Proteses