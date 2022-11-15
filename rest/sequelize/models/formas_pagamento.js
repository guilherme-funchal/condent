'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class formas_pagamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  formas_pagamento.init({
    nome: DataTypes.STRING,
    pk_clinica: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'formas_pagamento',
  });
  return formas_pagamento;
};