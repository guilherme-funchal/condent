'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class despesas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  despesas.init({
    fornecedor_pk: DataTypes.INTEGER,
    data: DataTypes.STRING,
    documento: DataTypes.STRING,
    valor: DataTypes.DECIMAL,
    fk_clinica: DataTypes.INTEGER,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'despesas',
  });
  return despesas;
};