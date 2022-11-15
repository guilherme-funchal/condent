const { Model, DataTypes } = require('sequelize')

class Despesas extends Model {
  static init(sequelize) {
    super.init({
      fornecedor_pk: DataTypes.INTEGER,
      data: DataTypes.STRING,
      documento: DataTypes.STRING,
      valor: DataTypes.DECIMAL,
      fk_clinica: DataTypes.INTEGER,
      descricao: DataTypes.STRING
    }, {
      tableName: 'despesas',
      sequelize
    })
  }
}

module.exports = Despesas