'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recibos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recibos.init({
    data: DataTypes.STRING,
    valor: DataTypes.DECIMAL,
    prestador: DataTypes.STRING,
    responsavel: DataTypes.STRING,
    cpf: DataTypes.STRING,
    descricao: DataTypes.STRING,
    observacoes: DataTypes.STRING,
    pk_clinica: DataTypes.INTEGER,
    codigo_paciente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'recibos',
  });
  return recibos;
};
