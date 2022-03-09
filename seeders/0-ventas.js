module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ventas', [{
      //title: 'V1',
      //imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      //description: 'Built using Vanilla JavaScript, HTML, and CSS',
      clienteId: 1,
      vehiculoId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      //title: 'V2',
      //imageUrl: 'https://www.stickpng.com/assets/images/584830f5cef1014c0b5e4aa1.png',
      //description: 'Built using React & a 3rd-party API.',
      clienteId: 3,
      vehiculoId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      //title: 'V3',
      //imageUrl: 'https://expressjs.com/images/express-facebook-share.png',
      //description: 'Built using Express & React.',
      clienteId: 2,
      vehiculoId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      //title: 'V4',
      //imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png',
      //description: 'Built using Rails & React.',
      clienteId: 1,
      vehiculoId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ventas', null, {});
  }
};
