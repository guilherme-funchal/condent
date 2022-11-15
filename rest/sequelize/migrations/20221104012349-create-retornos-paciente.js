'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('retornos_pacientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cod_paciente: {
        type: Sequelize.INTEGER
      },
      cod_profissional: {
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.STRING
      },
      hora: {
        type: Sequelize.STRING
      },
      cod_retorno: {
        type: Sequelize.INTEGER
      },
      observacoes: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('retornos_pacientes');
  }
};