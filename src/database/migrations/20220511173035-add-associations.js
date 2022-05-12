module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'services', // name of Source model
      'typeservicesId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'typeservices', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    ).then(() => {
      // Payment hasOne Order
      return queryInterface.addColumn(
        'services', // name of Target model
        'userId', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users', // name of Source model
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'services', // name of Source model
      'typeservicesId' // key we want to remove
    ).then(() => {
      // remove Payment hasOne Order
      return queryInterface.removeColumn(
        'services', // name of the Target model
        'userId' // key we want to remove
      );
    });
  }
};