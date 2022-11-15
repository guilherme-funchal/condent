const { Model, DataTypes } = require('sequelize')

class ItensDespesas extends Model {
  static init(sequelize) {
    super.init({
      codigo_despesa: DataTypes.INTEGER,
      vencimento: DataTypes.STRING,
      valor: DataTypes.DECIMAL,
      parcela: DataTypes.INTEGER
    }, {
      tableName: 'itens_despesas',
      sequelize
    })
  }
}

module.exports = ItensDespesas