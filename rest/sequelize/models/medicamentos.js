'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  medicamentos.init({
    nome: DataTypes.STRING,
    tipo: DataTypes.STRING,
    via: DataTypes.STRING,
    posologia: DataTypes.STRING,
    observacoes: DataTypes.STRING,
    pk_clinica: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'medicamentos',
  });
  return medicamentos;
};