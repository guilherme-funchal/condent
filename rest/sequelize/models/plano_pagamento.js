'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class plano_pagamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  plano_pagamento.init({
    parcela: DataTypes.INTEGER,
    cod_tratamento: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL,
    estado: DataTypes.STRING,
    data: DataTypes.STRING,
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'plano_pagamento',
  });
  return plano_pagamento;
};