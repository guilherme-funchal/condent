'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pacientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      sexo: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      documento: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      complemento: {
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      telefone1: {
        type: Sequelize.STRING
      },
      telefone2: {
        type: Sequelize.STRING
      },
      celular: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      pk_clinica: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      facebook: {
        type: Sequelize.STRING
      },
      instagram: {
        type: Sequelize.STRING
      },
      data_nasc: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING
      },
      profissao: {
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
    await queryInterface.dropTable('pacientes');
  }
};