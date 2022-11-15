'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class procedimentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  procedimentos.init({
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
    sequelize,
    modelName: 'procedimentos',
  });
  return procedimentos;
};