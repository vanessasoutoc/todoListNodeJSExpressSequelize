'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('tasks', [{
      description: 'Ir ao supermercado',
      date: '2018-05-26 12:00:00',
      finished: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Ir ao banco',
      date: '2018-05-26 14:00:00',
      finished: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tasks', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};