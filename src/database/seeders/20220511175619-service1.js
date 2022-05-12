'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('services', [{
      title: 'Service test',
      description: "lorem ipsum",
      date: new Date(),
      repeat: true,
      typeservicesId: 1,
      userId: 1,
      repeatDay: '1,2',
      repeatLimit: new Date(Date.UTC(2022,5,15))
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('services', null, {});
  }
};
