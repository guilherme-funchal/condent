'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class prontuario_tratamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  prontuario_tratamento.init({
    descricao: DataTypes.STRING,
    cod_tratamento: DataTypes.INTEGER,
    data: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'prontuario_tratamento',
  });
  return prontuario_tratamento;
};