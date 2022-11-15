'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estoques extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  estoques.init({
    nome: DataTypes.STRING,
    inicial: DataTypes.INTEGER,
    minimo: DataTypes.INTEGER,
    atual: DataTypes.INTEGER,
    pk_clinica: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'estoques',
  });
  return estoques;
};