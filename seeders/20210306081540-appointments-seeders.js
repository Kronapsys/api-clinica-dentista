'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Appointments",
      [
        {
          date: "2021-03-10T10:45:00.00",
          description: "No siento las muelas",
          createdAt: new Date(),
          updatedAt: new Date(),
          customerId: 2,
        },
        {
          date: "2021-03-09T10:30:00.00",
          description: "Empaste y limpieza",
          createdAt: new Date(),
          updatedAt: new Date(),
          customerId: 1
        },
        {
          date: "2021-03-11T12:00:00.00",
          description: "Ortodoncia",
          createdAt: new Date(),
          updatedAt: new Date(),
          customerId: 3
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {

  }
};
