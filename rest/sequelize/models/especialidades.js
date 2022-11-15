'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class especialidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  especialidades.init({
    nome: DataTypes.STRING,
    pk_clinica: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'especialidades',
  });
  return especialidades;
};