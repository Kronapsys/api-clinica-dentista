'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'appointments', // name of Source model
      'customer_id', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'customers', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
