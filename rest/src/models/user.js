const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init({
      email: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      pass_hash: DataTypes.STRING,
      pass_salt: DataTypes.STRING,
      role: DataTypes.STRING,
      last_login: DataTypes.STRING,
      pk_clinica: DataTypes.STRING,
      facebook: DataTypes.STRING, 
      instagram: DataTypes.STRING,
      cargo: DataTypes.STRING, 
      tratamento: DataTypes.STRING,   
      cpf: DataTypes.STRING,      
      cro: DataTypes.STRING
    }, {
      tableName: 'usuarios',
      sequelize
    })
  }
}

module.exports = User
