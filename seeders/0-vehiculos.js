module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vehiculos', [{
      modelo:   'Audi',
      anio:     '2004',
      color:    'negro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelo:   'BMW',
      anio:     '2010',
      color:    'Blanco',
      createdAt: new Date(),
      updatedAt: new Date()    },
    {
      modelo:   'Mercedes',
      anio:     '2018',
      color:    'negro',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Vehiculos', null, {});
  }
};
