module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('typeservices', [{
      type: 'REPOSITOR',
    },
    {
      type: 'PESQUISA DE PRECOS',
      },
    {
      type: 'CAIXA',
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('typeservices', null, {});
  }
};