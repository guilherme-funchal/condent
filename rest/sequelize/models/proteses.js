'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class proteses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  proteses.init({
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
    sequelize,
    modelName: 'proteses',
  });
  return proteses;
};