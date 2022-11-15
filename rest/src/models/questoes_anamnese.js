'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class questoes_anamnese extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  questoes_anamnese.init({
    pergunta: DataTypes.STRING,
    pk_clinica: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'questoes_anamnese',
  });
  return questoes_anamnese;
};