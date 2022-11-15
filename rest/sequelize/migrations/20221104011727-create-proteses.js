'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('proteses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      paciente: {
        type: Sequelize.INTEGER
      },
      solicitante: {
        type: Sequelize.STRING
      },
      protetico: {
        type: Sequelize.STRING
      },
      tabela_serv: {
        type: Sequelize.STRING
      },
      regiao: {
        type: Sequelize.STRING
      },
      quantidade: {
        type: Sequelize.STRING
      },
      cor: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.DECIMAL
      },
      entrega: {
        type: Sequelize.STRING
      },
      detalhes: {
        type: Sequelize.STRING
      },
      pk_clinica: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('proteses');
  }
};