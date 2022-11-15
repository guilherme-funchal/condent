'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fornecedores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fornecedores.init({
    fornecedor: DataTypes.STRING,
    razao_social: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    ie: DataTypes.STRING,
    endereco: DataTypes.STRING,
    bairro: DataTypes.STRING,
    pk_clinica: DataTypes.INTEGER,
    cidade: DataTypes.STRING,
    whatsapp: DataTypes.STRING,
    email: DataTypes.STRING,
    cep: DataTypes.STRING,
    observacoes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fornecedores',
  });
  return fornecedores;
};