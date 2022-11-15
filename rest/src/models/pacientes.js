const { Model, DataTypes } = require('sequelize')

class Pacientes extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      sexo: DataTypes.STRING,
      cpf: DataTypes.STRING,
      documento: DataTypes.STRING,
      endereco: DataTypes.STRING,
      complemento: DataTypes.STRING,
      bairro: DataTypes.STRING,
      cidade: DataTypes.STRING,
      telefone1: DataTypes.STRING,
      telefone2: DataTypes.STRING,
      celular: DataTypes.STRING,
      foto: DataTypes.STRING,
      pk_clinica: DataTypes.INTEGER,
      email: DataTypes.STRING,
      facebook: DataTypes.STRING,
      instagram: DataTypes.STRING,
      data_nasc: DataTypes.STRING,
      cep: DataTypes.STRING,
      profissao: DataTypes.STRING
    }, {
      tableName: 'pacientes',
      sequelize
    })
  }
}

module.exports = Pacientes