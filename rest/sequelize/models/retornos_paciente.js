'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class retornos_paciente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  retornos_paciente.init({
    cod_paciente: DataTypes.INTEGER,
    cod_profissional: DataTypes.INTEGER,
    data: DataTypes.STRING,
    hora: DataTypes.STRING,
    cod_retorno: DataTypes.INTEGER,
    observacoes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'retornos_paciente',
  });
  return retornos_paciente;
};