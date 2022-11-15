const { Model, DataTypes } = require('sequelize')

class ImagensTratamento extends Model {
  static init(sequelize) {
    super.init({
      arquivo: DataTypes.STRING,
      descricao: DataTypes.STRING,
      cod_tratamento: DataTypes.INTEGER
    }, {
      tableName: 'imagens_tratamento',
      sequelize
    })
  }
}

module.exports = ImagensTratamento