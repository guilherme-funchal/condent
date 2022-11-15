'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class itens_despesas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  itens_despesas.init({
    codigo_despesa: DataTypes.INTEGER,
    vencimento: DataTypes.STRING,
    valor: DataTypes.DECIMAL,
    parcela: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'itens_despesas',
  });
  return itens_despesas;
};