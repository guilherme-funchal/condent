'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class itens_orcamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  itens_orcamento.init({
    descricao: DataTypes.STRING,
    cod_orcamento: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'itens_orcamento',
  });
  return itens_orcamento;
};