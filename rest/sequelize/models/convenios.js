'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class convenios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  convenios.init({
    operadora: DataTypes.STRING,
    codigo_cred: DataTypes.INTEGER,
    tabela: DataTypes.STRING,
    valor: DataTypes.DECIMAL,
    observacoes: DataTypes.STRING,
    pk_clinica: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'convenios',
  });
  return convenios;
};