'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
      },
      repeat: {
        type: Sequelize.BOOLEAN,
        notNull: true,
      },
      repeatDay: {
        type: Sequelize.STRING
      },
      repeatDay: {
        type: Sequelize.STRING
      },
      repeatLimit: {
        type: Sequelize.DATEONLY
      }
      
    }, {
      timestamps: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('services');
  }
};