'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContasBanco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ContasBanco.init({
    prestador: DataTypes.STRING,
    banco: DataTypes.STRING,
    agencia: DataTypes.STRING,
    conta: DataTypes.STRING,
    cpf: DataTypes.STRING,
    pk_clinica: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ContasBanco',
  });
  return ContasBanco;
};