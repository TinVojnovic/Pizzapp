'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const menuItems = [
      {
        name: "Calzone",
        type: "pizza",
        prices: [25, 40, 55],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Frutti di Mare",
        type: "pizza",
        prices: [40, 60, 85],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Margharita",
        type: "pizza",
        prices: [35, 55, 90],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    return queryInterface.bulkInsert('Menu', menuItems, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Menu', null, {});
  }
};
