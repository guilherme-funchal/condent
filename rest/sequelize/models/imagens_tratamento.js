'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imagens_tratamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  imagens_tratamento.init({
    arquivo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    cod_tratamento: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'imagens_tratamento',
  });
  return imagens_tratamento;
};