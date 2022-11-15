const { Model, DataTypes } = require('sequelize')

class Fornecedores extends Model {
  static init(sequelize) {
    super.init({
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
      tableName: 'fornecedores',
      sequelize
    })
  }
}

module.exports = Fornecedores