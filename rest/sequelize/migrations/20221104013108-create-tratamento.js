'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tratamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      cod_paciente: {
        type: Sequelize.INTEGER
      },
      forma_pagamento: {
        type: Sequelize.STRING
      },
      situacao: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      data_inicio: {
        type: Sequelize.STRING
      },
      data_fim: {
        type: Sequelize.STRING
      },
      cod_unidade: {
        type: Sequelize.INTEGER
      },
      cod_convenio: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('tratamentos');
  }
};