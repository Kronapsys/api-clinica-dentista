"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "customers",
      [
        {
          name: "Rob",
          surname: "Sanchez",
          address: "C/ falsa, 123",
          telephone: "157458985",
          email: "rob@rob.com",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vic",
          surname: "Sanchis",
          address: "C/ de la piruleta, 123",
          telephone: "159852369",
          email: "vic@vic.com",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "David",
          surname: "Ochando",
          address: "C/ WayCo, 123",
          telephone: "951357865",
          email: "dav@dav.com",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
