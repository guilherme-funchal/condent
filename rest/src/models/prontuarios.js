'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class prontuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  prontuarios.init({
    descricao: DataTypes.STRING,
    cod_paciente: DataTypes.INTEGER,
    data: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'prontuarios',
  });
  return prontuarios;
};