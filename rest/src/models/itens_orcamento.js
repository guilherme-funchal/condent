const { Model, DataTypes } = require('sequelize')

class ItensOrcamento extends Model {
  static init(sequelize) {
    super.init({
      descricao: DataTypes.STRING,
      cod_orcamento: DataTypes.INTEGER,
      valor: DataTypes.DECIMAL
    }, {
      tableName: 'itens_orcamento',
      sequelize
    })
  }
}

module.exports = ItensOrcamento